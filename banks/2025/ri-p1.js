window.registerQuestions([
  // ==================== Q1 ====================
  {
    id: "RI-2025-P1-Q1",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities", "Differentiation"],
    stem: "A curve has equation $y = ax + b + \\frac{c}{x^2 - 1}$, where $a$, $b$ and $c$ are real constants. It is given that the curve crosses the $x$-axis at $x = 2$. The normal to the curve at the point $(0, 3)$ meets the $x$-axis at $x = 7.5$.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the values of $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "5/2", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "-3", exactRequired: true, placeholder: "Exact value" },
          { label: "c =", answer: "-6", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "Since $(2, 0)$ and $(0, 3)$ lie on the curve:<br>" +
          "$2a + b + \\frac{1}{3}c = 0 \\quad \\text{--- (1)}$<br>" +
          "$b - c = 3 \\quad \\text{--- (2)}$<br><br>" +
          "Differentiating with respect to $x$:<br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = a - \\frac{2cx}{(x^2 - 1)^2}$<br>" +
          "At $(0, 3)$, the gradient of the tangent is $\\left.\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0} = a$.<br>" +
          "Gradient of normal at $(0, 3) = \\frac{3 - 0}{0 - 7.5} = -\\frac{2}{5}$.<br>" +
          "Hence the gradient of the tangent at $(0, 3)$ is $\\frac{5}{2}$, so $a = \\frac{5}{2} \\quad \\text{--- (3)}$.<br><br>" +
          "Solving (1), (2) and (3) simultaneously:<br>" +
          "$a = \\frac{5}{2}$, $b = -3$ and $c = -6$."
      }
    ]
  },

  // ==================== Q2 ====================
  {
    id: "RI-2025-P1-Q2",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation"],
    stem: "The point $P$ travels along the curve $C$ with equation $y = x\\sin^{-1} x$, $-1 < x < 1$. Let the gradient of the curve $C$ at the point $P$ be $m$.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "If the $x$-coordinate of $P$ is increasing at the rate of $9$ units per second when $x = \\frac{1}{2}$, find the exact value of the rate at which $m$ is changing at this instant.",
        type: "auto",
        mode: "number",
        answer: "14*sqrt(3)",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "Differentiating $y = x\\sin^{-1} x$ with respect to $x$:<br>" +
          "$m = \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\sin^{-1} x + \\frac{x}{\\sqrt{1 - x^2}}$<br><br>" +
          "Differentiating with respect to $x$ again:<br>" +
          "$\\frac{\\mathrm{d}m}{\\mathrm{d}x} = \\frac{1}{\\sqrt{1 - x^2}} + \\frac{\\sqrt{1 - x^2} - x\\left(\\frac{-x}{\\sqrt{1 - x^2}}\\right)}{1 - x^2}$<br>" +
          "$= \\frac{1}{\\sqrt{1 - x^2}} + \\frac{(1 - x^2) + x^2}{(1 - x^2)^{3/2}} = \\frac{2 - x^2}{(1 - x^2)^{3/2}}$<br><br>" +
          "When $x = \\frac{1}{2}$ and $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 9$:<br>" +
          "$\\frac{\\mathrm{d}m}{\\mathrm{d}t} = \\frac{\\mathrm{d}m}{\\mathrm{d}x} \\cdot \\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{2 - \\frac{1}{4}}{\\left(1 - \\frac{1}{4}\\right)^{3/2}} \\times 9 = \\frac{\\frac{7}{4}}{\\frac{3\\sqrt{3}}{8}} \\times 9 = 14\\sqrt{3}$ units per second."
      }
    ]
  },

  // ==================== Q3 ====================
  {
    id: "RI-2025-P1-Q3",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors"],
    stem: "Relative to the origin $O$, the points $A$ and $C$ have position vectors $\\mathbf{a}$ and $2\\mathbf{b}$ such that<br>$$\\mathbf{a} = 5p\\mathbf{i} - 2p\\mathbf{j} + 4p\\mathbf{k} \\quad \\text{and} \\quad \\mathbf{b} = \\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k},$$where $p$ is a positive constant. It is given that $|\\mathbf{a}| = 2|\\mathbf{b}|$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the exact value of $p$.",
        type: "auto",
        mode: "number",
        answer: "2*sqrt(5)/5",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "Since $|\\mathbf{a}| = 2|\\mathbf{b}|$ and $p > 0$:<br>" +
          "$\\sqrt{(5p)^2 + (-2p)^2 + (4p)^2} = 2\\sqrt{1^2 + (-2)^2 + 2^2}$<br>" +
          "$3\\sqrt{5}\\,p = 2(3) = 6$<br>" +
          "$p = \\frac{2}{\\sqrt{5}} = \\frac{2\\sqrt{5}}{5}$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Evaluate $(\\mathbf{a} + 2\\mathbf{b}) \\cdot (\\mathbf{a} - 2\\mathbf{b})$.",
        type: "auto",
        mode: "number",
        answer: "0",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "$(\\mathbf{a} + 2\\mathbf{b}) \\cdot (\\mathbf{a} - 2\\mathbf{b}) = \\mathbf{a}\\cdot\\mathbf{a} - 2\\mathbf{a}\\cdot\\mathbf{b} + 2\\mathbf{b}\\cdot\\mathbf{a} - 4\\mathbf{b}\\cdot\\mathbf{b}$<br>" +
          "$= |\\mathbf{a}|^2 - 4|\\mathbf{b}|^2 = (2|\\mathbf{b}|)^2 - 4|\\mathbf{b}|^2 = 0$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Evaluate $\\mathbf{a} \\times \\mathbf{b}$ and hence find the area of triangle $OAC$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "i-comp of a × b =", answer: "8*sqrt(5)/5", exactRequired: true, placeholder: "Exact value" },
          { label: "j-comp of a × b =", answer: "-12*sqrt(5)/5", exactRequired: true, placeholder: "Exact value" },
          { label: "k-comp of a × b =", answer: "-16*sqrt(5)/5", exactRequired: true, placeholder: "Exact value" },
          { label: "Area of △OAC =", answer: "4*sqrt(145)/5", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "$\\mathbf{a} \\times \\mathbf{b} = p\\begin{pmatrix} 5 \\\\ -2 \\\\ 4 \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ -2 \\\\ 2 \\end{pmatrix} = p\\begin{pmatrix} 4 \\\\ -6 \\\\ -8 \\end{pmatrix} = \\frac{2\\sqrt{5}}{5}\\begin{pmatrix} 4 \\\\ -6 \\\\ -8 \\end{pmatrix} = \\frac{4\\sqrt{5}}{5}\\begin{pmatrix} 2 \\\\ -3 \\\\ -4 \\end{pmatrix} = \\begin{pmatrix} \\frac{8\\sqrt{5}}{5} \\\\ -\\frac{12\\sqrt{5}}{5} \\\\ -\\frac{16\\sqrt{5}}{5} \\end{pmatrix}$<br><br>" +
          "Area of triangle $OAC = \\frac{1}{2}|\\mathbf{a} \\times 2\\mathbf{b}| = |\\mathbf{a} \\times \\mathbf{b}|$<br>" +
          "$= \\frac{4\\sqrt{5}}{5}\\sqrt{2^2 + (-3)^2 + (-4)^2} = \\frac{4\\sqrt{5}}{5}\\sqrt{29} = \\frac{4\\sqrt{145}}{5}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Use a geometrical reason to explain why $|\\mathbf{a} \\times \\mathbf{b}| = \\frac{1}{4}(|\\mathbf{a} + 2\\mathbf{b}|)(|\\mathbf{a} - 2\\mathbf{b}|)$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 180" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="50,145 155,140 220,40 115,45" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="50" y1="145" x2="220" y2="40" stroke="#2c2925" stroke-width="1.2"/>
  <line x1="115" y1="45" x2="155" y2="140" stroke="#2c2925" stroke-width="1.2"/>
  <!-- Right angle marker at intersection M=(135, 92.5) -->
  <polyline points="127,97.4 131.5,105.5 139.5,100.6" fill="none" stroke="#2c2925" stroke-width="1.1"/>
  <text x="36" y="155" stroke="none">O</text>
  <text x="160" y="152" stroke="none">A</text>
  <text x="103" y="38" stroke="none">C</text>
  <text x="225" y="38" stroke="none">D</text>
  <text x="98" y="158" stroke="none" font-weight="bold">a</text>
  <text x="63" y="92" stroke="none" font-weight="bold">2b</text>
</svg>`,
        solution:
          "Consider the parallelogram $OADC$ with sides $OA = \\mathbf{a}$ and $OC = 2\\mathbf{b}$.<br>" +
          "Then its diagonals are $OD = \\mathbf{a} + 2\\mathbf{b}$ and $CA = \\mathbf{a} - 2\\mathbf{b}$.<br>" +
          "From part (b), $(\\mathbf{a} + 2\\mathbf{b}) \\cdot (\\mathbf{a} - 2\\mathbf{b}) = 0$, so $OD$ is perpendicular to $CA$.<br>" +
          "Also, the diagonals of a parallelogram bisect each other (in fact $OADC$ is a rhombus since $|\\mathbf{a}| = |2\\mathbf{b}|$).<br><br>" +
          "From part (c), area of △$OAC = |\\mathbf{a} \\times \\mathbf{b}|$.<br>" +
          "Using base $CA$ and perpendicular height $\\frac{1}{2}OD$:<br>" +
          "Area of △$OAC = \\frac{1}{2}(CA)\\left(\\frac{1}{2}OD\\right) = \\frac{1}{4}(|\\mathbf{a} - 2\\mathbf{b}|)(|\\mathbf{a} + 2\\mathbf{b}|)$.<br>" +
          "Hence $|\\mathbf{a} \\times \\mathbf{b}| = \\frac{1}{4}(|\\mathbf{a} + 2\\mathbf{b}|)(|\\mathbf{a} - 2\\mathbf{b}|)$."
      }
    ]
  },

  // ==================== Q4 ====================
  {
    id: "RI-2025-P1-Q4",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find $\\int \\frac{9x}{(2x - 1)(x + 1)^2}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "ln(abs((2*x-1)/(x+1))) - 3/(x+1)",
        domainPoints: [2, 3, 5],
        placeholder: "Expression in x (include + c)",
        solution:
          "Let $\\frac{9x}{(2x - 1)(x + 1)^2} = \\frac{A}{2x - 1} + \\frac{B}{x + 1} + \\frac{C}{(x + 1)^2}$.<br>" +
          "$9x = A(x + 1)^2 + B(2x - 1)(x + 1) + C(2x - 1)$.<br>" +
          "Substitute $x = \\frac{1}{2}$: $\\frac{9}{2} = \\frac{9}{4}A \\implies A = 2$.<br>" +
          "Substitute $x = -1$: $-9 = -3C \\implies C = 3$.<br>" +
          "Comparing $x^2$ coefficients: $A + 2B = 0 \\implies B = -1$.<br><br>" +
          "$\\int \\frac{9x}{(2x - 1)(x + 1)^2}\\,\\mathrm{d}x = \\int \\left(\\frac{2}{2x - 1} - \\frac{1}{x + 1} + \\frac{3}{(x + 1)^2}\\right)\\,\\mathrm{d}x$<br>" +
          "$= \\ln|2x - 1| - \\ln|x + 1| - \\frac{3}{x + 1} + c = \\ln\\left|\\frac{2x - 1}{x + 1}\\right| - \\frac{3}{x + 1} + c$."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "Differentiate $\\frac{1}{x^2 + 1}$ with respect to $x$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 3] },
        answer: "-2*x/(x^2+1)^2",
        placeholder: "Expression in x",
        solution:
          "$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\frac{1}{x^2 + 1}\\right) = -\\frac{2x}{(x^2 + 1)^2}$."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "Differentiate $\\ln\\sqrt{x^2 + 1}$ with respect to $x$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 3] },
        answer: "x/(x^2+1)",
        placeholder: "Expression in x",
        solution:
          "$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\ln\\sqrt{x^2 + 1}\\right) = \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\frac{1}{2}\\ln(x^2 + 1)\\right] = \\frac{x}{x^2 + 1}$."
      },
      {
        label: "(b)(iii)",
        marks: 4,
        prompt: "Hence find $\\int \\frac{x\\ln\\sqrt{x^2 + 1}}{(x^2 + 1)^2}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "-(ln(x^2+1)+1)/(4*(x^2+1))",
        domainPoints: [0, 1, 2],
        placeholder: "Expression in x (include + c)",
        solution:
          "Using parts with $u = \\ln\\sqrt{x^2 + 1}$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\frac{-2x}{(x^2 + 1)^2}$:<br>" +
          "From (b)(i) and (b)(ii), $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{x}{x^2 + 1}$ and $v = \\frac{1}{x^2 + 1}$.<br><br>" +
          "$\\int \\frac{x\\ln\\sqrt{x^2 + 1}}{(x^2 + 1)^2}\\,\\mathrm{d}x = -\\frac{1}{2}\\int \\frac{-2x}{(x^2 + 1)^2}\\ln\\sqrt{x^2 + 1}\\,\\mathrm{d}x$<br>" +
          "$= -\\frac{1}{2}\\left[\\frac{\\ln\\sqrt{x^2 + 1}}{x^2 + 1} - \\int \\frac{x}{(x^2 + 1)^2}\\,\\mathrm{d}x\\right]$<br>" +
          "$= -\\frac{\\ln\\sqrt{x^2 + 1}}{2(x^2 + 1)} + \\frac{1}{2}\\left(-\\frac{1}{2(x^2 + 1)}\\right) + c$<br>" +
          "$= -\\frac{\\ln(x^2 + 1) + 1}{4(x^2 + 1)} + c$."
      }
    ]
  },

  // ==================== Q5 ====================
  {
    id: "RI-2025-P1-Q5",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="20" y1="135" x2="345" y2="135" stroke-width="1.2"/>
  <polyline points="339,131 345,135 339,139" fill="none" stroke-width="1.2"/>
  <line x1="100" y1="205" x2="100" y2="15" stroke-width="1.2"/>
  <polyline points="96,21 100,15 104,21" fill="none" stroke-width="1.2"/>
  <text x="348" y="139" stroke="none">x</text>
  <text x="89" y="20" stroke="none">y</text>
  <text x="86" y="149" stroke="none">O</text>
  <!-- Asymptotes: x=0 (y-axis), x=2 (x=180), y=2 (y=95) -->
  <line x1="180" y1="20" x2="180" y2="205" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="25" y1="95" x2="335" y2="95" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="155" y="206" stroke="none">x = 2</text>
  <text x="72" y="206" stroke="none">x = 0</text>
  <text x="305" y="109" stroke="none">y = 2</text>
  <!-- Branch 1: x < 0, approaches y=2 from above on left, +inf as x -> 0- -->
  <path d="M 25,92 C 65,90 88,80 96,22" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Branch 2: 0 < x < 2, U-shape touching (1,0) at (140, 135) -->
  <path d="M 105,22 C 115,95 128,135 140,135 C 152,135 165,95 175,22" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Branch 3: x > 2, from -inf at x=2+, crosses (3,0) at (220,135), max TP (4,4) at (260,55), approaches y=2 from above -->
  <path d="M 185,202 C 195,165 210,148 220,135 C 235,112 248,55 260,55 C 275,55 290,90 335,93" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Points -->
  <circle cx="140" cy="135" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="220" cy="135" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="260" cy="55" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="128" y="150" stroke="none">(1, 0)</text>
  <text x="218" y="150" stroke="none">(3, 0)</text>
  <text x="252" y="45" stroke="none">(4, 4)</text>
  <text x="28" y="82" stroke="none" fill="#4a8fe7">y = f(x)</text>
</svg>`,
    stem: "<strong>(a)</strong> The diagram above shows a sketch of the graph of $y = \\mathrm{f}(x)$. The curve passes through the points with coordinates $(1, 0)$ and $(3, 0)$, and has turning points at $(1, 0)$ and $(4, 4)$. The asymptotes are $x = 0$, $x = 2$ and $y = 2$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}'(x)$, showing clearly the main features of the graph.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="20" y1="120" x2="345" y2="120" stroke-width="1.2"/>
  <polyline points="339,116 345,120 339,124" fill="none" stroke-width="1.2"/>
  <line x1="100" y1="205" x2="100" y2="15" stroke-width="1.2"/>
  <polyline points="96,21 100,15 104,21" fill="none" stroke-width="1.2"/>
  <text x="348" y="124" stroke="none">x</text>
  <text x="89" y="20" stroke="none">y</text>
  <text x="86" y="134" stroke="none">O</text>
  <!-- Asymptotes: x=0, x=2 (x=180), y=0 -->
  <line x1="180" y1="20" x2="180" y2="205" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="184" y="204" stroke="none">x = 2</text>
  <text x="68" y="204" stroke="none">x = 0</text>
  <text x="305" y="112" stroke="none">y = 0</text>
  <!-- x < 0: f'(x) > 0, approaches 0 from above as x -> -inf, +inf as x -> 0- -->
  <path d="M 25,117 C 68,116 90,104 97,22" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- 0 < x < 2: f'(x) from -inf at 0+, crosses (1,0) at (140,120) with inflection, to +inf at 2- -->
  <path d="M 104,200 C 110,145 124,122 140,120 C 156,118 170,95 176,22" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- x > 2: f'(x) from +inf at 2+, crosses (4,0) at (260,120), dips to min below x-axis, approaches y=0 from below -->
  <path d="M 184,22 C 192,85 225,105 260,120 C 282,130 295,148 308,142 C 320,136 330,123 340,122" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="140" cy="120" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="260" cy="120" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="132" y="136" stroke="none">(1, 0)</text>
  <text x="236" y="136" stroke="none">(4, 0)</text>
  <text x="26" y="106" stroke="none" fill="#4a8fe7">y = f'(x)</text>
</svg>`,
        solution:
          "Key features of $y = \\mathrm{f}'(x)$:<br>" +
          "• Vertical asymptotes: $x = 0$ and $x = 2$.<br>" +
          "• Horizontal asymptote: $y = 0$ (as $x$ → ±∞).<br>" +
          "• $x$-intercepts at $(1, 0)$ and $(4, 0)$ (corresponding to stationary points of $\\mathrm{f}$).<br>" +
          "• For $x < 0$, $\\mathrm{f}'(x) > 0$, increasing from $0$ to +∞.<br>" +
          "• For $0 < x < 2$, $\\mathrm{f}'(x)$ increases from −∞ through $(1, 0)$ to +∞.<br>" +
          "• For $x > 2$, $\\mathrm{f}'(x)$ decreases from +∞ through $(4, 0)$, reaches a negative minimum, then increases towards $y = 0$ from below."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\frac{1}{\\mathrm{f}(x)}$, showing clearly the main features of the graph.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="20" y1="140" x2="345" y2="140" stroke-width="1.2"/>
  <polyline points="339,136 345,140 339,144" fill="none" stroke-width="1.2"/>
  <line x1="90" y1="205" x2="90" y2="15" stroke-width="1.2"/>
  <polyline points="86,21 90,15 94,21" fill="none" stroke-width="1.2"/>
  <text x="348" y="144" stroke="none">x</text>
  <text x="79" y="20" stroke="none">y</text>
  <text x="76" y="154" stroke="none">O</text>
  <!-- Asymptotes: x=1 (x=135), x=3 (x=225), y=1/2 (y=90) -->
  <line x1="135" y1="20" x2="135" y2="205" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="225" y1="20" x2="225" y2="205" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="25" y1="90" x2="335" y2="90" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="106" y="205" stroke="none">x = 1</text>
  <text x="230" y="205" stroke="none">x = 3</text>
  <text x="298" y="82" stroke="none">y = 1/2</text>
  <!-- x < 0: approaches y=1/2 from below on left, decreases to (0,0) -->
  <path d="M 25,93 C 58,95 76,125 90,140" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- 0 < x < 1: from (0,0) up to +inf at x=1- -->
  <path d="M 90,140 C 110,136 127,118 132,22" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- 1 < x < 2: from +inf at x=1+ down to (2,0) at (180,140) -->
  <path d="M 138,22 C 143,118 158,136 180,140" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- 2 < x < 3: from (2,0) down to -inf at x=3- -->
  <path d="M 180,140 C 202,144 216,162 222,204" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- x > 3: from +inf at x=3+ down to min TP (4, 1/4) at (270, 115), then up to y=1/2 from below -->
  <path d="M 229,22 C 236,88 255,115 270,115 C 288,115 305,94 335,93" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Open circles at (0,0) and (2,0); closed at (4, 1/4) -->
  <circle cx="90" cy="140" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="180" cy="140" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="270" cy="115" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="167" y="156" stroke="none">(2, 0)</text>
  <text x="256" y="131" stroke="none">(4, 1/4)</text>
  <text x="25" y="114" stroke="none" fill="#4a8fe7">y = 1/f(x)</text>
</svg>`,
        solution:
          "Key features of $y = \\frac{1}{\\mathrm{f}(x)}$:<br>" +
          "• Vertical asymptotes: $x = 1$ and $x = 3$ (from $x$-intercepts of $\\mathrm{f}$).<br>" +
          "• Horizontal asymptote: $y = \\frac{1}{2}$ (approached from below as $x$ → ±∞).<br>" +
          "• Open circles (removable discontinuities) at $(0, 0)$ and $(2, 0)$ corresponding to the vertical asymptotes of $\\mathrm{f}$.<br>" +
          "• Minimum turning point at $\\left(4, \\frac{1}{4}\\right)$ (corresponding to the maximum turning point $(4, 4)$ of $\\mathrm{f}$)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Describe a sequence of transformations which transform the graph of $y = \\frac{x^2 + 1}{x}$ to the graph of $y = \\frac{2x^2 - 5x + 4}{x - 2}$.",
        type: "self",
        solution:
          "Rewrite both equations by long division:<br>" +
          "$y = \\frac{x^2 + 1}{x} = x + \\frac{1}{x}$<br>" +
          "$y = \\frac{2x^2 - 5x + 4}{x - 2} = 2x - 1 + \\frac{2}{x - 2} = 2\\left(x - 2 + \\frac{1}{x - 2}\\right) + 3$.<br><br>" +
          "A valid sequence of transformations is:<br>" +
          "1. Translation in the positive $x$-direction by $2$ units (replacing $x$ by $x - 2$).<br>" +
          "2. Scaling parallel to the $y$-axis by a factor of $2$ (replacing $y$ by $\\frac{y}{2}$).<br>" +
          "3. Translation in the positive $y$-direction by $3$ units (replacing $y$ by $y - 3$).<br><br>" +
          "<em>(Alternative valid orders: (2), (3), (1); or translate $+2$ in $x$, translate $+\\frac{3}{2}$ in $y$, scale parallel to $y$-axis by factor $2$.)</em>"
      }
    ]
  },

  // ==================== Q6 ====================
  {
    id: "RI-2025-P1-Q6",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "A geometric series has first term $2$ and common ratio $0.8$. Find algebraically, the least value of $m$ for the sum of the first $4m$ terms of the series to be greater than $99\\%$ of the sum to infinity.",
        type: "auto",
        mode: "number",
        answer: "21/4",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "$S_{4m} = \\frac{2(1 - 0.8^{4m})}{1 - 0.8} = 10(1 - 0.8^{4m})$, and $S_{\\text{∞}} = \\frac{2}{1 - 0.8} = 10$.<br><br>" +
          "We require $S_{4m} > 0.99 S_{\\text{∞}}$:<br>" +
          "$10(1 - 0.8^{4m}) > 0.99(10)$<br>" +
          "$0.8^{4m} < 0.01$<br>" +
          "$4m \\ln 0.8 < \\ln 0.01$<br>" +
          "$4m > \\frac{\\ln 0.01}{\\ln 0.8} \\approx 20.6377$ (since $\\ln 0.8 < 0$).<br><br>" +
          "Since $4m$ must be a positive integer, $4m \\ge 21 \\implies m \\ge \\frac{21}{4} = 5.25$.<br>" +
          "Therefore, the least value of $m$ is $\\frac{21}{4}$ (or $5.25$)."
      },
      {
        label: "(b)(i)",
        marks: 4,
        prompt: "A finite arithmetic progression $A$ has $n$ terms, first term $a$ and common difference $d$. In another progression $B$, the $k$th term is obtained by adding the $k$th positive odd integer to the corresponding term of $A$. That is, the first term of $B$ is obtained by adding $1$ to the first term of $A$, the second term of $B$ is obtained by adding $3$ to the second term of $A$ and so on.<br><br>It is given that the twelfth term of $A$ is $25$, the sum of all the terms of $A$ is $676$ and the sum of all the terms of $B$ is twice the sum of all the terms of $A$.<br><br>Find the values of $n$, $a$ and $d$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "n =", answer: "26", exactRequired: true, placeholder: "Integer value" },
          { label: "a =", answer: "53/3", exactRequired: true, placeholder: "Exact value" },
          { label: "d =", answer: "2/3", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "Sum of all $n$ terms of $A$: $\\frac{n}{2}[2a + (n - 1)d] = 676 \\quad \\text{--- (1)}$.<br>" +
          "Sum of all $n$ terms of $B$ is twice that of $A$, so the sum of the first $n$ positive odd integers equals $676$:<br>" +
          "$1 + 3 + \\dots + (2n - 1) = \\frac{n}{2}[2(1) + (n - 1)(2)] = n^2 = 676 \\implies n = 26$ (since $n > 0$).<br><br>" +
          "Substituting $n = 26$ into (1):<br>" +
          "$13(2a + 25d) = 676 \\implies 2a + 25d = 52 \\quad \\text{--- (2)}$.<br>" +
          "Given $u_{12} = 25$: $a + 11d = 25 \\quad \\text{--- (3)}$.<br><br>" +
          "Solving (2) and (3): $2(25 - 11d) + 25d = 52 \\implies 3d = 2 \\implies d = \\frac{2}{3}$, and $a = 25 - \\frac{22}{3} = \\frac{53}{3}$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Obtain the sum of the first ten terms of $B$.",
        type: "auto",
        mode: "number",
        answer: "920/3",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "$B$ is an arithmetic progression with first term $a + 1 = \\frac{56}{3}$ and common difference $d + 2 = \\frac{8}{3}$.<br>" +
          "Sum of the first $10$ terms of $B$:<br>" +
          "$= \\frac{10}{2}\\left[2\\left(\\frac{56}{3}\\right) + 9\\left(\\frac{8}{3}\\right)\\right] = 5\\left(\\frac{112 + 72}{3}\\right) = \\frac{920}{3}$."
      }
    ]
  },

  // ==================== Q7 ====================
  {
    id: "RI-2025-P1-Q7",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto 1 + \\frac{3}{\\mathrm{e}^x - 2}$ for $x \\in \\text{ℝ}$, $x > \\ln 2$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find $\\mathrm{f}^{-1}(x)$ and state its domain.",
        type: "self",
        solution:
          "Let $y = 1 + \\frac{3}{\\mathrm{e}^x - 2}$.<br>" +
          "$\\mathrm{e}^x - 2 = \\frac{3}{y - 1} \\implies \\mathrm{e}^x = 2 + \\frac{3}{y - 1} \\implies x = \\ln\\left(2 + \\frac{3}{y - 1}\\right)$.<br><br>" +
          "For $x > \\ln 2$, $\\mathrm{e}^x - 2 > 0$, so $y > 1$, i.e. $\\mathrm{R}_{\\mathrm{f}} = (1, \\text{∞})$.<br>" +
          "Therefore, $\\mathrm{f}^{-1}(x) = \\ln\\left(2 + \\frac{3}{x - 1}\\right)$ with domain $\\mathrm{D}_{\\mathrm{f}^{-1}} = \\mathrm{R}_{\\mathrm{f}} = (1, \\text{∞})$ (or $x \\in \\text{ℝ},\\, x > 1$)."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Another function $\\mathrm{g}$ is defined by<br>$\\mathrm{g}(x) = 2(x - 1)^2 + 2$ for $x \\le 0$,<br>$\\mathrm{g}(x) = 2 + |2 - x|$ for $0 < x \\le 3$.<br><br>Sketch the graph of $y = \\mathrm{g}(x)$ and explain why the composite function $\\mathrm{f}^{-1}\\mathrm{g}$ exists.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (110, 175), scale x: 35px/unit, y: 20px/unit -->
  <line x1="25" y1="175" x2="260" y2="175" stroke-width="1.2"/>
  <polyline points="254,171 260,175 254,179" fill="none" stroke-width="1.2"/>
  <line x1="110" y1="195" x2="110" y2="15" stroke-width="1.2"/>
  <polyline points="106,21 110,15 114,21" fill="none" stroke-width="1.2"/>
  <text x="263" y="179" stroke="none">x</text>
  <text x="99" y="20" stroke="none">y</text>
  <text x="96" y="189" stroke="none">O</text>
  <!-- Branch 1: x <= 0, y = 2(x-1)^2 + 2. At x=0, y=4 -> (110, 95). At x=-0.5, y=6.5 -> (92.5, 45). At x=-0.8, y=8.48 -> (82, 5.4) -->
  <path d="M 80,18 Q 95,66 110,95" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Branch 2: 0 < x <= 3, y = 2 + |2 - x|. (0,4)->(110,95) to (2,2)->(180,135) to (3,3)->(215,115) -->
  <polyline points="110,95 180,135 215,115" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="110" cy="95" r="2.8" fill="#4a8fe7" stroke="none"/>
  <circle cx="180" cy="135" r="2.8" fill="#4a8fe7" stroke="none"/>
  <circle cx="215" cy="115" r="2.8" fill="#4a8fe7" stroke="none"/>
  <text x="72" y="102" stroke="none">(0, 4)</text>
  <text x="168" y="152" stroke="none">(2, 2)</text>
  <text x="220" y="114" stroke="none">(3, 3)</text>
  <text x="32" y="34" stroke="none" fill="#4a8fe7">y = g(x)</text>
</svg>`,
        solution:
          "The graph has a decreasing parabolic branch for $x \\le 0$ ending at a sharp point $(0, 4)$, then a V-shaped segment from $(0, 4)$ down to $(2, 2)$ and up to $(3, 3)$.<br><br>" +
          "From the graph, $\\mathrm{R}_{\\mathrm{g}} = [2, \\text{∞})$.<br>" +
          "Since $\\mathrm{R}_{\\mathrm{g}} = [2, \\text{∞}) \\subseteq (1, \\text{∞}) = \\mathrm{D}_{\\mathrm{f}^{-1}}$, the composite function $\\mathrm{f}^{-1}\\mathrm{g}$ exists."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Hence find the exact value of $k$ such that $\\mathrm{f}^{-1}\\mathrm{g}(k) = \\ln\\frac{5}{2}$.",
        type: "auto",
        mode: "number",
        answer: "1 - sqrt(10)/2",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "$\\mathrm{f}^{-1}\\mathrm{g}(k) = \\ln\\frac{5}{2} \\implies \\mathrm{g}(k) = \\mathrm{f}\\left(\\ln\\frac{5}{2}\\right) = 1 + \\frac{3}{\\frac{5}{2} - 2} = 1 + 6 = 7$.<br><br>" +
          "From the graph of $y = \\mathrm{g}(x)$, $\\mathrm{g}(x) = 7 > 4$ occurs only on the branch $x \\le 0$:<br>" +
          "$2(k - 1)^2 + 2 = 7 \\implies (k - 1)^2 = \\frac{5}{2}$.<br>" +
          "Since $k \\le 0$, $k = 1 - \\sqrt{\\frac{5}{2}} = 1 - \\frac{\\sqrt{10}}{2}$."
      }
    ]
  },

  // ==================== Q8 ====================
  {
    id: "RI-2025-P1-Q8",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Complex Numbers"],
    diagramSvg: `<svg viewBox="0 0 280 180" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="120" x2="260" y2="120" stroke-width="1.2"/>
  <polyline points="254,116 260,120 254,124" fill="none" stroke-width="1.2"/>
  <line x1="120" y1="168" x2="120" y2="14" stroke-width="1.2"/>
  <polyline points="116,20 120,14 124,20" fill="none" stroke-width="1.2"/>
  <text x="250" y="136" stroke="none">Re</text>
  <text x="102" y="22" stroke="none">Im</text>
  <text x="107" y="134" stroke="none">O</text>
  <!-- Point P at (170, 88) -->
  <line x1="166" y1="84" x2="174" y2="92" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="174" y1="84" x2="166" y2="92" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="179" y="92" stroke="none" font-style="italic">P</text>
</svg>`,
    stem: "<strong>Do not use a calculator in answering this question.</strong><br><br><strong>(a)</strong> The point $P$ on the Argand diagram above represents the complex number $w$ given by $w = u + \\mathrm{i}v$, where $u$ and $v$ are real and positive.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Explain algebraically why $\\arg(kw) = \\arg(w)$ for any real constant $k > 1$.",
        type: "self",
        solution:
          "Since $w = u + \\mathrm{i}v$ with $u > 0$ and $v > 0$, we have $kw = ku + \\mathrm{i}(kv)$ where $ku > 0$ and $kv > 0$ (since $k > 1 > 0$).<br>" +
          "Both $w$ and $kw$ lie in the first quadrant, so<br>" +
          "$\\arg(kw) = \\tan^{-1}\\left(\\frac{kv}{ku}\\right) = \\tan^{-1}\\left(\\frac{v}{u}\\right) = \\arg(w)$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Points $Q$ and $R$ represent the complex numbers $kw$ and $\\mathrm{i}kw$, where $k$ is a real constant and $k > 1$.<br><br>On the same Argand diagram, plot the points $Q$ and $R$. Show clearly the geometrical relationship between the points $P$, $Q$ and $R$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="145" x2="265" y2="145" stroke-width="1.2"/>
  <polyline points="259,141 265,145 259,149" fill="none" stroke-width="1.2"/>
  <line x1="120" y1="175" x2="120" y2="14" stroke-width="1.2"/>
  <polyline points="116,20 120,14 124,20" fill="none" stroke-width="1.2"/>
  <text x="252" y="160" stroke="none">Re</text>
  <text x="102" y="22" stroke="none">Im</text>
  <text x="107" y="159" stroke="none">O</text>
  <!-- O=(120,145), P=(168,113), Q=(216,81) [vec=(96,-64)], R=(56,49) [vec=(-64,-96)] -->
  <line x1="120" y1="145" x2="216" y2="81" stroke="#4a8fe7" stroke-dasharray="4,3" stroke-width="1.3"/>
  <line x1="120" y1="145" x2="56" y2="49" stroke="#4a8fe7" stroke-dasharray="4,3" stroke-width="1.3"/>
  <!-- Right angle marker at O -->
  <polyline points="129.6,138.6 123.2,129 113.6,135.4" fill="none" stroke="#2c2925" stroke-width="1.1"/>
  <!-- Equal length double ticks on OQ and OR -->
  <line x1="144" y1="123" x2="149" y2="131" stroke="#2c2925" stroke-width="1.2"/>
  <line x1="148" y1="120" x2="153" y2="128" stroke="#2c2925" stroke-width="1.2"/>
  <line x1="84" y1="99" x2="92" y2="94" stroke="#2c2925" stroke-width="1.2"/>
  <line x1="81" y1="95" x2="89" y2="90" stroke="#2c2925" stroke-width="1.2"/>
  <!-- P -->
  <line x1="164" y1="109" x2="172" y2="117" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="172" y1="109" x2="164" y2="117" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="174" y="122" stroke="none" font-style="italic">P</text>
  <!-- Q -->
  <line x1="212" y1="77" x2="220" y2="85" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="220" y1="77" x2="212" y2="85" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="223" y="84" stroke="none" font-style="italic">Q</text>
  <!-- R -->
  <line x1="52" y1="45" x2="60" y2="53" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="60" y1="45" x2="52" y2="53" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="38" y="52" stroke="none" font-style="italic">R</text>
</svg>`,
        solution:
          "• $O$, $P$ and $Q$ are collinear (same ray from $O$) with $OQ > OP$ since $k > 1$.<br>" +
          "• $R$ is obtained by rotating $Q$ by $90^\\circ$ ($\\frac{\\pi}{2}$ radians) anticlockwise about $O$, so $OR \\perp OQ$ and $OR = OQ$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "In another Argand diagram, the points $A$, $B$ and $C$ represent the complex numbers $z$, $\\mathrm{f}(z)$ and $\\mathrm{f}(\\mathrm{f}(z))$ respectively, where $\\mathrm{f}(z) = z^2 - 2z$.<br><br>Show that $\\mathrm{f}(\\mathrm{f}(z)) - \\mathrm{f}(z) = z(z - 2)(z - 3)(z + 1)$.",
        type: "self",
        solution:
          "$\\mathrm{f}(\\mathrm{f}(z)) - \\mathrm{f}(z) = (z^2 - 2z)^2 - 2(z^2 - 2z) - (z^2 - 2z)$<br>" +
          "$= (z^2 - 2z)(z^2 - 2z - 3)$<br>" +
          "$= z(z - 2)(z - 3)(z + 1)$ (shown)."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "It is given that $ABC$ is a right-angled triangle, described in an anticlockwise sense, with a right angle at $B$, and $BC = mBA$, where $m$ is a positive real constant.<br><br>By considering $\\frac{\\mathrm{f}(\\mathrm{f}(z)) - \\mathrm{f}(z)}{\\mathrm{f}(z) - z}$, or otherwise, show that $(z - 2)(z + 1) = m\\mathrm{i}$.",
        type: "self",
        solution:
          "Since △$ABC$ is described anticlockwise with ∠$ABC = \\frac{\\pi}{2}$ and $BC = mBA$, rotating $BC$ anticlockwise by $\\frac{\\pi}{2}$ about $B$ gives $m \\cdot BA$:<br>" +
          "$\\mathrm{i}[\\mathrm{f}(\\mathrm{f}(z)) - \\mathrm{f}(z)] = m[z - \\mathrm{f}(z)]$<br>" +
          "$\\frac{\\mathrm{f}(\\mathrm{f}(z)) - \\mathrm{f}(z)}{\\mathrm{f}(z) - z} = -\\frac{m}{\\mathrm{i}} = m\\mathrm{i}$.<br><br>" +
          "Note that $\\mathrm{f}(z) - z = z^2 - 3z = z(z - 3)$. Using part (b)(i):<br>" +
          "$\\frac{z(z - 2)(z - 3)(z + 1)}{z(z - 3)} = m\\mathrm{i} \\implies (z - 2)(z + 1) = m\\mathrm{i}$ (shown)."
      },
      {
        label: "(b)(iii)",
        marks: 5,
        prompt: "In the case where $z = x + 2\\mathrm{i}$, where $x$ is a positive real number, find $x$ and $m$. Hence obtain the complex number represented by the point $B$.",
        type: "self",
        solution:
          "Substitute $z = x + 2\\mathrm{i}$ into $z^2 - z - 2 = m\\mathrm{i}$:<br>" +
          "$(x + 2\\mathrm{i})^2 - (x + 2\\mathrm{i}) - 2 = m\\mathrm{i}$<br>" +
          "$(x^2 - x - 6) + \\mathrm{i}(4x - 2) = m\\mathrm{i}$.<br><br>" +
          "Comparing real and imaginary parts:<br>" +
          "$x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0 \\implies x = 3$ (reject $x = -2$ since $x > 0$).<br>" +
          "$m = 4x - 2 = 4(3) - 2 = 10$.<br><br>" +
          "Therefore $z = 3 + 2\\mathrm{i}$, and point $B$ represents:<br>" +
          "$\\mathrm{f}(3 + 2\\mathrm{i}) = (3 + 2\\mathrm{i})^2 - 2(3 + 2\\mathrm{i}) = 9 + 12\\mathrm{i} - 4 - 6 - 4\\mathrm{i} = -1 + 8\\mathrm{i}$."
      }
    ]
  },

  // ==================== Q9 ====================
  {
    id: "RI-2025-P1-Q9",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "Decontamination is a water treatment method to remove a certain undesirable chemical from contaminated water. As the liquid agent is continuously added to the contaminated water in a large tank, the undesirable chemical in the water is removed gradually.<br><br>The rate of decrease of the concentration of the undesirable chemical is proportional to the product of its current concentration and the rate at which the liquid agent flows into the tank. At time $t$ minutes after the start of the treatment process, the concentration of the undesirable chemical is $C$ mg/L and the liquid agent flows into the tank at a rate of $\\frac{1}{1 + t^2}$ L/min. It is known that the initial concentration of the undesirable chemical in the tank is $50$ mg/L and after $10$ minutes, its concentration is measured to be $20$ mg/L.",
    parts: [
      {
        label: "(a)",
        marks: 7,
        prompt: "By setting up and solving a differential equation relating $C$ and $t$, show that $C = 50\\mathrm{e}^{q\\tan^{-1} t}$, giving the value of $q$ correct to $5$ decimal places.",
        type: "self",
        solution:
          "$\\frac{\\mathrm{d}C}{\\mathrm{d}t} = -kC\\left(\\frac{1}{1 + t^2}\\right)$, where $k > 0$.<br>" +
          "Separating variables (with $C > 0$):<br>" +
          "$\\int \\frac{1}{C}\\,\\mathrm{d}C = -k\\int \\frac{1}{1 + t^2}\\,\\mathrm{d}t$<br>" +
          "$\\ln|C| = -k\\tan^{-1} t + c_1 \\implies C = A\\mathrm{e}^{-k\\tan^{-1} t}$ where $A = \\mathrm{e}^{c_1} > 0$.<br><br>" +
          "When $t = 0$, $C = 50$: $50 = A\\mathrm{e}^0 \\implies A = 50$, so $C = 50\\mathrm{e}^{-k\\tan^{-1} t}$.<br>" +
          "When $t = 10$, $C = 20$: $20 = 50\\mathrm{e}^{-k\\tan^{-1} 10} \\implies \\mathrm{e}^{-k\\tan^{-1} 10} = \\frac{2}{5}$.<br>" +
          "$-k = \\frac{\\ln(2/5)}{\\tan^{-1} 10} \\approx -0.6228492 \\approx -0.62285$ (5 d.p.).<br>" +
          "Hence $C = 50\\mathrm{e}^{q\\tan^{-1} t}$ where $q = -0.62285$ (5 d.p.) (shown)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Determine the value of $C$ when $t = 50$.",
        type: "auto",
        mode: "number",
        answer: "19.031758",
        placeholder: "Correct to 3 s.f.",
        solution:
          "When $t = 50$, $C = 50\\mathrm{e}^{-0.62285\\tan^{-1}(50)} = 19.0317 \\approx 19.0$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Sketch the graph of $C$ against $t$ and state what happens to $C$ in the tank for large values of $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 180" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (45, 150) -->
  <line x1="30" y1="150" x2="280" y2="150" stroke-width="1.2"/>
  <polyline points="274,146 280,150 274,154" fill="none" stroke-width="1.2"/>
  <line x1="45" y1="165" x2="45" y2="15" stroke-width="1.2"/>
  <polyline points="41,21 45,15 49,21" fill="none" stroke-width="1.2"/>
  <text x="275" y="165" stroke="none" font-style="italic">t</text>
  <text x="30" y="22" stroke="none" font-style="italic">C</text>
  <text x="32" y="164" stroke="none">O</text>
  <!-- Horizontal asymptote C = 18.8 at y = 150 - 18.8*2.3 = 106.8 -->
  <line x1="45" y1="107" x2="270" y2="107" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="218" y="122" stroke="none">C = 18.8</text>
  <!-- Curve starting at (0, 50) -> (45, 35) decreasing concave up toward y=107 -->
  <path d="M 45,35 C 65,78 100,98 155,103 C 200,105 240,106 270,106.2" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="45" cy="35" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="24" y="39" stroke="none">50</text>
  <text x="155" y="92" stroke="none" fill="#4a8fe7">C = 50e^(-0.62285 arctan t)</text>
</svg>`,
        solution:
          "As $t$ → ∞, $\\tan^{-1} t$ → $\\frac{\\pi}{2}$, so $C$ → $50\\mathrm{e}^{-0.62285(\\pi/2)} \\approx 18.8$.<br>" +
          "Therefore, the concentration $C$ decreases and approaches $18.8$ mg/L for large values of $t$."
      }
    ]
  },

  // ==================== Q10 ====================
  {
    id: "RI-2025-P1-Q10",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Graphs & Transformations", "Integration"],
    diagramSvg: `<svg viewBox="0 0 340 220" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (40, 120), x scale ~32px/unit, y scale ~35px/unit -->
  <line x1="25" y1="120" x2="325" y2="120" stroke-width="1.2"/>
  <polyline points="319,116 325,120 319,124" fill="none" stroke-width="1.2"/>
  <line x1="40" y1="210" x2="40" y2="14" stroke-width="1.2"/>
  <polyline points="36,20 40,14 44,20" fill="none" stroke-width="1.2"/>
  <text x="320" y="135" stroke="none" font-style="italic">x</text>
  <text x="27" y="20" stroke="none" font-style="italic">y</text>
  <!-- Vertical asymptote x = 0.5 at x = 56 -->
  <line x1="56" y1="18" x2="56" y2="208" stroke-dasharray="4,3" opacity="0.6"/>
  <!-- Curve y = 2 - x/sqrt(2x-1):
       x=0.51 -> y=-1.6 (56.3, 176)
       x=0.536 -> y=0 (57.2, 120)
       x=1 -> y=1 (72, 85)
       x=2 -> y=0.845 (104, 90.4)
       x=4 -> y=0.488 (168, 102.9)
       x=7.464 -> y=0 (278.8, 120)
       x=9 -> y=-0.183 (320, 126.4) -->
  <path d="M 56.5,204 C 56.8,145 57.5,112 60,96 C 63,86 67,85 72,85 C 92,85 130,95 180,105 C 225,113 255,117 279,120 L 320,127" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="155" y="75" stroke="none" fill="#4a8fe7">y = 2 − x / √(2x − 1)</text>
</svg>`,
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Using the substitution $u = \\sqrt{2x - 1}$, show that $\\int \\frac{x}{\\sqrt{2x - 1}}\\,\\mathrm{d}x = \\int \\frac{u^2 + 1}{2}\\,\\mathrm{d}u$.",
        type: "self",
        solution:
          "$u = \\sqrt{2x - 1} \\implies u^2 = 2x - 1 \\implies x = \\frac{u^2 + 1}{2}$.<br>" +
          "Differentiating with respect to $u$: $2u = 2\\frac{\\mathrm{d}x}{\\mathrm{d}u} \\implies \\frac{\\mathrm{d}x}{\\mathrm{d}u} = u$.<br><br>" +
          "$\\int \\frac{x}{\\sqrt{2x - 1}}\\,\\mathrm{d}x = \\int \\frac{\\frac{u^2 + 1}{2}}{u}(u)\\,\\mathrm{d}u = \\int \\frac{u^2 + 1}{2}\\,\\mathrm{d}u$ (shown)."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "The diagram above shows the graph of $y = 2 - \\frac{x}{\\sqrt{2x - 1}}$. State the equation of the asymptote of the curve and the coordinates of its turning point and points of intersection with the $x$-axis.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 205" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="120" x2="325" y2="120" stroke-width="1.2"/>
  <polyline points="319,116 325,120 319,124" fill="none" stroke-width="1.2"/>
  <line x1="40" y1="198" x2="40" y2="14" stroke-width="1.2"/>
  <polyline points="36,20 40,14 44,20" fill="none" stroke-width="1.2"/>
  <text x="320" y="135" stroke="none" font-style="italic">x</text>
  <text x="27" y="20" stroke="none" font-style="italic">y</text>
  <line x1="56" y1="18" x2="56" y2="195" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="61" y="28" stroke="none">x = 1/2</text>
  <path d="M 56.5,192 C 56.8,145 57.5,112 60,96 C 63,86 67,85 72,85 C 92,85 130,95 180,105 C 225,113 255,117 279,120 L 320,127" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="72" cy="85" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="57.2" cy="120" r="2.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="279" cy="120" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="68" y="76" stroke="none">(1, 1)</text>
  <text x="61" y="136" stroke="none">(0.536, 0)</text>
  <text x="260" y="112" stroke="none">(7.46, 0)</text>
</svg>`,
        solution:
          "• Vertical asymptote: $x = \\frac{1}{2}$.<br>" +
          "• Turning point: setting $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1 - x}{(2x - 1)^{3/2}} = 0$ gives $(1, 1)$.<br>" +
          "• $x$-intercepts: $\\frac{x}{\\sqrt{2x - 1}} = 2 \\implies x^2 - 8x + 4 = 0 \\implies x = 4 \\pm 2\\sqrt{3}$, i.e. $(0.536, 0)$ and $(7.46, 0)$ (3 s.f.)."
      },
      {
        label: "(b)(ii)",
        marks: 5,
        prompt: "The region $R$ is bounded by the curve $y = 2 - \\frac{x}{\\sqrt{2x - 1}}$ and the lines $x = 1$, $x = 3$ and $y = \\frac{1}{2}$. Find the exact area of $R$.",
        type: "auto",
        mode: "number",
        answer: "(11 - 4*sqrt(5))/3",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "For $1 \\le x \\le 3$, the curve lies above $y = \\frac{1}{2}$ (at $x = 3$, $y = 2 - \\frac{3}{\\sqrt{5}} \\approx 0.658 > 0.5$).<br>" +
          "$\\text{Area} = \\int_1^3 \\left(2 - \\frac{x}{\\sqrt{2x - 1}} - \\frac{1}{2}\\right)\\,\\mathrm{d}x = \\int_1^3 \\frac{3}{2}\\,\\mathrm{d}x - \\int_1^3 \\frac{x}{\\sqrt{2x - 1}}\\,\\mathrm{d}x$.<br><br>" +
          "Using part (a) with $u = \\sqrt{2x - 1}$: when $x = 1$, $u = 1$; when $x = 3$, $u = \\sqrt{5}$.<br>" +
          "$\\text{Area} = \\frac{3}{2}(3 - 1) - \\int_1^{\\sqrt{5}} \\frac{u^2 + 1}{2}\\,\\mathrm{d}u = 3 - \\frac{1}{2}\\left[\\frac{u^3}{3} + u\\right]_1^{\\sqrt{5}}$<br>" +
          "$= 3 - \\frac{1}{2}\\left(\\frac{5\\sqrt{5}}{3} + \\sqrt{5} - \\frac{1}{3} - 1\\right) = 3 - \\frac{1}{2}\\left(\\frac{8\\sqrt{5}}{3} - \\frac{4}{3}\\right) = \\frac{11 - 4\\sqrt{5}}{3}$."
      },
      {
        label: "(c)(i)",
        marks: 1,
        prompt: "The region $S$ is bounded by the curves $y = 2 - \\frac{x}{\\sqrt{2x - 1}}$, $x = 2(y - 1)^2 + 1$, the lines $x = 1$, $x = 4$ and the $x$-axis.<br><br>Express $x = 2(y - 1)^2 + 1$ in the form $y = \\mathrm{f}(x)$.",
        type: "self",
        solution:
          "$2(y - 1)^2 = x - 1 \\implies (y - 1)^2 = \\frac{x - 1}{2} \\implies y = 1 \\pm \\sqrt{\\frac{x - 1}{2}}$."
      },
      {
        label: "(c)(ii)",
        marks: 2,
        prompt: "On the same diagram as in part (b)(i), sketch the graph of $x = 2(y - 1)^2 + 1$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 215" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="120" x2="325" y2="120" stroke-width="1.2"/>
  <polyline points="319,116 325,120 319,124" fill="none" stroke-width="1.2"/>
  <line x1="40" y1="205" x2="40" y2="14" stroke-width="1.2"/>
  <polyline points="36,20 40,14 44,20" fill="none" stroke-width="1.2"/>
  <text x="320" y="135" stroke="none" font-style="italic">x</text>
  <text x="27" y="20" stroke="none" font-style="italic">y</text>
  <line x1="56" y1="18" x2="56" y2="202" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="60" y="28" stroke="none">x = 1/2</text>
  <!-- Original curve -->
  <path d="M 56.5,198 C 56.8,145 57.5,112 60,96 C 63,86 67,85 72,85 C 92,85 130,95 180,105 C 225,113 255,117 279,120 L 320,127" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <!-- Sideways parabola x = 2(y-1)^2 + 1: vertex (1,1) at (72,85).
       Upper branch: x=3 -> y=2 (136,50); x=7 -> y=2.73 (264,24); x=8.5 -> y=2.94 (312,17)
       Lower branch: x=3 -> y=0 (136,120); x=7 -> y=-0.73 (264,146); x=8.5 -> y=-0.94 (312,153) -->
  <path d="M 312,17 Q 136,48 72,85 Q 136,122 312,153" fill="none" stroke="#cf5652" stroke-width="1.8"/>
  <circle cx="72" cy="85" r="2.5" fill="#2c2925" stroke="none"/>
  <circle cx="136" cy="120" r="2.5" fill="#cf5652" stroke="none"/>
  <circle cx="279" cy="120" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="58" y="75" stroke="none">(1, 1)</text>
  <text x="128" y="136" stroke="none">(3, 0)</text>
  <text x="260" y="112" stroke="none">(7.46, 0)</text>
  <text x="210" y="28" stroke="none" fill="#cf5652">x = 2(y − 1)² + 1</text>
</svg>`,
        solution:
          "The graph of $x = 2(y - 1)^2 + 1$ is a rightward-opening parabola with two branches symmetric about $y = 1$, vertex at $(1, 1)$, and $x$-intercept at $(3, 0)$ (between $(1, 0)$ and $(7.46, 0)$)."
      },
      {
        label: "(c)(iii)",
        marks: 3,
        prompt: "Find the volume of the solid generated when $S$ is rotated through $2\\pi$ radians about the $x$-axis. Give your answer correct to $3$ decimal places.",
        type: "auto",
        mode: "number",
        answer: "4.518334",
        dp: 3,
        placeholder: "Correct to 3 d.p.",
        solution:
          "The region $S$ lies between $y = 2 - \\frac{x}{\\sqrt{2x - 1}}$ (from $x = 1$ to $x = 4$) on top, and the lower branch $y = 1 - \\sqrt{\\frac{x - 1}{2}}$ (from $x = 1$ to $x = 3$) and the $x$-axis (from $x = 3$ to $x = 4$) below.<br><br>" +
          "$\\text{Volume} = \\pi\\int_1^4 \\left(2 - \\frac{x}{\\sqrt{2x - 1}}\\right)^2\\,\\mathrm{d}x - \\pi\\int_1^3 \\left(1 - \\sqrt{\\frac{x - 1}{2}}\\right)^2\\,\\mathrm{d}x$<br>" +
          "$= 4.518334 \\approx 4.518$ units$^3$ (3 d.p.)."
      }
    ]
  },

  // ==================== Q11 ====================
  {
    id: "RI-2025-P1-Q11",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "A curve $C$ has parametric equations<br>$$x = 2\\cos\\theta + \\cos 2\\theta, \\quad y = 2\\sin\\theta - \\sin 2\\theta,$$where $0 < \\theta < 2\\pi$ and $\\theta \\ne \\frac{2\\pi}{3},\\, \\pi,\\, \\frac{4\\pi}{3}$.<br><br>The point $P$ with parameter $p$ lies on $C$, and the lines $M_p$ and $N_p$ are the tangent and normal to $C$ at $P$ respectively.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "It is given that $\\sin A + \\sin B = 2\\sin\\frac{A + B}{2}\\cos\\frac{A - B}{2}$ and $\\cos A - \\cos B = -2\\sin\\frac{A + B}{2}\\sin\\frac{A - B}{2}$.<br><br>Using these two results, show that the gradient of $M_p$ is $-\\tan\\left(\\frac{p}{2}\\right)$.",
        type: "self",
        solution:
          "$\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = -2\\sin\\theta - 2\\sin 2\\theta = -2(\\sin 2\\theta + \\sin\\theta)$<br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 2\\cos\\theta - 2\\cos 2\\theta = -2(\\cos 2\\theta - \\cos\\theta)$<br><br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{-2(\\cos 2\\theta - \\cos\\theta)}{-2(\\sin 2\\theta + \\sin\\theta)} = \\frac{-2\\sin\\left(\\frac{3\\theta}{2}\\right)\\sin\\left(\\frac{\\theta}{2}\\right)}{2\\sin\\left(\\frac{3\\theta}{2}\\right)\\cos\\left(\\frac{\\theta}{2}\\right)} = -\\tan\\left(\\frac{\\theta}{2}\\right)$.<br>" +
          "At $\\theta = p$, the gradient of $M_p$ is $-\\tan\\left(\\frac{p}{2}\\right)$ (shown)."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "For $p = \\frac{\\pi}{3}$, $M_p$ and $N_p$ cut the $x$-axis at points $Q$ and $R$ respectively. Find the area of △$PQR$.",
        type: "auto",
        mode: "number",
        answer: "sqrt(3)/2",
        placeholder: "Exact or 3 s.f.",
        solution:
          "When $p = \\frac{\\pi}{3}$:<br>" +
          "$x = 2\\cos\\frac{\\pi}{3} + \\cos\\frac{2\\pi}{3} = 1 - \\frac{1}{2} = \\frac{1}{2}$,<br>" +
          "$y = 2\\sin\\frac{\\pi}{3} - \\sin\\frac{2\\pi}{3} = \\sqrt{3} - \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}$.<br>" +
          "Gradient of $M_p = -\\tan\\frac{\\pi}{6} = -\\frac{1}{\\sqrt{3}}$, and gradient of $N_p = \\sqrt{3}$.<br><br>" +
          "Equation of $M_p$: $y - \\frac{\\sqrt{3}}{2} = -\\frac{1}{\\sqrt{3}}\\left(x - \\frac{1}{2}\\right) \\implies y = -\\frac{1}{\\sqrt{3}}x + \\frac{2}{\\sqrt{3}}$.<br>" +
          "Setting $y = 0$: $x = 2$, so $Q(2, 0)$.<br><br>" +
          "Equation of $N_p$: $y - \\frac{\\sqrt{3}}{2} = \\sqrt{3}\\left(x - \\frac{1}{2}\\right) \\implies y = \\sqrt{3}x$.<br>" +
          "Setting $y = 0$: $x = 0$, so $R(0, 0)$.<br><br>" +
          "Area of △$PQR = \\frac{1}{2}(QR)(y_P) = \\frac{1}{2}(2)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\sqrt{3}}{2}$ units$^2$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The point $S$ with parameter $s$ lies on $C$, and the line $N_s$ is the normal to $C$ at $S$. It is given that $M_p$ and $N_s$ are parallel.<br><br>Given $p \\ne \\frac{\\pi}{3},\\, \\frac{5\\pi}{3}$ and $p < s$, by using the result $\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A\\tan B}$, find an equation relating $p$ and $s$.",
        type: "self",
        solution:
          "Gradient of $M_p = -\\tan\\left(\\frac{p}{2}\\right)$ and gradient of $N_s = \\frac{1}{\\tan\\left(\\frac{s}{2}\\right)}$.<br>" +
          "Since $M_p$ and $N_s$ are parallel:<br>" +
          "$\\frac{1}{\\tan\\left(\\frac{s}{2}\\right)} = -\\tan\\left(\\frac{p}{2}\\right) \\implies 1 + \\tan\\left(\\frac{s}{2}\\right)\\tan\\left(\\frac{p}{2}\\right) = 0$.<br><br>" +
          "Using $\\tan\\left(\\frac{s}{2} - \\frac{p}{2}\\right) = \\frac{\\tan\\left(\\frac{s}{2}\\right) - \\tan\\left(\\frac{p}{2}\\right)}{1 + \\tan\\left(\\frac{s}{2}\\right)\\tan\\left(\\frac{p}{2}\\right)}$, the denominator is $0$, so $\\tan\\left(\\frac{s - p}{2}\\right)$ is undefined.<br>" +
          "Since $0 < p < s < 2\\pi$, we have $0 < \\frac{s - p}{2} < \\pi$, so $\\frac{s - p}{2} = \\frac{\\pi}{2}$.<br>" +
          "Hence $s - p = \\pi$."
      }
    ]
  }
]);
