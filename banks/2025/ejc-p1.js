window.registerQuestions([
  {
    id: "EJC-2025-P1-Q1",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Solve the inequality $$x + 1 > \\frac{1}{x - 1}$$ giving your answer in exact form.",
        type: "self",
        solution: "Rearranging so that the right-hand side is zero:<br>$$x + 1 - \\frac{1}{x - 1} > 0$$<br>$$\\frac{(x + 1)(x - 1) - 1}{x - 1} > 0$$<br>$$\\frac{x^2 - 2}{x - 1} > 0$$<br>$$\\frac{(x + \\sqrt{2})(x - \\sqrt{2})}{x - 1} > 0$$<br>Critical values are $x = -\\sqrt{2}$, $x = 1$ and $x = \\sqrt{2}$. Testing signs across the intervals gives:<br>$$-\\sqrt{2} < x < 1 \\quad \\text{or} \\quad x > \\sqrt{2}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence solve, in exact form, $\\mathrm{e}^x + 1 > \\frac{1}{\\mathrm{e}^x - 1}$.",
        type: "self",
        solution: "Replacing $x$ with $\\mathrm{e}^x$ in part (a):<br>$$-\\sqrt{2} < \\mathrm{e}^x < 1 \\quad \\text{or} \\quad \\mathrm{e}^x > \\sqrt{2}$$<br>Since $\\mathrm{e}^x > 0$ for all real $x$, the first inequality becomes $0 < \\mathrm{e}^x < 1$, which gives $x < 0$.<br>From $\\mathrm{e}^x > \\sqrt{2}$, we get $x > \\ln\\sqrt{2} = \\frac{1}{2}\\ln 2$.<br>$$\\therefore x < 0 \\quad \\text{or} \\quad x > \\frac{1}{2}\\ln 2$$"
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q2",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 260 210" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="12" fill="#2c2925" stroke="#2c2925">
  <!-- Rectangle sides (left, bottom, right, and outer thirds of top) -->
  <polyline points="100,45 55,45 55,175 190,175 190,45 145,45" fill="none" stroke-width="1.6" />
  <!-- Dashed diameter of semicircle -->
  <line x1="100" y1="45" x2="145" y2="45" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.65" />
  <!-- Semicircle on top (diameter = 45, radius = 22.5) -->
  <path d="M 100 45 A 22.5 22.5 0 0 1 145 45" fill="none" stroke-width="1.6" />
  <!-- Equal segment tick marks on top edge -->
  <line x1="77.5" y1="40" x2="77.5" y2="50" stroke-width="1.3" />
  <line x1="122.5" y1="40" x2="122.5" y2="50" stroke-width="1.3" />
  <line x1="167.5" y1="40" x2="167.5" y2="50" stroke-width="1.3" />
  <!-- Labels -->
  <text x="122" y="194" text-anchor="middle" stroke="none" font-style="italic">3a</text>
  <text x="204" y="114" text-anchor="start" stroke="none" font-style="italic">b</text>
</svg>`,
    stem: "Pete has $180\\text{ cm}$ of wire. He bends it to form the outline of his brand logo, which consists of a semicircle centered on top of a rectangle as shown in the diagram below. The width and length of the rectangle are $3a\\text{ cm}$ and $b\\text{ cm}$ respectively. The diameter of the semicircle is one-third the width of the rectangle.",
    parts: [
      {
        label: "(Full)",
        marks: 6,
        prompt: "Find the maximum possible area enclosed by the wire, showing that it is a maximum value. Give your answer correct to 2 decimal places.",
        type: "auto",
        mode: "number",
        answer: "1925.821191",
        dp: 2,
        placeholder: "Area in cm² (2 d.p.)",
        solution: "The diameter of the semicircle is $\\frac{1}{3}(3a) = a$, so its radius is $\\frac{a}{2}$.<br>Perimeter of the outline $= 180$:<br>$$3a + 2a + 2b + \\frac{1}{2}\\pi a = 180$$<br>$$\\left(5 + \\frac{\\pi}{2}\\right)a + 2b = 180 \\implies b = 90 - \\left(\\frac{5}{2} + \\frac{\\pi}{4}\\right)a$$<br>Area enclosed by the wire:<br>$$A = 3ab + \\frac{1}{2}\\pi\\left(\\frac{a}{2}\\right)^2 = 3a\\left[90 - \\left(\\frac{5}{2} + \\frac{\\pi}{4}\\right)a\\right] + \\frac{\\pi}{8}a^2$$<br>$$A = 270a - \\left(\\frac{15}{2} + \\frac{5\\pi}{8}\\right)a^2$$<br>Differentiating with respect to $a$:<br>$$\\frac{\\mathrm{d}A}{\\mathrm{d}a} = 270 - \\left(15 + \\frac{5\\pi}{4}\\right)a$$<br>Setting $\\frac{\\mathrm{d}A}{\\mathrm{d}a} = 0$:<br>$$a = \\frac{270}{15 + \\frac{5\\pi}{4}} \\approx 14.2653$$<br>Second derivative test:<br>$$\\frac{\\mathrm{d}^2 A}{\\mathrm{d}a^2} = -\\left(15 + \\frac{5\\pi}{4}\\right) < 0$$<br>Hence $A$ is a maximum when $a = \\frac{270}{15 + \\frac{5\\pi}{4}}$.<br>Maximum area $= 270(14.2653\\ldots) - \\left(\\frac{15}{2} + \\frac{5\\pi}{8}\\right)(14.2653\\ldots)^2 = 1925.82\\text{ cm}^2$ (to 2 d.p.)."
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q3",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Maclaurin Series"],
    diagramSvg: `<svg viewBox="0 0 320 155" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="12" fill="#2c2925" stroke="#2c2925">
  <!-- Triangle ABC: A=(35,130), C=(275,130), B=(275,30), X=(275,70) -->
  <polygon points="35,130 275,130 275,30" fill="none" stroke-width="1.6" />
  <!-- Dashed line AX -->
  <line x1="35" y1="130" x2="275" y2="70" stroke-width="1.4" stroke-dasharray="5,4" />
  <!-- Right angle marker at C -->
  <polyline points="265,130 265,120 275,120" fill="none" stroke-width="1.2" />
  <!-- Angle alpha arc between AB and AX -->
  <path d="M 96,104.6 A 66 66 0 0 1 99.1,114" fill="none" stroke-width="1.2" />
  <!-- Labels -->
  <text x="23" y="138" stroke="none" font-style="italic">A</text>
  <text x="281" y="29" stroke="none" font-style="italic">B</text>
  <text x="281" y="138" stroke="none" font-style="italic">C</text>
  <text x="282" y="74" stroke="none" font-style="italic">X</text>
  <text x="105" y="110" stroke="none" font-style="italic">α</text>
</svg>`,
    stem: "In the right-angled triangle $ABC$, angle $C$ is a right angle. $AB = 13\\text{ cm}$, $BC = 5\\text{ cm}$ and $X$ is a point on $BC$ such that angle $BAX$ is $\\alpha$ radians.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the exact value of $\\cos(\\text{∠}BAC)$.",
        type: "auto",
        mode: "number",
        answer: "12/13",
        exactRequired: true,
        placeholder: "Exact fraction",
        solution: "By Pythagoras' theorem, $AC = \\sqrt{13^2 - 5^2} = 12\\text{ cm}$.<br>$$\\cos(\\text{∠}BAC) = \\frac{AC}{AB} = \\frac{12}{13}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "By considering triangle $AXC$, or otherwise, show that $AX = \\frac{156}{12\\cos\\alpha + 5\\sin\\alpha}$.",
        type: "self",
        solution: "In right-angled triangle $AXC$, ∠$XAC$ $= \\text{∠}BAC - \\alpha$, so:<br>$$\\cos(\\text{∠}BAC - \\alpha) = \\frac{AC}{AX} = \\frac{12}{AX}$$<br>$$AX = \\frac{12}{\\cos(\\text{∠}BAC - \\alpha)} = \\frac{12}{\\cos(\\text{∠}BAC)\\cos\\alpha + \\sin(\\text{∠}BAC)\\sin\\alpha}$$<br>Since $\\cos(\\text{∠}BAC) = \\frac{12}{13}$ and $\\sin(\\text{∠}BAC) = \\frac{5}{13}$:<br>$$AX = \\frac{12}{\\frac{12}{13}\\cos\\alpha + \\frac{5}{13}\\sin\\alpha} = \\frac{156}{12\\cos\\alpha + 5\\sin\\alpha} \\quad \\text{(shown)}$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Given that $\\alpha$ is a sufficiently small angle, show that $$AX \\approx 13 + p\\alpha + q\\alpha^2,$$ where $p$ and $q$ are constants to be determined exactly.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "p =", answer: "-65/12", exactRequired: true, placeholder: "Exact fraction" },
          { label: "q =", answer: "1261/144", exactRequired: true, placeholder: "Exact fraction" }
        ],
        solution: "Using the small angle approximations $\\cos\\alpha \\approx 1 - \\frac{\\alpha^2}{2}$ and $\\sin\\alpha \\approx \\alpha$:<br>$$AX \\approx \\frac{156}{12\\left(1 - \\frac{\\alpha^2}{2}\\right) + 5\\alpha} = \\frac{156}{12\\left(1 + \\frac{5}{12}\\alpha - \\frac{\\alpha^2}{2}\\right)} = 13\\left[1 + \\left(\\frac{5}{12}\\alpha - \\frac{\\alpha^2}{2}\\right)\\right]^{-1}$$<br>Expanding up to the $\\alpha^2$ term:<br>$$AX \\approx 13\\left[1 - \\left(\\frac{5}{12}\\alpha - \\frac{\\alpha^2}{2}\\right) + \\left(\\frac{5}{12}\\alpha\\right)^2\\right]$$<br>$$= 13\\left(1 - \\frac{5}{12}\\alpha + \\frac{1}{2}\\alpha^2 + \\frac{25}{144}\\alpha^2\\right) = 13\\left(1 - \\frac{5}{12}\\alpha + \\frac{97}{144}\\alpha^2\\right)$$<br>$$= 13 - \\frac{65}{12}\\alpha + \\frac{1261}{144}\\alpha^2$$<br>Hence $p = -\\frac{65}{12}$ and $q = \\frac{1261}{144}$."
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q4",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 300 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="140" x2="278" y2="140" stroke-width="1.3" />
  <polyline points="272,136 278,140 272,144" fill="none" stroke-width="1.3" />
  <line x1="120" y1="185" x2="120" y2="18" stroke-width="1.3" />
  <polyline points="116,24 120,18 124,24" fill="none" stroke-width="1.3" />
  <!-- Horizontal asymptote y = k -->
  <line x1="25" y1="108" x2="265" y2="108" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.65" />
  <!-- Curve y = f(2x): left branch -->
  <path d="M 28,105 C 65,104 95,100 108,75 C 114,60 116,42 117.5,24" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Curve y = f(2x): right branch with minimum at (175, 140) -->
  <path d="M 122.5,24 C 125,55 135,105 152,128 C 162,138 168,140 175,140 C 185,140 198,125 220,115 C 238,110 252,109 266,109" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Turning point dot -->
  <circle cx="175" cy="140" r="2.5" fill="#4a8fe7" stroke="none" />
  <!-- Labels -->
  <text x="282" y="144" stroke="none" font-style="italic">x</text>
  <text x="112" y="16" stroke="none" font-style="italic">y</text>
  <text x="108" y="153" stroke="none" font-style="italic">O</text>
  <text x="175" y="155" text-anchor="middle" stroke="none">(2, 0)</text>
  <text x="126" y="182" stroke="none" font-style="italic">x = 0</text>
  <text x="255" y="102" stroke="none" font-style="italic">y = k</text>
</svg>`,
    stem: "The diagram below shows the graph of $y = \\mathrm{f}(2x)$. The graph has a turning point at $(2, 0)$, and asymptotes with equations $x = 0$ and $y = k$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "State a single transformation that will transform the graph of $y = \\mathrm{f}(2x)$ onto the graph of $y = \\mathrm{f}(2x + 4)$. Hence sketch the graph of $y = \\mathrm{f}(2x + 4)$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="20" y1="140" x2="278" y2="140" stroke-width="1.3" />
  <polyline points="272,136 278,140 272,144" fill="none" stroke-width="1.3" />
  <line x1="165" y1="185" x2="165" y2="18" stroke-width="1.3" />
  <polyline points="161,24 165,18 169,24" fill="none" stroke-width="1.3" />
  <!-- Vertical asymptote x = -2 -->
  <line x1="110" y1="180" x2="110" y2="24" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.65" />
  <!-- Horizontal asymptote y = k -->
  <line x1="20" y1="108" x2="265" y2="108" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.65" />
  <!-- Left branch -->
  <path d="M 24,105 C 55,104 85,100 98,75 C 104,60 106,42 107.5,24" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Right branch with minimum at (165, 140) i.e. (0,0) -->
  <path d="M 112.5,24 C 115,55 125,105 142,128 C 152,138 158,140 165,140 C 175,140 188,125 210,115 C 228,110 245,109 266,109" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <circle cx="165" cy="140" r="2.5" fill="#4a8fe7" stroke="none" />
  <!-- Labels -->
  <text x="282" y="144" stroke="none" font-style="italic">x</text>
  <text x="157" y="16" stroke="none" font-style="italic">y</text>
  <text x="180" y="155" text-anchor="middle" stroke="none">(0, 0)</text>
  <text x="110" y="193" text-anchor="middle" stroke="none" font-style="italic">x = −2</text>
  <text x="255" y="102" stroke="none" font-style="italic">y = k</text>
  <text x="24" y="45" stroke="none" fill="#4a8fe7" font-style="italic">y = f(2x + 4)</text>
</svg>`,
        solution: "Since $\\mathrm{f}(2x + 4) = \\mathrm{f}(2(x + 2))$, we replace $x$ by $x + 2$.<br><strong>Transformation:</strong> Translation of $2$ units in the negative $x$-direction.<br><strong>Key features of the sketch:</strong><br>• Vertical asymptote shifts to $x = -2$.<br>• Horizontal asymptote remains $y = k$.<br>• Turning point shifts from $(2, 0)$ to $(0, 0)$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "On a separate clearly labelled diagram, sketch the graph of $y = \\frac{1}{\\mathrm{f}(2x)}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="20" y1="145" x2="278" y2="145" stroke-width="1.3" />
  <polyline points="272,141 278,145 272,149" fill="none" stroke-width="1.3" />
  <line x1="115" y1="185" x2="115" y2="18" stroke-width="1.3" />
  <polyline points="111,24 115,18 119,24" fill="none" stroke-width="1.3" />
  <!-- Vertical asymptote x = 2 -->
  <line x1="175" y1="180" x2="175" y2="24" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.65" />
  <!-- Horizontal asymptote y = 1/k -->
  <line x1="20" y1="110" x2="265" y2="110" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.65" />
  <!-- Left branch: approaches y=1/k from below as x->-inf, goes to (0,0), then up to +inf as x->2- -->
  <path d="M 24,113 C 55,115 80,122 98,136 C 107,143 111,145 115,145 C 125,145 145,125 158,95 C 168,70 171,45 172.5,24" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Right branch: comes down from +inf as x->2+, approaches y=1/k from above -->
  <path d="M 177.5,24 C 181,55 190,82 208,96 C 225,105 245,107 266,108" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <circle cx="115" cy="145" r="2.5" fill="#4a8fe7" stroke="none" />
  <!-- Labels -->
  <text x="282" y="149" stroke="none" font-style="italic">x</text>
  <text x="107" y="16" stroke="none" font-style="italic">y</text>
  <text x="98" y="160" text-anchor="middle" stroke="none">(0, 0)</text>
  <text x="175" y="193" text-anchor="middle" stroke="none" font-style="italic">x = 2</text>
  <text x="255" y="103" stroke="none" font-style="italic">y = 1/k</text>
  <text x="200" y="45" stroke="none" fill="#4a8fe7" font-style="italic">y = 1 / f(2x)</text>
</svg>`,
        solution: "<strong>Key features of $y = \\frac{1}{\\mathrm{f}(2x)}$:</strong><br>• Since $\\mathrm{f}(2x) \\ge 0$ everywhere, $\\frac{1}{\\mathrm{f}(2x)} \\ge 0$ everywhere.<br>• The $x$-intercept (minimum) at $(2, 0)$ becomes a vertical asymptote $x = 2$ (with $y$ → $+∞$ on both sides).<br>• The vertical asymptote $x = 0$ (where $y$ → $+∞$) becomes a minimum point at $(0, 0)$ (approached from both sides).<br>• The horizontal asymptote $y = k$ becomes $y = \\frac{1}{k}$ (approached from below as $x$ → $-∞$ and from above as $x$ → $+∞$)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "On a separate clearly labelled diagram, sketch the graph of $y = -\\mathrm{f}(|x|)$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="20" y1="65" x2="278" y2="65" stroke-width="1.3" />
  <polyline points="272,61 278,65 272,69" fill="none" stroke-width="1.3" />
  <line x1="150" y1="185" x2="150" y2="18" stroke-width="1.3" />
  <polyline points="146,24 150,18 154,24" fill="none" stroke-width="1.3" />
  <!-- Horizontal asymptote y = -k -->
  <line x1="20" y1="100" x2="265" y2="100" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.65" />
  <!-- Right branch: from -inf as x->0+, up to max at (205, 65) i.e. (4,0), down to y=-k from above -->
  <path d="M 152.5,180 C 155,145 166,95 182,76 C 192,67 198,65 205,65 C 215,65 228,80 245,91 C 256,96 262,97 270,98" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Left branch: reflection in y-axis, max at (95, 65) i.e. (-4,0) -->
  <path d="M 147.5,180 C 145,145 134,95 118,76 C 108,67 102,65 95,65 C 85,65 72,80 55,91 C 44,96 38,97 30,98" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <circle cx="205" cy="65" r="2.5" fill="#4a8fe7" stroke="none" />
  <circle cx="95" cy="65" r="2.5" fill="#4a8fe7" stroke="none" />
  <!-- Labels -->
  <text x="282" y="69" stroke="none" font-style="italic">x</text>
  <text x="142" y="16" stroke="none" font-style="italic">y</text>
  <text x="156" y="34" stroke="none" font-style="italic">x = 0</text>
  <text x="205" y="55" text-anchor="middle" stroke="none">(4, 0)</text>
  <text x="95" y="55" text-anchor="middle" stroke="none">(−4, 0)</text>
  <text x="245" y="114" stroke="none" font-style="italic">y = −k</text>
  <text x="170" y="175" stroke="none" fill="#4a8fe7" font-style="italic">y = −f(|x|)</text>
</svg>`,
        solution: "To obtain $y = -\\mathrm{f}(|x|)$ from $y = \\mathrm{f}(2x)$:<br>1. Scale parallel to the $x$-axis by factor $2$ to get $y = \\mathrm{f}(x)$ (turning point moves from $(2, 0)$ to $(4, 0)$).<br>2. Replace $x$ by $|x|$: keep the $x > 0$ portion and reflect it in the $y$-axis (giving turning points at $(4, 0)$ and $(-4, 0)$).<br>3. Reflect in the $x$-axis to get $y = -\\mathrm{f}(|x|)$.<br><strong>Key features:</strong><br>• Vertical asymptote $x = 0$ (both branches go to $-∞$).<br>• Horizontal asymptote $y = -k$ (approached from above as $x$ → $±∞$).<br>• Maximum points at $(-4, 0)$ and $(4, 0)$."
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q5",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Sequences & Series", "Integration"],
    diagramSvg: `<svg viewBox="0 0 320 195" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="160" x2="50" y2="160" stroke-width="1.3" />
  <polyline points="50,160 54,152 60,168 64,160" fill="none" stroke-width="1.2" />
  <line x1="64" y1="160" x2="290" y2="160" stroke-width="1.3" />
  <polyline points="284,156 290,160 284,164" fill="none" stroke-width="1.3" />
  <line x1="40" y1="175" x2="40" y2="18" stroke-width="1.3" />
  <polyline points="36,24 40,18 44,24" fill="none" stroke-width="1.3" />
  <!-- Dashed vertical guides at x=1 (100) and x=2 (220) -->
  <line x1="100" y1="160" x2="100" y2="38" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.6" />
  <line x1="220" y1="160" x2="220" y2="38" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.6" />
  <!-- Inscribed rectangles under y = 1/x (y_px = 160 - 95/x, x_px = 100 + 120*(x-1)) -->
  <!-- n=5 visual: widths of 24px, skip 3rd for ... -->
  <rect x="100" y="80.8" width="24" height="79.2" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <rect x="124" y="92.1" width="24" height="67.9" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <text x="160" y="150" text-anchor="middle" stroke="none" font-size="13">...</text>
  <rect x="172" y="107.2" width="24" height="52.8" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <rect x="196" y="112.5" width="24" height="47.5" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <!-- Curve y = 1/x -->
  <path d="M 70,33.3 C 85,52 100,65 124,80.8 C 148,92.1 172,100.6 196,107.2 C 220,112.5 245,117 270,120.5" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Labels -->
  <text x="295" y="164" stroke="none" font-style="italic">x</text>
  <text x="33" y="16" stroke="none" font-style="italic">y</text>
  <text x="100" y="175" text-anchor="middle" stroke="none">1</text>
  <text x="220" y="175" text-anchor="middle" stroke="none">2</text>
  <text x="258" y="110" stroke="none" fill="#4a8fe7" font-style="italic">y = 1/x</text>
</svg>`,
    stem: "The diagram shows the curve with equation $y = \\frac{1}{x}$.<br>$n$ rectangles of equal width are drawn under the curve between $x = 1$ and $x = 2$.<br>Let $S_n$ be the <strong>total</strong> area of the $n$ rectangles.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Let $n = 2$. By considering $S_2$, show that $\\frac{7}{12} < \\ln 2$. State your reasoning clearly.",
        type: "self",
        solution: "When $n = 2$, each rectangle has width $\\frac{2 - 1}{2} = \\frac{1}{2}$, with right endpoints at $x = \\frac{3}{2}$ and $x = 2$.<br>$$S_2 = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{3/2}\\right) + \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right) = \\left(\\frac{1}{2}\\right)\\left(\\frac{2}{3}\\right) + \\frac{1}{4} = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$$<br>The exact area under the curve $y = \\frac{1}{x}$ between $x = 1$ and $x = 2$ is:<br>$$\\int_1^2 \\frac{1}{x}\\,\\mathrm{d}x = \\left[\\ln x\\right]_1^2 = \\ln 2 - \\ln 1 = \\ln 2$$<br>Since the two rectangles lie completely under the curve, the total area of the rectangles must be strictly less than the area under the curve:<br>$$\\therefore \\frac{7}{12} < \\ln 2 \\quad \\text{(shown)}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "By considering $S_n$ for a suitable value of $n$, find a rational number $q$ such that $\\frac{7}{12} < q < \\ln 2$.",
        type: "self",
        solution: "We can choose any integer $n > 2$. For example, taking $n = 3$:<br>$$S_3 = \\frac{1}{3}\\left(\\frac{3}{4} + \\frac{3}{5} + \\frac{3}{6}\\right) = \\frac{1}{4} + \\frac{1}{5} + \\frac{1}{6} = \\frac{37}{60}$$<br>Since $\\frac{7}{12} = \\frac{35}{60} < \\frac{37}{60} < \\ln 2$, a suitable rational number is $q = \\frac{37}{60}$.<br>(Other valid answers include $n = 4 \\implies q = \\frac{533}{840}$, $n = 5 \\implies q = \\frac{1627}{2520}$, etc.)"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Express $S_n$ in the form $$\\sum_{r=1}^{n} \\mathrm{g}(r),$$ where the function $\\mathrm{g}$ is to be determined.",
        type: "auto",
        mode: "expr",
        vars: { n: [2, 3, 5], r: [1, 2, 3] },
        answer: "1/(n+r)",
        placeholder: "Expression for g(r) in terms of n and r",
        solution: "Each of the $n$ rectangles has width $\\frac{1}{n}$, and the $r$-th rectangle has right endpoint $x = 1 + \\frac{r}{n} = \\frac{n+r}{n}$ and height $\\frac{n}{n+r}$.<br>$$S_n = \\sum_{r=1}^{n} \\left(\\frac{1}{n}\\right)\\left(\\frac{n}{n+r}\\right) = \\sum_{r=1}^{n} \\frac{1}{n+r}$$<br>Hence $\\mathrm{g}(r) = \\frac{1}{n+r}$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "By considering another suitable set of $n$ rectangles, show with the aid of a diagram that $$\\ln 2 < S_n + \\frac{1}{2n}$$ where $n$ is any given positive integer.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 195" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="160" x2="50" y2="160" stroke-width="1.3" />
  <polyline points="50,160 54,152 60,168 64,160" fill="none" stroke-width="1.2" />
  <line x1="64" y1="160" x2="290" y2="160" stroke-width="1.3" />
  <polyline points="284,156 290,160 284,164" fill="none" stroke-width="1.3" />
  <line x1="40" y1="175" x2="40" y2="18" stroke-width="1.3" />
  <polyline points="36,24 40,18 44,24" fill="none" stroke-width="1.3" />
  <!-- Dashed vertical guides at x=1 (100) and x=2 (220) -->
  <line x1="100" y1="160" x2="100" y2="38" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.6" />
  <line x1="220" y1="160" x2="220" y2="38" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.6" />
  <!-- Circumscribed rectangles above y = 1/x -->
  <rect x="100" y="65" width="24" height="95" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <rect x="124" y="80.8" width="24" height="79.2" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <text x="160" y="150" text-anchor="middle" stroke="none" font-size="13">...</text>
  <rect x="172" y="100.6" width="24" height="59.4" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <rect x="196" y="107.2" width="24" height="52.8" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <!-- Curve y = 1/x -->
  <path d="M 70,33.3 C 85,52 100,65 124,80.8 C 148,92.1 172,100.6 196,107.2 C 220,112.5 245,117 270,120.5" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Labels -->
  <text x="295" y="164" stroke="none" font-style="italic">x</text>
  <text x="33" y="16" stroke="none" font-style="italic">y</text>
  <text x="100" y="175" text-anchor="middle" stroke="none">1</text>
  <text x="220" y="175" text-anchor="middle" stroke="none">2</text>
  <text x="258" y="110" stroke="none" fill="#4a8fe7" font-style="italic">y = 1/x</text>
</svg>`,
        solution: "Consider $n$ rectangles of equal width $\\frac{1}{n}$ drawn <strong>above</strong> the curve between $x = 1$ and $x = 2$, using the left endpoints $x = 1, 1 + \\frac{1}{n}, \\ldots, 1 + \\frac{n-1}{n}$.<br>Since the curve lies completely below these rectangles, $\\ln 2 < \\text{Total area of rectangles}$:<br>$$\\ln 2 < \\left(\\frac{1}{n}\\right)\\left(\\frac{n}{n}\\right) + \\left(\\frac{1}{n}\\right)\\left(\\frac{n}{n+1}\\right) + \\cdots + \\left(\\frac{1}{n}\\right)\\left(\\frac{n}{2n-1}\\right)$$<br>$$\\ln 2 < \\frac{1}{n} + \\frac{1}{n+1} + \\cdots + \\frac{1}{2n-1}$$<br>Since $S_n = \\frac{1}{n+1} + \\cdots + \\frac{1}{2n-1} + \\frac{1}{2n}$, we have $\\frac{1}{n+1} + \\cdots + \\frac{1}{2n-1} = S_n - \\frac{1}{2n}$.<br>$$\\therefore \\ln 2 < \\frac{1}{n} + \\left(S_n - \\frac{1}{2n}\\right) = S_n + \\frac{1}{2n} \\quad \\text{(shown)}$$"
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q6",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Vectors"],
    stem: "There are three distinct points $A$, $B$ and $P$. The point $P$ lies on the circle with centre $O$ and diameter $AB$. Relative to the origin $O$, the position vectors of points $A$ and $P$ are $\\mathbf{a}$ and $\\mathbf{p}$ respectively.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "By expressing $\\mathbf{AP}$ and $\\mathbf{BP}$ in terms of $\\mathbf{a}$ and $\\mathbf{p}$, show that $\\mathbf{AP} \\cdot \\mathbf{BP} = 0$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 170" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Circle centre O=(105,85), r=55 -->
  <circle cx="105" cy="85" r="55" fill="none" stroke-width="1.5" />
  <!-- Diameter AB -->
  <line x1="50" y1="85" x2="160" y2="85" stroke-width="1.3" />
  <!-- Radius OP (angle 60 deg from OB, i.e. 120 deg from OA) -->
  <line x1="105" y1="85" x2="132.5" y2="37.4" stroke="#4a8fe7" stroke-width="1.6" />
  <!-- Point C on AB produced -->
  <line x1="160" y1="85" x2="215" y2="85" stroke-width="1.3" stroke-dasharray="4,3" />
  <!-- Tangent PC -->
  <line x1="132.5" y1="37.4" x2="215" y2="85" stroke="#cf5652" stroke-width="1.4" />
  <!-- Points -->
  <circle cx="105" cy="85" r="2.2" fill="#2c2925" />
  <circle cx="50" cy="85" r="2.2" fill="#2c2925" />
  <circle cx="160" cy="85" r="2.2" fill="#2c2925" />
  <circle cx="132.5" cy="37.4" r="2.5" fill="#4a8fe7" stroke="none" />
  <circle cx="215" cy="85" r="2.2" fill="#cf5652" stroke="none" />
  <!-- Labels -->
  <text x="38" y="89" stroke="none" font-style="italic">A</text>
  <text x="101" y="100" stroke="none" font-style="italic">O</text>
  <text x="163" y="100" stroke="none" font-style="italic">B</text>
  <text x="136" y="32" stroke="none" font-style="italic">P</text>
  <text x="220" y="89" stroke="none" font-style="italic">C</text>
  <text x="74" y="79" stroke="none" font-weight="bold">a</text>
  <text x="108" y="59" stroke="none" fill="#4a8fe7" font-weight="bold">p</text>
</svg>`,
        solution: "Since $O$ is the midpoint of diameter $AB$, $\\mathbf{b} = -\\mathbf{a}$.<br>$$\\mathbf{AP} = \\mathbf{p} - \\mathbf{a}, \\qquad \\mathbf{BP} = \\mathbf{p} - (-\\mathbf{a}) = \\mathbf{p} + \\mathbf{a}$$<br>Taking the scalar product:<br>$$\\mathbf{AP} \\cdot \\mathbf{BP} = (\\mathbf{p} - \\mathbf{a}) \\cdot (\\mathbf{p} + \\mathbf{a}) = |\\mathbf{p}|^2 - |\\mathbf{a}|^2$$<br>Since $OA$ and $OP$ are both radii of the circle, $|\\mathbf{p}| = |\\mathbf{a}|$.<br>$$\\therefore \\mathbf{AP} \\cdot \\mathbf{BP} = |\\mathbf{a}|^2 - |\\mathbf{a}|^2 = 0 \\quad \\text{(shown)}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The point $C$ with position vector $\\mathbf{c}$ lies on $AB$ produced such that $AC : AB$ is $\\lambda : 1$.<br>Find $\\mathbf{c}$ in terms of $\\lambda$ and $\\mathbf{a}$.",
        type: "self",
        solution: "Since $C$ lies on $AB$ produced with $AC : AB = \\lambda : 1$, we have $AB : BC = 1 : (\\lambda - 1)$.<br>By the Ratio Theorem:<br>$$\\mathbf{b} = \\frac{(\\lambda - 1)\\mathbf{a} + \\mathbf{c}}{\\lambda} \\implies \\mathbf{c} = \\lambda\\mathbf{b} - (\\lambda - 1)\\mathbf{a}$$<br>Substituting $\\mathbf{b} = -\\mathbf{a}$:<br>$$\\mathbf{c} = \\lambda(-\\mathbf{a}) - (\\lambda - 1)\\mathbf{a} = (1 - 2\\lambda)\\mathbf{a}$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "It is given that $PC$ is a tangent to the circle and that angle $AOP$ is $120^\\circ$. Using a suitable scalar product, find the value of $\\lambda$.",
        type: "auto",
        mode: "number",
        answer: "3/2",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $PC$ is tangent to the circle at $P$, radius $OP$ is perpendicular to $PC$, so $\\mathbf{OP} \\cdot \\mathbf{PC} = 0$.<br>$$\\mathbf{PC} = \\mathbf{c} - \\mathbf{p} = (1 - 2\\lambda)\\mathbf{a} - \\mathbf{p}$$<br>$$\\mathbf{p} \\cdot \\left((1 - 2\\lambda)\\mathbf{a} - \\mathbf{p}\\right) = 0$$<br>$$(1 - 2\\lambda)(\\mathbf{p} \\cdot \\mathbf{a}) - |\\mathbf{p}|^2 = 0$$<br>$$(1 - 2\\lambda)|\\mathbf{p}||\\mathbf{a}|\\cos 120^\\circ - |\\mathbf{p}|^2 = 0$$<br>Since $|\\mathbf{p}| = |\\mathbf{a}| \\ne 0$ and $\\cos 120^\\circ = -\\frac{1}{2}$:<br>$$-\\frac{1}{2}(1 - 2\\lambda)|\\mathbf{a}|^2 - |\\mathbf{a}|^2 = 0 \\implies -\\frac{1}{2}(1 - 2\\lambda) = 1$$<br>$$1 - 2\\lambda = -2 \\implies \\lambda = \\frac{3}{2}$$"
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q7",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "<strong>Do not use a calculator in answering this question.</strong><br>An arithmetic sequence $u_1, u_2, u_3, \\ldots$ has $u_1 = 9$ and $u_3 = b$, where $b$ is a constant.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $u_2$ in terms of $b$.",
        type: "auto",
        mode: "expr",
        vars: { b: [1, 3, 7] },
        answer: "(9+b)/2",
        placeholder: "Expression in terms of b",
        solution: "In an arithmetic sequence, $u_2 - u_1 = u_3 - u_2$, so:<br>$$u_2 = \\frac{u_1 + u_3}{2} = \\frac{9 + b}{2}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "A geometric sequence $v_1, v_2, v_3, \\ldots$ has $v_1 = 9$ and $v_3 = b$.<br>Find the possible values of $v_2$ in terms of $b$.",
        type: "auto",
        mode: "expr-list",
        vars: { b: [1, 4, 9] },
        answer: ["3*sqrt(b)", "-3*sqrt(b)"],
        placeholder: "Separate two expressions in terms of b with a comma",
        solution: "In a geometric sequence, $\\frac{v_2}{v_1} = \\frac{v_3}{v_2}$, so:<br>$$v_2^2 = v_1 v_3 = 9b \\implies v_2 = \\pm\\sqrt{9b} = \\pm 3\\sqrt{b}$$"
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "It is now given that $u_2 - v_2 = 8$, and the geometric sequence $v_1, v_2, v_3, \\ldots$ is convergent.<br>Find the value of $b$. Hence find $u_2$ and $v_2$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "b =", answer: "1", exactRequired: true, placeholder: "Exact value" },
          { label: "u₂ =", answer: "5", exactRequired: true, placeholder: "Exact value" },
          { label: "v₂ =", answer: "-3", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "From $u_2 - v_2 = 8$, we have $v_2 = u_2 - 8 = \\frac{9 + b}{2} - 8 = \\frac{b - 7}{2}$.<br>Squaring both sides and using $v_2^2 = 9b$:<br>$$9b = \\left(\\frac{b - 7}{2}\\right)^2 = \\frac{b^2 - 14b + 49}{4}$$<br>$$36b = b^2 - 14b + 49 \\implies b^2 - 50b + 49 = 0$$<br>$$(b - 1)(b - 49) = 0 \\implies b = 1 \\text{ or } b = 49$$<br>Since the geometric sequence is convergent, the common ratio $r$ satisfies $|r| < 1$.<br>If $b = 49$, $|r| = \\sqrt{\\frac{49}{9}} = \\frac{7}{3} > 1$ (reject).<br>If $b = 1$, $|r| = \\sqrt{\\frac{1}{9}} = \\frac{1}{3} < 1$ (valid).<br>Hence $b = 1$, giving $u_2 = \\frac{9 + 1}{2} = 5$ and $v_2 = u_2 - 8 = 5 - 8 = -3$."
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q8",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong><br>The complex number $w$ is such that $w^2 = 2\\mathrm{i}$ and $0 \\le \\arg(w) \\le \\frac{\\pi}{2}$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find $w$.",
        type: "auto",
        mode: "complex-list",
        answer: ["1+i"],
        placeholder: "Complex number in a + bi form",
        solution: "Let $w = a + b\\mathrm{i}$ where $a, b \\in \\mathbb{R}$. Then:<br>$$(a + b\\mathrm{i})^2 = (a^2 - b^2) + 2ab\\mathrm{i} = 2\\mathrm{i}$$<br>Comparing real and imaginary parts: $a^2 - b^2 = 0$ and $2ab = 2 \\implies a = \\frac{1}{b}$.<br>Substituting into the first equation:<br>$$\\frac{1}{b^2} - b^2 = 0 \\implies 1 - b^4 = 0 \\implies (1 + b^2)(1 - b^2) = 0$$<br>Since $b$ is real, $b^2 = 1$, so $b = 1, a = 1$ or $b = -1, a = -1$.<br>Since $0 \\le \\arg(w) \\le \\frac{\\pi}{2}$, $w$ lies in the first quadrant, so $w = 1 + \\mathrm{i}$."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Given that one of the roots of the equation $z^3 - z^2 + (1 - \\mathrm{i})z + s = 0$ is $w$, find the other roots of the equation and the value of $s$.",
        type: "self",
        solution: "Since $1 + \\mathrm{i}$ is a root, write:<br>$$z^3 - z^2 + (1 - \\mathrm{i})z + s = \\left[z - (1 + \\mathrm{i})\\right](z^2 + Bz + C)$$<br>Comparing coefficients:<br>• $z^2$: $-1 = -(1 + \\mathrm{i}) + B \\implies B = \\mathrm{i}$<br>• $z$: $1 - \\mathrm{i} = -(1 + \\mathrm{i})B + C = -(1 + \\mathrm{i})\\mathrm{i} + C = 1 - \\mathrm{i} + C \\implies C = 0$<br>• Constant: $s = -(1 + \\mathrm{i})C = 0$<br>Solving $z^2 + \\mathrm{i}z = 0 \\implies z(z + \\mathrm{i}) = 0 \\implies z = 0 \\text{ or } z = -\\mathrm{i}$.<br>Hence $s = 0$ and the other roots are $z = 0$ and $z = -\\mathrm{i}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Hence, find the roots of the equation $-\\mathrm{i}v^3 + v^2 + (1 + \\mathrm{i})v + s = 0$.",
        type: "auto",
        mode: "complex-list",
        answer: ["1-i", "0", "-1"],
        placeholder: "Separate roots with commas",
        solution: "Substituting $z = \\mathrm{i}v$ into $z^3 - z^2 + (1 - \\mathrm{i})z + s = 0$:<br>$$(\\mathrm{i}v)^3 - (\\mathrm{i}v)^2 + (1 - \\mathrm{i})(\\mathrm{i}v) + s = 0$$<br>$$-\\mathrm{i}v^3 + v^2 + (1 + \\mathrm{i})v + s = 0$$<br>Thus $\\mathrm{i}v = z \\implies v = -\\mathrm{i}z$.<br>For $z = 1 + \\mathrm{i}$: $v = -\\mathrm{i}(1 + \\mathrm{i}) = 1 - \\mathrm{i}$.<br>For $z = 0$: $v = -\\mathrm{i}(0) = 0$.<br>For $z = -\\mathrm{i}$: $v = -\\mathrm{i}(-\\mathrm{i}) = -1$.<br>The roots are $v = 1 - \\mathrm{i},\\ 0,\\ -1$."
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q9",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Functions"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "State the coordinates of the turning points of the graph of $y = x^3 - 3x^2 - 9x + 5$.",
        type: "self",
        solution: "Differentiating: $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 \\implies x = -1$ or $x = 3$.<br>From GC (or by substitution), the coordinates of the turning points are $(-1, 10)$ and $(3, -22)$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "The function $\\mathrm{f}$ is defined by $$\\mathrm{f}(x) = x^3 - 3x^2 - 9x + 5, \\quad x \\in \\mathbb{R},\\ x \\le a$$ where $a$ is a constant. Find the largest possible value of $a$ such that $\\mathrm{f}^{-1}$ exists, and state the domain of $\\mathrm{f}^{-1}$ in this case.",
        type: "self",
        solution: "For $\\mathrm{f}^{-1}$ to exist, $\\mathrm{f}$ must be one-to-one on $(-∞, a]$.<br>Since the first turning point (maximum) is at $(-1, 10)$, the largest possible value of $a$ is $a = -1$.<br>The domain of $\\mathrm{f}^{-1}$ equals the range of $\\mathrm{f}$, which is $(-∞, 10]$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "The function $\\mathrm{g}$ is defined by $$\\mathrm{g}(x) = \\frac{1 - 2x}{x + 2}, \\quad x \\in \\mathbb{R},\\ x \\ne -2.$$ Find $\\mathrm{g}^2(x)$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 3, 5] },
        answer: "x",
        placeholder: "Simplified expression in terms of x",
        solution: "$$\\mathrm{g}^2(x) = \\mathrm{g}\\left(\\frac{1 - 2x}{x + 2}\\right) = \\frac{1 - 2\\left(\\frac{1 - 2x}{x + 2}\\right)}{\\left(\\frac{1 - 2x}{x + 2}\\right) + 2} = \\frac{(x + 2) - 2(1 - 2x)}{(1 - 2x) + 2(x + 2)} = \\frac{5x}{5} = x$$"
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Hence find the possible expressions of $\\mathrm{g}^n(x)$, where $n$ is a positive integer.",
        type: "self",
        solution: "Since $\\mathrm{g}^2(x) = x$, applying $\\mathrm{g}$ repeatedly alternates between $\\mathrm{g}(x)$ and $x$:<br>• $\\mathrm{g}^n(x) = x$ if $n$ is even,<br>• $\\mathrm{g}^n(x) = \\frac{1 - 2x}{x + 2}$ if $n$ is odd."
      },
      {
        label: "(c)(i)",
        marks: 2,
        prompt: "The function $\\mathrm{h}$ is defined by $$\\mathrm{h}(x) = x^2, \\quad x \\in \\mathbb{R},\\ x \\le 0.$$ Explain why the composite function $\\mathrm{gh}$ exists.",
        type: "self",
        solution: "The range of $\\mathrm{h}$ is $\\mathrm{R}_\\mathrm{h} = [0, ∞)$.<br>The domain of $\\mathrm{g}$ is $\\mathrm{D}_\\mathrm{g} = \\mathbb{R} \\setminus \\{-2\\} = (-∞, -2) \\cup (-2, ∞)$.<br>Since $\\mathrm{R}_\\mathrm{h} \\subseteq \\mathrm{D}_\\mathrm{g}$, the composite function $\\mathrm{gh}$ exists."
      },
      {
        label: "(c)(ii)",
        marks: 2,
        prompt: "Find the range of $\\mathrm{gh}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 155" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="70" x2="235" y2="70" stroke-width="1.3" />
  <polyline points="229,66 235,70 229,74" fill="none" stroke-width="1.3" />
  <line x1="75" y1="140" x2="75" y2="18" stroke-width="1.3" />
  <polyline points="71,24 75,18 79,24" fill="none" stroke-width="1.3" />
  <!-- Horizontal asymptote y = -2 -->
  <line x1="25" y1="115" x2="225" y2="115" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.65" />
  <!-- Curve y = (1-2x)/(x+2) for x >= 0: starts at (75, 58.75) i.e. (0, 0.5), crosses x-axis at (87.5, 70), approaches y=-2 (115) -->
  <path d="M 75,58.75 C 88,72 110,94 145,104 C 175,110 200,112 225,113" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <circle cx="75" cy="58.75" r="3" fill="#4a8fe7" stroke="none" />
  <!-- Labels -->
  <text x="240" y="74" stroke="none" font-style="italic">x</text>
  <text x="67" y="16" stroke="none" font-style="italic">y</text>
  <text x="68" y="55" text-anchor="end" stroke="none">(0, 0.5)</text>
  <text x="85" y="130" stroke="none" font-style="italic">y = −2</text>
</svg>`,
        solution: "The range of $\\mathrm{gh}$ is the range of $\\mathrm{g}(x) = -2 + \\frac{5}{x + 2}$ restricted to $\\mathrm{R}_\\mathrm{h} = [0, ∞)$.<br>For $x \\ge 0$, $\\mathrm{g}(x)$ decreases strictly from $\\mathrm{g}(0) = \\frac{1}{2}$ towards the horizontal asymptote $y = -2$.<br>$$\\therefore \\mathrm{R}_{\\mathrm{gh}} = \\left(-2, \\frac{1}{2}\\right]$$"
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q10",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find $\\int_0^4 \\mathrm{e}^{|x - 1|}\\,\\mathrm{d}x$, leaving your answer in exact form.",
        type: "auto",
        mode: "number",
        answer: "e^3 + e - 2",
        exactRequired: true,
        placeholder: "Exact expression in terms of e",
        solution: "Splitting the integral at $x = 1$:<br>$$\\int_0^4 \\mathrm{e}^{|x - 1|}\\,\\mathrm{d}x = \\int_0^1 \\mathrm{e}^{1 - x}\\,\\mathrm{d}x + \\int_1^4 \\mathrm{e}^{x - 1}\\,\\mathrm{d}x$$<br>$$= \\left[-\\mathrm{e}^{1 - x}\\right]_0^1 + \\left[\\mathrm{e}^{x - 1}\\right]_1^4$$<br>$$= (-1 + \\mathrm{e}) + (\\mathrm{e}^3 - 1) = \\mathrm{e}^3 + \\mathrm{e} - 2$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find $\\int \\sin^2 3x + \\tan^2 3x\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.1, 0.2, 0.3],
        answer: "-sin(6*x)/12 + tan(3*x)/3 - x/2",
        placeholder: "Indefinite integral in terms of x (omit + C)",
        solution: "Using $\\sin^2 3x = \\frac{1 - \\cos 6x}{2}$ and $\\tan^2 3x = \\sec^2 3x - 1$:<br>$$\\int \\sin^2 3x + \\tan^2 3x\\,\\mathrm{d}x = \\int \\left(\\frac{1 - \\cos 6x}{2} + \\sec^2 3x - 1\\right)\\mathrm{d}x$$<br>$$= \\int \\left(-\\frac{1}{2}\\cos 6x + \\sec^2 3x - \\frac{1}{2}\\right)\\mathrm{d}x$$<br>$$= -\\frac{1}{12}\\sin 6x + \\frac{1}{3}\\tan 3x - \\frac{1}{2}x + C$$"
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "Use the substitution $x = u^6$, where $u > 0$, to find $\\int \\frac{1}{\\sqrt{x} + \\sqrt[3]{x}}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [1, 4, 9],
        answer: "2*sqrt(x) - 3*x^(1/3) + 6*x^(1/6) - 6*ln(x^(1/6) + 1)",
        placeholder: "Indefinite integral in terms of x (omit + C)",
        solution: "Let $x = u^6$ ($u > 0$). Then $\\frac{\\mathrm{d}x}{\\mathrm{d}u} = 6u^5$, $\\sqrt{x} = u^3$, and $\\sqrt[3]{x} = u^2$.<br>$$\\int \\frac{1}{\\sqrt{x} + \\sqrt[3]{x}}\\,\\mathrm{d}x = \\int \\frac{1}{u^3 + u^2} \\cdot 6u^5\\,\\mathrm{d}u = 6\\int \\frac{u^3}{u + 1}\\,\\mathrm{d}u$$<br>By polynomial long division, $\\frac{u^3}{u + 1} = u^2 - u + 1 - \\frac{1}{u + 1}$:<br>$$= 6\\int \\left(u^2 - u + 1 - \\frac{1}{u + 1}\\right)\\mathrm{d}u = 6\\left[\\frac{1}{3}u^3 - \\frac{1}{2}u^2 + u - \\ln(u + 1)\\right] + C$$<br>Substituting $u = x^{1/6}$:<br>$$= 2\\sqrt{x} - 3\\sqrt[3]{x} + 6\\sqrt[6]{x} - 6\\ln(\\sqrt[6]{x} + 1) + C$$"
      }
    ]
  },
  {
    id: "EJC-2025-P1-Q11",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "A cylindrical container of height $h$ metres is originally completely filled with water. The water is flowing out through an opening at the base of the container into a pipe. The rate of flow of water through the opening at time $t$ seconds is proportional to the square root of the height of the water in the container, $y$ metres. Since the container is cylindrical, the amount of water in the container is also proportional to the height of water, so the differential equation relating $y$ and $t$ can be written as $$\\frac{\\mathrm{d}y}{\\mathrm{d}t} = -k\\sqrt{y}$$ where $k$ is a positive constant.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Solve this differential equation to find $\\sqrt{y}$ in terms of $t$, $h$ and $k$.",
        type: "auto",
        mode: "expr",
        vars: { t: [1, 2, 3], h: [4, 9, 16], k: [0.5, 0.2, 0.1] },
        answer: "sqrt(h) - k*t/2",
        placeholder: "Expression for sqrt(y) in terms of t, h and k",
        solution: "Separating variables:<br>$$\\int \\frac{1}{\\sqrt{y}}\\,\\mathrm{d}y = \\int -k\\,\\mathrm{d}t \\implies 2\\sqrt{y} = -kt + C$$<br>When $t = 0$, $y = h$, so $C = 2\\sqrt{h}$.<br>$$2\\sqrt{y} = 2\\sqrt{h} - kt \\implies \\sqrt{y} = \\sqrt{h} - \\frac{kt}{2}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence find the time taken for the container to empty, in terms of $h$ and $k$.",
        type: "auto",
        mode: "expr",
        vars: { h: [4, 9, 16], k: [0.5, 1, 2] },
        answer: "2*sqrt(h)/k",
        placeholder: "Expression in terms of h and k",
        solution: "When the container is empty, $y = 0$:<br>$$\\sqrt{h} - \\frac{kt}{2} = 0 \\implies t = \\frac{2\\sqrt{h}}{k}$$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "It is found that the water was draining too fast. To regulate the flow of water, a mechanical device is placed at the opening. This device slows the flow of water into the pipe by covering all or part of the opening, where the area covered varies with time. It is proposed to model this situation using the revised differential equation $$\\frac{\\mathrm{d}y}{\\mathrm{d}t} = -k\\left(\\frac{1 + \\cos t}{2}\\right)\\sqrt{y},$$ where $k$ is the same constant as before.<br>With reference to the possible values of $\\cos t$, explain how the revised differential equation corresponds to a model with slower flow of water.",
        type: "self",
        solution: "Since $-1 \\le \\cos t \\le 1$, the factor $\\frac{1 + \\cos t}{2}$ satisfies $0 \\le \\frac{1 + \\cos t}{2} \\le 1$.<br>Therefore, the magnitude of the rate of decrease of water height, $\\left|\\frac{\\mathrm{d}y}{\\mathrm{d}t}\\right| = k\\left(\\frac{1 + \\cos t}{2}\\right)\\sqrt{y} \\le k\\sqrt{y}$, is at most the original rate (and strictly less whenever $\\cos t < 1$), so the water flows out more slowly."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Given again that the container is originally completely filled with water, solve the revised differential equation to find $\\sqrt{y}$ in terms of $t$, $h$ and $k$.",
        type: "auto",
        mode: "expr",
        vars: { t: [1, 2, 3], h: [4, 9, 16], k: [0.5, 0.2, 0.1] },
        answer: "sqrt(h) - (k*t + k*sin(t))/4",
        placeholder: "Expression for sqrt(y) in terms of t, h and k",
        solution: "Separating variables:<br>$$\\int \\frac{1}{\\sqrt{y}}\\,\\mathrm{d}y = -\\frac{k}{2}\\int (1 + \\cos t)\\,\\mathrm{d}t$$<br>$$2\\sqrt{y} = -\\frac{k}{2}(t + \\sin t) + D$$<br>When $t = 0$, $y = h$: $2\\sqrt{h} = 0 + D \\implies D = 2\\sqrt{h}$.<br>$$2\\sqrt{y} = 2\\sqrt{h} - \\frac{k}{2}(t + \\sin t) \\implies \\sqrt{y} = \\sqrt{h} - \\frac{kt + k\\sin t}{4}$$"
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "In the case where $h = 10$ and $k = 0.1$, find the ratio of the time taken in the revised model to the time taken in the original model for the container to empty. Give your answer to 3 significant figures.",
        type: "auto",
        mode: "number",
        answer: "1.993555",
        placeholder: "Correct to 3 s.f.",
        solution: "When $h = 10$ and $k = 0.1$:<br>• Original model: $t_1 = \\frac{2\\sqrt{10}}{0.1} = 20\\sqrt{10} \\approx 63.2456\\text{ s}$.<br>• Revised model: setting $y = 0$ gives $\\sqrt{10} - \\frac{0.1(t + \\sin t)}{4} = 0 \\implies t + \\sin t = 40\\sqrt{10}$.<br>From GC, $t_2 \\approx 126.0835\\text{ s}$.<br>Required ratio $= \\frac{126.0835\\ldots}{63.2456\\ldots} = 1.99$ (to 3 s.f.)."
      }
    ]
  }
]);
