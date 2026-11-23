window.registerQuestions([
  {
    id: "YIJC-2025-P2-Q1",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Vectors"],
    stem: "",
    parts: [
      {
        label: "(Full)",
        marks: 3,
        prompt: "The acute angle between two non-zero vectors $\\mathbf{a}$ and $\\mathbf{b}$ is $\\alpha$ radians, and the vectors $\\mathbf{b}$ and $2\\mathbf{a} - \\mathbf{b}$ are perpendicular. Find the value of $\\alpha$ if $|\\mathbf{b}| = \\sqrt{2}|\\mathbf{a}|$.",
        type: "auto",
        mode: "number",
        answer: "pi/4",
        placeholder: "Exact or 3 s.f. (radians)",
        solution: "Since $\\mathbf{b}$ is perpendicular to $2\\mathbf{a} - \\mathbf{b}$:<br>$$\\mathbf{b} \\cdot (2\\mathbf{a} - \\mathbf{b}) = 0$$<br>$$2\\mathbf{a} \\cdot \\mathbf{b} - |\\mathbf{b}|^2 = 0$$<br>$$2|\\mathbf{a}||\\mathbf{b}|\\cos\\alpha - |\\mathbf{b}|^2 = 0$$<br>Substituting $|\\mathbf{a}| = \\frac{|\\mathbf{b}|}{\\sqrt{2}}$ (since $|\\mathbf{b}| \\ne 0$):<br>$$2\\left(\\frac{|\\mathbf{b}|}{\\sqrt{2}}\\right)|\\mathbf{b}|\\cos\\alpha - |\\mathbf{b}|^2 = 0$$<br>$$\\sqrt{2}\\cos\\alpha = 1 \\implies \\cos\\alpha = \\frac{1}{\\sqrt{2}}$$<br>Since $\\alpha$ is acute, $\\alpha = \\frac{\\pi}{4}$."
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q2",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong><br><br>It is given that $z = \\sqrt{3} - \\mathrm{i}$ and $w = 2\\mathrm{i}z$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the modulus and argument of $z$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "|z| =", answer: "2", exactRequired: true, placeholder: "Exact value" },
          { label: "arg(z) =", answer: "-pi/6", exactRequired: true, placeholder: "Exact value in radians" }
        ],
        solution: "$$|z| = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2$$<br>Since $z = \\sqrt{3} - \\mathrm{i}$ lies in the fourth quadrant:<br>$$\\arg(z) = -\\tan^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) = -\\frac{\\pi}{6}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Deduce the modulus and argument of $w$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "|w| =", answer: "4", exactRequired: true, placeholder: "Exact value" },
          { label: "arg(w) =", answer: "pi/3", exactRequired: true, placeholder: "Exact value in radians" }
        ],
        solution: "Since $w = 2\\mathrm{i}z$:<br>$$|w| = |2\\mathrm{i}||z| = 2 \\times 2 = 4$$<br>$$\\arg(w) = \\arg(2\\mathrm{i}) + \\arg(z) = \\frac{\\pi}{2} + \\left(-\\frac{\\pi}{6}\\right) = \\frac{\\pi}{3}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "$O$, $A$, $B$ and $C$ represent the complex numbers $0$, $z$, $z + w$ and $w$ respectively.<br><br>Illustrate these four points on a single diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 200" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: origin at (70, 135), scale 30 px/unit -->
          <line x1="20" y1="135" x2="245" y2="135" stroke-width="1.2"/>
          <polyline points="239,131 245,135 239,139" fill="none" stroke-width="1.2"/>
          <text x="234" y="150" stroke="none">Re</text>
          <line x1="70" y1="190" x2="70" y2="12" stroke-width="1.2"/>
          <polyline points="66,18 70,12 74,18" fill="none" stroke-width="1.2"/>
          <text x="48" y="21" stroke="none">Im</text>
          <text x="57" y="147" stroke="none" font-style="italic">O</text>
          <!-- Right angle marker at O between OA and OC -->
          <polyline points="78.7,140 83.7,131.3 75,126.3" fill="none" stroke="#2c2925" stroke-width="1"/>
          <!-- Rectangle OABC -->
          <polygon points="70,135 122,165 182,61.1 130,31.1" fill="rgba(91,155,213,0.14)" stroke="#4a8fe7" stroke-width="1.6" stroke-dasharray="4,3"/>
          <line x1="70" y1="135" x2="122" y2="165" stroke="#4a8fe7" stroke-width="1.8"/>
          <line x1="70" y1="135" x2="130" y2="31.1" stroke="#4a8fe7" stroke-width="1.8"/>
          <!-- Points -->
          <circle cx="70" cy="135" r="2.8" fill="#4a8fe7" stroke="none"/>
          <circle cx="122" cy="165" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="126" y="177" stroke="none" font-style="italic">A (z)</text>
          <circle cx="130" cy="31.1" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="136" y="31" stroke="none" font-style="italic">C (w)</text>
          <circle cx="182" cy="61.1" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="188" y="65" stroke="none" font-style="italic">B (z + w)</text>
        </svg>`,
        solution: "• $O$ is at the origin $(0, 0)$.<br>• $A$ represents $z = \\sqrt{3} - \\mathrm{i}$ in the fourth quadrant with $OA = 2$ and $\\arg(z) = -\\frac{\\pi}{6}$.<br>• $C$ represents $w = 2 + 2\\sqrt{3}\\mathrm{i}$ in the first quadrant with $OC = 4 = 2OA$ and $\\arg(w) = \\frac{\\pi}{3}$.<br>• Since $B$ represents $z + w$, $OABC$ is a parallelogram with ∠$AOC = \\frac{\\pi}{3} - \\left(-\\frac{\\pi}{6}\\right) = \\frac{\\pi}{2}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Identify the shape of the quadrilateral $OABC$ and state its area.",
        type: "self",
        solution: "Since $B$ represents $z + w$, $OABC$ is a parallelogram. Furthermore, ∠$AOC = \\frac{\\pi}{2}$ and $OA = 2 \\ne OC = 4$.<br>Hence $OABC$ is a <strong>rectangle</strong>.<br>Area of $OABC = OA \\times OC = 2 \\times 4 = 8$ units$^2$."
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q3",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    stem: "A closed cylindrical tank with radius $r\\text{ m}$ and height $h\\text{ m}$ is to be constructed to hold $1000\\text{ m}^3$ of water. The material for the base and lid costs SGD 50 per $\\text{m}^2$, while the material for the curved surface costs SGD 30 per $\\text{m}^2$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that the total cost $C$ (in dollars) can be expressed as $C = 100\\pi r^2 + \\frac{60000}{r}$.",
        type: "self",
        solution: "Volume of cylinder: $\\pi r^2 h = 1000 \\implies h = \\frac{1000}{\\pi r^2}$.<br>Total cost:<br>$$C = 50(2\\pi r^2) + 30(2\\pi r h) = 100\\pi r^2 + 60\\pi r\\left(\\frac{1000}{\\pi r^2}\\right) = 100\\pi r^2 + \\frac{60000}{r} \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Use differentiation to find the exact radius of the cylinder for which $C$ is minimum. State the minimum cost.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Exact radius r (m) =", answer: "(300/pi)^(1/3)", exactRequired: true, placeholder: "Exact value in terms of pi" },
          { label: "Minimum cost (SGD) =", answer: "100*pi*(300/pi)^(2/3) + 60000/(300/pi)^(1/3)", dp: 2, placeholder: "Value to 2 d.p." }
        ],
        solution: "$$\\frac{\\mathrm{d}C}{\\mathrm{d}r} = 200\\pi r - \\frac{60000}{r^2}$$<br>Setting $\\frac{\\mathrm{d}C}{\\mathrm{d}r} = 0$:<br>$$200\\pi r^3 = 60000 \\implies r^3 = \\frac{300}{\\pi} \\implies r = \\left(\\frac{300}{\\pi}\\right)^{\\frac{1}{3}} \\approx 4.57\\text{ m}$$<br>Checking second derivative:<br>$$\\frac{\\mathrm{d}^2 C}{\\mathrm{d}r^2} = 200\\pi + \\frac{120000}{r^3} > 0 \\quad (\\text{since } r > 0)$$<br>Hence $C$ is minimum when $r = \\left(\\frac{300}{\\pi}\\right)^{\\frac{1}{3}}$.<br>Minimum cost $= 100\\pi\\left(\\frac{300}{\\pi}\\right)^{\\frac{2}{3}} + 60000\\left(\\frac{\\pi}{300}\\right)^{\\frac{1}{3}} \\approx \\text{SGD } 19\\,690.29$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Sketch the graph showing the total cost as the radius of the tank varies.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 190" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: origin at (45, 160) -->
          <line x1="25" y1="160" x2="245" y2="160" stroke-width="1.2"/>
          <polyline points="239,156 245,160 239,164" fill="none" stroke-width="1.2"/>
          <text x="248" y="164" stroke="none" font-style="italic">r</text>
          <line x1="45" y1="175" x2="45" y2="16" stroke-width="1.2"/>
          <polyline points="41,22 45,16 49,22" fill="none" stroke-width="1.2"/>
          <text x="32" y="22" stroke="none" font-style="italic">C</text>
          <text x="33" y="173" stroke="none" font-style="italic">O</text>
          <text x="50" y="34" stroke="none" font-style="italic">r = 0</text>
          <!-- Cost curve in 1st quadrant with min at (105, 128) -->
          <path d="M 52 24 C 57 82, 74 128, 105 128 C 142 128, 185 88, 228 32" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="105" cy="128" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="108" y="143" stroke="none" font-size="10">(4.57, 19700)</text>
        </svg>`,
        solution: "Since $r > 0$ and $C > 0$, the graph lies strictly in the first quadrant.<br>• Vertical asymptote: $r = 0$.<br>• Minimum point: $(4.57, 19700)$ (3 s.f.).<br>• As $r$ increases beyond $4.57$, $C$ increases without bound."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "A change to one of the materials used results in the cylinder's volume doubling to $2000\\text{ m}^3$, while maintaining the same minimum cost and radius found in part (b).<br><br>State which material's cost has changed and its value.",
        type: "self",
        solution: "With $V = 2000$, $h = \\frac{2000}{\\pi r^2}$. To keep the exact same cost function $C = 100\\pi r^2 + \\frac{60000}{r}$:<br>$$C = 50(2\\pi r^2) + k(2\\pi r)\\left(\\frac{2000}{\\pi r^2}\\right) = 100\\pi r^2 + \\frac{4000k}{r}$$<br>Equating $4000k = 60000$ gives $k = 15$.<br>Hence, the cost of the <strong>material for the curved surface</strong> has changed to <strong>SGD 15 per $\\text{m}^2$</strong>."
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q4",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "A sequence is such that $u_1 = a$ and $u_{n+1} = bu_n$, for $n \\ge 1$. Both $a$ and $b$ are constants.<br><br>Explain why the sequence is a geometric progression.",
        type: "self",
        solution: "Since $\\frac{u_{n+1}}{u_n} = b$, which is a constant independent of $n$, the sequence has a constant common ratio $b$ and is therefore a geometric progression."
      },
      {
        label: "(a)(ii)",
        marks: 4,
        prompt: "Given that $u_2 = 6$, $u_1 + u_2 + u_3 = 26$, and the sum to infinity exists, find the values of $a$ and $b$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "18", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "1/3", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "From $u_2 = ab = 6$, we have $a = \\frac{6}{b}$.<br>Substituting into $u_1 + u_2 + u_3 = a + ab + ab^2 = 26$:<br>$$\\frac{6}{b}(1 + b + b^2) = 26 \\implies 3(1 + b + b^2) = 13b$$<br>$$3b^2 - 10b + 3 = 0 \\implies (3b - 1)(b - 3) = 0$$<br>$$b = \\frac{1}{3} \\quad \\text{or} \\quad b = 3$$<br>Since the sum to infinity exists, $|b| < 1$, so $b = \\frac{1}{3}$.<br>Then $a = \\frac{6}{1/3} = 18$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "It is given that $\\sum_{r=1}^{n} r^2 = \\frac{1}{6}n(n+1)(2n+1)$.<br><br>Find $\\sum_{r=1}^{n} r(r+2)$ in terms of $n$. Leave your answer in factorised form.",
        type: "auto",
        mode: "expr",
        vars: { n: [1, 2, 5] },
        answer: "n*(n+1)*(2*n+7)/6",
        placeholder: "Factorised expression in n",
        solution: "$$\\sum_{r=1}^{n} r(r+2) = \\sum_{r=1}^{n} r^2 + 2\\sum_{r=1}^{n} r$$<br>$$= \\frac{1}{6}n(n+1)(2n+1) + 2\\cdot\\frac{n}{2}(n+1)$$<br>$$= \\frac{1}{6}n(n+1)\\left[(2n+1) + 6\\right] = \\frac{1}{6}n(n+1)(2n+7)$$"
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Hence find $\\sum_{r=2}^{n} (r+1)(r+3)$ in terms of $n$. You do not need to leave your answer in factorised form.",
        type: "auto",
        mode: "expr",
        vars: { n: [2, 3, 5] },
        answer: "(n+1)*(n+2)*(2*n+9)/6 - 11",
        placeholder: "Expression in terms of n",
        solution: "Let $k = r + 1$. As $r$ runs from $2$ to $n$, $k$ runs from $3$ to $n + 1$:<br>$$\\sum_{r=2}^{n} (r+1)(r+3) = \\sum_{k=3}^{n+1} k(k+2) = \\sum_{k=1}^{n+1} k(k+2) - \\sum_{k=1}^{2} k(k+2)$$<br>Using part (b)(i):<br>$$= \\frac{1}{6}(n+1)(n+2)\\left(2(n+1)+7\\right) - \\frac{1}{6}(2)(3)(11)$$<br>$$= \\frac{1}{6}(n+1)(n+2)(2n+9) - 11$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q5",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "It is given that $\\mathrm{e}^y = 1 + \\mathrm{e}^x$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $$\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + \\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = \\frac{\\mathrm{d}y}{\\mathrm{d}x}.$$",
        type: "self",
        solution: "Differentiating $\\mathrm{e}^y = 1 + \\mathrm{e}^x$ implicitly with respect to $x$:<br>$$\\mathrm{e}^y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\mathrm{e}^x = \\mathrm{e}^y - 1$$<br>Differentiating again with respect to $x$:<br>$$\\mathrm{e}^y\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + \\mathrm{e}^y\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = \\mathrm{e}^y\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$<br>Dividing throughout by $\\mathrm{e}^y$ ($> 0$):<br>$$\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + \\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Hence find the first four non-zero terms of the Maclaurin series for $y$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.2, 0.5, 1] },
        answer: "ln(2) + x/2 + x^2/8 - x^4/192",
        placeholder: "First four non-zero terms in x",
        solution: "Differentiating part (a) with respect to $x$:<br>$$\\frac{\\mathrm{d}^3 y}{\\mathrm{d}x^3} + 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = \\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2}$$<br>When $x = 0$: $\\mathrm{e}^y = 2 \\implies y = \\ln 2$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{2}$, $\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$, and $\\frac{\\mathrm{d}^3 y}{\\mathrm{d}x^3} = \\frac{1}{4} - 2\\left(\\frac{1}{2}\\right)\\left(\\frac{1}{4}\\right) = 0$.<br>Differentiating once more:<br>$$\\frac{\\mathrm{d}^4 y}{\\mathrm{d}x^4} + 2\\left(\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2}\\right)^2 + 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\frac{\\mathrm{d}^3 y}{\\mathrm{d}x^3} = \\frac{\\mathrm{d}^3 y}{\\mathrm{d}x^3}$$<br>When $x = 0$: $\\frac{\\mathrm{d}^4 y}{\\mathrm{d}x^4} = -2\\left(\\frac{1}{4}\\right)^2 = -\\frac{1}{8}$.<br>Therefore:<br>$$y = \\ln 2 + \\frac{1}{2}x + \\frac{1/4}{2!}x^2 + \\frac{-1/8}{4!}x^4 + \\dots = \\ln 2 + \\frac{1}{2}x + \\frac{1}{8}x^2 - \\frac{1}{192}x^4 + \\dots$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Hence find the Maclaurin series for $$\\frac{\\mathrm{e}^{2x}}{1 + \\mathrm{e}^{2x}},$$ up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.2, 0.5, 1] },
        answer: "1/2 + x/2 - x^3/6",
        placeholder: "Polynomial in x up to x^3",
        solution: "Since $y = \\ln(1 + \\mathrm{e}^x)$, differentiating part (b) with respect to $x$:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\mathrm{e}^x}{1 + \\mathrm{e}^x} = \\frac{1}{2} + \\frac{1}{4}x - \\frac{1}{48}x^3 + \\dots$$<br>Replacing $x$ with $2x$:<br>$$\\frac{\\mathrm{e}^{2x}}{1 + \\mathrm{e}^{2x}} = \\frac{1}{2} + \\frac{1}{4}(2x) - \\frac{1}{48}(2x)^3 + \\dots = \\frac{1}{2} + \\frac{1}{2}x - \\frac{1}{6}x^3 + \\dots$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q6",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations & Combinations"],
    diagramSvg: `<svg viewBox="0 0 265 115" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Row 1: 1 brick -->
      <rect x="79" y="10" width="26" height="22" fill="none" stroke-width="1.2"/>
      <!-- Row 2: 2 bricks -->
      <rect x="66" y="32" width="26" height="22" fill="none" stroke-width="1.2"/>
      <rect x="92" y="32" width="26" height="22" fill="none" stroke-width="1.2"/>
      <!-- Row 3: 3 bricks -->
      <rect x="53" y="54" width="26" height="22" fill="none" stroke-width="1.2"/>
      <rect x="79" y="54" width="26" height="22" fill="none" stroke-width="1.2"/>
      <rect x="105" y="54" width="26" height="22" fill="none" stroke-width="1.2"/>
      <!-- Row 4: 4 bricks -->
      <rect x="40" y="76" width="26" height="22" fill="none" stroke-width="1.2"/>
      <rect x="66" y="76" width="26" height="22" fill="none" stroke-width="1.2"/>
      <rect x="92" y="76" width="26" height="22" fill="none" stroke-width="1.2"/>
      <rect x="118" y="76" width="26" height="22" fill="none" stroke-width="1.2"/>
      <!-- Row labels -->
      <text x="165" y="25" stroke="none">First row</text>
      <text x="165" y="47" stroke="none">Second row</text>
      <text x="165" y="69" stroke="none">Third row</text>
      <text x="165" y="91" stroke="none">Fourth row</text>
    </svg>`,
    stem: "A children's game set consists of 1 red brick, 2 white bricks, 3 orange bricks and 4 blue bricks. All bricks are identical except for their colour.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the number of ways to arrange the 10 bricks in a row if all the orange bricks are separated.",
        type: "auto",
        mode: "number",
        answer: "5880",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Arrange the 7 non-orange bricks (1 red, 2 white, 4 blue) in $\\frac{7!}{2!4!}$ ways.<br>This creates 8 gaps into which the 3 identical orange bricks can be inserted in $^8C_3$ ways.<br>$$\\text{Number of ways} = \\frac{7!}{2!4!} \\times {}^8C_3 = 105 \\times 56 = 5880$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "A girl plans to arrange the 10 bricks in 4 rows as shown in the diagram. Find the number of arrangements if there are no restrictions.",
        type: "auto",
        mode: "number",
        answer: "12600",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Since all 10 positions in the 4 rows are distinct:<br>$$\\text{Number of ways} = \\frac{10!}{2!3!4!} = 12600$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find the number of arrangements in the 4 rows if there are exactly two orange bricks and only one white brick in the same row.",
        type: "auto",
        mode: "number",
        answer: "2430",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "The row containing 2 orange bricks and 1 white brick must be either the 3rd row (3 slots) or the 4th row (4 slots).<br><br><strong>Case 1:</strong> 2 orange and 1 white in the 3rd row.<br>Arrange 3rd row in $\\frac{3!}{2!}$ ways, and the remaining 7 bricks (1 red, 1 white, 1 orange, 4 blue) in $\\frac{7!}{4!}$ ways:<br>$$\\frac{3!}{2!} \\times \\frac{7!}{4!} = 3 \\times 210 = 630$$<br><strong>Case 2:</strong> 2 orange, 1 white and 1 red in the 4th row.<br>Arrange 4th row in $\\frac{4!}{2!}$ ways, and the remaining 6 bricks (1 white, 1 orange, 4 blue) in $\\frac{6!}{4!}$ ways:<br>$$\\frac{4!}{2!} \\times \\frac{6!}{4!} = 12 \\times 30 = 360$$<br><strong>Case 3:</strong> 2 orange, 1 white and 1 blue in the 4th row.<br>Arrange 4th row in $\\frac{4!}{2!}$ ways, and the remaining 6 bricks (1 red, 1 white, 1 orange, 3 blue) in $\\frac{6!}{3!}$ ways:<br>$$\\frac{4!}{2!} \\times \\frac{6!}{3!} = 12 \\times 120 = 1440$$<br>Total number of ways $= 630 + 360 + 1440 = 2430$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "All the 10 bricks are now numbered from 1 to 10. In how many ways can the bricks be arranged in a circle so that the ones with the same colour are next to each other?",
        type: "auto",
        mode: "number",
        answer: "1728",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Treat each of the 4 colour groups as a single unit. Arrange the 4 groups in a circle in $(4 - 1)!$ ways, then arrange the distinct bricks within each group:<br>$$\\text{Number of ways} = (4 - 1)! \\times 1! \\times 2! \\times 3! \\times 4! = 6 \\times 1 \\times 2 \\times 6 \\times 24 = 1728$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q7",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Probability", "Discrete Random Variables"],
    stem: "Customers at a shopping mall participate in a game involving 2 boxes of tokens, labelled $A$ and $B$. Box $A$ contains $n$ black tokens and $4$ gold tokens, while Box $B$ contains $4$ black tokens and $4$ silver tokens. The tokens are identical in all aspects except for their colour.<br><br>In a game, a customer first tosses a fair coin. If a head is obtained, two tokens are drawn at random from Box $B$. Otherwise, one token is drawn from each box. A black token scores $1$ point, a silver token scores $2$ points, and a gold token scores $3$ points. The total number of points is the customer's score $X$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that $$\\mathrm{P}(X = 2) = \\frac{3}{28} + \\frac{n}{4(n+4)}.$$",
        type: "self",
        solution: "A score of $2$ occurs when 2 black tokens are drawn from Box $B$ (after Head), or 1 black token is drawn from each box (after Tail):<br>$$\\mathrm{P}(X = 2) = \\frac{1}{2}\\left(\\frac{4}{8}\\right)\\left(\\frac{3}{7}\\right) + \\frac{1}{2}\\left(\\frac{n}{n+4}\\right)\\left(\\frac{4}{8}\\right) = \\frac{3}{28} + \\frac{n}{4(n+4)} \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Given that $\\mathrm{P}(X = 2) = \\frac{3}{14}$, determine the probability distribution of $X$.",
        type: "self",
        solution: "Solving for $n$:<br>$$\\frac{3}{28} + \\frac{n}{4(n+4)} = \\frac{3}{14} \\implies \\frac{n}{4(n+4)} = \\frac{3}{28} \\implies 7n = 3(n+4) \\implies n = 3$$<br>With $n = 3$, Box $A$ has 3 black and 4 gold tokens (total 7).<br>• $\\mathrm{P}(X = 2) = \\frac{3}{14}$<br>• $\\mathrm{P}(X = 3) = \\frac{1}{2}\\left(\\frac{4}{8}\\right)\\left(\\frac{4}{7}\\right) \\times 2 + \\frac{1}{2}\\left(\\frac{3}{7}\\right)\\left(\\frac{4}{8}\\right) = \\frac{2}{7} + \\frac{3}{28} = \\frac{11}{28}$<br>• $\\mathrm{P}(X = 4) = \\frac{1}{2}\\left(\\frac{4}{8}\\right)\\left(\\frac{3}{7}\\right) + \\frac{1}{2}\\left(\\frac{4}{7}\\right)\\left(\\frac{4}{8}\\right) = \\frac{3}{28} + \\frac{1}{7} = \\frac{1}{4}$<br>• $\\mathrm{P}(X = 5) = \\frac{1}{2}\\left(\\frac{4}{7}\\right)\\left(\\frac{4}{8}\\right) = \\frac{1}{7}$<br><div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$\\frac{3}{14}$</td><td>$\\frac{11}{28}$</td><td>$\\frac{1}{4}$</td><td>$\\frac{1}{7}$</td></tr></table></div>"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find $\\mathrm{P}(X_1 = 4 \\mid X_1 + X_2 \\ge 9)$, where $X_1$ and $X_2$ are independent observations of $X$.",
        type: "auto",
        mode: "number",
        answer: "7/18",
        placeholder: "Exact fraction or 3 s.f.",
        solution: "$$\\mathrm{P}(X_1 = 4 \\mid X_1 + X_2 \\ge 9) = \\frac{\\mathrm{P}(X_1 = 4 \\cap X_1 + X_2 \\ge 9)}{\\mathrm{P}(X_1 + X_2 \\ge 9)}$$<br>$$= \\frac{\\mathrm{P}(X_1 = 4)\\mathrm{P}(X_2 = 5)}{2\\mathrm{P}(X_1 = 4)\\mathrm{P}(X_2 = 5) + \\mathrm{P}(X_1 = 5)\\mathrm{P}(X_2 = 5)}$$<br>$$= \\frac{\\left(\\frac{1}{4}\\right)\\left(\\frac{1}{7}\\right)}{2\\left(\\frac{1}{4}\\right)\\left(\\frac{1}{7}\\right) + \\left(\\frac{1}{7}\\right)\\left(\\frac{1}{7}\\right)} = \\frac{1/28}{1/14 + 1/49} = \\frac{7}{18}$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q8",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Andy is learning how to solve a Rubik's cube. The table shows his personal record time, $y$ seconds, for solving a Rubik's cube, $x$ days after he started.<br><div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td><td>35</td><td>40</td></tr><tr><th>$y$</th><td>220</td><td>150</td><td>100</td><td>70</td><td>48</td><td>35</td><td>25</td><td>18</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Draw a scatter diagram for these values, labelling the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: origin at (45, 180), x scale=5, y scale=0.65 -->
          <line x1="45" y1="180" x2="265" y2="180" stroke-width="1.2"/>
          <polyline points="259,176 265,180 259,184" fill="none" stroke-width="1.2"/>
          <text x="268" y="184" stroke="none" font-style="italic">x</text>
          <line x1="45" y1="180" x2="45" y2="14" stroke-width="1.2"/>
          <polyline points="41,20 45,14 49,20" fill="none" stroke-width="1.2"/>
          <text x="32" y="21" stroke="none" font-style="italic">y</text>
          <!-- Dashed guides for min/max -->
          <line x1="45" y1="37" x2="70" y2="37" stroke-dasharray="3,3" opacity="0.55"/>
          <line x1="70" y1="37" x2="70" y2="180" stroke-dasharray="3,3" opacity="0.55"/>
          <line x1="45" y1="168.3" x2="245" y2="168.3" stroke-dasharray="3,3" opacity="0.55"/>
          <line x1="245" y1="168.3" x2="245" y2="180" stroke-dasharray="3,3" opacity="0.55"/>
          <text x="17" y="41" stroke="none" font-size="10">220</text>
          <text x="23" y="172" stroke="none" font-size="10">18</text>
          <text x="66" y="195" stroke="none" font-size="10">5</text>
          <text x="238" y="195" stroke="none" font-size="10">40</text>
          <!-- Data points -->
          <circle cx="70" cy="37" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="95" cy="82.5" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="120" cy="115" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="145" cy="134.5" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="170" cy="148.8" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="195" cy="157.3" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="220" cy="163.8" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="245" cy="168.3" r="3" fill="#4ca885" stroke="none"/>
        </svg>`,
        solution: "Plot the 8 points $(5, 220), (10, 150), (15, 100), (20, 70), (25, 48), (30, 35), (35, 25), (40, 18)$ with equal horizontal spacing and decreasing vertical drops, labelling the axes and extreme values ($x = 5, 40$ and $y = 18, 220$)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Use your diagram and the context of the question to explain whether the relationship between $y$ and $x$ should be modelled by $y = a + bx$ or by $y = a + \\frac{b}{x}$, where $a$ and $b$ are constants.",
        type: "self",
        solution: "It should be modelled by $y = a + \\frac{b}{x}$.<br>• From the scatter diagram, as $x$ increases, $y$ decreases at a decreasing rate (a curved, non-linear trend), which fits $y = a + \\frac{b}{x}$ rather than a straight line.<br>• In context, a linear model $y = a + bx$ (with $b < 0$) would eventually predict a negative solving time, which is impossible; whereas $y = a + \\frac{b}{x}$ approaches a positive lower limit as $x$ increases."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the product moment correlation coefficient and the equation for the chosen model in part (b).",
        type: "self",
        solution: "Using the GC with $X = \\frac{1}{x}$ and $y$:<br>• Product moment correlation coefficient: $r = 0.971$ (3 s.f.)<br>• Regression equation: $y = 4.0496 + 1165.6\\left(\\frac{1}{x}\\right)$ (5 s.f.), i.e. $y = 4.05 + \\frac{1170}{x}$ (3 s.f.)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Use your equation to estimate his personal record time, 28 days after he started. Explain whether your estimate is reliable.",
        type: "self",
        solution: "When $x = 28$:<br>$$y = 4.0496 + \\frac{1165.6}{28} = 45.678 \\approx 45.7\\text{ seconds (3 s.f.)}$$<br>The estimate is <strong>reliable</strong> because $r = 0.971$ is close to $1$ (indicating a strong linear correlation between $y$ and $\\frac{1}{x}$) and $x = 28$ lies within the data range $5 \\le x \\le 40$ (interpolation)."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Without further calculations, explain whether the product moment correlation coefficient calculated in part (c) would be different if $y$ was recorded in minutes instead. Re-write the equation for the chosen model in this case. You do not need to simplify your answer.",
        type: "self",
        solution: "The product moment correlation coefficient will <strong>not be different</strong> because $r$ is invariant under scaling / linear transformation of the variables.<br>Since $1\\text{ minute} = 60\\text{ seconds}$, dividing $y$ by $60$ gives:<br>$$y = \\frac{1}{60}\\left(4.05 + \\frac{1170}{x}\\right)$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q9",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "<strong>In this question, you should state the parameters of any normal distributions you use.</strong><br><br>A confectionary bakes egg tarts for sale. The masses of these egg tarts have a normal distribution and $26\\%$ of them have a mass greater than $65$ grams. An egg tart is equally likely to have a mass less than $50$ grams as it is to have a mass greater than $70$ grams.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the mean and variance of this distribution.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "60", exactRequired: true, placeholder: "Exact value" },
          { label: "Variance =", answer: "60.40204", placeholder: "Value to 3 s.f." }
        ],
        solution: "Let $X \\sim \\mathrm{N}(\\mu, \\sigma^2)$ be the mass (in grams) of a randomly chosen egg tart.<br>Since $\\mathrm{P}(X < 50) = \\mathrm{P}(X > 70)$, by symmetry:<br>$$\\mu = \\frac{50 + 70}{2} = 60$$<br>Given $\\mathrm{P}(X > 65) = 0.26$:<br>$$\\mathrm{P}\\left(Z > \\frac{65 - 60}{\\sigma}\\right) = 0.26 \\implies \\frac{5}{\\sigma} = 0.643345$$<br>$$\\sigma = 7.771875 \\implies \\sigma^2 = 60.4 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "The confectionary also bakes donuts and buns. The masses in grams of the donuts have the distribution $\\mathrm{N}(80, 10^2)$ and the masses in grams of the buns have the distribution $\\mathrm{N}(70, 6^2)$.<br><br>Find the probability that the mass of a randomly chosen donut is within $5$ grams from its mean.",
        type: "auto",
        mode: "number",
        answer: "0.3829249",
        placeholder: "Value to 3 s.f.",
        solution: "Let $A \\sim \\mathrm{N}(80, 10^2)$ be the mass of a donut.<br>$$\\mathrm{P}(75 \\le A \\le 85) = 0.383 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the probability that the mass of a randomly chosen bun is less than the mass of a randomly chosen donut.",
        type: "auto",
        mode: "number",
        answer: "0.8044138",
        placeholder: "Value to 3 s.f.",
        solution: "Let $B \\sim \\mathrm{N}(70, 6^2)$ be the mass of a bun.<br>$\\mathrm{E}(B - A) = 70 - 80 = -10$, $\\mathrm{Var}(B - A) = 6^2 + 10^2 = 136$.<br>Hence $B - A \\sim \\mathrm{N}(-10, 136)$.<br>$$\\mathrm{P}(B - A < 0) = 0.804 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "The confectionery also tops its donuts and buns with chocolate. A chocolate topping increases the mass of a donut by $10\\%$ and the mass of a bun by $20\\%$.<br><br>Find the probability that the total mass, with chocolate topping, of $3$ randomly chosen donuts and $5$ randomly chosen buns exceeds $700$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.2606189",
        placeholder: "Value to 3 s.f.",
        solution: "Let $T = 1.1(A_1 + A_2 + A_3) + 1.2(B_1 + B_2 + B_3 + B_4 + B_5)$.<br>$$\\mathrm{E}(T) = 1.1(3)(80) + 1.2(5)(70) = 264 + 420 = 684$$<br>$$\\mathrm{Var}(T) = 1.1^2(3)(10^2) + 1.2^2(5)(6^2) = 363 + 259.2 = 622.2$$<br>Hence $T \\sim \\mathrm{N}(684, 622.2)$.<br>$$\\mathrm{P}(T > 700) = 0.261 \\text{ (3 s.f.)}$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q10",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "A company advertises that its rechargeable batteries can run non-stop for an average of $505$ minutes after a full charge. $100$ batteries are randomly selected, and their running time after a full charge, $x$ minutes, are measured. The data obtained is summarised by $$\\sum(x - 500) = 320, \\quad \\sum(x - 500)^2 = 8416.$$",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Suggest a reason why, in this context, the given data is summarised in terms of $(x - 500)$ rather than $x$.",
        type: "self",
        solution: "Because the running times of the batteries are close to $500$ minutes, using $(x - 500)$ yields much smaller numbers to record and compute with."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Calculate unbiased estimates of the population mean and variance of the running time of the batteries.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "503.2", exactRequired: true, placeholder: "Exact value" },
          { label: "Variance =", answer: "7392/99", placeholder: "Exact or 3 s.f." }
        ],
        solution: "Unbiased estimate of population mean:<br>$$\\bar{x} = \\frac{320}{100} + 500 = 503.2 \\text{ (exact)}$$<br>Unbiased estimate of population variance:<br>$$s^2 = \\frac{1}{99}\\left[8416 - \\frac{320^2}{100}\\right] = \\frac{7392}{99} = 74.667 \\text{ (5 s.f.)} \\approx 74.7 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "A hypothesis test is carried out at the $5\\%$ level of significance. Determine whether the company is overestimating the average running time of the batteries.",
        type: "self",
        solution: "Let $\\mu$ be the population mean running time of the batteries (in minutes).<br>$\\mathrm{H}_0 : \\mu = 505$ vs $\\mathrm{H}_1 : \\mu < 505$ (1-tailed test at $5\\%$ significance level).<br>Under $\\mathrm{H}_0$, since $n = 100$ is large, by the Central Limit Theorem:<br>$$\\bar{X} \\sim \\mathrm{N}\\left(505, \\frac{74.667}{100}\\right) \\text{ approximately}$$<br>Test statistic: $z = \\frac{503.2 - 505}{\\sqrt{74.667/100}} = -2.083$.<br>From GC, $p\\text{-value} = 0.0186 < 0.05$.<br>Hence we reject $\\mathrm{H}_0$ and conclude at the $5\\%$ level of significance that there is sufficient evidence to suggest that the company is overestimating the average running time of the batteries."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "State, giving a reason, whether it is necessary to assume a normal distribution for the test to be valid.",
        type: "self",
        solution: "<strong>No.</strong> Since the sample size $n = 100$ is sufficiently large, the sample mean $\\bar{X}$ is approximately normally distributed by the Central Limit Theorem regardless of the population distribution."
      },
      {
        label: "(e)",
        marks: 4,
        prompt: "After a change is made in the manufacturing process, another test at the $5\\%$ significance level is carried out using a new random sample of size $50$. The sample standard deviation is found to be $8.5$ minutes. Find the range of values of the sample mean in order to conclude that the average running time of the batteries after a full charge is more than $505$ minutes.",
        type: "self",
        solution: "Unbiased estimate of the population variance:<br>$$s^2 = \\frac{50}{49}(8.5)^2 = 73.724 \\text{ (5 s.f.)}$$<br>Testing $\\mathrm{H}_0 : \\mu = 505$ against $\\mathrm{H}_1 : \\mu > 505$ at $5\\%$ significance level.<br>Under $\\mathrm{H}_0$, by Central Limit Theorem (as $n = 50$ is large), $\\bar{X} \\sim \\mathrm{N}\\left(505, \\frac{73.724}{50}\\right)$ approximately.<br>To reject $\\mathrm{H}_0$:<br>$$\\frac{\\bar{x} - 505}{\\sqrt{73.724/50}} \\ge 1.6449$$<br>$$\\bar{x} - 505 \\ge 1.9974 \\implies \\bar{x} \\ge 507 \\text{ (3 s.f.)}$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P2-Q11",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Binomial Distribution", "Sampling & CLT"],
    stem: "In a large shipment of second-hand T-shirts, $4\\%$ of the T-shirts are torn. The T-shirts are sold in boxes of $25$ pieces each. Let $X$ denote the number of torn T-shirts in a box.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State, in the context of the question, two assumptions needed to model $X$ by a binomial distribution.",
        type: "self",
        solution: "1. The probability that a randomly chosen T-shirt is torn is constant (at $0.04$) for every T-shirt.<br>2. Whether a T-shirt is torn or not is independent of any other T-shirt."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "You are now given that $X$ can be modelled by a binomial distribution.<br><br>A box is randomly chosen. Find the probability that a box contains at least $2$ torn T-shirts.",
        type: "auto",
        mode: "number",
        answer: "0.2641900",
        placeholder: "Value to 3 s.f.",
        solution: "$X \\sim \\mathrm{B}(25, 0.04)$:<br>$$\\mathrm{P}(X \\ge 2) = 1 - \\mathrm{P}(X \\le 1) = 0.26419 \\text{ (5 s.f.)} \\approx 0.264 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "A box is deemed to be of inferior quality if it contains at least $2$ torn T-shirts. Find the probability that, in a random sample of $10$ boxes of T-shirts, more than $3$ boxes are of inferior quality.",
        type: "auto",
        mode: "number",
        answer: "0.2581646",
        placeholder: "Value to 3 s.f.",
        solution: "Let $Y$ be the number of inferior quality boxes out of $10$. Then $Y \\sim \\mathrm{B}(10, 0.26419)$.<br>$$\\mathrm{P}(Y > 3) = 1 - \\mathrm{P}(Y \\le 3) = 0.258 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "A distributor purchases a batch of $60$ boxes of T-shirts.<br><br>Find the probability that the average number of torn T-shirts per box is more than $1.1$.",
        type: "auto",
        mode: "number",
        answer: "0.2145976",
        answers: ["0.2145976", "0.1943084"],
        placeholder: "Value to 3 s.f.",
        solution: "<strong>Method 1 (Central Limit Theorem):</strong><br>$\\mathrm{E}(X) = 25(0.04) = 1$, $\\mathrm{Var}(X) = 25(0.04)(0.96) = 0.96$.<br>Since $n = 60$ is large, by the Central Limit Theorem, $\\bar{X} \\sim \\mathrm{N}\\left(1, \\frac{0.96}{60}\\right)$ approximately.<br>$$\\mathrm{P}(\\bar{X} > 1.1) = 0.215 \\text{ (3 s.f.)}$$<br><br><strong>Method 2 (Exact Binomial):</strong><br>Let $T \\sim \\mathrm{B}(1500, 0.04)$ be the total number of torn T-shirts in $60$ boxes.<br>$$\\mathrm{P}(T > 1.1 \\times 60) = \\mathrm{P}(T > 66) = 1 - \\mathrm{P}(T \\le 66) = 0.194 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Find the most probable number of boxes of inferior quality in the batch.",
        type: "auto",
        mode: "number",
        answer: "16",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Let $A \\sim \\mathrm{B}(60, 0.26419)$ be the number of inferior quality boxes out of $60$.<br>Using GC:<br>• $\\mathrm{P}(A = 15) = 0.115$<br>• $\\mathrm{P}(A = 16) = 0.116$<br>• $\\mathrm{P}(A = 17) = 0.108$<br>Hence the most probable number of boxes of inferior quality is <strong>16</strong>."
      },
      {
        label: "(f)",
        marks: 2,
        prompt: "In a large shipment of second-hand blouses, a proportion $p$ of the blouses is torn. The blouses are also sold in boxes of $25$ pieces each. The number of torn blouses in a box follows a binomial distribution. It is known that the probability of a box containing exactly $2$ torn blouses is $0.206$.<br><br>Write down an equation satisfied by $p$. Hence, find the value of $p$, given that $p > 0.1$.",
        type: "auto",
        mode: "number",
        answer: "0.1300174",
        placeholder: "Value to 3 s.f.",
        solution: "Let $W \\sim \\mathrm{B}(25, p)$ be the number of torn blouses in a box.<br>$$\\mathrm{P}(W = 2) = 0.206 \\implies {}^{25}C_2\\, p^2(1 - p)^{23} = 0.206$$<br>$$300p^2(1 - p)^{23} = 0.206$$<br>Solving using the GC for $p > 0.1$ gives $p = 0.130$ (3 s.f.)."
      }
    ]
  }
]);
