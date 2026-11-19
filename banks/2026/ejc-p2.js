window.registerQuestions([
  // ==================== EJC 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "EJC-2026-P2-Q1", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q1", category: "pure",
    topics: ["Complex Numbers", "Simultaneous Equations"],
    stem: "<em>Do not use a calculator.</em> Complex numbers $z, w$ satisfy $(3+2\\mathrm{i})z - 3w = 3 - 11\\mathrm{i}$ and $(1-\\mathrm{i})z - 6\\mathrm{i}w = 10 + 8\\mathrm{i}$.",
    parts: [
      { label: "(Full) Find z", marks: 2, prompt: "Find $z$.", type: "auto", mode: "complex-list", exactRequired: true, answer: ["-1-i"], placeholder: "Complex number a + bi", solution: "Eliminate $w$: $(5-7\\mathrm{i})z = -12 + 2\\mathrm{i} \\implies z = -1 - \\mathrm{i}$." },
      { label: "(Full) Find w", marks: 2, prompt: "Find $w$.", type: "auto", mode: "complex-list", exactRequired: true, answer: ["-4/3+2*i"], placeholder: "Complex number a + bi", solution: "Sub $z = -1-\\mathrm{i}$ into eq (1): $-3w = 4 - 6\\mathrm{i} \\implies w = -\\frac{4}{3} + 2\\mathrm{i}$." }
    ]
  },
  {
    id: "EJC-2026-P2-Q2", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q2", category: "pure",
    topics: ["Integration by Substitution", "Volumes of Revolution"],
    stem: "Curve $C$ has equation $y = \\frac{\\cos x}{\\sqrt{1+\\sin x}}$ ($0 \\le x \\le \\frac{\\pi}{2}$). $R$ is bounded by $C$, $x$-axis, $x=0$ and $x=\\frac{\\pi}{6}$.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Use $u = 1 + \\sin x$ to find the <strong>exact</strong> area of $R$.", type: "auto", mode: "number", exactRequired: true, answer: "sqrt(6)-2", placeholder: "Exact surd form", solution: "$\\int_1^{3/2} u^{-1/2}\\,\\mathrm{d}u = [2\\sqrt{u}]_1^{3/2} = \\sqrt{6} - 2$." },
      { label: "(b)", marks: 3, prompt: "$S$ is bounded by $C$, $y = \\frac{1}{\\sqrt{2}}$ and $y$-axis. Verify $y = \\frac{1}{\\sqrt{2}}$ at $x = \\frac{\\pi}{6}$ and find volume when $S$ is rotated $2\\pi$ about $x$-axis.", type: "auto", mode: "number", answer: "0.40157", placeholder: "3 s.f.", solution: "$\\pi\\int_0^{\\pi/6}\\left(\\frac{\\cos^2 x}{1+\\sin x} - \\frac{1}{2}\\right)\\mathrm{d}x = 0.402\\text{ units}^3$ (3 s.f.)." }
    ]
  },
  {
    id: "EJC-2026-P2-Q3", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q3", category: "pure",
    topics: ["Rational Functions", "Graph Sketching"],
    stem: "Curve $C$ has equation $y = \\frac{5x^2 + 16x + 18}{x^2 - 4x}$.",
    parts: [
      { label: "(a)-(b)", marks: 6, prompt: "State the equations of the asymptotes, and show algebraically that $y$ cannot lie between two values.", type: "self", solution: "Asymptotes: $y=5, x=0, x=4$. Discriminant $< 0 \\implies 2k^2+25k-13 < 0 \\implies -13 < k < \\frac{1}{2}$." },
      { label: "(c)", marks: 3, prompt: "Sketch $C$, indicating any turning points.", type: "self", solution: "Turning points at $(-2, 0.5)$ (minimum) and $(1, -13)$ (maximum); asymptotes $x=0, x=4, y=5$." }
    ]
  },
  {
    id: "EJC-2026-P2-Q4", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q4", category: "pure",
    topics: ["Vectors", "Scalar & Vector Products"],
    stem: "$A, B$ have position vectors $\\mathbf{a}, \\mathbf{b}$ ($O, A, B$ non-collinear). $C$ is $2\\mathbf{a}+\\mathbf{b}$, $D$ is on $AB$ extended with $AB = BD$.",
    parts: [
      { label: "(a)-(c)", marks: 6, prompt: "Show $\\overrightarrow{OD} = 2\\mathbf{b}-\\mathbf{a}$; given $OC=OD$, show $8\\mathbf{a}\\cdot\\mathbf{b} = 3|\\mathbf{b}|^2 - 3|\\mathbf{a}|^2$; given $|\\mathbf{b}|=2|\\mathbf{a}|$, show $\\cos\\theta = \\frac{9}{16}$.", type: "self", solution: "$|2\\mathbf{a}+\\mathbf{b}|^2 = |2\\mathbf{b}-\\mathbf{a}|^2 \\implies 8\\mathbf{a}\\cdot\\mathbf{b} = 3|\\mathbf{b}|^2-3|\\mathbf{a}|^2$. Sub $|\\mathbf{b}|=2|\\mathbf{a}| \\implies \\cos\\theta = \\frac{9}{16}$." },
      { label: "(d)", marks: 4, prompt: "Given $\\mathbf{a}$ is a unit vector, find the <strong>exact</strong> area of triangle $OAC$.", type: "auto", mode: "number", exactRequired: true, answer: "5*sqrt(7)/16", placeholder: "Exact value", solution: "$\\frac{1}{2}|\\mathbf{a}\\times(2\\mathbf{a}+\\mathbf{b})| = \\frac{1}{2}|\\mathbf{a}||\\mathbf{b}|\\sin\\theta = \\frac{1}{2}(1)(2)\\frac{\\sqrt{175}}{16} = \\frac{5\\sqrt{7}}{16}$." }
    ]
  },
  {
    id: "EJC-2026-P2-Q5", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q5", category: "pure",
    topics: ["Maclaurin Series", "Small Angle Approximations"],
    stem: "Let $x$ be sufficiently small.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Find the series expansion of $\\tan\\left(x - \\frac{\\pi}{3}\\right)$ up to $x^2$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0.05, 0.1] }, answer: "-sqrt(3) + 4*x - 4*sqrt(3)*(x^2)", placeholder: "Polynomial in x", solution: "$\\frac{\\tan x - \\sqrt{3}}{1 + \\sqrt{3}\\tan x} \\approx (x-\\sqrt{3})(1 - \\sqrt{3}x + 3x^2) = -\\sqrt{3} + 4x - 4\\sqrt{3}x^2$." },
      { label: "(b)", marks: 3, prompt: "Hence approximate $\\tan\\left(-\\frac{7\\pi}{24}\\right)$ in the form $a + b\\pi + c\\pi^2$.", type: "auto", mode: "multi-field", fields: [{ label: "a =", answer: "-sqrt(3)", exactRequired: true }, { label: "b =", answer: "1/6", exactRequired: true }, { label: "c =", answer: "-sqrt(3)/144", exactRequired: true }], solution: "Sub $x = \\frac{\\pi}{24}$: $-\\sqrt{3} + \\frac{\\pi}{6} - \\frac{\\sqrt{3}\\pi^2}{144}$." },
      { label: "(c)", marks: 3, prompt: "Find the series expansion of $\\ln\\left|\\sec\\left(x - \\frac{\\pi}{3}\\right)\\right|$ up to $x^2$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0.05, 0.1] }, answer: "ln(2) - sqrt(3)*x + 2*(x^2)", placeholder: "Polynomial in x", solution: "Integrating (a) and using $x=0 \\implies \\ln 2$: $\\ln 2 - \\sqrt{3}x + 2x^2$." }
    ]
  },

  // ==================== EJC 2026 PAPER 2: STATISTICS (Q6 - Q11) ====================
  {
    id: "EJC-2026-P2-Q6", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q6", category: "stats",
    topics: ["Discrete Random Variables", "Expectation & Variance"],
    stem: "A fair tetrahedral die (faces $1,2,3,4$) is rolled twice. $X$ is the absolute difference if different, or common value if same.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find the probability distribution of $X$.", type: "self", solution: "$\\mathrm{P}(X=1)=\\frac{7}{16}, \\mathrm{P}(X=2)=\\frac{5}{16}, \\mathrm{P}(X=3)=\\frac{3}{16}, \\mathrm{P}(X=4)=\\frac{1}{16}$." },
      { label: "(b)", marks: 2, prompt: "Find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.", type: "auto", mode: "multi-field", fields: [{ label: "E(X) =", answer: "1.875" }, { label: "Var(X) =", answer: "0.859375" }], solution: "$\\mathrm{E}(X) = 1.875$, $\\mathrm{Var}(X) = 0.859375$." },
      { label: "(c)", marks: 3, prompt: "Participant plays $3$ times, gets $2$ dollars/pt minus $0.50$ dollars fee ($W$). Find $\\mathrm{E}(W)$ and $\\mathrm{Var}(W)$.", type: "auto", mode: "multi-field", fields: [{ label: "E(W) =", answer: "10.75" }, { label: "Var(W) =", answer: "10.3125" }], solution: "$W = 2(X_1+X_2+X_3)-0.5 \\implies \\mathrm{E}(W) = 10.75$, $\\mathrm{Var}(W) = 10.3125$." }
    ]
  },
  {
    id: "EJC-2026-P2-Q7", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q7", category: "stats",
    topics: ["Permutations & Combinations"],
    stem: "Eugene and Eunice are one set of twins among $5$ sets of twins ($10$ people total).",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find number of row arrangements where everyone stands next to their twin.", type: "auto", mode: "number", exactRequired: true, answer: "3840", placeholder: "Integer", solution: "$5! \\times (2!)^5 = 3840$." },
      { label: "(b)", marks: 3, prompt: "Arranged in $2$ rows ($4$ front, $6$ back): find number of ways if Eugene and Eunice cannot be next to each other in the same row.", type: "auto", mode: "number", exactRequired: true, answer: "2983680", placeholder: "Integer", solution: "$10! - 8 \\times 2! \\times 8! = 2\\,983\\,680$." },
      { label: "(c)", marks: 3, prompt: "Seated at $2$ round tables of $5$ (one black, one white): find number of ways so no one sits at the same table as their twin.", type: "auto", mode: "number", exactRequired: true, answer: "18432", placeholder: "Integer", solution: "$2^5 \\times 4! \\times 4! = 18\\,432$." }
    ]
  },
  {
    id: "EJC-2026-P2-Q8", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q8", category: "stats",
    topics: ["Conditional Probability", "Binomial Distribution"],
    stem: "$65\\%$ sign up for Basic Plan ($76\\%$ continue) and $35\\%$ for Premium Plan ($89\\%$ continue).",
    parts: [
      { label: "(a)(i)", marks: 2, prompt: "Find probability a random new customer continued their subscription.", type: "auto", mode: "number", answer: "0.8055", placeholder: "Exact or 3 s.f.", solution: "$0.65(0.76) + 0.35(0.89) = 0.8055$." },
      { label: "(a)(ii)", marks: 2, prompt: "Given they continued, find probability they chose Premium Plan.", type: "auto", mode: "number", answer: "0.3115/0.8055", placeholder: "3 s.f.", solution: "$\\frac{0.35(0.89)}{0.8055} = 0.387$ (3 s.f.)." },
      { label: "(a)(iii)", marks: 3, prompt: "Out of $5$ continuing customers, find probability at least one signed up for Premium.", type: "auto", mode: "number", answer: "0.91303", placeholder: "3 s.f.", solution: "$1 - (1-0.38672)^5 = 0.913$ (3 s.f.)." },
      { label: "(b)", marks: 1, prompt: "Explain why (a)(ii) $< 0.5$ even though Premium has a higher retention rate.", type: "self", solution: "Basic Plan has a much larger proportion of new customers ($65\\%$), offsetting Premium's higher retention rate." }
    ]
  },
  {
    id: "EJC-2026-P2-Q9", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q9", category: "stats",
    topics: ["Hypothesis Testing", "Unbiased Estimates"],
    stem: "Protein bars claimed mean $= 50\\text{ g}$. Sample of $40$: $\\sum(x-50) = -28$, $\\sum(x-50)^2 = 252.4$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Calculate unbiased estimates of population mean and variance.", type: "auto", mode: "multi-field", fields: [{ label: "Mean =", answer: "49.3" }, { label: "Var =", answer: "388/65" }], solution: "$\\bar{x} = 49.3$, $s^2 = \\frac{388}{65} \\approx 5.97$." },
      { label: "(b)-(c)", marks: 5, prompt: "Test at $5\\%$ level whether mean mass is overstated, and explain how conclusion changes for a 2-tailed test.", type: "self", solution: "(b) $p = 0.0350 < 0.05 \\implies$ overstated. (c) 2-tail $p = 0.0700 > 0.05 \\implies$ do not reject $\\mathrm{H}_0$." },
      { label: "(d)", marks: 3, prompt: "Yoghurt tubs $\\mathrm{N}(500, 8.24)$, sample mean $500.50$. Least $n$ to reject $\\mathrm{H}_0: \\mu=500$ vs $\\mathrm{H}_1: \\mu>500$ at $5\\%$ level.", type: "auto", mode: "number", exactRequired: true, answer: "90", placeholder: "Integer n", solution: "$\\frac{0.50}{\\sqrt{8.24/n}} \\ge 1.6449 \\implies n \\ge 89.18 \\implies n = 90$." },
      { label: "(e)", marks: 1, prompt: "State the meaning of the $p$-value in context.", type: "self", solution: "Probability of obtaining a sample mean $\\ge 500.50\\text{ g}$ assuming the population mean is $500\\text{ g}$." }
    ]
  },
  {
    id: "EJC-2026-P2-Q10", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q10", category: "stats",
    topics: ["Correlation & Regression", "Linearisation"],
    stem: "Used car resale price $P$ (thousand SGD) after $t$ years:<div class='q-table-wrap'><table class='q-table'><tr><th>$t$</th><td>0.5</td><td>1</td><td>2</td><td>5</td><td>8</td><td>12</td><td>15</td><td>18</td></tr><tr><th>$P$</th><td>98</td><td>65.2</td><td>28.5</td><td>14.8</td><td>11.2</td><td>10.4</td><td>10.1</td><td>9</td></tr></table></div>",
    parts: [
      { label: "(a)", marks: 2, prompt: "Draw scatter diagram and explain why $P = at + b$ is not appropriate.", type: "self", solutionSvg: `<svg viewBox="0 0 240 155" width="225" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="35" y1="130" x2="225" y2="130" stroke-width="1.3"/><line x1="40" y1="140" x2="40" y2="12" stroke-width="1.3"/><g stroke="#4ca885" stroke-width="1.6"><path d="M 43 22 L 49 28 M 49 22 L 43 28"/><path d="M 48 54 L 54 60 M 54 54 L 48 60"/><path d="M 58 92 L 64 98 M 64 92 L 58 98"/><path d="M 88 108 L 94 114 M 94 108 L 88 114"/><path d="M 118 112 L 124 118 M 124 112 L 118 118"/><path d="M 158 114 L 164 120 M 164 114 L 158 120"/><path d="M 188 115 L 194 121 M 194 115 L 188 121"/><path d="M 215 117 L 221 123 M 221 117 L 215 123"/></g></svg>`, solution: "$P$ decreases at a decreasing rate as $t$ increases, so a linear model is inappropriate." },
      { label: "(b)(i)", marks: 5, prompt: "Compare (A) $P = a + \\frac{b}{t}$ and (B) $P = c + d\\ln t$. Find $r_A, r_B$ and the better model's constants $a, b$.", type: "auto", mode: "multi-field", fields: [{ label: "r (A) =", answer: "0.991" }, { label: "r (B) =", answer: "-0.926" }, { label: "a =", answer: "6.8065" }, { label: "b =", answer: "47.822" }], solution: "$r_A = 0.991$ ($|r_A| > |r_B| = 0.926$), so Model A is better: $P = 6.81 + \\frac{47.8}{t}$." },
      { label: "(b)(ii)", marks: 2, prompt: "Estimate resale price (in thousand SGD) after $30$ years (and comment on reliability in solution).", type: "auto", mode: "number", answer: "8.40057", placeholder: "3 s.f. (thousand SGD)", solution: "$P = 6.8065 + \\frac{47.822}{30} = 8.40$ (thousand SGD, i.e. $8400.57$ dollars). Unreliable ($t=30$ outside $[0.5, 18]$, extrapolation)." },
      { label: "(c)-(d)", marks: 2, prompt: "Rewrite equation in HKD ($1\\text{ SGD} = 6.13\\text{ HKD}$), and explain if $r$ changes if a $1000$-dollar admin fee is removed.", type: "self", solution: "(c) $Q = 41.7 + \\frac{293}{t}$. (d) Unchanged—translation does not affect linearity/correlation." }
    ]
  },
  {
    id: "EJC-2026-P2-Q11", year: 2026, school: "EJC", paper: "2026 Prelim Paper 2", qNum: "Q11", category: "stats",
    topics: ["Normal Distribution", "Binomial Distribution"],
    stem: "Mango masses $\\sim \\mathrm{N}(0.3, 0.1^2)$ kg. Fruit boxes have $10$ blueberries (unblemished prob $p$) and $2$ mangoes.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find probability $2$ mangoes weigh at least $0.5\\text{ kg}$ in total.", type: "auto", mode: "number", answer: "0.76025", placeholder: "3 s.f.", solution: "$M_1+M_2 \\sim \\mathrm{N}(0.6, 0.02) \\implies \\mathrm{P}(\\ge 0.5) = 0.760$ (3 s.f.)." },
      { label: "(b)-(c)", marks: 3, prompt: "Given $U \\sim \\mathrm{B}(10, p)$ and $\\mathrm{P}(U \\ge 8) = 0.9$, find $p$ (and note why binomial might fail in solution).", type: "auto", mode: "number", answer: "0.88417", placeholder: "3 s.f.", solution: "$\\mathrm{P}(U \\le 7) = 0.1 \\implies p = 0.884$ (3 s.f.). (Binomial fails if bruising is contagious/dependent or $p$ varies.)" },
      { label: "(d)", marks: 2, prompt: "Grade A: mangoes $\\ge 0.6$, blueberries $\\ge 9$. Grade B: not A, mangoes $\\ge 0.5$, blueberries $\\ge 8$. Grade C: rest. Show $\\mathrm{P}(\\text{Grade C}) = 0.316$.", type: "self", solution: "$1 - \\mathrm{P}(M\\ge 0.5)\\mathrm{P}(U\\ge 8) = 1 - 0.76025(0.9) = 0.31578 \\approx 0.316$." },
      { label: "(e)", marks: 3, prompt: "Find probability a Grade C box has at least $8$ unblemished blueberries.", type: "auto", mode: "number", answer: "0.68329", placeholder: "3 s.f.", solution: "$\\frac{\\mathrm{P}(M<0.5)\\mathrm{P}(U\\ge 8)}{0.315775} = \\frac{0.23975(0.9)}{0.315775} = 0.683$ (3 s.f.)." },
      { label: "(f)", marks: 3, prompt: "Prices: A ($12$), B ($10$), C ($6$) dollars. Find probability $5$ boxes total less than $37$ dollars.", type: "auto", mode: "number", answers: ["0.037155", "0.037252"], placeholder: "3 s.f.", solution: "Need at least $4$ C's: $\\mathrm{P}(X \\ge 4)$ for $X\\sim\\mathrm{B}(5, 0.31578) = 0.0372$ (or $0.0373$)." },
      { label: "(g)", marks: 2, prompt: "Grade A amended to 'each mango $\\ge 0.3\\text{ kg}$'. How does Grade A percentage change?", type: "self", solution: "Decreases, since both mangoes $\\ge 0.3\\text{ kg}$ is a stricter subset of their sum $\\ge 0.6\\text{ kg}$." }
    ]
  }
]);