window.registerQuestions([
  {
    id: "TJC-2025-P1-Q1",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Sequences and Series", "Geometric Progressions"],
    stem: "The sequence $\\{u_n\\}$ is a geometric sequence with first term $a$ and common ratio $\\frac{3}{2}$, where $a > 0$.<br>Another sequence $\\{v_n\\}$ is defined by $v_n = \\frac{9}{u_n}$ for all positive integers $n$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\{v_n\\}$ is also a geometric sequence.",
        type: "self",
        solution: "Since $\\{u_n\\}$ is a geometric sequence with first term $a$ and common ratio $\\frac{3}{2}$, $u_n = a\\left(\\frac{3}{2}\\right)^{n-1}$.<br>$$\\frac{v_n}{v_{n-1}} = \\frac{9}{u_n} \\div \\frac{9}{u_{n-1}} = \\frac{u_{n-1}}{u_n} = \\frac{a\\left(\\frac{3}{2}\\right)^{n-2}}{a\\left(\\frac{3}{2}\\right)^{n-1}} = \\frac{2}{3}$$<br>Since $\\frac{v_n}{v_{n-1}} = \\frac{2}{3}$ is a constant independent of $n$, $\\{v_n\\}$ is a geometric sequence (with first term $\\frac{9}{a}$ and common ratio $\\frac{2}{3}$)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Given that $v_2 = u_2$, find the value of $a$.",
        type: "auto",
        mode: "number",
        answer: "2",
        exactRequired: true,
        placeholder: "Exact value of a",
        solution: "We have $u_2 = a\\left(\\frac{3}{2}\\right)$ and $v_2 = \\frac{9}{u_2} = \\left(\\frac{9}{a}\\right)\\left(\\frac{2}{3}\\right) = \\frac{6}{a}$.<br>Setting $v_2 = u_2$:<br>$$\\frac{6}{a} = \\frac{3}{2}a \\implies a^2 = 4 \\implies a = 2$$<br>(Reject $a = -2$ since $a > 0$.)"
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q2",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation", "Implicit Differentiation"],
    stem: "The curve $C$ has equation $$xy = 1 + (x - y)^3.$$",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the gradient of the tangent to $C$ at the point $A$ where $y = 0$.",
        type: "auto",
        mode: "number",
        answer: "3/2",
        placeholder: "Exact or decimal value",
        solution: "When $y = 0$:<br>$$0 = 1 + (x - 0)^3 \\implies x^3 = -1 \\implies x = -1$$<br>So $A$ is the point $(-1, 0)$.<br><br>Differentiating $xy = 1 + (x - y)^3$ implicitly with respect to $x$:<br>$$y + x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3(x - y)^2\\left(1 - \\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)$$<br>Substituting $x = -1$ and $y = 0$:<br>$$0 - \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3(-1 - 0)^2\\left(1 - \\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)$$<br>$$-\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3 - 3\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\implies 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3}{2}$$<br>The gradient of the tangent to $C$ at $A$ is $\\frac{3}{2}$."
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q3",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Graphing Techniques", "Transformations"],
    stem: "A curve $C$ has equation $y = \\frac{a}{2bx - x^2}$, where $a, b > 0$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Describe the transformation that maps the graph of $C$ onto the graph of $y = \\frac{a}{b^2 - x^2}$.",
        type: "self",
        solution: "Completing the square in the denominator of $C$:<br>$$y = \\frac{a}{2bx - x^2} = \\frac{a}{b^2 - (x - b)^2}$$<br>Replacing $x$ by $x + b$ gives:<br>$$y = \\frac{a}{b^2 - ((x + b) - b)^2} = \\frac{a}{b^2 - x^2}$$<br>Hence, the transformation is a <strong>translation of $b$ units in the negative $x$-direction</strong>."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Given that $a = 1$ and $b = 2$, sketch $C$ stating the equations of any asymptotes and coordinates of any stationary points and of the points where the curve crosses the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 230" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="135" x2="320" y2="135" stroke-width="1.3"/>
  <polyline points="314,131 320,135 314,139" fill="none" stroke-width="1.3"/>
  <text x="323" y="139" stroke="none" font-style="italic">x</text>
  <line x1="115" y1="215" x2="115" y2="15" stroke-width="1.3"/>
  <polyline points="111,21 115,15 119,21" fill="none" stroke-width="1.3"/>
  <text x="119" y="18" stroke="none" font-style="italic">y</text>
  <text x="103" y="148" stroke="none" font-style="italic">O</text>
  <line x1="227" y1="20" x2="227" y2="215" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.65"/>
  <text x="215" y="225" stroke="none">x = 4</text>
  <text x="102" y="225" stroke="none">x = 0</text>
  <text x="24" y="128" stroke="none">y = 0</text>
  <path d="M 24 139 Q 90 142 103 153 Q 111 168 113 210" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <path d="M 118 22 Q 123 105 142 117 Q 171 124 200 117 Q 219 105 224 22" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <path d="M 229 210 Q 231 168 239 153 Q 252 142 312 139" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="171" cy="121" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="150" y="113" stroke="none">(2, 0.25)</text>
  <text x="238" y="88" stroke="none" fill="#4a8fe7" font-style="italic">y = 1 / (4x - x²)</text>
</svg>`,
        solution: "When $a = 1$ and $b = 2$, $y = \\frac{1}{4x - x^2} = \\frac{1}{x(4 - x)} = \\frac{1}{4 - (x - 2)^2}$.<br><ul><li><strong>Vertical asymptotes:</strong> $x = 0$ and $x = 4$.</li><li><strong>Horizontal asymptote:</strong> $y = 0$.</li><li><strong>Stationary point:</strong> minimum turning point at $\\left(2, \\frac{1}{4}\\right)$, i.e. $(2, 0.25)$.</li><li><strong>Axial intercepts:</strong> None (the curve does not cross either axis).</li></ul>"
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q4",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Maclaurin Series", "Small Angle Approximations", "Trigonometry"],
    stem: "In the triangle $ABC$, $AC = 1$, angle $BAC = \\frac{\\pi}{3}$ radians and angle $ABC = \\left(\\frac{\\pi}{6} + \\theta\\right)$ radians.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $BC = \\frac{\\sqrt{3}}{\\cos\\theta + \\sqrt{3}\\sin\\theta}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 165" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="40,135 200,135 100,28" fill="none" stroke-width="1.5"/>
  <text x="26" y="142" stroke="none" font-style="italic">A</text>
  <text x="206" y="142" stroke="none" font-style="italic">B</text>
  <text x="96" y="20" stroke="none" font-style="italic">C</text>
  <text x="58" y="76" stroke="none">1</text>
  <path d="M 60,135 A 20,20 0 0,0 53,121" fill="none" stroke="#4a8fe7" stroke-width="1.3"/>
  <text x="64" y="128" stroke="none" fill="#4a8fe7">π/3</text>
  <path d="M 176,135 A 24,24 0 0,1 182,117" fill="none" stroke="#4a8fe7" stroke-width="1.3"/>
  <text x="135" y="126" stroke="none" fill="#4a8fe7">π/6 + θ</text>
</svg>`,
        solution: "Using the Sine Rule in △$ABC$:<br>$$\\frac{BC}{\\sin\\frac{\\pi}{3}} = \\frac{1}{\\sin\\left(\\frac{\\pi}{6} + \\theta\\right)}$$<br>$$\\frac{BC}{\\frac{\\sqrt{3}}{2}} = \\frac{1}{\\sin\\frac{\\pi}{6}\\cos\\theta + \\cos\\frac{\\pi}{6}\\sin\\theta} = \\frac{1}{\\frac{1}{2}\\cos\\theta + \\frac{\\sqrt{3}}{2}\\sin\\theta}$$<br>$$BC = \\frac{\\frac{\\sqrt{3}}{2}}{\\frac{1}{2}(\\cos\\theta + \\sqrt{3}\\sin\\theta)} = \\frac{\\sqrt{3}}{\\cos\\theta + \\sqrt{3}\\sin\\theta} \\quad \\text{(Shown)}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Given that $\\theta$ is sufficiently small such that $\\theta^3$ and higher powers of $\\theta$ may be neglected, show that $$BC \\approx \\sqrt{3}(1 + a\\theta + b\\theta^2)$$ where $a$ and $b$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "-sqrt(3)", exactRequired: true, placeholder: "Exact constant" },
          { label: "b =", answer: "7/2", exactRequired: true, placeholder: "Exact constant" }
        ],
        solution: "Since $\\theta$ is small, $\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}$ and $\\sin\\theta \\approx \\theta$.<br>$$BC \\approx \\frac{\\sqrt{3}}{\\left(1 - \\frac{\\theta^2}{2}\\right) + \\sqrt{3}\\theta} = \\sqrt{3}\\left[1 + \\left(\\sqrt{3}\\theta - \\frac{\\theta^2}{2}\\right)\\right]^{-1}$$<br>Expanding using $(1 + u)^{-1} = 1 - u + u^2 - \\dots$ up to $\\theta^2$:<br>$$BC \\approx \\sqrt{3}\\left[1 - \\left(\\sqrt{3}\\theta - \\frac{\\theta^2}{2}\\right) + \\left(\\sqrt{3}\\theta - \\frac{\\theta^2}{2}\\right)^2\\right]$$<br>$$\\approx \\sqrt{3}\\left[1 - \\sqrt{3}\\theta + \\frac{\\theta^2}{2} + 3\\theta^2\\right] = \\sqrt{3}\\left(1 - \\sqrt{3}\\theta + \\frac{7}{2}\\theta^2\\right)$$<br>Hence $a = -\\sqrt{3}$ and $b = \\frac{7}{2}$."
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q5",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Equations and Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Without using a calculator, solve the inequality $\\frac{2x - 25}{x^2 - 2x - 3} \\le 2$.",
        type: "self",
        solution: "$$\\frac{2x - 25}{x^2 - 2x - 3} - 2 \\le 0$$<br>$$\\frac{2x - 25 - 2(x^2 - 2x - 3)}{x^2 - 2x - 3} \\le 0$$<br>$$\\frac{-2x^2 + 6x - 19}{x^2 - 2x - 3} \\le 0$$<br>Completing the square on the numerator:<br>$$-2x^2 + 6x - 19 = -2\\left(x - \\frac{3}{2}\\right)^2 - \\frac{29}{2} < 0 \\quad \\text{for all real } x$$<br>Since the numerator is strictly negative for all real $x$, the denominator must be strictly positive:<br>$$x^2 - 2x - 3 > 0 \\implies (x - 3)(x + 1) > 0$$<br>$$\\therefore x < -1 \\quad \\text{or} \\quad x > 3$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Hence solve the inequality $\\frac{2|x + 1| - 25}{(x + 1)^2 - 2|x + 1| - 3} \\le 2$.",
        type: "self",
        solution: "Since $(x + 1)^2 = |x + 1|^2$, replace $x$ by $|x + 1|$ in the result from part (a):<br>$$|x + 1| < -1 \\quad \\text{or} \\quad |x + 1| > 3$$<br>Since $|x + 1| \\ge 0$, $|x + 1| < -1$ has no solution.<br>From $|x + 1| > 3$:<br>$$x + 1 < -3 \\quad \\text{or} \\quad x + 1 > 3$$<br>$$\\therefore x < -4 \\quad \\text{or} \\quad x > 2$$"
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q6",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Vectors"],
    stem: "The points $A$ and $B$ lie on a circle with centre $O$ and radius $\\lambda$ units. With reference to the origin $O$, points $A$ and $B$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$ respectively. The point $X$ on the line segment $AB$ is such that $AX : XB = 1 : 3$ and the point $Y$ is the foot of perpendicular of $X$ on $OB$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the position vector of $X$.",
        type: "self",
        solution: "By the ratio theorem, since $AX : XB = 1 : 3$:<br>$$\\mathbf{OX} = \\frac{3\\mathbf{a} + \\mathbf{b}}{4}$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "It is given that the acute angle $AOB$ is $\\frac{\\pi}{6}$. Find $\\mathbf{a} \\cdot \\mathbf{b}$ in terms of $\\lambda$.",
        type: "self",
        solution: "Since $A$ and $B$ lie on the circle of radius $\\lambda$ centred at $O$, $|\\mathbf{a}| = |\\mathbf{b}| = \\lambda$.<br>$$\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\frac{\\pi}{6} = \\lambda^2\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\sqrt{3}}{2}\\lambda^2$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Show that the position vector of $Y$ is $\\frac{2 + 3\\sqrt{3}}{8}\\mathbf{b}$.",
        type: "self",
        solution: "Since $Y$ is the foot of perpendicular from $X$ to $OB$, the projection of $\\mathbf{OX}$ onto $\\mathbf{OB}$ is:<br>$$\\mathbf{OY} = \\left(\\mathbf{OX} \\cdot \\frac{\\mathbf{b}}{|\\mathbf{b}|}\\right)\\frac{\\mathbf{b}}{|\\mathbf{b}|} = \\frac{1}{4|\\mathbf{b}|^2}\\left((3\\mathbf{a} + \\mathbf{b}) \\cdot \\mathbf{b}\\right)\\mathbf{b}$$<br>$$= \\frac{1}{4\\lambda^2}\\left(3\\mathbf{a} \\cdot \\mathbf{b} + |\\mathbf{b}|^2\\right)\\mathbf{b} = \\frac{1}{4\\lambda^2}\\left(3\\left(\\frac{\\sqrt{3}}{2}\\lambda^2\\right) + \\lambda^2\\right)\\mathbf{b}$$<br>$$= \\frac{1}{4}\\left(\\frac{3\\sqrt{3}}{2} + 1\\right)\\mathbf{b} = \\frac{2 + 3\\sqrt{3}}{8}\\mathbf{b} \\quad \\text{(Shown)}$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "Hence find the exact area of △$OXY$ in terms of $\\lambda$.",
        type: "self",
        solution: "Area of △$OXY = \\frac{1}{2}|\\mathbf{OX} \\times \\mathbf{OY}|$<br>$$= \\frac{1}{2}\\left|\\left(\\frac{3\\mathbf{a} + \\mathbf{b}}{4}\\right) \\times \\left(\\frac{2 + 3\\sqrt{3}}{8}\\mathbf{b}\\right)\\right|$$<br>$$= \\frac{2 + 3\\sqrt{3}}{64}|3(\\mathbf{a} \\times \\mathbf{b}) + (\\mathbf{b} \\times \\mathbf{b})|$$<br>Since $\\mathbf{b} \\times \\mathbf{b} = \\mathbf{0}$:<br>$$= \\frac{3(2 + 3\\sqrt{3})}{64}|\\mathbf{a} \\times \\mathbf{b}| = \\frac{3(2 + 3\\sqrt{3})}{64}|\\mathbf{a}||\\mathbf{b}|\\sin\\frac{\\pi}{6}$$<br>$$= \\frac{3(2 + 3\\sqrt{3})}{64}\\lambda^2\\left(\\frac{1}{2}\\right) = \\frac{3(2 + 3\\sqrt{3})}{128}\\lambda^2 \\text{ units}^2$$"
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q7",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Sequences and Series", "Arithmetic and Geometric Progressions", "Financial Context"],
    stem: "Mabel and Janice decided to start a 5-year savings plan beginning in January 2026.<br><br>Mabel saves using a piggy bank. At the start of January 2026, she deposits SGD 101. Each subsequent month, she increases her deposit by SGD 1 — so she deposits SGD 101 in January, SGD 102 in February, SGD 103 in March, and so on, until SGD 112 in December. At the start of each new year, she resets her monthly deposit to SGD 101 in January and repeats the same pattern through December. She continues this routine from 2026 to 2030, inclusive.<br><br>Janice, on the other hand, deposits SGD 100 at the start of every month into a bank account that earns $0.3\\%$ interest per month, with interest calculated and added into the account at the end of each month.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Show that Janice will have more money in her savings account than Mabel has in her piggy bank at the end of December 2030.",
        type: "self",
        solution: "<strong>For Mabel:</strong><br>Amount saved in 1 year (12 months, AP with first term 101, last term 112):<br>$$\\frac{12}{2}(101 + 112) = 1278 \\text{ (SGD)}$$<br>Amount Mabel saves in 5 years (end of Dec 2030):<br>$$1278 \\times 5 = \\text{SGD } 6390$$<br><br><strong>For Janice:</strong><br>At the end of month $1$, amount $= 100(1.003)$.<br>At the end of month $2$, amount $= (100 + 100(1.003))(1.003) = 100(1.003 + 1.003^2)$.<br>At the end of month $n$, amount:<br>$$100(1.003 + 1.003^2 + \\dots + 1.003^n) = \\frac{100(1.003)(1.003^n - 1)}{1.003 - 1}$$<br>At the end of December 2030, $n = 60$:<br>$$\\text{Amount} = \\frac{100(1.003)(1.003^{60} - 1)}{0.003} = \\text{SGD } 6582.85 \\text{ (2 d.p.)}$$<br>Since $\\text{SGD } 6582.85 > \\text{SGD } 6390$, Janice will have more money in her savings account than Mabel has in her piggy bank at the end of December 2030."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the month and year when Janice's savings first exceed Mabel's savings.",
        type: "self",
        solution: "At the end of the 3rd year (Dec 2028, $n = 36$):<br>Mabel: $1278 \\times 3 = \\text{SGD } 3834$.<br>Janice: $\\frac{100(1.003)(1.003^{36} - 1)}{0.003} = \\text{SGD } 3806.97 < 3834$.<br><br>At the end of the 4th year (Dec 2029, $n = 48$):<br>Mabel: $1278 \\times 4 = \\text{SGD } 5112$.<br>Janice: $\\frac{100(1.003)(1.003^{48} - 1)}{0.003} = \\text{SGD } 5169.97 > 5112$.<br><br>Thus Janice's savings first exceed Mabel's in the 4th year (2029). Let this be the $k$-th month of 2029 ($n = 36 + k$, where $1 \\le k \\le 12$):<br>$$\\frac{100(1.003)(1.003^{36+k} - 1)}{0.003} > 3834 + \\frac{k}{2}\\left[2(101) + (k - 1)(1)\\right]$$<br>Using GC table:<br><ul><li>$k = 2$ (Feb 2029): Janice $= \\text{SGD } 4030.75$, Mabel $= 3834 + 101 + 102 = \\text{SGD } 4037$ (Janice $<$ Mabel)</li><li>$k = 3$ (Mar 2029): Janice $= \\text{SGD } 4143.14$, Mabel $= 4037 + 103 = \\text{SGD } 4140$ (Janice $>$ Mabel)</li></ul><br>Hence Janice's savings first exceed Mabel's in <strong>March 2029</strong>.<br><em>(Note: The official TJC solution key contains a clerical typo using $100003/3$ instead of $100300/3$ and first term $100$ instead of $101$, yielding April 2029; the exact value from the stated problem is March 2029.)</em>"
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q8",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "The complex numbers $z$ and $w$ satisfy the following equations: $$2z + |w| = 2 - 4\\mathrm{i}$$ $$\\mathrm{i}z - w = 2\\mathrm{i}$$ Find $z$ and $w$, giving your answers in the form $a + \\mathrm{i}b$, where $a$ and $b$ are real numbers.",
        type: "self",
        solution: "From the first equation, $z = \\frac{2 - 4\\mathrm{i} - |w|}{2}$. Substituting into $\\mathrm{i}z - w = 2\\mathrm{i}$:<br>$$\\mathrm{i}\\left(\\frac{2 - 4\\mathrm{i} - |w|}{2}\\right) - w = 2\\mathrm{i}$$<br>$$2\\mathrm{i} + 4 - \\mathrm{i}|w| - 2w = 4\\mathrm{i}$$<br>Let $w = a + \\mathrm{i}b$, where $a, b \\in \\mathbb{R}$, so $|w| = \\sqrt{a^2 + b^2}$:<br>$$(4 - 2a) + \\mathrm{i}\\left(2 - \\sqrt{a^2 + b^2} - 2b\\right) = 4\\mathrm{i}$$<br>Comparing real parts: $4 - 2a = 0 \\implies a = 2$.<br>Comparing imaginary parts: $2 - \\sqrt{4 + b^2} - 2b = 4 \\implies \\sqrt{4 + b^2} = -2 - 2b$.<br>Squaring both sides:<br>$$4 + b^2 = 4 + 8b + 4b^2 \\implies 3b^2 + 8b = 0 \\implies b(3b + 8) = 0$$<br>So $b = 0$ (rejected since $\\sqrt{4 + b^2} = -2 - 2b \\ge 0$ fails when $b = 0$) or $b = -\\frac{8}{3}$.<br><br>Therefore:<br>$$w = 2 - \\frac{8}{3}\\mathrm{i}$$<br>Since $|w| = \\sqrt{4 + \\frac{64}{9}} = \\frac{10}{3}$:<br>$$z = \\frac{2 - 4\\mathrm{i} - \\frac{10}{3}}{2} = -\\frac{2}{3} - 2\\mathrm{i}$$"
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "It is given that $z_1 = 2 - \\mathrm{i}$ and $z_3 = -3 + 2\\mathrm{i}$. On an Argand diagram, mark the points $A$ and $C$ representing $z_1$ and $z_3$ respectively.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="115" x2="255" y2="115" stroke-width="1.3"/>
  <polyline points="249,111 255,115 249,119" fill="none" stroke-width="1.3"/>
  <text x="232" y="105" stroke="none">Re(z)</text>
  <line x1="145" y1="195" x2="145" y2="20" stroke-width="1.3"/>
  <polyline points="141,26 145,20 149,26" fill="none" stroke-width="1.3"/>
  <text x="151" y="24" stroke="none">Im(z)</text>
  <text x="133" y="128" stroke="none" font-style="italic">O</text>
  <line x1="145" y1="115" x2="195" y2="140" stroke="#4a8fe7" stroke-width="1.4"/>
  <line x1="145" y1="115" x2="70" y2="65" stroke="#4a8fe7" stroke-width="1.4"/>
  <circle cx="195" cy="140" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="201" y="144" stroke="none" font-style="italic">A (2, -1)</text>
  <circle cx="70" cy="65" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="35" y="55" stroke="none" font-style="italic">C (-3, 2)</text>
</svg>`,
        solution: "Plot $A(2, -1)$ in the fourth quadrant and $C(-3, 2)$ in the second quadrant on the Argand diagram as shown."
      },
      {
        label: "(b)(ii)",
        marks: 4,
        prompt: "The points $B$ and $D$ on the Argand diagram represent complex numbers $z_2$ and $z_4$ respectively. Given that $ABCD$ is a square, labelled in an anti-clockwise direction, find $z_2$ and $z_4$.",
        type: "auto",
        mode: "complex-list",
        answer: ["1+3*i", "-2-2*i"],
        placeholder: "Two complex numbers separated by a comma",
        solutionSvg: `<svg viewBox="0 0 280 230" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="125" x2="255" y2="125" stroke-width="1.3"/>
  <polyline points="249,121 255,125 249,129" fill="none" stroke-width="1.3"/>
  <text x="235" y="116" stroke="none">Re</text>
  <line x1="145" y1="215" x2="145" y2="18" stroke-width="1.3"/>
  <polyline points="141,24 145,18 149,24" fill="none" stroke-width="1.3"/>
  <text x="151" y="23" stroke="none">Im</text>
  <text x="150" y="138" stroke="none" font-style="italic">O</text>
  <polygon points="195,150 170,50 70,75 95,175" fill="rgba(91,155,213,0.16)" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="195" cy="150" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="201" y="155" stroke="none">A(2, -1)</text>
  <circle cx="170" cy="50" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="176" y="48" stroke="none">B(1, 3)</text>
  <circle cx="70" cy="75" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="20" y="72" stroke="none">C(-3, 2)</text>
  <circle cx="95" cy="175" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="36" y="188" stroke="none">D(-2, -2)</text>
</svg>`,
        solution: "Since $ABCD$ is a square labelled anti-clockwise, ∠$ABC = \\frac{\\pi}{2}$ and $BA = BC$. Rotating $BC$ by $\\frac{\\pi}{2}$ anti-clockwise about $B$ gives $BA$:<br>$$\\mathrm{i}(z_3 - z_2) = z_1 - z_2$$<br>$$\\mathrm{i}(-3 + 2\\mathrm{i} - z_2) = 2 - \\mathrm{i} - z_2$$<br>$$-3\\mathrm{i} - 2 - \\mathrm{i}z_2 = 2 - \\mathrm{i} - z_2$$<br>$$(1 - \\mathrm{i})z_2 = 4 + 2\\mathrm{i}$$<br>$$z_2 = \\frac{4 + 2\\mathrm{i}}{1 - \\mathrm{i}} \\cdot \\frac{1 + \\mathrm{i}}{1 + \\mathrm{i}} = \\frac{2 + 6\\mathrm{i}}{2} = 1 + 3\\mathrm{i}$$<br>Using $AB = DC$ (or midpoint of $AC$ equals midpoint of $BD$):<br>$$z_2 - z_1 = z_3 - z_4 \\implies z_4 = z_1 + z_3 - z_2 = (2 - \\mathrm{i}) + (-3 + 2\\mathrm{i}) - (1 + 3\\mathrm{i}) = -2 - 2\\mathrm{i}$$<br>Hence $z_2 = 1 + 3\\mathrm{i}$ and $z_4 = -2 - 2\\mathrm{i}$."
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q9",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Parametric Equations", "Differentiation", "Tangents and Normals"],
    stem: "A curve $C$ is defined parametrically by the equations $$x = t + \\frac{1}{t}, \\quad y = t - \\frac{1}{t}, \\quad t \\ne 0.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the curve $C$, showing clearly the coordinates of the axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 220" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="110" x2="300" y2="110" stroke-width="1.3"/>
  <polyline points="294,106 300,110 294,114" fill="none" stroke-width="1.3"/>
  <text x="303" y="114" stroke="none" font-style="italic">x</text>
  <line x1="160" y1="205" x2="160" y2="15" stroke-width="1.3"/>
  <polyline points="156,21 160,15 164,21" fill="none" stroke-width="1.3"/>
  <text x="165" y="19" stroke="none" font-style="italic">y</text>
  <text x="148" y="123" stroke="none" font-style="italic">O</text>
  <line x1="65" y1="205" x2="255" y2="15" stroke-dasharray="4,3" stroke-width="1" opacity="0.55"/>
  <line x1="65" y1="15" x2="255" y2="205" stroke-dasharray="4,3" stroke-width="1" opacity="0.55"/>
  <path d="M 260 22 Q 212 68 200 110 Q 212 152 260 198" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <path d="M 60 22 Q 108 68 120 110 Q 108 152 60 198" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="200" cy="110" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="206" y="124" stroke="none">(2, 0)</text>
  <circle cx="120" cy="110" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="82" y="124" stroke="none">(-2, 0)</text>
  <text x="255" y="42" stroke="none" opacity="0.7" font-style="italic">y = x</text>
  <text x="255" y="182" stroke="none" opacity="0.7" font-style="italic">y = -x</text>
</svg>`,
        solution: "Note that $x^2 - y^2 = \\left(t + \\frac{1}{t}\\right)^2 - \\left(t - \\frac{1}{t}\\right)^2 = 4$, which is a rectangular hyperbola with $x$-intercepts at $(-2, 0)$ and $(2, 0)$ (when $t = -1$ and $t = 1$ respectively), no $y$-intercepts, and asymptotes $y = x$ and $y = -x$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Use differentiation to find the values of $t$ for which the tangents to the curve are parallel to the $y$-axis.",
        type: "auto",
        mode: "number-list",
        answer: [-1, 1],
        exactRequired: true,
        placeholder: "Separate values with a comma",
        solution: "$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 1 - \\frac{1}{t^2} = \\frac{t^2 - 1}{t^2}, \\quad \\frac{\\mathrm{d}y}{\\mathrm{d}t} = 1 + \\frac{1}{t^2} = \\frac{t^2 + 1}{t^2}$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{t^2 + 1}{t^2 - 1}$$<br>For tangents parallel to the $y$-axis, $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ is undefined (i.e. $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 0$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}t} \\ne 0$):<br>$$t^2 - 1 = 0 \\implies t = -1 \\text{ or } t = 1$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Show that the equation of normal at the point where $t = 2$ is given by $y = -\\frac{3}{5}x + 3$.",
        type: "self",
        solution: "When $t = 2$:<br>$$x = 2 + \\frac{1}{2} = \\frac{5}{2}, \\quad y = 2 - \\frac{1}{2} = \\frac{3}{2}$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2^2 + 1}{2^2 - 1} = \\frac{5}{3}$$<br>Gradient of normal $= -\\frac{3}{5}$.<br>Equation of normal at $\\left(\\frac{5}{2}, \\frac{3}{2}\\right)$:<br>$$y - \\frac{3}{2} = -\\frac{3}{5}\\left(x - \\frac{5}{2}\\right) \\implies y = -\\frac{3}{5}x + \\frac{3}{2} + \\frac{3}{2} = -\\frac{3}{5}x + 3 \\quad \\text{(Shown)}$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "The normal at the point where $t = 2$ cuts the curve $C$ again at the point $Q$. Determine the exact coordinates of $Q$.",
        type: "auto",
        mode: "tuple",
        answer: [-65 / 8, 63 / 8],
        exactRequired: true,
        placeholder: "Coordinates (x, y)",
        solution: "Substitute $x = t + \\frac{1}{t}$ and $y = t - \\frac{1}{t}$ into $y = -\\frac{3}{5}x + 3$:<br>$$t - \\frac{1}{t} = -\\frac{3}{5}\\left(t + \\frac{1}{t}\\right) + 3$$<br>Multiply through by $5t$:<br>$$5t^2 - 5 = -3t^2 - 3 + 15t \\implies 8t^2 - 15t - 2 = 0$$<br>$$(8t + 1)(t - 2) = 0 \\implies t = -\\frac{1}{8} \\text{ or } t = 2 \\text{ (point of contact)}$$<br>At $t = -\\frac{1}{8}$:<br>$$x = -\\frac{1}{8} - 8 = -\\frac{65}{8}, \\quad y = -\\frac{1}{8} + 8 = \\frac{63}{8}$$<br>Hence the exact coordinates of $Q$ are $\\left(-\\frac{65}{8}, \\frac{63}{8}\\right)$."
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q10",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Integration", "Integration by Parts", "Area and Volume"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Differentiate $\\sqrt{1 - x^2}$ with respect to $x$.<br>Hence evaluate $\\int_{-1}^{1} \\cos^{-1} x \\, \\mathrm{d}x$, giving your answer in exact form.",
        type: "auto",
        mode: "number",
        answer: "pi",
        exactRequired: true,
        placeholder: "Exact value of the definite integral",
        solution: "$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\sqrt{1 - x^2} = \\frac{-2x}{2\\sqrt{1 - x^2}} = -\\frac{x}{\\sqrt{1 - x^2}}$$<br><br>Using integration by parts with $u = \\cos^{-1} x$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = 1$:<br>$$\\int_{-1}^{1} \\cos^{-1} x \\, \\mathrm{d}x = \\left[x\\cos^{-1} x\\right]_{-1}^{1} - \\int_{-1}^{1} x\\left(-\\frac{1}{\\sqrt{1 - x^2}}\\right)\\mathrm{d}x$$<br>$$= \\left(1 \\cdot 0 - (-1)\\pi\\right) - \\int_{-1}^{1} \\left(-\\frac{x}{\\sqrt{1 - x^2}}\\right)\\mathrm{d}x$$<br>$$= \\pi - \\left[\\sqrt{1 - x^2}\\right]_{-1}^{1} = \\pi - (0 - 0) = \\pi$$"
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "The finite region $R$ is bounded by the curve $y = \\cos^{-1}(x - 3)$, where $2 \\le x \\le 4$, the line $y = \\pi$ and the axes.<br>Describe a geometrical transformation which will map the graph of $y = \\cos^{-1}(x - 3)$ onto the graph of $y = \\cos^{-1} x$.",
        type: "self",
        solution: "Replace $x$ with $x + 3$: a <strong>translation of $3$ units in the negative $x$-direction</strong> maps the graph of $y = \\cos^{-1}(x - 3)$ onto the graph of $y = \\cos^{-1} x$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Hence or otherwise, find the area of $R$ in exact form.",
        type: "auto",
        mode: "number",
        answer: "3*pi",
        exactRequired: true,
        placeholder: "Exact area",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <path d="M 60 40 L 140 40 C 145 70 165 80 180 90 C 195 100 215 110 220 140 L 60 140 Z" fill="rgba(91,155,213,0.22)" stroke="none"/>
  <line x1="25" y1="140" x2="260" y2="140" stroke-width="1.3"/>
  <polyline points="254,136 260,140 254,144" fill="none" stroke-width="1.3"/>
  <text x="263" y="144" stroke="none" font-style="italic">x</text>
  <line x1="60" y1="170" x2="60" y2="15" stroke-width="1.3"/>
  <polyline points="56,21 60,15 64,21" fill="none" stroke-width="1.3"/>
  <text x="65" y="19" stroke="none" font-style="italic">y</text>
  <line x1="60" y1="40" x2="140" y2="40" stroke="#4a8fe7" stroke-width="1.8"/>
  <path d="M 140 40 C 145 70 165 80 180 90 C 195 100 215 110 220 140" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <line x1="140" y1="40" x2="140" y2="140" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/>
  <text x="45" y="44" stroke="none">π</text>
  <text x="136" y="155" stroke="none">2</text>
  <text x="216" y="155" stroke="none">4</text>
  <text x="100" y="96" stroke="none" font-style="italic">R</text>
</svg>`,
        solution: "Splitting region $R$ at $x = 2$ into a rectangle of width $2$ and height $\\pi$, plus the region under $y = \\cos^{-1}(x - 3)$ from $x = 2$ to $x = 4$:<br>$$\\text{Area of } R = 2\\pi + \\int_{2}^{4} \\cos^{-1}(x - 3) \\, \\mathrm{d}x$$<br>By the translation in (b)(i) (letting $u = x - 3$):<br>$$\\text{Area of } R = 2\\pi + \\int_{-1}^{1} \\cos^{-1} u \\, \\mathrm{d}u = 2\\pi + \\pi = 3\\pi$$<br><br><em>Alternative method (integrating with respect to $y$):</em><br>$x = 3 + \\cos y$, so $\\text{Area} = \\int_{0}^{\\pi} (3 + \\cos y) \\, \\mathrm{d}y = \\left[3y + \\sin y\\right]_{0}^{\\pi} = 3\\pi$."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Find the exact value of the volume generated when $R$ is rotated completely about the $y$-axis.",
        type: "auto",
        mode: "number",
        answer: "19*pi^2/2",
        exactRequired: true,
        placeholder: "Exact volume",
        solution: "From $y = \\cos^{-1}(x - 3)$, we have $x = 3 + \\cos y$ for $0 \\le y \\le \\pi$.<br>$$V = \\pi \\int_{0}^{\\pi} x^2 \\, \\mathrm{d}y = \\pi \\int_{0}^{\\pi} (\\cos y + 3)^2 \\, \\mathrm{d}y$$<br>$$= \\pi \\int_{0}^{\\pi} (\\cos^2 y + 6\\cos y + 9) \\, \\mathrm{d}y$$<br>$$= \\pi \\int_{0}^{\\pi} \\left[\\frac{1}{2}(\\cos 2y + 1) + 6\\cos y + 9\\right] \\mathrm{d}y$$<br>$$= \\pi \\left[\\frac{1}{4}\\sin 2y + 6\\sin y + \\frac{19}{2}y\\right]_{0}^{\\pi} = \\pi\\left(\\frac{19}{2}\\pi - 0\\right) = \\frac{19}{2}\\pi^2$$"
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q11",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Vectors", "Lines and Planes in 3D"],
    diagramSvg: `<svg viewBox="0 0 340 200" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="45,175 260,175 305,70 95,70" fill="#eceae6" stroke="none"/>
  <polygon points="150,35 225,78 258,145 208,158" fill="#4a8fe7" stroke="#2c2925" stroke-width="1.3"/>
  <polygon points="150,35 90,145 208,158" fill="#ffffff" stroke="#2c2925" stroke-width="1.3"/>
  <polygon points="208,158 258,145 258,136 208,149" fill="#ffffff" stroke="#2c2925" stroke-width="1.1"/>
  <line x1="150" y1="35" x2="148" y2="152" stroke-width="1"/>
  <line x1="150" y1="35" x2="225" y2="78" stroke-width="1.8"/>
  <line x1="225" y1="78" x2="256" y2="95" stroke="#4a8fe7" stroke-width="1.5"/>
  <line x1="256" y1="95" x2="260" y2="83" stroke="#9e5a2b" stroke-width="3.2"/>
  <line x1="150" y1="35" x2="140" y2="22" stroke-width="1.1"/>
  <line x1="150" y1="35" x2="161" y2="22" stroke-width="1.1"/>
  <line x1="225" y1="78" x2="237" y2="66" stroke-width="1.1"/>
  <text x="148" y="25" stroke="none" font-style="italic">A</text>
  <text x="223" y="68" stroke="none" font-style="italic">B</text>
  <text x="263" y="99" stroke="none" font-style="italic">C</text>
</svg>`,
    stem: "At a campsite, an A-frame tent is pitched on level ground. Its roof is formed by two slanted polyester sheets lying on two intersecting planes, $$\\pi_1: x + y + \\alpha z = 6$$ $$\\pi_2: 2x - y + z = 4$$ where $\\alpha$ is a positive real constant. The intersection of $\\pi_1$ and $\\pi_2$ forms a central ridge in the form of a line $AB$. This ridge is extended with a rope, which is secured to the ground at the point $C$ for stability. The ground is assumed to be the horizontal $xy$-plane.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find a vector parallel to the central ridge, giving your answer in terms of $\\alpha$.",
        type: "self",
        solution: "The central ridge is parallel to the cross product of the normal vectors of $\\pi_1$ and $\\pi_2$:<br>$$\\begin{pmatrix} 1 \\\\ 1 \\\\ \\alpha \\end{pmatrix} \\times \\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 + \\alpha \\\\ 2\\alpha - 1 \\\\ -3 \\end{pmatrix}$$"
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "If $C$ lies on $AB$ produced, show that the coordinates of $C$ is $\\left(\\frac{10}{3}, \\frac{8}{3}, 0\\right)$.",
        type: "self",
        solution: "Since $C$ lies on the $xy$-plane, $z = 0$. Substituting $z = 0$ into $\\pi_1$ and $\\pi_2$:<br>$$x + y = 6 \\quad \\text{--- (1)}$$<br>$$2x - y = 4 \\quad \\text{--- (2)}$$<br>Adding (1) and (2): $3x = 10 \\implies x = \\frac{10}{3}$.<br>Substituting into (1): $y = 6 - \\frac{10}{3} = \\frac{8}{3}$.<br>Hence the coordinates of $C$ are $\\left(\\frac{10}{3}, \\frac{8}{3}, 0\\right)$."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "Hence, or otherwise, write down a vector equation of line $AB$ in terms of $\\alpha$.",
        type: "self",
        solution: "Since $C$ lies on the line $AB$:<br>$$\\mathbf{r} = \\frac{1}{3}\\begin{pmatrix} 10 \\\\ 8 \\\\ 0 \\end{pmatrix} + \\mu\\begin{pmatrix} 1 + \\alpha \\\\ 2\\alpha - 1 \\\\ -3 \\end{pmatrix}, \\quad \\mu \\in \\mathbb{R}$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "If the angle between the two slanted polyester sheets is $60^\\circ$, find the value of $\\alpha$.",
        type: "auto",
        mode: "number",
        answer: "2",
        exactRequired: true,
        placeholder: "Exact value of α",
        solution: "Using the acute angle between the two planes:<br>$$\\cos 60^\\circ = \\frac{\\left|\\begin{pmatrix} 1 \\\\ 1 \\\\ \\alpha \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}\\right|}{\\sqrt{1^2 + 1^2 + \\alpha^2}\\sqrt{2^2 + (-1)^2 + 1^2}}$$<br>$$\\frac{1}{2} = \\frac{|1 + \\alpha|}{\\sqrt{2 + \\alpha^2}\\sqrt{6}}$$<br>Cross-multiplying and squaring:<br>$$6(2 + \\alpha^2) = 4(1 + \\alpha)^2 \\implies 3(2 + \\alpha^2) = 2(1 + 2\\alpha + \\alpha^2)$$<br>$$\\alpha^2 - 4\\alpha + 4 = 0 \\implies (\\alpha - 2)^2 = 0 \\implies \\alpha = 2$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "It is now given that $\\alpha = 1$.<br>A string is tied between two hooks inside the tent to hang decorations. One hook is fixed at the point $D(2, 3, 1)$ which lies on $\\pi_1$. The other hook is located at the point $E$ which lies on $\\pi_2$ such that the string $DE$ is perpendicular to $\\pi_2$. Find the coordinates of $E$.",
        type: "auto",
        mode: "tuple",
        answer: [8 / 3, 8 / 3, 4 / 3],
        placeholder: "Coordinates (x, y, z)",
        solution: "Since $DE$ is perpendicular to $\\pi_2$, $E$ lies on the line through $D(2, 3, 1)$ parallel to the normal of $\\pi_2$:<br>$$\\mathbf{OE} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} + \\lambda\\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 + 2\\lambda \\\\ 3 - \\lambda \\\\ 1 + \\lambda \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}$$<br>Since $E$ lies on $\\pi_2: 2x - y + z = 4$:<br>$$2(2 + 2\\lambda) - (3 - \\lambda) + (1 + \\lambda) = 4$$<br>$$2 + 6\\lambda = 4 \\implies \\lambda = \\frac{1}{3}$$<br>Therefore:<br>$$\\mathbf{OE} = \\begin{pmatrix} 2 + \\frac{2}{3} \\\\ 3 - \\frac{1}{3} \\\\ 1 + \\frac{1}{3} \\end{pmatrix} = \\begin{pmatrix} \\frac{8}{3} \\\\ \\frac{8}{3} \\\\ \\frac{4}{3} \\end{pmatrix}$$<br>Hence $E$ is $\\left(\\frac{8}{3}, \\frac{8}{3}, \\frac{4}{3}\\right)$."
      }
    ]
  },
  {
    id: "TJC-2025-P1-Q12",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Show, by means of the substitution $w = x^2 y$, that the differential equation $$2y + x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x^4 y^2}{\\sqrt{x^2 + 1}}$$ can be reduced to the form $\\frac{\\mathrm{d}w}{\\mathrm{d}x} = \\frac{w^2 x}{\\sqrt{x^2 + 1}}$.",
        type: "self",
        solution: "Differentiating $w = x^2 y$ with respect to $x$:<br>$$\\frac{\\mathrm{d}w}{\\mathrm{d}x} = 2xy + x^2\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$<br>Multiplying the given differential equation throughout by $x$:<br>$$2xy + x^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x^5 y^2}{\\sqrt{x^2 + 1}} = \\frac{(x^2 y)^2 x}{\\sqrt{x^2 + 1}}$$<br>Substituting $w = x^2 y$ and $\\frac{\\mathrm{d}w}{\\mathrm{d}x} = 2xy + x^2\\frac{\\mathrm{d}y}{\\mathrm{d}x}$:<br>$$\\frac{\\mathrm{d}w}{\\mathrm{d}x} = \\frac{w^2 x}{\\sqrt{x^2 + 1}} \\quad \\text{(Shown)}$$"
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Hence find the general solution of the differential equation $2y + x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x^4 y^2}{\\sqrt{x^2 + 1}}$, leaving your answer in the form $y = \\mathrm{f}(x)$.",
        type: "self",
        solution: "Separating variables:<br>$$\\int \\frac{1}{w^2} \\, \\mathrm{d}w = \\int \\frac{x}{\\sqrt{x^2 + 1}} \\, \\mathrm{d}x$$<br>$$\\int w^{-2} \\, \\mathrm{d}w = \\frac{1}{2}\\int 2x(x^2 + 1)^{-\\frac{1}{2}} \\, \\mathrm{d}x$$<br>$$-\\frac{1}{w} = \\sqrt{x^2 + 1} + C$$<br>where $C$ is an arbitrary constant.<br>Substituting $w = x^2 y$:<br>$$-\\frac{1}{x^2 y} = \\sqrt{x^2 + 1} + C \\implies y = -\\frac{1}{x^2\\left(\\sqrt{x^2 + 1} + C\\right)}$$"
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "At a durian plantation, mature durians are susceptible to pests' infection. The spread of pests at the plantation resulted in durians being classified into two categories, either they are bad durians that have been infected by the pests or good durians that have not been infected. It is given that $x$ denotes the number of bad durians, in thousands, in a fixed population size $P$, in thousands, where $P > 4$. The rate of spread of infection, $\\frac{\\mathrm{d}x}{\\mathrm{d}t}$, where $t$ represents the time taken in days, can be modelled as being proportional to the product of the number of bad durians and good durians that have not been infected. It is given that $x = 4$ and $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = P - 4$ when $t = 0$.<br>Write down the differential equation involving $\\frac{\\mathrm{d}x}{\\mathrm{d}t}$, $x$ and $P$.",
        type: "self",
        solution: "The number of good durians (in thousands) is $P - x$. Thus:<br>$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = kx(P - x), \\quad k > 0$$<br>Given $x = 4$ and $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = P - 4$ when $t = 0$:<br>$$P - 4 = 4k(P - 4) \\implies k = \\frac{1}{4} \\quad (\\text{since } P > 4)$$<br>Hence:<br>$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{1}{4}x(P - x)$$"
      },
      {
        label: "(b)(ii)",
        marks: 5,
        prompt: "Solve the differential equation in part (i) and find $x$ in terms of $P$ and $t$.",
        type: "self",
        solution: "Separating variables:<br>$$\\int \\frac{1}{x(P - x)} \\, \\mathrm{d}x = \\int \\frac{1}{4} \\, \\mathrm{d}t$$<br>$$\\frac{1}{P}\\int \\left(\\frac{1}{x} + \\frac{1}{P - x}\\right)\\mathrm{d}x = \\frac{1}{4}t + C$$<br>$$\\ln|x| - \\ln|P - x| = \\frac{P}{4}t + C'$$<br>Since $0 < x < P$:<br>$$\\ln\\left(\\frac{x}{P - x}\\right) = \\frac{P}{4}t + C' \\implies \\frac{x}{P - x} = A\\mathrm{e}^{\\frac{P}{4}t} \\quad (A = \\mathrm{e}^{C'})$$<br>When $t = 0$, $x = 4$:<br>$$A = \\frac{4}{P - 4}$$<br>Thus:<br>$$\\frac{P - x}{x} = \\frac{P - 4}{4}\\mathrm{e}^{-\\frac{P}{4}t} \\implies \\frac{P}{x} = 1 + \\frac{P - 4}{4}\\mathrm{e}^{-\\frac{P}{4}t}$$<br>$$x = \\frac{4P}{4 + (P - 4)\\mathrm{e}^{-\\frac{P}{4}t}}$$"
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "By using an appropriate graph, explain in context, the long-term implications if no additional measures are carried out to control the spread of the pests' infection.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="35" y1="155" x2="260" y2="155" stroke-width="1.3"/>
  <polyline points="254,151 260,155 254,159" fill="none" stroke-width="1.3"/>
  <text x="263" y="159" stroke="none" font-style="italic">t</text>
  <line x1="45" y1="168" x2="45" y2="18" stroke-width="1.3"/>
  <polyline points="41,24 45,18 49,24" fill="none" stroke-width="1.3"/>
  <text x="32" y="23" stroke="none" font-style="italic">x</text>
  <text x="33" y="167" stroke="none" font-style="italic">O</text>
  <line x1="45" y1="45" x2="250" y2="45" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.65"/>
  <text x="215" y="38" stroke="none" font-style="italic">x = P</text>
  <path d="M 45 125 C 70 118 90 75 130 58 C 165 49 205 47 248 46" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="45" cy="125" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="33" y="129" stroke="none">4</text>
</svg>`,
        solution: "As $t$ → ∞, $\\mathrm{e}^{-\\frac{P}{4}t}$ → $0$, so $x = \\frac{4P}{4 + (P - 4)\\mathrm{e}^{-\\frac{P}{4}t}}$ → $P$.<br>In context, in the long term, <strong>all the durians in the plantation will eventually be infected and become bad durians</strong>."
      }
    ]
  }
]);
