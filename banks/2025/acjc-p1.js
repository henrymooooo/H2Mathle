window.registerQuestions([
  {
    id: "ACJC-2025-P1-Q1",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Without using a calculator, solve the inequality $\\frac{x}{x+2} \\ge \\frac{2}{2-x}$.",
        type: "self",
        solution: "Rearranging all terms to one side:<br>$$\\frac{x}{x+2} - \\frac{2}{2-x} \\ge 0$$<br>$$\\frac{x(2-x) - 2(x+2)}{(x+2)(2-x)} \\ge 0$$<br>$$\\frac{-x^2 - 4}{(x+2)(2-x)} \\ge 0$$<br>Multiply numerator and denominator by $-1$:<br>$$\\frac{x^2 + 4}{(x+2)(x-2)} \\ge 0$$<br>Since $x^2 + 4 > 0$ for all real $x$, we require $(x+2)(x-2) > 0$ (as $x \\ne -2, 2$).<br>Therefore, $x < -2$ or $x > 2$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence, solve the inequality $\\frac{|x|}{|x|+2} \\ge \\frac{2}{2-|x|}$.",
        type: "self",
        solution: "Replacing $x$ with $|x|$ in the result from (a):<br>$$|x| < -2 \\quad (\\text{no real solutions}) \\qquad \\text{or} \\qquad |x| > 2$$<br>Solving $|x| > 2$ gives $x < -2$ or $x > 2$."
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q2",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "The graph of $y = \\frac{ax^2 + bx + c}{x + d}$ has a vertical asymptote with equation $x = -1$ and an oblique asymptote with equation $y = 2x + 2$. It is given that $c \\ne 2$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Write down the value of $d$ and show that $a = 2$ and $b = 4$.",
        type: "self",
        solution: "Since the vertical asymptote is $x = -1$, the denominator $x + d = 0$ at $x = -1$, so $d = 1$.<br>Since the oblique asymptote is $y = 2x + 2$, we can write<br>$$y = 2x + 2 + \\frac{k}{x+1} = \\frac{(2x+2)(x+1) + k}{x+1} = \\frac{2x^2 + 4x + 2 + k}{x+1}$$<br>Comparing coefficients with $y = \\frac{ax^2 + bx + c}{x+1}$, we obtain $a = 2$ and $b = 4$ (shown)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence find the range of values of $c$ if the graph has no stationary points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 220" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="125" x2="245" y2="125" stroke-width="1.2"/>
  <polyline points="239,121 245,125 239,129" fill="none" stroke-width="1.2"/>
  <line x1="130" y1="210" x2="130" y2="15" stroke-width="1.2"/>
  <polyline points="126,21 130,15 134,21" fill="none" stroke-width="1.2"/>
  <text x="242" y="140" stroke="none">x</text>
  <text x="136" y="20" stroke="none">y</text>
  <text x="134" y="138" stroke="none">O</text>
  <line x1="95" y1="18" x2="95" y2="205" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.2"/>
  <text x="58" y="204" stroke="none" font-size="10">x = -1</text>
  <line x1="25" y1="195" x2="225" y2="20" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.2"/>
  <text x="172" y="34" stroke="none" font-size="10">y = 2x + 2</text>
  <path d="M 30,180 Q 75,140 88,20" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <path d="M 102,205 Q 116,105 225,30" fill="none" stroke="#4a8fe7" stroke-width="2"/>
</svg>`,
        solution: "From (a), $y = \\frac{2x^2 + 4x + c}{x + 1} = 2x + 2 + \\frac{c - 2}{x + 1}$, where $c \\ne 2$.<br>Differentiating with respect to $x$:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2 - \\frac{c - 2}{(x + 1)^2}$$<br>Setting $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>$$\\frac{c - 2}{(x + 1)^2} = 2 \\implies (x + 1)^2 = \\frac{c - 2}{2}$$<br>For the graph to have no stationary points, this equation must have no real solutions, so<br>$$\\frac{c - 2}{2} < 0 \\implies c < 2$$<br>(Alternatively, graphically as $x$ → ∞, $y$ approaches $2x + 2$ from below so $c - 2 < 0 \\implies c < 2$.)"
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q3",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    stem: "It is given that $y = x^{xy}$, where $x > 0$, $y > 0$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{y^2(1 + \\ln x)}{1 - \\ln y}$.",
        type: "self",
        solution: "Taking natural logarithms on both sides of $y = x^{xy}$:<br>$$\\ln y = xy \\ln x \\implies \\frac{\\ln y}{y} = x \\ln x$$<br>Differentiating implicitly with respect to $x$:<br>$$\\frac{y \\cdot \\frac{1}{y} - (\\ln y)(1)}{y^2} \\frac{\\mathrm{d}y}{\\mathrm{d}x} = x\\left(\\frac{1}{x}\\right) + (1)\\ln x$$<br>$$\\left(\\frac{1 - \\ln y}{y^2}\\right) \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + \\ln x$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{y^2(1 + \\ln x)}{1 - \\ln y} \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence find the coordinates of the point on the curve $y = x^{xy}$ whose tangent is parallel to the $y$-axis.",
        type: "auto",
        mode: "tuple",
        answer: [1.32109976, 2.71828183],
        placeholder: "Coordinates (x, y)",
        solution: "For the tangent to be parallel to the $y$-axis, $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ is undefined, so the denominator is zero:<br>$$1 - \\ln y = 0 \\implies \\ln y = 1 \\implies y = \\mathrm{e}$$<br>Substituting $y = \\mathrm{e}$ into $\\ln y = xy \\ln x$:<br>$$1 = \\mathrm{e} x \\ln x \\implies x \\ln x = \\frac{1}{\\mathrm{e}}$$<br>Using a graphing calculator, $x = 1.3211 \\approx 1.32$ (3 s.f.).<br>Hence, the coordinates of the point are $(1.32, \\mathrm{e})$ (or $(1.32, 2.72)$)."
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q4",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Integration"],
    stem: "The region $R$ is bounded by the curve with equation $y = x \\ln x$, the lines $x = \\mathrm{e}$, $x = \\mathrm{e}^2$ and the $x$-axis.",
    parts: [
      {
        label: "(Full)",
        marks: 6,
        prompt: "Find the exact volume of the solid formed when $R$ is rotated about the $x$-axis by $2\\pi$ radians. Give your answer in the form $\\frac{\\pi \\mathrm{e}^3}{27}(a\\mathrm{e}^3 + b)$, where $a$ and $b$ are integers to be found.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "26", exactRequired: true, placeholder: "Integer" },
          { label: "b =", answer: "-5", exactRequired: true, placeholder: "Integer" }
        ],
        solution: "Volume $= \\pi \\int_{\\mathrm{e}}^{\\mathrm{e}^2} y^2 \\,\\mathrm{d}x = \\pi \\int_{\\mathrm{e}}^{\\mathrm{e}^2} x^2 (\\ln x)^2 \\,\\mathrm{d}x$.<br>Using integration by parts twice:<br>$$\\int x^2 (\\ln x)^2 \\,\\mathrm{d}x = \\frac{x^3}{3}(\\ln x)^2 - \\int \\frac{x^3}{3} \\cdot \\frac{2\\ln x}{x} \\,\\mathrm{d}x = \\frac{x^3}{3}(\\ln x)^2 - \\frac{2}{3} \\int x^2 \\ln x \\,\\mathrm{d}x$$<br>$$= \\frac{x^3}{3}(\\ln x)^2 - \\frac{2}{3}\\left(\\frac{x^3}{3}\\ln x - \\int \\frac{x^2}{3}\\,\\mathrm{d}x\\right) = \\frac{x^3}{3}(\\ln x)^2 - \\frac{2x^3}{9}\\ln x + \\frac{2x^3}{27} + c$$<br>$$= \\frac{x^3}{27}\\left(9(\\ln x)^2 - 6\\ln x + 2\\right) + c$$<br>Evaluating between $x = \\mathrm{e}$ and $x = \\mathrm{e}^2$:<br>$$V = \\frac{\\pi}{27}\\left[\\mathrm{e}^6(9(4) - 6(2) + 2) - \\mathrm{e}^3(9(1) - 6(1) + 2)\\right] = \\frac{\\pi}{27}(26\\mathrm{e}^6 - 5\\mathrm{e}^3) = \\frac{\\pi \\mathrm{e}^3}{27}(26\\mathrm{e}^3 - 5)$$<br>Hence $a = 26$ and $b = -5$."
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q5",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Vectors"],
    stem: "Relative to the origin $O$, the points $A$ and $B$ have non-zero and non-parallel position vectors $\\mathbf{a}$ and $\\mathbf{b}$ respectively. The plane $p$ has equation $\\mathbf{r} \\cdot \\mathbf{n} = 0$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Given that $\\mathbf{a} \\cdot \\mathbf{n} = \\mathbf{b} \\cdot \\mathbf{n} \\ne 0$, show that the vector $AB$ is perpendicular to $\\mathbf{n}$. Hence, describe the geometrical relationship between $AB$ and the plane $p$.",
        type: "self",
        solution: "Since $\\mathbf{a} \\cdot \\mathbf{n} = \\mathbf{b} \\cdot \\mathbf{n}$,<br>$$(\\mathbf{b} - \\mathbf{a}) \\cdot \\mathbf{n} = 0$$<br>Since $AB = \\mathbf{b} - \\mathbf{a}$ and both $AB$ and $\\mathbf{n}$ are non-zero, $AB$ is perpendicular to $\\mathbf{n}$ (shown).<br>Since $\\mathbf{n}$ is normal to plane $p$ and $A, B$ do not lie on $p$ (as $\\mathbf{a} \\cdot \\mathbf{n} = \\mathbf{b} \\cdot \\mathbf{n} \\ne 0$), the line segment $AB$ is <strong>parallel</strong> to the plane $p$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Write down the equation of a line parallel to $AB$ that is contained in the plane $p$.",
        type: "self",
        solution: "Since the plane $p$ has equation $\\mathbf{r} \\cdot \\mathbf{n} = 0$, the origin $O$ lies in $p$. A line through $O$ parallel to $AB$ has equation:<br>$$\\mathbf{r} = \\lambda(\\mathbf{b} - \\mathbf{a}), \\quad \\lambda \\in \\mathbb{R}$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The point $F$ is the foot of perpendicular from a point $C$ with position vector $\\mathbf{c}$ to the plane $p$. Find the position vector of point $F$, giving your answer in terms of $\\mathbf{c}$ and $\\mathbf{n}$.",
        type: "self",
        solution: "The line through $C$ perpendicular to plane $p$ has equation $\\mathbf{r} = \\mathbf{c} + \\mu \\mathbf{n}$, $\\mu \\in \\mathbb{R}$.<br>Since $F$ lies on $p$, substitute $\\mathbf{r} = \\mathbf{c} + \\mu \\mathbf{n}$ into $\\mathbf{r} \\cdot \\mathbf{n} = 0$:<br>$$(\\mathbf{c} + \\mu \\mathbf{n}) \\cdot \\mathbf{n} = 0 \\implies \\mathbf{c} \\cdot \\mathbf{n} + \\mu |\\mathbf{n}|^2 = 0 \\implies \\mu = -\\frac{\\mathbf{c} \\cdot \\mathbf{n}}{|\\mathbf{n}|^2}$$<br>Hence, the position vector of $F$ is:<br>$$\\mathbf{f} = \\mathbf{c} - \\left(\\frac{\\mathbf{c} \\cdot \\mathbf{n}}{|\\mathbf{n}|^2}\\right)\\mathbf{n}$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q6",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 380 185" width="380" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Figure 1: Open cylindrical tank -->
  <ellipse cx="95" cy="48" rx="48" ry="12" fill="none" stroke-width="1.5"/>
  <ellipse cx="95" cy="48" rx="39" ry="9" fill="none" stroke-width="1.2"/>
  <line x1="47" y1="48" x2="47" y2="142" stroke-width="1.5"/>
  <line x1="143" y1="48" x2="143" y2="142" stroke-width="1.5"/>
  <line x1="56" y1="50" x2="56" y2="132" stroke-dasharray="3,2" opacity="0.6" stroke-width="1"/>
  <line x1="134" y1="50" x2="134" y2="132" stroke-dasharray="3,2" opacity="0.6" stroke-width="1"/>
  <path d="M 47,142 A 48,12 0 0,0 143,142" fill="none" stroke-width="1.5"/>
  <path d="M 47,142 A 48,12 0 0,1 143,142" fill="none" stroke-dasharray="3,2" opacity="0.5" stroke-width="1"/>
  <path d="M 56,132 A 39,9 0 0,0 134,132" fill="none" stroke-dasharray="3,2" opacity="0.55" stroke-width="1"/>
  <!-- r dimension -->
  <line x1="95" y1="22" x2="143" y2="22" stroke-width="1"/>
  <line x1="95" y1="18" x2="95" y2="48" stroke-dasharray="2,2" opacity="0.5" stroke-width="0.9"/>
  <line x1="143" y1="18" x2="143" y2="45" stroke-dasharray="2,2" opacity="0.5" stroke-width="0.9"/>
  <polyline points="100,19 95,22 100,25" fill="none" stroke-width="1"/>
  <polyline points="138,19 143,22 138,25" fill="none" stroke-width="1"/>
  <text x="116" y="17" stroke="none" font-style="italic">r</text>
  <!-- h dimension -->
  <line x1="158" y1="48" x2="158" y2="142" stroke-width="1"/>
  <polyline points="155,53 158,48 161,53" fill="none" stroke-width="1"/>
  <polyline points="155,137 158,142 161,137" fill="none" stroke-width="1"/>
  <text x="165" y="99" stroke="none" font-style="italic">h</text>
  <!-- a thickness labels on Fig 1 -->
  <text x="49" y="34" stroke="none" font-style="italic" font-size="10">a</text>
  <text x="32" y="140" stroke="none" font-style="italic" font-size="10">a</text>
  <text x="72" y="174" stroke="none">Figure 1</text>

  <!-- Figure 2: Cross-sectional view -->
  <path d="M 235,45 L 245,45 L 245,132 L 325,132 L 325,45 L 335,45 L 335,142 L 235,142 Z" fill="rgba(91,155,213,0.22)" stroke="#2c2925" stroke-width="1.4"/>
  <!-- a bottom left -->
  <line x1="235" y1="152" x2="245" y2="152" stroke-width="1"/>
  <text x="237" y="164" stroke="none" font-style="italic" font-size="10">a</text>
  <!-- a bottom right -->
  <line x1="325" y1="152" x2="335" y2="152" stroke-width="1"/>
  <text x="327" y="164" stroke="none" font-style="italic" font-size="10">a</text>
  <!-- a base thickness -->
  <line x1="344" y1="132" x2="344" y2="142" stroke-width="1"/>
  <text x="350" y="141" stroke="none" font-style="italic" font-size="10">a</text>
  <text x="263" y="174" stroke="none">Figure 2</text>
</svg>`,
    stem: "Figure 1 shows an open cylindrical tank. Figure 2 shows the cross-sectional view of the tank. The external radius of the tank is $r\\text{ cm}$, the external height is $h\\text{ cm}$ and the tank is made with a material of thickness $a\\text{ cm}$ throughout. The internal volume of the tank is fixed at $1000\\pi\\text{ cm}^3$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that the volume of the material needed to make the cylindrical tank is given by $V = k\\pi\\left[\\frac{r^2}{(r-a)^2} - 1\\right] + \\pi r^2 a$, where $k$ is a constant to be determined.",
        type: "self",
        solution: "The internal radius is $r - a$ and the internal height is $h - a$.<br>Since the internal volume is $1000\\pi$:<br>$$\\pi(r - a)^2(h - a) = 1000\\pi \\implies h - a = \\frac{1000}{(r - a)^2} \\implies h = \\frac{1000}{(r - a)^2} + a$$<br>The volume of material $V$ is external volume minus internal volume:<br>$$V = \\pi r^2 h - 1000\\pi = \\pi r^2\\left(\\frac{1000}{(r - a)^2} + a\\right) - 1000\\pi$$<br>$$= 1000\\pi\\left[\\frac{r^2}{(r - a)^2} - 1\\right] + \\pi r^2 a$$<br>Thus $k = 1000$ (shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find, in terms of $a$, the value of $r$ that minimises $V$. (You need not show that your answer gives a minimum.)",
        type: "auto",
        mode: "expr",
        vars: { a: [1, 2, 5] },
        answer: "10 + a",
        placeholder: "Expression in terms of a",
        solution: "Differentiating $V$ with respect to $r$:<br>$$\\frac{\\mathrm{d}V}{\\mathrm{d}r} = 1000\\pi\\left[\\frac{2r(r - a)^2 - r^2 \\cdot 2(r - a)}{(r - a)^4}\\right] + 2\\pi a r$$<br>$$= 1000\\pi\\left[\\frac{2r(r - a)((r - a) - r)}{(r - a)^4}\\right] + 2\\pi a r = -\\frac{2000\\pi a r}{(r - a)^3} + 2\\pi a r$$<br>Setting $\\frac{\\mathrm{d}V}{\\mathrm{d}r} = 0$ (with $r > a > 0$):<br>$$\\frac{2000\\pi a r}{(r - a)^3} = 2\\pi a r \\implies (r - a)^3 = 1000 \\implies r - a = 10 \\implies r = 10 + a$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q7",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "A freshly brewed cup of tea, initially at a temperature of $85^\\circ\\text{C}$, is left out to cool in a room with a room temperature of $25^\\circ\\text{C}$. After $20$ minutes, the temperature of the tea is $55^\\circ\\text{C}$.<br>It is known that the rate of change of the temperature of the tea is proportional to the difference between the temperature of the tea and the room temperature.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Given that $\\theta$ is the temperature of the tea $t$ minutes after the tea is left out to cool, show that $\\theta = 25 + 60\\mathrm{e}^{-kt}$, where $k$ is a constant to be determined.",
        type: "self",
        solution: "From the rate of cooling, $\\frac{\\mathrm{d}\\theta}{\\mathrm{d}t} = -k(\\theta - 25)$, where $k > 0$ is a constant.<br>Separating variables and integrating:<br>$$\\int \\frac{1}{\\theta - 25} \\,\\mathrm{d}\\theta = \\int -k \\,\\mathrm{d}t$$<br>$$\\ln|\\theta - 25| = -kt + c \\implies \\theta - 25 = A\\mathrm{e}^{-kt}$$<br>When $t = 0$, $\\theta = 85$: $85 - 25 = A \\implies A = 60$, so $\\theta = 25 + 60\\mathrm{e}^{-kt}$.<br>When $t = 20$, $\\theta = 55$:<br>$$55 = 25 + 60\\mathrm{e}^{-20k} \\implies \\mathrm{e}^{-20k} = \\frac{1}{2} \\implies k = \\frac{\\ln 2}{20} \\approx 0.0347 \\text{ (3 s.f.)}$$<br>Hence $\\theta = 25 + 60\\mathrm{e}^{-kt}$ with $k = \\frac{\\ln 2}{20} \\approx 0.0347$ (shown)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Sketch the graph of $\\theta$ against $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="170" x2="260" y2="170" stroke-width="1.3"/>
  <polyline points="254,166 260,170 254,174" fill="none" stroke-width="1.3"/>
  <line x1="50" y1="188" x2="50" y2="18" stroke-width="1.3"/>
  <polyline points="46,24 50,18 54,24" fill="none" stroke-width="1.3"/>
  <text x="256" y="185" stroke="none" font-style="italic">t</text>
  <text x="36" y="24" stroke="none" font-style="italic">θ</text>
  <text x="36" y="184" stroke="none" font-style="italic">O</text>
  <line x1="50" y1="130" x2="245" y2="130" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.2"/>
  <text x="200" y="123" stroke="none" font-size="10">θ = 25</text>
  <path d="M 50,40 C 75,85 125,118 245,127" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <circle cx="50" cy="40" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="30" y="44" stroke="none">85</text>
</svg>`,
        solution: "For $t \\ge 0$, the graph starts at $(0, 85)$, decreases monotonically and is concave upwards, approaching the horizontal asymptote $\\theta = 25$ from above as $t$ increases."
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q8",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Functions", "Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 280 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="145" x2="260" y2="145" stroke-width="1.3"/>
  <polyline points="254,141 260,145 254,149" fill="none" stroke-width="1.3"/>
  <line x1="115" y1="198" x2="115" y2="18" stroke-width="1.3"/>
  <polyline points="111,24 115,18 119,24" fill="none" stroke-width="1.3"/>
  <text x="255" y="160" stroke="none" font-style="italic">x</text>
  <text x="102" y="24" stroke="none" font-style="italic">y</text>
  <text x="120" y="159" stroke="none" font-style="italic">O</text>
  <path d="M 55,196 Q 145,-25 225,145" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <circle cx="225" cy="145" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="58" y="160" stroke="none">(a, 0)</text>
  <text x="215" y="162" stroke="none">(b, 0)</text>
  <text x="80" y="79" stroke="none">(0, c)</text>
  <text x="216" y="128" stroke="none" font-size="10">y = f(x)</text>
  <text x="115" y="207" stroke="none" font-size="10">Figure 1</text>
</svg>`,
    stem: "The curve with equation $y = \\mathrm{f}(x)$ for $x \\le b$, where $\\mathrm{f}(x)$ is a <strong>quadratic</strong> function, intersects the $x$-axis at the points $(a, 0)$ and $(b, 0)$, and the $y$-axis at the point $(0, c)$. The graph of $y = \\mathrm{f}(x)$ is shown in Figure 1. The scales on the $x$- and $y$-axes are the same.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{f}(|x|)$, labelling the points where the graph intersects or touches the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 190" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="145" x2="260" y2="145" stroke-width="1.3"/>
  <polyline points="254,141 260,145 254,149" fill="none" stroke-width="1.3"/>
  <line x1="140" y1="175" x2="140" y2="18" stroke-width="1.3"/>
  <polyline points="136,24 140,18 144,24" fill="none" stroke-width="1.3"/>
  <text x="255" y="160" stroke="none" font-style="italic">x</text>
  <text x="126" y="24" stroke="none" font-style="italic">y</text>
  <text x="145" y="160" stroke="none" font-style="italic">O</text>
  <path d="M 140,85 Q 175,10 230,145" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <path d="M 140,85 Q 105,10 50,145" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <circle cx="230" cy="145" r="3.5" fill="#4a8fe7" stroke="none"/>
  <circle cx="50" cy="145" r="3.5" fill="#4a8fe7" stroke="none"/>
  <text x="32" y="162" stroke="none">(-b, 0)</text>
  <text x="218" y="162" stroke="none">(b, 0)</text>
  <text x="146" y="96" stroke="none">(0, c)</text>
  <text x="206" y="102" stroke="none" font-size="10">y = f(|x|)</text>
</svg>`,
        solution: "Retain the portion of $y = \\mathrm{f}(x)$ for $0 \\le x \\le b$ and reflect it in the $y$-axis. The graph is defined for $-b \\le x \\le b$, meets the $y$-axis at $(0, c)$, and terminates at closed endpoints $(-b, 0)$ and $(b, 0)$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\frac{1}{\\mathrm{f}(x)}$, labelling the points where the graph intersects or touches the axes, as well as the equations of any asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="120" x2="260" y2="120" stroke-width="1.3"/>
  <polyline points="254,116 260,120 254,124" fill="none" stroke-width="1.3"/>
  <line x1="120" y1="190" x2="120" y2="18" stroke-width="1.3"/>
  <polyline points="116,24 120,18 124,24" fill="none" stroke-width="1.3"/>
  <text x="255" y="135" stroke="none" font-style="italic">x</text>
  <text x="107" y="24" stroke="none" font-style="italic">y</text>
  <text x="125" y="135" stroke="none" font-style="italic">O</text>
  <line x1="75" y1="20" x2="75" y2="188" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.2"/>
  <text x="79" y="184" stroke="none" font-size="10">x = a</text>
  <line x1="215" y1="20" x2="215" y2="188" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.2"/>
  <text x="219" y="184" stroke="none" font-size="10">x = b</text>
  <text x="24" y="114" stroke="none" font-size="10">y = 0</text>
  <path d="M 24,123 Q 65,127 71,185" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <path d="M 82,28 Q 145,135 208,28" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <circle cx="120" cy="74" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="85" y="76" stroke="none" font-size="10">(0, 1/c)</text>
  <text x="220" y="38" stroke="none" font-size="10">y = 1/f(x)</text>
</svg>`,
        solution: "Defined for $x < b$, $x \\ne a$:<br>- Vertical asymptotes: $x = a$ and $x = b$.<br>- Horizontal asymptote: $y = 0$ (as $x$ → −∞).<br>- For $x < a$, the curve lies below the $x$-axis, decreasing from $y = 0^-$ towards −∞ as $x$ → $a^-$.<br>- For $a < x < b$, the curve lies above the $x$-axis, with a $y$-intercept at $\\left(0, \\frac{1}{c}\\right)$ and a minimum turning point corresponding to the maximum of $\\mathrm{f}(x)$."
      },
      {
        label: "(a)(iii)",
        marks: 2,
        prompt: "Describe fully a sequence of transformations which transforms the graph of $y = \\mathrm{f}(2x + 1)$ onto the graph of $y = \\mathrm{f}(x)$.",
        type: "self",
        solution: "<strong>Method 1:</strong><br>1. Scale parallel to the $x$-axis by a scale factor of $2$ (gives $y = \\mathrm{f}(x + 1)$).<br>2. Translate $1$ unit in the positive $x$-direction (gives $y = \\mathrm{f}(x)$).<br><br><strong>Method 2 (Alternative):</strong><br>1. Translate $0.5$ units in the positive $x$-direction (gives $y = \\mathrm{f}(2x)$).<br>2. Scale parallel to the $x$-axis by a scale factor of $2$ (gives $y = \\mathrm{f}(x)$)."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "The function $y = \\mathrm{g}(x)$ is such that $\\mathrm{g}(x) = \\mathrm{f}(x)$ for $x \\le k$, and $y = \\mathrm{g}^{-1}(x)$ exists. Find the largest possible value of $k$ in terms of $a$ and $b$.",
        type: "auto",
        mode: "expr",
        vars: { a: [-2, -3, -1], b: [4, 5, 7] },
        answer: "(a+b)/2",
        placeholder: "Expression in terms of a and b",
        solution: "Since $y = \\mathrm{f}(x)$ is a quadratic curve with $x$-intercepts $a$ and $b$, its maximum turning point occurs at $x = \\frac{a + b}{2}$.<br>For $\\mathrm{g}$ to be one-to-one so that $\\mathrm{g}^{-1}$ exists, the largest possible value of $k$ is $\\frac{a + b}{2}$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Using the value of $k$ found in (b)(i), sketch the graph of $y = \\mathrm{g}^{-1}(x)$ on the same diagram as $y = \\mathrm{f}(x)$, labelling the intersections with the axes. Write down the range of $\\mathrm{g}^{-1}$ in terms of $a$ and $b$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 230" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="145" x2="260" y2="145" stroke-width="1.3"/>
  <polyline points="254,141 260,145 254,149" fill="none" stroke-width="1.3"/>
  <line x1="115" y1="215" x2="115" y2="15" stroke-width="1.3"/>
  <polyline points="111,21 115,15 119,21" fill="none" stroke-width="1.3"/>
  <text x="255" y="160" stroke="none" font-style="italic">x</text>
  <text x="102" y="21" stroke="none" font-style="italic">y</text>
  <text x="120" y="159" stroke="none" font-style="italic">O</text>
  <!-- y = x dashed line -->
  <line x1="45" y1="215" x2="225" y2="35" stroke="#cf5652" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.2"/>
  <text x="218" y="34" stroke="none" fill="#cf5652" font-size="10">y = x</text>
  <!-- y = f(x) -->
  <path d="M 55,196 Q 145,-25 225,145" fill="none" stroke="#4a8fe7" stroke-width="1.8" opacity="0.7"/>
  <circle cx="225" cy="145" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="80" y="79" stroke="none" font-size="10">(0, c)</text>
  <text x="58" y="160" stroke="none" font-size="10">(a, 0)</text>
  <text x="218" y="160" stroke="none" font-size="10">(b, 0)</text>
  <!-- y = g^-1(x) reflected from left branch x <= (a+b)/2 -->
  <path d="M 64,205 Q 150,178 183,145 Q 208,125 212,115" fill="none" stroke="#cf5652" stroke-width="2.2"/>
  <circle cx="212" cy="115" r="3.5" fill="#cf5652" stroke="none"/>
  <line x1="115" y1="115" x2="212" y2="115" stroke="#cf5652" stroke-dasharray="3,2" opacity="0.55" stroke-width="1"/>
  <text x="120" y="111" stroke="none" fill="#cf5652" font-size="10">(a+b)/2</text>
  <text x="174" y="160" stroke="none" fill="#cf5652" font-size="10">(c, 0)</text>
  <text x="120" y="191" stroke="none" fill="#cf5652" font-size="10">(0, a)</text>
  <text x="148" y="196" stroke="none" fill="#cf5652" font-size="10">y = g⁻¹(x)</text>
</svg>`,
        solution: "Reflect only the portion of $y = \\mathrm{f}(x)$ for $x \\le \\frac{a+b}{2}$ in the line $y = x$.<br>The graph of $y = \\mathrm{g}^{-1}(x)$ intersects the $x$-axis at $(c, 0)$ and the $y$-axis at $(0, a)$, and terminates at a closed endpoint with $y$-coordinate $\\frac{a+b}{2}$.<br>The range of $\\mathrm{g}^{-1}$ is the domain of $\\mathrm{g}$:<br>$$\\mathrm{R}_{\\mathrm{g}^{-1}} = \\mathrm{D}_{\\mathrm{g}} = \\left(-\\text{∞}, \\frac{a + b}{2}\\right]$$"
      },
      {
        label: "(b)(iii)",
        marks: 1,
        prompt: "Explain why the solution to $\\mathrm{g}^{-1}(x) = x$ satisfies the equation $\\mathrm{g}^{-1}(x) = \\mathrm{g}(x)$.",
        type: "self",
        solution: "The solution to $\\mathrm{g}^{-1}(x) = x$ is the $x$-coordinate of the point of intersection between the graph of $y = \\mathrm{g}^{-1}(x)$ and the line $y = x$.<br>Since the graphs of $y = \\mathrm{g}^{-1}(x)$ and $y = \\mathrm{g}(x)$ are reflections of each other in the line $y = x$, if $y = \\mathrm{g}^{-1}(x)$ intersects $y = x$ at a point, then $y = \\mathrm{g}(x)$ must also intersect $y = x$ at that exact same point.<br>Hence, the solution to $\\mathrm{g}^{-1}(x) = x$ also satisfies $\\mathrm{g}^{-1}(x) = \\mathrm{g}(x)$."
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q9",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Vectors"],
    stem: "The planes $\\pi_1$ and $\\pi_2$ have equations $3x + c(y + z) - 2 = 0$ and $\\mathbf{r} = (\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}) + s(2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) + t(\\mathbf{i} - \\mathbf{k})$ respectively, where $c$ is a constant, and $s$ and $t$ are parameters. The point $A(1, 3, -2)$ lies in both planes.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that $c = -1$.",
        type: "self",
        solution: "Substitute $A(1, 3, -2)$ into $3x + c(y + z) - 2 = 0$:<br>$$3(1) + c(3 - 2) - 2 = 0 \\implies 1 + c = 0 \\implies c = -1 \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Show that the vector equation of the line of intersection of $\\pi_1$ and $\\pi_2$, line $l$, is given by $\\mathbf{r} = \\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k} + \\alpha(\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k})$, where $\\alpha$ is a parameter.",
        type: "self",
        solution: "Substitute $\\mathbf{r} = \\begin{pmatrix} 1 + 2s + t \\\\ 3 - s \\\\ -2 + 3s - t \\end{pmatrix}$ into $\\pi_1: \\mathbf{r} \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ -1 \\end{pmatrix} = 2$:<br>$$3(1 + 2s + t) - (3 - s) - (-2 + 3s - t) = 2$$<br>$$3 + 6s + 3t - 3 + s + 2 - 3s + t = 2 \\implies 4s + 4t = 0 \\implies s = -t$$<br>Substituting $s = -t$ into $\\mathbf{r}$:<br>$$\\mathbf{r} = \\begin{pmatrix} 1 - t \\\\ 3 + t \\\\ -2 - 4t \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\\\ -2 \\end{pmatrix} - t\\begin{pmatrix} 1 \\\\ -1 \\\\ 4 \\end{pmatrix}$$<br>Letting $\\alpha = -t$, the line of intersection is $\\mathbf{r} = \\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k} + \\alpha(\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k})$ (shown)."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Find the position vectors of the points on the line $l$ which are a distance of $3\\sqrt{2}$ from the point $B(2, -3, 7)$.",
        type: "self",
        solution: "Let $P$ be a point on $l$, so $OP = \\begin{pmatrix} 1 + \\alpha \\\\ 3 - \\alpha \\\\ -2 + 4\\alpha \\end{pmatrix}$.<br>Then $BP = \\begin{pmatrix} 1 + \\alpha \\\\ 3 - \\alpha \\\\ -2 + 4\\alpha \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -3 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} -1 + \\alpha \\\\ 6 - \\alpha \\\\ -9 + 4\\alpha \\end{pmatrix}$.<br>Given $|BP| = 3\\sqrt{2}$:<br>$$(-1 + \\alpha)^2 + (6 - \\alpha)^2 + (-9 + 4\\alpha)^2 = 18$$<br>$$18\\alpha^2 - 86\\alpha + 118 = 18 \\implies 9\\alpha^2 - 43\\alpha + 50 = 0$$<br>$$(\\alpha - 2)(9\\alpha - 25) = 0 \\implies \\alpha = 2 \\text{ or } \\alpha = \\frac{25}{9}$$<br>Hence, the position vectors of the two points are:<br>$$\\begin{pmatrix} 3 \\\\ 1 \\\\ 6 \\end{pmatrix} \\qquad \\text{and} \\qquad \\frac{1}{9}\\begin{pmatrix} 34 \\\\ 2 \\\\ 82 \\end{pmatrix}$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Find the equation of the plane $\\pi_3$ which is parallel to $\\pi_2$ and contains the point $B$. Hence show that the distance between the planes $\\pi_2$ and $\\pi_3$ is $\\frac{20}{3\\sqrt{3}}$.",
        type: "self",
        solution: "A normal vector to $\\pi_2$ is:<br>$$\\mathbf{n}_2 = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\end{pmatrix}$$<br>For $\\pi_2$, passing through $A(1, 3, -2)$:<br>$$\\pi_2: \\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\\\ -2 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\end{pmatrix} = 14$$<br>For $\\pi_3$, parallel to $\\pi_2$ and passing through $B(2, -3, 7)$:<br>$$\\pi_3: \\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 7 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\end{pmatrix} = -6$$<br>The perpendicular distance between $\\pi_2$ and $\\pi_3$ is:<br>$$\\frac{|14 - (-6)|}{\\sqrt{1^2 + 5^2 + 1^2}} = \\frac{20}{\\sqrt{27}} = \\frac{20}{3\\sqrt{3}} \\quad (\\text{shown})$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q10",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong>",
    parts: [
      {
        label: "(a)",
        marks: 6,
        prompt: "One of the roots of the equation $\\omega^4 - 2\\omega^3 + 10\\omega^2 + p\\omega + q = 0$, where $p$ and $q$ are real, is $2 + 3\\mathrm{i}$. Find the values of $p$ and $q$ and the other roots of the equation.",
        type: "self",
        solution: "Since all coefficients are real, complex roots occur in conjugate pairs, so $2 - 3\\mathrm{i}$ is also a root.<br>The quadratic factor corresponding to $2 \\pm 3\\mathrm{i}$ is:<br>$$(\\omega - (2 + 3\\mathrm{i}))(\\omega - (2 - 3\\mathrm{i})) = (\\omega - 2)^2 + 9 = \\omega^2 - 4\\omega + 13$$<br>Let $\\omega^4 - 2\\omega^3 + 10\\omega^2 + p\\omega + q = (\\omega^2 - 4\\omega + 13)(\\omega^2 + a\\omega + b)$.<br>Comparing coefficients:<br>- $\\omega^3$: $-2 = a - 4 \\implies a = 2$<br>- $\\omega^2$: $10 = b - 4a + 13 = b - 8 + 13 \\implies b = 5$<br>- $\\omega^1$: $p = -4b + 13a = -20 + 26 = 6$<br>- $\\omega^0$: $q = 13b = 65$<br>Solving $\\omega^2 + 2\\omega + 5 = 0$:<br>$$\\omega = \\frac{-2 \\pm \\sqrt{4 - 20}}{2} = -1 \\pm 2\\mathrm{i}$$<br>Hence $p = 6$, $q = 65$, and the other roots are $2 - 3\\mathrm{i}$, $-1 + 2\\mathrm{i}$ and $-1 - 2\\mathrm{i}$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "The complex numbers $u$ and $v$ are such that $u = -\\sqrt{2} + \\mathrm{i}\\sqrt{2}$, and $|v| = 3$ and $\\arg v = \\theta$, where $0 < \\theta < \\frac{\\pi}{4}$. The points $A$, $B$ and $C$ represent $u$, $v$ and $u + v$ respectively on an Argand diagram.<br>Find the modulus and argument of $u$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "|u| =", answer: "2", exactRequired: true, placeholder: "Exact value" },
          { label: "arg(u) =", answer: "3*pi/4", exactRequired: true, placeholder: "Exact radians" }
        ],
        solution: "$$|u| = \\sqrt{(-\\sqrt{2})^2 + (\\sqrt{2})^2} = \\sqrt{4} = 2$$<br>Since $u$ lies in the second quadrant with basic angle $\\tan^{-1}\\left(\\frac{\\sqrt{2}}{\\sqrt{2}}\\right) = \\frac{\\pi}{4}$:<br>$$\\arg(u) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$$"
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Sketch the points $A$, $B$ and $C$ on an Argand diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 220" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="185" x2="265" y2="185" stroke-width="1.3"/>
  <polyline points="259,181 265,185 259,189" fill="none" stroke-width="1.3"/>
  <line x1="115" y1="205" x2="115" y2="18" stroke-width="1.3"/>
  <polyline points="111,24 115,18 119,24" fill="none" stroke-width="1.3"/>
  <text x="242" y="202" stroke="none">Re(z)</text>
  <text x="122" y="24" stroke="none">Im(z)</text>
  <text x="101" y="200" stroke="none" font-style="italic">O</text>
  <!-- O=(115,185), unit=36px: A=u=(-50.9,-50.9)->(64.1,134.1), B=v=(3*36*cos22°, -3*36*sin22°)=(100.1,-40.5)->(215.1,144.5), C=(164.2,93.6) -->
  <line x1="115" y1="185" x2="64" y2="134" stroke="#4a8fe7" stroke-width="2"/>
  <line x1="115" y1="185" x2="215" y2="145" stroke="#4a8fe7" stroke-width="2"/>
  <line x1="115" y1="185" x2="164" y2="94" stroke="#cf5652" stroke-width="2"/>
  <line x1="64" y1="134" x2="164" y2="94" stroke-dasharray="4,3" opacity="0.6" stroke-width="1.2"/>
  <line x1="215" y1="145" x2="164" y2="94" stroke-dasharray="4,3" opacity="0.6" stroke-width="1.2"/>
  <circle cx="64" cy="134" r="3.2" fill="#4a8fe7" stroke="none"/>
  <circle cx="215" cy="145" r="3.2" fill="#4a8fe7" stroke="none"/>
  <circle cx="164" cy="94" r="3.2" fill="#cf5652" stroke="none"/>
  <text x="30" y="132" stroke="none">A : u</text>
  <text x="220" y="146" stroke="none">B : v</text>
  <text x="169" y="88" stroke="none" fill="#cf5652">C : u + v</text>
  <!-- Angle arcs -->
  <path d="M 145,185 A 30,30 0 0,0 143,174" fill="none" stroke-width="1"/>
  <text x="150" y="180" stroke="none" font-size="10">θ</text>
  <path d="M 135,185 A 20,20 0 0,0 101,171" fill="none" stroke-width="1"/>
  <text x="86" y="169" stroke="none" font-size="10">3π/4</text>
</svg>`,
        solution: "Plot $A$ in the second quadrant with $OA = 2$ at angle $\\frac{3\\pi}{4}$, and $B$ in the first quadrant with $OB = 3 > OA$ at angle $\\theta \\in (0, \\frac{\\pi}{4})$. Point $C$ completes the parallelogram $OACB$."
      },
      {
        label: "(b)(iii)",
        marks: 3,
        prompt: "By finding the angle $OAC$ in terms of $\\theta$ or otherwise, show that $|u + v|^2 = a + b\\cos(\\theta + K)$, where $a$, $b$ and $K$ are constants to be determined.",
        type: "self",
        solution: "In parallelogram $OACB$, $\\text{angle } AOB = \\frac{3\\pi}{4} - \\theta$.<br>Since $OB$ is parallel to $AC$,<br>$$\\text{angle } OAC = \\pi - \\left(\\frac{3\\pi}{4} - \\theta\\right) = \\theta + \\frac{\\pi}{4}$$<br>Applying the cosine rule to triangle $OAC$ (with $OA = 2$, $AC = OB = 3$, and $OC = |u + v|$):<br>$$|u + v|^2 = 2^2 + 3^2 - 2(2)(3)\\cos\\left(\\theta + \\frac{\\pi}{4}\\right) = 13 - 12\\cos\\left(\\theta + \\frac{\\pi}{4}\\right)$$<br>Hence $a = 13$, $b = -12$, and $K = \\frac{\\pi}{4}$ (or equivalently $a = 13$, $b = 12$, $K = -\\frac{3\\pi}{4}$)."
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q11",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation", "Integration"],
    diagramSvg: `<svg viewBox="0 0 280 215" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Diagram for part (d): xy^2 = 1 with tangent at (p^2, 1/p) cutting at (4p^2, -1/(2p)), shaded region S -->
  <line x1="20" y1="110" x2="255" y2="110" stroke-width="1.3"/>
  <polyline points="249,106 255,110 249,114" fill="none" stroke-width="1.3"/>
  <line x1="55" y1="205" x2="55" y2="18" stroke-width="1.3"/>
  <polyline points="51,24 55,18 59,24" fill="none" stroke-width="1.3"/>
  <text x="250" y="125" stroke="none" font-style="italic">x</text>
  <text x="41" y="24" stroke="none" font-style="italic">y</text>
  <text x="41" y="124" stroke="none" font-style="italic">O</text>
  <!-- Shaded region S between x=p^2 (x=85), tangent to (4p^2, -1/2p) (x=175, y=134), and lower curve y=-1/sqrt(x) -->
  <path d="M 85,62 L 175,134 Q 120,141 85,158 Z" fill="rgba(91,155,213,0.28)" stroke="none"/>
  <!-- Upper branch y = 1/sqrt(x) -->
  <path d="M 65,24 C 72,50 85,62 115,75 C 155,86 205,91 245,94" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Lower branch y = -1/sqrt(x) -->
  <path d="M 65,196 C 72,170 85,158 115,145 C 155,134 205,129 245,126" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Vertical line x = p^2 -->
  <line x1="85" y1="26" x2="85" y2="195" stroke="#2c2925" stroke-width="1.3"/>
  <text x="72" y="208" stroke="none" font-size="10">x = p²</text>
  <!-- Tangent line -->
  <line x1="42" y1="27.6" x2="232" y2="179.6" stroke="#cf5652" stroke-width="1.8"/>
  <circle cx="85" cy="62" r="3" fill="#cf5652" stroke="none"/>
  <circle cx="175" cy="134" r="3" fill="#cf5652" stroke="none"/>
  <text x="92" y="57" stroke="none" font-size="10">(p², 1/p)</text>
  <text x="165" y="152" stroke="none" font-size="10">(4p², -1/(2p))</text>
  <text x="208" y="84" stroke="none" font-size="10">xy² = 1</text>
  <text x="195" y="192" stroke="none" fill="#cf5652" font-size="10">2p³y + x = 3p²</text>
  <text x="104" y="125" stroke="none" font-weight="bold" fill="#2c2925">S</text>
</svg>`,
    stem: "The curve $C$ is defined by the parametric equations $x = at^2$, $y = \\frac{a}{t}$, $t \\ne 0$, where $a$ is a positive constant. (The diagram above illustrates part (d) for $a = 1$.)",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that the equation of the tangent to the curve at the point $P\\left(ap^2, \\frac{a}{p}\\right)$ is $2p^3 y + x = 3ap^2$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 2at, \\qquad \\frac{\\mathrm{d}y}{\\mathrm{d}t} = -\\frac{a}{t^2}$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{a}{t^2} \\div 2at = -\\frac{1}{2t^3}$$<br>At $P\\left(ap^2, \\frac{a}{p}\\right)$, $t = p$, so the gradient is $-\\frac{1}{2p^3}$.<br>Equation of tangent:<br>$$y - \\frac{a}{p} = -\\frac{1}{2p^3}(x - ap^2)$$<br>Multiply throughout by $2p^3$:<br>$$2p^3 y - 2ap^2 = -x + ap^2 \\implies 2p^3 y + x = 3ap^2 \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the equations of the tangents to $C$ at the points where $x = a$. Find also the acute angle between these tangents.",
        type: "self",
        solution: "When $x = a$, $ap^2 = a \\implies p^2 = 1 \\implies p = \\pm 1$.<br>Substituting $p = 1$ into $2p^3 y + x = 3ap^2$:<br>$$2y + x = 3a \\quad \\left(\\text{or } y = -\\frac{1}{2}x + \\frac{3a}{2}\\right)$$<br>Substituting $p = -1$:<br>$$-2y + x = 3a \\quad \\left(\\text{or } y = \\frac{1}{2}x - \\frac{3a}{2}\\right)$$<br>The gradients are $-\\frac{1}{2}$ and $\\frac{1}{2}$. The acute angle $\\theta$ between them is:<br>$$\\theta = 2\\tan^{-1}\\left(\\frac{1}{2}\\right) = 53.1^\\circ \\quad (\\text{or } 0.927\\text{ radians})$$"
      },
      {
        label: "(c)(i)",
        marks: 1,
        prompt: "Show that $(q - p)^2(q + 2p) = q^3 - 3p^2 q + 2p^3$.",
        type: "self",
        solution: "$$(q - p)^2(q + 2p) = (q^2 - 2pq + p^2)(q + 2p)$$<br>$$= q^3 + 2pq^2 - 2pq^2 - 4p^2 q + p^2 q + 2p^3 = q^3 - 3p^2 q + 2p^3 \\quad (\\text{shown})$$"
      },
      {
        label: "(c)(ii)",
        marks: 3,
        prompt: "The tangent to the curve at $P$ cuts the curve again at $Q\\left(aq^2, \\frac{a}{q}\\right)$. Find $q$ in terms of $p$.",
        type: "auto",
        mode: "expr",
        vars: { p: [1, 2, 3] },
        answer: "-2*p",
        placeholder: "Expression in terms of p",
        solution: "Substitute $Q\\left(aq^2, \\frac{a}{q}\\right)$ into $2p^3 y + x = 3ap^2$:<br>$$2p^3\\left(\\frac{a}{q}\\right) + aq^2 = 3ap^2$$<br>Divide by $a > 0$ and multiply by $q$:<br>$$q^3 - 3p^2 q + 2p^3 = 0$$<br>Using (c)(i), $(q - p)^2(q + 2p) = 0$.<br>Since $Q$ is distinct from $P$, $q \\ne p$, so $q = -2p$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "For $a = 1$, the Cartesian equation of $C$ is $xy^2 = 1$, and the tangent at $\\left(p^2, \\frac{1}{p}\\right)$ cuts the curve again at $\\left(4p^2, -\\frac{1}{2p}\\right)$ (with $p > 0$). The region $S$ is bounded by this tangent, the curve $C$ and the line $x = p^2$. Find the area of $S$ in terms of $p$.",
        type: "auto",
        mode: "expr",
        vars: { p: [1, 2, 4] },
        answer: "11*p/4",
        placeholder: "Expression in terms of p",
        solution: "The region $S$ is bounded above by the tangent $y = \\frac{3p^2 - x}{2p^3}$ and below by the lower branch of $xy^2 = 1$, i.e. $y = -\\frac{1}{\\sqrt{x}}$, from $x = p^2$ to $x = 4p^2$.<br>$$\\text{Area} = \\int_{p^2}^{4p^2} \\left(\\frac{3p^2 - x}{2p^3} - \\left(-\\frac{1}{\\sqrt{x}}\\right)\\right) \\mathrm{d}x$$<br>$$= \\frac{1}{2p^3}\\left[3p^2 x - \\frac{x^2}{2}\\right]_{p^2}^{4p^2} + \\left[2\\sqrt{x}\\right]_{p^2}^{4p^2}$$<br>$$= \\frac{1}{2p^3}\\left((12p^4 - 8p^4) - \\left(3p^4 - \\frac{p^4}{2}\\right)\\right) + (4p - 2p)$$<br>$$= \\frac{1}{2p^3}\\left(\\frac{3p^4}{2}\\right) + 2p = \\frac{3p}{4} + 2p = \\frac{11p}{4}$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P1-Q12",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "Sarah, a Singaporean Citizen, started a 4-year undergraduate Computing course at the National University of Singapore (NUS) in August 2021. The annual tuition fee, after the MOE Tuition Grant, is SGD 8,250. Sarah took a Tuition Fee Loan (TFL) covering $90\\%$ of her tuition fees. This loan is interest-free during her course of study.<br><br>Sarah decided to set aside SGD $x$ per month from August 2021. This amount is increased by SGD 2 each subsequent month. (Sarah set aside SGD $x$ in August 2021, SGD $(x + 2)$ in September 2021, ...) With the amount set aside, she repaid one-fifth of her total TFL at the end of July 2025.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the value of $x$.",
        type: "auto",
        mode: "number",
        answer: "76.75",
        dp: 2,
        placeholder: "Exact value",
        solution: "Total TFL $= 0.90 \\times 8250 \\times 4 = \\text{SGD } 29700$.<br>Amount repaid before graduation $= \\frac{1}{5} \\times 29700 = \\text{SGD } 5940$.<br>From August 2021 to July 2025 inclusive, there are $4 \\times 12 = 48$ months.<br>The monthly amounts form an AP with first term $x$, common difference $d = 2$, and $n = 48$:<br>$$\\frac{48}{2}\\left[2x + (48 - 1)(2)\\right] = 5940$$<br>$$24(2x + 94) = 5940 \\implies 2x + 94 = 247.5 \\implies x = 76.75$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Upon Sarah's graduation, the TFL's interest rate becomes effective at a fixed rate of $0.4\\%$ per month, calculated on the outstanding balance at the end of the month. The interest is first charged on 31st August 2025. Sarah plans to make monthly repayments of SGD $y$ to the bank on the 1st of every month, starting from 1st September 2025.<br>Find the amount of outstanding loan (in SGD) after Sarah's first monthly repayment.",
        type: "auto",
        mode: "expr",
        vars: { y: [500, 700, 1000] },
        answer: "23855.04 - y",
        placeholder: "Expression in terms of y",
        solution: "Outstanding loan after graduation $= \\frac{4}{5} \\times 29700 = \\text{SGD } 23760$.<br>After $0.4\\%$ interest on 31st August 2025, balance is $23760(1.004) = 23855.04$.<br>After the first repayment of SGD $y$ on 1st September 2025, the outstanding loan is:<br>$$\\text{SGD } (23760(1.004) - y) = \\text{SGD } (23855.04 - y)$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Show that the amount of outstanding loan after Sarah's $n$th monthly repayment is $23760(1.004)^n - 250y(1.004^n - 1)$.",
        type: "self",
        solution: "After 1st repayment: $23760(1.004) - y$.<br>After 2nd repayment: $(23760(1.004) - y)(1.004) - y = 23760(1.004)^2 - 1.004y - y$.<br>After 3rd repayment: $23760(1.004)^3 - 1.004^2 y - 1.004y - y$.<br>Following this pattern, after the $n$th repayment, the outstanding loan is:<br>$$23760(1.004)^n - y\\left(1 + 1.004 + 1.004^2 + \\dots + 1.004^{n-1}\\right)$$<br>Using the sum of a GP with first term $1$, common ratio $1.004$, and $n$ terms:<br>$$= 23760(1.004)^n - y\\left(\\frac{1.004^n - 1}{1.004 - 1}\\right) = 23760(1.004)^n - 250y(1.004^n - 1) \\quad (\\text{shown})$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Sarah wants to pay off her remaining loan by the end of 3 years. Find the value of $y$.",
        type: "auto",
        mode: "number",
        answer: "709.976935",
        dp: 2,
        placeholder: "Nearest cent (2 d.p.)",
        solution: "3 years corresponds to $n = 36$ monthly repayments.<br>We require the outstanding balance after 36 repayments to be $\\le 0$:<br>$$23760(1.004)^{36} - 250y(1.004^{36} - 1) \\le 0$$<br>$$y \\ge \\frac{23760(1.004)^{36}}{250(1.004^{36} - 1)} = 709.9769\\dots$$<br>Hence $y = 709.98$ (to the nearest cent)."
      },
      {
        label: "(e)",
        marks: 4,
        prompt: "Sarah decided on a different repayment strategy. For the first 24 months, she repays SGD 500 per month. After these 24 months, she doubles her monthly repayment to SGD 1000. Determine the month and year Sarah will clear her loan and calculate the amount of her final repayment.",
        type: "self",
        solution: "After $n = 24$ repayments of SGD 500 (on 1st August 2027), the outstanding loan is:<br>$$23760(1.004)^{24} - 250(500)(1.004^{24} - 1) = 13580.4901$$<br>Starting 1st September 2027, she repays SGD 1000 per month. After $m$ such repayments, the outstanding balance is:<br>$$13580.4901(1.004)^m - 250(1000)(1.004^m - 1) \\le 0$$<br>Solving gives $m \\ge 13.9912$, so the least integer is $m = 14$.<br>Counting 14 monthly repayments starting from 1st September 2027, she clears her loan in <strong>October 2028</strong> (on 1st October 2028).<br>After the 13th repayment of SGD 1000 (on 1st September 2028), the balance is:<br>$$13580.4901(1.004)^{13} - 250(1000)(1.004^{13} - 1) = 987.2530$$<br>Adding one final month of $0.4\\%$ interest on 30th September 2028:<br>$$\\text{Final repayment} = 987.2530 \\times 1.004 = \\text{SGD } 991.20 \\text{ (nearest cent)}$$"
      }
    ]
  }
]);
