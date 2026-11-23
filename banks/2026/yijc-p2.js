window.registerQuestions([
  // ==================== YIJC 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "YIJC-2026-P2-Q1",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<em>Do not use a calculator in answering this question.</em><br>The complex number $z$ is such that $z = 1 - \\sqrt{3}\\,\\mathrm{i}$. Points $A, B$ and $C$ represent $z$, $\\mathrm{i}z$ and $\\mathrm{i}z + 2$ respectively.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $|z|$ and $\\arg(z)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "|z| =", answer: "2", exactRequired: true, placeholder: "Exact modulus" },
          { label: "arg(z) =", answer: "-pi/3", exactRequired: true, placeholder: "Exact radians" }
        ],
        solution: "$|z| = \\sqrt{1^2 + (-\\sqrt{3})^2} = 2$. Since $z$ is in the 4th quadrant, $\\arg(z) = -\\tan^{-1}\\sqrt{3} = -\\frac{\\pi}{3}$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Mark the origin $O$ and the points $A, B$ and $C$ on an Argand diagram, illustrating clearly the geometrical relationship between them.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 165" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="88" x2="225" y2="88" stroke-width="1.3"/><polyline points="219,84 225,88 219,92" fill="none" stroke-width="1.3"/><line x1="65" y1="155" x2="65" y2="12" stroke-width="1.3"/><polyline points="61,18 65,12 69,18" fill="none" stroke-width="1.3"/><line x1="65" y1="88" x2="90" y2="131" stroke="#4a8fe7" stroke-width="1.6"/><line x1="65" y1="88" x2="108" y2="63" stroke="#4a8fe7" stroke-width="1.6"/><line x1="108" y1="63" x2="158" y2="63" stroke="#4a8fe7" stroke-width="1.6"/><line x1="65" y1="88" x2="158" y2="63" stroke="#cf5652" stroke-dasharray="4,3" stroke-width="1.3"/><rect x="65" y="80" width="7" height="7" transform="rotate(-30 65 88)" fill="none" stroke-width="1"/><text x="95" y="142" stroke="none" font-style="italic">A (z)</text><text x="108" y="54" text-anchor="middle" stroke="none" font-style="italic">B (iz)</text><text x="163" y="65" stroke="none" font-style="italic">C (iz+2)</text><text x="133" y="57" text-anchor="middle" stroke="none">2</text><text x="56" y="100" stroke="none" font-style="italic">O</text></svg>`,
        solution: "$OA = OB = 2$, ∠$AOB = 90^\\circ$, and $BC$ is horizontal of length $2$ to the right of $B$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Hence, find the <strong>exact</strong> value of $\\arg(\\mathrm{i}z + 2)$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "pi/12",
        placeholder: "Exact angle in radians",
        solution: "$\\arg(\\mathrm{i}z) = \\frac{\\pi}{2} - \\frac{\\pi}{3} = \\frac{\\pi}{6}$. Since $OB = BC = 2$ and $BC$ is parallel to the real axis, $OBCD$ is a rhombus and $OC$ bisects ∠$BOD$.<br>Hence $\\arg(\\mathrm{i}z + 2) = \\frac{1}{2}\\left(\\frac{\\pi}{6}\\right) = \\frac{\\pi}{12}$."
      }
    ]
  },
  {
    id: "YIJC-2026-P2-Q2",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Vectors"],
    stem: "Answer both parts on vectors.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "The non-zero vectors $\\mathbf{a}, \\mathbf{b}$ and $\\mathbf{c}$ are such that $\\mathbf{a}\\times\\mathbf{c}$ is parallel to $\\mathbf{a}\\times\\mathbf{b}$. Show that $\\mathbf{c} = m\\mathbf{a} + n\\mathbf{b}$, where $m$ and $n$ are constants.",
        type: "self",
        solution: "$\\mathbf{a}\\times\\mathbf{c} = n(\\mathbf{a}\\times\\mathbf{b})$ for some non-zero constant $n \\implies \\mathbf{a}\\times(\\mathbf{c} - n\\mathbf{b}) = \\mathbf{0}$.<br>Since $\\mathbf{a} \\ne \\mathbf{0}$, $\\mathbf{c} - n\\mathbf{b} = \\mathbf{0}$ or $\\mathbf{c} - n\\mathbf{b} \\parallel \\mathbf{a}$, so $\\mathbf{c} - n\\mathbf{b} = m\\mathbf{a} \\implies \\mathbf{c} = m\\mathbf{a} + n\\mathbf{b}$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Given that $\\mathbf{a}$ is a non-zero vector and $\\mathbf{b}$ is a unit vector such that $|\\mathbf{a}\\times\\mathbf{b}| = 2$ and $|\\mathbf{a}\\cdot\\mathbf{b}| = 2.5$, show that the acute angle between $\\mathbf{a}$ and $\\mathbf{b}$ is $\\tan^{-1}\\left(\\frac{4}{5}\\right)$ and find the <strong>exact</strong> value of $|\\mathbf{a}|$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "sqrt(41)/2",
        placeholder: "Exact surd form",
        solution: "$\\tan\\theta = \\frac{|\\mathbf{a}\\times\\mathbf{b}|}{|\\mathbf{a}\\cdot\\mathbf{b}|} = \\frac{2}{2.5} = \\frac{4}{5} \\implies \\theta = \\tan^{-1}\\left(\\frac{4}{5}\\right)$.<br>$|a|^2 = |\\mathbf{a}\\times\\mathbf{b}|^2 + |\\mathbf{a}\\cdot\\mathbf{b}|^2 = 2^2 + 2.5^2 = 10.25 = \\frac{41}{4} \\implies |\\mathbf{a}| = \\frac{\\sqrt{41}}{2}$."
      }
    ]
  },
  {
    id: "YIJC-2026-P2-Q3",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto \\frac{1}{(x-1)(x-2)}$, $x \\in \\mathbb{R}$, $x \\ne 1$, $x \\ne 2$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$, giving the equations of any asymptotes and the coordinates of any turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 175" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="88" x2="225" y2="88" stroke-width="1.3"/><line x1="55" y1="165" x2="55" y2="12" stroke-width="1.3"/><line x1="95" y1="12" x2="95" y2="165" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="145" y1="12" x2="145" y2="165" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 18 85 Q 72 80 90 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 101 162 Q 110 120 120 120 Q 130 120 139 162" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 150 18 Q 168 80 220 85" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="120" cy="120" r="2.3" fill="#4a8fe7"/><text x="120" y="110" text-anchor="middle" stroke="none">(1.5, −4)</text><text x="89" y="160" text-anchor="end" stroke="none">x=1</text><text x="149" y="160" stroke="none">x=2</text><text x="20" y="78" stroke="none">y=0</text></svg>`,
        solution: "Asymptotes: $x = 1$, $x = 2$, $y = 0$. Turning point (local maximum): $(1.5, -4)$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Hence state the range of $\\mathrm{f}$.",
        type: "self",
        solution: "$\\mathrm{R_f} = (-\\infty, -4] \\cup (0, \\infty)$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Explain why the function $\\mathrm{f}^2$ does not exist.",
        type: "self",
        solution: "$\\mathrm{R_f} = (-\\infty, -4] \\cup (0, \\infty)$ is not a subset of $\\mathrm{D_f} = \\mathbb{R} \\setminus \\{1, 2\\}$ (since $1, 2 \\in \\mathrm{R_f}$). Hence $\\mathrm{f}^2$ does not exist."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "The domain of $\\mathrm{f}$ is further restricted to $(-\\infty, a]$ where $a$ is a constant. State the largest value of $a$ such that $\\mathrm{f}^{-1}$ exists.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "3/2",
        placeholder: "Exact value",
        solution: "The turning point is at $x = \\frac{3}{2}$, so the largest value of $a$ is $\\frac{3}{2}$."
      },
      {
        label: "(e)",
        marks: 4,
        prompt: "Hence find $\\mathrm{f}^{-1}(x)$ and state its domain.",
        type: "self",
        solution: "$x^2 - 3x + 2 = \\frac{1}{y} \\implies x = \\frac{3}{2} \\pm \\sqrt{\\frac{1}{y} + \\frac{1}{4}}$. Since $x \\le \\frac{3}{2}$, reject $+$:<br>$$\\mathrm{f}^{-1}(x) = \\frac{3}{2} - \\sqrt{\\frac{1}{x} + \\frac{1}{4}}, \\quad \\mathrm{D}_{\\mathrm{f}^{-1}} = (-\\infty, -4] \\cup (0, \\infty).$$"
      }
    ]
  },
  {
    id: "YIJC-2026-P2-Q4",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Integration"],
    diagramSvg: `<svg viewBox="0 0 240 165" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><path d="M 35 140 Q 95 102 185 28 L 185 128 Q 145 92 35 140 Z" fill="rgba(91,155,213,0.18)" stroke="none"/><line x1="15" y1="140" x2="225" y2="140" stroke-width="1.3"/><line x1="35" y1="152" x2="35" y2="12" stroke-width="1.3"/><line x1="185" y1="18" x2="185" y2="140" stroke-width="1.2"/><path d="M 35 140 Q 95 102 185 28" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 35 140 Q 110 120 145 112 Q 168 110 185 128" fill="none" stroke="#cf5652" stroke-width="1.8"/><text x="190" y="65" stroke="none" font-style="italic">x = √π</text><text x="160" y="88" stroke="none" font-style="italic">R</text><text x="27" y="152" stroke="none" font-style="italic">O</text></svg>`,
    stem: "Answer all parts.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $\\int x\\mathrm{e}^{2x^2}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.2, 0.5, 1.0],
        answer: "1/4*e^(2*x^2)",
        placeholder: "Expression in x + C",
        solution: "$$\\frac{1}{4}\\int 4x\\mathrm{e}^{2x^2}\\,\\mathrm{d}x = \\frac{1}{4}\\mathrm{e}^{2x^2} + C.$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Use the substitution $w = x^2$ to find $\\int x^3\\cos x^2\\,\\mathrm{d}x$. Hence, using double angle formulae, show that $$\\int x^3\\cos^2\\left(\\frac{1}{2}x^2\\right)\\,\\mathrm{d}x = \\frac{1}{8}\\left(2x^2\\sin x^2 + 2\\cos x^2 + x^4\\right) + C.$$",
        type: "self",
        solution: "$\\int x^3\\cos x^2\\,\\mathrm{d}x = \\frac{1}{2}\\int w\\cos w\\,\\mathrm{d}w = \\frac{1}{2}w\\sin w + \\frac{1}{2}\\cos w + C = \\frac{1}{2}x^2\\sin x^2 + \\frac{1}{2}\\cos x^2 + C$.<br>Using $\\cos^2(\\frac{1}{2}x^2) = \\frac{\\cos x^2 + 1}{2}$ gives $\\frac{1}{2}\\left(\\frac{1}{2}x^2\\sin x^2 + \\frac{1}{2}\\cos x^2 + \\frac{1}{4}x^4\\right) + C = \\frac{1}{8}(2x^2\\sin x^2 + 2\\cos x^2 + x^4) + C$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The diagram shows $y = x^{3/2}\\cos\\left(\\frac{1}{2}x^2\\right)$ and $y = x^{1/2}\\mathrm{e}^{x^2}$ for $0 \\le x \\le \\sqrt{\\pi}$. Find the <strong>exact</strong> volume of the solid generated when $R$ is rotated through $2\\pi$ radians about the $x$-axis.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "pi/4*e^(2*pi) + pi/4 - pi^3/8",
        placeholder: "Exact value in pi and e",
        solution: "$$V = \\pi\\int_{0}^{\\sqrt{\\pi}} x\\mathrm{e}^{2x^2}\\,\\mathrm{d}x - \\pi\\int_{0}^{\\sqrt{\\pi}} x^3\\cos^2\\left(\\frac{1}{2}x^2\\right)\\mathrm{d}x$$ $$= \\frac{\\pi}{4}\\left(\\mathrm{e}^{2\\pi} - 1\\right) - \\frac{\\pi}{8}\\left(-4 + \\pi^2\\right) = \\frac{\\pi}{4}\\mathrm{e}^{2\\pi} + \\frac{\\pi}{4} - \\frac{\\pi^3}{8}.$$"
      }
    ]
  },
  {
    id: "YIJC-2026-P2-Q5",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 180 175" width="165" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polygon points="35,45 125,45 80,15" fill="none" stroke-width="1.4"/><polygon points="35,145 125,145 80,115" fill="none" stroke-dasharray="3,3" stroke-width="1.1"/><polyline points="35,145 125,145" stroke-width="1.5"/><line x1="35" y1="45" x2="35" y2="145" stroke-width="1.5"/><line x1="125" y1="45" x2="125" y2="145" stroke-width="1.5"/><line x1="80" y1="15" x2="80" y2="115" stroke-dasharray="3,3" stroke-width="1.1"/><text x="80" y="162" text-anchor="middle" stroke="none" font-style="italic">x <tspan font-style="normal">cm</tspan></text><line x1="145" y1="45" x2="145" y2="145" stroke-width="1.1"/><text x="152" y="98" stroke="none" font-style="italic">h <tspan font-style="normal">cm</tspan></text></svg>`,
    stem: "An open container is an upright prism with an equilateral triangular base of side $x\\text{ cm}$ and height $h\\text{ cm}$. Base material costs $2$ cents per $\\text{cm}^2$, side material costs $5$ cents per $\\text{cm}^2$, and total cost is a fixed $C$ cents.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that the capacity, $V\\text{ cm}^3$, is given by $V = \\frac{\\sqrt{3}}{60}x\\left(C - \\frac{\\sqrt{3}}{2}x^2\\right)$.",
        type: "self",
        solution: "Base area $= \\frac{\\sqrt{3}}{4}x^2$, cost $= 2\\left(\\frac{\\sqrt{3}}{4}x^2\\right) + 5(3xh) = C \\implies h = \\frac{1}{15x}\\left(C - \\frac{\\sqrt{3}}{2}x^2\\right)$.<br>$V = \\frac{\\sqrt{3}}{4}x^2 h = \\frac{\\sqrt{3}}{60}x\\left(C - \\frac{\\sqrt{3}}{2}x^2\\right)$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Use differentiation to show that $V$ is maximum when the cost of the base is $\\frac{C}{3}$ cents.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}V}{\\mathrm{d}x} = \\frac{\\sqrt{3}}{60}\\left(C - \\frac{3\\sqrt{3}}{2}x^2\\right) = 0 \\implies x^2 = \\frac{2C}{3\\sqrt{3}}$. Since $x > 0$, $\\frac{\\mathrm{d}^2V}{\\mathrm{d}x^2} = -\\frac{3}{20}x < 0$ (maximum).<br>Cost of base $= \\frac{\\sqrt{3}}{2}x^2 = \\frac{\\sqrt{3}}{2}\\left(\\frac{2C}{3\\sqrt{3}}\\right) = \\frac{C}{3}$ cents."
      }
    ]
  },

  // ==================== YIJC 2026 PAPER 2: STATISTICS (Q6 - Q11) ====================
  {
    id: "YIJC-2026-P2-Q6",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations & Combinations"],
    diagramSvg: `<svg viewBox="0 0 260 115" width="245" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="9" fill="#2c2925" stroke="#2c2925"><text x="20" y="34" stroke="none">Back row</text><text x="35" y="68" stroke="none">Front row</text><text x="150" y="106" text-anchor="middle" stroke="none">Lecturer</text><path d="M 68 38 Q 150 18 232 38" fill="none" stroke-width="1.2"/><path d="M 80 72 Q 150 52 220 72" fill="none" stroke-width="1.2"/><rect x="75" y="18" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="103" y="12" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="131" y="9" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="159" y="9" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="187" y="12" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="213" y="18" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="88" y="54" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="116" y="48" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="144" y="46" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="172" y="48" width="14" height="10" fill="#fff" stroke-width="1.1"/><rect x="200" y="54" width="14" height="10" fill="#fff" stroke-width="1.1"/></svg>`,
    stem: "A mini-Lecture Theatre has $11$ seats in $2$ rows ($6$ back, $5$ front). A class consists of $5$ girls and $3$ boys.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Find the number of ways the class can be seated without restriction.", type: "auto", mode: "number", exactRequired: true, answer: "6652800", placeholder: "Integer", solution: "${}^{11}P_8 = 6\\,652\\,800$." },
      { label: "(b)", marks: 2, prompt: "Find the number of ways they can be seated with the girls and boys occupying different rows.", type: "auto", mode: "number", exactRequired: true, answer: "57600", placeholder: "Integer", solution: "${}^5P_5 \\times {}^6P_3 + {}^5P_3 \\times {}^6P_5 = 57\\,600$." },
      { label: "(c)", marks: 2, prompt: "The lecturer asks each student one of $8$ different questions in turn. Find the number of ways if no two consecutive questions are answered by boys.", type: "auto", mode: "number", exactRequired: true, answer: "14400", placeholder: "Integer", solution: "$5! \\times {}^6P_3 = 14\\,400$." },
      { label: "(d)", marks: 2, prompt: "The class needs to form two groups of $4$ each. Find the number of ways if the $3$ boys cannot be in the same group.", type: "auto", mode: "number", exactRequired: true, answer: "30", placeholder: "Integer", solution: "${}^3C_1 \\times {}^5C_3 = 30$ (or $\\frac{{}^8C_4\\times {}^4C_4}{2!} - {}^5C_1 = 30$)." }
    ]
  },
  {
    id: "YIJC-2026-P2-Q7",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Probability", "Discrete Random Variables", "Sampling & CLT"],
    stem: "A technician has $5$ cables, $3$ of which are faulty. He tests them one by one without replacement until all faulty cables are tested. Let $X$ denote the number of tests carried out.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Show that $\\mathrm{P}(X = 3) = \\frac{1}{10}$ and find the probability distribution of $X$.", type: "self", solution: "$\\mathrm{P}(X=3) = \\frac{3}{5}\\frac{2}{4}\\frac{1}{3} = \\frac{1}{10}$, $\\mathrm{P}(X=4) = \\frac{3}{10}$, $\\mathrm{P}(X=5) = \\frac{3}{5}$." },
      { label: "(b)", marks: 2, prompt: "The technician noted that the first cable tested was faulty. Find the probability that exactly $4$ tests were required.", type: "auto", mode: "number", exactRequired: true, answer: "1/3", placeholder: "Exact fraction", solution: "$\\frac{\\mathrm{P}(\\text{FNFF, FFNF})}{3/5} = \\frac{2/10}{3/5} = \\frac{1}{3}$." },
      { label: "(c)", marks: 2, prompt: "Testing incurs a cost $C = 5 + 10X$ (in dollars). Find $\\mathrm{Var}(C)$.", type: "auto", mode: "number", exactRequired: true, answer: "45", placeholder: "Exact value", solution: "$\\mathrm{Var}(X) = 0.45 \\implies \\mathrm{Var}(C) = 10^2\\mathrm{Var}(X) = 45$." },
      { label: "(d)", marks: 3, prompt: "The testing process is carried out on $80$ independent sets of cables. Using a suitable approximation, find the probability that the mean testing cost exceeds $51.50$ dollars.", type: "auto", mode: "number", answer: "0.022750", placeholder: "3 s.f.", solution: "$\\mathrm{E}(C) = 50$. By CLT, $\\bar{C} \\sim \\mathrm{N}\\left(50, \\frac{45}{80}\\right)$ approx. $\\mathrm{P}(\\bar{C} > 51.5) = 0.0228$ (3 s.f.)." }
    ]
  },
  {
    id: "YIJC-2026-P2-Q8",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Active users $y$ (thousand users) after $x$ months:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>1</td><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td></tr><tr><th>$y$</th><td>85</td><td>55</td><td>38</td><td>31</td><td>27</td><td>25</td></tr></table></div>",
    parts: [
      {
        label: "(a)", marks: 1, prompt: "Sketch a scatter diagram of the data.", type: "self",
        solutionSvg: `<svg viewBox="0 0 240 160" width="225" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="35" y1="138" x2="225" y2="138" stroke-width="1.3"/><line x1="40" y1="145" x2="40" y2="14" stroke-width="1.3"/><g stroke="#4ca885" stroke-width="1.7"><path d="M 55 24 L 61 30 M 61 24 L 55 30"/><path d="M 73 72 L 79 78 M 79 72 L 73 78"/><path d="M 109 99 L 115 105 M 115 99 L 109 105"/><path d="M 145 110 L 151 116 M 151 110 L 145 116"/><path d="M 181 117 L 187 123 M 187 117 L 181 123"/><path d="M 215 120 L 221 126 M 221 120 L 215 126"/></g></svg>`,
        solution: "Points fall sharply at first then level off from $(1, 85)$ to $(10, 25)$."
      },
      { label: "(b)-(c)", marks: 2, prompt: "Comment in context whether a linear model is appropriate, and explain using the scatter diagram whether $a$ in $y = \\frac{a}{x} + b$ is positive or negative.", type: "self", solution: "<strong>(b)</strong> Not appropriate: a linear model implies active users would decrease linearly and eventually become negative, which is impossible.<br><strong>(c)</strong> Since $y$ decreases as $x$ increases, $a$ must be positive." },
      {
        label: "(d)", marks: 2, prompt: "Find the product moment correlation coefficient $r$ and the regression line $y = \\frac{a}{x} + b$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "r =", answer: "0.998" }, { label: "a =", answer: "66.305" }, { label: "b =", answer: "19.833" }],
        solution: "$r = 0.998$ (3 s.f.), $y = \\frac{66.3}{x} + 19.8$ (3 s.f.)."
      },
      { label: "(e) Estimate", marks: 1, prompt: "Estimate the number of active users (in thousands) $9$ months after launch.", type: "auto", mode: "number", answers: ["27.200", "27.167"], placeholder: "3 s.f. (thousands)", solution: "$y = \\frac{66.305}{9} + 19.833 = 27.2$ thousand ($27\\,200$ users)." },
      { label: "(e) Reliability", marks: 2, prompt: "Give two reasons why you would expect this estimate to be reliable.", type: "self", solution: "$x = 9$ lies within the data range $[1, 10]$ (interpolation) and $r = 0.998$ is close to $1$." }
    ]
  },
  {
    id: "YIJC-2026-P2-Q9",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Binomial Distribution"],
    stem: "On average, $6\\%$ of plastic bottles collected are non-recyclable. Each day, $40$ plastic bottles are checked ($X$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "State, in context, two assumptions needed to model $X$ by a binomial distribution.", type: "self", solution: "1. A plastic bottle being non-recyclable is independent of any other plastic bottle being non-recyclable.<br>2. The probability of a plastic bottle being non-recyclable is constant at $0.06$." },
      { label: "(b)", marks: 2, prompt: "Find the probability that on a randomly chosen day, at least $4$ non-recyclable plastic bottles are found.", type: "auto", mode: "number", answer: "0.21726", placeholder: "3 s.f.", solution: "$X \\sim \\mathrm{B}(40, 0.06) \\implies \\mathrm{P}(X \\ge 4) = 0.217$ (3 s.f.)." },
      { label: "(c)", marks: 2, prompt: "Find the probability that in a randomly chosen week of $5$ days, at least $4$ non-recyclable plastic bottles are found on no more than $2$ days.", type: "auto", mode: "number", answer: "0.92802", placeholder: "3 s.f.", solution: "$Y \\sim \\mathrm{B}(5, 0.21726) \\implies \\mathrm{P}(Y \\le 2) = 0.928$ (3 s.f.)." },
      { label: "(d)", marks: 4, prompt: "A cardboard box is non-recyclable with probability $p$ (independent of bottles). In a sample of $3$ bottles and $2$ boxes, the probability of at most $1$ non-recyclable item is $0.9$. Find $p$.", type: "auto", mode: "number", answer: "0.199", placeholder: "3 s.f.", solution: "$0.94^3[2p(1-p)] + 3(0.06)(0.94)^2(1-p)^2 + 0.94^3(1-p)^2 = 0.9 \\implies 1.661168p(1-p) + 0.989632(1-p)^2 = 0.9 \\implies p = 0.199$ (3 s.f.)." }
    ]
  },
  {
    id: "YIJC-2026-P2-Q10",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Binomial Distribution", "Normal Distribution"],
    stem: "Independent component masses: Type $A \\sim \\mathrm{N}(250, 3^2)$ grams and Type $B \\sim \\mathrm{N}(240, 4^2)$ grams.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the probability that the total mass of a randomly chosen Type $A$ and Type $B$ component exceeds $480$ grams.", type: "auto", mode: "number", answer: "0.97725", placeholder: "3 s.f.", solution: "$A + B \\sim \\mathrm{N}(490, 25) \\implies \\mathrm{P}(A + B > 480) = 0.977$ (3 s.f.)." },
      { label: "(b)", marks: 4, prompt: "Find the probability that the total mass of $2$ Type $A$ components is less than three times the mass of a Type $B$ component.", type: "auto", mode: "number", answer: "1.00", placeholder: "3 s.f.", solution: "$S = A_1 + A_2 - 3B \\sim \\mathrm{N}(-220, 162) \\implies \\mathrm{P}(S < 0) = 1.00$ (3 s.f.)." },
      { label: "(c)", marks: 3, prompt: "A worker selects $10$ Type $A$ components at random. Find the probability that at least $25\\%$ of them have masses between $250$ grams and $255$ grams.", type: "auto", mode: "number", answer: "0.903", placeholder: "3 s.f.", solution: "$\\mathrm{P}(250 < A < 255) = 0.45221$. $X \\sim \\mathrm{B}(10, 0.45221) \\implies \\mathrm{P}(X \\ge 3) = 0.903$ (3 s.f.)." },
      {
        label: "(d)", marks: 3, prompt: "Type $C$ masses follow $\\mathrm{N}(\\mu, \\sigma^2)$ such that $80\\%$ are within $\\pm 7$ grams of the mean and $35\\%$ are less than $312$ grams. Find $\\mu$ and $\\sigma$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "μ =", answer: "314.10" }, { label: "σ =", answer: "5.4621" }],
        solution: "$\\mathrm{P}(Z > 7/\\sigma) = 0.1 \\implies \\sigma = 5.4621 \\approx 5.46$; $\\frac{312-\\mu}{5.4621} = -0.38532 \\implies \\mu = 314.10 \\approx 314$."
      }
    ]
  },
  {
    id: "YIJC-2026-P2-Q11",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "Chilli sauce sachets are designed to have mean mass $50$ grams. A random sample of $40$ sachets gives $\\sum(x - 50) = 80.5$ and $\\sum(x - 50)^2 = 2415$.",
    parts: [
      {
        label: "(a)", marks: 2, prompt: "Calculate unbiased estimates of the population mean and variance of the masses.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "Mean =", answer: "52.0125", exactRequired: true }, { label: "Variance =", answer: "57.7691" }],
        solution: "$\\bar{x} = 52.0125$, $s^2 = 57.7691 \\approx 57.8$."
      },
      { label: "(b)", marks: 5, prompt: "Test, at the $5\\%$ level of significance, whether the mean mass is more than $50$ grams.", type: "self", solution: "$\\mathrm{H}_0: \\mu = 50$, $\\mathrm{H}_1: \\mu > 50$. By CLT, $\\bar{X} \\sim \\mathrm{N}(50, \\frac{57.7691}{40})$ approx. $p$-value $= 0.0470 < 0.05$. Reject $\\mathrm{H}_0$: sufficient evidence at $5\\%$ level that mean mass is more than $50$ grams." },
      { label: "(c)", marks: 1, prompt: "Explain why there is no need to know the population distribution of the masses.", type: "self", solution: "Since the sample size $n = 40$ is large, by the Central Limit Theorem, the sample mean mass $\\bar{X}$ is approximately normally distributed." },
      { label: "(d)", marks: 4, prompt: "After adjustment, mass follows a normal distribution with $\\sigma = 6$ grams. A sample of $n$ sachets has mean $51.7$ grams. Find the set of values of $n$ if there is sufficient evidence at the $10\\%$ level that the mean differs from $50$ grams.", type: "self", solution: "2-tailed at $10\\%$ level: $\\frac{51.7 - 50}{6/\\sqrt{n}} \\ge 1.64485 \\implies \\sqrt{n} \\ge 5.8054 \\implies n \\ge 33.7$. Thus $\\{n \\in \\mathbb{Z} : n \\ge 34\\}$." }
    ]
  }
]);