window.registerQuestions([
  {
    id: "SAJC-2025-P1-Q1",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["System of Linear Equations", "Differentiation", "Integration"],
    stem: "A function $\\mathrm{f}$ is defined by $\\mathrm{f}(x) = ax^3 + bx^2 + cx + d$ where $a$, $b$, $c$ and $d$ are constants. The graph of $y = \\mathrm{f}(x)$ has a turning point at $x = -1$ and passes through the points $(2, 10)$ and $(-2, -2)$. Given also that $\\int_{-2}^{2} \\mathrm{f}(x)\\,\\mathrm{d}x = 16$, find the values of $a$, $b$, $c$ and $d$.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the values of $a$, $b$, $c$ and $d$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "3", exactRequired: true, placeholder: "Integer value" },
          { label: "b =", answer: "0", exactRequired: true, placeholder: "Integer value" },
          { label: "c =", answer: "-9", exactRequired: true, placeholder: "Integer value" },
          { label: "d =", answer: "4", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "$\\mathrm{f}(x) = ax^3 + bx^2 + cx + d$<br>" +
          "Passing through $(2, 10)$: $\\mathrm{f}(2) = 8a + 4b + 2c + d = 10 \\quad \\text{--- (1)}$<br>" +
          "Passing through $(-2, -2)$: $\\mathrm{f}(-2) = -8a + 4b - 2c + d = -2 \\quad \\text{--- (2)}$<br>" +
          "Turning point at $x = -1$: $\\mathrm{f}'(x) = 3ax^2 + 2bx + c$, so $\\mathrm{f}'(-1) = 3a - 2b + c = 0 \\quad \\text{--- (3)}$<br>" +
          "Integral condition:<br>" +
          "$$\\int_{-2}^{2} (ax^3 + bx^2 + cx + d)\\,\\mathrm{d}x = \\left[\\frac{1}{4}ax^4 + \\frac{1}{3}bx^3 + \\frac{1}{2}cx^2 + dx\\right]_{-2}^{2} = 16$$" +
          "$$\\frac{16}{3}b + 4d = 16 \\quad \\text{--- (4)}$$" +
          "Solving (1), (2), (3) and (4) using GC:<br>" +
          "$a = 3$, $b = 0$, $c = -9$, $d = 4$."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q2",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Applications of Differentiation", "Maxima and Minima"],
    stem: "A closed cylinder is designed to have a fixed external surface area of $p\\text{ cm}^2$ such that its volume is maximum.",
    parts: [
      {
        label: "(Full)",
        marks: 5,
        prompt: "Find the radius of the cylinder in terms of $p$.",
        type: "auto",
        mode: "expr",
        vars: { p: [6, 12, 24] },
        answer: "sqrt(p/(6*pi))",
        placeholder: "Expression in terms of p",
        solution: "Let $r$ and $h$ be the radius and the height of the cylinder respectively.<br>" +
          "External surface area:<br>" +
          "$$p = 2\\pi r^2 + 2\\pi rh \\implies h = \\frac{p - 2\\pi r^2}{2\\pi r} = \\frac{p}{2\\pi r} - r$$" +
          "Volume:<br>" +
          "$$V = \\pi r^2 h = \\pi r^2\\left(\\frac{p}{2\\pi r} - r\\right) = \\frac{pr}{2} - \\pi r^3$$" +
          "$$\\frac{\\mathrm{d}V}{\\mathrm{d}r} = \\frac{p}{2} - 3\\pi r^2$$" +
          "For stationary values, $\\frac{\\mathrm{d}V}{\\mathrm{d}r} = 0 \\implies 3\\pi r^2 = \\frac{p}{2} \\implies r = \\sqrt{\\frac{p}{6\\pi}}$ (since $r > 0$).<br>" +
          "$$\\frac{\\mathrm{d}^2 V}{\\mathrm{d}r^2} = -6\\pi r$$" +
          "When $r = \\sqrt{\\frac{p}{6\\pi}}$, $\\frac{\\mathrm{d}^2 V}{\\mathrm{d}r^2} = -6\\pi\\sqrt{\\frac{p}{6\\pi}} < 0$.<br>" +
          "$\\therefore V$ is a maximum when $r = \\sqrt{\\frac{p}{6\\pi}}\\text{ cm}$."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q3",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors", "Lines and Planes"],
    stem: "The lines $l_1$ and $l_2$ have equations<br>" +
      "$$l_1 : \\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + \\lambda \\begin{pmatrix} -2 \\\\ 1 \\\\ 2 \\end{pmatrix}, \\quad l_2 : \\mathbf{r} = \\begin{pmatrix} 0 \\\\ 5 \\\\ -8 \\end{pmatrix} + \\mu \\begin{pmatrix} 2 \\\\ -2 \\\\ 3 \\end{pmatrix},$$" +
      "where $\\lambda$ and $\\mu$ are parameters.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Show that $l_1$ and $l_2$ are skew lines.",
        type: "self",
        solution: "Direction vectors: $\\begin{pmatrix} -2 \\\\ 1 \\\\ 2 \\end{pmatrix} \\ne k\\begin{pmatrix} 2 \\\\ -2 \\\\ 3 \\end{pmatrix}$ for any scalar $k$, so $l_1$ is not parallel to $l_2$.<br>" +
          "Equating the two lines:<br>" +
          "$$\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + \\lambda\\begin{pmatrix} -2 \\\\ 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 5 \\\\ -8 \\end{pmatrix} + \\mu\\begin{pmatrix} 2 \\\\ -2 \\\\ 3 \\end{pmatrix}$$" +
          "$2\\lambda + 2\\mu = 1 \\quad \\text{--- (1)}$<br>" +
          "$-\\lambda - 2\\mu = -3 \\quad \\text{--- (2)}$<br>" +
          "$-2\\lambda + 3\\mu = 8 \\quad \\text{--- (3)}$<br>" +
          "Solving (1) and (2) gives $\\lambda = -2$ and $\\mu = \\frac{5}{2}$.<br>" +
          "Substituting into (3): LHS $= -2(-2) + 3\\left(\\frac{5}{2}\\right) = \\frac{23}{2} \\ne 8 =$ RHS (no solution from GC).<br>" +
          "Since $l_1$ and $l_2$ are non-parallel and non-intersecting, they are skew lines."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "The point $P$ has coordinates $(1, 5, 0)$ and the plane $\\pi_1$ has equation $y - z - 2 = 0$.<br>Find the coordinates of $P'$, the reflection of $P$ in $\\pi_1$.",
        type: "auto",
        mode: "tuple",
        answer: [1, 2, 3],
        exactRequired: true,
        placeholder: "Coordinates (x, y, z)",
        solution: "Let $F$ be the foot of the perpendicular from $P$ to $\\pi_1$.<br>" +
          "The normal vector of $\\pi_1$ is $\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}$.<br>" +
          "Equation of line through $P$ and $F$:<br>" +
          "$$\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 5 \\\\ 0 \\end{pmatrix} + \\alpha\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 5+\\alpha \\\\ -\\alpha \\end{pmatrix}, \\quad \\alpha \\in \\mathbb{R}$$" +
          "Substitute into $\\pi_1$ ($y - z = 2$):<br>" +
          "$(5 + \\alpha) - (-\\alpha) = 2 \\implies 5 + 2\\alpha = 2 \\implies \\alpha = -\\frac{3}{2}$.<br>" +
          "Thus $OF = \\begin{pmatrix} 1 \\\\ 7/2 \\\\ 3/2 \\end{pmatrix}$.<br>" +
          "Since $F$ is the midpoint of $PP'$:<br>" +
          "$$OP' = 2\\,OF - OP = \\begin{pmatrix} 2 \\\\ 7 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 5 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$$" +
          "Therefore, the coordinates of $P'$ are $(1, 2, 3)$."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "Find the cartesian equation of the plane $\\pi_2$ containing $P$ and $l_1$.",
        type: "self",
        solution: "Let $A(1, 2, 0)$ be a point on $l_1$.<br>" +
          "$$AP = OP - OA = \\begin{pmatrix} 1 \\\\ 5 \\\\ 0 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 3 \\\\ 0 \\end{pmatrix}$$" +
          "Normal to $\\pi_2$:<br>" +
          "$$\\mathbf{n} = \\begin{pmatrix} -2 \\\\ 1 \\\\ 2 \\end{pmatrix} \\times \\begin{pmatrix} 0 \\\\ 3 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} -6 \\\\ 0 \\\\ -6 \\end{pmatrix} = -6\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$$" +
          "Equation of $\\pi_2$:<br>" +
          "$$\\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} = 1$$" +
          "Cartesian equation of $\\pi_2$ is $x + z = 1$."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q4",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Functions", "Composite Functions", "Inverse Functions"],
    diagramSvg: `<svg viewBox="0 0 280 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <text x="140" y="14" text-anchor="middle" stroke="none" font-style="italic" font-size="10">Diagram for part (b)</text>
      <!-- Axes -->
      <line x1="30" y1="175" x2="255" y2="175" stroke-width="1.2"/>
      <polyline points="249,172 255,175 249,178" fill="none" stroke-width="1.2"/>
      <line x1="65" y1="195" x2="65" y2="25" stroke-width="1.2"/>
      <polyline points="62,31 65,25 68,31" fill="none" stroke-width="1.2"/>
      <text x="260" y="179" stroke="none" font-style="italic">x</text>
      <text x="65" y="21" text-anchor="middle" stroke="none" font-style="italic">y</text>
      <text x="55" y="187" stroke="none" font-style="italic">O</text>
      <!-- Curve h(x) = -(e/16)(x-1)^2 + 9e/16 for 0 < x < 4 -->
      <!-- Scale: x in [0,4] -> px 65 to 225 (40px/unit); y in [0, 1.53] -> py 175 to 45 (85px/unit) -->
      <!-- x=0: y=e/2=1.359 -> py=175-115.5=59.5; x=1: y=9e/16=1.529 -> py=45; x=2: y=1.359 -> py=59.5; x=3: y=0.849 -> py=102.8; x=4: y=0 -> py=175 -->
      <path d="M 65 59.5 Q 105 30.5 145 59.5 Q 185 88.5 225 175" fill="none" stroke="#4a8fe7" stroke-width="2"/>
      <!-- Dashed line at x=1 -->
      <line x1="105" y1="45" x2="105" y2="175" stroke-dasharray="4,3" opacity="0.6" stroke-width="1"/>
      <!-- Open circles at (0, e/2) and (4, 0) -->
      <circle cx="65" cy="59.5" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
      <circle cx="225" cy="175" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
      <!-- Labels -->
      <text x="48" y="55" text-anchor="middle" stroke="none">e</text>
      <line x1="43" y1="59" x2="53" y2="59" stroke-width="0.9"/>
      <text x="48" y="70" text-anchor="middle" stroke="none">2</text>
      <text x="105" y="189" text-anchor="middle" stroke="none">1</text>
      <text x="225" y="189" text-anchor="middle" stroke="none">4</text>
      <text x="195" y="88" stroke="none" font-style="italic" fill="#4a8fe7">y = h(x)</text>
    </svg>`,
    stem: "<strong>(a)</strong> The function $\\mathrm{f}$ is defined by<br>" +
      "$\\mathrm{f}(x) = a^2 - x^2$ for $0 < x \\le a$, and<br>" +
      "$\\mathrm{f}(x) = a(x - a)$ for $a < x \\le 2a$,<br>" +
      "and $\\mathrm{f}(x) = \\mathrm{f}(x + 2a)$ for all real values of $x$, where $a$ is a positive constant.<br><br>" +
      "<strong>(b)</strong> The function $\\mathrm{g}$ is defined by $\\mathrm{g} : x \\mapsto \\ln x$, where $x \\in \\mathbb{R}$, $0 < x \\le \\mathrm{e}$.<br>" +
      "The diagram above shows the graph of the quadratic function $\\mathrm{h}$ with domain $0 < x < 4$. The graph has a maximum point at $x = 1$ and has end-points $\\left(0, \\frac{\\mathrm{e}}{2}\\right)$ and $(4, 0)$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$ for $-2a \\le x \\le 3a$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 360 175" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: x in [-2a, 3a] -> 50px per a, x=0 at 150, y=0 at 135, y=a^2 at 55 -->
          <line x1="25" y1="135" x2="340" y2="135" stroke-width="1.2"/>
          <polyline points="334,132 340,135 334,138" fill="none" stroke-width="1.2"/>
          <line x1="150" y1="158" x2="150" y2="18" stroke-width="1.2"/>
          <polyline points="147,24 150,18 153,24" fill="none" stroke-width="1.2"/>
          <text x="345" y="139" stroke="none" font-style="italic">x</text>
          <text x="150" y="13" text-anchor="middle" stroke="none" font-style="italic">y</text>
          <text x="142" y="148" stroke="none" font-style="italic">O</text>
          <!-- Dashed horizontal line y = a^2 and verticals at -2a, 2a -->
          <line x1="50" y1="55" x2="250" y2="55" stroke-dasharray="4,3" opacity="0.5" stroke-width="1"/>
          <line x1="50" y1="55" x2="50" y2="135" stroke-dasharray="4,3" opacity="0.5" stroke-width="1"/>
          <line x1="250" y1="55" x2="250" y2="135" stroke-dasharray="4,3" opacity="0.5" stroke-width="1"/>
          <!-- Period [-2a, 0]: [-2a, -a] parabola from (50,55) to (100,135), [-a, 0] line from (100,135) to (150,55) -->
          <path d="M 50 55 Q 75 55 100 135" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <line x1="100" y1="135" x2="150" y2="55" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Period [0, 2a]: [0, a] parabola (150,55) to (200,135), [a, 2a] line (200,135) to (250,55) -->
          <path d="M 150 55 Q 175 55 200 135" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <line x1="200" y1="135" x2="250" y2="55" stroke="#4a8fe7" stroke-width="2"/>
          <!-- [2a, 3a]: parabola (250,55) to (300,135) -->
          <path d="M 250 55 Q 275 55 300 135" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Endpoints (closed) -->
          <circle cx="50" cy="55" r="2.8" fill="#4a8fe7"/>
          <circle cx="300" cy="135" r="2.8" fill="#4a8fe7"/>
          <!-- Labels -->
          <text x="50" y="150" text-anchor="middle" stroke="none">-2a</text>
          <text x="100" y="150" text-anchor="middle" stroke="none">-a</text>
          <text x="200" y="150" text-anchor="middle" stroke="none">a</text>
          <text x="250" y="150" text-anchor="middle" stroke="none">2a</text>
          <text x="300" y="150" text-anchor="middle" stroke="none">3a</text>
          <text x="142" y="50" text-anchor="end" stroke="none">a²</text>
          <text x="50" y="45" text-anchor="middle" stroke="none">(-2a, a²)</text>
          <text x="306" y="124" stroke="none">(3a, 0)</text>
          <text x="278" y="45" stroke="none" font-style="italic" fill="#4a8fe7">y = f(x)</text>
        </svg>`,
        solution: "Since $\\mathrm{f}(x) = \\mathrm{f}(x + 2a)$, the function is periodic with period $2a$.<br>" +
          "On $(0, a]$, $y = a^2 - x^2$ is a downward-opening parabola from $(0, a^2)$ to $(a, 0)$.<br>" +
          "On $(a, 2a]$, $y = a(x - a)$ is a straight line segment from $(a, 0)$ to $(2a, a^2)$.<br>" +
          "Repeating this pattern over $[-2a, 3a]$ gives endpoints $(-2a, a^2)$ and $(3a, 0)$, with peaks of height $a^2$ at $x = -2a, 0, 2a$ and zeros at $x = -a, a, 3a$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find $\\mathrm{f}\\left(\\frac{101a}{2}\\right)$ in terms of $a$.",
        type: "auto",
        mode: "expr",
        vars: { a: [1, 2, 4] },
        answer: "3*a^2/4",
        placeholder: "Expression in terms of a",
        solution: "Since $\\mathrm{f}$ has period $2a$ and $50a = 25(2a)$:<br>" +
          "$$\\mathrm{f}\\left(\\frac{101a}{2}\\right) = \\mathrm{f}\\left(50a + \\frac{a}{2}\\right) = \\mathrm{f}\\left(\\frac{a}{2}\\right) = a^2 - \\left(\\frac{a}{2}\\right)^2 = \\frac{3a^2}{4}.$$"
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Determine whether $\\mathrm{hg}$ exists. Justify your answer.",
        type: "self",
        solution: "For $\\mathrm{hg}$ to exist, we require $\\mathrm{R}_{\\mathrm{g}} \\subseteq \\mathrm{D}_{\\mathrm{h}}$.<br>" +
          "For $\\mathrm{g}(x) = \\ln x$ with $0 < x \\le \\mathrm{e}$, $\\mathrm{R}_{\\mathrm{g}} = (-\\text{∞}, 1]$.<br>" +
          "We are given $\\mathrm{D}_{\\mathrm{h}} = (0, 4)$.<br>" +
          "Since $\\mathrm{R}_{\\mathrm{g}} = (-\\text{∞}, 1]$ is not a subset of $\\mathrm{D}_{\\mathrm{h}} = (0, 4)$ (for example, $0 \\in \\mathrm{R}_{\\mathrm{g}}$ but $0 \\notin \\mathrm{D}_{\\mathrm{h}}$), $\\mathrm{hg}$ does not exist."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "State the other value of $x$ for which $\\mathrm{h}(x) = \\frac{\\mathrm{e}}{2}$. Given that $\\mathrm{h}^{-1}$ exists, deduce the restricted domain of $\\mathrm{h}$ such that the domain of $\\mathrm{h}^{-1}$ is $\\left(0, \\frac{\\mathrm{e}}{2}\\right]$.",
        type: "self",
        solution: "Since $\\mathrm{h}$ is a quadratic function with maximum point at $x = 1$, its graph is symmetric about the line $x = 1$.<br>" +
          "As $\\mathrm{h}(0) = \\frac{\\mathrm{e}}{2}$, by symmetry the other value of $x$ is $x = 2$.<br>" +
          "Since $\\mathrm{h}^{-1}$ exists, $\\mathrm{h}$ is one-to-one and $\\mathrm{R}_{\\mathrm{h}} = \\mathrm{D}_{\\mathrm{h}^{-1}} = \\left(0, \\frac{\\mathrm{e}}{2}\\right]$.<br>" +
          "From the graph of $\\mathrm{h}$, the restricted domain is $\\mathrm{D}_{\\mathrm{h}} = [2, 4)$."
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "Using the restricted domain of $\\mathrm{h}$ found in (b)(ii), find the range of $\\mathrm{gh}$.",
        type: "self",
        solution: "Using the mapping $\\mathrm{D}_{\\mathrm{h}}$ → $\\mathrm{R}_{\\mathrm{h}}$ → $\\mathrm{R}_{\\mathrm{gh}}$:<br>" +
          "$[2, 4)$ maps under $\\mathrm{h}$ to $\\left(0, \\frac{\\mathrm{e}}{2}\\right]$.<br>" +
          "Since $\\mathrm{g}(x) = \\ln x$ is strictly increasing and $\\ln\\left(\\frac{\\mathrm{e}}{2}\\right) = 1 - \\ln 2$, $\\left(0, \\frac{\\mathrm{e}}{2}\\right]$ maps under $\\mathrm{g}$ to $(-\\text{∞}, 1 - \\ln 2]$.<br>" +
          "$\\therefore \\mathrm{R}_{\\mathrm{gh}} = (-\\text{∞}, 1 - \\ln 2]$ (or $(-\\text{∞}, 0.307]$ to 3 s.f.)."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q5",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Arithmetic and Geometric Progressions", "Convergence of Series"],
    stem: "An arithmetic progression has first term $a$ and common difference $d$, where $a$ and $d$ are non-zero. The $3\\text{rd}$, $9\\text{th}$ and $11\\text{th}$ terms of the arithmetic progression are three distinct consecutive terms of a geometric progression.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find $d$ in terms of $a$.",
        type: "auto",
        mode: "expr",
        vars: { a: [1, 11, 22] },
        answer: "-a/11",
        placeholder: "Expression in terms of a",
        solution: "The $3\\text{rd}$, $9\\text{th}$ and $11\\text{th}$ terms are $a + 2d$, $a + 8d$ and $a + 10d$.<br>" +
          "Since they are consecutive terms of a GP:<br>" +
          "$$\\frac{a + 8d}{a + 2d} = \\frac{a + 10d}{a + 8d}$$" +
          "$$(a + 8d)^2 = (a + 2d)(a + 10d)$$" +
          "$$a^2 + 16ad + 64d^2 = a^2 + 12ad + 20d^2$$" +
          "$$4ad + 44d^2 = 0 \\implies 4d(a + 11d) = 0$$" +
          "Since $d \\ne 0$, $a + 11d = 0 \\implies d = -\\frac{1}{11}a$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Let the sum of the first $n$ terms of the arithmetic progression be $S_n$ where $S_1 = 143$. Find the largest possible value of $S_n$.",
        type: "auto",
        mode: "number",
        answer: "858",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "$S_1 = a = 143$, so $d = -\\frac{1}{11}(143) = -13$.<br>" +
          "$$S_n = \\frac{n}{2}\\left[2(143) + (n - 1)(-13)\\right] = \\frac{n}{2}(299 - 13n)$$" +
          "Note that $u_n = 143 - 13(n - 1) = 156 - 13n \\ge 0 \\implies n \\le 12$ (with $u_{12} = 0$).<br>" +
          "From GC (or substituting $n = 11$ or $n = 12$):<br>" +
          "Largest $S_n = S_{11} = S_{12} = 858$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The first term of the geometric progression is $b$, where $b$ is positive.<br>Determine whether the geometric series is convergent.",
        type: "self",
        solution: "Common ratio:<br>" +
          "$$r = \\frac{a + 8d}{a + 2d} = \\frac{-11d + 8d}{-11d + 2d} = \\frac{-3d}{-9d} = \\frac{1}{3}$$" +
          "Since $|r| = \\frac{1}{3} < 1$, the geometric series is convergent."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Show that the sum of all terms after the $n\\text{th}$ term of the geometric progression is at most $\\frac{1}{2}b$, where $n$ is a positive integer.",
        type: "self",
        solution: "Let $u_n$ be the $n\\text{th}$ term of the geometric progression.<br>" +
          "The sum of all terms after the $n\\text{th}$ term is:<br>" +
          "$$u_{n+1} + u_{n+2} + \\dots = S_{\\text{∞}} - S_n = \\frac{b}{1 - r} - \\frac{b(1 - r^n)}{1 - r} = \\frac{br^n}{1 - r}$$" +
          "Substituting $r = \\frac{1}{3}$:<br>" +
          "$$\\frac{b\\left(\\frac{1}{3}\\right)^n}{1 - \\frac{1}{3}} = \\frac{3}{2}b\\left(\\frac{1}{3}\\right)^n = \\frac{1}{2}b\\left(\\frac{1}{3}\\right)^{n-1}$$" +
          "Since $n$ is a positive integer ($n \\ge 1$), $\\left(\\frac{1}{3}\\right)^{n-1} \\le 1$, and $b > 0$.<br>" +
          "Therefore, $\\frac{1}{2}b\\left(\\frac{1}{3}\\right)^{n-1} \\le \\frac{1}{2}b$ (shown)."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q6",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Graphing Techniques", "Transformations", "Differentiation"],
    diagramSvg: `<svg viewBox="0 0 420 190" width="420" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Left graph: y = f(x) -->
      <line x1="15" y1="95" x2="195" y2="95" stroke-width="1.2"/>
      <polyline points="189,92 195,95 189,98" fill="none" stroke-width="1.2"/>
      <line x1="75" y1="175" x2="75" y2="18" stroke-width="1.2"/>
      <polyline points="72,24 75,18 78,24" fill="none" stroke-width="1.2"/>
      <text x="200" y="99" stroke="none" font-style="italic">x</text>
      <text x="75" y="13" text-anchor="middle" stroke="none" font-style="italic">y</text>
      <text x="67" y="108" stroke="none" font-style="italic">O</text>
      <!-- Curve f(x): max (0,0) at (75,95), min (3,-5) at (120,145), x-int (6,0) at (165,95) -->
      <path d="M 28 158 C 48 122, 62 95, 75 95 C 88 95, 105 145, 120 145 C 135 145, 152 122, 165 95 C 173 78, 180 58, 186 38" fill="none" stroke="#4a8fe7" stroke-width="2"/>
      <text x="120" y="162" text-anchor="middle" stroke="none">(3, -5)</text>
      <text x="168" y="110" stroke="none">(6, 0)</text>
      <text x="145" y="38" stroke="none" font-style="italic" fill="#4a8fe7">y = f(x)</text>

      <!-- Right graph: y = g(x) -->
      <line x1="230" y1="115" x2="395" y2="115" stroke-width="1.2"/>
      <polyline points="389,112 395,115 389,118" fill="none" stroke-width="1.2"/>
      <line x1="275" y1="175" x2="275" y2="18" stroke-width="1.2"/>
      <polyline points="272,24 275,18 278,24" fill="none" stroke-width="1.2"/>
      <text x="400" y="119" stroke="none" font-style="italic">x</text>
      <text x="275" y="13" text-anchor="middle" stroke="none" font-style="italic">y</text>
      <text x="267" y="128" stroke="none" font-style="italic">O</text>
      <!-- Curve g(x) = -f(3x): min (0,0) at (275,115), max (1,5) at (295,65), x-int (2,0) at (315,115) -->
      <path d="M 250 38 C 258 68, 266 115, 275 115 C 284 115, 288 65, 295 65 C 302 65, 308 88, 315 115 C 320 135, 324 152, 328 172" fill="none" stroke="#cf5652" stroke-width="2"/>
      <text x="295" y="55" text-anchor="middle" stroke="none">(1, 5)</text>
      <text x="320" y="130" stroke="none">(2, 0)</text>
      <text x="345" y="45" stroke="none" font-style="italic" fill="#cf5652">y = g(x)</text>
    </svg>`,
    stem: "The graph of $y = \\mathrm{f}(x)$ cuts the $x$-axis at the point $(6, 0)$ and has a maximum point and a minimum point at $(0, 0)$ and $(3, -5)$ respectively. The graph of $y = \\mathrm{g}(x)$ cuts the $x$-axis at the point $(2, 0)$, and has a minimum point and a maximum point at $(0, 0)$ and $(1, 5)$ respectively. The diagrams above show the graphs of $y = \\mathrm{f}(x)$ and $y = \\mathrm{g}(x)$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Describe fully a sequence of two transformations which transforms the graph of $y = \\mathrm{f}(x)$ onto the graph of $y = \\mathrm{g}(x)$.",
        type: "self",
        solution: "1. Reflection of the graph in the $x$-axis, followed by<br>" +
          "2. Scaling of the resulting graph by a factor $\\frac{1}{3}$ parallel to the $x$-axis.<br>" +
          "(The two transformations may also be performed in the reverse order.)"
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "It is given that $\\mathrm{g}(x)$ can be expressed in the form $a\\mathrm{f}(bx + c) + d$ where $a$, $b$, $c$ and $d$ are constants.<br>State the values of $a$, $b$, $c$ and $d$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "-1", exactRequired: true, placeholder: "Integer value" },
          { label: "b =", answer: "3", exactRequired: true, placeholder: "Integer value" },
          { label: "c =", answer: "0", exactRequired: true, placeholder: "Integer value" },
          { label: "d =", answer: "0", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "From part (i), $\\mathrm{g}(x) = -\\mathrm{f}(3x)$.<br>" +
          "$\\therefore a = -1$, $b = 3$, $c = 0$, $d = 0$."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "The derivative of the function $y = \\mathrm{f}(x)$ with respect to $x$ is denoted by $\\mathrm{f}'(x)$. It is given that $\\mathrm{f}'(6) = 4$. Find the exact value of $\\mathrm{g}'(2)$.",
        type: "auto",
        mode: "number",
        answer: "-12",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Differentiating $\\mathrm{g}(x) = -\\mathrm{f}(3x)$ with respect to $x$:<br>" +
          "$\\mathrm{g}'(x) = -3\\mathrm{f}'(3x)$<br>" +
          "$\\mathrm{g}'(2) = -3\\mathrm{f}'(6) = -3(4) = -12$."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q7",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Graphing Techniques", "Applications of Integration", "Riemann Sums"],
    stem: "This question consists of two independent parts (a) and (b) on graphs and definite integrals.",
    parts: [
      {
        label: "(a)(i)",
        marks: 4,
        prompt: "On a single diagram, sketch the graphs of $y = \\frac{3x}{x - 1}$ and $y = 3x$, stating the equation(s) of any asymptote(s) and the coordinates of points of intersection.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 220" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (120, 145), scale x: 35px/unit, y: 12px/unit -->
          <line x1="20" y1="145" x2="300" y2="145" stroke-width="1.2"/>
          <polyline points="294,142 300,145 294,148" fill="none" stroke-width="1.2"/>
          <line x1="120" y1="210" x2="120" y2="15" stroke-width="1.2"/>
          <polyline points="117,21 120,15 123,21" fill="none" stroke-width="1.2"/>
          <text x="305" y="149" stroke="none" font-style="italic">x</text>
          <text x="120" y="11" text-anchor="middle" stroke="none" font-style="italic">y</text>
          <!-- Asymptotes: x = 1 (px 155), y = 3 (py 109) -->
          <line x1="155" y1="18" x2="155" y2="208" stroke-dasharray="4,3" opacity="0.6" stroke-width="1"/>
          <line x1="20" y1="109" x2="295" y2="109" stroke-dasharray="4,3" opacity="0.6" stroke-width="1"/>
          <text x="160" y="198" stroke="none" font-style="italic">x = 1</text>
          <text x="26" y="103" stroke="none" font-style="italic">y = 3</text>
          <!-- Line y = 3x: (-1.5, -4.5) -> (67.5, 199) to (3, 9) -> (225, 37) -->
          <line x1="68" y1="199" x2="225" y2="37" stroke="#cf5652" stroke-width="1.8"/>
          <text x="228" y="36" stroke="none" font-style="italic" fill="#cf5652">y = 3x</text>
          <!-- Curve y = 3x/(x-1) = 3 + 3/(x-1) -->
          <!-- Left branch: x=-2.5 (y=2.14)->(32.5,119.3), x=-1 (y=1.5)->(85,127), x=0 (y=0)->(120,145), x=0.5 (y=-3)->(137.5,181), x=0.65 (y=-5.57)->(142.8,211) -->
          <path d="M 25 118 Q 95 124 120 145 Q 137 166 144 210" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Right branch: x=1.35 (y=11.57)->(167.2,6.1), x=1.5 (y=9)->(172.5,37), x=2 (y=6)->(190,73), x=3 (y=4.5)->(225,91), x=5 (y=3.75)->(295,100) -->
          <path d="M 167 18 Q 175 60 190 73 Q 218 93 295 100" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Intersection points (0,0) and (2,6) -->
          <circle cx="120" cy="145" r="3" fill="#2c2925"/>
          <circle cx="190" cy="73" r="3" fill="#2c2925"/>
          <text x="102" y="159" stroke="none">(0, 0)</text>
          <text x="197" y="72" stroke="none">(2, 6)</text>
          <text x="242" y="88" stroke="none" font-style="italic" fill="#4a8fe7">y = 3x/(x - 1)</text>
        </svg>`,
        solution: "For $y = \\frac{3x}{x - 1} = 3 + \\frac{3}{x - 1}$:<br>" +
          "Vertical asymptote: $x = 1$. Horizontal asymptote: $y = 3$.<br>" +
          "Points of intersection with $y = 3x$:<br>" +
          "$\\frac{3x}{x - 1} = 3x \\implies 3x\\left(\\frac{1}{x - 1} - 1\\right) = 0 \\implies x = 0$ or $x = 2$.<br>" +
          "Coordinates of points of intersection: $(0, 0)$ and $(2, 6)$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Hence find the area bounded by the curve $y = \\frac{3x}{x - 1}$ and the lines $y = 3x$ and $y = 8$.",
        type: "auto",
        mode: "number",
        answer: "8/3 - 3*ln(5/3)",
        placeholder: "3 s.f. or exact",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (35, 160), scale x: 75px/unit, y: 15px/unit -->
          <line x1="20" y1="160" x2="265" y2="160" stroke-width="1.2"/>
          <polyline points="259,157 265,160 259,163" fill="none" stroke-width="1.2"/>
          <line x1="35" y1="172" x2="35" y2="15" stroke-width="1.2"/>
          <polyline points="32,21 35,15 38,21" fill="none" stroke-width="1.2"/>
          <text x="270" y="164" stroke="none" font-style="italic">x</text>
          <text x="35" y="11" text-anchor="middle" stroke="none" font-style="italic">y</text>
          <text x="24" y="170" stroke="none" font-style="italic">O</text>
          <!-- Shaded region between y=6 (py=70) and y=8 (py=40), x from 1.6 (px=155) to 2 (px=185) to 2.667 (px=235) -->
          <path d="M 155 40 L 235 40 L 185 70 Q 168 58 155 40 Z" fill="rgba(91,155,213,0.28)" stroke="none"/>
          <!-- Horizontal line y = 8 -->
          <line x1="35" y1="40" x2="258" y2="40" stroke="#e0726e" stroke-width="1.5"/>
          <text x="26" y="44" text-anchor="end" stroke="none">8</text>
          <!-- Line y = 3x -->
          <line x1="35" y1="160" x2="255" y2="28" stroke="#2c2925" stroke-width="1.5"/>
          <!-- Curve y = 3x/(x-1): x=1.45 (y=9.67)->(143.8,15), x=1.6 (y=8)->(155,40), x=2 (y=6)->(185,70), x=2.8 (y=4.67)->(245,90) -->
          <path d="M 145 18 Q 158 52 185 70 Q 215 84 252 92" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Guide lines -->
          <line x1="155" y1="40" x2="155" y2="160" stroke-dasharray="4,3" opacity="0.5"/>
          <line x1="185" y1="70" x2="185" y2="160" stroke-dasharray="4,3" opacity="0.5"/>
          <line x1="235" y1="40" x2="235" y2="160" stroke-dasharray="4,3" opacity="0.5"/>
          <line x1="35" y1="70" x2="185" y2="70" stroke-dasharray="4,3" opacity="0.5"/>
          <text x="26" y="74" text-anchor="end" stroke="none">6</text>
          <text x="155" y="174" text-anchor="middle" stroke="none">1.6</text>
          <text x="185" y="174" text-anchor="middle" stroke="none">2</text>
          <text x="235" y="174" text-anchor="middle" stroke="none">8/3</text>
        </svg>`,
        solution: "Expressing $x$ in terms of $y$:<br>" +
          "For $y = 3x$, $x = \\frac{y}{3}$.<br>" +
          "For $y = \\frac{3x}{x - 1}$, $yx - y = 3x \\implies x = \\frac{y}{y - 3}$.<br>" +
          "Area bounded by the curve and lines $y = 3x$ and $y = 8$:<br>" +
          "$$\\text{Area} = \\int_{6}^{8} \\left(\\frac{y}{3} - \\frac{y}{y - 3}\\right)\\mathrm{d}y = \\frac{8}{3} - 3\\ln\\left(\\frac{5}{3}\\right) \\approx 1.13\\text{ units}^2 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(b)(i)",
        marks: 4,
        prompt: "A curve has the equation $y = \\sqrt{x^2 + 1}$ where $x$ is non-negative.<br>With the aid of a sketch of the above curve, explain why the value of<br>$$S = \\lim_{n \\text{ → ∞}} \\frac{1}{n}\\left[1 + \\sqrt{\\frac{1}{n^2} + 1} + \\sqrt{\\frac{4}{n^2} + 1} + \\dots + \\sqrt{\\frac{(n - 1)^2}{n^2} + 1}\\right]$$is $\\int_{0}^{1} \\sqrt{x^2 + 1}\\,\\mathrm{d}x$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 185" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (45, 145), x in [0, 1] -> px 45 to 245 (200px/unit), y in [0, 1.6] -> py 145 to 25 (75px/unit) -->
          <line x1="25" y1="145" x2="295" y2="145" stroke-width="1.2"/>
          <polyline points="289,142 295,145 289,148" fill="none" stroke-width="1.2"/>
          <line x1="45" y1="168" x2="45" y2="15" stroke-width="1.2"/>
          <polyline points="42,21 45,15 48,21" fill="none" stroke-width="1.2"/>
          <text x="300" y="149" stroke="none" font-style="italic">x</text>
          <text x="45" y="11" text-anchor="middle" stroke="none" font-style="italic">y</text>
          <text x="34" y="158" stroke="none" font-style="italic">O</text>
          <!-- Left-endpoint rectangles (illustrative, width 30px each) -->
          <rect x="45" y="70" width="30" height="75" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1"/>
          <rect x="75" y="69.2" width="30" height="75.8" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1"/>
          <rect x="105" y="66.7" width="30" height="78.3" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1"/>
          <text x="155" y="112" text-anchor="middle" stroke="none" font-size="14">…</text>
          <rect x="185" y="54.5" width="30" height="90.5" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1"/>
          <rect x="215" y="47.2" width="30" height="97.8" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1"/>
          <!-- Curve y = sqrt(x^2+1): x=0 -> (45,70), x=0.5 -> (145,61.1), x=1 -> (245,38.9), x=1.2 -> (285,27.8) -->
          <path d="M 45 70 Q 145 66 245 38.9 L 280 28" fill="none" stroke="#2c2925" stroke-width="2"/>
          <text x="200" y="28" stroke="none" font-style="italic">y = √(x² + 1)</text>
          <text x="25" y="72" text-anchor="middle" stroke="none">(0, 1)</text>
          <text x="75" y="162" text-anchor="middle" stroke="none" font-size="10">1/n</text>
          <text x="105" y="162" text-anchor="middle" stroke="none" font-size="10">2/n</text>
          <text x="215" y="162" text-anchor="middle" stroke="none" font-size="10">(n-1)/n</text>
          <text x="245" y="162" text-anchor="middle" stroke="none" font-size="10">1</text>
        </svg>`,
        solution: "Divide the interval $[0, 1]$ along the $x$-axis into $n$ equal sub-intervals of width $\\frac{1}{n}$, and construct $n$ rectangles of width $\\frac{1}{n}$ with heights given by the left-endpoint values $\\mathrm{f}(0), \\mathrm{f}\\left(\\frac{1}{n}\\right), \\dots, \\mathrm{f}\\left(\\frac{n - 1}{n}\\right)$ where $\\mathrm{f}(x) = \\sqrt{x^2 + 1}$.<br>" +
          "The total area of the $n$ rectangles is:<br>" +
          "$$A = \\frac{1}{n}\\left[\\mathrm{f}(0) + \\mathrm{f}\\left(\\frac{1}{n}\\right) + \\mathrm{f}\\left(\\frac{2}{n}\\right) + \\dots + \\mathrm{f}\\left(\\frac{n - 1}{n}\\right)\\right] = \\frac{1}{n}\\left[1 + \\sqrt{\\frac{1}{n^2} + 1} + \\sqrt{\\frac{4}{n^2} + 1} + \\dots + \\sqrt{\\frac{(n - 1)^2}{n^2} + 1}\\right]$$" +
          "As the number of rectangles increases ($n$ → ∞), the width $\\frac{1}{n}$ of each rectangle approaches $0$, so the sum of the areas of the $n$ rectangles approaches the exact area of the region enclosed by $y = \\sqrt{x^2 + 1}$, the $x$-axis, and the lines $x = 0$ and $x = 1$.<br>" +
          "Hence $S = \\int_{0}^{1} \\sqrt{x^2 + 1}\\,\\mathrm{d}x$."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "Hence find the value of $S$.",
        type: "auto",
        mode: "number",
        answer: "1.14779357",
        placeholder: "3 s.f. or exact",
        solution: "Using GC:<br>$$S = \\int_{0}^{1} \\sqrt{x^2 + 1}\\,\\mathrm{d}x = 1.1478 \\approx 1.15 \\text{ (3 s.f.)}$$"
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q8",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Implicit Differentiation", "Tangents and Normals"],
    stem: "A curve has equation $(x - y)^2 = 2\\mathrm{e}^{xy}$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x - y - y\\mathrm{e}^{xy}}{x - y + x\\mathrm{e}^{xy}}$.",
        type: "self",
        solution: "Differentiating $(x - y)^2 = 2\\mathrm{e}^{xy}$ implicitly with respect to $x$:<br>" +
          "$$2(x - y)\\left(1 - \\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right) = 2\\mathrm{e}^{xy}\\left(x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\right)$$" +
          "$$(x - y) - (x - y)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = x\\mathrm{e}^{xy}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\mathrm{e}^{xy}$$" +
          "$$(x - y + x\\mathrm{e}^{xy})\\frac{\\mathrm{d}y}{\\mathrm{d}x} = x - y - y\\mathrm{e}^{xy}$$" +
          "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x - y - y\\mathrm{e}^{xy}}{x - y + x\\mathrm{e}^{xy}} \\quad \\text{(shown)}$$"
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Given that the curve cuts the positive $y$-axis at point $A$, find the equation of the normal to the curve at $A$.",
        type: "self",
        solution: "When $x = 0$: $(0 - y)^2 = 2\\mathrm{e}^{0} \\implies y^2 = 2 \\implies y = \\sqrt{2}$ (since $y > 0$).<br>" +
          "So $A$ is $(0, \\sqrt{2})$.<br>" +
          "At $A(0, \\sqrt{2})$:<br>" +
          "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{0 - \\sqrt{2} - \\sqrt{2}\\mathrm{e}^{0}}{0 - \\sqrt{2} + 0} = \\frac{-2\\sqrt{2}}{-\\sqrt{2}} = 2$$" +
          "Gradient of normal $= -\\frac{1}{2}$.<br>" +
          "Equation of the normal at $A$: $y = -\\frac{1}{2}x + \\sqrt{2}$."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "The normal to the curve at $A$ meets the curve at another point $B$. Find the coordinates of $B$.",
        type: "auto",
        mode: "tuple",
        answer: [2.24881, 0.28981],
        placeholder: "Coordinates (x, y) to 3 s.f.",
        solution: "Substitute $y = -\\frac{1}{2}x + \\sqrt{2}$ into $(x - y)^2 = 2\\mathrm{e}^{xy}$:<br>" +
          "$$\\left(\\frac{3}{2}x - \\sqrt{2}\\right)^2 = 2\\mathrm{e}^{-\\frac{1}{2}x^2 + \\sqrt{2}x}$$" +
          "Using GC, $x = 0$ (rejected as it is point $A$) or $x = 2.2488$ (5 s.f.).<br>" +
          "When $x = 2.2488$, $y = -\\frac{1}{2}(2.2488) + \\sqrt{2} = 0.28981$ (5 s.f.).<br>" +
          "$\\therefore B(2.25, 0.290)$ (3 s.f.)."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q9",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Integration Techniques", "Substitution", "Volume of Revolution"],
    stem: "This question tests integration by trigonometric substitution and volume of revolution.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Use the substitution $x = 3\\sec\\theta$ to find $\\int \\frac{1}{x^2\\sqrt{x^2 - 9}}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [4, 5, 6],
        answer: "sqrt(x^2-9)/(9*x)",
        placeholder: "Expression in terms of x (without + C)",
        solution: "Let $x = 3\\sec\\theta$, then $\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = 3\\sec\\theta\\tan\\theta$.<br>" +
          "$$\\int \\frac{1}{x^2\\sqrt{x^2 - 9}}\\,\\mathrm{d}x = \\int \\frac{3\\sec\\theta\\tan\\theta}{9\\sec^2\\theta\\sqrt{9\\sec^2\\theta - 9}}\\,\\mathrm{d}\\theta$$" +
          "$$= \\int \\frac{\\tan\\theta}{9\\sec\\theta\\tan\\theta}\\,\\mathrm{d}\\theta = \\frac{1}{9}\\int \\cos\\theta\\,\\mathrm{d}\\theta = \\frac{1}{9}\\sin\\theta + C$$" +
          "Since $\\cos\\theta = \\frac{3}{x}$, we have $\\sin\\theta = \\frac{\\sqrt{x^2 - 9}}{x}$.<br>" +
          "$$\\therefore \\int \\frac{1}{x^2\\sqrt{x^2 - 9}}\\,\\mathrm{d}x = \\frac{\\sqrt{x^2 - 9}}{9x} + C$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "The region $R$ lies in the first quadrant and is bounded by the curve $y^2 = \\frac{1}{x^2\\sqrt{x^2 - 9}}$ and the lines $y = 0.1$ and $x = 4$. Find the exact volume of the solid generated when $R$ is rotated through $2\\pi$ radians about the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "pi*(71/900 - sqrt(7)/36)",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solutionSvg: `<svg viewBox="0 0 280 180" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes -->
          <line x1="25" y1="150" x2="265" y2="150" stroke-width="1.2"/>
          <polyline points="259,147 265,150 259,153" fill="none" stroke-width="1.2"/>
          <line x1="40" y1="168" x2="40" y2="15" stroke-width="1.2"/>
          <polyline points="37,21 40,15 43,21" fill="none" stroke-width="1.2"/>
          <text x="270" y="154" stroke="none" font-style="italic">x</text>
          <text x="40" y="11" text-anchor="middle" stroke="none" font-style="italic">y</text>
          <!-- Asymptote x = 3 (px 90), x = 4 (px 125), x = 5 (px 185) -->
          <line x1="90" y1="20" x2="90" y2="155" stroke-dasharray="4,3" opacity="0.5"/>
          <text x="90" y="168" text-anchor="middle" stroke="none">x = 3</text>
          <!-- Shaded region R between x=4 (px 125) and x=5 (px 185), above y=0.1 (py 120) -->
          <path d="M 125 65 Q 145 104 185 120 L 125 120 Z" fill="rgba(91,155,213,0.28)" stroke="none"/>
          <!-- Line x = 4 -->
          <line x1="125" y1="20" x2="125" y2="150" stroke="#2c2925" stroke-width="1.2"/>
          <text x="125" y="164" text-anchor="middle" stroke="none">4</text>
          <!-- Line y = 0.1 -->
          <line x1="25" y1="120" x2="255" y2="120" stroke="#cf5652" stroke-width="1.3"/>
          <text x="235" y="113" stroke="none" fill="#cf5652">y = 0.1</text>
          <!-- Dashed line at x = 5 -->
          <line x1="185" y1="120" x2="185" y2="150" stroke-dasharray="4,3" opacity="0.5"/>
          <text x="185" y="164" text-anchor="middle" stroke="none">5</text>
          <!-- Curve -->
          <path d="M 102 22 Q 115 62 125 65 Q 145 104 185 120 Q 218 131 250 137" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <text x="140" y="110" stroke="none" font-style="italic">R</text>
        </svg>`,
        solution: "Find the intersection of $y^2 = \\frac{1}{x^2\\sqrt{x^2 - 9}}$ with $y = 0.1$:<br>" +
          "$\\frac{1}{x^2\\sqrt{x^2 - 9}} = 0.01 \\implies x^2\\sqrt{x^2 - 9} = 100 \\implies x = 5$ (since $5^2\\sqrt{25 - 9} = 25 \\times 4 = 100$).<br>" +
          "Volume of solid generated:<br>" +
          "$$V = \\pi\\int_{4}^{5} y^2\\,\\mathrm{d}x - \\pi(0.1)^2(5 - 4)$$" +
          "$$= \\pi\\left[\\frac{\\sqrt{x^2 - 9}}{9x}\\right]_{4}^{5} - \\frac{\\pi}{100}$$" +
          "$$= \\pi\\left(\\frac{4}{45} - \\frac{\\sqrt{7}}{36}\\right) - \\frac{\\pi}{100} = \\pi\\left(\\frac{71}{900} - \\frac{\\sqrt{7}}{36}\\right)\\text{ units}^3$$"
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q10",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    diagramSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <text x="140" y="13" text-anchor="middle" stroke="none" font-style="italic" font-size="10">Argand diagram for part (b)</text>
      <!-- Axes -->
      <line x1="20" y1="95" x2="260" y2="95" stroke-width="1.2"/>
      <polyline points="254,92 260,95 254,98" fill="none" stroke-width="1.2"/>
      <line x1="140" y1="175" x2="140" y2="25" stroke-width="1.2"/>
      <polyline points="137,31 140,25 143,31" fill="none" stroke-width="1.2"/>
      <text x="262" y="109" text-anchor="end" stroke="none">Re</text>
      <text x="132" y="33" text-anchor="end" stroke="none">Im</text>
      <text x="130" y="108" stroke="none" font-style="italic">O</text>
      <!-- Point A in 4th quadrant at (195, 138) -->
      <line x1="191" y1="134" x2="199" y2="142" stroke="#4a8fe7" stroke-width="1.8"/>
      <line x1="199" y1="134" x2="191" y2="142" stroke="#4a8fe7" stroke-width="1.8"/>
      <text x="204" y="136" stroke="none" font-style="italic">A</text>
    </svg>`,
    stem: "<strong>Do not use a calculator in answering this question.</strong>",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Find the complex numbers $z$ and $w$ which satisfy the following simultaneous equations.<br>$$|z| + 5w = 0$$<br>$$\\mathrm{i}z - 4w = -4 + 7\\mathrm{i}$$<br>Give your answers in the form $a + \\mathrm{i}b$, where $a$ and $b$ are real constants.",
        type: "self",
        solution: "From $|z| + 5w = 0$, we have $w = -\\frac{1}{5}|z|$.<br>" +
          "Substitute into $\\mathrm{i}z - 4w = -4 + 7\\mathrm{i}$:<br>" +
          "$$\\mathrm{i}z + \\frac{4}{5}|z| = -4 + 7\\mathrm{i}$$" +
          "Let $z = x + y\\mathrm{i}$, where $x, y \\in \\mathbb{R}$:<br>" +
          "$$\\left(-y + \\frac{4}{5}\\sqrt{x^2 + y^2}\\right) + x\\mathrm{i} = -4 + 7\\mathrm{i}$$" +
          "Comparing imaginary parts: $x = 7$.<br>" +
          "Comparing real parts:<br>" +
          "$$-y + \\frac{4}{5}\\sqrt{49 + y^2} = -4 \\implies 5(y - 4) = 4\\sqrt{49 + y^2} \\quad (*)$$" +
          "Squaring both sides:<br>" +
          "$25(y^2 - 8y + 16) = 16(49 + y^2) \\implies 9y^2 - 200y - 384 = 0 \\implies (y - 24)(9y + 16) = 0$.<br>" +
          "So $y = 24$ or $y = -\\frac{16}{9}$.<br>" +
          "Since $5(y - 4) \\ge 0$ in $(*)$, we reject $y = -\\frac{16}{9}$, giving $y = 24$.<br>" +
          "$\\therefore z = 7 + 24\\mathrm{i}$, and $w = -\\frac{1}{5}\\sqrt{7^2 + 24^2} = -\\frac{1}{5}(25) = -5$."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "The point $A$ on the Argand diagram represents the complex number $u$.<br>Plot the point $B$ to represent the complex number $-u$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="95" x2="260" y2="95" stroke-width="1.2"/>
          <polyline points="254,92 260,95 254,98" fill="none" stroke-width="1.2"/>
          <line x1="140" y1="175" x2="140" y2="18" stroke-width="1.2"/>
          <polyline points="137,24 140,18 143,24" fill="none" stroke-width="1.2"/>
          <text x="262" y="109" text-anchor="end" stroke="none">Re</text>
          <text x="132" y="27" text-anchor="end" stroke="none">Im</text>
          <text x="130" y="108" stroke="none" font-style="italic">O</text>
          <!-- Vector u to A(195, 138) -->
          <line x1="140" y1="95" x2="195" y2="138" stroke="#4a8fe7" stroke-width="1.6"/>
          <line x1="191" y1="134" x2="199" y2="142" stroke="#4a8fe7" stroke-width="1.8"/>
          <line x1="199" y1="134" x2="191" y2="142" stroke="#4a8fe7" stroke-width="1.8"/>
          <text x="204" y="138" stroke="none" font-style="italic">A</text>
          <text x="160" y="128" stroke="none" font-style="italic" fill="#4a8fe7">u</text>
          <!-- Vector -u to B(85, 52) -->
          <line x1="140" y1="95" x2="85" y2="52" stroke="#cf5652" stroke-width="1.6"/>
          <line x1="81" y1="48" x2="89" y2="56" stroke="#cf5652" stroke-width="1.8"/>
          <line x1="89" y1="48" x2="81" y2="56" stroke="#cf5652" stroke-width="1.8"/>
          <text x="74" y="50" stroke="none" font-style="italic">B</text>
          <text x="108" y="84" stroke="none" font-style="italic" fill="#cf5652">-u</text>
        </svg>`,
        solution: "The point $B$ representing $-u$ is the reflection of $A$ through the origin $O$ (i.e. in the second quadrant, with $OB = OA$ and $B, O, A$ collinear)."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "The points $C$ and $D$ represent the complex numbers $v - u$ and $(v - u)^*$ respectively, where $v$ is an unknown complex number. It is also given that ∠$CDA = 90^\\circ$.<br>By using the Argand diagram or otherwise, state the value of $\\text{Im}(v)$ and justify your answer.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="95" x2="260" y2="95" stroke-width="1.2"/>
          <polyline points="254,92 260,95 254,98" fill="none" stroke-width="1.2"/>
          <line x1="140" y1="175" x2="140" y2="18" stroke-width="1.2"/>
          <polyline points="137,24 140,18 143,24" fill="none" stroke-width="1.2"/>
          <text x="262" y="109" text-anchor="end" stroke="none">Re</text>
          <text x="132" y="27" text-anchor="end" stroke="none">Im</text>
          <!-- A(195,138), B(85,52), C(155,52), D(155,138) -->
          <line x1="140" y1="95" x2="195" y2="138" stroke="#4a8fe7" stroke-width="1.4"/>
          <line x1="140" y1="95" x2="85" y2="52" stroke="#cf5652" stroke-width="1.4"/>
          <line x1="85" y1="52" x2="155" y2="52" stroke="#2c2925" stroke-width="1.5"/>
          <line x1="155" y1="52" x2="155" y2="138" stroke-dasharray="4,3" stroke-width="1.3"/>
          <line x1="155" y1="138" x2="195" y2="138" stroke="#2c2925" stroke-width="1.5"/>
          <!-- Right angle at D -->
          <polyline points="155,130 163,130 163,138" fill="none" stroke="#cf5652" stroke-width="1.2"/>
          <circle cx="195" cy="138" r="2.5" fill="#4a8fe7"/>
          <circle cx="85" cy="52" r="2.5" fill="#cf5652"/>
          <circle cx="155" cy="52" r="2.5" fill="#2c2925"/>
          <circle cx="155" cy="138" r="2.5" fill="#2c2925"/>
          <text x="202" y="141" stroke="none" font-style="italic">A</text>
          <text x="74" y="50" stroke="none" font-style="italic">B</text>
          <text x="160" y="48" stroke="none" font-style="italic">C</text>
          <text x="145" y="150" stroke="none" font-style="italic">D</text>
          <text x="118" y="45" stroke="none" font-style="italic">v</text>
        </svg>`,
        solution: "Since $C$ and $D$ represent a complex conjugate pair $v - u$ and $(v - u)^*$, the line segment $CD$ is vertical and $C$ and $D$ are equidistant from the real axis.<br>" +
          "Given ∠$CDA = 90^\\circ$ and $CD$ is vertical, the segment $DA$ must be horizontal.<br>" +
          "Since $A$ and $B$ are also equidistant from the real axis, $BC$ must also be horizontal.<br>" +
          "Since $C$ represents $v - u$ and $B$ represents $-u$, the vector $BC$ represents $(v - u) - (-u) = v$.<br>" +
          "As $BC$ is horizontal, $v$ must be a real number, hence $\\text{Im}(v) = 0$.<br><br>" +
          "<em>Alternatively:</em> Let $u = a + b\\mathrm{i}$ and $v = c + d\\mathrm{i}$. Then $C(c - a, d - b)$ and $D(c - a, b - d)$. Since $CD$ is vertical and ∠$CDA = 90^\\circ$, $D$ and $A(a, b)$ share the same $y$-coordinate: $b - d = b \\implies d = 0 \\implies \\text{Im}(v) = 0$."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q11",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Vectors", "Scalar Product", "Vector Product"],
    diagramSvg: `<svg viewBox="0 0 220 200" width="220" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Circle center O(110, 100), radius 75 -->
      <circle cx="110" cy="100" r="75" fill="none" stroke-width="1.3"/>
      <!-- B(110, 25), A(175, 62.5), A'(45, 137.5) -->
      <line x1="45" y1="137.5" x2="175" y2="62.5" stroke-width="1.3"/>
      <line x1="110" y1="25" x2="175" y2="62.5" stroke="#4a8fe7" stroke-width="1.6"/>
      <line x1="110" y1="25" x2="45" y2="137.5" stroke="#4a8fe7" stroke-width="1.6"/>
      <line x1="110" y1="100" x2="110" y2="25" stroke-width="1.3"/>
      <!-- Arrows for a and b -->
      <polyline points="107,60 110,53 113,60" fill="none" stroke-width="1.3"/>
      <polyline points="140,78 147,78.5 143,84" fill="none" stroke-width="1.3"/>
      <!-- Points -->
      <circle cx="110" cy="100" r="2.5" fill="#2c2925"/>
      <circle cx="110" cy="25" r="2.5" fill="#2c2925"/>
      <circle cx="175" cy="62.5" r="2.5" fill="#2c2925"/>
      <circle cx="45" cy="137.5" r="2.5" fill="#2c2925"/>
      <!-- Labels -->
      <text x="115" y="113" stroke="none" font-style="italic">O</text>
      <text x="110" y="18" text-anchor="middle" stroke="none" font-style="italic">B</text>
      <text x="183" y="64" stroke="none" font-style="italic">A</text>
      <text x="30" y="147" stroke="none" font-style="italic">A'</text>
      <text x="117" y="62" stroke="none" font-weight="bold">b</text>
      <text x="147" y="92" stroke="none" font-weight="bold">a</text>
    </svg>`,
    stem: "The points $A$, $B$ and $A'$ lie on a circle with centre $O$ such that $OA = \\mathbf{a}$ and $OB = \\mathbf{b}$. It is also given that the line segment $AA'$ is a straight line that passes through $O$ (see diagram).",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "Using a suitable scalar product, prove that ∠$ABA' = 90^\\circ$.",
        type: "self",
        solution: "Since $AA'$ is a diameter passing through the centre $O$, $OA' = -\\mathbf{a}$.<br>" +
          "$BA = OA - OB = \\mathbf{a} - \\mathbf{b}$<br>" +
          "$BA' = OA' - OB = -\\mathbf{a} - \\mathbf{b}$<br>" +
          "Taking the scalar product:<br>" +
          "$$BA \\cdot BA' = (\\mathbf{a} - \\mathbf{b}) \\cdot (-\\mathbf{a} - \\mathbf{b}) = -\\mathbf{a} \\cdot \\mathbf{a} - \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{b} \\cdot \\mathbf{a} + \\mathbf{b} \\cdot \\mathbf{b} = -|\\mathbf{a}|^2 + |\\mathbf{b}|^2$$" +
          "Since $A$ and $B$ lie on the circle with centre $O$, $|\\mathbf{a}| = |\\mathbf{b}|$ (radii of the circle).<br>" +
          "Hence $BA \\cdot BA' = 0$, so $BA \\perp BA'$, and therefore ∠$ABA' = 90^\\circ$ (shown)."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Express the area of △$ABA'$ in the form $k|\\mathbf{a} \\times \\mathbf{b}|$, where $k$ is a real constant.",
        type: "self",
        solution: "Area of △$OAB = \\frac{1}{2}|\\mathbf{a} \\times \\mathbf{b}|$.<br>" +
          "Since $O$ is the midpoint of $AA'$, △$OAB$ and △$OA'B$ share the same perpendicular height from $B$ to $AA'$ and have equal bases $OA = OA'$.<br>" +
          "Thus, Area of △$ABA' = 2 \\times \\text{Area of △}OAB = 2 \\times \\frac{1}{2}|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a} \\times \\mathbf{b}|$, where $k = 1$."
      }
    ]
  },
  {
    id: "SAJC-2025-P1-Q12",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Differential Equations", "Modelling"],
    stem: "Welding fumes contain a dangerous amount of particulates. To protect workers in a workshop, an extraction device removes particulates in the air continuously. Let $V\\text{ mg}$ represent the mass of particulates in the air in the workshop at time $t\\text{ min}$ after the extraction device is activated.<br><br>" +
      "Particulates are produced at a constant rate of $0.32\\text{ mg/min}$. The rate at which particulates are removed is proportional to the mass of particulates in the air.<br>" +
      "When the mass of particulates in the air in the workshop is $18.75\\text{ mg}$, the mass of particulates in the air increases at a rate of $0.12\\text{ mg/min}$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{d}V}{\\mathrm{d}t} = \\frac{4}{375}(30 - V)$.",
        type: "self",
        solution: "Let $\\frac{\\mathrm{d}V}{\\mathrm{d}t} = 0.32 - kV$, where $k > 0$ is a constant.<br>" +
          "When $V = 18.75$, $\\frac{\\mathrm{d}V}{\\mathrm{d}t} = 0.12$:<br>" +
          "$0.12 = 0.32 - 18.75k \\implies k = \\frac{0.2}{18.75} = \\frac{4}{375}$.<br>" +
          "$$\\frac{\\mathrm{d}V}{\\mathrm{d}t} = 0.32 - \\frac{4}{375}V = \\frac{1}{375}(120 - 4V) = \\frac{4}{375}(30 - V) \\quad \\text{(shown)}$$"
      },
      {
        label: "(ii)",
        marks: 5,
        prompt: "Solve the differential equation, given that the workshop is initially free of particulates.",
        type: "self",
        solution: "Separating variables:<br>" +
          "$$\\int \\frac{1}{30 - V}\\,\\mathrm{d}V = \\int \\frac{4}{375}\\,\\mathrm{d}t$$" +
          "$$-\\ln|30 - V| = \\frac{4}{375}t + C$$" +
          "$$30 - V = A\\mathrm{e}^{-\\frac{4}{375}t} \\quad (A = \\pm \\mathrm{e}^{-C})$$" +
          "$$V = 30 - A\\mathrm{e}^{-\\frac{4}{375}t}$$" +
          "When $t = 0$, $V = 0 \\implies 0 = 30 - A \\implies A = 30$.<br>" +
          "$$\\therefore V = 30 - 30\\mathrm{e}^{-\\frac{4}{375}t}$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Sketch the graph of $V$ against $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 175" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes -->
          <line x1="25" y1="145" x2="255" y2="145" stroke-width="1.2"/>
          <polyline points="249,142 255,145 249,148" fill="none" stroke-width="1.2"/>
          <line x1="45" y1="162" x2="45" y2="20" stroke-width="1.2"/>
          <polyline points="42,26 45,20 48,26" fill="none" stroke-width="1.2"/>
          <text x="242" y="162" text-anchor="middle" stroke="none" font-style="italic">t (min)</text>
          <text x="45" y="14" text-anchor="middle" stroke="none" font-style="italic">V (mg)</text>
          <text x="35" y="157" stroke="none" font-style="italic">O</text>
          <!-- Horizontal asymptote V = 30 at py = 55 -->
          <line x1="45" y1="55" x2="245" y2="55" stroke-dasharray="4,3" opacity="0.6" stroke-width="1"/>
          <text x="218" y="47" stroke="none" font-style="italic">V = 30</text>
          <!-- Curve V = 30(1 - e^(-4t/375)) -->
          <path d="M 45 145 Q 95 75 155 62 Q 200 57 245 56" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="45" cy="145" r="2.8" fill="#4a8fe7"/>
        </svg>`,
        solution: "The graph starts at the origin $(0, 0)$ for $t \\ge 0$, increases at a decreasing rate, and approaches the horizontal asymptote $V = 30$ as $t$ → ∞."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "It is recommended that the mass of particulates in this workshop should be kept below $32\\text{ mg}$. Comment on whether the extraction device is effective enough to meet the recommendation.",
        type: "self",
        solution: "Since $V = 30 - 30\\mathrm{e}^{-\\frac{4}{375}t} < 30$ for all $t \\ge 0$ (the mass of particulates approaches a maximum of $30\\text{ mg}$, which is below $32\\text{ mg}$), the extraction device is effective enough to meet the recommendation."
      },
      {
        label: "(v)",
        marks: 1,
        prompt: "The extraction device becomes less efficient and now removes particulates at half its original rate.<br>Write down a new differential equation to model this.",
        type: "self",
        solution: "Halving the removal rate $\\frac{4}{375}V$ gives $\\frac{2}{375}V$:<br>" +
          "$$\\frac{\\mathrm{d}V}{\\mathrm{d}t} = 0.32 - \\frac{2}{375}V = \\frac{2}{375}(60 - V)$$"
      },
      {
        label: "(vi)",
        marks: 1,
        prompt: "The mass of particulates in the air in the workshop is said to reach a steady-state when it remains constant. Find the value of $V$ at steady-state.",
        type: "auto",
        mode: "number",
        answer: "60",
        exactRequired: true,
        placeholder: "Numeric value",
        solution: "At steady-state, $\\frac{\\mathrm{d}V}{\\mathrm{d}t} = 0$:<br>" +
          "$\\frac{2}{375}(60 - V) = 0 \\implies V = 60$."
      }
    ]
  }
]);
