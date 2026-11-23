window.registerQuestions([
  // ==================== SAJC 2026 PAPER 2: PURE MATH (Q1 - Q4) ====================
  {
    id: "SAJC-2026-P2-Q1", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q1", category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "It is given that $y = \\frac{1}{\\sqrt{1-\\sin 2x}}$, where $0 \\le x < \\frac{\\pi}{4}$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y^3\\cos 2x$, and hence show that $\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 2y^4 - y^2$.", type: "self", solution: "$y^2(1-\\sin 2x)=1 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = y^3\\cos 2x$.<br>$\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = y^6(1-\\sin^2 2x) = y^4(1+\\sin 2x) = y^4(2 - \\frac{1}{y^2}) = 2y^4 - y^2$." },
      { label: "(b)", marks: 3, prompt: "By differentiating the second result in (a), find the Maclaurin series for $y$ up to the term in $x^3$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0.1, 0.2] }, answer: "1 + x + 3/2*x^2 + 11/6*x^3", placeholder: "Exact polynomial in x", solution: "$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 4y^3 - y$, $\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} = (12y^2-1)\\frac{\\mathrm{d}y}{\\mathrm{d}x}$.<br>At $x=0$: $y=1, y'=1, y''=3, y'''=11 \\implies 1 + x + \\frac{3}{2}x^2 + \\frac{11}{6}x^3$." },
      { label: "(c)", marks: 2, prompt: "Deduce the Maclaurin series for $\\frac{\\mathrm{e}^{x+2}}{\\sqrt{1-\\sin 2x}}$ up to the term in $x^2$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0.1, 0.2] }, answer: "(e^2)*(1 + 2*x + 3*x^2)", placeholder: "Exact expression in x and e", solution: "$\\mathrm{e}^2(1+x+\\frac{x^2}{2})(1+x+\\frac{3}{2}x^2) = \\mathrm{e}^2(1 + 2x + 3x^2)$." },
      { label: "(d)", marks: 1, prompt: "Hence find an approximate value of $\\int_0^{0.1} \\frac{\\mathrm{e}^{x+2}}{\\sqrt{1-\\sin 2x}}\\,\\mathrm{d}x$ to <strong>4 decimal places</strong>.", type: "auto", mode: "number", dp: 4, answer: "0.8202", placeholder: "4 d.p.", solution: "$\\mathrm{e}^2\\int_0^{0.1}(1+2x+3x^2)\\,\\mathrm{d}x = \\mathrm{e}^2[x+x^2+x^3]_0^{0.1} = 0.8202$ (4 d.p.)." }
    ]
  },
  {
    id: "SAJC-2026-P2-Q2", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q2", category: "pure",
    topics: ["Sequences & Series"],
    stem: "Jane's 1st year salary is $\\$k$. Scheme A gives a fixed annual increment of $35\\%$ of her 1st year salary; Scheme B gives an annual increment of $r\\%$ of her previous year's salary.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that under Scheme A, her total salary in the first $n$ years is $\\$\\frac{nk(7n+33)}{40}$.", type: "self", solution: "$\\frac{n}{2}[2k + (n-1)(0.35k)] = \\frac{nk}{2}(0.35n + 1.65) = \\frac{nk(7n+33)}{40}$." },
      { label: "(b)", marks: 4, prompt: "Under Scheme B, her 5th year salary is $\\$279\\,841$, and total salary from 2nd to 5th year inclusive is $\\$918\\,781$. Find the value of $r$.", type: "auto", mode: "number", exactRequired: true, answer: "15", placeholder: "Value of r", solution: "Let $x = 1 + \\frac{r}{100}$. Dividing total (2nd–5th) by 5th: $\\frac{1}{x^3}+\\frac{1}{x^2}+\\frac{1}{x}+1 = \\frac{918781}{279841} \\implies x = \\frac{23}{20} \\implies r = 15$." },
      { label: "(c)", marks: 3, prompt: "Hence find the least number of years Jane must work for Scheme B's total salary to exceed Scheme A's.", type: "auto", mode: "number", exactRequired: true, answer: "17", placeholder: "Least integer n", solution: "$\\frac{1.15^n-1}{0.15} > \\frac{n(7n+33)}{40}$. From GC: $n=16 \\to 55.7 < 58$, $n=17 \\to 65.1 > 64.6$. Least $n = 17$." }
    ]
  },
  {
    id: "SAJC-2026-P2-Q3", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q3", category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "Curve $C$ has equation $y = ax + \\frac{b}{x-2}$, where $a, b \\in \\mathbb{R}$ and $x \\ne 2$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find a condition on $a$ and $b$ for $C$ to have two stationary points.", type: "self", solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = a - \\frac{b}{(x-2)^2} = 0 \\implies x = 2 \\pm \\sqrt{\\frac{b}{a}}$. Requires $\\frac{b}{a} > 0$, i.e. $ab > 0$." },
      { label: "(b)", marks: 2, prompt: "Given $b < a < 0$, explain why $C$ does not intersect the $x$-axis.", type: "self", solution: "$ax + \\frac{b}{x-2} = 0 \\implies ax^2 - 2ax + b = 0$. Discriminant $= 4a(a-b) < 0$ when $b < a < 0$." },
      { label: "(c)", marks: 3, prompt: "Sketch $C$ (with $b < a < 0$), stating asymptotes and axial intercepts.", type: "self",
        solutionSvg: `<svg viewBox="0 0 240 165" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="100" x2="225" y2="100" stroke-width="1.3"/><line x1="85" y1="155" x2="85" y2="12" stroke-width="1.3"/><line x1="120" y1="12" x2="120" y2="155" stroke-dasharray="4,3" stroke-width="1.1"/><text x="124" y="152" stroke="none">x = 2</text><line x1="25" y1="32" x2="210" y2="150" stroke-dasharray="4,3" stroke-width="1.1"/><text x="30" y="25" stroke="none">y = ax</text><path d="M 32 32 Q 72 68 85 78 Q 108 92 116 20" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 124 150 Q 132 108 152 115 Q 175 124 205 144" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="80" y="88" text-anchor="end" stroke="none">(0, −b/2)</text></svg>`,
        solution: "Asymptotes $x = 2$ and $y = ax$; $y$-intercept $(0, -\\frac{b}{2})$; no $x$-intercepts." },
      { label: "(d)", marks: 3, prompt: "Asymptotes meet at $P$. Find $P$, show $P$ lies on $y = mx + 2a - 2m$ for all $m$, and state the range of $m$ in terms of $a$ for which $L$ does not intersect $C$.", type: "self", solution: "$P(2, 2a)$ lies on $L$ since $2m + 2a - 2m = 2a$. Since $a < 0$, $L$ does not intersect $C$ when $m \\ge a$." }
    ]
  },
  {
    id: "SAJC-2026-P2-Q4", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q4", category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "Curve $C$ has parametric equations $x = a\\cos^3 t$, $y = a\\sin^2 t$ for $0 \\le t \\le \\pi$ ($a > 0$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "Sketch $C$.", type: "self",
        solutionSvg: `<svg viewBox="0 0 240 130" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="100" x2="225" y2="100" stroke-width="1.3"/><line x1="120" y1="120" x2="120" y2="12" stroke-width="1.3"/><path d="M 45 100 Q 108 92 120 28 Q 132 92 195 100" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="45" y="115" text-anchor="middle" stroke="none">(−a, 0)</text><text x="195" y="115" text-anchor="middle" stroke="none">(a, 0)</text><text x="114" y="28" text-anchor="end" stroke="none">(0, a)</text></svg>`,
        solution: "Cusp at $(0, a)$ curving down to $(-a, 0)$ and $(a, 0)$." },
      { label: "(b)", marks: 1, prompt: "Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $t$.", type: "auto", mode: "expr", exactRequired: true, vars: { t: [0.5, 1.0] }, answer: "-2/(3*cos(t))", placeholder: "Expression in terms of t", solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2a\\sin t\\cos t}{-3a\\cos^2 t\\sin t} = -\\frac{2}{3\\cos t}$." },
      { label: "(c)", marks: 4, prompt: "Tangent at $P$ is $y = \\frac{5}{6}a - \\frac{2\\sqrt{2}}{3}x$. Find exact coordinates of $P$ and equation of the normal at $P$.", type: "self", solution: "$-\\frac{2}{3\\cos t} = -\\frac{2\\sqrt{2}}{3} \\implies t = \\frac{\\pi}{4}$.<br>$P\\left(\\frac{a\\sqrt{2}}{4}, \\frac{a}{2}\\right)$. Normal: $y = \\frac{3\\sqrt{2}}{4}x + \\frac{1}{8}a$." },
      { label: "(d)", marks: 4, prompt: "The tangent and normal at $P$ meet the $x$-axis at $Q$ and $R$ respectively. Find the <strong>exact</strong> area of $\\triangle PQR$ in terms of $a$.", type: "auto", mode: "expr", exactRequired: true, vars: { a: [2, 3] }, answer: "17*sqrt(2)/96*(a^2)", placeholder: "Exact expression in terms of a", solution: "$Q\\left(\\frac{5\\sqrt{2}}{8}a, 0\\right)$, $R\\left(-\\frac{\\sqrt{2}}{12}a, 0\\right)$.<br>Area $= \\frac{1}{2}\\left(\\frac{a}{2}\\right)\\left(\\frac{17\\sqrt{2}}{24}a\\right) = \\frac{17\\sqrt{2}}{96}a^2$." }
    ]
  },

  // ==================== SAJC 2026 PAPER 2: STATISTICS (Q5 - Q11) ====================
  {
    id: "SAJC-2026-P2-Q5", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q5", category: "stats",
    topics: ["Probability"],
    stem: "Events $A, B, C$ satisfy $\\mathrm{P}(C) = \\frac{1}{5}$, $\\mathrm{P}(A\\cap B) = \\frac{1}{10}$, $\\mathrm{P}(A'\\cap B'\\cap C') = \\frac{2}{5}$. $B$ and $C$ are independent; $A$ and $C$ are mutually exclusive.",
    parts: [
      {
        label: "(a)", marks: 4,
        prompt: "Find the maximum and minimum values of $\\mathrm{P}(B \\cap C)$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "Max =", answer: "1/10" }, { label: "Min =", answer: "1/40" }],
        solutionSvg: `<svg viewBox="0 0 260 135" width="245" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><rect x="6" y="6" width="248" height="123" rx="6" fill="#fff" stroke-width="1.1"/><ellipse cx="62" cy="68" rx="46" ry="38" fill="none" stroke-width="1.2"/><ellipse cx="130" cy="68" rx="48" ry="44" fill="none" stroke-width="1.2"/><ellipse cx="195" cy="68" rx="46" ry="38" fill="none" stroke-width="1.2"/><text x="38" y="25" stroke="none" font-weight="bold">C</text><text x="130" y="19" text-anchor="middle" stroke="none" font-weight="bold">B</text><text x="218" y="25" stroke="none" font-weight="bold">A</text><text x="44" y="72" text-anchor="middle" stroke="none">1/5−x/5</text><text x="95" y="72" text-anchor="middle" stroke="none">x/5</text><text x="132" y="65" text-anchor="middle" stroke="none">4x/5−1/10</text><text x="166" y="72" text-anchor="middle" stroke="none">1/10</text><text x="208" y="72" text-anchor="middle" stroke="none">2/5−4x/5</text><text x="234" y="120" text-anchor="middle" stroke="none">2/5</text></svg>`,
        solution: "Let $x = \\mathrm{P}(B)$. All Venn regions $\\ge 0$ give $\\frac{1}{8} \\le x \\le \\frac{1}{2}$.<br>Thus $\\mathrm{P}(B\\cap C) = \\frac{x}{5}$ has Max $= \\frac{1}{10}$ and Min $= \\frac{1}{40}$."
      }
    ]
  },
  {
    id: "SAJC-2026-P2-Q6", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q6", category: "stats",
    topics: ["Permutations & Combinations"],
    stem: "In musical chairs, $3$ girls and $4$ boys walk around a round table with $6$ seats. When music stops, only $6$ people are seated.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Find the number of different seating arrangements if there are no restrictions.", type: "auto", mode: "number", exactRequired: true, answer: "840", placeholder: "Integer", solution: "$\\binom{7}{6} \\times (6-1)! = 840$." },
      { label: "(b)", marks: 2, prompt: "Find the number of arrangements if $2$ particular girls are seated separately.", type: "auto", mode: "number", exactRequired: true, answer: "360", placeholder: "Integer", solution: "$\\binom{5}{4} \\times (4-1)! \\times \\binom{4}{2} \\times 2! = 360$." },
      { label: "(c)", marks: 3, prompt: "Find the number of arrangements if boys who are seated are together.", type: "auto", mode: "number", exactRequired: true, answer: "288", placeholder: "Integer", solution: "Case 1 (3G, 3B): $(4-1)!\\binom{4}{3}3! = 144$. Case 2 (2G, 4B): $(3-1)!\\binom{3}{2}4! = 144$. Total $= 288$." }
    ]
  },
  {
    id: "SAJC-2026-P2-Q7", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q7", category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "In an online game, $p\\%$ of summons result in a hero.",
    parts: [
      { label: "(a)", marks: 1, prompt: "State, in context, the assumption needed for the number of heroes out of $n$ summons to be well-modelled by a binomial distribution.", type: "self", solution: "Whether a summon results in a hero is independent of whether any other summon results in a hero." },
      { label: "(b)", marks: 1, prompt: "The probability of $1$ hero is $6$ times the probability of $0$ heroes. Write an equation satisfied by $n$ and $p$.", type: "self", solution: "$n\\left(\\frac{p}{100}\\right)\\left(1-\\frac{p}{100}\\right)^{n-1} = 6\\left(1-\\frac{p}{100}\\right)^n \\implies np = 600 - 6p$." },
      { label: "(c)", marks: 2, prompt: "Given the mean number of heroes obtained is $4.8$, find $p$.", type: "auto", mode: "number", exactRequired: true, answer: "20", placeholder: "Value of p", solution: "$n\\left(\\frac{p}{100}\\right) = 4.8 = 6\\left(1-\\frac{p}{100}\\right) \\implies p = 20$." },
      { label: "(d)", marks: 2, prompt: "Using $p = 20$, find the smallest number of summons so that $\\mathrm{P}(\\text{at least 1 hero}) > 0.99$.", type: "auto", mode: "number", exactRequired: true, answer: "21", placeholder: "Integer", solution: "$1 - 0.8^m > 0.99 \\implies m > 20.63 \\implies m = 21$." },
      { label: "(e)", marks: 3, prompt: "A bundle has $12$ summons; a player buys $5$ bundles. A bundle is 'Elite' if it has $>3$ heroes. Given at least one bundle is Elite, find the probability that exactly two are Elite.", type: "auto", mode: "number", answer: "0.30982", placeholder: "3 s.f.", solution: "$Y\\sim\\mathrm{B}(12,0.2) \\implies \\mathrm{P}(\\text{Elite})=0.20543$. $W\\sim\\mathrm{B}(5,0.20543) \\implies \\frac{\\mathrm{P}(W=2)}{1-\\mathrm{P}(W=0)} = 0.310$ (3 s.f.)." }
    ]
  },
  {
    id: "SAJC-2026-P2-Q8", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q8", category: "stats",
    topics: ["Discrete Random Variables", "Sampling & CLT"],
    stem: "A discrete random variable $X$ takes values $1, 2, 3$ with probabilities $p, q, r$. Two independent observations are taken and $M = \\max(X_1, X_2)$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that $\\mathrm{P}(M=2) = q(2p+q)$.", type: "self", solution: "$\\mathrm{P}(1,2)+\\mathrm{P}(2,1)+\\mathrm{P}(2,2) = pq+qp+q^2 = q(2p+q)$." },
      {
        label: "(b)", marks: 2, prompt: "Given $\\mathrm{P}(M=1) = 0.09$ and $\\mathrm{P}(M=2) = 0.55$, find exact $p, q, r$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "p =", answer: "0.3", exactRequired: true }, { label: "q =", answer: "0.5", exactRequired: true }, { label: "r =", answer: "0.2", exactRequired: true }],
        solution: "$p^2=0.09 \\implies p=0.3$; $0.6q+q^2=0.55 \\implies q=0.5$; $r=0.2$."
      },
      {
        label: "(c)", marks: 2, prompt: "Hence find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "E(X) =", answer: "1.9" }, { label: "Var(X) =", answer: "0.49" }],
        solution: "$\\mathrm{E}(X) = 1.9$, $\\mathrm{Var}(X) = 0.49$."
      },
      { label: "(d)", marks: 2, prompt: "Find the probability that the sum of $100$ independent observations of $X$ is greater than $197$.", type: "auto", mode: "number", answer: "0.15865525", placeholder: "Exact or 3 s.f.", solution: "By CLT, $T \\sim \\mathrm{N}(190, 49) \\implies \\mathrm{P}(T > 197) = 0.159$ (3 s.f.)." }
    ]
  },
  {
    id: "SAJC-2026-P2-Q9", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q9", category: "stats",
    topics: ["Normal Distribution", "Sampling & CLT"],
    stem: "Masses of D13 and MSW durians follow independent normal distributions:<div class='q-table-wrap'><table class='q-table'><tr><th>Type</th><th>Mean (g)</th><th>SD (g)</th></tr><tr><td>D13</td><td>250</td><td>10</td></tr><tr><td>MSW</td><td>550</td><td>20</td></tr></table></div>",
    parts: [
      { label: "(a)", marks: 1, prompt: "The manager collected a sample of $50$ durians of each type from the earliest delivery available. Explain why the sample is non-random.", type: "self", solution: "Not every durian delivered in the day has an equal chance of being selected; durians from later deliveries have zero chance." },
      { label: "(b)", marks: 2, prompt: "Find the probability that the mass of a randomly chosen D13 durian is within $15\\text{ g}$ of the mean.", type: "auto", mode: "number", answer: "0.866386", placeholder: "3 s.f.", solution: "$\\mathrm{P}(235 < X < 265) = 0.866$ (3 s.f.)." },
      { label: "(c)", marks: 4, prompt: "The probability that the mean mass of $5$ D13 and $3$ MSW durians is more than $k\\text{ g}$ is $0.9$. Find $k$ to <strong>1 decimal place</strong>.", type: "auto", mode: "number", dp: 1, answer: "355.9", placeholder: "1 d.p.", solution: "$T = \\frac{\\sum X_i + \\sum Y_j}{8} \\sim \\mathrm{N}(362.5, 26.5625)$. $\\mathrm{P}(T > k) = 0.9 \\implies k = 355.9$." },
      { label: "(d)", marks: 3, prompt: "Removing husk reduces MSW mass by $60\\%$. Boxes hold $4$ dehusked MSW durians (negligible box mass). Find the probability a box weighs at least $850\\text{ g}$.", type: "auto", mode: "number", answer: "0.96960", placeholder: "3 s.f.", solution: "$A = 0.4(Y_1+\\dots+Y_4) \\sim \\mathrm{N}(880, 256) \\implies \\mathrm{P}(A \\ge 850) = 0.970$ (3 s.f.)." },
      { label: "(e)", marks: 2, prompt: "A customer buys $6$ such boxes. Find the probability that exactly $2$ boxes weigh at most $850\\text{ g}$ each and exactly $1$ box weighs at least $880\\text{ g}$.", type: "auto", mode: "number", answer: "0.0028714", placeholder: "3 s.f.", solution: "$\\frac{6!}{2!3!} (0.030396)^2 (0.46960)^3 (0.5) = 0.00287$ (3 s.f.)." }
    ]
  },
  {
    id: "SAJC-2026-P2-Q10", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q10", category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Hours used ($x$) and remaining battery capacity ($y\\%$) are recorded:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td><td>12</td></tr><tr><th>$y$</th><td>92</td><td>81</td><td>73</td><td>65</td><td>60</td><td>54</td></tr></table></div>",
    parts: [
      { label: "(a)", marks: 1, prompt: "Draw a scatter diagram of the data.", type: "self", solution: "Points curve gently downwards from $(2, 92)$ to $(12, 54)$." },
      { label: "(b)", marks: 1, prompt: "Find the least squares regression line $y = a + bx$ (3 s.f.).", type: "auto", mode: "multi-field", fields: [{ label: "a =", answer: "96.933", placeholder: "3 s.f." }, { label: "b =", answer: "-3.7286", placeholder: "3 s.f." }], solution: "$y = 96.9 - 3.73x$." },
      { label: "(c)", marks: 2, prompt: "$u = 60x$ and $v = 1 - 0.01y$. Given $r_{xy} = -0.991$, find $r_{uv}$ and explain why.", type: "auto", mode: "number", answer: "0.991", placeholder: "Value of r", solution: "$u=60x$ is positive scaling (no effect); $v=1-0.01y$ has negative scaling which flips the sign. Thus $r_{uv} = 0.991$." },
      { label: "(d)(i)", marks: 1, prompt: "For $y = a + bx$, calculate the sum of the squares of the residuals.", type: "auto", mode: "number", answer: "17.7", placeholder: "3 s.f.", solution: "$\\sum e_i^2 = 17.7$ (3 s.f.)." },
      { label: "(d)(ii)", marks: 1, prompt: "Explain why sum of squares of residuals rather than sum of residuals is used.", type: "self", solution: "Positive and negative residuals would cancel out if summed directly; squaring makes all terms non-negative." },
      { label: "(e)-(f)", marks: 4, prompt: "For $y = A\\mathrm{e}^{Bx}$, find the regression equation of $\\ln y$ on $x$ and the correlation coefficient $r$ between $x$ and $\\ln y$. Which model is better?", type: "auto", mode: "number", answer: "-0.99812", placeholder: "r between x and ln y", solution: "$\\ln y = -0.0526x + 4.61$, $r = -0.998$. Since $|-0.998| > |-0.991|$, $y = A\\mathrm{e}^{Bx}$ is better." }
    ]
  },
  {
    id: "SAJC-2026-P2-Q11", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 2", qNum: "Q11", category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "A bubble tea chain claims mean sugar content is $35\\text{ g}$. A nutritionist suspects the chain is understating the mean $\\mu\\text{ g}$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Explain why a one-tailed test is more appropriate than a two-tailed test.", type: "self", solution: "The nutritionist specifically suspects the mean is higher than $35\\text{ g}$ (directional), not merely different." },
      { label: "(b)", marks: 2, prompt: "For $n=40$, $\\sum(x-30) = 308$ and sample variance is $66.465$. Calculate unbiased estimates of $\\mu$ and $\\sigma^2$.", type: "auto", mode: "multi-field", fields: [{ label: "Mean =", answer: "37.7" }, { label: "Var =", answer: "4431/65" }], solution: "$\\bar{x} = \\frac{308}{40}+30 = 37.7$, $s^2 = \\frac{40}{39}(66.465) = 68.2$ (3 s.f.)." },
      { label: "(c)", marks: 4, prompt: "Test at $5\\%$ significance level whether the suspicion is justified, and state whether any assumption about sugar content is needed.", type: "self", solution: "$\\mathrm{H}_0: \\mu=35, \\mathrm{H}_1: \\mu>35$. By CLT, $p = 0.0193 < 0.05 \\implies$ reject $\\mathrm{H}_0$ (justified). No normality assumption needed since $n=40$ is large (CLT applies)." },
      { label: "(d)-(e)", marks: 4, prompt: "Another sample of $50$ cups has $\\sum y = 1870.75$ and unbiased variance $k^2$. Find the test statistic in terms of $k$ and the range of $k^2$ (2 d.p.) for which suspicion is justified at $5\\%$ level.", type: "self", solution: "$\\bar{y}=37.415 \\implies z = \\frac{17.077}{k} \\ge 1.6449 \\implies k \\le 10.381 \\implies 0 < k^2 \\le 107.77$." }
    ]
  }
]);