window.registerQuestions([
  {
    id: "HCI-2025-P1-Q1",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities", "Differentiation"],
    stem: "",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "A curve has equation $y = x + 1 + \\frac{3}{x - 1}$. Using differentiation, find the set of values of $x$ where the curve is strictly decreasing. Give your answers in exact form.",
        type: "self",
        solution: "Rewrite $y = x + 1 + 3(x - 1)^{-1}$. Differentiating with respect to $x$:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 - \\frac{3}{(x - 1)^2}$$<br>For the curve to be strictly decreasing, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} < 0$:<br>$$1 - \\frac{3}{(x - 1)^2} < 0$$<br>$$\\frac{(x - 1)^2 - 3}{(x - 1)^2} < 0 \\implies \\frac{x^2 - 2x - 2}{(x - 1)^2} < 0$$<br>Since $(x - 1)^2 > 0$ for all $x \\ne 1$, we require $x^2 - 2x - 2 < 0$ and $x \\ne 1$.<br>Solving $x^2 - 2x - 2 = 0$:<br>$$x = \\frac{2 \\pm \\sqrt{4 - 4(-2)}}{2} = 1 \\pm \\sqrt{3}$$<br>Therefore, the set of values of $x$ is:<br>{ $x$ ∈ ℝ : $1 - \\sqrt{3} < x < 1$ or $1 < x < 1 + \\sqrt{3}$ }."
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q2",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Equations & Inequalities", "Sequences & Series"],
    stem: "A sequence of real numbers, $x_n$, satisfies the recurrence relation<br>$$x_{n+1} = a(-3)^n + bn^2 + cx_n,$$<br>for $n, a, b, c$ ∈ ℤ and $n \\ge 1$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Given that $x_1 = 1$, $x_2 = -8$, $x_3 = 70$, and $x_4 = -377$, find the values of $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "2", exactRequired: true, placeholder: "Integer" },
          { label: "b =", answer: "3", exactRequired: true, placeholder: "Integer" },
          { label: "c =", answer: "-5", exactRequired: true, placeholder: "Integer" }
        ],
        solution: "Substituting $n = 1, 2, 3$ into $x_{n+1} = a(-3)^n + bn^2 + cx_n$:<br>For $n = 1$: $-8 = a(-3) + b(1)^2 + c(1) \\implies -3a + b + c = -8$<br>For $n = 2$: $70 = a(-3)^2 + b(2)^2 + c(-8) \\implies 9a + 4b - 8c = 70$<br>For $n = 3$: $-377 = a(-3)^3 + b(3)^2 + c(70) \\implies -27a + 9b + 70c = -377$<br>Solving the system of linear equations using a GC:<br>$$a = 2, \\quad b = 3, \\quad c = -5.$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence, find the values of $x_{10}$ and $x_{11}$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "x_10 =", answer: "-7210868", exactRequired: true, placeholder: "Integer" },
          { label: "x_11 =", answer: "36172738", exactRequired: true, placeholder: "Integer" }
        ],
        solution: "The recurrence relation is $x_{n+1} = 2(-3)^n + 3n^2 - 5x_n$ with $x_1 = 1$.<br>Using sequence mode on the GC:<br>$x_5 = 2095$, $x_6 = -10886$, $x_7 = 55996$, $x_8 = -284207$, $x_9 = 1434349$,<br>$$x_{10} = -7210868, \\quad x_{11} = 36172738.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q3",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Integration", "Differential Equations"],
    stem: "It is given that $\\left(2xy\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y^2\\right)\\cos x = \\frac{1}{xy^2}$, where $0 < x < \\frac{\\pi}{2}$ and $y \\ne 0$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Using the substitution $u = xy^2$, show that the differential equation can be reduced to $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{\\sec x}{u}$.",
        type: "self",
        solution: "Let $u = xy^2$. Differentiating with respect to $x$ by the product rule:<br>$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = y^2 + x\\left(2y\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right) = 2xy\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y^2$$<br>Substituting into the given differential equation:<br>$$\\left(\\frac{\\mathrm{d}u}{\\mathrm{d}x}\\right)\\cos x = \\frac{1}{u}$$<br>Dividing both sides by $\\cos x$:<br>$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{1}{u\\cos x} = \\frac{\\sec x}{u} \\quad (\\text{shown}).$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Hence find the general solution to the differential equation.",
        type: "self",
        solution: "Separating variables:<br>$$\\int u\\,\\mathrm{d}u = \\int \\sec x\\,\\mathrm{d}x$$<br>$$\\frac{1}{2}u^2 = \\ln|\\sec x + \\tan x| + C_1$$<br>Since $0 < x < \\frac{\\pi}{2}$, both $\\sec x > 0$ and $\\tan x > 0$, so:<br>$$\\frac{1}{2}u^2 = \\ln(\\sec x + \\tan x) + C_1$$<br>Substituting $u = xy^2$ and letting $C = 2C_1$:<br>$$x^2 y^4 = 2\\ln(\\sec x + \\tan x) + C.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q4",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Integration"],
    diagramSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="150" x2="260" y2="150" stroke-width="1.3"/>
  <polyline points="254,146 260,150 254,154" fill="none" stroke-width="1.3"/>
  <line x1="40" y1="162" x2="40" y2="18" stroke-width="1.3"/>
  <polyline points="36,24 40,18 44,24" fill="none" stroke-width="1.3"/>
  <text x="258" y="164" stroke="none">x</text>
  <text x="28" y="22" stroke="none">y</text>
  <text x="28" y="163" stroke="none">O</text>
  <line x1="76" y1="150" x2="76" y2="122" stroke="#4a8fe7" stroke-width="1"/>
  <line x1="112" y1="150" x2="112" y2="116" stroke="#4a8fe7" stroke-width="1"/>
  <line x1="148" y1="150" x2="148" y2="105" stroke="#4a8fe7" stroke-width="1"/>
  <line x1="184" y1="150" x2="184" y2="85" stroke="#4a8fe7" stroke-width="1"/>
  <line x1="220" y1="150" x2="220" y2="48" stroke="#4a8fe7" stroke-width="1"/>
  <path d="M 40,126 C 95,124 155,112 220,48" fill="none" stroke="#2c2925" stroke-width="2"/>
  <text x="135" y="64" stroke="none" font-style="italic">y = f(x)</text>
  <text x="125" y="135" stroke="none" font-style="italic">A</text>
  <text x="217" y="165" stroke="none">1</text>
  <path d="M 76,154 Q 76,160 94,160 Q 112,160 112,154" fill="none" stroke-width="1"/>
  <text x="91" y="174" stroke="none" font-style="italic">h</text>
</svg>`,
    stem: "The diagram shows a sketch of the function $\\text{f}(x) = \\mathrm{e}^{3x} + 1$, for $0 \\le x \\le 1$. The region bounded by the curve and the lines $y = 0$, $x = 0$ and $x = 1$ is $A$. The region $A$ is split into $5$ vertical strips of equal width $h$, as shown in the diagram.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "State the value of $h$ and using a suitable sketch, explain whether $\\sum_{k=1}^{5} (h\\,\\text{f}(kh))$ is less or more than the area of $A$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="150" x2="260" y2="150" stroke-width="1.3"/>
  <polyline points="254,146 260,150 254,154" fill="none" stroke-width="1.3"/>
  <line x1="40" y1="162" x2="40" y2="18" stroke-width="1.3"/>
  <polyline points="36,24 40,18 44,24" fill="none" stroke-width="1.3"/>
  <text x="258" y="164" stroke="none">x</text>
  <text x="28" y="22" stroke="none">y</text>
  <text x="29" y="163" stroke="none">0</text>
  <rect x="40" y="122" width="36" height="28" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <rect x="76" y="116" width="36" height="34" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <rect x="112" y="105" width="36" height="45" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <rect x="148" y="85" width="36" height="65" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <rect x="184" y="48" width="36" height="102" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <path d="M 40,126 C 95,124 155,112 220,48" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="172" y="34" stroke="none" font-size="11" font-style="italic">y = f(x)</text>
  <text x="68" y="165" stroke="none">1/5</text>
  <text x="104" y="165" stroke="none">2/5</text>
  <text x="140" y="165" stroke="none">3/5</text>
  <text x="176" y="165" stroke="none">4/5</text>
  <text x="217" y="165" stroke="none">1</text>
</svg>`,
        solution: "Since $[0, 1]$ is divided into $5$ equal strips, $h = \\frac{1}{5}$.<br>$$\\sum_{k=1}^{5} h\\,\\text{f}(kh) = \\frac{1}{5}\\left[\\text{f}\\left(\\frac{1}{5}\\right) + \\text{f}\\left(\\frac{2}{5}\\right) + \\text{f}\\left(\\frac{3}{5}\\right) + \\text{f}\\left(\\frac{4}{5}\\right) + \\text{f}\\left(\\frac{5}{5}\\right)\\right]$$<br>This represents the total area of the $5$ right-endpoint rectangles of width $\\frac{1}{5}$ shown in the sketch. Since $\\text{f}(x) = \\mathrm{e}^{3x} + 1$ is strictly increasing on $[0, 1]$, each rectangle extends above the curve, so $\\sum_{k=1}^{5} (h\\,\\text{f}(kh))$ is <strong>more than</strong> the area of $A$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "$A$ is now split into $n$ vertical strips of equal width. Using calculus, find the exact value of the limit as $n$ → ∞ of<br>$$\\frac{1}{n}\\left(\\mathrm{e}^{\\frac{3}{n}} + \\mathrm{e}^{\\frac{6}{n}} + \\mathrm{e}^{\\frac{9}{n}} + \\dots + \\mathrm{e}^{\\frac{3n-3}{n}} + \\mathrm{e}^3 + n\\right).$$",
        type: "auto",
        mode: "number",
        answer: "e^3/3 + 2/3",
        exactRequired: true,
        placeholder: "Exact value in terms of e",
        solution: "Distributing the $n$ into $n$ copies of $1$, one for each term:<br>$$\\frac{1}{n}\\left[\\left(\\mathrm{e}^{\\frac{3}{n}} + 1\\right) + \\left(\\mathrm{e}^{\\frac{6}{n}} + 1\\right) + \\dots + \\left(\\mathrm{e}^{\\frac{3n-3}{n}} + 1\\right) + \\left(\\mathrm{e}^3 + 1\\right)\\right] = \\sum_{k=1}^{n} \\frac{1}{n}\\,\\text{f}\\left(\\frac{k}{n}\\right)$$<br>As $n$ → ∞, this Riemann sum converges to the exact area of $A$:<br>$$\\int_0^1 (\\mathrm{e}^{3x} + 1)\\,\\mathrm{d}x = \\left[\\frac{\\mathrm{e}^{3x}}{3} + x\\right]_0^1 = \\left(\\frac{\\mathrm{e}^3}{3} + 1\\right) - \\left(\\frac{1}{3} + 0\\right) = \\frac{\\mathrm{e}^3}{3} + \\frac{2}{3}.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q5",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 240 210" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <circle cx="115" cy="105" r="76" fill="none" stroke-dasharray="4,3" opacity="0.7" stroke-width="1.2"/>
  <line x1="157" y1="42" x2="73" y2="168" stroke-dasharray="4,3" opacity="0.7" stroke-width="1.2"/>
  <line x1="115" y1="105" x2="191" y2="112" stroke-dasharray="4,3" opacity="0.7" stroke-width="1.2"/>
  <path d="M 157,42 A 76,76 0 0 1 191,112" fill="none" stroke="#4a8fe7" stroke-width="2.4"/>
  <line x1="191" y1="112" x2="73" y2="168" stroke="#4a8fe7" stroke-width="2.4"/>
  <path d="M 127,87 A 22,22 0 0 1 137,107" fill="none" stroke-width="1.1"/>
  <circle cx="115" cy="105" r="2.5" fill="#2c2925"/>
  <text x="99" y="106" stroke="none" font-style="italic">O</text>
  <text x="136" y="96" stroke="none" font-style="italic">θ</text>
  <text x="160" y="38" stroke="none" font-style="italic">A</text>
  <text x="196" y="116" stroke="none" font-style="italic">B</text>
  <text x="61" y="182" stroke="none" font-style="italic">C</text>
</svg>`,
    stem: "The tourism board plans to construct a tram track around a tourist attraction. The diagram above shows part of the blueprint of the track, where the tram will run along a circular path with centre $O$ and radius $450\\text{ m}$, from a fixed point $A$ to a variable point $B$, and then straight across to a fixed point $C$ (where $AC$ is a diameter). The angle $AOB$ is denoted as $\\theta$, where $0 \\le \\theta \\le \\pi$. The speed of the tram along the circular path will be maintained at $8\\text{ m/s}$ and the speed along the straight path $BC$ will be maintained at $\\sqrt{6}\\text{ m/s}$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that the time taken for the tram to travel from point $A$ to $C$ is $\\frac{225}{4}\\theta + 150\\sqrt{6}\\cos\\frac{\\theta}{2}$.",
        type: "self",
        solution: "Arc length $AB = r\\theta = 450\\theta$, so the time taken along arc $AB$ is:<br>$$\\frac{450\\theta}{8} = \\frac{225}{4}\\theta$$<br>In isosceles △$OBC$, $OB = OC = 450$ and exterior ∠$AOB = \\theta$, so ∠$OBC =$ ∠$OCB = \\frac{\\theta}{2}$.<br>Dropping a perpendicular from $O$ to $BC$:<br>$$BC = 2\\left(450\\cos\\frac{\\theta}{2}\\right) = 900\\cos\\frac{\\theta}{2}$$<br>(Alternatively, by cosine rule: $BC^2 = 450^2 + 450^2 - 2(450)^2\\cos(\\pi - \\theta) = 2(450^2)(1 + \\cos\\theta) = 900^2\\cos^2\\frac{\\theta}{2}$.)<br>Time taken along $BC$ is:<br>$$\\frac{900\\cos\\frac{\\theta}{2}}{\\sqrt{6}} = 150\\sqrt{6}\\cos\\frac{\\theta}{2}$$<br>Hence total time $T = \\frac{225}{4}\\theta + 150\\sqrt{6}\\cos\\frac{\\theta}{2}$ (shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Use calculus to find the maximum time taken for the tram to travel from point $A$ to point $C$. (You need not show that your answer gives a maximum.)",
        type: "auto",
        mode: "number",
        answers: ["384.784942", "6.413082"],
        placeholder: "Time in seconds (or minutes) to 3 s.f.",
        solution: "Let $T = \\frac{225}{4}\\theta + 150\\sqrt{6}\\cos\\frac{\\theta}{2}$. Differentiating with respect to $\\theta$:<br>$$\\frac{\\mathrm{d}T}{\\mathrm{d}\\theta} = \\frac{225}{4} - 75\\sqrt{6}\\sin\\frac{\\theta}{2}$$<br>Setting $\\frac{\\mathrm{d}T}{\\mathrm{d}\\theta} = 0$:<br>$$75\\sqrt{6}\\sin\\frac{\\theta}{2} = \\frac{225}{4} \\implies \\sin\\frac{\\theta}{2} = \\frac{3}{4\\sqrt{6}}$$<br>$$\\theta = 2\\arcsin\\left(\\frac{3}{4\\sqrt{6}}\\right) \\approx 0.622368\\text{ rad}$$<br>Substituting into $T$:<br>$$T = \\frac{225}{4}(0.622368) + 150\\sqrt{6}\\cos\\left(\\frac{0.622368}{2}\\right) \\approx 384.785\\text{ seconds} \\approx 385\\text{ s} \\text{ (or } 6.41\\text{ minutes, 3 s.f.)}.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q6",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "Given that $b$ is a real constant such that $0 < b < 4$:",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Describe fully a sequence of transformations that transforms the curve $y = x^2$ to the curve $y = 4x^2 + bx + 1$.",
        type: "self",
        solution: "Completing the square:<br>$$y = 4x^2 + bx + 1 = 4\\left(x^2 + \\frac{b}{4}x\\right) + 1 = 4\\left(x + \\frac{b}{8}\\right)^2 + 1 - \\frac{b^2}{16}$$<br><strong>Method 1:</strong><br>1. Translate $\\frac{b}{8}$ units in the negative $x$-direction.<br>2. Scale parallel to the $y$-axis by a scale factor of $4$.<br>3. Translate $1 - \\frac{b^2}{16}$ units in the positive $y$-direction.<br><br><strong>Method 2:</strong><br>1. Translate $\\frac{b}{4}$ units in the negative $x$-direction.<br>2. Scale parallel to the $x$-axis by a scale factor of $\\frac{1}{2}$.<br>3. Translate $1 - \\frac{b^2}{16}$ units in the positive $y$-direction."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch the curve $y = \\frac{1}{4x^2 + bx + 1}$. Give the equation of any asymptotes and the coordinates of any axial intercepts and turning points, in terms of $b$ where appropriate.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="150" x2="262" y2="150" stroke-width="1.3"/>
  <polyline points="256,146 262,150 256,154" fill="none" stroke-width="1.3"/>
  <line x1="155" y1="168" x2="155" y2="16" stroke-width="1.3"/>
  <polyline points="151,22 155,16 159,22" fill="none" stroke-width="1.3"/>
  <text x="260" y="164" stroke="none">x</text>
  <text x="161" y="22" stroke="none">y</text>
  <text x="24" y="164" stroke="none">y = 0</text>
  <path d="M 24,146 C 68,144 96,120 112,86 C 122,64 134,64 146,84 C 151,92 155,96 168,112 C 192,138 225,145 256,147" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <circle cx="128" cy="68" r="2.8" fill="#4a8fe7" stroke="none"/>
  <circle cx="155" cy="96" r="2.8" fill="#4a8fe7" stroke="none"/>
  <text x="34" y="54" stroke="none">(-b/8, 16/(16 - b²))</text>
  <text x="163" y="96" stroke="none">(0, 1)</text>
</svg>`,
        solution: "Since $0 < b < 4$, the minimum value of $4x^2 + bx + 1$ is $1 - \\frac{b^2}{16} = \\frac{16 - b^2}{16} > 0$, occurring at $x = -\\frac{b}{8}$.<br>Therefore, $y = \\frac{1}{4x^2 + bx + 1}$ is always positive with:<br>• Horizontal asymptote: $y = 0$<br>• $y$-intercept: $(0, 1)$<br>• Maximum turning point: $\\left(-\\frac{b}{8},\\; \\frac{16}{16 - b^2}\\right)$."
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q7",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Sequences & Series", "Maclaurin Series"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Use the formula listed in the List of Formulae (MF27) to explain why $\\sum_{r=0}^{\\text{∞}} \\frac{1}{r!} = \\mathrm{e}$.",
        type: "self",
        solution: "From MF27, for all real $x$:<br>$$\\mathrm{e}^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots + \\frac{x^r}{r!} + \\dots = \\sum_{r=0}^{\\text{∞}} \\frac{x^r}{r!}$$<br>Substituting $x = 1$ gives:<br>$$\\mathrm{e}^1 = \\sum_{r=0}^{\\text{∞}} \\frac{1^r}{r!} \\implies \\sum_{r=0}^{\\text{∞}} \\frac{1}{r!} = \\mathrm{e}.$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Show that $\\sum_{r=0}^{\\text{∞}} \\frac{r+1}{r!} = 2\\mathrm{e}$.",
        type: "self",
        solution: "$$\\sum_{r=0}^{\\text{∞}} \\frac{r+1}{r!} = \\sum_{r=0}^{\\text{∞}} \\frac{r}{r!} + \\sum_{r=0}^{\\text{∞}} \\frac{1}{r!}$$<br>Since the $r = 0$ term of $\\sum \\frac{r}{r!}$ is $0$:<br>$$= \\sum_{r=1}^{\\text{∞}} \\frac{r}{r!} + \\mathrm{e} = \\sum_{r=1}^{\\text{∞}} \\frac{1}{(r-1)!} + \\mathrm{e}$$<br>Re-indexing with $k = r - 1$:<br>$$= \\sum_{k=0}^{\\text{∞}} \\frac{1}{k!} + \\mathrm{e} = \\mathrm{e} + \\mathrm{e} = 2\\mathrm{e} \\quad (\\text{shown}).$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find the value, in terms of $\\mathrm{e}$, of $\\sum_{r=6}^{\\text{∞}} \\frac{r+1}{r!}$.",
        type: "auto",
        mode: "number",
        answer: "2*e - 217/40",
        exactRequired: true,
        placeholder: "Exact value in terms of e",
        solution: "$$\\sum_{r=6}^{\\text{∞}} \\frac{r+1}{r!} = \\sum_{r=0}^{\\text{∞}} \\frac{r+1}{r!} - \\sum_{r=0}^{5} \\frac{r+1}{r!}$$<br>$$= 2\\mathrm{e} - \\left(\\frac{1}{0!} + \\frac{2}{1!} + \\frac{3}{2!} + \\frac{4}{3!} + \\frac{5}{4!} + \\frac{6}{5!}\\right)$$<br>$$= 2\\mathrm{e} - \\left(1 + 2 + \\frac{3}{2} + \\frac{2}{3} + \\frac{5}{24} + \\frac{1}{20}\\right) = 2\\mathrm{e} - \\frac{217}{40}.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q8",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\text{f}$ is defined by<br>$$\\text{f}(x) = \\frac{ax - 3}{5x - 4}, \\quad \\text{for } x \\text{ ∈ ℝ},\\; x \\ne \\frac{4}{5}, \\text{ and } a \\text{ ∈ ℝ}.$$",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the range of $\\text{f}$ in terms of $a$.",
        type: "self",
        solution: "Since $\\text{f}(x) = \\frac{a}{5} + \\frac{\\frac{4a}{5} - 3}{5x - 4}$ has horizontal asymptote $y = \\frac{a}{5}$ (assuming $a \\ne \\frac{15}{4}$):<br>$$R_{\\text{f}} = \\left(-\\text{∞},\\; \\frac{a}{5}\\right) \\cup \\left(\\frac{a}{5},\\; \\text{∞}\\right) \\quad \\text{or} \\quad \\text{ℝ} \\setminus \\left\\{\\frac{a}{5}\\right\\}.$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The function $\\text{f}$ is such that $\\text{f}(x) = \\text{f}^{-1}(x)$ for all $x$ in the domain of $\\text{f}$. Find the value of $a$.",
        type: "auto",
        mode: "number",
        answer: "4",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Let $y = \\frac{ax - 3}{5x - 4}$. Solving for $x$:<br>$$5xy - 4y = ax - 3 \\implies x(5y - a) = 4y - 3 \\implies x = \\frac{4y - 3}{5y - a}$$<br>Thus $\\text{f}^{-1}(x) = \\frac{4x - 3}{5x - a}$ for $x \\ne \\frac{a}{5}$.<br>Since $\\text{f}(x) = \\text{f}^{-1}(x)$ for all $x \\in D_{\\text{f}}$, comparing coefficients (or matching $D_{\\text{f}} = R_{\\text{f}}$) gives $a = 4$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Hence find $\\text{f}^{2025}(2)$.",
        type: "auto",
        mode: "number",
        answer: "5/6",
        exactRequired: true,
        placeholder: "Exact fraction",
        solution: "Since $\\text{f}(x) = \\text{f}^{-1}(x)$, we have $\\text{f}^2(x) = \\text{ff}^{-1}(x) = x$.<br>Therefore, for any odd positive integer $2k + 1$, $\\text{f}^{2k+1}(x) = \\text{f}(x)$.<br>$$\\text{f}^{2025}(2) = \\text{f}(2) = \\frac{4(2) - 3}{5(2) - 4} = \\frac{5}{6}.$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Another function $\\text{g}$ is defined by $\\text{g}(x) = \\left(x - \\frac{1}{5}\\right)^2 + \\frac{2}{5}$, for $x$ ∈ ℝ, $0 < x < \\frac{3}{5}$. Find the range of $\\text{fg}$.",
        type: "self",
        solution: "For $\\text{g}(x) = \\left(x - \\frac{1}{5}\\right)^2 + \\frac{2}{5}$ on $\\left(0, \\frac{3}{5}\\right)$:<br>• Minimum at vertex $x = \\frac{1}{5}$: $\\text{g}\\left(\\frac{1}{5}\\right) = \\frac{2}{5}$.<br>• At $x = 0$: $\\text{g}(0) = \\frac{11}{25}$; at $x = \\frac{3}{5}$: $\\text{g}\\left(\\frac{3}{5}\\right) = \\frac{14}{25}$.<br>Hence $R_{\\text{g}} = \\left[\\frac{2}{5},\\; \\frac{14}{25}\\right)$.<br>Mapping $R_{\\text{g}}$ through $\\text{f}(x) = \\frac{4x - 3}{5x - 4}$ (which is strictly decreasing on $(-\\text{∞}, \\frac{4}{5})$):<br>$$\\text{f}\\left(\\frac{2}{5}\\right) = \\frac{\\frac{8}{5} - 3}{2 - 4} = \\frac{7}{10}, \\qquad \\text{f}\\left(\\frac{14}{25}\\right) = \\frac{\\frac{56}{25} - 3}{\\frac{14}{5} - 4} = \\frac{19}{30}$$<br>Therefore, $R_{\\text{fg}} = \\left(\\frac{19}{30},\\; \\frac{7}{10}\\right]$."
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q9",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find $\\int (2x - 1)\\cos x\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "(2*x - 1)*sin(x) + 2*cos(x)",
        domainPoints: [0, 1, 2],
        placeholder: "Expression in terms of x (omit + C)",
        solution: "Using integration by parts with $u = 2x - 1$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\cos x$:<br>$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = 2, \\quad v = \\sin x$$<br>$$\\int (2x - 1)\\cos x\\,\\mathrm{d}x = (2x - 1)\\sin x - \\int 2\\sin x\\,\\mathrm{d}x = (2x - 1)\\sin x + 2\\cos x + C.$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Hence find the value of $\\int_0^{\\frac{\\pi}{2}} |2x - 1|\\cos x\\,\\mathrm{d}x$. Give your answer in the form $A - 4\\cos B$, where $A$ and $B$ are exact constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "A =", answer: "pi + 1", exactRequired: true, placeholder: "Exact value" },
          { label: "B =", answer: "1/2", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "On $\\left[0, \\frac{\\pi}{2}\\right]$, $2x - 1 < 0$ for $0 \\le x < \\frac{1}{2}$ and $2x - 1 \\ge 0$ for $\\frac{1}{2} \\le x \\le \\frac{\\pi}{2}$. Splitting the integral at $x = 0.5$:<br>$$\\int_0^{\\frac{\\pi}{2}} |2x - 1|\\cos x\\,\\mathrm{d}x = -\\int_0^{0.5} (2x - 1)\\cos x\\,\\mathrm{d}x + \\int_{0.5}^{\\frac{\\pi}{2}} (2x - 1)\\cos x\\,\\mathrm{d}x$$<br>$$= -\\Big[(2x - 1)\\sin x + 2\\cos x\\Big]_0^{0.5} + \\Big[(2x - 1)\\sin x + 2\\cos x\\Big]_{0.5}^{\\frac{\\pi}{2}}$$<br>$$= -\\big(2\\cos(0.5) - 2\\big) + \\big((\\pi - 1)(1) + 0 - 2\\cos(0.5)\\big)$$<br>$$= \\pi + 1 - 4\\cos(0.5)$$<br>Hence $A = \\pi + 1$ and $B = \\frac{1}{2}$ (or $0.5$)."
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q10",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Express $\\frac{1}{Q(500 - Q)}$ in partial fractions.",
        type: "self",
        solution: "Let $\\frac{1}{Q(500 - Q)} = \\frac{A}{Q} + \\frac{B}{500 - Q}$.<br>Then $1 = A(500 - Q) + BQ$.<br>• Setting $Q = 0$: $1 = 500A \\implies A = \\frac{1}{500}$.<br>• Setting $Q = 500$: $1 = 500B \\implies B = \\frac{1}{500}$.<br>$$\\therefore \\frac{1}{Q(500 - Q)} = \\frac{1}{500Q} + \\frac{1}{500(500 - Q)}.$$"
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "A group of scientists is monitoring the population of a particular species of birds on an island. At time $t$ years after the start of the monitoring, the number of birds on the island is $Q$. The scientists observe that the birth rate is proportional to the bird's population and the birds are dying at a rate proportional to the square of the bird's population. There were $1000$ birds on the island when the scientists first started monitoring the population. They discover that the population remains unchanged when there are $500$ birds.<br><br>Show that the differential equation relating $Q$ and $t$ is given by<br>$$\\frac{\\mathrm{d}Q}{\\mathrm{d}t} = kQ(500 - Q),$$<br>where $k$ is a positive constant.",
        type: "self",
        solution: "Let the birth rate be $aQ$ and the death rate be $bQ^2$, where $a, b > 0$ are constants of proportionality.<br>Then:<br>$$\\frac{\\mathrm{d}Q}{\\mathrm{d}t} = aQ - bQ^2$$<br>When $Q = 500$, the population remains unchanged, so $\\frac{\\mathrm{d}Q}{\\mathrm{d}t} = 0$:<br>$$500a - 250000b = 0 \\implies a = 500b$$<br>Substituting $a = 500b$ and letting $k = b > 0$:<br>$$\\frac{\\mathrm{d}Q}{\\mathrm{d}t} = 500bQ - bQ^2 = kQ(500 - Q) \\quad (\\text{shown}).$$"
      },
      {
        label: "(b)(ii)",
        marks: 5,
        prompt: "Hence, solve the differential equation, expressing $Q$ in terms of $k$ and $t$.",
        type: "auto",
        mode: "expr",
        vars: { k: [0.001, 0.002], t: [1, 2] },
        answer: "1000*e^(500*k*t)/(2*e^(500*k*t) - 1)",
        placeholder: "Expression in terms of k and t",
        solution: "Separating variables and using part (a):<br>$$\\int \\frac{1}{Q(500 - Q)}\\,\\mathrm{d}Q = \\int k\\,\\mathrm{d}t$$<br>$$\\frac{1}{500}\\int \\left(\\frac{1}{Q} + \\frac{1}{500 - Q}\\right)\\mathrm{d}Q = kt + C$$<br>$$\\frac{1}{500}\\Big(\\ln|Q| - \\ln|500 - Q|\\Big) = kt + C$$<br>$$\\ln\\left|\\frac{Q}{500 - Q}\\right| = 500kt + 500C \\implies \\frac{Q}{500 - Q} = H\\mathrm{e}^{500kt}$$<br>where $H = \\pm\\mathrm{e}^{500C}$.<br>Given that $Q = 1000$ when $t = 0$:<br>$$\\frac{1000}{500 - 1000} = H \\implies H = -2$$<br>Thus $\\frac{Q}{500 - Q} = -2\\mathrm{e}^{500kt}$:<br>$$Q = -1000\\mathrm{e}^{500kt} + 2Q\\mathrm{e}^{500kt} \\implies Q(2\\mathrm{e}^{500kt} - 1) = 1000\\mathrm{e}^{500kt}$$<br>$$\\therefore Q = \\frac{1000\\mathrm{e}^{500kt}}{2\\mathrm{e}^{500kt} - 1}.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q11",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Vectors"],
    stem: "The points $A$ and $B$ have coordinates $(15, 3, 0)$ and $(5, 9, 5)$ respectively. Two lines $l_1$ and $l_2$, which are perpendicular to each other, have the following equations:<br>$$l_1 : \\mathbf{r} = (15 - \\lambda)\\mathbf{i} + (3 + 2\\lambda)\\mathbf{j} + 4\\lambda\\mathbf{k},$$<br>$$l_2 : \\mathbf{r} = (5 + 8\\mu)\\mathbf{i} + (9 - 2\\mu)\\mathbf{j} + (5 + m\\mu)\\mathbf{k},$$<br>where $\\lambda$ and $\\mu$ are parameters and $m$ is a constant.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the value of $m$.",
        type: "auto",
        mode: "number",
        answer: "3",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Direction vectors of $l_1$ and $l_2$ are $\\begin{pmatrix} -1 \\\\ 2 \\\\ 4 \\end{pmatrix}$ and $\\begin{pmatrix} 8 \\\\ -2 \\\\ m \\end{pmatrix}$.<br>Since $l_1 \\perp l_2$:<br>$$\\begin{pmatrix} -1 \\\\ 2 \\\\ 4 \\end{pmatrix} \\cdot \\begin{pmatrix} 8 \\\\ -2 \\\\ m \\end{pmatrix} = 0 \\implies -8 - 4 + 4m = 0 \\implies m = 3.$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Given that $l_1$ and $l_2$ intersect, find the coordinates of the point of intersection $E$.",
        type: "auto",
        mode: "tuple",
        answer: [13, 7, 8],
        placeholder: "Coordinates (x, y, z)",
        solution: "Equating components of $l_1$ and $l_2$:<br>$15 - \\lambda = 5 + 8\\mu \\implies \\lambda + 8\\mu = 10$<br>$3 + 2\\lambda = 9 - 2\\mu \\implies 2\\lambda + 2\\mu = 6 \\implies \\lambda + \\mu = 3$<br>Subtracting gives $7\\mu = 7 \\implies \\mu = 1$ and $\\lambda = 2$.<br>Check $z$-component: $4(2) = 8$ and $5 + 3(1) = 8$ (consistent).<br>Substituting $\\lambda = 2$ into $l_1$ gives $E = (13, 7, 8)$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find a cartesian equation of the plane $\\Pi$ which contains the points $A$, $B$ and $E$.",
        type: "self",
        solution: "$$AB = \\begin{pmatrix} 5 \\\\ 9 \\\\ 5 \\end{pmatrix} - \\begin{pmatrix} 15 \\\\ 3 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} -10 \\\\ 6 \\\\ 5 \\end{pmatrix}, \\qquad AE = \\begin{pmatrix} 13 \\\\ 7 \\\\ 8 \\end{pmatrix} - \\begin{pmatrix} 15 \\\\ 3 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 4 \\\\ 8 \\end{pmatrix}$$<br>Normal vector to $\\Pi$:<br>$$\\begin{pmatrix} -10 \\\\ 6 \\\\ 5 \\end{pmatrix} \\times \\begin{pmatrix} -2 \\\\ 4 \\\\ 8 \\end{pmatrix} = \\begin{pmatrix} 28 \\\\ 70 \\\\ -28 \\end{pmatrix} = 14\\begin{pmatrix} 2 \\\\ 5 \\\\ -2 \\end{pmatrix}$$<br>Using point $A(15, 3, 0)$:<br>$$\\mathbf{r} \\cdot \\begin{pmatrix} 2 \\\\ 5 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} 15 \\\\ 3 \\\\ 0 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ 5 \\\\ -2 \\end{pmatrix} = 30 + 15 + 0 = 45$$<br>Cartesian equation of $\\Pi$: $2x + 5y - 2z = 45$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "The point $D$ has coordinates $(-1, -3, 2)$. Find the position vector of the point $F$, the foot of perpendicular of $D$ to $\\Pi$.",
        type: "auto",
        mode: "tuple",
        answer: [3, 7, -2],
        placeholder: "Vector components (x, y, z)",
        solution: "The line through $D$ perpendicular to $\\Pi$ is $\\mathbf{r} = \\begin{pmatrix} -1 \\\\ -3 \\\\ 2 \\end{pmatrix} + t\\begin{pmatrix} 2 \\\\ 5 \\\\ -2 \\end{pmatrix}$.<br>Since $F$ lies on $\\Pi$:<br>$$2(-1 + 2t) + 5(-3 + 5t) - 2(2 - 2t) = 45$$<br>$$-21 + 33t = 45 \\implies 33t = 66 \\implies t = 2$$<br>Hence the position vector of $F$ is $OF = \\begin{pmatrix} -1 + 4 \\\\ -3 + 10 \\\\ 2 - 4 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 7 \\\\ -2 \\end{pmatrix}$."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Find the exact area of the circle that passes through $A$, $D$ and $F$.",
        type: "auto",
        mode: "number",
        answer: "74*pi",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solutionSvg: `<svg viewBox="0 0 260 175" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="48,142 208,142 238,94 78,94" fill="none" stroke-dasharray="5,3" opacity="0.65" stroke-width="1.2"/>
  <circle cx="135" cy="94" r="62" fill="none" stroke="#2c2925" stroke-width="1.3"/>
  <polygon points="82,126 184,126 184,56" fill="rgba(91,155,213,0.14)" stroke="#4a8fe7" stroke-width="1.8"/>
  <polyline points="174,126 174,116 184,116" fill="none" stroke="#2c2925" stroke-width="1.2"/>
  <circle cx="82" cy="126" r="3" fill="#4a8fe7" stroke="none"/>
  <circle cx="184" cy="126" r="3" fill="#4a8fe7" stroke="none"/>
  <circle cx="184" cy="56" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="67" y="131" stroke="none" font-style="italic">A</text>
  <text x="190" y="131" stroke="none" font-style="italic">F</text>
  <text x="191" y="59" stroke="none" font-style="italic">D</text>
</svg>`,
        solution: "Since $DF$ is perpendicular to $\\Pi$ and $A, F$ lie on $\\Pi$, ∠$DFA = 90^\\circ$.<br>By the converse of angle in a semicircle, $AD$ is a diameter of the circle passing through $A$, $D$ and $F$.<br>$$AD = \\begin{pmatrix} -1 \\\\ -3 \\\\ 2 \\end{pmatrix} - \\begin{pmatrix} 15 \\\\ 3 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} -16 \\\\ -6 \\\\ 2 \\end{pmatrix}$$<br>Radius $r = \\frac{1}{2}|AD| = \\frac{1}{2}\\sqrt{(-16)^2 + (-6)^2 + 2^2} = \\frac{1}{2}\\sqrt{296} = \\sqrt{74}$.<br>Area of circle $= \\pi r^2 = 74\\pi\\text{ units}^2$."
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q12",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a graphing calculator for this question.</strong><br>It is given that $\\text{f}(z) = z^4 - 6z^2 + k$, where $k$ is a non-zero constant.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "If $k$ is a purely imaginary number, determine, with justification, whether $\\text{f}(z) = 0$ can have real roots.",
        type: "self",
        solution: "Assume $\\text{f}(z) = 0$ has a real root $x$. Then:<br>$$x^4 - 6x^2 = -k$$<br>Since $x$ is real, the LHS $x^4 - 6x^2$ is real, whereas the RHS $-k$ is non-zero purely imaginary. This is a contradiction.<br>Hence $\\text{f}(z) = 0$ <strong>cannot</strong> have real roots."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Show that $\\text{f}(-z) = \\text{f}(z)$.",
        type: "self",
        solution: "$$\\text{f}(-z) = (-z)^4 - 6(-z)^2 + k = z^4 - 6z^2 + k = \\text{f}(z) \\quad (\\text{shown}).$$"
      },
      {
        label: "(c)",
        marks: 6,
        prompt: "Given that $2 + \\mathrm{i}$ is a root of the equation $\\text{f}(z) = 0$, determine $k$. Hence, or otherwise, find the remaining roots, showing your workings clearly.",
        type: "self",
        solution: "Compute powers of $2 + \\mathrm{i}$:<br>$$(2 + \\mathrm{i})^2 = 4 + 4\\mathrm{i} + \\mathrm{i}^2 = 3 + 4\\mathrm{i}$$<br>$$(2 + \\mathrm{i})^4 = (3 + 4\\mathrm{i})^2 = 9 + 24\\mathrm{i} - 16 = -7 + 24\\mathrm{i}$$<br>Since $\\text{f}(2 + \\mathrm{i}) = 0$:<br>$$(-7 + 24\\mathrm{i}) - 6(3 + 4\\mathrm{i}) + k = 0 \\implies -25 + k = 0 \\implies k = 25$$<br>Since all coefficients of $\\text{f}(z) = 0$ are real and $2 + \\mathrm{i}$ is a root, its conjugate $2 - \\mathrm{i}$ is also a root.<br>By part (b), $\\text{f}(-z) = \\text{f}(z)$, so if $z$ is a root, then $-z$ is also a root.<br>Therefore, the remaining roots are $2 - \\mathrm{i}$, $-2 - \\mathrm{i}$, and $-2 + \\mathrm{i}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Use the value of $k$ found in part (c) for the rest of this question.<br>Given that the product of all the roots of $\\text{f}(z) = 0$ is $D$, find the value of $D$, showing your workings clearly.",
        type: "auto",
        mode: "number",
        answer: "25",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "$$(2 + \\mathrm{i})(2 - \\mathrm{i}) = 2^2 + 1^2 = 5$$<br>$$(-2 + \\mathrm{i})(-2 - \\mathrm{i}) = (-2)^2 + 1^2 = 5$$<br>Therefore, $D = 5 \\times 5 = 25$."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "A complex number $w_1$ satisfies the equation $kw^4 - 6w^2 + 1 = 0$. Given that $w_1$ can be obtained from $2 + \\mathrm{i}$, find $w_1$.",
        type: "self",
        solution: "<strong>Method 1:</strong> Dividing $z^4 - 6z^2 + k = 0$ by $z^4$ gives $k\\left(\\frac{1}{z}\\right)^4 - 6\\left(\\frac{1}{z}\\right)^2 + 1 = 0$.<br>Setting $w = \\frac{1}{z}$ with $z = 2 + \\mathrm{i}$:<br>$$w_1 = \\frac{1}{2 + \\mathrm{i}} = \\frac{2 - \\mathrm{i}}{4 + 1} = \\frac{2}{5} - \\frac{1}{5}\\mathrm{i}$$<br><strong>Method 2:</strong> Multiplying $25w^4 - 6w^2 + 1 = 0$ by $25$ gives $(5w)^4 - 6(5w)^2 + 25 = 0$.<br>Setting $5w = 2 + \\mathrm{i}$ gives $w_1 = \\frac{2}{5} + \\frac{1}{5}\\mathrm{i}$."
      }
    ]
  },
  {
    id: "HCI-2025-P1-Q13",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q13",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "Frederick, a social media influencer, is starting a new online account at the start of a month. From the second month onwards:<br>• His organic followers at the end of each month will be $a$ times the total followers he had at the end of the previous month, where $a$ is a positive constant.<br>• A company he engaged in will provide him with $1000$ additional followers in the middle of each month.<br><br>Let $F(n)$ denote the total number of organic and additional followers Frederick had at the end of $n$ months after he started his new online account, for $n$ ∈ ℤ⁺.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Write down a recurrence relationship between $F(n)$ and $F(n+1)$ for $n$ ∈ ℤ⁺, giving your answer in terms of $a$.",
        type: "self",
        solution: "$$F(n + 1) = aF(n) + 1000$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is found that Frederick has $3500$ followers at the end of the first month.<br>Show that $F(3) = 3500a^2 + 1000a + 1000$.",
        type: "self",
        solution: "Given $F(1) = 3500$:<br>$$F(2) = aF(1) + 1000 = 3500a + 1000$$<br>$$F(3) = aF(2) + 1000 = a(3500a + 1000) + 1000 = 3500a^2 + 1000a + 1000 \\quad (\\text{shown}).$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Find an expression for $F(n)$. Hence, find the number of months required for Frederick's followers to exceed one million if $a = 1.5$.",
        type: "self",
        solution: "Continuing the pattern:<br>$F(4) = 3500a^3 + 1000a^2 + 1000a + 1000$<br>In general, for $a \\ne 1$:<br>$$F(n) = 3500a^{n-1} + 1000(1 + a + a^2 + \\dots + a^{n-2}) = 3500a^{n-1} + \\frac{1000(1 - a^{n-1})}{1 - a}$$<br>(When $a = 1$, $F(n) = 3500 + 1000(n-1)$.)<br>For $a = 1.5$, we require $F(n) > 1000000$:<br>$$3500(1.5)^{n-1} - 2000\\big(1 - (1.5)^{n-1}\\big) > 1000000$$<br>Using GC table:<br>• $n = 13$: $F(13) \\approx 711604$<br>• $n = 14$: $F(14) \\approx 1068407$<br>Hence Frederick will need <strong>$14$ months</strong> for his followers to exceed one million."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Given that the number of followers exceeds $20000$ by the end of the first year, determine the range of values of $a$.",
        type: "self",
        solution: "At the end of the first year ($n = 12$):<br>$$F(12) = 3500a^{11} + \\frac{1000(1 - a^{11})}{1 - a} > 20000$$<br>From GC, the intersection with $y = 20000$ occurs at $a \\approx 1.04858$.<br>Therefore, $a > 1.05$ (to 3 s.f.)."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Frederick finds out that, instead of the additional $1000$ followers in the middle of every month, the company can only provide him with additional $b$ followers in the middle of every month.<br>Given that the number of followers remains constant since the end of the first month, find the relationship between $a$ and $b$.",
        type: "self",
        solution: "The recurrence relation is now $F(n + 1) = aF(n) + b$.<br>Since the number of followers remains constant after the first month, $F(2) = F(1) = 3500$:<br>$$a(3500) + b = 3500 \\implies 3500a + b = 3500 \\quad \\text{or} \\quad a = 1 - \\frac{b}{3500}.$$"
      }
    ]
  }
]);
