"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const nodeCrypto = require("node:crypto");

if (typeof globalThis.crypto?.subtle?.timingSafeEqual !== "function") {
  globalThis.crypto.subtle.timingSafeEqual = (a, b) =>
    nodeCrypto.timingSafeEqual(new Uint8Array(a), new Uint8Array(b));
}

function createMockDb(onBatch) {
  return {
    prepare(sql) {
      return {
        bind(...args) {
          return { sql, args };
        }
      };
    },
    async batch(stmts) {
      return onBatch(stmts);
    }
  };
}

function makeEnv(overrides = {}) {
  return {
    HASH_SECRET: "test-hmac-secret",
    ADMIN_TOKEN: "test-admin-token",
    DB: createMockDb((stmts) => stmts.map(() => ({ results: [] }))),
    ...overrides
  };
}

test("worker /health, origin/validation checks, daily solve rank, admin auth, and removed route", async () => {
  const { default: worker } = await import("../worker/worker.js");

  const healthRes = await worker.fetch(new Request("https://api.h2mathle.com/health"), makeEnv());
  assert.equal(healthRes.status, 200);
  const healthJson = await healthRes.json();
  assert.equal(healthJson.ok, true);
  assert.match(healthJson.studyDay, /^\d{4}-\d{2}-\d{2}$/);

  const badOrigin = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/e", {
      method: "POST",
      headers: { Origin: "https://evil.example", "Content-Type": "text/plain" },
      body: JSON.stringify({ type: "visit" })
    }),
    makeEnv()
  );
  assert.equal(badOrigin.status, 403);

  const badJson = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/e", {
      method: "POST",
      headers: { Origin: "https://h2mathle.com", "Content-Type": "text/plain" },
      body: "{bad-json"
    }),
    makeEnv()
  );
  assert.equal(badJson.status, 400);

  const badType = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/e", {
      method: "POST",
      headers: { Origin: "https://h2mathle.com", "Content-Type": "text/plain" },
      body: JSON.stringify({ type: "unknown_event" })
    }),
    makeEnv()
  );
  assert.equal(badType.status, 400);

  const tooBig = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/e", {
      method: "POST",
      headers: { Origin: "https://h2mathle.com", "Content-Type": "text/plain" },
      body: JSON.stringify({ type: "visit", ref: "x".repeat(2100) })
    }),
    makeEnv()
  );
  assert.equal(tooBig.status, 413);

  let visitBatches = [];
  const visitRes = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/e", {
      method: "POST",
      headers: { Origin: "https://h2mathle.com", "User-Agent": "Mozilla/5.0", "Content-Type": "text/plain" },
      body: JSON.stringify({ type: "visit", tab: "pure", ref: "https://t.me/channel" })
    }),
    makeEnv({
      DB: createMockDb((stmts) => {
        visitBatches = stmts;
        return stmts.map(() => ({ results: [] }));
      })
    })
  );
  assert.equal(visitRes.status, 204);
  assert.equal(visitBatches.length, 3);

  const solveRes = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/e", {
      method: "POST",
      headers: { Origin: "https://h2mathle.com", "User-Agent": "Mozilla/5.0", "Content-Type": "text/plain" },
      body: JSON.stringify({
        type: "progress",
        qId: "RI-2026-P1-Q1",
        mode: "daily_pure",
        category: "pure",
        action: "check_ok",
        qStatus: "ok",
        partsDone: 3,
        partsTotal: 3,
        partsOk: 3,
        elapsedSec: 45
      })
    }),
    makeEnv({
      DB: createMockDb((stmts) => stmts.map((s) => (
        s.sql.includes("SELECT solve_rank") ? { results: [{ solve_rank: 1 }] } : { results: [] }
      )))
    })
  );
  assert.equal(solveRes.status, 200);
  const solveJson = await solveRes.json();
  assert.deepEqual(
    { ok: solveJson.ok, rank: solveJson.rank, isFirst: solveJson.isFirst, mode: solveJson.mode },
    { ok: true, rank: 1, isFirst: true, mode: "daily_pure" }
  );

  const unauthStats = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/admin/stats?days=7", {
      headers: { Authorization: "Bearer wrong-token" }
    }),
    makeEnv()
  );
  assert.equal(unauthStats.status, 401);

  const okStats = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/admin/stats?days=7", {
      headers: { Authorization: "Bearer test-admin-token" }
    }),
    makeEnv()
  );
  assert.equal(okStats.status, 200);
  const statsJson = await okStats.json();
  assert.equal(statsJson.range.days, "7");
  assert.ok(Array.isArray(statsJson.daily));

  const removedRoute = await worker.fetch(
    new Request("https://api.h2mathle.com/v1/daily-summary"),
    makeEnv()
  );
  assert.equal(removedRoute.status, 404);
});
