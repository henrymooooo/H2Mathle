const ALLOWED_ORIGINS = new Set([
  "https://h2mathle.com",
  "https://www.h2mathle.com"
]);

const VALID_TABS = new Set(["pure", "stats", "random", "calendar", "mistakes"]);
const VALID_TOOLS = new Set(["mf27", "scratchpad", "ask"]);
const VALID_MODES = new Set(["daily_pure", "daily_stats", "past_day", "practice"]);
const VALID_CATEGORIES = new Set(["pure", "stats", ""]);
const VALID_ACTIONS = new Set([
  "check_ok",
  "check_bad",
  "self_ok",
  "self_bad",
  "reveal",
  "override_ok"
]);
const VALID_QSTATUSES = new Set(["attempted", "ok", "bad"]);
const BOT_UA_RE = /bot|crawler|spider|headless|lighthouse|pingdom|uptime|slurp|bingpreview/i;
const QID_RE = /^[A-Za-z0-9_-]{3,48}$/;
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;
const RANGE_DAYS = new Set(["1", "7", "14", "30", "90", "all"]);

function getStudyDay(nowMs = Date.now()) {
  // SGT is UTC+8; the 6:00 AM SGT reset corresponds to UTC+2.
  return new Date(nowMs + 2 * 3600_000).toISOString().slice(0, 10);
}

function getRangeStartDay(daysParam, nowMs = Date.now()) {
  if (daysParam === "all") return "0000-00-00";
  const count = Number(daysParam);
  const offsetDays = Math.max(0, count - 1);
  return getStudyDay(nowMs - offsetDays * 86400_000);
}

function isAllowedOrigin(origin) {
  return typeof origin === "string" && ALLOWED_ORIGINS.has(origin);
}

function corsHeadersForIngest(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
  if (isAllowedOrigin(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function corsHeadersForPublicRead(origin) {
  return {
    "Access-Control-Allow-Origin": isAllowedOrigin(origin) ? origin : "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Vary": "Origin"
  };
}

function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...extraHeaders
    }
  });
}

function sanitizeReferrerHost(raw) {
  if (typeof raw !== "string") return "";
  let host = raw.trim().slice(0, 120).toLowerCase();
  if (!host) return "";
  host = host.replace(/^https?:\/\//, "").split(/[/?#:]/)[0];
  if (!host || host === "h2mathle.com" || host === "www.h2mathle.com") return "";
  if (!/^[a-z0-9.-]+$/.test(host)) return "";
  return host;
}

function clampInt(val, min, max, fallback = min) {
  if (typeof val !== "number" || !Number.isFinite(val)) return fallback;
  const intVal = Math.trunc(val);
  if (intVal < min) return min;
  if (intVal > max) return max;
  return intVal;
}

async function readBoundedText(request, maxBytes = 2048) {
  const contentLengthHeader = request.headers.get("Content-Length");
  if (contentLengthHeader !== null) {
    const contentLength = Number(contentLengthHeader);
    if (Number.isFinite(contentLength) && contentLength > maxBytes) {
      return null;
    }
  }
  if (!request.body) return "";
  const reader = request.body.getReader();
  const chunks = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        totalBytes += value.byteLength;
        if (totalBytes > maxBytes) {
          await reader.cancel().catch(() => {});
          return null;
        }
        chunks.push(value);
      }
    }
  } finally {
    reader.releaseLock();
  }
  const merged = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(merged);
}

async function makeAnonHash(secret, studyDay, ip, ua) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(studyDay + "|" + ip + "|" + ua)
  );
  const bytes = new Uint8Array(sig, 0, 8);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

async function verifyBearerToken(authHeader, expectedSecret) {
  if (typeof authHeader !== "string" || typeof expectedSecret !== "string" || !expectedSecret) {
    return false;
  }
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  if (!match) return false;
  const provided = match[1].trim();
  if (!provided) return false;

  const encoder = new TextEncoder();
  const [providedHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(provided)),
    crypto.subtle.digest("SHA-256", encoder.encode(expectedSecret))
  ]);
  return crypto.subtle.timingSafeEqual(providedHash, expectedHash);
}

function upsertVisitorStmt(db, { studyDay, anonHash, referrerHost, country, device, nowSec }) {
  return db
    .prepare(
      "INSERT INTO daily_visitors (study_day, anon_hash, referrer_host, country, device, first_seen_at, last_seen_at) " +
      "VALUES (?, ?, ?, ?, ?, ?, ?) " +
      "ON CONFLICT (study_day, anon_hash) DO UPDATE SET " +
      "referrer_host = CASE WHEN daily_visitors.referrer_host = '' AND excluded.referrer_host != '' THEN excluded.referrer_host ELSE daily_visitors.referrer_host END, " +
      "country = CASE WHEN daily_visitors.country = '' AND excluded.country != '' THEN excluded.country ELSE daily_visitors.country END, " +
      "last_seen_at = excluded.last_seen_at"
    )
    .bind(studyDay, anonHash, referrerHost, country, device, nowSec, nowSec);
}

function incrementCounterStmt(db, studyDay, metric, delta = 1) {
  return db
    .prepare(
      "INSERT INTO daily_counters (study_day, metric, count) VALUES (?, ?, ?) " +
      "ON CONFLICT (study_day, metric) DO UPDATE SET count = daily_counters.count + excluded.count"
    )
    .bind(studyDay, metric, delta);
}

async function handleIngest(request, env) {
  const origin = request.headers.get("Origin");
  if (!isAllowedOrigin(origin)) {
    return jsonResponse({ error: "Forbidden origin" }, 403);
  }
  const corsHeaders = corsHeadersForIngest(origin);

  const ua = request.headers.get("User-Agent") || "";
  if (BOT_UA_RE.test(ua)) {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const rawBody = await readBoundedText(request, 2048);
  if (rawBody === null) {
    return jsonResponse({ error: "Payload too large" }, 413, corsHeaders);
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch (_) {
    return jsonResponse({ error: "Invalid JSON" }, 400, corsHeaders);
  }

  if (!payload || typeof payload !== "object" || typeof payload.type !== "string") {
    return jsonResponse({ error: "Invalid event payload" }, 400, corsHeaders);
  }
  if (!env.HASH_SECRET) {
    throw new Error("HASH_SECRET is not configured");
  }

  const nowMs = Date.now();
  const studyDay = getStudyDay(nowMs);
  const nowSec = Math.floor(nowMs / 1000);
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const anonHash = await makeAnonHash(env.HASH_SECRET, studyDay, ip, ua);
  const country = request.cf && typeof request.cf.country === "string" ? request.cf.country.slice(0, 8) : "";
  const device = /mobile|android|iphone|ipad|ipod/i.test(ua) ? "mobile" : "desktop";

  const stmts = [];
  let dailySolveMode = null;

  switch (payload.type) {
    case "visit": {
      const refHost = sanitizeReferrerHost(payload.ref);
      const tab = typeof payload.tab === "string" && VALID_TABS.has(payload.tab) ? payload.tab : null;
      stmts.push(
        upsertVisitorStmt(env.DB, { studyDay, anonHash, referrerHost: refHost, country, device, nowSec }),
        incrementCounterStmt(env.DB, studyDay, "pageview", 1)
      );
      if (tab) {
        stmts.push(incrementCounterStmt(env.DB, studyDay, "tab:" + tab, 1));
      }
      break;
    }

    case "tab": {
      if (typeof payload.tab !== "string" || !VALID_TABS.has(payload.tab)) {
        return jsonResponse({ error: "Invalid tab" }, 400, corsHeaders);
      }
      stmts.push(incrementCounterStmt(env.DB, studyDay, "tab:" + payload.tab, 1));
      break;
    }

    case "tool": {
      if (typeof payload.tool !== "string" || !VALID_TOOLS.has(payload.tool)) {
        return jsonResponse({ error: "Invalid tool" }, 400, corsHeaders);
      }
      stmts.push(incrementCounterStmt(env.DB, studyDay, "tool:" + payload.tool, 1));
      break;
    }

    case "feedback": {
      stmts.push(incrementCounterStmt(env.DB, studyDay, "feedback:sent", 1));
      break;
    }

    case "progress": {
      const qId = payload.qId;
      const mode = payload.mode;
      const category = typeof payload.category === "string" ? payload.category : "";
      const action = payload.action;
      const qStatus = payload.qStatus;

      if (
        typeof qId !== "string" || !QID_RE.test(qId) ||
        typeof mode !== "string" || !VALID_MODES.has(mode) ||
        !VALID_CATEGORIES.has(category) ||
        typeof action !== "string" || !VALID_ACTIONS.has(action) ||
        typeof qStatus !== "string" || !VALID_QSTATUSES.has(qStatus)
      ) {
        return jsonResponse({ error: "Invalid progress fields" }, 400, corsHeaders);
      }

      const partsTotal = clampInt(payload.partsTotal, 1, 30, 1);
      const partsDone = clampInt(payload.partsDone, 0, partsTotal, 0);
      const partsOk = clampInt(payload.partsOk, 0, partsTotal, 0);
      const elapsedSec = clampInt(payload.elapsedSec, 0, 86400, 0);
      const autoInc = action === "check_ok" || action === "check_bad" ? 1 : 0;
      const revealInc = action === "reveal" ? 1 : 0;
      const isDailySolve = (mode === "daily_pure" || mode === "daily_stats") && qStatus === "ok";

      stmts.push(
        upsertVisitorStmt(env.DB, { studyDay, anonHash, referrerHost: "", country, device, nowSec }),
        env.DB
          .prepare(
            "INSERT INTO question_outcomes (" +
            "study_day, anon_hash, question_id, mode, category, status, " +
            "parts_done, parts_total, parts_ok, auto_checks, reveals, elapsed_sec, first_at, updated_at" +
            ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) " +
            "ON CONFLICT (study_day, anon_hash, question_id, mode) DO UPDATE SET " +
            "category = CASE WHEN excluded.category != '' THEN excluded.category ELSE question_outcomes.category END, " +
            "status = excluded.status, " +
            "parts_done = excluded.parts_done, " +
            "parts_total = MAX(question_outcomes.parts_total, excluded.parts_total), " +
            "parts_ok = excluded.parts_ok, " +
            "auto_checks = question_outcomes.auto_checks + excluded.auto_checks, " +
            "reveals = question_outcomes.reveals + excluded.reveals, " +
            "elapsed_sec = MAX(question_outcomes.elapsed_sec, excluded.elapsed_sec), " +
            "updated_at = excluded.updated_at"
          )
          .bind(
            studyDay, anonHash, qId, mode, category, qStatus,
            partsDone, partsTotal, partsOk, autoInc, revealInc, elapsedSec, nowSec, nowSec
          ),
        incrementCounterStmt(env.DB, studyDay, "part:" + action, 1)
      );

      if (isDailySolve) {
        dailySolveMode = mode;
        stmts.push(
          env.DB
            .prepare(
              "INSERT OR IGNORE INTO daily_solvers (study_day, mode, anon_hash, solve_rank, solved_at) " +
              "SELECT ?, ?, ?, " +
              "COALESCE((SELECT MAX(solve_rank) FROM daily_solvers WHERE study_day = ? AND mode = ?), 0) + 1, ? " +
              "WHERE NOT EXISTS (SELECT 1 FROM daily_solvers WHERE study_day = ? AND mode = ? AND anon_hash = ?)"
            )
            .bind(studyDay, mode, anonHash, studyDay, mode, nowSec, studyDay, mode, anonHash),
          env.DB
            .prepare("SELECT solve_rank FROM daily_solvers WHERE study_day = ? AND mode = ? AND anon_hash = ?")
            .bind(studyDay, mode, anonHash)
        );
      }
      break;
    }

    default:
      return jsonResponse({ error: "Invalid event type" }, 400, corsHeaders);
  }

  const batchRes = await env.DB.batch(stmts);
  if (dailySolveMode) {
    const rank = Number(batchRes[batchRes.length - 1].results?.[0]?.solve_rank) || 0;
    return jsonResponse(
      { ok: true, rank, isFirst: rank === 1, mode: dailySolveMode, studyDay },
      200,
      { ...corsHeaders, "Cache-Control": "no-store" }
    );
  }
  return new Response(null, { status: 204, headers: corsHeaders });
}

async function handleDailySummary(request, env, url) {
  const origin = request.headers.get("Origin");
  const corsHeaders = corsHeadersForPublicRead(origin);
  const dayParam = url.searchParams.get("day");
  const studyDay = dayParam ? dayParam.trim() : getStudyDay();

  if (!DAY_RE.test(studyDay)) {
    return jsonResponse({ error: "Invalid day format (expected YYYY-MM-DD)" }, 400, corsHeaders);
  }

  const { results } = await env.DB
    .prepare(
      "SELECT mode, question_id, COUNT(*) AS attempted, " +
      "SUM(CASE WHEN status = 'ok' THEN 1 ELSE 0 END) AS solved, " +
      "SUM(CASE WHEN status = 'bad' THEN 1 ELSE 0 END) AS missed " +
      "FROM question_outcomes " +
      "WHERE study_day = ? AND mode IN ('daily_pure', 'daily_stats') " +
      "GROUP BY mode, question_id ORDER BY attempted DESC"
    )
    .bind(studyDay)
    .all();

  const summary = {
    studyDay,
    daily_pure: { attempted: 0, solved: 0, missed: 0, solveRate: 0, questions: [] },
    daily_stats: { attempted: 0, solved: 0, missed: 0, solveRate: 0, questions: [] }
  };

  for (const row of results || []) {
    const bucket = summary[row.mode];
    if (!bucket) continue;
    const attempted = Number(row.attempted) || 0;
    const solved = Number(row.solved) || 0;
    const missed = Number(row.missed) || 0;
    bucket.attempted += attempted;
    bucket.solved += solved;
    bucket.missed += missed;
    bucket.questions.push({
      questionId: row.question_id,
      attempted,
      solved,
      missed,
      solveRate: attempted > 0 ? Math.round((solved / attempted) * 1000) / 10 : 0
    });
  }

  for (const key of ["daily_pure", "daily_stats"]) {
    const b = summary[key];
    b.solveRate = b.attempted > 0 ? Math.round((b.solved / b.attempted) * 1000) / 10 : 0;
  }

  return jsonResponse(summary, 200, {
    ...corsHeaders,
    "Cache-Control": "public, max-age=60"
  });
}

async function handleAdminStats(request, env, url) {
  const noStoreHeaders = {
    "Cache-Control": "no-store",
    "X-Robots-Tag": "noindex, nofollow"
  };

  const authed = await verifyBearerToken(request.headers.get("Authorization"), env.ADMIN_TOKEN);
  if (!authed) {
    return jsonResponse({ error: "Unauthorized" }, 401, noStoreHeaders);
  }

  const rawDays = (url.searchParams.get("days") || "14").trim().toLowerCase();
  const daysParam = RANGE_DAYS.has(rawDays) ? rawDays : "14";
  const nowMs = Date.now();
  const today = getStudyDay(nowMs);
  const rangeStart = getRangeStartDay(daysParam, nowMs);

  const batchResults = await env.DB.batch([
    env.DB.prepare("SELECT COUNT(*) AS visitors FROM daily_visitors WHERE study_day = ?").bind(today),
    env.DB.prepare("SELECT COUNT(DISTINCT anon_hash) AS active_solvers FROM question_outcomes WHERE study_day = ?").bind(today),
    env.DB.prepare(
      "SELECT mode, COUNT(*) AS attempted, " +
      "SUM(CASE WHEN status = 'ok' THEN 1 ELSE 0 END) AS solved, " +
      "SUM(CASE WHEN status = 'bad' THEN 1 ELSE 0 END) AS missed " +
      "FROM question_outcomes WHERE study_day = ? GROUP BY mode"
    ).bind(today),
    env.DB.prepare("SELECT metric, count FROM daily_counters WHERE study_day = ?").bind(today),
    env.DB.prepare("SELECT COUNT(*) AS visitor_days FROM daily_visitors WHERE study_day >= ?").bind(rangeStart),
    env.DB.prepare(
      "SELECT COUNT(*) AS attempted, " +
      "SUM(CASE WHEN status = 'ok' THEN 1 ELSE 0 END) AS solved, " +
      "SUM(CASE WHEN status = 'bad' THEN 1 ELSE 0 END) AS missed " +
      "FROM question_outcomes WHERE study_day >= ?"
    ).bind(rangeStart),
    env.DB.prepare(
      "SELECT study_day, COUNT(*) AS visitors FROM daily_visitors WHERE study_day >= ? GROUP BY study_day ORDER BY study_day DESC"
    ).bind(rangeStart),
    env.DB.prepare(
      "SELECT study_day, metric, count FROM daily_counters WHERE study_day >= ? AND metric IN ('pageview', 'feedback:sent')"
    ).bind(rangeStart),
    env.DB.prepare(
      "SELECT study_day, mode, COUNT(*) AS attempted, " +
      "SUM(CASE WHEN status = 'ok' THEN 1 ELSE 0 END) AS solved, " +
      "SUM(CASE WHEN status = 'bad' THEN 1 ELSE 0 END) AS missed " +
      "FROM question_outcomes WHERE study_day >= ? GROUP BY study_day, mode"
    ).bind(rangeStart),
    env.DB.prepare(
      "SELECT question_id, category, COUNT(*) AS attempted, " +
      "SUM(CASE WHEN status = 'ok' THEN 1 ELSE 0 END) AS solved, " +
      "SUM(CASE WHEN status = 'bad' THEN 1 ELSE 0 END) AS missed, " +
      "SUM(auto_checks) AS total_checks, SUM(reveals) AS total_reveals " +
      "FROM question_outcomes WHERE study_day >= ? GROUP BY question_id, category ORDER BY attempted DESC LIMIT 25"
    ).bind(rangeStart),
    env.DB.prepare(
      "SELECT COALESCE(NULLIF(referrer_host, ''), 'Direct') AS referrer, COUNT(*) AS visitors " +
      "FROM daily_visitors WHERE study_day >= ? GROUP BY referrer ORDER BY visitors DESC LIMIT 15"
    ).bind(rangeStart),
    env.DB.prepare(
      "SELECT COALESCE(NULLIF(country, ''), 'Unknown') AS country, COUNT(*) AS visitors " +
      "FROM daily_visitors WHERE study_day >= ? GROUP BY country ORDER BY visitors DESC LIMIT 15"
    ).bind(rangeStart),
    env.DB.prepare(
      "SELECT COALESCE(NULLIF(device, ''), 'unknown') AS device, COUNT(*) AS visitors " +
      "FROM daily_visitors WHERE study_day >= ? GROUP BY device ORDER BY visitors DESC"
    ).bind(rangeStart),
    env.DB.prepare(
      "SELECT metric, SUM(count) AS total FROM daily_counters WHERE study_day >= ? GROUP BY metric ORDER BY total DESC"
    ).bind(rangeStart)
  ]);

  const todayVisitors = Number(batchResults[0].results?.[0]?.visitors) || 0;
  const todayActiveSolvers = Number(batchResults[1].results?.[0]?.active_solvers) || 0;

  const emptyBucket = () => ({ attempted: 0, solved: 0, missed: 0 });
  const todayModes = {
    daily_pure: emptyBucket(),
    daily_stats: emptyBucket(),
    practice: emptyBucket(),
    past_day: emptyBucket()
  };
  for (const row of batchResults[2].results || []) {
    if (todayModes[row.mode]) {
      todayModes[row.mode] = {
        attempted: Number(row.attempted) || 0,
        solved: Number(row.solved) || 0,
        missed: Number(row.missed) || 0
      };
    }
  }

  let todayPageviews = 0;
  for (const row of batchResults[3].results || []) {
    if (row.metric === "pageview") todayPageviews = Number(row.count) || 0;
  }

  const rangeVisitorDays = Number(batchResults[4].results?.[0]?.visitor_days) || 0;
  const rangeOutcomeTotals = batchResults[5].results?.[0] || {};

  const dailyMap = new Map();
  const ensureDayRow = (day) => {
    if (!dailyMap.has(day)) {
      dailyMap.set(day, {
        studyDay: day,
        visitors: 0,
        pageviews: 0,
        dailyPureAttempted: 0,
        dailyPureSolved: 0,
        dailyStatsAttempted: 0,
        dailyStatsSolved: 0,
        practiceAttempted: 0
      });
    }
    return dailyMap.get(day);
  };

  for (const row of batchResults[6].results || []) {
    ensureDayRow(row.study_day).visitors = Number(row.visitors) || 0;
  }
  let rangePageviews = 0;
  let rangeFeedbackSent = 0;
  for (const row of batchResults[7].results || []) {
    const cnt = Number(row.count) || 0;
    if (row.metric === "pageview") {
      rangePageviews += cnt;
      ensureDayRow(row.study_day).pageviews = cnt;
    } else if (row.metric === "feedback:sent") {
      rangeFeedbackSent += cnt;
    }
  }
  for (const row of batchResults[8].results || []) {
    const entry = ensureDayRow(row.study_day);
    const att = Number(row.attempted) || 0;
    const sol = Number(row.solved) || 0;
    if (row.mode === "daily_pure") {
      entry.dailyPureAttempted = att;
      entry.dailyPureSolved = sol;
    } else if (row.mode === "daily_stats") {
      entry.dailyStatsAttempted = att;
      entry.dailyStatsSolved = sol;
    } else if (row.mode === "practice") {
      entry.practiceAttempted = att;
    }
  }

  const daily = Array.from(dailyMap.values()).sort((a, b) => b.studyDay.localeCompare(a.studyDay));

  return jsonResponse({
    today: {
      studyDay: today,
      visitors: todayVisitors,
      activeSolvers: todayActiveSolvers,
      pageviews: todayPageviews,
      dailyPure: todayModes.daily_pure,
      dailyStats: todayModes.daily_stats,
      practice: todayModes.practice,
      pastDay: todayModes.past_day
    },
    range: {
      days: daysParam,
      startDay: rangeStart,
      visitorDays: rangeVisitorDays,
      pageviews: rangePageviews,
      attempted: Number(rangeOutcomeTotals.attempted) || 0,
      solved: Number(rangeOutcomeTotals.solved) || 0,
      missed: Number(rangeOutcomeTotals.missed) || 0,
      feedbackSent: rangeFeedbackSent
    },
    daily,
    topQuestions: (batchResults[9].results || []).map((r) => ({
      questionId: r.question_id,
      category: r.category || "",
      attempted: Number(r.attempted) || 0,
      solved: Number(r.solved) || 0,
      missed: Number(r.missed) || 0,
      totalChecks: Number(r.total_checks) || 0,
      totalReveals: Number(r.total_reveals) || 0
    })),
    referrers: (batchResults[10].results || []).map((r) => ({
      referrer: r.referrer,
      visitors: Number(r.visitors) || 0
    })),
    countries: (batchResults[11].results || []).map((r) => ({
      country: r.country,
      visitors: Number(r.visitors) || 0
    })),
    devices: (batchResults[12].results || []).map((r) => ({
      device: r.device,
      visitors: Number(r.visitors) || 0
    })),
    counters: (batchResults[13].results || []).map((r) => ({
      metric: r.metric,
      total: Number(r.total) || 0
    }))
  }, 200, noStoreHeaders);
}

function renderDashboardHtml() {
  return [
    '<!DOCTYPE html><html lang="en"><head>',
    '<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '<meta name="robots" content="noindex, nofollow" /><title>H2 Mathle · Analytics</title>',
    '<style>',
    ':root{--bg:#f8f6f0;--paper:#fff;--ink:#1c1b18;--muted:#6b655c;--rule:#e4dfd4;--accent:#26534c;--accent-soft:#e7efec;--bad:#b91c1c;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;--serif:Georgia,"Times New Roman",serif;--mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}',
    '*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--sans);line-height:1.45}',
    '.shell{max-width:1080px;margin:0 auto;padding:28px 20px 56px}',
    '.topbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding-bottom:16px;border-bottom:1px solid var(--rule);margin-bottom:22px}',
    '.brand h1{margin:0;font-family:var(--serif);font-size:1.55rem;font-weight:700;letter-spacing:-.01em}',
    '.brand-sub{font-size:.82rem;color:var(--muted)}',
    '.controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px}',
    '.pill-group{display:inline-flex;background:var(--paper);border:1px solid var(--rule);border-radius:6px;overflow:hidden}',
    '.pill-btn,.btn{font-family:var(--sans);font-size:.82rem;font-weight:500;border:none;background:transparent;color:var(--ink);padding:7px 11px;cursor:pointer}',
    '.pill-btn+.pill-btn{border-left:1px solid var(--rule)}.pill-btn.active{background:var(--accent);color:#fff}',
    '.btn{background:var(--paper);border:1px solid var(--rule);border-radius:6px}.btn:hover{border-color:var(--accent)}',
    '.btn-primary{background:var(--accent);color:#fff;border-color:var(--accent)}',
    '.gate-card{max-width:420px;margin:72px auto;background:var(--paper);border:1px solid var(--rule);border-top:3px solid var(--accent);border-radius:6px;padding:24px;box-shadow:0 2px 12px rgba(28,27,24,.05)}',
    '.gate-card h2{margin:0 0 6px;font-family:var(--serif);font-size:1.25rem}.gate-card p{margin:0 0 16px;color:var(--muted);font-size:.88rem}',
    '.input{width:100%;padding:9px 11px;font-size:.9rem;font-family:var(--mono);border:1px solid var(--rule);border-radius:5px;background:var(--bg);color:var(--ink);margin-bottom:10px}',
    '.check-row{display:flex;align-items:center;gap:8px;font-size:.82rem;color:var(--muted);margin-bottom:14px}',
    '.error-msg{color:var(--bad);font-size:.84rem;margin-top:10px;min-height:1.2em}',
    '.kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(165px,1fr));gap:12px;margin-bottom:20px}',
    '.kpi{background:var(--paper);border:1px solid var(--rule);border-radius:6px;padding:14px 16px}',
    '.kpi-label{font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin-bottom:6px}',
    '.kpi-val{font-family:var(--serif);font-size:1.75rem;font-weight:700;line-height:1.1}.kpi-sub{margin-top:5px;font-size:.78rem;color:var(--muted)}',
    '.card{background:var(--paper);border:1px solid var(--rule);border-radius:6px;padding:16px 18px;margin-bottom:16px}',
    '.card h2{margin:0 0 12px;font-family:var(--serif);font-size:1.05rem;font-weight:600}',
    '.two-col{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:16px}',
    '.chart-rows{display:flex;flex-direction:column;gap:8px}',
    '.chart-row{display:grid;grid-template-columns:96px 1fr 140px;align-items:center;gap:10px;font-size:.82rem}',
    '.chart-day{font-family:var(--mono);color:var(--muted)}',
    '.bar-track{height:16px;background:var(--bg);border:1px solid var(--rule);border-radius:4px;overflow:hidden;display:flex}',
    '.bar-visitors{height:100%;background:var(--accent)}.bar-attempts{height:100%;background:rgba(180,83,9,.45)}',
    '.chart-nums{text-align:right;font-family:var(--mono);font-size:.78rem;color:var(--muted)}',
    'table{width:100%;border-collapse:collapse;font-size:.84rem}',
    'th,td{text-align:left;padding:7px 8px;border-bottom:1px solid var(--rule)}',
    'th{font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);font-weight:600}',
    'td.num,th.num{text-align:right;font-family:var(--mono)}.mono{font-family:var(--mono)}',
    '.badge{display:inline-block;padding:1px 6px;border-radius:4px;font-size:.72rem;background:var(--accent-soft);color:var(--accent);font-weight:600}',
    '.empty{color:var(--muted);font-size:.84rem;padding:8px 0}[hidden]{display:none!important}',
    '@media(max-width:640px){.chart-row{grid-template-columns:84px 1fr 98px}}',
    '</style></head><body><div class="shell">',
    '<section id="login-view" class="gate-card" hidden>',
    '<h2>H2 Mathle Analytics</h2>',
    '<p>Enter your admin bearer token to view private usage and question solve stats.</p>',
    '<form id="login-form">',
    '<input id="token-input" class="input" type="password" placeholder="Admin token" autocomplete="off" required />',
    '<label class="check-row"><input id="remember-check" type="checkbox" /><span>Remember token on this browser</span></label>',
    '<button class="btn btn-primary" type="submit" style="width:100%;">Unlock Dashboard</button>',
    '<div id="login-error" class="error-msg"></div></form></section>',
    '<section id="app-view" hidden><header class="topbar">',
    '<div class="brand"><h1>H2 Mathle · Analytics</h1><div class="brand-sub" id="study-day-label">Study Day (6AM SGT): —</div></div>',
    '<div class="controls"><div class="pill-group" id="range-pills">',
    '<button type="button" class="pill-btn" data-days="1">Today</button>',
    '<button type="button" class="pill-btn" data-days="7">7d</button>',
    '<button type="button" class="pill-btn active" data-days="14">14d</button>',
    '<button type="button" class="pill-btn" data-days="30">30d</button>',
    '<button type="button" class="pill-btn" data-days="all">All</button></div>',
    '<button type="button" class="btn" id="refresh-btn">Refresh</button>',
    '<button type="button" class="btn" id="logout-btn">Sign out</button></div></header>',
    '<div id="status-banner" class="error-msg" style="margin-bottom:10px;"></div>',
    '<div class="kpi-grid" id="kpi-grid"></div>',
    '<div class="card"><h2>Daily Visitors &amp; Question Attempts <small style="font-weight:400;color:var(--muted);font-family:var(--sans);font-size:0.78rem;">(Teal = unique visitors, Amber = question attempts)</small></h2><div id="daily-chart" class="chart-rows"></div></div>',
    '<div class="card"><h2>Top Questions</h2><div style="overflow-x:auto;"><table><thead><tr><th>Question</th><th>Category</th><th class="num">Attempted</th><th class="num">Solved</th><th class="num">Solve %</th><th class="num">Auto Checks</th><th class="num">Reveals</th></tr></thead><tbody id="questions-tbody"></tbody></table></div></div>',
    '<div class="two-col">',
    '<div class="card"><h2>Referrers</h2><table><thead><tr><th>Host</th><th class="num">Visitors</th></tr></thead><tbody id="referrers-tbody"></tbody></table></div>',
    '<div class="card"><h2>Countries &amp; Devices</h2><table><thead><tr><th>Country</th><th class="num">Visitors</th></tr></thead><tbody id="countries-tbody"></tbody></table><table style="margin-top:14px;"><thead><tr><th>Device</th><th class="num">Visitors</th></tr></thead><tbody id="devices-tbody"></tbody></table></div>',
    '</div>',
    '<div class="card"><h2>Tabs, Tools &amp; Actions</h2><table><thead><tr><th>Metric</th><th class="num">Count</th></tr></thead><tbody id="counters-tbody"></tbody></table></div>',
    '</section></div><script>',
    '(() => {',
    '  const TOKEN_KEY = "h2mathle_admin_token";',
    '  let currentDays = "14";',
    '  const loginView = document.getElementById("login-view");',
    '  const appView = document.getElementById("app-view");',
    '  const loginForm = document.getElementById("login-form");',
    '  const tokenInput = document.getElementById("token-input");',
    '  const rememberCheck = document.getElementById("remember-check");',
    '  const loginError = document.getElementById("login-error");',
    '  const statusBanner = document.getElementById("status-banner");',
    '  const getToken = () => sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY) || "";',
    '  const saveToken = (t, rem) => { sessionStorage.setItem(TOKEN_KEY, t); if (rem) localStorage.setItem(TOKEN_KEY, t); else localStorage.removeItem(TOKEN_KEY); };',
    '  const clearToken = () => { sessionStorage.removeItem(TOKEN_KEY); localStorage.removeItem(TOKEN_KEY); };',
    '  const escapeHtml = (v) => String(v == null ? "" : v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\'/g,"&#39;");',
    '  const pct = (n, d) => d ? Math.round((n / d) * 100) + "%" : "—";',
    '  function showLogin(msg = "") { appView.hidden = true; loginView.hidden = false; loginError.textContent = msg; tokenInput.focus(); }',
    '  function renderSimpleTable(id, rows, emptyText, rowFn) {',
    '    const tb = document.getElementById(id);',
    '    if (!rows || !rows.length) { tb.innerHTML = "<tr><td colspan=\\"10\\" class=\\"empty\\">" + escapeHtml(emptyText) + "</td></tr>"; return; }',
    '    tb.innerHTML = rows.map(rowFn).join("");',
    '  }',
    '  function renderDashboard(data) {',
    '    const t = data.today, r = data.range;',
    '    document.getElementById("study-day-label").textContent = "Study Day (6AM SGT): " + t.studyDay + " · Showing " + (r.days === "all" ? "all time" : "last " + r.days + "d");',
    '    const kpis = [',
    '      { label: "Today Visitors", val: t.visitors, sub: t.pageviews + " pageviews today" },',
    '      { label: "Active Solvers", val: t.activeSolvers, sub: pct(t.activeSolvers, t.visitors) + " of visitors" },',
    '      { label: "Today Daily Pure", val: t.dailyPure.solved + "/" + t.dailyPure.attempted, sub: "Solve rate: " + pct(t.dailyPure.solved, t.dailyPure.attempted) },',
    '      { label: "Today Daily Stats", val: t.dailyStats.solved + "/" + t.dailyStats.attempted, sub: "Solve rate: " + pct(t.dailyStats.solved, t.dailyStats.attempted) },',
    '      { label: "Today Practice", val: t.practice.attempted, sub: t.practice.solved + " solved" },',
    '      { label: "Range Totals", val: r.visitorDays, sub: r.attempted + " attempts · " + r.pageviews + " views" }',
    '    ];',
    '    document.getElementById("kpi-grid").innerHTML = kpis.map((k) => "<div class=\\"kpi\\"><div class=\\"kpi-label\\">" + escapeHtml(k.label) + "</div><div class=\\"kpi-val\\">" + escapeHtml(k.val) + "</div><div class=\\"kpi-sub\\">" + escapeHtml(k.sub) + "</div></div>").join("");',
    '    const chartEl = document.getElementById("daily-chart");',
    '    if (!data.daily || !data.daily.length) { chartEl.innerHTML = "<div class=\\"empty\\">No traffic recorded in this range yet.</div>"; }',
    '    else {',
    '      const maxScale = Math.max(1, ...data.daily.map((d) => d.visitors + d.dailyPureAttempted + d.dailyStatsAttempted + d.practiceAttempted));',
    '      chartEl.innerHTML = data.daily.map((d) => {',
    '        const att = d.dailyPureAttempted + d.dailyStatsAttempted + d.practiceAttempted;',
    '        const vp = Math.round((d.visitors / maxScale) * 100);',
    '        const ap = Math.round((att / maxScale) * 100);',
    '        return "<div class=\\"chart-row\\"><div class=\\"chart-day\\">" + escapeHtml(d.studyDay) + "</div><div class=\\"bar-track\\" title=\\"" + escapeHtml(d.visitors + " visitors, " + att + " attempts") + "\\"><div class=\\"bar-visitors\\" style=\\"width:" + vp + "%\\"></div><div class=\\"bar-attempts\\" style=\\"width:" + ap + "%\\"></div></div><div class=\\"chart-nums\\">" + escapeHtml(d.visitors + "v · " + att + "q") + "</div></div>";',
    '      }).join("");',
    '    }',
    '    renderSimpleTable("questions-tbody", data.topQuestions, "No question attempts recorded yet.", (q) => "<tr><td class=\\"mono\\">" + escapeHtml(q.questionId) + "</td><td><span class=\\"badge\\">" + escapeHtml(q.category || "—") + "</span></td><td class=\\"num\\">" + escapeHtml(q.attempted) + "</td><td class=\\"num\\">" + escapeHtml(q.solved) + "</td><td class=\\"num\\">" + escapeHtml(pct(q.solved, q.attempted)) + "</td><td class=\\"num\\">" + escapeHtml(q.totalChecks) + "</td><td class=\\"num\\">" + escapeHtml(q.totalReveals) + "</td></tr>");',
    '    renderSimpleTable("referrers-tbody", data.referrers, "No referrer data yet.", (x) => "<tr><td class=\\"mono\\">" + escapeHtml(x.referrer) + "</td><td class=\\"num\\">" + escapeHtml(x.visitors) + "</td></tr>");',
    '    renderSimpleTable("countries-tbody", data.countries, "No country data yet.", (x) => "<tr><td class=\\"mono\\">" + escapeHtml(x.country) + "</td><td class=\\"num\\">" + escapeHtml(x.visitors) + "</td></tr>");',
    '    renderSimpleTable("devices-tbody", data.devices, "No device data yet.", (x) => "<tr><td>" + escapeHtml(x.device) + "</td><td class=\\"num\\">" + escapeHtml(x.visitors) + "</td></tr>");',
    '    renderSimpleTable("counters-tbody", data.counters, "No counters recorded yet.", (x) => "<tr><td class=\\"mono\\">" + escapeHtml(x.metric) + "</td><td class=\\"num\\">" + escapeHtml(x.total) + "</td></tr>");',
    '  }',
    '  async function loadStats() {',
    '    const token = getToken();',
    '    if (!token) { showLogin(); return; }',
    '    statusBanner.textContent = "";',
    '    try {',
    '      const res = await fetch("/v1/admin/stats?days=" + encodeURIComponent(currentDays), { headers: { Authorization: "Bearer " + token } });',
    '      if (res.status === 401) { clearToken(); showLogin("Invalid or expired token."); return; }',
    '      if (!res.ok) throw new Error("HTTP " + res.status);',
    '      const data = await res.json();',
    '      loginView.hidden = true; appView.hidden = false;',
    '      renderDashboard(data);',
    '    } catch (err) {',
    '      statusBanner.textContent = "Failed to load stats: " + (err && err.message ? err.message : "Network error");',
    '      loginView.hidden = true; appView.hidden = false;',
    '    }',
    '  }',
    '  loginForm.addEventListener("submit", async (e) => {',
    '    e.preventDefault();',
    '    const token = tokenInput.value.trim();',
    '    if (!token) return;',
    '    saveToken(token, rememberCheck.checked);',
    '    tokenInput.value = "";',
    '    await loadStats();',
    '  });',
    '  document.getElementById("range-pills").addEventListener("click", (e) => {',
    '    const btn = e.target.closest(".pill-btn");',
    '    if (!btn) return;',
    '    currentDays = btn.dataset.days || "14";',
    '    document.querySelectorAll("#range-pills .pill-btn").forEach((b) => b.classList.toggle("active", b === btn));',
    '    loadStats();',
    '  });',
    '  document.getElementById("refresh-btn").addEventListener("click", loadStats);',
    '  document.getElementById("logout-btn").addEventListener("click", () => { clearToken(); showLogin(); });',
    '  if (getToken()) loadStats(); else showLogin();',
    '})();</script></body></html>'
  ].join("\n");
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const { pathname } = url;
      const method = request.method.toUpperCase();

      if (pathname === "/" && method === "GET") {
        return jsonResponse({ ok: true, service: "h2mathle-analytics" });
      }

      if (pathname === "/health" && method === "GET") {
        return jsonResponse({
          ok: true,
          service: "h2mathle-analytics",
          studyDay: getStudyDay()
        });
      }

      if (pathname === "/v1/e") {
        if (method === "OPTIONS") {
          return new Response(null, {
            status: 204,
            headers: corsHeadersForIngest(request.headers.get("Origin"))
          });
        }
        if (method === "POST") {
          return await handleIngest(request, env);
        }
        return jsonResponse({ error: "Method not allowed" }, 405);
      }

      if (pathname === "/v1/daily-summary") {
        if (method === "OPTIONS") {
          return new Response(null, {
            status: 204,
            headers: corsHeadersForPublicRead(request.headers.get("Origin"))
          });
        }
        if (method === "GET") {
          return await handleDailySummary(request, env, url);
        }
        return jsonResponse({ error: "Method not allowed" }, 405);
      }

      if (pathname === "/v1/admin/stats" && method === "GET") {
        return await handleAdminStats(request, env, url);
      }

      if (pathname === "/dashboard" && method === "GET") {
        return new Response(renderDashboardHtml(), {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex, nofollow",
            "Referrer-Policy": "no-referrer",
            "Content-Security-Policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'"
          }
        });
      }

      return jsonResponse({ error: "Not found" }, 404);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(JSON.stringify({
        message: "unhandled worker error",
        error: message,
        method: request.method,
        path: new URL(request.url).pathname
      }));
      return jsonResponse({ error: "Internal server error" }, 500);
    }
  }
};
