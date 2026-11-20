window.registerQuestions([
  // ==================== SECTION A: PURE MATHEMATICS ====================

  // ==================== Q1 ====================
  {
    id: "RVHS-2025-P2-Q1",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Sequences and Series", "Recurrence Relations"],
    stem: "A sequence is such that $u_1 = N$ where $N$ is a constant, and $u_{n+1} = 3u_n - 8$, for $n \\ge 1$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Describe how the sequence behaves when $N = 4$.",
        type: "self",
        solution:
          "When $N = 4$: $u_1 = 4$, $u_2 = 3(4) - 8 = 4$, $u_3 = 4, \\dots$<br>" +
          "The sequence takes on a <strong>constant value</strong> with $u_n = 4$ for all $n \\ge 1$."
      },
      {
        label: "(a)(ii)",
        marks: 1,
        prompt: "Describe how the sequence behaves when $N = 3$.",
        type: "self",
        solution:
          "When $N = 3$: $u_1 = 3$, $u_2 = 3(3) - 8 = 1$, $u_3 = 3(1) - 8 = -5$, $u_4 = 3(-5) - 8 = -23, \\dots$<br>" +
          "The sequence <strong>decreases and approaches negative infinity</strong> (diverges to −∞)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the value of $N$ for which $u_5 = 409$.",
        type: "auto",
        mode: "number",
        answer: "9",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Working backwards from $u_5 = 409$ using $u_{n+1} = 3u_n - 8$:<br>" +
          "$3u_4 - 8 = 409 \\implies u_4 = 139$<br>" +
          "$3u_3 - 8 = 139 \\implies u_3 = 49$<br>" +
          "$3u_2 - 8 = 49 \\implies u_2 = 19$<br>" +
          "$3u_1 - 8 = 19 \\implies u_1 = 9$, so $N = 9$.<br><br>" +
          "<em>Alternatively:</em> $u_5 = 81N - 320 = 409 \\implies 81N = 729 \\implies N = 9$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "The sequence $v_n = (-1)^n (u_n + k)$ for $n \\ge 1$, where $k$ is a constant, is convergent when $u_1 = 4$. State the value of $k$.",
        type: "auto",
        mode: "number",
        answer: "-4",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "From part (a)(i), when $u_1 = 4$, $u_n = 4$ for all $n \\ge 1$.<br>" +
          "Thus $v_n = (-1)^n (4 + k)$, which alternates between $-(4 + k)$ and $+(4 + k)$.<br>" +
          "For $v_n$ to be convergent, we require $4 + k = 0 \\implies k = -4$ (so $v_n = 0$ for all $n$)."
      }
    ]
  },

  // ==================== Q2 ====================
  {
    id: "RVHS-2025-P2-Q2",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "The points $A$, $B$ and $C$ represent the complex numbers $z_A = 5 + 6\\mathrm{i}$, $z_B = 9 + 3\\mathrm{i}$ and $z_C$ respectively. $ABC$ is an isosceles triangle labelled in a clockwise direction where ∠$CAB = 90^\\circ$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find $z_C$.",
        type: "auto",
        mode: "complex-list",
        answer: ["2+2i"],
        exactRequired: true,
        placeholder: "Complex number in form a + bi",
        solutionSvg: `<svg viewBox="0 0 260 200" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (40, 160), scale 20px per unit -->
          <line x1="20" y1="160" x2="245" y2="160" stroke-width="1.4"/>
          <polyline points="239,156 245,160 239,164" fill="none" stroke-width="1.4"/>
          <text x="234" y="175" stroke="none">Re</text>
          <line x1="40" y1="185" x2="40" y2="15" stroke-width="1.4"/>
          <polyline points="36,21 40,15 44,21" fill="none" stroke-width="1.4"/>
          <text x="46" y="23" stroke="none">Im</text>
          <text x="28" y="173" stroke="none" font-style="italic">O</text>
          <!-- A(5,6)->(140,40), B(9,3)->(220,100), C(2,2)->(80,120) -->
          <polygon points="140,40 220,100 80,120" fill="rgba(91,155,213,0.16)" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Right angle at A: unit AB=(0.8, 0.6), unit AC=(-0.6, 0.8), size 10px -->
          <polyline points="148,46 142,54 134,48" fill="none" stroke="#2c2925" stroke-width="1.2"/>
          <circle cx="140" cy="40" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="145" y="34" stroke="none">A(5+6i)</text>
          <circle cx="220" cy="100" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="212" y="92" stroke="none">B(9+3i)</text>
          <circle cx="80" cy="120" r="3" fill="#cf5652" stroke="none"/>
          <text x="52" y="114" stroke="none">C(2+2i)</text>
        </svg>`,
        solution:
          "Since $ABC$ is labelled clockwise with ∠$CAB = 90^\\circ$ and $AC = AB$, the line segment $AC$ is obtained by rotating $AB$ by $90^\\circ$ clockwise about $A$:<br>" +
          "$$z_C - z_A = -\\mathrm{i}(z_B - z_A)$$" +
          "$$z_C = (5 + 6\\mathrm{i}) - \\mathrm{i}\\left[(9 + 3\\mathrm{i}) - (5 + 6\\mathrm{i})\\right] = (5 + 6\\mathrm{i}) - \\mathrm{i}(4 - 3\\mathrm{i})$$" +
          "$$z_C = 5 + 6\\mathrm{i} - 4\\mathrm{i} - 3 = 2 + 2\\mathrm{i}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The point $D$ representing the complex number $z_D$ is such that $ABDC$ is a parallelogram. Find $z_D$.",
        type: "auto",
        mode: "complex-list",
        answer: ["6-i"],
        exactRequired: true,
        placeholder: "Complex number in form a + bi",
        solution:
          "Since $ABDC$ is a parallelogram, the midpoint of diagonal $AD$ equals the midpoint of diagonal $BC$ (equivalently $z_D - z_B = z_C - z_A$):<br>" +
          "$$z_D = z_B + z_C - z_A = (9 + 3\\mathrm{i}) + (2 + 2\\mathrm{i}) - (5 + 6\\mathrm{i}) = 6 - \\mathrm{i}$$"
      }
    ]
  },

  // ==================== Q3 ====================
  {
    id: "RVHS-2025-P2-Q3",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Integration", "Volume of Revolution"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "The region $A$ is bounded by the curves $x^2 + y^2 = 5$ and $y = x^2 + 1$ for $y \\ge 1$.<br>Find the volume when $A$ is rotated $\\pi$ radians about the $y$-axis.",
        type: "auto",
        mode: "number",
        answer: "pi*(10*sqrt(5)/3 - 41/6)",
        placeholder: "Exact or 3 s.f.",
        solutionSvg: `<svg viewBox="0 0 240 220" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (120, 130), scale 32px per unit -->
          <line x1="25" y1="130" x2="220" y2="130" stroke-width="1.4"/>
          <polyline points="214,126 220,130 214,134" fill="none" stroke-width="1.4"/>
          <text x="215" y="144" stroke="none" font-style="italic">x</text>
          <line x1="120" y1="210" x2="120" y2="15" stroke-width="1.4"/>
          <polyline points="116,21 120,15 124,21" fill="none" stroke-width="1.4"/>
          <text x="128" y="22" stroke="none" font-style="italic">y</text>
          <text x="108" y="144" stroke="none" font-style="italic">O</text>
          <!-- Circle r = sqrt(5)*32 = 71.55 -->
          <circle cx="120" cy="130" r="71.6" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
          <!-- Shaded region A between parabola (120,98) to (88,66)/(152,66) and top arc of circle -->
          <path d="M 88 66 Q 120 130, 152 66 A 71.6 71.6 0 0 0 88 66 Z" fill="rgba(207,86,82,0.25)" stroke="none"/>
          <!-- Parabola y = x^2 + 1: (-1.7, 3.89)->(65.6, 5.5) through (0,1)->(120,98) to (1.7, 3.89)->(174.4, 5.5) -->
          <path d="M 72 26 Q 120 170, 168 26" fill="none" stroke="#cf5652" stroke-width="1.8"/>
          <circle cx="152" cy="66" r="2.8" fill="#2c2925" stroke="none"/>
          <text x="158" y="68" stroke="none" font-size="10">(1, 2)</text>
          <text x="108" y="54" text-anchor="end" stroke="none" font-size="10">√5</text>
          <text x="110" y="102" text-anchor="end" stroke="none" font-size="10">1</text>
        </svg>`,
        solution:
          "The curves intersect when $(y - 1) + y^2 = 5 \\implies y^2 + y - 6 = 0 \\implies (y + 3)(y - 2) = 0$. Since $y \\ge 1$, $y = 2$ (at $x = \\pm 1$).<br>" +
          "Because region $A$ is symmetric about the $y$-axis, rotating $A$ by $\\pi$ radians about the $y$-axis sweeps out the complete solid of revolution (same as rotating the right half by $2\\pi$ radians):<br>" +
          "$$V = \\pi \\int_{1}^{2} (y - 1)\\,\\mathrm{d}y + \\pi \\int_{2}^{\\sqrt{5}} (5 - y^2)\\,\\mathrm{d}y$$" +
          "$$= \\pi\\left[\\frac{y^2}{2} - y\\right]_{1}^{2} + \\pi\\left[5y - \\frac{y^3}{3}\\right]_{2}^{\\sqrt{5}} = \\pi\\left(\\frac{1}{2}\\right) + \\pi\\left(\\frac{10\\sqrt{5}}{3} - \\frac{22}{3}\\right) = \\pi\\left(\\frac{10\\sqrt{5}}{3} - \\frac{41}{6}\\right) \\approx 1.95 \\text{ units}^3$$"
      },
      {
        label: "(b)",
        marks: 6,
        prompt: "The region $B$ is bounded by the curve $y = \\frac{2}{\\sqrt{x^2 - 4x + 7}}$, the line $y = x - 2$, the line $x = 1$ and the $x$-axis. Find the exact volume when $B$ is rotated $2\\pi$ radians about the $x$-axis. Give your answer in the form $a\\sqrt{3}\\pi^2 + b\\pi$, where $a$ and $b$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "4/9", exactRequired: true, placeholder: "Exact fraction" },
          { label: "b =", answer: "-1/3", exactRequired: true, placeholder: "Exact fraction" }
        ],
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (55, 130), scale 40px per unit -->
          <line x1="20" y1="130" x2="265" y2="130" stroke-width="1.4"/>
          <polyline points="259,126 265,130 259,134" fill="none" stroke-width="1.4"/>
          <text x="260" y="144" stroke="none" font-style="italic">x</text>
          <line x1="55" y1="192" x2="55" y2="15" stroke-width="1.4"/>
          <polyline points="51,21 55,15 59,21" fill="none" stroke-width="1.4"/>
          <text x="63" y="23" stroke="none" font-style="italic">y</text>
          <text x="44" y="144" stroke="none" font-style="italic">O</text>
          <!-- Shaded region B: from x=1 (95) to x=2 (135) on x-axis, up line y=x-2 to (3,1)->(175,90), along curve back to (1,1)->(95,90) -->
          <path d="M 95 130 L 135 130 L 175 90 Q 135 76, 95 90 Z" fill="rgba(91,155,213,0.28)" stroke="none"/>
          <!-- Curve y = 2/sqrt((x-2)^2 + 3): x=0->(55,99.8), x=1->(95,90), x=2->(135,83.8), x=3->(175,90), x=4->(215,99.8), x=5->(255,106.9) -->
          <path d="M 55 99.8 Q 95 90, 135 83.8 Q 175 90, 215 99.8 L 255 106.9" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Line y = x - 2: (0.5,-1.5)->(75,190) to (4.5,2.5)->(235,30) -->
          <line x1="75" y1="190" x2="235" y2="30" stroke="#cf5652" stroke-width="1.6"/>
          <text x="215" y="42" stroke="none" fill="#cf5652" font-size="10">y = x - 2</text>
          <!-- Line x = 1 -> x_px = 95 -->
          <line x1="95" y1="25" x2="95" y2="185" stroke="#4ca885" stroke-width="1.2" stroke-dasharray="4,3"/>
          <text x="95" y="145" text-anchor="middle" stroke="none" font-size="10">1</text>
          <text x="135" y="145" text-anchor="middle" stroke="none" font-size="10">2</text>
          <text x="175" y="145" text-anchor="middle" stroke="none" font-size="10">3</text>
          <text x="126" y="112" stroke="none" font-size="10" fill="#4a8fe7" font-weight="bold">B</text>
        </svg>`,
        solution:
          "The curve $y = \\frac{2}{\\sqrt{x^2 - 4x + 7}}$ and line $y = x - 2$ intersect at $(3, 1)$, and $y = x - 2$ meets the $x$-axis at $x = 2$.<br>" +
          "$$V = \\pi \\int_{1}^{3} \\left(\\frac{2}{\\sqrt{x^2 - 4x + 7}}\\right)^2\\,\\mathrm{d}x - \\pi \\int_{2}^{3} (x - 2)^2\\,\\mathrm{d}x$$" +
          "Note that the second term is a cone of radius $1$ and height $1$, with volume $\\frac{1}{3}\\pi(1)^2(1) = \\frac{1}{3}\\pi$.<br>" +
          "For the first integral:<br>" +
          "$$4\\pi \\int_{1}^{3} \\frac{1}{(x - 2)^2 + (\\sqrt{3})^2}\\,\\mathrm{d}x = 4\\pi \\left[\\frac{1}{\\sqrt{3}}\\tan^{-1}\\left(\\frac{x - 2}{\\sqrt{3}}\\right)\\right]_{1}^{3}$$" +
          "$$= \\frac{4\\pi}{\\sqrt{3}}\\left[\\tan^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) - \\tan^{-1}\\left(-\\frac{1}{\\sqrt{3}}\\right)\\right] = \\frac{4\\pi}{\\sqrt{3}}\\left(\\frac{\\pi}{6} + \\frac{\\pi}{6}\\right) = \\frac{4\\pi^2}{3\\sqrt{3}} = \\frac{4}{9}\\sqrt{3}\\pi^2$$" +
          "Therefore, $V = \\frac{4}{9}\\sqrt{3}\\pi^2 - \\frac{1}{3}\\pi \\text{ units}^3$, giving $a = \\frac{4}{9}$ and $b = -\\frac{1}{3}$."
      }
    ]
  },

  // ==================== Q4 ====================
  {
    id: "RVHS-2025-P2-Q4",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Sequences and Series", "AP and GP"],
    stem: "The dosage of medicine given to a patient needs to be carefully managed in order to achieve the desired result.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "To give the patient time to adapt to a particular medicine, the dosage is slowly increased over time. The patient is initially given a dosage of $0.75$ units. The dosage is increased by $0.5$ units each day until a total of at least $10$ units of medicine has been taken. Find the least number of days it takes to achieve this, and the dosage on that day.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Least number of days =", answer: "6", exactRequired: true, placeholder: "Integer value" },
          { label: "Dosage on that day =", answer: "3.25", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "The daily dosages form an arithmetic progression with $a = 0.75$ and $d = 0.5$.<br>" +
          "Total dosage after $n$ days:<br>" +
          "$$S_n = \\frac{n}{2}\\left[2(0.75) + (n - 1)(0.5)\\right] = \\frac{n}{2}(1 + 0.5n) = \\frac{1}{4}n^2 + \\frac{1}{2}n$$" +
          "Setting $S_n \\ge 10$: $\\frac{1}{4}n^2 + \\frac{1}{2}n \\ge 10 \\implies n^2 + 2n - 40 \\ge 0 \\implies (n + 1)^2 \\ge 41$.<br>" +
          "Since $n > 0$, $n \\ge -1 + \\sqrt{41} \\approx 5.403$.<br>" +
          "(Check: $S_5 = 8.75 < 10$, $S_6 = 12 \\ge 10$.)<br>" +
          "Therefore, the least number of days is $6$.<br>" +
          "Dosage on the 6th day: $u_6 = 0.75 + 5(0.5) = 3.25$ units."
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "The doctor prescribed a new medication to another patient. After $n$ days, the total dosage of the new medicine administered to the patient is given by $\\frac{3}{20}\\left(\\frac{5^n - 4^n}{5^{n-1}}\\right)$ units.<br>Show that the increase in dosage of the new medicine administered per day follows a geometric progression.",
        type: "self",
        solution:
          "Let $S_n = \\frac{3}{20}\\left(\\frac{5^n - 4^n}{5^{n-1}}\\right) = \\frac{3}{4}\\left(1 - \\left(\\frac{4}{5}\\right)^n\\right)$.<br>" +
          "The increase in dosage on the $n$th day is:<br>" +
          "$$u_n = S_n - S_{n-1} = \\frac{3}{4}\\left[1 - \\left(\\frac{4}{5}\\right)^n\\right] - \\frac{3}{4}\\left[1 - \\left(\\frac{4}{5}\\right)^{n-1}\\right]$$" +
          "$$= \\frac{3}{4}\\left(\\frac{4}{5}\\right)^{n-1}\\left(1 - \\frac{4}{5}\\right) = \\frac{3}{20}\\left(\\frac{4}{5}\\right)^{n-1}$$" +
          "Consider the ratio $\\frac{u_{n+1}}{u_n} = \\frac{\\frac{3}{20}(4/5)^n}{\\frac{3}{20}(4/5)^{n-1}} = \\frac{4}{5}$, which is a constant independent of $n$.<br>" +
          "Hence the increase in dosage per day follows a geometric progression with first term $\\frac{3}{20}$ and common ratio $\\frac{4}{5}$ (shown)."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Find the total dosage of the new medicine administered to the patient after a long period of treatment.",
        type: "auto",
        mode: "number",
        answer: "3/4",
        placeholder: "Exact value or decimal",
        solution:
          "From $S_n = \\frac{3}{4}\\left(1 - \\left(\\frac{4}{5}\\right)^n\\right)$, as $n$ → ∞, $\\left(\\frac{4}{5}\\right)^n$ → $0$.<br>" +
          "Therefore, $S_{\\infty} = \\frac{3}{4}(1 - 0) = \\frac{3}{4} = 0.75$ units.<br>" +
          "<em>Alternatively:</em> $S_{\\infty} = \\frac{a}{1 - r} = \\frac{3/20}{1 - 4/5} = \\frac{3}{4}$ units."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Doctors can manage the medication so that the daily dosage of medicine increases as an arithmetic progression. Explain in context why the arithmetic progression is not a preferred model for the dosage of medication.",
        type: "self",
        solution:
          "If the daily dosage increases as an arithmetic progression (with positive common difference), the dosage will continue to increase without bound (towards infinity), which would eventually become unsafe/toxic (overdose) for the patient."
      }
    ]
  },

  // ==================== Q5 ====================
  {
    id: "RVHS-2025-P2-Q5",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Vectors", "3D Lines and Planes"],
    stem: "The Planetary Defense Coordination Office at NASA observes and tracks Near Earth Objects (NEOs) that could be potentially hazardous in a collision with Earth. Over short periods of time, vectors can be used to model the trajectories of the Earth and NEOs. They use coordinates $(x, y, z)$ with units in millions of kilometers relative to the sun which is at position $(0, 0, 0)$.<br>Earth's orbit is contained by the plane $\\Pi$ with equation $\\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ -1 \\\\ 5 \\end{pmatrix} = 0$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "A satellite moves along a path with equation $\\mathbf{r} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 3 \\end{pmatrix} + \\lambda \\begin{pmatrix} -2 \\\\ 3 \\\\ 1 \\end{pmatrix},\\; \\lambda \\in \\mathbb{R}$. Determine whether the satellite crosses Earth's orbital plane.",
        type: "self",
        solution:
          "Check the dot product of the line's direction vector and the plane's normal vector:<br>" +
          "$$\\begin{pmatrix} -2 \\\\ 3 \\\\ 1 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ -1 \\\\ 5 \\end{pmatrix} = -2 - 3 + 5 = 0$$" +
          "So the satellite's path is parallel to Earth's orbital plane $\\Pi$.<br>" +
          "Check if the point $(3, 2, 3)$ lies on $\\Pi$:<br>" +
          "$$\\begin{pmatrix} 3 \\\\ 2 \\\\ 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ -1 \\\\ 5 \\end{pmatrix} = 3 - 2 + 15 = 16 \\ne 0$$" +
          "Since the point does not lie on $\\Pi$ and the path is parallel to $\\Pi$, the satellite <strong>does not cross</strong> Earth's orbital plane."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Over a short period of time, Earth's motion can be modelled by the equation $$\\mathbf{r} = \\begin{pmatrix} 15 \\\\ 20 \\\\ -1 \\end{pmatrix} + \\mu \\begin{pmatrix} 4 \\\\ -1 \\\\ -1 \\end{pmatrix},\\; \\mu \\in \\mathbb{R}.$$ An asteroid moves along a path with equation $$\\frac{x - 10}{2} = y + 2 = \\frac{0.25 - z}{k}$$ where $k$ is a positive constant.<br>Determine the possible values of $k$ if the paths of the Earth and the asteroid do not intersect.",
        type: "self",
        solution:
          "Rewrite the asteroid's path in vector form:<br>" +
          "$$l_A: \\mathbf{r} = \\begin{pmatrix} 10 \\\\ -2 \\\\ 0.25 \\end{pmatrix} + t \\begin{pmatrix} 2 \\\\ 1 \\\\ -k \\end{pmatrix},\\; t \\in \\mathbb{R}$$" +
          "If the paths intersect, equating coordinates:<br>" +
          "$10 + 2t = 15 + 4\\mu \\implies 2t - 4\\mu = 5 \\quad (1)$<br>" +
          "$-2 + t = 20 - \\mu \\implies t + \\mu = 22 \\quad (2)$<br>" +
          "$0.25 - tk = -1 - \\mu \\implies \\mu - tk = -1.25 \\quad (3)$<br>" +
          "Solving $(1)$ and $(2)$: $t = 15.5$, $\\mu = 6.5$.<br>" +
          "Substituting into $(3)$: $6.5 - 15.5k = -1.25 \\implies 15.5k = 7.75 \\implies k = 0.5$.<br>" +
          "Therefore, the paths intersect when $k = 0.5$.<br>" +
          "For the paths not to intersect (given $k > 0$), $k > 0$ and $k \\ne 0.5$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "It is now given that $k = 3$.<br>Find the acute angle between the paths of the Earth and the asteroid.",
        type: "auto",
        mode: "number",
        answer: "acos(10/(sqrt(14)*sqrt(18)))*180/pi",
        dp: 1,
        placeholder: "Angle in degrees (1 d.p.)",
        solution:
          "Let $\\theta$ be the acute angle between direction vectors $\\begin{pmatrix} 2 \\\\ 1 \\\\ -3 \\end{pmatrix}$ and $\\begin{pmatrix} 4 \\\\ -1 \\\\ -1 \\end{pmatrix}$:<br>" +
          "$$\\cos\\theta = \\frac{\\left| 2(4) + 1(-1) + (-3)(-1) \\right|}{\\sqrt{2^2 + 1^2 + (-3)^2}\\sqrt{4^2 + (-1)^2 + (-1)^2}} = \\frac{|8 - 1 + 3|}{\\sqrt{14}\\sqrt{18}} = \\frac{10}{\\sqrt{252}}$$" +
          "$$\\theta = \\cos^{-1}\\left(\\frac{10}{\\sqrt{252}}\\right) = 50.956^\\circ \\approx 51.0^\\circ \\text{ (1 d.p.)}$$"
      },
      {
        label: "(d)(i)",
        marks: 2,
        prompt: "The asteroid is closest to the Earth when they are at points $(12, 18, -3)$ and $(12, -1, -2.75)$ on their respective paths.<br>Find the distance between the Earth and the asteroid at this instant.",
        type: "auto",
        mode: "number",
        answer: "sqrt(361.0625)",
        placeholder: "Distance in million km (3 s.f.)",
        solution:
          "Displacement vector between the two points:<br>" +
          "$$\\begin{pmatrix} 12 \\\\ 18 \\\\ -3 \\end{pmatrix} - \\begin{pmatrix} 12 \\\\ -1 \\\\ -2.75 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 19 \\\\ -0.25 \\end{pmatrix}$$" +
          "Distance $= \\sqrt{0^2 + 19^2 + (-0.25)^2} = \\sqrt{361.0625} \\approx 19.0$ million km (3 s.f.)."
      },
      {
        label: "(d)(ii)",
        marks: 2,
        prompt: "By considering the vector between the asteroid and the Earth at this instant, determine whether the distance found in part (d)(i) is the shortest distance between the two paths.",
        type: "self",
        solution:
          "For the distance to be the shortest distance between the two paths, the connecting vector $\\begin{pmatrix} 0 \\\\ 19 \\\\ -0.25 \\end{pmatrix}$ must be perpendicular to both paths.<br>" +
          "Check dot product with asteroid's direction vector:<br>" +
          "$$\\begin{pmatrix} 0 \\\\ 19 \\\\ -0.25 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ -3 \\end{pmatrix} = 0 + 19 + 0.75 = 19.75 \\ne 0$$" +
          "(And with Earth's direction vector: $\\begin{pmatrix} 0 \\\\ 19 \\\\ -0.25 \\end{pmatrix} \\cdot \\begin{pmatrix} 4 \\\\ -1 \\\\ -1 \\end{pmatrix} = -18.75 \\ne 0$.)<br>" +
          "Since the connecting vector is not perpendicular to the paths, the distance found in part (d)(i) is <strong>not</strong> the shortest distance between the two paths."
      }
    ]
  },

  // ==================== SECTION B: STATISTICS ====================

  // ==================== Q6 ====================
  {
    id: "RVHS-2025-P2-Q6",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations and Combinations"],
    stem: "A Pizzeria sells pizza by individual slices. $8$ slices forms a full pizza.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "A group of three friends bought $4$ slices of Hawaiian, $1$ slice of pepperoni, $1$ slice of seafood, $1$ slice of cheese, and $1$ slice of vegetarian pizzas. Find the number of ways the pizza slices bought could be arranged in a circle such that the $4$ slices of Hawaiian pizzas are placed together.",
        type: "auto",
        mode: "number",
        answer: "24",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Treat the $4$ identical Hawaiian slices as $1$ single unit. Together with the $4$ other distinct slices, there are $5$ units to arrange in a circle:<br>" +
          "Number of ways $= (5 - 1)! = 4! = 24$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The three friends each eat a slice of Hawaiian pizza. They then want to distribute the remaining $5$ slices amongst the three of them. Find the number of ways this can be done such that everyone gets at least one more slice of pizza.",
        type: "auto",
        mode: "number",
        answer: "150",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "After each friend eats a Hawaiian slice, the remaining $5$ slices are all distinct ($1$ Hawaiian, $1$ pepperoni, $1$ seafood, $1$ cheese, $1$ vegetarian).<br>" +
          "<strong>Case 1:</strong> Distribution $(3, 1, 1)$ — one friend gets $3$ slices, the other two get $1$ slice each.<br>" +
          "Number of ways $= {}^3\\mathrm{C}_1 \\times {}^5\\mathrm{C}_3 \\times {}^2\\mathrm{C}_1 \\times {}^1\\mathrm{C}_1 = 3 \\times 10 \\times 2 = 60$.<br><br>" +
          "<strong>Case 2:</strong> Distribution $(2, 2, 1)$ — two friends get $2$ slices each, one gets $1$ slice.<br>" +
          "Number of ways $= {}^3\\mathrm{C}_2 \\times {}^5\\mathrm{C}_2 \\times {}^3\\mathrm{C}_2 \\times {}^1\\mathrm{C}_1 = 3 \\times 10 \\times 3 = 90$.<br><br>" +
          "Total number of ways $= 60 + 90 = 150$."
      }
    ]
  },

  // ==================== Q7 ====================
  {
    id: "RVHS-2025-P2-Q7",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Discrete Random Variables", "Expectation and Variance"],
    stem: "In a game, a fair six-sided die is rolled. If a $1$ or a $2$ is rolled, then the die is rerolled and the score is the result of the reroll. Otherwise, the score is the number rolled originally.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Give the probability distribution function of the scores in the form of a table.",
        type: "self",
        solution:
          "Let $X$ be the random variable denoting the score.<br>" +
          "For $x = 1, 2$: $\\mathrm{P}(X = x) = \\frac{2}{6}\\cdot\\frac{1}{6} = \\frac{1}{18}$.<br>" +
          "For $x = 3, 4, 5, 6$: $\\mathrm{P}(X = x) = \\frac{1}{6} + \\frac{2}{6}\\cdot\\frac{1}{6} = \\frac{4}{18} = \\frac{2}{9}$.<br><br>" +
          "<div class='q-table-wrap'><table class='q-table'>" +
          "<tr><th>$x$</th><td>$1$</td><td>$2$</td><td>$3$</td><td>$4$</td><td>$5$</td><td>$6$</td></tr>" +
          "<tr><th>$\\mathrm{P}(X = x)$</th><td>$\\frac{1}{18}$</td><td>$\\frac{1}{18}$</td><td>$\\frac{2}{9}$</td><td>$\\frac{2}{9}$</td><td>$\\frac{2}{9}$</td><td>$\\frac{2}{9}$</td></tr>" +
          "</table></div>"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Show that the expected score is $\\frac{25}{6}$. Explain the meaning of this value in this context.",
        type: "self",
        solution:
          "$$\\mathrm{E}(X) = 1\\left(\\frac{1}{18}\\right) + 2\\left(\\frac{1}{18}\\right) + 3\\left(\\frac{4}{18}\\right) + 4\\left(\\frac{4}{18}\\right) + 5\\left(\\frac{4}{18}\\right) + 6\\left(\\frac{4}{18}\\right)$$" +
          "$$= \\frac{1 + 2 + 12 + 16 + 20 + 24}{18} = \\frac{75}{18} = \\frac{25}{6} \\quad (\\text{shown})$$" +
          "<strong>Meaning:</strong> $\\frac{25}{6}$ is the long-run average score per game when the game is played a large number of (infinitely many) times."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Find the exact variance of the scores.",
        type: "auto",
        mode: "number",
        answer: "73/36",
        exactRequired: true,
        placeholder: "Exact fraction",
        solution:
          "$$\\mathrm{E}(X^2) = 1^2\\left(\\frac{1}{18}\\right) + 2^2\\left(\\frac{1}{18}\\right) + (3^2 + 4^2 + 5^2 + 6^2)\\left(\\frac{4}{18}\\right) = \\frac{1 + 4 + 4(86)}{18} = \\frac{349}{18}$$" +
          "$$\\mathrm{Var}(X) = \\mathrm{E}(X^2) - \\left[\\mathrm{E}(X)\\right]^2 = \\frac{349}{18} - \\left(\\frac{25}{6}\\right)^2 = \\frac{698 - 625}{36} = \\frac{73}{36}$$"
      }
    ]
  },

  // ==================== Q8 ====================
  {
    id: "RVHS-2025-P2-Q8",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability", "Conditional Probability"],
    stem: "A game at a funfair involves pulling balls of different colours out of a bag. A bag contains $1$ white ball, $2$ blue balls, $3$ green balls and $4$ red balls. The aim of the game is to pull the white ball from the bag as many times as possible. Players get three attempts. If a red ball is drawn, it is discarded, but any other ball is replaced in the bag.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the probability that a player draws a white ball and two green balls on their three attempts.",
        type: "auto",
        mode: "number",
        answer: "27/1000",
        placeholder: "Exact fraction or decimal",
        solution:
          "Since neither white nor green balls are discarded, the bag always has $10$ balls on every draw.<br>" +
          "$$\\mathrm{P}(W, G, G) = \\frac{3!}{2!}\\left(\\frac{1}{10}\\right)\\left(\\frac{3}{10}\\right)^2 = 3 \\times \\frac{9}{1000} = \\frac{27}{1000} = 0.027$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the probability that exactly one white ball was drawn, given that a red ball was drawn on the second attempt.",
        type: "auto",
        mode: "number",
        answer: "67/336",
        placeholder: "Exact fraction or 3 s.f.",
        solution:
          "Let $W$ = white, $R$ = red, $B$ = blue, $G$ = green, $W'$ = not white, $R'$ = not red.<br>" +
          "Numerator (exactly one white and red on 2nd attempt):<br>" +
          "$\\mathrm{P}(WRW') + \\mathrm{P}(RRW) + \\mathrm{P}(BRW) + \\mathrm{P}(GRW)$<br>" +
          "$= \\frac{1}{10}\\cdot\\frac{4}{10}\\cdot\\frac{8}{9} + \\frac{4}{10}\\cdot\\frac{3}{9}\\cdot\\frac{1}{8} + \\frac{2}{10}\\cdot\\frac{4}{10}\\cdot\\frac{1}{9} + \\frac{3}{10}\\cdot\\frac{4}{10}\\cdot\\frac{1}{9}$<br>" +
          "$= \\frac{32}{900} + \\frac{15}{900} + \\frac{8}{900} + \\frac{12}{900} = \\frac{67}{900}$.<br><br>" +
          "Denominator (red on 2nd attempt):<br>" +
          "$\\mathrm{P}(R'R) + \\mathrm{P}(RR) = \\frac{6}{10}\\cdot\\frac{4}{10} + \\frac{4}{10}\\cdot\\frac{3}{9} = \\frac{6}{25} + \\frac{2}{15} = \\frac{28}{75}$.<br><br>" +
          "Required conditional probability:<br>" +
          "$$\\frac{67/900}{28/75} = \\frac{67}{336} \\approx 0.199 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Events $A$ and $B$ are defined as:<br>$A$: A white ball is drawn on the first attempt<br>$B$: A white ball is drawn on the second attempt<br>Determine with reason whether events $A$ and $B$ are independent.",
        type: "self",
        solution:
          "$\\mathrm{P}(A) = \\frac{1}{10}$.<br>" +
          "$\\mathrm{P}(B) = \\mathrm{P}(RW) + \\mathrm{P}(R'W) = \\left(\\frac{4}{10}\\right)\\left(\\frac{1}{9}\\right) + \\left(\\frac{6}{10}\\right)\\left(\\frac{1}{10}\\right) = \\frac{47}{450}$.<br>" +
          "$\\mathrm{P}(A \\cap B) = \\mathrm{P}(WW) = \\left(\\frac{1}{10}\\right)\\left(\\frac{1}{10}\\right) = \\frac{1}{100}$.<br>" +
          "Since $\\mathrm{P}(A)\\mathrm{P}(B) = \\frac{47}{4500} \\ne \\frac{1}{100} = \\mathrm{P}(A \\cap B)$ (equivalently $\\mathrm{P}(B \\mid A) = \\frac{1}{10} \\ne \\frac{47}{450} = \\mathrm{P}(B)$), events $A$ and $B$ are <strong>not independent</strong>."
      }
    ]
  },

  // ==================== Q9 ====================
  {
    id: "RVHS-2025-P2-Q9",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Binomial Distribution", "Probability"],
    stem: "A machine produces a large number of camera lenses daily. During the process, lenses could get scratched and become defective.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State, in the context of the question, one assumption needed for the number of defective lenses made to be modelled by a binomial distribution and explain why the assumption may not hold in this context.",
        type: "self",
        solution:
          "<strong>Assumption 1:</strong> The probability that a lens is defective is constant for every lens produced.<br>" +
          "<em>Why it may not hold:</em> Machine parts wear out/degrade over time, causing the probability of a lens getting scratched to change over time.<br><br>" +
          "<strong>OR Assumption 2:</strong> Whether a lens is defective is independent of whether any other lens is defective.<br>" +
          "<em>Why it may not hold:</em> A defect or debris/misalignment occurring during production could scratch or damage subsequent lenses downstream."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is assumed that the number of defective lenses produced daily has a binomial distribution and that on average, $1$ in $20$ lenses produced are defective.<br>$30$ independent samples of $100$ lenses each are taken. Find the probability that there are more than $10$ samples in which there are exactly $3$ defective lenses in each sample.",
        type: "auto",
        mode: "number",
        answer: "0.0016337",
        answers: ["0.0016337", "0.00163393"],
        placeholder: "Decimal (3 s.f.)",
        solution:
          "Let $X$ be the number of defective lenses in a sample of $100$: $X \\sim \\mathrm{B}(100, 0.05)$.<br>" +
          "$\\mathrm{P}(X = 3) = 0.139576$.<br>" +
          "Let $Y$ be the number of samples (out of $30$) with exactly $3$ defective lenses: $Y \\sim \\mathrm{B}(30, 0.139576)$.<br>" +
          "$$\\mathrm{P}(Y > 10) = 1 - \\mathrm{P}(Y \\le 10) = 0.0016337 \\approx 0.00163 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "$2$ independent samples of $100$ lenses are taken. It is given that exactly one of the samples was found to have exactly $3$ defective lenses. Find the probability that there are a total of $10$ defective lenses in the $2$ samples.",
        type: "auto",
        mode: "number",
        answer: "0.123225",
        placeholder: "Decimal (3 s.f.)",
        solution:
          "Let $X_1, X_2 \\sim \\mathrm{B}(100, 0.05)$ independently.<br>" +
          "$$\\mathrm{P}(X_1 + X_2 = 10 \\mid \\text{exactly one of } X_1, X_2 \\text{ equals } 3)$$" +
          "$$= \\frac{\\mathrm{P}(X_1 = 3)\\mathrm{P}(X_2 = 7) + \\mathrm{P}(X_1 = 7)\\mathrm{P}(X_2 = 3)}{2\\mathrm{P}(X = 3)\\left(1 - \\mathrm{P}(X = 3)\\right)} = \\frac{\\mathrm{P}(X = 7)}{1 - \\mathrm{P}(X = 3)}$$" +
          "$$= \\frac{0.106026}{1 - 0.139576} = 0.123225 \\approx 0.123 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Every day, lenses are randomly selected for quality checks on the production. An initial sample of $100$ lenses is obtained.<br>• The entire production of lenses for that day would be deemed to have passed the quality check when there are at most $2$ defective lenses in the initial sample.<br>• If there are more than $3$ defective lenses found in the initial sample, then the entire production of lenses for that day will be rejected.<br>• If the initial sample contains exactly $3$ defective lenses, another sample of $100$ lenses will be taken. If the $2$ samples contain an average of at most $2$ defective lenses, then the entire production of lenses for that day would be deemed to have passed the quality check.<br>Find the probability that the production of lenses of any particular day would have passed the quality check.",
        type: "auto",
        mode: "number",
        answer: "0.123439",
        placeholder: "Decimal (3 s.f.)",
        solution:
          "If $X_1 = 3$, then an average of at most $2$ defective lenses in the $2$ samples means $\\frac{3 + X_2}{2} \\le 2 \\implies X_2 \\le 1$.<br>" +
          "Required probability:<br>" +
          "$$\\mathrm{P}(X_1 \\le 2) + \\mathrm{P}(X_1 = 3)\\mathrm{P}(X_2 \\le 1)$$" +
          "$$= 0.118263 + (0.139576)(0.037081) = 0.123439 \\approx 0.123 \\text{ (3 s.f.)}$$"
      }
    ]
  },

  // ==================== Q10 ====================
  {
    id: "RVHS-2025-P2-Q10",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Correlation and Regression", "Residuals"],
    stem:
      "As part of the sound calibration for the National Day Parade at the Padang, sound engineers test how sound intensity changes with distance from the main stage speakers during rehearsals. This is helpful for calibrating the speaker system to avoid sound distortion or echo across seating zones.<br>" +
      "At a particular rehearsal, the engineers record the sound intensity, $y$, measured in decibels, at various distances, $x$, measured in metres from the stage speakers and recorded the data in the table below." +
      "<div class='q-table-wrap'><table class='q-table'>" +
      "<tr><th>$x$</th><td>$0$</td><td>$2$</td><td>$4$</td><td>$6$</td><td>$8$</td><td>$10$</td></tr>" +
      "<tr><th>$y$</th><td>$100$</td><td>$96$</td><td>$84$</td><td>$65$</td><td>$36$</td><td>$1$</td></tr>" +
      "</table></div>",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Sketch a scatter diagram for these values. Explain, using your diagram, which of the following equations provides the most accurate model of the relationship between $x$ and $y$.<br>(A) $y = a - bx^2$,<br>(B) $y = a + b\\mathrm{e}^{-x}$,<br>(C) $y = a + b\\ln(10 - x)$,<br>where $a$ and $b$ are constants such that $a > 0$ and $b > 0$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (50, 165), x: 0..10 -> 50..250 (20px/unit), y: 0..100 -> 165..25 (1.4px/unit) -->
          <line x1="40" y1="165" x2="265" y2="165" stroke-width="1.4"/>
          <polyline points="259,161 265,165 259,169" fill="none" stroke-width="1.4"/>
          <text x="260" y="180" stroke="none" font-style="italic">x</text>
          <line x1="50" y1="178" x2="50" y2="15" stroke-width="1.4"/>
          <polyline points="46,21 50,15 54,21" fill="none" stroke-width="1.4"/>
          <text x="58" y="21" stroke="none" font-style="italic">y</text>
          <text x="38" y="179" stroke="none" font-style="italic">O</text>
          <!-- Ticks -->
          <text x="42" y="29" text-anchor="end" stroke="none" font-size="10">100</text>
          <text x="250" y="180" text-anchor="middle" stroke="none" font-size="10">10</text>
          <!-- Points: (0,100)->(50,25), (2,96)->(90,30.6), (4,84)->(130,47.4), (6,65)->(170,74), (8,36)->(210,114.6), (10,1)->(250,163.6) -->
          <circle cx="50" cy="25" r="3.5" fill="#4ca885" stroke="none"/>
          <circle cx="90" cy="30.6" r="3.5" fill="#4ca885" stroke="none"/>
          <circle cx="130" cy="47.4" r="3.5" fill="#4ca885" stroke="none"/>
          <circle cx="170" cy="74" r="3.5" fill="#4ca885" stroke="none"/>
          <circle cx="210" cy="114.6" r="3.5" fill="#4ca885" stroke="none"/>
          <circle cx="250" cy="163.6" r="3.5" fill="#4ca885" stroke="none"/>
        </svg>`,
        solution:
          "From the scatter diagram, as $x$ increases, $y$ <strong>decreases at an increasing rate</strong> (concave downwards).<br>" +
          "• Model (B) $y = a + b\\mathrm{e}^{-x}$ decreases at a <em>decreasing</em> rate, so it is not suitable.<br>" +
          "• Model (C) $y = a + b\\ln(10 - x)$ is not defined at $x = 10$ (since $\\ln 0$ is undefined), so it is not valid.<br>" +
          "• Thus <strong>Model (A)</strong> $y = a - bx^2$ is the most accurate model."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Using the model you chose in part (a), find the equation of the least squares regression line. State the corresponding value of the product moment correlation coefficient, correct to $5$ decimal places.",
        type: "self",
        solution:
          "Regressing $y$ on $x^2$ using the GC:<br>" +
          "$y = 100.03088 - 0.99175x^2 \\implies y = -0.992x^2 + 100$ (3 s.f.).<br>" +
          "Product moment correlation coefficient: $r = -0.99995$ (5 d.p.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "At a particular spectator seat in the Padang, the sound intensity was recorded to be $20$ decibels. Estimate the distance of this spectator seat from the stage speakers. Explain whether your estimate is reliable.",
        type: "self",
        solution:
          "When $y = 20$:<br>" +
          "$20 = 100.03088 - 0.99175x^2 \\implies x^2 = 80.6966 \\implies x = 8.983 \\approx 8.98$ m (3 s.f., since $x > 0$).<br>" +
          "The estimate is <strong>reliable</strong> because $y = 20$ lies within the given data range ($1 \\le y \\le 100$, interpolation) and $|r| = 0.99995$ is very close to $1$."
      },
      {
        label: "(d)(i)",
        marks: 1,
        prompt:
          "As another part of sound calibration for the National Day Parade, engineers also measured the time that it takes for sound to reach the spectator stands, $t$, measured in milliseconds, at various distances, $x$, measured in metres from the stage speakers." +
          "<div class='q-table-wrap'><table class='q-table'>" +
          "<tr><th>$x$</th><td>$10$</td><td>$20$</td><td>$30$</td><td>$40$</td><td>$50$</td><td>$60$</td></tr>" +
          "<tr><th>$t$</th><td>$29.1$</td><td>$58.3$</td><td>$87.5$</td><td>$116.6$</td><td>$145.8$</td><td>$174.9$</td></tr>" +
          "</table></div>" +
          "The engineers would like to investigate if the model $t = 2.916x$ is a good fit of the above data. For a model $t = \\mathrm{f}(x)$, the residual for a point $(p, q)$ is $q - \\mathrm{f}(p)$.<br>" +
          "Explain why they should use the sum of the squares of the residuals rather than the sum of the residuals when assessing the fit of the model.",
        type: "self",
        solution:
          "Residuals can be positive or negative, so simply summing them allows positive and negative residuals to cancel each other out (giving a misleadingly small sum even for a poor fit). Squaring the residuals ensures all terms are non-negative for an accurate assessment of the fit."
      },
      {
        label: "(d)(ii)",
        marks: 2,
        prompt: "Calculate the sum of the squares of the residuals for the line $t = 2.916x$.",
        type: "auto",
        mode: "number",
        answer: "0.0096",
        placeholder: "Exact decimal",
        solution:
          "Predicted values $\\hat{t} = 2.916x$ and residuals $t - \\hat{t}$:<br>" +
          "<div class='q-table-wrap'><table class='q-table'>" +
          "<tr><th>$x$</th><td>$10$</td><td>$20$</td><td>$30$</td><td>$40$</td><td>$50$</td><td>$60$</td></tr>" +
          "<tr><th>$t$</th><td>$29.1$</td><td>$58.3$</td><td>$87.5$</td><td>$116.6$</td><td>$145.8$</td><td>$174.9$</td></tr>" +
          "<tr><th>$2.916x$</th><td>$29.16$</td><td>$58.32$</td><td>$87.48$</td><td>$116.64$</td><td>$145.80$</td><td>$174.96$</td></tr>" +
          "<tr><th>Residual</th><td>$-0.06$</td><td>$-0.02$</td><td>$0.02$</td><td>$-0.04$</td><td>$0$</td><td>$-0.06$</td></tr>" +
          "</table></div>" +
          "Sum of squares of residuals:<br>" +
          "$$(-0.06)^2 + (-0.02)^2 + (0.02)^2 + (-0.04)^2 + 0^2 + (-0.06)^2 = 0.0096$$"
      },
      {
        label: "(d)(iii)",
        marks: 1,
        prompt: "It is further found that another line $t = 2.916x + D$ where $D \\ne 0$ is a better fit for the above data. Explain how the sum of the squares of the residuals for the line $t = 2.916x + D$ differs from the sum of the squares of the residuals of $t = 2.916x$.",
        type: "self",
        solution:
          "Since $t = 2.916x + D$ is a better fit, its sum of squares of residuals will be <strong>smaller</strong> than that of $t = 2.916x$ (i.e. less than $0.0096$)."
      }
    ]
  },

  // ==================== Q11 ====================
  {
    id: "RVHS-2025-P2-Q11",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Sampling", "Hypothesis Testing"],
    stem: "A family business sells strings which are manually cut into stipulated lengths. A client placed an order for $10\\,000$ strings of length $100$ centimetres. The business owner got the workers to cut out the $10\\,000$ strings. To ensure quality, a random sample of $40$ strings is chosen from the $10\\,000$ strings for measurement and a constant $a$ was subtracted from the lengths in centimetres to produce the following summary data.<br>$$\\sum (x - a) = 10.316, \\qquad \\sum (x - a)^2 = 41.7$$",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Explain in the context of the question what it means for the sample to be random.",
        type: "self",
        solution:
          "Each of the $10\\,000$ strings has an equal probability of being selected for the sample of $40$ strings, and the selection of any string is independent of the selection of any other string."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the unbiased estimates of the population mean and variance.",
        type: "self",
        solution:
          "Unbiased estimate of population mean:<br>" +
          "$$\\bar{x} = \\frac{10.316}{40} + a = a + 0.2579 \\text{ cm}$$" +
          "Unbiased estimate of population variance:<br>" +
          "$$s^2 = \\frac{1}{40 - 1}\\left[41.7 - \\frac{(10.316)^2}{40}\\right] = 1.0010129 \\approx 1.00 \\text{ cm}^2 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 6,
        prompt: "Using the data, a test was conducted at $10\\%$ level of significance and found insufficient evidence to conclude that the mean is not $100$ centimetres.<br>State the hypotheses for the test, defining any parameters that you use. State the critical region and use it to find the range of possible values for the sample mean, giving your answer correct to $2$ decimal places.",
        type: "self",
        solution:
          "Let $X$ be the length of a randomly chosen string and $\\mu$ be the population mean length of the strings (in cm).<br>" +
          "$\\mathrm{H}_0: \\mu = 100$ vs $\\mathrm{H}_1: \\mu \\ne 100$ (two-tailed test at $10\\%$ significance level).<br>" +
          "Under $\\mathrm{H}_0$, by Central Limit Theorem (since $n = 40$ is large), $\\bar{X} \\sim \\mathrm{N}\\left(100, \\frac{1.0010129}{40}\\right)$ approximately, so $Z = \\frac{\\bar{X} - 100}{\\sqrt{1.0010129/40}} \\sim \\mathrm{N}(0, 1)$.<br>" +
          "<strong>Critical region:</strong> Reject $\\mathrm{H}_0$ if $z < -1.64485$ or $z > 1.64485$ (i.e. $|z| > 1.64$, 3 s.f.).<br>" +
          "Since $\\mathrm{H}_0$ is not rejected:<br>" +
          "$$-1.6448536 \\le \\frac{\\bar{x} - 100}{\\sqrt{1.0010129 / 40}} \\le 1.6448536$$" +
          "$$-0.260206 \\le \\bar{x} - 100 \\le 0.260206$$" +
          "$$99.7398 \\le \\bar{x} \\le 100.2602 \\implies 99.74 \\le \\bar{x} \\le 100.26 \\text{ (2 d.p.)}$$"
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Explain if the business owner needs to make any assumption about the distribution of the length of strings for the calculations in part (c) to be valid.",
        type: "self",
        solution:
          "No assumption is required about the distribution of the length of strings, because the sample size $n = 40$ is large, so by the Central Limit Theorem $\\bar{X}$ follows an approximately normal distribution."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "The $p$-value found from the test in part (c) is $0.10286$. Write down the $p$-value if the test was conducted at $6\\%$ level of significance on whether the strings are shorter than $100$ centimetres. State the conclusion of this test.",
        type: "self",
        solution:
          "For the one-tailed test $\\mathrm{H}_0: \\mu = 100$ vs $\\mathrm{H}_1: \\mu < 100$:<br>" +
          "$p$-value $= \\frac{1}{2} \\times 0.10286 = 0.05143$.<br>" +
          "Since $p$-value $= 0.05143 < 0.06$, we reject $\\mathrm{H}_0$.<br>" +
          "There is sufficient evidence at the $6\\%$ level of significance to conclude that the mean length of the strings is shorter than $100$ cm."
      }
    ]
  },

  // ==================== Q12 ====================
  {
    id: "RVHS-2025-P2-Q12",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q12",
    category: "stats",
    topics: ["Normal Distribution", "Binomial Distribution"],
    stem: "A factory produces metal discs and metal bars for constructing machinery parts. The mass of a randomly chosen metal disc follows a normal distribution with mean $18$ grams and standard deviation $0.6$ grams. The mass of a randomly chosen metal bar has an independent normal distribution with mean $20$ grams and standard deviation $\\sigma$ grams.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Sketch the distribution for the masses of the metal disc between $14$ grams and $22$ grams.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 150" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axis from x=30 to x=270, 14..22 -> 40..260 (27.5px/unit), center 18 at x=150, baseline y=120 -->
          <line x1="25" y1="120" x2="275" y2="120" stroke-width="1.4"/>
          <polyline points="269,116 275,120 269,124" fill="none" stroke-width="1.4"/>
          <text x="268" y="136" stroke="none" font-style="italic">mass (g)</text>
          <!-- Bell curve N(18, 0.6^2): peak at (150, 28), inflection at 18+-0.6 -> (133.5, 64) and (166.5, 64) -->
          <path d="M 40 119.8 L 80 119.5 C 102 119, 118 112, 130 78 C 138 52, 144 28, 150 28 C 156 28, 162 52, 170 78 C 182 112, 198 119, 220 119.5 L 260 119.8" fill="none" stroke="#4ca885" stroke-width="2.2"/>
          <!-- Dashed mean line -->
          <line x1="150" y1="28" x2="150" y2="120" stroke="#4ca885" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
          <!-- Ticks at 14, 18, 22 -->
          <line x1="40" y1="116" x2="40" y2="124" stroke-width="1.2"/>
          <text x="40" y="138" text-anchor="middle" stroke="none">14</text>
          <line x1="150" y1="116" x2="150" y2="124" stroke-width="1.2"/>
          <text x="150" y="138" text-anchor="middle" stroke="none">18</text>
          <line x1="260" y1="116" x2="260" y2="124" stroke-width="1.2"/>
          <text x="260" y="138" text-anchor="middle" stroke="none">22</text>
        </svg>`,
        solution:
          "Symmetric bell-shaped normal curve $D \\sim \\mathrm{N}(18, 0.6^2)$ centred at $\\mu = 18$, practically flat near $14$ and $22$ (which are more than $6\\sigma$ away from the mean)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "$2$ metal discs are randomly chosen. Find the probability that the mass of one of the discs is less than $19$ grams and the other metal disc has mass more than $19$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.09101283",
        placeholder: "Decimal (3 s.f.)",
        solution:
          "Let $D \\sim \\mathrm{N}(18, 0.6^2)$.<br>" +
          "Required probability $= 2 \\cdot \\mathrm{P}(D < 19) \\cdot \\mathrm{P}(D > 19) = 2(0.952210)(0.047790) = 0.091013 \\approx 0.0910$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the range of values of $k$ such that less than $90\\%$ of the metal discs have masses within $k$ grams of the mean mass of the metal discs.",
        type: "self",
        solution:
          "We require $\\mathrm{P}(18 - k < D < 18 + k) < 0.9$ (with $k > 0$).<br>" +
          "Using inverse normal (central area $0.9$): $\\mathrm{P}(17.01309 < D < 18.98691) = 0.9$.<br>" +
          "Hence $18 + k < 18.98691 \\implies 0 < k < 0.987$ (3 s.f.)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "It is known that $7.65\\%$ of the metal bars have masses more than $21$ grams. Find the value of $\\sigma$.",
        type: "auto",
        mode: "number",
        answer: "0.69978",
        placeholder: "Decimal (3 s.f.)",
        solution:
          "Let $B \\sim \\mathrm{N}(20, \\sigma^2)$.<br>" +
          "$$\\mathrm{P}(B > 21) = 0.0765 \\implies \\mathrm{P}\\left(Z > \\frac{21 - 20}{\\sigma}\\right) = 0.0765$$" +
          "$$\\frac{1}{\\sigma} = 1.429015 \\implies \\sigma = 0.69978 \\approx 0.700 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "It is given that $\\sigma = 0.5$ for the rest of the question.<br>A client places an order for a new kind of metal strips. The metal strips are modelled as similar solids to the metal bars with a $20\\%$ reduction in mass.<br>A production worker selects $8$ of the metal strips for inspection. Find the probability that at least $5$ of the metal strips have masses between $15.8$ grams and $17.2$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.7875986",
        placeholder: "Decimal (3 s.f.)",
        solution:
          "Let $S = 0.8B$ be the mass of a metal strip:<br>" +
          "$S \\sim \\mathrm{N}(0.8 \\times 20,\\; 0.8^2 \\times 0.5^2) = \\mathrm{N}(16, 0.4^2)$.<br>" +
          "$\\mathrm{P}(15.8 < S < 17.2) = 0.690125$.<br>" +
          "Let $X$ be the number of strips (out of $8$) with mass between $15.8$ g and $17.2$ g: $X \\sim \\mathrm{B}(8, 0.690125)$.<br>" +
          "$$\\mathrm{P}(X \\ge 5) = 1 - \\mathrm{P}(X \\le 4) = 0.787599 \\approx 0.788 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(f)",
        marks: 2,
        prompt: "A protective case is designed for the safe transportation of the metal bar. Each metal bar is placed inside a protective case during transportation. The masses of the protective cases are modelled as $30\\%$ of the masses of the metal bars.<br>Let $T$ denote the total mass of $4$ of the metal bars and their protective cases.<br>Find the variance of $T$.",
        type: "auto",
        mode: "number",
        answer: "1.09",
        placeholder: "Exact decimal",
        solution:
          "Let $C$ be the mass of a randomly chosen protective case (independent of the metal bar placed inside it):<br>" +
          "$C \\sim \\mathrm{N}(0.3 \\times 20,\\; 0.3^2 \\times 0.5^2) = \\mathrm{N}(6, 0.15^2)$.<br>" +
          "For one metal bar and its case, $Y = B + C \\sim \\mathrm{N}(20 + 6,\\; 0.5^2 + 0.15^2) = \\mathrm{N}(26, 0.2725)$.<br>" +
          "For $4$ independent bars and cases, $T = Y_1 + Y_2 + Y_3 + Y_4$:<br>" +
          "$$\\mathrm{Var}(T) = 4 \\times 0.2725 = 1.09$$"
      }
    ]
  }
]);
