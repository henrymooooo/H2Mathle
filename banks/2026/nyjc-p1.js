window.registerQuestions([
  {
    id: "NYJC-2026-P1-Q1",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Differentiation", "Definite Integrals", "Simultaneous Equations"],
    stem: "A curve with equation $y = ax + b + \\frac{c}{x-1}$, where $a$, $b$ and $c$ are non-zero constants, has a turning point at $(3, 7)$. The area bounded by the curve for $y > 0$, the $x$-axis, the lines $x = 2$ and $x = 3$ is $4.5 + \\ln 16\\text{ units}^2$.",
    parts: [
      {
        label: "(Full)",
        marks: 5,
        prompt: "Find the values of $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "1", exactRequired: true },
          { label: "b =", answer: "2", exactRequired: true },
          { label: "c =", answer: "4", exactRequired: true }
        ],
        solution: "Sub $(3, 7)$: $3a + b + \\frac{1}{2}c = 7$ &nbsp;(1).<br>Turning point at $x=3$: $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = a - \\frac{c}{(x-1)^2} = 0 \\implies a - \\frac{1}{4}c = 0$ &nbsp;(2).<br>Area: $\\int_2^3\\left(ax+b+\\frac{c}{x-1}\\right)\\mathrm{d}x = \\frac{5}{2}a + b + c\\ln 2 = 4.5 + 4\\ln 2$ &nbsp;(3).<br>Solving (1), (2), (3) simultaneously gives $a = 1, b = 2, c = 4$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q2",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Inequalities", "Exponential Functions"],
    stem: "Solve the following inequalities.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Without using a calculator, solve the inequality $\\frac{5}{x^2-9} \\le \\frac{x+1}{x+3}$.",
        type: "self",
        solution: "$\\frac{5 - (x+1)(x-3)}{(x-3)(x+3)} \\le 0 \\implies \\frac{(x-4)(x+2)}{(x-3)(x+3)} \\ge 0$.<br>Sign test: $x < -3$ or $-2 \\le x < 3$ or $x \\ge 4$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence solve exactly the inequality $\\frac{5}{\\mathrm{e}^{2x}-9} \\le \\frac{\\mathrm{e}^x+1}{\\mathrm{e}^x+3}$.",
        type: "self",
        solution: "Replace $x$ with $\\mathrm{e}^x$: $\\mathrm{e}^x < -3$ (no solution as $\\mathrm{e}^x > 0$), $-2 \\le \\mathrm{e}^x < 3 \\implies 0 < \\mathrm{e}^x < 3$, or $\\mathrm{e}^x \\ge 4$.<br>Hence $x < \\ln 3$ or $x \\ge \\ln 4$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q3",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors", "Vector Product", "Scalar Product"],
    stem: "Referred to the origin $O$, points $A$, $B$ and $C$ have non-zero position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively. It is given that $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{c}$ and $\\mathbf{b} \\times \\mathbf{c} = k\\mathbf{a}$, where $k$ is a positive constant.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Deduce that $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ are mutually perpendicular and find $k$ in terms of $|\\mathbf{b}|$.",
        type: "self",
        solution: "$\\mathbf{a}\\times\\mathbf{b}=\\mathbf{c} \\implies \\mathbf{a}\\perp\\mathbf{c}$ and $\\mathbf{b}\\perp\\mathbf{c}$; $\\mathbf{b}\\times\\mathbf{c}=k\\mathbf{a} \\implies \\mathbf{b}\\perp\\mathbf{a}$ and $\\mathbf{c}\\perp\\mathbf{a}$. Thus $\\mathbf{a}, \\mathbf{b}, \\mathbf{c}$ are mutually perpendicular.<br>$|\\mathbf{b}||\\mathbf{c}| = k|\\mathbf{a}|$ and $|\\mathbf{a}||\\mathbf{b}| = |\\mathbf{c}| \\implies k = \\frac{|\\mathbf{b}||\\mathbf{c}|}{|\\mathbf{a}|} = |\\mathbf{b}|^2$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "It is now given that $|\\mathbf{a}| = 1$ and $|\\mathbf{b}| = \\sqrt{3}$. Using a suitable scalar product, find the <strong>exact</strong> value of $|\\mathbf{b} - \\mathbf{c}|$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "sqrt(6)",
        placeholder: "Exact surd value",
        solution: "$|\\mathbf{b}-\\mathbf{c}|^2 = (\\mathbf{b}-\\mathbf{c})\\cdot(\\mathbf{b}-\\mathbf{c}) = |\\mathbf{b}|^2 - 2\\mathbf{b}\\cdot\\mathbf{c} + |\\mathbf{c}|^2 = |\\mathbf{b}|^2 + |\\mathbf{a}|^2|\\mathbf{b}|^2 = 3 + 3 = 6$ (since $\\mathbf{b}\\perp\\mathbf{c}$).<br>Hence $|\\mathbf{b}-\\mathbf{c}| = \\sqrt{6}$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "State the geometrical interpretation of $|\\mathbf{b} \\times \\mathbf{c}|$.",
        type: "self",
        solution: "$|\\mathbf{b} \\times \\mathbf{c}|$ is the area of the square with adjacent sides $OB$ and $OC$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q4",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "<em>Do not use a calculator in answering this question.</em><br>It is given that $1 - 3\\mathrm{i}$ is a complex root of the equation $z^3 + pz^2 + (p+12)z + q = 0$, where $p$ and $q$ are real numbers.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State another complex root of the equation in the form $a + \\mathrm{i}b$, where $a, b \\in \\mathbb{R}$ and $b \\ne 0$.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["1+3*i"],
        placeholder: "Complex number a + bi",
        solution: "Since all coefficients are real, $z = 1 + 3\\mathrm{i}$ is another root."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the values of $p$ and $q$, and find the third root.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "p =", answer: "-2", exactRequired: true },
          { label: "q =", answer: "0", exactRequired: true },
          { label: "Third root =", answer: "0", exactRequired: true }
        ],
        solution: "Quadratic factor: $(z-1-3\\mathrm{i})(z-1+3\\mathrm{i}) = z^2 - 2z + 10$.<br>$z^3 + pz^2 + (p+12)z + q = (z^2 - 2z + 10)\\left(z + \\frac{q}{10}\\right)$.<br>Comparing $z^2$: $p = -2 + \\frac{q}{10}$; comparing $z$: $p + 12 = -\\frac{q}{5} + 10 \\implies q = 0, p = -2$.<br>Third root is $z = 0$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Point $A$ represents $1 - 3\\mathrm{i}$ with respect to $O$. Point $C$ represents $x + \\mathrm{i}y$ ($x, y \\in \\mathbb{R}, x > 0$). Find $x$ and $y$ such that $OA = AC$ and ∠$OAC = 90°$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "x =", answer: "4", exactRequired: true },
          { label: "y =", answer: "-2", exactRequired: true }
        ],
        solution: "Rotate $OA$ anticlockwise by $90°$ to get $B$: $\\mathrm{i}(1-3\\mathrm{i}) = 3 + \\mathrm{i}$.<br>Then $c = (3+\\mathrm{i}) + (1-3\\mathrm{i}) = 4 - 2\\mathrm{i}$, so $x = 4$ and $y = -2$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q5",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Summation of Series", "Convergence"],
    stem: "The sum, $S_n$, of the first $n$ terms of a sequence $u_1, u_2, u_3, \\dots$ is given by $S_n = \\frac{1}{6} + \\frac{1}{n+3} - \\frac{2}{n+4}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Give a reason why the series $\\sum u_r$ converges and write down the value of the sum to infinity.",
        type: "self",
        solution: "As $n$ tends to infinity, $\\frac{1}{n+3}$ approaches $0$ and $\\frac{2}{n+4}$ approaches $0$, so $S_n$ approaches $\\frac{1}{6}$, a constant. Hence the series converges with sum to infinity $\\frac{1}{6}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Show that $u_n = \\frac{n}{(n+2)(n+3)(n+4)}$.",
        type: "self",
        solution: "$u_n = S_n - S_{n-1} = \\left(\\frac{1}{6}+\\frac{1}{n+3}-\\frac{2}{n+4}\\right) - \\left(\\frac{1}{6}+\\frac{1}{n+2}-\\frac{2}{n+3}\\right) = \\frac{3}{n+3}-\\frac{2}{n+4}-\\frac{1}{n+2} = \\frac{n}{(n+2)(n+3)(n+4)}$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "It is given that $5\\sum_{r=k+1}^\\infty u_r = 9\\sum_{r=1}^k u_r$. Find the value of $k$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "4",
        placeholder: "Integer value of k",
        solution: "$5(S_\\infty - S_k) = 9S_k \\implies 5S_\\infty = 14S_k \\implies \\frac{5}{6} = 14\\left(\\frac{1}{6}+\\frac{1}{k+3}-\\frac{2}{k+4}\\right)$.<br>Using GC, $k = 4$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q6",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Differentiation", "Normals", "Area Under Curve"],
    stem: "A curve has equation $y = \\frac{\\ln(5-x)}{5-x}$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "By differentiation, find the equation of the normal to the curve at the point when the curve cuts the $x$-axis.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\frac{-1}{5-x}(5-x) - \\ln(5-x)(-1)}{(5-x)^2} = \\frac{-1+\\ln(5-x)}{(5-x)^2}$.<br>When $y = 0$, $x = 4$ and gradient of tangent is $-1$, so gradient of normal is $1$.<br>Normal: $y = x - 4$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the <strong>exact</strong> area of the region bounded by the normal, the curve and the $y$-axis.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "8 + 0.5*(ln(5)^2)",
        placeholder: "Exact value",
        solution: "Area $= \\int_0^4 \\frac{\\ln(5-x)}{5-x}\\,\\mathrm{d}x + \\frac{1}{2}(4)(4) = \\left[-\\frac{(\\ln(5-x))^2}{2}\\right]_0^4 + 8 = 8 + \\frac{1}{2}(\\ln 5)^2$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q7",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Maclaurin Series", "Implicit Differentiation"],
    stem: "It is given that $y = \\cos(\\mathrm{e}^{-2x} - 1)$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = k\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x} - ky\\mathrm{e}^{-4x}\\right)$, finding the constant $k$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "-2",
        placeholder: "Value of k",
        solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2\\mathrm{e}^{-2x}\\sin(\\mathrm{e}^{-2x}-1)$.<br>$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -2\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 4\\mathrm{e}^{-4x}y = -2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x} - (-2)y\\mathrm{e}^{-4x}\\right)$, so $k = -2$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "By differentiation of (a), find the first three non-zero terms of the Maclaurin expansion of $\\cos(\\mathrm{e}^{-2x} - 1)$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.1, 0.2, 0.3] },
        answer: "1 - 2*(x^2) + 4*(x^3)",
        placeholder: "Polynomial in x",
        solution: "$\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} = -2\\left(\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\mathrm{e}^{-4x} - 8y\\mathrm{e}^{-4x}\\right)$.<br>At $x=0$: $y=1, y'=0, y''=-4, y'''=24 \\implies 1 - 2x^2 + 4x^3$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "If your expansion in (b) is used to estimate $\\int_0^{0.7}\\cos(\\mathrm{e}^{-2x}-1)\\,\\mathrm{d}x$, explain how you can improve the accuracy of your approximation.",
        type: "self",
        solution: "Include more terms in the Maclaurin expansion of $\\cos(\\mathrm{e}^{-2x} - 1)$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The first two non-zero terms of (b) equal the first two non-zero terms of the expansion of $\\sqrt[3]{a - bx^2}$. Using MF27, find $a$ and $b$.",
        type: "auto",
        mode: "multi-field",
        fields: [{ label: "a =", answer: "1", exactRequired: true }, { label: "b =", answer: "6", exactRequired: true }],
        solution: "$a^{1/3}\\left(1 - \\frac{b}{3a}x^2 + \\dots\\right) = 1 - 2x^2 + \\dots \\implies a = 1, -\\frac{b}{3} = -2 \\implies b = 6$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q8",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Parametric Equations", "Volumes of Revolution"],
    stem: "A curve $C$ has parametric equations $x = \\sec\\theta + 1$, $y = \\tan\\theta - 2$, where $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$.",
    parts: [
      {
        label: "(a) Tangents",
        marks: 3,
        prompt: "Find the equations of the tangents to $C$ at $x = 3$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\sec^2\\theta}{\\sec\\theta\\tan\\theta} = \\frac{1}{\\sin\\theta}$. When $x = 3$, $\\cos\\theta = \\frac{1}{2} \\implies \\theta = \\pm\\frac{\\pi}{3}$.<br>Tangents: $y = \\frac{2}{\\sqrt{3}}x - \\sqrt{3} - 2$ and $y = -\\frac{2}{\\sqrt{3}}x + \\sqrt{3} - 2$."
      },
      {
        label: "(a) Angle",
        marks: 2,
        prompt: "Hence find the acute angle between the two tangents (in degrees, to 1 d.p.).",
        type: "auto",
        mode: "number",
        dp: 1,
        answer: "81.7868",
        placeholder: "Angle in degrees (1 d.p.)",
        solution: "Angle between tangents $= \\tan^{-1}\\frac{2}{\\sqrt{3}} - \\tan^{-1}\\left(-\\frac{2}{\\sqrt{3}}\\right) = 98.21°$.<br>Acute angle $= 180° - 98.21° = 81.8°$ (1 d.p.)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Find the cartesian equation of $C$.",
        type: "self",
        solution: "Using $\\sec^2\\theta - \\tan^2\\theta = 1$: $(x-1)^2 - (y+2)^2 = 1$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Using your answer to (b), find the volume generated when the region enclosed by $C$ and $x = 3$ is rotated $2\\pi$ radians about the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "8*pi*(sqrt(3) - 0.5*ln(2+sqrt(3)))",
        placeholder: "Exact or 3 s.f.",
        solution: "$y = -2 \\pm \\sqrt{(x-1)^2 - 1}$.<br>$V = \\pi\\int_2^3\\left(-2-\\sqrt{(x-1)^2-1}\\right)^2\\mathrm{d}x - \\pi\\int_2^3\\left(-2+\\sqrt{(x-1)^2-1}\\right)^2\\mathrm{d}x = 26.981 \\approx 27.0$ (3 s.f.)."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q9",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["AP & GP", "Mensuration"],
    diagramSvg: `<svg viewBox="0 0 280 140" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><path d="M 80 120 L 32 32 A 95 95 0 0 1 132 32 Z" fill="rgba(91,155,213,0.22)" stroke="#4a8fe7" stroke-width="1.5"/><path d="M 142 110 L 112 52 A 65 65 0 0 1 178 52 Z" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1.3"/><path d="M 188 100 L 168 62 A 42 42 0 0 1 210 62 Z" fill="rgba(91,155,213,0.15)" stroke="#4a8fe7" stroke-width="1.2"/><path d="M 222 92 L 210 68 A 26 26 0 0 1 236 68 Z" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.1"/><text x="24" y="30" stroke="none" font-style="italic">A</text><text x="135" y="30" stroke="none" font-style="italic">B</text><text x="80" y="134" text-anchor="middle" stroke="none" font-style="italic">O</text></svg>`,
    stem: "A pattern on a T-shirt consists of a sequence of similar sectors. The first sector $AOB$ has centre $O$ and radii $OA, OB$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Angle $AOB$ is $1.2$ radians. Given the maximum area of $AOB$ is $57\\text{ cm}^2$, find the range of values of $OA$.",
        type: "self",
        solution: "$\\frac{1}{2}r^2(1.2) \\le 57 \\implies r^2 \\le 95 \\implies 0 < OA \\le \\sqrt{95}$ (or $0 < OA \\le 9.74$)."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "The area of $AOB$ is fixed at $60\\text{ cm}^2$, and the area of each sector is $\\frac{3}{5}$ of the preceding one. Find the area of the $5$th sector.",
        type: "auto",
        mode: "number",
        answer: "972/125",
        placeholder: "Exact or decimal",
        solution: "$u_5 = 60\\left(\\frac{3}{5}\\right)^4 = \\frac{972}{125} = 7.776\\text{ cm}^2$."
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Given the total area of $n$ sectors printed cannot exceed $148.48\\text{ cm}^2$, find the maximum number of sectors that can be printed.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "8",
        placeholder: "Integer",
        solution: "$\\frac{60(1-(0.6)^n)}{1-0.6} \\le 148.48 \\implies (0.6)^n \\ge 1 - \\frac{148.48}{150} \\implies n \\le 8.989$. Max $= 8$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The cost of printing the first sector is $C$ dollars and each subsequent sector costs $0.15$ dollars less than the preceding one. Find the maximum value of $C$ (in dollars, 2 d.p.) if the total cost of printing the first $5$ sectors does not exceed $4.99$ dollars.",
        type: "auto",
        mode: "number",
        answers: ["1.29", "1.298"],
        placeholder: "Max value of C",
        solution: "$\\frac{5}{2}[2C + 4(-0.15)] \\le 4.99 \\implies 2C - 0.6 \\le 1.996 \\implies C \\le 1.298$. Max value of $C$ is $1.29$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q10",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Integration by Substitution", "Integration by Parts", "Area Under Curve"],
    stem: "Let $a$ be a positive constant.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Use the substitution $x = \\frac{\\sin\\theta}{a}$ to find $\\int_0^{1/a} \\frac{x^2}{\\sqrt{1-(ax)^2}}\\,\\mathrm{d}x$ in terms of $a$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { a: [1, 2, 3] },
        answer: "pi/(4*(a^3))",
        placeholder: "Expression in a and pi",
        solution: "$\\mathrm{d}x = \\frac{\\cos\\theta}{a}\\,\\mathrm{d}\\theta$, limits $0$ to $\\frac{\\pi}{2}$.<br>Integral $= \\frac{1}{a^3}\\int_0^{\\pi/2}\\sin^2\\theta\\,\\mathrm{d}\\theta = \\frac{1}{2a^3}\\left[\\theta - \\frac{\\sin 2\\theta}{2}\\right]_0^{\\pi/2} = \\frac{\\pi}{4a^3}$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Hence, or otherwise, find the <strong>exact</strong> value of $\\int_0^{1/2} x\\cos^{-1}(2x)\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "pi/32",
        placeholder: "Exact value",
        solution: "By parts ($u = \\cos^{-1}2x$, $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = x$):<br>$\\left[\\frac{x^2}{2}\\cos^{-1}(2x)\\right]_0^{1/2} + \\int_0^{1/2}\\frac{x^2}{\\sqrt{1-4x^2}}\\,\\mathrm{d}x = 0 + \\frac{\\pi}{4(2^3)} = \\frac{\\pi}{32}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Given $\\mathrm{f}(x) = x\\cos^{-1}(2x)$, find the <strong>exact</strong> area enclosed by $y = \\mathrm{f}(x)$ and $y = -\\mathrm{f}(x)$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "pi/16",
        placeholder: "Exact value",
        solution: "By symmetry about the $x$-axis on $[0, \\frac{1}{2}]$, Area $= 2\\left(\\frac{\\pi}{32}\\right) = \\frac{\\pi}{16}$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q11",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["3D Vectors", "Lines & Planes"],
    stem: "Lines $l_1$ and $l_2$ have equations $\\mathbf{r} = \\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}$ and $\\mathbf{r} = \\begin{pmatrix}3\\\\4\\\\p\\end{pmatrix} + \\mu\\begin{pmatrix}2\\\\1\\\\q\\end{pmatrix}$, where $p, q$ are constants.",
    parts: [
      {
        label: "(a)(i) Intersection",
        marks: 2,
        prompt: "Suppose $l_1$ intersects $l_2$. Find the coordinates of the point of intersection.",
        type: "auto",
        mode: "tuple",
        exactRequired: true,
        answer: [1, 3, -4],
        placeholder: "Coordinates (x, y, z)",
        solution: "$\\lambda - 2\\mu = 1$ and $2\\lambda + \\mu = -3 \\implies \\lambda = -1, \\mu = -1$.<br>Point of intersection: $(1, 3, -4)$."
      },
      {
        label: "(a)(i) Relation",
        marks: 1,
        prompt: "State a linear relationship between $p$ and $q$ for $l_1$ and $l_2$ to intersect.",
        type: "self",
        solution: "From $z$-components: $3(-1) - q(-1) = p + 1 \\implies q - p - 4 = 0$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find the acute angle between $l_1$ and $l_2$ when $q = 2$ (in degrees, to 1 d.p.).",
        type: "auto",
        mode: "number",
        dp: 1,
        answer: "57.688",
        placeholder: "Angle in degrees (1 d.p.)",
        solution: "$\\cos\\theta = \\frac{|(1)(2)+(-2)(1)+(3)(2)|}{\\sqrt{14}\\sqrt{9}} = \\frac{6}{3\\sqrt{14}} \\implies \\theta = 57.7°$ (1 d.p.)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "By using vector product, show that a vector perpendicular to both $l_1$ and $l_2$ is $\\begin{pmatrix}2q+3\\\\q-6\\\\m\\end{pmatrix}$, finding the constant $m$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "-5",
        placeholder: "Value of m",
        solution: "$\\begin{pmatrix}2\\\\1\\\\q\\end{pmatrix} \\times \\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix} = \\begin{pmatrix}2q+3\\\\q-6\\\\-5\\end{pmatrix}$, so $m = -5$."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Plane $\\pi$ contains $l_2$ and is parallel to $l_1$. Find the shortest distance between $l_1$ and $\\pi$ in terms of $p$ and $q$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { p: [1, 2], q: [2, 8] },
        answer: "abs(5*q - 5*p - 20)/sqrt(5*(q^2) + 70)",
        placeholder: "Expression in p and q",
        solution: "Let $A(2,1,-1)$ on $l_1$, $B(3,4,p)$ on $l_2$.<br>Shortest distance $= \\frac{|\\overrightarrow{AB}\\cdot\\mathbf{n}|}{|\\mathbf{n}|} = \\frac{|1(2q+3) + 3(q-6) + (p+1)(-5)|}{\\sqrt{(2q+3)^2 + (q-6)^2 + 25}} = \\frac{|5q - 5p - 20|}{\\sqrt{5q^2 + 70}}$."
      }
    ]
  },
  {
    id: "NYJC-2026-P1-Q12",
    year: 2026,
    school: "NYJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Differential Equations", "Integrating Factor"],
    stem: "The amount of Carbon-11, $C$, in a plant decreases through radioactive decay at a rate equal to $2.5\\%$ of the amount present at time $t$ minutes.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Given initial amount is $123\\text{ MBq}$, write down a differential equation for the decay and solve it in the form $C = \\mathrm{f}(t)$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}C}{\\mathrm{d}t} = -0.025C \\implies \\ln C = -0.025t + B \\implies C = 123\\mathrm{e}^{-0.025t}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Sketch the graph of $C$ against $t$ and explain the significance of the asymptote.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 135" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="115" x2="205" y2="115" stroke-width="1.3"/><line x1="35" y1="125" x2="35" y2="12" stroke-width="1.3"/><path d="M 35 28 Q 75 95 198 112" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="30" y="31" text-anchor="end" stroke="none">123</text><text x="150" y="102" stroke="none" font-size="10">C = 0</text></svg>`,
        solution: "The horizontal asymptote $C = 0$ indicates that in the long run, the amount of Carbon-11 in the plant approaches zero."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "In an improved model, inflow is $t\\mathrm{e}^{-t}$ and outflow is $7\\text{ MBq/min}$ alongside radioactive decay. Express the DE in the form $\\frac{\\mathrm{d}C}{\\mathrm{d}t} + \\lambda C = \\mathrm{g}(t)$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}C}{\\mathrm{d}t} = t\\mathrm{e}^{-t} - 7 - 0.025C \\implies \\frac{\\mathrm{d}C}{\\mathrm{d}t} + 0.025C = t\\mathrm{e}^{-t} - 7$, so $\\lambda = 0.025$ and $\\mathrm{g}(t) = t\\mathrm{e}^{-t} - 7$."
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "By multiplying both sides by $\\mathrm{e}^{\\lambda t}$ and rewriting $\\left(\\frac{\\mathrm{d}C}{\\mathrm{d}t} + \\lambda C\\right)\\mathrm{e}^{\\lambda t}$ as $\\frac{\\mathrm{d}}{\\mathrm{d}t}(C\\mathrm{e}^{\\lambda t})$, find the general solution $C = \\mathrm{h}(t)$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}}{\\mathrm{d}t}(C\\mathrm{e}^{0.025t}) = t\\mathrm{e}^{-0.975t} - 7\\mathrm{e}^{0.025t}$.<br>Integrating (by parts for the first term): $C\\mathrm{e}^{0.025t} = -\\frac{40}{39}t\\mathrm{e}^{-0.975t} - \\frac{1600}{1521}\\mathrm{e}^{-0.975t} - 280\\mathrm{e}^{0.025t} + B$.<br>Thus $C = -\\frac{40}{39}t\\mathrm{e}^{-t} - \\frac{1600}{1521}\\mathrm{e}^{-t} - 280 + B\\mathrm{e}^{-0.025t}$."
      }
    ]
  }
]);