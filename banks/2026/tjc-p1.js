window.registerQuestions([
  {
    id: "TJC-2026-P1-Q1", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q1", category: "pure",
    topics: ["Simultaneous Equations"],
    stem: "Mdm Wang makes $0.60$, $0.90$ and $1.20$ dollars profit per bowl of wonton, fishball and beef noodles. Total profit was $222$ dollars, beef profit exceeded wonton profit by $72$ dollars, and total bowls sold was $4$ times fishball bowls.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the number of bowls of wonton, fishball and beef noodles sold.", type: "auto", mode: "multi-field", fields: [{ label: "Wonton =", answer: "80", exactRequired: true }, { label: "Fishball =", answer: "60", exactRequired: true }, { label: "Beef =", answer: "100", exactRequired: true }], solution: "$0.6w+0.9f+1.2b=222$, $1.2b-0.6w=72$, $w-3f+b=0 \\implies w=80, f=60, b=100$." },
      { label: "(b)", marks: 1, prompt: "1 in 4 wonton bowls (overcharged $1$ dollar) and 1 in 5 beef bowls (overcharged $0.50$ dollars) were paid online. Find total refund (in dollars).", type: "auto", mode: "number", exactRequired: true, answer: "30", placeholder: "Amount in dollars", solution: "$\\frac{1}{4}(80)(1) + \\frac{1}{5}(100)(0.50) = 30$ dollars." }
    ]
  },
  {
    id: "TJC-2026-P1-Q2", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q2", category: "pure",
    topics: ["Implicit Differentiation", "Tangents"],
    stem: "Curve $C$ has equation $xy = \\ln y$ ($y > 0$).",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x, y$, and show $C$ has no stationary points.", type: "self", solution: "$y + x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{y^2}{1-xy}$. Since $y > 0$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\ne 0$." },
      { label: "(b)", marks: 3, prompt: "Find the equation of the tangent at $y = \\mathrm{e}^2$ in exact form $y = mx + c$.", type: "self", solution: "At $y=\\mathrm{e}^2, x=\\frac{2}{\\mathrm{e}^2}$, gradient $= -\\mathrm{e}^4 \\implies y = -\\mathrm{e}^4 x + 3\\mathrm{e}^2$." }
    ]
  },
  {
    id: "TJC-2026-P1-Q3", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q3", category: "pure",
    topics: ["Inequalities"],
    stem: "Solve the inequality $\\frac{4}{x-\\lambda} < x - \\lambda$, where $\\lambda$ is a real constant.",
    parts: [
      { label: "(Full)", marks: 4, prompt: "Give your answer in terms of $\\lambda$.", type: "self", solution: "$(x-\\lambda)[(x-\\lambda)^2 - 4] > 0 \\implies (x-\\lambda)(x-(\\lambda-2))(x-(\\lambda+2)) > 0 \\implies \\lambda - 2 < x < \\lambda$ or $x > \\lambda + 2$." }
    ]
  },
  {
    id: "TJC-2026-P1-Q4", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q4", category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "<em>Do not use a calculator.</em> $|z| = \\sqrt{10}$ and $\\arg(z) = -\\tan^{-1}3$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find $z$ in the form $a + b\\mathrm{i}$ ($a, b \\in \\mathbb{Z}$).", type: "auto", mode: "complex-list", exactRequired: true, answer: ["1-3*i"], placeholder: "Complex number a + bi", solution: "4th quadrant: $z = 1 - 3\\mathrm{i}$." },
      { label: "(b)", marks: 4, prompt: "$OABC$ is a rectangle described anticlockwise ($A$ represents $z$) with $OC = 2OA$. Find the complex numbers represented by $B$ and $C$.", type: "auto", mode: "complex-list", exactRequired: true, answer: ["7-i", "6+2*i"], placeholder: "Both complex numbers separated by comma", solution: "$c = 2\\mathrm{i}z = 6 + 2\\mathrm{i}$, $b = z + c = 7 - \\mathrm{i}$." }
    ]
  },
  {
    id: "TJC-2026-P1-Q5", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q5", category: "pure",
    topics: ["Maclaurin Series", "Implicit Differentiation"],
    stem: "$y = \\mathrm{f}(x)$ satisfies $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\frac{\\mathrm{d}y}{\\mathrm{d}x}(2\\tan x + p\\sec^2 x)$, with Maclaurin series $y = 1 + x + \\frac{1}{2}x^2 + qx^3 + \\dots$",
    parts: [
      { label: "(a)", marks: 1, prompt: "State the values of $\\mathrm{f}(0)$ and $\\mathrm{f}'(0)$.", type: "auto", mode: "multi-field", fields: [{ label: "f(0) =", answer: "1", exactRequired: true }, { label: "f'(0) =", answer: "1", exactRequired: true }], solution: "$\\mathrm{f}(0) = 1$, $\\mathrm{f}'(0) = 1$." },
      { label: "(b)", marks: 5, prompt: "Find the values of $p$ and $q$.", type: "auto", mode: "multi-field", fields: [{ label: "p =", answer: "1", exactRequired: true }, { label: "q =", answer: "1/2", exactRequired: true }], solution: "At $x=0$: $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = p = 1$; differentiating gives $\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} = 3 \\implies q = \\frac{3}{3!} = \\frac{1}{2}$." },
      { label: "(c)", marks: 2, prompt: "Find the first three non-zero terms of $\\sqrt{\\mathrm{f}(x)}$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0.1, 0.2] }, answer: "1 + 0.5*x + 1/8*(x^2)", placeholder: "Polynomial in x", solution: "$\\left(1+x+\\frac{x^2}{2}+\\dots\\right)^{1/2} = 1 + \\frac{1}{2}x + \\frac{1}{8}x^2 + \\dots$" },
      { label: "(d)", marks: 1, prompt: "Explain which of $\\int_0^{0.2}\\mathrm{f}(x)\\,\\mathrm{d}x$ or $\\int_{0.2}^{0.4}\\mathrm{f}(x)\\,\\mathrm{d}x$ has a smaller percentage error when estimated.", type: "self", solution: "$\\int_0^{0.2}\\mathrm{f}(x)\\,\\mathrm{d}x$ has a smaller percentage error because the Maclaurin approximation is closer to $\\mathrm{f}(x)$ near $x = 0$." }
    ]
  },
  {
    id: "TJC-2026-P1-Q6", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q6", category: "pure",
    topics: ["Functions", "Inverse & Composite Functions"],
    stem: "$\\mathrm{f}: x \\mapsto \\frac{2x}{x+1}$, $-1 < x \\le 0$.",
    parts: [
      {
        label: "(a)-(b)", marks: 6, prompt: "Find $\\mathrm{f}^{-1}(x)$ and its domain, and sketch $\\mathrm{f}$ and $\\mathrm{f}^{-1}$ on the same diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 200 180" width="185" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="75" x2="185" y2="75" stroke-width="1.3"/><line x1="115" y1="170" x2="115" y2="12" stroke-width="1.3"/><line x1="25" y1="165" x2="175" y2="15" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="85" y1="12" x2="85" y2="170" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="15" y1="105" x2="185" y2="105" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 90 165 Q 98 92 115 75" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 20 100 Q 95 92 115 75" fill="none" stroke="#e0726e" stroke-width="1.8"/></svg>`,
        solution: "$\\mathrm{f}^{-1}(x) = \\frac{x}{2-x}$, domain $(-\\infty, 0]$; asymptotes $x=-1$ for $\\mathrm{f}$ and $y=-1$ for $\\mathrm{f}^{-1}$."
      },
      { label: "(c)", marks: 2, prompt: "$\\mathrm{g}: x \\mapsto 1 - \\mathrm{e}^x$, $0 \\le x < \\ln 3$. Explain why $\\mathrm{f}^{-1}\\mathrm{g}$ exists.", type: "self", solution: "$\\mathrm{R_g} = (-2, 0] \\subseteq (-\\infty, 0] = \\mathrm{D_{f^{-1}}}$, so $\\mathrm{f}^{-1}\\mathrm{g}$ exists." }
    ]
  },
  {
    id: "TJC-2026-P1-Q7", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q7", category: "pure",
    topics: ["AP & GP", "Summation of Series"],
    stem: "Part (a): $S_n = \\frac{1}{4}(13n - n^2)$. Part (b): A convergent GP has first term $3$ and 4th term $24x^{-3}$ ($x \\ne 0$).",
    parts: [
      { label: "(a)(i)", marks: 2, prompt: "Find an expression for $u_n$.", type: "auto", mode: "expr", exactRequired: true, vars: { n: [1, 2, 3] }, answer: "(7-n)/2", placeholder: "Expression in n", solution: "$u_n = S_n - S_{n-1} = \\frac{7-n}{2}$." },
      { label: "(a)(ii)", marks: 2, prompt: "Show that this series is an arithmetic series.", type: "self", solution: "$u_n - u_{n-1} = -\\frac{1}{2}$, a constant independent of $n$." },
      { label: "(b)(i)", marks: 3, prompt: "Find the range of values that $x$ can take.", type: "self", solution: "$r = \\frac{2}{x}$, $|r| < 1 \\implies x < -2$ or $x > 2$." },
      { label: "(b)(ii)", marks: 3, prompt: "Find, in terms of $x$, the sum of the GP after (not including) the $10$th term in the form $\\frac{p}{x^m(x-q)}$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [3, 4] }, answer: "3072/((x^9)*(x-2))", placeholder: "Expression in terms of x", solution: "$\\frac{T_{11}}{1-r} = \\frac{3(2x^{-1})^{10}}{1-2x^{-1}} = \\frac{3072}{x^9(x-2)}$." }
    ]
  },
  {
    id: "TJC-2026-P1-Q8", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q8", category: "pure",
    topics: ["3D Vectors", "Planes & Lines"],
    stem: "Plane $\\pi_1$ is parallel to $\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}0\\\\1\\\\2\\end{pmatrix}$, and passes through $A(1, 0, 1)$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Show that $\\pi_1$ is $x - 2y + z = 2$.", type: "self", solution: "$\\mathbf{n} = \\begin{pmatrix}1\\\\-2\\\\1\\end{pmatrix}$, passing $(1,0,1) \\implies x-2y+z=2$." },
      { label: "(b)", marks: 4, prompt: "Line $l$ contains $B(2,1,0)$ with direction $\\begin{pmatrix}1\\\\2\\\\k\\end{pmatrix}$. Acute angle between $l$ and $\\pi_1$ is $\\sin^{-1}\\frac{1}{3}$. Find possible $k$.", type: "auto", mode: "number-list", exactRequired: true, answer: [1, 17], placeholder: "Values separated by comma", solution: "$\\frac{|k-3|}{\\sqrt{5+k^2}\\sqrt{6}} = \\frac{1}{3} \\implies k = 1, 17$." },
      { label: "(c)", marks: 3, prompt: "With $k = 1$, find the intersection of $l$ and $\\pi_1$.", type: "auto", mode: "tuple", exactRequired: true, answer: [1, -1, -1], placeholder: "Coordinates (x, y, z)", solution: "$(2+\\lambda)-2(1+2\\lambda)+\\lambda=2 \\implies \\lambda=-1 \\implies (1,-1,-1)$." },
      { label: "(d)", marks: 3, prompt: "Plane $\\pi_2$ contains $C(2,1,-3)$ and is parallel to $\\pi_1$. Find <strong>exact</strong> distance between $\\pi_1$ and $\\pi_2$.", type: "auto", mode: "number", exactRequired: true, answer: "5/sqrt(6)", placeholder: "Exact value", solution: "$\\frac{|-3 - 2|}{\\sqrt{6}} = \\frac{5}{\\sqrt{6}}$." }
    ]
  },
  {
    id: "TJC-2026-P1-Q9", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q9", category: "pure",
    topics: ["Rational Functions", "Graph Sketching", "Inequalities"],
    stem: "Curves $C_1$ and $C_2$ have equations $y = \\frac{ax}{x+2}$ and $y = \\frac{x^2+(a+4)x+2a+8}{x+2}$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the set of values of $a$ such that $C_1$ and $C_2$ do not intersect for all real $x$.", type: "self", solution: "$x^2 + 4x + 2a + 8 = 0$ has $\\Delta = 16 - 4(2a+8) < 0 \\implies a > -2$." },
      {
        label: "(b)-(c)", marks: 9, prompt: "Given $0 < a < 4$, find coordinates of stationary points of $C_2$, and sketch $C_1, C_2$ on one diagram with asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 190" width="225" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="115" x2="225" y2="115" stroke-width="1.3"/><line x1="120" y1="180" x2="120" y2="12" stroke-width="1.3"/><line x1="95" y1="12" x2="95" y2="180" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="20" y1="95" x2="225" y2="95" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="25" y1="175" x2="205" y2="15" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 28 92 Q 78 88 92 20" fill="none" stroke="#4a8fe7" stroke-width="1.6"/><path d="M 98 175 Q 108 118 120 115 Q 155 104 218 99" fill="none" stroke="#4a8fe7" stroke-width="1.6"/><path d="M 35 178 Q 75 135 91 178" fill="none" stroke="#e0726e" stroke-width="1.6"/><path d="M 101 18 Q 112 88 120 82 Q 155 58 202 18" fill="none" stroke="#e0726e" stroke-width="1.6"/></svg>`,
        solution: "Stationary points of $C_2$: $(0, a+4)$ and $(-4, a-4)$. $C_1$ asymptotes: $x=-2, y=a$; $C_2$ asymptotes: $x=-2, y=x+a+2$."
      },
      { label: "(d)", marks: 1, prompt: "Hence solve $\\frac{ax}{x+2} > \\frac{x^2+(a+4)x+2a+8}{x+2}$.", type: "self", solution: "From the sketch, $C_1$ is above $C_2$ for $x < -2$." }
    ]
  },
  {
    id: "TJC-2026-P1-Q10", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q10", category: "pure",
    topics: ["Differentiation", "Maxima & Minima", "Rates of Change"],
    diagramSvg: `<svg viewBox="0 0 240 130" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="100" x2="225" y2="100" stroke-width="1.3"/><line x1="35" y1="115" x2="35" y2="12" stroke-width="1.3"/><path d="M 52 100 Q 75 58 205 32" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="52" cy="100" r="2.5" fill="#2c2925"/><text x="45" y="114" stroke="none">P(1,0)</text><circle cx="165" cy="100" r="2.5" fill="#2c2925"/><text x="165" y="114" text-anchor="middle" stroke="none">Q(10,0)</text></svg>`,
    stem: "A drone flies from $P(1, 0)$ along $y = \\sqrt{x-1}$ ($x \\ge 1$). The pilot is at $Q(10, 0)$.",
    parts: [
      { label: "(a)", marks: 5, prompt: "Show the distance $L$ from the pilot is $\\sqrt{x^2-19x+99}$, and find the <strong>exact</strong> minimum value of $L$ (proving it is minimum in the solution).", type: "auto", mode: "number", exactRequired: true, answer: "sqrt(35)/2", placeholder: "Exact surd value", solution: "$L = \\sqrt{(10-x)^2 + (x-1)} = \\sqrt{x^2-19x+99}$. $\\frac{\\mathrm{d}(L^2)}{\\mathrm{d}x} = 2x - 19 = 0 \\implies x = \\frac{19}{2}$ ($\\frac{\\mathrm{d}^2(L^2)}{\\mathrm{d}x^2}=2>0$). Min $L = \\frac{1}{2}\\sqrt{35}$." },
      { label: "(b)", marks: 5, prompt: "Distance travelled is $F(x) = \\int_1^x \\sqrt{1 + (\\frac{\\mathrm{d}y}{\\mathrm{d}x})^2}\\,\\mathrm{d}x$. Given drone speed is $0.8\\text{ units/s}$, find the horizontal speed of its shadow when directly above the pilot.", type: "auto", mode: "number", answer: "24/(5*sqrt(37))", placeholder: "Exact or 3 s.f.", solution: "$\\frac{\\mathrm{d}F}{\\mathrm{d}x} = \\sqrt{1 + \\frac{1}{4(x-1)}}$. At $x = 10$, $0.8 = \\sqrt{1 + \\frac{1}{36}}\\frac{\\mathrm{d}x}{\\mathrm{d}t} \\implies \\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{24}{5\\sqrt{37}} \\approx 0.789\\text{ units/s}$." }
    ]
  },
  {
    id: "TJC-2026-P1-Q11", year: 2026, school: "TJC", paper: "2026 Prelim Paper 1", qNum: "Q11", category: "pure",
    topics: ["Differential Equations", "Substitution"],
    stem: "Two differential equation problems.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Curve $y = \\mathrm{f}(x)$ passes $(0, \\frac{\\pi}{3})$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + \\cos y$. Find an <strong>exact</strong> expression for $y$ in terms of $x$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0, 1] }, answer: "2*atan(x + 1/sqrt(3))", placeholder: "Expression in terms of x (use atan)", solution: "$\\int\\frac{1}{2\\cos^2(y/2)}\\,\\mathrm{d}y = \\int 1\\,\\mathrm{d}x \\implies \\tan\\frac{y}{2} = x + \\frac{1}{\\sqrt{3}} \\implies y = 2\\tan^{-1}\\left(x + \\frac{1}{\\sqrt{3}}\\right)$." },
      { label: "(b)(i)-(ii)", marks: 10, prompt: "Populations $x, y$ of species $A, B$ have rates proportional to $x+y$ and $x-y$, initially equal at $N$. When $x=2y$, $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = \\frac{1}{3}\\frac{\\mathrm{d}x}{\\mathrm{d}t}$. Show $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x-y}{x+y}$, transform via $y = vx$ to $x\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\frac{1-2v-v^2}{1+v}$, and solve.", type: "self", solution: "$\\int\\frac{1+v}{1-2v-v^2}\\,\\mathrm{d}v = \\int\\frac{1}{x}\\,\\mathrm{d}x \\implies (1-2v-v^2)x^2 = A \\implies x^2 - 2xy - y^2 = -2N^2$." },
      { label: "(b)(iii)", marks: 1, prompt: "Find, in terms of $N$, the population of $A$ when $x = 2y$.", type: "auto", mode: "expr", exactRequired: true, vars: { N: [10, 50] }, answer: "2*sqrt(2)*N", placeholder: "Expression in terms of N", solution: "Sub $y = \\frac{x}{2}$: $\\frac{1}{4}x^2 = 2N^2 \\implies x = 2\\sqrt{2}N$." },
      { label: "(b)(iv)", marks: 2, prompt: "Explain whether the populations of $A$ and $B$ will be the same again.", type: "self", solution: "Setting $x = y$ gives $x^2 = N^2 \\implies x = N$ (only the initial state), or $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x-y}{x+y} < 1$ so $y$ grows slower than $x$. Hence never the same again." }
    ]
  }
]);