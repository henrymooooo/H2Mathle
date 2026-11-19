window.registerQuestions([
  {
    id: "TMJC-2026-P1-Q1",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Implicit Differentiation", "Normals"],
    stem: "A curve $C$ has equation $2x^2 + xy + y^2 = 14$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{4x+y}{x+2y}$.",
        type: "self",
        solution: "Differentiating w.r.t. $x$: $4x + x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y + 2y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies (x+2y)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -(4x+y) \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{4x+y}{x+2y}$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Line $L$ is a normal to $C$ at point $P(x, y)$. Given that the gradient of $L$ is undefined at $P$ and $P$ lies in the second quadrant, find the coordinates of $P$.",
        type: "auto",
        mode: "tuple",
        exactRequired: true,
        answer: [-1, 4],
        placeholder: "Coordinates (x, y)",
        solution: "Gradient of normal undefined implies $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies y = -4x$.<br>Sub into $C$: $2x^2 + x(-4x) + (-4x)^2 = 14 \\implies 14x^2 = 14 \\implies x = \\pm 1$.<br>Since $P$ is in the 2nd quadrant ($x<0, y>0$), $P(-1, 4)$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Line $L$ meets $C$ again at the point $Q$. Find the coordinates of $Q$.",
        type: "auto",
        mode: "tuple",
        exactRequired: true,
        answer: [-1, -3],
        placeholder: "Coordinates (x, y)",
        solution: "Equation of $L$ is $x = -1$. Sub into $C$: $2 - y + y^2 = 14 \\implies y^2 - y - 12 = 0 \\implies y = 4$ or $y = -3$.<br>Thus $Q(-1, -3)$."
      }
    ]
  },
  {
    id: "TMJC-2026-P1-Q2",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Integration by Substitution", "Integration by Parts"],
    stem: "Evaluate the following integrals.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Using the substitution $u = x^3 + 1$, solve $\\int_0^2 \\frac{x^5}{\\sqrt{x^3+1}}\\,\\mathrm{d}x$ algebraically.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "40/9",
        placeholder: "Exact value",
        solution: "$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = 3x^2 \\implies x^2\\mathrm{d}x = \\frac{1}{3}\\mathrm{d}u$. Limits: $u=1$ to $9$.<br>$\\int_1^9 \\frac{u-1}{\\sqrt{u}}\\cdot\\frac{1}{3}\\,\\mathrm{d}u = \\frac{1}{3}\\left[\\frac{2}{3}u^{3/2} - 2\\sqrt{u}\\right]_1^9 = \\frac{1}{3}\\left(12 + \\frac{4}{3}\\right) = \\frac{40}{9}$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find $\\int \\sin^{-1}x\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [-0.5, 0, 0.5],
        answer: "x*asin(x) + sqrt(1-x^2)",
        placeholder: "Expression in x + c (use asin)",
        solution: "By parts ($u = \\sin^{-1}x$, $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = 1$):<br>$x\\sin^{-1}x - \\int \\frac{x}{\\sqrt{1-x^2}}\\,\\mathrm{d}x = x\\sin^{-1}x + \\sqrt{1-x^2} + c$."
      }
    ]
  },
  {
    id: "TMJC-2026-P1-Q3",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Differential Equations", "Substitution"],
    stem: "Consider the differential equation $(1+x^2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y(1+y^2)$.",
    parts: [
      {
        label: "(Full)",
        marks: 8,
        prompt: "Show that the differential equation may be reduced to $\\frac{\\mathrm{d}\\theta}{\\mathrm{d}x} = \\frac{\\tan\\theta}{1+x^2}$ using $y = \\tan\\theta$ ($0 < \\theta < \\frac{\\pi}{2}$). Hence find the particular solution given $y = 1$ when $x = 0$.",
        type: "self",
        solution: "$1+y^2 = \\sec^2\\theta$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\sec^2\\theta\\frac{\\mathrm{d}\\theta}{\\mathrm{d}x}$.<br>$(1+x^2)\\sec^2\\theta\\frac{\\mathrm{d}\\theta}{\\mathrm{d}x} = \\tan\\theta\\sec^2\\theta \\implies \\frac{\\mathrm{d}\\theta}{\\mathrm{d}x} = \\frac{\\tan\\theta}{1+x^2}$ (shown).<br>Separating variables: $\\int\\cot\\theta\\,\\mathrm{d}\\theta = \\int\\frac{1}{1+x^2}\\,\\mathrm{d}x \\implies \\ln(\\sin\\theta) = \\tan^{-1}x + c$.<br>Since $\\sin\\theta = \\frac{y}{\\sqrt{1+y^2}}$ and $y(0)=1 \\implies c = -\\frac{1}{2}\\ln 2$, solution is $\\ln\\left(\\frac{y}{\\sqrt{1+y^2}}\\right) = \\tan^{-1}x - \\frac{1}{2}\\ln 2$."
      }
    ]
  },
  {
    id: "TMJC-2026-P1-Q4",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Summation of Series", "Integration & Divergence"],
    diagramSvg: `<svg viewBox="0 0 260 155" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="130" x2="245" y2="130" stroke-width="1.3"/><line x1="40" y1="145" x2="40" y2="12" stroke-width="1.3"/><g fill="rgba(91,155,213,0.16)" stroke="#4a8fe7" stroke-width="1.1"><rect x="65" y="42" width="26" height="88"/><rect x="91" y="86" width="26" height="44"/><rect x="117" y="101" width="26" height="29"/><rect x="195" y="120" width="26" height="10"/></g><path d="M 48 16 Q 60 65 91 86 T 232 123" fill="none" stroke="#2c2925" stroke-width="1.7"/><g stroke="none" text-anchor="middle" font-size="10"><text x="65" y="143">1</text><text x="91" y="143">2</text><text x="117" y="143">3</text><text x="143" y="143">4</text><text x="195" y="143" font-style="italic">n</text><text x="223" y="143" font-style="italic">n+1</text></g><text x="210" y="96" stroke="none" font-style="italic">y = 1/x</text></svg>`,
    stem: "Part (b) refers to the graph of $y = \\frac{1}{x}$ with $n$ rectangles of equal width $1$ unit from $x = 1$ to $x = n + 1$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Given that $\\sum_{r=1}^n r^2 = \\frac{n}{6}(n+1)(2n+1)$, find $\\sum_{r=4}^n [(r-3)(2r-1)]$ in terms of $n$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { n: [4, 5, 6] },
        answer: "n*(n+1)*(2*n+1)/3 - (n-3)*(22+7*n)/2 - 28",
        placeholder: "Expression in terms of n",
        solution: "$\\sum_{r=4}^n(2r^2 - 7r + 3) = 2\\left(\\sum_{r=1}^n r^2 - 14\\right) + \\frac{n-3}{2}(-25 + 3 - 7n) = \\frac{n}{3}(n+1)(2n+1) - \\frac{1}{2}(n-3)(22+7n) - 28$."
      },
      {
        label: "(b)(i)-(ii)",
        marks: 3,
        prompt: "Write down $S_n$, the total area of the $n$ rectangles, and by considering area under the curve using integration, show that $S = 1 + \\frac{1}{2} + \\frac{1}{3} + \\dots$ is divergent.",
        type: "self",
        solution: "(i) $S_n = 1 + \\frac{1}{2} + \\frac{1}{3} + \\dots + \\frac{1}{n}$.<br>(ii) Since the rectangles overestimate the area under $y=\\frac{1}{x}$ from $1$ to $n+1$, $S_n > \\int_1^{n+1}\\frac{1}{x}\\,\\mathrm{d}x = \\ln(n+1)$. As $n$ approaches infinity, $\\ln(n+1)$ approaches infinity, so $S$ is divergent."
      }
    ]
  },
  {
    id: "TMJC-2026-P1-Q5",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Rational Functions", "Conics", "Graph Sketching"],
    stem: "Curve $C$ has equation $y = \\frac{2x^2 + kx + 13}{x - 2}$, and the line $y = 2x - 4$ is an asymptote of $C$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Show that $k = -8$.", type: "self", solution: "$\\frac{2x^2+kx+13}{x-2} = 2x - 4 + \\frac{A}{x-2} = \\frac{2x^2 - 8x + 8 + A}{x-2}$. Comparing gives $k = -8$." },
      {
        label: "(b)", marks: 3, prompt: "Sketch $C$, stating axial intercepts, turning points and asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 190" width="225" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="95" x2="225" y2="95" stroke-width="1.3"/><line x1="85" y1="180" x2="85" y2="12" stroke-width="1.3"/><line x1="120" y1="12" x2="120" y2="180" stroke-dasharray="4,3" stroke-width="1.1"/><text x="124" y="176" stroke="none">x = 2</text><line x1="35" y1="175" x2="210" y2="18" stroke-dasharray="4,3" stroke-width="1.1"/><text x="180" y="25" stroke="none">y = 2x−4</text><path d="M 45 178 Q 85 138 92 136 Q 112 138 116 178" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 124 18 Q 130 62 148 56 Q 168 48 205 16" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="80" y="142" text-anchor="end" stroke="none">(0, −13/2)</text><text x="95" y="128" stroke="none">(0.419, −6.32)</text><text x="150" y="68" stroke="none">(3.58, 6.32)</text></svg>`,
        solution: "Asymptotes: $x=2, y=2x-4$. Turning points: $(0.419, -6.32)$ and $(3.58, 6.32)$. $y$-intercept: $(0, -\\frac{13}{2})$."
      },
      { label: "(c)", marks: 2, prompt: "Find an inequality in $a, b$ ($a, b > 0$) such that $\\frac{(x-2)^2}{a^2} - \\frac{1}{b^2}\\left(\\frac{2x^2-8x+13}{x-2}\\right)^2 = 1$ has two distinct real roots.", type: "self", solution: "Intersection of $C$ with hyperbola $\\frac{(x-2)^2}{a^2} - \\frac{y^2}{b^2} = 1$. Comparing positive asymptote gradient $\\frac{b}{a}$ with $2$: $\\frac{b}{a} > 2 \\implies b > 2a$." },
      { label: "(d)", marks: 2, prompt: "Given $a = 1$ and $b = 4$, find the roots of the equation in (c).", type: "auto", mode: "number-list", answer: [0.107471, 3.892529], placeholder: "Both roots separated by comma (3 s.f.)", solution: "From GC, solving $(x-2)^2 - \\frac{1}{16}\\left(\\frac{2x^2-8x+13}{x-2}\\right)^2 = 1$ gives $x = 0.107$ or $x = 3.89$ (3 s.f.)." }
    ]
  },
  {
    id: "TMJC-2026-P1-Q6",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Conics", "Volumes of Revolution"],
    stem: "Curves $C$ and $D$ have equations $x^2 + \\frac{y^2}{(\\mathrm{e}-1)^2} = 1$ and $y = \\mathrm{e}^{x+1} - 1$ respectively. The smaller region enclosed by $C$ and $D$ is denoted by $R$.",
    parts: [
      {
        label: "(a)", marks: 4, prompt: "Sketch $C$ and $D$ on the same diagram, clearly labelling all axial intercepts and asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 185" width="205" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="85" x2="205" y2="85" stroke-width="1.3"/><line x1="110" y1="175" x2="110" y2="12" stroke-width="1.3"/><ellipse cx="110" cy="85" rx="45" ry="62" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><line x1="25" y1="120" x2="195" y2="120" stroke-dasharray="4,3" stroke-width="1.1"/><text x="195" y="133" text-anchor="end" stroke="none">y = −1</text><path d="M 30 118 Q 55 110 65 85 Q 88 55 110 23 Q 124 8 130 5" fill="none" stroke="#e0726e" stroke-width="1.8"/><text x="60" y="78" text-anchor="end" stroke="none">(−1,0)</text><text x="160" y="98" stroke="none">(1,0)</text><text x="104" y="23" text-anchor="end" stroke="none">(0, e−1)</text><text x="115" y="156" stroke="none">(0, 1−e)</text></svg>`,
        solution: "$C$ is an ellipse centred at $(0, 0)$ with intercepts $(\\pm 1, 0)$ and $(0, \\pm(\\mathrm{e}-1))$. $D$ passes through $(-1, 0)$ and $(0, \\mathrm{e}-1)$ with horizontal asymptote $y = -1$ (above $1-\\mathrm{e} \\approx -1.72$)."
      },
      {
        label: "(b)", marks: 6, prompt: "Find the <strong>exact</strong> volume generated when $R$ is rotated completely about the $x$-axis, in the form $(a\\mathrm{e}^2 + b\\mathrm{e} + c)\\pi$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "1/6", exactRequired: true },
          { label: "b =", answer: "2/3", exactRequired: true },
          { label: "c =", answer: "-11/6", exactRequired: true }
        ],
        solution: "$V = (\\mathrm{e}-1)^2\\pi\\int_{-1}^0 (1-x^2)\\,\\mathrm{d}x - \\pi\\int_{-1}^0 (\\mathrm{e}^{x+1}-1)^2\\,\\mathrm{d}x = \\frac{2}{3}(\\mathrm{e}^2-2\\mathrm{e}+1)\\pi - \\left(\\frac{1}{2}\\mathrm{e}^2 - 2\\mathrm{e} + \\frac{5}{2}\\right)\\pi = \\left(\\frac{1}{6}\\mathrm{e}^2 + \\frac{2}{3}\\mathrm{e} - \\frac{11}{6}\\right)\\pi$."
      }
    ]
  },
  {
    id: "TMJC-2026-P1-Q7",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Small Angle Approximations", "Trigonometry"],
    diagramSvg: `<svg viewBox="0 0 240 130" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polygon points="85,22 35,105 205,105" fill="none" stroke-width="1.6"/><text x="85" y="16" text-anchor="middle" stroke="none" font-style="italic">A</text><text x="26" y="110" stroke="none" font-style="italic">B</text><text x="212" y="110" stroke="none" font-style="italic">C</text><text x="50" y="64" stroke="none">2</text><text x="88" y="42" stroke="none" font-style="italic">θ</text><text x="55" y="96" stroke="none">π/3</text></svg>`,
    stem: "In triangle $ABC$, $AB = 2$, ∠$BAC = \\theta$ radians and ∠$ABC = \\frac{\\pi}{3}$ radians.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Show that $AC = \\frac{2\\sqrt{3}}{\\sqrt{3}\\cos\\theta + \\sin\\theta}$.", type: "self", solution: "By Sine Rule: $\\frac{AC}{\\sin(\\pi/3)} = \\frac{2}{\\sin(2\\pi/3 - \\theta)} \\implies AC = \\frac{\\sqrt{3}}{\\frac{\\sqrt{3}}{2}\\cos\\theta + \\frac{1}{2}\\sin\\theta} = \\frac{2\\sqrt{3}}{\\sqrt{3}\\cos\\theta + \\sin\\theta}$." },
      { label: "(b)", marks: 5, prompt: "Given $\\theta$ is sufficiently small, express $AC$ in powers of $\\theta$ up to $\\theta^2$. (Use variable <code>theta</code> when typing.)", type: "auto", mode: "expr", exactRequired: true, vars: { theta: [0.1, 0.2] }, answer: "2 - 2/sqrt(3)*theta + 5/3*(theta^2)", placeholder: "Polynomial in theta", solution: "$AC \\approx 2\\left[1 + \\left(\\frac{\\theta}{\\sqrt{3}} - \\frac{\\theta^2}{2}\\right)\\right]^{-1} \\approx 2\\left(1 - \\frac{\\theta}{\\sqrt{3}} + \\frac{\\theta^2}{2} + \\frac{\\theta^2}{3}\\right) = 2 - \\frac{2}{\\sqrt{3}}\\theta + \\frac{5}{3}\\theta^2$." },
      { label: "(c)", marks: 2, prompt: "Find the range of $\\theta$ for the expansion in (b) to be valid.", type: "self", solution: "$\\left|\\frac{\\theta}{\\sqrt{3}} - \\frac{\\theta^2}{2}\\right| < 1 \\implies -0.950 < \\theta < 2.10$ (3 s.f.); or $0 < \\theta < \\frac{2\\pi}{3}$ in context." }
    ]
  },
  {
    id: "TMJC-2026-P1-Q8",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "<em>Do not use a calculator in answering this question.</em><br>The equation $z^2 - (7+\\mathrm{i})z + (24+7\\mathrm{i}) = 0$ has a root $z_1 = 4 + k\\mathrm{i}$, where $k \\in \\mathbb{R}$.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Show that $k = -3$ and find the other root, $z_2$.", type: "auto", mode: "complex-list", exactRequired: true, answer: ["3+4*i"], placeholder: "Other root z2", solution: "Sub $z_1=4+k\\mathrm{i}$ and compare imaginary parts: $k + 3 = 0 \\implies k = -3$.<br>Sum of roots: $7 + \\mathrm{i} = (4-3\\mathrm{i}) + z_2 \\implies z_2 = 3 + 4\\mathrm{i}$." },
      { label: "(b)", marks: 1, prompt: "With reference to $O$, explain how $Z_2(z_2)$ can be obtained from $Z_1(z_1)$ geometrically.", type: "self", solution: "$z_2 = 3 + 4\\mathrm{i} = \\mathrm{i}(4-3\\mathrm{i}) = \\mathrm{i}z_1$, so $Z_2$ is a $90°$ anti-clockwise rotation of $Z_1$ about the origin $O$." },
      {
        label: "(c)-(d)", marks: 4, prompt: "$Z_3$ represents $z_3 = z_2 - z_1$. Sketch $Z_1, Z_2, Z_3$ on an Argand diagram showing their relationship, and state the shape of $OZ_1Z_2Z_3$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 185" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="125" x2="205" y2="125" stroke-width="1.3"/><line x1="75" y1="175" x2="75" y2="12" stroke-width="1.3"/><polygon points="75,125 131,167 117,69 61,27" fill="rgba(91,155,213,0.16)" stroke="#4a8fe7" stroke-width="1.5"/><text x="135" y="171" stroke="none">Z₁(4−3i)</text><text x="122" y="68" stroke="none">Z₂(3+4i)</text><text x="64" y="24" stroke="none">Z₃(−1+7i)</text><text x="65" y="137" stroke="none">O</text></svg>`,
        solution: "$OZ_1Z_2Z_3$ is a parallelogram (in fact, a rectangle/square since $OZ_1 \\perp OZ_2$ and $OZ_1 = OZ_2 = 5$)."
      },
      { label: "(e)", marks: 2, prompt: "$(z_1)^2$, $z_2$ and a real number are roots of a polynomial of degree $n$ with real coefficients. State the smallest possible $n$.", type: "auto", mode: "number", exactRequired: true, answer: "5", placeholder: "Integer n", solution: "$(z_1)^2 = 7 - 24\\mathrm{i}$ and $z_2 = 3 + 4\\mathrm{i}$ are non-real, so their conjugates also occur as roots, plus 1 real root: $n = 5$." }
    ]
  },
  {
    id: "TMJC-2026-P1-Q9",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["AP & GP", "Financial Modelling"],
    stem: "Starting 1 Jan 2026, Aaron deposits $1500$ dollars (increasing by $20$ dollars each subsequent year) plus a $b$ dollar bonus every 31 Dec. Bob deposits $1500$ dollars each 1 Jan at $3\\%$ p.a. compound interest (credited 31 Dec).",
    parts: [
      { label: "(a)", marks: 6, prompt: "Show that after $n$ years, $A_n = 10n^2 + (1490+b)n$ and $B_n = 51500(1.03^n - 1)$.", type: "self", solution: "$A_n = \\frac{n}{2}[2(1500)+(n-1)(20)] + bn = 10n^2 + (1490+b)n$.<br>$B_n = 1500(1.03)\\frac{1.03^n-1}{1.03-1} = 51500(1.03^n - 1)$." },
      { label: "(b)", marks: 2, prompt: "Find $b$ if $A_5 = 9200$ dollars.", type: "auto", mode: "number", exactRequired: true, answer: "300", placeholder: "Value of b", solution: "$10(25) + (1490+b)(5) = 9200 \\implies b = 300$." },
      { label: "(c)", marks: 4, prompt: "Find the year in which Bob's total first exceeds Aaron's, and state the difference in their totals at the end of that year (to 2 d.p.).", type: "auto", mode: "multi-field", fields: [{ label: "Year =", answer: "2042", exactRequired: true }, { label: "Difference =", answer: "301.65", dp: 2 }], solution: "At $n=16$: $B_{16}=31142.38 < A_{16}=31200$. At $n=17$: $B_{17}=33621.65 > A_{17}=33320$.<br>17th year is 2042; difference $= 301.65$ dollars." },
      { label: "(d)", marks: 3, prompt: "Bob's rate is revised to $x\\%$ p.a. Find the minimum value of $x$ (2 d.p.) so Bob's total exceeds Aaron's at the end of $8$ years.", type: "auto", mode: "number", dp: 2, answer: "4.89", placeholder: "2 d.p.", solution: "$A_8 = 14960$. Solving $B_8 > 14960$ via GC gives $x > 4.8824 \\implies \\text{min } x = 4.89$." }
    ]
  },
  {
    id: "TMJC-2026-P1-Q10",
    year: 2026,
    school: "TMJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["3D Vectors", "Planes & Lines"],
    stem: "Plane $p_1$ has equation $x - 2y + 2z = 5$ and line $l_1$ has equation $\\frac{x-1}{\\alpha} = \\frac{2-y}{2} = z + 3$ ($\\alpha \\ne 0$).",
    parts: [
      { label: "(a)", marks: 4, prompt: "The acute angle between $p_1$ and $l_1$ is $\\sin^{-1}\\frac{4}{9}$. Find the possible values of $\\alpha$.", type: "auto", mode: "number-list", answer: [-2, 122 / 7], placeholder: "Values separated by comma", solution: "$\\frac{|\\alpha+6|}{3\\sqrt{\\alpha^2+5}} = \\frac{4}{9} \\implies 7\\alpha^2 - 108\\alpha - 244 = 0 \\implies \\alpha = -2$ or $\\frac{122}{7}$." },
      { label: "(b)", marks: 3, prompt: "Use $\\alpha = -2$. Find the position vector (coordinates) of the intersection $P$ between $p_1$ and $l_1$.", type: "auto", mode: "tuple", exactRequired: true, answer: [-6, -5, 0.5], placeholder: "Coordinates (x, y, z)", solution: "Sub $(1-2\\lambda, 2-2\\lambda, -3+\\lambda)$ into $p_1$: $-9+4\\lambda = 5 \\implies \\lambda = \\frac{7}{2} \\implies \\overrightarrow{OP} = (-6, -5, \\frac{1}{2})$." },
      { label: "(c)", marks: 3, prompt: "Line $l_2$ passes through $A(3, 1, 4)$, is parallel to $p_1$, and meets $l_1$ at $B$. Find the coordinates of $B$.", type: "auto", mode: "tuple", exactRequired: true, answer: [-8, -7, 1.5], placeholder: "Coordinates (x, y, z)", solution: "$\\overrightarrow{AB}\\cdot\\begin{pmatrix}1\\\\-2\\\\2\\end{pmatrix} = 0 \\implies \\lambda = \\frac{9}{2} \\implies B(-8, -7, \\frac{3}{2})$." },
      { label: "(d)", marks: 2, prompt: "Find the acute angle between $l_1$ and $l_2$ (in degrees, to 1 d.p.).", type: "auto", mode: "number", dp: 1, answer: "31.166", placeholder: "Degrees (1 d.p.)", solution: "Direction of $l_2$ is $(-11, -8, -\\frac{5}{2})$. $\\cos\\theta = \\frac{|22+16-5/2|}{3\\sqrt{765/4}} \\implies \\theta = 31.2°$ (1 d.p.)." },
      { label: "(e)", marks: 3, prompt: "A variable plane $p_2$ contains $l_1$ and $S(-3, y, -1)$ for every possible orientation of $p_2$. Determine $y$.", type: "auto", mode: "number", exactRequired: true, answer: "-2", placeholder: "Value of y", solution: "$S$ must lie on $l_1$: $1 - 2\\lambda = -3 \\implies \\lambda = 2 \\implies y = 2 - 2(2) = -2$." }
    ]
  }
]);