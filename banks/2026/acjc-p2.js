window.registerQuestions([
  // ==================== ACJC 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "ACJC-2026-P2-Q1", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q1", category: "pure",
    topics: ["Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 260 165" width="245" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="88" x2="245" y2="88" stroke-width="1.3"/><line x1="120" y1="155" x2="120" y2="12" stroke-width="1.3"/><line x1="90" y1="12" x2="90" y2="155" stroke-dasharray="4,3" stroke-width="1.1"/><text x="72" y="148" stroke="none">x=−2</text><path d="M 28 84 Q 78 82 86 18" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 98 18 Q 120 112 142 122 Q 158 112 168 88 Q 180 56 196 52 Q 214 48 232 16" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><circle cx="142" cy="122" r="2.5" fill="#4a8fe7"/><text x="142" y="136" text-anchor="middle" stroke="none">(2,−2)</text><circle cx="196" cy="52" r="2.5" fill="#4a8fe7"/><text x="196" y="44" text-anchor="middle" stroke="none">(6,4)</text><text x="165" y="102" stroke="none">(4,0)</text></svg>`,
    stem: "The diagram shows $y = \\mathrm{g}(x)$ cutting $(0,0)$ and $(4,0)$, with stationary points at $(2,-2)$ and $(6,4)$ and asymptotes $x=-2, y=0$.",
    parts: [
      {
        label: "(a)", marks: 3, prompt: "Sketch the graph of $y = \\frac{1}{\\mathrm{g}(x)}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 165" width="245" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="88" x2="245" y2="88" stroke-width="1.3"/><line x1="120" y1="155" x2="120" y2="12" stroke-width="1.3"/><line x1="168" y1="12" x2="168" y2="155" stroke-dasharray="4,3" stroke-width="1.1"/><text x="172" y="148" stroke="none">x=4</text><path d="M 32 82 Q 72 80 90 88 Q 108 75 116 18" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 124 150 Q 134 108 142 108 Q 152 108 164 150" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 172 18 Q 186 78 240 85" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><text x="88" y="102" text-anchor="middle" stroke="none">(−2,0)</text><text x="142" y="100" text-anchor="middle" stroke="none">(2,−1/2)</text></svg>`,
        solution: "Asymptotes: $x=0$, $x=4$, $y=0$. Turning points: $(-2, 0)$ (minimum) and $(2, -\\frac{1}{2})$ (maximum)."
      },
      { label: "(b)", marks: 3, prompt: "Sketch the graph of $y = \\mathrm{g}'(x)$.", type: "self", solution: "Asymptotes $x=-2$ and $y=0$; cuts $x$-axis at $(2, 0)$ and $(6, 0)$; positive on $(-\\infty, -2)$ and $(2, \\infty)$, negative on $(-2, 2)$." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q2", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q2", category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "Curve $C$ has equation $y = \\frac{(x-k)^2}{x+k}$ ($k > 0$).",
    parts: [
      { label: "(a)", marks: 3, prompt: "Use an algebraic method to find the range of values of $y$ in terms of $k$.", type: "self", solution: "$x^2 + (-y-2k)x + (k^2-yk) = 0$. For real $x$, $\\Delta = y^2 + 8ky \\ge 0 \\implies y \\le -8k$ or $y \\ge 0$." },
      { label: "(b)", marks: 2, prompt: "Describe a sequence of transformations that map $C$ onto $y = \\frac{kx^2}{x+2k}$.", type: "self", solution: "1. Translate $k$ units in negative $x$-direction.<br>2. Scale parallel to $y$-axis by factor $k$." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q3", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q3", category: "pure",
    topics: ["Sequences & Series"],
    stem: "Answer the following.",
    parts: [
      { label: "(a)-(b)", marks: 4, prompt: "Show $\\sum_{r=1}^n r(3r+1) = n(n+1)^2$, and hence show $\\sum_{k=4}^{n+3}\\frac{(k-3)(3k-8)}{n^3} = \\left(1+\\frac{1}{n}\\right)^2$.", type: "self", solution: "Replace $k$ with $r+3$: $\\frac{1}{n^3}\\sum_{r=1}^n r(3r+1) = \\frac{n(n+1)^2}{n^3} = \\left(1+\\frac{1}{n}\\right)^2$." },
      { label: "(c)", marks: 3, prompt: "An infinite GP has $r = \\frac{1}{3}$ and first term $a = \\lim_{n \\to \\infty} \\sum_{k=4}^{n+3}\\frac{(k-3)(3k-8)}{n^3}$. Find exact sum to infinity.", type: "auto", mode: "number", exactRequired: true, answer: "3/2", placeholder: "Exact value", solution: "$a = 1$, $S_\\infty = \\frac{1}{1-1/3} = \\frac{3}{2}$." },
      { label: "(d)", marks: 2, prompt: "$u_1 = 2$, $u_{r+1} = \\frac{u_r+1}{1-u_r}$. Find $\\sum_{r=1}^{4n} u_r$ in terms of $n$.", type: "auto", mode: "expr", exactRequired: true, vars: { n: [1, 2, 3] }, answer: "-7*n/6", placeholder: "Expression in terms of n", solution: "Periodic cycle of $2, -3, -\\frac{1}{2}, \\frac{1}{3}$ (sum $-\\frac{7}{6}$). Sum of $4n$ terms $= -\\frac{7n}{6}$." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q4", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q4", category: "pure",
    topics: ["Vectors"],
    stem: "Plane $\\pi_1$ contains $A(1,3,-1), B(3,2,0)$ and is perpendicular to $\\pi_2: 3x - z = 1$.",
    parts: [
      { label: "(a)-(b)", marks: 3, prompt: "Show $\\pi_1$ is $x+5y+3z=13$, and find the line of intersection of $\\pi_1$ and $\\pi_2$.", type: "self", solution: "$\\mathbf{n}_1 = \\overrightarrow{AB}\\times\\begin{pmatrix}3\\\\0\\\\-1\\end{pmatrix} = \\begin{pmatrix}1\\\\5\\\\3\\end{pmatrix}$. Line: $\\mathbf{r} = \\begin{pmatrix}1/3\\\\38/15\\\\0\\end{pmatrix} + \\mu\\begin{pmatrix}1/3\\\\-2/3\\\\1\\end{pmatrix}$." },
      { label: "(c)", marks: 2, prompt: "Find the length of projection of $AB$ onto $\\pi_2$.", type: "auto", mode: "number", answer: "sqrt(7/2)", placeholder: "Exact or 3 s.f.", solution: "$\\frac{1}{\\sqrt{10}}|\\overrightarrow{AB}\\times\\mathbf{n}_2| = \\sqrt{\\frac{7}{2}} \\approx 1.87$." },
      { label: "(d)", marks: 3, prompt: "Line $l: \\mathbf{r} = p\\mathbf{i}-\\mathbf{j}+\\lambda(3\\mathbf{i}+q\\mathbf{j}+4\\mathbf{k})$ does not intersect $\\pi_1$. What can you say about $p$ and $q$?", type: "self", solution: "Parallel: $3+5q+12=0 \\implies q = -3$; not on plane: $p-5\\ne 13 \\implies p \\ne 18$." },
      { label: "(e)", marks: 2, prompt: "Given $p=18, q=0$, find the acute angle between $l$ and $\\pi_1$ (degrees, 1 d.p.).", type: "auto", mode: "number", dp: 1, answer: "30.470", placeholder: "Degrees (1 d.p.)", solution: "$\\sin\\theta = \\frac{15}{5\\sqrt{35}} = \\frac{3}{\\sqrt{35}} \\implies \\theta = 30.5°$." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q5", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q5", category: "pure",
    topics: ["Integration"],
    stem: "In this question $\\sin^{-1}(1-x)$ refers to the principal value.",
    parts: [
      {
        label: "(a)(i)", marks: 2, prompt: "Use $z = \\sin^{-1}(1-x)$ to show $\\int_0^1\\sin^{-1}(1-x)\\,\\mathrm{d}x = \\int_a^b z\\cos z\\,\\mathrm{d}z$, finding $a$ and $b$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "a =", answer: "0", exactRequired: true }, { label: "b =", answer: "pi/2", exactRequired: true }],
        solution: "$\\int_{\\pi/2}^0 z(-\\cos z)\\,\\mathrm{d}z = \\int_0^{\\pi/2} z\\cos z\\,\\mathrm{d}z$, so $a=0, b=\\frac{\\pi}{2}$."
      },
      { label: "(a)(ii)", marks: 2, prompt: "Hence show $\\int_0^1\\sin^{-1}(1-x)\\,\\mathrm{d}x = \\frac{\\pi}{2} - 1$.", type: "self", solution: "$[z\\sin z]_0^{\\pi/2} - \\int_0^{\\pi/2}\\sin z\\,\\mathrm{d}z = \\frac{\\pi}{2} - 1$." },
      { label: "(b)(i)", marks: 2, prompt: "Find exactly $\\int_0^2|\\sin^{-1}(1-x)|\\,\\mathrm{d}x$.", type: "auto", mode: "number", exactRequired: true, answer: "pi-2", placeholder: "Exact value", solution: "By symmetry about $(1, 0)$, $2\\left(\\frac{\\pi}{2}-1\\right) = \\pi - 2$." },
      { label: "(b)(ii)", marks: 4, prompt: "Region $R$ is bounded by $y=\\sin^{-1}(1-x)$, $x=2$, and the $x$-axis ($1 \\le x \\le 2$). Find exact volume when $R$ is rotated $360°$ about the $y$-axis.", type: "auto", mode: "number", exactRequired: true, answer: "5*(pi^2)/4 - 2*pi", placeholder: "Exact value in pi", solution: "Cylinder minus solid: $\\pi(2)^2(\\frac{\\pi}{2}) - \\pi\\int_{-\\pi/2}^0(1-\\sin y)^2\\,\\mathrm{d}y = 2\\pi^2 - \\pi\\left(2+\\frac{3\\pi}{4}\\right) = \\frac{5\\pi^2}{4} - 2\\pi$." }
    ]
  },

  // ==================== ACJC 2026 PAPER 2: STATISTICS (Q6 - Q12) ====================
  {
    id: "ACJC-2026-P2-Q6", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q6", category: "stats",
    topics: ["Normal Distribution"],
    stem: "Delivery time of orders is normally distributed. $20\\%$ take $< 13$ minutes and $26\\%$ take $> 25$ minutes.",
    parts: [
      { label: "(Full)", marks: 4, prompt: "Find the mean and standard deviation of the delivery time.", type: "auto", mode: "multi-field", fields: [{ label: "μ =", answer: "19.80", placeholder: "3 s.f." }, { label: "σ =", answer: "8.0797", placeholder: "3 s.f." }], solution: "$\\frac{13-\\mu}{\\sigma} = -0.84162$, $\\frac{25-\\mu}{\\sigma} = 0.643345 \\implies \\mu = 19.8$, $\\sigma = 8.08$." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q7", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q7", category: "stats",
    topics: ["Probability"],
    stem: "$\\mathrm{P}(A)=0.6, \\mathrm{P}(B)=0.5, \\mathrm{P}(A\\cap B)=k$. Event $C$ has $\\mathrm{P}(C)=0.2$, $\\mathrm{P}(B|C)=0.4$, $A$ and $C$ mutually exclusive, and $k=0.25$.",
    parts: [
      { label: "(a)-(b)", marks: 3, prompt: "Before introducing $C$, state the exact range of $k$. With $k=0.25$, explain whether $A$ and $B$ are independent.", type: "self", solution: "(a) $0.1 \\le k \\le 0.5$. (b) $\\mathrm{P}(A)\\mathrm{P}(B)=0.3 \\ne 0.25$, so not independent." },
      { label: "(c)", marks: 3, prompt: "Find $\\mathrm{P}(A'\\cap B'\\cap C')$.", type: "auto", mode: "number", answer: "0.03", placeholder: "Exact value", solution: "$1 - [0.6 + (0.5-0.25) + (0.2-0.08)] = 0.03$." },
      { label: "(d)", marks: 2, prompt: "Given at least one of $A$ or $C$ occurs, find the probability that $B$ occurs.", type: "auto", mode: "number", answer: "33/80", placeholder: "Exact or 3 s.f.", solution: "$\\frac{0.25+0.08}{0.6+0.2} = \\frac{33}{80} = 0.4125$." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q8", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q8", category: "stats",
    topics: ["Permutations & Combinations"],
    stem: "A pop group consists of $3$ rappers and $4$ vocalists.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Allocated into $3$ distinct rooms $X, Y, Z$: $X$ has exactly $2$ members, $Y$ has $\\ge 2$ members, each room has $1$ rapper. Find number of ways.", type: "auto", mode: "number", exactRequired: true, answer: "168", placeholder: "Integer", solution: "$3! \\times {}^4C_1 \\times ({}^3C_1 + {}^3C_2 + {}^3C_3) = 168$." },
      { label: "(b)", marks: 3, prompt: "7 members + manager at a round table: manager and 3 rappers together, manager between 2 rappers, 2 particular vocalists not adjacent. Find number of ways.", type: "auto", mode: "number", exactRequired: true, answer: "144", placeholder: "Integer", solution: "$(3!\\times 2) \\times (3-1)! \\times {}^3C_2 \\times 2! = 144$." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q9", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q9", category: "stats",
    topics: ["Hypothesis Testing"],
    stem: "Claimed mean mass of Oolong tea packet is $600\\text{ g}$. Sample of $50$: $\\sum x = 30685, \\sum x^2 = 18925681$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "State null and alternative hypotheses, defining any parameters used.", type: "self", solution: "$\\mathrm{H}_0: \\mu = 600$ vs $\\mathrm{H}_1: \\mu \\ne 600$, where $\\mu$ is the population mean mass." },
      { label: "(b)", marks: 2, prompt: "Calculate unbiased estimates of population mean and variance (1 d.p.).", type: "auto", mode: "multi-field", fields: [{ label: "Mean =", answer: "613.7", dp: 1 }, { label: "Var =", answer: "188593/98", dp: 1 }], solution: "$\\bar{x} = 613.7$, $s^2 = 1924.4$." },
      { label: "(c)-(d)", marks: 6, prompt: "Test at $5\\%$ level whether mean is $600\\text{ g}$. Next, supervisor takes sample of $47$ (mean $k$, $\\sigma^2 = 49$) and does not reject $\\mathrm{H}_0$; find set of possible $k$.", type: "self", solution: "(c) $p=0.0272 < 0.05 \\implies$ reject $\\mathrm{H}_0$. (d) $\\left|\\frac{k-600}{7/\\sqrt{47}}\\right| < 1.95996 \\implies 598 < k < 602$." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q10", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q10", category: "stats",
    topics: ["Binomial Distribution", "Sampling & CLT"],
    stem: "Drones are intercepted with probability $p$ ($0 < p < 1$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "State, in context, two assumptions for number of intercepted drones to follow a binomial distribution.", type: "self", solution: "1. Constant probability $p$ of intercepting each drone. 2. Independent interception events." },
      { label: "(b)", marks: 3, prompt: "Alpha fires at $10$, Delta at $15$ drones; $W \\sim \\mathrm{B}(25, p)$. Given $\\mathrm{P}(W \\le 1) = 2\\mathrm{P}(A=0)\\mathrm{P}(D=1)$, show $p = \\frac{1}{6}$.", type: "self", solution: "$(1-p)^{25} + 25p(1-p)^{24} = 30p(1-p)^{24} \\implies 1 + 24p = 30p \\implies p = \\frac{1}{6}$." },
      { label: "(c)", marks: 3, prompt: "$60$ independent batteries each face $40$ drones with $X \\sim \\mathrm{B}(40, 0.15)$. Find probability mean intercepted is between $5.5$ and $6.5$.", type: "auto", mode: "number", answer: "0.9136", placeholder: "3 s.f.", solution: "By CLT, $\\bar{X} \\sim \\mathrm{N}(6, \\frac{5.1}{60})$ approx. $\\mathrm{P}(5.5 < \\bar{X} < 6.5) = 0.914$ (3 s.f.)." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q11", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q11", category: "stats",
    topics: ["Binomial Distribution", "Normal Distribution"],
    stem: "$84\\%$ of dental patients turn up. On one day, $25$ appointments are made.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find probability at least $21$ turn up.", type: "auto", mode: "number", answer: "0.62933", placeholder: "3 s.f.", solution: "$Y \\sim \\mathrm{B}(25, 0.84) \\implies 1 - \\mathrm{P}(Y \\le 20) = 0.629$ (3 s.f.)." },
      { label: "(b)", marks: 2, prompt: "Given at least $21$ turned up, find probability exactly $21$ turned up.", type: "auto", mode: "number", answer: "0.33849", placeholder: "3 s.f.", solution: "$\\frac{\\mathrm{P}(Y=21)}{\\mathrm{P}(Y\\ge 21)} = 0.338$ (3 s.f.)." },
      { label: "(c)", marks: 2, prompt: "Dentist can attend at most $50$. Find greatest number of appointments to achieve $\\ge 97\\%$ chance all attendees are seen.", type: "auto", mode: "number", exactRequired: true, answer: "54", placeholder: "Integer", solution: "$\\mathrm{P}(M \\le 50) \\ge 0.97$ for $M\\sim\\mathrm{B}(n,0.84) \\implies n = 54$." },
      { label: "(d)", marks: 3, prompt: "General $\\mathrm{N}(30, 2.7^2)$, Cosmetic $\\mathrm{N}(42, 0.8^2)$. Find probability total duration of $6$ general consultations $> 170$ min.", type: "auto", mode: "number", answer: "0.93479", placeholder: "3 s.f.", solution: "$A \\sim \\mathrm{N}(180, 43.74) \\implies \\mathrm{P}(A > 170) = 0.935$ (3 s.f.)." },
      { label: "(e)", marks: 4, prompt: "All durations reduced by $15\\%$. Find probability total duration of $4$ general differs from $3$ times $1$ cosmetic by at most $10$ min.", type: "auto", mode: "number", answer: "0.8342", placeholder: "3 s.f.", solution: "$L = 0.85(G_1+\\dots+G_4-3C) \\sim \\mathrm{N}(-5.1, 25.2297) \\implies \\mathrm{P}(|L| \\le 10) = 0.834$ (3 s.f.)." }
    ]
  },
  {
    id: "ACJC-2026-P2-Q12", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 2", qNum: "Q12", category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Part (a) data (resting heart rate $h$, exercise time $t$):<div class='q-table-wrap'><table class='q-table'><tr><th>$h$</th><td>79</td><td>74</td><td>73</td><td>68</td><td>66</td><td>64</td><td>64</td><td>60</td><td>58</td></tr><tr><th>$t$</th><td>20</td><td>25</td><td>30</td><td>35</td><td>40</td><td>45</td><td>50</td><td>55</td><td>60</td></tr></table></div>Part (b) data (sleep $y$, screen $x$): $(0.9, 8.2), (1.9, p), (3.3, 6.9), (3.9, 6.6), (4.7, 6.1)$, regression $y = -0.55x + 8.72$.",
    parts: [
      { label: "(a)(i)&(iii)", marks: 3, prompt: "Sketch scatter diagram for (a), explain which of (A) $h = a+b\\ln t$ or (B) $h = d+et^2$ fits better, and state its equation.", type: "self", solution: "Model (A) $h = a+b\\ln t$ has $r=-0.990$ closer to $-1$ than (B). Equation: $h = 134 - 18.3\\ln t$." },
      { label: "(a)(ii)", marks: 2, prompt: "State the product moment correlation coefficient for (A) $h = a+b\\ln t$ and (B) $h = d+et^2$.", type: "auto", mode: "multi-field", fields: [{ label: "r (Model A) =", answer: "-0.990" }, { label: "r (Model B) =", answer: "-0.957" }], solution: "Model A: $-0.990$; Model B: $-0.957$." },
      { label: "(b)(i)&(iv)", marks: 2, prompt: "Interpret $-0.55$ in Lina's model, and rewrite the model if each recorded sleep duration was overstated by $1$ hour.", type: "self", solution: "(i) Each additional hour of screen time reduces sleep by $0.55$ hours. (iv) $y = -0.55x + 7.72$." },
      { label: "(b)(ii)", marks: 2, prompt: "Calculate $p$ to <strong>1 decimal place</strong>.", type: "auto", mode: "number", dp: 1, answer: "7.7", placeholder: "1 d.p.", solution: "$\\bar{x} = 2.94 \\implies \\bar{y} = 7.103 \\implies p = 7.7$." },
      { label: "(b)(iii)", marks: 2, prompt: "Estimate sleep duration when screen duration is $7$ hours (and comment on reliability in solution).", type: "auto", mode: "number", answer: "4.87", placeholder: "Value in hours", solution: "$y = -0.55(7)+8.72 = 4.87$ hours. Unreliable ($x=7$ outside $[0.9, 4.7]$, extrapolation)." }
    ]
  }
]);