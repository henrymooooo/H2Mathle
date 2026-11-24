"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ROOT = path.resolve(__dirname, "..");

function createSandbox() {
  const store = new Map();
  const sandbox = {
    console,
    Math,
    Date,
    RegExp,
    Error,
    JSON,
    Set,
    Map,
    Array,
    Object,
    String,
    Number,
    Boolean,
    Promise,
    parseInt,
    parseFloat,
    isNaN,
    isFinite,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    localStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => { store.set(k, String(v)); },
      removeItem: (k) => { store.delete(k); }
    },
    location: { protocol: "file:", hostname: "", search: "", href: "file:///index.html" },
    navigator: {},
    document: {
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {},
      createElement: () => {
        const el = {
          style: {},
          className: "",
          innerHTML: "",
          textContent: "",
          children: [],
          classList: { add() {}, remove() {}, toggle() {} },
          setAttribute() {},
          addEventListener() {},
          focus() {},
          append(...nodes) { el.children.push(...nodes); },
          appendChild(node) { el.children.push(node); return node; }
        };
        return el;
      },
      body: { dataset: {}, appendChild: () => {} },
      fonts: null
    },
    ResizeObserver: class { observe() {} disconnect() {} },
    MutationObserver: class { observe() {} disconnect() {} },
    requestAnimationFrame: () => 0,
    addEventListener: () => {}
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  return sandbox;
}

function loadScript(sandbox, relPath) {
  const fullPath = path.join(ROOT, relPath);
  const code = fs.readFileSync(fullPath, "utf8");
  vm.runInContext(code, sandbox, { filename: relPath });
}

function approx(actual, expected, tol = 1e-9, label = "") {
  assert.ok(
    Math.abs(actual - expected) <= tol,
    `${label ? label + ": " : ""}expected ${expected} ± ${tol}, got ${actual}`
  );
}

const ctx = createSandbox();
loadScript(ctx, "questions.js");
loadScript(ctx, "banks/manifest.js");
for (const file of ctx.window.H2_BANK_FILES) {
  loadScript(ctx, file);
}
loadScript(ctx, "gc.js");
loadScript(ctx, "app.js");

const { H2Grader, H2GC, H2_QUESTIONS, H2_BANK_FILES } = ctx.window;

test("exports and manifest question bank integrity", () => {
  assert.ok(H2Grader, "window.H2Grader should be exposed");
  assert.ok(H2GC && H2GC.math, "window.H2GC.math should be exposed");
  assert.ok(Array.isArray(H2_BANK_FILES) && H2_BANK_FILES.length > 0, "Expected non-empty bank manifest");
  assert.ok(H2_QUESTIONS.length >= H2_BANK_FILES.length, "Expected questions loaded from manifest");

  const ids = new Set();
  for (const q of H2_QUESTIONS) {
    assert.ok(q && typeof q.id === "string" && q.id.length > 0);
    assert.ok(!ids.has(q.id), `Duplicate question id: ${q.id}`);
    ids.add(q.id);
    assert.ok(Array.isArray(q.parts) && q.parts.length > 0, `Question ${q.id} has no parts`);
  }
});

test("unary-minus precedence in H2Grader.evalComplex", () => {
  approx(H2Grader.evalComplex("-2^2").re, -4, 1e-12, "-2^2");
  approx(H2Grader.evalComplex("(-2)^2").re, 4, 1e-12, "(-2)^2");
  approx(H2Grader.evalComplex("2^-2").re, 0.25, 1e-12, "2^-2");
  approx(H2Grader.evalComplex("2^3^2").re, 512, 1e-12, "2^3^2");
  approx(H2Grader.evalComplex("2^-3^2").re, Math.pow(2, -9), 1e-12, "2^-3^2");
  approx(H2Grader.evalComplex("e^(-x^2)", { x: 1 }).re, Math.exp(-1), 1e-12, "e^(-x^2)");
  approx(H2Grader.evalComplex("-e^(-2*x)", { x: 1 }).re, -Math.exp(-2), 1e-12, "-e^(-2*x)");

  const negSquareHalf = { mode: "expr", vars: { x: [1, 2, 3] }, answer: "-x^2/2" };
  assert.equal(H2Grader.gradeSingleInput(negSquareHalf, "-0.5*x^2").ok, true);
  assert.equal(H2Grader.gradeSingleInput(negSquareHalf, "-(x^2)/2").ok, true);
  assert.equal(H2Grader.gradeSingleInput(negSquareHalf, "-1/2*x^2").ok, true);
  assert.equal(H2Grader.gradeSingleInput(negSquareHalf, "x^2/2").ok, false);
});

test("unary-minus and factorial precedence in H2GC.math.evalNumExpr", () => {
  approx(H2GC.math.evalNumExpr("-2^2"), -4, 1e-12, "-2^2");
  approx(H2GC.math.evalNumExpr("(-2)^2"), 4, 1e-12, "(-2)^2");
  approx(H2GC.math.evalNumExpr("2^-2"), 0.25, 1e-12, "2^-2");
  approx(H2GC.math.evalNumExpr("2^3^2"), 512, 1e-12, "2^3^2");
  approx(H2GC.math.evalNumExpr("2^-3^2"), Math.pow(2, -9), 1e-12, "2^-3^2");
  approx(H2GC.math.evalNumExpr("e^(-x^2)", { x: 1 }), Math.exp(-1), 1e-12, "e^(-x^2)");
  approx(H2GC.math.evalNumExpr("-e^(-2*x)", { x: 1 }), -Math.exp(-2), 1e-12, "-e^(-2*x)");
  approx(H2GC.math.evalNumExpr("-3!"), -6, 1e-12, "-3!");
  approx(H2GC.math.evalNumExpr("3!^2"), 36, 1e-12, "3!^2");
  approx(H2GC.math.evalNumExpr("2^3!"), 64, 1e-12, "2^3!");
});

test("scientific notation and Euler e handling in both parsers", () => {
  for (const [label, fn] of [
    ["H2Grader", (s, env) => H2Grader.evalComplex(s, env).re],
    ["H2GC", (s, env) => H2GC.math.evalNumExpr(s, env)]
  ]) {
    approx(fn("1.23e3"), 1230, 1e-9, `${label} 1.23e3`);
    approx(fn("5e-4"), 0.0005, 1e-12, `${label} 5e-4`);
    approx(fn("-2.5E+2"), -250, 1e-9, `${label} -2.5E+2`);
    approx(fn("1.23e3x", { x: 2 }), 2460, 1e-9, `${label} 1.23e3x`);
    approx(fn("2e - 1"), 2 * Math.E - 1, 1e-12, `${label} 2e - 1`);
    approx(fn("2e^x", { x: 1 }), 2 * Math.E, 1e-12, `${label} 2e^x`);
    approx(fn("2e^(-1)"), 2 * Math.exp(-1), 1e-12, `${label} 2e^(-1)`);
  }
});

test("grader exactRequired blocks decimal approximations", () => {
  const third = { mode: "number", answer: "1/3", exactRequired: true };
  assert.equal(H2Grader.gradeSingleInput(third, "0.3333333333").ok, false);
  assert.equal(H2Grader.gradeSingleInput(third, "0.3333333333333333").ok, false);
  assert.equal(H2Grader.gradeSingleInput(third, "1/3").ok, true);

  const piPart = { mode: "number", answer: "pi", exactRequired: true };
  assert.equal(H2Grader.gradeSingleInput(piPart, "3.141592653589793").ok, false);
  assert.equal(H2Grader.gradeSingleInput(piPart, "pi").ok, true);

  const half = { mode: "number", answer: "1/2", exactRequired: true };
  assert.equal(H2Grader.gradeSingleInput(half, "0.5").ok, true);
  assert.equal(H2Grader.gradeSingleInput(half, "1/2").ok, true);
});

test("grader multi-candidate fallback", () => {
  const signPart = { mode: "number", answers: ["-5", "5"], signHint: true };
  assert.equal(H2Grader.gradeSingleInput(signPart, "5").ok, true);
  assert.equal(H2Grader.gradeSingleInput(signPart, "-5").ok, true);

  const exactList = { mode: "number", answers: ["pi", "3.142"], exactRequired: true };
  assert.equal(H2Grader.gradeSingleInput(exactList, "3.142").ok, true);
  const exactMiss = H2Grader.gradeSingleInput({ mode: "number", answers: ["pi", "5"], exactRequired: true }, "3.142");
  assert.equal(exactMiss.ok, false);
  assert.ok(exactMiss.msg && exactMiss.msg.includes("exact"));
});

test("antiderivative accepts any equivalent additive constant form", () => {
  const part = { mode: "antiderivative", answer: "-cos(x)", domainPoints: [0.5, 1.0, 1.5] };
  assert.equal(H2Grader.gradeSingleInput(part, "-cos(x)+c").ok, true);
  assert.equal(H2Grader.gradeSingleInput(part, "c-cos(x)").ok, true);
  assert.equal(H2Grader.gradeSingleInput(part, "-cos(x)-c").ok, true);
  assert.equal(H2Grader.gradeSingleInput(part, "-cos(x)+C").ok, true);

  const missingC = H2Grader.gradeSingleInput(part, "-cos(x)");
  assert.equal(missingC.ok, false);
  assert.ok(missingC.msg && missingC.msg.includes("+ c"));

  assert.equal(H2Grader.gradeSingleInput(part, "-cos(x)+5").ok, false);
  assert.equal(H2Grader.gradeSingleInput(part, "c*-cos(x)").ok, false);
  assert.equal(H2Grader.gradeSingleInput(part, "-cos(x+c)").ok, false);
});

test("grader modes (3sf, dp, lists, tuples, complex, expr, expr-pm, inverse/reciprocal trig)", () => {
  assert.equal(H2Grader.gradeSingleInput({ mode: "number", answer: "0.1234" }, "0.123").ok, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "number", answer: "0.3456", dp: 2 }, "0.35").ok, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "number", answer: "0.3456", dp: 2 }, "0.34").ok, false);
  assert.equal(H2Grader.gradeSingleInput({ mode: "number-list", answer: ["-2", "3"] }, "3, -2").ok, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "number-list", answer: ["-1/2", "3/4"] }, "3/4, -1/2").ok, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "tuple", answer: ["1", "-2", "3"] }, "(1, -2, 3)").ok, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "tuple", answer: ["1", "-2", "3"] }, "(-2, 1, 3)").ok, false);
  const exactTuple = { mode: "tuple", exactRequired: true, answer: ["12/7", "-6/7", "11/7"] };
  assert.equal(H2Grader.gradeSingleInput(exactTuple, "(12/7, -6/7, 11/7)").ok, true);
  assert.equal(H2Grader.gradeSingleInput(exactTuple, "1.7142857143, -0.8571428571, 1.5714285714").ok, false);
  assert.equal(H2Grader.gradeSingleInput({ mode: "complex-list", answer: ["1+2i", "1-2i"] }, "1-2i, 1+2i").ok, true);

  const invTrig = { mode: "expr", vars: { x: [0.2, 0.5] }, answer: "atan(x)" };
  assert.equal(H2Grader.gradeSingleInput(invTrig, "arctan(x)").ok, true);
  assert.equal(H2Grader.gradeSingleInput(invTrig, "tan^-1(x)").ok, true);

  const recipTrig = { mode: "expr", vars: { x: [0.4, 0.8] }, answer: "sec(x)^2 + csc(x) + cot(x)" };
  assert.equal(H2Grader.gradeSingleInput(recipTrig, "1/cos(x)^2 + cosec(x) + 1/tan(x)").ok, true);

  assert.equal(H2Grader.gradeSingleInput({ mode: "expr-list", vars: { a: [1, 2] }, answer: ["a+1", "a-1"] }, "a-1, a+1").ok, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "expr-pm", vars: { c: [2, 5] }, answer: "sqrt(c)" }, "±sqrt(c)").ok, true);
});

test("gc.js distributions, solvers, calculus, and domain errors", () => {
  approx(H2GC.math.normalcdf(-Infinity, 1.96, 0, 1), 0.97500210485, 1e-9, "normalcdf");
  approx(H2GC.math.invNorm(0.95, 0, 1, "left"), 1.64485362695, 1e-8, "invNorm left");
  approx(H2GC.math.invNorm(0.95, 0, 1, "right"), -1.64485362695, 1e-8, "invNorm right");
  const center = H2GC.math.invNorm(0.95, 0, 1, "center");
  approx(center[0], -1.9599639845, 1e-8, "invNorm center lo");
  approx(center[1], 1.9599639845, 1e-8, "invNorm center hi");

  approx(H2GC.math.binompdf(10, 0.5, 5), 252 / 1024, 1e-12, "binompdf");
  approx(H2GC.math.binomcdf(10, 0.5, 5), 638 / 1024, 1e-12, "binomcdf");
  approx(H2GC.math.tTestPValue(2.13144955, 15, "neq"), 0.05, 1e-6, "tTestPValue");

  const lin = H2GC.math.solveLinear([[2, 1], [1, -1]], [5, 1]);
  approx(lin[0], 2, 1e-12, "solveLinear x");
  approx(lin[1], 1, 1e-12, "solveLinear y");
  assert.throws(() => H2GC.math.solveLinear([[1, 2], [2, 4]], [3, 6]), /singular/i);

  const triple = H2GC.math.polyRoots([1, -3, 3, -1]);
  assert.equal(triple.length, 3);
  for (const r of triple) {
    approx(r.re, 1, 1e-9, "(x-1)^3 re");
    approx(r.im, 0, 1e-9, "(x-1)^3 im");
  }

  const dblComplex = H2GC.math.polyRoots([1, 0, 2, 0, 1]);
  assert.equal(dblComplex.length, 4);
  const posI = dblComplex.filter(r => r.im > 0.5);
  const negI = dblComplex.filter(r => r.im < -0.5);
  assert.equal(posI.length, 2);
  assert.equal(negI.length, 2);
  for (const r of posI) { approx(r.re, 0, 1e-9); approx(r.im, 1, 1e-9); }
  for (const r of negI) { approx(r.re, 0, 1e-9); approx(r.im, -1, 1e-9); }

  approx(H2GC.math.fnInt("e^(-x^2)", -5, 5), Math.sqrt(Math.PI), 1e-6, "fnInt Gaussian");
  approx(H2GC.math.fnInt("sqrt(x)", 0, 1), 2 / 3, 1e-5, "fnInt sqrt(x)");
  assert.throws(() => H2GC.math.fnInt("1/x", 0, 1), /converge|division by zero|singularity/i);

  const der = H2GC.math.nDeriv("x^3", 2);
  approx(der.first, 12, 1e-5, "nDeriv first");
  approx(der.second, 12, 1e-3, "nDeriv second");

  assert.throws(() => H2GC.math.evalNumExpr("1/0"), /zero/i);
  assert.throws(() => H2GC.math.evalNumExpr("asin(2)"), /domain/i);
  assert.throws(() => H2GC.math.evalNumExpr("ln(-1)"), /domain/i);
  assert.throws(() => H2GC.math.evalNumExpr("sqrt(-1)"), /domain/i);
  assert.equal(H2GC.math.evalNumExpr("inf"), Infinity);
  assert.equal(H2GC.math.evalNumExpr("-inf"), -Infinity);
});

test("escapeHtml, MathML escaping, formatShortDate, and sanitizeBackupState", () => {
  const escaped = H2Grader.escapeHtml('<img src="x" onerror=\'1\'>&');
  assert.equal(escaped, "&lt;img src=&quot;x&quot; onerror=&#39;1&#39;&gt;&amp;");

  const mml = H2Grader.latexToMathMLInline("x < 2 > 1");
  assert.ok(mml.includes("<mo>&lt;</mo>"), `Expected &lt; in ${mml}`);
  assert.ok(mml.includes("<mo>&gt;</mo>"), `Expected &gt; in ${mml}`);
  assert.ok(!mml.includes("<mo><</mo>") && !mml.includes("<mo>></mo>"), "No raw < or > inside <mo>");

  assert.equal(H2Grader.formatShortDate("2026-11-24"), "24 Nov 2026");
  assert.equal(H2Grader.formatShortDate("<img onerror=1>"), "&lt;img onerror=1&gt;");

  assert.equal(H2Grader.sanitizeBackupState(null), null);
  assert.equal(H2Grader.sanitizeBackupState({}), null);
  assert.equal(H2Grader.sanitizeBackupState({ days: [] }), null);

  const sanitized = H2Grader.sanitizeBackupState({
    days: { "2026-11-24": { pure: {} }, "2026-11-25": { pure: { questionId: "RI-2026-P1-Q1" } }, "<script>": {} },
    practiceSolved: {
      Q1: { solvedAt: "<img onerror=1>" },
      Q2: { solvedAt: "2026-11-24" },
      Q3: { unsolved: true }
    },
    notes: {
      Q1: { flaggedParts: ["<b>(a)</b>"], entries: [{ part: "(a)", tags: ["GC"], text: "hi" }] }
    }
  });
  assert.deepEqual(Object.keys(sanitized.days), ["2026-11-24", "2026-11-25"]);
  assert.deepEqual(JSON.parse(JSON.stringify(sanitized.days["2026-11-25"].pure.parts)), {});
  assert.equal(sanitized.practiceSolved.Q1.solvedAt, "");
  assert.equal(sanitized.practiceSolved.Q2.solvedAt, "2026-11-24");
  assert.equal(sanitized.practiceSolved.Q3.unsolved, true);
  assert.deepEqual(Object.keys(sanitized.practiceSolved.Q3), ["unsolved"]);
  assert.deepEqual(sanitized.notes.Q1.flaggedParts, ["<b>(a)</b>"]);
  assert.equal(sanitized.notes.Q1.entries[0].text, "hi");
});

test("6:00 AM SGT reset boundary calculations", () => {
  const before6am = Date.UTC(2026, 10, 23, 21, 59, 59); // 2026-11-24 05:59:59 SGT
  assert.equal(H2Grader.getStudyDayKey(H2Grader.getSGTNow(before6am)), "2026-11-23");
  assert.equal(H2Grader.getMsUntilNext6AM(before6am), 1000);

  const at6am = Date.UTC(2026, 10, 23, 22, 0, 0); // 2026-11-24 06:00:00 SGT
  assert.equal(H2Grader.getStudyDayKey(H2Grader.getSGTNow(at6am)), "2026-11-24");
  assert.equal(H2Grader.getMsUntilNext6AM(at6am), 86400000);
});

test("bank self-check and mutation tests (must-reject)", (t) => {
  let autoChecked = 0;
  let mutationsChecked = 0;
  const failures = [];
  const mutationFailures = [];

  for (const q of H2_QUESTIONS) {
    for (const part of q.parts) {
      if (part.type !== "auto") continue;

      if (part.mode === "multi-field") {
        for (const f of part.fields) {
          const fakePart = {
            mode: "number",
            answer: f.answer,
            answers: f.answers,
            exactRequired: f.exactRequired,
            dp: f.dp
          };
          const candList = f.answers || [f.answer];
          for (const cand of candList) {
            autoChecked++;
            const res = H2Grader.gradeSingleInput(fakePart, String(cand));
            if (!res.ok) {
              failures.push({ id: q.id, part: part.label, field: f.label, cand, res });
            }
          }
          if (!f.answers) {
            const val = H2Grader.evalComplex(String(f.answer)).re;
            if (Number.isFinite(val) && Math.abs(val) > 1e-6) {
              const wrong = val >= 0 ? val * 1.25 + 1 : val * 1.25 - 1;
              mutationsChecked++;
              if (H2Grader.gradeSingleInput(fakePart, String(wrong)).ok) {
                mutationFailures.push({ id: q.id, part: part.label, field: f.label, wrong });
              }
            }
          }
        }
        continue;
      }

      if (part.mode === "number") {
        const candList = part.answers || [part.answer];
        for (const cand of candList) {
          autoChecked++;
          const res = H2Grader.gradeSingleInput(part, String(cand));
          if (!res.ok) {
            failures.push({ id: q.id, part: part.label, mode: part.mode, cand, res });
          }
        }
        if (!part.answers) {
          const val = H2Grader.evalComplex(String(part.answer)).re;
          if (Number.isFinite(val) && Math.abs(val) > 1e-6) {
            const wrong = val >= 0 ? val * 1.25 + 1 : val * 1.25 - 1;
            mutationsChecked++;
            if (H2Grader.gradeSingleInput(part, String(wrong)).ok) {
              mutationFailures.push({ id: q.id, part: part.label, mode: "number", wrong });
            }
          }
        }
        continue;
      }

      let sampleInput;
      if (["number-list", "tuple", "complex-list", "expr-list"].includes(part.mode)) {
        sampleInput = part.answer.map(String).join(", ");
      } else if (part.mode === "antiderivative") {
        sampleInput = `${part.answer} + c`;
      } else if (part.mode === "expr-pm") {
        sampleInput = `±${part.answer}`;
      } else {
        sampleInput = String(part.answer);
      }

      autoChecked++;
      const res = H2Grader.gradeSingleInput(part, sampleInput);
      if (!res.ok) {
        failures.push({ id: q.id, part: part.label, mode: part.mode, sampleInput, res });
      }

      if (part.mode === "expr") {
        const varNames = Object.keys(part.vars);
        const count = part.vars[varNames[0]].length;
        let maxAbs = 0;
        for (let i = 0; i < count; i++) {
          const env = {};
          varNames.forEach(v => { env[v] = part.vars[v][i]; });
          const mag = Math.abs(H2Grader.evalComplex(part.answer, env).re);
          if (mag > maxAbs) maxAbs = mag;
        }
        const delta = Math.max(1.2345, maxAbs * 0.1);
        mutationsChecked++;
        if (H2Grader.gradeSingleInput(part, `(${part.answer}) + ${delta}`).ok) {
          mutationFailures.push({ id: q.id, part: part.label, mode: "expr", reason: `+${delta} accepted` });
        }
        if (maxAbs > 1e-3) {
          mutationsChecked++;
          if (H2Grader.gradeSingleInput(part, `-(${part.answer})`).ok) {
            mutationFailures.push({ id: q.id, part: part.label, mode: "expr", reason: "negated accepted" });
          }
        }
      } else if (part.mode === "antiderivative") {
        mutationsChecked++;
        const noConst = H2Grader.gradeSingleInput(part, String(part.answer));
        if (noConst.ok || !(noConst.msg && noConst.msg.includes("+ c"))) {
          mutationFailures.push({ id: q.id, part: part.label, mode: "antiderivative", reason: "missing +c allowed" });
        }
        const [x1, x2, x3] = part.domainPoints;
        const t1 = H2Grader.evalComplex(part.answer, { x: x1 }).re;
        const t2 = H2Grader.evalComplex(part.answer, { x: x2 }).re;
        const t3 = H2Grader.evalComplex(part.answer, { x: x3 }).re;
        if (Math.abs(t2 - t1) > 1e-3 || Math.abs(t3 - t1) > 1e-3) {
          mutationsChecked++;
          if (H2Grader.gradeSingleInput(part, `-(${part.answer}) + c`).ok) {
            mutationFailures.push({ id: q.id, part: part.label, mode: "antiderivative", reason: "negated accepted" });
          }
        }
      }
    }
  }

  assert.equal(failures.length, 0, `Bank self-check failures:\n${JSON.stringify(failures.slice(0, 10), null, 2)}`);
  assert.equal(mutationFailures.length, 0, `Bank mutation failures:\n${JSON.stringify(mutationFailures.slice(0, 10), null, 2)}`);
  t.diagnostic(`${autoChecked} bank auto-graded entries + ${mutationsChecked} mutation rejections passed across ${H2_QUESTIONS.length} questions`);
});

test("regression: offline MathML XSS, pmatrix mid-expression, and escaped dollars", () => {
  const safeXss = H2Grader.renderSafeUserMath("$<mrow><mo>(<img src=x onerror=alert(1)>$");
  assert.ok(!safeXss.includes("<img"), `Unexpected unescaped <img> in ${safeXss}`);

  const vecMml = H2Grader.latexToMathML("\\mathbf{r} = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}");
  assert.ok(vecMml.includes("<mtable>") && vecMml.includes("<mtr>"), `Expected <mtable> in ${vecMml}`);
  assert.ok(!vecMml.includes("&lt;mrow&gt;"), `Unexpected escaped MathML tags in ${vecMml}`);

  const prevKatex = ctx.window.katex;
  ctx.window.katex = { renderToString: (tex) => `[TEX:${tex}]` };
  try {
    const rendered = H2Grader.renderMathText("Salary is $\\$k$ and $35\\%$");
    assert.equal(rendered, "Salary is [TEX:\\$k] and [TEX:35\\%]");
  } finally {
    ctx.window.katex = prevKatex;
  }
});

test("regression: theta, insertFraction, factored algebra, warn flag, real-only modes, and normalcdf tail", () => {
  const tmjc = H2_QUESTIONS.find(q => q.id === "TMJC-2026-P1-Q7");
  assert.ok(tmjc, "TMJC-2026-P1-Q7 should exist");
  const tmjcB = tmjc.parts.find(p => p.label === "(b)");
  assert.equal(H2Grader.gradeSingleInput(tmjcB, "2 - 2/sqrt(3)*θ + 5/3*(θ^2)").ok, true);

  const mf1 = H2Grader.createMathField(ctx.document.createElement("div"), {});
  mf1.insertText("(a+b)/2");
  assert.equal(mf1.getEvalString(), "(((a+b))/(2))");

  const mf2 = H2Grader.createMathField(ctx.document.createElement("div"), {});
  mf2.insertText("ln(2)/4");
  assert.equal(mf2.getEvalString(), "((ln(2))/(4))");

  const mf3 = H2Grader.createMathField(ctx.document.createElement("div"), {});
  mf3.insertText("2theta");
  assert.equal(mf3.getEvalString(), "2theta");

  assert.equal(H2Grader.gradeSingleInput({ mode: "expr", vars: { p: [0.2, 0.4] }, answer: "3*p*(1-p)^2" }, "3p(1-p)^2").ok, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "expr", vars: { n: [2, 4] }, answer: "n*(n+1)*(2*n+7)/6" }, "n(n+1)(2n+7)/6").ok, true);

  const exact10 = H2Grader.gradeSingleInput({ mode: "number", answer: "1/3", exactRequired: true }, "0.3333333333");
  assert.equal(exact10.ok, false);
  assert.equal(exact10.warn, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "number", answer: "1" }, "").warn, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "number", answer: "1" }, "sqrt(2").warn, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "antiderivative", domainPoints: [1, 2, 3], answer: "x^2" }, "x^2").warn, true);
  assert.equal(H2Grader.gradeSingleInput({ mode: "number", answer: "-5", signHint: true }, "5").warn, true);

  assert.equal(H2Grader.gradeSingleInput({ mode: "expr", vars: { x: [1, 2] }, answer: "x" }, "x + 5i").ok, false);
  assert.equal(H2Grader.gradeSingleInput({ mode: "expr-list", vars: { x: [1, 2] }, answer: ["x", "-x"] }, "x + i, -x + i").ok, false);
  assert.equal(H2Grader.gradeSingleInput({ mode: "expr-pm", vars: { c: [2, 5] }, answer: "sqrt(c)" }, "±(sqrt(c) + 2i)").ok, false);
  assert.equal(H2Grader.gradeSingleInput({ mode: "antiderivative", domainPoints: [1, 2, 3], answer: "x^2" }, "x^2 + 3i + c").ok, false);

  approx(H2GC.math.normalcdf(9, Infinity, 0, 1), 1.12858840595e-19, 1e-24, "normalcdf(9, inf)");
});
