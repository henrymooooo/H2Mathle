window.registerQuestions([
  // ==================== SECTION A: PURE MATHEMATICS ====================
  // ==================== Q1 ====================
  {
    id: "RI-2025-P2-Q1",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Without using a calculator, solve the inequality $\\frac{x^2 - 5x + 6}{x^2 - 4} < \\frac{2x - 3}{x + 2}$.",
        type: "self",
        solution:
          "$\\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} < \\frac{2x - 3}{x + 2}$, where $x \\ne \\pm 2$.<br>" +
          "$\\frac{x - 3}{x + 2} - \\frac{2x - 3}{x + 2} < 0$<br>" +
          "$\\frac{-x}{x + 2} < 0 \\implies \\frac{x}{x + 2} > 0 \\implies x(x + 2) > 0$.<br>" +
          "Therefore $x < -2$ or $x > 0$, with $x \\ne 2$.<br>" +
          "Hence $x < -2$ or $0 < x < 2$ or $x > 2$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Sketch on the same diagram the graphs of $y = \\ln x$ and $y = x - 5$, giving the equations of any asymptotes and the $x$-coordinates of the points of intersection between the two graphs.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 200" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (75, 100), x scale 26px/unit, y scale 16px/unit -->
  <line x1="25" y1="100" x2="305" y2="100" stroke-width="1.2"/>
  <polyline points="299,96 305,100 299,104" fill="none" stroke-width="1.2"/>
  <line x1="75" y1="192" x2="75" y2="14" stroke-width="1.2"/>
  <polyline points="71,20 75,14 79,20" fill="none" stroke-width="1.2"/>
  <text x="302" y="114" stroke="none" font-style="italic">x</text>
  <text x="62" y="20" stroke="none" font-style="italic">y</text>
  <text x="61" y="114" stroke="none">O</text>
  <text x="42" y="186" stroke="none">x = 0</text>
  <!-- y = ln x: (0.00678,-5)->(75.2,180), (1,0)->(101,100), (3,1.1)->(153,82.4), (6.94,1.94)->(255.4,69), (8,2.08)->(283,66.7) -->
  <path d="M 75.5,190 C 76,145 84,116 101,100 C 130,78 190,72 285,66" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- y = x - 5: (-1,-6)->(49,196), (0,-5)->(75,180), (5,0)->(205,100), (8,3)->(283,52) -->
  <line x1="55" y1="192" x2="285" y2="51" stroke="#cf5652" stroke-width="1.8"/>
  <!-- Intersections -->
  <circle cx="75.2" cy="180" r="2.8" fill="#2c2925" stroke="none"/>
  <circle cx="255.4" cy="69" r="2.8" fill="#2c2925" stroke="none"/>
  <text x="82" y="183" stroke="none">x = 0.00678</text>
  <text x="98" y="114" stroke="none">1</text>
  <text x="202" y="114" stroke="none">5</text>
  <line x1="255.4" y1="69" x2="255.4" y2="100" stroke-dasharray="3,3" opacity="0.5"/>
  <text x="245" y="114" stroke="none">6.94</text>
  <text x="148" y="65" stroke="none" fill="#4a8fe7">y = ln x</text>
  <text x="155" y="150" stroke="none" fill="#cf5652">y = x − 5</text>
</svg>`,
        solution:
          "• $y = \\ln x$ has vertical asymptote $x = 0$ and $x$-intercept $(1, 0)$.<br>" +
          "• $y = x - 5$ is a straight line with $x$-intercept $(5, 0)$ and $y$-intercept $(0, -5)$.<br>" +
          "• From GC, the $x$-coordinates of the points of intersection are $x = 0.00678$ and $x = 6.94$ (3 s.f.)."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Hence solve the inequality $\\ln|x| < |x| - 5$.",
        type: "self",
        solution:
          "From part (b)(i), $\\ln x < x - 5$ when $0 < x < 0.00678$ or $x > 6.94$.<br>" +
          "Replacing $x$ by $|x|$, we require $0 < |x| < 0.00678$ or $|x| > 6.94$.<br><br>" +
          "Hence $x < -6.94$ or $-0.00678 < x < 0$ or $0 < x < 0.00678$ or $x > 6.94$."
      }
    ]
  },

  // ==================== Q2 ====================
  {
    id: "RI-2025-P2-Q2",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "In a triangle $ABC$, $AB = 2$, angle $CAB = x$ radians and angle $CBA = \\frac{\\pi}{6}$ radians.<br><br>Show that $AC = \\frac{2}{\\cos x + \\sqrt{3}\\sin x}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 110" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="30,85 230,85 125,25" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="16" y="90" stroke="none" font-style="italic">A</text>
  <text x="235" y="90" stroke="none" font-style="italic">B</text>
  <text x="121" y="18" stroke="none" font-style="italic">C</text>
  <text x="126" y="102" stroke="none">2</text>
  <text x="58" y="80" stroke="none" font-style="italic">x</text>
  <text x="190" y="80" stroke="none">π/6</text>
</svg>`,
        solution:
          "∠$ACB = \\pi - \\frac{\\pi}{6} - x = \\frac{5\\pi}{6} - x$.<br>" +
          "By the sine rule:<br>" +
          "$\\frac{AC}{\\sin\\frac{\\pi}{6}} = \\frac{2}{\\sin\\left(\\frac{5\\pi}{6} - x\\right)}$<br>" +
          "$\\frac{AC}{\\frac{1}{2}} = \\frac{2}{\\sin\\frac{5\\pi}{6}\\cos x - \\cos\\frac{5\\pi}{6}\\sin x} = \\frac{2}{\\frac{1}{2}\\cos x - \\left(-\\frac{\\sqrt{3}}{2}\\right)\\sin x}$<br>" +
          "$AC = \\frac{2}{\\cos x + \\sqrt{3}\\sin x}$ (shown)."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Given that $x$ is a sufficiently small angle, show that $AC \\approx a + bx + cx^2$, where $a$, $b$ and $c$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "2", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "-2*sqrt(3)", exactRequired: true, placeholder: "Exact value" },
          { label: "c =", answer: "7", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "For small $x$, $\\cos x \\approx 1 - \\frac{1}{2}x^2$ and $\\sin x \\approx x$:<br>" +
          "$AC \\approx \\frac{2}{\\left(1 - \\frac{1}{2}x^2\\right) + \\sqrt{3}x} = 2\\left[1 + \\left(\\sqrt{3}x - \\frac{1}{2}x^2\\right)\\right]^{-1}$<br>" +
          "$= 2\\left[1 - \\left(\\sqrt{3}x - \\frac{1}{2}x^2\\right) + \\left(\\sqrt{3}x - \\frac{1}{2}x^2\\right)^2 + \\dots\\right]$<br>" +
          "$\\approx 2\\left(1 - \\sqrt{3}x + \\frac{1}{2}x^2 + 3x^2\\right) = 2 - 2\\sqrt{3}x + 7x^2$.<br>" +
          "Hence $a = 2$, $b = -2\\sqrt{3}$ and $c = 7$."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "It is given that $2xy + \\ln y = \\ln 3$. Show that<br>$$(2xy^2 + y)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 4y^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} - \\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 0.$$Hence find the Maclaurin series for $y$, up to and including the term in $x^2$.",
        type: "self",
        solution:
          "Differentiating $2xy + \\ln y = \\ln 3$ implicitly with respect to $x$:<br>" +
          "$2x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2y + \\frac{1}{y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$.<br><br>" +
          "Differentiating with respect to $x$ again:<br>" +
          "$2x\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\frac{1}{y}\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} - \\frac{1}{y^2}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 0$.<br>" +
          "Multiplying throughout by $y^2$:<br>" +
          "$(2xy^2 + y)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 4y^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} - \\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 0$ (shown).<br><br>" +
          "When $x = 0$: $\\ln y = \\ln 3 \\implies y = 3$.<br>" +
          "$0 + 2(3) + \\frac{1}{3}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -18$.<br>" +
          "$3\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 4(3)^2(-18) - (-18)^2 = 0 \\implies 3\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 972 \\implies \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 324$.<br><br>" +
          "Therefore, $y = 3 - 18x + \\frac{324}{2!}x^2 + \\dots = 3 - 18x + 162x^2 + \\dots$"
      }
    ]
  },

  // ==================== Q3 ====================
  {
    id: "RI-2025-P2-Q3",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "The terms of the sequence $U$ are given by<br>$$u_1 = k \\quad \\text{and} \\quad u_{n+1} = \\frac{8u_n - 14}{u_n - 1}, \\quad n \\ge 1.$$",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Describe the behaviour of the sequence $U$ for $k = 3$.",
        type: "self",
        solution: "For $k = 3$, the terms of sequence $U$ are strictly increasing and converging to $7$."
      },
      {
        label: "(a)(ii)",
        marks: 1,
        prompt: "Describe the behaviour of the sequence $U$ for $k = 10$.",
        type: "self",
        solution: "For $k = 10$, the terms of sequence $U$ are strictly decreasing and converging to $7$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the possible value(s) of $k$ if the sequence $U$ is a constant sequence.",
        type: "auto",
        mode: "number-list",
        answer: [2, 7],
        exactRequired: true,
        placeholder: "Separate values with a comma",
        solution:
          "For $U$ to be a constant sequence, $u_{n+1} = u_n = k$:<br>" +
          "$k = \\frac{8k - 14}{k - 1} \\implies k^2 - k = 8k - 14 \\implies k^2 - 9k + 14 = 0$<br>" +
          "$(k - 2)(k - 7) = 0 \\implies k = 2$ or $k = 7$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The $n$th term of the sequence $V$ is given by $v_n = \\frac{a^n}{b} + \\frac{b}{a(1 - a^n)} - \\frac{a}{n + 1}$, where $a$ and $b$ are non-zero real constants and $a \\ne \\pm 1$.<br><br>For some values of $a$, $v_n$ → $L$ as $n$ → ∞. Find, with justification, the range of values of $a$ for $L$ to exist, and state the value of $L$ in terms of $a$ and $b$.",
        type: "self",
        solution:
          "As $n$ → ∞, $\\frac{a}{n + 1}$ → $0$ for any constant $a$.<br>" +
          "• If $|a| > 1$, then $\\left|\\frac{a^n}{b}\\right|$ increases without bound as $n$ → ∞, so $V$ diverges.<br>" +
          "• If $-1 < a < 1$ and $a \\ne 0$, then $a^n$ → $0$ as $n$ → ∞, so $v_n$ → $0 + \\frac{b}{a(1 - 0)} - 0 = \\frac{b}{a}$.<br><br>" +
          "Hence the range of values of $a$ is $-1 < a < 1,\\, a \\ne 0$ (i.e. $(-1, 0) \\cup (0, 1)$), and $L = \\frac{b}{a}$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "The $n$th term of the sequence $W$ is given by<br>$w_n = u_n$ when $n$ is even,<br>$w_n = v_n$ when $n$ is odd.<br><br>It is given that the sequence $W$ converges when the sequences $U$ and $V$ converge to the same limit. The sequence $W$ diverges otherwise.<br><br>For $k = 10$, by using part (a)(ii) and part (c), find the range of values of $b$ for the sequence $W$ to converge. Hence explain whether $\\sum_{r=1}^{\\text{∞}} w_r$ is a convergent series.",
        type: "self",
        solution:
          "From (a)(ii), $u_n$ → $7$. From (c), $v_n$ → $\\frac{b}{a}$ for $-1 < a < 1,\\, a \\ne 0$.<br>" +
          "For $W$ to converge, $\\frac{b}{a} = 7 \\implies b = 7a$ with $-1 < a < 1$ and $a \\ne 0$.<br>" +
          "Hence $-7 < b < 0$ or $0 < b < 7$, i.e. $b \\in (-7, 0) \\cup (0, 7)$.<br><br>" +
          "Since the terms $w_r$ converge to a non-zero limit ($7 \\ne 0$) as $r$ → ∞, the sum of infinitely many terms close to $7$ grows arbitrarily large without bound. Hence the series $\\sum_{r=1}^{\\text{∞}} w_r$ is not convergent (it diverges)."
      }
    ]
  },

  // ==================== Q4 ====================
  {
    id: "RI-2025-P2-Q4",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Vectors"],
    diagramSvg: `<svg viewBox="0 0 300 185" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Slope plane parallelogram -->
  <polygon points="45,75 150,20 245,105 140,165" fill="rgba(91,155,213,0.12)" stroke="#2c2925" stroke-width="1.3"/>
  <!-- Dashed ground lines under slope -->
  <line x1="45" y1="75" x2="45" y2="140" stroke-dasharray="3,3" opacity="0.5"/>
  <line x1="45" y1="140" x2="140" y2="165" stroke-dasharray="3,3" opacity="0.5"/>
  <!-- Rectangular virtual screen standing on BC -->
  <polygon points="182,118 214,108 210,56 178,66" fill="rgba(207,86,82,0.18)" stroke="#cf5652" stroke-width="1.5"/>
  <!-- Line segment BC -->
  <line x1="182" y1="118" x2="214" y2="108" stroke="#2c2925" stroke-width="2"/>
  <circle cx="182" cy="118" r="2.8" fill="#2c2925" stroke="none"/>
  <circle cx="214" cy="108" r="2.8" fill="#2c2925" stroke="none"/>
  <!-- Point A -->
  <circle cx="78" cy="58" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="72" y="74" stroke="none" font-style="italic">A</text>
  <text x="176" y="133" stroke="none" font-style="italic">C</text>
  <text x="219" y="113" stroke="none" font-style="italic">B</text>
  <text x="58" y="122" stroke="none">slope</text>
  <line x1="88" y1="118" x2="104" y2="115" stroke-width="0.9"/>
  <text x="234" y="72" stroke="none">Virtual</text>
  <text x="234" y="85" stroke="none">screen</text>
  <line x1="212" y1="76" x2="231" y2="72" stroke-width="0.9"/>
</svg>`,
    stem: "In a computer game, a slope can be modelled as a plane $p$ containing three points, $A(1, 0, -3)$, $B(1, 4, -15)$ and $C(2, 3, -14)$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $p$ has equation $\\mathbf{r} \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} = -1$.",
        type: "self",
        solution:
          "$AB = \\begin{pmatrix} 0 \\\\ 4 \\\\ -12 \\end{pmatrix} = 4\\begin{pmatrix} 0 \\\\ 1 \\\\ -3 \\end{pmatrix}$ and $BC = \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}$.<br>" +
          "A normal vector to plane $p$ is $\\begin{pmatrix} 0 \\\\ 1 \\\\ -3 \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -3 \\\\ -1 \\end{pmatrix} = -\\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}$.<br>" +
          "Using point $A(1, 0, -3)$:<br>" +
          "$\\mathbf{r} \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\\\ -3 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} = 2 + 0 - 3 = -1$ (shown)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "In Stage 1 of the game, Griffles travels on the slope from $A$ along a path with equation $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 0 \\\\ -3 \\end{pmatrix} + \\lambda\\begin{pmatrix} 1 \\\\ m \\\\ n \\end{pmatrix}$, where $m$ and $n$ are constants and $\\lambda$ is a real parameter.<br><br>Find an equation relating $m$ and $n$.",
        type: "self",
        solution:
          "Since the path lies on plane $p$, its direction vector is perpendicular to the normal of $p$:<br>" +
          "$\\begin{pmatrix} 1 \\\\ m \\\\ n \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} = 0 \\implies 2 + 3m + n = 0$ (or $3m + n = -2$)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "In the rest of the question, it is given that $m = \\frac{1}{3}$, $n = -3$ and Griffles is modelled as a point travelling on the slope. An obstacle in the form of a rectangular virtual screen stands on the slope with its base modelled by the <strong>line segment</strong> $BC$ (see diagram).<br><br>By considering the <strong>line segment</strong> $BC$, show that Griffles is able to successfully navigate this obstacle without colliding into it.",
        type: "self",
        solution:
          "Griffles' path $l_1$ has equation $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 0 \\\\ -3 \\end{pmatrix} + \\mu\\begin{pmatrix} 3 \\\\ 1 \\\\ -9 \\end{pmatrix}$, $\\mu \\in \\text{ℝ}$.<br>" +
          "Line segment $BC$ has equation $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 4 \\\\ -15 \\end{pmatrix} + \\alpha\\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}$, $0 \\le \\alpha \\le 1$.<br><br>" +
          "Equating the two lines:<br>" +
          "$1 + 3\\mu = 1 + \\alpha \\implies 3\\mu - \\alpha = 0$<br>" +
          "$\\mu = 4 - \\alpha \\implies \\mu + \\alpha = 4$<br>" +
          "$-3 - 9\\mu = -15 + \\alpha \\implies -9\\mu - \\alpha = -12$.<br><br>" +
          "Solving gives $\\mu = 1$ and $\\alpha = 3$ (consistent across all three equations).<br>" +
          "Since $\\alpha = 3 > 1$, the point of intersection does not lie on the line segment $BC$. Hence Griffles does not collide with the obstacle."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "A laser gun with a sensor is mounted at the point $E(5, 2, 1)$ above the slope. The sensor is activated when an object is within a range of $5$ units.<br><br>Show that Griffles does not activate the sensor.",
        type: "self",
        solution:
          "$AE = \\begin{pmatrix} 5 \\\\ 2 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 0 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 4 \\end{pmatrix} = 2\\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix}$.<br>" +
          "Shortest distance from $E$ to Griffles' path $l_1$ is:<br>" +
          "$d = \\frac{\\left|AE \\times \\begin{pmatrix} 3 \\\\ 1 \\\\ -9 \\end{pmatrix}\\right|}{\\left|\\begin{pmatrix} 3 \\\\ 1 \\\\ -9 \\end{pmatrix}\\right|} = \\frac{2\\left|\\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix} \\times \\begin{pmatrix} 3 \\\\ 1 \\\\ -9 \\end{pmatrix}\\right|}{\\sqrt{9 + 1 + 81}} = \\frac{2\\left|\\begin{pmatrix} -11 \\\\ 24 \\\\ -1 \\end{pmatrix}\\right|}{\\sqrt{91}} = \\frac{2\\sqrt{698}}{\\sqrt{91}} \\approx 5.54$ units.<br><br>" +
          "Since the shortest distance $5.54 > 5$, Griffles is never within $5$ units of $E$ and hence does not activate the sensor."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "After completing Stage 1, Griffles is teleported to another slope. This slope can be modelled as a plane $q$ parallel to $p$ such that $E$ is equidistant from $p$ and $q$.<br><br>Find the cartesian equation of $q$.",
        type: "self",
        solution:
          "Since $q$ is parallel to $p$ and $E(5, 2, 1)$ is equidistant from $p$ and $q$, the reflection $A'$ of $A(1, 0, -3)$ in $E$ lies on $q$:<br>" +
          "$OA' = 2OE - OA = 2\\begin{pmatrix} 5 \\\\ 2 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 0 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 9 \\\\ 4 \\\\ 5 \\end{pmatrix}$.<br><br>" +
          "Equation of $q$: $\\mathbf{r} \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 9 \\\\ 4 \\\\ 5 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} = 18 + 12 + 5 = 35$.<br>" +
          "Cartesian equation of $q$ is $2x + 3y + z = 35$."
      }
    ]
  },

  // ==================== SECTION B: PROBABILITY AND STATISTICS ====================
  // ==================== Q5 ====================
  {
    id: "RI-2025-P2-Q5",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "A discrete random variable $X$ has the following probability distribution:<br>$$\\mathrm{P}(X = x) = k(x^2 + x) \\quad \\text{for } x = 1, 2, 3, 4, 5,$$where $k$ is a constant.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that $k = \\frac{1}{70}$.",
        type: "self",
        solution:
          "$\\sum_{x=1}^{5} \\mathrm{P}(X = x) = 1 \\implies k(2 + 6 + 12 + 20 + 30) = 1 \\implies 70k = 1 \\implies k = \\frac{1}{70}$ (shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the exact values of $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "E(X) =", answer: "4", exactRequired: true, placeholder: "Exact value" },
          { label: "Var(X) =", answer: "6/5", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "$\\mathrm{E}(X) = \\frac{1}{70}[1(2) + 2(6) + 3(12) + 4(20) + 5(30)] = \\frac{280}{70} = 4$.<br>" +
          "$\\mathrm{E}(X^2) = \\frac{1}{70}[1(2) + 4(6) + 9(12) + 16(20) + 25(30)] = \\frac{1204}{70} = 17.2$.<br>" +
          "$\\mathrm{Var}(X) = \\mathrm{E}(X^2) - [\\mathrm{E}(X)]^2 = 17.2 - 4^2 = 1.2$ (or $\\frac{6}{5}$)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Two independent observations $X_1$ and $X_2$ are taken of $X$. Find the probability that the difference between the two observations is at least $3$.",
        type: "auto",
        mode: "number",
        answer: "4/35",
        placeholder: "Exact or 3 s.f.",
        solution:
          "$\\mathrm{P}(|X_1 - X_2| \\ge 3)$<br>" +
          "$= 2[\\mathrm{P}(X_1 = 1, X_2 = 5) + \\mathrm{P}(X_1 = 1, X_2 = 4) + \\mathrm{P}(X_1 = 2, X_2 = 5)]$<br>" +
          "$= 2\\left(\\frac{2}{70}\\times\\frac{30}{70} + \\frac{2}{70}\\times\\frac{20}{70} + \\frac{6}{70}\\times\\frac{30}{70}\\right)$<br>" +
          "$= 2\\left(\\frac{60 + 40 + 180}{4900}\\right) = \\frac{560}{4900} = \\frac{4}{35}$ (or $0.114$)."
      }
    ]
  },

  // ==================== Q6 ====================
  {
    id: "RI-2025-P2-Q6",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations & Combinations"],
    diagramSvg: `<svg viewBox="0 0 380 120" width="380" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Fig. 1 -->
  <ellipse cx="42" cy="65" rx="20" ry="13" fill="none" stroke="#2c2925" stroke-width="2.2"/>
  <line x1="63" y1="65" x2="148" y2="65" stroke="#4a8fe7" stroke-width="3" stroke-dasharray="5,3"/>
  <!-- Bracket above Fig. 1 -->
  <path d="M 63,50 L 63,45 L 148,45 L 148,50" fill="none" stroke-width="1"/>
  <line x1="105.5" y1="45" x2="105.5" y2="40" stroke-width="1"/>
  <text x="20" y="46" stroke="none">Key ring</text>
  <text x="64" y="22" stroke="none">6 cm chain where</text>
  <text x="72" y="34" stroke="none">charms are threaded</text>
  <text x="86" y="110" stroke="none" font-weight="bold">Fig. 1</text>

  <!-- Fig. 2 -->
  <ellipse cx="225" cy="65" rx="20" ry="13" fill="none" stroke="#2c2925" stroke-width="2.2"/>
  <!-- 2 large (r=16, d=32) + 2 medium (r=8, d=16) = 96px total -->
  <circle cx="261" cy="65" r="16" fill="rgba(91,155,213,0.22)" stroke="#2c2925" stroke-width="1.3"/>
  <circle cx="293" cy="65" r="16" fill="rgba(76,168,133,0.25)" stroke="#2c2925" stroke-width="1.3"/>
  <circle cx="317" cy="65" r="8" fill="rgba(91,155,213,0.35)" stroke="#2c2925" stroke-width="1.3"/>
  <circle cx="333" cy="65" r="8" fill="rgba(207,86,82,0.25)" stroke="#2c2925" stroke-width="1.3"/>
  <!-- Top bracket 6 cm -->
  <path d="M 245,44 L 245,39 L 341,39 L 341,44" fill="none" stroke-width="1"/>
  <text x="281" y="34" stroke="none">6 cm</text>
  <text x="203" y="46" stroke="none">Key ring</text>
  <text x="260" y="96" stroke="none">2 large</text>
  <text x="307" y="96" stroke="none">2 medium</text>
  <text x="275" y="110" stroke="none" font-weight="bold">Fig. 2 (for part c)</text>
</svg>`,
    stem: "Kitty has $5$ small, $3$ medium and $2$ large spherical charms and each of the $10$ charms is uniquely designed.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Kitty arranges all the charms in a circle on a corkboard with charms of the same sizes next to each other. How many ways are there for her to do so?",
        type: "auto",
        mode: "number",
        answer: "2880",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Group the charms by size into $3$ blocks.<br>" +
          "Number of ways to arrange $3$ blocks in a circle $= (3 - 1)! = 2!$.<br>" +
          "Internal arrangements within each block: $5!$, $3!$ and $2!$.<br>" +
          "Total number of ways $= 2! \\times 5! \\times 3! \\times 2! = 2 \\times 120 \\times 6 \\times 2 = 2880$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "On another occasion, Kitty arranges all the charms in a line at the base of a photo frame with none of the small charms next to each other. How many ways are there for her to do so?",
        type: "auto",
        mode: "number",
        answer: "86400",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "First arrange the $5$ medium and large charms in a line: $5!$ ways.<br>" +
          "This creates $6$ slots to place the $5$ small charms: $^6C_5 \\times 5! = 720$ ways.<br>" +
          "Total number of ways $= 5! \\times {}^6C_5 \\times 5! = 120 \\times 720 = 86400$."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The diameters of all the small, medium and large charms are $0.5$ cm, $1$ cm and $2$ cm respectively. Each of the spherical charms has a hole through its centre that allows it to be threaded through a chain.<br><br>Kitty makes a keychain that includes a $6$ cm chain with one end attached to a keyring, as shown in Fig. 1. It is given that the $6$ cm chain is fully threaded with charms, with no gaps between them, and is stretched taut in a straight line. For example, Fig. 2 shows the $6$ cm chain threaded with $2$ large and $2$ medium charms.<br><br>How many different ways can she make a keychain with at least one charm of each of the three sizes?",
        type: "auto",
        mode: "number",
        answer: "169200",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Let $s, m, l$ be the number of small, medium and large charms used, with $1 \\le s \\le 5$, $1 \\le m \\le 3$, $1 \\le l \\le 2$, and $0.5s + m + 2l = 6$.<br>" +
          "Note $s$ must be even ($s = 2$ or $4$). The valid cases are:<br>" +
          "• <strong>Case 1:</strong> $2$L, $1$M, $2$S ($4 + 1 + 1 = 6$ cm): $^2C_2 \\times {}^3C_1 \\times {}^5C_2 \\times 5! = 1 \\times 3 \\times 10 \\times 120 = 3600$.<br>" +
          "• <strong>Case 2:</strong> $1$L, $2$M, $4$S ($2 + 2 + 2 = 6$ cm): $^2C_1 \\times {}^3C_2 \\times {}^5C_4 \\times 7! = 2 \\times 3 \\times 5 \\times 5040 = 151200$.<br>" +
          "• <strong>Case 3:</strong> $1$L, $3$M, $2$S ($2 + 3 + 1 = 6$ cm): $^2C_1 \\times {}^3C_3 \\times {}^5C_2 \\times 6! = 2 \\times 1 \\times 10 \\times 720 = 14400$.<br><br>" +
          "Total number of ways $= 3600 + 151200 + 14400 = 169200$."
      }
    ]
  },

  // ==================== Q7 ====================
  {
    id: "RI-2025-P2-Q7",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "<strong>In this question you should state the parameters of any distributions you use.</strong><br><br>A snack company produces two types of potato chips, Rays and Luffles. The mass, in grams, of a regular packet of Rays follows the distribution $\\mathrm{N}(100, \\sigma^2)$ and the mass, in grams, of a regular packet of Luffles follows the distribution $\\mathrm{N}(120, 16)$. The masses of all regular packets of potato chips are independent of one another.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "If the probability of the mass of a randomly chosen packet of Rays not exceeding $(100 - \\sigma^2)$ grams is less than $0.2$, find the possible range of values of $\\sigma$.",
        type: "self",
        solution:
          "Let $R \\sim \\mathrm{N}(100, \\sigma^2)$.<br>" +
          "$\\mathrm{P}(R \\le 100 - \\sigma^2) < 0.2$<br>" +
          "$\\mathrm{P}\\left(Z \\le \\frac{(100 - \\sigma^2) - 100}{\\sigma}\\right) < 0.2 \\implies \\mathrm{P}(Z \\le -\\sigma) < 0.2$.<br>" +
          "From GC, $\\mathrm{P}(Z \\le -0.84162) = 0.2$.<br>" +
          "Hence $-\\sigma < -0.84162 \\implies \\sigma > 0.842$ (3 s.f.)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "It is given that $\\sigma = 3$ for the rest of this question.<br><br>Find the probability that the total mass of $2$ randomly chosen regular packets of Rays and $3$ randomly chosen packets of Luffles is greater than $0.55$ kg.",
        type: "auto",
        mode: "number",
        answer: "0.890823",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Let $T = R_1 + R_2 + L_1 + L_2 + L_3$.<br>" +
          "$\\mathrm{E}(T) = 2(100) + 3(120) = 560$,<br>" +
          "$\\mathrm{Var}(T) = 2(3^2) + 3(16) = 18 + 48 = 66$.<br>" +
          "So $T \\sim \\mathrm{N}(560, 66)$.<br>" +
          "$\\mathrm{P}(T > 550) = 0.89082 \\approx 0.891$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The snack company decides to launch a new product called Mega Jumbo Pack, which consists of $(24 - n)$ regular packets of Rays and $n$ regular packets of Luffles. It is given that the probability of the mass of a Mega Jumbo Pack exceeding $20$ times the mass of a regular packet of Luffles by more than $500$ g is at least $0.1$. Find the minimum value of $n$.",
        type: "auto",
        mode: "number",
        answer: "20",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Let $M$ be the mass of a Mega Jumbo Pack.<br>" +
          "$\\mathrm{E}(M) = (24 - n)(100) + 120n = 2400 + 20n$,<br>" +
          "$\\mathrm{Var}(M) = (24 - n)(9) + 16n = 216 + 7n$.<br>" +
          "So $M \\sim \\mathrm{N}(2400 + 20n,\\, 216 + 7n)$.<br><br>" +
          "Consider $M - 20L$:<br>" +
          "$\\mathrm{E}(M - 20L) = (2400 + 20n) - 20(120) = 20n$,<br>" +
          "$\\mathrm{Var}(M - 20L) = (216 + 7n) + 20^2(16) = 6616 + 7n$.<br>" +
          "So $M - 20L \\sim \\mathrm{N}(20n,\\, 6616 + 7n)$.<br><br>" +
          "We require $\\mathrm{P}(M - 20L > 500) \\ge 0.1$:<br>" +
          "$\\mathrm{P}\\left(Z > \\frac{500 - 20n}{\\sqrt{6616 + 7n}}\\right) \\ge 0.1 \\implies \\frac{500 - 20n}{\\sqrt{6616 + 7n}} \\le 1.28155$.<br>" +
          "Solving via GC gives $n \\ge 19.734$ (or checking: $n = 19 \\implies 0.0720 < 0.1$; $n = 20 \\implies 0.1119 \\ge 0.1$).<br>" +
          "Hence the minimum value of $n$ is $20$."
      }
    ]
  },

  // ==================== Q8 ====================
  {
    id: "RI-2025-P2-Q8",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "A small cafe sells one type of coffee. The selling price of a cup of coffee is reviewed and adjusted at the beginning of every year depending on market conditions. Based on sales figures collected over $7$ years, the cafe owner, Mr Tay, studied the effect of the selling price of a cup of coffee, SGD $x$, on the average number of cups, $y$ cups, sold per day within the year. The data is shown in the table below.<br><div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>2.0</td><td>2.2</td><td>2.5</td><td>3.0</td><td>4.0</td><td>4.4</td><td>4.5</td></tr><tr><th>$y$</th><td>280</td><td>250</td><td>190</td><td>150</td><td>90</td><td>100</td><td>70</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Draw a scatter diagram of the data.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 220" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- x in [1.8, 4.7] -> px = 45 + (x-1.8)*95; y in [40, 300] -> py = 190 - (y-40)*0.64 -->
  <line x1="45" y1="190" x2="325" y2="190" stroke-width="1.2"/>
  <polyline points="319,186 325,190 319,194" fill="none" stroke-width="1.2"/>
  <line x1="45" y1="190" x2="45" y2="15" stroke-width="1.2"/>
  <polyline points="41,21 45,15 49,21" fill="none" stroke-width="1.2"/>
  <text x="322" y="205" stroke="none" font-style="italic">x</text>
  <text x="33" y="20" stroke="none" font-style="italic">y</text>
  <!-- x ticks: 2.0(64), 2.5(111.5), 3.0(159), 3.5(206.5), 4.0(254), 4.5(301.5) -->
  <line x1="64" y1="187" x2="64" y2="193"/><text x="56" y="205" stroke="none">2.0</text>
  <line x1="111.5" y1="187" x2="111.5" y2="193"/><text x="103" y="205" stroke="none">2.5</text>
  <line x1="159" y1="187" x2="159" y2="193"/><text x="151" y="205" stroke="none">3.0</text>
  <line x1="206.5" y1="187" x2="206.5" y2="193"/><text x="198" y="205" stroke="none">3.5</text>
  <line x1="254" y1="187" x2="254" y2="193"/><text x="246" y="205" stroke="none">4.0</text>
  <line x1="301.5" y1="187" x2="301.5" y2="193"/><text x="293" y="205" stroke="none">4.5</text>
  <!-- y ticks: 60(177.2), 100(151.6), 140(126), 180(100.4), 220(74.8), 260(49.2), 280(36.4) -->
  <line x1="42" y1="177.2" x2="48" y2="177.2"/><text x="22" y="181" stroke="none">60</text>
  <line x1="42" y1="151.6" x2="48" y2="151.6"/><text x="18" y="155" stroke="none">100</text>
  <line x1="42" y1="126" x2="48" y2="126"/><text x="18" y="130" stroke="none">140</text>
  <line x1="42" y1="100.4" x2="48" y2="100.4"/><text x="18" y="104" stroke="none">180</text>
  <line x1="42" y1="74.8" x2="48" y2="74.8"/><text x="18" y="78" stroke="none">220</text>
  <line x1="42" y1="49.2" x2="48" y2="49.2"/><text x="18" y="53" stroke="none">260</text>
  <!-- Data points:
       (2.0, 280)->(64, 36.4)
       (2.2, 250)->(83, 55.6)
       (2.5, 190)->(111.5, 94.0)
       (3.0, 150)->(159, 119.6)
       (4.0, 90)->(254, 158.0)
       (4.4, 100)->(292, 151.6) [outlier P]
       (4.5, 70)->(301.5, 170.8) -->
  <circle cx="64" cy="36.4" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="83" cy="55.6" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="111.5" cy="94.0" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="159" cy="119.6" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="254" cy="158.0" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="292" cy="151.6" r="3.8" fill="#cf5652" stroke="none"/>
  <circle cx="301.5" cy="170.8" r="3.2" fill="#4ca885" stroke="none"/>
  <text x="72" y="39" stroke="none">(2.0, 280)</text>
  <text x="278" y="143" stroke="none" fill="#cf5652">P(4.4, 100)</text>
  <text x="275" y="184" stroke="none">(4.5, 70)</text>
</svg>`,
        solution:
          "Plot all $7$ points accurately to scale with axes labelled $x$ and $y$, clearly indicating the first point $(2.0, 280)$ and last point $(4.5, 70)$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Mr Tay realised that one of the values of $y$ has been wrongly stated in the data table.<br><br>Indicate the corresponding point on your diagram by labelling it $P$. Explain why the scatter diagram for the remaining points may be consistent with a model of the form $y = a + \\frac{b}{x}$, where $a$ and $b$ are constants.",
        type: "self",
        solution:
          "The outlier point is $P(4.4, 100)$.<br>" +
          "For the remaining $6$ points, as $x$ increases, $y$ decreases by decreasing amounts (concave upward decreasing trend). Hence the data may be consistent with a model of the form $y = a + \\frac{b}{x}$ (with $b > 0$)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Omitting $P$, calculate the product moment correlation coefficient and the least squares estimates of $a$ and $b$ for the model $y = a + \\frac{b}{x}$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "r =", answer: "0.997114", placeholder: "Correct to 3 s.f." },
          { label: "a =", answer: "-100.81695", placeholder: "Correct to 3 s.f." },
          { label: "b =", answer: "756.86355", placeholder: "Correct to 3 s.f." }
        ],
        solution:
          "Using GC for linear regression of $y$ on $\\frac{1}{x}$ with the $6$ remaining points:<br>" +
          "• Product moment correlation coefficient: $r = 0.99711 \\approx 0.997$ (3 s.f.).<br>" +
          "• Least squares estimates: $a = -100.817 \\approx -101$ (3 s.f.) and $b = 756.864 \\approx 757$ (3 s.f.)."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Use the model $y = a + \\frac{b}{x}$ with the values of $a$ and $b$ found in part (c) to estimate the value of $y$ that has been wrongly stated in the data table. Give two reasons why you would expect this estimate to be reliable.",
        type: "self",
        solution:
          "When $x = 4.4$, $y = -100.81695 + \\frac{756.86355}{4.4} = 71.197 \\approx 71.2$ (3 s.f.) (or $71$ to the nearest integer).<br><br>" +
          "The estimate is expected to be reliable because:<br>" +
          "1. $x = 4.4$ lies within the given data range of $x$, $[2.0, 4.5]$ (interpolation).<br>" +
          "2. The product moment correlation coefficient $r = 0.997$ is very close to $1$, indicating a strong positive linear correlation between $\\frac{1}{x}$ and $y$."
      }
    ]
  },

  // ==================== Q9 ====================
  {
    id: "RI-2025-P2-Q9",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Hypothesis Testing"],
    stem: "Based on observations over a long period, the mean time taken by male students in Griffles Junior College (GJC) to complete a $2.4$ km run is known to be $11.3$ minutes with a standard deviation of $2.2$ minutes. As part of a review of the current physical training programme, the Physical Education (PE) department in GJC decided to test, at the $2.5\\%$ level of significance, whether the mean time taken by male students in GJC to complete a $2.4$ km run has changed. The time taken, $x$ minutes, by a random sample of $8$ Year 5 male students from GJC to complete a $2.4$ km run, are as follows:<br><div class='q-table-wrap'><table class='q-table'><tr><td>11</td><td>11.5</td><td>10.8</td><td>11.2</td><td>11.4</td><td>11</td><td>11.8</td><td>12.5</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Write down the null and alternative hypotheses for this test, defining any symbols you use.",
        type: "self",
        solution:
          "Let $\\mu$ be the population mean time, in minutes, taken by male students in GJC to complete a $2.4$ km run.<br>" +
          "$\\mathrm{H}_0: \\mu = 11.3$<br>" +
          "$\\mathrm{H}_1: \\mu \\ne 11.3$"
      },
      {
        label: "(b)",
        marks: 6,
        prompt: "Stating a necessary assumption, find the critical region for this test. Hence state the conclusion of the test in the context of the question.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 135" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Baseline -->
  <line x1="20" y1="105" x2="280" y2="105" stroke-width="1.2"/>
  <polyline points="274,101 280,105 274,109" fill="none" stroke-width="1.2"/>
  <!-- Shaded left tail x <= 78 -->
  <path d="M 30,105 C 50,104 66,98 78,86 L 78,105 Z" fill="rgba(207,86,82,0.35)" stroke="none"/>
  <!-- Shaded right tail x >= 222 -->
  <path d="M 222,86 C 234,98 250,104 270,105 L 222,105 Z" fill="rgba(207,86,82,0.35)" stroke="none"/>
  <!-- Bell curve -->
  <path d="M 30,105 C 75,103 108,24 150,24 C 192,24 225,103 270,105" fill="none" stroke="#4ca885" stroke-width="2"/>
  <!-- Center line & critical lines -->
  <line x1="150" y1="24" x2="150" y2="105" stroke-dasharray="3,3" opacity="0.6"/>
  <line x1="78" y1="86" x2="78" y2="105" stroke="#cf5652" stroke-width="1.2"/>
  <line x1="222" y1="86" x2="222" y2="105" stroke="#cf5652" stroke-width="1.2"/>
  <text x="140" y="121" stroke="none">11.3</text>
  <text x="64" y="121" stroke="none">9.56</text>
  <text x="210" y="121" stroke="none">13.0</text>
  <text x="34" y="88" stroke="none" fill="#cf5652">0.0125</text>
  <text x="232" y="88" stroke="none" fill="#cf5652">0.0125</text>
</svg>`,
        solution:
          "Let $X$ be the time taken (in minutes) by a male student in GJC to complete a $2.4$ km run.<br>" +
          "<strong>Necessary assumption:</strong> Since the sample size $n = 8$ is small, we assume that $X$ follows a normal distribution.<br><br>" +
          "From the sample, $\\bar{x} = \\frac{11 + 11.5 + 10.8 + 11.2 + 11.4 + 11 + 11.8 + 12.5}{8} = 11.4$.<br>" +
          "Under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(11.3,\\, \\frac{2.2^2}{8}\\right)$.<br>" +
          "For a 2-tail test at $2.5\\%$ significance level, $\\mathrm{P}(\\bar{X} \\le c_1) = 0.0125$ and $\\mathrm{P}(\\bar{X} \\ge c_2) = 0.0125$.<br>" +
          "From GC, $c_1 = 9.5566 \\approx 9.56$ and $c_2 = 13.043 \\approx 13.0$.<br>" +
          "Critical region: $\\{\\bar{x} : 0 < \\bar{x} \\le 9.56 \\text{ or } \\bar{x} \\ge 13.0\\}$ (or $(0, 9.56] \\cup [13.0, \\text{∞})$).<br><br>" +
          "Since $\\bar{x} = 11.4$ does not lie in the critical region, we do not reject $\\mathrm{H}_0$ and conclude that there is insufficient evidence, at the $2.5\\%$ level of significance, that the population mean time taken by male students in GJC to complete a $2.4$ km run has changed."
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "The PE department in GJC also conducted a second test, at the $3\\%$ level of significance, to determine whether the mean time taken by female students in GJC to complete a $2.4$ km run is less than $14.5$ minutes. A random sample of $n$ female students from GJC is taken, where $n$ is large. The mean and standard deviation of the time taken by this sample to complete a $2.4$ km run are found to be $14.2$ minutes and $1.5$ minutes respectively.<br><br>Given that the PE department concludes that the mean time taken by female students to complete a $2.4$ km run is less than $14.5$ minutes, find the range of values that $n$ can take.",
        type: "self",
        solution:
          "Let $\\mu_Y$ be the population mean time for female students.<br>" +
          "$\\mathrm{H}_0: \\mu_Y = 14.5$ vs $\\mathrm{H}_1: \\mu_Y < 14.5$ (1-tail test at $3\\%$ level).<br>" +
          "Sample mean $\\bar{y} = 14.2$; unbiased estimate of population variance $s^2 = \\frac{n}{n - 1}(1.5^2)$.<br><br>" +
          "Under $\\mathrm{H}_0$, since $n$ is large, by Central Limit Theorem:<br>" +
          "$\\bar{Y} \\sim \\mathrm{N}\\left(14.5,\\, \\frac{s^2}{n}\\right) = \\mathrm{N}\\left(14.5,\\, \\frac{1.5^2}{n - 1}\\right)$ approximately.<br><br>" +
          "Since $\\mathrm{H}_0$ is rejected, $p$-value $= \\mathrm{P}(\\bar{Y} \\le 14.2) \\le 0.03$:<br>" +
          "$\\frac{14.2 - 14.5}{1.5 / \\sqrt{n - 1}} \\le -1.88079 \\implies -0.2\\sqrt{n - 1} \\le -1.88079$<br>" +
          "$\\sqrt{n - 1} \\ge 9.40397 \\implies n - 1 \\ge 88.435 \\implies n \\ge 89.435$.<br>" +
          "Since $n$ is a positive integer, $n \\ge 90$, $n \\in \\text{ℤ}^+$."
      }
    ]
  },

  // ==================== Q10 ====================
  {
    id: "RI-2025-P2-Q10",
    year: 2025,
    school: "RI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Probability", "Binomial Distribution", "Sampling & CLT"],
    stem: "A bag contains $4$ identical red balls and $6$ identical blue balls.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "In the first game, the balls are randomly picked by a player from the bag, one at a time, without replacement, until there are no balls left in the bag.<br><br>Find the probability that the last ball picked is red.",
        type: "auto",
        mode: "number",
        answer: "2/5",
        placeholder: "Exact or 3 s.f.",
        solution:
          "By symmetry, $\\mathrm{P}(\\text{last ball is red}) = \\mathrm{P}(\\text{first ball is red}) = \\frac{4}{10} = \\frac{2}{5}$."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Find the probability that in the first five picks, exactly $2$ blue balls are picked given that at least $3$ red balls are picked.",
        type: "auto",
        mode: "number",
        answer: "10/11",
        placeholder: "Exact or 3 s.f.",
        solution:
          "$\\mathrm{P}(\\text{exactly 2 blue} \\mid \\text{at least 3 red}) = \\frac{\\mathrm{P}(2\\text{ blue and }3\\text{ red})}{\\mathrm{P}(2\\text{ blue and }3\\text{ red}) + \\mathrm{P}(1\\text{ blue and }4\\text{ red})}$<br>" +
          "$= \\frac{{}^6C_2 \\times {}^4C_3}{{}^6C_2 \\times {}^4C_3 + {}^6C_1 \\times {}^4C_4} = \\frac{15 \\times 4}{15 \\times 4 + 6 \\times 1} = \\frac{60}{66} = \\frac{10}{11}$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "In the second game, each ball picked by a player will be placed back into the bag before the next ball is picked. The player makes a total of $20$ random picks from the bag and the colour of each pick is recorded.<br><br>Find the probability that the colour red is recorded exactly $4$ times.",
        type: "auto",
        mode: "number",
        answer: "0.0349908",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Let $R$ be the number of times red is recorded in $20$ picks. Then $R \\sim \\mathrm{B}\\left(20, \\frac{2}{5}\\right)$.<br>" +
          "$\\mathrm{P}(R = 4) = {}^{20}C_4 \\left(\\frac{2}{5}\\right)^4 \\left(\\frac{3}{5}\\right)^{16} = 0.034991 \\approx 0.0350$ (3 s.f.)."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Find the probability that the colour red is recorded more than $4$ times but not more than $8$ times.",
        type: "auto",
        mode: "number",
        answer: "0.544647",
        placeholder: "Correct to 3 s.f.",
        solution:
          "$\\mathrm{P}(4 < R \\le 8) = \\mathrm{P}(R \\le 8) - \\mathrm{P}(R \\le 4) = 0.595599 - 0.050952 = 0.54465 \\approx 0.545$ (3 s.f.)."
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "Find the probability that the $8$th pick is the $6$th time the colour blue is recorded.",
        type: "auto",
        mode: "number",
        answer: "0.156764",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Let $S$ be the number of times blue is recorded in the first $7$ picks. Then $S \\sim \\mathrm{B}\\left(7, \\frac{3}{5}\\right)$.<br>" +
          "Required probability $= \\mathrm{P}(S = 5) \\times \\frac{3}{5} = {}^7C_5 \\left(\\frac{3}{5}\\right)^5 \\left(\\frac{2}{5}\\right)^2 \\times \\frac{3}{5} = 0.15676 \\approx 0.157$ (3 s.f.)."
      },
      {
        label: "(b)(iv)",
        marks: 4,
        prompt: "The second game is played by $50$ randomly chosen players. Estimate the probability that the average number of times the colour red is recorded is more than $8.5$.",
        type: "auto",
        mode: "number",
        answer: "0.0532916",
        placeholder: "Correct to 3 s.f.",
        solution:
          "For $R \\sim \\mathrm{B}\\left(20, \\frac{2}{5}\\right)$, $\\mathrm{E}(R) = 20\\left(\\frac{2}{5}\\right) = 8$ and $\\mathrm{Var}(R) = 20\\left(\\frac{2}{5}\\right)\\left(\\frac{3}{5}\\right) = 4.8$.<br>" +
          "Since $n = 50$ is large, by the Central Limit Theorem:<br>" +
          "$\\bar{R} \\sim \\mathrm{N}\\left(8,\\, \\frac{4.8}{50}\\right) = \\mathrm{N}(8,\\, 0.096)$ approximately.<br>" +
          "$\\mathrm{P}(\\bar{R} > 8.5) = 0.05329 \\approx 0.0533$ (3 s.f.)."
      }
    ]
  }
]);
