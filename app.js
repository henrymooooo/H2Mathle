(() => {
  const STORAGE_KEY = "h2_daily_math_v1";
  const LAUNCH_DAY_KEY = "2026-11-21";
  const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/2076cdb9647f5a023dd03868c1b25f8a";
  const ANALYTICS_ENDPOINT = "https://api.h2mathle.com/v1/e";
  let analyticsBooted = false;
  let activeSolveToastTimer = null;

  function isLocalAnalyticsHost() {
    return (
      location.protocol === "file:" ||
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1"
    );
  }

  function trackEvent(payload) {
    try {
      if (isLocalAnalyticsHost()) return;
      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        const sent = navigator.sendBeacon(
          ANALYTICS_ENDPOINT,
          new Blob([body], { type: "text/plain" })
        );
        if (sent) return;
      }
      fetch(ANALYTICS_ENDPOINT, {
        method: "POST",
        mode: "cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain" },
        body
      }).catch(() => {});
    } catch (_) {}
  }

  async function trackEventWithResponse(payload) {
    try {
      if (isLocalAnalyticsHost()) return null;
      const res = await fetch(ANALYTICS_ENDPOINT, {
        method: "POST",
        mode: "cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload)
      });
      if (res.ok && res.status === 200) {
        return await res.json();
      }
    } catch (_) {}
    return null;
  }

  function formatOrdinal(n) {
    const mod100 = n % 100;
    if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
    const mod10 = n % 10;
    if (mod10 === 1) return `${n}st`;
    if (mod10 === 2) return `${n}nd`;
    if (mod10 === 3) return `${n}rd`;
    return `${n}th`;
  }

  function launchFirstSolverConfetti() {
    try {
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      const canvas = document.createElement("canvas");
      canvas.className = "confetti-canvas";
      canvas.setAttribute("aria-hidden", "true");
      document.body.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        canvas.remove();
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let vw = window.innerWidth;
      let vh = window.innerHeight;
      canvas.width = Math.floor(vw * dpr);
      canvas.height = Math.floor(vh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const palette = ["#1e3a5f", "#d49b38", "#2c6e4f", "#b84a4a", "#4f709c", "#e6c27a"];
      const particles = [];
      const origins = [
        { x: vw * 0.38, y: vh * 0.84, baseAngle: -Math.PI * 0.60 },
        { x: vw * 0.62, y: vh * 0.84, baseAngle: -Math.PI * 0.40 }
      ];

      for (let i = 0; i < 76; i++) {
        const origin = origins[i % 2];
        const angle = origin.baseAngle + (Math.random() - 0.5) * 0.85;
        const speed = 420 + Math.random() * 440;
        particles.push({
          x: origin.x + (Math.random() - 0.5) * 24,
          y: origin.y + (Math.random() - 0.5) * 14,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          w: 6 + Math.random() * 5,
          h: 4 + Math.random() * 4,
          color: palette[i % palette.length],
          rot: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 10,
          tilt: Math.random() * Math.PI * 2,
          vTilt: 4 + Math.random() * 6
        });
      }

      const durationMs = 2200;
      const fadeStartMs = 1600;
      const startTime = performance.now();
      let lastTime = startTime;

      const frame = (now) => {
        const elapsed = now - startTime;
        const dt = Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;

        ctx.clearRect(0, 0, vw, vh);
        const alpha = elapsed > fadeStartMs ? Math.max(0, 1 - (elapsed - fadeStartMs) / (durationMs - fadeStartMs)) : 1;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.vx *= Math.pow(0.28, dt);
          p.vy = p.vy * Math.pow(0.42, dt) + 680 * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.rot += p.vRot * dt;
          p.tilt += p.vTilt * dt;

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.scale(1, Math.cos(p.tilt));
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }

        if (elapsed < durationMs) {
          requestAnimationFrame(frame);
        } else {
          canvas.remove();
        }
      };

      requestAnimationFrame(frame);
    } catch (_) {}
  }

  function flagIconSvg(filled = false) {
    return `<svg class="flag-icon" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M3.5 2.5v11M3.5 3h8l-1.8 3 1.8 3h-8" fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  function showSolverRankToast(rank, mode) {
    try {
      if (activeSolveToastTimer) {
        clearTimeout(activeSolveToastTimer);
        activeSolveToastTimer = null;
      }
      document.querySelectorAll(".solve-rank-toast").forEach(el => el.remove());

      const section = mode === "daily_stats" ? "Statistics" : "Pure";
      const isFirst = rank === 1;
      const toast = document.createElement("div");
      toast.className = "solve-rank-toast" + (isFirst ? " is-first" : "");
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      toast.textContent = isFirst
        ? `First solver of today's ${section}`
        : `${formatOrdinal(rank)} solver today · ${section}`;

      const dismiss = (immediate = false) => {
        if (activeSolveToastTimer) {
          clearTimeout(activeSolveToastTimer);
          activeSolveToastTimer = null;
        }
        toast.classList.remove("visible");
        if (immediate) toast.remove();
        else setTimeout(() => toast.remove(), 260);
      };

      toast.onclick = () => dismiss(true);
      document.body.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add("visible"));

      if (isFirst) launchFirstSolverConfetti();
      activeSolveToastTimer = setTimeout(() => dismiss(false), isFirst ? 5200 : 4000);
    } catch (_) {}
  }

  function getReferrerHost() {
    try {
      if (!document.referrer) return "";
      const host = new URL(document.referrer).hostname.toLowerCase();
      if (!host || host === "h2mathle.com" || host === "www.h2mathle.com") return "";
      return host;
    } catch (_) {
      return "";
    }
  }

  function resolveQuestionMode(q, isRandom, dayKey) {
    if (isRandom) return "practice";
    if (dayKey && dayKey !== getStudyDayKey()) return "past_day";
    return q && q.category === "stats" ? "daily_stats" : "daily_pure";
  }

  function trackQuestionProgress(q, record, mode, action, prevQStatus = null) {
    if (!q || !record || !record.parts) return;
    const st = getQuestionStatus(q, record);
    const qStatus = st === "ok" ? "ok" : st === "bad" ? "bad" : "attempted";
    const partsTotal = q.parts.length;
    let partsDone = 0;
    let partsOk = 0;
    q.parts.forEach((_, i) => {
      const p = record.parts[i];
      if (p && (p.status === "ok" || p.status === "bad")) {
        partsDone++;
        if (p.status === "ok") partsOk++;
      }
    });
    const elapsedSec = qTimer.questionId === q.id ? qTimer.elapsedSec : 0;
    const payload = {
      type: "progress",
      qId: q.id,
      mode,
      category: q.category || "",
      action,
      qStatus,
      partsDone,
      partsTotal,
      partsOk,
      elapsedSec
    };

    const isFreshDailySolve =
      (mode === "daily_pure" || mode === "daily_stats") &&
      qStatus === "ok" &&
      prevQStatus !== "ok" &&
      !record.solveCelebrated;

    if (isFreshDailySolve) {
      trackEventWithResponse(payload).then((data) => {
        if (!record.solveCelebrated && data && Number.isInteger(data.rank) && data.rank >= 1) {
          record.solveCelebrated = true;
          record.solveRank = data.rank;
          saveState();
          showSolverRankToast(data.rank, mode);
        }
      });
    } else {
      trackEvent(payload);
    }
  }
  const BASE_TITLE = document.title || "H2 Mathle";
  const TAB_LABELS = {
    pure: "Pure",
    stats: "Statistics",
    random: "Practice",
    calendar: "Calendar",
    mistakes: "Study Log"
  };
  function getFeedbackContext() {
    const qId = (currentTab === "pure" || currentTab === "stats" || currentTab === "random") && qTimer.questionId
      ? qTimer.questionId
      : null;
    return { qId, tab: currentTab, url: window.location.href };
  }
  function syncFeedbackContext() {
    const badge = document.getElementById("feedback-context");
    if (!badge) return;
    const { qId, tab } = getFeedbackContext();
    badge.textContent = qId ? `Attached: ${qId}` : `Tab: ${TAB_LABELS[tab] || tab}`;
  }
  function setPageTitle(label, { prefixBrand = true } = {}) {
    if (!label) {
      document.title = BASE_TITLE;
      return;
    }
    document.title = prefixBrand ? `${BASE_TITLE} - ${label}` : `${label} - ${BASE_TITLE}`;
  }
  const TAB_TO_HASH = {
    pure: "pure",
    stats: "statistics",
    random: "practice",
    calendar: "calendar",
    mistakes: "studylog"
  };
  const HASH_TO_TAB = {
    pure: "pure",
    stats: "stats",
    statistics: "stats",
    random: "random",
    practice: "random",
    calendar: "calendar",
    mistakes: "mistakes",
    studylog: "mistakes"
  };
  function getTabFromHash() {
    const slug = window.location.hash.replace(/^#\/?/, "").trim().toLowerCase();
    return HASH_TO_TAB[slug] || null;
  }
  function syncUrlQuestion(qId, tab = currentTab) {
    try {
      const url = new URL(window.location.href);
      if (qId) url.searchParams.set("q", qId);
      else url.searchParams.delete("q");
      url.hash = TAB_TO_HASH[tab] ? `#${TAB_TO_HASH[tab]}` : "";
      window.history.replaceState(null, "", url.toString());
    } catch (_) {}
  }
  const ERROR_TAGS = [
    "Careless / Arithmetic",
    "Algebra Slip",
    "GC Error",
    "Conceptual Gap",
    "Misread Question",
    "Forgot +c / Modulus",
    "Accuracy (3sf / Exact)"
  ];

  // -------------------- 1. SINGAPORE TIME (6 AM RESET) --------------------
  function getSGTNow() {
    const now = new Date();
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcMs + 8 * 3600000);
  }

  function getStudyDayKey(sgtDate = getSGTNow()) {
    const shifted = new Date(sgtDate.getTime() - 6 * 3600000);
    const y = shifted.getFullYear();
    const m = String(shifted.getMonth() + 1).padStart(2, "0");
    const d = String(shifted.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function getMsUntilNext6AM() {
    const sgt = getSGTNow();
    const next = new Date(sgt);
    next.setHours(6, 0, 0, 0);
    if (sgt >= next) next.setDate(next.getDate() + 1);
    return next.getTime() - sgt.getTime();
  }

  function hashSeed(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  // -------------------- 2. STORAGE --------------------
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          if (!parsed.days || typeof parsed.days !== "object") parsed.days = {};
          if (!parsed.notes || typeof parsed.notes !== "object") parsed.notes = {};
          if (!parsed.practiceSolved || typeof parsed.practiceSolved !== "object") parsed.practiceSolved = {};
          return parsed;
        }
      }
    } catch (_) {}
    return { days: {}, notes: {}, practiceSolved: {} };
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  let state = loadState();
  let currentTab = "pure";
  let selectedCalendarDay = null;
  let calendarYear = null;
  let calendarMonth = null;
  let randomQuestion = null;
  let randomState = {};
  let randomFilters = { topic: "all", school: "all", status: "all" };
  let mistakeTagFilter = "all";
  let studyLogMode = "mistakes";
  let flaggedSort = "date-desc";
  let flaggedPanelOpen = true;
  let activeMathField = null;
  let qTimer = { questionId: null, elapsedSec: 0, running: false, intervalId: null };

  function ensurePracticeSolved() {
    if (!state.practiceSolved || typeof state.practiceSolved !== "object") {
      state.practiceSolved = {};
    }
    return state.practiceSolved;
  }

  function isPracticeSolved(qId) {
    return Boolean(state.practiceSolved && state.practiceSolved[qId]);
  }

  function setPracticeSolved(qId, done) {
    const map = ensurePracticeSolved();
    if (done) map[qId] = { solvedAt: getStudyDayKey() };
    else delete map[qId];
    saveState();
  }

  function formatShortDate(dayKey) {
    if (!dayKey) return "";
    const [y, m, d] = String(dayKey).split("-").map(Number);
    if (!y || !m || !d) return dayKey;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${d} ${months[m - 1]} ${y}`;
  }

  function getQuestionHistoryStatus(qId) {
    let seenOk = isPracticeSolved(qId), seenBad = false, seenPartial = false;
    for (const dayRec of Object.values(state.days)) {
      for (const cat of ["pure", "stats"]) {
        const rec = dayRec?.[cat];
        if (!rec || rec.questionId !== qId) continue;
        const q = window.H2_QUESTIONS.find(x => x.id === qId);
        if (!q) continue;
        const st = getQuestionStatus(q, rec);
        if (st === "ok") seenOk = true;
        else if (st === "bad") seenBad = true;
        else if (st === "partial") seenPartial = true;
      }
    }
    if (seenOk) return "solved";
    if (seenBad) return "missed";
    if (seenPartial) return "attempted";
    return "unseen";
  }

  function getScopedPracticePool() {
    return window.H2_QUESTIONS.filter(q => {
      if (randomFilters.topic !== "all" && !(q.topics || []).includes(randomFilters.topic)) return false;
      if (randomFilters.school !== "all" && q.school !== randomFilters.school) return false;
      return true;
    });
  }

  function getFilteredRandomPool(cat = null) {
    return window.H2_QUESTIONS.filter(q => {
      if (cat && q.category !== cat) return false;
      if (randomFilters.topic !== "all" && !(q.topics || []).includes(randomFilters.topic)) return false;
      if (randomFilters.school !== "all" && q.school !== randomFilters.school) return false;
      if (randomFilters.status !== "all" && getQuestionHistoryStatus(q.id) !== randomFilters.status) return false;
      return true;
    });
  }

  function formatMMSS(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  function stopQuestionTimer() {
    if (qTimer.intervalId) {
      clearInterval(qTimer.intervalId);
      qTimer.intervalId = null;
    }
    qTimer.running = false;
  }

  function ensureQuestionTimer(qId) {
    if (qTimer.questionId !== qId) {
      stopQuestionTimer();
      qTimer.questionId = qId;
      qTimer.elapsedSec = 0;
    }
  }

  function getDayRecord(dayKey) {
    if (!state.days[dayKey]) state.days[dayKey] = { pure: null, stats: null };
    return state.days[dayKey];
  }

  function mulberry32(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function getCategoryPool(category) {
    return window.H2_QUESTIONS
      .filter(q => q.category === category)
      .slice()
      .sort((a, b) => a.id.localeCompare(b.id));
  }

  const dailyCycleCache = new Map();

  function computeScheduledQuestion(dayKey, category, pool = getCategoryPool(category)) {
    if (!pool.length) return null;
    const [y, m, d] = dayKey.split("-").map(Number);
    const dayIndex = Math.floor(Date.UTC(y, m - 1, d) / 86400000);
    const cycle = Math.floor(dayIndex / pool.length);
    const offset = ((dayIndex % pool.length) + pool.length) % pool.length;
    const cacheKey = `${category}:${cycle}:${pool.length}`;
    let shuffled = dailyCycleCache.get(cacheKey);
    if (!shuffled) {
      const rand = mulberry32(hashSeed(`h2-daily-math:${category}:${cycle}`));
      shuffled = pool.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      dailyCycleCache.set(cacheKey, shuffled);
    }
    return shuffled[offset];
  }

  function getDailyQuestion(dayKey, category) {
    const pool = getCategoryPool(category);
    const chosen = computeScheduledQuestion(dayKey, category, pool);
    if (!chosen) return null;
    const dayRec = getDayRecord(dayKey);
    if (dayRec[category]?.questionId) {
      const found = pool.find(q => q.id === dayRec[category].questionId);
      if (found) {
        // Keep past days and any in-progress/completed attempt intact;
        // auto-resync today's untouched question if new banks changed the global schedule.
        const isToday = dayKey === getStudyDayKey();
        if (!isToday || getQuestionStatus(found, dayRec[category]) !== "untouched" || found.id === chosen.id) {
          return found;
        }
      }
    }
    dayRec[category] = { questionId: chosen.id, parts: {} };
    saveState();
    return chosen;
  }

  function findDailyOccurrence(q) {
    if (!q || !q.category) return null;
    const today = getStudyDayKey();
    const dayKeys = Object.keys(state.days || {})
      .filter(k => k <= today)
      .sort((a, b) => b.localeCompare(a));
    for (const dk of dayKeys) {
      const rec = state.days[dk]?.[q.category];
      if (rec && rec.questionId === q.id) {
        return {
          dayKey: dk,
          isToday: dk === today,
          status: getQuestionStatus(q, rec)
        };
      }
    }
    const pool = getCategoryPool(q.category);
    const [ey, em, ed] = today.split("-").map(Number);
    const [sy, sm, sd] = LAUNCH_DAY_KEY.split("-").map(Number);
    const startUtc = Date.UTC(sy, sm - 1, sd);
    let curUtc = Date.UTC(ey, em - 1, ed);
    while (curUtc >= startUtc) {
      const dt = new Date(curUtc);
      const dk = `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, "0")}-${String(dt.getUTCDate()).padStart(2, "0")}`;
      const rec = state.days?.[dk]?.[q.category];
      if (rec && rec.questionId && rec.questionId !== q.id) {
        const existing = pool.find(item => item.id === rec.questionId);
        if (existing && (dk < today || getQuestionStatus(existing, rec) !== "untouched")) {
          curUtc -= 86400000;
          continue;
        }
      }
      const scheduled = computeScheduledQuestion(dk, q.category, pool);
      if (scheduled && scheduled.id === q.id) {
        return {
          dayKey: dk,
          isToday: dk === today,
          status: (rec && rec.questionId === q.id) ? getQuestionStatus(q, rec) : "untouched"
        };
      }
      curUtc -= 86400000;
    }
    return null;
  }

  // -------------------- 3. OFFLINE MATH RENDERER --------------------
  function latexToMathML(tex) {
    let s = tex.trim();
    const fnMap = {
      "\\sin": "sin", "\\cos": "cos", "\\tan": "tan",
      "\\ln": "ln", "\\log": "log", "\\sec": "sec", "\\cosec": "cosec",
      "\\mathrm{d}": "d", "\\mathrm{i}": "i", "\\mathrm{e}": "e",
      "\\mathrm{P}": "P", "\\mathrm{E}": "E", "\\mathrm{Var}": "Var",
      "\\mathrm{H}": "H", "\\mathrm{N}": "N", "\\mathrm{B}": "B",
      "\\mathbf{r}": "𝐫"
    };
    for (const [k, v] of Object.entries(fnMap)) s = s.split(k).join(v);

    s = s.replace(/\\begin\{pmatrix\}([\s\S]*?)\\end\{pmatrix\}/g, (_, body) => {
      const rows = body.split("\\\\").map(r =>
        `<mtr><mtd>${r.split("&").map(c => latexToMathMLInline(c)).join("</mtd><mtd>")}</mtd></mtr>`
      ).join("");
      return `<mrow><mo>(</mo><mtable>${rows}</mtable><mo>)</mo></mrow>`;
    });

    return `<math xmlns="http://www.w3.org/1998/Math/MathML">${latexToMathMLInline(s)}</math>`;
  }

  function extractBraced(str, startIdx) {
    if (str[startIdx] !== "{") return [str[startIdx] || "", startIdx + 1];
    let depth = 0, i = startIdx;
    for (; i < str.length; i++) {
      if (str[i] === "{") depth++;
      else if (str[i] === "}") {
        depth--;
        if (depth === 0) return [str.slice(startIdx + 1, i), i + 1];
      }
    }
    return [str.slice(startIdx + 1), str.length];
  }

  function latexToMathMLInline(s) {
    if (s.trim().startsWith("<mrow><mo>(")) return s;
    const sym = {
      "\\pi": "π", "\\theta": "θ", "\\lambda": "λ", "\\mu": "μ", "\\sigma": "σ",
      "\\pm": "±", "\\times": "×", "\\cdot": "·", "\\le": "≤", "\\ge": "≥",
      "\\ne": "≠", "\\approx": "≈", "\\implies": "⇒", "\\therefore": "∴",
      "\\sim": "~", "\\mid": "|", "\\cap": "∩", "\\cup": "∪",
      "\\left": "", "\\right": "", "\\,": " ", "\\quad": "  ", "\\text": ""
    };
    for (const [k, v] of Object.entries(sym)) s = s.split(k).join(v);

    let out = "", i = 0;
    while (i < s.length) {
      if (s.startsWith("\\frac", i)) {
        const [num, n1] = extractBraced(s, i + 5);
        const [den, n2] = extractBraced(s, n1);
        out += `<mfrac><mrow>${latexToMathMLInline(num)}</mrow><mrow>${latexToMathMLInline(den)}</mrow></mfrac>`;
        i = n2;
      } else if (s.startsWith("\\sqrt", i)) {
        const [inner, n1] = extractBraced(s, i + 5);
        out += `<msqrt><mrow>${latexToMathMLInline(inner)}</mrow></msqrt>`;
        i = n1;
      } else if (s.startsWith("\\bar", i)) {
        const [inner, n1] = extractBraced(s, i + 4);
        out += `<mover><mrow>${latexToMathMLInline(inner)}</mrow><mo stretchy="true">¯</mo></mover>`;
        i = n1;
      } else if (s.startsWith("\\int", i)) {
        out += `<mo>∫</mo>`; i += 4;
      } else if (s.startsWith("\\sum", i)) {
        out += `<mo>∑</mo>`; i += 4;
      } else if (s[i] === "^" || s[i] === "_") {
        const tag = s[i] === "^" ? "msup" : "msub";
        const [sub, n1] = extractBraced(s, i + 1);
        const prevMatch = out.match(/(<[^>]+>[^<]*<\/[^>]+>)$/);
        if (prevMatch) {
          const base = prevMatch[1];
          out = out.slice(0, -base.length) + `<${tag}>${base}<mrow>${latexToMathMLInline(sub)}</mrow></${tag}>`;
        } else {
          out += `<${tag}><mrow></mrow><mrow>${latexToMathMLInline(sub)}</mrow></${tag}>`;
        }
        i = n1;
      } else if (s[i] === "{") {
        const [inner, n1] = extractBraced(s, i);
        out += `<mrow>${latexToMathMLInline(inner)}</mrow>`;
        i = n1;
      } else if (/[0-9.]/.test(s[i])) {
        let num = "";
        while (i < s.length && /[0-9.]/.test(s[i])) num += s[i++];
        out += `<mn>${num}</mn>`;
      } else if (/[+\-*/=<>|(),\[\]±×·≤≥≠≈~∩∪]/.test(s[i])) {
        out += `<mo>${s[i++]}</mo>`;
      } else if (/[a-zA-Zπθλμσ]/.test(s[i])) {
        let word = "";
        while (i < s.length && /[a-zA-Z]/.test(s[i])) word += s[i++];
        if (!word) word = s[i++];
        if (["sin", "cos", "tan", "ln", "log", "Var", "sec", "cosec"].includes(word)) {
          out += `<mi mathvariant="normal">${word}</mi>`;
        } else if (word.length > 1) {
          out += word.split("").map(ch => `<mi>${ch}</mi>`).join("");
        } else {
          out += `<mi>${word}</mi>`;
        }
      } else {
        i++;
      }
    }
    return out;
  }

  function renderMathText(htmlStr) {
    const renderTex = (tex, displayMode) => {
      if (window.katex) {
        try {
          return window.katex.renderToString(tex, { displayMode, throwOnError: false });
        } catch (_) {}
      }
      const mml = latexToMathML(tex);
      return displayMode ? `<div style="text-align:center;margin:8px 0;">${mml}</div>` : mml;
    };
    return htmlStr
      .replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => renderTex(tex, true))
      .replace(/\$([^\$]+?)\$/g, (_, tex) => renderTex(tex, false));
  }

  function renderSafeUserMath(text) {
    const esc = (s) => s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const tokens = [];
    const stash = (html) => {
      const idx = tokens.length;
      tokens.push(html);
      return `\u0000MATH${idx}\u0000`;
    };
    let out = String(text || "")
      .replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => stash(renderMathText(`$$${tex}$$`)))
      .replace(/\$([^\$]+?)\$/g, (_, tex) => stash(renderMathText(`$${tex}$`)));
    out = esc(out);
    return out.replace(/\u0000MATH(\d+)\u0000/g, (_, i) => tokens[Number(i)]);
  }

  function attachDollarAutoPair(ta, onUpdate) {
    ta.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const val = ta.value;
      if (e.key === "$") {
        e.preventDefault();
        if (start !== end) {
          const selected = val.slice(start, end);
          ta.value = val.slice(0, start) + "$" + selected + "$" + val.slice(end);
          ta.selectionStart = start + 1;
          ta.selectionEnd = end + 1;
        } else if (val[start] === "$") {
          ta.selectionStart = ta.selectionEnd = start + 1;
        } else {
          ta.value = val.slice(0, start) + "$$" + val.slice(end);
          ta.selectionStart = ta.selectionEnd = start + 1;
        }
        if (onUpdate) onUpdate(ta.value);
      } else if (e.key === "Backspace" && start === end && start > 0 && val[start - 1] === "$" && val[start] === "$") {
        e.preventDefault();
        ta.value = val.slice(0, start - 1) + val.slice(start + 1);
        ta.selectionStart = ta.selectionEnd = start - 1;
        if (onUpdate) onUpdate(ta.value);
      }
    });
  }

  function renderDiagramBox(svg, imgPath) {
    if (!svg && !imgPath) return "";
    if (imgPath) {
      return `<div class="diagram-box"><img src="${imgPath}" alt="Question diagram" onerror="this.parentElement.innerHTML='<small style=\\'color:var(--muted)\\'>Missing image: ${imgPath}</small>'" /></div>`;
    }
    return `<div class="diagram-box">${svg}</div>`;
  }

  // -------------------- 4. DESMOS-STYLE WYSIWYG MATH FIELD --------------------
  function createMathField(container, { placeholder = "", initialAst = null, disabled = false, onChange, onEnter }) {
    const root = initialAst ? JSON.parse(JSON.stringify(initialAst)) : [];
    let cursor = { slot: root, index: root.length };
    let isFocused = false;

    const wrap = document.createElement("div");
    wrap.className = "math-field-wrap" + (disabled ? " disabled" : "");

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "text";
    hiddenInput.className = "mf-hidden-input";
    hiddenInput.setAttribute("autocapitalize", "off");
    hiddenInput.setAttribute("autocorrect", "off");
    hiddenInput.setAttribute("spellcheck", "false");
    hiddenInput.setAttribute("autocomplete", "off");
    hiddenInput.disabled = disabled;
    hiddenInput.value = " ";

    const renderEl = document.createElement("div");
    renderEl.className = "mf-render";

    wrap.append(hiddenInput, renderEl);
    container.appendChild(wrap);

    function findSlotLocation(searchSlot, targetSlot) {
      for (let i = 0; i < searchSlot.length; i++) {
        const node = searchSlot[i];
        if (node.type === "frac") {
          if (node.num === targetSlot) return { parentSlot: searchSlot, node, nodeIdx: i, key: "num" };
          if (node.den === targetSlot) return { parentSlot: searchSlot, node, nodeIdx: i, key: "den" };
          const r1 = findSlotLocation(node.num, targetSlot);
          if (r1) return r1;
          const r2 = findSlotLocation(node.den, targetSlot);
          if (r2) return r2;
        } else if (node.type === "sqrt" || node.type === "sup") {
          if (node.body === targetSlot) return { parentSlot: searchSlot, node, nodeIdx: i, key: "body" };
          const r = findSlotLocation(node.body, targetSlot);
          if (r) return r;
        }
      }
      return null;
    }

    function checkAutoShortcuts() {
      const s = cursor.slot;
      let word = "";
      let start = cursor.index - 1;
      while (start >= 0 && s[start].type === "char" && /[a-zA-Z]/.test(s[start].ch)) {
        word = s[start].ch + word;
        start--;
      }
      if (word.endsWith("sqrt")) {
        s.splice(cursor.index - 4, 4);
        const sq = { type: "sqrt", body: [] };
        s.splice(cursor.index - 4, 0, sq);
        cursor = { slot: sq.body, index: 0 };
      } else if (word.endsWith("pm")) {
        s.splice(cursor.index - 2, 2, { type: "char", ch: "±" });
        cursor.index -= 1;
      } else if (word.endsWith("pi")) {
        s.splice(cursor.index - 2, 2, { type: "char", ch: "π" });
        cursor.index -= 1;
      } else if (word.endsWith("theta")) {
        s.splice(cursor.index - 5, 5, { type: "char", ch: "θ" });
        cursor.index -= 4;
      }
    }

    function insertChar(ch) {
      if (disabled) return;
      if (ch === "/") { insertFraction(); return; }
      if (ch === "^") { insertSuperscript(); return; }
      cursor.slot.splice(cursor.index, 0, { type: "char", ch });
      cursor.index++;
      checkAutoShortcuts();
      notify();
    }

    function insertFraction() {
      if (disabled) return;
      const s = cursor.slot;
      const stopChars = new Set(["+", "-", "±", ",", "=", "(", "["]);
      let start = cursor.index - 1;
      while (start >= 0) {
        const node = s[start];
        if (node.type === "char" && stopChars.has(node.ch)) break;
        start--;
      }
      start++;
      const numNodes = s.splice(start, cursor.index - start);
      const frac = { type: "frac", num: numNodes, den: [] };
      s.splice(start, 0, frac);
      cursor = numNodes.length > 0 ? { slot: frac.den, index: 0 } : { slot: frac.num, index: 0 };
      notify();
    }

    function insertSqrt() {
      if (disabled) return;
      const sq = { type: "sqrt", body: [] };
      cursor.slot.splice(cursor.index, 0, sq);
      cursor = { slot: sq.body, index: 0 };
      notify();
    }

    function insertSuperscript() {
      if (disabled) return;
      const sup = { type: "sup", body: [] };
      cursor.slot.splice(cursor.index, 0, sup);
      cursor = { slot: sup.body, index: 0 };
      notify();
    }

    function insertText(str) {
      if (disabled) return;
      for (const ch of str) insertChar(ch);
    }

    function insertInverseTrig(fnName) {
      if (disabled) return;
      for (const ch of fnName) {
        cursor.slot.splice(cursor.index, 0, { type: "char", ch });
        cursor.index++;
      }
      const sup = { type: "sup", body: [{ type: "char", ch: "-" }, { type: "char", ch: "1" }] };
      cursor.slot.splice(cursor.index, 0, sup);
      cursor.index++;
      cursor.slot.splice(cursor.index, 0, { type: "char", ch: "(" });
      cursor.index++;
      notify();
    }

    function handleBackspace() {
      if (disabled) return;
      const s = cursor.slot;
      if (cursor.index > 0) {
        const prev = s[cursor.index - 1];
        if (prev.type === "char") {
          s.splice(cursor.index - 1, 1);
          cursor.index--;
        } else if (prev.type === "frac") {
          cursor = { slot: prev.den, index: prev.den.length };
        } else if (prev.type === "sqrt" || prev.type === "sup") {
          cursor = { slot: prev.body, index: prev.body.length };
        }
        notify();
        return;
      }
      const loc = findSlotLocation(root, s);
      if (!loc) return;
      if (loc.node.type === "frac") {
        if (loc.key === "den") {
          const combined = [...loc.node.num, ...loc.node.den];
          const newIdx = loc.nodeIdx + loc.node.num.length;
          loc.parentSlot.splice(loc.nodeIdx, 1, ...combined);
          cursor = { slot: loc.parentSlot, index: newIdx };
        } else {
          const combined = [...loc.node.num, ...loc.node.den];
          loc.parentSlot.splice(loc.nodeIdx, 1, ...combined);
          cursor = { slot: loc.parentSlot, index: loc.nodeIdx };
        }
      } else {
        const inner = loc.node.body;
        loc.parentSlot.splice(loc.nodeIdx, 1, ...inner);
        cursor = { slot: loc.parentSlot, index: loc.nodeIdx };
      }
      notify();
    }

    function moveLeft() {
      if (cursor.index > 0) {
        const prev = cursor.slot[cursor.index - 1];
        if (prev.type === "frac") cursor = { slot: prev.den, index: prev.den.length };
        else if (prev.type === "sqrt" || prev.type === "sup") cursor = { slot: prev.body, index: prev.body.length };
        else cursor.index--;
      } else {
        const loc = findSlotLocation(root, cursor.slot);
        if (loc) {
          if (loc.node.type === "frac" && loc.key === "den") cursor = { slot: loc.node.num, index: loc.node.num.length };
          else cursor = { slot: loc.parentSlot, index: loc.nodeIdx };
        }
      }
      render();
    }

    function moveRight() {
      if (cursor.index < cursor.slot.length) {
        const next = cursor.slot[cursor.index];
        if (next.type === "frac") cursor = { slot: next.num, index: 0 };
        else if (next.type === "sqrt" || next.type === "sup") cursor = { slot: next.body, index: 0 };
        else cursor.index++;
      } else {
        const loc = findSlotLocation(root, cursor.slot);
        if (loc) {
          if (loc.node.type === "frac" && loc.key === "num") cursor = { slot: loc.node.den, index: 0 };
          else cursor = { slot: loc.parentSlot, index: loc.nodeIdx + 1 };
        }
      }
      render();
    }

    function moveUp() {
      const loc = findSlotLocation(root, cursor.slot);
      if (loc && loc.node.type === "frac" && loc.key === "den") {
        cursor = { slot: loc.node.num, index: Math.min(cursor.index, loc.node.num.length) };
        render();
      }
    }

    function moveDown() {
      const loc = findSlotLocation(root, cursor.slot);
      if (loc && loc.node.type === "frac" && loc.key === "num") {
        cursor = { slot: loc.node.den, index: Math.min(cursor.index, loc.node.den.length) };
        render();
      } else if (loc && loc.node.type === "sup") {
        cursor = { slot: loc.parentSlot, index: loc.nodeIdx + 1 };
        render();
      }
    }

    function exitCurrentSlot() {
      const loc = findSlotLocation(root, cursor.slot);
      if (loc) {
        if (loc.node.type === "frac" && loc.key === "num") cursor = { slot: loc.node.den, index: 0 };
        else cursor = { slot: loc.parentSlot, index: loc.nodeIdx + 1 };
        render();
        return true;
      }
      return false;
    }

    function toLatexString(slot = root) {
      let out = "";
      let i = 0;
      const fnWords = new Set(["arcsin", "arccos", "arctan", "asin", "acos", "atan", "sin", "cos", "tan", "ln", "log", "exp", "sec", "csc", "cot", "cosec", "arg", "Re", "Im"]);
      while (i < slot.length) {
        const node = slot[i];
        if (node.type === "char") {
          if (/^[a-zA-Z]$/.test(node.ch)) {
            let j = i;
            let word = "";
            while (j < slot.length && slot[j].type === "char" && /^[a-zA-Z]$/.test(slot[j].ch)) {
              word += slot[j].ch;
              j++;
            }
            if (fnWords.has(word)) {
              if (word === "asin") out += "\\arcsin ";
              else if (word === "acos") out += "\\arccos ";
              else if (word === "atan") out += "\\arctan ";
              else if (word === "cosec" || word === "Re" || word === "Im") out += `\\operatorname{${word}} `;
              else out += `\\${word} `;
            } else {
              out += word;
            }
            i = j;
            continue;
          }
          if (node.ch === "±") out += "\\pm ";
          else if (node.ch === "π") out += "\\pi ";
          else if (node.ch === "θ") out += "\\theta ";
          else if (node.ch === "−") out += "-";
          else if (node.ch === "·" || node.ch === "*") out += "\\cdot ";
          else if (node.ch === "{" || node.ch === "}" || node.ch === "%" || node.ch === "#") out += "\\" + node.ch;
          else out += node.ch;
        } else if (node.type === "frac") {
          out += `\\dfrac{${toLatexString(node.num) || "\\square"}}{${toLatexString(node.den) || "\\square"}}`;
        } else if (node.type === "sqrt") {
          out += `\\sqrt{${toLatexString(node.body) || "\\square"}}`;
        } else if (node.type === "sup") {
          out += `^{${toLatexString(node.body) || "\\square"}}`;
        }
        i++;
      }
      return out;
    }

    function toEvalString(slot = root) {
      return slot.map(node => {
        if (node.type === "char") {
          if (node.ch === "±") return "+-";
          if (node.ch === "π") return "pi";
          if (node.ch === "−") return "-";
          if (node.ch === "·") return "*";
          return node.ch;
        }
        if (node.type === "frac") return `((${toEvalString(node.num)})/(${toEvalString(node.den)}))`;
        if (node.type === "sqrt") return `sqrt(${toEvalString(node.body)})`;
        if (node.type === "sup") return `^(${toEvalString(node.body)})`;
        return "";
      }).join("");
    }

    function renderSlot(slot, isChildEmptyBox = false) {
      const span = document.createElement("span");
      span.className = "mf-slot" + (isChildEmptyBox && slot.length === 0 ? " mf-empty-box" : "");
      span.onclick = (e) => {
        if (disabled) return;
        e.stopPropagation();
        cursor = { slot, index: slot.length };
        focus();
      };

      const addCaretIf = (idx) => {
        if (isFocused && !disabled && cursor.slot === slot && cursor.index === idx) {
          const c = document.createElement("span");
          c.className = "mf-caret";
          span.appendChild(c);
        }
      };

      addCaretIf(0);

      const fnWords = new Set(["arcsin", "arccos", "arctan", "asin", "acos", "atan", "sin", "cos", "tan", "ln", "log", "exp", "sec", "csc", "cot", "cosec", "arg", "Re", "Im"]);
      const fnIndices = new Set();
      let runStart = -1;
      for (let i = 0; i <= slot.length; i++) {
        const isLetter = i < slot.length && slot[i].type === "char" && /^[a-zA-Z]$/.test(slot[i].ch);
        if (isLetter && runStart === -1) runStart = i;
        else if (!isLetter && runStart !== -1) {
          const word = slot.slice(runStart, i).map(n => n.ch).join("");
          if (fnWords.has(word)) {
            for (let k = runStart; k < i; k++) fnIndices.add(k);
          }
          runStart = -1;
        }
      }

      slot.forEach((node, idx) => {
        if (node.type === "char") {
          const chEl = document.createElement("span");
          const isComma = node.ch === ",";
          const isOp = ["+", "-", "±", "="].includes(node.ch);
          const isVar = /^[a-zA-Zθ]$/.test(node.ch) && !fnIndices.has(idx);
          chEl.className = "mf-char" + (isComma ? " mf-comma" : isOp ? " mf-op" : "") + (isVar ? " mf-var" : "");
          chEl.textContent = node.ch === "-" ? "−" : node.ch === "*" ? "·" : node.ch;
          chEl.onclick = (e) => {
            if (disabled) return;
            e.stopPropagation();
            const rect = chEl.getBoundingClientRect();
            cursor = { slot, index: (e.clientX - rect.left < rect.width / 2) ? idx : idx + 1 };
            focus();
          };
          span.appendChild(chEl);
        } else if (node.type === "frac") {
          const f = document.createElement("span");
          f.className = "mf-frac";
          const num = document.createElement("span");
          num.className = "mf-frac-num";
          num.appendChild(renderSlot(node.num, true));
          const den = document.createElement("span");
          den.className = "mf-frac-den";
          den.appendChild(renderSlot(node.den, true));
          f.append(num, den);
          span.appendChild(f);
        } else if (node.type === "sqrt") {
          const sq = document.createElement("span");
          sq.className = "mf-sqrt";
          sq.innerHTML = `<svg class="mf-sqrt-svg" viewBox="0 0 12 22" preserveAspectRatio="none" aria-hidden="true"><path d="M0.5 13 L3.2 11.2 L6.2 20.5 L11.5 0.6 L12 0.6" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>`;
          const body = document.createElement("span");
          body.className = "mf-sqrt-body";
          body.appendChild(renderSlot(node.body, true));
          sq.appendChild(body);
          span.appendChild(sq);
        } else if (node.type === "sup") {
          const sup = document.createElement("span");
          sup.className = "mf-sup";
          sup.appendChild(renderSlot(node.body, true));
          span.appendChild(sup);
        }
        addCaretIf(idx + 1);
      });

      return span;
    }

    function render() {
      renderEl.innerHTML = "";
      if (root.length === 0 && !isFocused && placeholder) {
        const ph = document.createElement("span");
        ph.className = "mf-placeholder";
        ph.textContent = placeholder;
        renderEl.appendChild(ph);
      } else if (!isFocused && root.length > 0 && window.katex) {
        const kSpan = document.createElement("span");
        kSpan.className = "mf-katex-static";
        try {
          kSpan.innerHTML = window.katex.renderToString(toLatexString(root), { displayMode: false, throwOnError: false });
          renderEl.appendChild(kSpan);
        } catch (_) {
          renderEl.appendChild(renderSlot(root, false));
        }
      } else {
        renderEl.appendChild(renderSlot(root, false));
      }
    }

    function notify() {
      render();
      if (onChange) onChange(root, toEvalString());
    }

    function focus() {
      if (disabled) return;
      activeMathField = api;
      hiddenInput.focus({ preventScroll: true });
      isFocused = true;
      wrap.classList.add("focused");
      render();
    }

    wrap.addEventListener("click", (e) => {
      if (disabled) return;
      if (!isFocused || e.target === wrap || e.target === renderEl) cursor = { slot: root, index: root.length };
      focus();
    });

    hiddenInput.addEventListener("focus", () => {
      isFocused = true;
      activeMathField = api;
      wrap.classList.add("focused");
      render();
    });

    hiddenInput.addEventListener("blur", () => {
      isFocused = false;
      wrap.classList.remove("focused");
      render();
    });

    hiddenInput.addEventListener("keydown", (e) => {
      if (disabled) return;
      if (e.key === "ArrowLeft") { e.preventDefault(); moveLeft(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); moveRight(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveUp(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); moveDown(); }
      else if (e.key === "Backspace") { e.preventDefault(); handleBackspace(); }
      else if (e.key === "Delete") {
        e.preventDefault();
        if (cursor.index < cursor.slot.length) {
          const next = cursor.slot[cursor.index];
          if (next.type === "char") {
            cursor.slot.splice(cursor.index, 1);
            notify();
          } else if (next.type === "frac") {
            cursor = { slot: next.num, index: 0 };
            render();
          } else {
            cursor = { slot: next.body, index: 0 };
            render();
          }
        }
      }
      else if (e.key === "Tab") { if (exitCurrentSlot()) e.preventDefault(); }
      else if (e.key === "Enter") { e.preventDefault(); if (onEnter) onEnter(); }
    });

    hiddenInput.addEventListener("input", () => {
      const val = hiddenInput.value;
      if (val === "") handleBackspace();
      else if (val.length > 1) {
        const typed = val.startsWith(" ") ? val.slice(1) : val;
        for (const ch of typed) insertChar(ch);
      } else if (val !== " ") insertChar(val);
      hiddenInput.value = " ";
    });

    const api = {
      getEvalString: () => toEvalString(),
      getAst: () => root,
      insertText,
      insertInverseTrig,
      insertFraction,
      insertSqrt,
      insertSuperscript,
      handleBackspace,
      moveLeft,
      moveRight,
      focus
    };

    render();
    return api;
  }

  // -------------------- 5. OFFLINE MATH EVALUATOR (Exact, 3 s.f., & d.p.) --------------------
  function preprocessExpr(raw) {
    let s = (raw || "").trim().replace(/\+?\.{2,}/g, "").replace(/^\$/, "");
    s = s.replace(/\|([^|]+)\|/g, "(abs($1))");
    s = s
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "(($1)/($2))")
      .replace(/\\sqrt\{([^{}]+)\}/g, "sqrt($1)")
      .replace(/\\pi/g, "pi").replace(/π/g, "pi")
      .replace(/\\ln/g, "ln").replace(/\\log/g, "log")
      .replace(/\\arcsin/g, "asin").replace(/\\arccos/g, "acos").replace(/\\arctan/g, "atan")
      .replace(/\\sin/g, "sin").replace(/\\cos/g, "cos").replace(/\\tan/g, "tan")
      .replace(/\\sec/g, "sec").replace(/\\csc/g, "csc").replace(/\\cot/g, "cot").replace(/\\exp/g, "exp")
      .replace(/\\operatorname\{cosec\}/g, "cosec")
      .replace(/\\left|\\right/g, "")
      .replace(/\\mathrm\{([a-zA-Z]+)\}/g, "$1")
      .replace(/−/g, "-")
      .replace(/[×·]/g, "*")
      .replace(/\s+/g, "");

    s = s
      .replace(/arcsin/gi, "asin")
      .replace(/arccos/gi, "acos")
      .replace(/arctan/gi, "atan")
      .replace(/sin\^\(?-1\)?(?=\()/gi, "asin")
      .replace(/cos\^\(?-1\)?(?=\()/gi, "acos")
      .replace(/tan\^\(?-1\)?(?=\()/gi, "atan");

    const maskedFns = [];
    s = s.replace(/(cosec|asin|acos|atan|sqrt|sin|cos|tan|sec|csc|cot|exp|log|abs|ln)(?=\()/gi, (fn) => {
      const idx = maskedFns.length;
      maskedFns.push(fn.toLowerCase());
      return `\u0001${idx}\u0002`;
    });

    s = s.replace(/(\d)([a-zA-Z(\u0001])/g, "$1*$2");
    s = s.replace(/([a-zA-Z])(\u0001)/g, "$1*$2");
    s = s.replace(/(\))(\d|[a-zA-Z(\u0001])/g, "$1*$2");
    s = s.replace(/(^|[^a-zA-Z\u0001\u0002])(pi|e|i)([a-zA-Z(\u0001])/g, "$1$2*$3");

    s = s.replace(/\u0001(\d+)\u0002/g, (_, idx) => maskedFns[Number(idx)]);
    return s;
  }

  function evalComplex(exprStr, env = {}) {
    const s = preprocessExpr(exprStr);
    if (!s) throw new Error("Empty");
    let pos = 0;

    const C = (re, im = 0) => ({ re, im });
    const add = (a, b) => C(a.re + b.re, a.im + b.im);
    const sub = (a, b) => C(a.re - b.re, a.im - b.im);
    const mul = (a, b) => C(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
    const div = (a, b) => {
      const d = b.re * b.re + b.im * b.im;
      if (d === 0) throw new Error("Div0");
      return C((a.re * b.re + a.im * b.im) / d, (a.im * b.re - a.re * b.im) / d);
    };

    function parseExpr() {
      let left = parseTerm();
      while (pos < s.length && (s[pos] === "+" || s[pos] === "-")) {
        const op = s[pos++];
        const right = parseTerm();
        left = op === "+" ? add(left, right) : sub(left, right);
      }
      return left;
    }

    function parseTerm() {
      let left = parsePow();
      while (pos < s.length && (s[pos] === "*" || s[pos] === "/")) {
        const op = s[pos++];
        const right = parsePow();
        left = op === "*" ? mul(left, right) : div(left, right);
      }
      return left;
    }

    function parsePow() {
      let base = parseUnary();
      if (pos < s.length && s[pos] === "^") {
        pos++;
        const exp = parsePow();
        if (Math.abs(base.im) < 1e-12 && Math.abs(exp.im) < 1e-12) {
          return C(Math.pow(base.re, exp.re), 0);
        }
        if (Math.abs(exp.im) < 1e-12 && Number.isInteger(exp.re) && exp.re >= 0) {
          let r = C(1, 0);
          for (let k = 0; k < exp.re; k++) r = mul(r, base);
          return r;
        }
        const r = Math.hypot(base.re, base.im);
        if (r === 0) {
          if (exp.re > 0) return C(0, 0);
          throw new Error("0^complex");
        }
        const theta = Math.atan2(base.im, base.re);
        const lnBase = C(Math.log(r), theta);
        const p = mul(exp, lnBase);
        const mag = Math.exp(p.re);
        return C(mag * Math.cos(p.im), mag * Math.sin(p.im));
      }
      return base;
    }

    function parseUnary() {
      if (s[pos] === "-") { pos++; return mul(C(-1), parseUnary()); }
      if (s[pos] === "+") { pos++; return parseUnary(); }
      return parsePrimary();
    }

    function parsePrimary() {
      if (s[pos] === "(") {
        pos++;
        const val = parseExpr();
        if (s[pos] !== ")") throw new Error("Unclosed");
        pos++;
        return val;
      }
      if (/[0-9.]/.test(s[pos])) {
        let num = "";
        while (pos < s.length && /[0-9.]/.test(s[pos])) num += s[pos++];
        if (isNaN(Number(num))) throw new Error("NaN");
        return C(Number(num), 0);
      }
      if (/[a-zA-Z]/.test(s[pos])) {
        let id = "";
        while (pos < s.length && /[a-zA-Z]/.test(s[pos])) id += s[pos++];
        if (s[pos] === "(") {
          pos++;
          const arg = parseExpr();
          if (s[pos] !== ")") throw new Error("Unclosed fn");
          pos++;
          if (id === "abs") return C(Math.hypot(arg.re, arg.im), 0);
          if (Math.abs(arg.im) > 1e-9) throw new Error("Complex fn");
          const x = arg.re;
          const fns = {
            sqrt: () => x >= 0 ? C(Math.sqrt(x)) : C(0, Math.sqrt(-x)),
            ln: () => C(Math.log(x)),
            log: () => C(Math.log10(x)),
            abs: () => C(Math.abs(x)),
            sin: () => C(Math.sin(x)),
            cos: () => C(Math.cos(x)),
            tan: () => C(Math.tan(x)),
            sec: () => C(1 / Math.cos(x)),
            csc: () => C(1 / Math.sin(x)),
            cosec: () => C(1 / Math.sin(x)),
            cot: () => C(1 / Math.tan(x)),
            exp: () => C(Math.exp(x)),
            asin: () => C(Math.asin(x)),
            acos: () => C(Math.acos(x)),
            atan: () => C(Math.atan(x))
          };
          if (!fns[id]) throw new Error("Unknown fn " + id);
          return fns[id]();
        }
        if (id === "pi") return C(Math.PI, 0);
        if (id === "e") return C(Math.E, 0);
        if (id === "i") return C(0, 1);
        if (id in env) return C(env[id], 0);
        throw new Error("Unknown var " + id);
      }
      throw new Error("Unexpected " + s[pos]);
    }

    const res = parseExpr();
    if (pos < s.length) throw new Error("Trailing");
    return res;
  }

  function isNumericMatch(userVal, trueVal, exactRequired = false, dp = null) {
    if (Math.abs(userVal - trueVal) < 1e-8) return { ok: true };
    if (dp !== null && dp !== undefined) {
      const rounded = Number(trueVal.toFixed(dp));
      if (Math.abs(userVal - rounded) < 1e-8) return { ok: true };
      return { ok: false };
    }
    if (exactRequired) {
      const rel = Math.abs(userVal - trueVal) / (Math.abs(trueVal) || 1);
      if (rel < 0.01) return { ok: false, msg: "Numerically close, but exact form is required (no rounded decimals)." };
      return { ok: false };
    }
    if (trueVal === 0) return { ok: Math.abs(userVal) < 1e-8 };
    const sf3 = Number(trueVal.toPrecision(3));
    if (Math.abs(userVal - sf3) < 1e-8) return { ok: true };
    if (Math.abs(userVal - trueVal) / Math.abs(trueVal) < 5e-4) return { ok: true };
    return { ok: false };
  }

  function gradeSingleInput(part, rawInput) {
    const trimmed = (rawInput || "").trim();
    if (!trimmed) return { ok: false, msg: "Please enter an answer." };

    try {
      if (part.mode === "number") {
        const u = evalComplex(trimmed);
        if (Math.abs(u.im) > 1e-9) return { ok: false };
        const candidateList = part.answers || [part.answer];
        for (const ans of candidateList) {
          const t = evalComplex(ans);
          const res = isNumericMatch(u.re, t.re, !!part.exactRequired, part.dp);
          if (res.ok && part.exactRequired && /^\-?\d*\.\d+$/.test(trimmed) && Math.abs(Number(trimmed) - t.re) >= 1e-8) {
            return { ok: false, msg: "Exact form is required." };
          }
          if (res.ok) return res;
          if (part.signHint && Math.abs(u.re + t.re) < 1e-5) {
            return { ok: false, msg: "Magnitude is right, but check the sign of the rate of change." };
          }
          if (res.msg) return res;
        }
        return { ok: false };
      }

      if (part.mode === "number-list") {
        const items = trimmed.split(/,|;|\bor\b/i).map(x => x.trim()).filter(Boolean);
        if (items.length !== part.answer.length) return { ok: false };
        const parsed = items.map(it => evalComplex(it));
        if (parsed.some(u => Math.abs(u.im) > 1e-9)) return { ok: false };
        const userVals = parsed.map(u => u.re).sort((a, b) => a - b);
        const trueVals = [...part.answer].sort((a, b) => a - b);
        const ok = userVals.every((v, idx) => isNumericMatch(v, trueVals[idx], !!part.exactRequired, part.dp).ok);
        return { ok };
      }

      if (part.mode === "tuple") {
        const cleaned = trimmed.replace(/^[\(\[]|[\)\]]$/g, "");
        const items = cleaned.split(",").map(x => x.trim()).filter(Boolean);
        if (items.length !== part.answer.length) return { ok: false };
        const parsed = items.map(it => evalComplex(it));
        if (parsed.some(u => Math.abs(u.im) > 1e-9)) return { ok: false };
        const ok = parsed.every((u, idx) => isNumericMatch(u.re, part.answer[idx], !!part.exactRequired, part.dp).ok);
        return { ok };
      }

      if (part.mode === "complex-list") {
        const items = trimmed.split(/,|;|\band\b/i).map(x => x.trim()).filter(Boolean);
        if (items.length !== part.answer.length) return { ok: false };
        const uC = items.map(it => evalComplex(it));
        const tC = part.answer.map(it => evalComplex(it));
        const used = new Set();
        for (const u of uC) {
          const matchIdx = tC.findIndex((t, idx) => !used.has(idx) && Math.hypot(u.re - t.re, u.im - t.im) < 1e-7);
          if (matchIdx === -1) return { ok: false };
          used.add(matchIdx);
        }
        return { ok: true };
      }

      if (part.mode === "expr-list") {
        const items = trimmed.split(/,|;|\bor\b/i).map(x => x.trim()).filter(Boolean);
        if (items.length !== part.answer.length) return { ok: false };
        const varNames = Object.keys(part.vars);
        const count = part.vars[varNames[0]].length;
        for (let i = 0; i < count; i++) {
          const env = {};
          varNames.forEach(v => { env[v] = part.vars[v][i]; });
          const uVals = items.map(it => evalComplex(it, env).re).sort((a, b) => a - b);
          const tVals = part.answer.map(a => evalComplex(a, env).re).sort((a, b) => a - b);
          if (!uVals.every((v, idx) => Math.abs(v - tVals[idx]) < 1e-6)) return { ok: false };
        }
        return { ok: true };
      }

      if (part.mode === "expr") {
        const varNames = Object.keys(part.vars);
        const count = part.vars[varNames[0]].length;
        for (let i = 0; i < count; i++) {
          const env = {};
          varNames.forEach(v => { env[v] = part.vars[v][i]; });
          const u = evalComplex(trimmed, env).re;
          const t = evalComplex(part.answer, env).re;
          const res = isNumericMatch(u, t, !!part.exactRequired);
          if (!res.ok) return res;
        }
        return { ok: true };
      }

      if (part.mode === "expr-pm") {
        let branches = [];
        if (trimmed.includes("+-") || trimmed.includes("\\pm") || trimmed.includes("±")) {
          const norm = trimmed.replace(/\\pm|±/g, "+-");
          branches = [norm.replace("+-", "+"), norm.replace("+-", "-")];
        } else {
          branches = trimmed.split(/,|;|\bor\b/i).map(x => x.trim()).filter(Boolean);
        }
        if (branches.length !== 2) return { ok: false, msg: "Give both roots (e.g. using ±)." };
        for (const cVal of part.vars.c) {
          const tPos = evalComplex(part.answer, { c: cVal }).re;
          const tSet = [tPos, -tPos].sort((a, b) => a - b);
          const uSet = branches.map(b => evalComplex(b, { c: cVal }).re).sort((a, b) => a - b);
          if (Math.abs(uSet[0] - tSet[0]) > 1e-6 || Math.abs(uSet[1] - tSet[1]) > 1e-6) {
            return { ok: false };
          }
        }
        return { ok: true };
      }

      if (part.mode === "antiderivative") {
        const [x1, x2, x3] = part.domainPoints;
        const u1 = evalComplex(trimmed, { x: x1, c: 0, C: 0, k: 0 }).re;
        const u2 = evalComplex(trimmed, { x: x2, c: 0, C: 0, k: 0 }).re;
        const u3 = evalComplex(trimmed, { x: x3, c: 0, C: 0, k: 0 }).re;
        const t1 = evalComplex(part.answer, { x: x1 }).re;
        const t2 = evalComplex(part.answer, { x: x2 }).re;
        const t3 = evalComplex(part.answer, { x: x3 }).re;
        const okDiff = Math.abs((u2 - u1) - (t2 - t1)) < 1e-6 && Math.abs((u3 - u1) - (t3 - t1)) < 1e-6;
        if (!okDiff) return { ok: false };
        if (!/[+]\s*[cCkK]\b/.test(trimmed)) {
          return { ok: false, msg: "Your antiderivative matches, but don't forget the arbitrary constant (+ c)." };
        }
        return { ok: true };
      }
    } catch (_) {
      return { ok: false, msg: "Could not parse expression. Check brackets or use the keypad." };
    }
    return { ok: false };
  }

  // -------------------- 6. STREAK & META BAR --------------------
  function getQuestionStatus(q, rec) {
    if (!q || !rec || !rec.parts) return "untouched";
    const entries = q.parts.map((_, i) => rec.parts[i]);
    const anyTouched = entries.some(e => e && (e.status === "ok" || e.status === "bad" || e.attempts > 0 || e.revealed));
    if (!anyTouched) return "untouched";
    const allResolved = entries.every(e => e && (e.status === "ok" || e.status === "bad"));
    if (!allResolved) return "partial";
    return entries.every(e => e.status === "ok") ? "ok" : "bad";
  }

  function getCalendarStatus(q, rec) {
    const st = getQuestionStatus(q, rec);
    if (st === "ok" || st === "bad") return { cls: "done", label: "Done" };
    if (st === "partial") return { cls: "partial", label: "Partially Complete" };
    return { cls: "incomplete", label: "Incomplete" };
  }

  function computeStreak() {
    let streak = 0;
    const todayKey = getStudyDayKey();
    const check = new Date(getSGTNow().getTime() - 6 * 3600000);
    for (let i = 0; i < 365; i++) {
      const y = check.getFullYear();
      const m = String(check.getMonth() + 1).padStart(2, "0");
      const d = String(check.getDate()).padStart(2, "0");
      const key = `${y}-${m}-${d}`;
      if (key < LAUNCH_DAY_KEY) break;
      const rec = state.days[key];
      const pSt = rec?.pure ? getQuestionStatus(window.H2_QUESTIONS.find(q => q.id === rec.pure.questionId), rec.pure) : "untouched";
      const sSt = rec?.stats ? getQuestionStatus(window.H2_QUESTIONS.find(q => q.id === rec.stats.questionId), rec.stats) : "untouched";
      const pureDone = pSt === "ok" || pSt === "bad";
      const statsDone = sSt === "ok" || sSt === "bad";

      if (pureDone || statsDone) streak++;
      else if (key !== todayKey) break;
      check.setDate(check.getDate() - 1);
    }
    return streak;
  }

  function getQuestionNoteData(qId) {
    const raw = state.notes?.[qId];
    if (!raw) {
      return { flaggedParts: [], flaggedAt: null, entries: [{ id: "1", kind: "mistake", part: "", tags: [], text: "", updatedAt: null }] };
    }
    const flaggedParts = Array.isArray(raw.flaggedParts) ? raw.flaggedParts : [];
    const flaggedAt = raw.flaggedAt || null;
    if (Array.isArray(raw.entries)) {
      return {
        flaggedParts,
        flaggedAt,
        entries: raw.entries.length
          ? raw.entries.map(e => ({ id: e.id || "1", kind: e.kind === "note" ? "note" : "mistake", part: e.part || "", tags: Array.isArray(e.tags) ? e.tags : [], text: e.text || "", updatedAt: e.updatedAt || null }))
          : [{ id: "1", kind: "mistake", part: "", tags: [], text: "", updatedAt: null }]
      };
    }
    return {
      flaggedParts,
      flaggedAt,
      entries: [{ id: "1", kind: "mistake", part: "", tags: Array.isArray(raw.tags) ? raw.tags : [], text: raw.text || "", updatedAt: raw.updatedAt || null }]
    };
  }

  function getNonEmptyEntries(noteData) {
    return (noteData.entries || []).filter(e => (e.text && e.text.trim()) || (e.kind !== "note" && e.tags && e.tags.length));
  }

  function updateMetaBar() {
    const today = getStudyDayKey();
    const rec = getDayRecord(today);
    let done = 0;
    ["pure", "stats"].forEach(cat => {
      if (rec[cat]?.questionId) {
        const q = window.H2_QUESTIONS.find(x => x.id === rec[cat].questionId);
        const st = q ? getQuestionStatus(q, rec[cat]) : "untouched";
        if (st === "ok" || st === "bad") done++;
      }
    });
    document.getElementById("today-progress").textContent = `${done}/2`;
    document.getElementById("streak-count").textContent = computeStreak();
  }

  // -------------------- 7. RENDER QUESTION VIEW --------------------
  function renderPartCard(pCard, part, idx, record, isRandom, qMeta = null) {
    if (!record.parts[idx]) {
      record.parts[idx] = { attempts: 0, status: "open", userInputs: [], asts: [], feedback: null, revealed: false };
    }
    const pState = record.parts[idx];
    if (!pState.asts) pState.asts = [];

    const isFocusMode = !!(record.focusFlaggedParts && record.focusFlaggedParts.length);
    const isDimmedContext = isFocusMode && !record.focusFlaggedParts.includes(part.label);
    const isFocusedTarget = isFocusMode && record.focusFlaggedParts.includes(part.label);

    pCard.className = "part-card" +
      (isDimmedContext ? " part-dimmed" : "") +
      (isFocusedTarget ? " part-focus-target" : "") +
      (pState.status === "ok" ? " solved-ok" : pState.status === "bad" ? " solved-bad" : "");

    const statusText = isDimmedContext
      ? "Reference Answer"
      : part.type === "auto"
        ? `Attempts: ${pState.attempts}/5`
        : (pState.status === "ok" ? "Marked Correct" : pState.status === "bad" ? "Missed" : "Self-Grade");

    const qId = record.questionId;
    const isPinned = !!(qId && pinnedPartsByQuestion[qId]?.has(idx));
    const isFlagged = !!(qId && getQuestionNoteData(qId).flaggedParts.includes(part.label));

    pCard.innerHTML = `
      <div class="part-top">
        <span class="part-label">Part ${part.label} <small style="font-weight:400;color:var(--muted);">[${part.marks}m]</small></span>
        <span class="part-top-right">
          <span class="part-actions">
            <button type="button" class="part-flag-btn ${isFlagged ? "flagged" : ""}" aria-pressed="${isFlagged ? "true" : "false"}" aria-label="Flag part ${part.label} for Study Log" title="Flag part ${part.label} for Study Log">${flagIconSvg(isFlagged)}</button>
            <button type="button" class="part-pin-dot ${isPinned ? "pinned" : ""}" aria-pressed="${isPinned ? "true" : "false"}" aria-label="Pin part ${part.label} to scratchpad" title="Pin part ${part.label} to scratchpad"></button>
          </span>
          <span>${statusText}</span>
        </span>
      </div>
      <div class="part-prompt">${renderMathText(part.prompt)}</div>
      <div class="part-interaction"></div>
    `;

    const pinBtn = pCard.querySelector(".part-pin-dot");
    if (pinBtn && qId) {
      pinBtn.onclick = () => {
        if (!pinnedPartsByQuestion[qId]) pinnedPartsByQuestion[qId] = new Set();
        const set = pinnedPartsByQuestion[qId];
        if (set.has(idx)) set.delete(idx);
        else set.add(idx);
        const nowPinned = set.has(idx);
        pinBtn.classList.toggle("pinned", nowPinned);
        pinBtn.setAttribute("aria-pressed", nowPinned ? "true" : "false");
        updateScratchpadCounter(qId);
      };
    }

    const partFlagBtn = pCard.querySelector(".part-flag-btn");
    if (partFlagBtn && qId) {
      partFlagBtn.onclick = () => {
        const noteData = getQuestionNoteData(qId);
        const list = noteData.flaggedParts;
        const pos = list.indexOf(part.label);
        if (pos >= 0) {
          list.splice(pos, 1);
          if (!list.length) noteData.flaggedAt = null;
        } else {
          list.push(part.label);
          noteData.flaggedAt = Date.now();
        }
        state.notes[qId] = noteData;
        saveState();
        const nowFlagged = list.includes(part.label);
        partFlagBtn.classList.toggle("flagged", nowFlagged);
        partFlagBtn.setAttribute("aria-pressed", nowFlagged ? "true" : "false");
        partFlagBtn.innerHTML = flagIconSvg(nowFlagged);
      };
    }

    const zone = pCard.querySelector(".part-interaction");

    if (isDimmedContext) {
      const diagHtml = renderDiagramBox(part.solutionSvg, part.solutionImg);
      zone.innerHTML = `<div class="solution-box">${diagHtml}${renderMathText(part.solution || "")}</div>`;
      return;
    }

    if (part.type === "self") {
      if (!pState.revealed) {
        const btn = document.createElement("button");
        btn.className = "btn btn-primary";
        btn.textContent = "Reveal Worked Solution";
        btn.onclick = () => {
          pState.revealed = true;
          if (!isRandom) saveState();
          if (qMeta) trackQuestionProgress(qMeta.q, record, qMeta.mode, "reveal");
          renderPartCard(pCard, part, idx, record, isRandom, qMeta);
        };
        zone.appendChild(btn);
      } else {
        const diagHtml = renderDiagramBox(part.solutionSvg, part.solutionImg);
        zone.innerHTML = `<div class="solution-box">${diagHtml}${renderMathText(part.solution)}</div>`;
        const row = document.createElement("div");
        row.className = "controls-row";
        row.innerHTML = `
          <button class="btn ${pState.status === "ok" ? "btn-ok" : ""}" data-grade="ok">I got it right</button>
          <button class="btn ${pState.status === "bad" ? "btn-bad" : ""}" data-grade="bad">I missed this</button>
        `;
        row.querySelectorAll("button").forEach(b => {
          b.onclick = () => {
            const prevQStatus = qMeta ? getQuestionStatus(qMeta.q, record) : null;
            pState.status = b.dataset.grade;
            if (!isRandom) saveState();
            if (qMeta) trackQuestionProgress(qMeta.q, record, qMeta.mode, pState.status === "ok" ? "self_ok" : "self_bad", prevQStatus);
            renderPartCard(pCard, part, idx, record, isRandom, qMeta);
            pCard.classList.add(pState.status === "ok" ? "pop-ok" : "shake");
            updateMetaBar();
          };
        });
        zone.appendChild(row);
      }
      return;
    }

    const fields = part.mode === "multi-field"
      ? part.fields
      : [{ label: "", placeholder: part.placeholder || "Type your answer...", answer: part.answer }];

    const az = document.createElement("div");
    az.className = "answer-zone";
    const mathFields = [];
    const isDisabled = pState.status === "ok" || pState.attempts >= 5;

    let submitBtn;
    fields.forEach((f, fIdx) => {
      const fr = document.createElement("div");
      fr.className = "field-row";
      if (f.label) {
        const lbl = document.createElement("span");
        lbl.className = "field-label";
        lbl.textContent = f.label;
        fr.appendChild(lbl);
      }
      const mfMount = document.createElement("div");
      mfMount.style.flex = "1";
      mfMount.style.display = "flex";
      fr.appendChild(mfMount);
      az.appendChild(fr);

      const mf = createMathField(mfMount, {
        placeholder: f.placeholder || "Type math...",
        initialAst: pState.asts[fIdx] || null,
        disabled: isDisabled,
        onChange: (ast, evalStr) => {
          pState.asts[fIdx] = ast;
          pState.userInputs[fIdx] = evalStr;
        },
        onEnter: () => { if (submitBtn && !submitBtn.disabled) submitBtn.click(); }
      });
      mathFields.push(mf);
    });

    const hintLine = document.createElement("div");
    hintLine.className = "typing-hint";
    hintLine.textContent = "Tip: type sqrt, pi, pm, arctan, ^, or / (use → or Tab to exit a box)";
    az.appendChild(hintLine);
    zone.appendChild(az);

    const ctrl = document.createElement("div");
    ctrl.className = "controls-row";

    submitBtn = document.createElement("button");
    submitBtn.className = "btn btn-primary";
    submitBtn.textContent = "Check →";
    submitBtn.disabled = isDisabled;

    const keyBtn = document.createElement("button");
    keyBtn.className = "btn";
    keyBtn.textContent = "Keypad";

    const revealBtn = document.createElement("button");
    revealBtn.className = "btn btn-ghost";
    revealBtn.textContent = pState.revealed ? "Hide Solution" : "Reveal Solution";

    ctrl.append(submitBtn, keyBtn, revealBtn);
    zone.appendChild(ctrl);

    const keypad = document.createElement("div");
    keypad.className = "keypad";
    const keypadItems = [
      { label: "a/b", fn: mf => mf.insertFraction() },
      { label: "√□", fn: mf => mf.insertSqrt() },
      { label: "x^□", fn: mf => mf.insertSuperscript() },
      { label: "±", fn: mf => mf.insertText("±") },
      { label: "π", fn: mf => mf.insertText("π") },
      { label: "e", fn: mf => mf.insertText("e") },
      { label: "i", fn: mf => mf.insertText("i") },
      { label: "ln()", fn: mf => mf.insertText("ln(") },
      { label: "sin⁻¹", fn: mf => mf.insertInverseTrig("sin") },
      { label: "cos⁻¹", fn: mf => mf.insertInverseTrig("cos") },
      { label: "tan⁻¹", fn: mf => mf.insertInverseTrig("tan") },
      { label: "|", fn: mf => mf.insertText("|") },
      { label: "←", fn: mf => mf.moveLeft() },
      { label: "→", fn: mf => mf.moveRight() },
      { label: "⌫", fn: mf => mf.handleBackspace() }
    ];
    keypadItems.forEach(item => {
      const kb = document.createElement("button");
      kb.type = "button";
      kb.className = "key-btn";
      kb.textContent = item.label;
      kb.onmousedown = (e) => e.preventDefault();
      kb.onclick = () => {
        const target = (activeMathField && mathFields.includes(activeMathField)) ? activeMathField : mathFields[0];
        target.focus();
        item.fn(target);
        mathFields.forEach((mf, i) => {
          pState.asts[i] = mf.getAst();
          pState.userInputs[i] = mf.getEvalString();
        });
      };
      keypad.appendChild(kb);
    });
    keyBtn.onclick = () => keypad.classList.toggle("open");
    zone.appendChild(keypad);

    submitBtn.onclick = () => {
      if (pState.status === "ok" || pState.attempts >= 5) return;
      const prevAttempts = pState.attempts;
      const prevQStatus = qMeta ? getQuestionStatus(qMeta.q, record) : null;
      mathFields.forEach((mf, i) => {
        pState.asts[i] = mf.getAst();
        pState.userInputs[i] = mf.getEvalString();
      });

      let animClass = "";
      if (part.mode === "multi-field") {
        let allOk = true;
        let warnMsg = null;
        for (let i = 0; i < fields.length; i++) {
          const r = gradeSingleInput(
            { mode: "number", answer: fields[i].answer, exactRequired: fields[i].exactRequired, dp: fields[i].dp },
            mathFields[i].getEvalString()
          );
          if (!r.ok) {
            allOk = false;
            if (r.msg) warnMsg = `${fields[i].label} ${r.msg}`;
            break;
          }
        }
        if (warnMsg && (warnMsg.includes("exact") || warnMsg.includes("enter"))) {
          pState.feedback = { type: "warn", text: warnMsg };
          animClass = "shake";
        } else if (allOk) {
          pState.attempts++;
          pState.status = "ok";
          pState.revealed = true;
          pState.feedback = { type: "ok", text: "Correct." };
          animClass = "pop-ok";
        } else {
          pState.attempts++;
          pState.feedback = {
            type: "bad",
            text: pState.attempts >= 5 ? "Out of attempts. Solution unlocked below." : "Not quite. Check your working and try again."
          };
          animClass = "shake";
          if (pState.attempts >= 5) { pState.status = "bad"; pState.revealed = true; }
        }
      } else {
        const r = gradeSingleInput(part, mathFields[0].getEvalString());
        if (r.msg && (r.msg.includes("exact") || r.msg.includes("+ c") || r.msg.includes("parse") || r.msg.includes("Please enter") || r.msg.includes("sign"))) {
          pState.feedback = { type: "warn", text: r.msg };
          animClass = "shake";
        } else if (r.ok) {
          pState.attempts++;
          pState.status = "ok";
          pState.revealed = true;
          pState.feedback = { type: "ok", text: "Correct." };
          animClass = "pop-ok";
        } else {
          pState.attempts++;
          pState.feedback = {
            type: "bad",
            text: r.msg || (pState.attempts >= 5 ? "Out of attempts. Solution unlocked below." : "Incorrect. Try again.")
          };
          animClass = "shake";
          if (pState.attempts >= 5) { pState.status = "bad"; pState.revealed = true; }
        }
      }
      if (!isRandom) saveState();
      if (qMeta && pState.attempts > prevAttempts) {
        trackQuestionProgress(qMeta.q, record, qMeta.mode, pState.status === "ok" ? "check_ok" : "check_bad", prevQStatus);
      }
      renderPartCard(pCard, part, idx, record, isRandom, qMeta);
      if (animClass) {
        pCard.classList.remove("shake", "pop-ok");
        void pCard.offsetWidth;
        pCard.classList.add(animClass);
      }
      updateMetaBar();
    };

    revealBtn.onclick = () => {
      pState.revealed = !pState.revealed;
      if (!isRandom) saveState();
      if (qMeta && pState.revealed) trackQuestionProgress(qMeta.q, record, qMeta.mode, "reveal");
      renderPartCard(pCard, part, idx, record, isRandom, qMeta);
    };

    if (pState.feedback) {
      const fb = document.createElement("div");
      fb.className = `feedback ${pState.feedback.type}`;
      fb.textContent = pState.feedback.text;
      zone.appendChild(fb);
    }

    if (pState.revealed) {
      const sol = document.createElement("div");
      sol.className = "solution-box";
      const diagHtml = renderDiagramBox(part.solutionSvg, part.solutionImg);
      sol.innerHTML = `${diagHtml}${renderMathText(part.solution)}`;
      zone.appendChild(sol);

      if (pState.status !== "ok") {
        const ov = document.createElement("button");
        ov.className = "btn btn-ghost";
        ov.style.marginTop = "8px";
        ov.textContent = "My answer was equivalent (mark as correct)";
        ov.onclick = () => {
          const prevQStatus = qMeta ? getQuestionStatus(qMeta.q, record) : null;
          pState.status = "ok";
          pState.feedback = { type: "ok", text: "Manually marked as equivalent" };
          if (!isRandom) saveState();
          if (qMeta) trackQuestionProgress(qMeta.q, record, qMeta.mode, "override_ok", prevQStatus);
          renderPartCard(pCard, part, idx, record, isRandom, qMeta);
          pCard.classList.add("pop-ok");
          updateMetaBar();
        };
        zone.appendChild(ov);
      }
    }
  }

  function renderQuestionView(q, record, { isRandom = false, dayKey = null } = {}) {
    if (isRandom) {
      if (q) setPageTitle(`${q.school} ${q.paper} ${q.qNum}`, { prefixBrand: false });
      else setPageTitle("Practice");
    } else {
      const sectionLabel = (q ? q.category === "pure" : currentTab === "pure") ? "Pure" : "Statistics";
      setPageTitle(sectionLabel);
    }
    syncUrlQuestion(isRandom && q ? q.id : null);
    const main = document.getElementById("main-content");
    main.innerHTML = "";
    if (!q && !isRandom) {
      main.innerHTML = `<div class="card animate-in"><p style="color:var(--muted);font-family:var(--sans);margin:0;">No questions available in this bank yet.</p></div>`;
      syncFeedbackContext();
      return;
    }
    const wrap = document.createElement("div");
    wrap.className = "animate-in";
    main.appendChild(wrap);

    if (isRandom) {
      const filteredPool = getFilteredRandomPool();
      const PURE_TOPIC_ORDER = [
        "Functions",
        "Graphs & Transformations",
        "Equations & Inequalities",
        "Sequences & Series",
        "Vectors",
        "Complex Numbers",
        "Differentiation",
        "Maclaurin Series",
        "Integration",
        "Differential Equations"
      ];
      const STATS_TOPIC_ORDER = [
        "Permutations & Combinations",
        "Probability",
        "Discrete Random Variables",
        "Binomial Distribution",
        "Normal Distribution",
        "Sampling & CLT",
        "Hypothesis Testing",
        "Correlation & Regression"
      ];
      const sortByOrder = (set, order) => [...set].sort((a, b) => {
        const ia = order.indexOf(a);
        const ib = order.indexOf(b);
        if (ia !== -1 && ib !== -1) return ia - ib;
        if (ia !== -1) return -1;
        if (ib !== -1) return 1;
        return a.localeCompare(b);
      });
      const pureTopicSet = new Set();
      const statsTopicSet = new Set();
      for (const item of window.H2_QUESTIONS) {
        const target = item.category === "stats" ? statsTopicSet : pureTopicSet;
        for (const t of (item.topics || [])) target.add(t);
      }
      const pureTopics = sortByOrder(pureTopicSet, PURE_TOPIC_ORDER);
      const statsTopics = sortByOrder(statsTopicSet, STATS_TOPIC_ORDER);
      const renderTopicOpt = (t) => `<option value="${t}" ${randomFilters.topic === t ? "selected" : ""}>${t}</option>`;
      const allSchools = [...new Set(window.H2_QUESTIONS.map(x => x.school).filter(Boolean))].sort();
      const scopedPool = getScopedPracticePool();
      const solvedInScope = scopedPool.filter(item => getQuestionHistoryStatus(item.id) === "solved").length;
      const scopeLabel = (randomFilters.topic !== "all" ? randomFilters.topic : "All Topics")
        + (randomFilters.school !== "all" ? ` (${randomFilters.school})` : "");

      const banner = document.createElement("div");
      banner.className = "random-banner";
      let optionsHtml = filteredPool.map(item => {
        const mark = getQuestionHistoryStatus(item.id) === "solved" ? "✓ " : "";
        return `<option value="${item.id}" ${q && item.id === q.id ? "selected" : ""}>${mark}${item.school} ${item.year || ""} ${item.qNum} (${item.category === "pure" ? "Pure" : "Stats"}: ${item.topics[0]})</option>`;
      }).join("");
      if (q && !filteredPool.some(item => item.id === q.id)) {
        optionsHtml = `<option value="${q.id}" selected>✓ ${q.school} ${q.year || ""} ${q.qNum} (Solved)</option>` + optionsHtml;
      }
      banner.innerHTML = `
        <span class="practice-banner-title"><strong>Practice</strong><span class="practice-scope-progress">${scopeLabel} &middot; ${solvedInScope} / ${scopedPool.length} solved</span></span>
        <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
          <button class="btn" id="rnd-match" title="Random question matching filters">Random (${filteredPool.length})</button>
          <button class="btn" id="rnd-pure">Random Pure</button>
          <button class="btn" id="rnd-stats">Random Stats</button>
        </div>
        <div class="random-filters">
          <select class="q-jump-select" id="flt-topic" aria-label="Filter by topic">
            <option value="all">All Topics</option>
            ${pureTopics.length ? `<optgroup label="Pure Mathematics">${pureTopics.map(renderTopicOpt).join("")}</optgroup>` : ""}
            ${statsTopics.length ? `<optgroup label="Probability &amp; Statistics">${statsTopics.map(renderTopicOpt).join("")}</optgroup>` : ""}
          </select>
          <select class="q-jump-select" id="flt-school" aria-label="Filter by school">
            <option value="all">All Schools</option>
            ${allSchools.map(s => `<option value="${s}" ${randomFilters.school === s ? "selected" : ""}>${s}</option>`).join("")}
          </select>
          <select class="q-jump-select" id="flt-status" aria-label="Filter by status">
            <option value="all" ${randomFilters.status === "all" ? "selected" : ""}>All Status</option>
            <option value="unseen" ${randomFilters.status === "unseen" ? "selected" : ""}>Unseen</option>
            <option value="missed" ${randomFilters.status === "missed" ? "selected" : ""}>Missed</option>
            <option value="solved" ${randomFilters.status === "solved" ? "selected" : ""}>Solved</option>
          </select>
          <select class="q-jump-select" id="q-jump" style="flex:1;min-width:180px;">${optionsHtml || '<option value="">No matching questions</option>'}</select>
        </div>
      `;
      wrap.appendChild(banner);
      banner.querySelector("#rnd-match").onclick = () => pickRandom(null);
      banner.querySelector("#rnd-pure").onclick = () => pickRandom("pure");
      banner.querySelector("#rnd-stats").onclick = () => pickRandom("stats");

      const applyFilterChange = () => pickRandom(null);

      banner.querySelector("#flt-topic").onchange = (e) => { randomFilters.topic = e.target.value; applyFilterChange(); };
      banner.querySelector("#flt-school").onchange = (e) => { randomFilters.school = e.target.value; applyFilterChange(); };
      banner.querySelector("#flt-status").onchange = (e) => { randomFilters.status = e.target.value; applyFilterChange(); };
      banner.querySelector("#q-jump").onchange = (e) => {
        const chosen = window.H2_QUESTIONS.find(x => x.id === e.target.value);
        if (chosen) {
          randomQuestion = chosen;
          randomState = { questionId: chosen.id, parts: {} };
          renderCurrent();
        }
      };

      if (!q) {
        const emptyCard = document.createElement("div");
        emptyCard.className = "card";
        emptyCard.innerHTML = `<p style="color:var(--muted);font-family:var(--sans);margin:0;">No questions match those filters. <button class="btn btn-ghost" id="reset-flts" style="margin-left:8px;">Reset filters</button></p>`;
        wrap.appendChild(emptyCard);
        emptyCard.querySelector("#reset-flts").onclick = () => {
          randomFilters = { topic: "all", school: "all", status: "all" };
          pickRandom();
        };
        return;
      }
    } else if (dayKey && dayKey !== getStudyDayKey()) {
      const banner = document.createElement("div");
      banner.className = "random-banner";
      banner.innerHTML = `
        <span><strong>Viewing Past Day: ${dayKey}</strong></span>
        <button class="btn" id="back-cal">← Back to Calendar</button>
      `;
      wrap.appendChild(banner);
      banner.querySelector("#back-cal").onclick = () => switchTab("calendar");
    }

    ensureQuestionTimer(q.id);
    updateScratchpadCounter(q.id);
    syncFeedbackContext();
    const totalMarks = q.parts.reduce((sum, p) => sum + (Number(p.marks) || 0), 0);
    const stemDiagHtml = renderDiagramBox(q.diagramSvg, q.diagramImg);
    const qHistStatus = getQuestionHistoryStatus(q.id);
    const practicedDone = isPracticeSolved(q.id);
    const dailyHit = isRandom ? findDailyOccurrence(q) : null;
    let dailyNoticeHtml = "";
    if (isRandom && dailyHit) {
      const catLabel = q.category === "pure" ? "Pure" : "Statistics";
      const statusSuffix = dailyHit.status === "ok"
        ? " &middot; Solved on Daily"
        : dailyHit.status === "bad"
          ? " &middot; Missed on Daily"
          : dailyHit.status === "partial"
            ? " &middot; In progress"
            : "";
      const msg = dailyHit.isToday
        ? `Today's Daily ${catLabel} question${statusSuffix}`
        : `Came out as Daily ${catLabel} on ${formatShortDate(dailyHit.dayKey)}${statusSuffix}`;
      const btnText = dailyHit.isToday ? "Open in Daily &rarr;" : "Open that day &rarr;";
      dailyNoticeHtml = `<div class="daily-context-note"><span>${msg}</span><button type="button" class="daily-context-link" id="open-daily-occurrence">${btnText}</button></div>`;
    } else if (!isRandom && practicedDone) {
      const solvedDate = formatShortDate(state.practiceSolved[q.id]?.solvedAt);
      dailyNoticeHtml = `<div class="daily-context-note is-solved"><span>Already marked solved in Practice${solvedDate ? ` (${solvedDate})` : ""}.</span></div>`;
    }
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="q-header">
        <div>
          <div class="q-source">
            ${q.school} • ${q.paper} • ${q.qNum}${totalMarks ? ` • ${totalMarks}m` : ""}
            <span class="q-timer-wrap">
              <button type="button" class="q-timer-pill ${qTimer.running ? "running" : ""}" id="q-timer-btn" title="Question timer (click to start or pause)">
                ${qTimer.elapsedSec > 0 || qTimer.running ? formatMMSS(qTimer.elapsedSec) : "Timer"}
              </button>
              ${qTimer.elapsedSec > 0 ? `<button type="button" class="q-timer-reset" id="q-timer-reset" title="Reset timer">↺</button>` : ""}
            </span>
          </div>
        </div>
        <div class="tag-row">
          ${q.topics.map(t => `<span class="topic-pill">${t}</span>`).join("")}${(isRandom && qHistStatus === "solved") ? '<span class="topic-pill topic-pill-solved">Solved</span>' : ""}
        </div>
      </div>
      ${dailyNoticeHtml}
      ${stemDiagHtml}
      <div class="q-stem">${renderMathText(q.stem)}</div>
      <div id="parts-container"></div>
    `;
    wrap.appendChild(card);

    const openDailyBtn = card.querySelector("#open-daily-occurrence");
    if (openDailyBtn && dailyHit) {
      openDailyBtn.onclick = () => {
        if (dailyHit.isToday) {
          switchTab(q.category);
        } else {
          const dq = getDailyQuestion(dailyHit.dayKey, q.category);
          const dRec = getDayRecord(dailyHit.dayKey);
          renderQuestionView(dq, dRec[q.category], { dayKey: dailyHit.dayKey });
        }
      };
    }

    const timerBtn = card.querySelector("#q-timer-btn");
    const updateTimerPill = () => {
      if (!document.body.contains(timerBtn)) {
        stopQuestionTimer();
        return;
      }
      timerBtn.classList.toggle("running", qTimer.running);
      timerBtn.textContent = (qTimer.elapsedSec > 0 || qTimer.running) ? formatMMSS(qTimer.elapsedSec) : "Timer";
    };
    timerBtn.onclick = () => {
      if (qTimer.running) {
        stopQuestionTimer();
        updateTimerPill();
      } else {
        qTimer.running = true;
        updateTimerPill();
        if (!card.querySelector("#q-timer-reset")) {
          const rb = document.createElement("button");
          rb.type = "button";
          rb.className = "q-timer-reset";
          rb.id = "q-timer-reset";
          rb.title = "Reset timer";
          rb.textContent = "↺";
          rb.onclick = () => { stopQuestionTimer(); qTimer.elapsedSec = 0; rb.remove(); updateTimerPill(); };
          timerBtn.parentElement.appendChild(rb);
        }
        qTimer.intervalId = setInterval(() => {
          qTimer.elapsedSec++;
          updateTimerPill();
        }, 1000);
      }
    };
    const resetTimerBtn = card.querySelector("#q-timer-reset");
    if (resetTimerBtn) {
      resetTimerBtn.onclick = () => {
        stopQuestionTimer();
        qTimer.elapsedSec = 0;
        resetTimerBtn.remove();
        updateTimerPill();
      };
    }

    const partsContainer = card.querySelector("#parts-container");
    const qMeta = { q, mode: resolveQuestionMode(q, isRandom, dayKey) };
    q.parts.forEach((part, idx) => {
      const pCard = document.createElement("div");
      partsContainer.appendChild(pCard);
      renderPartCard(pCard, part, idx, record, isRandom, qMeta);
    });

    if (!isRandom) {
      const noteData = getQuestionNoteData(q.id);

      const np = document.createElement("div");
      np.className = "notes-panel";
      np.innerHTML = `
        <div class="notes-head">
          <h3>Study Log &amp; Reflection <small id="save-ind" style="font-weight:400;color:var(--muted);"></small></h3>
          <button type="button" class="notes-add-btn" id="add-note-entry" title="Add another entry" aria-label="Add another entry"><svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true"><path d="M7 2.5v9M2.5 7h9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
        </div>
        <div id="note-entries-list"></div>
      `;
      card.appendChild(np);

      const ind = np.querySelector("#save-ind");
      const entriesList = np.querySelector("#note-entries-list");
      const saveNoteData = () => {
        state.notes[q.id] = noteData;
        saveState();
        ind.textContent = "Saved";
      };

      const renderNoteEntries = () => {
        entriesList.innerHTML = "";
        noteData.entries.forEach((entry, eIdx) => {
          const isNote = entry.kind === "note";
          const box = document.createElement("div");
          box.className = "note-entry-card";
          const showPartRow = q.parts.length > 1;
          box.innerHTML = `
            <div class="note-entry-top">
              <div style="display:flex;align-items:center;flex-wrap:wrap;gap:10px;">
                <div class="note-kind-toggle" role="group" aria-label="Entry type">
                  <button type="button" class="note-kind-pill ${!isNote ? "selected" : ""}" data-kind="mistake">Mistake</button>
                  <button type="button" class="note-kind-pill ${isNote ? "selected-note" : ""}" data-kind="note">Note</button>
                </div>
                ${showPartRow ? `
                  <div class="note-part-row">
                    <span class="note-part-label">Part</span>
                    <button type="button" class="note-part-pill ${!entry.part ? "selected" : ""}" data-part="">All</button>
                    ${q.parts.map(p => `<button type="button" class="note-part-pill ${entry.part === p.label ? "selected" : ""}" data-part="${p.label}">${p.label}</button>`).join("")}
                  </div>
                ` : ""}
              </div>
              ${noteData.entries.length > 1 ? `<button type="button" class="note-entry-remove" title="Remove entry">×</button>` : ""}
            </div>
            <div class="error-tags" style="display:${isNote ? "none" : "flex"};">
              ${ERROR_TAGS.map(tag => `<button type="button" class="err-chip ${entry.tags.includes(tag) ? "selected" : ""}" data-tag="${tag}">${tag}</button>`).join("")}
            </div>
            <textarea class="notes-textarea" placeholder="${isNote ? "Write a note, alternative method, or formula to remember (supports $LaTeX$)..." : "Write down why you made a mistake or what formula/trick to remember (supports $LaTeX$)..."}"></textarea>
            <div class="note-math-preview" style="display:none;"></div>
          `;
          const ta = box.querySelector("textarea");
          const tagsRow = box.querySelector(".error-tags");
          const preview = box.querySelector(".note-math-preview");
          const syncPreview = (val) => {
            if (/\$\$[\s\S]+?\$\$|\$[^\$]+?\$/.test(val)) {
              preview.innerHTML = renderSafeUserMath(val);
              preview.style.display = "block";
            } else {
              preview.innerHTML = "";
              preview.style.display = "none";
            }
          };
          ta.value = entry.text || "";
          syncPreview(ta.value);

          box.querySelectorAll(".note-kind-pill").forEach(btn => {
            btn.onclick = () => {
              entry.kind = btn.dataset.kind === "note" ? "note" : "mistake";
              entry.updatedAt = new Date().toLocaleDateString("en-SG");
              const nowNote = entry.kind === "note";
              box.querySelectorAll(".note-kind-pill").forEach(b => {
                b.classList.toggle("selected", !nowNote && b.dataset.kind === "mistake");
                b.classList.toggle("selected-note", nowNote && b.dataset.kind === "note");
              });
              tagsRow.style.display = nowNote ? "none" : "flex";
              ta.placeholder = nowNote
                ? "Write a note, alternative method, or formula to remember (supports $LaTeX$)..."
                : "Write down why you made a mistake or what formula/trick to remember (supports $LaTeX$)...";
              saveNoteData();
            };
          });

          box.querySelectorAll(".note-part-pill").forEach(btn => {
            btn.onclick = () => {
              entry.part = btn.dataset.part || "";
              entry.updatedAt = new Date().toLocaleDateString("en-SG");
              box.querySelectorAll(".note-part-pill").forEach(b => b.classList.toggle("selected", b === btn));
              saveNoteData();
            };
          });

          box.querySelectorAll(".err-chip").forEach(chip => {
            chip.onclick = () => {
              const t = chip.dataset.tag;
              const idx = entry.tags.indexOf(t);
              if (idx >= 0) entry.tags.splice(idx, 1);
              else entry.tags.push(t);
              entry.updatedAt = new Date().toLocaleDateString("en-SG");
              chip.classList.toggle("selected");
              saveNoteData();
            };
          });

          ta.onkeydown = (e) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            const start = ta.selectionStart;
            const end = ta.selectionEnd;
            const val = ta.value;
            if (e.key === "$") {
              e.preventDefault();
              if (start !== end) {
                const selected = val.slice(start, end);
                ta.value = val.slice(0, start) + "$" + selected + "$" + val.slice(end);
                ta.selectionStart = start + 1;
                ta.selectionEnd = end + 1;
              } else if (val[start] === "$") {
                ta.selectionStart = ta.selectionEnd = start + 1;
              } else {
                ta.value = val.slice(0, start) + "$$" + val.slice(end);
                ta.selectionStart = ta.selectionEnd = start + 1;
              }
              entry.text = ta.value;
              entry.updatedAt = new Date().toLocaleDateString("en-SG");
              syncPreview(entry.text);
              saveNoteData();
            } else if (e.key === "Backspace" && start === end && start > 0 && val[start - 1] === "$" && val[start] === "$") {
              e.preventDefault();
              ta.value = val.slice(0, start - 1) + val.slice(start + 1);
              ta.selectionStart = ta.selectionEnd = start - 1;
              entry.text = ta.value;
              entry.updatedAt = new Date().toLocaleDateString("en-SG");
              syncPreview(entry.text);
              saveNoteData();
            }
          };

          ta.oninput = (e) => {
            entry.text = e.target.value;
            entry.updatedAt = new Date().toLocaleDateString("en-SG");
            syncPreview(entry.text);
            saveNoteData();
          };

          const rmBtn = box.querySelector(".note-entry-remove");
          if (rmBtn) {
            rmBtn.onclick = () => {
              noteData.entries.splice(eIdx, 1);
              saveNoteData();
              renderNoteEntries();
            };
          }
          entriesList.appendChild(box);
        });
      };

      renderNoteEntries();
      np.querySelector("#add-note-entry").onclick = () => {
        noteData.entries.push({
          id: String(Date.now()) + Math.random().toString(16).slice(2, 6),
          kind: "mistake",
          part: "",
          tags: [],
          text: "",
          updatedAt: new Date().toLocaleDateString("en-SG")
        });
        saveNoteData();
        renderNoteEntries();
        const textareas = entriesList.querySelectorAll("textarea");
        if (textareas.length) textareas[textareas.length - 1].focus();
      };
    } else {
      const masteryEl = document.createElement("div");
      masteryEl.className = "practice-mastery";
      masteryEl.id = "practice-mastery";
      card.appendChild(masteryEl);

      const checkSvg = '<span class="practice-mastery-check" aria-hidden="true"><svg viewBox="0 0 14 14" width="14" height="14"><path d="M2.5 7.5l3 3 6-6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

      const renderMasteryBar = (confirming = false) => {
        const solvedInPractice = isPracticeSolved(q.id);
        const solvedAnywhere = getQuestionHistoryStatus(q.id) === "solved";
        masteryEl.classList.toggle("is-solved", solvedInPractice || solvedAnywhere);
        if (solvedInPractice) {
          const solvedDate = formatShortDate(state.practiceSolved[q.id]?.solvedAt);
          masteryEl.innerHTML = `
            <div class="practice-mastery-copy">${checkSvg}<strong>Marked solved</strong><span>${solvedDate ? `${solvedDate} &middot; ` : ""}Counts toward topic progress.</span></div>
            <div class="practice-mastery-actions">
              <button type="button" class="btn btn-ghost" id="btn-practice-unmark">Unmark</button>
              <button type="button" class="btn btn-primary" id="btn-practice-next">Next Question &rarr;</button>
            </div>
          `;
          masteryEl.querySelector("#btn-practice-unmark").onclick = () => {
            setPracticeSolved(q.id, false);
            renderCurrent();
          };
          masteryEl.querySelector("#btn-practice-next").onclick = () => pickRandom(null);
        } else if (solvedAnywhere) {
          masteryEl.innerHTML = `
            <div class="practice-mastery-copy">${checkSvg}<strong>Solved on Daily</strong><span>${dailyHit ? `${formatShortDate(dailyHit.dayKey)} &middot; ` : ""}Already counts toward topic progress.</span></div>
            <div class="practice-mastery-actions">
              <button type="button" class="btn btn-primary" id="btn-practice-next">Next Question &rarr;</button>
            </div>
          `;
          masteryEl.querySelector("#btn-practice-next").onclick = () => pickRandom(null);
        } else if (confirming) {
          masteryEl.innerHTML = `
            <div class="practice-mastery-copy"><strong>Confirm mastery</strong><span>100% confident you will not struggle with this question?</span></div>
            <div class="practice-mastery-actions">
              <button type="button" class="btn btn-ghost" id="btn-practice-cancel">Cancel</button>
              <button type="button" class="btn btn-ok" id="btn-practice-confirm">Confirm Solved</button>
            </div>
          `;
          masteryEl.querySelector("#btn-practice-cancel").onclick = () => renderMasteryBar(false);
          masteryEl.querySelector("#btn-practice-confirm").onclick = () => {
            setPracticeSolved(q.id, true);
            renderCurrent();
          };
        } else {
          masteryEl.innerHTML = `
            <div class="practice-mastery-copy"><strong>Done and dusted?</strong><span>Mark solved only if you can solve this cold without hints.</span></div>
            <div class="practice-mastery-actions">
              <button type="button" class="btn" id="btn-practice-solve">Mark as Solved</button>
            </div>
          `;
          masteryEl.querySelector("#btn-practice-solve").onclick = () => renderMasteryBar(true);
        }
      };
      renderMasteryBar(false);
    }

    updateMetaBar();
  }

  // -------------------- 8. CALENDAR VIEW --------------------
  function renderCalendarView() {
    setPageTitle("Calendar");
    syncUrlQuestion(null);
    syncFeedbackContext();
    const main = document.getElementById("main-content");
    const sgt = getSGTNow();
    if (calendarYear === null || calendarMonth === null) {
      calendarYear = sgt.getFullYear();
      calendarMonth = sgt.getMonth();
    }
    const year = calendarYear;
    const month = calendarMonth;
    const isCurrentMonth = year === sgt.getFullYear() && month === sgt.getMonth();
    const firstDow = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayKey = getStudyDayKey();
    const monthName = new Date(year, month, 1).toLocaleString("en-US", { month: "long", year: "numeric" });

    let gridHtml = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      .map(d => `<div class="cal-dow">${d}</div>`).join("");

    for (let i = 0; i < firstDow; i++) gridHtml += `<div class="cal-day empty"></div>`;

    for (let day = 1; day <= daysInMonth; day++) {
      const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const rec = key >= LAUNCH_DAY_KEY ? state.days[key] : null;
      const pCal = rec?.pure
        ? getCalendarStatus(window.H2_QUESTIONS.find(q => q.id === rec.pure.questionId), rec.pure)
        : { cls: "incomplete", label: "Incomplete" };
      const sCal = rec?.stats
        ? getCalendarStatus(window.H2_QUESTIONS.find(q => q.id === rec.stats.questionId), rec.stats)
        : { cls: "incomplete", label: "Incomplete" };
      const cls = ["cal-day", key === todayKey ? "today" : "", key === selectedCalendarDay ? "selected" : ""].join(" ");
      gridHtml += `
        <button type="button" class="${cls}" data-day="${key}" aria-label="${key}: Pure ${pCal.label}, Stats ${sCal.label}">
          <span>${day}</span>
          <div class="cal-dots">
            <span class="cal-dot ${pCal.cls}" title="Pure: ${pCal.label}"></span>
            <span class="cal-dot ${sCal.cls}" title="Stats: ${sCal.label}"></span>
          </div>
        </button>
      `;
    }

    main.innerHTML = `
      <div class="card animate-in">
        <div class="cal-header">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <button class="btn" id="cal-prev" aria-label="Previous month">←</button>
            <h2 style="margin:0;">${monthName}</h2>
            <button class="btn" id="cal-next" aria-label="Next month">→</button>
            ${!isCurrentMonth ? `<button class="btn btn-ghost" id="cal-today">Today</button>` : ""}
          </div>
          <small style="color:var(--muted);">Left dot = Pure • Right dot = Stats</small>
        </div>
        <div class="cal-grid">${gridHtml}</div>
        <div id="cal-detail" style="margin-top:16px;"></div>
        <div class="backup-bar">
          <button class="btn" id="btn-export">⬇ Backup Progress (.json)</button>
          <button class="btn" id="btn-import">⬆ Restore Backup</button>
          <input type="file" id="import-file" accept=".json,application/json,text/plain" style="display:none;" />
          <span id="backup-status" style="font-family:var(--sans);font-size:0.82rem;color:var(--muted);"></span>
        </div>
      </div>
    `;

    main.querySelector("#cal-prev").onclick = () => {
      calendarMonth--;
      if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
      renderCalendarView();
    };
    main.querySelector("#cal-next").onclick = () => {
      calendarMonth++;
      if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
      renderCalendarView();
    };
    const todayBtn = main.querySelector("#cal-today");
    if (todayBtn) {
      todayBtn.onclick = () => {
        calendarYear = sgt.getFullYear();
        calendarMonth = sgt.getMonth();
        renderCalendarView();
      };
    }

    main.querySelectorAll(".cal-day[data-day]").forEach(el => {
      el.onclick = () => {
        selectedCalendarDay = el.dataset.day;
        renderCalendarDetail(selectedCalendarDay);
        main.querySelectorAll(".cal-day").forEach(d => d.classList.remove("selected"));
        el.classList.add("selected");
      };
    });

    if (selectedCalendarDay) renderCalendarDetail(selectedCalendarDay);

    main.querySelector("#btn-export").onclick = () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `h2-math-backup-${getStudyDayKey()}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    };
    const fileInput = main.querySelector("#import-file");
    main.querySelector("#btn-import").onclick = () => fileInput.click();
    fileInput.onchange = (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const statusEl = main.querySelector("#backup-status");
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          if (parsed && parsed.days) {
            if (!parsed.notes || typeof parsed.notes !== "object") parsed.notes = {};
            if (!parsed.practiceSolved || typeof parsed.practiceSolved !== "object") parsed.practiceSolved = {};
            state = parsed;
            saveState();
            renderCalendarView();
            updateMetaBar();
            const el = document.getElementById("backup-status");
            if (el) { el.style.color = "var(--ok)"; el.textContent = "Backup restored"; }
          } else if (statusEl) {
            statusEl.style.color = "var(--bad)";
            statusEl.textContent = "Invalid backup format.";
          }
        } catch (_) {
          if (statusEl) { statusEl.style.color = "var(--bad)"; statusEl.textContent = "Could not parse backup file."; }
        }
      };
      reader.readAsText(f);
    };
  }

  function renderCalendarDetail(dayKey) {
    const box = document.getElementById("cal-detail");
    if (dayKey < LAUNCH_DAY_KEY) {
      box.innerHTML = `<p style="color:var(--muted);font-family:var(--sans);font-size:0.9rem;">No questions available before ${LAUNCH_DAY_KEY}.</p>`;
      return;
    }
    if (dayKey > getStudyDayKey()) {
      box.innerHTML = `<p style="color:var(--muted);font-family:var(--sans);font-size:0.9rem;">Unlocks on ${dayKey} at 6:00 AM SGT.</p>`;
      return;
    }
    const rec = state.days[dayKey];
    const renderLink = (cat, label) => {
      const saved = rec?.[cat];
      const q = (saved?.questionId && window.H2_QUESTIONS.find(x => x.id === saved.questionId))
        || computeScheduledQuestion(dayKey, cat);
      if (!q) return "";
      const calSt = saved ? getCalendarStatus(q, saved) : { cls: "incomplete", label: "Incomplete" };
      return `<button class="btn" data-open="${cat}">${label}: ${q.school} ${q.qNum} (${calSt.label})</button>`;
    };
    box.innerHTML = `
      <div class="animate-in" style="padding:12px;border-radius:10px;background:var(--bg);font-family:var(--sans);">
        <div style="font-weight:700;margin-bottom:8px;">${dayKey}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${renderLink("pure", "Pure")}
          ${renderLink("stats", "Stats")}
        </div>
      </div>
    `;
    box.querySelectorAll("button[data-open]").forEach(b => {
      b.onclick = () => {
        const cat = b.dataset.open;
        const q = getDailyQuestion(dayKey, cat);
        const dayRec = getDayRecord(dayKey);
        renderQuestionView(q, dayRec[cat], { dayKey });
      };
    });
  }

  // -------------------- 9. MISTAKE LOG & FLAGGED QUESTIONS VIEW --------------------
  function parseNoteDateMs(dateStr) {
    if (!dateStr) return 0;
    const parts = String(dateStr).split("/");
    if (parts.length === 3) {
      const [d, m, y] = parts.map(Number);
      if (y && m && d) return new Date(y, m - 1, d).getTime();
    }
    const parsed = Date.parse(dateStr);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function getQuestionTimestamp(qId, nd, nonEmpty) {
    if (nd.flaggedAt) return nd.flaggedAt;
    const dates = (nonEmpty || []).map(e => parseNoteDateMs(e.updatedAt)).filter(Boolean);
    if (dates.length) return Math.max(...dates);
    let latestDayMs = 0;
    for (const [dayKey, dayRec] of Object.entries(state.days || {})) {
      if (dayRec?.pure?.questionId === qId || dayRec?.stats?.questionId === qId) {
        const ms = Date.parse(dayKey);
        if (ms > latestDayMs) latestDayMs = ms;
      }
    }
    return latestDayMs;
  }

  function renderMistakeLogView() {
    setPageTitle("Study Log");
    syncUrlQuestion(null);
    syncFeedbackContext();
    const main = document.getElementById("main-content");
    const openQuestionForPractice = (q, focusFlaggedParts = null) => {
      randomQuestion = q;
      randomState = {
        questionId: q.id,
        parts: {},
        focusFlaggedParts: (Array.isArray(focusFlaggedParts) && focusFlaggedParts.length) ? focusFlaggedParts.slice() : null
      };
      switchTab("random", true);
    };

    // 1. Collect flagged questions
    const flaggedItems = Object.keys(state.notes || {})
      .map(qId => {
        const q = window.H2_QUESTIONS.find(x => x.id === qId);
        if (!q) return null;
        const nd = getQuestionNoteData(qId);
        if (!nd.flaggedParts || !nd.flaggedParts.length) return null;
        const nonEmpty = getNonEmptyEntries(nd);
        const ts = getQuestionTimestamp(qId, nd, nonEmpty);
        const dateLabel = ts ? new Date(ts).toLocaleDateString("en-SG") : "";
        return { qId, q, nd, ts, dateLabel };
      })
      .filter(Boolean);

    flaggedItems.sort((a, b) => {
      if (flaggedSort === "date-asc") return a.ts - b.ts;
      if (flaggedSort === "topic-asc") return (a.q.topics?.[0] || "").localeCompare(b.q.topics?.[0] || "");
      if (flaggedSort === "school-asc") return (a.q.school || "").localeCompare(b.q.school || "");
      return b.ts - a.ts; // date-desc default
    });

    // 2. Collect written study log entries (mistakes vs notes)
    const allNoteItems = Object.keys(state.notes || {})
      .map(qId => {
        const nd = getQuestionNoteData(qId);
        const nonEmpty = getNonEmptyEntries(nd);
        return [qId, nd, nonEmpty];
      })
      .filter(([_, __, nonEmpty]) => nonEmpty.length > 0);

    const mistakeQuestionItems = allNoteItems
      .map(([qId, nd, nonEmpty]) => [qId, nd, nonEmpty.filter(e => e.kind !== "note")])
      .filter(([_, __, list]) => list.length > 0);
    const noteQuestionItems = allNoteItems
      .map(([qId, nd, nonEmpty]) => [qId, nd, nonEmpty.filter(e => e.kind === "note")])
      .filter(([_, __, list]) => list.length > 0);

    const modeBaseItems = studyLogMode === "mistakes"
      ? mistakeQuestionItems
      : studyLogMode === "notes"
        ? noteQuestionItems
        : allNoteItems;

    const tagCounts = {};
    if (studyLogMode !== "notes") {
      for (const [_, __, list] of mistakeQuestionItems) {
        for (const entry of list) {
          for (const tag of (entry.tags || [])) {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
          }
        }
      }
    }
    const topTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

    if (mistakeTagFilter !== "all" && !tagCounts[mistakeTagFilter]) {
      mistakeTagFilter = "all";
    }

    const items = (studyLogMode === "notes" || mistakeTagFilter === "all")
      ? modeBaseItems
      : modeBaseItems.filter(([_, __, nonEmpty]) => nonEmpty.some(e => e.kind !== "note" && (e.tags || []).includes(mistakeTagFilter)));

    const flaggedPanelHtml = `
      <div class="flagged-panel">
        <div class="flagged-panel-head">
          <button type="button" class="flagged-toggle-btn" id="flagged-toggle" aria-expanded="${flaggedPanelOpen ? "true" : "false"}">
            <span class="flagged-chevron">${flaggedPanelOpen ? "▾" : "▸"}</span>
            <span>${flagIconSvg(true)} Flagged Questions (${flaggedItems.length})</span>
          </button>
          ${flaggedItems.length > 1 ? `
            <select id="flagged-sort" class="flagged-sort-select" aria-label="Sort flagged questions">
              <option value="date-desc" ${flaggedSort === "date-desc" ? "selected" : ""}>Date: Newest</option>
              <option value="date-asc" ${flaggedSort === "date-asc" ? "selected" : ""}>Date: Oldest</option>
              <option value="topic-asc" ${flaggedSort === "topic-asc" ? "selected" : ""}>Topic: A–Z</option>
              <option value="school-asc" ${flaggedSort === "school-asc" ? "selected" : ""}>School: A–Z</option>
            </select>
          ` : ""}
        </div>
        ${flaggedPanelOpen ? `
          <div class="flagged-list" id="flagged-list">
            ${flaggedItems.length ? flaggedItems.map(item => `
              <div class="flagged-item">
                <div class="flagged-item-main" data-jump="${item.q.id}">
                  <div class="flagged-item-topics">${(item.q.topics || []).join(" • ") || "General"}</div>
                  <div class="flagged-item-title-row">
                    <strong class="q-source">${item.q.school} • ${item.q.paper} • ${item.q.qNum}</strong>
                    ${item.nd.flaggedParts.map(p => `<span class="mistake-flag-pill">${flagIconSvg(true)} Part ${p}</span>`).join("")}
                  </div>
                </div>
                <div class="flagged-item-actions">
                  ${item.dateLabel ? `<small class="flagged-item-date">${item.dateLabel}</small>` : ""}
                  <button type="button" class="flagged-jump-btn" data-jump="${item.q.id}">Practice →</button>
                  <button type="button" class="flagged-unflag-btn" data-unflag="${item.q.id}" title="Unflag this question">×</button>
                </div>
              </div>
            `).join("") : `<p class="flagged-empty">No flagged questions right now. Hover over the dot on any question part and click the flag icon to bookmark it for review.</p>`}
          </div>
        ` : ""}
      </div>
    `;

    const modeTabsHtml = `
      <div class="study-log-tabs" role="tablist" aria-label="Study log view">
        <button type="button" class="study-log-tab ${studyLogMode === "mistakes" ? "selected" : ""}" data-log-mode="mistakes">Mistakes (${mistakeQuestionItems.length})</button>
        <button type="button" class="study-log-tab ${studyLogMode === "notes" ? "selected" : ""}" data-log-mode="notes">Notes (${noteQuestionItems.length})</button>
        <button type="button" class="study-log-tab ${studyLogMode === "all" ? "selected" : ""}" data-log-mode="all">All (${allNoteItems.length})</button>
      </div>
    `;

    const tagFilterHtml = (studyLogMode !== "notes" && topTags.length) ? `
      <div class="error-tags" style="margin-bottom:14px;">
        <button type="button" class="err-chip ${mistakeTagFilter === "all" ? "selected" : ""}" data-tag-filter="all">All (${modeBaseItems.length})</button>
        ${topTags.map(([tag, cnt]) => `<button type="button" class="err-chip ${mistakeTagFilter === tag ? "selected" : ""}" data-tag-filter="${tag}">${tag} (${cnt})</button>`).join("")}
      </div>
    ` : "";

    main.innerHTML = `
      <div class="card animate-in">
        <div class="q-header">
          <div class="q-source">Study Log</div>
          <small style="color:var(--muted);font-family:var(--sans);">${allNoteItems.length} logged question(s)</small>
        </div>
        ${flaggedPanelHtml}
        ${modeTabsHtml}
        ${tagFilterHtml}
        <div id="mistakes-list"></div>
      </div>
    `;

    const toggleBtn = main.querySelector("#flagged-toggle");
    if (toggleBtn) {
      toggleBtn.onclick = () => {
        flaggedPanelOpen = !flaggedPanelOpen;
        renderMistakeLogView();
      };
    }

    const sortSel = main.querySelector("#flagged-sort");
    if (sortSel) {
      sortSel.onchange = (e) => {
        flaggedSort = e.target.value;
        renderMistakeLogView();
      };
    }

    main.querySelectorAll("[data-jump]").forEach(el => {
      el.onclick = () => {
        const q = window.H2_QUESTIONS.find(x => x.id === el.dataset.jump);
        if (q) {
          const nd = getQuestionNoteData(q.id);
          openQuestionForPractice(q, nd.flaggedParts);
        }
      };
    });

    main.querySelectorAll("[data-unflag]").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const qId = btn.dataset.unflag;
        const nd = getQuestionNoteData(qId);
        nd.flaggedParts = [];
        nd.flaggedAt = null;
        state.notes[qId] = nd;
        saveState();
        renderMistakeLogView();
      };
    });

    main.querySelectorAll("[data-log-mode]").forEach(btn => {
      btn.onclick = () => {
        studyLogMode = btn.dataset.logMode;
        mistakeTagFilter = "all";
        renderMistakeLogView();
      };
    });

    main.querySelectorAll("[data-tag-filter]").forEach(btn => {
      btn.onclick = () => {
        mistakeTagFilter = btn.dataset.tagFilter;
        renderMistakeLogView();
      };
    });

    const list = main.querySelector("#mistakes-list");
    if (!items.length) {
      const emptyMsg = studyLogMode === "notes"
        ? "No study notes yet. Switch any entry below a question to Note to save alternative methods or formulas."
        : "No written mistake notes yet. After attempting any Pure or Stats question, tag your errors or jot down what to remember.";
      list.innerHTML = `<p style="color:var(--muted);font-family:var(--sans);font-size:0.88rem;">${emptyMsg}</p>`;
      return;
    }

    items.forEach(([qId, nd, nonEmpty]) => {
      const q = window.H2_QUESTIONS.find(x => x.id === qId);
      if (!q) return;
      const div = document.createElement("div");
      div.className = "mistake-entry";
      const latestDate = nonEmpty.map(e => e.updatedAt).filter(Boolean).slice(-1)[0] || "";
      div.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <strong class="q-source">${q.school} • ${q.paper} • ${q.qNum}</strong>
            ${(nd.flaggedParts || []).map(p => `<span class="mistake-flag-pill">${flagIconSvg(true)} Part ${p}</span>`).join("")}
          </div>
          <small style="color:var(--muted);font-family:var(--sans);">${latestDate}</small>
        </div>
        <div class="mistake-subentries"></div>
        <button class="btn" data-revise="${q.id}">Practice Question Again →</button>
      `;

      const subWrap = div.querySelector(".mistake-subentries");
      nonEmpty.forEach(entry => {
        const sub = document.createElement("div");
        sub.className = "mistake-subentry";

        const renderReadMode = () => {
          const isNote = entry.kind === "note";
          sub.innerHTML = `
            <div class="mistake-subentry-head">
              <div class="error-tags" style="margin-bottom:0;">
                ${isNote ? `<span class="study-note-pill">Note</span>` : ""}
                ${entry.part ? `<span class="mistake-part-pill">Part ${entry.part}</span>` : ""}
                ${!isNote ? (entry.tags || []).map(t => `<span class="err-chip selected">${t}</span>`).join("") : ""}
              </div>
              <div class="mistake-entry-actions">
                <button type="button" class="mistake-action-btn" data-edit-entry>Edit</button>
                <button type="button" class="mistake-action-btn danger" data-del-entry title="Delete this note">×</button>
              </div>
            </div>
            <p class="mistake-note-text" style="margin:6px 0 10px;font-family:var(--sans);white-space:pre-wrap;"></p>
          `;
          const noteP = sub.querySelector(".mistake-note-text");
          if (entry.text && entry.text.trim()) noteP.innerHTML = renderSafeUserMath(entry.text);
          else noteP.innerHTML = "<em>(No text note)</em>";

          sub.querySelector("[data-edit-entry]").onclick = () => renderEditMode();
          sub.querySelector("[data-del-entry]").onclick = () => {
            const fresh = getQuestionNoteData(qId);
            const idx = fresh.entries.findIndex(e => e.id === entry.id && e.text === entry.text);
            if (idx >= 0) fresh.entries.splice(idx, 1);
            else {
              const fallbackIdx = fresh.entries.findIndex(e => e.id === entry.id);
              if (fallbackIdx >= 0) fresh.entries.splice(fallbackIdx, 1);
            }
            if (!fresh.entries.length) {
              fresh.entries = [{ id: "1", kind: "mistake", part: "", tags: [], text: "", updatedAt: null }];
            }
            state.notes[qId] = fresh;
            saveState();
            renderMistakeLogView();
          };
        };

        const renderEditMode = () => {
          let draftKind = entry.kind === "note" ? "note" : "mistake";
          let draftPart = entry.part || "";
          const draftTags = new Set(entry.tags || []);
          const showPartRow = q.parts.length > 1;
          sub.innerHTML = `
            <div class="mistake-inline-editor">
              <div style="display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:8px;">
                <div class="note-kind-toggle" role="group" aria-label="Entry type">
                  <button type="button" class="note-kind-pill ${draftKind !== "note" ? "selected" : ""}" data-kind="mistake">Mistake</button>
                  <button type="button" class="note-kind-pill ${draftKind === "note" ? "selected-note" : ""}" data-kind="note">Note</button>
                </div>
                ${showPartRow ? `
                  <div class="note-part-row">
                    <span class="note-part-label">Part</span>
                    <button type="button" class="note-part-pill ${!draftPart ? "selected" : ""}" data-part="">All</button>
                    ${q.parts.map(p => `<button type="button" class="note-part-pill ${draftPart === p.label ? "selected" : ""}" data-part="${p.label}">${p.label}</button>`).join("")}
                  </div>
                ` : ""}
              </div>
              <div class="error-tags" style="display:${draftKind === "note" ? "none" : "flex"};">
                ${ERROR_TAGS.map(tag => `<button type="button" class="err-chip ${draftTags.has(tag) ? "selected" : ""}" data-tag="${tag}">${tag}</button>`).join("")}
              </div>
              <textarea class="notes-textarea" placeholder="Amend your note (supports $LaTeX$)..."></textarea>
              <div class="note-math-preview" style="display:none;"></div>
              <div class="controls-row" style="margin-top:8px;">
                <button type="button" class="btn btn-primary" data-save-edit>Save</button>
                <button type="button" class="btn" data-cancel-edit>Cancel</button>
              </div>
            </div>
          `;
          const ta = sub.querySelector("textarea");
          const tagsRow = sub.querySelector(".error-tags");
          const preview = sub.querySelector(".note-math-preview");
          const syncPreview = (val) => {
            if (/\$\$[\s\S]+?\$\$|\$[^\$]+?\$/.test(val)) {
              preview.innerHTML = renderSafeUserMath(val);
              preview.style.display = "block";
            } else {
              preview.innerHTML = "";
              preview.style.display = "none";
            }
          };
          ta.value = entry.text || "";
          syncPreview(ta.value);
          attachDollarAutoPair(ta, (val) => syncPreview(val));
          ta.oninput = (e) => syncPreview(e.target.value);

          sub.querySelectorAll(".note-kind-pill").forEach(btn => {
            btn.onclick = () => {
              draftKind = btn.dataset.kind === "note" ? "note" : "mistake";
              const nowNote = draftKind === "note";
              sub.querySelectorAll(".note-kind-pill").forEach(b => {
                b.classList.toggle("selected", !nowNote && b.dataset.kind === "mistake");
                b.classList.toggle("selected-note", nowNote && b.dataset.kind === "note");
              });
              tagsRow.style.display = nowNote ? "none" : "flex";
            };
          });
          sub.querySelectorAll(".note-part-pill").forEach(btn => {
            btn.onclick = () => {
              draftPart = btn.dataset.part || "";
              sub.querySelectorAll(".note-part-pill").forEach(b => b.classList.toggle("selected", b === btn));
            };
          });
          sub.querySelectorAll(".err-chip").forEach(chip => {
            chip.onclick = () => {
              const t = chip.dataset.tag;
              if (draftTags.has(t)) draftTags.delete(t);
              else draftTags.add(t);
              chip.classList.toggle("selected");
            };
          });
          sub.querySelector("[data-cancel-edit]").onclick = () => renderReadMode();
          sub.querySelector("[data-save-edit]").onclick = () => {
            const fresh = getQuestionNoteData(qId);
            const target = fresh.entries.find(e => e.id === entry.id && e.text === entry.text)
              || fresh.entries.find(e => e.id === entry.id);
            if (target) {
              target.kind = draftKind;
              target.part = draftPart;
              target.tags = Array.from(draftTags);
              target.text = ta.value;
              target.updatedAt = new Date().toLocaleDateString("en-SG");
            }
            state.notes[qId] = fresh;
            saveState();
            renderMistakeLogView();
          };
          ta.focus();
        };

        renderReadMode();
        subWrap.appendChild(sub);
      });

      div.querySelector("[data-revise]").onclick = () => openQuestionForPractice(q);
      list.appendChild(div);
    });
  }

  // -------------------- 10. NAVIGATION, MF27 & TIMER --------------------
  const MF26_SECTIONS = [
    {
      title: "Pure: Algebra, Series & Maclaurin",
      items: [
        "Quadratic roots: $ax^2 + bx + c = 0 \\implies x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
        "Arithmetic: $u_n = a + (n-1)d$, $S_n = \\frac{n}{2}(2a + (n-1)d)$",
        "Geometric: $u_n = ar^{n-1}$, $S_n = \\frac{a(1-r^n)}{1-r}$, $S_\\infty = \\frac{a}{1-r}$ ($|r|<1$)",
        "Power sums: $\\sum_{r=1}^n r = \\frac{n(n+1)}{2}$, $\\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}$, $\\sum_{r=1}^n r^3 = \\frac{n^2(n+1)^2}{4}$",
        "$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\dots + \\frac{n(n-1)\\dots(n-r+1)}{r!}x^r + \\dots$ ($|x|<1$)",
        "$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$ (all $x$)",
        "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots$, $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots$ (all $x$)",
        "$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots$ ($-1 < x \\le 1$)",
        "$\\tan^{-1} x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\dots$ ($|x| \\le 1$)"
      ]
    },
    {
      title: "Pure: Trigonometry",
      items: [
        "Pythagorean: $\\cos^2 A + \\sin^2 A = 1$, $1 + \\tan^2 A = \\sec^2 A$, $\\cot^2 A + 1 = \\csc^2 A$",
        "$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$",
        "$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$",
        "$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$",
        "$\\sin 2A = 2\\sin A\\cos A$, $\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A$, $\\tan 2A = \\frac{2\\tan A}{1-\\tan^2 A}$",
        "Factor: $\\sin P \\pm \\sin Q = 2\\sin\\left(\\frac{P \\pm Q}{2}\\right)\\cos\\left(\\frac{P \\mp Q}{2}\\right)$",
        "Factor: $\\cos P + \\cos Q = 2\\cos\\left(\\frac{P+Q}{2}\\right)\\cos\\left(\\frac{P-Q}{2}\\right)$, $\\cos P - \\cos Q = -2\\sin\\left(\\frac{P+Q}{2}\\right)\\sin\\left(\\frac{P-Q}{2}\\right)$",
        "$a\\sin\\theta + b\\cos\\theta = R\\sin(\\theta + \\alpha)$ with $R = \\sqrt{a^2+b^2}$, $\\tan\\alpha = \\frac{b}{a}$"
      ]
    },
    {
      title: "Pure: Differentiation",
      items: [
        "$\\frac{\\mathrm{d}}{\\mathrm{d}x}(\\tan x) = \\sec^2 x$, $\\frac{\\mathrm{d}}{\\mathrm{d}x}(\\sec x) = \\sec x \\tan x$",
        "$\\frac{\\mathrm{d}}{\\mathrm{d}x}(\\csc x) = -\\csc x \\cot x$, $\\frac{\\mathrm{d}}{\\mathrm{d}x}(\\cot x) = -\\csc^2 x$",
        "$\\frac{\\mathrm{d}}{\\mathrm{d}x}(\\sin^{-1} x) = \\frac{1}{\\sqrt{1-x^2}}$, $\\frac{\\mathrm{d}}{\\mathrm{d}x}(\\cos^{-1} x) = -\\frac{1}{\\sqrt{1-x^2}}$, $\\frac{\\mathrm{d}}{\\mathrm{d}x}(\\tan^{-1} x) = \\frac{1}{1+x^2}$"
      ]
    },
    {
      title: "Pure: Integration",
      items: [
        "$\\int \\tan x\\,\\mathrm{d}x = \\ln|\\sec x| + c$, $\\int \\cot x\\,\\mathrm{d}x = \\ln|\\sin x| + c$",
        "$\\int \\sec x\\,\\mathrm{d}x = \\ln|\\sec x + \\tan x| + c$, $\\int \\csc x\\,\\mathrm{d}x = -\\ln|\\csc x + \\cot x| + c$",
        "$\\int \\frac{1}{x^2+a^2}\\,\\mathrm{d}x = \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) + c$, $\\int \\frac{1}{\\sqrt{a^2-x^2}}\\,\\mathrm{d}x = \\sin^{-1}\\left(\\frac{x}{a}\\right) + c$ ($|x|<a$)",
        "$\\int \\frac{1}{x^2-a^2}\\,\\mathrm{d}x = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + c$, $\\int \\frac{1}{a^2-x^2}\\,\\mathrm{d}x = \\frac{1}{2a}\\ln\\left|\\frac{a+x}{a-x}\\right| + c$ ($|x|<a$)",
        "Integration by parts: $\\int u\\frac{\\mathrm{d}v}{\\mathrm{d}x}\\,\\mathrm{d}x = uv - \\int v\\frac{\\mathrm{d}u}{\\mathrm{d}x}\\,\\mathrm{d}x$"
      ]
    },
    {
      title: "Pure: Vectors & Complex Numbers",
      items: [
        "Dot & cross: $\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$, $|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta$",
        "Area of $\\triangle ABC$: $\\frac{1}{2}|\\overrightarrow{AB} \\times \\overrightarrow{AC}|$",
        "Distance from point $P$ to plane $\\mathbf{r} \\cdot \\mathbf{n} = d$: $\\frac{|\\overrightarrow{OP} \\cdot \\mathbf{n} - d|}{|\\mathbf{n}|}$",
        "Euler: $r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$; De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$",
        "$n$-th roots of unity: $z^n = 1 \\implies z = e^{i\\frac{2k\\pi}{n}}$ ($k = 0, 1, \\dots, n-1$)"
      ]
    },
    {
      title: "Statistics: Probability & Distributions",
      items: [
        "$\\mathrm{P}(A \\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B) - \\mathrm{P}(A \\cap B)$, $\\mathrm{P}(A|B) = \\frac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)}$",
        "Binomial $X \\sim \\mathrm{B}(n,p)$: $\\mathrm{P}(X=x) = \\binom{n}{x}p^x(1-p)^{n-x}$, $\\mathrm{E}(X)=np$, $\\mathrm{Var}(X)=np(1-p)$",
        "Linear combinations: $\\mathrm{E}(aX+bY) = a\\mathrm{E}(X)+b\\mathrm{E}(Y)$, $\\mathrm{Var}(aX \\pm bY) = a^2\\mathrm{Var}(X)+b^2\\mathrm{Var}(Y)$ (independent)",
        "Sample mean $\\bar{X} \\sim \\mathrm{N}\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$ (exact if Normal, approx for large $n$ by CLT)"
      ]
    },
    {
      title: "Statistics: Correlation, Regression & Hypothesis Testing",
      items: [
        "Unbiased sample variance: $s^2 = \\frac{1}{n-1}\\left(\\sum x^2 - \\frac{(\\sum x)^2}{n}\\right)$",
        "Correlation $r = \\frac{\\sum(x-\\bar{x})(y-\\bar{y})}{\\sqrt{\\sum(x-\\bar{x})^2 \\sum(y-\\bar{y})^2}}$",
        "Regression line of $y$ on $x$: $y - \\bar{y} = b(x - \\bar{x})$, $b = \\frac{\\sum(x-\\bar{x})(y-\\bar{y})}{\\sum(x-\\bar{x})^2}$",
        "z-test: $z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$; t-test: $t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$ ($\\nu = n-1$)"
      ]
    }
  ];

  function openMF26Modal() {
    const modal = document.getElementById("mf26-modal");
    if (!modal) return;
    if (!modal.dataset.built) {
      modal.dataset.built = "1";
      modal.innerHTML = `
        <div class="mf26-drawer" role="dialog" aria-label="MF27 Formula Reference">
          <div class="mf26-head">
            <h2>MF27 Reference</h2>
            <button type="button" class="btn btn-ghost" id="mf26-close">✕</button>
          </div>
          <input type="search" class="mf26-search" id="mf26-search" placeholder="Filter formulas (e.g. Maclaurin, vectors, t-test)..." />
          <div class="mf26-body" id="mf26-body"></div>
        </div>
      `;
      const renderMF26 = (query = "") => {
        const q = query.trim().toLowerCase();
        const body = modal.querySelector("#mf26-body");
        const filtered = MF26_SECTIONS.map(sec => {
          const titleHit = sec.title.toLowerCase().includes(q);
          const items = titleHit ? sec.items : sec.items.filter(it => it.toLowerCase().includes(q));
          return { ...sec, items };
        }).filter(sec => sec.items.length > 0);
        body.innerHTML = filtered.length
          ? filtered.map((sec, idx) => `
              <details class="mf26-section" ${q || idx === 0 ? "open" : ""}>
                <summary>${sec.title}</summary>
                <div class="mf26-items">
                  ${sec.items.map(it => `<div class="mf26-item">${renderMathText(it)}</div>`).join("")}
                </div>
              </details>
            `).join("")
          : `<p style="color:var(--muted);font-size:0.88rem;">No matching formulas.</p>`;
      };
      renderMF26();
      modal.querySelector("#mf26-search").oninput = (e) => renderMF26(e.target.value);
      modal.querySelector("#mf26-close").onclick = closeMF26Modal;
      modal.onclick = (e) => { if (e.target === modal) closeMF26Modal(); };
    }
    if (window.innerWidth <= 980) {
      closeGCModal();
      closeScratchpadModal();
      closeAskModal();
    }
    const wasOpen = modal.classList.contains("open");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    syncToolButtons();
    if (!wasOpen) trackEvent({ type: "tool", tool: "mf27" });
  }

  function closeMF26Modal() {
    const modal = document.getElementById("mf26-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    syncToolButtons();
  }

  function syncToolButtons() {
    const map = [
      ["btn-mf26", "mf26-modal"],
      ["btn-gc", "gc-modal"],
      ["btn-scratchpad", "scratchpad-modal"],
      ["btn-ask", "ask-modal"]
    ];
    let anyOpen = false;
    map.forEach(([btnId, modalId]) => {
      const btn = document.getElementById(btnId);
      const modal = document.getElementById(modalId);
      const isOpen = !!(modal && modal.classList.contains("open"));
      if (isOpen) anyOpen = true;
      if (btn) btn.classList.toggle("active", isOpen);
    });
    const dock = document.getElementById("tool-dock");
    if (dock) dock.classList.toggle("has-open", anyOpen);
    const shell = document.querySelector(".app-shell");
    if (shell) shell.classList.toggle("has-dock", anyOpen);
  }

  function openGCModal() {
    const modal = document.getElementById("gc-modal");
    if (!modal) return;
    if (!modal.dataset.built && window.H2GC) {
      modal.dataset.built = "1";
      window.H2GC.build(modal, closeGCModal);
    }
    if (window.innerWidth <= 980) {
      closeMF26Modal();
      closeScratchpadModal();
      closeAskModal();
    }
    const wasOpen = modal.classList.contains("open");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    syncToolButtons();
    if (window.H2GC) requestAnimationFrame(() => window.H2GC.refreshLayout());
    if (!wasOpen) trackEvent({ type: "tool", tool: "gc" });
  }

  function closeGCModal() {
    const modal = document.getElementById("gc-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    syncToolButtons();
  }

  // -------------------- 10b. SCRATCHPAD WHITEBOARD (VECTOR PAN & ZOOM) --------------------
  const SCRATCH_STORAGE_KEY = "h2dailymath_scratch_v1";
  const MAX_SAVED_SCRATCH_DOCS = 20;
  function loadScratchCache() {
    try {
      const raw = localStorage.getItem(SCRATCH_STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return {};
      const out = {};
      Object.entries(parsed).forEach(([k, v]) => {
        if (v && Array.isArray(v.strokes)) {
          out[k] = {
            strokes: v.strokes,
            undoStack: [],
            camera: (v.camera && typeof v.camera === "object")
              ? { panX: Number(v.camera.panX) || 0, panY: Number(v.camera.panY) || 0, zoom: Number(v.camera.zoom) || 1 }
              : { panX: 0, panY: 0, zoom: 1 },
            updatedAt: Number(v.updatedAt) || 0
          };
        }
      });
      return out;
    } catch (_) {
      return {};
    }
  }
  function saveScratchCache() {
    try {
      const entries = Object.entries(scratchCache)
        .filter(([, v]) => v && Array.isArray(v.strokes) && v.strokes.length > 0)
        .sort((a, b) => (b[1].updatedAt || 0) - (a[1].updatedAt || 0))
        .slice(0, MAX_SAVED_SCRATCH_DOCS);
      const payload = {};
      entries.forEach(([k, v]) => {
        payload[k] = {
          strokes: v.strokes,
          camera: v.camera || { panX: 0, panY: 0, zoom: 1 },
          updatedAt: v.updatedAt || Date.now()
        };
      });
      localStorage.setItem(SCRATCH_STORAGE_KEY, JSON.stringify(payload));
    } catch (_) {}
  }
  const scratchCache = loadScratchCache();
  const pinnedPartsByQuestion = {};
  const scratchState = { color: "#2c2925", width: 2.2, eraser: false, panMode: false, grid: true, activeKey: null };

  function updateScratchpadCounter(qId) {
    const btn = document.getElementById("btn-scratchpad");
    if (!btn) return;
    const count = qId && pinnedPartsByQuestion[qId] ? pinnedPartsByQuestion[qId].size : 0;
    const labelSpan = btn.querySelector("span");
    const label = count > 0 ? `Scratchpad [${count}]` : "Scratchpad";
    if (labelSpan) labelSpan.textContent = label;
    else btn.textContent = label;
  }

  function getActiveScratchKey() {
    return (currentTab === "pure" || currentTab === "stats" || currentTab === "random") && qTimer.questionId
      ? qTimer.questionId
      : "general";
  }

  function openScratchpadModal() {
    const modal = document.getElementById("scratchpad-modal");
    if (!modal) return;
    if (!modal.dataset.built) {
      modal.dataset.built = "1";
      const colors = [
        { hex: "#2c2925", label: "Ink" },
        { hex: "#3b7dd8", label: "Blue" },
        { hex: "#cf5652", label: "Red" },
        { hex: "#388e64", label: "Green" }
      ];
      modal.innerHTML = `
        <div class="mf26-drawer scratch-drawer" role="dialog" aria-label="Scratchpad Whiteboard">
          <div class="scratch-topbar">
            <div class="scratch-topbar-group">
              <strong class="scratch-title">Scratchpad</strong>
              <small id="scratch-q-label" class="scratch-q-label"></small>
              <span class="scratch-sep"></span>
              ${colors.map((c, idx) => `<button type="button" class="scratch-swatch ${idx === 0 ? "active" : ""}" data-color="${c.hex}" style="background:${c.hex};" title="${c.label}"></button>`).join("")}
              <button type="button" class="btn" id="scratch-size" title="Toggle pen thickness">Fine</button>
              <button type="button" class="btn" id="scratch-eraser">Eraser</button>
              <button type="button" class="btn" id="scratch-pan" title="Pan mode (or hold Space / middle-click / 2-finger drag)">Pan</button>
              <button type="button" class="btn" id="scratch-undo" title="Undo last stroke (Ctrl+Z)">↶ Undo</button>
              <button type="button" class="btn" id="scratch-grid">Grid: On</button>
            </div>
            <div class="scratch-topbar-group">
              <button type="button" class="btn btn-ghost" id="scratch-clear">Clear</button>
              <button type="button" class="btn btn-ghost" id="scratch-zoom" title="Reset pan & zoom">100%</button>
              <button type="button" class="btn btn-ghost" id="scratch-expand" title="Expand / Restore width">⤢</button>
              <button type="button" class="btn btn-ghost" id="scratch-close" title="Close (Esc)">✕</button>
            </div>
          </div>
          <div class="scratch-pinned-parts" id="scratch-pinned-parts" style="display:none;"></div>
          <div class="scratch-stage with-grid" id="scratch-stage">
            <canvas class="scratch-canvas" id="scratch-canvas"></canvas>
          </div>
        </div>
      `;

      const drawer = modal.querySelector(".scratch-drawer");
      const stage = modal.querySelector("#scratch-stage");
      const canvas = modal.querySelector("#scratch-canvas");
      const zoomBtn = modal.querySelector("#scratch-zoom");
      const ctx = canvas.getContext("2d");

      const activePointers = new Map();
      let activeStroke = null;
      let isPanning = false;
      let panStart = null;
      let pinchStart = null;
      let spaceDown = false;
      let isErasing = false;
      let erasedInGesture = false;
      let lastEraseWorld = null;

      const getDoc = () => {
        const key = scratchState.activeKey || "general";
        if (!scratchCache[key]) {
          scratchCache[key] = { strokes: [], undoStack: [], camera: { panX: 0, panY: 0, zoom: 1 }, updatedAt: Date.now() };
        }
        return scratchCache[key];
      };

      const pushUndo = () => {
        const doc = getDoc();
        doc.undoStack.push([...doc.strokes]);
        if (doc.undoStack.length > 40) doc.undoStack.shift();
      };

      const screenToWorld = (sx, sy) => {
        const { panX, panY, zoom } = getDoc().camera;
        return { x: (sx - panX) / zoom, y: (sy - panY) / zoom };
      };

      const pointToSegDistSq = (px, py, ax, ay, bx, by) => {
        const dx = bx - ax, dy = by - ay;
        const lenSq = dx * dx + dy * dy;
        if (lenSq === 0) return (px - ax) * (px - ax) + (py - ay) * (py - ay);
        const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
        const cx = ax + t * dx, cy = ay + t * dy;
        return (px - cx) * (px - cx) + (py - cy) * (py - cy);
      };

      const orient = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);

      const segToSegDistSq = (a1, a2, b1, b2) => {
        const o1 = orient(a1, a2, b1), o2 = orient(a1, a2, b2);
        const o3 = orient(b1, b2, a1), o4 = orient(b1, b2, a2);
        if (((o1 > 0 && o2 < 0) || (o1 < 0 && o2 > 0)) && ((o3 > 0 && o4 < 0) || (o3 < 0 && o4 > 0))) {
          return 0;
        }
        return Math.min(
          pointToSegDistSq(a1.x, a1.y, b1.x, b1.y, b2.x, b2.y),
          pointToSegDistSq(a2.x, a2.y, b1.x, b1.y, b2.x, b2.y),
          pointToSegDistSq(b1.x, b1.y, a1.x, a1.y, a2.x, a2.y),
          pointToSegDistSq(b2.x, b2.y, a1.x, a1.y, a2.x, a2.y)
        );
      };

      const strokeHitsEraser = (stroke, p1, p2, radius) => {
        if (!stroke || stroke.eraser || !stroke.points || !stroke.points.length) return false;
        const hitR = radius + (stroke.width || 2) / 2;
        const hitRSq = hitR * hitR;
        const pts = stroke.points;
        if (pts.length === 1) {
          return pointToSegDistSq(pts[0].x, pts[0].y, p1.x, p1.y, p2.x, p2.y) <= hitRSq;
        }
        for (let i = 0; i < pts.length - 1; i++) {
          if (segToSegDistSq(pts[i], pts[i + 1], p1, p2) <= hitRSq) return true;
        }
        return false;
      };

      const eraseAtSegment = (p1, p2) => {
        const doc = getDoc();
        if (!doc.strokes.length) return false;
        const radius = 10 / doc.camera.zoom;
        const kept = doc.strokes.filter(s => !strokeHitsEraser(s, p1, p2, radius));
        if (kept.length === doc.strokes.length) return false;
        if (!erasedInGesture) {
          pushUndo();
          erasedInGesture = true;
        }
        doc.strokes = kept;
        return true;
      };

      const drawStroke = (s) => {
        if (!s.points.length) return;
        ctx.save();
        ctx.globalCompositeOperation = s.eraser ? "destination-out" : "source-over";
        ctx.strokeStyle = s.color;
        ctx.fillStyle = s.color;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = s.width;
        if (s.points.length === 1) {
          ctx.beginPath();
          ctx.arc(s.points[0].x, s.points[0].y, s.width / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(s.points[0].x, s.points[0].y);
          for (let i = 1; i < s.points.length - 1; i++) {
            const midX = (s.points[i].x + s.points[i + 1].x) / 2;
            const midY = (s.points[i].y + s.points[i + 1].y) / 2;
            ctx.quadraticCurveTo(s.points[i].x, s.points[i].y, midX, midY);
          }
          const last = s.points[s.points.length - 1];
          ctx.lineTo(last.x, last.y);
          ctx.stroke();
        }
        ctx.restore();
      };

      const syncGridAndCursor = () => {
        const cam = getDoc().camera;
        const gridPx = 28 * cam.zoom;
        stage.style.backgroundSize = `${gridPx}px ${gridPx}px`;
        stage.style.backgroundPosition = `${cam.panX}px ${cam.panY}px`;
        zoomBtn.textContent = `${Math.round(cam.zoom * 100)}%`;
        canvas.style.cursor = (scratchState.panMode || spaceDown) ? (isPanning ? "grabbing" : "grab") : "crosshair";
      };

      const redraw = () => {
        const dpr = window.devicePixelRatio || 1;
        const doc = getDoc();
        const cam = doc.camera;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(dpr * cam.zoom, 0, 0, dpr * cam.zoom, cam.panX * dpr, cam.panY * dpr);
        for (const s of doc.strokes) drawStroke(s);
        if (activeStroke) drawStroke(activeStroke);
        if (isErasing && lastEraseWorld) {
          ctx.save();
          ctx.strokeStyle = "rgba(158, 53, 53, 0.45)";
          ctx.lineWidth = 1.2 / cam.zoom;
          ctx.beginPath();
          ctx.arc(lastEraseWorld.x, lastEraseWorld.y, 10 / cam.zoom, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
        syncGridAndCursor();
      };

      const resizeCanvas = () => {
        const rect = stage.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.max(1, Math.floor(rect.width * dpr));
        canvas.height = Math.max(1, Math.floor(rect.height * dpr));
        redraw();
      };

      modal._syncScratchpad = () => {
        const key = getActiveScratchKey();
        scratchState.activeKey = key;
        modal.querySelector("#scratch-q-label").textContent = key === "general" ? "" : `(${key})`;

        const pinnedBox = modal.querySelector("#scratch-pinned-parts");
        const qObj = key !== "general" ? window.H2_QUESTIONS.find(x => x.id === key) : null;
        const html = renderPinnedPartsHtml(qObj);
        if (html) {
          pinnedBox.innerHTML = html;
          pinnedBox.style.display = "block";
        } else {
          pinnedBox.innerHTML = "";
          pinnedBox.style.display = "none";
        }
        requestAnimationFrame(resizeCanvas);
      };

      const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
      };

      canvas.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        canvas.setPointerCapture(e.pointerId);
        const pos = getPos(e);
        activePointers.set(e.pointerId, pos);

        if (activePointers.size === 2) {
          activeStroke = null;
          isPanning = false;
          if (isErasing) {
            isErasing = false;
            lastEraseWorld = null;
            if (erasedInGesture) {
              getDoc().updatedAt = Date.now();
              saveScratchCache();
              erasedInGesture = false;
            }
          }
          const pts = [...activePointers.values()];
          const cam = getDoc().camera;
          pinchStart = {
            dist: Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y) || 1,
            midX: (pts[0].x + pts[1].x) / 2,
            midY: (pts[0].y + pts[1].y) / 2,
            panX: cam.panX,
            panY: cam.panY,
            zoom: cam.zoom
          };
          redraw();
          return;
        }

        if (e.button === 1 || scratchState.panMode || spaceDown) {
          isPanning = true;
          const cam = getDoc().camera;
          panStart = { x: pos.x - cam.panX, y: pos.y - cam.panY };
          syncGridAndCursor();
          return;
        }

        if (e.button !== 0 && e.pointerType === "mouse") return;
        const w = screenToWorld(pos.x, pos.y);
        if (scratchState.eraser) {
          isErasing = true;
          erasedInGesture = false;
          lastEraseWorld = w;
          eraseAtSegment(w, w);
          redraw();
          return;
        }
        activeStroke = {
          color: scratchState.color,
          width: scratchState.width,
          eraser: false,
          points: [w]
        };
        redraw();
      });

      canvas.addEventListener("pointermove", (e) => {
        const pos = getPos(e);
        if (activePointers.has(e.pointerId)) activePointers.set(e.pointerId, pos);

        if (activePointers.size === 2 && pinchStart) {
          const pts = [...activePointers.values()];
          const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y) || 1;
          const midX = (pts[0].x + pts[1].x) / 2;
          const midY = (pts[0].y + pts[1].y) / 2;
          const cam = getDoc().camera;
          const nextZoom = Math.min(4, Math.max(0.25, pinchStart.zoom * (dist / pinchStart.dist)));
          const worldMidX = (pinchStart.midX - pinchStart.panX) / pinchStart.zoom;
          const worldMidY = (pinchStart.midY - pinchStart.panY) / pinchStart.zoom;
          cam.zoom = nextZoom;
          cam.panX = midX - worldMidX * nextZoom;
          cam.panY = midY - worldMidY * nextZoom;
          redraw();
          return;
        }

        if (isPanning && panStart) {
          const cam = getDoc().camera;
          cam.panX = pos.x - panStart.x;
          cam.panY = pos.y - panStart.y;
          redraw();
          return;
        }

        if (isErasing) {
          const w = screenToWorld(pos.x, pos.y);
          eraseAtSegment(lastEraseWorld || w, w);
          lastEraseWorld = w;
          redraw();
          return;
        }

        if (!activeStroke) return;
        activeStroke.points.push(screenToWorld(pos.x, pos.y));
        redraw();
      });

      const endPointer = (e) => {
        activePointers.delete(e.pointerId);
        if (activePointers.size < 2) pinchStart = null;
        if (isPanning) {
          isPanning = false;
          panStart = null;
          syncGridAndCursor();
        }
        if (isErasing) {
          isErasing = false;
          lastEraseWorld = null;
          if (erasedInGesture) {
            const doc = getDoc();
            doc.updatedAt = Date.now();
            saveScratchCache();
            erasedInGesture = false;
          }
          redraw();
        }
        if (activeStroke) {
          const doc = getDoc();
          pushUndo();
          doc.strokes.push(activeStroke);
          doc.updatedAt = Date.now();
          activeStroke = null;
          redraw();
          saveScratchCache();
        }
      };
      canvas.addEventListener("pointerup", endPointer);
      canvas.addEventListener("pointercancel", endPointer);

      canvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        const pos = getPos(e);
        const cam = getDoc().camera;
        const factor = Math.exp(-e.deltaY * 0.0014);
        const nextZoom = Math.min(4, Math.max(0.25, cam.zoom * factor));
        const wx = (pos.x - cam.panX) / cam.zoom;
        const wy = (pos.y - cam.panY) / cam.zoom;
        cam.zoom = nextZoom;
        cam.panX = pos.x - wx * nextZoom;
        cam.panY = pos.y - wy * nextZoom;
        redraw();
      }, { passive: false });

      window.addEventListener("keydown", (e) => {
        if (e.code === "Space" && modal.classList.contains("open")) {
          e.preventDefault();
          if (!spaceDown) { spaceDown = true; syncGridAndCursor(); }
        }
      });
      window.addEventListener("keyup", (e) => {
        if (e.code === "Space" && spaceDown) {
          spaceDown = false;
          syncGridAndCursor();
        }
      });

      const setPanMode = (on) => {
        scratchState.panMode = on;
        modal.querySelector("#scratch-pan").classList.toggle("btn-primary", on);
        syncGridAndCursor();
      };

      modal.querySelectorAll(".scratch-swatch").forEach(sw => {
        sw.onclick = () => {
          scratchState.color = sw.dataset.color;
          scratchState.eraser = false;
          setPanMode(false);
          modal.querySelector("#scratch-eraser").classList.remove("btn-primary");
          modal.querySelectorAll(".scratch-swatch").forEach(x => x.classList.remove("active"));
          sw.classList.add("active");
        };
      });

      modal.querySelector("#scratch-size").onclick = (e) => {
        scratchState.width = scratchState.width < 3 ? 4.2 : 2.2;
        e.target.textContent = scratchState.width < 3 ? "Fine" : "Medium";
      };

      modal.querySelector("#scratch-eraser").onclick = (e) => {
        scratchState.eraser = !scratchState.eraser;
        if (scratchState.eraser) setPanMode(false);
        e.target.classList.toggle("btn-primary", scratchState.eraser);
      };

      modal.querySelector("#scratch-pan").onclick = () => {
        setPanMode(!scratchState.panMode);
      };

      const performUndo = () => {
        const doc = getDoc();
        if (!doc.undoStack.length) return;
        doc.strokes = doc.undoStack.pop();
        doc.updatedAt = Date.now();
        redraw();
        saveScratchCache();
      };
      modal._undoScratchpad = performUndo;
      modal.querySelector("#scratch-undo").onclick = performUndo;

      zoomBtn.onclick = () => {
        getDoc().camera = { panX: 0, panY: 0, zoom: 1 };
        redraw();
      };

      modal.querySelector("#scratch-grid").onclick = (e) => {
        scratchState.grid = !scratchState.grid;
        stage.classList.toggle("with-grid", scratchState.grid);
        e.target.textContent = scratchState.grid ? "Grid: On" : "Grid: Off";
      };

      modal.querySelector("#scratch-clear").onclick = () => {
        const doc = getDoc();
        if (!doc.strokes.length) return;
        pushUndo();
        doc.strokes = [];
        doc.updatedAt = Date.now();
        redraw();
        saveScratchCache();
      };

      modal.querySelector("#scratch-expand").onclick = () => {
        drawer.classList.toggle("expanded");
        setTimeout(resizeCanvas, 210);
      };

      modal.querySelector("#scratch-close").onclick = closeScratchpadModal;
      modal.onclick = (e) => { if (e.target === modal) closeScratchpadModal(); };
      if (typeof ResizeObserver !== "undefined") {
        const ro = new ResizeObserver(() => {
          if (modal.classList.contains("open")) resizeCanvas();
        });
        ro.observe(stage);
      }
      modal.addEventListener("transitionend", (e) => {
        if (e.target === modal && (e.propertyName === "flex-grow" || e.propertyName === "flex-basis") && modal.classList.contains("open")) {
          resizeCanvas();
        }
      });
      window.addEventListener("resize", () => {
        if (modal.classList.contains("open")) resizeCanvas();
      });
    }

    if (window.innerWidth <= 980) {
      closeMF26Modal();
      closeGCModal();
      closeAskModal();
    }
    const wasOpen = modal.classList.contains("open");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    syncToolButtons();
    if (!wasOpen) trackEvent({ type: "tool", tool: "scratchpad" });
    if (modal._syncScratchpad) modal._syncScratchpad();
    setTimeout(() => {
      if (modal.classList.contains("open") && modal._syncScratchpad) modal._syncScratchpad();
    }, 380);
  }

  function closeScratchpadModal() {
    const modal = document.getElementById("scratchpad-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    syncToolButtons();
  }

  // -------------------- 10c. ASK / GEMINI HANDOFF DRAWER --------------------
  function renderPinnedPartsHtml(qObj) {
    if (!qObj) return "";
    const pinnedSet = pinnedPartsByQuestion[qObj.id];
    if (!pinnedSet || pinnedSet.size === 0) return "";
    const indices = [...pinnedSet].sort((a, b) => a - b);
    const stemDiagHtml = renderDiagramBox(qObj.diagramSvg, qObj.diagramImg);
    const stemHtml = qObj.stem ? `<div class="scratch-pinned-stem">${stemDiagHtml}${renderMathText(qObj.stem)}</div>` : stemDiagHtml;
    const partsHtml = indices.map(i => {
      const p = qObj.parts[i];
      if (!p) return "";
      return `<div class="scratch-pinned-item"><strong>Part ${p.label}</strong> <small style="color:var(--muted);">[${p.marks}m]</small><div>${renderMathText(p.prompt)}</div></div>`;
    }).join("");
    return stemHtml + partsHtml;
  }

  function stripHtmlForPrompt(str) {
    return String(str || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|tr|li|h\d)>/gi, "\n")
      .replace(/<(td|th)[^>]*>/gi, " | ")
      .replace(/<[^>]+>/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }

  function buildGeminiHandoffPrompt(qObj, userQuestion) {
    const qText = (userQuestion || "").trim() || "Walk me through how to approach this question step by step.";
    if (!qObj) {
      return `Singapore A-Level H2 Math (9758) question:\n\n${qText}`;
    }
    const pinnedSet = pinnedPartsByQuestion[qObj.id];
    const focusedLabels = pinnedSet && pinnedSet.size > 0
      ? [...pinnedSet].sort((a, b) => a - b).map(i => qObj.parts[i]?.label).filter(Boolean)
      : [];
    const partsText = (qObj.parts || []).map(p =>
      `Part ${p.label} [${p.marks}m]: ${stripHtmlForPrompt(p.prompt)}\nOfficial Solution: ${stripHtmlForPrompt(p.solution || "N/A")}`
    ).join("\n\n");
    return [
      "I'm studying Singapore A-Level H2 Mathematics (9758). Please be concise and give clear step-by-step guidance.",
      `Question: ${qObj.school} ${qObj.paper} ${qObj.qNum} (Topics: ${(qObj.topics || []).join(", ")})`,
      focusedLabels.length ? `Focus specifically on: Part ${focusedLabels.join(", Part ")}` : "",
      qObj.stem ? `Stem:\n${stripHtmlForPrompt(qObj.stem)}` : "",
      partsText,
      `My question:\n${qText}`
    ].filter(Boolean).join("\n\n");
  }

  function openAskModal() {
    const modal = document.getElementById("ask-modal");
    if (!modal) return;
    if (!modal.dataset.built) {
      modal.dataset.built = "1";
      modal.innerHTML = `
        <div class="mf26-drawer" role="dialog" aria-label="Ask Gemini">
          <div class="mf26-head">
            <h2>Ask <small id="ask-q-label" style="font-weight:400;color:var(--muted);font-family:var(--sans);font-size:0.78rem;"></small></h2>
            <button type="button" class="btn btn-ghost" id="ask-close" title="Close (Esc)">✕</button>
          </div>
          <div class="scratch-pinned-parts" id="ask-pinned-parts" style="display:none;"></div>
          <div class="ask-messages">
            <div class="ask-empty">
              Copies the current question (and any pinned parts) along with your prompt so you can paste straight into Gemini with <strong>Ctrl+V</strong>.
              <div class="ask-chips">
                <button type="button" class="btn" data-prompt="Give me a small hint to start this question without spoiling the answer.">Hint to start</button>
                <button type="button" class="btn" data-prompt="What key concept or formula from MF27 applies here?">Key concept</button>
                <button type="button" class="btn" data-prompt="Walk me through the solution step by step.">Explain solution</button>
                <button type="button" class="btn" data-prompt="Where did I go wrong? Here is my working: ">Check my working</button>
              </div>
              <div id="ask-copy-status" class="ask-copy-status"></div>
            </div>
          </div>
          <div class="ask-compose" style="flex-direction:column;align-items:stretch;">
            <textarea id="ask-input" rows="2" placeholder="Optional: type your question or paste your working (defaults to step-by-step walkthrough)..."></textarea>
            <div style="display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;">
              <button type="button" class="btn" id="ask-copy-only">Copy Prompt</button>
              <button type="button" class="btn btn-primary" id="ask-open-gemini">Copy &amp; Open Gemini ↗</button>
            </div>
          </div>
        </div>
      `;

      const inputEl = modal.querySelector("#ask-input");
      const statusEl = modal.querySelector("#ask-copy-status");
      const copyOnlyBtn = modal.querySelector("#ask-copy-only");
      const openGeminiBtn = modal.querySelector("#ask-open-gemini");

      const copyPrompt = async (openTab) => {
        const key = getActiveScratchKey();
        const qObj = key !== "general" ? window.H2_QUESTIONS.find(x => x.id === key) : null;
        const payload = buildGeminiHandoffPrompt(qObj, inputEl.value);
        try {
          await navigator.clipboard.writeText(payload);
          statusEl.style.color = "var(--ok)";
          statusEl.textContent = openTab
            ? "Copied to clipboard. Press Ctrl+V in Gemini."
            : "Copied to clipboard.";
        } catch (_) {
          statusEl.style.color = "var(--warn)";
          statusEl.textContent = "Could not access clipboard automatically.";
        }
        if (openTab) {
          window.open("https://gemini.google.com/app", "_blank", "noopener,noreferrer");
        }
      };

      modal.querySelectorAll("[data-prompt]").forEach(b => {
        b.onclick = () => {
          inputEl.value = b.dataset.prompt;
          inputEl.focus();
        };
      });

      copyOnlyBtn.onclick = () => copyPrompt(false);
      openGeminiBtn.onclick = () => copyPrompt(true);
      inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          copyPrompt(true);
        }
      });
      modal.querySelector("#ask-close").onclick = closeAskModal;
      modal.onclick = (e) => { if (e.target === modal) closeAskModal(); };

      modal._syncAsk = () => {
        const key = getActiveScratchKey();
        modal.querySelector("#ask-q-label").textContent = key === "general" ? "" : `(${key})`;
        statusEl.textContent = "";
        const pinnedBox = modal.querySelector("#ask-pinned-parts");
        const qObj = key !== "general" ? window.H2_QUESTIONS.find(x => x.id === key) : null;
        const html = renderPinnedPartsHtml(qObj);
        if (html) {
          pinnedBox.innerHTML = html;
          pinnedBox.style.display = "block";
        } else {
          pinnedBox.innerHTML = "";
          pinnedBox.style.display = "none";
        }
      };
    }

    if (window.innerWidth <= 980) {
      closeMF26Modal();
      closeGCModal();
      closeScratchpadModal();
    }
    const wasOpen = modal.classList.contains("open");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    syncToolButtons();
    if (!wasOpen) trackEvent({ type: "tool", tool: "ask" });
    if (modal._syncAsk) modal._syncAsk();
  }

  function closeAskModal() {
    const modal = document.getElementById("ask-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    syncToolButtons();
  }

  function pickRandom(cat = null) {
    const pool = getFilteredRandomPool(cat);
    if (!pool.length) {
      randomQuestion = null;
      randomState = {};
      renderCurrent();
      return;
    }
    const candidates = pool.length > 1 && randomQuestion ? pool.filter(q => q.id !== randomQuestion.id) : pool;
    randomQuestion = candidates[Math.floor(Math.random() * candidates.length)];
    randomState = { questionId: randomQuestion.id, parts: {} };
    renderCurrent();
  }

  function switchTab(tab, keepRandom = false) {
    const prevTab = currentTab;
    currentTab = tab;
    if (analyticsBooted && tab !== prevTab) {
      trackEvent({ type: "tab", tab });
    }
    document.body.dataset.theme = tab;
    document.querySelectorAll(".tab-btn").forEach(b => {
      const active = b.dataset.tab === tab;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
    if (tab === "random" && (!randomQuestion || !keepRandom)) pickRandom();
    else renderCurrent();
    if (tab === "calendar" || tab === "mistakes") updateScratchpadCounter(null);
  }

  function renderCurrent() {
    const today = getStudyDayKey();
    if (currentTab === "pure" || currentTab === "stats") {
      const q = getDailyQuestion(today, currentTab);
      const rec = getDayRecord(today)[currentTab];
      renderQuestionView(q, rec, { dayKey: today });
    } else if (currentTab === "random") {
      renderQuestionView(randomQuestion, randomState, { isRandom: true });
    } else if (currentTab === "calendar") {
      renderCalendarView();
    } else if (currentTab === "mistakes") {
      renderMistakeLogView();
    }
  }

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.onclick = () => switchTab(btn.dataset.tab);
  });

  function updateCountdown() {
    const ms = getMsUntilNext6AM();
    const totalSec = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    const s = String(totalSec % 60).padStart(2, "0");
    document.getElementById("reset-timer").textContent = `${h}:${m}:${s}`;
  }

  function loadBankScripts() {
    const files = Array.isArray(window.H2_BANK_FILES) ? window.H2_BANK_FILES : [];
    if (!files.length) return Promise.resolve();
    return Promise.all(files.map(src => new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = resolve;
      s.onerror = resolve;
      document.body.appendChild(s);
    })));
  }

  window.addEventListener("DOMContentLoaded", async () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
    const toggleTool = (modalId, openFn, closeFn) => {
      const m = document.getElementById(modalId);
      if (m && m.classList.contains("open")) closeFn();
      else openFn();
    };
    const mf26Btn = document.getElementById("btn-mf26");
    if (mf26Btn) mf26Btn.onclick = () => toggleTool("mf26-modal", openMF26Modal, closeMF26Modal);
    const gcBtn = document.getElementById("btn-gc");
    if (gcBtn) gcBtn.onclick = () => toggleTool("gc-modal", openGCModal, closeGCModal);
    const scratchBtn = document.getElementById("btn-scratchpad");
    if (scratchBtn) scratchBtn.onclick = () => toggleTool("scratchpad-modal", openScratchpadModal, closeScratchpadModal);
    const askBtn = document.getElementById("btn-ask");
    if (askBtn) askBtn.onclick = () => toggleTool("ask-modal", openAskModal, closeAskModal);
    const privacyBtn = document.getElementById("btn-privacy");
    const privacyPanel = document.getElementById("privacy-panel");
    const feedbackBtn = document.getElementById("btn-feedback");
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackCancel = document.getElementById("feedback-cancel");
    const feedbackMsg = document.getElementById("feedback-message");
    const feedbackStatus = document.getElementById("feedback-status");
    const feedbackSubmit = document.getElementById("feedback-submit");
    if (privacyBtn && privacyPanel) {
      privacyBtn.onclick = () => {
        const open = privacyPanel.hidden;
        privacyPanel.hidden = !open;
        privacyBtn.setAttribute("aria-expanded", open ? "true" : "false");
        if (open && feedbackForm && !feedbackForm.hidden) {
          feedbackForm.hidden = true;
          if (feedbackBtn) feedbackBtn.setAttribute("aria-expanded", "false");
        }
      };
    }
    if (feedbackBtn && feedbackForm) {
      const setFeedbackOpen = (open) => {
        feedbackForm.hidden = !open;
        feedbackBtn.setAttribute("aria-expanded", open ? "true" : "false");
        if (open && privacyPanel && !privacyPanel.hidden) {
          privacyPanel.hidden = true;
          if (privacyBtn) privacyBtn.setAttribute("aria-expanded", "false");
        }
        if (open) {
          syncFeedbackContext();
          if (feedbackStatus) feedbackStatus.textContent = "";
          if (feedbackMsg) feedbackMsg.focus();
        }
      };
      feedbackBtn.onclick = () => setFeedbackOpen(feedbackForm.hidden);
      if (feedbackCancel) feedbackCancel.onclick = () => setFeedbackOpen(false);
      feedbackForm.onsubmit = async (e) => {
        e.preventDefault();
        const honey = feedbackForm.querySelector('input[name="_honey"]');
        if (honey && honey.value) return;
        const msg = (feedbackMsg ? feedbackMsg.value : "").trim();
        if (!msg) return;
        const typeEl = document.getElementById("feedback-type");
        const emailEl = document.getElementById("feedback-email");
        const ctx = getFeedbackContext();
        const feedbackType = typeEl ? typeEl.value : "Feedback";
        const replyEmail = emailEl ? emailEl.value.trim() : "";
        if (feedbackSubmit) {
          feedbackSubmit.disabled = true;
          feedbackSubmit.textContent = "Sending...";
        }
        if (feedbackStatus) {
          feedbackStatus.style.color = "var(--muted)";
          feedbackStatus.textContent = "";
        }
        try {
          const res = await fetch(FORMSUBMIT_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              _subject: `[H2 Mathle] ${feedbackType}${ctx.qId ? ` (${ctx.qId})` : ""}`,
              _template: "table",
              type: feedbackType,
              question: ctx.qId || "None (not on a question)",
              tab: TAB_LABELS[ctx.tab] || ctx.tab,
              page_url: ctx.url,
              reply_email: replyEmail || "Not provided",
              message: msg
            })
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          trackEvent({ type: "feedback" });
          if (feedbackMsg) feedbackMsg.value = "";
          if (feedbackStatus) {
            feedbackStatus.style.color = "var(--ok)";
            feedbackStatus.textContent = "Sent. Thanks for the feedback.";
          }
        } catch (_) {
          if (feedbackStatus) {
            feedbackStatus.style.color = "var(--bad)";
            feedbackStatus.textContent = "Could not send right now. Please try again.";
          }
        } finally {
          if (feedbackSubmit) {
            feedbackSubmit.disabled = false;
            feedbackSubmit.textContent = "Send";
          }
        }
      };
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeMF26Modal(); closeGCModal(); closeScratchpadModal(); closeAskModal(); return; }
      const scratchModal = document.getElementById("scratchpad-modal");
      if (scratchModal && scratchModal.classList.contains("open") && (e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (scratchModal._undoScratchpad) scratchModal._undoScratchpad();
        return;
      }
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
      if (tag === "input" || tag === "textarea" || tag === "select" || e.metaKey || e.ctrlKey || e.altKey) return;
      const tabKeys = { "1": "pure", "2": "stats", "3": "random", "4": "calendar", "5": "mistakes" };
      if (tabKeys[e.key]) { switchTab(tabKeys[e.key]); return; }
      if (e.key === "m" || e.key === "M") {
        const modal = document.getElementById("mf26-modal");
        if (modal && modal.classList.contains("open")) closeMF26Modal();
        else openMF26Modal();
      } else if (e.key === "c" || e.key === "C") {
        const modal = document.getElementById("gc-modal");
        if (modal && modal.classList.contains("open")) closeGCModal();
        else openGCModal();
      } else if (e.key === "w" || e.key === "W") {
        const modal = document.getElementById("scratchpad-modal");
        if (modal && modal.classList.contains("open")) closeScratchpadModal();
        else openScratchpadModal();
      } else if (e.key === "a" || e.key === "A") {
        const modal = document.getElementById("ask-modal");
        if (modal && modal.classList.contains("open")) closeAskModal();
        else openAskModal();
      }
    });
    await loadBankScripts();
    const qParam = new URLSearchParams(window.location.search).get("q");
    const linkedQ = qParam && Array.isArray(window.H2_QUESTIONS)
      ? window.H2_QUESTIONS.find(x => x.id === qParam)
      : null;
    if (linkedQ) {
      randomQuestion = linkedQ;
      randomState = { questionId: linkedQ.id, parts: {} };
      switchTab("random", true);
    } else {
      switchTab(getTabFromHash() || "pure");
    }
    analyticsBooted = true;
    trackEvent({ type: "visit", tab: currentTab, ref: getReferrerHost() });
    window.addEventListener("hashchange", () => {
      const targetTab = getTabFromHash();
      if (targetTab && targetTab !== currentTab) {
        switchTab(targetTab);
      }
    });

    const mainEl = document.getElementById("main-content");
    if (mainEl) {
      let snapRaf = 0;
      let cardRO = null;

      function snapLastCardToGrid() {
        const cards = mainEl.querySelectorAll(".card");
        if (!cards.length) return;
        if (window.innerWidth <= 860) {
          cards.forEach((c) => { if (c.style.paddingBottom) c.style.paddingBottom = ""; });
          return;
        }
        const lastCard = cards[cards.length - 1];
        cards.forEach((c) => { if (c !== lastCard && c.style.paddingBottom) c.style.paddingBottom = ""; });
        const visibleChildren = [...lastCard.children].filter((el) => el.offsetParent !== null);
        const lastChild = visibleChildren[visibleChildren.length - 1];
        if (!lastChild) return;
        const cardTransform = getComputedStyle(lastCard).transform;
        const ty = cardTransform && cardTransform !== "none" ? (new DOMMatrix(cardTransform).m42 || 0) : 0;
        const lastRect = lastChild.getBoundingClientRect();
        const lastMb = parseFloat(getComputedStyle(lastChild).marginBottom) || 0;
        const contentBottomDoc = (lastRect.bottom - ty) + window.scrollY + lastMb;
        const snappedLineY = Math.ceil((contentBottomDoc + 20) / 20) * 20;
        const nextPad = Math.max(20, snappedLineY - contentBottomDoc);
        const curPad = parseFloat(lastCard.style.paddingBottom) || 0;
        if (Math.abs(nextPad - curPad) > 0.25) {
          lastCard.style.paddingBottom = nextPad.toFixed(2) + "px";
        }
      }

      function scheduleGridSnap() {
        if (snapRaf) return;
        snapRaf = requestAnimationFrame(() => {
          snapRaf = 0;
          snapLastCardToGrid();
        });
      }

      function bindCardResizeObserver() {
        if (!window.ResizeObserver) return;
        if (cardRO) cardRO.disconnect();
        cardRO = new ResizeObserver(scheduleGridSnap);
        const cards = mainEl.querySelectorAll(".card");
        const lastCard = cards[cards.length - 1];
        if (!lastCard) return;
        [...lastCard.children].forEach((el) => cardRO.observe(el));
        lastCard.querySelectorAll("textarea").forEach((ta) => cardRO.observe(ta));
      }

      const mainMO = new MutationObserver(() => {
        bindCardResizeObserver();
        scheduleGridSnap();
      });
      mainMO.observe(mainEl, { childList: true, subtree: true });
      mainEl.addEventListener("animationend", scheduleGridSnap);
      window.addEventListener("resize", scheduleGridSnap);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(scheduleGridSnap);
      }
      bindCardResizeObserver();
      scheduleGridSnap();
    }
  });
})();