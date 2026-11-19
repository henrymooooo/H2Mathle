window.registerQuestions([
  {
    id: "CJC-2025-P1-Q1",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs and Transformations", "Conics"],
    diagramSvg: `<svg viewBox="0 0 340 240" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (210, 165), scale: 16px/unit -->
  <line x1="35" y1="165" x2="285" y2="165" stroke-width="1.3" />
  <polyline points="279,161 285,165 279,169" fill="none" stroke-width="1.3" />
  <line x1="210" y1="228" x2="210" y2="18" stroke-width="1.3" />
  <polyline points="206,24 210,18 214,24" fill="none" stroke-width="1.3" />
  <text x="290" y="169" stroke="none" font-style="italic">x</text>
  <text x="206" y="13" stroke="none" font-style="italic">y</text>
  <text x="215" y="177" stroke="none" font-style="italic">O</text>
  <!-- Asymptotes through centre (-3, 3) -> (162, 117) -->
  <line x1="94" y1="219" x2="230" y2="15" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.65" />
  <line x1="94" y1="15" x2="230" y2="219" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.65" />
  <!-- Left branch of hyperbola -->
  <path d="M 97 33 Q 114 66 123 89 Q 130 105 130 117 Q 130 129 123 145 Q 114 168 97 201" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Right branch of hyperbola -->
  <path d="M 227 33 Q 210 66 201 89 Q 194 105 194 117 Q 194 129 201 145 Q 210 168 227 201" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Vertices (-5, 3) -> (130, 117) and (-1, 3) -> (194, 117) -->
  <circle cx="130" cy="117" r="2.8" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="194" cy="117" r="2.8" fill="#4a8fe7" stroke="#4a8fe7" />
  <text x="86" y="121" stroke="none">(−5, 3)</text>
  <text x="199" y="121" stroke="none">(−1, 3)</text>
  <!-- Asymptote labels -->
  <text x="235" y="27" stroke="none" font-style="italic">y = (3/2)x + 15/2</text>
  <text x="235" y="218" stroke="none" font-style="italic">y = −(3/2)x − 3/2</text>
</svg>`,
    stem: "The diagram above shows the curve $C$ with equation $$\\frac{(x+p)^2}{r} - \\frac{(y+q)^2}{9} = 1,$$ where $p$, $q$ and $r$ are constants. The vertices are $(-5, 3)$ and $(-1, 3)$ and the asymptotes are $y = \\frac{3}{2}x + \\frac{15}{2}$ and $y = -\\frac{3}{2}x - \\frac{3}{2}$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the values of $p$, $q$ and $r$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "p =", answer: "3", exactRequired: true, placeholder: "Integer value" },
          { label: "q =", answer: "-3", exactRequired: true, placeholder: "Integer value" },
          { label: "r =", answer: "4", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "The centre of the hyperbola is the mid-point of the vertices $(-5, 3)$ and $(-1, 3)$: $$\\left(\\frac{-5-1}{2}, \\frac{3+3}{2}\\right) = (-3, 3).$$ Comparing with $\\frac{(x+p)^2}{r} - \\frac{(y+q)^2}{9} = 1$, the centre is $(-p, -q)$, so $p = 3$ and $q = -3$.<br>The horizontal distance from the centre $(-3, 3)$ to either vertex is $2$, so $\\sqrt{r} = 2 \\implies r = 4$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The curve $D$ has equation $(x+3)^2 + m(y-3)^2 = m$, where $m$ is a positive constant. Find the range of values of $m$ for which curves $C$ and $D$ do not intersect.",
        type: "self",
        solution: "Dividing the equation of $D$ by $m > 0$: $$\\frac{(x+3)^2}{(\\sqrt{m})^2} + \\frac{(y-3)^2}{1^2} = 1.$$ This is an ellipse with centre $(-3, 3)$, which is the same centre as the hyperbola $C$, and horizontal semi-axis $\\sqrt{m}$.<br>For $C$ and $D$ not to intersect, the horizontal semi-axis of the ellipse must be strictly less than the distance from the centre to the vertices of the hyperbola ($2$): $$\\sqrt{m} < 2 \\implies m < 4.$$ Since $m$ is a positive constant, $0 < m < 4$."
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q2",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Sequences and Series", "Summation"],
    stem: "The $n$th term of a sequence is given by $u_n = an^2 + bn + c$. The first three terms of this sequence of numbers are $2$, $6$ and $12$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the values of $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "1", exactRequired: true, placeholder: "Integer value" },
          { label: "b =", answer: "1", exactRequired: true, placeholder: "Integer value" },
          { label: "c =", answer: "0", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "Substituting $n = 1, 2, 3$:<br>$n = 1: \\quad a + b + c = 2 \\quad \\text{--- (1)}$<br>$n = 2: \\quad 4a + 2b + c = 6 \\quad \\text{--- (2)}$<br>$n = 3: \\quad 9a + 3b + c = 12 \\quad \\text{--- (3)}$<br>Solving the system using a graphing calculator gives $a = 1$, $b = 1$ and $c = 0$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Given that $\\sum_{n=1}^{N} \\frac{1}{u_n} = 1 - \\frac{1}{N+1}$, find $\\sum_{n=8}^{∞} \\frac{1}{u_n}$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "1/8",
        placeholder: "Exact fraction",
        solution: "As $N$ → ∞, $\\frac{1}{N+1}$ → $0$, so $$\\sum_{n=1}^{∞} \\frac{1}{u_n} = 1.$$ Therefore, $$\\sum_{n=8}^{∞} \\frac{1}{u_n} = \\sum_{n=1}^{∞} \\frac{1}{u_n} - \\sum_{n=1}^{7} \\frac{1}{u_n} = 1 - \\left(1 - \\frac{1}{7+1}\\right) = \\frac{1}{8}.$$"
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q3",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Parametric Equations", "Differentiation"],
    stem: "A curve $C$ has parametric equations $$x = \\sin^2 t, \\quad y = 1 + 2\\sin t, \\quad -\\frac{\\pi}{2} \\le t \\le \\frac{\\pi}{2}.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch $C$, stating clearly the coordinates of the endpoints and the coordinates of the $y$-intercept(s).",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 220" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (70, 150), x-scale: 130px/unit, y-scale: 35px/unit -->
  <line x1="30" y1="150" x2="255" y2="150" stroke-width="1.3" />
  <polyline points="249,146 255,150 249,154" fill="none" stroke-width="1.3" />
  <line x1="70" y1="205" x2="70" y2="18" stroke-width="1.3" />
  <polyline points="66,24 70,18 74,24" fill="none" stroke-width="1.3" />
  <text x="260" y="154" stroke="none" font-style="italic">x</text>
  <text x="66" y="13" stroke="none" font-style="italic">y</text>
  <text x="56" y="163" stroke="none" font-style="italic">O</text>
  <!-- Parabola x = (y-1)^2/4 for y in [-1, 3] -->
  <!-- y=-1: (1,-1) -> (200, 185); y=0: (0.25,0) -> (102.5, 150); y=1: (0,1) -> (70, 115); y=2: (0.25,2) -> (102.5, 80); y=3: (1,3) -> (200, 45) -->
  <path d="M 200 185 Q 140 167.5 102.5 150 Q 70 132.5 70 115 Q 70 97.5 102.5 80 Q 140 62.5 200 45" fill="none" stroke="#4a8fe7" stroke-width="2.2" />
  <!-- Closed endpoints and y-intercept -->
  <circle cx="200" cy="45" r="3.5" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="200" cy="185" r="3.5" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="70" cy="115" r="3.5" fill="#4a8fe7" stroke="#4a8fe7" />
  <text x="208" y="49" stroke="none">(1, 3)</text>
  <text x="208" y="189" stroke="none">(1, −1)</text>
  <text x="34" y="119" stroke="none">(0, 1)</text>
</svg>`,
        solution: "Since $\\sin t = \\frac{y-1}{2}$, the cartesian relation is $x = \\frac{(y-1)^2}{4}$ for $-1 \\le y \\le 3$ (since $-1 \\le \\sin t \\le 1$).<br><strong>Endpoints:</strong> When $t = -\\frac{\\pi}{2}$, $(1, -1)$; when $t = \\frac{\\pi}{2}$, $(1, 3)$.<br><strong>$y$-intercept:</strong> When $x = 0$, $\\sin t = 0 \\implies (0, 1)$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the exact cartesian equation of $l$, the normal to $C$ at the point $\\left(\\frac{1}{4}, 2\\right)$.",
        type: "self",
        solution: "At $\\left(\\frac{1}{4}, 2\\right)$, $y = 1 + 2\\sin t = 2 \\implies \\sin t = \\frac{1}{2} \\implies t = \\frac{\\pi}{6}$ (within $-\\frac{\\pi}{2} \\le t \\le \\frac{\\pi}{2}$).<br>Differentiating with respect to $t$: $$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 2\\sin t\\cos t, \\quad \\frac{\\mathrm{d}y}{\\mathrm{d}t} = 2\\cos t.$$ Thus $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2\\cos t}{2\\sin t\\cos t} = \\frac{1}{\\sin t}.$$ When $t = \\frac{\\pi}{6}$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{1/2} = 2$.<br>Gradient of normal $l = -\\frac{1}{2}$.<br>Equation of $l$: $$y - 2 = -\\frac{1}{2}\\left(x - \\frac{1}{4}\\right) \\implies y = -\\frac{1}{2}x + \\frac{17}{8} \\quad (\\text{or } 8y = -4x + 17).$$"
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q4",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Graphs and Transformations", "Integration", "Area"],
    stem: "It is given that<br>$\\mathrm{f}(x) = 2 - \\frac{2}{\\pi}x \\quad$ for $0 \\le x < \\pi$,<br>$\\mathrm{f}(x) = x\\sin x \\quad$ for $\\pi \\le x < 2\\pi$,<br>and that $\\mathrm{f}(x) = \\mathrm{f}(x + 2\\pi)$ for all real values of $x$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$ for $-\\pi \\le x < 4\\pi$. You do not need to label the coordinates of any stationary point(s).",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 380 210" width="380" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (95, 115), x-scale: 52px per pi, y-scale: 20px per unit -->
  <!-- x = -pi -> 43; 0 -> 95; pi -> 147; 2pi -> 199; 3pi -> 251; 4pi -> 303 -->
  <line x1="20" y1="115" x2="355" y2="115" stroke-width="1.3" />
  <polyline points="349,111 355,115 349,119" fill="none" stroke-width="1.3" />
  <line x1="95" y1="195" x2="95" y2="20" stroke-width="1.3" />
  <polyline points="91,26 95,20 99,26" fill="none" stroke-width="1.3" />
  <text x="360" y="119" stroke="none" font-style="italic">x</text>
  <text x="91" y="14" stroke="none" font-style="italic">y</text>
  <text x="82" y="128" stroke="none" font-style="italic">O</text>
  <!-- Segment [-pi, 0): shifted copy of [pi, 2pi), min approx -4.81 at x approx -0.45pi -> y_screen approx 115 + 58 = 173 -->
  <path d="M 43 115 C 62 140 76 178 86 168 C 91 160 93 135 95 115" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Segment [0, pi): line from (0,2) -> (95, 75) to (pi,0) -> (147, 115) -->
  <line x1="95" y1="75" x2="147" y2="115" stroke="#4a8fe7" stroke-width="2" />
  <!-- Segment [pi, 2pi): x sin x -->
  <path d="M 147 115 C 166 140 180 178 190 168 C 195 160 197 135 199 115" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Segment [2pi, 3pi): line from (2pi,2) -> (199, 75) to (3pi,0) -> (251, 115) -->
  <line x1="199" y1="75" x2="251" y2="115" stroke="#4a8fe7" stroke-width="2" />
  <!-- Segment [3pi, 4pi): shifted copy of [pi, 2pi) -->
  <path d="M 251 115 C 270 140 284 178 294 168 C 299 160 301 135 303 115" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Dashed vertical guide at x=2pi -->
  <line x1="199" y1="75" x2="199" y2="115" stroke-dasharray="3,3" stroke-width="1" opacity="0.5" />
  <!-- Closed and open circles -->
  <circle cx="43" cy="115" r="3" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="95" cy="115" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8" />
  <circle cx="95" cy="75" r="3" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="199" cy="115" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8" />
  <circle cx="199" cy="75" r="3" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="303" cy="115" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8" />
  <!-- Labels -->
  <text x="26" y="106" stroke="none">(−π, 0)</text>
  <text x="63" y="74" stroke="none">(0, 2)</text>
  <text x="134" y="130" stroke="none">(π, 0)</text>
  <text x="186" y="68" stroke="none">(2π, 2)</text>
  <text x="180" y="108" stroke="none" font-size="10">(2π, 0)</text>
  <text x="236" y="130" stroke="none">(3π, 0)</text>
  <text x="292" y="106" stroke="none">(4π, 0)</text>
  <text x="290" y="45" stroke="none" font-style="italic">y = f(x)</text>
</svg>`,
        solution: "Since $\\mathrm{f}(x) = \\mathrm{f}(x + 2\\pi)$, the graph is periodic with period $2\\pi$.<br>• On $[0, \\pi)$ and $[2\\pi, 3\\pi)$: straight line segments from $(0, 2)$ to $(\\pi, 0)$ and from $(2\\pi, 2)$ to $(3\\pi, 0)$, with solid dots at $(0, 2)$ and $(2\\pi, 2)$.<br>• On $[-\\pi, 0)$, $[\\pi, 2\\pi)$ and $[3\\pi, 4\\pi)$: congruent negative arches below the $x$-axis, starting at $(-\\pi, 0)$ (solid), $(\\pi, 0)$ and $(3\\pi, 0)$, and ending with open circles at $(0, 0)$, $(2\\pi, 0)$ and $(4\\pi, 0)$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the exact area bounded by the curve $y = \\mathrm{f}(x)$, the $x$-axis and the lines $x = 0$ and $x = \\frac{3\\pi}{2}$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2*pi + 1",
        placeholder: "Exact value in terms of pi",
        solution: "For $0 \\le x \\le \\pi$, $\\mathrm{f}(x) \\ge 0$ forms a right-angled triangle of base $\\pi$ and height $2$, with area $\\frac{1}{2}(\\pi)(2) = \\pi$.<br>For $\\pi \\le x \\le \\frac{3\\pi}{2}$, $\\mathrm{f}(x) = x\\sin x \\le 0$. Integrating by parts ($u = x$, $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\sin x$): $$\\int_{\\pi}^{\\frac{3\\pi}{2}} x\\sin x\\,\\mathrm{d}x = \\left[-x\\cos x\\right]_{\\pi}^{\\frac{3\\pi}{2}} + \\int_{\\pi}^{\\frac{3\\pi}{2}} \\cos x\\,\\mathrm{d}x$$ $$= \\left(0 - (-\\pi\\cos\\pi)\\right) + \\left[\\sin x\\right]_{\\pi}^{\\frac{3\\pi}{2}} = -\\pi + (-1 - 0) = -\\pi - 1.$$ Thus the exact area is $$\\pi - (-\\pi - 1) = 2\\pi + 1.$$"
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q5",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Sequences and Series", "Graphs and Transformations"],
    stem: "A sequence of negative real numbers $u_1, u_2, u_3, \\ldots$ is given by $$u_1 = -1 \\quad \\text{and} \\quad u_{n+1} = \\frac{-2u_n + 6}{u_n - 1}, \\quad \\text{for } n \\ge 1.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Given that $u_n$ → $l$ as $n$ → ∞, find the value of $l$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "-3",
        placeholder: "Exact value",
        solution: "As $n$ → ∞, $u_n$ → $l$ and $u_{n+1}$ → $l$. Thus $$l = \\frac{-2l + 6}{l - 1} \\implies l^2 - l = -2l + 6 \\implies l^2 + l - 6 = 0 \\implies (l + 3)(l - 2) = 0.$$ Hence $l = -3$ or $l = 2$. Since $u_n$ is a sequence of negative real numbers, $l \\le 0$, so $l = 2$ is rejected and $l = -3$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\frac{-2x + 6}{x - 1} - x$, stating the equations of the asymptotes and the coordinates of the points where it crosses the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 240" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (150, 95), scale: 18px/unit -->
  <line x1="25" y1="95" x2="275" y2="95" stroke-width="1.3" />
  <polyline points="269,91 275,95 269,99" fill="none" stroke-width="1.3" />
  <line x1="150" y1="225" x2="150" y2="18" stroke-width="1.3" />
  <polyline points="146,24 150,18 154,24" fill="none" stroke-width="1.3" />
  <text x="280" y="99" stroke="none" font-style="italic">x</text>
  <text x="146" y="13" stroke="none" font-style="italic">y</text>
  <text x="137" y="108" stroke="none" font-style="italic">O</text>
  <!-- Vertical asymptote x = 1 -> x_s = 168 -->
  <line x1="168" y1="22" x2="168" y2="220" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.6" />
  <!-- Oblique asymptote y = -x - 2: at x=-6 -> y=4 (42, 23); at x=5 -> y=-7 (240, 221) -->
  <line x1="42" y1="23" x2="240" y2="221" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.6" />
  <!-- Left branch: y = -x - 2 + 4/(x-1) for x < 1 -->
  <!-- x=-5.5 (51, 34); x=-4 (78, 63); x=-3 (96, 95); x=-1 (132, 149); x=0 (150, 203); x=0.35 (156.3, 220) -->
  <path d="M 48 31 C 72 60 88 83 96 95 C 118 128 138 159 150 203 L 154 220" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Right branch: x > 1 -->
  <!-- x=1.35 (174.3, 22); x=1.5 (177, 14? wait: y = -1.5 - 2 + 8 = 4.5 -> 95-81=14); x=2 (186, 95); x=3 (204, 149); x=4 (222, 179); x=5.5 (249, 214) -->
  <path d="M 176 22 C 179 58 182 78 186 95 C 194 128 208 160 245 215" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Labels -->
  <text x="58" y="30" stroke="none" font-style="italic">y = −x − 2</text>
  <text x="172" y="218" stroke="none" font-style="italic">x = 1</text>
  <text x="58" y="109" stroke="none">(−3, 0)</text>
  <text x="191" y="90" stroke="none">(2, 0)</text>
  <text x="108" y="206" stroke="none">(0, −6)</text>
</svg>`,
        solution: "Rewriting the equation: $$y = \\frac{-2x + 6}{x - 1} - x = -x - 2 + \\frac{4}{x - 1}.$$ <strong>Asymptotes:</strong> $x = 1$ and $y = -x - 2$.<br><strong>Axial intercepts:</strong><br>• $y$-intercept ($x = 0$): $y = -6 \\implies (0, -6)$.<br>• $x$-intercepts ($y = 0$): $-x^2 - x + 6 = 0 \\implies (x + 3)(x - 2) = 0 \\implies (-3, 0)$ and $(2, 0)$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Hence show that $u_{n+1} > u_n$ if $u_n < l$.",
        type: "self",
        solution: "Note that $$u_{n+1} - u_n = \\frac{-2u_n + 6}{u_n - 1} - u_n.$$ From the graph of $y = \\frac{-2x + 6}{x - 1} - x$ in part (b), when $x < -3$, $y > 0$.<br>Since $l = -3$, if $u_n < -3$, then $u_{n+1} - u_n > 0$, hence $u_{n+1} > u_n$ (shown)."
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q6",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Vectors"],
    stem: "Relative to the origin $O$, the position vectors of points $A$, $B$ and $C$ are $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively. It is given that $\\mathbf{a}$ is a unit vector and $\\mathbf{b}$ is perpendicular to $\\mathbf{b} - \\mathbf{a}$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $0 < |\\mathbf{b}| < 1$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 150" width="220" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="50,25 50,120 175,120" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.8" />
  <polyline points="50,108 62,108 62,120" fill="none" stroke="#2c2925" stroke-width="1.2" />
  <text x="36" y="25" stroke="none" font-style="italic">O</text>
  <text x="36" y="128" stroke="none" font-style="italic">B</text>
  <text x="180" y="125" stroke="none" font-style="italic">A</text>
  <text x="115" y="65" stroke="none">|a| = 1</text>
  <text x="26" y="76" stroke="none">|b|</text>
</svg>`,
        solution: "Let $\\theta$ be the angle between $\\mathbf{a}$ and $\\mathbf{b}$. Since $\\mathbf{b}$ is perpendicular to $\\mathbf{b} - \\mathbf{a}$, $$\\mathbf{b} \\cdot (\\mathbf{b} - \\mathbf{a}) = 0 \\implies |\\mathbf{b}|^2 - |\\mathbf{a}||\\mathbf{b}|\\cos\\theta = 0.$$ Since $\\mathbf{a}$ is a unit vector ($|\\mathbf{a}| = 1$) and $|\\mathbf{b}| > 0$, $$|\\mathbf{b}| = \\cos\\theta.$$ If $\\cos\\theta = 1$, then $\\theta = 0^\\circ$, implying $\\mathbf{a}$ and $\\mathbf{b}$ are parallel, which contradicts $\\mathbf{b} \\perp (\\mathbf{b} - \\mathbf{a})$. Also $\\cos\\theta = |\\mathbf{b}| > 0$. Since $0 < \\cos\\theta < 1$, we have $0 < |\\mathbf{b}| < 1$ (shown).<br><em>Alternatively:</em> $OAB$ is a right-angled triangle with hypotenuse $OA = |\\mathbf{a}| = 1$, so $0 < |\\mathbf{b}| < 1$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "It is given further that $|\\mathbf{b}| = \\frac{1}{2}$ and $C$ lies on $AB$ such that $AC : CB = 2 : 1$.<br>Find the value of $|\\mathbf{a} \\cdot \\mathbf{c}|$ and state the geometrical interpretation of $|\\mathbf{a} \\cdot \\mathbf{c}|$.",
        type: "self",
        solution: "By the Ratio Theorem, $$\\mathbf{c} = \\frac{1}{3}\\mathbf{a} + \\frac{2}{3}\\mathbf{b}.$$ From part (a), $\\mathbf{b} \\cdot (\\mathbf{b} - \\mathbf{a}) = 0 \\implies \\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{b}|^2$. Thus $$|\\mathbf{a} \\cdot \\mathbf{c}| = \\left|\\mathbf{a} \\cdot \\left(\\frac{1}{3}\\mathbf{a} + \\frac{2}{3}\\mathbf{b}\\right)\\right| = \\left|\\frac{1}{3}|\\mathbf{a}|^2 + \\frac{2}{3}|\\mathbf{b}|^2\\right| = \\frac{1}{3}(1)^2 + \\frac{2}{3}\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}.$$ <strong>Geometrical interpretation:</strong> Since $\\mathbf{a}$ is a unit vector, $|\\mathbf{a} \\cdot \\mathbf{c}|$ is the length of projection of $\\mathbf{c}$ onto $\\mathbf{a}$ (or $OC$ onto $OA$)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the value of $$\\frac{|\\mathbf{a} \\times \\mathbf{b}|}{|\\mathbf{a} \\times \\mathbf{c}|}.$$",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "3/2",
        placeholder: "Exact fraction or decimal",
        solution: "Since $\\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}$, $$\\frac{|\\mathbf{a} \\times \\mathbf{b}|}{|\\mathbf{a} \\times \\mathbf{c}|} = \\frac{|\\mathbf{a} \\times \\mathbf{b}|}{\\left|\\mathbf{a} \\times \\left(\\frac{1}{3}\\mathbf{a} + \\frac{2}{3}\\mathbf{b}\\right)\\right|} = \\frac{|\\mathbf{a} \\times \\mathbf{b}|}{\\frac{2}{3}|\\mathbf{a} \\times \\mathbf{b}|} = \\frac{3}{2}.$$"
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q7",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Maclaurin Series", "Differentiation"],
    stem: "It is given that the curve $y = \\mathrm{f}(x)$ satisfies the equation $$\\ln y = \\frac{\\pi}{4} - \\tan^{-1}(\\mathrm{e}^x).$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $(1 + \\mathrm{e}^{2x})\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\mathrm{e}^x = 0$.",
        type: "self",
        solution: "Differentiating $\\ln y = \\frac{\\pi}{4} - \\tan^{-1}(\\mathrm{e}^x)$ implicitly with respect to $x$: $$\\frac{1}{y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{\\mathrm{e}^x}{1 + (\\mathrm{e}^x)^2}.$$ Multiplying through by $y(1 + \\mathrm{e}^{2x})$: $$(1 + \\mathrm{e}^{2x})\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -y\\mathrm{e}^x \\implies (1 + \\mathrm{e}^{2x})\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\mathrm{e}^x = 0 \\quad (\\text{shown}).$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Find the Maclaurin series for $y$, up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.5, 1, 2] },
        answer: "1 - x/2 + x^2/8",
        placeholder: "Polynomial in x",
        solution: "Differentiating $(1 + \\mathrm{e}^{2x})\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\mathrm{e}^x = 0$ with respect to $x$: $$(1 + \\mathrm{e}^{2x})\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + (2\\mathrm{e}^{2x} + \\mathrm{e}^x)\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\mathrm{e}^x = 0.$$ When $x = 0$:<br>• $\\ln y = \\frac{\\pi}{4} - \\tan^{-1}(1) = 0 \\implies y = 1$.<br>• $(1 + 1)\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 1 = 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{1}{2}$.<br>• $(1 + 1)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 3\\left(-\\frac{1}{2}\\right) + 1 = 0 \\implies 2\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\frac{1}{2} \\implies \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\frac{1}{4}$.<br>Hence $$y = 1 - \\frac{1}{2}x + \\frac{1}{4}\\cdot\\frac{x^2}{2!} + \\ldots = 1 - \\frac{1}{2}x + \\frac{1}{8}x^2 + \\ldots$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Deduce the series expansion for $$\\frac{\\mathrm{e}^{\\frac{\\pi}{4} - \\tan^{-1}(\\mathrm{e}^x)}}{\\sqrt{1-x}},$$ up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.5, 1, 2] },
        answer: "1 + x^2/4",
        placeholder: "Polynomial in x",
        solution: "From $\\ln y = \\frac{\\pi}{4} - \\tan^{-1}(\\mathrm{e}^x)$, we have $y = \\mathrm{e}^{\\frac{\\pi}{4} - \\tan^{-1}(\\mathrm{e}^x)} \\approx 1 - \\frac{1}{2}x + \\frac{1}{8}x^2$.<br>Also, $$(1-x)^{-\\frac{1}{2}} = 1 + \\left(-\\frac{1}{2}\\right)(-x) + \\frac{\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{2!}(-x)^2 + \\ldots = 1 + \\frac{1}{2}x + \\frac{3}{8}x^2 + \\ldots$$ Multiplying the two expansions up to $x^2$: $$\\left(1 - \\frac{1}{2}x + \\frac{1}{8}x^2 + \\ldots\\right)\\left(1 + \\frac{1}{2}x + \\frac{3}{8}x^2 + \\ldots\\right) = 1 + \\left(\\frac{1}{2} - \\frac{1}{2}\\right)x + \\left(\\frac{3}{8} - \\frac{1}{4} + \\frac{1}{8}\\right)x^2 + \\ldots = 1 + \\frac{1}{4}x^2 + \\ldots$$"
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q8",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Vectors", "3D Lines and Planes"],
    stem: "The plane $p$ passes through the points $A$, $B$ and $C$ with coordinates $(1, 0, 2)$, $(2, -1, 3)$ and $(-4, -1, 0)$ respectively.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that a cartesian equation of $p$ is $x - y - 2z = -3$.",
        type: "self",
        solution: "$$AB = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}, \\quad AC = \\begin{pmatrix} -4 \\\\ -1 \\\\ 0 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ -1 \\\\ -2 \\end{pmatrix}.$$ Taking the cross product: $$AB \\times AC = \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix} \\times \\begin{pmatrix} -5 \\\\ -1 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -3 \\\\ -6 \\end{pmatrix} = 3\\begin{pmatrix} 1 \\\\ -1 \\\\ -2 \\end{pmatrix}.$$ A normal vector to $p$ is $\\begin{pmatrix} 1 \\\\ -1 \\\\ -2 \\end{pmatrix}$. Using point $A(1, 0, 2)$: $$\\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ -1 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ -1 \\\\ -2 \\end{pmatrix} = -3.$$ Hence a cartesian equation of $p$ is $x - y - 2z = -3$ (shown)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The line $l$ has equation $\\mathbf{r} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 5 \\end{pmatrix} + \\lambda\\begin{pmatrix} 2 \\\\ -1 \\\\ -1 \\end{pmatrix}$, $\\lambda \\in \\mathbb{R}$.<br>Find the acute angle between $l$ and $p$.",
        type: "auto",
        mode: "number",
        dp: 1,
        answer: "56.44269024",
        placeholder: "Angle in degrees (1 d.p.)",
        solution: "Let $\\theta$ be the acute angle between $l$ and $p$: $$\\sin\\theta = \\frac{\\left|\\begin{pmatrix} 1 \\\\ -1 \\\\ -2 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ -1 \\end{pmatrix}\\right|}{\\sqrt{1^2+(-1)^2+(-2)^2}\\sqrt{2^2+(-1)^2+(-1)^2}} = \\frac{|2 + 1 + 2|}{\\sqrt{6}\\sqrt{6}} = \\frac{5}{6}.$$ Thus $\\theta = \\sin^{-1}\\left(\\frac{5}{6}\\right) = 56.4427^\\circ \\approx 56.4^\\circ$ (1 d.p.) [or $0.985$ rad (3 s.f.)]."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "It is given that a variable point $R$ lies on $p$ and is at a distance of $\\sqrt{22}$ from the point $Q$ with coordinates $(3, 4, -2)$.<br>Find the foot of perpendicular from $Q$ to $p$.",
        type: "auto",
        mode: "tuple",
        exactRequired: true,
        answer: [2, 5, 0],
        placeholder: "Coordinates (x, y, z)",
        solution: "Let $F$ be the foot of perpendicular from $Q(3, 4, -2)$ to $p$. The line $QF$ has equation $$\\mathbf{r} = \\begin{pmatrix} 3 \\\\ 4 \\\\ -2 \\end{pmatrix} + \\mu\\begin{pmatrix} 1 \\\\ -1 \\\\ -2 \\end{pmatrix}, \\quad \\mu \\in \\mathbb{R}.$$ Substituting into $x - y - 2z = -3$: $$(3 + \\mu) - (4 - \\mu) - 2(-2 - 2\\mu) = -3 \\implies 3 + 6\\mu = -3 \\implies \\mu = -1.$$ Therefore $$OF = \\begin{pmatrix} 3 \\\\ 4 \\\\ -2 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ -1 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 5 \\\\ 0 \\end{pmatrix}.$$ The foot of perpendicular is $(2, 5, 0)$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Hence describe geometrically the path traced by $R$.",
        type: "self",
        solution: "The perpendicular distance from $Q$ to $p$ is $$|QF| = \\left|\\begin{pmatrix} -1 \\\\ 1 \\\\ 2 \\end{pmatrix}\\right| = \\sqrt{(-1)^2 + 1^2 + 2^2} = \\sqrt{6}.$$ By Pythagoras' Theorem on right-angled △$QFR$, $$RF = \\sqrt{QR^2 - QF^2} = \\sqrt{22 - 6} = 4.$$ Hence the path traced by $R$ is a <strong>circle lying on plane $p$ with centre $(2, 5, 0)$ and radius $4$</strong>."
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q9",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Differential Equations", "Graphs and Transformations"],
    diagramSvg: `<svg viewBox="0 0 360 190" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Outer circular pond: centre (180, 95), radius 75 -->
  <circle cx="180" cy="95" r="75" fill="none" stroke-width="1.6" />
  <!-- Inner duckweed patch: centre (180, 95), radius 28 -->
  <circle cx="180" cy="95" r="28" fill="rgba(91,155,213,0.22)" stroke="#4a8fe7" stroke-width="1.5" />
  <!-- Centre mark -->
  <circle cx="180" cy="95" r="2.2" fill="#2c2925" />
  <!-- Radius 10 arrow -->
  <line x1="180" y1="95" x2="115" y2="132" stroke-width="1.2" />
  <polyline points="122,133 115,132 118,126" fill="none" stroke-width="1.2" />
  <text x="135" y="109" stroke="none">10</text>
  <!-- Radius r arrow -->
  <line x1="180" y1="95" x2="160" y2="75" stroke-width="1.2" />
  <polyline points="160,81 160,75 166,75" fill="none" stroke-width="1.2" />
  <text x="172" y="83" stroke="none" font-style="italic">r</text>
  <!-- Callout labels -->
  <line x1="108" y1="68" x2="72" y2="54" stroke-width="1" />
  <polyline points="77,52 72,54 75,59" fill="none" stroke-width="1" />
  <text x="8" y="57" stroke="none">Circular pond</text>
  <line x1="205" y1="88" x2="270" y2="78" stroke-width="1" />
  <polyline points="264,75 270,78 265,82" fill="none" stroke-width="1" />
  <text x="275" y="75" stroke="none">Circular patch</text>
  <text x="275" y="89" stroke="none">of duckweed</text>
  <line x1="184" y1="97" x2="268" y2="130" stroke-width="1" />
  <polyline points="262,132 268,130 265,125" fill="none" stroke-width="1" />
  <text x="273" y="132" stroke="none">Centre of both</text>
  <text x="273" y="146" stroke="none">pond and</text>
  <text x="273" y="160" stroke="none">duckweed</text>
</svg>`,
    stem: "A Koi pond farmer introduces a circular patch of duckweed at the center of his circular pond to enhance water purification and provide supplemental nutrition for his Koi, as shown in the figure above.<br>The duckweed grows over time $t$ days, forming a continuous circular patch on the pond's surface. It is assumed that the duckweed forms a thin, floating layer with negligible thickness. The rate of increase of the area covered by duckweed is directly proportional to the area of the pond that remains uncovered by the duckweed.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Given that the radius of the pond is $10$ m, show that the radius, $r$ m of the circular patch of duckweed satisfies the differential equation $$\\frac{\\mathrm{d}r}{\\mathrm{d}t} = \\frac{k(100 - r^2)}{2r}, \\quad k > 0.$$",
        type: "self",
        solution: "Area of pond $= \\pi(10)^2 = 100\\pi$. Area of duckweed $A = \\pi r^2$.<br>Since the rate of increase of $A$ is directly proportional to the uncovered area, $$\\frac{\\mathrm{d}A}{\\mathrm{d}t} = k(100\\pi - \\pi r^2) = k\\pi(100 - r^2), \\quad k > 0.$$ By the chain rule, $\\frac{\\mathrm{d}A}{\\mathrm{d}t} = 2\\pi r\\frac{\\mathrm{d}r}{\\mathrm{d}t}$. Equating the two expressions: $$2\\pi r\\frac{\\mathrm{d}r}{\\mathrm{d}t} = k\\pi(100 - r^2) \\implies \\frac{\\mathrm{d}r}{\\mathrm{d}t} = \\frac{k(100 - r^2)}{2r} \\quad (\\text{shown}).$$"
      },
      {
        label: "(b)",
        marks: 6,
        prompt: "The initial radius of the circular patch of duckweed is $1$ m. Solve the differential equation, expressing $r$ in the form $r = \\sqrt{P - Q\\mathrm{e}^{-kt}}$, where $P$ and $Q$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "P =", answer: "100", exactRequired: true, placeholder: "Integer value" },
          { label: "Q =", answer: "99", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "Separating variables and integrating: $$\\int \\frac{r}{100 - r^2}\\,\\mathrm{d}r = \\frac{k}{2}\\int 1\\,\\mathrm{d}t$$ $$-\\frac{1}{2}\\ln|100 - r^2| = \\frac{k}{2}t + C \\implies \\ln|100 - r^2| = -kt - 2C$$ $$100 - r^2 = Q\\mathrm{e}^{-kt}, \\quad \\text{where } Q = \\pm\\mathrm{e}^{-2C}.$$ Since $r > 0$, $r = \\sqrt{100 - Q\\mathrm{e}^{-kt}}$.<br>When $t = 0$, $r = 1$: $1 = \\sqrt{100 - Q} \\implies Q = 99$.<br>Hence $r = \\sqrt{100 - 99\\mathrm{e}^{-kt}}$, where $P = 100$ and $Q = 99$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Sketch the graph of $r$ against $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 200" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (45, 170) -->
  <line x1="35" y1="170" x2="275" y2="170" stroke-width="1.3" />
  <polyline points="269,166 275,170 269,174" fill="none" stroke-width="1.3" />
  <line x1="45" y1="180" x2="45" y2="20" stroke-width="1.3" />
  <polyline points="41,26 45,20 49,26" fill="none" stroke-width="1.3" />
  <text x="280" y="174" stroke="none" font-style="italic">t</text>
  <text x="41" y="14" stroke="none" font-style="italic">r</text>
  <text x="32" y="182" stroke="none" font-style="italic">O</text>
  <!-- Asymptote r = 10 at y = 40 (scale: 13px/unit) -->
  <line x1="45" y1="40" x2="265" y2="40" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.6" />
  <text x="225" y="34" stroke="none" font-style="italic">r = 10</text>
  <text x="24" y="44" stroke="none">10</text>
  <!-- Start at (0, 1) -> (45, 157) -->
  <circle cx="45" cy="157" r="3" fill="#4a8fe7" stroke="#4a8fe7" />
  <text x="30" y="160" stroke="none">1</text>
  <!-- Curve r = sqrt(100 - 99*e^(-t)) -->
  <!-- t=0: 1 (45, 157); t=0.5: 6.32 (75, 88); t=1: 7.97 (105, 66); t=2: 9.31 (165, 49); t=3: 9.75 (225, 43); t=3.6: 9.86 (261, 41.8) -->
  <path d="M 45 157 C 58 100 85 68 125 53 C 165 44 210 41.5 262 41" fill="none" stroke="#4a8fe7" stroke-width="2.2" />
</svg>`,
        solution: "For $t \\ge 0$ and $k > 0$, the graph starts at $(0, 1)$ and increases strictly with decreasing gradient (concave downwards), approaching the horizontal asymptote $r = 10$ from below as $t$ → ∞."
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q10",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["AP and GP", "Sequences and Series"],
    stem: "Mr Huat is saving for a car that he plans to buy in the future. He needs to save a minimum of SGD 150,000.<br>A savings plan allows him to deposit SGD 6,000 into a savings account on the first day of every month. At the end of each month, the total amount in the savings account (including interest) is increased by $3\\%$. Mr Huat makes an initial deposit on 1 January 2026.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that the total amount, correct to 2 decimal places, in the savings account at the end of December 2026 is SGD 87,706.74.",
        type: "self",
        solution: "At the end of the 12th month (December 2026), the 12 deposits have compounded for $12, 11, \\ldots, 1$ months respectively:<br>Total amount $= 6000(1.03)^{12} + 6000(1.03)^{11} + \\ldots + 6000(1.03)$<br>This is a geometric series with first term $a = 6000(1.03)$, common ratio $r = 1.03$, and $12$ terms: $$\\text{Total} = \\frac{6000(1.03)(1.03^{12} - 1)}{1.03 - 1} = 87706.74269 \\approx \\text{SGD } 87,706.74 \\text{ (2 d.p.) (shown)}.$$"
      },
      {
        label: "(b)",
        marks: 6,
        prompt: "Find the month and year in which the total amount in the savings account will first exceed SGD 150,000. Explain whether this occurs on the first or last day of the month.",
        type: "self",
        solution: "At the end of the $n$th month, the total amount is $$\\frac{6000(1.03)(1.03^n - 1)}{1.03 - 1} = 206000(1.03^n - 1).$$ Setting $206000(1.03^n - 1) > 150000$: $$1.03^n > 1 + \\frac{150000}{206000} = 1.728155... \\implies n > \\frac{\\ln(1.728155...)}{\\ln(1.03)} \\approx 18.507.$$ Thus the least integer $n$ is $19$, which corresponds to <strong>July 2027</strong>.<br>At the end of the 18th month (June 2027): $$206000(1.03^{18} - 1) = \\text{SGD } 144,701.21.$$ At the start of the 19th month (1 July 2027), after depositing SGD 6,000: $$144701.21 + 6000 = \\text{SGD } 150,701.21 > \\text{SGD } 150,000.$$ Hence it first exceeds SGD 150,000 in <strong>July 2027</strong>, on the <strong>first day of the month</strong>."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Mr Huat can also choose to save regularly in a different savings account which offers no interest. He makes an initial deposit on 1 January 2026 of SGD 6,000. On the first day of each subsequent month, he deposits SGD $d$ more than he deposited in the previous month.<br>Find, in terms of $d$, the total amount in the savings account at the end of December 2026.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { d: [100, 500, 1000] },
        answer: "72000 + 66*d",
        placeholder: "Expression in terms of d",
        solution: "This is an arithmetic series with $12$ terms, first term $6000$ and common difference $d$: $$\\text{Total} = \\frac{12}{2}\\left[2(6000) + (12 - 1)d\\right] = 6(12000 + 11d) = 72000 + 66d.$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Hence, find the minimum value of $d$ such that Mr Huat can buy the car by end of December 2026. Give your answer correct to the nearest integer.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "1182",
        placeholder: "Integer value",
        solution: "$$72000 + 66d \\ge 150000 \\implies 66d \\ge 78000 \\implies d \\ge 1181.818...$$ Hence the minimum value of $d$ (to the nearest integer) is $1182$."
      }
    ]
  },
  {
    id: "CJC-2025-P1-Q11",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Integration", "Partial Fractions", "Area", "Volume of Revolution"],
    stem: "Answer both parts (a) and (b).",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Show that $\\frac{3x^2}{(x+1)(3x^2+x+1)}$ can be expressed as $$\\frac{A}{x+1} + \\frac{Bx+C}{3x^2+x+1},$$ where $A$, $B$ and $C$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "A =", answer: "1", exactRequired: true, placeholder: "Integer value" },
          { label: "B =", answer: "0", exactRequired: true, placeholder: "Integer value" },
          { label: "C =", answer: "-1", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "Comparing numerators: $3x^2 = A(3x^2 + x + 1) + (Bx + C)(x + 1)$.<br>• Setting $x = -1$: $3(1) = A(3 - 1 + 1) \\implies 3A = 3 \\implies A = 1$.<br>• Setting $x = 0$: $0 = 1(1) + C(1) \\implies C = -1$.<br>• Setting $x = 1$: $3 = 1(5) + (B - 1)(2) \\implies 2B - 2 = -2 \\implies B = 0$.<br>Hence $\\frac{3x^2}{(x+1)(3x^2+x+1)} = \\frac{1}{x+1} - \\frac{1}{3x^2+x+1}$."
      },
      {
        label: "(a)(ii)",
        marks: 4,
        prompt: "Hence, find $$\\int \\frac{3x^2}{(x+1)(3x^2+x+1)}\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0, 1, 3],
        answer: "ln(abs(x+1)) - (2/sqrt(11))*atan((6*x+1)/sqrt(11))",
        placeholder: "Antiderivative in x (omit + C)",
        solution: "$$\\int \\left(\\frac{1}{x+1} - \\frac{1}{3x^2+x+1}\\right)\\mathrm{d}x = \\ln|x+1| - \\frac{1}{3}\\int \\frac{1}{x^2 + \\frac{1}{3}x + \\frac{1}{3}}\\,\\mathrm{d}x$$ $$= \\ln|x+1| - \\frac{1}{3}\\int \\frac{1}{\\left(x + \\frac{1}{6}\\right)^2 + \\frac{11}{36}}\\,\\mathrm{d}x$$ $$= \\ln|x+1| - \\frac{1}{3}\\cdot\\frac{1}{\\frac{\\sqrt{11}}{6}}\\tan^{-1}\\left(\\frac{x + \\frac{1}{6}}{\\frac{\\sqrt{11}}{6}}\\right) + C = \\ln|x+1| - \\frac{2}{\\sqrt{11}}\\tan^{-1}\\left(\\frac{6x+1}{\\sqrt{11}}\\right) + C.$$"
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "The region $R$ is bounded by the curve $y = \\frac{3x^2}{(x+1)(3x^2+x+1)}$, the line $x = 4$ and the $x$-axis.<br>Sketch the graph of $y = \\frac{3x^2}{(x+1)(3x^2+x+1)}$ for $x \\ge 0$, giving the coordinates of any intercepts with the axes and the equations of any asymptotes. Shade the region $R$ on your sketch.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 200" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (40, 165), x-scale: 48px/unit (x=4 at 232), y-scale: 350px/unit (max y approx 0.305 at x approx 0.85 -> 165-107=58) -->
  <line x1="25" y1="165" x2="295" y2="165" stroke-width="1.3" />
  <polyline points="289,161 295,165 289,169" fill="none" stroke-width="1.3" />
  <line x1="40" y1="185" x2="40" y2="20" stroke-width="1.3" />
  <polyline points="36,26 40,20 44,26" fill="none" stroke-width="1.3" />
  <text x="300" y="169" stroke="none" font-style="italic">x</text>
  <text x="36" y="14" stroke="none" font-style="italic">y</text>
  <text x="26" y="178" stroke="none" font-style="italic">O</text>
  <!-- Exact points for y = 3x^2/((x+1)(3x^2+x+1)): -->
  <!-- x=0: 0 (40,165); x=0.3: 0.132 (54.4,118.8); x=0.6: 0.252 (68.8,76.8); x=0.85: 0.292? wait: 3*0.7225/(1.85*4.0175)=2.1675/7.432=0.292 (80.8, 62.8); x=1: 3/10=0.3 (88,60); x=1.2: 4.32/(2.2*6.52)=0.301 (97.6,59.6); x=1.5: 6.75/(2.5*9.25)=0.292 (112,62.8); x=2: 12/(3*15)=0.267 (136,71.7); x=3: 27/(4*31)=0.218 (184,88.8); x=4: 48/(5*53)=0.181 (232,101.6); x=5: 75/(6*81)=0.154 (280,111) -->
  <!-- Shaded region R from x=0 to x=4 -->
  <path d="M 40 165 C 55 120 75 62 96 60 C 125 58 175 86 232 101.6 L 232 165 Z" fill="rgba(91,155,213,0.22)" stroke="none" />
  <!-- Curve -->
  <path d="M 40 165 C 55 120 75 62 96 60 C 125 58 175 86 232 101.6 C 255 107 272 110 288 113" fill="none" stroke="#4a8fe7" stroke-width="2.2" />
  <!-- Line x = 4 -->
  <line x1="232" y1="25" x2="232" y2="178" stroke="#2c2925" stroke-width="1.3" />
  <text x="237" y="45" stroke="none" font-style="italic">x = 4</text>
  <text x="125" y="130" stroke="none" font-weight="bold" font-size="14" font-style="italic">R</text>
  <text x="242" y="178" stroke="none" font-style="italic">y = 0</text>
</svg>`,
        solution: "For $x \\ge 0$, the curve starts at the origin $(0, 0)$ (the only axial intercept), rises to a maximum (around $x \\approx 1.15$), and then decreases towards the horizontal asymptote $y = 0$ as $x$ → ∞. Region $R$ is shaded between $x = 0$ and $x = 4$ above the $x$-axis."
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Find the exact area of $R$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "ln(5) + (2/sqrt(11))*(atan(1/sqrt(11)) - atan(25/sqrt(11)))",
        placeholder: "Exact value",
        solution: "$$\\text{Area of } R = \\int_0^4 \\frac{3x^2}{(x+1)(3x^2+x+1)}\\,\\mathrm{d}x = \\left[\\ln|x+1| - \\frac{2}{\\sqrt{11}}\\tan^{-1}\\left(\\frac{6x+1}{\\sqrt{11}}\\right)\\right]_0^4$$ $$= \\left(\\ln 5 - \\frac{2}{\\sqrt{11}}\\tan^{-1}\\left(\\frac{25}{\\sqrt{11}}\\right)\\right) - \\left(\\ln 1 - \\frac{2}{\\sqrt{11}}\\tan^{-1}\\left(\\frac{1}{\\sqrt{11}}\\right)\\right)$$ $$= \\ln 5 + \\frac{2}{\\sqrt{11}}\\left[\\tan^{-1}\\left(\\frac{1}{\\sqrt{11}}\\right) - \\tan^{-1}\\left(\\frac{25}{\\sqrt{11}}\\right)\\right].$$"
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "Find the volume of the solid generated when $R$ is rotated through $2\\pi$ radians about the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "0.7149496",
        placeholder: "3 s.f.",
        solution: "$$\\text{Volume} = \\pi \\int_0^4 \\left[\\frac{3x^2}{(x+1)(3x^2+x+1)}\\right]^2 \\mathrm{d}x = 0.71495 \\approx 0.715 \\text{ (3 s.f.)}.$$"
      }
    ]
  }
]);
