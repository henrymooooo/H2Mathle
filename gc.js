(() => {
  "use strict";

  // ---------- 1. CORE NUMERIC ENGINE & SPECIAL MATH ----------
  function factorial(n) {
    if (!Number.isInteger(n) || n < 0 || n > 170) throw new Error("Domain error in !");
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }

  function nCr(n, r) {
    n = Math.round(n);
    r = Math.round(r);
    if (r < 0 || n < 0 || r > n) return 0;
    r = Math.min(r, n - r);
    let res = 1;
    for (let i = 1; i <= r; i++) res = (res * (n - r + i)) / i;
    return Math.round(res);
  }

  function nPr(n, r) {
    n = Math.round(n);
    r = Math.round(r);
    if (r < 0 || n < 0 || r > n) return 0;
    let res = 1;
    for (let i = 0; i < r; i++) res *= (n - i);
    return Math.round(res);
  }

  function evalNumExpr(raw, env = {}, degMode = false) {
    let s = String(raw ?? "").trim()
      .replace(/−/g, "-")
      .replace(/[×·]/g, "*")
      .replace(/π/g, "pi");
    if (!s) throw new Error("Empty");
    const rawCompact = s.replace(/\s+/g, "");
    if (rawCompact === "inf" || rawCompact === "+inf" || rawCompact === "∞") return Infinity;
    if (rawCompact === "-inf" || rawCompact === "-∞") return -Infinity;

    const sciNums = [];
    s = s.replace(/(^|[^a-zA-Z.])((?:\d+\.?\d*|\.\d+)e[+-]?\d+)/gi, (_, pre, num) => {
      const idx = sciNums.length;
      sciNums.push(num);
      return `${pre}\u0003${idx}\u0004`;
    });
    s = s.replace(/\s+/g, "");

    const fnRegex = /(arcsin|arccos|arctan|cosec|asin|acos|atan|sqrt|sinh|cosh|tanh|sin|cos|tan|sec|csc|cot|exp|log|abs|nCr|nPr|ln)(?=\()/gi;
    const masked = [];
    s = s.replace(fnRegex, (m) => {
      const idx = masked.length;
      masked.push(m.toLowerCase());
      return `\u0001${idx}\u0002`;
    });

    s = s.replace(/(\d|\u0004)([a-zA-Z(\u0001\u0003])/g, "$1*$2");
    s = s.replace(/([a-zA-Z!])(\u0001|\u0003|\()/g, "$1*$2");
    s = s.replace(/(\))(\d|[a-zA-Z(\u0001\u0003])/g, "$1*$2");
    s = s.replace(/(^|[^a-zA-Z\u0001\u0002\u0003\u0004])(pi|e|inf)([a-zA-Z(\u0001\u0003])/gi, "$1$2*$3");
    s = s.replace(/\u0003(\d+)\u0004/g, (_, i) => sciNums[Number(i)]);
    s = s.replace(/\u0001(\d+)\u0002/g, (_, i) => masked[Number(i)]);

    let pos = 0;
    const parseExpr = () => {
      let left = parseTerm();
      while (pos < s.length && (s[pos] === "+" || s[pos] === "-")) {
        const op = s[pos++];
        const right = parseTerm();
        left = op === "+" ? left + right : left - right;
      }
      return left;
    };

    const parseTerm = () => {
      let left = parseUnary();
      while (pos < s.length && (s[pos] === "*" || s[pos] === "/")) {
        const op = s[pos++];
        const right = parseUnary();
        if (op === "/") {
          if (right === 0) throw new Error("Division by zero");
          left = left / right;
        } else {
          left = left * right;
        }
      }
      return left;
    };

    const parseUnary = () => {
      if (s[pos] === "-") { pos++; return -parseUnary(); }
      if (s[pos] === "+") { pos++; return parseUnary(); }
      return parsePow();
    };

    const parsePow = () => {
      const base = parsePostfix();
      if (pos < s.length && s[pos] === "^") {
        pos++;
        return Math.pow(base, parseUnary());
      }
      return base;
    };

    const parsePostfix = () => {
      let v = parsePrimary();
      while (pos < s.length && s[pos] === "!") {
        pos++;
        v = factorial(v);
      }
      return v;
    };

    const parsePrimary = () => {
      if (s[pos] === "(") {
        pos++;
        const val = parseExpr();
        if (s[pos] !== ")") throw new Error("Unclosed '('");
        pos++;
        return val;
      }
      if (/[0-9.]/.test(s[pos])) {
        const m = s.slice(pos).match(/^(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/i);
        if (!m) throw new Error("Invalid number");
        pos += m[0].length;
        return Number(m[0]);
      }
      if (/[a-zA-Z]/.test(s[pos])) {
        let id = "";
        while (pos < s.length && /[a-zA-Z0-9_]/.test(s[pos])) id += s[pos++];
        if (s[pos] === "(") {
          pos++;
          const args = [parseExpr()];
          while (pos < s.length && s[pos] === ",") {
            pos++;
            args.push(parseExpr());
          }
          if (s[pos] !== ")") throw new Error("Unclosed ')'");
          pos++;
          const k = id.toLowerCase();
          if (k === "ncr") {
            if (args.length !== 2) throw new Error("nCr needs 2 args");
            return nCr(args[0], args[1]);
          }
          if (k === "npr") {
            if (args.length !== 2) throw new Error("nPr needs 2 args");
            return nPr(args[0], args[1]);
          }
          if (args.length !== 1) throw new Error("Too many args");
          const v = args[0];
          const rad = degMode ? (v * Math.PI) / 180 : v;
          const fromRad = (r) => (degMode ? (r * 180) / Math.PI : r);
          const table = {
            sin: () => Math.sin(rad),
            cos: () => Math.cos(rad),
            tan: () => Math.tan(rad),
            sec: () => 1 / Math.cos(rad),
            csc: () => 1 / Math.sin(rad),
            cosec: () => 1 / Math.sin(rad),
            cot: () => 1 / Math.tan(rad),
            asin: () => { if (v < -1 || v > 1) throw new Error("Domain error (input must be in [-1, 1])"); return fromRad(Math.asin(v)); },
            arcsin: () => { if (v < -1 || v > 1) throw new Error("Domain error (input must be in [-1, 1])"); return fromRad(Math.asin(v)); },
            acos: () => { if (v < -1 || v > 1) throw new Error("Domain error (input must be in [-1, 1])"); return fromRad(Math.acos(v)); },
            arccos: () => { if (v < -1 || v > 1) throw new Error("Domain error (input must be in [-1, 1])"); return fromRad(Math.acos(v)); },
            atan: () => fromRad(Math.atan(v)),
            arctan: () => fromRad(Math.atan(v)),
            sinh: () => Math.sinh(v),
            cosh: () => Math.cosh(v),
            tanh: () => Math.tanh(v),
            ln: () => { if (v <= 0) throw new Error("Domain error (log of <= 0)"); return Math.log(v); },
            log: () => { if (v <= 0) throw new Error("Domain error (log of <= 0)"); return Math.log10(v); },
            exp: () => Math.exp(v),
            sqrt: () => { if (v < 0) throw new Error("Domain error (sqrt of negative)"); return Math.sqrt(v); },
            abs: () => Math.abs(v)
          };
          if (!table[k]) throw new Error("Unknown fn " + id);
          return table[k]();
        }
        const low = id.toLowerCase();
        if (id in env) return env[id];
        if (low in env) return env[low];
        if (low === "pi") return Math.PI;
        if (low === "e") return Math.E;
        if (low === "inf") return Infinity;
        throw new Error("Unknown symbol " + id);
      }
      throw new Error("Unexpected token");
    };

    const out = parseExpr();
    if (pos < s.length) throw new Error("Unexpected trailing input");
    return out;
  }

  // Exact erfc(x) via power series (small |x|) + Lentz continued fraction (large |x|)
  function erfSeries(x) {
    const ax = Math.abs(x);
    const x2 = ax * ax;
    let term = ax;
    let sum = ax;
    for (let k = 1; k < 100; k++) {
      term *= (2 * x2) / (2 * k + 1);
      sum += term;
      if (Math.abs(term) <= 1e-16 * Math.abs(sum)) break;
    }
    const res = (2 / Math.sqrt(Math.PI)) * Math.exp(-x2) * sum;
    return x >= 0 ? res : -res;
  }

  function erfcExact(x) {
    const ax = Math.abs(x);
    if (ax < 1.5) return 1 - erfSeries(x);
    const y = ax * ax;
    const FPMIN = 1e-300;
    let b = y + 0.5;
    let c = 1 / FPMIN;
    let d = 1 / b;
    let h = d;
    for (let i = 1; i <= 150; i++) {
      const an = -i * (i - 0.5);
      b += 2;
      d = an * d + b;
      if (Math.abs(d) < FPMIN) d = FPMIN;
      c = b + an / c;
      if (Math.abs(c) < FPMIN) c = FPMIN;
      d = 1 / d;
      const del = d * c;
      h *= del;
      if (Math.abs(del - 1) < 1e-15) break;
    }
    const tail = (ax * Math.exp(-y) / Math.sqrt(Math.PI)) * h;
    return x >= 0 ? tail : 2 - tail;
  }

  function stdNormCdf(z) {
    if (z === Infinity) return 1;
    if (z === -Infinity) return 0;
    return 0.5 * erfcExact(-z / Math.SQRT2);
  }

  function stdNormPdf(z) {
    return Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
  }

  function normalcdf(low, up, mu = 0, sd = 1) {
    if (sd <= 0 || !Number.isFinite(sd)) throw new Error("sigma must be > 0");
    if (up <= low) return 0;
    const z1 = low === -Infinity ? -Infinity : (low - mu) / sd;
    const z2 = up === Infinity ? Infinity : (up - mu) / sd;
    return Math.max(0, Math.min(1, stdNormCdf(z2) - stdNormCdf(z1)));
  }

  function invStdNorm(p) {
    if (!(p > 0 && p < 1)) throw new Error("Area must be strictly between 0 and 1");
    const a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2, 1.383577518672690e2, -3.066479806614716e1, 2.506628277459239e0];
    const b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1];
    const c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838e0, -2.549732539343734e0, 4.374664141464968e0, 2.938163982698783e0];
    const d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996e0, 3.754408661907416e0];
    const pLow = 0.02425;
    let z;
    if (p < pLow) {
      const q = Math.sqrt(-2 * Math.log(p));
      z = (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
          ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    } else if (p <= 1 - pLow) {
      const q = p - 0.5;
      const r = q * q;
      z = (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
          (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
    } else {
      const q = Math.sqrt(-2 * Math.log(1 - p));
      z = -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
           ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }
    for (let i = 0; i < 2; i++) {
      const err = stdNormCdf(z) - p;
      const pdf = stdNormPdf(z);
      if (pdf > 0) z -= err / pdf;
    }
    return z;
  }

  function invNorm(area, mu = 0, sd = 1, tail = "left") {
    if (sd <= 0 || !Number.isFinite(sd)) throw new Error("sigma must be > 0");
    if (tail === "left") return mu + sd * invStdNorm(area);
    if (tail === "right") return mu + sd * invStdNorm(1 - area);
    if (tail === "center") {
      const half = area / 2;
      const zLo = invStdNorm(0.5 - half);
      const zHi = invStdNorm(0.5 + half);
      return [mu + sd * zLo, mu + sd * zHi];
    }
    throw new Error("Invalid tail");
  }

  function lgamma(z) {
    const coef = [
      0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
    ];
    if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - lgamma(1 - z);
    z -= 1;
    let x = coef[0];
    for (let i = 1; i < coef.length; i++) x += coef[i] / (z + i);
    const t = z + 7.5;
    return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
  }

  function binompdf(n, p, k) {
    if (!Number.isInteger(n) || n < 0 || p < 0 || p > 1) throw new Error("Invalid n or p");
    if (!Number.isInteger(k) || k < 0 || k > n) return 0;
    if (p === 0) return k === 0 ? 1 : 0;
    if (p === 1) return k === n ? 1 : 0;
    return Math.exp(lgamma(n + 1) - lgamma(k + 1) - lgamma(n - k + 1) + k * Math.log(p) + (n - k) * Math.log(1 - p));
  }

  function binomcdf(n, p, x) {
    if (!Number.isInteger(n) || n < 0 || p < 0 || p > 1) throw new Error("Invalid n or p");
    if (n > 200000) throw new Error("n too large");
    const hi = Math.floor(x);
    if (hi < 0) return 0;
    if (hi >= n) return 1;
    let sum = 0;
    for (let k = 0; k <= hi; k++) sum += binompdf(n, p, k);
    return Math.min(1, sum);
  }

  function betacf(a, b, x) {
    const MAXIT = 200;
    const EPS = 3e-14;
    const FPMIN = 1e-300;
    const qab = a + b;
    const qap = a + 1;
    const qam = a - 1;
    let c = 1;
    let d = 1 - (qab * x) / qap;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    d = 1 / d;
    let h = d;
    for (let m = 1; m <= MAXIT; m++) {
      const m2 = 2 * m;
      let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
      d = 1 + aa * d;
      if (Math.abs(d) < FPMIN) d = FPMIN;
      c = 1 + aa / c;
      if (Math.abs(c) < FPMIN) c = FPMIN;
      d = 1 / d;
      h *= d * c;
      aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
      d = 1 + aa * d;
      if (Math.abs(d) < FPMIN) d = FPMIN;
      c = 1 + aa / c;
      if (Math.abs(c) < FPMIN) c = FPMIN;
      d = 1 / d;
      const del = d * c;
      h *= del;
      if (Math.abs(del - 1) < EPS) break;
    }
    return h;
  }

  function betainc(x, a, b) {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    const bt = Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + a * Math.log(x) + b * Math.log(1 - x));
    if (x < (a + 1) / (a + b + 2)) return (bt * betacf(a, b, x)) / a;
    return 1 - (bt * betacf(b, a, 1 - x)) / b;
  }

  function tTestPValue(t, df, alt = "neq") {
    if (df <= 0) throw new Error("df must be > 0");
    const twoTail = betainc(df / (df + t * t), df / 2, 0.5);
    if (alt === "neq") return twoTail;
    if (alt === "lt") return t <= 0 ? twoTail / 2 : 1 - twoTail / 2;
    if (alt === "gt") return t >= 0 ? twoTail / 2 : 1 - twoTail / 2;
    throw new Error("Invalid alt");
  }

  function solveLinear(A, b) {
    const n = b.length;
    const M = A.map((row, i) => [...row, b[i]]);
    for (let col = 0; col < n; col++) {
      let pivot = col;
      for (let r = col + 1; r < n; r++) {
        if (Math.abs(M[r][col]) > Math.abs(M[pivot][col])) pivot = r;
      }
      if (Math.abs(M[pivot][col]) < 1e-12) throw new Error("No unique solution (singular matrix)");
      [M[col], M[pivot]] = [M[pivot], M[col]];
      const div = M[col][col];
      for (let c = col; c <= n; c++) M[col][c] /= div;
      for (let r = 0; r < n; r++) {
        if (r === col) continue;
        const factor = M[r][col];
        for (let c = col; c <= n; c++) M[r][c] -= factor * M[col][c];
      }
    }
    return M.map(row => row[n]);
  }

  function polyRoots(coeffs) {
    let i0 = 0;
    while (i0 < coeffs.length && Math.abs(coeffs[i0]) < 1e-14) i0++;
    const c = coeffs.slice(i0);
    if (c.length <= 1) throw new Error("Need degree >= 1");
    const lead = c[0];
    const norm = c.map(v => v / lead);
    const roots = [];
    while (norm.length > 1 && Math.abs(norm[norm.length - 1]) < 1e-14) {
      roots.push({ re: 0, im: 0 });
      norm.pop();
    }
    const deg = norm.length - 1;
    if (deg === 0) return roots;
    if (deg === 1) {
      roots.push({ re: -norm[1], im: 0 });
      return roots;
    }
    const radius = 1 + Math.max(...norm.slice(1).map(Math.abs));
    let z = [];
    for (let k = 0; k < deg; k++) {
      const ang = (2 * Math.PI * k) / deg + 0.37;
      const r = radius * (0.65 + 0.15 * (k / deg));
      z.push({ re: r * Math.cos(ang), im: r * Math.sin(ang) });
    }
    const evalCoeffs = (poly, pt) => {
      let accRe = 0, accIm = 0;
      for (let k = 0; k < poly.length; k++) {
        const nr = accRe * pt.re - accIm * pt.im + poly[k];
        const ni = accRe * pt.im + accIm * pt.re;
        accRe = nr;
        accIm = ni;
      }
      return { re: accRe, im: accIm };
    };
    const diffPoly = (poly) => poly.slice(0, -1).map((coef, idx) => coef * (poly.length - 1 - idx));
    const evalPoly = (pt) => evalCoeffs(norm, pt);
    const normDeriv = diffPoly(norm);
    for (let iter = 0; iter < 1000; iter++) {
      let maxStep = 0;
      for (let j = 0; j < deg; j++) {
        const pval = evalPoly(z[j]);
        let dRe = 1, dIm = 0;
        for (let k = 0; k < deg; k++) {
          if (k === j) continue;
          const dr = z[j].re - z[k].re;
          const di = z[j].im - z[k].im;
          const nr = dRe * dr - dIm * di;
          const ni = dRe * di + dIm * dr;
          dRe = nr;
          dIm = ni;
        }
        const denom = dRe * dRe + dIm * dIm || 1e-30;
        const sRe = (pval.re * dRe + pval.im * dIm) / denom;
        const sIm = (pval.im * dRe - pval.re * dIm) / denom;
        z[j] = { re: z[j].re - sRe, im: z[j].im - sIm };
        maxStep = Math.max(maxStep, Math.hypot(sRe, sIm));
      }
      if (maxStep < 1e-12) break;
    }
    const visited = Array(deg).fill(false);
    for (let i = 0; i < deg; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      const cluster = [i];
      for (let qIdx = 0; qIdx < cluster.length; qIdx++) {
        const cur = z[cluster[qIdx]];
        for (let j = 0; j < deg; j++) {
          if (!visited[j] && Math.hypot(cur.re - z[j].re, cur.im - z[j].im) < 1e-3) {
            visited[j] = true;
            cluster.push(j);
          }
        }
      }
      if (cluster.length >= 2) {
        let mRe = 0, mIm = 0;
        for (const idx of cluster) { mRe += z[idx].re; mIm += z[idx].im; }
        let m = { re: mRe / cluster.length, im: mIm / cluster.length };
        const pm = evalPoly(m);
        const pdm = evalCoeffs(normDeriv, m);
        if (Math.hypot(pm.re, pm.im) < 1e-10 && Math.hypot(pdm.re, pdm.im) < 1e-6) {
          let fk1 = norm;
          for (let d = 1; d < cluster.length; d++) fk1 = diffPoly(fk1);
          const fk = diffPoly(fk1);
          let cur = { ...m };
          for (let it = 0; it < 6; it++) {
            const v = evalCoeffs(fk1, cur);
            const dv = evalCoeffs(fk, cur);
            const den = dv.re * dv.re + dv.im * dv.im;
            if (den < 1e-30) break;
            const dRe = (v.re * dv.re + v.im * dv.im) / den;
            const dIm = (v.im * dv.re - v.re * dv.im) / den;
            cur = { re: cur.re - dRe, im: cur.im - dIm };
            if (Math.hypot(dRe, dIm) < 1e-14) break;
          }
          const pCur = evalPoly(cur);
          if (Math.hypot(pCur.re, pCur.im) <= Math.hypot(pm.re, pm.im) + 1e-15) m = cur;
          for (const idx of cluster) z[idx] = { re: m.re, im: m.im };
        }
      }
    }
    for (const r of z) {
      roots.push({
        re: Math.abs(r.re) < 1e-9 ? 0 : r.re,
        im: Math.abs(r.im) < 1e-9 ? 0 : r.im
      });
    }
    roots.sort((a, b) => (Math.abs(a.im) - Math.abs(b.im)) || (a.re - b.re));
    return roots;
  }

  const GK_X = [0, 0.2077849550078985, 0.4058451513773972, 0.5860872354676911, 0.7415311855993944, 0.8648644233597691, 0.9491079123427585, 0.9914553711208126];
  const GK_W15 = [0.2094821410847278, 0.2044329400752989, 0.1903505780647854, 0.1690047266392679, 0.1406532597155259, 0.1047900103222502, 0.0630920926299786, 0.0229353220105292];
  const GK_W7 = [0.4179591836734694, 0, 0.3818300505051189, 0, 0.2797053914892766, 0, 0.1294849661688697, 0];

  function fnInt(expr, a, b, degMode = false) {
    if (a === b) return 0;
    const sign = a > b ? -1 : 1;
    const lo = Math.min(a, b);
    const hi = Math.max(a, b);
    const f = (x) => evalNumExpr(expr, { x }, degMode);
    let errAcc = 0;
    let hitMaxDepth = false;
    const integrate = (x0, x1, depth) => {
      const mid = 0.5 * (x0 + x1);
      const half = 0.5 * (x1 - x0);
      const f0 = f(mid);
      let sum15 = GK_W15[0] * f0;
      let sum7 = GK_W7[0] * f0;
      for (let i = 1; i < GK_X.length; i++) {
        const dx = half * GK_X[i];
        const fSum = f(mid - dx) + f(mid + dx);
        sum15 += GK_W15[i] * fSum;
        if (GK_W7[i] !== 0) sum7 += GK_W7[i] * fSum;
      }
      const res15 = sum15 * half;
      const res7 = sum7 * half;
      if (!Number.isFinite(res15)) throw new Error("Discontinuity / NaN in integrand");
      if (Math.abs(res15 - res7) <= 1e-10 * (1 + Math.abs(res15))) return res15;
      if (depth >= 12) {
        errAcc += Math.abs(res15 - res7);
        hitMaxDepth = true;
        return res15;
      }
      return integrate(x0, mid, depth + 1) + integrate(mid, x1, depth + 1);
    };
    const total = sign * integrate(lo, hi, 0);
    if (!Number.isFinite(total) || (hitMaxDepth && errAcc > 1e-3 * (1 + Math.abs(total)))) {
      throw new Error("Integral did not converge (possible singularity)");
    }
    return total;
  }

  function nDeriv(expr, x0, degMode = false) {
    const f = (x) => evalNumExpr(expr, { x }, degMode);
    const h = 1e-4 * Math.max(1, Math.abs(x0));
    const d1 = (f(x0 + h) - f(x0 - h)) / (2 * h);
    const d2 = (f(x0 + h / 2) - f(x0 - h / 2)) / h;
    const first = (4 * d2 - d1) / 3;
    const h2 = 1e-3 * Math.max(1, Math.abs(x0));
    const second = (f(x0 + h2) - 2 * f(x0) + f(x0 - h2)) / (h2 * h2);
    if (!Number.isFinite(first) || !Number.isFinite(second)) {
      throw new Error("Undefined derivative");
    }
    return { first, second };
  }

  // ---------- 2. UI BUILDER ----------
  let redrawGraphFn = null;
  let isGraphTabActiveFn = () => false;

  const fmtSig = (v, sig = 3) => {
    if (!Number.isFinite(v)) return String(v);
    if (Math.abs(v) < 1e-12) return "0";
    return Number(v.toPrecision(sig)).toString();
  };
  const fmtFixed = (v, dp = 6) => {
    if (!Number.isFinite(v)) return String(v);
    if (Math.abs(v) < 1e-12) return "0";
    const abs = Math.abs(v);
    if (abs < 1e-4 || abs >= 1e7) return v.toExponential(4);
    return Number(v.toFixed(dp)).toString();
  };
  const kv = (label, val, accent = false) =>
    `<div class="gc-kv"><span>${label}</span><strong${accent ? ' class="accent"' : ""}>${val}</strong></div>`;
  const showErr = (el, msg) => { el.className = "gc-out err"; el.textContent = msg; };
  const showOut = (el, html) => { el.className = "gc-out"; el.innerHTML = html; };

  function build(modal, onClose) {
    let degMode = false;
    let lastAns = 0;

    modal.innerHTML = `
      <div class="mf26-drawer gc-drawer" role="dialog" aria-label="Calculator">
        <div class="mf26-head">
          <h2>Calculator</h2>
          <div class="gc-head-actions">
            <button type="button" class="gc-angle-btn" id="gc-angle-toggle" title="Switch Radian / Degree mode">RAD</button>
            <button type="button" class="btn btn-ghost" id="gc-close" title="Close (Esc)">&times;</button>
          </div>
        </div>

        <div class="gc-tabs" role="tablist">
          <button type="button" class="gc-tab active" data-gc-tab="stats">Stats</button>
          <button type="button" class="gc-tab" data-gc-tab="calc">Calc</button>
          <button type="button" class="gc-tab" data-gc-tab="solve">Solve</button>
          <button type="button" class="gc-tab" data-gc-tab="calculus">Calculus</button>
          <button type="button" class="gc-tab" data-gc-tab="graph">Graph</button>
        </div>

        <div class="gc-body">
          <section class="gc-pane active" data-gc-pane="stats">
            <div class="gc-subtabs" role="tablist">
              <button type="button" class="gc-subtab active" data-stats-sub="dist">Distributions</button>
              <button type="button" class="gc-subtab" data-stats-sub="tests">Tests</button>
              <button type="button" class="gc-subtab" data-stats-sub="data">Data &amp; LinReg</button>
            </div>

            <div class="gc-subpane active" data-stats-pane="dist">
              <div class="gc-card">
                <div class="gc-card-head">
                  <h3>Normal CDF</h3>
                  <span class="gc-card-hint">Blank or &plusmn;inf for unbounded</span>
                </div>
                <div class="gc-grid-4">
                  <div class="gc-field"><label>Lower</label><input class="gc-input" id="gc-ncdf-low" value="-inf" /></div>
                  <div class="gc-field"><label>Upper</label><input class="gc-input" id="gc-ncdf-up" value="1.96" /></div>
                  <div class="gc-field"><label>&mu;</label><input class="gc-input" id="gc-ncdf-mu" value="0" /></div>
                  <div class="gc-field"><label>&sigma;</label><input class="gc-input" id="gc-ncdf-sd" value="1" /></div>
                </div>
                <div class="gc-out" id="gc-ncdf-out"></div>
              </div>

              <div class="gc-card">
                <div class="gc-card-head">
                  <h3>Inverse Normal (invNorm)</h3>
                  <span class="gc-card-hint">Area in (0, 1)</span>
                </div>
                <div class="gc-grid-3">
                  <div class="gc-field"><label>Area</label><input class="gc-input" id="gc-invn-area" value="0.95" /></div>
                  <div class="gc-field"><label>&mu;</label><input class="gc-input" id="gc-invn-mu" value="0" /></div>
                  <div class="gc-field"><label>&sigma;</label><input class="gc-input" id="gc-invn-sd" value="1" /></div>
                </div>
                <div class="gc-seg" id="gc-invn-tail">
                  <button type="button" class="active" data-val="left">Left</button>
                  <button type="button" data-val="center">Center</button>
                  <button type="button" data-val="right">Right</button>
                </div>
                <div class="gc-out" id="gc-invn-out"></div>
              </div>

              <div class="gc-card">
                <div class="gc-card-head">
                  <h3>Binomial (X ~ B(n, p))</h3>
                  <span class="gc-card-hint">All inequalities shown</span>
                </div>
                <div class="gc-grid-3">
                  <div class="gc-field"><label>Trials (n)</label><input class="gc-input" id="gc-bin-n" value="10" /></div>
                  <div class="gc-field"><label>Prob (p)</label><input class="gc-input" id="gc-bin-p" value="0.5" /></div>
                  <div class="gc-field"><label>Value (x)</label><input class="gc-input" id="gc-bin-x" value="5" /></div>
                </div>
                <div class="gc-out" id="gc-bin-out"></div>
              </div>
            </div>

            <div class="gc-subpane" data-stats-pane="tests">
              <div class="gc-card">
                <div class="gc-card-head">
                  <h3>1-Sample Z-Test</h3>
                  <span class="gc-card-hint">Known &sigma; or CLT</span>
                </div>
                <div class="gc-grid-4">
                  <div class="gc-field"><label>&mu;&#8320;</label><input class="gc-input" id="gc-zt-mu0" value="100" /></div>
                  <div class="gc-field"><label>&sigma;</label><input class="gc-input" id="gc-zt-sd" value="15" /></div>
                  <div class="gc-field"><label>x&#772;</label><input class="gc-input" id="gc-zt-xbar" value="94.5" /></div>
                  <div class="gc-field"><label>n</label><input class="gc-input" id="gc-zt-n" value="30" /></div>
                </div>
                <div class="gc-seg" id="gc-zt-alt">
                  <button type="button" class="active" data-val="neq">&mu; &ne; &mu;&#8320;</button>
                  <button type="button" data-val="lt">&mu; &lt; &mu;&#8320;</button>
                  <button type="button" data-val="gt">&mu; &gt; &mu;&#8320;</button>
                </div>
                <div class="gc-out" id="gc-zt-out"></div>
              </div>

              <div class="gc-card">
                <div class="gc-card-head">
                  <h3>1-Sample T-Test</h3>
                  <span class="gc-card-hint">Unbiased sample s</span>
                </div>
                <div class="gc-grid-4">
                  <div class="gc-field"><label>&mu;&#8320;</label><input class="gc-input" id="gc-tt-mu0" value="100" /></div>
                  <div class="gc-field"><label>s</label><input class="gc-input" id="gc-tt-s" value="12" /></div>
                  <div class="gc-field"><label>x&#772;</label><input class="gc-input" id="gc-tt-xbar" value="93.2" /></div>
                  <div class="gc-field"><label>n</label><input class="gc-input" id="gc-tt-n" value="16" /></div>
                </div>
                <div class="gc-seg" id="gc-tt-alt">
                  <button type="button" data-val="neq">&mu; &ne; &mu;&#8320;</button>
                  <button type="button" class="active" data-val="lt">&mu; &lt; &mu;&#8320;</button>
                  <button type="button" data-val="gt">&mu; &gt; &mu;&#8320;</button>
                </div>
                <div class="gc-out" id="gc-tt-out"></div>
              </div>
            </div>

            <div class="gc-subpane" data-stats-pane="data">
              <div class="gc-seg" id="gc-data-mode-seg" style="width:100%;">
                <button type="button" class="active" data-val="raw">Raw Lists (L1, L2)</button>
                <button type="button" data-val="summary">Summary (&Sigma;x, &Sigma;x&sup2;)</button>
              </div>

              <div id="gc-data-raw-box" class="gc-card">
                <div class="gc-card-head">
                  <h3>1-Var Stats &amp; LinReg</h3>
                  <span class="gc-card-hint">Comma or space separated</span>
                </div>
                <div class="gc-grid-2">
                  <div class="gc-field">
                    <label>L1 (x)</label>
                    <textarea class="gc-textarea" id="gc-list-x">1, 2, 3, 4, 5</textarea>
                  </div>
                  <div class="gc-field">
                    <label>L2 (y, optional for LinReg)</label>
                    <textarea class="gc-textarea" id="gc-list-y">2.1, 4.0, 5.9, 8.2, 9.8</textarea>
                  </div>
                </div>
                <div class="gc-grid-2">
                  <div class="gc-field">
                    <label>Transform X</label>
                    <select class="gc-select" id="gc-lin-tx">
                      <option value="id">x (Linear)</option>
                      <option value="sq">x&sup2;</option>
                      <option value="ln">ln(x)</option>
                      <option value="inv">1/x</option>
                    </select>
                  </div>
                  <div class="gc-field">
                    <label>Transform Y</label>
                    <select class="gc-select" id="gc-lin-ty">
                      <option value="id">y (Linear)</option>
                      <option value="ln">ln(y)</option>
                      <option value="inv">1/y</option>
                    </select>
                  </div>
                </div>
                <div class="gc-out" id="gc-data-raw-out"></div>
                <div class="gc-grid-2" id="gc-lin-pred-row" style="align-items:end;">
                  <div class="gc-field"><label>Predict at raw x =</label><input class="gc-input" id="gc-lin-pred-x" value="3.5" /></div>
                  <div class="gc-out" id="gc-lin-pred-out" style="padding:5px 8px;"></div>
                </div>
              </div>

              <div id="gc-data-sum-box" class="gc-card" style="display:none;">
                <div class="gc-card-head">
                  <h3>Unbiased Estimates from Summary</h3>
                  <span class="gc-card-hint">For Hypothesis Testing</span>
                </div>
                <div class="gc-grid-3">
                  <div class="gc-field"><label>n</label><input class="gc-input" id="gc-sum-n" value="50" /></div>
                  <div class="gc-field"><label>&Sigma;x</label><input class="gc-input" id="gc-sum-sx" value="412" /></div>
                  <div class="gc-field"><label>&Sigma;x&sup2;</label><input class="gc-input" id="gc-sum-sx2" value="3580" /></div>
                </div>
                <div class="gc-out" id="gc-data-sum-out"></div>
              </div>
            </div>
          </section>

          <section class="gc-pane" data-gc-pane="calc">
            <div class="gc-card">
              <div class="gc-card-head">
                <h3>Scientific Evaluator</h3>
                <span class="gc-card-hint">Enter to evaluate</span>
              </div>
              <div class="gc-tape" id="gc-calc-tape"></div>
              <div class="gc-actions">
                <input class="gc-input" id="gc-calc-expr" style="flex:1;" placeholder="e.g. nCr(10,3) * 0.2^3 * 0.8^7" />
                <button type="button" class="gc-btn primary" id="gc-calc-run">=</button>
              </div>
              <div class="gc-actions">
                <button type="button" class="gc-btn gc-btn-sm" data-gc-ins="nCr(">nCr</button>
                <button type="button" class="gc-btn gc-btn-sm" data-gc-ins="nPr(">nPr</button>
                <button type="button" class="gc-btn gc-btn-sm" data-gc-ins="!">!</button>
                <button type="button" class="gc-btn gc-btn-sm" data-gc-ins="pi">&pi;</button>
                <button type="button" class="gc-btn gc-btn-sm" data-gc-ins="e">e</button>
                <button type="button" class="gc-btn gc-btn-sm" data-gc-ins="sqrt(">&radic;</button>
                <button type="button" class="gc-btn gc-btn-sm" data-gc-ins="ln(">ln</button>
                <button type="button" class="gc-btn gc-btn-sm" data-gc-ins="Ans">Ans</button>
              </div>
            </div>
          </section>

          <section class="gc-pane" data-gc-pane="solve">
            <div class="gc-card">
              <div class="gc-card-head">
                <h3>Simultaneous Equations</h3>
                <select class="gc-select" id="gc-sys-n" style="width:auto;padding:2px 6px;font-size:0.74rem;">
                  <option value="2">2 &times; 2</option>
                  <option value="3" selected>3 &times; 3</option>
                  <option value="4">4 &times; 4</option>
                </select>
              </div>
              <div id="gc-sys-grid"></div>
              <div class="gc-actions">
                <button type="button" class="gc-btn primary" id="gc-sys-solve">Solve System</button>
              </div>
              <div class="gc-out" id="gc-sys-out"></div>
            </div>

            <div class="gc-card">
              <div class="gc-card-head">
                <h3>Polynomial Roots</h3>
                <select class="gc-select" id="gc-poly-deg" style="width:auto;padding:2px 6px;font-size:0.74rem;">
                  <option value="2">Degree 2</option>
                  <option value="3" selected>Degree 3</option>
                  <option value="4">Degree 4</option>
                </select>
              </div>
              <div id="gc-poly-grid"></div>
              <div class="gc-actions">
                <button type="button" class="gc-btn primary" id="gc-poly-solve">Find Roots</button>
              </div>
              <div class="gc-out" id="gc-poly-out"></div>
            </div>
          </section>

          <section class="gc-pane" data-gc-pane="calculus">
            <div class="gc-card">
              <div class="gc-card-head">
                <h3>Definite Integral (fnInt)</h3>
                <span class="gc-card-hint">Adaptive Gauss-Kronrod</span>
              </div>
              <div class="gc-field"><label>Integrand f(x)</label><input class="gc-input" id="gc-int-fn" value="x * atan(x^2)" /></div>
              <div class="gc-grid-2">
                <div class="gc-field"><label>Lower bound a</label><input class="gc-input" id="gc-int-a" value="0" /></div>
                <div class="gc-field"><label>Upper bound b</label><input class="gc-input" id="gc-int-b" value="1" /></div>
              </div>
              <div class="gc-out" id="gc-int-out"></div>
            </div>

            <div class="gc-card">
              <div class="gc-card-head">
                <h3>Numerical Derivative (nDeriv)</h3>
                <span class="gc-card-hint">f'(a) &amp; f''(a)</span>
              </div>
              <div class="gc-grid-2">
                <div class="gc-field"><label>Function f(x)</label><input class="gc-input" id="gc-der-fn" value="ln(1 + x^4)" /></div>
                <div class="gc-field"><label>At x =</label><input class="gc-input" id="gc-der-x" value="1" /></div>
              </div>
              <div class="gc-out" id="gc-der-out"></div>
            </div>
          </section>

          <section class="gc-pane" data-gc-pane="graph">
            <div class="gc-card">
              <div class="gc-grid-2">
                <div class="gc-field"><label class="gc-swatch-y1">Y1(x)</label><input class="gc-input" id="gc-gr-y1" value="x^3 - 3x + 1" /></div>
                <div class="gc-field"><label class="gc-swatch-y2">Y2(x) (optional)</label><input class="gc-input" id="gc-gr-y2" value="cos(x)" /></div>
              </div>
              <div class="gc-grid-4">
                <div class="gc-field"><label>Xmin</label><input class="gc-input" id="gc-gr-xmin" value="-4" /></div>
                <div class="gc-field"><label>Xmax</label><input class="gc-input" id="gc-gr-xmax" value="4" /></div>
                <div class="gc-field"><label>Ymin</label><input class="gc-input" id="gc-gr-ymin" value="-4" /></div>
                <div class="gc-field"><label>Ymax</label><input class="gc-input" id="gc-gr-ymax" value="4" /></div>
              </div>
              <div class="gc-actions">
                <button type="button" class="gc-btn gc-btn-sm" id="gc-gr-zin">Zoom +</button>
                <button type="button" class="gc-btn gc-btn-sm" id="gc-gr-zout">Zoom &minus;</button>
                <button type="button" class="gc-btn gc-btn-sm" id="gc-gr-zreset">Reset</button>
                <button type="button" class="gc-btn gc-btn-sm" id="gc-gr-zeros">Zeros (Y1)</button>
                <button type="button" class="gc-btn gc-btn-sm" id="gc-gr-intersect">Intersect</button>
              </div>
              <div class="gc-graph-wrap">
                <canvas id="gc-graph-canvas"></canvas>
                <div class="gc-trace-bar" id="gc-gr-trace">Move over graph to trace, drag to pan, scroll to zoom.</div>
              </div>
              <div class="gc-out" id="gc-gr-findings" style="display:none;"></div>
            </div>
          </section>
        </div>
      </div>
    `;

    const q = (sel) => modal.querySelector(sel);
    const numVal = (sel) => evalNumExpr(q(sel).value, {}, degMode);
    const getSegVal = (sel) => q(`${sel} button.active`)?.dataset.val;
    const wireSeg = (sel, onPick) => {
      const seg = q(sel);
      seg.querySelectorAll("button").forEach(b => {
        b.onclick = () => {
          seg.querySelectorAll("button").forEach(x => x.classList.toggle("active", x === b));
          onPick(b.dataset.val);
        };
      });
    };

    q("#gc-close").onclick = onClose;
    modal.onclick = (e) => { if (e.target === modal) onClose(); };

    q("#gc-angle-toggle").onclick = (e) => {
      degMode = !degMode;
      e.target.textContent = degMode ? "DEG" : "RAD";
      updateCalculus();
      drawGraph();
    };

    modal.querySelectorAll("[data-gc-tab]").forEach((btn) => {
      btn.onclick = () => {
        const target = btn.dataset.gcTab;
        modal.querySelectorAll("[data-gc-tab]").forEach(b => b.classList.toggle("active", b === btn));
        modal.querySelectorAll("[data-gc-pane]").forEach(p => p.classList.toggle("active", p.dataset.gcPane === target));
        if (target === "graph") requestAnimationFrame(drawGraph);
      };
    });

    modal.querySelectorAll("[data-stats-sub]").forEach((btn) => {
      btn.onclick = () => {
        const target = btn.dataset.statsSub;
        modal.querySelectorAll("[data-stats-sub]").forEach(b => b.classList.toggle("active", b === btn));
        modal.querySelectorAll("[data-stats-pane]").forEach(p => p.classList.toggle("active", p.dataset.statsPane === target));
      };
    });

    // Stats -> Distributions
    function updateNcdf() {
      const out = q("#gc-ncdf-out");
      try {
        const lowRaw = q("#gc-ncdf-low").value.trim();
        const upRaw = q("#gc-ncdf-up").value.trim();
        const low = lowRaw ? evalNumExpr(lowRaw, {}, degMode) : -Infinity;
        const up = upRaw ? evalNumExpr(upRaw, {}, degMode) : Infinity;
        const mu = numVal("#gc-ncdf-mu");
        const sd = numVal("#gc-ncdf-sd");
        const p = normalcdf(low, up, mu, sd);
        showOut(out, kv("P(lower < X < upper)", `${fmtFixed(p, 6)}  (${fmtSig(p, 3)} 3 s.f.)`, true));
      } catch (err) { showErr(out, err.message); }
    }
    ["#gc-ncdf-low", "#gc-ncdf-up", "#gc-ncdf-mu", "#gc-ncdf-sd"].forEach(s => { q(s).oninput = updateNcdf; });

    function updateInvNorm() {
      const out = q("#gc-invn-out");
      try {
        const area = numVal("#gc-invn-area");
        const mu = numVal("#gc-invn-mu");
        const sd = numVal("#gc-invn-sd");
        const tail = getSegVal("#gc-invn-tail");
        const res = invNorm(area, mu, sd, tail);
        if (Array.isArray(res)) {
          showOut(out,
            kv("Lower bound", `${fmtFixed(res[0], 5)}  (${fmtSig(res[0], 3)})`, true) +
            kv("Upper bound", `${fmtFixed(res[1], 5)}  (${fmtSig(res[1], 3)})`, true)
          );
        } else {
          showOut(out, kv("x value", `${fmtFixed(res, 6)}  (${fmtSig(res, 3)} 3 s.f.)`, true));
        }
      } catch (err) { showErr(out, err.message); }
    }
    ["#gc-invn-area", "#gc-invn-mu", "#gc-invn-sd"].forEach(s => { q(s).oninput = updateInvNorm; });
    wireSeg("#gc-invn-tail", updateInvNorm);

    function updateBinom() {
      const out = q("#gc-bin-out");
      try {
        const n = Math.round(numVal("#gc-bin-n"));
        const p = numVal("#gc-bin-p");
        const x = Math.round(numVal("#gc-bin-x"));
        const exact = binompdf(n, p, x);
        const le = binomcdf(n, p, x);
        const lt = binomcdf(n, p, x - 1);
        const ge = 1 - lt;
        const gt = 1 - le;
        showOut(out,
          kv(`P(X = ${x})`, `${fmtFixed(exact, 6)}  (${fmtSig(exact, 3)})`) +
          kv(`P(X &le; ${x})`, `${fmtFixed(le, 6)}  (${fmtSig(le, 3)})`, true) +
          kv(`P(X &lt; ${x})`, `${fmtFixed(lt, 6)}  (${fmtSig(lt, 3)})`) +
          kv(`P(X &ge; ${x})`, `${fmtFixed(ge, 6)}  (${fmtSig(ge, 3)})`, true) +
          kv(`P(X &gt; ${x})`, `${fmtFixed(gt, 6)}  (${fmtSig(gt, 3)})`) +
          kv("E(X), Var(X)", `${fmtSig(n * p, 4)}, ${fmtSig(n * p * (1 - p), 4)}`)
        );
      } catch (err) { showErr(out, err.message); }
    }
    ["#gc-bin-n", "#gc-bin-p", "#gc-bin-x"].forEach(s => { q(s).oninput = updateBinom; });

    // Stats -> Tests
    const renderDecisions = (pVal) => {
      const lvls = [["1%", 0.01], ["5%", 0.05], ["10%", 0.10]];
      return `<div class="gc-decisions">${lvls.map(([lbl, a]) => {
        const rej = pVal < a;
        return `<span class="gc-dec-pill ${rej ? "reject" : ""}">${lbl}: ${rej ? "Reject H\u2080" : "Do not reject"}</span>`;
      }).join("")}</div>`;
    };

    function updateZTest() {
      const out = q("#gc-zt-out");
      try {
        const mu0 = numVal("#gc-zt-mu0");
        const sd = numVal("#gc-zt-sd");
        const xbar = numVal("#gc-zt-xbar");
        const n = numVal("#gc-zt-n");
        if (sd <= 0 || n <= 0) throw new Error("sigma and n must be > 0");
        const z = (xbar - mu0) / (sd / Math.sqrt(n));
        const alt = getSegVal("#gc-zt-alt");
        let p = stdNormCdf(z);
        if (alt === "gt") p = 1 - p;
        else if (alt === "neq") p = 2 * (1 - stdNormCdf(Math.abs(z)));
        showOut(out,
          kv("Test stat z", `${fmtFixed(z, 5)}  (${fmtSig(z, 3)})`, true) +
          kv("p-value", `${fmtFixed(p, 6)}  (${fmtSig(p, 3)} 3 s.f.)`, true) +
          renderDecisions(p)
        );
      } catch (err) { showErr(out, err.message); }
    }
    ["#gc-zt-mu0", "#gc-zt-sd", "#gc-zt-xbar", "#gc-zt-n"].forEach(s => { q(s).oninput = updateZTest; });
    wireSeg("#gc-zt-alt", updateZTest);

    function updateTTest() {
      const out = q("#gc-tt-out");
      try {
        const mu0 = numVal("#gc-tt-mu0");
        const s = numVal("#gc-tt-s");
        const xbar = numVal("#gc-tt-xbar");
        const n = numVal("#gc-tt-n");
        if (s <= 0 || n <= 1) throw new Error("s > 0 and n >= 2 required");
        const df = n - 1;
        const t = (xbar - mu0) / (s / Math.sqrt(n));
        const p = tTestPValue(t, df, getSegVal("#gc-tt-alt"));
        showOut(out,
          kv(`Test stat t (df = ${df})`, `${fmtFixed(t, 5)}  (${fmtSig(t, 3)})`, true) +
          kv("p-value", `${fmtFixed(p, 6)}  (${fmtSig(p, 3)} 3 s.f.)`, true) +
          renderDecisions(p)
        );
      } catch (err) { showErr(out, err.message); }
    }
    ["#gc-tt-mu0", "#gc-tt-s", "#gc-tt-xbar", "#gc-tt-n"].forEach(s => { q(s).oninput = updateTTest; });
    wireSeg("#gc-tt-alt", updateTTest);

    // Stats -> Data & LinReg
    let lastLinReg = null;
    const parseNumList = (text) => text.trim().split(/[\s,;]+/).filter(Boolean).map(tok => evalNumExpr(tok, {}, degMode));
    const applyTransform = (v, kind) => {
      if (kind === "sq") return v * v;
      if (kind === "ln") { if (v <= 0) throw new Error("ln(v) requires v > 0"); return Math.log(v); }
      if (kind === "inv") { if (v === 0) throw new Error("1/v requires v != 0"); return 1 / v; }
      return v;
    };
    const invertTransform = (v, kind) => {
      if (kind === "ln") return Math.exp(v);
      if (kind === "inv") return 1 / v;
      return v;
    };
    const medianSorted = (arr) => {
      const n = arr.length;
      if (!n) return NaN;
      const m = Math.floor(n / 2);
      return n % 2 ? arr[m] : 0.5 * (arr[m - 1] + arr[m]);
    };

    function updatePred() {
      const predEl = q("#gc-lin-pred-out");
      if (!lastLinReg) { predEl.style.display = "none"; return; }
      predEl.style.display = "flex";
      try {
        const rx = evalNumExpr(q("#gc-lin-pred-x").value, {}, degMode);
        const X = applyTransform(rx, lastLinReg.tx);
        const Yhat = lastLinReg.a + lastLinReg.b * X;
        const rawY = invertTransform(Yhat, lastLinReg.ty);
        showOut(predEl, kv("Predicted y&#770;", fmtFixed(rawY, 5), true));
      } catch (err) { showErr(predEl, err.message); }
    }

    function updateDataStats() {
      const out = q("#gc-data-raw-out");
      const predRow = q("#gc-lin-pred-row");
      try {
        const xs = parseNumList(q("#gc-list-x").value);
        if (!xs.length) throw new Error("Enter at least one x value");
        const yText = q("#gc-list-y").value.trim();
        const ys = yText ? parseNumList(yText) : [];
        const n = xs.length;
        const sumX = xs.reduce((a, b) => a + b, 0);
        const sumX2 = xs.reduce((a, b) => a + b * b, 0);
        const meanX = sumX / n;
        const varPop = Math.max(0, sumX2 / n - meanX * meanX);
        const varSamp = n > 1 ? (sumX2 - (sumX * sumX) / n) / (n - 1) : NaN;
        const sorted = [...xs].sort((a, b) => a - b);
        const mid = Math.floor(n / 2);
        const q1 = medianSorted(sorted.slice(0, mid));
        const med = medianSorted(sorted);
        const q3 = medianSorted(sorted.slice(n % 2 ? mid + 1 : mid));

        let html =
          kv("1-Var (L1)", `n = ${n},  x&#772; = ${fmtFixed(meanX, 5)}`, true) +
          kv("&Sigma;x, &Sigma;x&sup2;", `${fmtFixed(sumX, 5)},  ${fmtFixed(sumX2, 5)}`) +
          kv("Sx (unbiased), &sigma;x", `${Number.isFinite(varSamp) ? fmtFixed(Math.sqrt(varSamp), 5) : "-"},  ${fmtFixed(Math.sqrt(varPop), 5)}`) +
          kv("min / Q1 / Med / Q3 / max", `${sorted[0]} / ${q1} / ${med} / ${q3} / ${sorted[n - 1]}`);

        if (ys.length) {
          if (ys.length !== xs.length) throw new Error(`L1 (${xs.length}) and L2 (${ys.length}) lengths differ`);
          const tx = q("#gc-lin-tx").value;
          const ty = q("#gc-lin-ty").value;
          const txArr = xs.map(v => applyTransform(v, tx));
          const tyArr = ys.map(v => applyTransform(v, ty));
          const mx = txArr.reduce((a, b) => a + b, 0) / n;
          const my = tyArr.reduce((a, b) => a + b, 0) / n;
          let sxx = 0, syy = 0, sxy = 0;
          for (let i = 0; i < n; i++) {
            sxx += (txArr[i] - mx) ** 2;
            syy += (tyArr[i] - my) ** 2;
            sxy += (txArr[i] - mx) * (tyArr[i] - my);
          }
          if (sxx === 0) throw new Error("Transformed X has zero variance");
          const b = sxy / sxx;
          const a = my - b * mx;
          const r = syy > 0 ? sxy / Math.sqrt(sxx * syy) : NaN;
          const xLabel = { id: "x", sq: "x\u00b2", ln: "ln(x)", inv: "1/x" }[tx];
          const yLabel = { id: "y", ln: "ln(y)", inv: "1/y" }[ty];
          html +=
            kv(`LinReg (${yLabel} = a + b\u00b7${xLabel})`, `${fmtFixed(a, 5)} + ${fmtFixed(b, 5)}\u00b7${xLabel}`, true) +
            kv("a, b", `${fmtFixed(a, 6)},  ${fmtFixed(b, 6)}`) +
            kv("r, r&sup2;", `${fmtFixed(r, 6)},  ${fmtFixed(r * r, 6)}`, true);
          lastLinReg = { a, b, tx, ty };
          predRow.style.display = "grid";
          updatePred();
        } else {
          lastLinReg = null;
          predRow.style.display = "none";
        }
        showOut(out, html);
      } catch (err) {
        lastLinReg = null;
        predRow.style.display = "none";
        showErr(out, err.message);
      }
    }

    function updateSummaryStats() {
      const out = q("#gc-data-sum-out");
      try {
        const n = numVal("#gc-sum-n");
        const sx = numVal("#gc-sum-sx");
        const sx2 = numVal("#gc-sum-sx2");
        if (n <= 1) throw new Error("n must be >= 2");
        const xbar = sx / n;
        const s2 = (sx2 - (sx * sx) / n) / (n - 1);
        if (s2 < 0) throw new Error("Inconsistent sum of squares (s\u00b2 < 0)");
        const s = Math.sqrt(s2);
        showOut(out,
          kv("Sample mean x&#772;", `${fmtFixed(xbar, 6)}  (${fmtSig(xbar, 3)})`, true) +
          kv("Unbiased s&sup2;", `${fmtFixed(s2, 6)}  (${fmtSig(s2, 3)})`, true) +
          kv("Unbiased s", `${fmtFixed(s, 6)}  (${fmtSig(s, 3)})`, true)
        );
      } catch (err) { showErr(out, err.message); }
    }

    wireSeg("#gc-data-mode-seg", (mode) => {
      q("#gc-data-raw-box").style.display = mode === "raw" ? "flex" : "none";
      q("#gc-data-sum-box").style.display = mode === "summary" ? "flex" : "none";
    });
    ["#gc-list-x", "#gc-list-y", "#gc-lin-tx", "#gc-lin-ty"].forEach(s => { q(s).oninput = updateDataStats; });
    q("#gc-lin-pred-x").oninput = updatePred;
    ["#gc-sum-n", "#gc-sum-sx", "#gc-sum-sx2"].forEach(s => { q(s).oninput = updateSummaryStats; });

    // Calc Tape
    const tapeEl = q("#gc-calc-tape");
    const exprInput = q("#gc-calc-expr");

    function runCalc() {
      const raw = exprInput.value.trim();
      if (!raw) return;
      const row = document.createElement("div");
      row.className = "gc-tape-row";
      try {
        const val = evalNumExpr(raw, { Ans: lastAns, ans: lastAns }, degMode);
        if (!Number.isFinite(val)) throw new Error(Number.isNaN(val) ? "Undefined (NaN)" : "Overflow / undefined");
        lastAns = val;
        const exprDiv = document.createElement("div");
        exprDiv.className = "gc-tape-expr";
        exprDiv.textContent = raw;
        const ansDiv = document.createElement("div");
        ansDiv.className = "gc-tape-ans";
        ansDiv.textContent = `${fmtFixed(val, 8)} (${fmtSig(val, 3)})`;
        row.append(exprDiv, ansDiv);
        row.onclick = () => { exprInput.value = String(val); exprInput.focus(); };
      } catch (err) {
        const exprDiv = document.createElement("div");
        exprDiv.className = "gc-tape-expr";
        exprDiv.textContent = raw;
        const ansDiv = document.createElement("div");
        ansDiv.className = "gc-tape-ans";
        ansDiv.style.color = "var(--bad)";
        ansDiv.textContent = err.message;
        row.append(exprDiv, ansDiv);
      }
      tapeEl.appendChild(row);
      tapeEl.scrollTop = tapeEl.scrollHeight;
    }

    q("#gc-calc-run").onclick = runCalc;
    exprInput.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); runCalc(); } });
    modal.querySelectorAll("[data-gc-ins]").forEach(btn => {
      btn.onclick = () => {
        const txt = btn.dataset.gcIns;
        const st = exprInput.selectionStart ?? exprInput.value.length;
        const en = exprInput.selectionEnd ?? exprInput.value.length;
        exprInput.value = exprInput.value.slice(0, st) + txt + exprInput.value.slice(en);
        exprInput.focus();
        exprInput.selectionStart = exprInput.selectionEnd = st + txt.length;
      };
    });

    // Solve (PlySmlt2)
    const sysGridEl = q("#gc-sys-grid");
    const sysNEl = q("#gc-sys-n");
    const sysDefault3 = [
      ["1", "1", "1", "6"],
      ["2", "-1", "1", "3"],
      ["1", "2", "-1", "2"]
    ];

    function buildSysGrid() {
      const n = Number(sysNEl.value);
      const cols = Array(n).fill("minmax(42px, 1fr)").join(" ") + " 16px minmax(48px, 1fr)";
      let html = `<div class="gc-matrix-grid" style="grid-template-columns:${cols};">`;
      const vars = ["x", "y", "z", "w"];
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
          const def = n === 3 ? sysDefault3[r][c] : (r === c ? "1" : c === 0 ? "1" : "0");
          html += `<input class="gc-input sys-a" data-r="${r}" data-c="${c}" placeholder="${vars[c]}" value="${def}" />`;
        }
        const bDef = n === 3 ? sysDefault3[r][3] : String(r + 2);
        html += `<span class="gc-matrix-eq">=</span><input class="gc-input sys-b" data-r="${r}" placeholder="b" value="${bDef}" />`;
      }
      html += "</div>";
      sysGridEl.innerHTML = html;
    }

    function runSysSolve() {
      const out = q("#gc-sys-out");
      try {
        const n = Number(sysNEl.value);
        const A = Array.from({ length: n }, () => Array(n).fill(0));
        const b = Array(n).fill(0);
        sysGridEl.querySelectorAll(".sys-a").forEach(el => {
          A[Number(el.dataset.r)][Number(el.dataset.c)] = evalNumExpr(el.value, {}, degMode);
        });
        sysGridEl.querySelectorAll(".sys-b").forEach(el => {
          b[Number(el.dataset.r)] = evalNumExpr(el.value, {}, degMode);
        });
        const sol = solveLinear(A, b);
        const vars = ["x", "y", "z", "w"];
        showOut(out, sol.map((v, i) => kv(vars[i], `${fmtFixed(v, 6)}  (${fmtSig(v, 3)})`, true)).join(""));
      } catch (err) { showErr(out, err.message); }
    }
    sysNEl.onchange = () => { buildSysGrid(); runSysSolve(); };
    q("#gc-sys-solve").onclick = runSysSolve;

    const polyGridEl = q("#gc-poly-grid");
    const polyDegEl = q("#gc-poly-deg");

    function buildPolyGrid() {
      const deg = Number(polyDegEl.value);
      const cols = `repeat(${deg + 1}, minmax(44px, 1fr))`;
      const defaults = deg === 3 ? ["1", "-6", "11", "-6"] : deg === 2 ? ["1", "-1", "-6"] : ["1", "0", "-5", "0", "4"];
      let html = `<div style="display:grid;gap:6px;grid-template-columns:${cols};">`;
      for (let i = 0; i <= deg; i++) {
        const p = deg - i;
        const lbl = p === 0 ? "const" : (p === 1 ? "x" : `x^${p}`);
        html += `<div class="gc-field"><label>${lbl}</label><input class="gc-input poly-c" value="${defaults[i]}" /></div>`;
      }
      html += "</div>";
      polyGridEl.innerHTML = html;
    }

    function runPolySolve() {
      const out = q("#gc-poly-out");
      try {
        const coeffs = [...polyGridEl.querySelectorAll(".poly-c")].map(el => evalNumExpr(el.value, {}, degMode));
        const roots = polyRoots(coeffs);
        showOut(out, roots.map((r, i) => {
          const str = Math.abs(r.im) < 1e-9
            ? `${fmtFixed(r.re, 5)}  (${fmtSig(r.re, 3)})`
            : `${fmtFixed(r.re, 5)} ${r.im >= 0 ? "+" : "-"} ${fmtFixed(Math.abs(r.im), 5)}i`;
          return kv(`Root ${i + 1}`, str, true);
        }).join(""));
      } catch (err) { showErr(out, err.message); }
    }
    polyDegEl.onchange = () => { buildPolyGrid(); runPolySolve(); };
    q("#gc-poly-solve").onclick = runPolySolve;

    // Calculus
    function updateCalculus() {
      const intOut = q("#gc-int-out");
      try {
        const expr = q("#gc-int-fn").value;
        const a = numVal("#gc-int-a");
        const b = numVal("#gc-int-b");
        const val = fnInt(expr, a, b, degMode);
        showOut(intOut, kv("Definite integral", `${fmtFixed(val, 7)}  (${fmtSig(val, 3)} 3 s.f.)`, true));
      } catch (err) { showErr(intOut, err.message); }

      const derOut = q("#gc-der-out");
      try {
        const expr = q("#gc-der-fn").value;
        const x0 = numVal("#gc-der-x");
        const { first, second } = nDeriv(expr, x0, degMode);
        showOut(derOut,
          kv(`f'(${fmtSig(x0, 4)})`, `${fmtFixed(first, 6)}  (${fmtSig(first, 3)})`, true) +
          kv(`f''(${fmtSig(x0, 4)})`, `${fmtFixed(second, 5)}  (${fmtSig(second, 3)})`)
        );
      } catch (err) { showErr(derOut, err.message); }
    }
    ["#gc-int-fn", "#gc-int-a", "#gc-int-b", "#gc-der-fn", "#gc-der-x"].forEach(s => { q(s).oninput = updateCalculus; });

    // Graph Plotter
    const canvas = q("#gc-graph-canvas");
    const gCtx = canvas.getContext("2d");
    const traceEl = q("#gc-gr-trace");
    const findingsEl = q("#gc-gr-findings");
    let hoverMouseX = null;
    let panDrag = null;

    function getWin() {
      const xmin = numVal("#gc-gr-xmin");
      const xmax = numVal("#gc-gr-xmax");
      const ymin = numVal("#gc-gr-ymin");
      const ymax = numVal("#gc-gr-ymax");
      if (!(xmax > xmin && ymax > ymin)) throw new Error("Invalid window");
      return { xmin, xmax, ymin, ymax };
    }

    function setWin(w) {
      q("#gc-gr-xmin").value = Number(w.xmin.toPrecision(5));
      q("#gc-gr-xmax").value = Number(w.xmax.toPrecision(5));
      q("#gc-gr-ymin").value = Number(w.ymin.toPrecision(5));
      q("#gc-gr-ymax").value = Number(w.ymax.toPrecision(5));
    }

    function niceStep(span) {
      const raw = span / 6;
      const mag = Math.pow(10, Math.floor(Math.log10(raw)));
      const r = raw / mag;
      if (r < 1.5) return 1 * mag;
      if (r < 3.5) return 2 * mag;
      if (r < 7.5) return 5 * mag;
      return 10 * mag;
    }

    function drawGraph() {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      gCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gCtx.clearRect(0, 0, rect.width, rect.height);

      let win;
      try { win = getWin(); } catch (_) { return; }
      const W = rect.width, H = rect.height;
      const toSx = (x) => ((x - win.xmin) / (win.xmax - win.xmin)) * W;
      const toSy = (y) => H - ((y - win.ymin) / (win.ymax - win.ymin)) * H;

      const xStep = niceStep(win.xmax - win.xmin);
      const yStep = niceStep(win.ymax - win.ymin);
      gCtx.lineWidth = 1;
      gCtx.strokeStyle = "rgba(30, 58, 95, 0.09)";
      for (let gx = Math.ceil(win.xmin / xStep) * xStep; gx <= win.xmax; gx += xStep) {
        const sx = toSx(gx);
        gCtx.beginPath(); gCtx.moveTo(sx, 0); gCtx.lineTo(sx, H); gCtx.stroke();
      }
      for (let gy = Math.ceil(win.ymin / yStep) * yStep; gy <= win.ymax; gy += yStep) {
        const sy = toSy(gy);
        gCtx.beginPath(); gCtx.moveTo(0, sy); gCtx.lineTo(W, sy); gCtx.stroke();
      }

      gCtx.strokeStyle = "rgba(28, 27, 24, 0.45)";
      gCtx.lineWidth = 1.2;
      if (win.xmin <= 0 && win.xmax >= 0) {
        const sx0 = toSx(0);
        gCtx.beginPath(); gCtx.moveTo(sx0, 0); gCtx.lineTo(sx0, H); gCtx.stroke();
      }
      if (win.ymin <= 0 && win.ymax >= 0) {
        const sy0 = toSy(0);
        gCtx.beginPath(); gCtx.moveTo(0, sy0); gCtx.lineTo(W, sy0); gCtx.stroke();
      }

      const plotCurve = (expr, color) => {
        if (!expr.trim()) return;
        gCtx.strokeStyle = color;
        gCtx.lineWidth = 2;
        gCtx.beginPath();
        let started = false;
        let prevY = null;
        const samples = Math.max(240, Math.floor(W * 1.5));
        for (let i = 0; i <= samples; i++) {
          const sx = (i / samples) * W;
          const x = win.xmin + (i / samples) * (win.xmax - win.xmin);
          let y;
          try { y = evalNumExpr(expr, { x }, degMode); } catch (_) { y = NaN; }
          const sy = toSy(y);
          const jump = prevY !== null && Math.abs(sy - prevY) > H * 0.8;
          if (!Number.isFinite(y) || sy < -H * 2 || sy > H * 3 || jump) {
            started = false;
          } else if (!started) {
            gCtx.moveTo(sx, sy);
            started = true;
          } else {
            gCtx.lineTo(sx, sy);
          }
          prevY = sy;
        }
        gCtx.stroke();
      };

      const y1Expr = q("#gc-gr-y1").value;
      const y2Expr = q("#gc-gr-y2").value;
      plotCurve(y1Expr, "#1e3a5f");
      plotCurve(y2Expr, "#9e3535");

      if (hoverMouseX !== null) {
        const x = win.xmin + (hoverMouseX / W) * (win.xmax - win.xmin);
        gCtx.strokeStyle = "rgba(30, 58, 95, 0.25)";
        gCtx.lineWidth = 1;
        gCtx.setLineDash([4, 3]);
        gCtx.beginPath(); gCtx.moveTo(hoverMouseX, 0); gCtx.lineTo(hoverMouseX, H); gCtx.stroke();
        gCtx.setLineDash([]);
        const parts = [`<span>x = <strong>${fmtFixed(x, 4)}</strong></span>`];
        const drawDot = (expr, color, name) => {
          if (!expr.trim()) return;
          try {
            const y = evalNumExpr(expr, { x }, degMode);
            if (!Number.isFinite(y)) return;
            const sy = toSy(y);
            if (sy >= 0 && sy <= H) {
              gCtx.fillStyle = color;
              gCtx.beginPath(); gCtx.arc(hoverMouseX, sy, 4, 0, Math.PI * 2); gCtx.fill();
            }
            parts.push(`<span style="color:${color};">${name} = <strong>${fmtFixed(y, 4)}</strong></span>`);
          } catch (_) {}
        };
        drawDot(y1Expr, "#1e3a5f", "Y1");
        drawDot(y2Expr, "#9e3535", "Y2");
        traceEl.innerHTML = parts.join("");
      }
    }

    const refineRoot = (fn, a, b) => {
      let fa = fn(a), fb = fn(b);
      if (Math.abs(fa) < 1e-10) return a;
      if (Math.abs(fb) < 1e-10) return b;
      for (let i = 0; i < 50; i++) {
        const m = 0.5 * (a + b), fm = fn(m);
        if (Math.abs(fm) < 1e-11 || Math.abs(b - a) < 1e-9) return m;
        if ((fa < 0 && fm < 0) || (fa > 0 && fm > 0)) { a = m; fa = fm; }
        else { b = m; fb = fm; }
      }
      return 0.5 * (a + b);
    };

    const findBracketedRoots = (fn, xmin, xmax) => {
      const N = 400;
      const roots = [];
      let px = xmin, py = fn(xmin);
      for (let i = 1; i <= N; i++) {
        const x = xmin + (i / N) * (xmax - xmin);
        const y = fn(x);
        if (Number.isFinite(py) && Number.isFinite(y)) {
          if (Math.abs(py) < 1e-9) {
            if (!roots.length || Math.abs(px - roots[roots.length - 1]) > 1e-4) roots.push(px);
          } else if ((py < 0 && y > 0) || (py > 0 && y < 0)) {
            const r = refineRoot(fn, px, x);
            if (Math.abs(fn(r)) < 1e-3 && (!roots.length || Math.abs(r - roots[roots.length - 1]) > 1e-4)) {
              roots.push(r);
            }
          }
        }
        px = x; py = y;
      }
      return roots;
    };

    ["#gc-gr-y1", "#gc-gr-y2", "#gc-gr-xmin", "#gc-gr-xmax", "#gc-gr-ymin", "#gc-gr-ymax"].forEach(s => {
      q(s).oninput = () => { findingsEl.style.display = "none"; drawGraph(); };
    });
    const zoomGraph = (factor) => {
      try {
        const w = getWin();
        const cx = 0.5 * (w.xmin + w.xmax), cy = 0.5 * (w.ymin + w.ymax);
        const hx = 0.5 * (w.xmax - w.xmin) * factor, hy = 0.5 * (w.ymax - w.ymin) * factor;
        setWin({ xmin: cx - hx, xmax: cx + hx, ymin: cy - hy, ymax: cy + hy });
        drawGraph();
      } catch (_) {}
    };
    q("#gc-gr-zin").onclick = () => zoomGraph(0.7);
    q("#gc-gr-zout").onclick = () => zoomGraph(1.4);
    q("#gc-gr-zreset").onclick = () => { setWin({ xmin: -4, xmax: 4, ymin: -4, ymax: 4 }); drawGraph(); };

    q("#gc-gr-zeros").onclick = () => {
      findingsEl.style.display = "flex";
      try {
        const w = getWin();
        const expr = q("#gc-gr-y1").value;
        const roots = findBracketedRoots((x) => {
          try { return evalNumExpr(expr, { x }, degMode); } catch (_) { return NaN; }
        }, w.xmin, w.xmax);
        if (!roots.length) showOut(findingsEl, kv("Y1 Zeros", "None found in current window"));
        else showOut(findingsEl, roots.map((r, i) => kv(`Zero ${i + 1}`, `x = ${fmtFixed(r, 5)}  (${fmtSig(r, 3)})`, true)).join(""));
      } catch (err) { showErr(findingsEl, err.message); }
    };

    q("#gc-gr-intersect").onclick = () => {
      findingsEl.style.display = "flex";
      try {
        const w = getWin();
        const e1 = q("#gc-gr-y1").value;
        const e2 = q("#gc-gr-y2").value;
        if (!e2.trim()) throw new Error("Enter Y2(x) to find intersections");
        const xs = findBracketedRoots((x) => {
          try { return evalNumExpr(e1, { x }, degMode) - evalNumExpr(e2, { x }, degMode); } catch (_) { return NaN; }
        }, w.xmin, w.xmax);
        if (!xs.length) showOut(findingsEl, kv("Intersections", "None found in current window"));
        else showOut(findingsEl, xs.map((x, i) => {
          const y = evalNumExpr(e1, { x }, degMode);
          return kv(`Hit ${i + 1}`, `(${fmtFixed(x, 4)}, ${fmtFixed(y, 4)})`, true);
        }).join(""));
      } catch (err) { showErr(findingsEl, err.message); }
    };

    canvas.addEventListener("pointerdown", (e) => {
      try {
        const w = getWin();
        panDrag = { sx: e.clientX, sy: e.clientY, w };
        canvas.setPointerCapture(e.pointerId);
      } catch (_) {}
    });
    canvas.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      hoverMouseX = e.clientX - rect.left;
      if (panDrag) {
        const dxPx = e.clientX - panDrag.sx;
        const dyPx = e.clientY - panDrag.sy;
        const spanX = panDrag.w.xmax - panDrag.w.xmin;
        const spanY = panDrag.w.ymax - panDrag.w.ymin;
        setWin({
          xmin: panDrag.w.xmin - (dxPx / rect.width) * spanX,
          xmax: panDrag.w.xmax - (dxPx / rect.width) * spanX,
          ymin: panDrag.w.ymin + (dyPx / rect.height) * spanY,
          ymax: panDrag.w.ymax + (dyPx / rect.height) * spanY
        });
      }
      drawGraph();
    });
    canvas.addEventListener("pointerup", () => { panDrag = null; });
    canvas.addEventListener("pointerleave", () => { hoverMouseX = null; panDrag = null; drawGraph(); });
    canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      zoomGraph(e.deltaY > 0 ? 1.15 : 0.87);
    }, { passive: false });

    redrawGraphFn = drawGraph;
    isGraphTabActiveFn = () => q('[data-gc-pane="graph"]').classList.contains("active");

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => {
        if (modal.classList.contains("open") && isGraphTabActiveFn()) drawGraph();
      });
      ro.observe(modal);
    }

    updateNcdf();
    updateInvNorm();
    updateBinom();
    updateZTest();
    updateTTest();
    updateDataStats();
    updateSummaryStats();
    buildSysGrid();
    runSysSolve();
    buildPolyGrid();
    runPolySolve();
    updateCalculus();
  }

  function refreshLayout() {
    if (redrawGraphFn && isGraphTabActiveFn()) redrawGraphFn();
  }

  window.H2GC = {
    build,
    refreshLayout,
    math: {
      evalNumExpr,
      normalcdf,
      invNorm,
      binompdf,
      binomcdf,
      tTestPValue,
      solveLinear,
      polyRoots,
      fnInt,
      nDeriv
    }
  };
})();
