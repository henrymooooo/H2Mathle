window.registerQuestions([
  {
    id: "DHS-2026-P1-Q1", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q1", category: "pure",
    topics: ["Rational Functions", "Remainder Theorem"],
    stem: "Curve $y = \\frac{1}{\\mathrm{f}(x)}$ ($\\mathrm{f}$ cubic) has stationary point $(-1, \\frac{1}{4})$, asymptote $x=-2$, and $\\mathrm{f}(x)$ leaves remainder $4$ when divided by $(x-2)$.",
    parts: [
      { label: "(Full)", marks: 4, prompt: "Find the equation of the curve.", type: "self", solution: "Using $\\mathrm{f}(-2)=0, \\mathrm{f}(2)=4, \\mathrm{f}(-1)=4, \\mathrm{f}'(-1)=0$: $y = \\frac{1}{x^3 - 3x + 2}$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q2", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q2", category: "pure",
    topics: ["Rates of Change", "Mensuration"],
    diagramSvg: `<svg viewBox="0 0 280 215" width="270" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="13" fill="#2c2925" stroke="#2c2925"><path d="M 76 108 L 94 178 A 36 8 0 0 0 166 178 L 184 108 Z" fill="rgba(91, 155, 213, 0.22)" stroke="none"/><ellipse cx="130" cy="108" rx="54" ry="10" fill="rgba(91, 155, 213, 0.32)" stroke="#4a8fe7" stroke-width="1.3"/><ellipse cx="130" cy="38" rx="72" ry="13" fill="none" stroke-width="1.6"/><path d="M 94 178 A 36 8 0 0 1 166 178" fill="none" stroke-dasharray="4,3" stroke-width="1.3"/><path d="M 94 178 A 36 8 0 0 0 166 178" fill="none" stroke-width="1.6"/><line x1="58" y1="38" x2="94" y2="178" stroke-width="1.6"/><line x1="202" y1="38" x2="166" y2="178" stroke-width="1.6"/><line x1="130" y1="38" x2="130" y2="178" stroke-dasharray="5,4" stroke-width="1.2"/><text x="166" y="18" text-anchor="middle" stroke="none">6 cm</text><text x="148" y="201" text-anchor="middle" stroke="none">3 cm</text><text x="234" y="112" stroke="none">8 cm</text><text x="10" y="147" font-style="italic" stroke="none">h <tspan font-style="normal">cm</tspan></text></svg>`,
    stem: "Water leaks at $15\\text{ cm}^3/\\text{s}$ from an inverted truncated cone cup (rim radius $6\\text{ cm}$, base radius $3\\text{ cm}$, height $8\\text{ cm}$).",
    parts: [
      { label: "(a)", marks: 3, prompt: "Show volume of water is $V = \\frac{3\\pi}{64}(h+8)^3 - 24\\pi$.", type: "self", solution: "Extended vertex $y=8$ below base; $r = \\frac{3}{8}(h+8) \\implies V = \\frac{1}{3}\\pi r^2(h+8) - 24\\pi = \\frac{3\\pi}{64}(h+8)^3 - 24\\pi$." },
      { label: "(b)", marks: 3, prompt: "Find the <strong>exact</strong> rate at which water level is changing when $h = 2\\text{ cm}$.", type: "auto", mode: "number", exactRequired: true, signHint: true, answer: "-16/(15*pi)", placeholder: "Exact value (cm/s)", solution: "$-15 = \\frac{9\\pi}{64}(10)^2\\frac{\\mathrm{d}h}{\\mathrm{d}t} \\implies \\frac{\\mathrm{d}h}{\\mathrm{d}t} = -\\frac{16}{15\\pi}\\text{ cm/s}$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q3", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q3", category: "pure",
    topics: ["Sequences & Series"],
    stem: "Part (a): Increasing sequence $u_1 = 1$, $u_{n+1} = 2u_n + p$. Part (b): $v_1 = a, v_2 = b$, $v_n = 2v_{n-2}+3$ ($n > 2$), with $v_4 = 3v_3$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that $p > -1$ for all $n$.", type: "self", solution: "$u_{n+1} > u_n \\implies -u_n < p$. Since $-u_n$ decreases, $p > -u_1 = -1$." },
      { label: "(b)(i)", marks: 3, prompt: "Express $b$ in terms of $a$.", type: "auto", mode: "expr", exactRequired: true, vars: { a: [1, 2] }, answer: "3*a + 3", placeholder: "Expression in terms of a", solution: "$v_3 = 2a+3, v_4 = 2b+3 = 3(2a+3) \\implies b = 3a + 3$." },
      { label: "(b)(ii)", marks: 2, prompt: "Find an expression in terms of $a$ for $v_6$.", type: "auto", mode: "expr", exactRequired: true, vars: { a: [1, 2] }, answer: "12*a + 21", placeholder: "Expression in terms of a", solution: "$v_6 = 2(2b+3)+3 = 4b+9 = 12a+21$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q4", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q4", category: "pure",
    topics: ["Integration by Parts", "Partial Fractions"],
    stem: "Evaluate the following integrals.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find $\\int \\frac{\\ln x}{x^2}\\,\\mathrm{d}x$.", type: "auto", mode: "antiderivative", domainPoints: [1, 2, 4], answer: "-ln(x)/x - 1/x", placeholder: "Expression in x + c", solution: "By parts: $-\\frac{\\ln x}{x} - \\frac{1}{x} + A$." },
      { label: "(b)", marks: 4, prompt: "Hence find $\\int_3^4\\left(\\frac{12\\ln x}{x^2} + \\frac{2x}{x^2-3x+2}\\right)\\mathrm{d}x$ in the form $C + \\ln D$, finding integers $C, D$.", type: "auto", mode: "multi-field", fields: [{ label: "C =", answer: "1", exactRequired: true }, { label: "D =", answer: "9", exactRequired: true }], solution: "$(1 - 6\\ln 2 + 4\\ln 3) + (6\\ln 2 - 2\\ln 3) = 1 + 2\\ln 3 = 1 + \\ln 9$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q5", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q5", category: "pure",
    topics: ["Functions", "Inverse & Composite Functions"],
    stem: "$\\mathrm{f}: x \\mapsto \\frac{a-x}{10x+b}$ ($x \\ne k$).",
    parts: [
      { label: "(a)-(c)", marks: 7, prompt: "Express $k$ in terms of $b$, find $\\mathrm{f}^{-1}(x)$ and its range, and given $\\mathrm{f}(x)=\\mathrm{f}^{-1}(x)$, determine $a$ and $b$.", type: "self", solution: "$k = -\\frac{b}{10}$; $\\mathrm{f}^{-1}(x) = \\frac{a-bx}{10x+1}$, range $\\mathbb{R}\\setminus\\{-b/10\\}$. $b = 1$, $a \\ne -\\frac{1}{10}$." },
      { label: "(d)", marks: 1, prompt: "$\\mathrm{g}: x \\mapsto 2x$. Find $\\mathrm{gf}^{-1}(1)$ in terms of $a$ and $b$.", type: "auto", mode: "expr", exactRequired: true, vars: { a: [2, 3], b: [4, 5] }, answer: "2*(a-b)/11", placeholder: "Expression in a and b", solution: "$\\mathrm{gf}^{-1}(1) = 2\\left(\\frac{a-b}{11}\\right)$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q6", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q6", category: "pure",
    topics: ["Graph Transformations", "Reciprocal & Derivative Graphs"],
    stem: "Part (b) uses $y = \\mathrm{f}(x)$ crossing $(0,0)$ with asymptote $y=0$ and turning points $(a, b)$ (min, $a<0$) and $(c, d)$ (max, $c>0$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "Describe two transformations mapping $3(1-x)^2 + y^2 = 1$ onto $x^2 + y^2 = 1$.", type: "self", solution: "1. Translate $1$ unit in negative $x$-direction. 2. Scale parallel to $x$-axis by factor $\\sqrt{3}$." },
      { label: "(b)", marks: 6, prompt: "Sketch (i) $y = \\frac{1}{\\mathrm{f}(x)}$ and (ii) $y = \\mathrm{f}'(x)$.", type: "self", solution: "(i) Vertical asymptote $x=0$, turning pts $(a, 1/b)$ max and $(c, 1/d)$ min, approaches $y=0$ as $|x|$ grows. (ii) Crosses $(a,0)$ and $(c,0)$, asymptote $y=0$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q7", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q7", category: "pure",
    topics: ["Conics", "Maxima & Minima"],
    diagramSvg: `<svg viewBox="0 0 200 180" width="185" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="35" y1="155" x2="180" y2="155" stroke-width="1.3"/><line x1="35" y1="155" x2="35" y2="18" stroke-width="1.3"/><path d="M 35 28 A 115 127 0 0 1 150 155" fill="none" stroke-width="1.6"/><rect x="35" y="65" width="81" height="90" fill="rgba(91,155,213,0.2)" stroke="#4a8fe7" stroke-width="1.4"/><text x="120" y="62" stroke="none" font-style="italic">P(x,y)</text><text x="95" y="170" text-anchor="middle" stroke="none">2k</text><text x="18" y="90" text-anchor="middle" stroke="none">4k²</text></svg>`,
    stem: "Quadrant of ellipse has semi-minor axis $2k$ ($x$-axis) and semi-major axis $4k^2$ ($y$-axis). Rectangular patio $OMPN$ touches $P(x,y)$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Write down the equation of the ellipse in terms of $k$.", type: "self", solution: "$\\frac{x^2}{4k^2} + \\frac{y^2}{16k^4} = 1$." },
      { label: "(b)", marks: 6, prompt: "Find the maximum area of the rectangular patio in terms of $k$ (and prove maximum in solution).", type: "auto", mode: "expr", exactRequired: true, vars: { k: [1, 2] }, answer: "4*(k^3)", placeholder: "Expression in terms of k", solution: "$A = 2kx\\sqrt{4k^2-x^2}$. Max occurs at $x = \\sqrt{2}k$, giving $A = 4k^3$." },
      { label: "(c)", marks: 2, prompt: "Explain if the ratio of max patio area to total garden area is constant for all $k > 0$.", type: "self", solution: "Garden area $= \\frac{1}{4}\\pi(2k)(4k^2) = 2\\pi k^3$. Ratio $= \\frac{4k^3}{2\\pi k^3} = \\frac{2}{\\pi}$ (constant, John is correct)." }
    ]
  },
  {
    id: "DHS-2026-P1-Q8", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q8", category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "Complex number $z$ has modulus $2$ and argument $-\\frac{\\pi}{6}$.",
    parts: [
      { label: "(a)-(b)", marks: 6, prompt: "Mark $A(z), P(z^*), Q(z+z^*), R(z-z^*)$ on an Argand diagram, state the shape of $OPQR$, and explain if $A$ lies on $QR$.", type: "self", solution: "$OPQR$ is a trapezium ($OR \\parallel PQ$). $A(\\sqrt{3}, -1)$ is the midpoint of $Q(2\\sqrt{3}, 0)$ and $R(0, -2)$, so $A$ lies on $QR$." },
      { label: "(c)", marks: 3, prompt: "$w$ satisfies $z - w^* = 2\\mathrm{i}$. Find the exact value of $\\arg(w)$.", type: "auto", mode: "number", exactRequired: true, answer: "pi/3", placeholder: "Exact angle in radians", solution: "$w = z^* + 2\\mathrm{i} = \\sqrt{3} + 3\\mathrm{i} \\implies \\arg(w) = \\tan^{-1}\\sqrt{3} = \\frac{\\pi}{3}$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q9", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q9", category: "pure",
    topics: ["Maclaurin Series", "Implicit Differentiation"],
    stem: "It is given that $y = \\sqrt{2 + \\cos x}$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Show that $2y\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + y^2 = 2$.", type: "self", solution: "$y^2 = 2+\\cos x \\implies 2y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\sin x \\implies 2y\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2(\\frac{\\mathrm{d}y}{\\mathrm{d}x})^2 = -(y^2-2)$." },
      { label: "(b)-(c)", marks: 7, prompt: "Find the first $3$ non-zero terms of the Maclaurin expansion of $\\sqrt{2+\\cos x}$ (and verify with MF27 in solution).", type: "auto", mode: "expr", exactRequired: true, vars: { x: [0.1, 0.2] }, answer: "sqrt(3) - sqrt(3)/12*(x^2) + sqrt(3)/288*(x^4)", placeholder: "Polynomial in x", solution: "At $x=0$: $y=\\sqrt{3}, y'=0, y''=-\\frac{1}{2\\sqrt{3}}, y'''=0, y^{(4)}=\\frac{1}{4\\sqrt{3}} \\implies \\sqrt{3} - \\frac{\\sqrt{3}}{12}x^2 + \\frac{\\sqrt{3}}{288}x^4$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q10", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q10", category: "pure",
    topics: ["Volumes of Revolution", "Integration by Substitution", "Area Under Curve"],
    stem: "Region $R$ above the $x$-axis is enclosed by $C: y = 3x\\sqrt{1-2x}$ on $[0, 0.5]$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the <strong>exact</strong> volume when $R$ is rotated $2\\pi$ radians about the $x$-axis.", type: "auto", mode: "number", exactRequired: true, answer: "3*pi/32", placeholder: "Exact value in pi", solution: "$\\pi\\int_0^{0.5}(9x^2-18x^3)\\,\\mathrm{d}x = \\pi[3x^3-4.5x^4]_0^{0.5} = \\frac{3\\pi}{32}$." },
      { label: "(b)", marks: 4, prompt: "Using $v = \\sqrt{1-2x}$, show $\\int_{1/3}^{1/2} y\\,\\mathrm{d}x = k\\left(\\frac{1}{3}\\right)^{1.5}$, finding $k$.", type: "auto", mode: "number", exactRequired: true, answer: "2/5", placeholder: "Exact value of k", solution: "$\\frac{3}{2}\\int_0^{1/\\sqrt{3}}(v^2-v^4)\\,\\mathrm{d}v = \\frac{2}{5}\\left(\\frac{1}{3}\\right)^{1.5}$, so $k = \\frac{2}{5}$." },
      { label: "(c)", marks: 3, prompt: "Hence find the <strong>exact</strong> area bounded by $y = \\sqrt{3}x$, $C$ and the $x$-axis.", type: "auto", mode: "number", exactRequired: true, answer: "sqrt(3)/10", placeholder: "Exact surd value", solution: "Intersection at $x=\\frac{1}{3}$: Area $= \\frac{1}{2}(\\frac{1}{3})(\\frac{\\sqrt{3}}{3}) + \\frac{2}{5}(\\frac{1}{3})^{1.5} = \\frac{\\sqrt{3}}{10}$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q11", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q11", category: "pure",
    topics: ["3D Vectors", "Planes & Reflections"],
    stem: "$A(1,2,-1)$, $B(-1,2,3)$, $C(2,1,4)$, $D(p, 0, 2)$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the cartesian equation of plane $ABC$.", type: "self", solution: "$\\overrightarrow{AB}\\times\\overrightarrow{AC} = 2\\begin{pmatrix}2\\\\7\\\\1\\end{pmatrix} \\implies 2x + 7y + z = 15$." },
      { label: "(b)", marks: 2, prompt: "Given $OD$ and plane $ABC$ are parallel, find $p$.", type: "auto", mode: "number", exactRequired: true, answer: "-1", placeholder: "Value of p", solution: "$2p + 0 + 2 = 0 \\implies p = -1$." },
      { label: "(c)", marks: 3, prompt: "Line $L \\perp ABC$ through $D$ meets $ABC$ at $F$. Find coordinates of $F$.", type: "auto", mode: "tuple", exactRequired: true, answer: [-4 / 9, 35 / 18, 41 / 18], placeholder: "Coordinates (x, y, z)", solution: "$\\lambda = \\frac{5}{18} \\implies F\\left(-\\frac{4}{9}, \\frac{35}{18}, \\frac{41}{18}\\right)$." },
      { label: "(d)", marks: 2, prompt: "Find the reflection of $D$ in plane $ABC$ (coordinates).", type: "auto", mode: "tuple", exactRequired: true, answer: [1 / 9, 35 / 9, 23 / 9], placeholder: "Coordinates (x, y, z)", solution: "$2\\overrightarrow{OF} - \\overrightarrow{OD} = \\left(\\frac{1}{9}, \\frac{35}{9}, \\frac{23}{9}\\right)$." }
    ]
  },
  {
    id: "DHS-2026-P1-Q12", year: 2026, school: "DHS", paper: "2026 Prelim Paper 1", qNum: "Q12", category: "pure",
    topics: ["Geometric Progression", "Limits"],
    stem: "A ball is dropped from height $H\\text{ m}$ and rebounds to $c$ times ($0<c<1$) its previous fall height on each bounce.",
    parts: [
      { label: "(a)-(b)", marks: 4, prompt: "Find rebound height after 3rd impact, and show total vertical distance before $(n+1)$th impact is $D_n = H\\left(\\frac{1+c-2c^{n+1}}{1-c}\\right)$.", type: "self", solution: "After 3rd impact: $Hc^3$. $D_n = H + 2Hc\\frac{1-c^n}{1-c} = H\\left(\\frac{1+c-2c^{n+1}}{1-c}\\right)$." },
      { label: "(c)(i)", marks: 3, prompt: "For $H=5, c=0.9$, find how many times the ball has impacted the floor before total vertical distance is $65\\text{ m}$.", type: "auto", mode: "number", exactRequired: true, answer: "11", placeholder: "Integer", solution: "$D_{10} = 63.619 < 65 < 66.757 = D_{11} \\implies 11$ impacts." },
      { label: "(c)(ii)", marks: 3, prompt: "Determine the height of the ball above the ground at the $65\\text{ m}$ mark (and justify direction in solution).", type: "auto", mode: "number", answer: "1.3811", placeholder: "3 s.f. (m)", solution: "$65 - 63.6189 = 1.3811 < 1.569$ (11th rebound height), so it is travelling upwards at height $1.38\\text{ m}$." },
      { label: "(c)(iii)", marks: 2, prompt: "Determine the theoretical limit to the total vertical distance travelled.", type: "auto", mode: "number", exactRequired: true, answer: "95", placeholder: "Limit in metres", solution: "As $n$ approaches infinity, $(0.9)^{n+1}$ approaches $0 \\implies D_n$ approaches $50(1.9) = 95\\text{ m}$." }
    ]
  }
]);