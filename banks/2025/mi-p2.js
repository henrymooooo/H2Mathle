window.registerQuestions([
  // ==================== SECTION A: PURE MATHEMATICS ====================

  // ==================== Q1 ====================
  {
    id: "MI-2025-P2-Q1",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Transformations of Graphs", "Definite Integrals"],
    diagramSvg: `<svg viewBox="0 0 300 200" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (130, 105) -->
  <line x1="25" y1="105" x2="270" y2="105" stroke-width="1.2"/>
  <polyline points="264,101 270,105 264,109" fill="none" stroke-width="1.2"/>
  <text x="275" y="109" stroke="none" font-style="italic">x</text>

  <line x1="130" y1="185" x2="130" y2="15" stroke-width="1.2"/>
  <polyline points="126,21 130,15 134,21" fill="none" stroke-width="1.2"/>
  <text x="116" y="21" stroke="none" font-style="italic">y</text>
  <text x="116" y="118" stroke="none" font-style="italic">O</text>

  <!-- Curve y = f(x): passes through P(90, 105), R(130, 148), min(145, 155), Q(190, 105) -->
  <path d="M 60,30 Q 140,265 230,30" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="225" y="46" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>

  <!-- Key points -->
  <circle cx="96" cy="105" r="2.8" fill="#4a8fe7" stroke="none"/>
  <text x="48" y="98" stroke="none" font-style="italic">P(p, 0)</text>

  <circle cx="192" cy="105" r="2.8" fill="#4a8fe7" stroke="none"/>
  <text x="197" y="121" stroke="none" font-style="italic">Q(q, 0)</text>

  <circle cx="130" cy="145" r="2.8" fill="#4a8fe7" stroke="none"/>
  <text x="82" y="156" stroke="none" font-style="italic">R(0, r)</text>
</svg>`,
    stem: "The diagram shows the curve with equation $y = \\mathrm{f}(x)$. The curve passes through the points $P(p, 0)$, $Q(q, 0)$ and $R(0, r)$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "The curve $y = \\mathrm{f}(x)$ is transformed onto the curve with equation $y = \\mathrm{f}(2x - 1)$.<br>Find the coordinates of the points on the graph of $y = \\mathrm{f}(2x - 1)$ which correspond to the points $P$, $Q$ and $R$ on curve $y = \\mathrm{f}(x)$.",
        type: "self",
        solution:
          "Transformation from $y = \\mathrm{f}(x)$ to $y = \\mathrm{f}(2x - 1)$:<br>" +
          "1. Translation in the positive $x$-direction by 1 unit: $(a, b)$ → $(a + 1, b)$.<br>" +
          "2. Scaling parallel to the $x$-axis by scale factor $\\frac{1}{2}$: $(a + 1, b)$ → $\\left(\\frac{1}{2}(a + 1), b\\right)$.<br><br>" +
          "Hence:<br>" +
          "$P(p, 0)$ becomes $P'\\left(\\frac{1}{2}p + \\frac{1}{2}, 0\\right)$,<br>" +
          "$Q(q, 0)$ becomes $Q'\\left(\\frac{1}{2}q + \\frac{1}{2}, 0\\right)$,<br>" +
          "$R(0, r)$ becomes $R'\\left(\\frac{1}{2}, r\\right)$."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "It is given that $I = \\int_{p}^{q} \\mathrm{f}(x)\\,\\mathrm{d}x$. Find, in terms of $I$, the area of the finite region bounded by the curve with equation $y = -\\mathrm{f}(x)$ and the $x$-axis.",
        type: "auto",
        mode: "expr",
        vars: { I: [-5, -2, -1] },
        answer: "-I",
        placeholder: "Expression in terms of I",
        solution:
          "Since the curve $y = \\mathrm{f}(x)$ lies below the $x$-axis for $p < x < q$, we have $I < 0$.<br>" +
          "Reflecting the curve about the $x$-axis to obtain $y = -\\mathrm{f}(x)$ preserves the area.<br>" +
          "Hence the required area $= -I$ (or $|I|$)."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "Find, in terms of $I$, the area of the finite region bounded by the curve with equation $y = \\frac{1}{2}\\mathrm{f}(x + 3)$ and the $x$-axis.",
        type: "auto",
        mode: "expr",
        vars: { I: [-6, -4, -2] },
        answer: "-I/2",
        placeholder: "Expression in terms of I",
        solution:
          "Translating the graph in the negative $x$-direction by 3 units preserves the area.<br>" +
          "Scaling parallel to the $y$-axis by scale factor $\\frac{1}{2}$ halves the area.<br>" +
          "Hence the required area $= -\\frac{1}{2}I$ (or $\\frac{1}{2}|I|$)."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Find the value of $\\int_{0}^{q} \\mathrm{f}'(x)\\,\\mathrm{d}x$, justifying your answer.",
        type: "self",
        solution:
          "By the Fundamental Theorem of Calculus:<br>" +
          "$\\int_{0}^{q} \\mathrm{f}'(x)\\,\\mathrm{d}x = \\left[\\mathrm{f}(x)\\right]_{0}^{q} = \\mathrm{f}(q) - \\mathrm{f}(0) = 0 - r = -r$."
      }
    ]
  },

  // ==================== Q2 ====================
  {
    id: "MI-2025-P2-Q2",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Parametric Equations", "Differentiation", "Graphing Techniques"],
    stem: "A curve $C$ has parametric equations $x = \\sqrt{t}$, $y = t^2 + 4$, where $0 \\le t \\le 16$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find the equation of the tangent to $C$ at the point $P$ with parameter $p$.",
        type: "self",
        solution:
          "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{1}{2\\sqrt{t}}$, $\\quad \\frac{\\mathrm{d}y}{\\mathrm{d}t} = 2t$.<br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2t}{\\frac{1}{2\\sqrt{t}}} = 4t^{\\frac{3}{2}}$.<br><br>" +
          "At $t = p$, the point is $P(\\sqrt{p}, p^2 + 4)$ and the gradient is $4p^{\\frac{3}{2}}$.<br>" +
          "Equation of tangent at $P$:<br>" +
          "$y - (p^2 + 4) = 4p^{\\frac{3}{2}}(x - \\sqrt{p})$<br>" +
          "$y = 4p^{\\frac{3}{2}}x - 4p^2 + p^2 + 4$<br>" +
          "$y = 4p^{\\frac{3}{2}}x - 3p^2 + 4$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Given that the tangent in part (i) passes through the point $(0, 1)$, find the exact coordinates of the point $P$.",
        type: "auto",
        mode: "tuple",
        answer: [1, 5],
        exactRequired: true,
        placeholder: "Coordinates (x, y)",
        solution:
          "Substituting $(0, 1)$ into the equation of the tangent:<br>" +
          "$1 = 4p^{\\frac{3}{2}}(0) - 3p^2 + 4 \\implies 3p^2 = 3 \\implies p^2 = 1$.<br>" +
          "Since $0 \\le p \\le 16$, $p = 1$ (reject $p = -1$).<br><br>" +
          "When $p = 1$: $x = \\sqrt{1} = 1$, $y = 1^2 + 4 = 5$.<br>" +
          "Hence the exact coordinates of $P$ are $(1, 5)$."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Sketch the curve $C$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (55, 175) -->
  <line x1="25" y1="175" x2="255" y2="175" stroke-width="1.2"/>
  <polyline points="249,171 255,175 249,179" fill="none" stroke-width="1.2"/>
  <text x="260" y="179" stroke="none" font-style="italic">x</text>

  <line x1="55" y1="195" x2="55" y2="15" stroke-width="1.2"/>
  <polyline points="51,21 55,15 59,21" fill="none" stroke-width="1.2"/>
  <text x="42" y="21" stroke="none" font-style="italic">y</text>
  <text x="41" y="188" stroke="none" font-style="italic">O</text>

  <!-- Curve y = x^4 + 4 for 0 <= x <= 4; map x in [0,4] -> [55, 195], y in [0,260] -> [175, 35] -->
  <!-- Points: (0,4)->(55,172.8), (1,5)->(90,172.3), (2,20)->(125,164.2), (3,85)->(160,129.2), (4,260)->(195,35) -->
  <path d="M 55,173 C 105,173 145,162 195,35" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>

  <!-- Closed endpoints -->
  <circle cx="55" cy="173" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="22" y="168" stroke="none">(0, 4)</text>

  <circle cx="195" cy="35" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="202" y="39" stroke="none">(4, 260)</text>

  <text x="158" y="102" stroke="none" fill="#4a8fe7" font-style="italic">y = x⁴ + 4</text>
</svg>`,
        solution:
          "Since $x = \\sqrt{t} \\implies t = x^2$, the Cartesian equation of $C$ is $y = x^4 + 4$.<br>" +
          "For $0 \\le t \\le 16$, we have $0 \\le x \\le 4$ and $4 \\le y \\le 260$.<br>" +
          "The curve starts at $(0, 4)$ (with horizontal tangent) and increases steeply to the endpoint $(4, 260)$."
      }
    ]
  },

  // ==================== Q3 ====================
  {
    id: "MI-2025-P2-Q3",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "The complex numbers $z$ and $w$ satisfy the simultaneous equations<br>$$z + 2z^* + w = 6 + \\mathrm{i} \\quad \\text{and} \\quad \\mathrm{i}z - w = 3.$$<br>Find $z$ and $w$, leaving your answers in the form $a + b\\mathrm{i}$, where $a$ and $b$ are real numbers.",
        type: "self",
        solution:
          "From the second equation: $w = \\mathrm{i}z - 3$.<br>" +
          "Substituting into the first equation:<br>" +
          "$z + 2z^* + \\mathrm{i}z - 3 = 6 + \\mathrm{i} \\implies (1 + \\mathrm{i})z + 2z^* = 9 + \\mathrm{i}$.<br><br>" +
          "Let $z = a + b\\mathrm{i}$ where $a, b \\in \\mathbb{R}$, so $z^* = a - b\\mathrm{i}$:<br>" +
          "$(1 + \\mathrm{i})(a + b\\mathrm{i}) + 2(a - b\\mathrm{i}) = 9 + \\mathrm{i}$<br>" +
          "$(a - b + 2a) + (a + b - 2b)\\mathrm{i} = 9 + \\mathrm{i}$<br>" +
          "$(3a - b) + (a - b)\\mathrm{i} = 9 + \\mathrm{i}$.<br><br>" +
          "Comparing real and imaginary parts:<br>" +
          "$3a - b = 9$ and $a - b = 1$.<br>" +
          "Subtracting gives $2a = 8 \\implies a = 4$, and $b = 3$.<br>" +
          "Thus $z = 4 + 3\\mathrm{i}$ and $w = \\mathrm{i}(4 + 3\\mathrm{i}) - 3 = -6 + 4\\mathrm{i}$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt:
          "The diagram shows the curve with equation $y = \\mathrm{f}(x)$, where $\\mathrm{f}(x)$ is given by $x^3 + mx^2 + nx + 5$, and $m$ and $n$ are real constants. The curve crosses the $x$-axis at the point $P$.<br>" +
          "<svg viewBox='0 0 280 180' width='260' xmlns='http://www.w3.org/2000/svg' font-family='Georgia,serif' font-size='11' fill='#2c2925' stroke='#2c2925'>" +
          "<line x1='20' y1='130' x2='255' y2='130' stroke-width='1.2'/>" +
          "<polyline points='249,126 255,130 249,134' fill='none' stroke-width='1.2'/>" +
          "<text x='260' y='134' stroke='none' font-style='italic'>x</text>" +
          "<line x1='115' y1='170' x2='115' y2='15' stroke-width='1.2'/>" +
          "<polyline points='111,21 115,15 119,21' fill='none' stroke-width='1.2'/>" +
          "<text x='102' y='21' stroke='none' font-style='italic'>y</text>" +
          "<text x='102' y='143' stroke='none' font-style='italic'>O</text>" +
          "<path d='M 65,165 C 90,115 110,60 130,65 C 150,70 165,115 182,112 C 198,109 218,65 232,25' fill='none' stroke='#4a8fe7' stroke-width='2'/>" +
          "<circle cx='85' cy='130' r='2.8' fill='#4a8fe7' stroke='none'/>" +
          "<text x='72' y='123' stroke='none' font-style='italic'>P</text>" +
          "<text x='165' y='44' stroke='none' fill='#4a8fe7' font-style='italic'>y = f(x)</text>" +
          "</svg><br>" +
          "One of the roots of the equation $\\mathrm{f}(x) = 0$ is $2 + \\mathrm{i}$. Determine the coordinates of the point $P$.",
        type: "auto",
        mode: "tuple",
        answer: [-1, 0],
        exactRequired: true,
        placeholder: "Coordinates (x, y)",
        solution:
          "Since all coefficients of $\\mathrm{f}(x)$ are real, the complex conjugate $2 - \\mathrm{i}$ is also a root of $\\mathrm{f}(x) = 0$.<br>" +
          "A quadratic factor of $\\mathrm{f}(x)$ is:<br>" +
          "$[x - (2 + \\mathrm{i})][x - (2 - \\mathrm{i})] = (x - 2)^2 - \\mathrm{i}^2 = x^2 - 4x + 5$.<br><br>" +
          "Hence $\\mathrm{f}(x) = x^3 + mx^2 + nx + 5 = (x + c)(x^2 - 4x + 5)$ for some real constant $c$.<br>" +
          "Comparing the constant term: $5c = 5 \\implies c = 1$.<br>" +
          "Thus the real root is $x = -1$, so the coordinates of $P$ are $(-1, 0)$."
      }
    ]
  },

  // ==================== Q4 ====================
  {
    id: "MI-2025-P2-Q4",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Sequences & Series", "AP & GP"],
    stem: "A sequence is defined by $T_{n+2} = T_{n+1} + T_n$ with $T_1 = 3$, $T_2 = 1$ for $n \\ge 1$. Another sequence is defined by $r_n = \\frac{T_{n+1}}{T_n}$ for $n \\ge 1$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find $T_4$.",
        type: "auto",
        mode: "number",
        answer: "5",
        exactRequired: true,
        placeholder: "Exact integer",
        solution:
          "$T_3 = T_2 + T_1 = 1 + 3 = 4$.<br>" +
          "$T_4 = T_3 + T_2 = 4 + 1 = 5$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Show that $r_{n+1} = 1 + \\frac{1}{r_n}$ for all $n \\ge 1$.",
        type: "self",
        solution:
          "$r_{n+1} = \\frac{T_{n+2}}{T_{n+1}} = \\frac{T_{n+1} + T_n}{T_{n+1}} = 1 + \\frac{T_n}{T_{n+1}} = 1 + \\frac{1}{r_n}$ (shown)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "It is given that $r_n$ converges to a limit $L$. Find the exact value of $L$.",
        type: "auto",
        mode: "number",
        answer: "(1 + sqrt(5))/2",
        exactRequired: true,
        placeholder: "Exact value in surd form",
        solution:
          "Since $r_n$ converges to $L$, as $n$ → ∞, $r_n$ → $L$ and $r_{n+1}$ → $L$.<br>" +
          "$L = 1 + \\frac{1}{L} \\implies L^2 - L - 1 = 0$<br>" +
          "$L = \\frac{1 \\pm \\sqrt{1 + 4}}{2} = \\frac{1 \\pm \\sqrt{5}}{2}$.<br><br>" +
          "Since $T_n > 0$ for all $n \\ge 1$, $r_n > 0$ for all $n \\ge 1$, so $L \\ge 0$.<br>" +
          "Rejecting $\\frac{1 - \\sqrt{5}}{2} < 0$, we obtain $L = \\frac{1 + \\sqrt{5}}{2}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "A third sequence $u_n$ for $n \\ge 1$, is an arithmetic sequence with first term 5 and common difference 2.<br>Find the least value of $n$ such that $\\sum_{k=1}^{n} u_k > 930$.",
        type: "auto",
        mode: "number",
        answer: "29",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "$\\sum_{k=1}^{n} u_k = \\frac{n}{2}\\left[2(5) + (n - 1)(2)\\right] = n(n + 4)$.<br>" +
          "We need $n(n + 4) > 930$.<br>" +
          "From GC: when $n = 28$, $28(32) = 896 < 930$; when $n = 29$, $29(33) = 957 > 930$.<br>" +
          "Hence the least value of $n$ is $29$."
      }
    ]
  },

  // ==================== Q5 ====================
  {
    id: "MI-2025-P2-Q5",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Functions", "Graphing Techniques"],
    stem: "The function $\\mathrm{g}$ is given by $\\mathrm{g} : x \\mapsto \\frac{x - 3}{x - 1}$, for $x \\in \\mathbb{R}$, $x \\ne 1$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{g}(x)$, stating clearly the coordinates of any points of intersection with the axes and the equation of any asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 220" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (110, 125), scale 22px per unit -->
  <line x1="20" y1="125" x2="280" y2="125" stroke-width="1.2"/>
  <polyline points="274,121 280,125 274,129" fill="none" stroke-width="1.2"/>
  <text x="284" y="129" stroke="none" font-style="italic">x</text>

  <line x1="110" y1="205" x2="110" y2="15" stroke-width="1.2"/>
  <polyline points="106,21 110,15 114,21" fill="none" stroke-width="1.2"/>
  <text x="97" y="21" stroke="none" font-style="italic">y</text>
  <text x="97" y="138" stroke="none" font-style="italic">O</text>

  <!-- Asymptotes: x = 1 => X = 132, y = 1 => Y = 103 -->
  <line x1="132" y1="205" x2="132" y2="20" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="137" y="28" stroke="none" font-style="italic">x = 1</text>
  <line x1="25" y1="103" x2="270" y2="103" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="28" y="96" stroke="none" font-style="italic">y = 1</text>

  <!-- Curve y = 1 - 2/(x - 1) -->
  <!-- Left branch x < 1: (-3, 1.5)->(44,92), (0,3)->(110,59), (0.5,5)->(121,15) -->
  <path d="M 28,96 Q 95,90 110,59 Q 120,38 124,18" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Right branch x > 1: (1.5,-3)->(143,191), (2,-1)->(154,147), (3,0)->(176,125), (6,0.6)->(242,111.8) -->
  <path d="M 140,202 Q 148,150 176,125 Q 208,108 265,106" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- Intercepts -->
  <circle cx="110" cy="59" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="72" y="61" stroke="none">(0, 3)</text>

  <circle cx="176" cy="125" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="172" y="142" stroke="none">(3, 0)</text>

  <text x="210" y="55" stroke="none" fill="#4a8fe7" font-style="italic">y = g(x)</text>
</svg>`,
        solution:
          "$\\mathrm{g}(x) = \\frac{x - 3}{x - 1} = 1 - \\frac{2}{x - 1}$.<br>" +
          "• Vertical asymptote: $x = 1$<br>" +
          "• Horizontal asymptote: $y = 1$<br>" +
          "• $y$-intercept: $(0, 3)$<br>" +
          "• $x$-intercept: $(3, 0)$."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Explain if $\\mathrm{g}^{-1}$ exists.",
        type: "self",
        solution:
          "Every horizontal line $y = k$, where $k \\in \\mathbb{R}$, cuts the graph of $y = \\mathrm{g}(x)$ at most once.<br>" +
          "Hence $\\mathrm{g}$ is a one-one function, and therefore $\\mathrm{g}^{-1}$ exists."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "Find $\\mathrm{g}^{-1}(x)$ and state the domain of $\\mathrm{g}^{-1}$.",
        type: "self",
        solution:
          "Let $y = \\frac{x - 3}{x - 1}$.<br>" +
          "$y(x - 1) = x - 3 \\implies (y - 1)x = y - 3 \\implies x = \\frac{y - 3}{y - 1}$.<br>" +
          "$\\therefore \\mathrm{g}^{-1}(x) = \\frac{x - 3}{x - 1}$.<br><br>" +
          "From the graph in part (i), $\\mathrm{D}_{\\mathrm{g}^{-1}} = \\mathrm{R}_{\\mathrm{g}} = $ (−∞, 1) ∪ (1, ∞) (or $\\mathbb{R} \\setminus \\{1\\}$)."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "A function $\\mathrm{f}$ is said to be self-inverse if $\\mathrm{f}(x) = \\mathrm{f}^{-1}(x)$ for all $x \\in \\mathbb{R}$ in the domain of $\\mathrm{f}$.<br>Show that $\\mathrm{g}$ is self-inverse.",
        type: "self",
        solution:
          "For all $x \\in \\mathrm{D}_{\\mathrm{g}} = \\mathbb{R} \\setminus \\{1\\}$, we have $\\mathrm{g}(x) = \\frac{x - 3}{x - 1} = \\mathrm{g}^{-1}(x)$ and $\\mathrm{D}_{\\mathrm{g}} = \\mathrm{D}_{\\mathrm{g}^{-1}}$.<br>" +
          "Hence $\\mathrm{g}$ is self-inverse (shown)."
      },
      {
        label: "(v)",
        marks: 2,
        prompt: "Without the use of a calculator, solve the equation $\\mathrm{g}^2(x) = -\\mathrm{g}^{-1}(x)$.",
        type: "auto",
        mode: "number-list",
        answer: [-Math.sqrt(3), Math.sqrt(3)],
        exactRequired: true,
        placeholder: "Separate exact values with a comma",
        solution:
          "Since $\\mathrm{g}$ is self-inverse, $\\mathrm{g}^2(x) = \\mathrm{g}(\\mathrm{g}^{-1}(x)) = x$.<br>" +
          "Thus the equation becomes:<br>" +
          "$x = -\\frac{x - 3}{x - 1}$<br>" +
          "$x^2 - x = -x + 3 \\implies x^2 = 3 \\implies x = \\pm\\sqrt{3}$."
      }
    ]
  },

  // ==================== SECTION B: PROBABILITY AND STATISTICS ====================

  // ==================== Q6 ====================
  {
    id: "MI-2025-P2-Q6",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "The waiting times for customers to get their pastries from a popular bakery is modelled by a normal distribution with mean $\\mu$ minutes and standard deviation $\\sigma$ minutes. On average, 10% of customers wait for more than 25 minutes and the same percentage of customers wait for less than 5 minutes.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find the values of $\\mu$ and $\\sigma$, leaving your answers to the nearest minute.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "μ =", answer: "15", exactRequired: true, placeholder: "Nearest integer" },
          { label: "σ =", answer: "8", exactRequired: true, placeholder: "Nearest integer" }
        ],
        solution:
          "Let $X$ be the waiting time (in minutes) of a randomly chosen customer, $X \\sim \\mathrm{N}(\\mu, \\sigma^2)$.<br>" +
          "Given $\\mathrm{P}(X < 5) = \\mathrm{P}(X > 25) = 0.10$.<br>" +
          "By symmetry, $\\mu = \\frac{5 + 25}{2} = 15$.<br><br>" +
          "$\\mathrm{P}(X > 25) = 0.10 \\implies \\mathrm{P}\\left(Z > \\frac{25 - 15}{\\sigma}\\right) = 0.10$<br>" +
          "$\\frac{10}{\\sigma} = 1.28155 \\implies \\sigma = 7.80305 \\approx 8$.<br><br>" +
          "$\\therefore \\mu = 15$ and $\\sigma = 8$ (to the nearest minute)."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Explain if the normal distribution is a suitable model for the waiting times for customers to get pastries from this bakery.",
        type: "self",
        solution:
          "Using $X \\sim \\mathrm{N}(15, 8^2)$, $\\mathrm{P}(X < 0) = 0.0303$ (or $0.0273$ using $\\sigma = 7.80305$).<br>" +
          "Waiting times cannot be negative, yet the model predicts about a 3% chance of a negative waiting time, which is not negligible.<br>" +
          "Therefore, the normal distribution is not a suitable model."
      }
    ]
  },

  // ==================== Q7 ====================
  {
    id: "MI-2025-P2-Q7",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Discrete Random Variables", "Probability"],
    stem: "A deck of 12 cards consists of 2 gold cards and 10 silver cards. The cards are identical other than their colours. In a game, three cards are drawn from the deck of cards at random without replacement. The number of gold cards drawn is denoted by $G$.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Explain the significance of stating that the cards are identical other than their colours.",
        type: "self",
        solution:
          "It ensures that every card is equally likely to be drawn (the probability of drawing a card depends solely on its colour and not on any other physical attributes such as size, texture or weight)."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "Show that $\\mathrm{P}(G = 2) = \\frac{1}{22}$ and find the probabilities of all other possible combinations of the cards drawn.",
        type: "self",
        solution:
          "$\\mathrm{P}(G = 2) = \\frac{{^2C_2} \\times {^{10}C_1}}{{^{12}C_3}} = \\frac{1 \\times 10}{220} = \\frac{1}{22}$ (shown).<br><br>" +
          "$\\mathrm{P}(G = 1) = \\frac{{^2C_1} \\times {^{10}C_2}}{{^{12}C_3}} = \\frac{2 \\times 45}{220} = \\frac{9}{22}$.<br>" +
          "$\\mathrm{P}(G = 0) = \\frac{{^{10}C_3}}{{^{12}C_3}} = \\frac{120}{220} = \\frac{6}{11}$."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "A gold card is worth 4 points while a silver card is worth 1 point. The score $X$ is the sum of the points of each of the three drawn cards.<br>Using your answers in part (ii), find the probability distribution of $X$.",
        type: "self",
        solution:
          "Possible values of $X$: 0 gold + 3 silver gives $3$; 1 gold + 2 silver gives $6$; 2 gold + 1 silver gives $9$.<br>" +
          "<div class='q-table-wrap'><table class='q-table'>" +
          "<tr><th>$x$</th><td>$3$</td><td>$6$</td><td>$9$</td></tr>" +
          "<tr><th>$\\mathrm{P}(X = x)$</th><td>$\\frac{6}{11}$</td><td>$\\frac{9}{22}$</td><td>$\\frac{1}{22}$</td></tr>" +
          "</table></div>"
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "If the player of the game wins $10x$ dollars for a score of $x$ points, what is the expected winnings of the player?",
        type: "auto",
        mode: "number",
        answer: "45",
        exactRequired: true,
        placeholder: "Expected amount (SGD)",
        solution:
          "$\\mathrm{E}(\\text{winnings}) = \\mathrm{E}(10X) = 10(3)\\left(\\frac{6}{11}\\right) + 10(6)\\left(\\frac{9}{22}\\right) + 10(9)\\left(\\frac{1}{22}\\right) = 45$.<br>" +
          "Hence the expected winnings of the player is SGD 45."
      }
    ]
  },

  // ==================== Q8 ====================
  {
    id: "MI-2025-P2-Q8",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability"],
    stem: "For events $A$ and $B$, it is given that $\\mathrm{P}(A) = \\frac{11}{20}$, $\\mathrm{P}(A \\cup B) = \\frac{4}{5}$ and $\\mathrm{P}(B \\mid A) = \\frac{4}{11}$.",
    parts: [
      {
        label: "(i)(a)",
        marks: 3,
        prompt: "Find $\\mathrm{P}(B)$.",
        type: "auto",
        mode: "number",
        answer: "0.45",
        exactRequired: true,
        placeholder: "Exact probability",
        solution:
          "$\\mathrm{P}(A \\cap B) = \\mathrm{P}(B \\mid A)\\mathrm{P}(A) = \\frac{4}{11} \\times \\frac{11}{20} = \\frac{1}{5} = 0.2$.<br>" +
          "$\\mathrm{P}(A \\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B) - \\mathrm{P}(A \\cap B)$<br>" +
          "$0.8 = 0.55 + \\mathrm{P}(B) - 0.2 \\implies \\mathrm{P}(B) = 0.45$."
      },
      {
        label: "(i)(b)",
        marks: 1,
        prompt: "Find $\\mathrm{P}(A \\cap B')$.",
        type: "auto",
        mode: "number",
        answer: "0.35",
        exactRequired: true,
        placeholder: "Exact probability",
        solution:
          "$\\mathrm{P}(A \\cap B') = \\mathrm{P}(A) - \\mathrm{P}(A \\cap B) = 0.55 - 0.2 = 0.35$."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Determine if the events $A$ and $B'$ are mutually exclusive.",
        type: "self",
        solution:
          "From part (i)(b), $\\mathrm{P}(A \\cap B') = 0.35 \\ne 0$.<br>" +
          "Therefore, $A$ and $B'$ are not mutually exclusive."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "A third event $C$ is such that $\\mathrm{P}(C) = 0.6$ and $B$ and $C$ are independent.<br>Find $\\mathrm{P}(B \\cap C)$.",
        type: "auto",
        mode: "number",
        answer: "0.27",
        exactRequired: true,
        placeholder: "Exact probability",
        solution:
          "Since $B$ and $C$ are independent:<br>" +
          "$\\mathrm{P}(B \\cap C) = \\mathrm{P}(B)\\mathrm{P}(C) = 0.45 \\times 0.6 = 0.27$."
      },
      {
        label: "(iv)",
        marks: 2,
        prompt: "Find the range of values of $\\mathrm{P}(A \\cap B' \\cap C)$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 205" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <rect x="10" y="10" width="300" height="185" fill="none" stroke-width="1.2"/>
  <circle cx="115" cy="78" r="50" fill="rgba(76,168,133,0.10)" stroke-width="1.3"/>
  <circle cx="185" cy="78" r="50" fill="rgba(74,143,231,0.10)" stroke-width="1.3"/>
  <circle cx="150" cy="130" r="50" fill="rgba(207,86,82,0.10)" stroke-width="1.3"/>
  <text x="64" y="38" stroke="none" font-style="italic">A</text>
  <text x="226" y="38" stroke="none" font-style="italic">B</text>
  <text x="200" y="176" stroke="none" font-style="italic">C</text>
  <text x="72" y="78" stroke="none" font-size="10">0.35 − x</text>
  <text x="122" y="114" stroke="none" font-style="italic" fill="#cf5652">x</text>
  <text x="128" y="156" stroke="none" font-size="10">0.33 − x</text>
  <text x="225" y="148" stroke="none" font-size="10">x − 0.13</text>
</svg>`,
        solution:
          "Let $x = \\mathrm{P}(A \\cap B' \\cap C)$.<br>" +
          "We know $\\mathrm{P}(A \\cap B') = 0.35$, $\\mathrm{P}(B' \\cap C) = \\mathrm{P}(C) - \\mathrm{P}(B \\cap C) = 0.6 - 0.27 = 0.33$, and $\\mathrm{P}((A \\cup B)') = 1 - 0.8 = 0.2$.<br><br>" +
          "Each disjoint region must have non-negative probability:<br>" +
          "• $\\mathrm{P}(A \\cap B' \\cap C) = x \\ge 0$<br>" +
          "• $\\mathrm{P}(A \\cap B' \\cap C') = 0.35 - x \\ge 0 \\implies x \\le 0.35$<br>" +
          "• $\\mathrm{P}(A' \\cap B' \\cap C) = 0.33 - x \\ge 0 \\implies x \\le 0.33$<br>" +
          "• $\\mathrm{P}(A' \\cap B' \\cap C') = 0.2 - (0.33 - x) = x - 0.13 \\ge 0 \\implies x \\ge 0.13$.<br><br>" +
          "Combining all inequalities gives $0.13 \\le \\mathrm{P}(A \\cap B' \\cap C) \\le 0.33$."
      }
    ]
  },

  // ==================== Q9 ====================
  {
    id: "MI-2025-P2-Q9",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Binomial Distribution", "Probability"],
    stem:
      "In a particular stage of a computer game, a player is given a first set of 20 tasks.<br>" +
      "• If he completes fewer than 13 tasks, he has to retry the stage.<br>" +
      "• If he completes more than 16 tasks, he progresses directly to the next stage.<br>" +
      "• Otherwise, he is given a second set of 10 tasks.<br>" +
      "&nbsp;&nbsp;– If he completes more than 7 of these 10 tasks, he progresses to the next stage.<br>" +
      "&nbsp;&nbsp;– Otherwise, he has to retry the stage.<br>" +
      "It is known that the player's performances in the two sets of tasks are independent.<br>" +
      "Let $X$ and $Y$ be the number of tasks completed in the first and second sets of tasks respectively.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "State two assumptions needed for $X$ to be well-modelled by a binomial distribution.",
        type: "self",
        solution:
          "1. Whether the player completes a task is independent of whether he completes any other task.<br>" +
          "2. The probability that the player completes a task is constant for every task."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Assume now that $X$ has the distribution $\\mathrm{B}(20, 0.7)$ and $Y$ has the distribution $\\mathrm{B}(10, 0.8)$.<br>Find the probability that the player is given a second set of tasks.",
        type: "auto",
        mode: "number",
        answer: "0.66518499",
        placeholder: "3 s.f.",
        solution:
          "$X \\sim \\mathrm{B}(20, 0.7)$.<br>" +
          "Required probability $= \\mathrm{P}(13 \\le X \\le 16) = \\mathrm{P}(X \\le 16) - \\mathrm{P}(X \\le 12)$<br>" +
          "$= 0.66518 \\approx 0.665$ (3 s.f.)."
      },
      {
        label: "(iii)(a)",
        marks: 3,
        prompt: "Using a tree diagram or otherwise, find the probability that the player progresses to the next stage.",
        type: "auto",
        mode: "number",
        answer: "0.55794888",
        placeholder: "3 s.f.",
        solution:
          "$Y \\sim \\mathrm{B}(10, 0.8)$.<br>" +
          "$\\mathrm{P}(\\text{progresses}) = \\mathrm{P}(X > 16) + \\mathrm{P}(13 \\le X \\le 16)\\mathrm{P}(Y > 7)$<br>" +
          "$= [1 - \\mathrm{P}(X \\le 16)] + 0.66518[1 - \\mathrm{P}(Y \\le 7)]$<br>" +
          "$= 0.107087 + 0.665185 \\times 0.677800 = 0.55795 \\approx 0.558$ (3 s.f.)."
      },
      {
        label: "(iii)(b)",
        marks: 2,
        prompt: "Find the probability that the player completes exactly 15 tasks in the first set of tasks given he does not progress to the next stage.",
        type: "auto",
        mode: "number",
        answer: "0.13036899",
        placeholder: "3 s.f.",
        solution:
          "$\\mathrm{P}(X = 15 \\mid \\text{does not progress}) = \\frac{\\mathrm{P}(X = 15 \\text{ and } Y \\le 7)}{\\mathrm{P}(\\text{does not progress})}$<br>" +
          "$= \\frac{\\mathrm{P}(X = 15)\\mathrm{P}(Y \\le 7)}{1 - \\mathrm{P}(\\text{progresses})} = \\frac{0.178863 \\times 0.322200}{1 - 0.557949} = 0.13037 \\approx 0.130$ (3 s.f.)."
      }
    ]
  },

  // ==================== Q10 ====================
  {
    id: "MI-2025-P2-Q10",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Normal Distribution", "Linear Combinations of Random Variables"],
    stem:
      "In this question you should state clearly all the distributions that you use, together with the values of the appropriate parameters.<br>" +
      "In a fruit shop, the masses, in kg, of a certain type of apple and pear are modelled as having independent normal distributions with means and standard deviations as shown in the table.<br>" +
      "<div class='q-table-wrap'><table class='q-table'>" +
      "<tr><th></th><th>Mean</th><th>Standard deviation</th></tr>" +
      "<tr><td><strong>Apple</strong></td><td>0.2</td><td>0.05</td></tr>" +
      "<tr><td><strong>Pear</strong></td><td>0.3</td><td>0.08</td></tr>" +
      "</table></div>",
    parts: [
      {
        label: "(i)(a)",
        marks: 1,
        prompt: "An apple and a pear are chosen at random.<br>Find the probability that the mass of the apple is more than $0.25\\text{ kg}$ and the mass of the pear is less than $0.25\\text{ kg}$.",
        type: "auto",
        mode: "number",
        answer: "0.042200",
        placeholder: "3 s.f.",
        solution:
          "Let $X \\sim \\mathrm{N}(0.2, 0.05^2)$ and $Y \\sim \\mathrm{N}(0.3, 0.08^2)$ be the masses of a randomly chosen apple and pear respectively.<br>" +
          "$\\mathrm{P}(X > 0.25)\\mathrm{P}(Y < 0.25) = (0.15866)(0.26599) = 0.04220 \\approx 0.0422$ (3 s.f.)."
      },
      {
        label: "(i)(b)",
        marks: 4,
        prompt: "Find the probability that the mass of the apple is within $0.075\\text{ kg}$ of the mass of the pear.",
        type: "auto",
        mode: "number",
        answer: "0.363707",
        placeholder: "3 s.f.",
        solution:
          "$\\mathrm{E}(X - Y) = 0.2 - 0.3 = -0.1$.<br>" +
          "$\\mathrm{Var}(X - Y) = 0.05^2 + 0.08^2 = 0.0089$.<br>" +
          "$X - Y \\sim \\mathrm{N}(-0.1, 0.0089)$.<br><br>" +
          "Required probability $= \\mathrm{P}(|X - Y| \\le 0.075) = \\mathrm{P}(-0.075 \\le X - Y \\le 0.075) = 0.36371 \\approx 0.364$ (3 s.f.)."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "Apples are sold at SGD 5 per kg and pears at SGD 7 per kg.<br>Find the probability that the total price of 10 randomly chosen apples and 5 randomly chosen pears exceeds SGD 22.",
        type: "auto",
        mode: "number",
        answer: "0.155551",
        placeholder: "3 s.f.",
        solution:
          "Let $C = 5(X_1 + X_2 + \\dots + X_{10}) + 7(Y_1 + Y_2 + \\dots + Y_5)$ be the total price (in SGD).<br>" +
          "$\\mathrm{E}(C) = 5[10(0.2)] + 7[5(0.3)] = 10 + 10.5 = 20.5$.<br>" +
          "$\\mathrm{Var}(C) = 5^2[10(0.05^2)] + 7^2[5(0.08^2)] = 0.625 + 1.568 = 2.193$.<br>" +
          "$C \\sim \\mathrm{N}(20.5, 2.193)$.<br><br>" +
          "$\\mathrm{P}(C > 22) = 0.15555 \\approx 0.156$ (3 s.f.)."
      }
    ]
  },

  // ==================== Q11 ====================
  {
    id: "MI-2025-P2-Q11",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Correlation & Linear Regression"],
    stem:
      "Cardiovascular fitness is commonly measured using $\\mathrm{VO}_2$ max, the maximum amount of oxygen the body can use during intense exercise. The higher the value of $\\mathrm{VO}_2$ max, the fitter the person is. In a study on cardiovascular fitness, the resting heart rate $x$, measured in beats/min and the $\\mathrm{VO}_2$ max $y$, measured in ml/kg/min, of 8 randomly selected people are given in the table below.<br>" +
      "<div class='q-table-wrap'><table class='q-table'>" +
      "<tr><th>$x$</th><td>78</td><td>75</td><td>65</td><td>64</td><td>62</td><td>56</td><td>53</td><td>48</td></tr>" +
      "<tr><th>$y$</th><td>36</td><td>41</td><td>47</td><td>48</td><td>48</td><td>56</td><td>58</td><td>63</td></tr>" +
      "</table></div>",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Draw a scatter diagram for these values, labelling the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 210" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="35" y1="180" x2="295" y2="180" stroke-width="1.2"/>
  <polyline points="289,176 295,180 289,184" fill="none" stroke-width="1.2"/>
  <text x="299" y="184" stroke="none" font-style="italic">x</text>

  <line x1="35" y1="195" x2="35" y2="15" stroke-width="1.2"/>
  <polyline points="31,21 35,15 39,21" fill="none" stroke-width="1.2"/>
  <text x="22" y="21" stroke="none" font-style="italic">y</text>

  <!-- Map x in [45, 82] -> [55, 265] (scale 5.676), y in [30, 68] -> [170, 25] (scale 3.816) -->
  <!-- (48, 63) -> (72.0, 44.1) -->
  <circle cx="72" cy="44" r="3" fill="#4ca885" stroke="none"/>
  <text x="79" y="42" stroke="none">(48, 63)</text>
  <!-- (53, 58) -> (100.4, 63.2) -->
  <circle cx="100" cy="63" r="3" fill="#4ca885" stroke="none"/>
  <!-- (56, 56) -> (117.4, 70.8) -->
  <circle cx="117" cy="71" r="3" fill="#4ca885" stroke="none"/>
  <!-- (62, 48) -> (151.5, 101.3) -->
  <circle cx="152" cy="101" r="3" fill="#4ca885" stroke="none"/>
  <!-- (64, 48) -> (162.8, 101.3) -->
  <circle cx="163" cy="101" r="3" fill="#4ca885" stroke="none"/>
  <!-- (65, 47) -> (168.5, 105.1) -->
  <circle cx="169" cy="105" r="3" fill="#4ca885" stroke="none"/>
  <!-- (75, 41) -> (225.3, 128.0) -->
  <circle cx="225" cy="128" r="3" fill="#4ca885" stroke="none"/>
  <!-- (78, 36) -> (242.3, 147.1) -->
  <circle cx="242" cy="147" r="3" fill="#4ca885" stroke="none"/>
  <text x="248" y="151" stroke="none">(78, 36)</text>
</svg>`,
        solution:
          "Plot the 8 points on axes labelled $x$ (resting heart rate) and $y$ ($\\mathrm{VO}_2$ max), clearly showing the downward linear trend from $(48, 63)$ to $(78, 36)$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Find the product moment correlation coefficient between $y$ and $x$ and comment on its value in the context of the data.",
        type: "self",
        solution:
          "Using GC, $r = -0.99057 \\approx -0.991$ (3 s.f.).<br>" +
          "Since $r$ is very close to $-1$, there is a strong negative linear correlation between resting heart rate ($x$) and $\\mathrm{VO}_2$ max ($y$)."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "Use an appropriate regression line to estimate the $\\mathrm{VO}_2$ max of a person with a resting heart rate of 60 beats/min, leaving your answer to the nearest integer. Comment on the reliability of your estimate.",
        type: "self",
        solution:
          "Regression line of $y$ on $x$:<br>" +
          "$y = -0.85860x + 103.395$ (or $y = -0.859x + 103$ to 3 s.f.).<br><br>" +
          "When $x = 60$: $y = -0.85860(60) + 103.395 = 51.88 \\approx 52$ (to the nearest integer).<br><br>" +
          "Since $x = 60$ lies within the given data range ($48 \\le x \\le 78$) (interpolation) and $|r| = 0.991$ is very close to 1, the estimate is reliable."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "Use a specific example to explain why extrapolating using your regression line in part (iii) to predict the $\\mathrm{VO}_2$ max of people with very high or very low resting heart rate is not advisable.",
        type: "self",
        solution:
          "For example, when $x = 125$, the regression line predicts $y = -0.85860(125) + 103.395 = -3.93$, which is negative and physically impossible for $\\mathrm{VO}_2$ max. Thus extrapolation is not advisable."
      },
      {
        label: "(v)",
        marks: 3,
        prompt: "Due to an instrumentation issue, all the resting heart rate values are to be increased by $v$ beats/min.<br>Find the value of the product moment correlation coefficient, and the gradient and $y$-intercept of the regression line of $y$ on $x$ after these adjustments, leaving your answer in terms of $v$ where applicable.",
        type: "self",
        solution:
          "Adding a constant $v$ to all $x$ values does not change the product moment correlation coefficient: $r = -0.991$ (3 s.f.).<br><br>" +
          "Let the adjusted resting heart rate be $w = x + v \\implies x = w - v$.<br>" +
          "Substituting into the regression line of $y$ on $x$:<br>" +
          "$y = -0.85860(w - v) + 103.395 = -0.85860w + (0.85860v + 103.395)$.<br><br>" +
          "Hence:<br>" +
          "• Product moment correlation coefficient $= -0.991$ (3 s.f.)<br>" +
          "• Gradient $= -0.859$ (3 s.f.)<br>" +
          "• $y$-intercept $= 0.859v + 103$ (3 s.f.)."
      }
    ]
  },

  // ==================== Q12 ====================
  {
    id: "MI-2025-P2-Q12",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q12",
    category: "stats",
    topics: ["Hypothesis Testing", "Sampling"],
    stem:
      "Supernova School is a school which specialises in sports. The mean reaction time of the students in this school is 250 milliseconds. To reduce the reaction times of students, the teachers implemented a reflex training programme. After its completion, 50 students were randomly selected from the school, and their reaction times $x$ (in milliseconds) were recorded as follows:<br>" +
      "$$\\sum (x - 200) = 2159.62 \\qquad \\sum (x - 200)^2 = 112081.09$$",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Calculate the unbiased estimates of the population mean and variance of the reaction time of students.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "243.1924", placeholder: "Exact or 3 s.f." },
          { label: "Variance =", answer: "383.71263", placeholder: "3 s.f." }
        ],
        solution:
          "Unbiased estimate of population mean:<br>" +
          "$\\bar{x} = \\frac{2159.62}{50} + 200 = 243.1924 \\approx 243$ (3 s.f.).<br><br>" +
          "Unbiased estimate of population variance:<br>" +
          "$s^2 = \\frac{1}{49}\\left[112081.09 - \\frac{2159.62^2}{50}\\right] = 383.7126 \\approx 384$ (3 s.f.)."
      },
      {
        label: "(ii)",
        marks: 5,
        prompt: "Test, at 1% level of significance, whether the programme was effective. You should state your hypotheses and define any symbols you use.",
        type: "self",
        solution:
          "Let $X$ be the reaction time (in milliseconds) of a randomly chosen student at Supernova School, and $\\mu$ be the population mean reaction time.<br><br>" +
          "$\\mathrm{H}_0 : \\mu = 250$<br>" +
          "$\\mathrm{H}_1 : \\mu < 250$ (one-tailed test at $\\alpha = 0.01$).<br><br>" +
          "Under $\\mathrm{H}_0$, since $n = 50$ is large, by Central Limit Theorem:<br>" +
          "$\\bar{X} \\sim \\mathrm{N}\\left(250, \\frac{383.7126}{50}\\right)$ approximately.<br>" +
          "Test statistic $z = \\frac{243.1924 - 250}{\\sqrt{383.7126 / 50}} = -2.4574$.<br>" +
          "From GC, $p\\text{-value} = 0.006997 \\approx 0.00700$ (3 s.f.).<br><br>" +
          "Since $p\\text{-value} = 0.00700 < 0.01$, we reject $\\mathrm{H}_0$.<br>" +
          "There is sufficient evidence at the 1% level of significance to conclude that the mean reaction time has been reduced (i.e. the programme was effective)."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "Explain why the test in part (ii) may not be appropriate if only a sample of 10 students was taken.",
        type: "self",
        solution:
          "The population distribution of reaction times is unknown, and a sample size of $10$ is not sufficiently large for the Central Limit Theorem to apply. Thus $\\bar{X}$ may not follow a normal distribution closely enough, so the $z$-test may not be appropriate."
      },
      {
        label: "(iv)",
        marks: 4,
        prompt:
          "In another school, Galaxy School, the reaction times of its students follow a normal distribution with mean $\\mu_0$ milliseconds and variance $153\\text{ milliseconds}^2$. The school also implemented the reflex training programme with its students.<br>" +
          "A random sample of 40 students is taken and the mean reaction time of this sample is computed to be 241 milliseconds. A test carried out at 5% level of significance indicated that the reflex training programme was not successful. Find the range of values of $\\mu_0$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 135" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Baseline -->
  <line x1="20" y1="105" x2="260" y2="105" stroke-width="1.2"/>
  <!-- Shaded left tail x <= 90 -->
  <path d="M 30,105 C 55,104 75,98 90,82 L 90,105 Z" fill="rgba(207,86,82,0.35)" stroke="none"/>
  <!-- Normal bell curve centered at x = 140 -->
  <path d="M 30,104 C 70,102 95,88 115,48 C 125,28 132,20 140,20 C 148,20 155,28 165,48 C 185,88 210,102 250,104" fill="none" stroke="#4ca885" stroke-width="2"/>
  <!-- Center line -->
  <line x1="140" y1="20" x2="140" y2="105" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="136" y="120" stroke="none">0</text>
  <!-- Critical value line -->
  <line x1="90" y1="82" x2="90" y2="105" stroke="#cf5652" stroke-width="1.2"/>
  <text x="64" y="120" stroke="none" fill="#cf5652">−1.64485</text>
  <text x="52" y="80" stroke="none" fill="#cf5652">0.05</text>
  <text x="180" y="34" stroke="none" fill="#4ca885" font-style="italic">Z ~ N(0, 1)</text>
</svg>`,
        solution:
          "Let $Y$ be the reaction time of a randomly chosen student at Galaxy School.<br>" +
          "$\\mathrm{H}_0 : \\mu = \\mu_0$ vs $\\mathrm{H}_1 : \\mu < \\mu_0$ (one-tailed test at $\\alpha = 0.05$).<br>" +
          "Under $\\mathrm{H}_0$, $\\bar{Y} \\sim \\mathrm{N}\\left(\\mu_0, \\frac{153}{40}\\right)$, so $Z = \\frac{\\bar{Y} - \\mu_0}{\\sqrt{153/40}} \\sim \\mathrm{N}(0, 1)$.<br><br>" +
          "Critical value at 5% level of significance is $-1.64485$.<br>" +
          "Since the programme was not successful, $\\mathrm{H}_0$ is not rejected:<br>" +
          "$\\frac{241 - \\mu_0}{\\sqrt{153/40}} > -1.64485$<br>" +
          "$241 - \\mu_0 > -1.64485 \\times 1.95576 = -3.2169$<br>" +
          "$\\mu_0 < 244.22$<br>" +
          "$\\therefore \\mu_0 < 244$ (3 s.f.) (and $\\mu_0 > 0$)."
      }
    ]
  }
]);
