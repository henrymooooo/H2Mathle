window.registerQuestions([
  // =========================================================================
  // VJC 2025 PRELIM PAPER 2 (9758/02)
  // =========================================================================

  // ── SECTION A: PURE MATHEMATICS [40 MARKS] ────────────────────────────────

  // ── Q1 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q1",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Maclaurin Series", "Standard Series Expansions"],
    stem: "It is given that $\\mathrm{f}(x) = \\ln(a + x)$, $x \\in \\mathbb{R}$, $x > -a$, where $a$ is a constant.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Using the standard series from the List of Formulae (MF27), find the series expansion for $\\mathrm{f}(x)$, up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        vars: { a: [2, 3, 5], x: [0.2, 0.5, 0.8] },
        answer: "ln(a) + x/a - x^2/(2*a^2) + x^3/(3*a^3)",
        placeholder: "Series expansion in terms of a and x",
        solution: "$\\ln(a+x) = \\ln\\left[a\\left(1 + \\frac{x}{a}\\right)\\right] = \\ln a + \\ln\\left(1 + \\frac{x}{a}\\right)$<br>$= \\ln a + \\frac{x}{a} - \\frac{1}{2}\\left(\\frac{x}{a}\\right)^2 + \\frac{1}{3}\\left(\\frac{x}{a}\\right)^3 + \\ldots$<br>$= \\ln a + \\frac{x}{a} - \\frac{x^2}{2a^2} + \\frac{x^3}{3a^3} + \\ldots$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is given that $a = 1$.<br>Hence, or otherwise, show that the series expansion of $\\sin[\\mathrm{f}(x)]$, up to and including the term in $x^3$ is given by $x - \\frac{1}{2}x^2 + \\frac{1}{6}x^3$.",
        type: "self",
        solution: "When $a = 1$, $\\mathrm{f}(x) = \\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + \\ldots$<br>$\\sin[\\ln(1+x)] = \\sin\\left(x - \\frac{x^2}{2} + \\frac{x^3}{3} + \\ldots\\right)$<br>$= \\left(x - \\frac{x^2}{2} + \\frac{x^3}{3} + \\ldots\\right) - \\frac{1}{3!}\\left(x - \\frac{x^2}{2} + \\frac{x^3}{3} + \\ldots\\right)^3 + \\ldots$<br>$= x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{1}{6}x^3 + \\ldots$<br>$= x - \\frac{1}{2}x^2 + \\frac{1}{6}x^3 + \\ldots$ (shown)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Deduce the Maclaurin series for $\\cos[\\mathrm{f}(x)]$ up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.2, 0.5, -0.4] },
        answer: "1 - x^2/2",
        placeholder: "Polynomial in x",
        solution: "Differentiating $\\sin[\\ln(1+x)] = x - \\frac{1}{2}x^2 + \\frac{1}{6}x^3 + \\ldots$ with respect to $x$:<br>$\\frac{1}{1+x}\\cos[\\ln(1+x)] = 1 - x + \\frac{1}{2}x^2 + \\ldots$<br>$\\cos[\\ln(1+x)] = (1+x)\\left(1 - x + \\frac{1}{2}x^2 + \\ldots\\right) = 1 - x + \\frac{1}{2}x^2 + x - x^2 + \\ldots = 1 - \\frac{1}{2}x^2 + \\ldots$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find $\\int_{1}^{3} \\left(x - \\frac{1}{2}x^2 + \\frac{1}{6}x^3\\right)\\mathrm{d}x$. Without the use of a calculator or any further calculation, explain whether this value is a good approximation to the value of $\\int_{1}^{3} \\sin[\\mathrm{f}(x)]\\,\\mathrm{d}x$.",
        type: "self",
        solution: "$\\int_{1}^{3} \\left(x - \\frac{1}{2}x^2 + \\frac{1}{6}x^3\\right)\\mathrm{d}x = \\left[\\frac{x^2}{2} - \\frac{x^3}{6} + \\frac{x^4}{24}\\right]_{1}^{3} = \\left(\\frac{9}{2} - \\frac{27}{6} + \\frac{81}{24}\\right) - \\left(\\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24}\\right) = \\frac{81}{24} - \\frac{9}{24} = 3$.<br><br>The standard series expansion for $\\ln(1+x)$ is only valid for $-1 < x \\le 1$. Since the interval of integration $(1, 3)$ lies outside $(-1, 1]$, the series expansion for $\\sin[\\ln(1+x)]$ is <strong>not valid</strong> on $(1, 3)$, and hence $3$ is <strong>not a good approximation</strong>."
      }
    ]
  },

  // ── Q2 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q2",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Applications of Differentiation", "Maxima and Minima"],
    diagramSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Top face ABCD: A(60,70), B(220,70), C(188,26), D(92,26) -->
  <!-- Bottom face EFGH: E(60,166), F(220,166), G(188,122), H(92,122) -->
  <polygon points="60,70 220,70 188,26 92,26" fill="rgba(91,155,213,0.14)" stroke-width="1.5"/>
  <!-- Front vertical face ABFE -->
  <line x1="60" y1="70" x2="60" y2="166" stroke-width="1.5"/>
  <line x1="220" y1="70" x2="220" y2="166" stroke-width="1.5"/>
  <line x1="60" y1="166" x2="220" y2="166" stroke-width="1.5"/>
  <!-- Hidden vertical edges DH, CG -->
  <line x1="92" y1="26" x2="92" y2="122" stroke-dasharray="4,3" opacity="0.65"/>
  <line x1="188" y1="26" x2="188" y2="122" stroke-dasharray="4,3" opacity="0.65"/>
  <!-- Bottom trapezoid back edges EH, HG, GF -->
  <line x1="60" y1="166" x2="92" y2="122" stroke-width="1.3"/>
  <line x1="92" y1="122" x2="188" y2="122" stroke-width="1.3"/>
  <line x1="188" y1="122" x2="220" y2="166" stroke-width="1.3"/>
  <!-- Angle arcs at A and B -->
  <path d="M 75,70 A 15,15 0 0,0 69,58" fill="none" stroke-width="1.1"/>
  <path d="M 205,70 A 15,15 0 0,1 211,58" fill="none" stroke-width="1.1"/>
  <text x="74" y="65" stroke="none" font-size="9.5">60°</text>
  <text x="191" y="65" stroke="none" font-size="9.5">60°</text>
  <!-- Vertex labels -->
  <text x="47" y="74" stroke="none" font-style="italic">A</text>
  <text x="225" y="74" stroke="none" font-style="italic">B</text>
  <text x="192" y="25" stroke="none" font-style="italic">C</text>
  <text x="78" y="25" stroke="none" font-style="italic">D</text>
  <text x="47" y="170" stroke="none" font-style="italic">E</text>
  <text x="225" y="170" stroke="none" font-style="italic">F</text>
  <text x="192" y="121" stroke="none" font-style="italic">G</text>
  <text x="78" y="121" stroke="none" font-style="italic">H</text>
  <!-- Edge length labels -->
  <text x="134" y="20" stroke="none" font-style="italic">3x</text>
  <text x="134" y="64" stroke="none" font-style="italic">5x</text>
  <text x="47" y="122" stroke="none" font-style="italic">y</text>
  <text x="226" y="122" stroke="none" font-style="italic">y</text>
  <text x="97" y="96" stroke="none" font-style="italic">y</text>
  <text x="176" y="96" stroke="none" font-style="italic">y</text>
</svg>`,
    stem: "The diagram above shows the dimensions of a trapezoidal prism with fixed volume $4k\\sqrt{3}$ units$^3$, with variables $x$ and $y$.<br>The top surface of the prism, $ABCD$, is an isosceles trapezoid with $AB$ of length $5x$ units, $DC$ of length $3x$ units, $AD = BC$ and ∠$ABC =$ ∠$BAD = 60^\\circ$. The rectangular sides $ABFE$ and $BCGF$ are perpendicular to both the top surface $ABCD$ and the bottom surface $EFGH$, with $AE = BF = DH = CG = y$ units.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that the total external surface area $A$ of the trapezoidal prism is given by $A = 8x^2\\sqrt{3} + \\frac{12k}{x}$.",
        type: "self",
        solution: "Let $h$ be the perpendicular height of the isosceles trapezoid $ABCD$. Since $AB = 5x$ and $DC = 3x$, the horizontal projection of each slanted side is $\\frac{5x - 3x}{2} = x$.<br>Thus $h = x\\tan 60^\\circ = x\\sqrt{3}$ and $AD = BC = \\frac{x}{\\cos 60^\\circ} = 2x$.<br><br>Volume $V = \\frac{1}{2}(5x + 3x)(x\\sqrt{3}) \\cdot y = 4\\sqrt{3}x^2 y$.<br>Given $V = 4k\\sqrt{3}$, we have $4\\sqrt{3}x^2 y = 4k\\sqrt{3} \\implies y = \\frac{k}{x^2}$.<br><br>Total external surface area $A$:<br>$A = 2 \\times \\frac{1}{2}(5x+3x)(x\\sqrt{3}) + (5x + 3x + 2x + 2x)y$<br>$= 8\\sqrt{3}x^2 + 12xy = 8\\sqrt{3}x^2 + 12x\\left(\\frac{k}{x^2}\\right) = 8x^2\\sqrt{3} + \\frac{12k}{x}$ (shown)."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Using differentiation, find the value of $x$ in terms of $k$ at which $A$ is a minimum.",
        type: "auto",
        mode: "expr",
        vars: { k: [1, 8, 27] },
        answer: "(sqrt(3)*k/4)^(1/3)",
        placeholder: "Expression in terms of k",
        solution: "$\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 16\\sqrt{3}x - \\frac{12k}{x^2}$.<br>Set $\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 0$:<br>$16\\sqrt{3}x = \\frac{12k}{x^2} \\implies x^3 = \\frac{12k}{16\\sqrt{3}} = \\frac{3k}{4\\sqrt{3}} = \\frac{\\sqrt{3}k}{4} \\implies x = \\left(\\frac{\\sqrt{3}k}{4}\\right)^{\\frac{1}{3}}$.<br><br>Second derivative test:<br>$\\frac{\\mathrm{d}^2 A}{\\mathrm{d}x^2} = 16\\sqrt{3} + \\frac{24k}{x^3}$.<br>Since $k > 0$ and $x > 0$, $\\frac{\\mathrm{d}^2 A}{\\mathrm{d}x^2} > 0$ (in fact, $48\\sqrt{3} > 0$).<br>Hence $A$ is a minimum when $x = \\left(\\frac{\\sqrt{3}k}{4}\\right)^{\\frac{1}{3}}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "It is given instead that the volume of the prism is $1000$ units$^3$ and its external surface area is $800$ units$^2$. Find the two possible values of $x$.",
        type: "auto",
        mode: "number-list",
        answer: [2.406433, 6.103756],
        placeholder: "Separate two values with a comma (3 s.f.)",
        solution: "When $V = 1000$, $4k\\sqrt{3} = 1000 \\implies k = \\frac{250}{\\sqrt{3}}$.<br>Substituting into $A = 800$:<br>$8\\sqrt{3}x^2 + \\frac{12}{x}\\left(\\frac{250}{\\sqrt{3}}\\right) = 800 \\implies 8\\sqrt{3}x^3 - 800x + \\frac{3000}{\\sqrt{3}} = 0$.<br>From GC, $x = -8.5102$ (rejected since $x > 0$), $x = 2.4064 \\approx 2.41$ or $x = 6.1038 \\approx 6.10$."
      }
    ]
  },

  // ── Q3 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q3",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors in 3D", "Lines and Planes"],
    stem: "With reference to the point $O$ as the origin and the $x$-$y$ plane as a horizontal plane, the pyramid $OPQRV$ has a parallelogram base $OPQR$ and height $OV$. The position vectors of the points $P$ and $R$ are $-3\\mathbf{i} + 4\\mathbf{j} + 3\\mathbf{k}$ and $5\\mathbf{i} - 2\\mathbf{j} - \\mathbf{k}$ respectively.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the coordinates of the point $S$ that lies on the line $PR$ such that the distance from $O$ to $S$ is a minimum.",
        type: "auto",
        mode: "tuple",
        answer: [33/29, 26/29, 27/29],
        placeholder: "Coordinates (x, y, z)",
        solution: "$PR = \\begin{pmatrix} 5 \\\\ -2 \\\\ -1 \\end{pmatrix} - \\begin{pmatrix} -3 \\\\ 4 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ -6 \\\\ -4 \\end{pmatrix} = -2\\begin{pmatrix} -4 \\\\ 3 \\\\ 2 \\end{pmatrix}$.<br>Line $PR$: $\\mathbf{r} = \\begin{pmatrix} 5 \\\\ -2 \\\\ -1 \\end{pmatrix} + \\lambda\\begin{pmatrix} -4 \\\\ 3 \\\\ 2 \\end{pmatrix}, \\; \\lambda \\in \\mathbb{R}$.<br>For $OS$ to be minimum, $OS \\perp PR$, so $OS \\cdot \\begin{pmatrix} -4 \\\\ 3 \\\\ 2 \\end{pmatrix} = 0$:<br>$\\left[\\begin{pmatrix} 5 \\\\ -2 \\\\ -1 \\end{pmatrix} + \\lambda\\begin{pmatrix} -4 \\\\ 3 \\\\ 2 \\end{pmatrix}\\right] \\cdot \\begin{pmatrix} -4 \\\\ 3 \\\\ 2 \\end{pmatrix} = 0$<br>$(-20 - 6 - 2) + \\lambda(16 + 9 + 4) = 0 \\implies 29\\lambda = 28 \\implies \\lambda = \\frac{28}{29}$.<br>$OS = \\begin{pmatrix} 5 \\\\ -2 \\\\ -1 \\end{pmatrix} + \\frac{28}{29}\\begin{pmatrix} -4 \\\\ 3 \\\\ 2 \\end{pmatrix} = \\frac{1}{29}\\begin{pmatrix} 33 \\\\ 26 \\\\ 27 \\end{pmatrix}$.<br>$\\therefore$ Coordinates of $S$ are $\\left(\\frac{33}{29}, \\frac{26}{29}, \\frac{27}{29}\\right)$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the cartesian equations of the planes such that the perpendicular distance from each plane to the base $OPQR$ is $2\\sqrt{86}$ units.",
        type: "self",
        solution: "Normal vector to the base $OPQR$:<br>$OP \\times OR = \\begin{pmatrix} -3 \\\\ 4 \\\\ 3 \\end{pmatrix} \\times \\begin{pmatrix} 5 \\\\ -2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 12 \\\\ -14 \\end{pmatrix} = 2\\begin{pmatrix} 1 \\\\ 6 \\\\ -7 \\end{pmatrix}$.<br>Take normal $\\mathbf{n} = \\begin{pmatrix} 1 \\\\ 6 \\\\ -7 \\end{pmatrix}$, with $|\\mathbf{n}| = \\sqrt{1 + 36 + 49} = \\sqrt{86}$.<br>Since the base passes through $O$, the planes parallel to $OPQR$ at distance $2\\sqrt{86}$ satisfy:<br>$\\frac{|\\mathbf{r} \\cdot \\mathbf{n}|}{\\sqrt{86}} = 2\\sqrt{86} \\implies \\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ 6 \\\\ -7 \\end{pmatrix} = \\pm 2(86) = \\pm 172$.<br>$\\therefore$ The cartesian equations are $x + 6y - 7z = 172$ and $x + 6y - 7z = -172$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the acute angle between $OV$ and the vertical.",
        type: "auto",
        mode: "number",
        answer: "40.989534",
        dp: 1,
        placeholder: "Angle in degrees (1 d.p.)",
        solution: "Since $OV$ is the height of the pyramid perpendicular to base $OPQR$, $OV$ is parallel to $\\begin{pmatrix} 1 \\\\ 6 \\\\ -7 \\end{pmatrix}$. The vertical direction is $\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$.<br>$\\cos\\theta = \\frac{\\left|\\begin{pmatrix} 1 \\\\ 6 \\\\ -7 \\end{pmatrix} \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}\\right|}{\\sqrt{86}(1)} = \\frac{7}{\\sqrt{86}}$.<br>$\\therefore \\theta = 40.9895^\\circ \\approx 41.0^\\circ$ (to 1 d.p.)."
      },
      {
        label: "(d)",
        marks: 5,
        prompt: "Given that $QV$ is parallel to the vector $-5\\mathbf{j} + 8\\mathbf{k}$, find the position vector of the point $V$. Hence find the exact volume of the pyramid $OPQRV$.<br>[Volume of a pyramid $= \\frac{1}{3} \\times \\text{base area} \\times \\text{height}$]",
        type: "self",
        solution: "Since $OPQR$ is a parallelogram:<br>$OQ = OP + OR = \\begin{pmatrix} -3 \\\\ 4 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 5 \\\\ -2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix}$.<br>Let $OV = \\beta\\begin{pmatrix} 1 \\\\ 6 \\\\ -7 \\end{pmatrix}$ and $QV = \\alpha\\begin{pmatrix} 0 \\\\ -5 \\\\ 8 \\end{pmatrix}$. Since $OV = OQ + QV$:<br>$\\beta\\begin{pmatrix} 1 \\\\ 6 \\\\ -7 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix} + \\alpha\\begin{pmatrix} 0 \\\\ -5 \\\\ 8 \\end{pmatrix}$.<br>From the $x$-component: $\\beta = 2$ (and checking $y, z$: $12 = 2 - 5\\alpha \\implies \\alpha = -2$, $-14 = 2 + 8(-2)$, consistent).<br>$\\therefore OV = 2\\begin{pmatrix} 1 \\\\ 6 \\\\ -7 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 12 \\\\ -14 \\end{pmatrix}$.<br><br>Exact volume of pyramid $OPQRV$:<br>$= \\frac{1}{3} \\times |OP \\times OR| \\times |OV| = \\frac{1}{3} \\left|\\begin{pmatrix} 2 \\\\ 12 \\\\ -14 \\end{pmatrix}\\right| \\left|\\begin{pmatrix} 2 \\\\ 12 \\\\ -14 \\end{pmatrix}\\right| = \\frac{1}{3}(4 + 144 + 196) = \\frac{344}{3}$ units$^3$."
      }
    ]
  },

  // ── Q4 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q4",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    diagramSvg: `<svg viewBox="0 0 260 170" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="100" x2="235" y2="100" stroke-width="1.2"/>
  <polyline points="230,96 236,100 230,104" fill="none" stroke-width="1.2"/>
  <line x1="130" y1="160" x2="130" y2="18" stroke-width="1.2"/>
  <polyline points="126,23 130,17 134,23" fill="none" stroke-width="1.2"/>
  <text x="234" y="114" stroke="none">Re</text>
  <text x="110" y="20" stroke="none">Im</text>
  <text x="117" y="113" stroke="none" font-style="italic">O</text>
  <!-- Point P in Q2 at approx (-30, 30) from O -> (100, 70) -->
  <line x1="96" y1="66" x2="104" y2="74" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="104" y1="66" x2="96" y2="74" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="84" y="72" stroke="none" font-style="italic">P</text>
</svg>`,
    stem: "<strong>Do not use a calculator in answering this question.</strong><br>The complex number $z$ has modulus $1$ and argument $\\theta$, where $\\frac{\\pi}{2} < \\theta < \\pi$, and the complex number $w$ is given by $w = \\mathrm{i}\\sqrt{3}z$. The point $P$ on the Argand diagram represents $z$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "On a copy of the Argand diagram with origin $O$, plot the points $Q$ and $R$ to represent $w$ and $z - w$ respectively. Show clearly the geometrical relationship between the points $P$, $Q$ and $R$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 220" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- O at (130, 125). Scale: 1 unit = 40px.
       Let theta = 135 deg: P = (-28.3, -28.3) -> (101.7, 96.7)
       w = i*sqrt(3)*z: angle 225 deg, len 40*sqrt(3) = 69.3 -> Q = (-49, +49) -> (81, 174)
       z - w = P - Q: (+20.7, -77.3) -> R = (150.7, 47.7) -->
  <line x1="25" y1="125" x2="235" y2="125" stroke-width="1.2"/>
  <polyline points="230,121 236,125 230,129" fill="none" stroke-width="1.2"/>
  <line x1="130" y1="205" x2="130" y2="16" stroke-width="1.2"/>
  <polyline points="126,21 130,15 134,21" fill="none" stroke-width="1.2"/>
  <text x="233" y="139" stroke="none">Re</text>
  <text x="110" y="20" stroke="none">Im</text>
  <text x="118" y="138" stroke="none" font-style="italic">O</text>
  <!-- Dashed segments OP, OQ, PR, OR, QR -->
  <line x1="130" y1="125" x2="101.7" y2="96.7" stroke-dasharray="4,3" stroke="#4a8fe7" stroke-width="1.4"/>
  <line x1="130" y1="125" x2="81" y2="174" stroke-dasharray="4,3" stroke="#4a8fe7" stroke-width="1.4"/>
  <line x1="101.7" y1="96.7" x2="150.7" y2="47.7" stroke-dasharray="4,3" stroke="#4a8fe7" stroke-width="1.4"/>
  <!-- Right angle marker at O between OP and OQ -->
  <polyline points="123,118 116,125 123,132" fill="none" stroke-width="1.1"/>
  <!-- Right angle marker at P between OP and PR -->
  <polyline points="108.7,103.7 115.7,96.7 108.7,89.7" fill="none" stroke-width="1.1"/>
  <!-- Points P, Q, R -->
  <line x1="98" y1="93" x2="105" y2="100" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="105" y1="93" x2="98" y2="100" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="77" y1="170" x2="85" y2="178" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="85" y1="170" x2="77" y2="178" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="147" y1="44" x2="155" y2="52" stroke="#cf5652" stroke-width="1.8"/>
  <line x1="155" y1="44" x2="147" y2="52" stroke="#cf5652" stroke-width="1.8"/>
  <text x="86" y="96" stroke="none" font-style="italic">P</text>
  <text x="66" y="182" stroke="none" font-style="italic">Q</text>
  <text x="158" y="49" stroke="none" font-style="italic" fill="#cf5652">R</text>
  <text x="104" y="119" stroke="none" font-size="10">1</text>
  <text x="90" y="149" stroke="none" font-size="10">√3</text>
  <text x="111" y="72" stroke="none" font-size="10">√3</text>
</svg>`,
        solution: "- $Q$ represents $w = \\mathrm{i}\\sqrt{3}z$: rotate $OP$ anticlockwise by $\\frac{\\pi}{2}$ about $O$ and scale by $\\sqrt{3}$, so $OQ \\perp OP$ and $OQ = \\sqrt{3}$ (in Quadrant 3).<br>- $R$ represents $z - w = z + (-w)$: from $P$, move parallel to $QO$ (i.e. perpendicular to $OP$ in the opposite direction to $OQ$) by distance $\\sqrt{3}$, so $PR \\parallel QO$, $PR \\perp OP$, and $PR = OQ = \\sqrt{3}$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Find the area of the quadrilateral $ORPQ$.",
        type: "auto",
        mode: "number",
        answer: "sqrt(3)",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "$ORPQ$ is a trapezium with parallel sides $PR = \\sqrt{3}$ and $OQ = \\sqrt{3}$ (in fact, a parallelogram) and perpendicular height $OP = 1$:<br>$\\text{Area of } ORPQ = \\frac{1}{2}(1)(\\sqrt{3} + \\sqrt{3}) = \\sqrt{3}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "It is given that $\\theta = \\frac{3\\pi}{4}$.<br>Find $z$ in the form $x + y\\mathrm{i}$, where $x$ and $y$ are real numbers.",
        type: "auto",
        mode: "complex-list",
        answer: ["-1/sqrt(2) + i/sqrt(2)"],
        placeholder: "Complex number in form x + yi",
        solution: "$z = \\cos\\frac{3\\pi}{4} + \\mathrm{i}\\sin\\frac{3\\pi}{4} = -\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}}\\mathrm{i}$ (or $-\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\mathrm{i}$)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Show that $z - w = k\\left[(\\sqrt{3} - 1) + (\\sqrt{3} + 1)\\mathrm{i}\\right]$, where $k$ is a constant to be determined.",
        type: "self",
        solution: "$z - w = z - \\mathrm{i}\\sqrt{3}z = z(1 - \\mathrm{i}\\sqrt{3})$<br>$= \\frac{1}{\\sqrt{2}}(-1 + \\mathrm{i})(1 - \\mathrm{i}\\sqrt{3})$<br>$= \\frac{1}{\\sqrt{2}}(-1 + \\mathrm{i}\\sqrt{3} + \\mathrm{i} + \\sqrt{3})$<br>$= \\frac{1}{\\sqrt{2}}\\left[(\\sqrt{3} - 1) + (\\sqrt{3} + 1)\\mathrm{i}\\right]$.<br>Hence $k = \\frac{1}{\\sqrt{2}}$ (or $\\frac{\\sqrt{2}}{2}$)."
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "Hence show that $\\tan\\frac{5\\pi}{12} = \\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1}$.",
        type: "self",
        solution: "In right-angled △$OPR$, $\\tan($∠$POR) = \\frac{PR}{OP} = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$, so ∠$POR = \\frac{\\pi}{3}$.<br>Since $\\arg(z) = \\frac{3\\pi}{4}$, we have $\\arg(z - w) = \\frac{3\\pi}{4} - \\frac{\\pi}{3} = \\frac{5\\pi}{12}$.<br>From part (d), $z - w$ lies in Quadrant 1 with real part $k(\\sqrt{3}-1)$ and imaginary part $k(\\sqrt{3}+1)$.<br>$\\therefore \\tan\\frac{5\\pi}{12} = \\frac{k(\\sqrt{3}+1)}{k(\\sqrt{3}-1)} = \\frac{\\sqrt{3}+1}{\\sqrt{3}-1}$ (shown)."
      }
    ]
  },

  // ── SECTION B: PROBABILITY AND STATISTICS [60 MARKS] ──────────────────────

  // ── Q5 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q5",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Permutations and Combinations", "Probability"],
    stem: "A code consists of 10 characters.<br>The first 5 characters of the code is formed using 5 letters chosen from the set $\\{\\text{A, B, C, D, E, F, G, H}\\}$ and the last 5 characters of the code is formed using 5 digits chosen from the set $\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 0\\}$. The code allows for repetitions of letters and/or digits.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the number of different codes that can be formed.",
        type: "auto",
        mode: "number",
        answer: "3276800000",
        exactRequired: true,
        placeholder: "Exact integer",
        solution: "Number of codes $= 8^5 \\times 10^5 = 3276800000$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Find the probability that a code chosen at random contains the letter E exactly thrice and the number 5 exactly once.",
        type: "auto",
        mode: "number",
        answer: "321489/65536000",
        placeholder: "Exact fraction or 3 s.f.",
        solution: "$\\mathrm{P}(\\text{E exactly thrice and 5 exactly once}) = \\frac{^5\\text{C}_3 \\times 7^2 \\times {}^5\\text{C}_1 \\times 9^4}{8^5 \\times 10^5} = \\frac{321489}{65536000} \\approx 0.00491$ (to 3 s.f.)."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Find the probability that a code chosen at random has E as the first character or 4 as its tenth character, but not both.",
        type: "auto",
        mode: "number",
        answer: "0.2",
        placeholder: "Exact value",
        solution: "Required probability:<br>$= \\mathrm{P}(\\text{1st is E, 10th not 4}) + \\mathrm{P}(\\text{1st not E, 10th is 4})$<br>$= \\frac{1}{8} \\times \\frac{9}{10} + \\frac{7}{8} \\times \\frac{1}{10} = \\frac{9 + 7}{80} = \\frac{16}{80} = 0.2$."
      }
    ]
  },

  // ── Q6 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q6",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability", "Conditional Probability", "Venn Diagrams"],
    stem: "Two events $A$ and $B$ are such that $\\mathrm{P}(A) = p$ and $\\mathrm{P}(B) = \\frac{5}{4}p$. It is given that $\\mathrm{P}(A \\cup B) = \\mathrm{P}(A \\mid B) = 0.6$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the value of $p$.",
        type: "auto",
        mode: "number",
        answer: "0.4",
        placeholder: "Exact value",
        solution: "$\\mathrm{P}(A \\mid B) = \\frac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)} = 0.6 \\implies \\mathrm{P}(A \\cap B) = 0.6 \\times \\frac{5}{4}p = 0.75p$.<br>Using $\\mathrm{P}(A \\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B) - \\mathrm{P}(A \\cap B)$:<br>$0.6 = p + \\frac{5}{4}p - 0.75p = 1.5p$<br>$\\therefore p = 0.4$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Explain whether the events $A'$ and $B$ are independent.",
        type: "self",
        solution: "$\\mathrm{P}(A \\mid B) = 0.6 \\ne 0.4 = \\mathrm{P}(A)$, so $A$ and $B$ are not independent. Hence $A'$ and $B$ are <strong>not independent</strong>.<br>(Alternatively: $\\mathrm{P}(A' \\cap B) = \\mathrm{P}(B) - \\mathrm{P}(A \\cap B) = 0.5 - 0.3 = 0.2 \\ne 0.6 \\times 0.5 = \\mathrm{P}(A')\\mathrm{P}(B)$, so $A'$ and $B$ are not independent.)"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The events $C$ and $D$ are such that $\\mathrm{P}(C) = 0.55$, $\\mathrm{P}(D) = 0.6$ and $\\mathrm{P}(A \\cap C) = \\mathrm{P}(A \\cap D) = \\mathrm{P}(C \\cap D) = q$.<br>Find the value of $q$ that gives the minimum value of $\\mathrm{P}(A \\cup C \\cup D)$ and state the minimum value of $\\mathrm{P}(A \\cup C \\cup D)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "q =", answer: "0.4", placeholder: "Exact value" },
          { label: "Min P(A U C U D) =", answer: "0.75", placeholder: "Exact value" }
        ],
        solutionSvg: `<svg viewBox="0 0 280 215" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <rect x="8" y="8" width="264" height="198" fill="none" stroke-width="1.2"/>
  <circle cx="140" cy="76" r="56" fill="rgba(76,168,133,0.10)" stroke="#4ca885" stroke-width="1.5"/>
  <circle cx="102" cy="136" r="56" fill="rgba(76,168,133,0.10)" stroke="#4ca885" stroke-width="1.5"/>
  <circle cx="178" cy="136" r="56" fill="rgba(76,168,133,0.10)" stroke="#4ca885" stroke-width="1.5"/>
  <text x="86" y="34" stroke="none" font-style="italic">A</text>
  <text x="34" y="150" stroke="none" font-style="italic">C</text>
  <text x="238" y="150" stroke="none" font-style="italic">D</text>
  <text x="111" y="58" stroke="none">0.4 − 2q + x</text>
  <text x="56" y="148" stroke="none">0.55 − 2q + x</text>
  <text x="163" y="148" stroke="none">0.6 − 2q + x</text>
  <text x="98" y="102" stroke="none">q − x</text>
  <text x="157" y="102" stroke="none">q − x</text>
  <text x="128" y="160" stroke="none">q − x</text>
  <text x="137" y="122" stroke="none" font-style="italic">x</text>
</svg>`,
        solution: "Let $x = \\mathrm{P}(A \\cap C \\cap D)$.<br>By inclusion-exclusion:<br>$\\mathrm{P}(A \\cup C \\cup D) = \\mathrm{P}(A) + \\mathrm{P}(C) + \\mathrm{P}(D) - 3q + x = 0.4 + 0.55 + 0.6 - 3q + x = 1.55 - 3q + x$.<br>From the Venn diagram, every region must be non-negative: $q - x \\ge 0 \\implies x \\le q$, and $0.4 - 2q + x \\ge 0$.<br>Since $1.55 - 3q + x = 1.55 - 2q - (q - x)$, to minimise $\\mathrm{P}(A \\cup C \\cup D)$ we maximise $q$ and minimise $x$ relative to $2q$, which occurs when $q - x = 0$ (i.e. $x = q$) and $0.4 - 2q + x = 0 \\implies 0.4 - q = 0 \\implies q = 0.4$.<br>Minimum value of $\\mathrm{P}(A \\cup C \\cup D) = 1.55 - 3(0.4) + 0.4 = 0.75$."
      }
    ]
  },

  // ── Q7 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q7",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Binomial Distribution"],
    stem: "A shop sells apples in bags of $12$. The average number of unripe apples in a bag is $2.16$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State two assumptions needed for the number of unripe apples in a bag to be well modelled by a binomial distribution.",
        type: "self",
        solution: "1. The probability of each apple being unripe is constant.<br>2. Whether an apple is unripe is independent of other apples."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "A bag of apples is sold at a reduced price if more than $3$ apples are unripe.<br>Find the probability that a randomly selected bag of apples is sold at a reduced price.",
        type: "auto",
        mode: "number",
        answer: "0.15515053",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $X$ be the number of unripe apples in a bag of $12$.<br>$p = \\frac{2.16}{12} = 0.18$, so $X \\sim \\mathrm{B}(12, 0.18)$.<br>$\\mathrm{P}(X > 3) = 1 - \\mathrm{P}(X \\le 3) = 0.15515 \\approx 0.155$ (to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Twenty bags of apples are selected at random. Find the probability that fewer than $4$ of these bags will be sold at a reduced price.",
        type: "auto",
        mode: "number",
        answer: "0.62265229",
        answers: ["0.62265229", "0.62338630"],
        placeholder: "Correct to 3 s.f.",
        solution: "Let $Y$ be the number of bags sold at a reduced price out of $20$.<br>$Y \\sim \\mathrm{B}(20, 0.15515)$.<br>$\\mathrm{P}(Y < 4) = \\mathrm{P}(Y \\le 3) = 0.62265 \\approx 0.623$ (to 3 s.f.)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The shop also sells oranges in bags of $n$ oranges. On average, the proportion of oranges that is unripe is $0.16$. It is known that the modal number of unripe oranges in a bag is $2$. Find the set of possible values of $n$.",
        type: "self",
        solution: "Let $W$ be the number of unripe oranges in a bag of $n$ oranges; $W \\sim \\mathrm{B}(n, 0.16)$.<br>Since the mode is $2$, $\\mathrm{P}(W = 1) < \\mathrm{P}(W = 2)$ and $\\mathrm{P}(W = 3) < \\mathrm{P}(W = 2)$.<br><div class='q-table-wrap'><table class='q-table'><tr><th>$n$</th><th>$\\mathrm{P}(W=1)$</th><th>$\\mathrm{P}(W=2)$</th><th>$\\mathrm{P}(W=3)$</th></tr><tr><td>$11$</td><td>$0.308$</td><td>$0.293$</td><td>$0.168$</td></tr><tr><td>$12$</td><td>$0.282$</td><td>$0.296$</td><td>$0.188$</td></tr><tr><td>$17$</td><td>$0.167$</td><td>$0.255$</td><td>$0.243$</td></tr><tr><td>$18$</td><td>$0.149$</td><td>$0.241$</td><td>$0.244$</td></tr></table></div><br>Hence the set of possible values of $n$ is $\\{n \\in \\mathbb{Z} : 12 \\le n \\le 17\\}$ (or $\\{12, 13, 14, 15, 16, 17\\}$)."
      }
    ]
  },

  // ── Q8 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q8",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Discrete Random Variables", "Expectation and Variance"],
    diagramSvg: `<svg viewBox="0 0 240 210" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Concentric circles centred at (120, 105): radii 92 (40cm), 55 (24cm), 28 (12cm) -->
  <circle cx="120" cy="105" r="92" fill="rgba(76,168,133,0.10)" stroke-width="1.5"/>
  <circle cx="120" cy="105" r="55" fill="rgba(207,86,82,0.10)" stroke-width="1.5"/>
  <circle cx="120" cy="105" r="28" fill="rgba(235,190,65,0.20)" stroke-width="1.5"/>
  <circle cx="120" cy="105" r="2" fill="#2c2925"/>
  <!-- Radius lines -->
  <line x1="120" y1="105" x2="212" y2="105" stroke-width="1.1"/>
  <line x1="120" y1="105" x2="159" y2="66" stroke-width="1.1"/>
  <line x1="120" y1="105" x2="140" y2="125" stroke-width="1.1"/>
  <text x="108" y="27" stroke="none">Blue</text>
  <text x="110" y="64" stroke="none">Red</text>
  <text x="107" y="92" stroke="none">Gold</text>
  <text x="174" y="118" stroke="none" font-size="9.5">40 cm</text>
  <text x="142" y="90" stroke="none" font-size="9.5">24 cm</text>
  <text x="102" y="123" stroke="none" font-size="9.5">12 cm</text>
</svg>`,
    stem: "The diagram above shows a circular target board of radius $40$ cm, divided by two concentric circles of radii $12$ cm and $24$ cm, into three regions, Gold, Red and Blue.<br>Arrows are shot at the target board and the scores obtained for hitting the Gold, Red and Blue regions are $10$ points, $6$ points and $3$ points respectively. Arrows that land outside the target board score $0$ points.<br>Alex shoots one arrow at the target board. The probability that his shot lands on the target board is $p$, where $p > 0.5$. If his shot lands on the target board, the arrow is equally likely to hit any position on the board. Let $X$ represent the score obtained from a single shot.<br>You may assume that the arrow <strong>does not</strong> land on the boundary of any region.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that $\\mathrm{P}(X = 6) = 0.27p$.",
        type: "self",
        solution: "$\\mathrm{P}(X = 6) = p \\cdot \\frac{\\pi(24^2) - \\pi(12^2)}{\\pi(40^2)} = p \\cdot \\frac{576 - 144}{1600} = p \\cdot \\frac{432}{1600} = 0.27p$ (shown)."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Given that $\\mathrm{Var}(X) = 5.464476$, find the value of $p$.",
        type: "auto",
        mode: "number",
        answer: "0.95",
        placeholder: "Exact value",
        solution: "$\\mathrm{P}(X = 10) = p \\cdot \\frac{12^2}{40^2} = 0.09p$, and $\\mathrm{P}(X = 3) = p(1 - 0.09 - 0.27) = 0.64p$.<br><div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$0$</td><td>$3$</td><td>$6$</td><td>$10$</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$1 - p$</td><td>$0.64p$</td><td>$0.27p$</td><td>$0.09p$</td></tr></table></div><br>$\\mathrm{E}(X) = 3(0.64p) + 6(0.27p) + 10(0.09p) = 4.44p$.<br>$\\mathrm{E}(X^2) = 3^2(0.64p) + 6^2(0.27p) + 10^2(0.09p) = 24.48p$.<br>$\\mathrm{Var}(X) = 24.48p - (4.44p)^2 = 24.48p - 19.7136p^2 = 5.464476$.<br>$19.7136p^2 - 24.48p + 5.464476 = 0$.<br>Solving gives $p = 0.292$ (rejected since $p > 0.5$) or $p = 0.95$.<br>$\\therefore p = 0.95$."
      }
    ]
  },

  // ── Q9 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q9",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "The random variable $X$ has distribution $\\mathrm{N}(\\mu, \\sigma^2)$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Given that $\\mathrm{P}(X > k) = 0.45$, find the value of $\\mathrm{P}(X > 2\\mu - k)$.",
        type: "auto",
        mode: "number",
        answer: "0.55",
        placeholder: "Exact value",
        solution: "$\\mathrm{P}(X > k) = \\mathrm{P}\\left(Z > \\frac{k - \\mu}{\\sigma}\\right) = 0.45$.<br>$\\mathrm{P}(X > 2\\mu - k) = \\mathrm{P}\\left(Z > \\frac{2\\mu - k - \\mu}{\\sigma}\\right) = \\mathrm{P}\\left(Z > -\\frac{k - \\mu}{\\sigma}\\right) = \\mathrm{P}\\left(Z < \\frac{k - \\mu}{\\sigma}\\right) = 1 - 0.45 = 0.55$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is given that $\\mu = 4$ and $\\mathrm{P}(1 < X < 4) = 0.2475$.<br>Find the value of $\\sigma$.",
        type: "auto",
        mode: "number",
        answer: "4.500159",
        placeholder: "Correct to 3 s.f.",
        solution: "$\\mathrm{P}(X < 1) = 0.5 - 0.2475 = 0.2525$.<br>$\\mathrm{P}\\left(Z < \\frac{1 - 4}{\\sigma}\\right) = 0.2525$.<br>From GC, $\\frac{-3}{\\sigma} = -0.66664 \\implies \\sigma = 4.5002 \\approx 4.50$ (to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Draw a sketch to show the distribution of $X$ for $x$ between $-11$ and $19$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 140" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- x in [-11, 19], mean=4 at x=160, span 30 units = 260px (8.67px/unit) -->
  <!-- y baseline at 112, peak at y=26 (height 86px) -->
  <line x1="20" y1="112" x2="300" y2="112" stroke-width="1.2"/>
  <polyline points="295,108 301,112 295,116" fill="none" stroke-width="1.2"/>
  <text x="303" y="116" stroke="none" font-style="italic">x</text>
  <!-- Normal curve: mu=4 (x=160), sigma=4.5 -> 1 sigma = 39px, 3.33 sigma = 130px -->
  <path d="M 30,111.7 C 65,111.2 90,104 112,78 C 130,52 145,26 160,26 C 175,26 190,52 208,78 C 230,104 255,111.2 290,111.7" fill="rgba(76,168,133,0.16)" stroke="#4ca885" stroke-width="2.2"/>
  <line x1="160" y1="26" x2="160" y2="112" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="20" y="127" stroke="none">−11</text>
  <text x="156" y="127" stroke="none">4</text>
  <text x="282" y="127" stroke="none">19</text>
  <text x="195" y="40" stroke="none" fill="#4ca885">X ~ N(4, 4.50²)</text>
</svg>`,
        solution: "Bell-shaped symmetric curve for $X \\sim \\mathrm{N}(4, 4.50^2)$ centred at the mean $x = 4$, with tails approaching the $x$-axis near $x = -11$ and $x = 19$ (over $3\\sigma$ on each side of the mean)."
      }
    ]
  },

  // ── Q10 ───────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q10",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Normal Distribution", "Sampling", "Central Limit Theorem"],
    stem: "<strong>In this question you should state the parameters of any distributions you use.</strong><br>An orchard sells kiwis of two varieties, Type $A$ and Type $B$. The masses, in grams, of Type $A$ and Type $B$ kiwis follow the distributions $\\mathrm{N}(110, 6^2)$ and $\\mathrm{N}(85, 8^2)$ respectively. It is assumed that these two distributions are independent.<br>Kiwis are selected randomly and packed into bags. Type $A$ kiwis are packed in bags of $30$, while Type $B$ kiwis are packed in bags of $60$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "In a randomly chosen bag of Type $A$ kiwis, find the probability that the mean mass of kiwis is between $109$ grams and $115$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.819342",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $A$ g be the mass of one Type $A$ kiwi. Then $\\bar{A} = \\frac{A_1 + \\ldots + A_{30}}{30} \\sim \\mathrm{N}\\left(110, \\frac{6^2}{30}\\right) = \\mathrm{N}(110, 1.2)$.<br>$\\mathrm{P}(109 < \\bar{A} < 115) = 0.81934 \\approx 0.819$ (to 3 s.f.)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The selling prices of Type $A$ and Type $B$ kiwis are SGD 25 per kilogram and SGD 15 per kilogram respectively.<br>Find the probability that the average selling price of a kiwi from a bag of Type $A$ kiwis is more than the average selling price of a kiwi from a bag of Type $B$ kiwis by at most SGD 1.50.",
        type: "auto",
        mode: "number",
        answer: "0.786563",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $B$ g be the mass of one Type $B$ kiwi. Then $\\bar{B} \\sim \\mathrm{N}\\left(85, \\frac{8^2}{60}\\right) = \\mathrm{N}\\left(85, \\frac{16}{15}\\right)$.<br>Average selling prices (in SGD):<br>$0.025\\bar{A} \\sim \\mathrm{N}(2.75, 0.025^2 \\times 1.2) = \\mathrm{N}(2.75, 0.00075)$<br>$0.015\\bar{B} \\sim \\mathrm{N}\\left(1.275, 0.015^2 \\times \\frac{16}{15}\\right) = \\mathrm{N}(1.275, 0.00024)$<br>Difference: $0.025\\bar{A} - 0.015\\bar{B} \\sim \\mathrm{N}(1.475, 0.00099)$.<br>$\\mathrm{P}(0 < 0.025\\bar{A} - 0.015\\bar{B} \\le 1.50) = 0.78656 \\approx 0.787$ (to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The orchard also produces genetically modified Type $G$ kiwis, which are packed in bags of $50$. The masses of Type $G$ kiwis are identically distributed with a mean of $90$ grams and a standard deviation of $5$ grams.<br>Each Assortment Box contains one bag of Type $A$ kiwis and one bag of Type $G$ kiwis. A box is fit for sale if the total mass of the kiwis in the box is at least $7.85$ kilograms.<br>Ten Assortment Boxes are selected at random. Find the probability that none of the boxes are fit for sale.",
        type: "auto",
        mode: "number",
        answer: "0.196553",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $S = A_1 + \\ldots + A_{30} \\sim \\mathrm{N}(30 \\times 110, 30 \\times 36) = \\mathrm{N}(3300, 1080)$.<br>Let $T = G_1 + \\ldots + G_{50}$. Since $n = 50$ is sufficiently large, by the Central Limit Theorem, $T \\sim \\mathrm{N}(50 \\times 90, 50 \\times 25) = \\mathrm{N}(4500, 1250)$ approximately.<br>Total mass of one box: $S + T \\sim \\mathrm{N}(7800, 2330)$ approximately.<br>$\\mathrm{P}(S + T < 7850) = 0.84984$.<br>Required probability $= [\\mathrm{P}(S + T < 7850)]^{10} = 0.19655 \\approx 0.197$ (to 3 s.f.)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "State, in context, the approximation(s) and assumption(s) needed for the distribution(s) used in part (c).",
        type: "self",
        solution: "<strong>Approximation</strong>: By the Central Limit Theorem, the total mass (sample sum) of the $50$ Type $G$ kiwis in a bag is approximately normally distributed, since the number of Type $G$ kiwis in each bag ($n = 50$) is sufficiently large.<br><strong>Assumption</strong>: The masses of all kiwis (both within each bag and between Type $A$ and Type $G$ kiwis) are independent."
      }
    ]
  },

  // ── Q11 ───────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q11",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Correlation and Linear Regression"],
    stem: "An energy company is studying the relationship between the average daily temperature, $x$ (in degrees Celsius), and the amount of electricity consumed, $y$ (in megawatt-hours MWh). For a random sample of ten days, the records are shown in the table below.<br><div class='q-table-wrap'><table class='q-table'><tr><th>Average daily temperature ($x\\,^\\circ\\text{C}$)</th><td>$20$</td><td>$22$</td><td>$24$</td><td>$26$</td><td>$28$</td><td>$30$</td><td>$32$</td><td>$34$</td><td>$36$</td><td>$38$</td></tr><tr><th>Electricity consumption ($y$ MWh)</th><td>$12.5$</td><td>$12.8$</td><td>$13.2$</td><td>$14.0$</td><td>$14.7$</td><td>$16.2$</td><td>$16.2$</td><td>$19.9$</td><td>$22.3$</td><td>$29.5$</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Draw a scatter diagram for these values, labelling the axes clearly.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 185" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: x in [18, 40] -> 20 at x=75, 38 at x=273 (11px/unit); y in [10, 32] -> 12.5 at y=140, 29.5 at y=38 (6px/unit) -->
  <line x1="45" y1="158" x2="298" y2="158" stroke-width="1.2"/>
  <polyline points="293,154 299,158 293,162" fill="none" stroke-width="1.2"/>
  <line x1="55" y1="168" x2="55" y2="18" stroke-width="1.2"/>
  <polyline points="51,23 55,17 59,23" fill="none" stroke-width="1.2"/>
  <text x="301" y="162" stroke="none" font-style="italic">x</text>
  <text x="42" y="20" stroke="none" font-style="italic">y</text>
  <!-- Ticks: x=20 (75), x=38 (273); y=12.5 (140), y=29.5 (38) -->
  <line x1="75" y1="155" x2="75" y2="161" stroke-width="1.1"/>
  <text x="68" y="173" stroke="none">20</text>
  <line x1="273" y1="155" x2="273" y2="161" stroke-width="1.1"/>
  <text x="266" y="173" stroke="none">38</text>
  <line x1="52" y1="140" x2="58" y2="140" stroke-width="1.1"/>
  <text x="25" y="144" stroke="none">12.5</text>
  <line x1="52" y1="38" x2="58" y2="38" stroke-width="1.1"/>
  <text x="25" y="42" stroke="none">29.5</text>
  <!-- 10 data points plotted accurately:
       (20,12.5)->(75,140), (22,12.8)->(97,138.2), (24,13.2)->(119,135.8),
       (26,14.0)->(141,131), (28,14.7)->(163,126.8), (30,16.2)->(185,117.8),
       (32,16.2)->(207,117.8), (34,19.9)->(229,95.6), (36,22.3)->(251,81.2),
       (38,29.5)->(273,38) -->
  <g stroke="#4ca885" stroke-width="1.8">
    <line x1="72" y1="137" x2="78" y2="143"/><line x1="78" y1="137" x2="72" y2="143"/>
    <line x1="94" y1="135.2" x2="100" y2="141.2"/><line x1="100" y1="135.2" x2="94" y2="141.2"/>
    <line x1="116" y1="132.8" x2="122" y2="138.8"/><line x1="122" y1="132.8" x2="116" y2="138.8"/>
    <line x1="138" y1="128" x2="144" y2="134"/><line x1="144" y1="128" x2="138" y2="134"/>
    <line x1="160" y1="123.8" x2="166" y2="129.8"/><line x1="166" y1="123.8" x2="160" y2="129.8"/>
    <line x1="182" y1="114.8" x2="188" y2="120.8"/><line x1="188" y1="114.8" x2="182" y2="120.8"/>
    <line x1="204" y1="114.8" x2="210" y2="120.8"/><line x1="210" y1="114.8" x2="204" y2="120.8"/>
    <line x1="226" y1="92.6" x2="232" y2="98.6"/><line x1="232" y1="92.6" x2="226" y2="98.6"/>
    <line x1="248" y1="78.2" x2="254" y2="84.2"/><line x1="254" y1="78.2" x2="248" y2="84.2"/>
    <line x1="270" y1="35" x2="276" y2="41"/><line x1="276" y1="35" x2="270" y2="41"/>
  </g>
</svg>`,
        solution: "Plot all 10 points from $(20, 12.5)$ to $(38, 29.5)$ with labelled axes $x$ and $y$ and clear scale endpoints. The scatter plot shows $y$ increasing at an increasing rate as $x$ increases."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is thought that the electricity consumption and average daily temperature can be modelled by one of the formulae $$y = a + bx^2, \\qquad y = c + dx,$$ where $a, b, c$ and $d$ are constants.<br>Find the value of the product moment correlation coefficient between:<br>(i) $x$ and $y$,<br>(ii) $x^2$ and $y$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "(i) r (x and y) =", answer: "0.890557", placeholder: "Correct to 3 s.f." },
          { label: "(ii) r (x^2 and y) =", answer: "0.922292", placeholder: "Correct to 3 s.f." }
        ],
        solution: "From GC:<br>(i) Between $x$ and $y$: $r = 0.89056 \\approx 0.891$ (to 3 s.f.).<br>(ii) Between $x^2$ and $y$: $r = 0.92229 \\approx 0.922$ (to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Using your answers in parts (a) and (b), explain which of $y = a + bx^2$ and $y = c + dx$ is the better model and find the equation of a suitable regression line for this model.",
        type: "self",
        solution: "From the scatter diagram, as $x$ increases, $y$ increases at an increasing rate (upward-curving trend). Furthermore, the product moment correlation coefficient between $x^2$ and $y$ ($r \\approx 0.922$) is closer to $1$ than that between $x$ and $y$ ($r \\approx 0.891$).<br>Hence $y = a + bx^2$ is the better model.<br><br>From GC, regressing $y$ on $x^2$:<br>$a = 4.8291 \\approx 4.83$, $b = 0.014074 \\approx 0.0141$.<br>$\\therefore y = 4.83 + 0.0141x^2$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Use the equation of your regression line to estimate the electricity consumption on a day with an average temperature of $37^\\circ\\text{C}$. Comment on the reliability of your estimate.",
        type: "self",
        solution: "Using full-precision regression coefficients at $x = 37$:<br>$y = 4.8291 + 0.014074(37)^2 = 24.097 \\approx 24.1$ MWh (to 3 s.f.).<br><br>Since $x = 37$ lies within the given data range ($20 \\le x \\le 38$) and $|r| \\approx 0.922$ is close to $1$, the estimate is <strong>reliable</strong>."
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "In some regions, temperature is measured in degrees Fahrenheit instead of degrees Celsius. A temperature of $C$ degrees Celsius is equivalent to $F$ degrees Fahrenheit, where $F = \\frac{9}{5}C + 32$.<br>Rewrite the equation of your regression line found in part (c) in terms of $y$ and $F$, where $F$ is the average daily temperature in degrees Fahrenheit.",
        type: "self",
        solution: "From $F = \\frac{9}{5}x + 32$, we get $x = \\frac{5}{9}(F - 32)$.<br>Substituting into $y = 4.8291 + 0.014074x^2$:<br>$y = 4.8291 + 0.014074\\left[\\frac{5}{9}(F - 32)\\right]^2 = 4.8291 + 0.0043438(F - 32)^2$<br>$\\therefore y = 4.83 + 0.00434(F - 32)^2$ (to 3 s.f.)."
      }
    ]
  },

  // ── Q12 ───────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P2-Q12",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q12",
    category: "stats",
    topics: ["Hypothesis Testing", "Sampling"],
    stem: "A hospital introduces a new medication regimen to help patients recover from a viral infection more quickly. Previously, the average recovery time was $7.2$ days.<br>After adopting the new regimen, a random sample of $40$ patients is observed, and their recovery times, $x$, in days, are recorded. The results are summarised below.$$\\sum(x - 7.2) = -42 \\qquad \\text{and} \\qquad \\sum(x - 7.2)^2 = 648$$",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Explain whether the hospital should carry out a one-tailed test or a two-tailed test.",
        type: "self",
        solution: "The hospital should carry out a <strong>one-tailed test</strong> (left-tailed) because they want to test whether the new medication regimen has <em>reduced</em> the mean recovery time (i.e. patients recover more quickly)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Calculate unbiased estimates of the population mean and variance of the recovery times under the new regimen.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "6.15", placeholder: "Exact or 3 s.f." },
          { label: "Variance =", answer: "603.9/39", placeholder: "Exact or 3 s.f." }
        ],
        solution: "Let $y = x - 7.2$.<br>Unbiased estimate of population mean:<br>$\\bar{x} = \\bar{y} + 7.2 = \\frac{-42}{40} + 7.2 = 6.15$.<br>Unbiased estimate of population variance:<br>$s^2 = \\frac{1}{39}\\left(648 - \\frac{(-42)^2}{40}\\right) = \\frac{603.9}{39} = 15.4846 \\approx 15.5$ (to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Carry out an appropriate test at the $5\\%$ significance level. You should state clearly the hypotheses for your test and define any parameters that you use.",
        type: "self",
        solution: "Let $X$ be the recovery time (in days) of a patient under the new regimen, and $\\mu$ be the population mean recovery time.<br>$\\mathrm{H}_0 : \\mu = 7.2$<br>$\\mathrm{H}_1 : \\mu < 7.2$<br>Level of significance: $5\\%$ (one-tailed).<br><br>Since $n = 40$ is large, by the Central Limit Theorem, $\\bar{X}$ is approximately normally distributed.<br>Under $\\mathrm{H}_0$, the test statistic is $Z = \\frac{\\bar{X} - 7.2}{S/\\sqrt{40}} \\sim \\mathrm{N}(0, 1)$ approximately.<br><br>Using $\\bar{x} = 6.15$ and $s^2 = \\frac{603.9}{39} \\approx 15.4846$:<br>$z_{\\text{calc}} = \\frac{6.15 - 7.2}{\\sqrt{15.4846/40}} = -1.6876$, giving $p\\text{-value} = 0.045744 \\approx 0.0457$.<br><br>Since $p\\text{-value} = 0.0457 < 0.05$, we reject $\\mathrm{H}_0$ at the $5\\%$ level of significance. There is sufficient evidence to conclude that the mean recovery time has reduced under the new regimen."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Explain, in the context of the question, the meaning of 'at the $5\\%$ significance level'.",
        type: "self",
        solution: "It means there is a probability of $0.05$ that the test concludes that the mean recovery time has reduced under the new regimen when in fact it is still $7.2$ days."
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "Explain whether it would have been sufficient for the hospital to take a random sample of $10$ patients and record their recovery times under the new regimen in order to carry out the hypothesis test.",
        type: "self",
        solution: "<strong>No.</strong> Since the population distribution of the recovery time $X$ under the new regimen is unknown, a sufficiently large sample size is required to apply the Central Limit Theorem so that $\\bar{X}$ is approximately normally distributed. A sample size of $10$ is not large enough."
      },
      {
        label: "(f)",
        marks: 3,
        prompt: "It was discovered that an intern at the hospital had made an error in recording the recovery times. A random sample of another $30$ patients was taken and their recovery times under the new regimen was taken and recorded by a senior researcher. The sample standard deviation was found to be $1.7$ days and the sample mean time was denoted by $k$.<br>A test at the $1\\%$ significance level concludes that the average recovery time did not improve from $7.2$ days. Find the set of values of $k$.",
        type: "self",
        solution: "Unbiased estimate of population variance:<br>$s^2 = \\frac{30}{29}(1.7)^2 = 2.98966$.<br>At the $1\\%$ significance level (one-tailed left test), the rejection region is $z \\le -2.3263$.<br>Since $\\mathrm{H}_0$ is not rejected:<br>$\\frac{k - 7.2}{\\sqrt{2.98966 / 30}} > -2.3263$<br>$k > 7.2 - 2.3263 \\times \\sqrt{\\frac{2.98966}{30}} = 6.4656$.<br>$\\therefore$ Set of values of $k$: $\\{k \\in \\mathbb{R} : k > 6.47\\}$ (to 3 s.f.)."
      }
    ]
  }
]);
