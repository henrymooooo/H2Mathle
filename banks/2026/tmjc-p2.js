window.registerQuestions([
  // ==================== TMJC 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "TMJC-2026-P2-Q1",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities"],
    stem: "Consider $y = |x - a|$ and $y = (x + 1)^2$, where $a > 1$.",
    parts: [
      {
        label: "(a)", marks: 3, prompt: "On the same diagram, sketch $y = |x-a|$ and $y = (x+1)^2$, showing clearly all axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 165" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="130" x2="225" y2="130" stroke-width="1.3"/><line x1="95" y1="155" x2="95" y2="12" stroke-width="1.3"/><path d="M 35 16 Q 68 130 72 130 Q 82 128 125 22" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><polyline points="35,48 145,130 215,78" fill="none" stroke="#e0726e" stroke-width="1.8"/><text x="72" y="144" text-anchor="middle" stroke="none">−1</text><text x="145" y="144" text-anchor="middle" stroke="none" font-style="italic">a</text><text x="90" y="96" text-anchor="end" stroke="none" font-style="italic">a</text><text x="90" y="114" text-anchor="end" stroke="none">1</text></svg>`,
        solution: "$y=(x+1)^2$ touches $(-1, 0)$ and crosses $(0, 1)$. $y=|x-a|$ touches $(a, 0)$ and crosses $(0, a)$ above $(0, 1)$."
      },
      { label: "(b)", marks: 3, prompt: "Hence solve $(x+1)^2 > |x-3|$ in exact form.", type: "self", solution: "Intersection occurs for $x < 3$: $(x+1)^2 = -(x-3) \\implies x^2 + 3x - 2 = 0 \\implies x = \\frac{-3\\pm\\sqrt{17}}{2}$.<br>From graph: $x < \\frac{-3-\\sqrt{17}}{2}$ or $x > \\frac{-3+\\sqrt{17}}{2}$." }
    ]
  },
  {
    id: "TMJC-2026-P2-Q2",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Vectors"],
    diagramSvg: `<svg viewBox="0 0 220 175" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polygon points="40,150 180,150 165,25" fill="none" stroke-width="1.5"/><line x1="180" y1="150" x2="90" y2="100" stroke="#4a8fe7" stroke-width="1.4"/><line x1="165" y1="25" x2="124" y2="150" stroke="#4a8fe7" stroke-width="1.4"/><text x="32" y="162" stroke="none" font-style="italic">O</text><text x="184" y="162" stroke="none" font-style="italic">A</text><text x="168" y="22" stroke="none" font-style="italic">B</text><text x="122" y="164" stroke="none" font-style="italic">C</text><text x="80" y="96" stroke="none" font-style="italic">D</text><text x="142" y="114" stroke="none" font-style="italic">E</text></svg>`,
    stem: "$A$ and $B$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$. $C$ lies on $OA$ with $OC = kOA$ ($0<k<1$), and $D$ lies on $OB$ with $5OD = 2OB$. Lines $AD$ and $BC$ intersect at $E$.",
    parts: [
      { label: "(a)-(b)", marks: 6, prompt: "Show line $AD$ is $\\mathbf{r} = \\mathbf{a} + \\lambda\\left(\\frac{2}{5}\\mathbf{b}-\\mathbf{a}\\right)$, find line $BC$ in terms of $k$, and find $\\overrightarrow{OE}$ in terms of $\\mathbf{a}, \\mathbf{b}, k$.", type: "self", solution: "$BC: \\mathbf{r} = \\mathbf{b} + \\mu(k\\mathbf{a}-\\mathbf{b})$. Equating gives $\\mu = \\frac{3}{5-2k} \\implies \\overrightarrow{OE} = \\frac{1}{5-2k}[3k\\mathbf{a} + (2-2k)\\mathbf{b}]$." },
      { label: "(c)", marks: 2, prompt: "Area of triangle $OEB$ is $\\mathrm{f}(k)|\\mathbf{a}\\times\\mathbf{b}|$. Find $\\mathrm{f}(k)$.", type: "auto", mode: "expr", exactRequired: true, vars: { k: [0.2, 0.5, 0.8] }, answer: "3*k/(2*(5-2*k))", placeholder: "Expression in terms of k", solution: "$\\frac{1}{2}|\\overrightarrow{OE}\\times\\mathbf{b}| = \\frac{3k}{2(5-2k)}|\\mathbf{a}\\times\\mathbf{b}|$, so $\\mathrm{f}(k) = \\frac{3k}{2(5-2k)}$." },
      { label: "(d)", marks: 1, prompt: "Give the geometrical interpretation of $\\lim_{k \\to 1}[\\mathrm{f}(k)|\\mathbf{a}\\times\\mathbf{b}|]$.", type: "self", solution: "As $k$ approaches $1$, $E$ approaches $A$, so the limit equals $\\frac{1}{2}|\\mathbf{a}\\times\\mathbf{b}|$, the area of triangle $OAB$." }
    ]
  },
  {
    id: "TMJC-2026-P2-Q3",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 220 185" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polygon points="65,148 115,148 140,130 115,112 65,112 40,130" fill="none" stroke-width="1.4"/><line x1="90" y1="22" x2="40" y2="130" stroke-width="1.4"/><line x1="90" y1="22" x2="65" y2="148" stroke-width="1.4"/><line x1="90" y1="22" x2="115" y2="148" stroke-width="1.4"/><line x1="90" y1="22" x2="140" y2="130" stroke-width="1.4"/><line x1="90" y1="22" x2="115" y2="112" stroke-dasharray="3,3" stroke-width="1.1"/><line x1="90" y1="22" x2="65" y2="112" stroke-dasharray="3,3" stroke-width="1.1"/><line x1="168" y1="22" x2="168" y2="130" stroke-width="1.2"/><text x="175" y="78" stroke="none" font-style="italic">h <tspan font-style="normal">m</tspan></text><text x="90" y="168" text-anchor="middle" stroke="none" font-style="italic">x <tspan font-style="normal">m</tspan></text></svg>`,
    stem: "A right pyramid tentage has a regular hexagonal base (side $x\\text{ m}$) and height $h\\text{ m}$, with interior volume $\\frac{75\\sqrt{3}}{2}\\text{ m}^3$. $S\\text{ m}^2$ is the total area of the six triangular surfaces.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Show that $S = \\sqrt{\\frac{27x^4}{4} + \\frac{50625}{x^2}}$.", type: "self", solution: "Base area $= 6(\\frac{1}{2}x^2\\sin 60°) = \\frac{3\\sqrt{3}}{2}x^2 \\implies h = \\frac{75}{x^2}$. Slant height $l = \\sqrt{\\frac{3x^2}{4}+h^2}$, so $S = 6(\\frac{1}{2}xl) = \\sqrt{\\frac{27x^4}{4} + \\frac{50625}{x^2}}$." },
      { label: "(b)", marks: 4, prompt: "Using differentiation, calculate the value of $x$ for minimum $S$ and the minimum value of $S$.", type: "auto", mode: "multi-field", fields: [{ label: "x (m) =", answer: "3750^(1/6)", placeholder: "3 s.f." }, { label: "Min S (m²) =", answer: "69.913", placeholder: "3 s.f." }], solution: "$\\frac{\\mathrm{d}S}{\\mathrm{d}x} = 0 \\implies 27x^3 - \\frac{101250}{x^3} = 0 \\implies x^6 = 3750 \\implies x = 3.94\\text{ m}$, Min $S = 69.9\\text{ m}^2$ (3 s.f.)." }
    ]
  },
  {
    id: "TMJC-2026-P2-Q4",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Functions", "Graphs & Transformations", "Integration"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}(x) = \\sin\\left(\\frac{\\pi x}{2}\\right) + a$ ($0 < x \\le 1$), $\\mathrm{f}(x) = -x + 2 + a$ ($1 < x \\le 2$), where $a > 0$ and $\\mathrm{f}(x) = \\mathrm{f}(x+2)$ for all real $x$.",
    parts: [
      {
        label: "(a)", marks: 3, prompt: "Sketch the graph of $y = \\mathrm{f}(x)$ for $0 < x \\le 6$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 420 205" width="380" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="12" fill="#2c2925" stroke="#2c2925"><line x1="35" y1="168" x2="398" y2="168" stroke-width="1.5"/><polyline points="391,164 398,168 391,172" fill="none" stroke-width="1.5"/><text x="404" y="172" stroke="none" font-style="italic">x</text><line x1="52" y1="185" x2="52" y2="18" stroke-width="1.5"/><polyline points="48,25 52,18 56,25" fill="none" stroke-width="1.5"/><text x="58" y="23" stroke="none" font-style="italic">y</text><text x="38" y="182" stroke="none" font-style="italic">O</text><line x1="52" y1="55" x2="376" y2="55" stroke-dasharray="4,3" stroke-width="1" opacity="0.5"/><line x1="52" y1="115" x2="376" y2="115" stroke-dasharray="4,3" stroke-width="1" opacity="0.5"/><text x="46" y="119" text-anchor="end" stroke="none" font-style="italic">a</text><text x="46" y="59" text-anchor="end" stroke="none" font-style="italic">a<tspan font-style="normal">+1</tspan></text><g stroke-dasharray="3,3" stroke-width="1" opacity="0.45"><line x1="106" y1="55" x2="106" y2="168"/><line x1="160" y1="115" x2="160" y2="168"/><line x1="214" y1="55" x2="214" y2="168"/><line x1="268" y1="115" x2="268" y2="168"/><line x1="322" y1="55" x2="322" y2="168"/><line x1="376" y1="115" x2="376" y2="168"/></g><g stroke="none" text-anchor="middle" font-family="sans-serif" font-size="11"><text x="106" y="183">1</text><text x="160" y="183">2</text><text x="214" y="183">3</text><text x="268" y="183">4</text><text x="322" y="183">5</text><text x="376" y="183">6</text></g><path d="M 52 115 C 70 84, 88 55, 106 55 L 160 115" fill="none" stroke="#4a8fe7" stroke-width="2.2"/><path d="M 160 115 C 178 84, 196 55, 214 55 L 268 115" fill="none" stroke="#4a8fe7" stroke-width="2.2"/><path d="M 268 115 C 286 84, 304 55, 322 55 L 376 115" fill="none" stroke="#4a8fe7" stroke-width="2.2"/><circle cx="52" cy="115" r="3.5" fill="#fff" stroke="#4a8fe7" stroke-width="2"/><circle cx="376" cy="115" r="3.5" fill="#4a8fe7" stroke="none"/><text x="372" y="135" stroke="none" font-size="11">(6, <tspan font-style="italic">a</tspan>)</text><text x="58" y="131" stroke="none" font-size="11">(0, <tspan font-style="italic">a</tspan>)</text></svg>`,
        solution: "Sine arch from open circle $(0, a)$ to $(1, a+1)$, straight line to $(2, a)$, repeated with period $2$ to closed dot $(6, a)$."
      },
      {
        label: "(b)", marks: 4, prompt: "Find the <strong>exact</strong> value of $\\int_0^3 \\mathrm{f}(x)\\,\\mathrm{d}x$ in terms of $a$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { a: [1, 2, 5] }, answer: "3*a + 4/pi + 1/2", placeholder: "Exact expression in a and pi",
        solution: "$2\\int_0^1\\left(\\sin\\left(\\frac{\\pi x}{2}\\right)+a\\right)\\mathrm{d}x + \\int_1^2(-x+2+a)\\,\\mathrm{d}x = 3a + \\frac{4}{\\pi} + \\frac{1}{2}$."
      }
    ]
  },
  {
    id: "TMJC-2026-P2-Q5",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Functions"],
    stem: "Function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto x^2 - 4x + 12$ for $x \\in \\mathbb{R}$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Explain why $\\mathrm{f}$ does not have an inverse.", type: "self", solution: "Since the horizontal line $y = 9$ cuts $y = \\mathrm{f}(x)$ twice, $\\mathrm{f}$ is not one-one and has no inverse." },
      { label: "(b)", marks: 1, prompt: "The domain of $\\mathrm{f}$ is restricted to $x \\le k$ ($k$ integer) such that $\\mathrm{f}^{-1}$ exists. State the greatest possible value of $k$.", type: "auto", mode: "number", exactRequired: true, answer: "2", placeholder: "Integer k", solution: "Turning point at $(2, 8)$, so greatest $k = 2$." },
      { label: "(c)", marks: 3, prompt: "Using $k = 2$, define $\\mathrm{f}^{-1}$ in a similar form.", type: "self", solution: "$y = (x-2)^2 + 8 \\implies x = 2 - \\sqrt{y-8}$ ($x \\le 2$).<br>$\\mathrm{f}^{-1}: x \\mapsto 2 - \\sqrt{x-8}$, $x \\in \\mathbb{R}$, $x \\ge 8$." },
      { label: "(d)-(e)", marks: 4, prompt: "$\\mathrm{g}: x \\mapsto \\ln x$ for $0 < x < 5$. Show $\\mathrm{fg}$ exists and find the range of $\\mathrm{fg}$ in exact form.", type: "self", solution: "$\\mathrm{R_g} = (-\\infty, \\ln 5) \\subseteq (-\\infty, 2] = \\mathrm{D_f}$, so $\\mathrm{fg}$ exists.<br>Mapping $(-\\infty, \\ln 5)$ through $\\mathrm{f}$ gives $\\mathrm{R_{fg}} = ((\\ln 5)^2 - 4\\ln 5 + 12, \\infty)$." }
    ]
  },

  // ==================== TMJC 2026 PAPER 2: STATISTICS (Q6 - Q11) ====================
  {
    id: "TMJC-2026-P2-Q6",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations & Combinations", "Probability"],
    stem: "$4$ students, $2$ female teachers and $1$ male teacher stand in a line (or sit at a round table in (d)).",
    parts: [
      { label: "(a)", marks: 1, prompt: "Find the number of line arrangements with no restrictions.", type: "auto", mode: "number", exactRequired: true, answer: "5040", placeholder: "Integer", solution: "$7! = 5040$." },
      { label: "(b)", marks: 1, prompt: "Find the number of line arrangements in which the $2$ female teachers are together.", type: "auto", mode: "number", exactRequired: true, answer: "1440", placeholder: "Integer", solution: "$6! \\times 2! = 1440$." },
      { label: "(c)", marks: 2, prompt: "Find the number of line arrangements in which the $3$ teachers are all separated.", type: "auto", mode: "number", exactRequired: true, answer: "1440", placeholder: "Integer", solution: "$4! \\times {}^5C_3 \\times 3! = 1440$." },
      { label: "(d)", marks: 4, prompt: "Seated at a round table: find the probability that the $2$ female teachers are separated by exactly one student given that the $2$ female teachers are separated.", type: "auto", mode: "number", answer: "2/5", placeholder: "Exact or decimal", solution: "Separated by 1 student: ${}^4C_1 \\times 2! \\times \\frac{5!}{5} = 192$. Separated: $\\frac{5!}{5} \\times {}^5C_2 \\times 2! = 480$.<br>Probability $= \\frac{192}{480} = \\frac{2}{5}$." }
    ]
  },
  {
    id: "TMJC-2026-P2-Q7",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Median monthly household income per member $x$ (dollars) and life expectancy $y$ (years):<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>1337</td><td>1448</td><td>1736</td><td>2129</td><td>2503</td><td>2799</td><td>3033</td><td>3621</td></tr><tr><th>$y$</th><td>79.1</td><td>80.3</td><td>81.4</td><td>82.1</td><td>82.9</td><td>83.4</td><td>83.2</td><td>83.7</td></tr></table></div>",
    parts: [
      {
        label: "(a)", marks: 3, prompt: "Sketch the scatter diagram and state what it suggests about the relationship between $x$ and $y$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 165" width="245" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="40" y1="140" x2="245" y2="140" stroke-width="1.3"/><line x1="45" y1="148" x2="45" y2="15" stroke-width="1.3"/><text x="64" y="153" text-anchor="middle" stroke="none">1337</text><text x="225" y="153" text-anchor="middle" stroke="none">3621</text><text x="38" y="128" text-anchor="end" stroke="none">79.1</text><text x="38" y="34" text-anchor="end" stroke="none">83.7</text><g stroke="#4ca885" stroke-width="1.6"><path d="M 61 122 L 67 128 M 67 122 L 61 128"/><path d="M 69 98 L 75 104 M 75 98 L 69 104"/><path d="M 89 76 L 95 82 M 95 76 L 89 82"/><path d="M 117 62 L 123 68 M 123 62 L 117 68"/><path d="M 143 46 L 149 52 M 149 46 L 143 52"/><path d="M 164 36 L 170 42 M 170 36 L 164 42"/><path d="M 180 40 L 186 46 M 186 40 L 180 46"/><path d="M 222 30 L 228 36 M 228 30 L 222 36"/></g></svg>`,
        solution: "As $x$ increases, $y$ increases at a decreasing rate."
      },
      {
        label: "(b)", marks: 2, prompt: "Find, to <strong>5 decimal places</strong>, the product moment correlation coefficient between (i) $\\ln x$ and $y$, and (ii) $\\sqrt{x}$ and $y$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "r (ln x, y) =", answer: "0.96501", dp: 5 }, { label: "r (√x, y) =", answer: "0.94728", dp: 5 }],
        solution: "(i) $0.96501$, (ii) $0.94728$."
      },
      { label: "(c)", marks: 2, prompt: "Explain which model ($y = a\\ln x + b$ or $y = c\\sqrt{x} + d$) gives a better fit and find the regression line.", type: "self", solution: "$y = a\\ln x + b$ is better since its $r = 0.96501$ is closer to $1$. Regression line: $y = 4.39\\ln x + 48.2$ (3 s.f.)." },
      { label: "(d)", marks: 2, prompt: "Estimate life expectancy when income is $5000$ dollars (and comment on reliability in solution).", type: "auto", mode: "number", answer: "85.616", placeholder: "3 s.f.", solution: "$y = 4.3917\\ln 5000 + 48.211 = 85.6$ years.<br><strong>Reliability:</strong> Not reliable—$x = 5000$ lies outside the data range $[1337, 3621]$ (extrapolation)." }
    ]
  },
  {
    id: "TMJC-2026-P2-Q8",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "TMFoodRide assigns $65\\%$ of peak-hour orders to motorcycle riders (late prob $0.14$) and $35\\%$ to bicycle riders (late prob $0.3$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find the probability that a randomly chosen peak-hour order is delivered late.", type: "auto", mode: "number", answer: "0.196", placeholder: "Exact or 3 s.f.", solution: "$(0.65)(0.14) + (0.35)(0.3) = 0.196$." },
      { label: "(b)", marks: 2, prompt: "Given that an order is delivered late, find the probability it was assigned to a bicycle rider.", type: "auto", mode: "number", answer: "15/28", placeholder: "Exact or 3 s.f.", solution: "$\\frac{0.35 \\times 0.3}{0.196} = \\frac{15}{28} \\approx 0.536$." },
      { label: "(c)", marks: 2, prompt: "A regular customer places $14$ peak-hour orders over a month. State two assumptions for $X$ (late orders) to be well-modelled by a binomial distribution.", type: "self", solution: "1. Whether an order is delivered late is independent of any other peak-hour order.<br>2. Probability an order is delivered late is constant throughout." },
      { label: "(d)(i)", marks: 2, prompt: "Find the probability that at least $3$ of the $14$ orders are delivered late.", type: "auto", mode: "number", answer: "0.5368302878", placeholder: "3 s.f.", solution: "$X \\sim \\mathrm{B}(14, 0.196) \\implies 1 - \\mathrm{P}(X \\le 2) = 0.537$ (3 s.f.)." },
      { label: "(d)(ii)", marks: 1, prompt: "Employees place $10$ orders to be delivered to the company at the same time. Explain why a binomial distribution may not be appropriate.", type: "self", solution: "Orders are no longer independent (shared traffic conditions in the area or same delivery rider)." }
    ]
  },
  {
    id: "TMJC-2026-P2-Q9",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "Milk cartons are labelled $1000\\text{ ml}$. A sample of $60$ cartons has $\\sum x = 59760$ and $\\sum x^2 = 59534496$.",
    parts: [
      {
        label: "(a)", marks: 2, prompt: "Find unbiased estimates of the population mean and population variance.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "Mean =", answer: "996", exactRequired: true }, { label: "Var =", answer: "13536/59" }],
        solution: "$\\bar{x} = 996$, $s^2 = \\frac{1}{59}(59534496 - \\frac{59760^2}{60}) = \\frac{13536}{59} \\approx 229$ (3 s.f.)."
      },
      { label: "(b)", marks: 4, prompt: "Test at $5\\%$ significance level whether the consumer group's complaint (volume is overstated) is justified.", type: "self", solution: "$\\mathrm{H}_0: \\mu=1000, \\mathrm{H}_1: \\mu<1000$. By CLT, $\\bar{X} \\sim \\mathrm{N}(1000, \\frac{229.42}{60})$ approx. $p$-value $= 0.0204 < 0.05 \\implies$ reject $\\mathrm{H}_0$, complaint is justified." },
      { label: "(c)", marks: 3, prompt: "After upgrading, volume follows $\\mathrm{N}(1000, 10^2)$. For a new sample of $60$, find the range of sample means that lead to $\\mathrm{H}_0$ not being rejected at $5\\%$ level ($\\mathrm{H}_1: \\mu < 1000$).", type: "self", solution: "$\\frac{\\bar{x}-1000}{10/\\sqrt{60}} > -1.6449 \\implies \\bar{x} > 997.88 \\approx 998$ (3 s.f.)." }
    ]
  },
  {
    id: "TMJC-2026-P2-Q10",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "A bag contains $3$ blue and $n$ red counters ($n \\ge 3$). Mathias removes $3$ counters without replacement. Score $X =$ number of red drawn minus number of blue drawn.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Show that $\\mathrm{P}(X = -1) = \\frac{18n}{(n+3)(n+2)(n+1)}$.", type: "self", solution: "$\\mathrm{P}(1\\text{ red}, 2\\text{ blue}) = \\frac{n}{n+3}\\cdot\\frac{3}{n+2}\\cdot\\frac{2}{n+1}\\cdot\\frac{3!}{2!} = \\frac{18n}{(n+3)(n+2)(n+1)}$." },
      { label: "(b)", marks: 3, prompt: "Find, in terms of $n$, the probability distribution of $X$.", type: "self", solution: "<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$-3$</td><td>$-1$</td><td>$1$</td><td>$3$</td></tr><tr><th>$\\mathrm{P}(X=x)$</th><td>$\\frac{6}{D}$</td><td>$\\frac{18n}{D}$</td><td>$\\frac{9n(n-1)}{D}$</td><td>$\\frac{n(n-1)(n-2)}{D}$</td></tr></table></div> where $D = (n+3)(n+2)(n+1)$." },
      { label: "(c)", marks: 3, prompt: "Find $\\mathrm{E}(X)$ in the form $\\frac{p(n)}{q(n)}$, where $p, q$ are linear.", type: "auto", mode: "expr", exactRequired: true, vars: { n: [3, 5, 9] }, answer: "3*(n-3)/(n+3)", placeholder: "Expression in terms of n", solution: "$\\mathrm{E}(X) = \\frac{3n^3-21n-18}{(n+3)(n+2)(n+1)} = \\frac{3(n-3)(n+2)(n+1)}{(n+3)(n+2)(n+1)} = \\frac{3(n-3)}{n+3}$." },
      { label: "(d)", marks: 1, prompt: "Given $\\mathrm{E}(X) = 2$, find $n$.", type: "auto", mode: "number", exactRequired: true, answer: "15", placeholder: "Integer value of n", solution: "$\\frac{3(n-3)}{n+3} = 2 \\implies n = 15$." },
      { label: "(e)", marks: 2, prompt: "New score is $Y = 4X$. Explain whether (i) the mean score remains unchanged and (ii) the standard deviation becomes $4$ times larger.", type: "self", solution: "(i) Disagree: mean becomes $4$ times the original since every score is multiplied by $4$.<br>(ii) Agree: all deviations from the mean are multiplied by $4$, so SD becomes $4$ times as large." }
    ]
  },
  {
    id: "TMJC-2026-P2-Q11",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Binomial Distribution", "Normal Distribution", "Sampling & CLT"],
    stem: "Packet masses are independent and normal: Coffee $\\mathrm{N}(252, 6^2)$ g, Cocoa $\\mathrm{N}(195, \\sigma^2)$ g.",
    parts: [
      { label: "(a)", marks: 1, prompt: "State what it means for a sample of coffee bean packets to be random in this context.", type: "self", solution: "Every packet of coffee beans has an equal probability of being selected and whether one is selected is independent of any other packet." },
      { label: "(b)", marks: 2, prompt: "Given $10\\%$ of cocoa beans weigh less than $189\\text{ g}$, find $\\sigma$.", type: "auto", mode: "number", answer: "4.6817", placeholder: "3 s.f.", solution: "$\\frac{189-195}{\\sigma} = -1.2816 \\implies \\sigma = 4.68$ (3 s.f.)." },
      { label: "(c)", marks: 1, prompt: "<em>Use $\\sigma = 4$ henceforth.</em> Find the probability a coffee packet weighs between $240\\text{ g}$ and $250\\text{ g}$.", type: "auto", mode: "number", answer: "0.34669", placeholder: "3 s.f.", solution: "$\\mathrm{P}(240 < X < 250) = 0.347$ (3 s.f.)." },
      { label: "(d)", marks: 2, prompt: "Find the probability that the $10$th coffee packet selected is the $3$rd packet weighing between $240\\text{ g}$ and $250\\text{ g}$.", type: "auto", mode: "number", answer: "0.076201", placeholder: "3 s.f.", solution: "$W \\sim \\mathrm{B}(9, 0.34669)$. Required prob $= \\mathrm{P}(W=2) \\times 0.34669 = 0.0762$ (3 s.f.)." },
      { label: "(e)", marks: 3, prompt: "$2$ coffee packets and $3$ cocoa packets are chosen at random. Find the probability their mean mass is less than $215\\text{ g}$.", type: "auto", mode: "number", answer: "0.100621", placeholder: "3 s.f.", solution: "$A = \\frac{X_1+X_2+Y_1+Y_2+Y_3}{5} \\sim \\mathrm{N}(217.8, 4.8) \\implies \\mathrm{P}(A < 215) = 0.101$ (3 s.f.)." },
      { label: "(f)", marks: 4, prompt: "Coffee sells at $0.10$ dollars/g and cocoa at $0.05$ dollars/g. Find the probability that $2$ coffee packets cost at least $20$ dollars more than $3$ times the selling price of $1$ cocoa packet.", type: "auto", mode: "number", answer: "0.86576", placeholder: "3 s.f.", solution: "$C = 0.1(X_1+X_2) - 0.15Y \\sim \\mathrm{N}(21.15, 1.08) \\implies \\mathrm{P}(C > 20) = 0.866$ (3 s.f.)." },
      { label: "(g)", marks: 2, prompt: "Find the approximate probability that the total mass of $n$ cocoa packets exceeds $200n\\text{ g}$ as $n$ becomes very large.", type: "auto", mode: "number", exactRequired: true, answer: "0", placeholder: "Limiting probability", solution: "$S \\sim \\mathrm{N}(195n, 16n) \\implies \\mathrm{P}(S > 200n) = \\mathrm{P}\\left(Z > \\frac{5\\sqrt{n}}{4}\\right) \\to 0$ as $n$ becomes very large." }
    ]
  }
]);