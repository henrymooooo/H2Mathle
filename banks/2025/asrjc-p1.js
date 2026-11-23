window.registerQuestions([
  {
    id: "ASRJC-2025-P1-Q1",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities", "Differentiation"],
    stem: "A cubic curve passes through the points $(2, 3)$ and $(-3, -22)$.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the equation of the curve if it has a stationary point at $(1, -6)$.",
        type: "self",
        solution:
          "Let $y = ax^3 + bx^2 + cx + d$.<br>" +
          "Passing through $(2, 3)$: $8a + 4b + 2c + d = 3$ &nbsp; --- (1)<br>" +
          "Passing through $(-3, -22)$: $-27a + 9b - 3c + d = -22$ &nbsp; --- (2)<br>" +
          "Passing through $(1, -6)$: $a + b + c + d = -6$ &nbsp; --- (3)<br>" +
          "Differentiating: $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3ax^2 + 2bx + c$.<br>" +
          "Since $(1, -6)$ is a stationary point, at $x = 1$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>" +
          "$3a + 2b + c = 0$ &nbsp; --- (4)<br>" +
          "Solving equations (1)–(4) using a GC gives $a = 2$, $b = 1$, $c = -8$, $d = -1$.<br>" +
          "$\\therefore$ The equation of the curve is $y = 2x^3 + x^2 - 8x - 1$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q2",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $\\cos 3\\theta = 4\\cos^3 \\theta - 3\\cos \\theta$.",
        type: "self",
        solution:
          "$\\cos 3\\theta = \\cos(2\\theta + \\theta)$<br>" +
          "$= \\cos 2\\theta \\cos \\theta - \\sin 2\\theta \\sin \\theta$<br>" +
          "$= (2\\cos^2 \\theta - 1)\\cos \\theta - (2\\sin \\theta \\cos \\theta)\\sin \\theta$<br>" +
          "$= 2\\cos^3 \\theta - \\cos \\theta - 2\\sin^2 \\theta \\cos \\theta$<br>" +
          "$= 2\\cos^3 \\theta - \\cos \\theta - 2(1 - \\cos^2 \\theta)\\cos \\theta$<br>" +
          "$= 2\\cos^3 \\theta - \\cos \\theta - 2\\cos \\theta + 2\\cos^3 \\theta$<br>" +
          "$= 4\\cos^3 \\theta - 3\\cos \\theta$ (shown)."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Hence, or otherwise, evaluate $\\int_0^{\\frac{\\pi}{6}} \\sin 2\\theta \\cos 3\\theta \\,\\mathrm{d}\\theta$ exactly.",
        type: "auto",
        mode: "number",
        answer: "3*sqrt(3)/10 - 2/5",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "$\\int_0^{\\frac{\\pi}{6}} \\sin 2\\theta \\cos 3\\theta \\,\\mathrm{d}\\theta = \\int_0^{\\frac{\\pi}{6}} (2\\sin\\theta\\cos\\theta)(4\\cos^3\\theta - 3\\cos\\theta)\\,\\mathrm{d}\\theta$<br>" +
          "$= \\int_0^{\\frac{\\pi}{6}} (8\\sin\\theta\\cos^4\\theta - 6\\sin\\theta\\cos^2\\theta)\\,\\mathrm{d}\\theta$<br>" +
          "$= \\left[-\\frac{8\\cos^5\\theta}{5} + 2\\cos^3\\theta\\right]_0^{\\frac{\\pi}{6}}$<br>" +
          "$= \\left(-\\frac{8}{5}\\left(\\frac{\\sqrt{3}}{2}\\right)^5 + 2\\left(\\frac{\\sqrt{3}}{2}\\right)^3\\right) - \\left(-\\frac{8}{5} + 2\\right)$<br>" +
          "$= -\\frac{9\\sqrt{3}}{20} + \\frac{3\\sqrt{3}}{4} - \\frac{2}{5} = \\frac{3\\sqrt{3}}{10} - \\frac{2}{5}$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q3",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Maclaurin Series"],
    diagramSvg: `<svg viewBox="0 0 260 220" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="12" fill="#2c2925" stroke="#2c2925">
      <circle cx="110" cy="120" r="70" fill="none" stroke="#2c2925" stroke-width="1.5"/>
      <line x1="110" y1="120" x2="180" y2="120" stroke="#2c2925" stroke-width="1.5"/>
      <line x1="180" y1="120" x2="180" y2="42" stroke="#2c2925" stroke-width="1.5"/>
      <line x1="110" y1="120" x2="180" y2="42" stroke="#2c2925" stroke-width="1.5"/>
      <line x1="180" y1="120" x2="156.7" y2="67.9" stroke="#4a8fe7" stroke-width="1.5"/>
      <path d="M 134 120 A 24 24 0 0 0 126.1 102.1" fill="none" stroke="#2c2925" stroke-width="1.2"/>
      <polyline points="172,120 172,112 180,112" fill="none" stroke="#2c2925" stroke-width="1.1"/>
      <circle cx="110" cy="120" r="2.2" fill="#2c2925"/>
      <circle cx="180" cy="120" r="2.2" fill="#2c2925"/>
      <circle cx="156.7" cy="67.9" r="2.2" fill="#2c2925"/>
      <circle cx="180" cy="42" r="2.2" fill="#2c2925"/>
      <text x="95" y="124" stroke="none" font-style="italic">O</text>
      <text x="186" y="124" stroke="none" font-style="italic">A</text>
      <text x="143" y="64" stroke="none" font-style="italic">B</text>
      <text x="184" y="42" stroke="none" font-style="italic">C</text>
      <text x="142" y="135" stroke="none" font-style="italic">r</text>
      <text x="135" y="114" stroke="none" font-style="italic">&#952;</text>
    </svg>`,
    stem: "For part (b), the diagram shows a circle, centre $O$ and radius $r$, with points $A$ and $B$ on the circumference such that ∠$AOB = \\theta$ radians, where $\\theta$ is small. $AC$ is a tangent to the circle at $A$ and $OBC$ is a straight line.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Given that $\\theta$ is small, show that $\\sec \\theta \\approx 1 + \\frac{1}{2}\\theta^2$.",
        type: "self",
        solution:
          "$\\sec\\theta = \\frac{1}{\\cos\\theta} \\approx \\left(1 - \\frac{\\theta^2}{2}\\right)^{-1}$ since $\\theta$ is small.<br>" +
          "$= 1 + (-1)\\left(-\\frac{\\theta^2}{2}\\right) + \\cdots \\approx 1 + \\frac{1}{2}\\theta^2$ (shown)."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Show that the length of chord $AB$ can be approximated by $r\\theta$.",
        type: "self",
        solution:
          "By the cosine rule on △$OAB$:<br>" +
          "$AB^2 = r^2 + r^2 - 2(r)(r)\\cos\\theta = 2r^2(1 - \\cos\\theta)$<br>" +
          "$AB = \\sqrt{2r^2(1 - \\cos\\theta)}$<br>" +
          "Since $\\theta$ is small, $\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}$:<br>" +
          "$AB \\approx \\sqrt{2r^2\\left(1 - \\left(1 - \\frac{\\theta^2}{2}\\right)\\right)} = \\sqrt{r^2\\theta^2} = r\\theta$ (shown)."
      },
      {
        label: "(b)(ii)",
        marks: 4,
        prompt: "Hence show that the perimeter of triangle $ABC$ can be approximated by $r\\theta(a + b\\theta)$, where $a$ and $b$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "2", exactRequired: true, placeholder: "Exact constant" },
          { label: "b =", answer: "1/2", exactRequired: true, placeholder: "Exact constant" }
        ],
        solution:
          "In right-angled △$OAC$: $AC = r\\tan\\theta$ and $OC = r\\sec\\theta$.<br>" +
          "$BC = OC - OB = r\\sec\\theta - r \\approx r\\left(1 + \\frac{1}{2}\\theta^2 - 1\\right) = \\frac{1}{2}r\\theta^2$.<br>" +
          "Perimeter of △$ABC = AB + BC + AC \\approx r\\theta + \\frac{1}{2}r\\theta^2 + r\\tan\\theta$.<br>" +
          "Since $\\theta$ is small, $\\tan\\theta \\approx \\theta$:<br>" +
          "Perimeter $\\approx r\\theta + \\frac{1}{2}r\\theta^2 + r\\theta = r\\theta\\left(2 + \\frac{1}{2}\\theta\\right)$.<br>" +
          "$\\therefore a = 2$ and $b = \\frac{1}{2}$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q4",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Differentiation"],
    stem: "The Folium of Descartes is a curve, defined by the equation $x^3 + y^3 = 3axy$, where $a$ is a real constant. It is given that $a \\ne 0$ for this question.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{ay - x^2}{y^2 - ax}$.",
        type: "self",
        solution:
          "Differentiating implicitly with respect to $x$:<br>" +
          "$3x^2 + 3y^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3ay + 3ax\\frac{\\mathrm{d}y}{\\mathrm{d}x}$<br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}x}(y^2 - ax) = ay - x^2$<br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{ay - x^2}{y^2 - ax}$ (shown)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The point $\\left(\\frac{3a}{2}, \\frac{3a}{2}\\right)$ lies on this curve. Show that the equation of the normal at this point on the curve is independent of the value of $a$.",
        type: "self",
        solution:
          "At $\\left(\\frac{3a}{2}, \\frac{3a}{2}\\right)$:<br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{a\\left(\\frac{3a}{2}\\right) - \\left(\\frac{3a}{2}\\right)^2}{\\left(\\frac{3a}{2}\\right)^2 - a\\left(\\frac{3a}{2}\\right)} = \\frac{-\\frac{3a^2}{4}}{\\frac{3a^2}{4}} = -1$.<br>" +
          "Gradient of normal $= -\\frac{1}{-1} = 1$.<br>" +
          "Equation of normal: $y - \\frac{3a}{2} = 1\\left(x - \\frac{3a}{2}\\right) \\implies y = x$, which is independent of the value of $a$ (shown)."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Given that the curve has a stationary point at $(pa, qa)$, where $p$ and $q$ are positive constants, find the exact values of $p$ and $q$. You need not determine the nature of this stationary point.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "p =", answer: "2^(1/3)", exactRequired: true, placeholder: "Exact value" },
          { label: "q =", answer: "2^(2/3)", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "At a stationary point, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies ay - x^2 = 0$.<br>" +
          "Substituting $(pa, qa)$: $a(qa) - (pa)^2 = 0 \\implies q = p^2$ (since $a \\ne 0$).<br>" +
          "Since $(pa, qa)$ lies on $x^3 + y^3 = 3axy$:<br>" +
          "$(pa)^3 + (qa)^3 = 3a(pa)(qa) \\implies p^3 + q^3 = 3pq$ (since $a \\ne 0$).<br>" +
          "Substituting $q = p^2$: $p^3 + p^6 = 3p^3 \\implies p^3(p^3 - 2) = 0$.<br>" +
          "Since $p > 0$, $p^3 = 2 \\implies p = 2^{\\frac{1}{3}}$ and $q = p^2 = 2^{\\frac{2}{3}}$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q5",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "The curve $C$ has equation given by $y = \\frac{1 + 3x - 18x^2}{9x + 3}$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Without the use of a calculator, find the range of values that $y$ can take.",
        type: "self",
        solution:
          "$9xy + 3y = 1 + 3x - 18x^2$<br>" +
          "$18x^2 + (9y - 3)x + (3y - 1) = 0$<br>" +
          "For real roots of $x$, discriminant $\\ge 0$:<br>" +
          "$(9y - 3)^2 - 4(18)(3y - 1) \\ge 0$<br>" +
          "$9(3y - 1)^2 - 72(3y - 1) \\ge 0$<br>" +
          "$9(3y - 1)(3y - 1 - 8) \\ge 0$<br>" +
          "$(3y - 1)(y - 3) \\ge 0$<br>" +
          "$\\therefore y \\le \\frac{1}{3}$ or $y \\ge 3$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch the graph of $C$ indicating clearly its asymptotes and stationary points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 260" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes -->
          <line x1="20" y1="150" x2="320" y2="150" stroke-width="1.2"/>
          <polyline points="314,146 320,150 314,154" fill="none" stroke-width="1.2"/>
          <line x1="170" y1="245" x2="170" y2="15" stroke-width="1.2"/>
          <polyline points="166,21 170,15 174,21" fill="none" stroke-width="1.2"/>
          <text x="323" y="154" stroke="none" font-style="italic">x</text>
          <text x="175" y="20" stroke="none" font-style="italic">y</text>
          <text x="158" y="162" stroke="none" font-style="italic">O</text>
          <!-- Vertical asymptote x = -1/3 at x=148.8 -->
          <line x1="148.8" y1="18" x2="148.8" y2="245" stroke="#cf5652" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.7"/>
          <text x="102" y="242" stroke="none" fill="#cf5652" font-style="italic">x = -1/3</text>
          <!-- Oblique asymptote y = -2x + 1: (-2.2, 5.4)->(30,42), (2.2, -3.4)->(310,218) -->
          <line x1="30" y1="42" x2="310" y2="218" stroke="#cf5652" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.7"/>
          <text x="32" y="70" stroke="none" fill="#cf5652" font-style="italic">y = -2x + 1</text>
          <!-- Left branch -->
          <polyline fill="none" stroke="#4a8fe7" stroke-width="2" points="36.4,43.5 44.0,48.1 51.6,52.7 59.3,57.2 66.9,61.7 74.5,66.2 82.2,70.6 89.8,74.8 97.5,78.9 105.1,82.7 112.7,86.2 117.8,88.1 122.9,89.5 127.6,90.0 130.5,89.7 133.1,88.8 135.6,86.9 138.2,83.3 140.7,76.5 143.3,61.9 145.4,35.0"/>
          <!-- Right branch -->
          <polyline fill="none" stroke="#4a8fe7" stroke-width="2" points="152.0,215.0 153.5,180.2 156.0,160.4 158.5,151.8 161.1,147.4 163.6,145.0 166.2,143.9 170.0,143.3 173.8,143.7 178.9,145.0 186.5,147.9 194.2,151.4 204.4,156.7 219.6,165.2 240.0,177.1 265.5,192.4 290.9,208.0 301.1,214.3"/>
          <!-- Stationary points -->
          <circle cx="127.6" cy="90.0" r="3" fill="#4a8fe7"/>
          <text x="72" y="106" stroke="none">(-2/3, 3)</text>
          <circle cx="170.0" cy="143.3" r="3" fill="#4a8fe7"/>
          <text x="176" y="138" stroke="none">(0, 1/3)</text>
        </svg>`,
        solution:
          "By long division, $y = \\frac{-18x^2 + 3x + 1}{9x + 3} = -2x + 1 - \\frac{2}{9x + 3}$.<br>" +
          "Asymptotes: $x = -\\frac{1}{3}$ and $y = -2x + 1$.<br>" +
          "From part (a), the stationary points occur at $y = 3$ and $y = \\frac{1}{3}$:<br>" +
          "• Minimum point at $\\left(-\\frac{2}{3}, 3\\right)$<br>" +
          "• Maximum point at $\\left(0, \\frac{1}{3}\\right)$ (also the $y$-intercept)<br>" +
          "• $x$-intercepts at $x = -\\frac{1}{6}$ and $x = \\frac{1}{3}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "State a sequence of transformations that will transform the curve $C$ to the curve with equation $y = \\frac{1 + 3(2x - 1) - 18(2x - 1)^2}{9(2x - 1) + 3}$.",
        type: "self",
        solution:
          "Let $y = \\mathrm{f}(x) = \\frac{1 + 3x - 18x^2}{9x + 3}$. The transformed curve is $y = \\mathrm{f}(2x - 1)$.<br>" +
          "<strong>Sequence 1:</strong><br>" +
          "1. Translation by $1$ unit in the positive $x$-direction ($\\mathrm{f}(x)$ → $\\mathrm{f}(x - 1)$).<br>" +
          "2. Scaling parallel to the $x$-axis by a scale factor of $\\frac{1}{2}$ ($\\mathrm{f}(x - 1)$ → $\\mathrm{f}(2x - 1)$).<br>" +
          "<strong>OR Sequence 2:</strong><br>" +
          "1. Scaling parallel to the $x$-axis by a scale factor of $\\frac{1}{2}$ ($\\mathrm{f}(x)$ → $\\mathrm{f}(2x)$).<br>" +
          "2. Translation by $\\frac{1}{2}$ unit in the positive $x$-direction ($\\mathrm{f}(2x)$ → $\\mathrm{f}(2(x - \\frac{1}{2})) = \\mathrm{f}(2x - 1)$)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q6",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "It is given that $\\sum_{r=1}^{n} \\frac{7r + 4}{r(r + 1)(r + 2)} = \\frac{9}{2} - \\frac{2}{n + 1} - \\frac{5}{n + 2}$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find $\\sum_{r=7}^{2n} \\frac{7r - 3}{r^3 - r}$ giving your answer in terms of $n$.",
        type: "auto",
        mode: "expr",
        vars: { n: [4, 5, 10] },
        answer: "22/21 - 1/n - 5/(2*n + 1)",
        placeholder: "Expression in terms of n",
        solution:
          "$\\sum_{r=7}^{2n} \\frac{7r - 3}{r^3 - r} = \\sum_{r=7}^{2n} \\frac{7r - 3}{(r - 1)r(r + 1)}$<br>" +
          "Replacing $r$ with $r + 1$:<br>" +
          "$= \\sum_{r=6}^{2n - 1} \\frac{7(r + 1) - 3}{r(r + 1)(r + 2)} = \\sum_{r=6}^{2n - 1} \\frac{7r + 4}{r(r + 1)(r + 2)}$<br>" +
          "$= \\sum_{r=1}^{2n - 1} \\frac{7r + 4}{r(r + 1)(r + 2)} - \\sum_{r=1}^{5} \\frac{7r + 4}{r(r + 1)(r + 2)}$<br>" +
          "$= \\left(\\frac{9}{2} - \\frac{2}{2n} - \\frac{5}{2n + 1}\\right) - \\left(\\frac{9}{2} - \\frac{2}{6} - \\frac{5}{7}\\right)$<br>" +
          "$= \\frac{2}{6} + \\frac{5}{7} - \\frac{1}{n} - \\frac{5}{2n + 1} = \\frac{22}{21} - \\frac{1}{n} - \\frac{5}{2n + 1}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Show algebraically that $(r + 1)^3 > r(r + 1)(r + 2)$ for all positive integers $r$.",
        type: "self",
        solution:
          "LHS $= (r + 1)^3 = r^3 + 3r^2 + 3r + 1$.<br>" +
          "RHS $= r(r + 1)(r + 2) = r^3 + 3r^2 + 2r$.<br>" +
          "LHS $-$ RHS $= r + 1 > 0$ since $r$ is a positive integer.<br>" +
          "$\\therefore (r + 1)^3 > r(r + 1)(r + 2)$ for all positive integers $r$ (shown)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Hence show that $\\sum_{r=1}^{n} \\frac{7r + 4}{(r + 1)^3} < \\frac{9}{2}$.",
        type: "self",
        solution:
          "From (b), $(r + 1)^3 > r(r + 1)(r + 2) > 0$ for all positive integers $r$.<br>" +
          "$\\implies \\frac{1}{(r + 1)^3} < \\frac{1}{r(r + 1)(r + 2)}$<br>" +
          "Since $7r + 4 > 0$, multiplying by $7r + 4$ and summing from $r = 1$ to $n$:<br>" +
          "$\\sum_{r=1}^{n} \\frac{7r + 4}{(r + 1)^3} < \\sum_{r=1}^{n} \\frac{7r + 4}{r(r + 1)(r + 2)} = \\frac{9}{2} - \\frac{2}{n + 1} - \\frac{5}{n + 2} < \\frac{9}{2}$<br>" +
          "since $\\frac{2}{n + 1} > 0$ and $\\frac{5}{n + 2} > 0$ for all positive integers $n$ (shown)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q7",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Integration"],
    diagramSvg: `<svg viewBox="0 0 320 240" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Origin at (150, 130), scale 40px per unit, radius=80 -->
      <!-- Shaded region A: arc from (-2,0)=(70,130) to (1,sqrt(3))=(190,60.7) and chord back -->
      <path d="M 70 130 A 80 80 0 0 1 190 60.7 L 70 130 Z" fill="rgba(91,155,213,0.28)" stroke="none"/>
      <!-- Axes -->
      <line x1="20" y1="130" x2="295" y2="130" stroke-width="1.2"/>
      <polyline points="289,126 295,130 289,134" fill="none" stroke-width="1.2"/>
      <line x1="150" y1="225" x2="150" y2="18" stroke-width="1.2"/>
      <polyline points="146,24 150,18 154,24" fill="none" stroke-width="1.2"/>
      <text x="299" y="134" stroke="none" font-style="italic">x</text>
      <text x="155" y="22" stroke="none" font-style="italic">y</text>
      <!-- Circle -->
      <circle cx="150" cy="130" r="80" fill="none" stroke="#2c2925" stroke-width="1.5"/>
      <!-- Line sqrt(3)y = x + 2: x=-3 -> (30, 153.1), x=2.6 -> (254, 23.8) -->
      <line x1="30" y1="153.1" x2="254" y2="23.8" stroke="#4a8fe7" stroke-width="1.6"/>
      <circle cx="190" cy="60.7" r="2.8" fill="#2c2925"/>
      <text x="160" y="42" stroke="none">(1, &#8730;3)</text>
      <text x="230" y="22" stroke="none" fill="#4a8fe7">&#8730;3 y = x + 2</text>
      <text x="215" y="198" stroke="none" font-style="italic">x&#178; + y&#178; = 4</text>
      <text x="118" y="84" stroke="none" font-weight="bold" fill="#2c2925">A</text>
    </svg>`,
    stem: "Curve $C$ is a circle with radius $2$ and centre at the origin with equation $x^2 + y^2 = 4$. Line $L$ has the equation $\\sqrt{3}y = x + 2$. The diagram shows the shaded region $A$ which is enclosed between $C$ and $L$.",
    parts: [
      {
        label: "(a)",
        marks: 6,
        prompt: "Use the substitution $x = 2\\sin\\theta$ to show that the area of region $A$ can be written in the expression $\\int_b^a 4\\cos^2\\theta \\,\\mathrm{d}\\theta - c$, where $a$, $b$ and $c$ are exact constants to be determined. Hence evaluate this area exactly.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "pi/6", exactRequired: true, placeholder: "Exact constant" },
          { label: "b =", answer: "-pi/2", exactRequired: true, placeholder: "Exact constant" },
          { label: "c =", answer: "3*sqrt(3)/2", exactRequired: true, placeholder: "Exact constant" },
          { label: "Area =", answer: "4*pi/3 - sqrt(3)", exactRequired: true, placeholder: "Exact area" }
        ],
        solution:
          "The circle $x^2 + y^2 = 4$ and line $\\sqrt{3}y = x + 2$ intersect at $(-2, 0)$ and $(1, \\sqrt{3})$.<br>" +
          "Area of region $A = \\int_{-2}^{1} \\sqrt{4 - x^2}\\,\\mathrm{d}x - \\text{area of triangle}$<br>" +
          "Area of triangle $= \\frac{1}{2}(1 - (-2))(\\sqrt{3}) = \\frac{3\\sqrt{3}}{2}$.<br>" +
          "Let $x = 2\\sin\\theta \\implies \\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = 2\\cos\\theta$.<br>" +
          "When $x = 1$, $\\theta = \\frac{\\pi}{6}$; when $x = -2$, $\\theta = -\\frac{\\pi}{2}$.<br>" +
          "Area $= \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{6}} \\sqrt{4 - 4\\sin^2\\theta}(2\\cos\\theta)\\,\\mathrm{d}\\theta - \\frac{3\\sqrt{3}}{2} = \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{6}} 4\\cos^2\\theta\\,\\mathrm{d}\\theta - \\frac{3\\sqrt{3}}{2}$.<br>" +
          "Thus $a = \\frac{\\pi}{6}$, $b = -\\frac{\\pi}{2}$, $c = \\frac{3\\sqrt{3}}{2}$.<br>" +
          "Evaluating:<br>" +
          "$\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{6}} 4\\cos^2\\theta\\,\\mathrm{d}\\theta - \\frac{3\\sqrt{3}}{2} = 2\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{6}} (\\cos 2\\theta + 1)\\,\\mathrm{d}\\theta - \\frac{3\\sqrt{3}}{2}$<br>" +
          "$= 2\\left[\\frac{\\sin 2\\theta}{2} + \\theta\\right]_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{6}} - \\frac{3\\sqrt{3}}{2} = 2\\left(\\frac{\\sqrt{3}}{4} + \\frac{\\pi}{6} + \\frac{\\pi}{2}\\right) - \\frac{3\\sqrt{3}}{2} = \\frac{4\\pi}{3} - \\sqrt{3}$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The region $B$ is bounded by the curve $C$, the line $L$ and the line $x = 2$. Find the volume generated when region $B$ is rotated through $2\\pi$ radians about the $y$-axis. Give your answer to two decimal places.",
        type: "auto",
        mode: "number",
        answer: "8.464397",
        dp: 2,
        placeholder: "Correct to 2 d.p.",
        solutionSvg: `<svg viewBox="0 0 300 220" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (120, 140), scale 40px/unit -->
          <!-- Region B: bounded by x=2 (200), line L from (1,sqrt3)=(160,70.7) to (2, 4/sqrt3)=(200, 47.6), and circle arc from (160,70.7) to (200,140) -->
          <path d="M 160 70.7 L 200 47.6 L 200 140 A 80 80 0 0 0 160 70.7 Z" fill="rgba(91,155,213,0.32)" stroke="none"/>
          <line x1="20" y1="140" x2="275" y2="140" stroke-width="1.2"/>
          <polyline points="269,136 275,140 269,144" fill="none" stroke-width="1.2"/>
          <line x1="120" y1="210" x2="120" y2="15" stroke-width="1.2"/>
          <polyline points="116,21 120,15 124,21" fill="none" stroke-width="1.2"/>
          <circle cx="120" cy="140" r="80" fill="none" stroke="#2c2925" stroke-width="1.4"/>
          <line x1="20" y1="151.5" x2="230" y2="30.3" stroke="#4a8fe7" stroke-width="1.5"/>
          <line x1="200" y1="47.6" x2="200" y2="140" stroke="#4a8fe7" stroke-width="1.5"/>
          <line x1="120" y1="47.6" x2="200" y2="47.6" stroke="#2c2925" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
          <line x1="120" y1="70.7" x2="160" y2="70.7" stroke="#2c2925" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
          <text x="278" y="144" stroke="none" font-style="italic">x</text>
          <text x="125" y="20" stroke="none" font-style="italic">y</text>
          <text x="108" y="153" stroke="none">0</text>
          <text x="203" y="153" stroke="none">2</text>
          <text x="86" y="51" stroke="none">4/&#8730;3</text>
          <text x="98" y="75" stroke="none">&#8730;3</text>
          <text x="182" y="84" stroke="none" font-weight="bold">B</text>
        </svg>`,
        solution:
          "At $x = 2$, line $L$ gives $y = \\frac{4}{\\sqrt{3}}$.<br>" +
          "Volume $= \\text{volume of cylinder} - \\pi\\int_{\\sqrt{3}}^{\\frac{4}{\\sqrt{3}}} (\\sqrt{3}y - 2)^2\\,\\mathrm{d}y - \\pi\\int_0^{\\sqrt{3}} (4 - y^2)\\,\\mathrm{d}y$<br>" +
          "$= \\pi(2)^2\\left(\\frac{4}{\\sqrt{3}}\\right) - \\pi\\int_{\\sqrt{3}}^{\\frac{4}{\\sqrt{3}}} (\\sqrt{3}y - 2)^2\\,\\mathrm{d}y - \\pi\\int_0^{\\sqrt{3}} (4 - y^2)\\,\\mathrm{d}y$<br>" +
          "$\\approx 8.4644 \\approx 8.46$ (2 d.p.)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q8",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "The ninth, fifth and second terms of an arithmetic progression are successive terms of a geometric progression with first term $a$ and common ratio $r$, where $r \\ne 1$ and $a > 0$. Find the value of $r$ and deduce that the geometric series is convergent.",
        type: "auto",
        mode: "number",
        answer: "3/4",
        exactRequired: true,
        placeholder: "Value of r",
        solution:
          "Let the first term and common difference of the AP be $b$ and $d$ respectively ($d \\ne 0$ since $r \\ne 1$).<br>" +
          "The 9th, 5th and 2nd terms are $b + 8d$, $b + 4d$ and $b + d$.<br>" +
          "Since they are successive terms of a GP:<br>" +
          "$\\frac{b + 4d}{b + 8d} = \\frac{b + d}{b + 4d}$<br>" +
          "$(b + 4d)^2 = (b + 8d)(b + d)$<br>" +
          "$b^2 + 8bd + 16d^2 = b^2 + 9bd + 8d^2$<br>" +
          "$d(8d - b) = 0 \\implies b = 8d$ (since $d \\ne 0$).<br>" +
          "$\\therefore r = \\frac{8d + 4d}{8d + 8d} = \\frac{12d}{16d} = \\frac{3}{4}$.<br>" +
          "Since $|r| = \\frac{3}{4} < 1$, the geometric series is convergent."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Using the value of $r$ found in (a)(i), find the least value of $n$ such that the sum of all the terms after the $n$th term of the geometric progression is less than $1\\%$ of its sum of the first $n$ terms.",
        type: "auto",
        mode: "number",
        answer: "17",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "We require $S_{\\text{inf}} - S_n < 0.01 S_n \\implies S_{\\text{inf}} < 1.01 S_n$.<br>" +
          "$\\frac{a}{1 - \\frac{3}{4}} < 1.01\\left[\\frac{a\\left(1 - \\left(\\frac{3}{4}\\right)^n\\right)}{1 - \\frac{3}{4}}\\right]$<br>" +
          "Since $a > 0$: $1 < 1.01\\left(1 - \\left(\\frac{3}{4}\\right)^n\\right)$<br>" +
          "$\\left(\\frac{3}{4}\\right)^n < 1 - \\frac{1}{1.01} = \\frac{1}{101} \\approx 0.009901$<br>" +
          "$n \\ln\\left(\\frac{3}{4}\\right) < \\ln\\left(\\frac{1}{101}\\right) \\implies n > \\frac{\\ln(1/101)}{\\ln(3/4)} \\approx 16.042$.<br>" +
          "$\\therefore$ Least value of $n$ is $17$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "The sum, $S_n$, of the first $n$ terms of another sequence is given by $S_n = n \\ln 2^{q(n + 1)}$, where $q$ is a constant. Prove that the sequence follows an arithmetic progression.",
        type: "self",
        solution:
          "$S_n = n(n + 1)q\\ln 2$.<br>" +
          "For $n \\ge 2$, $T_n = S_n - S_{n - 1} = n(n + 1)q\\ln 2 - (n - 1)nq\\ln 2$<br>" +
          "$= nq\\ln 2 \\left[(n + 1) - (n - 1)\\right] = 2nq\\ln 2$.<br>" +
          "Also $T_1 = S_1 = 2q\\ln 2$, which satisfies the formula.<br>" +
          "$T_n - T_{n - 1} = 2nq\\ln 2 - 2(n - 1)q\\ln 2 = 2q\\ln 2$, which is a constant independent of $n$ (since $q$ is a constant).<br>" +
          "$\\therefore$ The sequence follows an arithmetic progression (proved)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q9",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Vectors"],
    stem: "The line $\\ell$ has the equation $\\frac{x - a}{2} = y - 2 = \\frac{1 - 2z}{b}$, where $a$ and $b$ are real constants. The plane $\\pi$ has the equation $3x - y + 4z = 10$.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Given that the line $\\ell$ and the plane $\\pi$ do not intersect, show that $a \\ne \\frac{10}{3}$ and $b = \\frac{5}{2}$.",
        type: "self",
        solution:
          "Rewriting $\\ell$: $\\frac{x - a}{2} = \\frac{y - 2}{1} = \\frac{z - \\frac{1}{2}}{-\\frac{b}{2}}$.<br>" +
          "Vector equation of $\\ell$: $\\mathbf{r} = \\begin{pmatrix} a \\\\ 2 \\\\ \\frac{1}{2} \\end{pmatrix} + \\lambda \\begin{pmatrix} 2 \\\\ 1 \\\\ -\\frac{b}{2} \\end{pmatrix}$, $\\lambda \\in \\mathbb{R}$.<br>" +
          "Vector equation of $\\pi$: $\\mathbf{r} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix} = 10$.<br>" +
          "For $\\ell$ to be parallel to $\\pi$, $\\mathbf{d}_\\ell \\cdot \\mathbf{n}_\\pi = 0$:<br>" +
          "$\\begin{pmatrix} 2 \\\\ 1 \\\\ -\\frac{b}{2} \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix} = 0 \\implies 6 - 1 - 2b = 0 \\implies b = \\frac{5}{2}$.<br>" +
          "For $\\ell$ not to lie in $\\pi$, the point $\\left(a, 2, \\frac{1}{2}\\right)$ must not lie on $\\pi$:<br>" +
          "$\\begin{pmatrix} a \\\\ 2 \\\\ \\frac{1}{2} \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix} \\ne 10 \\implies 3a - 2 + 2 \\ne 10 \\implies a \\ne \\frac{10}{3}$ (shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "It is given that $a = 1$ and $b = 3$. Find the point of intersection between the line $\\ell$ and the plane $\\pi$.",
        type: "auto",
        mode: "tuple",
        answer: [-13, -5, 11],
        placeholder: "Coordinates (x, y, z)",
        solution:
          "With $a = 1$ and $b = 3$, $\\ell$: $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ \\frac{1}{2} \\end{pmatrix} + \\lambda \\begin{pmatrix} 2 \\\\ 1 \\\\ -\\frac{3}{2} \\end{pmatrix}$.<br>" +
          "Substituting into $3x - y + 4z = 10$:<br>" +
          "$3(1 + 2\\lambda) - (2 + \\lambda) + 4\\left(\\frac{1}{2} - \\frac{3}{2}\\lambda\\right) = 10$<br>" +
          "$3 + 6\\lambda - 2 - \\lambda + 2 - 6\\lambda = 10 \\implies -\\lambda = 7 \\implies \\lambda = -7$.<br>" +
          "Position vector of intersection $= \\begin{pmatrix} 1 \\\\ 2 \\\\ \\frac{1}{2} \\end{pmatrix} - 7\\begin{pmatrix} 2 \\\\ 1 \\\\ -\\frac{3}{2} \\end{pmatrix} = \\begin{pmatrix} -13 \\\\ -5 \\\\ 11 \\end{pmatrix}$.<br>" +
          "$\\therefore$ The point of intersection is $(-13, -5, 11)$."
      },
      {
        label: "(c)(i)",
        marks: 2,
        prompt: "It is given now that $a = 1$, $b = \\frac{5}{2}$. Find the distance between the line $\\ell$ and the plane $\\pi$.",
        type: "auto",
        mode: "number",
        answer: "7/sqrt(26)",
        placeholder: "Exact or 3 s.f.",
        solution:
          "Since $\\ell$ is parallel to $\\pi$, taking the point $\\left(1, 2, \\frac{1}{2}\\right)$ on $\\ell$:<br>" +
          "Distance $= \\frac{\\left|\\begin{pmatrix} 1 \\\\ 2 \\\\ \\frac{1}{2} \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix} - 10\\right|}{\\sqrt{3^2 + (-1)^2 + 4^2}} = \\frac{|3 - 2 + 2 - 10|}{\\sqrt{26}} = \\frac{7}{\\sqrt{26}}$ units ($\\approx 1.37$)."
      },
      {
        label: "(c)(ii)",
        marks: 3,
        prompt: "Determine whether the line $\\ell$ and the origin $O$ lie on the same side of the plane $\\pi$. State an equation of the other plane that is equidistant from line $\\ell$ and parallel to plane $\\pi$.",
        type: "self",
        solution:
          "Plane $\\pi$: $\\mathbf{r} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix} = 10$ (distance $\\frac{10}{\\sqrt{26}}$ from $O$).<br>" +
          "Plane parallel to $\\pi$ containing $\\ell$: $\\mathbf{r} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix} = 3$ (distance $\\frac{3}{\\sqrt{26}}$ from $O$ on the same side of $O$ as $\\pi$).<br>" +
          "Since $0 < 3 < 10$, the line $\\ell$ lies between $O$ and $\\pi$. Therefore, $\\ell$ and the origin $O$ lie on the <strong>same side</strong> of the plane $\\pi$.<br>" +
          "The other plane $\\pi'$ equidistant from $\\ell$ and parallel to $\\pi$ has constant $3 - (10 - 3) = -4$:<br>" +
          "$3x - y + 4z = -4$ (or $\\mathbf{r} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix} = -4$)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q10",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Functions", "Integration"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f} : x$ → $2x - \\frac{1}{2x}$, $0 < x < 2$. It is given that $\\mathrm{f}^{-1}$ exists.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Define $\\mathrm{f}^{-1}$ in a similar form.",
        type: "self",
        solution:
          "Let $y = 2x - \\frac{1}{2x} \\implies 4x^2 - 2xy - 1 = 0$.<br>" +
          "Using the quadratic formula: $x = \\frac{2y \\pm \\sqrt{4y^2 + 16}}{8} = \\frac{y \\pm \\sqrt{y^2 + 4}}{4}$.<br>" +
          "Since $0 < x < 2$, we take the positive root: $x = \\frac{y + \\sqrt{y^2 + 4}}{4}$.<br>" +
          "As $x$ → $0^+$, $y$ → $-∞$; at $x = 2$, $y = 4 - \\frac{1}{4} = \\frac{15}{4}$.<br>" +
          "Hence $\\mathrm{f}^{-1} : x$ → $\\frac{x}{4} + \\frac{1}{4}\\sqrt{x^2 + 4}$, $x < \\frac{15}{4}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Sketch the graphs of $y = \\mathrm{f}(x)$ and $y = \\mathrm{f}^{-1}(x)$ on the same diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 270" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (110, 178), scale 40px/unit -->
          <!-- Axes -->
          <line x1="20" y1="178" x2="285" y2="178" stroke-width="1.2"/>
          <polyline points="279,174 285,178 279,182" fill="none" stroke-width="1.2"/>
          <line x1="110" y1="255" x2="110" y2="12" stroke-width="1.2"/>
          <polyline points="106,18 110,12 114,18" fill="none" stroke-width="1.2"/>
          <text x="288" y="182" stroke="none" font-style="italic">x</text>
          <text x="115" y="17" stroke="none" font-style="italic">y</text>
          <text x="97" y="191" stroke="none" font-style="italic">O</text>
          <!-- y = x line: (-1.5,-1.5)->(50,238) to (4,4)->(270,18) -->
          <line x1="50" y1="238" x2="265" y2="23" stroke="#2c2925" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.6"/>
          <text x="242" y="24" stroke="none" font-style="italic">y = x</text>
          <!-- y = f(x) -->
          <polyline fill="none" stroke="#4a8fe7" stroke-width="2" points="120.4,234.1 122.8,214.9 125.2,200.2 127.6,188.3 130.0,178.0 132.4,168.9 134.8,160.7 137.2,153.0 139.6,145.8 142.0,139.0 146.8,126.1 151.6,114.0 156.4,102.4 161.2,91.2 168.4,74.9 175.6,59.0 182.8,43.4 190.0,28.0"/>
          <circle cx="190.0" cy="28.0" r="3.5" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
          <text x="148" y="24" stroke="none" fill="#4a8fe7">(2, 15/4)</text>
          <text x="122" y="92" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>
          <!-- y = f^-1(x) -->
          <polyline fill="none" stroke="#cf5652" stroke-width="2" points="53.9,167.6 73.1,165.2 87.8,162.8 99.7,160.4 110.0,158.0 119.1,155.6 127.3,153.2 135.0,150.8 142.2,148.4 149.0,146.0 155.5,143.6 168.0,138.8 179.8,134.0 196.8,126.8 213.1,119.6 229.0,112.4 244.6,105.2 260.0,98.0"/>
          <circle cx="260.0" cy="98.0" r="3.5" fill="#fff" stroke="#cf5652" stroke-width="1.8"/>
          <text x="242" y="90" stroke="none" fill="#cf5652">(15/4, 2)</text>
          <text x="208" y="138" stroke="none" fill="#cf5652" font-style="italic">y = f&#8315;&#185;(x)</text>
        </svg>`,
        solution:
          "$y = \\mathrm{f}(x)$ has vertical asymptote $x = 0$, $x$-intercept $\\left(\\frac{1}{2}, 0\\right)$, and open endpoint $\\left(2, \\frac{15}{4}\\right)$.<br>" +
          "$y = \\mathrm{f}^{-1}(x)$ is the reflection of $y = \\mathrm{f}(x)$ in the line $y = x$, with horizontal asymptote $y = 0$, $y$-intercept $\\left(0, \\frac{1}{2}\\right)$, and open endpoint $\\left(\\frac{15}{4}, 2\\right)$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The region $R$ is bounded by the curve $y = \\mathrm{f}^{-1}(x)$, $y = x$ and the $y$-axis. Find the exact area of $R$.",
        type: "auto",
        mode: "number",
        answer: "ln(2)/4",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "At the intersection of $y = \\mathrm{f}(x)$ and $y = x$: $x = 2x - \\frac{1}{2x} \\implies x = \\frac{1}{2x} \\implies x = \\frac{1}{\\sqrt{2}}$ (since $x > 0$).<br>" +
          "By symmetry in $y = x$, the area of $R$ equals the area bounded by $y = \\mathrm{f}(x)$, $y = x$ and the $x$-axis:<br>" +
          "$\\text{Area} = \\int_0^{\\frac{1}{\\sqrt{2}}} x\\,\\mathrm{d}x - \\int_{\\frac{1}{2}}^{\\frac{1}{\\sqrt{2}}} \\left(2x - \\frac{1}{2x}\\right)\\,\\mathrm{d}x$<br>" +
          "$= \\frac{1}{2}\\left(\\frac{1}{\\sqrt{2}}\\right)^2 - \\left[x^2 - \\frac{1}{2}\\ln|x|\\right]_{\\frac{1}{2}}^{\\frac{1}{\\sqrt{2}}}$<br>" +
          "$= \\frac{1}{4} - \\left[\\left(\\frac{1}{2} - \\frac{1}{2}\\ln\\frac{1}{\\sqrt{2}}\\right) - \\left(\\frac{1}{4} - \\frac{1}{2}\\ln\\frac{1}{2}\\right)\\right]$<br>" +
          "$= \\frac{1}{4} - \\left(\\frac{1}{4} + \\frac{1}{4}\\ln 2 - \\frac{1}{2}\\ln 2\\right) = \\frac{1}{4}\\ln 2$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Another function $\\mathrm{g}$ is defined by<br>$\\mathrm{g} : x$ → $\\frac{3}{2} + \\frac{3}{3x - 11}$ for $x \\le 3$, and $\\mathrm{g} : x$ → $\\left|x - \\frac{1}{3}x^2\\right|$ for $3 < x \\le 5$.<br>Show that the composite function $\\mathrm{gf}$ exists and find the range of $\\mathrm{gf}$.",
        type: "self",
        solution:
          "$\\mathrm{R}_\\mathrm{f} = (-∞, \\frac{15}{4})$ and $\\mathrm{D}_\\mathrm{g} = (-∞, 5]$.<br>" +
          "Since $\\mathrm{R}_\\mathrm{f} \\subseteq \\mathrm{D}_\\mathrm{g}$, the composite function $\\mathrm{gf}$ exists.<br>" +
          "For $x \\le 3$, $\\mathrm{g}(x) = \\frac{3}{2} + \\frac{3}{3x - 11}$ decreases from horizontal asymptote $y = \\frac{3}{2}$ (as $x$ → $-∞$) down to $\\mathrm{g}(3) = \\frac{3}{2} + \\frac{3}{-2} = 0$.<br>" +
          "For $3 < x < \\frac{15}{4}$, $\\mathrm{g}(x) = \\left|x - \\frac{1}{3}x^2\\right| = \\frac{1}{3}x^2 - x$ increases from $0$ to $\\mathrm{g}\\left(\\frac{15}{4}\\right) = \\frac{15}{16} < \\frac{3}{2}$.<br>" +
          "$\\therefore \\mathrm{R}_{\\mathrm{gf}} = \\left[0, \\frac{3}{2}\\right)$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P1-Q11",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "In a chemical reaction, compounds $X$ and $Y$ react to form a product. Let $x$ and $y$ denote the concentrations, in mol per kilolitres (mol/kL), of $X$ and $Y$ respectively, at time $t$ minutes after the start of the experiment. The initial concentrations of $X$ and $Y$ are given by $x_0$ and $y_0$ mol/kL.",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "In a particular experiment where $Y$ is present in excess, the reaction rate can be modeled as a pseudo-first-order reaction, leading to the differential equation $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -ax$, where $a$ is a positive constant. Solve this differential equation, expressing $x$ in terms of $t$, $x_0$ and $a$.",
        type: "self",
        solution:
          "$\\int \\frac{1}{x}\\,\\mathrm{d}x = \\int -a\\,\\mathrm{d}t$<br>" +
          "$\\ln x = -at + c$ (since $x > 0$)<br>" +
          "$x = A\\mathrm{e}^{-at}$, where $A = \\mathrm{e}^c$.<br>" +
          "When $t = 0$, $x = x_0 \\implies A = x_0$.<br>" +
          "$\\therefore x = x_0 \\mathrm{e}^{-at}$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "The half-life of the reaction, denoted by $t_{0.5}$, is defined as the time taken for the concentration of $X$ to decrease to half its initial value. Show that $t_{0.5} = \\frac{\\ln 2}{a}$.",
        type: "self",
        solution:
          "When $t = t_{0.5}$, $x = \\frac{x_0}{2}$:<br>" +
          "$\\frac{x_0}{2} = x_0 \\mathrm{e}^{-a t_{0.5}} \\implies \\mathrm{e}^{a t_{0.5}} = 2 \\implies a t_{0.5} = \\ln 2 \\implies t_{0.5} = \\frac{\\ln 2}{a}$ (shown)."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "In another experiment conducted by a chemist, the rate of the reaction is directly proportional to the product of the concentration of $X$ and the square of the concentration of $Y$. It is also known that at any instance during the reaction, every $1$ mol of $X$ reacts with every $2$ mol of $Y$, giving the equation $y_0 - y = 2(x_0 - x)$. The initial concentrations of $X$ and $Y$ are $1$ mol/kL and $4$ mol/kL respectively. Show that $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -bx(x + 1)^2$, where $b$ is a positive constant.",
        type: "self",
        solution:
          "Since $X$ is consumed at a rate proportional to $xy^2$, $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -kxy^2$, where $k > 0$.<br>" +
          "Given $x_0 = 1$ and $y_0 = 4$: $4 - y = 2(1 - x) \\implies y = 2x + 2 = 2(x + 1)$.<br>" +
          "Substituting into the DE: $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -kx[2(x + 1)]^2 = -4kx(x + 1)^2 = -bx(x + 1)^2$, where $b = 4k > 0$ (shown)."
      },
      {
        label: "(b)(ii)",
        marks: 6,
        prompt: "It is given that the concentration of $X$ is $0.5$ mol/kL at the instance $1$ min after the start of the experiment. Find the concentration of $X$ at the instance $2$ min after the start of the experiment, giving your answer to $3$ significant figures.",
        type: "auto",
        mode: "number",
        answer: "0.313815",
        placeholder: "Correct to 3 s.f.",
        solution:
          "$\\int \\frac{1}{x(x + 1)^2}\\,\\mathrm{d}x = \\int -b\\,\\mathrm{d}t$.<br>" +
          "Using partial fractions: $\\frac{1}{x(x + 1)^2} = \\frac{1}{x} - \\frac{1}{x + 1} - \\frac{1}{(x + 1)^2}$.<br>" +
          "Integrating (with $x > 0$):<br>" +
          "$\\ln\\left(\\frac{x}{x + 1}\\right) + \\frac{1}{x + 1} = -bt + c_1$.<br>" +
          "When $t = 0$, $x = 1$: $\\ln\\left(\\frac{1}{2}\\right) + \\frac{1}{2} = c_1 \\implies c_1 = \\frac{1}{2} - \\ln 2$.<br>" +
          "When $t = 1$, $x = 0.5$: $\\ln\\left(\\frac{1}{3}\\right) + \\frac{2}{3} = -b + \\frac{1}{2} - \\ln 2 \\implies b = \\ln\\left(\\frac{3}{2}\\right) - \\frac{1}{6}$.<br>" +
          "When $t = 2$:<br>" +
          "$\\ln\\left(\\frac{x}{x + 1}\\right) + \\frac{1}{x + 1} = -2\\left(\\ln\\left(\\frac{3}{2}\\right) - \\frac{1}{6}\\right) + \\frac{1}{2} - \\ln 2$.<br>" +
          "Solving using GC gives $x = 0.313815 \\approx 0.314$ mol/kL (3 s.f.)."
      }
    ]
  }
]);
