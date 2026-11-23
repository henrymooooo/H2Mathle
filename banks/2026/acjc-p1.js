window.registerQuestions([
  {
    id: "ACJC-2026-P1-Q1", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q1", category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "Use an algebraic method to solve the inequalities $$\\frac{x(5x+9)}{x^2+2x+5} > x \\ge 3x - 6.$$",
    parts: [
      { label: "(Full)", marks: 4, prompt: "Solve the inequalities algebraically.", type: "self", solution: "First: $\\frac{-x^3+3x^2+4x}{x^2+2x+5} > 0$. Since $x^2+2x+5 = (x+1)^2+4 > 0$, $-x(x+1)(x-4) > 0 \\implies x < -1$ or $0 < x < 4$.<br>Second: $x \\ge 3x - 6 \\implies x \\le 3$.<br>Intersection: $x < -1$ or $0 < x \\le 3$." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q2", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q2", category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "Using standard series from MF27, consider $y = \\ln(2 + \\sin x)$ where $x^3$ and higher terms are neglected.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the Maclaurin's series for $\\ln(2 + \\sin x)$ up to $x^2$.", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0.1, 0.2] }, answer: "ln(2) + x/2 - (x^2)/8", placeholder: "Exact expansion in x", solution: "$\\ln(2+\\sin x) \\approx \\ln(2+x) = \\ln 2 + \\ln\\left(1+\\frac{x}{2}\\right) \\approx \\ln 2 + \\frac{x}{2} - \\frac{x^2}{8}$." },
      { label: "(b)", marks: 1, prompt: "Hence deduce the equation of the tangent to $y = \\ln(2 + \\sin x)$ at $x = 0$.", type: "self", solution: "$y = \\ln 2 + \\frac{x}{2}$." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q3", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q3", category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 210 175" width="195" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polygon points="105,18 25,155 185,155" fill="none" stroke-dasharray="4,3" stroke-width="1.2"/><polygon points="75,130 135,130 105,78" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1.5"/><line x1="75" y1="130" x2="75" y2="155" stroke-width="1.3"/><line x1="135" y1="130" x2="135" y2="155" stroke-width="1.3"/><text x="105" y="168" text-anchor="middle" stroke="none" font-style="italic">l</text><text x="142" y="146" stroke="none" font-style="italic">x</text><text x="48" y="148" stroke="none">π/3</text></svg>`,
    stem: "An equilateral triangular cardboard of side $l\\text{ cm}$ has six perpendicular cuts of length $x\\text{ cm}$ made to remove the corners and fold into an open box.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Show that the length of the equilateral triangular base is $l - 2x\\sqrt{3}$.", type: "self", solution: "Each removed corner segment along the side has length $\\frac{x}{\\tan(\\pi/6)} = x\\sqrt{3}$, so base length $= l - 2x\\sqrt{3}$." },
      { label: "(b)", marks: 3, prompt: "Find the value of $x$, in terms of $l$, that gives the maximum volume of the open box.", type: "auto", mode: "expr", exactRequired: true, vars: { l: [6, 12] }, answer: "l/(6*sqrt(3))", placeholder: "Expression in terms of l", solution: "$V = \\frac{\\sqrt{3}}{4}(l-2\\sqrt{3}x)^2 x$. $\\frac{\\mathrm{d}V}{\\mathrm{d}x} = \\frac{\\sqrt{3}}{4}(l-2\\sqrt{3}x)(l-6\\sqrt{3}x) = 0 \\implies x = \\frac{l}{6\\sqrt{3}}$." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q4", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q4", category: "pure",
    topics: ["Differentiation"],
    stem: "Curve $C$ has equation $3xy + 1 = (x + y)^2$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2x-y}{x-2y}$.", type: "self", solution: "$3\\left(x\\frac{\\mathrm{d}y}{\\mathrm{d}x}+y\\right) = 2(x+y)\\left(1+\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right) \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2x-y}{x-2y}$." },
      { label: "(b)", marks: 3, prompt: "Find the <strong>exact</strong> $x$-coordinates of the points on $C$ whose tangent is parallel to the $x$-axis.", type: "auto", mode: "number-list", exactRequired: true, answer: [-1 / Math.sqrt(3), 1 / Math.sqrt(3)], placeholder: "Values separated by comma", solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=0 \\implies y=2x$. Sub into $C$: $6x^2+1 = 9x^2 \\implies x = \\pm\\frac{1}{\\sqrt{3}}$." },
      { label: "(c)", marks: 2, prompt: "Find the acute angle (in radians) between the tangent to $C$ at $(0, 1)$ and the $x$-axis.", type: "auto", mode: "number", answer: "atan(0.5)", placeholder: "Radians (exact or 3 s.f.)", solution: "At $(0, 1)$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{2} \\implies \\text{angle} = \\tan^{-1}\\frac{1}{2} \\approx 0.464\\text{ rad}$." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q5", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q5", category: "pure",
    topics: ["Functions", "Graphs & Transformations"],
    stem: "Function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto \\frac{kx+2}{2-x}$, $x \\ne 2$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "If $(-7, 4)$ lies on $y = \\mathrm{f}^{-1}(x)$, show that $k = 3$.", type: "self", solution: "$(4, -7)$ lies on $y = \\mathrm{f}(x) \\implies \\frac{4k+2}{2-4} = -7 \\implies k = 3$." },
      {
        label: "(b)", marks: 3, prompt: "Use $k = 3$. Function $\\mathrm{g}$ is defined by $\\mathrm{g}: x \\mapsto \\mathrm{f}(|x|)$ for $x \\le 0, x \\ne -2$. Sketch $y = \\mathrm{g}(x)$ stating intercepts and asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 165" width="205" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="80" x2="205" y2="80" stroke-width="1.3"/><line x1="155" y1="155" x2="155" y2="12" stroke-width="1.3"/><line x1="95" y1="12" x2="95" y2="155" stroke-dasharray="4,3" stroke-width="1.1"/><text x="90" y="25" text-anchor="end" stroke="none">x = −2</text><line x1="20" y1="120" x2="205" y2="120" stroke-dasharray="4,3" stroke-width="1.1"/><text x="198" y="132" text-anchor="end" stroke="none">y = −3</text><path d="M 28 124 Q 82 128 91 152" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 101 16 Q 112 58 155 64" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><circle cx="155" cy="64" r="2.6" fill="#4a8fe7"/><text x="162" y="66" stroke="none">(0, 1)</text></svg>`,
        solution: "Asymptotes $x = -2$ and $y = -3$; endpoint/intercept $(0, 1)$."
      },
      { label: "(c)", marks: 4, prompt: "Find $\\mathrm{g}^{-1}(x)$, stating its domain.", type: "self", solution: "For $x \\le 0$, $y = \\frac{-3x+2}{2+x} \\implies x = \\frac{2-2y}{3+y}$. $\\mathrm{g}^{-1}(x) = \\frac{2-2x}{3+x}$, domain $(-\\infty, -3) \\cup [1, \\infty)$." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q6", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q6", category: "pure",
    topics: ["Integration"],
    diagramSvg: `<svg viewBox="0 0 240 140" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><path d="M 38 35 Q 110 56 185 75 L 185 115 L 38 115 Z" fill="rgba(91,155,213,0.18)" stroke="none"/><line x1="20" y1="115" x2="225" y2="115" stroke-width="1.3"/><line x1="38" y1="128" x2="38" y2="14" stroke-width="1.3"/><path d="M 38 35 Q 110 56 198 78" fill="none" stroke="#2c2925" stroke-width="1.8"/><line x1="185" y1="75" x2="185" y2="115" stroke="#4a8fe7" stroke-width="1.4"/><text x="185" y="128" text-anchor="middle" stroke="none">1</text><text x="155" y="45" stroke="none" font-style="italic">y = f(x)</text></svg>`,
    stem: "Region $A$ under decreasing curve $y = \\mathrm{f}(x)$ between $x = 0$ and $x = 1$ is split into $n$ vertical strips of equal width $h$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "State the value of $h$ in terms of $n$.", type: "auto", mode: "expr", exactRequired: true, vars: { n: [5, 10] }, answer: "1/n", placeholder: "Expression in terms of n", solution: "$h = \\frac{1}{n}$." },
      { label: "(b)", marks: 2, prompt: "Show, using a sketch, that $\\sum_{r=1}^n h\\mathrm{f}(rh)$ is less than the area of $A$.", type: "self", solution: "Drawing $n$ right-endpoint rectangles of width $\\frac{1}{n}$ under the decreasing curve $y=\\mathrm{f}(x)$ shows total rectangle area $\\sum_{r=1}^n h\\mathrm{f}(rh) < A$." },
      { label: "(c)", marks: 3, prompt: "Given $\\mathrm{f}(x) = \\frac{\\mathrm{e}^{-2x}}{1+\\mathrm{e}^{-2x}}$, find the <strong>exact</strong> value of $\\lim_{n \\to \\infty} \\sum_{r=1}^n h\\mathrm{f}(rh)$.", type: "auto", mode: "number", exactRequired: true, answer: "0.5*(ln(2) - ln(1 + e^(-2)))", placeholder: "Exact value", solution: "Limit $= \\int_0^1 \\frac{\\mathrm{e}^{-2x}}{1+\\mathrm{e}^{-2x}}\\,\\mathrm{d}x = \\left[-\\frac{1}{2}\\ln(1+\\mathrm{e}^{-2x})\\right]_0^1 = \\frac{1}{2}[\\ln 2 - \\ln(1+\\mathrm{e}^{-2})]$." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q7", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q7", category: "pure",
    topics: ["Functions"],
    stem: "$\mathrm{f}: x \\mapsto (x-4)^2 - |x-4|$, $0 \\le x \\le \\lambda$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Find the greatest value of $\\lambda$ for which $\\mathrm{f}^{-1}$ exists.", type: "auto", mode: "number", answer: "7/2", placeholder: "Exact value", solution: "For $0 \\le x \\le 4$, $\\mathrm{f}(x) = x^2 - 7x + 12$ with minimum at $x = \\frac{7}{2}$. Greatest $\\lambda = \\frac{7}{2}$." },
      {
        label: "(b)-(d)", marks: 4, prompt: "$\mathrm{g}(x) = x+2$ ($-2\\le x\\le 0$), $-x-2$ ($0 < x \\le 13$). Sketch $\\mathrm{g}$, show $\\mathrm{gf}$ exists, and find the range of $\\mathrm{gf}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 140" width="205" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="50" x2="205" y2="50" stroke-width="1.3"/><line x1="65" y1="130" x2="65" y2="12" stroke-width="1.3"/><line x1="35" y1="50" x2="65" y2="26" stroke="#4a8fe7" stroke-width="1.8"/><line x1="65" y1="74" x2="185" y2="125" stroke="#4a8fe7" stroke-width="1.8"/><circle cx="65" cy="26" r="2.5" fill="#4a8fe7"/><circle cx="65" cy="74" r="2.5" fill="#fff" stroke="#4a8fe7" stroke-width="1.6"/><text x="24" y="64" stroke="none">(−2,0)</text><text x="72" y="28" stroke="none">2</text><text x="72" y="76" stroke="none">(0,−2)</text><text x="180" y="118" text-anchor="end" stroke="none">(13,−15)</text></svg>`,
        solution: "$\\mathrm{R_f} = [-\\frac{1}{4}, 12] \\subseteq [-2, 13] = \\mathrm{D_g}$, so $\\mathrm{gf}$ exists. Range of $\\mathrm{gf}$ is $[-14, -2) \\cup [\\frac{7}{4}, 2]$."
      },
      { label: "(e)", marks: 3, prompt: "Without finding $\\mathrm{gf}$ and $\\mathrm{g}^{-1}$, find the <strong>exact</strong> value of $x$ for which $\\mathrm{gf}(x) = -3$.", type: "auto", mode: "number", exactRequired: true, answer: "(7-sqrt(5))/2", placeholder: "Exact surd form", solution: "From graph of $\\mathrm{g}$, $\\mathrm{g}(1) = -3 \\implies \\mathrm{f}(x) = 1 \\implies x^2-7x+11=0 \\implies x = \\frac{7-\\sqrt{5}}{2}$ (since $x \\le \\frac{7}{2}$)." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q8", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q8", category: "pure",
    topics: ["Vectors"],
    diagramSvg: `<svg viewBox="0 0 240 155" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="115" y1="130" x2="175" y2="55" stroke-width="1.4"/><line x1="115" y1="130" x2="215" y2="115" stroke-width="1.4"/><line x1="115" y1="130" x2="45" y2="25" stroke-width="1.4"/><line x1="45" y1="25" x2="215" y2="115" stroke="#4a8fe7" stroke-width="1.4"/><text x="115" y="144" text-anchor="middle" stroke="none" font-style="italic">O</text><text x="180" y="52" stroke="none" font-style="italic">A</text><text x="220" y="118" stroke="none" font-style="italic">B</text><text x="38" y="22" stroke="none" font-style="italic">C</text><text x="148" y="75" stroke="none" font-style="italic">X</text></svg>`,
    stem: "$\\overrightarrow{OA} = \\mathbf{a}$, $\\overrightarrow{OB} = \\mathbf{b}$, $\\overrightarrow{OC} = 2\\mathbf{a} - 2\\mathbf{b}$. Lines $OA$ and $BC$ meet at $X$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Given $|\\mathbf{a}| = 2$, $|\\mathbf{b}| = 3$ and angle between $\\mathbf{a}, \\mathbf{b}$ is $\\frac{\\pi}{6}$, find the area of triangle $OBC$.", type: "auto", mode: "number", exactRequired: true, answer: "3", placeholder: "Exact value", solution: "$\\frac{1}{2}|\\mathbf{b}\\times(2\\mathbf{a}-2\\mathbf{b})| = |\\mathbf{b}\\times\\mathbf{a}| = 2(3)\\sin\\frac{\\pi}{6} = 3$." },
      { label: "(b)", marks: 3, prompt: "Show that $\\overrightarrow{OX} = \\frac{2}{3}\\mathbf{a}$.", type: "self", solution: "$\\lambda\\mathbf{a} = \\mathbf{b} + \\mu(2\\mathbf{a}-3\\mathbf{b}) \\implies \\mu=\\frac{1}{3}, \\lambda=\\frac{2}{3} \\implies \\overrightarrow{OX} = \\frac{2}{3}\\mathbf{a}$." },
      { label: "(c)", marks: 3, prompt: "Plane $p$ has equation $\\mathbf{r}\\cdot\\mathbf{n} = d$ and contains $A$ ($\\mathbf{n}$ unit vector). Shortest distance from $X$ to $p$ is $\\frac{1}{k}|d|$. Find $k$.", type: "auto", mode: "number", exactRequired: true, answer: "3", placeholder: "Integer k", solution: "$\\overrightarrow{AX} = -\\frac{1}{3}\\mathbf{a}$. Distance $= |\\overrightarrow{AX}\\cdot\\mathbf{n}| = |-\\frac{1}{3}\\mathbf{a}\\cdot\\mathbf{n}| = \\frac{1}{3}|d|$, so $k = 3$." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q9", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q9", category: "pure",
    topics: ["Sequences & Series"],
    stem: "Part (a): Energy added to a robot's backup cell increases by a constant each hour; 8th hour is $26$ units, total over first $12$ hours is $258$ units.<br>Part (b)-(d): Wallet starts with $10\\,000$ tokens; each month $+K$ tokens, then $+2\\%$ yield, then $-2500$ tokens ($u_n$ at end of $n$th month).",
    parts: [
      {
        label: "(a)", marks: 5, prompt: "Find energy added in 1st hour and min full hours before cumulative energy exceeds $1000$ units.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "1st hour =", answer: "5", exactRequired: true }, { label: "Min hours =", answer: "25", exactRequired: true }],
        solution: "$a+7d=26$, $6(2a+11d)=258 \\implies a=5, d=3$. $S_n = \\frac{n}{2}(7+3n) > 1000 \\implies n \\ge 25$."
      },
      { label: "(b)", marks: 2, prompt: "Write down expressions for $u_1$ and $u_2$ in terms of $K$.", type: "self", solution: "$u_1 = 1.02(10000+K) - 2500$; $u_2 = 1.02^2(10000) + (1.02^2+1.02)K - 2500(1.02+1)$." },
      { label: "(c)", marks: 3, prompt: "Show $u_n = 1.02^n(10\\,000) + \\alpha K(1.02^n - 1) - 125\\,000(1.02^n - 1)$, finding $\\alpha$.", type: "auto", mode: "number", exactRequired: true, answer: "51", placeholder: "Constant α", solution: "Sum of first GP $= \\frac{1.02K(1.02^n-1)}{0.02} = 51K(1.02^n-1)$, so $\\alpha = 51$." },
      { label: "(d)", marks: 2, prompt: "Find the minimum integer $K$ so the wallet never runs out of tokens in the long run.", type: "auto", mode: "number", exactRequired: true, answer: "2255", placeholder: "Integer K", solution: "Coefficient of $1.02^n$ is $10000 + 51K - 125000 > 0 \\implies K > 2254.9 \\implies K = 2255$." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q10", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q10", category: "pure",
    topics: ["Complex Numbers"],
    stem: "<em>Do not use a calculator in answering this question.</em>",
    parts: [
      {
        label: "(a)(i)-(ii)", marks: 5, prompt: "One root of $z^3 + az^2 + bz - 1 = 0$ ($a, b \\in \\mathbb{R}$) is $-\\frac{1}{2} + \\frac{\\mathrm{i}\\sqrt{3}}{2}$. Find $a, b$ (and note the other two roots in the solution).",
        type: "auto", mode: "multi-field",
        fields: [{ label: "a =", answer: "0", exactRequired: true }, { label: "b =", answer: "0", exactRequired: true }],
        solution: "Conjugate root $-\\frac{1}{2} - \\frac{\\mathrm{i}\\sqrt{3}}{2}$ gives quadratic factor $z^2+z+1$. Linear factor is $z-1$. Thus $z^3-1 = (z^2+z+1)(z-1)$, $a=0, b=0$, other roots $z=1$ and $-\\frac{1}{2}-\\frac{\\mathrm{i}\\sqrt{3}}{2}$."
      },
      { label: "(a)(iii)", marks: 2, prompt: "Using (a)(i), show that $1 + z^5 + z^7 = 0$ for $z = -\\frac{1}{2} + \\frac{\\mathrm{i}\\sqrt{3}}{2}$.", type: "self", solution: "Since $z^3 = 1$ and $1+z+z^2=0$, $1+z^5+z^7 = 1 + (z^3)z^2 + (z^3)^2 z = 1+z^2+z = 0$." },
      {
        label: "(b)", marks: 7, prompt: "$z_1 = 1 + \\mathrm{i}\\sqrt{3}$ and $z_2 = \\sqrt{3} - \\mathrm{i}$. Sketch $A(z_1), B(z_2), C(z_1+z_2)$, show $OACB$ is a square, and show $\\tan\\frac{\\pi}{12} = 2 - \\sqrt{3}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 180" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="115" x2="205" y2="115" stroke-width="1.3"/><line x1="45" y1="170" x2="45" y2="12" stroke-width="1.3"/><polygon points="45,115 82,51 146,88 109,152" fill="rgba(91,155,213,0.16)" stroke="#4a8fe7" stroke-width="1.6"/><text x="76" y="44" stroke="none">A(1, √3)</text><text x="150" y="92" stroke="none">C(1+√3, √3−1)</text><text x="108" y="166" stroke="none">B(√3, −1)</text><text x="34" y="128" stroke="none">O</text></svg>`,
        solution: "$\\mathrm{i}z_2 = 1 + \\mathrm{i}\\sqrt{3} = z_1$, so $OA \\perp OB$ and $OA = OB$, hence $OACB$ is a square.<br>$\\arg(z_1+z_2) = \\frac{\\pi}{3} - \\frac{\\pi}{4} = \\frac{\\pi}{12}$, so $\\tan\\frac{\\pi}{12} = \\frac{\\sqrt{3}-1}{\\sqrt{3}+1} = 2 - \\sqrt{3}$."
      }
    ]
  },
  {
    id: "ACJC-2026-P1-Q11", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q11", category: "pure",
    topics: ["Differential Equations"],
    stem: "Scientist A models deer population $P$ (initial $P = 50$) using $\\frac{\\mathrm{d}P}{\\mathrm{d}t} = P(1 - 0.2\\ln P)$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Using $y = \\ln P$, show $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 1 - 0.2y$.", type: "self", solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}t} = \\frac{1}{P}\\frac{\\mathrm{d}P}{\\mathrm{d}t} = 1 - 0.2\\ln P = 1 - 0.2y$." },
      { label: "(b)", marks: 4, prompt: "Solve to express $y = 5(1 - K\\mathrm{e}^{-0.2t})$, finding $K$ to <strong>4 decimal places</strong>.", type: "auto", mode: "number", dp: 4, answer: "0.2176", placeholder: "4 d.p.", solution: "$-5\\ln|1-0.2y| = t + C \\implies y = 5(1 - K\\mathrm{e}^{-0.2t})$. At $t=0, y=\\ln 50 \\implies K = 1 - \\frac{1}{5}\\ln 50 = 0.2176$." },
      { label: "(c)-(e)", marks: 4, prompt: "Find $P$ in terms of $t$, explain what happens in the long term, and sketch $P$ against $t$.", type: "self", solution: "$P = \\mathrm{e}^{5(1-0.2176\\mathrm{e}^{-0.2t})}$. As $t$ grows, $P$ increases and tends to $\\mathrm{e}^5 \\approx 148$ deer." },
      { label: "(f)-(g)", marks: 3, prompt: "Scientist B uses $\\frac{\\mathrm{d}P}{\\mathrm{d}t} = 0.2P$. Find $P$ in terms of $t$ and comment which model is more appropriate.", type: "self", solution: "$P = 50\\mathrm{e}^{0.2t}$. Model A is more appropriate because Model B grows indefinitely without limit, unrealistic due to limited space/resources." }
    ]
  },
  {
    id: "ACJC-2026-P1-Q12", year: 2026, school: "ACJC", paper: "2026 Prelim Paper 1", qNum: "Q12", category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "Curve $C$ has parametric equations $x = a\\operatorname{cosec}\\theta$, $y = 2a\\cot\\theta$ ($\\frac{\\pi}{2} < \\theta < \\pi, a > 0$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "Line $y = -x$ intersects $C$ once. Find, in terms of $a$, the exact $x$-coordinate of intersection.", type: "auto", mode: "expr", exactRequired: true, vars: { a: [1, 2] }, answer: "2*a/sqrt(3)", placeholder: "Expression in terms of a", solution: "$2a\\cot\\theta = -a\\operatorname{cosec}\\theta \\implies \\cos\\theta = -\\frac{1}{2} \\implies \\theta = \\frac{2\\pi}{3} \\implies x = \\frac{2a}{\\sqrt{3}}$." },
      { label: "(b)", marks: 2, prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2\\operatorname{cosec}\\theta}{\\cot\\theta}$.", type: "self", solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{-2a\\operatorname{cosec}^2\\theta}{-a\\operatorname{cosec}\\theta\\cot\\theta} = \\frac{2\\operatorname{cosec}\\theta}{\\cot\\theta}$." },
      { label: "(c)", marks: 5, prompt: "Normal at $P(a\\operatorname{cosec}p, 2a\\cot p)$ cuts the $x$-axis at $A$ and $y$-axis at $B$. Find the cartesian equation of the locus of midpoint $M$ of $AB$.", type: "self", solution: "$A(5a\\operatorname{cosec}p, 0)$, $B(0, \\frac{5}{2}a\\cot p)$, $M(\\frac{5}{2}a\\operatorname{cosec}p, \\frac{5}{4}a\\cot p)$. Using $\\operatorname{cosec}^2 p - \\cot^2 p = 1$: $\\left(\\frac{2x}{5a}\\right)^2 - \\left(\\frac{4y}{5a}\\right)^2 = 1$." },
      { label: "(d)", marks: 3, prompt: "Given $p$ increases at $0.1\\text{ unit/s}$, find the rate at which the area of triangle $AOB$ is changing when $p = 2$ and $a = 1$.", type: "auto", mode: "number", answer: "0.97527", placeholder: "3 s.f.", solution: "Area $w = -\\frac{25}{4}a^2\\operatorname{cosec}p\\cot p$ (since $\\cot 2 < 0$). $\\frac{\\mathrm{d}w}{\\mathrm{d}t} = 0.1\\left.\\frac{\\mathrm{d}w}{\\mathrm{d}p}\\right|_{p=2} = 0.975$ (3 s.f.)." }
    ]
  }
]);