window.registerQuestions([
  {
    id: "TMJC-2025-P2-Q1",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Without using a calculator, solve the inequality $$\\frac{x + 5}{-2x^2 + 5x + 3} < 1.$$",
        type: "self",
        solution: "$$\\frac{x + 5}{-2x^2 + 5x + 3} - 1 < 0$$$$\\frac{x + 5 - (-2x^2 + 5x + 3)}{-2x^2 + 5x + 3} < 0$$$$\\frac{2x^2 - 4x + 2}{-2x^2 + 5x + 3} < 0$$$$\\frac{2(x - 1)^2}{(3 - x)(2x + 1)} < 0, \\quad x \\ne -\\frac{1}{2},\\; x \\ne 3$$Since $2(x - 1)^2 > 0$ for $x \\ne 1$ and $2(x - 1)^2 = 0$ at $x = 1$ (which does not satisfy strict inequality), we need $(3 - x)(2x + 1) < 0$:<br>$$x < -\\frac{1}{2} \\quad \\text{or} \\quad x > 3$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence, solve exactly the inequality $$\\frac{\\cos x + 5}{-2\\cos^2 x + 5\\cos x + 3} < 1$$ for $0 \\le x \\le \\pi$.",
        type: "self",
        solution: "Replacing $x$ with $\\cos x$ in part (a):<br>$$\\cos x < -\\frac{1}{2} \\quad \\text{or} \\quad \\cos x > 3$$Since $-1 \\le \\cos x \\le 1$, $\\cos x > 3$ has no solutions.<br>For $\\cos x < -\\frac{1}{2}$ with $0 \\le x \\le \\pi$:<br>$$\\frac{2\\pi}{3} < x \\le \\pi$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q2",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "It is given that $\\mathrm{f}(\\theta) = a\\theta^2 + b\\theta + c$, where $a$, $b$ and $c$ are real constants. The curve with equation $y = \\mathrm{f}(\\theta)$ passes through the point with coordinates $(0, 1)$ and has a turning point at $\\left(-\\frac{\\sqrt{3}}{3}, \\frac{1}{2}\\right)$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the exact values of $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "3/2", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "sqrt(3)", exactRequired: true, placeholder: "Exact value" },
          { label: "c =", answer: "1", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "Since the curve passes through $(0, 1)$, $\\mathrm{f}(0) = c = 1$.<br>Since $\\mathrm{f}'(\\theta) = 2a\\theta + b$ and there is a turning point at $\\theta = -\\frac{\\sqrt{3}}{3}$:<br>$$2a\\left(-\\frac{\\sqrt{3}}{3}\\right) + b = 0 \\implies b = \\frac{2\\sqrt{3}}{3}a \\quad \\text{--- (1)}$$Substituting $\\left(-\\frac{\\sqrt{3}}{3}, \\frac{1}{2}\\right)$ into $y = a\\theta^2 + b\\theta + 1$:<br>$$\\frac{1}{3}a - \\frac{\\sqrt{3}}{3}b + 1 = \\frac{1}{2} \\implies \\frac{1}{3}a - \\frac{\\sqrt{3}}{3}b = -\\frac{1}{2} \\quad \\text{--- (2)}$$Substitute (1) into (2):<br>$$\\frac{1}{3}a - \\frac{2}{3}a = -\\frac{1}{2} \\implies -\\frac{1}{3}a = -\\frac{1}{2} \\implies a = \\frac{3}{2}$$Then $b = \\frac{2\\sqrt{3}}{3}\\left(\\frac{3}{2}\\right) = \\sqrt{3}$.<br>Hence $a = \\frac{3}{2}$, $b = \\sqrt{3}$, $c = 1$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "In a triangle $ABC$, $AB = 1$, $AC = \\sqrt{3}$ and angle $BAC = \\theta + \\frac{\\pi}{6}$ radians. Given that $\\theta$ is sufficiently small for $\\theta^3$ and higher powers of $\\theta$ to be neglected, show that $BC^2 \\approx \\mathrm{f}(\\theta)$.",
        type: "self",
        solution: "By the cosine rule:<br>$$BC^2 = AB^2 + AC^2 - 2(AB)(AC)\\cos\\left(\\theta + \\frac{\\pi}{6}\\right)$$$$= 1^2 + (\\sqrt{3})^2 - 2(1)(\\sqrt{3})\\left(\\cos\\theta\\cos\\frac{\\pi}{6} - \\sin\\theta\\sin\\frac{\\pi}{6}\\right)$$$$= 4 - 2\\sqrt{3}\\left(\\frac{\\sqrt{3}}{2}\\cos\\theta - \\frac{1}{2}\\sin\\theta\\right) = 4 - 3\\cos\\theta + \\sqrt{3}\\sin\\theta$$Using small angle approximations $\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}$ and $\\sin\\theta \\approx \\theta$:<br>$$BC^2 \\approx 4 - 3\\left(1 - \\frac{\\theta^2}{2}\\right) + \\sqrt{3}\\theta = 1 + \\sqrt{3}\\theta + \\frac{3}{2}\\theta^2 = \\mathrm{f}(\\theta) \\quad \\text{(shown)}$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Hence, show that $BC \\approx 1 + \\frac{\\sqrt{3}}{2}\\theta + \\frac{3}{8}\\theta^2$.",
        type: "self",
        solution: "$$BC \\approx \\left(1 + \\sqrt{3}\\theta + \\frac{3}{2}\\theta^2\\right)^{\\frac{1}{2}}$$Using the binomial expansion $(1 + u)^n = 1 + nu + \\frac{n(n-1)}{2!}u^2 + \\dots$ up to $\\theta^2$:<br>$$BC \\approx 1 + \\frac{1}{2}\\left(\\sqrt{3}\\theta + \\frac{3}{2}\\theta^2\\right) + \\frac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}\\left(\\sqrt{3}\\theta + \\frac{3}{2}\\theta^2\\right)^2$$$$\\approx 1 + \\frac{\\sqrt{3}}{2}\\theta + \\frac{3}{4}\\theta^2 - \\frac{1}{8}(3\\theta^2) = 1 + \\frac{\\sqrt{3}}{2}\\theta + \\frac{3}{8}\\theta^2 \\quad \\text{(shown)}$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q3",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "The function $\\mathrm{f}$ is defined by<br>• $\\mathrm{f}(x) = x + 4$ for $-4 \\le x < -1$,<br>• $\\mathrm{f}(x) = x^2 + 2$ for $-1 \\le x < 2$.<br>It is given that $\\mathrm{f}(x) = \\mathrm{f}(x + 6)$ for all real values of $x$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$ for $-6 \\le x < 6$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 220" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (170, 175), scale x: 22px/unit, y: 22px/unit -->
  <line x1="18" y1="175" x2="322" y2="175" stroke-width="1.4"/>
  <polyline points="315,171 322,175 315,179" fill="none" stroke-width="1.4"/>
  <line x1="170" y1="205" x2="170" y2="18" stroke-width="1.4"/>
  <polyline points="166,25 170,18 174,25" fill="none" stroke-width="1.4"/>
  <text x="325" y="179" stroke="none" font-style="italic">x</text>
  <text x="166" y="13" stroke="none" font-style="italic">y</text>
  <text x="157" y="189" stroke="none" font-style="italic">O</text>

  <!-- Piece 1: [-6, -4): (x+6)^2 + 2 -> x=-6:(38,131), x=-5:(60,109), x=-4:(82,43) -->
  <!-- Quadratic Bezier: P0=(38,131), P2=(82,43), tangent at P0 is horizontal -> control=(60,131) -->
  <path d="M 38 131 Q 60 131 82 43" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- Piece 2: [-4, -1): x+4 -> (-4,0)=(82,175) to (-1,3)=(148,109) -->
  <line x1="82" y1="175" x2="148" y2="109" stroke="#cf5652" stroke-width="2"/>

  <!-- Piece 3: [-1, 2): x^2+2 -> (-1,3)=(148,109), (0,2)=(170,131), (2,6)=(214,43) -->
  <!-- Split at vertex (170,131): left Q(159,131), right Q(192,131) -->
  <path d="M 148 109 Q 159 131 170 131 Q 192 131 214 43" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- Piece 4: [2, 5): x-2 -> (2,0)=(214,175) to (5,3)=(280,109) -->
  <line x1="214" y1="175" x2="280" y2="109" stroke="#cf5652" stroke-width="2"/>

  <!-- Piece 5: [5, 6): (x-6)^2+2 -> (5,3)=(280,109) to (6,2)=(302,131) -->
  <path d="M 280 109 Q 291 131 302 131" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- Endpoints -->
  <circle cx="38" cy="131" r="3.2" fill="#4a8fe7" stroke="none"/>
  <text x="10" y="147" stroke="none">(−6, 2)</text>

  <circle cx="82" cy="43" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="40" y="38" stroke="none">(−4, 6)</text>

  <circle cx="82" cy="175" r="3.2" fill="#cf5652" stroke="none"/>
  <text x="64" y="191" stroke="none">(−4, 0)</text>

  <circle cx="148" cy="109" r="3.2" fill="#2c2925" stroke="none"/>
  <text x="108" y="104" stroke="none">(−1, 3)</text>

  <text x="174" y="143" stroke="none">(0, 2)</text>

  <circle cx="214" cy="43" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="220" y="45" stroke="none">(2, 6)</text>

  <circle cx="214" cy="175" r="3.2" fill="#cf5652" stroke="none"/>
  <text x="200" y="191" stroke="none">(2, 0)</text>

  <circle cx="280" cy="109" r="3.2" fill="#2c2925" stroke="none"/>
  <text x="260" y="100" stroke="none">(5, 3)</text>

  <circle cx="302" cy="131" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="292" y="148" stroke="none">(6, 2)</text>
</svg>`,
        solution: "Since $\\mathrm{f}$ has period $6$, repeat the base pattern on $[-4, 2)$ across $[-6, 6)$:<br>• $[-6, -4)$: parabolic arc from closed $(-6, 2)$ to open $(-4, 6)$.<br>• $[-4, -1)$: line segment from closed $(-4, 0)$ to $(-1, 3)$.<br>• $[-1, 2)$: parabolic arc from closed $(-1, 3)$ through minimum $(0, 2)$ to open $(2, 6)$.<br>• $[2, 5)$: line segment from closed $(2, 0)$ to $(5, 3)$.<br>• $[5, 6)$: parabolic arc from closed $(5, 3)$ to open $(6, 2)$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Hence sketch the graph of $y = 2\\mathrm{f}(x - 1)$ for $-6 \\le x < 6$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 220" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (170, 175), scale x: 22px/unit, y: 11px/unit (so y=12 -> 43) -->
  <line x1="18" y1="175" x2="322" y2="175" stroke-width="1.4"/>
  <polyline points="315,171 322,175 315,179" fill="none" stroke-width="1.4"/>
  <line x1="170" y1="205" x2="170" y2="18" stroke-width="1.4"/>
  <polyline points="166,25 170,18 174,25" fill="none" stroke-width="1.4"/>
  <text x="325" y="179" stroke="none" font-style="italic">x</text>
  <text x="166" y="13" stroke="none" font-style="italic">y</text>
  <text x="157" y="189" stroke="none" font-style="italic">O</text>

  <!-- Piece 1: [-6, -3): 2(x+5)^2 + 4 -> (-6,6)=(38,109), (-5,4)=(60,131), (-3,12)=(104,43) -->
  <path d="M 38 109 Q 49 131 60 131 Q 82 131 104 43" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- Piece 2: [-3, 0): 2(x+3) -> (-3,0)=(104,175) to (0,6)=(170,109) -->
  <line x1="104" y1="175" x2="170" y2="109" stroke="#cf5652" stroke-width="2"/>

  <!-- Piece 3: [0, 3): 2(x-1)^2 + 4 -> (0,6)=(170,109), (1,4)=(192,131), (3,12)=(236,43) -->
  <path d="M 170 109 Q 181 131 192 131 Q 214 131 236 43" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- Piece 4: [3, 6): 2(x-3) -> (3,0)=(236,175) to (6,6)=(302,109) -->
  <line x1="236" y1="175" x2="302" y2="109" stroke="#cf5652" stroke-width="2"/>

  <!-- Endpoints -->
  <circle cx="38" cy="109" r="3.2" fill="#4a8fe7" stroke="none"/>
  <text x="10" y="102" stroke="none">(−6, 6)</text>
  <text x="42" y="146" stroke="none">(−5, 4)</text>

  <circle cx="104" cy="43" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="54" y="38" stroke="none">(−3, 12)</text>

  <circle cx="104" cy="175" r="3.2" fill="#cf5652" stroke="none"/>
  <text x="86" y="191" stroke="none">(−3, 0)</text>

  <circle cx="170" cy="109" r="3.2" fill="#2c2925" stroke="none"/>
  <text x="135" y="104" stroke="none">(0, 6)</text>
  <text x="184" y="146" stroke="none">(1, 4)</text>

  <circle cx="236" cy="43" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="242" y="45" stroke="none">(3, 12)</text>

  <circle cx="236" cy="175" r="3.2" fill="#cf5652" stroke="none"/>
  <text x="222" y="191" stroke="none">(3, 0)</text>

  <circle cx="302" cy="109" r="3.2" fill="#fff" stroke="#cf5652" stroke-width="1.8"/>
  <text x="292" y="100" stroke="none">(6, 6)</text>
</svg>`,
        solution: "Translate the graph of $y = \\mathrm{f}(x)$ by $1$ unit in the positive $x$-direction, then scale parallel to the $y$-axis by factor $2$:<br>• $[-6, -3)$: parabolic arc from closed $(-6, 6)$ through minimum $(-5, 4)$ to open $(-3, 12)$.<br>• $[-3, 0)$: line segment from closed $(-3, 0)$ to closed $(0, 6)$.<br>• $[0, 3)$: parabolic arc from closed $(0, 6)$ through minimum $(1, 4)$ to open $(3, 12)$.<br>• $[3, 6)$: line segment from closed $(3, 0)$ to open $(6, 6)$."
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q4",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "A viral trend on social media gains popularity rapidly but eventually slows down due to oversaturation. Let $P$ represent the popularity score of the trend at time $t$ (measured in days), where $0 \\le t \\le 100$. The change in the trend's momentum is modelled by $$\\frac{\\mathrm{d}^2 P}{\\mathrm{d}t^2} = -0.05\\left(\\frac{\\mathrm{d}P}{\\mathrm{d}t}\\right)^2.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "By substituting $v = \\frac{\\mathrm{d}P}{\\mathrm{d}t}$, show that $v = \\frac{20}{t + C}$ where $C$ is a real constant.",
        type: "self",
        solution: "Substituting $v = \\frac{\\mathrm{d}P}{\\mathrm{d}t}$ gives $\\frac{\\mathrm{d}v}{\\mathrm{d}t} = -0.05v^2$.<br>Separating variables:<br>$$\\int \\frac{1}{v^2}\\,\\mathrm{d}v = \\int -0.05\\,\\mathrm{d}t \\implies -\\frac{1}{v} = -0.05t + c'$$$$v = \\frac{1}{0.05t - c'} = \\frac{20}{t + C}$$where $C = -20c'$ is a real constant (shown)."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Given that $P = 0$ and $v = 10$ when $t = 0$, find the particular solution of $P$ in terms of $t$.",
        type: "auto",
        mode: "expr",
        vars: { t: [1, 5, 10, 30] },
        answer: "20*ln((t + 2)/2)",
        placeholder: "Expression for P in terms of t",
        solution: "When $t = 0$, $v = 10$:<br>$$10 = \\frac{20}{0 + C} \\implies C = 2 \\implies \\frac{\\mathrm{d}P}{\\mathrm{d}t} = \\frac{20}{t + 2}$$Integrating with respect to $t$:<br>$$P = 20\\ln|t + 2| + D$$When $t = 0$, $P = 0$:<br>$$0 = 20\\ln 2 + D \\implies D = -20\\ln 2$$Since $t \\ge 0$, $t + 2 > 0$, so:<br>$$P = 20\\ln(t + 2) - 20\\ln 2 = 20\\ln\\left(\\frac{t + 2}{2}\\right)$$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Find the popularity score of the trend when $t = 30$.",
        type: "auto",
        mode: "number",
        answer: "20*ln(16)",
        placeholder: "Exact or 3 s.f.",
        solution: "When $t = 30$:<br>$$P = 20\\ln\\left(\\frac{30 + 2}{2}\\right) = 20\\ln 16 \\approx 55.5 \\quad (\\text{3 s.f.})$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q5",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Vectors"],
    stem: "Referred to the origin $O$, the points $A$, $B$ and $C$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively where $\\mathbf{a}$ is a non-zero vector and $\\mathbf{b} \\ne \\mathbf{c}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Given that $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{a} \\times \\mathbf{c}$, show that $\\mathbf{b} - \\mathbf{c} = \\lambda\\mathbf{a}$, where $\\lambda$ is a non-zero constant.",
        type: "self",
        solution: "$$\\mathbf{a} \\times \\mathbf{b} = \\mathbf{a} \\times \\mathbf{c} \\implies \\mathbf{a} \\times \\mathbf{b} - \\mathbf{a} \\times \\mathbf{c} = \\mathbf{0} \\implies \\mathbf{a} \\times (\\mathbf{b} - \\mathbf{c}) = \\mathbf{0}$$Since $\\mathbf{a} \\ne \\mathbf{0}$ and $\\mathbf{b} - \\mathbf{c} \\ne \\mathbf{0}$, the vector $\\mathbf{b} - \\mathbf{c}$ is parallel to $\\mathbf{a}$.<br>Therefore, $\\mathbf{b} - \\mathbf{c} = \\lambda\\mathbf{a}$ for some non-zero constant $\\lambda$ (shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "It is given that the area of the trapezium $OABC$ is $10\\text{ units}^2$, $|\\mathbf{a}| = 3$, $|\\mathbf{c}| = 5$ and the angle between $\\mathbf{a}$ and $\\mathbf{c}$ is $30^\\circ$.<br>Show that $BC = 5$ units.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 140" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Trapezium OABC: O=(35,30), A=(125,30) [len 3->90px], C=(65,105) [height=75px], B=(215,105) [len 5->150px] -->
  <polygon points="35,30 125,30 215,105 65,105" fill="rgba(91,155,213,0.14)" stroke="#4a8fe7" stroke-width="1.8"/>
  <!-- Height line -->
  <line x1="65" y1="30" x2="65" y2="105" stroke-dasharray="4,3" stroke-width="1.2" opacity="0.7"/>
  <rect x="65" y="30" width="8" height="8" fill="none" stroke-width="1"/>
  <!-- Labels -->
  <text x="20" y="33" stroke="none" font-style="italic">O</text>
  <text x="128" y="27" stroke="none" font-style="italic">A</text>
  <text x="220" y="110" stroke="none" font-style="italic">B</text>
  <text x="52" y="116" stroke="none" font-style="italic">C</text>
  <text x="78" y="23" stroke="none">3</text>
  <text x="38" y="75" stroke="none">5</text>
  <text x="70" y="75" stroke="none" font-size="10">h = 5 sin 30°</text>
  <text x="41" y="47" stroke="none" font-size="9.5">30°</text>
</svg>`,
        solution: "Since $OA$ is parallel to $CB$, the perpendicular height of trapezium $OABC$ is:<br>$$h = |\\mathbf{c}|\\sin 30^\\circ = 5\\left(\\frac{1}{2}\\right) = \\frac{5}{2}$$Using the area of trapezium $OABC$:<br>$$\\frac{1}{2}(OA + BC) \\times h = 10 \\implies \\frac{1}{2}(3 + BC)\\left(\\frac{5}{2}\\right) = 10$$$$3 + BC = 8 \\implies BC = 5 \\text{ units (shown)}$$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "State the value of $k$ such that $\\mathbf{OA} = k\\,\\mathbf{CB}$, where $k$ is a positive constant.",
        type: "auto",
        mode: "number",
        answer: "3/5",
        exactRequired: true,
        placeholder: "Exact fraction",
        solution: "Since $OABC$ is a trapezium with $\\mathbf{OA}$ and $\\mathbf{CB}$ in the same direction, $|\\mathbf{OA}| = 3$ and $|\\mathbf{CB}| = 5$, we have $k = \\frac{3}{5}$."
      },
      {
        label: "(d)",
        marks: 5,
        prompt: "The line $OC$ meets the line $AB$ at point $D$. Find $\\mathbf{OD}$ in terms of $\\mathbf{c}$.",
        type: "auto",
        mode: "expr",
        vars: { c: [1, 2, 5] },
        answer: "-3/2*c",
        placeholder: "Expression in terms of c",
        solution: "From (c), $\\mathbf{a} = \\frac{3}{5}(\\mathbf{b} - \\mathbf{c})$.<br>Line $OC$: $\\mathbf{r} = \\lambda\\mathbf{c}$. Line $AB$: $\\mathbf{r} = \\mathbf{a} + \\mu(\\mathbf{b} - \\mathbf{a})$.<br>Substituting $\\mathbf{a} = \\frac{3}{5}(\\mathbf{b} - \\mathbf{c})$ into $l_{AB}$:<br>$$\\mathbf{r} = \\frac{3}{5}(\\mathbf{b} - \\mathbf{c}) + \\mu\\left[\\mathbf{b} - \\frac{3}{5}(\\mathbf{b} - \\mathbf{c})\\right] = \\left(\\frac{3}{5} + \\frac{2}{5}\\mu\\right)\\mathbf{b} + \\left(\\frac{3}{5}\\mu - \\frac{3}{5}\\right)\\mathbf{c}$$At point $D$, this equals $\\lambda\\mathbf{c}$. Comparing coefficients of non-parallel vectors $\\mathbf{b}$ and $\\mathbf{c}$:<br>$$\\frac{3}{5} + \\frac{2}{5}\\mu = 0 \\implies \\mu = -\\frac{3}{2}$$$$\\lambda = \\frac{3}{5}\\left(-\\frac{3}{2}\\right) - \\frac{3}{5} = -\\frac{9}{10} - \\frac{6}{10} = -\\frac{3}{2}$$Therefore, $\\mathbf{OD} = -\\frac{3}{2}\\mathbf{c}$.<br><em>(Alternatively, by similar triangles △$DOA$ and △$DCB$: $\\frac{DO}{DO + 5} = \\frac{3}{5} \\implies DO = 7.5$, and since $D$ lies on $CO$ produced, $\\mathbf{OD} = -\\frac{7.5}{5}\\mathbf{c} = -\\frac{3}{2}\\mathbf{c}$.)</em>"
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q6",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability"],
    stem: "For events $A$, $B$ and $C$, it is given that $\\mathrm{P}(A) = 0.3$, $\\mathrm{P}(B) = 0.4$, $\\mathrm{P}(C) = 0.42$, $\\mathrm{P}(A' \\cap B \\cap C) = x$ and $\\mathrm{P}(A \\cap B \\cap C) = 0.02$. It is also given that events $A$ and $B$ are independent, and that events $A$ and $C$ are independent.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $\\mathrm{P}(A \\cap B)$ and $\\mathrm{P}(A \\cap C)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "P(A ∩ B) =", answer: "0.12", exactRequired: true, placeholder: "Exact decimal" },
          { label: "P(A ∩ C) =", answer: "0.126", exactRequired: true, placeholder: "Exact decimal" }
        ],
        solution: "Since $A$ and $B$ are independent:<br>$$\\mathrm{P}(A \\cap B) = \\mathrm{P}(A)\\times\\mathrm{P}(B) = 0.3 \\times 0.4 = 0.12$$Since $A$ and $C$ are independent:<br>$$\\mathrm{P}(A \\cap C) = \\mathrm{P}(A)\\times\\mathrm{P}(C) = 0.3 \\times 0.42 = 0.126$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Draw a Venn diagram to represent this situation, showing the probability in each of the eight regions, in terms of $x$ where necessary.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 230" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Frame -->
  <rect x="12" y="10" width="296" height="210" fill="none" stroke-width="1.5"/>
  <!-- Circles A, B, C -->
  <circle cx="122" cy="88" r="62" fill="rgba(76,168,133,0.08)" stroke="#4ca885" stroke-width="1.6"/>
  <circle cx="198" cy="88" r="62" fill="rgba(74,143,231,0.08)" stroke="#4a8fe7" stroke-width="1.6"/>
  <circle cx="160" cy="146" r="62" fill="rgba(207,86,82,0.08)" stroke="#cf5652" stroke-width="1.6"/>

  <!-- Set Labels -->
  <text x="64" y="34" stroke="none" font-weight="bold" fill="#4ca885">A</text>
  <text x="246" y="34" stroke="none" font-weight="bold" fill="#4a8fe7">B</text>
  <text x="225" y="198" stroke="none" font-weight="bold" fill="#cf5652">C</text>

  <!-- 8 Region Values -->
  <text x="84" y="84" stroke="none">0.074</text>
  <text x="151" y="74" stroke="none">0.1</text>
  <text x="200" y="84" stroke="none">0.28 − x</text>
  <text x="148" y="109" stroke="none">0.02</text>
  <text x="112" y="132" stroke="none">0.106</text>
  <text x="190" y="132" stroke="none" font-style="italic">x</text>
  <text x="136" y="176" stroke="none">0.294 − x</text>
  <text x="22" y="206" stroke="none">0.126 + x</text>
</svg>`,
        solution: "The probabilities of the 8 regions are:<br>• $\\mathrm{P}(A \\cap B \\cap C) = 0.02$<br>• $\\mathrm{P}(A \\cap B \\cap C') = 0.12 - 0.02 = 0.1$<br>• $\\mathrm{P}(A \\cap B' \\cap C) = 0.126 - 0.02 = 0.106$<br>• $\\mathrm{P}(A \\cap B' \\cap C') = 0.3 - 0.1 - 0.02 - 0.106 = 0.074$<br>• $\\mathrm{P}(A' \\cap B \\cap C) = x$<br>• $\\mathrm{P}(A' \\cap B \\cap C') = 0.4 - 0.1 - 0.02 - x = 0.28 - x$<br>• $\\mathrm{P}(A' \\cap B' \\cap C) = 0.42 - 0.106 - 0.02 - x = 0.294 - x$<br>• $\\mathrm{P}(A' \\cap B' \\cap C') = 1 - (0.3 + 0.28 - x + 0.294) = 0.126 + x$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the greatest and least possible values of $\\mathrm{P}(A' \\cap B' \\cap C)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Greatest =", answer: "0.294", exactRequired: true, placeholder: "Exact decimal" },
          { label: "Least =", answer: "0.014", exactRequired: true, placeholder: "Exact decimal" }
        ],
        solution: "Each region probability must be non-negative, so $x \\ge 0$, $0.28 - x \\ge 0$, and $0.294 - x \\ge 0$, giving $0 \\le x \\le 0.28$.<br>Since $\\mathrm{P}(A' \\cap B' \\cap C) = 0.294 - x$:<br>• Greatest value (when $x = 0$): $0.294$.<br>• Least value (when $x = 0.28$): $0.294 - 0.28 = 0.014$."
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q7",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "A coffee shop owner claims that its signature coffee has a mean caffeine content of $120\\text{ mg}$ per cup. To investigate this claim, a random sample of $60$ cups of coffee is selected and the caffeine content, $x\\text{ mg}$ per cup, is summarised as follows.<br>$$\\sum x = 6960, \\qquad \\sum x^2 = 822465$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Calculate unbiased estimates of the population mean and variance for the caffeine content per cup.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "116", exactRequired: true, placeholder: "Exact value" },
          { label: "Variance =", answer: "15105/59", placeholder: "Exact or 3 s.f." }
        ],
        solution: "Unbiased estimate of population mean $\\mu$:<br>$$\\bar{x} = \\frac{6960}{60} = 116$$Unbiased estimate of population variance $\\sigma^2$:<br>$$s^2 = \\frac{1}{59}\\left(822465 - \\frac{6960^2}{60}\\right) = \\frac{15105}{59} \\approx 256.0169 \\approx 256 \\quad (\\text{3 s.f.})$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Test, at the $5\\%$ level of significance, whether the coffee shop owner's claim is supported by the data. You should state your hypotheses and define any symbols that you use.",
        type: "self",
        solution: "Let $X$ be the caffeine content per cup of signature coffee (in mg), and let $\\mu$ denote the population mean caffeine content per cup of signature coffee (in mg).<br><br>$$\\mathrm{H}_0: \\mu = 120 \\qquad \\mathrm{H}_1: \\mu \\ne 120$$Under $\\mathrm{H}_0$, since $n = 60$ is large, by Central Limit Theorem:<br>$$\\bar{X} \\sim \\mathrm{N}\\left(120, \\frac{256.0169}{60}\\right) \\text{ approximately}$$Test statistic: $Z = \\frac{\\bar{X} - 120}{\\sqrt{256.0169 / 60}} \\sim \\mathrm{N}(0, 1)$ approximately.<br>Using a graphing calculator, $z_{\\text{calc}} = -1.9364$, giving two-tailed $p\\text{-value} = 0.0528$ (3 s.f.).<br><br>Since $p\\text{-value} = 0.0528 > 0.05$, we <strong>do not reject</strong> $\\mathrm{H}_0$ at the $5\\%$ level of significance. There is insufficient evidence that the population mean caffeine content per cup of signature coffee is not $120\\text{ mg}$. Hence, the coffee shop owner's claim is supported by the data at the $5\\%$ level of significance."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The coffee shop also sells premium coffee, where its caffeine content is normally distributed with population variance $200\\text{ mg}^2$. The coffee shop owner now claims that its premium coffee has a mean caffeine content less than $120\\text{ mg}$ per cup. Another large random sample of $n$ cups of premium coffee is selected and the sample mean caffeine content per cup is found to be $116.6\\text{ mg}$. A test is carried out at the $2\\frac{1}{2}\\%$ level of significance and the result supports the owner's claim.<br>Find the set of values that $n$ can take.",
        type: "self",
        solution: "Let $Y$ be the caffeine content per cup of premium coffee (in mg) and $\\mu_Y$ be its population mean.<br>$$\\mathrm{H}_0: \\mu_Y = 120 \\qquad \\mathrm{H}_1: \\mu_Y < 120$$Under $\\mathrm{H}_0$, $\\bar{Y} \\sim \\mathrm{N}\\left(120, \\frac{200}{n}\\right)$.<br>At the $2.5\\%$ level of significance (left-tailed test), we reject $\\mathrm{H}_0$ when $z < -1.95996$:<br>$$\\frac{116.6 - 120}{\\sqrt{200 / n}} < -1.95996 \\implies -3.4\\sqrt{n} < -1.95996\\sqrt{200}$$$$n > 200\\left(\\frac{1.95996}{3.4}\\right)^2 = 66.461$$Since $n$ is a positive integer, the set of values is $\\{n \\in \\mathbb{Z} : n \\ge 67\\}$."
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q8",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "A manufacturer produces mystery boxes, each containing either a regular or a seasonal toy. On average, $p\\%$ of the mystery boxes contain a seasonal toy.<br>Amber orders $n$ mystery boxes from the manufacturer. The number of seasonal toys that Amber gets is the random variable $S$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State, in the context of the question, two assumptions needed for $S$ to be well modelled by a binomial distribution.",
        type: "self",
        solution: "1. Whether a randomly chosen mystery box contains a seasonal toy is <strong>independent</strong> of all other mystery boxes.<br>2. The probability that a randomly chosen mystery box contains a seasonal toy is <strong>constant</strong> at $\\frac{p}{100}$ for every mystery box."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "You are now given that $S$ can be modelled by a binomial distribution. Given that $\\mathrm{P}(S = 2) = \\mathrm{P}(S = 3)$ and $\\mathrm{E}(S) = 2.96$, find the value of $p$.",
        type: "auto",
        mode: "number",
        answer: "4",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Let $q = \\frac{p}{100}$, so $S \\sim \\mathrm{B}(n, q)$ and $nq = 2.96$.<br>From $\\mathrm{P}(S = 2) = \\mathrm{P}(S = 3)$:<br>$$^n\\mathrm{C}_2\\, q^2 (1 - q)^{n-2} = {^n\\mathrm{C}_3}\\, q^3 (1 - q)^{n-3}$$$$\\frac{n(n-1)}{2}(1 - q) = \\frac{n(n-1)(n-2)}{6}q$$Since $n > 2$, $q > 0$, $1 - q > 0$:<br>$$3(1 - q) = (n - 2)q \\implies 3 - 3q = nq - 2q \\implies nq = 3 - q$$Substituting $nq = 2.96$:<br>$$3 - q = 2.96 \\implies q = 0.04 \\implies p = 4$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Assume now that $p = 5$. The manufacturer now packs the mystery boxes into cartons of $12$ each for sale. Each carton is checked for quality control. If there is at most $1$ mystery box containing a seasonal toy, the carton is accepted. Otherwise, the carton is rejected.<br>Given that a randomly chosen carton is rejected, find the probability that no more than $30\\%$ of the boxes in the carton each contains a seasonal toy.",
        type: "auto",
        mode: "number",
        answer: "0.981105053",
        placeholder: "Probability to 3 s.f.",
        solution: "Let $X$ be the number of mystery boxes, out of $12$, containing a seasonal toy, so $X \\sim \\mathrm{B}(12, 0.05)$.<br>A carton is rejected if $X \\ge 2$. Also, $30\\%$ of $12$ is $3.6$, so no more than $30\\%$ means $X \\le 3$.<br>$$\\mathrm{P}(X \\le 3.6 \\mid X \\ge 2) = \\frac{\\mathrm{P}(2 \\le X \\le 3)}{\\mathrm{P}(X \\ge 2)} = \\frac{\\mathrm{P}(X = 2) + \\mathrm{P}(X = 3)}{1 - \\mathrm{P}(X \\le 1)} \\approx 0.98111 \\approx 0.981 \\quad (\\text{3 s.f.})$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q9",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "A car dealer is investigating how the value of a car depreciates over time. A random sample of eight cars of the same model is selected and the current resale value, $y$ thousand dollars of each car is recorded along with its age in $x$ years. The results are shown in the table.<div class='q-table-wrap'><table class='q-table'><tr><th>Age of car ($x$ years)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><th>Resale Value ($y$ thousand dollars)</th><td>30.0</td><td>25.8</td><td>22.3</td><td>19.2</td><td>16.5</td><td>14.4</td><td>12.5</td><td>10.9</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Draw the scatter diagram for these values, labelling the axes clearly.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 200" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (45, 175), x: 0..7 -> 45..269 (32px/yr), y: 0..32 -> 175..23 (4.75px/unit) -->
  <line x1="35" y1="175" x2="282" y2="175" stroke-width="1.4"/>
  <polyline points="275,171 282,175 275,179" fill="none" stroke-width="1.4"/>
  <line x1="45" y1="185" x2="45" y2="18" stroke-width="1.4"/>
  <polyline points="41,25 45,18 49,25" fill="none" stroke-width="1.4"/>
  <text x="285" y="179" stroke="none" font-style="italic">x</text>
  <text x="41" y="13" stroke="none" font-style="italic">y</text>
  <text x="34" y="188" stroke="none">0</text>
  <text x="265" y="189" stroke="none">7</text>
  <text x="17" y="36" stroke="none">30.0</text>
  <text x="17" y="127" stroke="none">10.9</text>

  <!-- Data points: y_px = 175 - 4.75*y -->
  <circle cx="45" cy="32.5" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="77" cy="52.45" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="109" cy="69.08" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="141" cy="83.8" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="173" cy="96.63" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="205" cy="106.6" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="237" cy="115.63" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="269" cy="123.23" r="3.2" fill="#4ca885" stroke="none"/>
</svg>`,
        solution: "Plot the $8$ points $(0, 30.0)$, $(1, 25.8)$, $(2, 22.3)$, $(3, 19.2)$, $(4, 16.5)$, $(5, 14.4)$, $(6, 12.5)$, $(7, 10.9)$ on labelled $x$ and $y$ axes. The points curve downwards, decreasing at a decreasing rate."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is thought that the resale value of a car, $y$, can be modelled by one of the formulae $y = a + bx$ or $\\ln y = c + dx$, where $a$, $b$, $c$ and $d$ are real constants.<br>Find, correct to $5$ decimal places, the value of the product moment correlation coefficient between (i) $y$ and $x$, (ii) $\\ln y$ and $x$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "(i) r (y and x) =", answer: "-0.987510", dp: 5, placeholder: "Value to 5 d.p." },
          { label: "(ii) r (ln y and x) =", answer: "-0.999839", dp: 5, placeholder: "Value to 5 d.p." }
        ],
        solution: "Using a graphing calculator:<br>(i) $r$ between $y$ and $x$ is $-0.987510 \\approx -0.98751$ (5 d.p.).<br>(ii) $r$ between $\\ln y$ and $x$ is $-0.999839 \\approx -0.99984$ (5 d.p.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Use your answers to parts (a) and (b) to explain which of $y = a + bx$ and $\\ln y = c + dx$ is the better model.",
        type: "self",
        solution: "From the scatter diagram in (a), as $x$ increases, $y$ decreases at a decreasing rate (suggesting a curvilinear/exponential decay rather than a linear relationship).<br>From (b), the product moment correlation coefficient between $\\ln y$ and $x$ ($-0.99984$) is closer to $-1$ than that between $y$ and $x$ ($-0.98751$).<br>Hence, $\\ln y = c + dx$ is the better model."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "It is required to estimate the age of a car with a resale value of SGD 18000. Find the equation of a suitable regression line and use it to find the required estimate.",
        type: "self",
        solution: "Since $x$ is the independent variable and $\\ln y = c + dx$ is the better model, we use the regression line of $\\ln y$ on $x$:<br>$$\\ln y = 3.3943 - 0.14493x \\quad (\\text{or } \\ln y = 3.39 - 0.145x)$$When the resale value is SGD 18000, $y = 18$:<br>$$\\ln 18 = 3.3943 - 0.14493x \\implies x = \\frac{3.3943 - \\ln 18}{0.14493} \\approx 3.4770 \\approx 3.48\\text{ years (3 s.f.)}$$"
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Without the use of a graphing calculator, re-write your equation from part (d) so that it can be used to estimate the resale value when the age is given in months.",
        type: "self",
        solution: "Let $m$ (or $x$) be the age in months, so the age in years is $\\frac{x}{12}$:<br>$$\\ln y = 3.3943 - 0.14493\\left(\\frac{x}{12}\\right) = 3.3943 - 0.012078x$$Rounding to 3 s.f.:<br>$$\\ln y = 3.39 - 0.0121x$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q10",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Probability", "Discrete Random Variables"],
    stem: "Wardrobe $A$ contains $4$ distinct blouses, labelled $T_1, T_2, T_3$ and $T_4$. Wardrobe $B$ contains $3$ distinct pairs of pants, labelled $P_1, P_2$ and $P_3$. The following table shows the formality (formal or casual) of all the clothing.<div class='q-table-wrap'><table class='q-table'><tr><th>Wardrobe</th><th>Clothing</th><th>Formal</th><th>Casual</th></tr><tr><td>$A$</td><td>Blouse</td><td>$T_1, T_2$</td><td>$T_3, T_4$</td></tr><tr><td>$B$</td><td>Pants</td><td>$P_1, P_2$</td><td>$P_3$</td></tr></table></div>Nancy selects an outfit at random, by first choosing one blouse from Wardrobe $A$, followed by choosing one pair of pants from Wardrobe $B$.<br>$X$ denotes the score of a randomly chosen outfit.<br>• If the blouse and pants have the same formality, then the score of the outfit is the sum of their respective indices. For example, the score of an outfit comprising $T_4$ and $P_3$ is $7$.<br>• If the blouse and pants have different formality, then the score of the outfit is the product of their respective indices. For example, the score of an outfit comprising $T_2$ and $P_3$ is $6$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that $\\mathrm{P}(X = 4) = \\frac{1}{6}$.",
        type: "self",
        solution: "A score of $4$ is obtained only from $(T_2, P_2)$ (same formality: $2 + 2 = 4$) or $(T_4, P_1)$ (different formality: $4 \\times 1 = 4$).<br>$$\\mathrm{P}(X = 4) = \\mathrm{P}(T_2, P_2) + \\mathrm{P}(T_4, P_1) = \\frac{1}{4}\\times\\frac{1}{3} + \\frac{1}{4}\\times\\frac{1}{3} = \\frac{2}{12} = \\frac{1}{6} \\quad \\text{(shown)}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the probability distribution of $X$.",
        type: "self",
        solution: "Construct the outcome table of scores for all $12$ equally likely outfits:<div class='q-table-wrap'><table class='q-table'><tr><th>Blouse \\ Pants</th><th>$P_1$ (F)</th><th>$P_2$ (F)</th><th>$P_3$ (C)</th></tr><tr><td>$T_1$ (F)</td><td>2</td><td>3</td><td>3</td></tr><tr><td>$T_2$ (F)</td><td>3</td><td>4</td><td>6</td></tr><tr><td>$T_3$ (C)</td><td>3</td><td>6</td><td>6</td></tr><tr><td>$T_4$ (C)</td><td>4</td><td>8</td><td>7</td></tr></table></div>Thus the probability distribution of $X$ is:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>2</td><td>3</td><td>4</td><td>6</td><td>7</td><td>8</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$\\frac{1}{12}$</td><td>$\\frac{1}{3}$</td><td>$\\frac{1}{6}$</td><td>$\\frac{1}{4}$</td><td>$\\frac{1}{12}$</td><td>$\\frac{1}{12}$</td></tr></table></div>"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Show that $\\mathrm{E}(X) = \\frac{55}{12}$ and find $\\mathrm{Var}(X)$.",
        type: "self",
        solution: "$$\\mathrm{E}(X) = 2\\left(\\frac{1}{12}\\right) + 3\\left(\\frac{1}{3}\\right) + 4\\left(\\frac{1}{6}\\right) + 6\\left(\\frac{1}{4}\\right) + 7\\left(\\frac{1}{12}\\right) + 8\\left(\\frac{1}{12}\\right) = \\frac{2 + 12 + 8 + 18 + 7 + 8}{12} = \\frac{55}{12} \\quad \\text{(shown)}$$$$\\mathrm{E}(X^2) = 4\\left(\\frac{1}{12}\\right) + 9\\left(\\frac{1}{3}\\right) + 16\\left(\\frac{1}{6}\\right) + 36\\left(\\frac{1}{4}\\right) + 49\\left(\\frac{1}{12}\\right) + 64\\left(\\frac{1}{12}\\right) = \\frac{293}{12}$$$$\\mathrm{Var}(X) = \\frac{293}{12} - \\left(\\frac{55}{12}\\right)^2 = \\frac{3516 - 3025}{144} = \\frac{491}{144} \\approx 3.41 \\quad (\\text{3 s.f.})$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Nancy selects three outfits in succession <strong>without replacement</strong>. Find the probability that there are exactly two outfits that comprise both a formal blouse and a pair of formal pants.",
        type: "auto",
        mode: "number",
        answer: "1/6",
        placeholder: "Exact fraction or 3 s.f.",
        solution: "Since outfits are selected without replacement, each outfit uses one blouse from Wardrobe $A$ and one pair of pants from Wardrobe $B$.<br>There are $2$ formal blouses ($T_1, T_2$), $2$ casual blouses ($T_3, T_4$), $2$ formal pants ($P_1, P_2$), and $1$ casual pants ($P_3$).<br>To have exactly $2$ all-formal outfits among the $3$ chosen outfits, the two formal outfits must use both formal blouses and both formal pants, and the remaining outfit must use one of the $2$ casual blouses with the $1$ casual pants.<br>Considering the $\\frac{3!}{2!} = 3$ possible orders (FF, FF, CC):<br>$$\\text{Required probability} = \\left(\\frac{2}{4} \\times \\frac{2}{3}\\right)\\left(\\frac{1}{3} \\times \\frac{1}{2}\\right)\\left(\\frac{2}{2} \\times \\frac{1}{1}\\right) \\times \\frac{3!}{2!} = \\frac{1}{6}$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P2-Q11",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Binomial Distribution", "Normal Distribution"],
    stem: "Anastasia leaves her house to travel to school every school day. On each school day, she will first take $C$ minutes to cycle from her house to the train station, followed by taking a train ride of $T$ minutes, and finally taking a bus ride of $B$ minutes, before she reaches her school. You should assume that all waiting and walking times are negligible. It is given that $C$, $T$ and $B$ follow independent normal distributions, with means and standard deviations as shown in the table.<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>Mean (minutes)</th><th>Standard Deviation (minutes)</th></tr><tr><td>$C$</td><td>8</td><td>0.2</td></tr><tr><td>$T$</td><td>17</td><td>$\\sigma$</td></tr><tr><td>$B$</td><td>15</td><td>2.1</td></tr></table></div>Anastasia is supposed to reach school by 7.30 am so that she is not late for school.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Given that $10\\%$ of the train rides will take at most $15$ minutes, find the value of $\\sigma$.",
        type: "auto",
        mode: "number",
        answer: "1.5606078",
        placeholder: "Value to 3 s.f.",
        solution: "$T \\sim \\mathrm{N}(17, \\sigma^2)$ and $\\mathrm{P}(T \\le 15) = 0.1$.<br>Standardising:<br>$$\\mathrm{P}\\left(Z \\le \\frac{15 - 17}{\\sigma}\\right) = 0.1 \\implies \\frac{-2}{\\sigma} = -1.28155 \\implies \\sigma = 1.5606 \\approx 1.56 \\quad (\\text{3 s.f.})$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "For the rest of the question, use $\\sigma = 1.4$.<br>Find the probability that Anastasia spends between $35$ and $50$ minutes travelling from her house to school on a randomly chosen school day.",
        type: "auto",
        mode: "number",
        answer: "0.97582",
        placeholder: "Probability to 3 s.f.",
        solution: "Let $J = C + T + B$ be the total travel time.<br>$$\\mathrm{E}(J) = 8 + 17 + 15 = 40$$$$\\mathrm{Var}(J) = 0.2^2 + 1.4^2 + 2.1^2 = 0.04 + 1.96 + 4.41 = 6.41$$Thus $J \\sim \\mathrm{N}(40, 6.41)$.<br>$$\\mathrm{P}(35 < J < 50) = 0.97582 \\approx 0.976 \\quad (\\text{3 s.f.})$$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Show that the probability that Anastasia is late for school if she leaves house at 6:48 am is $0.215$, correct to $3$ significant figures.",
        type: "self",
        solution: "From 6:48 am to 7:30 am is $42$ minutes. She is late if $J > 42$:<br>$$\\mathrm{P}(J > 42) = 0.21478 \\approx 0.215 \\quad (\\text{3 s.f., shown})$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find the latest time that Anastasia needs to leave her house if she wants to be at least $90\\%$ confident that she will not be late for school.",
        type: "self",
        solution: "Let $k$ be the travel time allowance (in minutes) such that $\\mathrm{P}(J \\le k) \\ge 0.9$.<br>Using inverse normal on $J \\sim \\mathrm{N}(40, 6.41)$:<br>$$k \\ge 43.245$$Thus she needs at least $44$ whole minutes to be at least $90\\%$ confident she will not be late.<br>Counting $44$ minutes before 7:30 am gives the latest time to leave house as <strong>6:46 am</strong>."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Find the probability that the total time Anastasia spends cycling from her house to the train station on five randomly chosen school days exceeds twice the time she spends on the train ride on a randomly chosen school day.",
        type: "auto",
        mode: "number",
        answer: "0.98283",
        placeholder: "Probability to 3 s.f.",
        solution: "Let $X = C_1 + C_2 + C_3 + C_4 + C_5 - 2T$.<br>$$\\mathrm{E}(X) = 5(8) - 2(17) = 6$$$$\\mathrm{Var}(X) = 5(0.2^2) + 2^2(1.4^2) = 0.2 + 7.84 = 8.04$$Thus $X \\sim \\mathrm{N}(6, 8.04)$, and:<br>$$\\mathrm{P}(X > 0) = 0.98283 \\approx 0.983 \\quad (\\text{3 s.f.})$$"
      },
      {
        label: "(f)",
        marks: 4,
        prompt: "Anastasia attends school five days a week and she leaves house at 6:48 am every day for school. Find the probability that she is late for school twice in the first two weeks and her 3rd late coming occurs in the 6th week.",
        type: "auto",
        mode: "number",
        answer: "0.0055766",
        answers: ["0.0055766", "0.0055978"],
        placeholder: "Probability to 3 s.f.",
        solution: "Using $p = 0.215$ per school day:<br>• First $2$ weeks ($10$ school days): late twice, $R \\sim \\mathrm{B}(10, 0.215)$, $\\mathrm{P}(R = 2)$.<br>• Weeks $3$, $4$, and $5$ ($15$ school days): late $0$ times, probability $(1 - 0.215)^{15}$.<br>• Week $6$ ($5$ school days): late at least once (so that the 3rd late coming occurs in week 6), $W \\sim \\mathrm{B}(5, 0.215)$, $\\mathrm{P}(W \\ge 1) = 1 - (1 - 0.215)^5$.<br><br>$$\\text{Required probability} = \\mathrm{P}(R = 2) \\times (0.785)^{15} \\times \\left(1 - 0.785^5\\right) = 0.0055766 \\approx 0.00558 \\quad (\\text{3 s.f.})$$"
      }
    ]
  }
]);
