window.registerQuestions([
  {
    id: "NYJC-2025-P1-Q1",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "Curve $C$ has equation $y = \\frac{px^2 + qx + r}{x - 1}$, where $p$, $q$ and $r$ are real numbers. Given that $C$ has a turning point at $(3, 7)$ and an oblique asymptote parallel to the line $y = \\frac{3}{2}x + \\sqrt{5}$,",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "find $p$, $q$ and $r$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "p =", answer: "3/2", placeholder: "Exact value" },
          { label: "q =", answer: "-2", exactRequired: true, placeholder: "Integer value" },
          { label: "r =", answer: "13/2", placeholder: "Exact value" }
        ],
        solution: "Since $C$ has an oblique asymptote parallel to $y = \\frac{3}{2}x + \\sqrt{5}$, the gradient of the oblique asymptote is $\\frac{3}{2}$.<br>By long division, $y = px + (p+q) + \\frac{p+q+r}{x-1}$, so $p = \\frac{3}{2} = 1.5$.<br><br>Since $C$ passes through $(3, 7)$:<br>$$7 = \\frac{1.5(3)^2 + q(3) + r}{3 - 1} \\implies 14 = 13.5 + 3q + r \\implies r = 0.5 - 3q$$<br>Thus $y = \\frac{1.5x^2 + qx + 0.5 - 3q}{x - 1}$.<br><br>Differentiating with respect to $x$:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{(3x + q)(x - 1) - (1.5x^2 + qx + 0.5 - 3q)(1)}{(x - 1)^2}$$<br>At the turning point $(3, 7)$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>$$0 = \\frac{(9 + q)(2) - 14}{2^2} \\implies 2(9 + q) - 14 = 0 \\implies q = -2$$<br>Therefore, $r = 0.5 - 3(-2) = 6.5 = \\frac{13}{2}$.<br>Hence $p = \\frac{3}{2}$, $q = -2$, $r = \\frac{13}{2}$."
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q2",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation"],
    stem: "An ornament consists of two identical solid right circular cones whose flat bases are separated by a solid sphere, such that the sphere is in contact with the two bases. The axis passes through the vertex of each cone and the centre of the sphere. It is given that the distance between the vertices of the cones is $2l$, and the radii of the bases of the cones are $\\sqrt{\\frac{3}{2}}\\,l$, where $l$ is a constant.<br>[The volume of a sphere with radius $r$ is given by $V = \\frac{4}{3}\\pi r^3$.]",
    parts: [
      {
        label: "(Full)",
        marks: 6,
        prompt: "Find the radius of the sphere in terms of $l$ if the total volume of the ornament is to be a minimum.",
        type: "auto",
        mode: "expr",
        vars: { l: [1, 2, 5] },
        answer: "l/2",
        placeholder: "Expression in terms of l",
        solutionSvg: `<svg viewBox="0 0 260 270" width="230" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Top cone -->
  <polygon points="110,20 75,100 145,100" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1.6"/>
  <!-- Sphere -->
  <circle cx="110" cy="130" r="30" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.6"/>
  <!-- Bottom cone -->
  <polygon points="110,240 75,160 145,160" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1.6"/>
  <!-- Axis -->
  <line x1="110" y1="12" x2="110" y2="250" stroke-dasharray="4,3" opacity="0.6" stroke-width="1"/>
  <!-- Radius r of sphere -->
  <line x1="110" y1="130" x2="140" y2="130" stroke="#cf5652" stroke-width="1.3"/>
  <text x="122" y="125" stroke="none" fill="#cf5652" font-style="italic">r</text>
  <!-- Height h label -->
  <line x1="62" y1="20" x2="62" y2="100" stroke-width="1" opacity="0.7"/>
  <polyline points="59,25 62,20 65,25" fill="none" stroke-width="1" opacity="0.7"/>
  <polyline points="59,95 62,100 65,95" fill="none" stroke-width="1" opacity="0.7"/>
  <text x="48" y="64" stroke="none" font-style="italic">h</text>
  <!-- Total height 2l label -->
  <line x1="185" y1="20" x2="185" y2="240" stroke-width="1"/>
  <polyline points="182,26 185,20 188,26" fill="none" stroke-width="1"/>
  <polyline points="182,234 185,240 188,234" fill="none" stroke-width="1"/>
  <line x1="110" y1="20" x2="192" y2="20" stroke-dasharray="3,3" opacity="0.4"/>
  <line x1="110" y1="240" x2="192" y2="240" stroke-dasharray="3,3" opacity="0.4"/>
  <text x="193" y="134" stroke="none" font-style="italic">2l</text>
  <!-- Base radius label -->
  <line x1="110" y1="252" x2="145" y2="252" stroke-width="1"/>
  <polyline points="115,249 110,252 115,255" fill="none" stroke-width="1"/>
  <polyline points="140,249 145,252 140,255" fill="none" stroke-width="1"/>
  <text x="112" y="266" stroke="none" font-size="10">√(3/2) l</text>
</svg>`,
        solution: "Let the radius of the sphere be $r$ and the height of each cone be $h$.<br>Since the distance between the vertices of the two cones is $2l$:<br>$$2h + 2r = 2l \\implies h = l - r$$<br>The total volume $V$ of the ornament is:<br>$$V = 2\\left(\\frac{1}{3}\\pi \\left(\\sqrt{\\frac{3}{2}}\\,l\\right)^2 h\\right) + \\frac{4}{3}\\pi r^3 = \\pi l^2 (l - r) + \\frac{4}{3}\\pi r^3$$<br>Differentiating with respect to $r$:<br>$$\\frac{\\mathrm{d}V}{\\mathrm{d}r} = -\\pi l^2 + 4\\pi r^2$$<br>For stationary value, $\\frac{\\mathrm{d}V}{\\mathrm{d}r} = 0$:<br>$$4\\pi r^2 = \\pi l^2 \\implies r^2 = \\frac{l^2}{4}$$<br>Since $r > 0$, $r = \\frac{l}{2}$.<br><br>Checking the second derivative:<br>$$\\frac{\\mathrm{d}^2V}{\\mathrm{d}r^2} = 8\\pi r$$<br>When $r = \\frac{l}{2}$, $\\frac{\\mathrm{d}^2V}{\\mathrm{d}r^2} = 4\\pi l > 0$, so $V$ is a minimum.<br>Hence the radius of the sphere is $\\frac{l}{2}$."
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q3",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "A triangle $ABC$ is such that $AB^2 + BC^2 = AC^2$.<br>By considering $\\mathbf{AB} + \\mathbf{BC} = \\mathbf{AC}$ and using the fact that $|\\mathbf{v}|^2 = \\mathbf{v} \\cdot \\mathbf{v}$ for any vector $\\mathbf{v}$, prove that ∠$ABC$ is a right-angle.",
        type: "self",
        solution: "Since $\\mathbf{AB} + \\mathbf{BC} = \\mathbf{AC}$, taking the squared magnitude of both sides:<br>$$|\\mathbf{AB} + \\mathbf{BC}|^2 = |\\mathbf{AC}|^2$$<br>Using $|\\mathbf{v}|^2 = \\mathbf{v} \\cdot \\mathbf{v}$:<br>$$(\\mathbf{AB} + \\mathbf{BC}) \\cdot (\\mathbf{AB} + \\mathbf{BC}) = \\mathbf{AC} \\cdot \\mathbf{AC}$$<br>$$\\mathbf{AB} \\cdot \\mathbf{AB} + 2(\\mathbf{AB} \\cdot \\mathbf{BC}) + \\mathbf{BC} \\cdot \\mathbf{BC} = \\mathbf{AC} \\cdot \\mathbf{AC}$$<br>$$AB^2 + BC^2 + 2(\\mathbf{AB} \\cdot \\mathbf{BC}) = AC^2$$<br>Since $AB^2 + BC^2 = AC^2$:<br>$$AC^2 + 2(\\mathbf{AB} \\cdot \\mathbf{BC}) = AC^2 \\implies \\mathbf{AB} \\cdot \\mathbf{BC} = 0$$<br>Since $\\mathbf{AB}$ and $\\mathbf{BC}$ are non-zero vectors, $AB$ is perpendicular to $BC$, and hence ∠$ABC = 90^\\circ$ (a right-angle)."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "In a triangle $ABC$, the point $D$ divides $AC$ in the ratio $\\lambda : 1 - \\lambda$, where $0 < \\lambda < 1$.<br>Let the position vectors of $A$, $B$, $C$ and $D$ be denoted by $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$ and $\\mathbf{d}$ respectively.<br>Show that the area of triangle $ABD$ is given by<br>$$k|\\mathbf{a} \\times \\mathbf{b} + \\mathbf{b} \\times \\mathbf{c} + \\mathbf{c} \\times \\mathbf{a}|$$<br>where $k$ is to be determined in terms of $\\lambda$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 130" width="220" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="30,30 210,30 105,110" fill="rgba(91,155,213,0.12)" stroke="#2c2925" stroke-width="1.4"/>
  <line x1="115" y1="30" x2="105" y2="110" stroke="#4a8fe7" stroke-width="1.5"/>
  <text x="20" y="24" stroke="none" font-style="italic">A</text>
  <text x="112" y="22" stroke="none" font-style="italic">D</text>
  <text x="208" y="24" stroke="none" font-style="italic">C</text>
  <text x="100" y="125" stroke="none" font-style="italic">B</text>
  <text x="68" y="23" stroke="none" fill="#4a8fe7" font-style="italic">λ</text>
  <text x="150" y="23" stroke="none" fill="#4a8fe7" font-style="italic">1 − λ</text>
</svg>`,
        solution: "<strong>Method 1 (Ratio Theorem):</strong><br>By the ratio theorem, $\\mathbf{d} = (1 - \\lambda)\\mathbf{a} + \\lambda\\mathbf{c}$.<br>Area of △$ABD$:<br>$$= \\frac{1}{2}|\\mathbf{AB} \\times \\mathbf{BD}| = \\frac{1}{2}|(\\mathbf{b} - \\mathbf{a}) \\times (\\mathbf{d} - \\mathbf{b})|$$<br>$$= \\frac{1}{2}|(\\mathbf{b} - \\mathbf{a}) \\times ((1 - \\lambda)\\mathbf{a} + \\lambda\\mathbf{c} - \\mathbf{b})|$$<br>$$= \\frac{1}{2}|(1 - \\lambda)(\\mathbf{b} \\times \\mathbf{a}) + \\lambda(\\mathbf{b} \\times \\mathbf{c}) - \\lambda(\\mathbf{a} \\times \\mathbf{c}) + \\mathbf{a} \\times \\mathbf{b}|$$<br>Using $\\mathbf{b} \\times \\mathbf{a} = -\\mathbf{a} \\times \\mathbf{b}$ and $-\\mathbf{a} \\times \\mathbf{c} = \\mathbf{c} \\times \\mathbf{a}$:<br>$$= \\frac{1}{2}|(\\lambda - 1)(\\mathbf{a} \\times \\mathbf{b}) + \\lambda(\\mathbf{b} \\times \\mathbf{c}) + \\lambda(\\mathbf{c} \\times \\mathbf{a}) + \\mathbf{a} \\times \\mathbf{b}|$$<br>$$= \\frac{1}{2}|\\lambda(\\mathbf{a} \\times \\mathbf{b}) + \\lambda(\\mathbf{b} \\times \\mathbf{c}) + \\lambda(\\mathbf{c} \\times \\mathbf{a})|$$<br>$$= \\frac{\\lambda}{2}|\\mathbf{a} \\times \\mathbf{b} + \\mathbf{b} \\times \\mathbf{c} + \\mathbf{c} \\times \\mathbf{a}| \\quad (\\text{since } 0 < \\lambda < 1)$$<br><br><strong>Method 2 (Common Height):</strong><br>Since △$ABD$ and △$ABC$ share the same height from $B$ to $AC$:<br>$$\\text{Area of } \\text{triangle } ABD = \\frac{\\lambda}{\\lambda + (1 - \\lambda)} \\left(\\frac{1}{2}|\\mathbf{AB} \\times \\mathbf{AC}|\\right) = \\frac{\\lambda}{2}|(\\mathbf{b} - \\mathbf{a}) \\times (\\mathbf{c} - \\mathbf{a})| = \\frac{\\lambda}{2}|\\mathbf{a} \\times \\mathbf{b} + \\mathbf{b} \\times \\mathbf{c} + \\mathbf{c} \\times \\mathbf{a}|$$<br>Hence $k = \\frac{\\lambda}{2}$."
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q4",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 640 230" width="600" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Panel (a): y = f(x) -->
  <text x="15" y="18" stroke="none" font-weight="bold">(a)</text>
  <!-- Axes -->
  <line x1="25" y1="125" x2="295" y2="125" stroke-width="1.2"/>
  <polyline points="289,122 295,125 289,128" fill="none" stroke-width="1.2"/>
  <line x1="125" y1="210" x2="125" y2="25" stroke-width="1.2"/>
  <polyline points="122,31 125,25 128,31" fill="none" stroke-width="1.2"/>
  <text x="298" y="129" stroke="none" font-style="italic">x</text>
  <text x="122" y="18" stroke="none" font-style="italic">y</text>
  <!-- Curve y = f(x): A(-a,0) at (95,125), B(a,b) at (155,55), D(d,0) at (177,125), C(c,-b) at (205,195), E(e,0) at (240,125) -->
  <path d="M 60,40 C 75,95 83,125 95,125 C 110,125 135,55 155,55 C 170,55 172,100 177,125 C 185,165 194,195 205,195 C 218,195 228,155 240,125 C 252,95 262,70 275,45" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="268" y="40" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>
  <text x="62" y="142" stroke="none">A(−a, 0)</text>
  <text x="148" y="47" stroke="none">B(a, b)</text>
  <text x="146" y="142" stroke="none">D(d, 0)</text>
  <text x="208" y="205" stroke="none">C(c, −b)</text>
  <text x="243" y="142" stroke="none">E(e, 0)</text>

  <!-- Panel (b): y = g(x) -->
  <text x="345" y="18" stroke="none" font-weight="bold">(b)</text>
  <!-- Axes -->
  <line x1="355" y1="110" x2="615" y2="110" stroke-width="1.2"/>
  <polyline points="609,107 615,110 609,113" fill="none" stroke-width="1.2"/>
  <line x1="485" y1="205" x2="485" y2="30" stroke-width="1.2"/>
  <polyline points="482,36 485,30 488,36" fill="none" stroke-width="1.2"/>
  <text x="619" y="114" stroke="none" font-style="italic">x</text>
  <text x="482" y="23" stroke="none" font-style="italic">y</text>
  <!-- Asymptotes x = -n (x=455) and y = -m (y=155) -->
  <line x1="455" y1="35" x2="455" y2="200" stroke-dasharray="4,3" opacity="0.65"/>
  <line x1="355" y1="155" x2="610" y2="155" stroke-dasharray="4,3" opacity="0.65"/>
  <text x="440" y="216" stroke="none" font-style="italic">x = −n</text>
  <text x="545" y="170" stroke="none" font-style="italic">y = −m</text>
  <text x="362" y="103" stroke="none" font-style="italic">y = 0</text>
  <!-- Left branch of y = g(x): below y = -m, down to -inf as x -> -n- -->
  <path d="M 358,159 C 405,161 438,165 446,180 C 450,188 452,198 453,205" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <!-- Right branch of y = g(x): from +inf at x = -n+, through P(0, p) at (485,95), tending to y = 0+ -->
  <path d="M 458,36 C 460,65 468,87 485,95 C 515,105 560,107 608,108" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="485" cy="95" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="492" y="90" stroke="none">P(0, p)</text>
  <text x="558" y="60" stroke="none" fill="#4a8fe7" font-style="italic">y = g(x)</text>
</svg>`,
    stem: "Refer to the diagrams above for parts (a) and (b).",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "The graph of $y = \\mathrm{f}(x)$ has turning points at $A(-a, 0)$, $B(a, b)$ and $C(c, -b)$ and intersects the $x$-axis at the points $D(d, 0)$ and $E(e, 0)$. The graph of $y = \\mathrm{f}(x)$ is as shown in diagram (a) above.<br>Sketch the graph of $y = \\mathrm{f}(a - x)$, labelling the coordinates of the corresponding points of $A$, $B$, $C$, $D$, and $E$ clearly.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 220" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="125" x2="300" y2="125" stroke-width="1.2"/>
  <polyline points="294,122 300,125 294,128" fill="none" stroke-width="1.2"/>
  <line x1="165" y1="210" x2="165" y2="20" stroke-width="1.2"/>
  <polyline points="162,26 165,20 168,26" fill="none" stroke-width="1.2"/>
  <text x="303" y="129" stroke="none" font-style="italic">x</text>
  <text x="162" y="14" stroke="none" font-style="italic">y</text>
  <!-- Reflected and shifted: B'(0,b) at (165,55), A'(2a,0) at (225,125), D'(a-d,0) at (143,125), C'(a-c,-b) at (115,195), E'(a-e,0) at (80,125) -->
  <path d="M 45,45 C 58,70 68,95 80,125 C 92,155 102,195 115,195 C 126,195 135,165 143,125 C 148,100 150,55 165,55 C 185,55 210,125 225,125 C 237,125 245,95 260,40" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="165" cy="55" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="218" y="42" stroke="none" fill="#4a8fe7" font-style="italic">y = f(a − x)</text>
  <text x="26" y="142" stroke="none">E'(a − e, 0)</text>
  <text x="106" y="142" stroke="none">D'(a − d, 0)</text>
  <text x="115" y="210" stroke="none">C'(a − c, −b)</text>
  <text x="122" y="52" stroke="none">B'(0, b)</text>
  <text x="208" y="142" stroke="none">A'(2a, 0)</text>
</svg>`,
        solution: "To obtain $y = \\mathrm{f}(a - x) = \\mathrm{f}(-(x - a))$ from $y = \\mathrm{f}(x)$:<br>1. Translate $a$ units in the negative $x$-direction (or reflect in the $y$-axis first, then translate $a$ units in the positive $x$-direction).<br>Each point $(x, y)$ maps to $(a - x, y)$:<br>• $A(-a, 0) \\implies A'(2a, 0)$ (minimum turning point on $x$-axis)<br>• $B(a, b) \\implies B'(0, b)$ (maximum turning point on $y$-axis)<br>• $C(c, -b) \\implies C'(a - c, -b)$ (minimum turning point)<br>• $D(d, 0) \\implies D'(a - d, 0)$ ($x$-intercept)<br>• $E(e, 0) \\implies E'(a - e, 0)$ ($x$-intercept)."
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "The graph of $y = \\mathrm{g}(x)$ has asymptotes $y = 0$, $y = -m$ and $x = -n$, and intersects the $y$-axis at $P(0, p)$, where $p < m$. The graph of $y = \\mathrm{g}(x)$ is as shown in diagram (b) above.<br>Sketch the graph of $y = |\\mathrm{g}(x)|$, labelling clearly the asymptote(s) and coordinates of $P$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="170" x2="285" y2="170" stroke-width="1.2"/>
  <polyline points="279,167 285,170 279,173" fill="none" stroke-width="1.2"/>
  <line x1="150" y1="195" x2="150" y2="20" stroke-width="1.2"/>
  <polyline points="147,26 150,20 153,26" fill="none" stroke-width="1.2"/>
  <text x="288" y="174" stroke="none" font-style="italic">x</text>
  <text x="147" y="14" stroke="none" font-style="italic">y</text>
  <!-- Asymptotes x = -n (x=120) and y = m (y=105) -->
  <line x1="120" y1="25" x2="120" y2="190" stroke-dasharray="4,3" opacity="0.65"/>
  <line x1="20" y1="105" x2="275" y2="105" stroke-dasharray="4,3" opacity="0.65"/>
  <text x="103" y="204" stroke="none" font-style="italic">x = −n</text>
  <text x="180" y="99" stroke="none" font-style="italic">y = m</text>
  <text x="28" y="164" stroke="none" font-style="italic">y = 0</text>
  <!-- Left branch reflected above x-axis: above y = m, tending to +inf as x -> -n- -->
  <path d="M 22,102 C 70,100 102,94 111,72 C 115,60 117,44 118,30" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <!-- Right branch unchanged: P(0, p) at (150, 145) since p < m -->
  <path d="M 122,30 C 125,85 134,132 150,145 C 178,162 225,166 278,168" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="150" cy="145" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="157" y="143" stroke="none">P(0, p)</text>
  <text x="182" y="55" stroke="none" fill="#4a8fe7" font-style="italic">y = |g(x)|</text>
</svg>`,
        solution: "Keep the portion of $y = \\mathrm{g}(x)$ where $y \\ge 0$ (for $x > -n$), and reflect the portion where $y < 0$ (for $x < -n$) in the $x$-axis.<br>• The horizontal asymptote $y = -m$ reflects to $y = m$.<br>• The vertical asymptote remains $x = -n$, and the right horizontal asymptote remains $y = 0$.<br>• The $y$-intercept remains $P(0, p)$ with $0 < p < m$ (so $P$ lies below $y = m$)."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{g}(|x|)$, labelling clearly the asymptote(s) and coordinates of $P$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 180" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="145" x2="285" y2="145" stroke-width="1.2"/>
  <polyline points="279,142 285,145 279,148" fill="none" stroke-width="1.2"/>
  <line x1="150" y1="170" x2="150" y2="20" stroke-width="1.2"/>
  <polyline points="147,26 150,20 153,26" fill="none" stroke-width="1.2"/>
  <text x="288" y="149" stroke="none" font-style="italic">x</text>
  <text x="147" y="14" stroke="none" font-style="italic">y</text>
  <text x="26" y="138" stroke="none" font-style="italic">y = 0</text>
  <!-- Right side (x >= 0): from P(0, p) at (150, 95) down to y = 0 -->
  <path d="M 150,95 C 165,122 205,138 278,142" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <!-- Left side (x <= 0): reflection of right side in y-axis -->
  <path d="M 150,95 C 135,122 95,138 22,142" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="150" cy="95" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="157" y="92" stroke="none">P(0, p)</text>
  <text x="195" y="55" stroke="none" fill="#4a8fe7" font-style="italic">y = g(|x|)</text>
</svg>`,
        solution: "Remove the portion of $y = \\mathrm{g}(x)$ for $x < 0$. Keep the portion for $x \\ge 0$ and reflect it in the $y$-axis.<br>• The graph is symmetric about the $y$-axis, forming a cusp at $P(0, p)$.<br>• The only asymptote is the horizontal asymptote $y = 0$ (both as $x$ → ∞ and as $x$ → −∞)."
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q5",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "The $n$th term of a series $G$ is given by $g_n = 3n^2 - 17n + 17$, where $n \\ge 1$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Given that $\\sum_{r=1}^{n} r^2 = \\frac{n}{6}(n + 1)(2n + 1)$, find $\\sum_{r=m+1}^{n} g_r$. (You need not simplify your answer.)",
        type: "auto",
        mode: "expr",
        vars: { n: [5, 7, 10], m: [1, 2, 4] },
        answer: "n*(n+1)*(2*n+1)/2 - m*(m+1)*(2*m+1)/2 + 17*(n-m)*(1-m-n)/2",
        placeholder: "Expression in terms of n and m",
        solution: "$$\\sum_{r=m+1}^{n} (3r^2 - 17r + 17) = 3\\sum_{r=m+1}^{n} r^2 + 17\\sum_{r=m+1}^{n} (1 - r)$$<br>$$= 3\\left(\\sum_{r=1}^{n} r^2 - \\sum_{r=1}^{m} r^2\\right) + 17\\sum_{r=m+1}^{n} (1 - r)$$<br>Using the given formula for $\\sum r^2$ and the AP sum formula for $n - m$ terms with first term $-m$ and last term $1 - n$:<br>$$= 3\\left[\\frac{n}{6}(n+1)(2n+1) - \\frac{m}{6}(m+1)(2m+1)\\right] + 17\\left[\\frac{n - m}{2}(-m + 1 - n)\\right]$$<br>$$= \\frac{n}{2}(n+1)(2n+1) - \\frac{m}{2}(m+1)(2m+1) + \\frac{17}{2}(n - m)(1 - m - n)$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "The $n$th term of a series $H$ is given by $h_n = 7(5^{n-3}) + 10$, where $n \\ge 1$.<br>State the smallest number that can be found in both series $H$ and $G$.",
        type: "auto",
        mode: "number",
        answer: "45",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Listing terms using a graphing calculator:<br>• Series $H$: $h_1 = 10.28$, $h_2 = 11.4$, $h_3 = 17$, $h_4 = 45$, $h_5 = 185$, ...<br>• Series $G$: $g_1 = 3$, $g_2 = -5$, $g_3 = -7$, $g_4 = -3$, $g_5 = 7$, $g_6 = 23$, $g_7 = 45$, $g_8 = 73$, ...<br>Note that $17$ is not in $G$ (since $n \\ge 1$; $g_0 = 17$ is excluded).<br>Hence the smallest number found in both series $H$ and $G$ is $45$ (when $n = 4$ in $H$ and $n = 7$ in $G$)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The sum of the first $n$ terms of a series $J$ is given by $\\frac{b}{2}(3^n - 1)$, where $b$ is a positive odd integer.<br>By finding the $n$th term of series $J$, explain why each of the terms in series $J$ is a term of the arithmetic progression with first term $1$ and common difference $2$.",
        type: "self",
        solution: "Let $j_n$ be the $n$th term of series $J$, and $S_n = \\frac{b}{2}(3^n - 1)$.<br>For $n \\ge 2$:<br>$$j_n = S_n - S_{n-1} = \\frac{b}{2}(3^n - 1) - \\frac{b}{2}(3^{n-1} - 1) = \\frac{b}{2}(3^n - 3^{n-1}) = \\frac{b}{2} \\cdot 3^{n-1}(3 - 1) = b \\cdot 3^{n-1}$$<br>For $n = 1$, $j_1 = S_1 = \\frac{b}{2}(3 - 1) = b = b \\cdot 3^{1-1}$, so $j_n = b \\cdot 3^{n-1}$ holds for all $n \\ge 1$.<br><br>Since $b$ is a positive odd integer and $3^{n-1}$ is a positive odd integer for all integers $n \\ge 1$, their product $j_n = b \\cdot 3^{n-1}$ is always a positive odd integer.<br>The arithmetic progression with first term $1$ and common difference $2$ is $1, 3, 5, 7, \\dots$, which is the set of <strong>all</strong> positive odd integers.<br>Therefore, every term of series $J$ is a term of this arithmetic progression."
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q6",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "The points $P$, $Q$ and $R$ representing the complex numbers $p$, $q$ and $r$ on an Argand diagram are such that $\\arg(p) = \\alpha$ and $\\arg(q) = \\beta$, where $0 < \\alpha < \\beta < \\frac{\\pi}{2}$, $\\beta > 2\\alpha$ and $r = p + q$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "If $|p| = |q|$, describe the shape of the quadrilateral $OPRQ$. Hence find $\\arg(r)$ in terms of $\\alpha$ and $\\beta$.",
        type: "self",
        solution: "Since $r = p + q$, $OPRQ$ is a parallelogram. Since $|p| = |q|$, adjacent sides $OP$ and $OQ$ are equal in length, so $OPRQ$ is a <strong>rhombus</strong>.<br><br>In a rhombus, the diagonal $OR$ bisects ∠$POQ$.<br>Since ∠$POQ = \\beta - \\alpha$:<br>$$\\arg(r) = \\alpha + \\frac{1}{2}(\\beta - \\alpha) = \\frac{1}{2}(\\alpha + \\beta)$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "The point $Q'$, representing the complex number $q'$, is the reflection of the point $Q$ in $OP$. State the angle $POQ'$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 190" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="125" x2="255" y2="125" stroke-width="1.2"/>
  <polyline points="249,122 255,125 249,128" fill="none" stroke-width="1.2"/>
  <line x1="65" y1="175" x2="65" y2="20" stroke-width="1.2"/>
  <polyline points="62,26 65,20 68,26" fill="none" stroke-width="1.2"/>
  <text x="259" y="129" stroke="none">Re</text>
  <text x="44" y="25" stroke="none">Im</text>
  <text x="52" y="138" stroke="none" font-style="italic">O</text>
  <!-- Rays OP (angle alpha ~ 22 deg), OQ (angle beta ~ 56 deg), OR, OQ' (angle 2alpha - beta ~ -12 deg -> below Re axis) -->
  <!-- P at (205, 68), Q at (110, 58), R at (250, 11) -> scaled nicely: -->
  <!-- Let O=(65,125). alpha=18 deg, beta=52 deg, 2alpha-beta=-16 deg. -->
  <!-- P=(195, 83), Q=(115, 61), R=(245, 19), Q'=(143, 148) -->
  <line x1="65" y1="125" x2="195" y2="83" stroke="#4a8fe7" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="65" y1="125" x2="115" y2="61" stroke="#4a8fe7" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="65" y1="125" x2="245" y2="19" stroke="#2c2925" stroke-width="1.1" stroke-dasharray="3,3" opacity="0.7"/>
  <line x1="195" y1="83" x2="245" y2="19" stroke="#2c2925" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <line x1="115" y1="61" x2="245" y2="19" stroke="#2c2925" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <line x1="65" y1="125" x2="143" y2="148" stroke="#cf5652" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Points -->
  <circle cx="195" cy="83" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="115" cy="61" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="245" cy="19" r="2.5" fill="#2c2925" stroke="none"/>
  <circle cx="143" cy="148" r="2.5" fill="#cf5652" stroke="none"/>
  <text x="200" y="85" stroke="none" font-style="italic">P</text>
  <text x="102" y="55" stroke="none" font-style="italic">Q</text>
  <text x="249" y="22" stroke="none" font-style="italic">R</text>
  <text x="146" y="160" stroke="none" fill="#cf5652" font-style="italic">Q'</text>
  <!-- Angle arcs -->
  <path d="M 105,125 A 40,40 0 0,0 103,113" fill="none" stroke-width="1"/>
  <text x="110" y="121" stroke="none" font-style="italic">α</text>
  <path d="M 90,125 A 25,25 0 0,0 80,105" fill="none" stroke-width="1"/>
  <text x="86" y="108" stroke="none" font-style="italic">β</text>
  <path d="M 102,125 A 37,37 0 0,1 100,135" fill="none" stroke="#cf5652" stroke-width="1.2"/>
  <text x="104" y="146" stroke="none" fill="#cf5652" font-size="10">β − 2α</text>
</svg>`,
        solution: "Since $Q'$ is the reflection of $Q$ in $OP$, ∠$POQ' = \\text{∠}POQ = \\beta - \\alpha$."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "By leaving your answers in terms of $\\alpha$, $\\beta$ and $|q|$ where applicable, hence, or otherwise, find the argument of the complex number $q'$.",
        type: "self",
        solution: "Since $\\beta > 2\\alpha$, $Q'$ lies in the fourth quadrant below the positive real axis at an angle of $\\beta - 2\\alpha$ clockwise from the positive real axis.<br>$$\\arg(q') = \\alpha - (\\beta - \\alpha) = 2\\alpha - \\beta = -(\\beta - 2\\alpha)$$"
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Find the real and imaginary parts of $q'$ and write down $q'$ in $a + \\mathrm{i}b$ form.",
        type: "self",
        solution: "Since reflection preserves distance from the origin, $|q'| = |q|$.<br>Using $q' = |q'|(\\cos(\\arg(q')) + \\mathrm{i}\\sin(\\arg(q')))$:<br>• Real part of $q' = |q|\\cos(2\\alpha - \\beta) = |q|\\cos(\\beta - 2\\alpha)$<br>• Imaginary part of $q' = |q|\\sin(2\\alpha - \\beta) = -|q|\\sin(\\beta - 2\\alpha)$<br><br>Hence:<br>$$q' = |q|\\cos(2\\alpha - \\beta) + \\mathrm{i}|q|\\sin(2\\alpha - \\beta) \\quad \\text{or} \\quad |q|\\cos(\\beta - 2\\alpha) - \\mathrm{i}|q|\\sin(\\beta - 2\\alpha)$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q7",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Use the substitution $x = \\sin^2\\theta$, where $0 \\le \\theta \\le \\frac{\\pi}{2}$, to find $\\int_0^{\\frac{1}{2}} \\sqrt{\\frac{16x}{1 - x}}\\,\\mathrm{d}x$ exactly.",
        type: "auto",
        mode: "number",
        answer: "pi - 2",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solution: "Let $x = \\sin^2\\theta$, so $\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = 2\\sin\\theta\\cos\\theta$.<br>When $x = 0$, $\\theta = 0$. When $x = \\frac{1}{2}$, $\\sin^2\\theta = \\frac{1}{2} \\implies \\theta = \\frac{\\pi}{4}$ (since $0 \\le \\theta \\le \\frac{\\pi}{2}$).<br><br>$$\\int_0^{\\frac{1}{2}} \\sqrt{\\frac{16x}{1 - x}}\\,\\mathrm{d}x = \\int_0^{\\frac{\\pi}{4}} \\sqrt{\\frac{16\\sin^2\\theta}{1 - \\sin^2\\theta}}\\, (2\\sin\\theta\\cos\\theta)\\,\\mathrm{d}\\theta$$<br>$$= \\int_0^{\\frac{\\pi}{4}} \\frac{4\\sin\\theta}{\\cos\\theta} (2\\sin\\theta\\cos\\theta)\\,\\mathrm{d}\\theta \\quad \\left(\\text{since } 0 \\le \\theta \\le \\frac{\\pi}{2},\\; \\sin\\theta \\ge 0,\\; \\cos\\theta \\ge 0\\right)$$<br>$$= \\int_0^{\\frac{\\pi}{4}} 8\\sin^2\\theta\\,\\mathrm{d}\\theta = 4\\int_0^{\\frac{\\pi}{4}} (1 - \\cos 2\\theta)\\,\\mathrm{d}\\theta$$<br>$$= \\left[4\\theta - 2\\sin 2\\theta\\right]_0^{\\frac{\\pi}{4}} = \\left(\\pi - 2\\sin\\frac{\\pi}{2}\\right) - 0 = \\pi - 2$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find $\\int_a^b \\frac{|x - 1|}{\\sqrt{\\frac{1}{2}x^2 - x + 1}}\\,\\mathrm{d}x$ in terms of $a$ and $b$, where $a < 1 < b$.",
        type: "auto",
        mode: "expr",
        vars: { a: [-2, 0, -1], b: [2, 4, 3] },
        answer: "-2*sqrt(2) + 2*sqrt(a^2/2 - a + 1) + 2*sqrt(b^2/2 - b + 1)",
        placeholder: "Expression in terms of a and b",
        solution: "Since $a < 1 < b$, split the integral at $x = 1$:<br>• For $a \\le x \\le 1$, $|x - 1| = -(x - 1)$.<br>• For $1 \\le x \\le b$, $|x - 1| = x - 1$.<br><br>Note that $\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\frac{1}{2}x^2 - x + 1\\right) = x - 1$. Thus:<br>$$\\int_a^b \\frac{|x - 1|}{\\sqrt{\\frac{1}{2}x^2 - x + 1}}\\,\\mathrm{d}x = -\\int_a^1 \\frac{x - 1}{\\sqrt{\\frac{1}{2}x^2 - x + 1}}\\,\\mathrm{d}x + \\int_1^b \\frac{x - 1}{\\sqrt{\\frac{1}{2}x^2 - x + 1}}\\,\\mathrm{d}x$$<br>$$= -\\left[2\\left(\\frac{1}{2}x^2 - x + 1\\right)^{\\frac{1}{2}}\\right]_a^1 + \\left[2\\left(\\frac{1}{2}x^2 - x + 1\\right)^{\\frac{1}{2}}\\right]_1^b$$<br>$$= -\\left[2\\left(\\frac{1}{2}\\right)^{\\frac{1}{2}} - 2\\sqrt{\\frac{1}{2}a^2 - a + 1}\\right] + \\left[2\\sqrt{\\frac{1}{2}b^2 - b + 1} - 2\\left(\\frac{1}{2}\\right)^{\\frac{1}{2}}\\right]$$<br>$$= -2\\sqrt{2} + 2\\sqrt{\\frac{1}{2}a^2 - a + 1} + 2\\sqrt{\\frac{1}{2}b^2 - b + 1}$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q8",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "A sequence is such that $u_{n+1} = u_n + 1.5$, for $n = 1, 2, 3, \\dots$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Given that $u_{50} = 99u_1$, show that $u_1 = 0.75$.",
        type: "self",
        solution: "The sequence is an arithmetic progression with common difference $d = 1.5$.<br>$$u_{50} = u_1 + 49(1.5) = u_1 + 73.5$$<br>Given $u_{50} = 99u_1$:<br>$$99u_1 = u_1 + 73.5 \\implies 98u_1 = 73.5 \\implies u_1 = \\frac{73.5}{98} = 0.75 \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the least value of $n$ such that $u_2 + u_4 + u_6 + \\dots + u_{2n}$ is more than $2025$.",
        type: "auto",
        mode: "number",
        answer: "37",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "$u_2, u_4, u_6, \\dots, u_{2n}$ is an arithmetic progression of $n$ terms with:<br>• First term $u_2 = 0.75 + 1.5 = 2.25$<br>• Common difference $2(1.5) = 3$<br><br>$$u_2 + u_4 + \\dots + u_{2n} = \\frac{n}{2}\\left[2(2.25) + (n - 1)(3)\\right] = \\frac{n}{2}(1.5 + 3n)$$<br>Solving $\\frac{n}{2}(1.5 + 3n) > 2025$ using GC:<br>• When $n = 36$, sum $= 1971 \\le 2025$.<br>• When $n = 37$, sum $= 2081.25 > 2025$.<br>Hence the least value of $n$ is $37$."
      },
      {
        label: "(c)(i)",
        marks: 2,
        prompt: "It is given that $u_{25}$, $u_k$ and $u_5$ are the first three terms of a geometric progression.<br>Find $k$.",
        type: "auto",
        mode: "number",
        answer: "11",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Since $u_{25}$, $u_k$ and $u_5$ are consecutive terms of a GP:<br>$$u_k^2 = u_{25} \\cdot u_5$$<br>Calculating $u_{25} = 0.75 + 24(1.5) = 36.75$ and $u_5 = 0.75 + 4(1.5) = 6.75$:<br>$$u_k^2 = 36.75 \\times 6.75 = 248.0625$$<br>Since all terms $u_n > 0$:<br>$$u_k = \\sqrt{248.0625} = 15.75$$<br>$$0.75 + (k - 1)(1.5) = 15.75 \\implies 1.5(k - 1) = 15 \\implies k = 11$$"
      },
      {
        label: "(c)(ii)",
        marks: 2,
        prompt: "Find the sum of the first $13$ terms of the geometric series, giving your answer to $3$ decimal places.",
        type: "auto",
        mode: "number",
        answer: "36.75*(1-(3/7)^13)/(1-3/7)",
        dp: 3,
        placeholder: "Correct to 3 decimal places",
        solution: "The GP has first term $a = u_{25} = 36.75$ and common ratio $r = \\frac{u_{11}}{u_{25}} = \\frac{15.75}{36.75} = \\frac{3}{7}$.<br>$$S_{13} = \\frac{36.75\\left(1 - \\left(\\frac{3}{7}\\right)^{13}\\right)}{1 - \\frac{3}{7}} = 64.31144\\dots \\approx 64.311 \\quad (3\\text{ d.p.})$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q9",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $$\\mathrm{f}(x) = \\frac{x + 1}{2x - 3} \\quad \\text{for } x \\in \\mathbb{R},\\; x \\ne k.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State the value of $k$ and explain why this value has to be excluded from the domain of $\\mathrm{f}$.",
        type: "self",
        solution: "$k = \\frac{3}{2}$.<br>When $x = \\frac{3}{2}$, the denominator $2x - 3 = 0$, so $\\mathrm{f}(x)$ is undefined."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Determine, with a reason, if $\\mathrm{f}^2$ exists.",
        type: "self",
        solution: "We have $\\mathrm{D_f} = \\mathbb{R} \\setminus \\left\\{\\frac{3}{2}\\right\\}$ and $\\mathrm{R_f} = \\mathbb{R} \\setminus \\left\\{\\frac{1}{2}\\right\\}$.<br>Since $\\frac{3}{2} \\in \\mathrm{R_f}$ but $\\frac{3}{2} \\notin \\mathrm{D_f}$, we have $\\mathrm{R_f} \\not\\subseteq \\mathrm{D_f}$.<br>Therefore, $\\mathrm{f}^2$ does not exist."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find $\\mathrm{f}^{-1}(x)$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 5] },
        answer: "(3*x+1)/(2*x-1)",
        placeholder: "Expression in terms of x",
        solution: "Let $y = \\frac{x + 1}{2x - 3}$:<br>$$(2x - 3)y = x + 1$$<br>$$2xy - 3y = x + 1$$<br>$$x(2y - 1) = 3y + 1 \\implies x = \\frac{3y + 1}{2y - 1}$$<br>Hence $\\mathrm{f}^{-1}(x) = \\frac{3x + 1}{2x - 1}$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Hence find $\\mathrm{h}(x)$ for which $\\mathrm{fh}(x) = \\frac{3x - 7}{2x - 1}$, $x \\ne \\frac{1}{2}$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 5] },
        answer: "(11*x-22)/(4*x-13)",
        placeholder: "Expression in terms of x",
        solution: "Applying $\\mathrm{f}^{-1}$ to both sides of $\\mathrm{fh}(x) = \\frac{3x - 7}{2x - 1}$:<br>$$\\mathrm{h}(x) = \\mathrm{f}^{-1}\\left(\\frac{3x - 7}{2x - 1}\\right) = \\frac{3\\left(\\frac{3x - 7}{2x - 1}\\right) + 1}{2\\left(\\frac{3x - 7}{2x - 1}\\right) - 1}$$<br>Multiplying numerator and denominator by $(2x - 1)$:<br>$$\\mathrm{h}(x) = \\frac{3(3x - 7) + (2x - 1)}{2(3x - 7) - (2x - 1)} = \\frac{9x - 21 + 2x - 1}{6x - 14 - 2x + 1} = \\frac{11x - 22}{4x - 13}$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q10",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Maclaurin Series", "Integration"],
    stem: "In this question you may use expansions from the List of Formulae (MF27).",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find the Maclaurin expansion of $\\cos(t^3)$ in ascending powers of $t$, up to and including the term in $t^{12}$.<br>Hence, find the Maclaurin series of $\\int_0^x t^2\\cos(t^3)\\,\\mathrm{d}t$ up to and including the term in $x^{15}$ given that $x$ is small.",
        type: "self",
        solution: "Using the standard Maclaurin series for $\\cos u$ with $u = t^3$:<br>$$\\cos(t^3) = 1 - \\frac{(t^3)^2}{2!} + \\frac{(t^3)^4}{4!} + \\dots = 1 - \\frac{t^6}{2} + \\frac{t^{12}}{24} + \\dots$$<br><br>Hence, for small $x$:<br>$$\\int_0^x t^2\\cos(t^3)\\,\\mathrm{d}t \\approx \\int_0^x t^2\\left(1 - \\frac{t^6}{2} + \\frac{t^{12}}{24}\\right)\\mathrm{d}t = \\int_0^x \\left(t^2 - \\frac{t^8}{2} + \\frac{t^{14}}{24}\\right)\\mathrm{d}t$$<br>$$= \\left[\\frac{t^3}{3} - \\frac{t^9}{18} + \\frac{t^{15}}{360}\\right]_0^x = \\frac{x^3}{3} - \\frac{x^9}{18} + \\frac{x^{15}}{360}$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Use your expansion from part (a) to find an approximate value for $\\int_0^{0.1} t^2\\cos(t^3)\\,\\mathrm{d}t$, correct to $5$ decimal places.",
        type: "auto",
        mode: "number",
        answer: "0.1^3/3 - 0.1^9/18 + 0.1^15/360",
        dp: 5,
        placeholder: "Correct to 5 decimal places",
        solution: "Substituting $x = 0.1$ into the expansion from (a):<br>$$\\int_0^{0.1} t^2\\cos(t^3)\\,\\mathrm{d}t \\approx \\frac{0.1^3}{3} - \\frac{0.1^9}{18} + \\frac{0.1^{15}}{360} = 0.00033333\\dots \\approx 0.00033 \\quad (5\\text{ d.p.})$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find $\\int_0^x t^2\\cos(t^3)\\,\\mathrm{d}t$ in terms of $x$. Hence evaluate $\\int_0^{0.1} t^2\\cos(t^3)\\,\\mathrm{d}t$, correct to $5$ decimal places.",
        type: "self",
        solution: "Since $\\frac{\\mathrm{d}}{\\mathrm{d}t}(t^3) = 3t^2$:<br>$$\\int_0^x t^2\\cos(t^3)\\,\\mathrm{d}t = \\frac{1}{3}\\left[\\sin(t^3)\\right]_0^x = \\frac{1}{3}\\sin(x^3)$$<br>When $x = 0.1$:<br>$$\\int_0^{0.1} t^2\\cos(t^3)\\,\\mathrm{d}t = \\frac{1}{3}\\sin(0.1^3) = 0.00033333\\dots \\approx 0.00033 \\quad (5\\text{ d.p.})$$"
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Comparing your answers to parts (b) and (c), and with reference to the value of $x$, comment on the accuracy of your approximations.",
        type: "self",
        solution: "Both answers are identical to $5$ decimal places ($0.00033$). The approximation is very accurate because $x = 0.1$ is very close to $0$ (so higher-order terms in $x$ are negligible)."
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q11",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Integration"],
    stem: "The curve $C$ has equation $x^2 - y^2 = 16$, where $y \\ge 0$. The line $L$ has equation $y = -\\frac{1}{2}x + \\frac{11}{2}$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the area enclosed by $C$, $L$ and the line $x = 8$.",
        type: "auto",
        mode: "number",
        answer: "8.47232719",
        placeholder: "Correct to 3 s.f.",
        solutionSvg: `<svg viewBox="0 0 320 200" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: O at (30, 170), scale x: 22px/unit, y: 20px/unit -->
  <line x1="20" y1="170" x2="300" y2="170" stroke-width="1.2"/>
  <polyline points="294,167 300,170 294,173" fill="none" stroke-width="1.2"/>
  <line x1="30" y1="185" x2="30" y2="15" stroke-width="1.2"/>
  <polyline points="27,21 30,15 33,21" fill="none" stroke-width="1.2"/>
  <text x="303" y="174" stroke="none" font-style="italic">x</text>
  <text x="27" y="11" stroke="none" font-style="italic">y</text>
  <text x="18" y="182" stroke="none" font-style="italic">O</text>
  <!-- Shaded area between C and L from x=5 (140) to x=8 (206) -->
  <!-- C: x=4(118,170), x=5(140,110), x=6(162,80.6), x=7(184,55.1), x=8(206,31.4) -->
  <!-- L: x=0(30,60), x=5(140,110), x=8(206,140), x=11(272,170) -->
  <path d="M 140,110 Q 170,70 206,31.4 L 206,140 L 140,110 Z" fill="rgba(91,155,213,0.22)" stroke="none"/>
  <!-- Curve C (x >= 4) -->
  <path d="M 118,170 Q 124,135 140,110 Q 170,70 218,19" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <!-- Line L -->
  <line x1="30" y1="60" x2="272" y2="170" stroke="#cf5652" stroke-width="1.5"/>
  <!-- Line x = 8 -->
  <line x1="206" y1="20" x2="206" y2="170" stroke-dasharray="4,3" opacity="0.65"/>
  <!-- Points -->
  <circle cx="140" cy="110" r="2.5" fill="#2c2925" stroke="none"/>
  <text x="112" y="102" stroke="none">(5, 3)</text>
  <text x="114" y="183" stroke="none">4</text>
  <text x="136" y="183" stroke="none">5</text>
  <text x="202" y="183" stroke="none">8</text>
  <text x="266" y="183" stroke="none">11</text>
  <text x="220" y="25" stroke="none" fill="#4a8fe7" font-style="italic">C</text>
  <text x="242" y="152" stroke="none" fill="#cf5652" font-style="italic">L</text>
</svg>`,
        solution: "Since $y \\ge 0$, $C$ has equation $y = \\sqrt{x^2 - 16}$.<br>Intersection of $C$ and $L$ for $x > 0$:<br>$$x^2 - \\left(-\\frac{1}{2}x + \\frac{11}{2}\\right)^2 = 16 \\implies 3x^2 + 22x - 185 = 0 \\implies (x - 5)(3x + 37) = 0$$<br>Since $x > 0$, $x = 5$ and $y = 3$, i.e. they intersect at $(5, 3)$.<br><br>Area required:<br>$$\\int_5^8 \\left[\\sqrt{x^2 - 16} - \\left(-\\frac{1}{2}x + \\frac{11}{2}\\right)\\right]\\mathrm{d}x = 8.4723\\dots \\approx 8.47 \\text{ units}^2$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "For $x > 0$, the region bounded by $C$, $L$ and the $x$-axis is rotated about the $x$-axis through $2\\pi$ radians.<br>Find the exact volume generated.",
        type: "auto",
        mode: "number",
        answer: "67*pi/3",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solution: "The curve $C$ meets the positive $x$-axis at $(4, 0)$, the line $L$ meets the $x$-axis at $(11, 0)$, and $C$ meets $L$ at $(5, 3)$.<br>Splitting at $x = 5$, the volume from $x = 5$ to $x = 11$ is a cone of radius $3$ and height $11 - 5 = 6$:<br>$$V = \\pi\\int_4^5 (x^2 - 16)\\,\\mathrm{d}x + \\frac{1}{3}\\pi(3)^2(6)$$<br>$$= \\pi\\left[\\frac{x^3}{3} - 16x\\right]_4^5 + 18\\pi$$<br>$$= \\pi\\left[-\\frac{115}{3} - \\left(-\\frac{128}{3}\\right)\\right] + 18\\pi = \\frac{13}{3}\\pi + 18\\pi = \\frac{67}{3}\\pi \\text{ units}^3$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The region bounded by $C$, the line $x = 5$ and the $x$-axis is rotated about the $y$-axis through $2\\pi$ radians.<br>Find the exact volume generated.",
        type: "auto",
        mode: "number",
        answer: "18*pi",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solution: "For $x \\in [4, 5]$, $y$ ranges from $0$ to $3$, and $x^2 = y^2 + 16$.<br>The volume generated is a cylinder of radius $5$ and height $3$ minus the volume generated by $C$:<br>$$V = \\pi(5)^2(3) - \\pi\\int_0^3 (y^2 + 16)\\,\\mathrm{d}y$$<br>$$= 75\\pi - \\pi\\left[\\frac{y^3}{3} + 16y\\right]_0^3 = 75\\pi - \\pi(9 + 48) = 75\\pi - 57\\pi = 18\\pi \\text{ units}^3$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P1-Q12",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "Scientists are studying the growth of a newly discovered biomass that entered Earth's atmosphere together with an asteroid. A sample of $100$ grams of the biomass was collected initially. It was found that on the next day, the sample grew to $110$ grams. The scientists observed that the rate of growth of biomass was proportional to the amount of biomass present. The amount of biomass at time $t$ days is denoted by $B$ grams.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Write down a differential equation relating $B$ and $t$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}B}{\\mathrm{d}t} = kB, \\quad \\text{where } k \\in \\mathbb{R} \\; (k > 0)$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Solve the differential equation obtained in part (a), expressing $B$ in terms of $t$.",
        type: "auto",
        mode: "expr",
        vars: { t: [0, 1, 5] },
        answer: "100*(11/10)^t",
        placeholder: "Expression in terms of t (RHS only)",
        solution: "Separating variables:<br>$$\\int \\frac{1}{B}\\,\\mathrm{d}B = \\int k\\,\\mathrm{d}t$$<br>$$\\ln B = kt + C \\quad (\\text{since } B > 0)$$<br>$$B = \\mathrm{e}^{kt+C} = D\\mathrm{e}^{kt}$$<br>When $t = 0$, $B = 100 \\implies D = 100$.<br>When $t = 1$, $B = 110 \\implies 110 = 100\\mathrm{e}^k \\implies k = \\ln\\frac{11}{10}$.<br><br>Hence $B = 100\\mathrm{e}^{t\\ln\\frac{11}{10}} = 100\\left(\\frac{11}{10}\\right)^t$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Sketch the graph of $B$ against $t$, and explain what would happen if the biomass was left on its own.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 190" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="30" y1="160" x2="240" y2="160" stroke-width="1.2"/>
  <polyline points="234,157 240,160 234,163" fill="none" stroke-width="1.2"/>
  <line x1="45" y1="175" x2="45" y2="20" stroke-width="1.2"/>
  <polyline points="42,26 45,20 48,26" fill="none" stroke-width="1.2"/>
  <text x="244" y="164" stroke="none" font-style="italic">t</text>
  <text x="32" y="24" stroke="none" font-style="italic">B</text>
  <text x="32" y="173" stroke="none" font-style="italic">O</text>
  <!-- Exponential curve starting at (45, 130) representing B=100 -->
  <path d="M 45,130 C 95,126 145,105 205,28" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="45" cy="130" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="16" y="133" stroke="none">100</text>
  <text x="148" y="45" stroke="none" fill="#4a8fe7" font-style="italic">B = 100(1.1)ᵗ</text>
</svg>`,
        solution: "The graph is an increasing exponential curve starting at $(0, 100)$ for $t \\ge 0$.<br>If the biomass were left on its own, it would grow indefinitely without bound (as $t$ → ∞, $B$ → ∞)."
      },
      {
        label: "(d)",
        marks: 5,
        prompt: "To limit the growth of the biomass, the scientist collected a second sample of $100$ grams of the biomass and introduced a nutrient depletion serum to the sample the moment it was collected. The rate of growth of the biomass for this second sample is modelled by the differential equation $$\\frac{\\mathrm{d}B}{\\mathrm{d}t} = \\frac{mB}{3 + 2t^2}$$ where $m$ is a constant. After $1$ day, the second sample grew to $101$ grams.<br>For this second sample, find $B$ in terms of $t$.",
        type: "self",
        solution: "Separating variables:<br>$$\\int \\frac{1}{B}\\,\\mathrm{d}B = \\int \\frac{m}{3 + 2t^2}\\,\\mathrm{d}t = \\frac{m}{2}\\int \\frac{1}{\\frac{3}{2} + t^2}\\,\\mathrm{d}t$$<br>$$\\ln B = \\frac{m}{2} \\cdot \\sqrt{\\frac{2}{3}}\\tan^{-1}\\left(\\sqrt{\\frac{2}{3}}\\,t\\right) + C = \\frac{m}{\\sqrt{6}}\\tan^{-1}\\left(\\sqrt{\\frac{2}{3}}\\,t\\right) + C$$<br>$$B = D\\mathrm{e}^{\\frac{m}{\\sqrt{6}}\\tan^{-1}\\left(\\sqrt{\\frac{2}{3}}\\,t\\right)}$$<br>When $t = 0$, $B = 100 \\implies D = 100$.<br>When $t = 1$, $B = 101$:<br>$$101 = 100\\mathrm{e}^{\\frac{m}{\\sqrt{6}}\\tan^{-1}\\left(\\sqrt{\\frac{2}{3}}\\right)} \\implies \\frac{m}{\\sqrt{6}} = \\frac{\\ln(1.01)}{\\tan^{-1}\\left(\\sqrt{\\frac{2}{3}}\\right)} = 0.014532\\dots$$<br>(so $m = 0.03559595\\dots$).<br>Hence:<br>$$B = 100\\mathrm{e}^{0.0145\\tan^{-1}\\left(\\sqrt{\\frac{2}{3}}\\,t\\right)} \\quad \\left(\\text{exact: } B = 100\\mathrm{e}^{\\frac{\\ln(1.01)}{\\tan^{-1}(\\sqrt{2/3})}\\tan^{-1}(\\sqrt{2/3}\\,t)}\\right)$$"
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "Determine the amount of the second biomass sample after a long time, leaving your answer to $5$ decimal places.",
        type: "auto",
        mode: "number",
        answer: "100*e^(ln(1.01)/atan(sqrt(2/3))*pi/2)",
        dp: 5,
        placeholder: "Correct to 5 decimal places",
        solution: "As $t$ → ∞, $\\tan^{-1}\\left(\\sqrt{\\frac{2}{3}}\\,t\\right)$ → $\\frac{\\pi}{2}$.<br>Therefore:<br>$$B \\text{ approaches } 100\\mathrm{e}^{0.014532\\left(\\frac{\\pi}{2}\\right)} = 102.30893\\text{ grams} \\quad (5\\text{ d.p.})$$"
      }
    ]
  }
]);
