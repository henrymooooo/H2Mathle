window.registerQuestions([
  // ==================== NYJC 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "NYJC-2026-P2-Q1",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "A sequence is such that $u_1 = a$ ($a \\ne \\frac{1}{2}$) and $u_{n+1} = 1 - u_n$ for $n > 0$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find $u_2$ and $u_3$ in terms of $a$.", type: "self", solution: "$u_2 = 1 - a$, $u_3 = 1 - (1 - a) = a$." },
      { label: "(b)", marks: 1, prompt: "Describe how the sequence behaves.", type: "self", solution: "The sequence is oscillating / periodic with period $2$, alternating between $a$ and $1 - a$." },
      { label: "(c)", marks: 2, prompt: "Find the value of $a$ for which $\\sum_{n=1}^{101} u_n = 49$.", type: "auto", mode: "number", exactRequired: true, answer: "-1", placeholder: "Exact value of a", solution: "$51a + 50(1 - a) = 49 \\implies 50 + a = 49 \\implies a = -1$." }
    ]
  },
  {
    id: "NYJC-2026-P2-Q2",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "The complex number $a + b\\mathrm{i}$ is denoted by $z$, where $a, b \\in \\mathbb{R}$, $a > 0$ and $b < 0$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the complex number $w$ in terms of $a$ and $b$ such that $3z^*\\mathrm{i}w = |z|^2$.", type: "self", solution: "$w = \\frac{zz^*}{3z^*\\mathrm{i}} = \\frac{z}{3\\mathrm{i}} = -\\frac{\\mathrm{i}}{3}(a + b\\mathrm{i}) = \\frac{1}{3}(b - a\\mathrm{i})$." },
      {
        label: "(b)", marks: 3, prompt: "$z$ and $w$ are represented by $P$ and $Q$ on an Argand diagram. Plot $P$ and $Q$, showing clearly any geometrical relationship.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 160" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="45" x2="225" y2="45" stroke-width="1.3"/><line x1="65" y1="150" x2="65" y2="12" stroke-width="1.3"/><text x="228" y="49" stroke="none">Re</text><text x="70" y="18" stroke="none">Im</text><text x="56" y="40" stroke="none" font-style="italic">O</text><line x1="65" y1="45" x2="185" y2="105" stroke="#4a8fe7" stroke-dasharray="4,3" stroke-width="1.5"/><line x1="65" y1="45" x2="45" y2="85" stroke="#4a8fe7" stroke-dasharray="4,3" stroke-width="1.5"/><polyline points="71,48 68,54 62,51" fill="none" stroke-width="1"/><text x="190" y="109" stroke="none" font-style="italic">P(z)</text><text x="28" y="92" stroke="none" font-style="italic">Q(w)</text></svg>`,
        solution: "$P$ is in the 4th quadrant ($a>0, b<0$) and $Q$ is in the 3rd quadrant ($w = -\\frac{\\mathrm{i}}{3}z$). $OQ$ is perpendicular to $OP$ ($90°$ clockwise rotation) and $OQ = \\frac{1}{3}OP$."
      }
    ]
  },
  {
    id: "NYJC-2026-P2-Q3",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    stem: "A conical paper cup has base radius $r\\text{ cm}$, height $h\\text{ cm}$, and volume $k\\pi\\text{ cm}^3$ ($k > 0$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that the curved surface area $S$ is given by $S^2 = \\pi^2\\left(r^4 + \\frac{9k^2}{r^2}\\right)$.", type: "self", solution: "$\\frac{1}{3}\\pi r^2 h = k\\pi \\implies h = \\frac{3k}{r^2}$. $S^2 = \\pi^2 r^2(r^2+h^2) = \\pi^2\\left(r^4 + \\frac{9k^2}{r^2}\\right)$." },
      { label: "(b)", marks: 5, prompt: "Using calculus, find $r$ in terms of $k$ that gives the stationary value of $S$. (Verify in the solution whether it is a minimum or maximum.)", type: "auto", mode: "expr", exactRequired: true, vars: { k: [1, 2, 10] }, answer: "(9*(k^2)/2)^(1/6)", placeholder: "Expression in terms of k", solution: "$S\\frac{\\mathrm{d}S}{\\mathrm{d}r} = \\pi^2\\left(2r^3 - \\frac{9k^2}{r^3}\\right) = 0 \\implies r = \\left(\\frac{9k^2}{2}\\right)^{1/6}$.<br>$\\frac{\\mathrm{d}^2S}{\\mathrm{d}r^2} = \\frac{\\pi^2}{S}\\left(6r^2 + \\frac{27k^2}{r^4}\\right) > 0$, so $S$ is a minimum." },
      {
        label: "(c)", marks: 2, prompt: "Given $k = 37$, sketch the graph of $S$ against $r$ and find the stationary value of $S$ (in $\\text{cm}^2$).",
        type: "auto", mode: "number", answer: "sqrt(3)*pi*(6160.5)^(1/3)", placeholder: "3 s.f.",
        solutionSvg: `<svg viewBox="0 0 220 135" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="115" x2="205" y2="115" stroke-width="1.3"/><line x1="35" y1="125" x2="35" y2="12" stroke-width="1.3"/><path d="M 42 18 Q 52 105 95 96 T 195 45" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="42" y="25" stroke="none" font-size="10">r=0</text><text x="195" y="128" stroke="none" font-style="italic">r</text><text x="26" y="18" stroke="none" font-style="italic">S</text></svg>`,
        solution: "At $r = \\left(\\frac{9(37^2)}{2}\\right)^{1/6}$, minimum $S = 99.8\\text{ cm}^2$ (3 s.f.)."
      }
    ]
  },
  {
    id: "NYJC-2026-P2-Q4",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Functions", "Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 220 155" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="115" x2="205" y2="115" stroke-width="1.3"/><line x1="75" y1="145" x2="75" y2="12" stroke-width="1.3"/><path d="M 75 40 Q 112 45 145 142" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="113" cy="78" r="2.8" fill="#2c2925"/><text x="68" y="42" text-anchor="end" stroke="none">(0, b)</text><text x="118" y="75" stroke="none">(1, 1)</text><text x="148" y="110" stroke="none">(a, 0)</text></svg>`,
    stem: "Part (a) refers to the graph of $y = \\mathrm{f}(x)$ shown above ($1 < a < b$). Part (b) uses $\\mathrm{g}(x) = \\cos x$ ($0 \\le x \\le \\pi$), $\\mathrm{g}(x) = \\frac{2}{\\pi}x - 3$ ($\\pi < x \\le 2\\pi$), with $\\mathrm{g}(x) = \\mathrm{g}(x + 2\\pi)$.",
    parts: [
      { label: "(a)(i)", marks: 2, prompt: "Sketch the graph of $y = \\mathrm{f}^{-1}(x)$, labelling axial intercepts.", type: "self", solution: "Reflection of $y=\\mathrm{f}(x)$ in $y=x$: passes through $(0, a)$, $(1, 1)$, and $(b, 0)$." },
      { label: "(a)(ii)", marks: 2, prompt: "Sketch the graph of $y = \\frac{1}{\\mathrm{f}(x)}$, labelling intercepts and equations of asymptotes.", type: "self", solution: "Vertical asymptote $x = a$, horizontal asymptote $y = 0$, $y$-intercept $(0, \\frac{1}{b})$, passes through $(1, 1)$." },
      { label: "(b)(i)", marks: 1, prompt: "Find the <strong>exact</strong> value of $\\mathrm{g}\\left(\\frac{7\\pi}{2}\\right) + \\mathrm{g}(5\\pi)$.", type: "auto", mode: "number", exactRequired: true, answer: "-1", placeholder: "Exact integer", solution: "$\\mathrm{g}(\\frac{3\\pi}{2}) + \\mathrm{g}(\\pi) = \\left(\\frac{2}{\\pi}\\cdot\\frac{3\\pi}{2} - 3\\right) + \\cos\\pi = 0 + (-1) = -1$." },
      {
        label: "(b)(ii)-(iii)", marks: 5, prompt: "Sketch $y = \\mathrm{g}(x)$ and $y = |\\mathrm{g}(x)|$ for $0 \\le x \\le 3\\pi$, labelling axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 120" width="265" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="60" x2="265" y2="60" stroke-width="1.3"/><line x1="35" y1="110" x2="35" y2="10" stroke-width="1.3"/><path d="M 35 22 Q 70 60 105 98" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><line x1="105" y1="98" x2="175" y2="22" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 175 22 Q 210 60 245 98" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><text x="28" y="25" text-anchor="end" stroke="none">1</text><text x="105" y="110" text-anchor="middle" stroke="none">π</text><text x="175" y="16" text-anchor="middle" stroke="none">2π</text><text x="245" y="110" text-anchor="middle" stroke="none">3π</text></svg>`,
        solution: "$y=\\mathrm{g}(x)$: cosine wave from $(0,1)$ through $(\\frac{\\pi}{2},0)$ to $(\\pi,-1)$, straight line through $(\\frac{3\\pi}{2},0)$ to $(2\\pi,1)$, cosine wave to $(3\\pi,-1)$. For $|\\mathrm{g}(x)|$, reflect all negative parts above the $x$-axis."
      }
    ]
  },
  {
    id: "NYJC-2026-P2-Q5",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Functions", "Graphs & Transformations"],
    stem: "Function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto x^2 - 6x + 7$, $x \\in \\mathbb{R}$, $x > 3$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Explain how you know $\\mathrm{f}^{-1}$ exists.", type: "self", solution: "Every horizontal line $y = k$ intersects $y = \\mathrm{f}(x)$ at most once ($x > 3$ is strictly increasing), so $\\mathrm{f}$ is 1-1 and $\\mathrm{f}^{-1}$ exists." },
      { label: "(b)", marks: 2, prompt: "Find $\\mathrm{f}^{-1}(x)$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0, 2, 7] }, answer: "3 + sqrt(x+2)", placeholder: "Expression in terms of x", solution: "$y = (x-3)^2 - 2 \\implies x = 3 + \\sqrt{y+2}$ (since $x > 3$). Thus $\\mathrm{f}^{-1}(x) = 3 + \\sqrt{x+2}$." },
      { label: "(c)", marks: 2, prompt: "Function $\\mathrm{g}$ is defined by $\\mathrm{g}: x \\mapsto \\frac{2x+7}{x+3}$, $x \\in \\mathbb{R}$, $x \\ne a$. State $a$ (and note why excluded in solution).", type: "auto", mode: "number", exactRequired: true, answer: "-3", placeholder: "Value of a", solution: "$a = -3$, because $\\mathrm{g}(-3)$ is undefined (denominator becomes zero)." },
      { label: "(d)", marks: 2, prompt: "Describe a pair of transformations that transforms $y = \\mathrm{g}(x)$ onto $y = \\frac{1}{x}$.", type: "self", solution: "$\\mathrm{g}(x) = 2 + \\frac{1}{x+3}$.<br>1. Translate $3$ units in positive $x$-direction.<br>2. Translate $2$ units in negative $y$-direction." },
      { label: "(e)", marks: 1, prompt: "Give a reason why the composite function $\\mathrm{gf}$ exists.", type: "self", solution: "$\\mathrm{R_f} = (-2, \\infty) \\subseteq \\mathbb{R}\\setminus\\{-3\\} = \\mathrm{D_g}$, hence $\\mathrm{gf}$ exists." },
      { label: "(f)", marks: 2, prompt: "Find $\\mathrm{gf}(4)$.", type: "auto", mode: "number", answer: "5/2", placeholder: "Exact or decimal", solution: "$\\mathrm{f}(4) = -1 \\implies \\mathrm{g}(-1) = \\frac{2(-1)+7}{-1+3} = \\frac{5}{2}$." }
    ]
  },

  // ==================== NYJC 2026 PAPER 2: STATISTICS (Q6 - Q11) ====================
  {
    id: "NYJC-2026-P2-Q6",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations & Combinations", "Probability"],
    stem: "An organiser intends to choose $6$ art prints from $8$ Cityscape, $6$ Landscape and $5$ Seascape prints. Later, $9$ gift boxes of distinct sizes ($3$ red, $3$ blue, $3$ yellow) are arranged.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the number of ways $6$ art prints can be selected with at least one from each category and more Cityscape prints than from any other category.", type: "auto", mode: "number", exactRequired: true, answer: "9660", placeholder: "Integer", solution: "Cases: (4C,1L,1S) $= 2100$; (3C,2L,1S) $= 4200$; (3C,1L,2S) $= 3360$. Total $= 9660$." },
      { label: "(b)", marks: 3, prompt: "Find the number of ways to arrange the $9$ gift boxes in a row starting and ending with a red box, no two red boxes adjacent, and the $3$ blue boxes all together.", type: "auto", mode: "number", exactRequired: true, answer: "2592", placeholder: "Integer", solution: "${}^3C_2 \\times 2! \\times 4! \\times 3! \\times {}^3C_1 = 2592$." },
      { label: "(c)", marks: 2, prompt: "The $9$ gift boxes are arranged at random in a circle. Find the probability that no $2$ yellow boxes are next to each other.", type: "auto", mode: "number", answer: "5/14", placeholder: "Exact or 3 s.f.", solution: "$\\frac{(6-1)! \\times {}^6C_3 \\times 3!}{(9-1)!} = \\frac{5}{14} \\approx 0.357$." }
    ]
  },
  {
    id: "NYJC-2026-P2-Q7",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Probability", "Discrete Random Variables"],
    stem: "Aden and Ben each have a bag containing $r$ red discs and $4$ white discs ($r \\ge 2$).",
    parts: [
      { label: "(a)(i)", marks: 1, prompt: "Aden takes $3$ discs without replacement. $A$: 1st disc is white; $B$: total white discs is exactly $1$. Find $\\mathrm{P}(A \\cap B)$ in terms of $r$.", type: "auto", mode: "expr", exactRequired: true, vars: { r: [2, 5, 8] }, answer: "4*r*(r-1)/((r+4)*(r+3)*(r+2))", placeholder: "Expression in r", solution: "$\\mathrm{P}(WRR) = \\frac{4}{r+4}\\cdot\\frac{r}{r+3}\\cdot\\frac{r-1}{r+2} = \\frac{4r(r-1)}{(r+4)(r+3)(r+2)}$." },
      { label: "(a)(ii)", marks: 2, prompt: "Given $A$ and $B$ are independent, show that $r = 8$.", type: "self", solution: "$\\mathrm{P}(A) = \\frac{4}{r+4}$, $\\mathrm{P}(B) = 3\\mathrm{P}(WRR)$. Setting $\\mathrm{P}(A\\cap B) = \\mathrm{P}(A)\\mathrm{P}(B)$ gives $1 = \\frac{12}{r+4} \\implies r = 8$." },
      { label: "(b)", marks: 3, prompt: "Let $r = 8$. Ben draws discs without replacement until a red disc is obtained ($X$ draws). Determine the probability distribution of $X$ in exact form.", type: "self", solution: "<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$\\mathrm{P}(X=x)$</th><td>$2/3$</td><td>$8/33$</td><td>$4/55$</td><td>$8/495$</td><td>$1/495$</td></tr></table></div>" },
      { label: "(c)", marks: 3, prompt: "Both start fresh and draw until a red disc. Given exactly one person takes at most $2$ draws, find the probability Ben gets his first red disc on his $3$rd draw.", type: "auto", mode: "number", answer: "2/5", placeholder: "Exact or decimal", solution: "$\\mathrm{P}(X \\le 2) = \\frac{10}{11}$. $\\mathrm{P}(\\text{exactly 1} \\le 2) = 2(\\frac{10}{11})(\\frac{1}{11}) = \\frac{20}{121}$.<br>Required prob $= \\frac{(4/55)(10/11)}{20/121} = \\frac{2}{5}$." }
    ]
  },
  {
    id: "NYJC-2026-P2-Q8",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Discrete Random Variables", "Binomial Distribution", "Sampling & CLT"],
    stem: "Each cafe customer gets a reward coupon:<div class='q-table-wrap'><table class='q-table'><tr><th>Points ($Y$)</th><td>0</td><td>1</td><td>4</td></tr><tr><th>Probability</th><td>0.4</td><td>$p$</td><td>$0.6-p$</td></tr></table></div>",
    parts: [
      { label: "(a)", marks: 1, prompt: "Given $\\mathrm{E}(Y) = 1.8$, find $p$.", type: "auto", mode: "number", exactRequired: true, answer: "0.2", placeholder: "Value of p", solution: "$0(0.4) + 1(p) + 4(0.6-p) = 1.8 \\implies 2.4 - 3p = 1.8 \\implies p = 0.2$." },
      { label: "(b)", marks: 3, prompt: "A coupon is redeemable if it yields $\\ge 1$ point. Among $10$ independent customers, given at least $3$ have redeemable coupons, find the probability that at most $7$ have redeemable coupons.", type: "auto", mode: "number", answer: "0.83063", placeholder: "3 s.f.", solution: "$X \\sim \\mathrm{B}(10, 0.6)$. $\\frac{\\mathrm{P}(3\\le X\\le 7)}{\\mathrm{P}(X\\ge 3)} = \\frac{0.82042}{0.98771} = 0.831$ (3 s.f.)." },
      { label: "(c)", marks: 2, prompt: "The cafe operates for $80$ days; $X_i$ is the number of redeemable coupons among $10$ customers on day $i$, and $T = \\sum_{i=1}^{80} X_i$. State the mean and variance of $T$.", type: "auto", mode: "multi-field", fields: [{ label: "E(T) =", answer: "480", exactRequired: true }, { label: "Var(T) =", answer: "192", exactRequired: true }], solution: "$\\mathrm{E}(X)=6, \\mathrm{Var}(X)=2.4 \\implies \\mathrm{E}(T) = 480, \\mathrm{Var}(T) = 192$." },
      { label: "(d)", marks: 1, prompt: "$W$ is the average number of redeemable coupons per customer per day. Explain why $W$ is approximately normally distributed.", type: "self", solution: "Since sample size $80$ (or $800$ customers) is large, by Central Limit Theorem, $T$ (and hence $W = T/800$) is approximately normally distributed." },
      { label: "(e)", marks: 3, prompt: "Using (c) and (d), find $\\mathrm{P}(W > 0.63)$.", type: "auto", mode: "number", answer: "0.041632", placeholder: "3 s.f.", solution: "$W \\sim \\mathrm{N}(0.6, 0.0003)$ approx. $\\mathrm{P}(W > 0.63) = 0.0416$ (3 s.f.)." }
    ]
  },
  {
    id: "NYJC-2026-P2-Q9",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "A beverage company claims bottles are filled to mean $500\\text{ ml}$. A random sample of $50$ bottles has sample variance $24.5\\text{ ml}^2$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Find an unbiased estimate of the population variance.", type: "auto", mode: "number", exactRequired: true, answer: "25", placeholder: "Exact value", solution: "$s^2 = \\frac{50}{49}(24.5) = 25$." },
      { label: "(b)", marks: 2, prompt: "Determine the smallest $n$ such that $\\mathrm{P}(|\\bar{X} - 500| > 2) \\le 0.025$ assuming the claim is true.", type: "auto", mode: "number", exactRequired: true, answer: "32", placeholder: "Integer value of n", solution: "By CLT, $\\bar{X} \\sim \\mathrm{N}(500, \\frac{25}{n})$. $\\mathrm{P}(Z > \\frac{2\\sqrt{n}}{5}) \\le 0.0125 \\implies \\frac{2\\sqrt{n}}{5} \\ge 2.2414 \\implies n \\ge 31.399 \\implies n = 32$." },
      { label: "(c)", marks: 2, prompt: "A supervisor selects $50$ bottles from the first batch produced because they are easiest to access. Explain why the conclusion may not be reliable and suggest how he should select.", type: "self", solution: "Not a random sample—it may not be representative of all bottles produced. He should select a random sample across the entire production." },
      { label: "(d)-(e)", marks: 4, prompt: "State hypotheses for testing the claim at $5\\%$ significance level, and find the set of sample means for which the claim is rejected (1 d.p.).", type: "self", solution: "$\\mathrm{H}_0: \\mu = 500$, $\\mathrm{H}_1: \\mu \\ne 500$. Reject if $|z| \\ge 1.95996 \\implies 0 < \\bar{x} \\le 498.6$ or $\\bar{x} \\ge 501.4$." },
      { label: "(f)", marks: 1, prompt: "Another test ($n=40$) has $p$-value $0.0359$. Explain its meaning in context.", type: "self", solution: "Assuming the true population mean volume is $500\\text{ ml}$, the probability of obtaining a sample mean as extreme or more extreme than the observed value from $40$ bottles is $0.0359$ (or $3.59\\%$ is the lowest significance level to reject the claim)." }
    ]
  },
  {
    id: "NYJC-2026-P2-Q10",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Rate of photosynthesis $w$ (units/s) at light intensity $x$ (lumens/$\\text{m}^2$) is recorded:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>300</td><td>900</td><td>1500</td><td>2100</td><td>2700</td></tr><tr><th>$w$</th><td>30.0</td><td>78.0</td><td>97.2</td><td>104.9</td><td>108.0</td></tr></table></div>",
    parts: [
      { label: "(a)-(b)", marks: 2, prompt: "Explain what the scatter diagram suggests about $x$ and $w$, and why $w = a + b\\ln x$ ($a, b > 0$) may not model it well given rate approaches a maximum.", type: "self", solution: "(a) As $x$ increases, $w$ increases at a decreasing rate.<br>(b) $w = a + b\\ln x$ tends to infinity as $x$ grows, contradicting the maximum rate." },
      { label: "(c)", marks: 2, prompt: "Model $\\ln(L-w) = c + dx$. State the value of $r$ when $L = 120$ (and see solution for the range of $r$ for a better fit).", type: "auto", mode: "number", answer: "-0.97836", placeholder: "3 s.f.", solution: "$r = -0.978$ (3 s.f.). A better model has $-1 \\le r < -0.97836$ (or $-1 \\le r < -0.979$)." },
      { label: "(d)-(f)", marks: 5, prompt: "Find the regression equation for $L = 120$, sketch the scatter diagram for $\\ln(120-w)$ vs $x$ with line of best fit, and mark the residuals.", type: "self", solution: "$\\ln(120-w) = 4.58 - 0.000842x$. Scatter plot of $\\ln(120-w)$ vs $x$ slopes downwards linearly from $(300, \\ln 90)$ to $(2700, \\ln 12)$ with vertical residual segments." },
      { label: "(g)", marks: 1, prompt: "A researcher finds $r = -1$ for $\\ln(L-w)$ vs $x$. Deduce the sum of squares of residuals.", type: "auto", mode: "number", exactRequired: true, answer: "0", placeholder: "Exact value", solution: "Since all points lie exactly on the line of best fit, sum of squares of residuals $= 0$." },
      { label: "(h)", marks: 1, prompt: "Rewrite the equation in (d) when light intensity is given in kilolumens/$\\text{m}^2$ ($1\\text{ klm} = 1000\\text{ lm}$).", type: "self", solution: "Replace $x$ with $1000x$: $\\ln(120-w) = 4.58 - 0.842x$." }
    ]
  },
  {
    id: "NYJC-2026-P2-Q11",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Binomial Distribution", "Normal Distribution"],
    stem: "For a randomly selected semiconductor chip, processing speed $S \\sim \\mathrm{N}(4.80, 0.12^2)$ GHz and power $P \\sim \\mathrm{N}(1.50, 0.10^2)$ W independently. Quality score $Q = 20S - 5P$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "A chip is Premium if $Q > 89$. Find the probability a randomly selected chip is Premium.", type: "auto", mode: "number", answer: "0.41919", placeholder: "3 s.f.", solution: "$Q \\sim \\mathrm{N}(88.5, 6.01) \\implies \\mathrm{P}(Q > 89) = 0.419$ (3 s.f.)." },
      { label: "(b)", marks: 1, prompt: "For $20$ chips with mean score $\\bar{Q}$, explain without detailed calculation whether $\\mathrm{P}(\\bar{Q} > 89)$ is $>, =,$ or $< \\mathrm{P}(Q > 89)$.", type: "self", solution: "$\\mathrm{P}(\\bar{Q} > 89) < \\mathrm{P}(Q > 89)$: since $\\mathrm{E}(\\bar{Q}) = \\mathrm{E}(Q) = 88.5$ and $\\mathrm{Var}(\\bar{Q}) < \\mathrm{Var}(Q)$, $89$ (above the mean) becomes more extreme in $z$-score and less likely." },
      { label: "(c)", marks: 2, prompt: "A chip is Premium Plus if $Q > k$. For at most $10\\%$ to be Premium Plus, find the minimum value of $k$ (to 1 d.p.).", type: "auto", mode: "number", dp: 1, answer: "91.7", placeholder: "1 d.p.", solution: "$\\mathrm{P}(Q > k) \\le 0.1 \\implies k \\ge 91.642 \\implies \\text{min } k = 91.7$ (1 d.p.)." },
      { label: "(d)", marks: 2, prompt: "$R = S_1 + S_2 + S_3$ (independent measurements). Find $\\mathrm{P}(R \\ge 14.5)$.", type: "auto", mode: "number", answer: "0.31521", placeholder: "3 s.f.", solution: "$R \\sim \\mathrm{N}(14.4, 0.0432) \\implies \\mathrm{P}(R \\ge 14.5) = 0.315$ (3 s.f.)." },
      { label: "(e)", marks: 4, prompt: "A chip is 'stable' if $Q \\ge 89$ and $R \\ge 14.5$. Out of $20$ independent chips, find the probability that more than $30\\%$ are stable.", type: "auto", mode: "number", answer: "0.011291", placeholder: "3 s.f.", solution: "$\\mathrm{P}(\\text{stable}) = 0.41919 \\times 0.31521 = 0.13213$. $X \\sim \\mathrm{B}(20, 0.13213) \\implies \\mathrm{P}(X > 6) = 1 - \\mathrm{P}(X \\le 6) = 0.0113$ (3 s.f.)." }
    ]
  }
]);