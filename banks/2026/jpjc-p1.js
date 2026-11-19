window.registerQuestions([
  {
    id: "JPJC-2026-P1-Q1",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Modulus Functions", "Curve Sketching"],
    stem: "The curve $C$ has equation $y = |1 + 2\\cos x|$, $0 \\le x \\le 2\\pi$.",
    parts: [
      {
        label: "(Full) Sketch",
        marks: 3,
        prompt: "Sketch the graph of $C$, stating the exact coordinates of the turning point(s) and where the curve meets the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 165" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="130" x2="245" y2="130" stroke-width="1.3"/><line x1="40" y1="150" x2="40" y2="15" stroke-width="1.3"/><polyline points="239,126 245,130 239,134" fill="none" stroke-width="1.3"/><polyline points="36,21 40,15 44,21" fill="none" stroke-width="1.3"/><polyline points="40,40 48,43 56,50 64,61 72,74 80,88 88,103 96,118 100,130 106,120 114,110 122,102 130,100 138,102 146,110 154,120 160,130 164,118 172,103 180,88 188,74 196,61 204,50 212,43 220,40" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="40" cy="40" r="2.5" fill="#4a8fe7"/><circle cx="100" cy="130" r="2.5" fill="#4a8fe7"/><circle cx="130" cy="100" r="2.5" fill="#4a8fe7"/><circle cx="160" cy="130" r="2.5" fill="#4a8fe7"/><circle cx="220" cy="40" r="2.5" fill="#4a8fe7"/><text x="45" y="34" stroke="none">(0, 3)</text><text x="100" y="146" text-anchor="middle" stroke="none">(2π/3, 0)</text><text x="130" y="91" text-anchor="middle" stroke="none">(π, 1)</text><text x="160" y="146" text-anchor="middle" stroke="none">(4π/3, 0)</text><text x="220" y="33" text-anchor="middle" stroke="none">(2π, 3)</text><text x="242" y="143" stroke="none" font-style="italic">x</text><text x="46" y="20" stroke="none" font-style="italic">y</text></svg>`,
        solution: "End points: $(0, 3)$ and $(2\\pi, 3)$.<br>$x$-intercepts (cusps): $\\left(\\frac{2\\pi}{3}, 0\\right)$ and $\\left(\\frac{4\\pi}{3}, 0\\right)$.<br>Turning point (local maximum): $(\\pi, 1)$."
      },
      {
        label: "(Full) Values of k",
        marks: 2,
        prompt: "Hence find the set of values of $k$ for which the equation $|1 + 2\\cos x| = k$ has at least $3$ distinct roots in the interval $0 \\le x \\le 2\\pi$.",
        type: "self",
        solution: "From the graph, a horizontal line $y = k$ cuts $C$ at least $3$ times when $0 < k \\le 1$."
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q2",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation Applications", "Rates of Change"],
    diagramSvg: `<svg viewBox="0 0 210 175" width="195" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><ellipse cx="95" cy="30" rx="60" ry="12" fill="none" stroke-width="1.4"/><line x1="35" y1="30" x2="95" y2="155" stroke-width="1.5"/><line x1="155" y1="30" x2="95" y2="155" stroke-width="1.5"/><ellipse cx="95" cy="75" rx="38.4" ry="8" fill="rgba(91,155,213,0.22)" stroke="#4a8fe7" stroke-width="1.3"/><polygon points="56.6,75 133.4,75 95,155" fill="rgba(91,155,213,0.18)" stroke="none"/><line x1="95" y1="30" x2="95" y2="155" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="95" y1="30" x2="155" y2="30" stroke-width="1.1"/><text x="125" y="25" text-anchor="middle" stroke="none">6 cm</text><line x1="172" y1="30" x2="172" y2="155" stroke-width="1.1"/><text x="178" y="96" stroke="none">12 cm</text></svg>`,
    stem: "Water is draining from an inverted right circular conical container with its vertex at the bottom. The container has a height of $12\\text{ cm}$ and a base radius of $6\\text{ cm}$. Water drains at a constant rate of $2\\text{ cm}^3/\\text{min}$. [Volume of cone $= \\frac{1}{3}\\pi r^2 h$.]",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the rate at which the water depth $h$ is decreasing (in $\\text{cm}/\\text{min}$) when $h = 4\\text{ cm}$.",
        type: "auto",
        mode: "number",
        answer: "1/(2*pi)",
        placeholder: "Exact or 3 s.f.",
        solution: "By similar triangles: $\\frac{r}{h} = \\frac{6}{12} = \\frac{1}{2} \\implies r = \\frac{1}{2}h$.<br>$V = \\frac{1}{3}\\pi\\left(\\frac{h}{2}\\right)^2 h = \\frac{1}{12}\\pi h^3 \\implies \\frac{\\mathrm{d}V}{\\mathrm{d}h} = \\frac{1}{4}\\pi h^2$.<br>Since $\\frac{\\mathrm{d}V}{\\mathrm{d}t} = -2$, when $h = 4$: $-2 = \\frac{1}{4}\\pi(4)^2\\frac{\\mathrm{d}h}{\\mathrm{d}t} \\implies \\frac{\\mathrm{d}h}{\\mathrm{d}t} = -\\frac{1}{2\\pi}$.<br>Rate at which $h$ is decreasing $= \\frac{1}{2\\pi} \\approx 0.159\\text{ cm/min}$."
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q3",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Area Under Curve", "Volumes of Revolution"],
    diagramSvg: `<svg viewBox="0 0 240 190" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><path d="M 90 140 L 146 84 L 146 117.4 A 70 70 0 0 1 90 140 Z" fill="rgba(91,155,213,0.25)" stroke="none"/><line x1="15" y1="70" x2="225" y2="70" stroke-width="1.3"/><line x1="90" y1="180" x2="90" y2="12" stroke-width="1.3"/><path d="M 20 70 A 70 70 0 0 0 160 70" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><line x1="40" y1="185" x2="195" y2="30" stroke-width="1.4"/><line x1="146" y1="15" x2="146" y2="178" stroke-width="1.4"/><text x="152" y="24" stroke="none" font-style="italic">x = 4</text><text x="196" y="42" stroke="none" font-style="italic">y = x − 5</text><text x="155" y="138" stroke="none" font-size="10">y = −√(25−x²)</text><text x="128" y="114" stroke="none" font-style="italic">R</text><text x="80" y="62" stroke="none" font-style="italic">O</text></svg>`,
    stem: "The diagram shows the region $R$ which is bounded by the curve $y = -\\sqrt{25 - x^2}$, the lines $y = x - 5$ and $x = 4$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Calculate the area of $R$.",
        type: "auto",
        mode: "number",
        answer: "5.59119",
        placeholder: "3 s.f.",
        solution: "$$\\text{Area of } R = \\int_{0}^{4}\\left[(x-5) - (-\\sqrt{25-x^2})\\right]\\mathrm{d}x = 5.59\\text{ (3 s.f.)}.$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Find the volume of the solid of revolution obtained when $R$ is rotated completely about the $y$-axis.",
        type: "auto",
        mode: "number",
        answer: "28*pi",
        placeholder: "Exact or 3 s.f.",
        solution: "At $x = 4$, $y = -3$ on the circle and $y = -1$ on the line. Rotating $R$ about the $y$-axis:<br>$$V = \\pi\\int_{-5}^{-3}(25 - y^2)\\,\\mathrm{d}y + \\pi(4)^2(2) - \\frac{1}{3}\\pi(4)^2(4) = 28\\pi \\approx 88.0\\text{ (3 s.f.)}.$$"
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q4",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Differentiation Applications", "Maxima & Minima"],
    stem: "A solid cylinder has radius $r\\text{ cm}$, height $h\\text{ cm}$ and total surface area $1500\\text{ cm}^2$.",
    parts: [
      {
        label: "(Full)",
        marks: 5,
        prompt: "Find the maximum volume of the cylinder in the form $a\\sqrt{\\frac{10}{\\pi}}\\text{ cm}^3$, where $a$ is a constant to be determined.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2500*sqrt(10/pi)",
        placeholder: "Exact value in surd and pi",
        solution: "$1500 = 2\\pi r^2 + 2\\pi rh \\implies h = \\frac{750 - \\pi r^2}{\\pi r}$.<br>$V = \\pi r^2 h = 750r - \\pi r^3$.<br>$\\frac{\\mathrm{d}V}{\\mathrm{d}r} = 750 - 3\\pi r^2 = 0 \\implies r = \\sqrt{\\frac{250}{\\pi}}$ ($r > 0$), with $\\frac{\\mathrm{d}^2V}{\\mathrm{d}r^2} = -6\\pi r < 0$ (maximum).<br>$$V_{\\max} = \\sqrt{\\frac{250}{\\pi}}\\left(750 - 250\\right) = 500\\sqrt{\\frac{250}{\\pi}} = 2500\\sqrt{\\frac{10}{\\pi}}\\text{ cm}^3 \\quad (a = 2500).$$"
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q5",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Vectors", "Planes", "Vector Product"],
    stem: "Answer both parts on vectors.",
    parts: [
      {
        label: "(i)(a)",
        marks: 1,
        prompt: "A cartesian equation of a plane is $ax + by + cz = d$. State the significance of the vector $\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$ in relation to the plane.",
        type: "self",
        solution: "$\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$ is a normal vector (perpendicular) to the plane."
      },
      {
        label: "(i)(b)",
        marks: 1,
        prompt: "If $a^2 + b^2 + c^2 = 1$ and $d > 0$, state what $d$ represents.",
        type: "self",
        solution: "$d$ is the perpendicular distance from the origin to the plane."
      },
      {
        label: "(ii)(a)",
        marks: 3,
        prompt: "The non-zero vectors $\\mathbf{u}$ and $\\mathbf{v}$ are such that $(\\mathbf{u}-\\mathbf{v})\\times(\\mathbf{u}+\\mathbf{v}) = \\mathbf{0}$. Determine the geometric relationship between $\\mathbf{u}$ and $\\mathbf{v}$.",
        type: "self",
        solution: "$(\\mathbf{u}\\times\\mathbf{u}) - (\\mathbf{v}\\times\\mathbf{v}) - (\\mathbf{v}\\times\\mathbf{u}) + (\\mathbf{u}\\times\\mathbf{v}) = \\mathbf{0} \\implies 2(\\mathbf{u}\\times\\mathbf{v}) = \\mathbf{0} \\implies \\mathbf{u}\\times\\mathbf{v} = \\mathbf{0}$.<br>Since $\\mathbf{u}, \\mathbf{v}$ are non-zero, $\\mathbf{u}$ and $\\mathbf{v}$ are parallel."
      },
      {
        label: "(ii)(b)",
        marks: 1,
        prompt: "If $\\mathbf{u}$ and $\\mathbf{v}$ are unit vectors which are perpendicular, state the magnitude of $(\\mathbf{u}-\\mathbf{v})\\times(\\mathbf{u}+\\mathbf{v})$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2",
        placeholder: "Exact value",
        solution: "$|(\\mathbf{u}-\\mathbf{v})\\times(\\mathbf{u}+\\mathbf{v})| = 2|\\mathbf{u}\\times\\mathbf{v}| = 2|\\mathbf{u}||\\mathbf{v}|\\sin 90^\\circ = 2$."
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q6",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Complex Numbers", "Polynomial Roots", "Argand Diagram"],
    stem: "It is given that $-2 + 3\\mathrm{i}$ is a root of the equation $z^3 + az^2 - 7z + b = 0$, where $a$ and $b$ are real constants.",
    parts: [
      {
        label: "(a) a and b",
        marks: 3,
        prompt: "Find the values of $a$ and $b$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "-1", exactRequired: true, placeholder: "Integer" },
          { label: "b =", answer: "-65", exactRequired: true, placeholder: "Integer" }
        ],
        solution: "$(-2+3\\mathrm{i})^3 + a(-2+3\\mathrm{i})^2 - 7(-2+3\\mathrm{i}) + b = 0 \\implies 60 - 12\\mathrm{i} + a(-5 - 12\\mathrm{i}) + b = 0$.<br>Comparing imaginary parts: $-12a = 12 \\implies a = -1$.<br>Comparing real parts: $-5(-1) + b = -60 \\implies b = -65$."
      },
      {
        label: "(a) Other roots",
        marks: 2,
        prompt: "Find the other two roots of the equation.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["-2-3*i", "5"],
        placeholder: "Both roots separated by a comma",
        solution: "Since coefficients are real, $-2 - 3\\mathrm{i}$ is also a root, giving quadratic factor $z^2 + 4z + 13$.<br>$z^3 - z^2 - 7z - 65 = (z^2 + 4z + 13)(z - 5)$, so the third root is $5$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Represent all the three roots on an Argand diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 185" width="230" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="95" x2="225" y2="95" stroke-width="1.3"/><polyline points="219,91 225,95 219,99" fill="none" stroke-width="1.3"/><line x1="95" y1="175" x2="95" y2="12" stroke-width="1.3"/><polyline points="91,18 95,12 99,18" fill="none" stroke-width="1.3"/><polygon points="55,35 55,155 195,95" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.5"/><circle cx="55" cy="35" r="2.6" fill="#4a8fe7"/><circle cx="55" cy="155" r="2.6" fill="#4a8fe7"/><circle cx="195" cy="95" r="2.6" fill="#4a8fe7"/><text x="48" y="32" text-anchor="end" stroke="none">(−2, 3)</text><text x="48" y="164" text-anchor="end" stroke="none">(−2, −3)</text><text x="195" y="86" text-anchor="middle" stroke="none">5</text><text x="86" y="108" stroke="none" font-style="italic">O</text><text x="225" y="108" stroke="none">Re</text><text x="102" y="18" stroke="none">Im</text></svg>`,
        solution: "Plot $(-2, 3)$, $(-2, -3)$ and $(5, 0)$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Hence find the area of triangle $PQR$, where $P, Q$ and $R$ are points that represent the roots.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "21",
        placeholder: "Exact area",
        solution: "Base $= 3 - (-3) = 6$, height $= 5 - (-2) = 7$. Area $= \\frac{1}{2}(6)(7) = 21\\text{ units}^2$."
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q7",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Recurrence Relations", "Sigma Notation"],
    stem: "Answer both parts (a) and (b).",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "A sequence $v_1, v_2, v_3, \\dots$ is such that $20v_{n+1} = 17v_n + 14$, where $n > 0$ and $v_1 = 3$. Find the value of $v_{15}$, giving your answer to <strong>3 decimal places</strong>.",
        type: "auto",
        mode: "number",
        dp: 3,
        answer: "4.49538",
        placeholder: "3 d.p.",
        solution: "$v_{n+1} = \\frac{17v_n + 14}{20}$. From GC, $v_{15} = 4.495$ (3 d.p.)."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Given that as $n$ increases without bound, $v_n$ approaches $L$, find the <strong>exact</strong> value of $L$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "14/3",
        placeholder: "Exact fraction",
        solution: "$20L = 17L + 14 \\implies 3L = 14 \\implies L = \\frac{14}{3}$."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "It is given that $\\sum_{r=1}^{n} r^2 = \\frac{1}{6}n(n+1)(2n+1)$. Find in terms of $n$, the sum $1^2 + 2^2 + 3^2 + \\dots + 4n^2$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { n: [1, 2, 3] },
        answer: "1/3*n*(2*n+1)*(4*n+1)",
        placeholder: "Expression in terms of n",
        solution: "$$\\sum_{r=1}^{2n} r^2 = \\frac{1}{6}(2n)(2n+1)(4n+1) = \\frac{1}{3}n(2n+1)(4n+1).$$"
      },
      {
        label: "(b)(ii) First sum",
        marks: 3,
        prompt: "Find in terms of $n$, the sum $(n+1)^2 + (n+2)^2 + \\dots + 4n^2$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { n: [1, 2, 3] },
        answer: "1/6*n*(2*n+1)*(7*n+1)",
        placeholder: "Expression in terms of n",
        solution: "$$\\sum_{r=1}^{2n} r^2 - \\sum_{r=1}^{n} r^2 = \\frac{1}{3}n(2n+1)(4n+1) - \\frac{1}{6}n(n+1)(2n+1) = \\frac{1}{6}n(2n+1)(7n+1).$$"
      },
      {
        label: "(b)(ii) Odd squares",
        marks: 2,
        prompt: "By using your answer to (b)(i), find in terms of $n$, the sum $1^2 + 3^2 + 5^2 + \\dots + (2n-1)^2$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { n: [1, 2, 3] },
        answer: "1/3*n*(2*n+1)*(2*n-1)",
        placeholder: "Expression in terms of n",
        solution: "$$\\sum_{r=1}^{2n} r^2 - 4\\sum_{r=1}^{n} r^2 = \\frac{1}{3}n(2n+1)(4n+1) - \\frac{2}{3}n(n+1)(2n+1) = \\frac{1}{3}n(2n+1)(2n-1).$$"
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q8",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Integration", "Integration by Parts", "Substitutions"],
    stem: "Evaluate the following integrals.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Find $\\int \\cos^2 2x\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.2, 0.5, 1.0],
        answer: "x/2 + sin(4*x)/8",
        placeholder: "Expression in x + C",
        solution: "$$\\int \\frac{1 + \\cos 4x}{2}\\,\\mathrm{d}x = \\frac{x}{2} + \\frac{1}{8}\\sin 4x + C.$$"
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find $\\int \\frac{x\\mathrm{e}^{x^2}}{\\sqrt{\\mathrm{e}^{x^2}+2}}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.5, 1.0, 1.5],
        answer: "sqrt(e^(x^2)+2)",
        placeholder: "Expression in x + C",
        solution: "$$\\frac{1}{2}\\int (2x\\mathrm{e}^{x^2})(\\mathrm{e}^{x^2}+2)^{-1/2}\\,\\mathrm{d}x = \\sqrt{\\mathrm{e}^{x^2}+2} + C.$$"
      },
      {
        label: "(a)(iii)",
        marks: 4,
        prompt: "Find $\\int x\\tan^{-1}(x^2)\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.5, 1.0, 1.5],
        answer: "x^2/2*atan(x^2) - 1/4*ln(1+x^4)",
        placeholder: "Expression in x + C",
        solution: "Integrate by parts with $u = \\tan^{-1}(x^2)$, $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = x$:<br>$$\\frac{x^2}{2}\\tan^{-1}(x^2) - \\frac{1}{4}\\int \\frac{4x^3}{1+x^4}\\,\\mathrm{d}x = \\frac{x^2}{2}\\tan^{-1}(x^2) - \\frac{1}{4}\\ln(1+x^4) + C.$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "By using the substitution $x = 4\\cos^2\\theta$, find the <strong>exact</strong> value of $$\\int_{2}^{3}\\frac{1}{x\\sqrt{4-x}}\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "ln((sqrt(2)+1)/sqrt(3))",
        placeholder: "Exact value in ln",
        solution: "$\\mathrm{d}x = -8\\sin\\theta\\cos\\theta\\,\\mathrm{d}\\theta$; $x=2 \\implies \\theta=\\frac{\\pi}{4}$, $x=3 \\implies \\theta=\\frac{\\pi}{6}$.<br>$$\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}} \\sec\\theta\\,\\mathrm{d}\\theta = \\left[\\ln|\\sec\\theta + \\tan\\theta|\\right]_{\\frac{\\pi}{6}}^{\\frac{\\pi}{4}} = \\ln(\\sqrt{2}+1) - \\ln\\sqrt{3} = \\ln\\frac{\\sqrt{2}+1}{\\sqrt{3}}.$$"
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q9",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Parametric Equations", "Tangents and Normals"],
    stem: "The curve $C$ is defined by $x = 3t^2 - 4t + \\frac{1}{2}$, $y = 3t^3 - \\frac{9}{2}t^2 + 2t + \\frac{49}{18}$, for $0 < t < 1$, $t \\ne \\frac{2}{3}$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $t$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { t: [0.2, 0.5, 0.8] },
        answer: "1/2*(3*t-1)",
        placeholder: "Expression in terms of t",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 2(3t-2)$, $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = (3t-1)(3t-2) \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{2}(3t-1)$."
      },
      {
        label: "(ii) Point Q",
        marks: 2,
        prompt: "Find the coordinates of the stationary point $Q$.",
        type: "auto",
        mode: "tuple",
        exactRequired: true,
        answer: [-0.5, 3],
        placeholder: "(x, y)",
        solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies t = \\frac{1}{3} \\implies Q = \\left(-\\frac{1}{2}, 3\\right)$."
      },
      {
        label: "(ii) Tangent",
        marks: 1,
        prompt: "Write down the equation of the tangent to $C$ at $Q$.",
        type: "self",
        solution: "Equation of tangent at $Q$ is $y = 3$."
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "The tangent at $Q$ cuts $C$ again at the point $R$. Find the equation of the normal to $C$ at $R$.",
        type: "self",
        solution: "Setting $y = 3$ gives $t = \\frac{5}{6}$ (reject $t = \\frac{1}{3}$). At $t = \\frac{5}{6}$, $R = \\left(-\\frac{3}{4}, 3\\right)$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3}{4}$.<br>Equation of normal at $R$: $y - 3 = -\\frac{4}{3}\\left(x + \\frac{3}{4}\\right) \\implies y = -\\frac{4}{3}x + 2$."
      },
      {
        label: "(iv)",
        marks: 2,
        prompt: "The normal at $R$ cuts the $y$-axis at the point $N$. Find the area of the triangle $QRN$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "1/8",
        placeholder: "Exact area",
        solution: "$N = (0, 2)$. Base $QR = |-\\frac{3}{4} - (-\\frac{1}{2})| = \\frac{1}{4}$, height $= |3 - 2| = 1$.<br>Area $= \\frac{1}{2}\\left(\\frac{1}{4}\\right)(1) = \\frac{1}{8}\\text{ units}^2$."
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q10",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["3D Vectors", "Lines & Planes"],
    stem: "A line $L_1$ has cartesian equation $x - 4 = -z$, $y = 1$. Another line $L_2$ is parallel to $\\begin{pmatrix} -2 \\\\ 1 \\\\ 3 \\end{pmatrix}$ and passes through $A(4, 3, c)$, where $c$ is a constant.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the acute angle between $L_1$ and $L_2$ (in degrees, to 1 d.p.).",
        type: "auto",
        mode: "number",
        dp: 1,
        answer: "19.107",
        placeholder: "Angle in degrees (1 d.p.)",
        solution: "$L_1$ has direction $\\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}$. $\\cos\\theta = \\frac{|1(-2)+0(1)+(-1)(3)|}{\\sqrt{2}\\sqrt{14}} = \\frac{5}{\\sqrt{28}} \\implies \\theta = 19.1^\\circ$ (1 d.p.)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Determine the possible values of $c$ if $L_1$ and $L_2$ are skew.",
        type: "self",
        solution: "Since $L_1$ and $L_2$ are not parallel, they are skew iff they do not intersect. Solving $\\begin{pmatrix}4\\\\1\\\\0\\end{pmatrix}+\\lambda\\begin{pmatrix}1\\\\0\\\\-1\\end{pmatrix} = \\begin{pmatrix}4\\\\3\\\\c\\end{pmatrix}+\\mu\\begin{pmatrix}-2\\\\1\\\\3\\end{pmatrix}$ gives $\\mu = -2, \\lambda = 4, c = 2$.<br>Thus $L_1$ and $L_2$ are skew when $c \\ne 2$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Show that the perpendicular distance from $A$ to $L_1$ is $\\sqrt{\\frac{1}{2}(c^2 + 8)}$.",
        type: "self",
        solution: "Let $B(4, 1, 0) \\in L_1$. $BA = \\begin{pmatrix} 0 \\\\ 2 \\\\ c \\end{pmatrix}$.<br>$$\\text{Distance} = \\frac{\\left|\\begin{pmatrix}0\\\\2\\\\c\\end{pmatrix}\\times\\begin{pmatrix}1\\\\0\\\\-1\\end{pmatrix}\\right|}{\\sqrt{2}} = \\frac{\\left|\\begin{pmatrix}-2\\\\c\\\\-2\\end{pmatrix}\\right|}{\\sqrt{2}} = \\sqrt{\\frac{1}{2}(c^2 + 8)}\\text{ (shown)}.$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "A plane $\\Pi$ has equation $\\mathbf{r}\\cdot\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} = 0$. Find the value of $c$ if $A$ is equidistant from $L_1$ and $\\Pi$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "-1",
        placeholder: "Exact value of c",
        solution: "Distance from $A$ to $\\Pi$ $= \\frac{|4 + c|}{\\sqrt{2}}$. Equating: $\\sqrt{\\frac{1}{2}(c^2 + 8)} = \\frac{|4 + c|}{\\sqrt{2}} \\implies c^2 + 8 = c^2 + 8c + 16 \\implies c = -1$."
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q11",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Graphs and Transformations", "Curve Sketching"],
    diagramSvg: `<svg viewBox="0 0 360 155" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="115" x2="160" y2="115" stroke-width="1.2"/><line x1="75" y1="145" x2="75" y2="12" stroke-width="1.2"/><line x1="108" y1="15" x2="108" y2="145" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 20 112 Q 58 106 75 45 Q 88 85 94 115 Q 102 68 105 22" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 112 22 Q 118 98 156 112" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><text x="68" y="46" text-anchor="end" stroke="none">4</text><text x="94" y="127" text-anchor="middle" stroke="none">1</text><text x="108" y="153" text-anchor="middle" stroke="none">x=2</text><text x="67" y="126" stroke="none" font-style="italic">O</text><text x="118" y="50" stroke="none" font-style="italic">y=|f(x)|</text><line x1="195" y1="90" x2="345" y2="90" stroke-width="1.2"/><line x1="255" y1="145" x2="255" y2="12" stroke-width="1.2"/><line x1="288" y1="15" x2="288" y2="145" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 200 92 Q 225 108 238 106 Q 248 102 255 90 Q 272 58 284 18" fill="none" stroke="#cf5652" stroke-width="1.8"/><path d="M 292 142 Q 298 96 342 92" fill="none" stroke="#cf5652" stroke-width="1.8"/><text x="247" y="101" stroke="none" font-style="italic">O</text><text x="288" y="153" text-anchor="middle" stroke="none">x=2</text><text x="298" y="45" stroke="none" font-style="italic">y=f'(x)</text></svg>`,
    stem: "(i) The graphs of $y = |\\mathrm{f}(x)|$ and $y = \\mathrm{f}'(x)$ are shown in the diagram.<br>(ii) Consider transforming $y = \\mathrm{g}(x)$ to $y = \\mathrm{g}(3x+1)$.",
    parts: [
      {
        label: "(i)(a)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$, showing clearly the coordinates of any axial intercepts, stationary points, and equations of asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 170" width="210" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="85" x2="205" y2="85" stroke-width="1.3"/><line x1="80" y1="160" x2="80" y2="12" stroke-width="1.3"/><line x1="130" y1="12" x2="130" y2="160" stroke-dasharray="4,3" stroke-width="1.2"/><path d="M 20 88 Q 55 94 80 125 Q 105 112 110 85 Q 118 52 125 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 135 18 Q 145 72 200 82" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="80" cy="125" r="2.3" fill="#4a8fe7"/><circle cx="110" cy="85" r="2.3" fill="#4a8fe7"/><text x="74" y="138" text-anchor="end" stroke="none">(0, −4)</text><text x="103" y="79" text-anchor="end" stroke="none">(1, 0)</text><text x="134" y="155" stroke="none">x = 2</text><text x="20" y="78" stroke="none">y = 0</text></svg>`,
        solution: "Since $\\mathrm{f}'(0) = 0$ and $\\mathrm{f}'(x) > 0$ on $(0, 2)$, $(0, -4)$ is a local minimum and the branch rises through $(1, 0)$ to $+\\infty$ at $x = 2^-$. Asymptotes: $x = 2$ and $y = 0$."
      },
      {
        label: "(i)(b)",
        marks: 4,
        prompt: "Sketch the graph of $y = \\frac{1}{|\\mathrm{f}(x)|}$, showing clearly the coordinates of any axial intercepts, stationary points, and equations of asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 170" width="210" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="125" x2="205" y2="125" stroke-width="1.3"/><line x1="80" y1="155" x2="80" y2="12" stroke-width="1.3"/><line x1="108" y1="12" x2="108" y2="155" stroke-dasharray="4,3" stroke-width="1.2"/><path d="M 22 22 Q 55 102 80 112 Q 96 105 104 18" fill="none" stroke="#4ca885" stroke-width="2"/><path d="M 112 18 Q 120 125 135 125 Q 165 110 198 28" fill="none" stroke="#4ca885" stroke-width="2"/><circle cx="80" cy="112" r="2.3" fill="#4ca885"/><circle cx="135" cy="125" r="2.3" fill="#4ca885"/><text x="74" y="106" text-anchor="end" stroke="none">(0, 1/4)</text><text x="135" y="140" text-anchor="middle" stroke="none">(2, 0)</text><text x="108" y="164" text-anchor="middle" stroke="none">x = 1</text></svg>`,
        solution: "Vertical asymptote $x = 1$. Local minimum at $(0, \\frac{1}{4})$ and minimum/touching point at $(2, 0)$."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "Sequence A: translation of $a$ unit(s) in negative $x$-direction, followed by scaling parallel to $x$-axis by factor $b$.<br>Sequence B: scaling parallel to $x$-axis by factor $c$, followed by translation of $d$ unit(s) in negative $x$-direction.<br>Determine $a, b, c$ and $d$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "1", exactRequired: true },
          { label: "b =", answer: "1/3", exactRequired: true },
          { label: "c =", answer: "1/3", exactRequired: true },
          { label: "d =", answer: "1/3", exactRequired: true }
        ],
        solution: "Sequence A: $\\mathrm{g}(x) \\to \\mathrm{g}(x+1) \\to \\mathrm{g}(3x+1)$, so $a = 1, b = \\frac{1}{3}$.<br>Sequence B: $\\mathrm{g}(x) \\to \\mathrm{g}(3x) \\to \\mathrm{g}(3(x+\\frac{1}{3})) = \\mathrm{g}(3x+1)$, so $c = \\frac{1}{3}, d = \\frac{1}{3}$."
      }
    ]
  },
  {
    id: "JPJC-2026-P1-Q12",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Differential Equations", "Logistic Model"],
    stem: "The number of fish, $t$ days after a study begins, is $x$ (in thousands). The birth rate per day is twice of $x$ and the death rate per day is proportional to $x^2$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "If there is no change in the population of fish when its population hits $8000$, show that $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 2x - \\frac{x^2}{4}$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 2x - kx^2$. When $x = 8, \\frac{\\mathrm{d}x}{\\mathrm{d}t} = 0 \\implies 16 - 64k = 0 \\implies k = \\frac{1}{4}$. Thus $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 2x - \\frac{x^2}{4}$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "The owner decides to sell $1750$ fish daily. Modify the differential equation and show that it can be written as $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -\\frac{1}{4}\\left[(x-4)^2 - a^2\\right]$, determining the positive constant $a$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "3",
        placeholder: "Exact value of a",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 2x - \\frac{x^2}{4} - 1.75 = -\\frac{1}{4}(x^2 - 8x + 7) = -\\frac{1}{4}\\left[(x-4)^2 - 3^2\\right]$, so $a = 3$."
      },
      {
        label: "(iii)",
        marks: 5,
        prompt: "Given the initial population of fish is $15\\,000$, solve the differential equation in (ii) to express $x$ in terms of $t$.",
        type: "auto",
        mode: "expr",
        vars: { t: [0, 1, 2] },
        answer: "(49 - 4*e^(-3*t/2))/(7 - 4*e^(-3*t/2))",
        placeholder: "Expression in terms of t",
        solution: "$\\int \\frac{1}{(x-4)^2 - 9}\\,\\mathrm{d}x = -\\frac{1}{4}\\int 1\\,\\mathrm{d}t \\implies \\frac{1}{6}\\ln\\left|\\frac{x-7}{x-1}\\right| = -\\frac{1}{4}t + c \\implies \\frac{x-7}{x-1} = A\\mathrm{e}^{-3t/2}$.<br>At $t = 0, x = 15 \\implies A = \\frac{8}{14} = \\frac{4}{7}$. Solving for $x$: $$x = \\frac{49 - 4\\mathrm{e}^{-3t/2}}{7 - 4\\mathrm{e}^{-3t/2}}.$$"
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Hence sketch the part of the curve which is relevant in this context, and explain what happens to the number of fish in the long run.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 155" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="130" x2="225" y2="130" stroke-width="1.3"/><line x1="40" y1="142" x2="40" y2="14" stroke-width="1.3"/><line x1="40" y1="88" x2="220" y2="88" stroke-dasharray="4,3" stroke-width="1.1"/><text x="35" y="91" text-anchor="end" stroke="none">7</text><text x="35" y="34" text-anchor="end" stroke="none">15</text><path d="M 40 30 C 65 72, 105 84, 218 86.5" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="40" cy="30" r="2.4" fill="#4a8fe7"/><text x="33" y="142" stroke="none">0</text><text x="223" y="142" stroke="none" font-style="italic">t</text><text x="45" y="18" stroke="none" font-style="italic">x (thousands)</text></svg>`,
        solution: "As $t$ increases without bound, $\\mathrm{e}^{-3t/2}$ approaches $0$, so $x$ approaches $7$. The number of fish decreases and approaches $7000$ in the long run."
      }
    ]
  }
]);