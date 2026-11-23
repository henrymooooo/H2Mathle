window.registerQuestions([
  // =========================================================================
  // Q1 (6 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q1",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Differentiation", "Integration"],
    stem: "The curve $C$ has equation $y = \\frac{1}{4x - x^2}$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$. Hence, find the $x$-coordinate, $x = x_1$, of the turning point on $C$ and determine its nature.",
        type: "self",
        solution: "Write $y = (4x - x^2)^{-1}$.<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -(4x - x^2)^{-2}(4 - 2x) = \\frac{2x - 4}{(4x - x^2)^2}$$<br>At the turning point, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies 2x - 4 = 0 \\implies x_1 = 2$.<br><br>Using the second derivative test:<br>$$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\left[(4x - x^2)^{-2}(-2) - 2(4x - x^2)^{-3}(4 - 2x)^2\\right]$$<br>When $x = 2$, $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 2(4)^{-2} = \\frac{1}{8} > 0$.<br><br>(Alternatively, by the first derivative test: for $x = 1.9$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -0.0126 < 0$; at $x = 2$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$; for $x = 2.1$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0.0126 > 0$.)<br><br>Hence, the turning point at $x = 2$ is a <strong>minimum point</strong>."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Using calculus, find the exact area of the region between $C$, the $x$-axis and the lines with equations $x = 1$ and $x = x_1$.",
        type: "auto",
        mode: "number",
        answer: "ln(3)/4",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $y = \\frac{1}{4x - x^2} > 0$ for $1 \\le x \\le 2$,<br>$$\\text{Area} = \\int_1^2 \\frac{1}{4x - x^2} \\,\\mathrm{d}x = \\int_1^2 \\frac{1}{x(4 - x)} \\,\\mathrm{d}x$$<br>Using partial fractions:<br>$$\\text{Area} = \\frac{1}{4} \\int_1^2 \\left(\\frac{1}{x} + \\frac{1}{4 - x}\\right) \\mathrm{d}x = \\frac{1}{4}\\left[\\ln|x| - \\ln|4 - x|\\right]_1^2 = \\frac{1}{4}\\left[\\ln\\left|\\frac{x}{4 - x}\\right|\\right]_1^2$$<br>$$= \\frac{1}{4}\\left(\\ln 1 - \\ln\\frac{1}{3}\\right) = -\\frac{1}{4}\\ln\\frac{1}{3} = \\frac{1}{4}\\ln 3$$"
      }
    ]
  },

  // =========================================================================
  // Q2 (6 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q2",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find, in terms of $a$, the roots of the equation $\\frac{1}{(x - a)^2} = |x - a|$.",
        type: "auto",
        mode: "expr-list",
        vars: { a: [2, 5, 10] },
        answer: ["a+1", "a-1"],
        placeholder: "Expressions in terms of a, separated by a comma",
        solution: "From $\\frac{1}{(x - a)^2} = |x - a|$, we have:<br>$\\frac{1}{(x - a)^2} = x - a$ &nbsp; or &nbsp; $\\frac{1}{(x - a)^2} = -(x - a)$<br><br>Case 1: $(x - a)^3 = 1 \\implies x - a = 1 \\implies x = a + 1$.<br>Case 2: $(x - a)^3 = -1 \\implies x - a = -1 \\implies x = a - 1$.<br><br>Thus, the roots are $x = a - 1$ and $x = a + 1$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "On the same axes, sketch the curves with equations $y = \\frac{1}{(x - a)^2}$ and $y = |x - a|$, where $a > 1$.<br>Hence solve the inequality $\\frac{1}{(x - a)^2} > |x - a|$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 220" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="20" y1="180" x2="300" y2="180" stroke-width="1.2"/>
  <polyline points="294,176 300,180 294,184" fill="none" stroke-width="1.2"/>
  <line x1="85" y1="205" x2="85" y2="18" stroke-width="1.2"/>
  <polyline points="81,24 85,18 89,24" fill="none" stroke-width="1.2"/>
  <text x="304" y="184" stroke="none" font-style="italic">x</text>
  <text x="72" y="20" stroke="none" font-style="italic">y</text>
  <text x="73" y="193" stroke="none" font-style="italic">O</text>
  <!-- Vertical asymptote x = a (at x=180, scale 1 unit = 45px, a = 2.11) -->
  <line x1="180" y1="22" x2="180" y2="205" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
  <text x="167" y="216" stroke="none" font-style="italic">x = a</text>
  <!-- y = |x - a| (vertex at (180, 180), slope +-1, y-intercept at (85, 85)) -->
  <polyline points="58,58 180,180 285,75" fill="none" stroke="#cf5652" stroke-width="1.8"/>
  <text x="238" y="65" stroke="none" fill="#cf5652" font-style="italic">y = |x − a|</text>
  <!-- y = 1/(x - a)^2 (passes through (135, 135) and (225, 135), y-int at (85, 170)) -->
  <path d="M 35,177 Q 90,174 125,150 Q 155,125 170,25" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <path d="M 190,25 Q 205,125 235,150 Q 265,172 292,176" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="194" y="34" stroke="none" fill="#4a8fe7" font-style="italic">y = 1/(x − a)²</text>
  <!-- Intercepts -->
  <circle cx="85" cy="85" r="2.5" fill="#cf5652" stroke="none"/>
  <text x="48" y="88" stroke="none">(0, a)</text>
  <circle cx="85" cy="171" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="36" y="167" stroke="none">(0, 1/a²)</text>
  <circle cx="180" cy="180" r="2.5" fill="#cf5652" stroke="none"/>
  <text x="184" y="194" stroke="none">(a, 0)</text>
  <text x="266" y="172" stroke="none" font-style="italic" font-size="10">y = 0</text>
</svg>`,
        solution: "Since $a > 1$, the $y$-intercept of $y = |x - a|$ at $(0, a)$ lies above the $y$-intercept of $y = \\frac{1}{(x-a)^2}$ at $\\left(0, \\frac{1}{a^2}\\right)$.<br><br>From the sketch and part (i), the curves intersect at $x = a - 1$ and $x = a + 1$, and $y = \\frac{1}{(x-a)^2}$ is undefined at $x = a$.<br><br>For $\\frac{1}{(x-a)^2} > |x-a|$, the curve $y = \\frac{1}{(x-a)^2}$ lies strictly above $y = |x-a|$ when:<br>$$a - 1 < x < a + 1, \\quad x \\ne a$$<br>(or equivalently, $a - 1 < x < a$ or $a < x < a + 1$)."
      }
    ]
  },

  // =========================================================================
  // Q3 (4 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q3",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Wall and floor -->
  <line x1="65" y1="20" x2="65" y2="165" stroke-width="1.5"/>
  <line x1="65" y1="165" x2="255" y2="165" stroke-width="1.5"/>
  <!-- Right angle marker -->
  <polyline points="65,153 77,153 77,165" fill="none" stroke-width="1.1"/>
  <!-- Ladder -->
  <line x1="65" y1="42" x2="185" y2="165" stroke="#4a8fe7" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Motion arrows -->
  <line x1="53" y1="42" x2="53" y2="75" stroke-width="1.2"/>
  <polyline points="49,69 53,75 57,69" fill="none" stroke-width="1.2"/>
  <line x1="185" y1="175" x2="225" y2="175" stroke-width="1.2"/>
  <polyline points="219,171 225,175 219,179" fill="none" stroke-width="1.2"/>
  <!-- Labels -->
  <text x="72" y="34" stroke="none">Top of ladder</text>
  <text x="190" y="158" stroke="none">Foot of ladder</text>
  <text x="135" y="96" stroke="none" fill="#4a8fe7" font-weight="bold">ladder</text>
  <text x="34" y="112" stroke="none">wall</text>
  <text x="112" y="182" stroke="none">floor</text>
</svg>`,
    stem: "A ladder of length $3.12\\text{ m}$ is sliding down a vertical wall such that the foot of the ladder is moving along the floor at a constant rate of $0.2\\text{ m/s}$ (see diagram).",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the rate at which the top of the ladder is sliding down the wall when it is $1.2\\text{ m}$ above the floor.",
        type: "auto",
        mode: "number",
        answer: "0.48",
        signHint: true,
        placeholder: "Rate in m/s",
        solution: "Let $h\\text{ m}$ be the vertical height of the top of the ladder above the floor, and $x\\text{ m}$ be the horizontal distance of the foot of the ladder from the wall.<br><br>By Pythagoras' theorem:<br>$$h^2 + x^2 = 3.12^2$$<br>Differentiating implicitly with respect to $t$:<br>$$2h\\frac{\\mathrm{d}h}{\\mathrm{d}t} + 2x\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 0$$<br>When $h = 1.2$, we have $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 0.2$ and:<br>$$x = \\sqrt{3.12^2 - 1.2^2} = \\sqrt{8.2944} = 2.88 \\quad (\\text{since } x > 0)$$<br>Substituting into the differentiated equation:<br>$$2(1.2)\\frac{\\mathrm{d}h}{\\mathrm{d}t} + 2(2.88)(0.2) = 0 \\implies \\frac{\\mathrm{d}h}{\\mathrm{d}t} = -0.48$$<br>Hence, the top of the ladder is sliding down the wall at a rate of $0.48\\text{ m/s}$."
      }
    ]
  },

  // =========================================================================
  // Q4 (5 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q4",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Functions"],
    stem: "Functions $\\mathrm{f}$ and $\\mathrm{g}$ are defined by<br>$\\mathrm{f} : x$ ↦ $[\\ln(x-1)]^2 + 2, \\quad x \\ge a,$<br>$\\mathrm{g} : x$ ↦ $4 + 3x - x^2, \\quad x \\le \\frac{3}{2}.$",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "It is given that the function $\\mathrm{f}^{-1}$ exists. State the smallest value of $a$.",
        type: "auto",
        mode: "number",
        answer: "2",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "The graph of $y = [\\ln(x - 1)]^2 + 2$ has a vertical asymptote at $x = 1$ and a minimum turning point at $(2, 2)$ (where $\\ln(x - 1) = 0$).<br>For $\\mathrm{f}^{-1}$ to exist, $\\mathrm{f}$ must be a one-one function.<br>Hence, the smallest value of $a$ is $2$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Find an expression for $\\mathrm{g}^{-1}(x)$, stating its domain.",
        type: "self",
        solution: "Let $y = 4 + 3x - x^2$. Completing the square:<br>$$y = -(x^2 - 3x - 4) = -\\left(x - \\frac{3}{2}\\right)^2 + \\frac{25}{4}$$<br>$$\\left(x - \\frac{3}{2}\\right)^2 = \\frac{25}{4} - y \\implies x = \\frac{3}{2} \\pm \\sqrt{\\frac{25}{4} - y}$$<br>Since $x \\le \\frac{3}{2}$, we take the negative square root:<br>$$x = \\frac{3}{2} - \\sqrt{\\frac{25}{4} - y}$$<br>Therefore,<br>$$\\mathrm{g}^{-1}(x) = \\frac{3}{2} - \\sqrt{\\frac{25}{4} - x}$$<br>Domain: $\\mathrm{D}_{\\mathrm{g}^{-1}} = \\mathrm{R}_{\\mathrm{g}} = (-\\text{∞}, \\frac{25}{4}]$ (i.e. $x \\le \\frac{25}{4}$)."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "Using the value of $a$ found in part (i), determine whether the composite function $\\mathrm{g}^{-1}\\mathrm{f}^{-1}$ exists.",
        type: "self",
        solution: "With $a = 2$, we have:<br>$\\mathrm{R}_{\\mathrm{f}^{-1}} = \\mathrm{D}_{\\mathrm{f}} = [2, \\text{∞})$<br>$\\mathrm{D}_{\\mathrm{g}^{-1}} = \\mathrm{R}_{\\mathrm{g}} = (-\\text{∞}, \\frac{25}{4}]$<br><br>Since $\\mathrm{R}_{\\mathrm{f}^{-1}}$ ⊄ $\\mathrm{D}_{\\mathrm{g}^{-1}}$, the composite function $\\mathrm{g}^{-1}\\mathrm{f}^{-1}$ <strong>does not exist</strong>."
      }
    ]
  },

  // =========================================================================
  // Q5 (9 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q5",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Functions", "Graphs & Transformations"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "The curves $C_1$ and $C_2$ have equations $\\frac{x^2}{9} - \\frac{y^2}{4} = 1$ and $y^2 + x^2 = k^2$ respectively, where $k$ is a positive constant.<br>Sketch $C_1$ and $C_2$ on the same diagram, stating the coordinates of any points of intersection with the axes and the equations of any asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 240" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes (origin at (160, 120), scale 1 unit = 14px) -->
  <line x1="25" y1="120" x2="295" y2="120" stroke-width="1.2"/>
  <polyline points="289,116 295,120 289,124" fill="none" stroke-width="1.2"/>
  <line x1="160" y1="225" x2="160" y2="18" stroke-width="1.2"/>
  <polyline points="156,24 160,18 164,24" fill="none" stroke-width="1.2"/>
  <text x="299" y="124" stroke="none" font-style="italic">x</text>
  <text x="148" y="20" stroke="none" font-style="italic">y</text>
  <text x="147" y="133" stroke="none" font-style="italic">O</text>
  <!-- Asymptotes y = +- (2/3)x -->
  <line x1="40" y1="200" x2="280" y2="40" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
  <line x1="40" y1="40" x2="280" y2="200" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
  <text x="24" y="214" stroke="none" font-style="italic">y = (2/3)x</text>
  <text x="234" y="214" stroke="none" font-style="italic">y = −(2/3)x</text>
  <!-- Circle C2: radius k (drawn with r = 64px > 42px) -->
  <circle cx="160" cy="120" r="64" fill="none" stroke="#cf5652" stroke-width="1.7"/>
  <text x="115" y="54" stroke="none" fill="#cf5652" font-style="italic">C₂</text>
  <!-- Hyperbola C1: a = 42px (3 units), b = 28px (2 units) -->
  <path d="M 275,47 Q 202,94 202,120 Q 202,146 275,193" fill="none" stroke="#4a8fe7" stroke-width="1.9"/>
  <path d="M 45,47 Q 118,94 118,120 Q 118,146 45,193" fill="none" stroke="#4a8fe7" stroke-width="1.9"/>
  <text x="255" y="176" stroke="none" fill="#4a8fe7" font-style="italic">C₁</text>
  <!-- Intercepts -->
  <circle cx="202" cy="120" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="195" y="134" stroke="none">(3, 0)</text>
  <circle cx="118" cy="120" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="93" y="134" stroke="none">(−3, 0)</text>
  <circle cx="224" cy="120" r="2.5" fill="#cf5652" stroke="none"/>
  <text x="228" y="134" stroke="none">(k, 0)</text>
  <circle cx="96" cy="120" r="2.5" fill="#cf5652" stroke="none"/>
  <text x="58" y="134" stroke="none">(−k, 0)</text>
  <circle cx="160" cy="56" r="2.5" fill="#cf5652" stroke="none"/>
  <text x="165" y="52" stroke="none">(0, k)</text>
  <circle cx="160" cy="184" r="2.5" fill="#cf5652" stroke="none"/>
  <text x="165" y="196" stroke="none">(0, −k)</text>
</svg>`,
        solution: "$C_1$ is a hyperbola centred at $(0, 0)$ with $x$-intercepts $(-3, 0)$ and $(3, 0)$, and oblique asymptotes $y = \\frac{2}{3}x$ and $y = -\\frac{2}{3}x$.<br>$C_2$ is a circle centred at $(0, 0)$ of radius $k$, with axial intercepts $(k, 0)$, $(-k, 0)$, $(0, k)$ and $(0, -k)$."
      },
      {
        label: "(a)(ii)",
        marks: 1,
        prompt: "State the range of values of $k$ for $C_1$ and $C_2$ to intersect.",
        type: "self",
        solution: "Since the vertices of $C_1$ are at $(\\pm 3, 0)$ and $C_2$ is a circle of radius $k > 0$ centred at the origin, $C_1$ and $C_2$ intersect when:<br>$$k \\ge 3$$"
      },
      {
        label: "(a)(iii)",
        marks: 1,
        prompt: "State the equations of the common lines of symmetry for both $C_1$ and $C_2$.",
        type: "self",
        solution: "The common lines of symmetry for both $C_1$ and $C_2$ are $x = 0$ and $y = 0$."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "The function $\\mathrm{f}$, with domain the set of all real values, is given by<br>$\\mathrm{f}(x) = -2x + 6$ for $0 < x \\le 3$,<br>$\\mathrm{f}(x) = 3x - 9$ for $3 < x \\le 5$,<br>and that $\\mathrm{f}(x) = \\mathrm{f}(x + 5)$.<br>Find $\\mathrm{f}(46)$.",
        type: "auto",
        mode: "number",
        answer: "4",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $\\mathrm{f}$ is periodic with period $5$:<br>$$\\mathrm{f}(46) = \\mathrm{f}(41) = \\cdots = \\mathrm{f}(1) = -2(1) + 6 = 4$$"
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$ for $-5 \\le x \\le 5$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 185" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes (origin at (160, 150), x-scale 22px/unit, y-scale 16px/unit) -->
  <line x1="25" y1="150" x2="298" y2="150" stroke-width="1.2"/>
  <polyline points="292,146 298,150 292,154" fill="none" stroke-width="1.2"/>
  <line x1="160" y1="170" x2="160" y2="20" stroke-width="1.2"/>
  <polyline points="156,26 160,20 164,26" fill="none" stroke-width="1.2"/>
  <text x="302" y="154" stroke="none" font-style="italic">x</text>
  <text x="148" y="22" stroke="none" font-style="italic">y</text>
  <text x="149" y="164" stroke="none" font-style="italic">O</text>
  <!-- Dashed guide lines at x = -5 and x = 5 -->
  <line x1="50" y1="54" x2="50" y2="150" stroke-dasharray="4,3" opacity="0.5" stroke-width="1"/>
  <line x1="270" y1="54" x2="270" y2="150" stroke-dasharray="4,3" opacity="0.5" stroke-width="1"/>
  <!-- Graph y = f(x): (-5,6)->(-2,0)->(0,6)->(3,0)->(5,6) -->
  <polyline points="50,54 116,150 160,54 226,150 270,54" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Endpoints and key points -->
  <circle cx="50" cy="54" r="3" fill="#4a8fe7" stroke="none"/>
  <circle cx="270" cy="54" r="3" fill="#4a8fe7" stroke="none"/>
  <circle cx="160" cy="54" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="116" cy="150" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="226" cy="150" r="2.5" fill="#4a8fe7" stroke="none"/>
  <!-- Labels -->
  <text x="32" y="45" stroke="none">(−5, 6)</text>
  <text x="273" y="48" stroke="none">(5, 6)</text>
  <text x="148" y="54" stroke="none">6</text>
  <text x="42" y="164" stroke="none">−5</text>
  <text x="108" y="164" stroke="none">−2</text>
  <text x="223" y="164" stroke="none">3</text>
  <text x="267" y="164" stroke="none">5</text>
  <text x="198" y="40" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>
</svg>`,
        solution: "For $0 < x \\le 3$, $y = -2x + 6$ is a line segment from $(0, 6)$ to $(3, 0)$.<br>For $3 < x \\le 5$, $y = 3x - 9$ is a line segment from $(3, 0)$ to $(5, 6)$.<br>By periodicity $\\mathrm{f}(x) = \\mathrm{f}(x + 5)$, translate the shape $5$ units to the left for $-5 \\le x \\le 0$: line segments from $(-5, 6)$ to $(-2, 0)$ and from $(-2, 0)$ to $(0, 6)$."
      },
      {
        label: "(b)(iii)",
        marks: 1,
        prompt: "Hence, state the roots of $\\mathrm{f}(-x) = 0$ for $-5 \\le x \\le 5$.",
        type: "auto",
        mode: "number-list",
        answer: [-3, 2],
        exactRequired: true,
        placeholder: "Separate values with a comma",
        solution: "From the graph, $\\mathrm{f}(x) = 0$ when $x = -2$ or $x = 3$.<br>The graph of $y = \\mathrm{f}(-x)$ is a reflection of $y = \\mathrm{f}(x)$ in the $y$-axis, so $\\mathrm{f}(-x) = 0$ when $x = -3$ or $x = 2$."
      }
    ]
  },

  // =========================================================================
  // Q6 (8 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q6",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Integration"],
    diagramSvg: `<svg viewBox="0 0 320 190" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes (origin at (55, 145), x-scale 48px/unit, y-scale 130px/unit) -->
  <line x1="25" y1="145" x2="298" y2="145" stroke-width="1.2"/>
  <polyline points="292,141 298,145 292,149" fill="none" stroke-width="1.2"/>
  <line x1="55" y1="175" x2="55" y2="18" stroke-width="1.2"/>
  <polyline points="51,24 55,18 59,24" fill="none" stroke-width="1.2"/>
  <text x="301" y="150" stroke="none" font-style="italic">x</text>
  <text x="43" y="22" stroke="none" font-style="italic">y</text>
  <text x="41" y="140" stroke="none" font-style="italic">O</text>
  <!-- Shaded region R between x=0 and x=1 (x=55 to x=103, P at (103, 97.2)) -->
  <path d="M 55,145 C 67,114 82,97.2 103,97.2 L 55,145 Z" fill="rgba(91,155,213,0.25)" stroke="none"/>
  <!-- Curve y = x e^(-x) -->
  <path d="M 43,182 C 50,160 55,145 55,145 C 67,114 82,97.2 103,97.2 C 135,97.2 185,126 285,141" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <!-- Line y = (1/e)x -->
  <line x1="35" y1="165" x2="175" y2="25" stroke="#2c2925" stroke-width="1.4"/>
  <!-- Point P -->
  <circle cx="103" cy="97.2" r="3" fill="#2c2925" stroke="none"/>
  <text x="98" y="88" stroke="none" font-style="italic">P</text>
  <text x="72" y="119" stroke="none" font-style="italic" fill="#4a8fe7" font-weight="bold">R</text>
  <text x="165" y="45" stroke="none" font-style="italic">y = (1/e)x</text>
  <text x="182" y="108" stroke="none" fill="#4a8fe7" font-style="italic">y = xe⁻ˣ</text>
  <text x="275" y="137" stroke="none" font-style="italic" font-size="10">y = 0</text>
</svg>`,
    stem: "",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "Find $\\int x^2 \\mathrm{e}^{-2x} \\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "-e^(-2*x)*(2*x^2 + 2*x + 1)/4",
        domainPoints: [0, 1, 2],
        placeholder: "Indefinite integral in terms of x (include + C)",
        solution: "Integrate by parts twice.<br>First, let $u = x^2$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\mathrm{e}^{-2x}$, so $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = 2x$ and $v = -\\frac{1}{2}\\mathrm{e}^{-2x}$:<br>$$\\int x^2 \\mathrm{e}^{-2x} \\,\\mathrm{d}x = -\\frac{1}{2}x^2\\mathrm{e}^{-2x} + \\int x\\mathrm{e}^{-2x} \\,\\mathrm{d}x$$<br>Next, let $u = x$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\mathrm{e}^{-2x}$, so $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = 1$ and $v = -\\frac{1}{2}\\mathrm{e}^{-2x}$:<br>$$= -\\frac{1}{2}x^2\\mathrm{e}^{-2x} - \\frac{1}{2}x\\mathrm{e}^{-2x} + \\frac{1}{2}\\int \\mathrm{e}^{-2x} \\,\\mathrm{d}x$$<br>$$= -\\frac{1}{2}x^2\\mathrm{e}^{-2x} - \\frac{1}{2}x\\mathrm{e}^{-2x} - \\frac{1}{4}\\mathrm{e}^{-2x} + C = -\\frac{1}{4}\\mathrm{e}^{-2x}(2x^2 + 2x + 1) + C$$"
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "The curve with equation $y = x\\mathrm{e}^{-x}$ and the line with equation $y = \\frac{1}{\\mathrm{e}}x$ meet at the origin $O$ and the point $P$ with $x$-coordinate $1$. The region $R$ is bounded by the curve and the line (see diagram).<br>Find the exact volume of the solid formed when $R$ is rotated through $360°$ about the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "pi/4 - 19*pi/(12*e^2)",
        exactRequired: true,
        placeholder: "Exact value in terms of pi and e",
        solution: "Using the washer method (or curve volume minus cone volume):<br>$$\\text{Volume} = \\pi\\int_0^1 \\left[(x\\mathrm{e}^{-x})^2 - \\left(\\frac{1}{\\mathrm{e}}x\\right)^2\\right] \\mathrm{d}x = \\pi\\int_0^1 x^2\\mathrm{e}^{-2x} \\,\\mathrm{d}x - \\frac{\\pi}{\\mathrm{e}^2}\\int_0^1 x^2 \\,\\mathrm{d}x$$<br>Using the result from part (i):<br>$$= \\pi\\left[-\\frac{1}{4}\\mathrm{e}^{-2x}(2x^2 + 2x + 1)\\right]_0^1 - \\frac{\\pi}{3\\mathrm{e}^2}\\left[x^3\\right]_0^1$$<br>$$= \\pi\\left(-\\frac{5}{4}\\mathrm{e}^{-2} + \\frac{1}{4}\\right) - \\frac{\\pi}{3\\mathrm{e}^2} = \\frac{\\pi}{4} - \\frac{19\\pi}{12\\mathrm{e}^2} = \\frac{\\pi}{12}(3 - 19\\mathrm{e}^{-2})$$"
      }
    ]
  },

  // =========================================================================
  // Q7 (10 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q7",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Find $\\int \\frac{x}{\\sqrt{25 - x^2}} \\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "-sqrt(25 - x^2)",
        domainPoints: [0, 3, 4],
        placeholder: "Indefinite integral in terms of x (include + C)",
        solution: "$$\\int \\frac{x}{\\sqrt{25 - x^2}} \\,\\mathrm{d}x = -\\frac{1}{2}\\int (-2x)(25 - x^2)^{-\\frac{1}{2}} \\,\\mathrm{d}x = -\\sqrt{25 - x^2} + C$$"
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Hence, given that $\\int_{\\alpha}^{4} \\left|\\frac{x}{\\sqrt{25 - x^2}}\\right| \\mathrm{d}x = 3$, where $\\alpha < 0$, find $\\alpha$ algebraically.",
        type: "auto",
        mode: "number",
        answer: "-3",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $\\alpha < 0$, split the integral at $x = 0$:<br>$$-\\int_{\\alpha}^{0} \\frac{x}{\\sqrt{25 - x^2}} \\,\\mathrm{d}x + \\int_{0}^{4} \\frac{x}{\\sqrt{25 - x^2}} \\,\\mathrm{d}x = 3$$<br>$$\\left[\\sqrt{25 - x^2}\\right]_{\\alpha}^{0} - \\left[\\sqrt{25 - x^2}\\right]_{0}^{4} = 3$$<br>$$\\left(5 - \\sqrt{25 - \\alpha^2}\\right) - (3 - 5) = 3$$<br>$$7 - \\sqrt{25 - \\alpha^2} = 3 \\implies \\sqrt{25 - \\alpha^2} = 4$$<br>$$25 - \\alpha^2 = 16 \\implies \\alpha^2 = 9 \\implies \\alpha = \\pm 3$$<br>Since $\\alpha < 0$, we have $\\alpha = -3$."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Using the substitution $x = 4\\tan\\theta$, evaluate $\\int_0^4 \\sqrt{\\frac{x^2}{16 + x^2}} \\,\\mathrm{d}x$ exactly.",
        type: "auto",
        mode: "number",
        answer: "4*(sqrt(2) - 1)",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Let $x = 4\\tan\\theta$, so $\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = 4\\sec^2\\theta$.<br>When $x = 0$, $\\theta = 0$; when $x = 4$, $\\tan\\theta = 1 \\implies \\theta = \\frac{\\pi}{4}$.<br><br>$$\\int_0^4 \\sqrt{\\frac{x^2}{16 + x^2}} \\,\\mathrm{d}x = \\int_0^{\\frac{\\pi}{4}} \\sqrt{\\frac{16\\tan^2\\theta}{16 + 16\\tan^2\\theta}} \\cdot 4\\sec^2\\theta \\,\\mathrm{d}\\theta$$<br>$$= \\int_0^{\\frac{\\pi}{4}} \\sqrt{\\frac{\\tan^2\\theta}{\\sec^2\\theta}} \\cdot 4\\sec^2\\theta \\,\\mathrm{d}\\theta$$<br>Since $\\tan\\theta \\ge 0$ and $\\sec\\theta > 0$ on $[0, \\frac{\\pi}{4}]$:<br>$$= 4\\int_0^{\\frac{\\pi}{4}} \\frac{\\tan\\theta}{\\sec\\theta}\\sec^2\\theta \\,\\mathrm{d}\\theta = 4\\int_0^{\\frac{\\pi}{4}} \\sec\\theta\\tan\\theta \\,\\mathrm{d}\\theta$$<br>$$= 4\\left[\\sec\\theta\\right]_0^{\\frac{\\pi}{4}} = 4\\left(\\sec\\frac{\\pi}{4} - \\sec 0\\right) = 4(\\sqrt{2} - 1)$$"
      }
    ]
  },

  // =========================================================================
  // Q8 (9 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q8",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "The first three terms of a sequence are given by $u_1 = 9$, $u_2 = 27$ and $u_3 = 55$. Given that $u_n$ is a quadratic polynomial in $n$, find $u_n$ in terms of $n$.",
        type: "auto",
        mode: "expr",
        vars: { n: [1, 2, 3, 5] },
        answer: "5*n^2 + 3*n + 1",
        placeholder: "Expression in terms of n",
        solution: "Let $u_n = an^2 + bn + c$.<br>$u_1 = a + b + c = 9 \\quad \\text{--- (1)}$<br>$u_2 = 4a + 2b + c = 27 \\quad \\text{--- (2)}$<br>$u_3 = 9a + 3b + c = 55 \\quad \\text{--- (3)}$<br><br>Solving simultaneously (or using GC): $a = 5$, $b = 3$, $c = 1$.<br>Hence, $u_n = 5n^2 + 3n + 1$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "It is given that $\\sum_{r=1}^{n} r^3 = \\frac{n^2(n+1)^2}{4}$ and $u_r = 2r^3 + 5$.<br>Find $\\sum_{r=1}^{n} u_r$.",
        type: "auto",
        mode: "expr",
        vars: { n: [1, 2, 4, 7] },
        answer: "n^2*(n+1)^2/2 + 5*n",
        placeholder: "Expression in terms of n",
        solution: "$$\\sum_{r=1}^{n} (2r^3 + 5) = 2\\sum_{r=1}^{n} r^3 + \\sum_{r=1}^{n} 5 = 2\\left(\\frac{n^2(n+1)^2}{4}\\right) + 5n = \\frac{n^2(n+1)^2}{2} + 5n$$"
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Hence, or otherwise, find $\\sum_{r=2}^{n} \\left(2(r+2)^3 + 5\\right)$.",
        type: "auto",
        mode: "expr",
        vars: { n: [2, 3, 5, 8] },
        answer: "(n+2)^2*(n+3)^2/2 + 5*n - 77",
        placeholder: "Expression in terms of n",
        solution: "Shifting the index by letting $k = r + 2$:<br>$$\\sum_{r=2}^{n} \\left(2(r+2)^3 + 5\\right) = \\sum_{k=4}^{n+2} (2k^3 + 5) = \\sum_{k=1}^{n+2} (2k^3 + 5) - \\sum_{k=1}^{3} (2k^3 + 5)$$<br>Using part (b)(i):<br>$$= \\frac{(n+2)^2(n+3)^2}{2} + 5(n+2) - \\left[\\frac{3^2(4)^2}{2} + 5(3)\\right]$$<br>$$= \\frac{(n+2)^2(n+3)^2}{2} + 5n + 10 - (72 + 15) = \\frac{(n+2)^2(n+3)^2}{2} + 5n - 77$$"
      },
      {
        label: "(b)(iii)",
        marks: 1,
        prompt: "Explain why the series $\\sum_{r=1}^{\\text{∞}} u_r$ does not converge.",
        type: "self",
        solution: "From (b)(i), $\\sum_{r=1}^{n} u_r = \\frac{n^2(n+1)^2}{2} + 5n$.<br>As $n$ → ∞, both $\\frac{n^2(n+1)^2}{2}$ → ∞ and $5n$ → ∞.<br>Since $\\sum_{r=1}^{n} u_r$ → ∞ (does not approach a finite limit) as $n$ → ∞, the series $\\sum_{r=1}^{\\text{∞}} u_r$ does not converge."
      }
    ]
  },

  // =========================================================================
  // Q9 (11 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q9",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Maclaurin Series", "Integration"],
    stem: "It is given that $\\mathrm{f}(x) = \\frac{1}{4 + 9x^2}$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find $\\int \\mathrm{f}(x) \\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "atan(3*x/2)/6",
        domainPoints: [0, 0.5, 1],
        placeholder: "Indefinite integral in terms of x (include + C)",
        solution: "$$\\int \\frac{1}{4 + 9x^2} \\,\\mathrm{d}x = \\frac{1}{9}\\int \\frac{1}{\\left(\\frac{2}{3}\\right)^2 + x^2} \\,\\mathrm{d}x = \\frac{1}{9} \\cdot \\frac{1}{\\frac{2}{3}}\\tan^{-1}\\left(\\frac{x}{\\frac{2}{3}}\\right) + K = \\frac{1}{6}\\tan^{-1}\\left(\\frac{3x}{2}\\right) + K$$"
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Find the binomial expansion for $\\mathrm{f}(x)$, up to and including the term in $x^4$. Give the coefficients as exact fractions in their simplest form.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.1, 0.2, 0.5] },
        answer: "1/4 - 9/16*x^2 + 81/64*x^4",
        placeholder: "Polynomial in x up to x^4",
        solution: "$$\\mathrm{f}(x) = (4 + 9x^2)^{-1} = \\frac{1}{4}\\left(1 + \\frac{9x^2}{4}\\right)^{-1}$$<br>$$= \\frac{1}{4}\\left[1 + (-1)\\left(\\frac{9x^2}{4}\\right) + \\frac{(-1)(-2)}{2!}\\left(\\frac{9x^2}{4}\\right)^2 + \\cdots\\right]$$<br>$$= \\frac{1}{4}\\left(1 - \\frac{9}{4}x^2 + \\frac{81}{16}x^4 + \\cdots\\right) \\approx \\frac{1}{4} - \\frac{9}{16}x^2 + \\frac{81}{64}x^4$$"
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "Hence, find the Maclaurin series for $\\tan^{-1}\\left(\\frac{3x}{2}\\right)$. Give the coefficients as exact fractions in their simplest form.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.1, 0.2, 0.5] },
        answer: "3/2*x - 9/8*x^3 + 243/160*x^5",
        placeholder: "Series in terms of x",
        solution: "From (i), $\\tan^{-1}\\left(\\frac{3x}{2}\\right) = 6\\int \\frac{1}{4 + 9x^2} \\,\\mathrm{d}x + C$.<br>Substituting the expansion from (ii):<br>$$\\tan^{-1}\\left(\\frac{3x}{2}\\right) \\approx 6\\int \\left(\\frac{1}{4} - \\frac{9}{16}x^2 + \\frac{81}{64}x^4\\right) \\mathrm{d}x + C$$<br>$$= 6\\left(\\frac{1}{4}x - \\frac{3}{16}x^3 + \\frac{81}{320}x^5\\right) + D = \\frac{3}{2}x - \\frac{9}{8}x^3 + \\frac{243}{160}x^5 + D$$<br>When $x = 0$, $\\tan^{-1} 0 = 0 \\implies D = 0$.<br>Hence, $\\tan^{-1}\\left(\\frac{3x}{2}\\right) \\approx \\frac{3}{2}x - \\frac{9}{8}x^3 + \\frac{243}{160}x^5$."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "Use your series from part (iii) to estimate $\\int_0^{0.5} \\tan^{-1}\\left(\\frac{3x}{2}\\right) \\mathrm{d}x$, correct to $3$ decimal places.",
        type: "auto",
        mode: "number",
        answer: "0.173876953",
        dp: 3,
        placeholder: "Correct to 3 d.p.",
        solution: "$$\\int_0^{0.5} \\left(\\frac{3}{2}x - \\frac{9}{8}x^3 + \\frac{243}{160}x^5\\right) \\mathrm{d}x = \\left[\\frac{3}{4}x^2 - \\frac{9}{32}x^4 + \\frac{81}{320}x^6\\right]_0^{0.5} = 0.173877\\ldots \\approx 0.174 \\text{ (to 3 d.p.)}$$"
      },
      {
        label: "(v)",
        marks: 1,
        prompt: "Use your calculator to find $\\int_0^{0.5} \\tan^{-1}\\left(\\frac{3x}{2}\\right) \\mathrm{d}x$, correct to $3$ decimal places.",
        type: "auto",
        mode: "number",
        answer: "0.172988187",
        dp: 3,
        placeholder: "Correct to 3 d.p.",
        solution: "From GC, $\\int_0^{0.5} \\tan^{-1}\\left(\\frac{3x}{2}\\right) \\mathrm{d}x = 0.172988\\ldots \\approx 0.173$ (to 3 d.p.)."
      },
      {
        label: "(vi)",
        marks: 2,
        prompt: "Comparing your answers to parts (iv) and (v), comment on the accuracy of your estimate in (iv) and how it can be improved.",
        type: "self",
        solution: "The estimate in (iv) ($0.174$) is accurate up to $2$ decimal places ($0.17$), but not to $3$ decimal places (compared with $0.173$).<br>To improve the estimate, include higher-order terms in the Maclaurin series expansion of $\\tan^{-1}\\left(\\frac{3x}{2}\\right)$."
      }
    ]
  },

  // =========================================================================
  // Q10 (9 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q10",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that $y = \\ln\\left(\\frac{\\mathrm{e}^2}{3x}\\right)$ can be written in the form $y = a + b\\ln(cx)$, where $a$, $b$ and $c$ are integers to be found. Hence, state a sequence of transformations which transform the graph of $y = \\ln x$ onto the graph of $y = \\ln\\left(\\frac{\\mathrm{e}^2}{3x}\\right)$.",
        type: "self",
        solution: "$$y = \\ln\\left(\\frac{\\mathrm{e}^2}{3x}\\right) = \\ln(\\mathrm{e}^2) - \\ln(3x) = 2 - \\ln(3x)$$<br>Hence $a = 2$, $b = -1$ and $c = 3$.<br><br>Sequence of transformations from $y = \\ln x$ → $y = \\ln(3x)$ → $y = -\\ln(3x)$ → $y = 2 - \\ln(3x)$:<br>1. A scaling parallel to the $x$-axis by a factor of $\\frac{1}{3}$.<br>2. A reflection in the $x$-axis.<br>3. A translation of $2$ units in the positive direction of the $y$-axis."
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "The curve $y = \\mathrm{f}(x)$ passes through the point $P$ with coordinates $(a, b)$, where $b \\ne 0$. The tangent to the curve at $P$ has gradient $5$. When $y = \\mathrm{f}(x)$ is transformed onto the curve $y = \\mathrm{g}(x)$, $P$ corresponds to the point $R$ on $y = \\mathrm{g}(x)$.<br>For $\\mathrm{g}(x) = 2\\mathrm{f}(x - 1)$, state the coordinates of $R$ and find the gradient of the curve at $R$.",
        type: "self",
        solution: "Under $y = 2\\mathrm{f}(x - 1)$, $(a, b)$ → $(a + 1, b)$ → $(a + 1, 2b)$.<br>Hence, the coordinates of $R$ are $(a + 1, 2b)$.<br><br>Differentiating: $\\mathrm{g}'(x) = 2\\mathrm{f}'(x - 1)$.<br>At $R$, $x = a + 1$, so:<br>$$\\mathrm{g}'(a + 1) = 2\\mathrm{f}'((a + 1) - 1) = 2\\mathrm{f}'(a) = 2(5) = 10$$<br>Hence, the gradient of the curve at $R$ is $10$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "For $\\mathrm{g}(x) = \\frac{1}{\\mathrm{f}(x)}$, state the coordinates of $R$ and find the gradient of the curve at $R$.",
        type: "self",
        solution: "The corresponding point $R$ has coordinates $\\left(a, \\frac{1}{b}\\right)$.<br><br>Differentiating: $\\mathrm{g}'(x) = -\\frac{\\mathrm{f}'(x)}{[\\mathrm{f}(x)]^2}$.<br>At $R$, $x = a$, $\\mathrm{f}(a) = b$ and $\\mathrm{f}'(a) = 5$, so:<br>$$\\mathrm{g}'(a) = -\\frac{\\mathrm{f}'(a)}{[\\mathrm{f}(a)]^2} = -\\frac{5}{b^2}$$<br>Hence, the gradient of the curve at $R$ is $-\\frac{5}{b^2}$."
      }
    ]
  },

  // =========================================================================
  // Q11 (11 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q11",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "A company posted a video on a social media platform to advertise a new product. The video is uploaded at the start of 1st April and the number of daily views is recorded at the end of each day. Let $u_n$, where $n \\ge 1$, denote the number of daily views recorded each day. It is given that<br>$$u_{n+1} = (1 + k)u_n,$$<br>where $k$ is a positive constant.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Explain why the sequence $\\{u_n\\}$ is a geometric progression.",
        type: "self",
        solution: "From $u_{n+1} = (1 + k)u_n$, we have:<br>$$\\frac{u_{n+1}}{u_n} = 1 + k$$<br>which is a constant independent of $n$ (since $k$ is a constant).<br>Therefore, $\\{u_n\\}$ is a geometric progression."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Given that the number of daily views recorded at the end of 1st April is $311$ and the total number of daily views recorded from 1st April to 3rd April is $4043$, find the value of $k$.",
        type: "auto",
        mode: "number",
        answer: "2",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "We have $u_1 = 311$ and common ratio $1 + k$, so $u_2 = 311(1 + k)$ and $u_3 = 311(1 + k)^2$.<br>$$311 + 311(1 + k) + 311(1 + k)^2 = 4043$$<br>Dividing by $311$:<br>$$1 + (1 + k) + (1 + 2k + k^2) = 13$$<br>$$k^2 + 3k - 10 = 0 \\implies (k - 2)(k + 5) = 0$$<br>Since $k > 0$, we obtain $k = 2$."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "Explain why there is no limit to the total number of daily views in the long run.",
        type: "self",
        solution: "Since the common ratio is $1 + k = 3 > 1$, the geometric series does not converge as $n$ → ∞ (the sum to infinity does not exist). Hence, there is no limit to the total number of daily views in the long run."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "The company also looks at the number of comments being posted on the social media platform. The number of daily comments is recorded at the end of each day. It is given that $v_r$, where $r \\ge 1$, denotes the number of daily comments recorded and it is defined by the following relation:<br>$v_r = u_r$ for $1 \\le r \\le 4$,<br>$v_r = v_{r-1} + 80$ for $r \\ge 5$.<br>Show that the total number of comments up to the $r$th day, where $r \\ge 5$, is $40r^2 + 8117r - t$, where $t$ is a constant to be determined.",
        type: "self",
        solution: "For the first $3$ days, $v_1 + v_2 + v_3 = u_1 + u_2 + u_3 = 4043$.<br>From day $4$ to day $r$, the terms $v_4, v_5, \\ldots, v_r$ form an arithmetic progression with:<br>• first term $v_4 = u_4 = 3^3(311) = 8397$,<br>• common difference $d = 80$,<br>• number of terms $= r - 4 + 1 = r - 3$.<br><br>Therefore, the total number of comments up to the $r$th day ($r \\ge 5$) is:<br>$$S_r = 4043 + \\frac{r - 3}{2}\\left[2(8397) + (r - 4)(80)\\right]$$<br>$$= 4043 + 8397(r - 3) + 40(r - 3)(r - 4)$$<br>$$= 4043 + 8397r - 25191 + 40(r^2 - 7r + 12)$$<br>$$= 40r^2 + 8117r - 20668 \\quad (\\text{shown, where } t = 20668)$$"
      },
      {
        label: "(v)",
        marks: 3,
        prompt: "Find the least number of days required for the total number of daily comments to exceed $100\\,000$.",
        type: "auto",
        mode: "number",
        answer: "14",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "We require $40r^2 + 8117r - 20668 > 100000$, i.e.:<br>$$40r^2 + 8117r - 120668 > 0$$<br>Solving using GC: $r < -216.83$ (rejected since $r \\ge 1$) or $r > 13.912$.<br>(Alternatively, from GC table: at $r = 13$, $S_{13} = 91613 < 100000$; at $r = 14$, $S_{14} = 100810 > 100000$.)<br><br>Hence, the least number of days required is $14$."
      }
    ]
  },

  // =========================================================================
  // Q12 (12 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P1-Q12",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Vectors"],
    diagramSvg: `<svg viewBox="0 0 330 220" width="330" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Ground parallelogram -->
  <polygon points="75,180 170,152 295,152 200,180" fill="rgba(44,41,37,0.04)" stroke="#2c2925" stroke-width="1.2"/>
  <!-- Vertical wall OABC -->
  <polygon points="75,180 75,108 170,80 170,152" fill="rgba(44,41,37,0.07)" stroke="#2c2925" stroke-width="1.3"/>
  <!-- Inclined Roof attached along AB -->
  <polygon points="75,108 170,80 280,18 185,46" fill="rgba(91,155,213,0.14)" stroke="#2c2925" stroke-width="1.3"/>
  <!-- Wooden strut from P(222, 166) to roof(182, 54) -->
  <line x1="222" y1="166" x2="182" y2="54" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="222" cy="166" r="2.8" fill="#2c2925" stroke="none"/>
  <circle cx="182" cy="54" r="2.8" fill="#4a8fe7" stroke="none"/>
  <!-- Unit vectors i, j, k at O(75, 180) -->
  <line x1="75" y1="180" x2="105" y2="180" stroke-width="1.6"/>
  <polyline points="99,176 105,180 99,184" fill="none" stroke-width="1.4"/>
  <line x1="75" y1="180" x2="99" y2="173" stroke-width="1.6"/>
  <polyline points="92,171 99,173 95,178" fill="none" stroke-width="1.4"/>
  <line x1="75" y1="180" x2="75" y2="152" stroke-width="1.6"/>
  <polyline points="71,158 75,152 79,158" fill="none" stroke-width="1.4"/>
  <!-- Labels -->
  <text x="61" y="191" stroke="none" font-style="italic">O</text>
  <text x="62" y="109" stroke="none" font-style="italic">A</text>
  <text x="174" y="88" stroke="none" font-style="italic">B</text>
  <text x="174" y="147" stroke="none" font-style="italic">C</text>
  <text x="220" y="191" stroke="none" font-style="italic">P</text>
  <text x="89" y="195" stroke="none" font-weight="bold">i</text>
  <text x="88" y="168" stroke="none" font-weight="bold">j</text>
  <text x="61" y="166" stroke="none" font-weight="bold">k</text>
  <text x="48" y="143" stroke="none">3 m</text>
  <text x="122" y="104" stroke="none">5 m</text>
  <text x="111" y="137" stroke="none">Wall</text>
  <text x="158" y="172" stroke="none">Ground</text>
  <text x="150" y="70" stroke="none">Roof</text>
</svg>`,
    stem: "A designer wants to construct an inclined roof that is attached to a vertical rectangular wall, positioned above a horizontal flat ground, as shown in the diagram below. Assume that the roof and wall are of negligible thickness.<br>Points $(x, y, z)$ are defined relative to a corner of the wall at $O(0, 0, 0)$, where units are metres. Unit vectors $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ are in the directions shown in the diagram. The other corners of the wall are $A$, $B$ and $C$, such that $AB$ is $5\\text{ m}$ and $A$ and $B$ are $3\\text{ m}$ vertically above $O$ and $C$ respectively. The roof is attached to the wall along $AB$ and is modelled by a plane parallel to $4\\mathbf{i} + 5\\mathbf{j} + \\mathbf{k}$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Show that the roof is defined by the plane $x - 4z = -12$.",
        type: "self",
        solution: "The plane contains $A(0, 0, 3)$ and is parallel to $AB$ in the direction $\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$ as well as $\\begin{pmatrix} 4 \\\\ 5 \\\\ 1 \\end{pmatrix}$.<br><br>Normal vector of the roof plane:<br>$$\\mathbf{n} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} \\times \\begin{pmatrix} 4 \\\\ 5 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\\\ -4 \\end{pmatrix}$$<br>Equation of the plane:<br>$$\\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ -4 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ -4 \\end{pmatrix} = -12$$<br>Hence, $x - 4z = -12$ (shown)."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Find the obtuse angle between the wall and the roof, correct to the nearest degree.",
        type: "auto",
        mode: "number",
        answer: "104.036243",
        placeholder: "Angle in degrees (nearest degree)",
        solution: "The wall lies in the $yz$-plane, so its normal vector is $\\mathbf{n}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$.<br>The normal vector of the roof is $\\mathbf{n}_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ -4 \\end{pmatrix}$.<br><br>Let $\\theta$ be the acute angle between the wall and the roof:<br>$$\\cos\\theta = \\frac{\\left|\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ -4 \\end{pmatrix}\\right|}{(1)(\\sqrt{17})} = \\frac{1}{\\sqrt{17}} \\implies \\theta = 75.9638°$$<br>Hence, the obtuse angle between the wall and the roof is $180° - 75.9638° = 104.036° \\approx 104°$ (to the nearest degree)."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "To support the roof, a wooden strut, of negligible thickness, is constructed. It has one end at point $P$ with coordinates $(4, 3, 0)$ on the horizontal ground and the other end at the roof, such that the length of the wooden strut is a minimum.<br>Find the exact length of the wooden strut.",
        type: "auto",
        mode: "number",
        answer: "16/sqrt(17)",
        exactRequired: true,
        placeholder: "Exact length in metres",
        solution: "The minimum length is the perpendicular distance from $P(4, 3, 0)$ to the roof plane $x - 4z = -12$.<br>Using $A(0, 0, 3)$ on the plane, $AP = \\begin{pmatrix} 4 \\\\ 3 \\\\ 0 \\end{pmatrix} - \\begin{pmatrix} 0 \\\\ 0 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 3 \\\\ -3 \\end{pmatrix}$.<br><br>$$\\text{Minimum length} = \\frac{\\left|\\begin{pmatrix} 4 \\\\ 3 \\\\ -3 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ -4 \\end{pmatrix}\\right|}{\\sqrt{1^2 + 0^2 + (-4)^2}} = \\frac{|4 + 0 + 12|}{\\sqrt{17}} = \\frac{16}{\\sqrt{17}} \\text{ m}$$"
      },
      {
        label: "(iv)",
        marks: 4,
        prompt: "A ray of light is emitted in the direction $7\\mathbf{i} - 4\\mathbf{j} + 4\\mathbf{k}$ from a light source at $C$. Show that this light ray meets the wooden strut. Hence, find the coordinates of the point where the light ray meets the wooden strut.",
        type: "auto",
        mode: "tuple",
        answer: [3.5, 3, 2],
        placeholder: "Coordinates (x, y, z)",
        solution: "The wooden strut lies along the line through $P(4, 3, 0)$ perpendicular to the roof:<br>$$\\mathbf{r} = \\begin{pmatrix} 4 \\\\ 3 \\\\ 0 \\end{pmatrix} + \\lambda\\begin{pmatrix} 1 \\\\ 0 \\\\ -4 \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}$$<br>The light ray from $C(0, 5, 0)$ has equation:<br>$$\\mathbf{r} = \\begin{pmatrix} 0 \\\\ 5 \\\\ 0 \\end{pmatrix} + \\mu\\begin{pmatrix} 7 \\\\ -4 \\\\ 4 \\end{pmatrix}, \\quad \\mu \\in \\mathbb{R}$$<br>Equating components:<br>$4 + \\lambda = 7\\mu \\quad \\text{--- (1)}$<br>$3 = 5 - 4\\mu \\quad \\text{--- (2)} \\implies \\mu = \\frac{1}{2}$<br>$-4\\lambda = 4\\mu \\quad \\text{--- (3)} \\implies \\lambda = -\\mu = -\\frac{1}{2}$<br><br>Check in (1): $\\text{LHS} = 4 + \\left(-\\frac{1}{2}\\right) = 3.5$, $\\text{RHS} = 7\\left(\\frac{1}{2}\\right) = 3.5 = \\text{LHS}$.<br>Since $\\lambda = -\\frac{1}{2}$ and $\\mu = \\frac{1}{2}$ satisfy all three equations (and $-\\frac{16}{17} \\le \\lambda \\le 0$, $\\mu > 0$), the light ray meets the wooden strut.<br><br>Position vector of intersection point:<br>$$\\begin{pmatrix} 4 \\\\ 3 \\\\ 0 \\end{pmatrix} - \\frac{1}{2}\\begin{pmatrix} 1 \\\\ 0 \\\\ -4 \\end{pmatrix} = \\begin{pmatrix} 3.5 \\\\ 3 \\\\ 2 \\end{pmatrix}$$<br>Hence, the coordinates of the point are $(3.5, 3, 2)$."
      }
    ]
  }
]);
