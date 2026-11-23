window.registerQuestions([
  {
    id: "TMJC-2025-P1-Q1",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities"],
    stem: "Let $a$ be a real constant such that $a > 1$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "On the same diagram, sketch the graphs of $y = |x - a|$ and $y = \\frac{1}{|x - a|}$. You should show clearly the equations of any asymptotes and axial intercepts of both graphs.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 230" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="185" x2="320" y2="185" stroke-width="1.4"/>
  <polyline points="313,181 320,185 313,189" fill="none" stroke-width="1.4"/>
  <line x1="100" y1="215" x2="100" y2="18" stroke-width="1.4"/>
  <polyline points="96,25 100,18 104,25" fill="none" stroke-width="1.4"/>
  <text x="323" y="189" stroke="none" font-style="italic">x</text>
  <text x="95" y="13" stroke="none" font-style="italic">y</text>
  <text x="86" y="198" stroke="none" font-style="italic">O</text>

  <!-- Vertical asymptote x = a (at x=180, scale 40px = 1 unit, a=2) -->
  <line x1="180" y1="24" x2="180" y2="210" stroke-dasharray="4,3" stroke-width="1.2" opacity="0.65"/>
  <text x="184" y="34" stroke="none" font-style="italic">x = a</text>

  <!-- Horizontal asymptote y = 0 label -->
  <text x="275" y="199" stroke="none" font-style="italic">y = 0</text>

  <!-- y = |x - a| : V-shape with vertex (180, 185), y-intercept (100, 105) -->
  <polyline points="40,45 180,185 305,60" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="42" y="38" stroke="none" fill="#4a8fe7" font-style="italic">y = |x − a|</text>

  <!-- y = 1/|x - a| : two branches, scale 40px/unit -> y = 40/|x-2| -->
  <!-- Left branch: x=30..171 -> x_math = (x-100)/40 -->
  <path d="M 30 174.3 C 70 171 100 165 125 156 C 145 147 160 125 168 90 C 172 68 174 48 175.5 26" fill="none" stroke="#cf5652" stroke-width="2"/>
  <!-- Right branch -->
  <path d="M 184.5 26 C 186 48 188 68 192 90 C 200 125 215 147 235 156 C 260 165 285 170 312 173" fill="none" stroke="#cf5652" stroke-width="2"/>
  <text x="238" y="148" stroke="none" fill="#cf5652" font-style="italic">y = 1/|x − a|</text>

  <!-- Intercepts -->
  <circle cx="100" cy="105" r="2.8" fill="#4a8fe7" stroke="none"/>
  <text x="86" y="108" stroke="none" font-style="italic">a</text>
  <circle cx="100" cy="165" r="2.8" fill="#cf5652" stroke="none"/>
  <text x="74" y="169" stroke="none" font-style="italic">1/a</text>
  <circle cx="180" cy="185" r="2.8" fill="#4a8fe7" stroke="none"/>
  <text x="184" y="198" stroke="none" font-style="italic">a</text>
</svg>`,
        solution: "<strong>1. Graph of $y = |x - a|$:</strong><br>V-shaped graph with vertex (minimum point) on the $x$-axis at $(a, 0)$ and $y$-intercept at $(0, a)$.<br><br><strong>2. Graph of $y = \\frac{1}{|x - a|}$:</strong><br>• Vertical asymptote: $x = a$.<br>• Horizontal asymptote: $y = 0$.<br>• $y$-intercept: $\\left(0, \\frac{1}{a}\\right)$. Since $a > 1$, we have $\\frac{1}{a} < a$, so the $y$-intercept of $y = \\frac{1}{|x - a|}$ lies below that of $y = |x - a|$.<br>• Both branches lie strictly above the $x$-axis and are symmetrical about $x = a$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Hence, or otherwise, solve the inequality $|x - a| > \\frac{1}{|x - a|}$.",
        type: "self",
        solution: "Find the points of intersection of $y = |x - a|$ and $y = \\frac{1}{|x - a|}$:<br>$$|x - a| = \\frac{1}{|x - a|}$$Since $x \\ne a$, $|x - a| > 0$, so:<br>$$(x - a)^2 = 1 \\implies x - a = \\pm 1 \\implies x = a - 1 \\text{ or } x = a + 1$$From the graph, $y = |x - a|$ lies strictly above $y = \\frac{1}{|x - a|}$ when:<br>$$x < a - 1 \\quad \\text{or} \\quad x > a + 1$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q2",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation"],
    stem: "A curve $C$ has equation $y^2 = x + \\mathrm{e}^{2x}y$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $(2y - \\mathrm{e}^{2x})\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + 2y\\mathrm{e}^{2x}$.",
        type: "self",
        solution: "Differentiate $y^2 = x + \\mathrm{e}^{2x}y$ implicitly with respect to $x$:<br>$$2y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + \\mathrm{e}^{2x}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y(2\\mathrm{e}^{2x})$$Rearranging terms with $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ to the left-hand side:<br>$$(2y - \\mathrm{e}^{2x})\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + 2y\\mathrm{e}^{2x} \\quad \\text{(shown)}$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the equations of the tangents to $C$ at the points where $x = 0$.",
        type: "self",
        solution: "Substitute $x = 0$ into $y^2 = x + \\mathrm{e}^{2x}y$:<br>$$y^2 = 0 + \\mathrm{e}^0 y \\implies y^2 - y = 0 \\implies y(y - 1) = 0$$Thus $y = 0$ or $y = 1$, giving points $(0, 0)$ and $(0, 1)$.<br><br>At $(0, 0)$:<br>$$(0 - 1)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -1$$Equation of tangent at $(0, 0)$: $y = -x$.<br><br>At $(0, 1)$:<br>$$(2 - 1)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + 2(1)(1) \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3$$Equation of tangent at $(0, 1)$: $y - 1 = 3(x - 0) \\implies y = 3x + 1$."
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q3",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Integration"],
    stem: "Find the following integrals.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "$\\displaystyle \\int \\frac{x^2 - 3x - 1}{x^2 - 4x + 1}\\,\\mathrm{d}x$",
        type: "auto",
        mode: "antiderivative",
        answer: "x + 0.5*ln(abs(x^2 - 4*x + 1))",
        domainPoints: [5, 6, 7],
        placeholder: "Antiderivative in x (omit + C)",
        solution: "Perform polynomial long division first:<br>$$\\int \\frac{x^2 - 3x - 1}{x^2 - 4x + 1}\\,\\mathrm{d}x = \\int \\left(1 + \\frac{x - 2}{x^2 - 4x + 1}\\right)\\mathrm{d}x$$Notice that $\\frac{\\mathrm{d}}{\\mathrm{d}x}(x^2 - 4x + 1) = 2x - 4 = 2(x - 2)$:<br>$$= \\int 1\\,\\mathrm{d}x + \\frac{1}{2}\\int \\frac{2x - 4}{x^2 - 4x + 1}\\,\\mathrm{d}x = x + \\frac{1}{2}\\ln|x^2 - 4x + 1| + C$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "$\\displaystyle \\int x\\ln(kx)\\,\\mathrm{d}x$, where $k$ is a real constant.",
        type: "self",
        solution: "Use integration by parts with $u = \\ln(kx)$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = x$, so $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{k}{kx} = \\frac{1}{x}$ and $v = \\frac{x^2}{2}$:<br>$$\\int x\\ln(kx)\\,\\mathrm{d}x = \\frac{x^2}{2}\\ln(kx) - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,\\mathrm{d}x = \\frac{x^2}{2}\\ln(kx) - \\frac{1}{2}\\int x\\,\\mathrm{d}x = \\frac{x^2}{2}\\ln(kx) - \\frac{x^2}{4} + C$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "$\\displaystyle \\int \\frac{\\sin\\theta}{2\\cos 2\\theta + 1}\\,\\mathrm{d}\\theta$, using the substitution $x = \\cos\\theta$.",
        type: "self",
        solution: "Let $x = \\cos\\theta \\implies \\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = -\\sin\\theta$.<br>Using $\\cos 2\\theta = 2\\cos^2\\theta - 1$:<br>$$\\int \\frac{\\sin\\theta}{2(2\\cos^2\\theta - 1) + 1}\\,\\mathrm{d}\\theta = \\int \\frac{\\sin\\theta}{4\\cos^2\\theta - 1}\\,\\mathrm{d}\\theta = -\\int \\frac{1}{4x^2 - 1}\\,\\mathrm{d}x = \\int \\frac{1}{1 - (2x)^2}\\,\\mathrm{d}x$$Using the standard integral $\\int \\frac{1}{a^2 - u^2}\\,\\mathrm{d}u = \\frac{1}{2a}\\ln\\left|\\frac{a+u}{a-u}\\right| + C$ with $a = 1$ and $u = 2x$:<br>$$= \\frac{1}{2}\\left(\\frac{1}{2(1)}\\right)\\ln\\left|\\frac{1 + 2x}{1 - 2x}\\right| + C = \\frac{1}{4}\\ln\\left|\\frac{1 + 2\\cos\\theta}{1 - 2\\cos\\theta}\\right| + C$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q4",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "An arithmetic series has first term $a$ and common difference $d$, where $a$ and $d$ are non-zero real constants. A convergent geometric series has first term $b$ and common ratio $r$, where $b > 0$ and $r$ is a non-zero real constant. The sum of the first $n$ terms of the geometric series is denoted by $S$.<br>It is given that the 7th, 10th and 11th terms of the arithmetic series are equal to the 3rd, 6th and 10th terms of the geometric series respectively.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that $r$ satisfies the equation $3r^7 - 4r^3 + 1 = 0$. Solve this equation, giving your answer correct to 4 decimal places.",
        type: "self",
        solution: "From the given conditions:<br>$$a + 6d = br^2 \\quad \\text{--- (1)}$$$$a + 9d = br^5 \\quad \\text{--- (2)}$$$$a + 10d = br^9 \\quad \\text{--- (3)}$$(2) − (1): $3d = br^2(r^3 - 1)$ --- (4)<br>(3) − (2): $d = br^5(r^4 - 1)$ --- (5)<br><br>Substitute (5) into (4):<br>$$3br^5(r^4 - 1) = br^2(r^3 - 1)$$Since $b > 0$ and $r \\ne 0$, divide both sides by $br^2$:<br>$$3r^3(r^4 - 1) = r^3 - 1 \\implies 3r^7 - 3r^3 = r^3 - 1 \\implies 3r^7 - 4r^3 + 1 = 0 \\quad \\text{(shown)}$$<br>Using a graphing calculator, the real roots are $r = 1$, $r = -1.1195...$, and $r = 0.6639156...$.<br>Since the geometric series is convergent, $|r| < 1$. Therefore:<br>$$r = 0.6639 \\quad (\\text{to 4 d.p.})$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "A new series is formed by taking the even numbered terms of the geometric series. Find the smallest value of $n$ for which $S$ differs from the sum to infinity of the new series by at least $1.78b$.",
        type: "auto",
        mode: "number",
        answer: "15",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "The new series of even-numbered terms is $br, br^3, br^5, \\dots$, which is a geometric series with first term $br$ and common ratio $r^2$.<br>Its sum to infinity is $\\frac{br}{1 - r^2}$.<br><br>We require:<br>$$\\left|\\frac{br}{1 - r^2} - S\\right| \\ge 1.78b$$$$\\left|\\frac{br}{1 - r^2} - \\frac{b(1 - r^n)}{1 - r}\\right| \\ge 1.78b$$Dividing by $b > 0$ and substituting $r = 0.6639156$ (or $0.6639$):<br>$$\\left|\\frac{0.6639}{1 - 0.6639^2} - \\frac{1 - 0.6639^n}{1 - 0.6639}\\right| \\ge 1.78$$Using a graphing calculator table:<br>• When $n = 14$: $\\text{LHS} = 1.7785 < 1.78$<br>• When $n = 15$: $\\text{LHS} = 1.7818 \\ge 1.78$<br><br>Therefore, the smallest value of $n$ is $15$."
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q5",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Sequences & Series"],
    diagramSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (115, 115), scale x: 35px/unit, y: 20px/unit -->
  <line x1="25" y1="115" x2="250" y2="115" stroke-width="1.4"/>
  <polyline points="243,111 250,115 243,119" fill="none" stroke-width="1.4"/>
  <line x1="115" y1="185" x2="115" y2="18" stroke-width="1.4"/>
  <polyline points="111,25 115,18 119,25" fill="none" stroke-width="1.4"/>
  <text x="253" y="119" stroke="none" font-style="italic">x</text>
  <text x="111" y="13" stroke="none" font-style="italic">y</text>
  <text x="101" y="128" stroke="none" font-style="italic">O</text>

  <!-- Parabola y = x^2 - x - 2: x from -1.8 to 2.8 -->
  <!-- x=-1.8: y=3.04 -> (52, 54.2); x=-1: y=0 -> (80, 115); x=0.5: y=-2.25 -> (132.5, 160); x=2: y=0 -> (185, 115); x=2.8: y=3.04 -> (213, 54.2) -->
  <path d="M 52 54.2 Q 132.5 265.8 213 54.2" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="195" y="45" stroke="none" fill="#4a8fe7" font-style="italic">y = x² − x − 2</text>

  <!-- Roots labels -->
  <text x="64" y="129" stroke="none">−1</text>
  <text x="186" y="129" stroke="none">2</text>
</svg>`,
    stem: "The diagram shows the graph of $y = x^2 - x - 2$. The two roots of the equation $x^2 - x - 2 = 0$ are $-1$ and $2$.<br>A sequence of real numbers $x_1, x_2, x_3, \\dots$ satisfies the recurrence relation $$x_{n+1} = x_n^2 - 2$$ for $n \\ge 1$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "It is given that as $n$ → ∞, $x_n$ → $L$. Show that $L$ can take values $-1$ or $2$.",
        type: "self",
        solution: "As $n$ → ∞, $x_n$ → $L$ and $x_{n+1}$ → $L$.<br>Taking limits on both sides of $x_{n+1} = x_n^2 - 2$:<br>$$L = L^2 - 2 \\implies L^2 - L - 2 = 0 \\implies (L + 1)(L - 2) = 0$$Hence $L = -1$ or $L = 2$ (shown)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Hence or otherwise, determine the behaviour of the sequence when $x_1 = -1$.",
        type: "self",
        solution: "When $x_1 = -1$, we have $x_2 = (-1)^2 - 2 = -1$, $x_3 = (-1)^2 - 2 = -1$, and so on.<br>Thus the sequence remains <strong>constant at $-1$</strong>."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "By considering $x_{n+1} - x_n$, prove that $x_{n+1} < x_n$ if $-1 < x_n < 2$.",
        type: "self",
        solution: "Consider:<br>$$x_{n+1} - x_n = x_n^2 - 2 - x_n = x_n^2 - x_n - 2$$From the given graph of $y = x^2 - x - 2$, when $-1 < x < 2$, the curve lies strictly below the $x$-axis, so $x^2 - x - 2 < 0$.<br>Hence, if $-1 < x_n < 2$, then $x_n^2 - x_n - 2 < 0$, which gives $x_{n+1} - x_n < 0$, i.e. $x_{n+1} < x_n$ (proven)."
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q6",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Differentiation"],
    stem: "[It is given that the volume of a circular cone with base radius $r$ and height $h$ is $\\frac{1}{3}\\pi r^2 h$.]<br>A container is made in the shape of an inverted open right circular cone. The height of the container is $6$ metres, and the radius is $2$ metres. The container is initially empty. Water is poured into the container while, at the same time, water is leaking from a hole at the bottom of the container at a rate of $0.03\\text{ m}^3/\\text{s}$, resulting in the depth of water in the container to be increasing at a rate of $0.1\\text{ m/s}$. At time $t$ seconds after the start, the depth of water in the container is $h$ metres.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find, in terms of $h$, an expression for the volume of water in the container at time $t$ seconds after the start.",
        type: "auto",
        mode: "expr",
        vars: { h: [1, 2, 3, 6] },
        answer: "pi*h^3/27",
        placeholder: "Expression in terms of h",
        solution: "Let $r$ be the radius of the water surface when the depth is $h$. By similar triangles:<br>$$\\frac{r}{h} = \\frac{2}{6} \\implies r = \\frac{1}{3}h$$Therefore, the volume of water is:<br>$$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi\\left(\\frac{1}{3}h\\right)^2 h = \\frac{1}{27}\\pi h^3$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the rate at which water is being poured into the container when the depth of water in the container is $3$ metres.",
        type: "auto",
        mode: "number",
        answer: "0.1*pi + 0.03",
        placeholder: "Exact or 3 s.f. (in m^3/s)",
        solution: "Let $\\frac{\\mathrm{d}V_{\\text{in}}}{\\mathrm{d}t}$ be the rate at which water is poured in. Then:<br>$$\\frac{\\mathrm{d}V}{\\mathrm{d}t} = \\frac{\\mathrm{d}V_{\\text{in}}}{\\mathrm{d}t} - 0.03$$Differentiating $V = \\frac{1}{27}\\pi h^3$ with respect to $h$ gives $\\frac{\\mathrm{d}V}{\\mathrm{d}h} = \\frac{1}{9}\\pi h^2$.<br>Using the chain rule with $\\frac{\\mathrm{d}h}{\\mathrm{d}t} = 0.1$ and $h = 3$:<br>$$\\frac{\\mathrm{d}V}{\\mathrm{d}t} = \\frac{\\mathrm{d}V}{\\mathrm{d}h}\\cdot\\frac{\\mathrm{d}h}{\\mathrm{d}t} = \\frac{1}{9}\\pi(3)^2(0.1) = 0.1\\pi$$Therefore:<br>$$\\frac{\\mathrm{d}V_{\\text{in}}}{\\mathrm{d}t} = 0.1\\pi + 0.03 \\approx 0.344\\text{ m}^3/\\text{s} \\quad (\\text{3 s.f.})$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q7",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is such that $$\\mathrm{f}: x \\mapsto \\frac{1}{2}\\sqrt{36 - (x - 3)^2} \\quad \\text{for } x \\in \\mathbb{R},\\; k \\le x < 9,$$ where $k$ is a real constant.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State the least value of $k$ for which the function $\\mathrm{f}^{-1}$ exists.",
        type: "auto",
        mode: "number",
        answer: "3",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "The graph of $y = \\frac{1}{2}\\sqrt{36 - (x - 3)^2}$ is the upper half of an ellipse centred at $(3, 0)$ with maximum point at $(3, 3)$.<br>For $\\mathrm{f}^{-1}$ to exist, $\\mathrm{f}$ must be one-to-one, so the least value of $k$ is $3$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "For the rest of the question, take the value of $k$ as the value found in part (a). Find $\\mathrm{f}^{-1}(x)$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.5, 1, 2, 2.5] },
        answer: "3 + 2*sqrt(9 - x^2)",
        placeholder: "Expression in terms of x",
        solution: "Let $y = \\frac{1}{2}\\sqrt{36 - (x - 3)^2}$:<br>$$2y = \\sqrt{36 - (x - 3)^2} \\implies 4y^2 = 36 - (x - 3)^2 \\implies (x - 3)^2 = 36 - 4y^2$$$$x = 3 \\pm \\sqrt{36 - 4y^2}$$Since $x \\ge 3$, we reject the negative root:<br>$$x = 3 + \\sqrt{36 - 4y^2} = 3 + 2\\sqrt{9 - y^2}$$Hence $\\mathrm{f}^{-1}(x) = 3 + 2\\sqrt{9 - x^2}$ (for $0 < x \\le 3$)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Sketch, on the same diagram, the graphs of $y = \\mathrm{f}(x)$, $y = \\mathrm{f}^{-1}(x)$ and $y = \\mathrm{f}^{-1}\\mathrm{f}(x)$, showing clearly the relationship between the three graphs.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 250" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (40, 210), scale 20px = 1 unit -> (9,9) is at (220, 30), (3,3) is at (100, 150) -->
  <line x1="20" y1="210" x2="255" y2="210" stroke-width="1.4"/>
  <polyline points="248,206 255,210 248,214" fill="none" stroke-width="1.4"/>
  <line x1="40" y1="230" x2="40" y2="15" stroke-width="1.4"/>
  <polyline points="36,22 40,15 44,22" fill="none" stroke-width="1.4"/>
  <text x="258" y="214" stroke="none" font-style="italic">x</text>
  <text x="36" y="11" stroke="none" font-style="italic">y</text>
  <text x="26" y="224" stroke="none" font-style="italic">O</text>

  <!-- Line y = x (dashed) -->
  <line x1="25" y1="225" x2="232" y2="18" stroke-dasharray="4,3" stroke-width="1.2" opacity="0.6"/>
  <text x="148" y="122" stroke="none" font-style="italic">y = x</text>

  <!-- y = f^{-1}f(x) = x for 3 <= x < 9: solid segment from (100, 150) to (220, 30) -->
  <line x1="100" y1="150" x2="220" y2="30" stroke="#4ca885" stroke-width="2.2"/>
  <text x="225" y="42" stroke="none" fill="#4ca885" font-style="italic">y = f⁻¹f(x)</text>

  <!-- y = f(x): quarter-ellipse from (3,3)=(100,150) to (9,0)=(220,210), rx=120, ry=60 -->
  <path d="M 100 150 A 120 60 0 0 1 220 210" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="195" y="180" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>

  <!-- y = f^{-1}(x): reflection of y=f(x) across y=x, from (3,3)=(100,150) to (0,9)=(40,30), rx=60, ry=120 -->
  <path d="M 100 150 A 60 120 0 0 0 40 30" fill="none" stroke="#cf5652" stroke-width="2"/>
  <text x="86" y="70" stroke="none" fill="#cf5652" font-style="italic">y = f⁻¹(x)</text>

  <!-- Key endpoints -->
  <circle cx="100" cy="150" r="3.5" fill="#2c2925" stroke="none"/>
  <text x="64" y="155" stroke="none">(3, 3)</text>

  <circle cx="220" cy="210" r="3.5" fill="#fff" stroke="#4a8fe7" stroke-width="2"/>
  <text x="205" y="227" stroke="none">(9, 0)</text>

  <circle cx="40" cy="30" r="3.5" fill="#fff" stroke="#cf5652" stroke-width="2"/>
  <text x="48" y="32" stroke="none">(0, 9)</text>

  <circle cx="220" cy="30" r="3.5" fill="#fff" stroke="#4ca885" stroke-width="2"/>
  <text x="180" y="26" stroke="none">(9, 9)</text>
</svg>`,
        solution: "• $y = \\mathrm{f}(x)$ is a curve from closed endpoint $(3, 3)$ to open endpoint $(9, 0)$.<br>• $y = \\mathrm{f}^{-1}(x)$ is the reflection of $y = \\mathrm{f}(x)$ in the line $y = x$, from closed endpoint $(3, 3)$ to open endpoint $(0, 9)$.<br>• $y = \\mathrm{f}^{-1}\\mathrm{f}(x) = x$ for $3 \\le x < 9$ is the line segment along $y = x$ from closed endpoint $(3, 3)$ to open endpoint $(9, 9)$, which is also the line of symmetry between $y = \\mathrm{f}(x)$ and $y = \\mathrm{f}^{-1}(x)$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The function $\\mathrm{g}$ is such that $\\mathrm{g}: x \\mapsto |4x - 1|(2x - 5)$ for $x \\in \\mathbb{R},\\; x > 0$.<br>Show that the composite function $\\mathrm{gf}$ exists.",
        type: "self",
        solution: "For $\\mathrm{D}_\\mathrm{f} = [3, 9)$, the range of $\\mathrm{f}$ is $\\mathrm{R}_\\mathrm{f} = (0, 3]$.<br>The domain of $\\mathrm{g}$ is $\\mathrm{D}_\\mathrm{g} = (0, $∞$)$.<br>Since $\\mathrm{R}_\\mathrm{f} = (0, 3] \\subseteq (0, $∞$) = \\mathrm{D}_\\mathrm{g}$, the composite function $\\mathrm{gf}$ exists (shown)."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Find the range of $\\mathrm{gf}$.",
        type: "self",
        solution: "We restrict the domain of $\\mathrm{g}$ to $\\mathrm{R}_\\mathrm{f} = (0, 3]$:<br>For $x \\in (0, 3]$:<br>• When $x \\ge \\frac{1}{4}$, $\\mathrm{g}(x) = (4x - 1)(2x - 5) = 8x^2 - 22x + 5$, which has a minimum at $x = \\frac{22}{16} = \\frac{11}{8} = 1.375$ with $\\mathrm{g}(1.375) = -\\frac{81}{8} = -10.125$.<br>• At the upper endpoint $x = 3$: $\\mathrm{g}(3) = |11|(1) = 11$.<br>• As $x$ → $0^+$, $\\mathrm{g}(x)$ → $|-1|(-5) = -5$, which lies inside $\\left[-\\frac{81}{8}, 11\\right]$.<br><br>Therefore, $\\mathrm{R}_{\\mathrm{gf}} = \\left[-\\frac{81}{8}, 11\\right]$ (or $[-10.125, 11]$)."
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q8",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation", "Integration"],
    stem: "A curve $C$ has parametric equations $$x = 2t + 3, \\quad y = 5 - 4t^2,$$ for all real values of $t$.<br>The line $N$ is the normal to $C$ at the point where $t = -\\frac{1}{2}$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the cartesian equation of $N$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 2, \\quad \\frac{\\mathrm{d}y}{\\mathrm{d}t} = -8t \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{-8t}{2} = -4t$$When $t = -\\frac{1}{2}$:<br>$$x = 2\\left(-\\frac{1}{2}\\right) + 3 = 2, \\quad y = 5 - 4\\left(-\\frac{1}{2}\\right)^2 = 4$$Gradient of tangent at $(2, 4)$ is $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -4\\left(-\\frac{1}{2}\\right) = 2$, so the gradient of the normal $N$ is $-\\frac{1}{2}$.<br>Equation of $N$:<br>$$y - 4 = -\\frac{1}{2}(x - 2) \\implies y = -\\frac{1}{2}x + 5$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the cartesian equation of $C$.",
        type: "self",
        solution: "From $x = 2t + 3$, we have $t = \\frac{x - 3}{2}$.<br>Substituting into $y = 5 - 4t^2$:<br>$$y = 5 - 4\\left(\\frac{x - 3}{2}\\right)^2 = 5 - (x - 3)^2$$"
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "The region $R$ is bounded by $C$, $N$ and the $y$-axis. Without using a calculator, find the exact volume of the solid generated when the region $R$ is rotated through $2\\pi$ radians about the $y$-axis.",
        type: "auto",
        mode: "number",
        answer: "28*pi/3",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solutionSvg: `<svg viewBox="0 0 280 240" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (75, 130), scale x: 30px/unit, y: 18px/unit -->
  <line x1="25" y1="130" x2="255" y2="130" stroke-width="1.4"/>
  <polyline points="248,126 255,130 248,134" fill="none" stroke-width="1.4"/>
  <line x1="75" y1="225" x2="75" y2="18" stroke-width="1.4"/>
  <polyline points="71,25 75,18 79,25" fill="none" stroke-width="1.4"/>
  <text x="258" y="134" stroke="none" font-style="italic">x</text>
  <text x="71" y="13" stroke="none" font-style="italic">y</text>
  <text x="61" y="143" stroke="none" font-style="italic">O</text>

  <!-- Shaded region R: bounded by y-axis (x=75), N from (0,5)=(75,40) to (2,4)=(135,58), and C from (2,4)=(135,58) down to (0,-4)=(75,202) -->
  <!-- C: x=0 -> y=-4 (75,202), x=1 -> y=1 (105,112), x=2 -> y=4 (135,58) -->
  <path d="M 75 40 L 135 58 Q 105 112 75 202 Z" fill="rgba(91,155,213,0.25)" stroke="none"/>
  <!-- Upper cone triangle highlight -->
  <polygon points="75,40 135,58 75,58" fill="rgba(207,86,82,0.18)" stroke="none"/>
  <line x1="75" y1="58" x2="135" y2="58" stroke-dasharray="3,2" stroke-width="1" opacity="0.6"/>

  <!-- Parabola C: y = 5 - (x-3)^2 from x=-0.2 to x=6.2 -->
  <!-- x=0: (75,202), x=1: (105,112), x=2: (135,58), x=3: (165,40), x=4: (195,58), x=5: (225,112), x=6: (255,202) -->
  <path d="M 70 220 Q 165 -140 255 202" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- Normal N: y = -0.5x + 5 -> x=-1: (45,31), x=0: (75,40), x=2: (135,58), x=6: (255,94) -->
  <line x1="45" y1="31" x2="240" y2="89.5" stroke="#cf5652" stroke-width="1.8"/>
  <text x="175" y="102" stroke="none" fill="#cf5652" font-style="italic">N: y = −½x + 5</text>

  <!-- Key points -->
  <circle cx="75" cy="40" r="2.8" fill="#2c2925" stroke="none"/>
  <text x="37" y="44" stroke="none">(0, 5)</text>
  <circle cx="135" cy="58" r="2.8" fill="#2c2925" stroke="none"/>
  <text x="139" y="54" stroke="none">(2, 4)</text>
  <circle cx="165" cy="40" r="2.8" fill="#4a8fe7" stroke="none"/>
  <text x="167" y="34" stroke="none">(3, 5)</text>
  <circle cx="75" cy="202" r="2.8" fill="#2c2925" stroke="none"/>
  <text x="27" y="205" stroke="none">(0, −4)</text>
  <text x="90" y="102" stroke="none" fill="#4a8fe7" font-weight="bold">R</text>
</svg>`,
        solution: "The $y$-intercept of $N$ is $(0, 5)$ and the $y$-intercept of $C$ is $(0, -4)$. They meet at $(2, 4)$.<br>On the left branch of $C$ ($x \\le 3$):<br>$$x = 3 - \\sqrt{5 - y} \\implies x^2 = (3 - \\sqrt{5 - y})^2 = 9 - 6\\sqrt{5 - y} + (5 - y) = 14 - y - 6\\sqrt{5 - y}$$Split $R$ horizontally at $y = 4$: the upper part (from $y = 4$ to $y = 5$) rotates to form a cone of radius $r = 2$ and height $h = 1$, with volume $\\frac{1}{3}\\pi(2)^2(1) = \\frac{4}{3}\\pi$.<br><br>Total volume about the $y$-axis:<br>$$V = \\pi \\int_{-4}^{4} \\left(14 - y - 6\\sqrt{5 - y}\\right)\\mathrm{d}y + \\frac{4}{3}\\pi$$$$= \\pi \\left[14y - \\frac{1}{2}y^2 + 4(5 - y)^{\\frac{3}{2}}\\right]_{-4}^{4} + \\frac{4}{3}\\pi$$$$= \\pi\\left[(56 - 8 + 4) - (-56 - 8 + 108)\\right] + \\frac{4}{3}\\pi = \\pi(52 - 44) + \\frac{4}{3}\\pi = 8\\pi + \\frac{4}{3}\\pi = \\frac{28\\pi}{3}$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q9",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "It is given that $-2 + 2\\mathrm{i}$ is a root of the equation $$z^3 + az^2 + bz - 16\\sqrt{2} = 0,$$ where $a$ and $b$ are real numbers.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Find the values of $a$ and $b$ and the other two roots. Leave your answers in the exact form.",
        type: "self",
        solution: "Since all coefficients of the cubic are real, the complex conjugate $-2 - 2\\mathrm{i}$ is also a root.<br>The quadratic factor corresponding to these two roots is:<br>$$(z - (-2 + 2\\mathrm{i}))(z - (-2 - 2\\mathrm{i})) = (z + 2)^2 - (2\\mathrm{i})^2 = z^2 + 4z + 8$$Hence:<br>$$z^3 + az^2 + bz - 16\\sqrt{2} = (z^2 + 4z + 8)(z + q)$$Comparing constant terms: $8q = -16\\sqrt{2} \\implies q = -2\\sqrt{2}$.<br>Thus the third (real) root is $z = 2\\sqrt{2}$.<br><br>Expanding $(z^2 + 4z + 8)(z - 2\\sqrt{2})$:<br>• Coefficient of $z^2$: $a = 4 - 2\\sqrt{2}$<br>• Coefficient of $z$: $b = 8 - 8\\sqrt{2}$<br><br>Therefore, $a = 4 - 2\\sqrt{2}$, $b = 8 - 8\\sqrt{2}$, and the other two roots are $-2 - 2\\mathrm{i}$ and $2\\sqrt{2}$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "In an Argand diagram with origin $O$, the three roots are represented by points $A$, $B$ and $C$ where $A$ represents $-2 + 2\\mathrm{i}$ and $C$ represents the real root. Label these points on an Argand diagram, indicating clearly the modulus and argument of each root. State also a geometrical relationship between $A$ and $B$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 230" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (130, 115), scale 32px = 1 unit -> A=(-2,2)=(66,51), B=(-2,-2)=(66,179), C=(2.828,0)=(220.5,115) -->
  <line x1="25" y1="115" x2="255" y2="115" stroke-width="1.4"/>
  <polyline points="248,111 255,115 248,119" fill="none" stroke-width="1.4"/>
  <line x1="130" y1="215" x2="130" y2="18" stroke-width="1.4"/>
  <polyline points="126,25 130,18 134,25" fill="none" stroke-width="1.4"/>
  <text x="258" y="119" stroke="none">Re</text>
  <text x="122" y="13" stroke="none">Im</text>
  <text x="116" y="128" stroke="none" font-style="italic">O</text>

  <!-- Rays OA, OB, OC -->
  <line x1="130" y1="115" x2="66" y2="51" stroke-dasharray="4,3" stroke-width="1.4" stroke="#4a8fe7"/>
  <line x1="130" y1="115" x2="66" y2="179" stroke-dasharray="4,3" stroke-width="1.4" stroke="#4a8fe7"/>

  <!-- Angle arcs for 3pi/4 and -3pi/4 -->
  <path d="M 152 115 A 22 22 0 0 0 114.4 99.4" fill="none" stroke="#cf5652" stroke-width="1.3"/>
  <text x="148" y="96" stroke="none" fill="#cf5652">3π/4</text>
  <path d="M 152 115 A 22 22 0 0 1 114.4 130.6" fill="none" stroke="#4a8fe7" stroke-width="1.3"/>
  <text x="148" y="142" stroke="none" fill="#4a8fe7">−3π/4</text>

  <!-- Points A, B, C -->
  <circle cx="66" cy="51" r="3.5" fill="#cf5652" stroke="none"/>
  <text x="30" y="42" stroke="none" fill="#cf5652">A (−2 + 2i)</text>
  <text x="98" y="75" stroke="none">2√2</text>

  <circle cx="66" cy="179" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="30" y="196" stroke="none" fill="#4a8fe7">B (−2 − 2i)</text>
  <text x="98" y="164" stroke="none">2√2</text>

  <circle cx="220.5" cy="115" r="3.5" fill="#4ca885" stroke="none"/>
  <text x="202" y="133" stroke="none" fill="#4ca885">C (2√2)</text>
  <text x="172" y="109" stroke="none">2√2</text>
</svg>`,
        solution: "• $A$ ($z_1 = -2 + 2\\mathrm{i}$): $|z_1| = \\sqrt{(-2)^2 + 2^2} = 2\\sqrt{2}$, $\\arg(z_1) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$.<br>• $B$ ($z_2 = -2 - 2\\mathrm{i}$): $|z_2| = 2\\sqrt{2}$, $\\arg(z_2) = -\\frac{3\\pi}{4}$.<br>• $C$ ($z_3 = 2\\sqrt{2}$): $|z_3| = 2\\sqrt{2}$, $\\arg(z_3) = 0$.<br><br><strong>Geometrical relationship:</strong> $B$ is the reflection of $A$ about the real axis (or $B$ is the $90^\\circ$ anti-clockwise rotation of $A$ about the origin $O$)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Hence, prove that $\\tan\\frac{3\\pi}{8} = 1 + \\sqrt{2}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 180" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (120, 145), scale 32px/unit -> A=(56,81), C=(210.5,145), D=A+C=(146.5,81) -->
  <line x1="25" y1="145" x2="255" y2="145" stroke-width="1.4"/>
  <polyline points="248,141 255,145 248,149" fill="none" stroke-width="1.4"/>
  <line x1="120" y1="168" x2="120" y2="18" stroke-width="1.4"/>
  <polyline points="116,25 120,18 124,25" fill="none" stroke-width="1.4"/>
  <text x="258" y="149" stroke="none">Re</text>
  <text x="112" y="13" stroke="none">Im</text>
  <text x="108" y="159" stroke="none" font-style="italic">O</text>

  <!-- Rhombus OADC -->
  <polygon points="120,145 56,81 146.5,81 210.5,145" fill="rgba(91,155,213,0.14)" stroke="#4a8fe7" stroke-width="1.8"/>
  <!-- Diagonal OD -->
  <line x1="120" y1="145" x2="146.5" y2="81" stroke="#cf5652" stroke-width="1.8" stroke-dasharray="4,3"/>

  <!-- Angle 3pi/8 -->
  <path d="M 142 145 A 22 22 0 0 0 128.4 124.7" fill="none" stroke="#cf5652" stroke-width="1.4"/>
  <text x="142" y="132" stroke="none" fill="#cf5652">3π/8</text>

  <!-- Points -->
  <circle cx="56" cy="81" r="3" fill="#2c2925" stroke="none"/>
  <text x="44" y="75" stroke="none" font-style="italic">A</text>
  <circle cx="146.5" cy="81" r="3" fill="#cf5652" stroke="none"/>
  <text x="151" y="76" stroke="none" fill="#cf5652">D (2√2 − 2 + 2i)</text>
  <circle cx="210.5" cy="145" r="3" fill="#2c2925" stroke="none"/>
  <text x="206" y="160" stroke="none" font-style="italic">C</text>
  <text x="72" y="122" stroke="none">2√2</text>
  <text x="162" y="160" stroke="none">2√2</text>
</svg>`,
        solution: "Since $OA = OC = 2\\sqrt{2}$, let $D$ be the point such that $OADC$ is a rhombus.<br>Then $D$ represents the complex number:<br>$$z_D = (-2 + 2\\mathrm{i}) + 2\\sqrt{2} = (2\\sqrt{2} - 2) + 2\\mathrm{i}$$Because the diagonal $OD$ bisects ∠$AOC = \\frac{3\\pi}{4}$ and $D$ lies in the first quadrant:<br>$$\\arg(z_D) = \\frac{1}{2}\\left(\\frac{3\\pi}{4}\\right) = \\frac{3\\pi}{8}$$Therefore:<br>$$\\tan\\frac{3\\pi}{8} = \\frac{2}{2\\sqrt{2} - 2} = \\frac{1}{\\sqrt{2} - 1} = \\frac{\\sqrt{2} + 1}{(\\sqrt{2})^2 - 1^2} = 1 + \\sqrt{2} \\quad \\text{(proven)}$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q10",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Vectors"],
    stem: "A drone flies in a straight line towards a rooftop for inspection. The drone's flight path is modelled by the line $$l: \\mathbf{r} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix} + \\lambda \\begin{pmatrix} 3 \\\\ -2 \\\\ 1 \\end{pmatrix} \\quad \\text{where } \\lambda \\in \\mathbb{R},$$ and the rooftop is modelled by the plane $p: 2x + y - z = 7$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "On Day 1, the drone flies towards the rooftop using the flight path. Upon reaching the rooftop, the drone flies in a new flight path, $m$. The acute angle between the original flight path and the normal to the rooftop is the same as the acute angle between the new flight path and the same normal to the rooftop. Both flight paths and the normal lie on the same plane. Find the cosine of the angle between the original flight path and the new flight path in an exact non-trigonometrical form.",
        type: "auto",
        mode: "number",
        answer: "-11/14",
        exactRequired: true,
        signHint: true,
        placeholder: "Exact fraction",
        solution: "Let $\\theta$ be the acute angle between the direction vector $\\mathbf{d}_l = \\begin{pmatrix} 3 \\\\ -2 \\\\ 1 \\end{pmatrix}$ of $l$ and the normal $\\mathbf{n} = \\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}$ of plane $p$:<br>$$\\cos\\theta = \\frac{\\left|\\begin{pmatrix} 3 \\\\ -2 \\\\ 1 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}\\right|}{\\sqrt{3^2 + (-2)^2 + 1^2}\\sqrt{2^2 + 1^2 + (-1)^2}} = \\frac{|6 - 2 - 1|}{\\sqrt{14}\\sqrt{6}} = \\frac{3}{\\sqrt{84}}$$Since both flight paths make the same acute angle $\\theta$ with the normal on opposite sides in the same plane, the angle between the two flight paths is $2\\theta$.<br>Using the double-angle formula:<br>$$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2\\left(\\frac{9}{84}\\right) - 1 = \\frac{3}{14} - 1 = -\\frac{11}{14}$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "On Day 2, the drone starts to descend from point $A$ with coordinates $(2, 1, 0)$ towards the rooftop using the shortest possible path. Find the exact coordinates of the point where the drone lands on the rooftop.",
        type: "auto",
        mode: "tuple",
        answer: [8/3, 4/3, -1/3],
        placeholder: "Coordinates (x, y, z)",
        solution: "The shortest path from $A(2, 1, 0)$ to $p$ is along the normal to $p$:<br>$$l_{AF}: \\mathbf{r} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix} + \\mu \\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}, \\quad \\mu \\in \\mathbb{R}$$Substitute into $p: 2x + y - z = 7$:<br>$$2(2 + 2\\mu) + (1 + \\mu) - (-\\mu) = 7 \\implies 6\\mu + 5 = 7 \\implies \\mu = \\frac{1}{3}$$Hence the landing point (foot of perpendicular $F$) is:<br>$$\\begin{pmatrix} 2 + \\frac{2}{3} \\\\ 1 + \\frac{1}{3} \\\\ -\\frac{1}{3} \\end{pmatrix} = \\begin{pmatrix} \\frac{8}{3} \\\\ \\frac{4}{3} \\\\ -\\frac{1}{3} \\end{pmatrix} \\implies \\left(\\frac{8}{3},\\; \\frac{4}{3},\\; -\\frac{1}{3}\\right)$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "After landing, the drone glides on the rooftop in another new flight path, $s$, that is perpendicular to the flight path $l$. Find a cartesian equation of the flight path $s$.",
        type: "self",
        solution: "Since $s$ lies on the plane $p$ and is perpendicular to $l$, its direction vector $\\mathbf{d}_s$ is perpendicular to both $\\mathbf{d}_l$ and $\\mathbf{n}$:<br>$$\\mathbf{d}_s = \\begin{pmatrix} 3 \\\\ -2 \\\\ 1 \\end{pmatrix} \\times \\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 5 \\\\ 7 \\end{pmatrix}$$Since $s$ passes through $F\\left(\\frac{8}{3}, \\frac{4}{3}, -\\frac{1}{3}\\right)$:<br>$$l_s: \\mathbf{r} = \\begin{pmatrix} \\frac{8}{3} \\\\ \\frac{4}{3} \\\\ -\\frac{1}{3} \\end{pmatrix} + \\alpha \\begin{pmatrix} 1 \\\\ 5 \\\\ 7 \\end{pmatrix}, \\quad \\alpha \\in \\mathbb{R}$$Solving for $\\alpha$ gives the cartesian equation:<br>$$\\frac{3x - 8}{3} = \\frac{3y - 4}{15} = \\frac{3z + 1}{21} \\quad \\left(\\text{or } x - \\frac{8}{3} = \\frac{y - \\frac{4}{3}}{5} = \\frac{z + \\frac{1}{3}}{7}\\right)$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "A second rooftop is built parallel to the first rooftop $p$ such that the perpendicular distance between these two rooftops is $d$ units. Find two possible cartesian equations of the second rooftop in terms of $d$.",
        type: "self",
        solution: "Since the second rooftop is parallel to $p$, its equation has the form $2x + y - z = D$, where $\\mathbf{r} \\cdot \\frac{1}{\\sqrt{6}}\\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix} = \\frac{D}{\\sqrt{6}}$.<br>The perpendicular distance between the two parallel planes is $d$:<br>$$\\left|\\frac{D}{\\sqrt{6}} - \\frac{7}{\\sqrt{6}}\\right| = d \\implies |D - 7| = \\sqrt{6}\\,d \\implies D = 7 + \\sqrt{6}\\,d \\text{ or } D = 7 - \\sqrt{6}\\,d$$Therefore, the two possible cartesian equations are:<br>$$2x + y - z = 7 + \\sqrt{6}\\,d \\quad \\text{and} \\quad 2x + y - z = 7 - \\sqrt{6}\\,d$$"
      }
    ]
  },
  {
    id: "TMJC-2025-P1-Q11",
    year: 2025,
    school: "TMJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series", "Integration"],
    stem: "An architect designs a flower bed for a garden. The flower bed is enclosed by the curve $C$ with equation $$\\left(\\frac{x + y}{2}\\right)^2 + \\left(\\frac{y - x}{4}\\right)^2 = 1.$$ The region in the first quadrant bounded by $C$, the $x$-axis and the lines $x = 0$ and $x = 0.5$, is to be planted with tulips.",
    parts: [
      {
        label: "(a)",
        marks: 7,
        prompt: "By finding the Maclaurin series expansion of $y$ up to and including the term in $x^2$, where $y > 0$, find an approximation for the area to be planted with tulips.",
        type: "auto",
        mode: "number",
        answer: "2/sqrt(5) - 3/40 - 1/(60*sqrt(5))",
        placeholder: "Approximate area to 3 s.f. (in m^2)",
        solution: "Expand the equation of $C$:<br>$$4(x + y)^2 + (y - x)^2 = 16 \\implies 5x^2 + 6xy + 5y^2 = 16$$When $x = 0$: $5y^2 = 16 \\implies y = \\frac{4}{\\sqrt{5}}$ (since $y > 0$).<br><br>Differentiate implicitly with respect to $x$:<br>$$10x + 6y + 6x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 10y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$$At $x = 0, y = \\frac{4}{\\sqrt{5}}$:<br>$$6\\left(\\frac{4}{\\sqrt{5}}\\right) + 10\\left(\\frac{4}{\\sqrt{5}}\\right)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{3}{5}$$Differentiate again with respect to $x$:<br>$$10 + 12\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 6x\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + 10\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + 10y\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 0$$At $x = 0, y = \\frac{4}{\\sqrt{5}}, \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{3}{5}$:<br>$$10 + 12\\left(-\\frac{3}{5}\\right) + 10\\left(\\frac{9}{25}\\right) + \\frac{40}{\\sqrt{5}}\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 0 \\implies \\frac{32}{5} + \\frac{40}{\\sqrt{5}}\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 0 \\implies \\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = -\\frac{4\\sqrt{5}}{25}$$Thus the Maclaurin series up to $x^2$ is:<br>$$y \\approx \\frac{4}{\\sqrt{5}} - \\frac{3}{5}x - \\frac{2\\sqrt{5}}{25}x^2$$Approximate area:<br>$$\\int_0^{0.5} \\left(\\frac{4}{\\sqrt{5}} - \\frac{3}{5}x - \\frac{2}{5\\sqrt{5}}x^2\\right)\\mathrm{d}x = \\left[\\frac{4}{\\sqrt{5}}x - \\frac{3}{10}x^2 - \\frac{2}{15\\sqrt{5}}x^3\\right]_0^{0.5} = \\frac{2}{\\sqrt{5}} - \\frac{3}{40} - \\frac{1}{60\\sqrt{5}} \\approx 0.812\\text{ m}^2 \\quad (\\text{3 s.f.})$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "The curve $C$ is obtained by rotating an ellipse $S$ about the origin in the $x$-$y$ plane. It is known that the curve $C$ can be expressed by the following parametric equations $$x = \\cos t - 2\\sin t, \\quad y = \\cos t + 2\\sin t,$$ where $-\\pi < t \\le \\pi$.<br>Let $L$ be the distance between the origin and a point on $C$. By using differentiation, determine the exact maximum and minimum values of $L$. You do not need to show that these values are maximum and minimum.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Max L =", answer: "2*sqrt(2)", exactRequired: true, placeholder: "Exact value" },
          { label: "Min L =", answer: "sqrt(2)", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "$$L = \\sqrt{(\\cos t - 2\\sin t)^2 + (\\cos t + 2\\sin t)^2} = \\sqrt{2\\cos^2 t + 8\\sin^2 t} = \\sqrt{2 + 6\\sin^2 t}$$Differentiating with respect to $t$:<br>$$\\frac{\\mathrm{d}L}{\\mathrm{d}t} = \\frac{12\\sin t\\cos t}{2\\sqrt{2 + 6\\sin^2 t}} = \\frac{6\\sin t\\cos t}{\\sqrt{2 + 6\\sin^2 t}}$$Setting $\\frac{\\mathrm{d}L}{\\mathrm{d}t} = 0$:<br>$$\\sin t = 0 \\quad \\text{or} \\quad \\cos t = 0 \\implies t = -\\frac{\\pi}{2},\\; 0,\\; \\frac{\\pi}{2},\\; \\pi$$• When $t = \\pm\\frac{\\pi}{2}$: $L = \\sqrt{2 + 6} = 2\\sqrt{2}$ (maximum).<br>• When $t = 0$ or $\\pi$: $L = \\sqrt{2 + 0} = \\sqrt{2}$ (minimum)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Write down a possible cartesian equation of $S$. Hence, determine the total area of the flower bed.",
        type: "self",
        solution: "Since $C$ is an ellipse centred at the origin rotated from $S$, the semi-major and semi-minor axes of $S$ are $2\\sqrt{2}$ and $\\sqrt{2}$ respectively. A possible cartesian equation of $S$ is:<br>$$\\frac{x^2}{8} + \\frac{y^2}{2} = 1 \\quad \\left(\\text{or } \\frac{x^2}{2} + \\frac{y^2}{8} = 1\\right)$$Since rotation preserves area, the total area of the flower bed equals the area enclosed by $S$:<br>$$\\text{Area} = 4\\int_0^{\\sqrt{8}} \\sqrt{2 - \\frac{x^2}{4}}\\,\\mathrm{d}x = \\pi(2\\sqrt{2})(\\sqrt{2}) = 4\\pi \\approx 12.6\\text{ m}^2 \\quad (\\text{3 s.f.})$$"
      }
    ]
  }
]);
