window.registerQuestions([
  {
    id: "CJC-2026-P1-Q1",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "The curve $y = \\mathrm{f}(x)$ undergoes in succession, the following transformations:<br>A: a translation in the positive $x$-direction by $1$ unit<br>B: a scaling parallel to the $x$-axis by factor $2$<br>C: a reflection in the $y$-axis<br>The equation of the resulting curve is $y = \\frac{2}{x-2}$.",
    parts: [
      {
        label: "(Full)",
        marks: 3,
        prompt: "Obtain the equation of the original curve $y = \\mathrm{f}(x)$.",
        type: "self",
        solution: "Reversing the transformations from $y = \\frac{2}{x-2}$:<br>Undo C (reflect in $y$-axis, replace $x$ by $-x$): $y = \\frac{2}{-x-2}$.<br>Undo B (scale parallel to $x$-axis by factor $\\frac{1}{2}$, replace $x$ by $2x$): $y = \\frac{2}{-2x-2} = -\\frac{1}{x+1}$.<br>Undo A (translate $1$ unit in negative $x$-direction, replace $x$ by $x+1$): $$y = -\\frac{1}{(x+1)+1} = -\\frac{1}{x+2}.$$"
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q2",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Differentiation", "Integration"],
    stem: "Answer both parts.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Differentiate $\\tan^{-1}(2\\cos 3x)$ with respect to $x$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.2, 0.5, 0.8] },
        answer: "-6*sin(3*x)/(1+4*cos(3*x)^2)",
        placeholder: "Expression in x",
        solution: "$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\tan^{-1}(2\\cos 3x) = \\frac{1}{1 + (2\\cos 3x)^2}(2)(-\\sin 3x)(3) = -\\frac{6\\sin 3x}{1 + 4\\cos^2 3x}.$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Hence, find the <strong>exact</strong> value of $$\\int_{\\frac{\\pi}{18}}^{\\frac{\\pi}{9}} \\frac{\\sin 3x}{2(1+4\\cos^2 3x)}\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "pi/144",
        placeholder: "Exact value in pi",
        solution: "$$\\int_{\\frac{\\pi}{18}}^{\\frac{\\pi}{9}} \\frac{\\sin 3x}{2(1+4\\cos^2 3x)}\\,\\mathrm{d}x = -\\frac{1}{12}\\int_{\\frac{\\pi}{18}}^{\\frac{\\pi}{9}} -\\frac{6\\sin 3x}{1+4\\cos^2 3x}\\,\\mathrm{d}x = -\\frac{1}{12}\\left[\\tan^{-1}(2\\cos 3x)\\right]_{\\frac{\\pi}{18}}^{\\frac{\\pi}{9}}$$ $$= -\\frac{1}{12}\\left[\\tan^{-1}(1) - \\tan^{-1}(\\sqrt{3})\\right] = -\\frac{1}{12}\\left(\\frac{\\pi}{4} - \\frac{\\pi}{3}\\right) = \\frac{\\pi}{144}.$$"
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q3",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "The curve $C$ has equation $$\\frac{(x-1)^2}{9} + \\frac{y^2}{25} = 1.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Sketch $C$, stating the coordinates of any points of intersection with the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 215" width="235" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="105" x2="225" y2="105" stroke-width="1.4"/><polyline points="219,101 225,105 219,109" fill="none" stroke-width="1.4"/><text x="228" y="109" stroke="none" font-style="italic">x</text><line x1="100" y1="202" x2="100" y2="12" stroke-width="1.4"/><polyline points="96,18 100,12 104,18" fill="none" stroke-width="1.4"/><text x="106" y="17" stroke="none" font-style="italic">y</text><ellipse cx="120" cy="105" rx="60" ry="75" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="120" cy="105" r="2.5" fill="#2c2925"/><text x="124" y="117" stroke="none" font-size="10">(1, 0)</text><circle cx="60" cy="105" r="2.5" fill="#4a8fe7" stroke="#4a8fe7"/><text x="55" y="118" text-anchor="end" stroke="none" font-size="10">(−2, 0)</text><circle cx="180" cy="105" r="2.5" fill="#4a8fe7" stroke="#4a8fe7"/><text x="184" y="118" stroke="none" font-size="10">(4, 0)</text><circle cx="100" cy="34.3" r="2.5" fill="#4a8fe7" stroke="#4a8fe7"/><text x="93" y="34" text-anchor="end" stroke="none" font-size="10">(0, √(200/9))</text><circle cx="100" cy="175.7" r="2.5" fill="#4a8fe7" stroke="#4a8fe7"/><text x="93" y="182" text-anchor="end" stroke="none" font-size="10">(0, −√(200/9))</text><circle cx="120" cy="30" r="2.5" fill="#4a8fe7" stroke="#4a8fe7"/><text x="125" y="25" stroke="none" font-size="10">(1, 5)</text><circle cx="120" cy="180" r="2.5" fill="#4a8fe7" stroke="#4a8fe7"/><text x="125" y="191" stroke="none" font-size="10">(1, −5)</text></svg>`,
        solution: "Ellipse centred at $(1, 0)$ with horizontal semi-axis $3$ and vertical semi-axis $5$.<br>Axial intercepts: $(-2, 0)$, $(4, 0)$, $\\left(0, \\sqrt{\\frac{200}{9}}\\right)$ and $\\left(0, -\\sqrt{\\frac{200}{9}}\\right)$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "State the equations of the lines of symmetry of $C$.",
        type: "self",
        solution: "$$x = 1 \\quad \\text{and} \\quad y = 0.$$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "State the range of values of $x$ for which $C$ exists.",
        type: "self",
        solution: "$$-2 \\le x \\le 4.$$"
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q4",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 260 185" width="250" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="115" x2="245" y2="115" stroke-width="1.4"/><polyline points="239,111 245,115 239,119" fill="none" stroke-width="1.4"/><text x="249" y="119" stroke="none" font-style="italic">x</text><line x1="145" y1="175" x2="145" y2="14" stroke-width="1.4"/><polyline points="141,20 145,14 149,20" fill="none" stroke-width="1.4"/><text x="151" y="19" stroke="none" font-style="italic">y</text><line x1="15" y1="62" x2="240" y2="62" stroke-dasharray="4,3" stroke-width="1.2"/><text x="234" y="55" text-anchor="end" stroke="none" font-style="italic">y = p</text><path d="M 38 22 C 48 85, 58 158, 75 158 C 92 158, 102 88, 145 74 C 175 65, 210 64, 238 63.5" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="48" y="128" text-anchor="end" stroke="none">(a, 0)</text><text x="75" y="172" text-anchor="middle" stroke="none">(b, c)</text><text x="108" y="128" stroke="none">(d, 0)</text><text x="140" y="88" text-anchor="end" stroke="none">(0, e)</text><text x="135" y="128" stroke="none" font-style="italic">O</text><text x="200" y="34" stroke="none" font-style="italic">y = f(x)</text></svg>`,
    stem: "The diagram shows the graph of $y = \\mathrm{f}(x)$. It intersects the $x$-axis at $(a, 0)$ and $(d, 0)$ and the $y$-axis at $(0, e)$. It has a minimum point at $(b, c)$ and a horizontal asymptote with equation $y = p$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "On a separate diagram, draw a sketch of $y = -\\mathrm{f}(x)$, stating in terms of $a, b, c, d, e$ and $p$ the equations of any asymptotes, axial intercepts and turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 185" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="75" x2="245" y2="75" stroke-width="1.3"/><line x1="145" y1="175" x2="145" y2="12" stroke-width="1.3"/><line x1="15" y1="128" x2="240" y2="128" stroke-dasharray="4,3" stroke-width="1.2"/><text x="234" y="141" text-anchor="end" stroke="none" font-style="italic">y = −p</text><path d="M 38 168 C 48 105, 58 32, 75 32 C 92 32, 102 102, 145 116 C 175 125, 210 126, 238 126.5" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="48" y="68" text-anchor="end" stroke="none">(a, 0)</text><text x="75" y="23" text-anchor="middle" stroke="none">(b, −c)</text><text x="108" y="68" stroke="none">(d, 0)</text><text x="139" y="114" text-anchor="end" stroke="none">(0, −e)</text><text x="135" y="88" stroke="none" font-style="italic">O</text></svg>`,
        solution: "Reflection in the $x$-axis.<br>Asymptote: $y = -p$. Maximum point: $(b, -c)$. Intercepts: $(a, 0)$, $(d, 0)$, $(0, -e)$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Draw a sketch of $y = \\frac{1}{\\mathrm{f}(x)}$, stating the equations of any asymptotes, axial intercepts and turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 185" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="100" x2="245" y2="100" stroke-width="1.3"/><line x1="145" y1="175" x2="145" y2="12" stroke-width="1.3"/><line x1="58" y1="14" x2="58" y2="172" stroke-dasharray="4,3" stroke-width="1.2"/><text x="53" y="170" text-anchor="end" stroke="none">x=a</text><line x1="108" y1="14" x2="108" y2="172" stroke-dasharray="4,3" stroke-width="1.2"/><text x="112" y="170" stroke="none">x=d</text><line x1="15" y1="70" x2="240" y2="70" stroke-dasharray="4,3" stroke-width="1.2"/><text x="235" y="64" text-anchor="end" stroke="none">y=1/p</text><path d="M 22 97 Q 48 92 54 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 63 170 Q 72 122 83 122 Q 94 122 103 170" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 114 18 Q 124 58 145 64 Q 185 68 238 68.5" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="83" y="136" text-anchor="middle" stroke="none">(b, 1/c)</text><text x="150" y="56" stroke="none">(0, 1/e)</text><text x="235" y="112" text-anchor="end" stroke="none">y=0</text></svg>`,
        solution: "Asymptotes: $x = a$, $x = d$, $y = \\frac{1}{p}$ (right), $y = 0$ (left).<br>Maximum point: $\\left(b, \\frac{1}{c}\\right)$. $y$-intercept: $\\left(0, \\frac{1}{e}\\right)$. No $x$-intercepts."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Draw a sketch of $y = \\mathrm{f}'(x)$, stating the equations of any asymptotes and axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 175" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="115" x2="245" y2="115" stroke-width="1.3"/><line x1="145" y1="168" x2="145" y2="12" stroke-width="1.3"/><path d="M 54 162 Q 68 115 75 115 Q 92 32 105 32 Q 124 32 145 88 Q 180 112 238 113" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="75" y="130" text-anchor="middle" stroke="none">(b, 0)</text><text x="137" y="128" stroke="none" font-style="italic">O</text><text x="235" y="128" text-anchor="end" stroke="none">y=0</text></svg>`,
        solution: "Horizontal asymptote $y = 0$ (as $x$ approaches positive infinity).<br>$x$-intercept at $(b, 0)$; negative for $x < b$ and positive for $x > b$, reaching a positive peak between $b$ and $0$ before decreasing towards $0$."
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q5",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Integration"],
    stem: "The region $P$ is bounded by the curve $(y-5)^2 = 9(x+4)$ and the line $x = 4$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find the <strong>exact</strong> area of the region $P$, leaving your answer in the form $k\\sqrt{2}$ where $k$ is a constant to be determined.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "64*sqrt(2)",
        placeholder: "Exact surd value",
        solution: "Upper branch: $y = 5 + 3\\sqrt{x+4}$; lower branch: $y = 5 - 3\\sqrt{x+4}$, meeting at $(-4, 5)$.<br>$$\\text{Area of } P = \\int_{-4}^{4} \\left[(5 + 3\\sqrt{x+4}) - (5 - 3\\sqrt{x+4})\\right]\\mathrm{d}x = 6\\int_{-4}^{4}(x+4)^{1/2}\\,\\mathrm{d}x$$ $$= 6\\left[\\frac{(x+4)^{3/2}}{3/2}\\right]_{-4}^{4} = 4(8)^{3/2} = 64\\sqrt{2}\\text{ units}^2 \\quad (k = 64).$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The region $Q$ is bounded by the curve $(y-5)^2 = 9(x+4)$, the line $x = 5$ and the $y$-axis. Find the volume of solid of revolution formed when the region $Q$ is rotated $2\\pi$ radians about the $y$-axis, giving your answer correct to <strong>2 decimal places</strong>.",
        type: "auto",
        mode: "number",
        dp: 2,
        answer: "404.8*pi",
        placeholder: "Volume (2 d.p.)",
        solution: "At $x = 0, y = -1$ and $11$; at $x = 5, y = -4$ and $14$.<br>Using symmetry about $y = 5$, cylinder of radius $5$ and height $18$ minus the two outer collars:<br>$$V = \\pi(5)^2(18) - 2\\pi\\int_{11}^{14}\\left[\\frac{(y-5)^2}{9} - 4\\right]^2\\mathrm{d}y = 404.8\\pi = 1271.72\\text{ units}^3\\text{ (2 d.p.)}.$$"
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q6",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities"],
    stem: "A curve $C$ has equation $$y = \\frac{x^2 - x - 2}{x - m}, \\quad \\text{where } m > 2.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find, in terms of $m$, the equations of asymptotes of $C$.",
        type: "self",
        solution: "$$y = \\frac{x^2 - x - 2}{x - m} = x + m - 1 + \\frac{-2 + m(m-1)}{x - m}.$$ Vertical asymptote: $x = m$.<br>Oblique asymptote: $y = x + m - 1$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Given that $C$ has a turning point at $(1, 1)$, show that $m = 3$. Hence, sketch $C$, labelling clearly the equations of asymptotes, and the coordinates of the turning points and the points where $C$ crosses the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 220" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="140" x2="245" y2="140" stroke-width="1.3"/><line x1="80" y1="210" x2="80" y2="12" stroke-width="1.3"/><line x1="125" y1="14" x2="125" y2="210" stroke-dasharray="4,3" stroke-width="1.2"/><text x="129" y="205" stroke="none">x = 3</text><line x1="20" y1="156" x2="230" y2="44" stroke-dasharray="4,3" stroke-width="1.2"/><text x="200" y="34" stroke="none">y = x + 2</text><polyline points="20,150.3 50,146.4 65,140 80,134.7 95,132 110,140 117.5,168 120.5,205.6" fill="none" stroke="#4a8fe7" stroke-width="2"/><polyline points="129.5,31 132.5,32 140,44 155,68 185,60 215,44 230,39.4" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="95" cy="132" r="2.5" fill="#4a8fe7"/><text x="95" y="124" text-anchor="middle" stroke="none">(1, 1)</text><circle cx="155" cy="68" r="2.5" fill="#4a8fe7"/><text x="155" y="83" text-anchor="middle" stroke="none">(5, 9)</text><circle cx="65" cy="140" r="2.3" fill="#4a8fe7"/><text x="61" y="154" text-anchor="end" stroke="none">(−1, 0)</text><circle cx="110" cy="140" r="2.3" fill="#4a8fe7"/><text x="108" y="154" text-anchor="end" stroke="none">(2, 0)</text><circle cx="80" cy="134.7" r="2.3" fill="#4a8fe7"/><text x="76" y="126" text-anchor="end" stroke="none">(0, 2/3)</text><text x="72" y="151" stroke="none" font-style="italic">O</text></svg>`,
        solution: "Sub $(1, 1)$: $1 = \\frac{1 - 1 - 2}{1 - m} \\implies 1 - m = -2 \\implies m = 3$.<br>Asymptotes: $x = 3$, $y = x + 2$. Turning points: $(1, 1)$ and $(5, 9)$. Intercepts: $(-1, 0)$, $(2, 0)$, $\\left(0, \\frac{2}{3}\\right)$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "By inserting a suitable graph, solve $$x^2 - x - 2 \\ge \\frac{9 - x^2}{4} \\quad \\text{for } x < 3.$$",
        type: "self",
        solution: "$x^2 - x - 2 \\ge -\\frac{1}{4}(x-3)(x+3)$. Since $x < 3$, $x - 3 < 0$, so dividing reverses the sign: $$\\frac{x^2 - x - 2}{x - 3} \\le -\\frac{1}{4}(x + 3).$$ Sketching $y = -\\frac{1}{4}(x+3)$ on the same axes gives intersections at $x = -1.49$ and $x = 2.29$.<br>Hence $x \\le -1.49$ or $2.29 \\le x < 3$."
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q7",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 340 190" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><ellipse cx="85" cy="155" rx="60" ry="13" fill="none" stroke-dasharray="3,3" stroke-width="1.1"/><path d="M 25 155 A 60 13 0 0 0 145 155" fill="none" stroke-width="1.5"/><line x1="85" y1="20" x2="25" y2="155" stroke-width="1.5"/><line x1="85" y1="20" x2="145" y2="155" stroke-width="1.5"/><line x1="85" y1="20" x2="85" y2="155" stroke-dasharray="4,3" stroke-width="1.2"/><line x1="85" y1="155" x2="145" y2="155" stroke-dasharray="4,3" stroke-width="1.2"/><rect x="85" y="148" width="7" height="7" fill="none" stroke-width="1"/><text x="64" y="96" stroke="none" font-style="italic">H <tspan font-style="normal">cm</tspan></text><text x="115" y="151" text-anchor="middle" stroke="none">8 cm</text><text x="85" y="182" text-anchor="middle" stroke="none">Fig. 1</text><ellipse cx="250" cy="90" rx="35" ry="9" fill="none" stroke-width="1.4"/><ellipse cx="250" cy="155" rx="60" ry="13" fill="none" stroke-dasharray="3,3" stroke-width="1.1"/><path d="M 190 155 A 60 13 0 0 0 310 155" fill="none" stroke-width="1.5"/><line x1="215" y1="90" x2="190" y2="155" stroke-width="1.5"/><line x1="285" y1="90" x2="310" y2="155" stroke-width="1.5"/><line x1="250" y1="90" x2="250" y2="155" stroke-dasharray="4,3" stroke-width="1.2"/><line x1="250" y1="90" x2="285" y2="90" stroke-dasharray="4,3" stroke-width="1.2"/><line x1="250" y1="155" x2="310" y2="155" stroke-dasharray="4,3" stroke-width="1.2"/><rect x="250" y="148" width="7" height="7" fill="none" stroke-width="1"/><text x="268" y="87" text-anchor="middle" stroke="none" font-style="italic">r <tspan font-style="normal">cm</tspan></text><text x="232" y="128" stroke="none" font-style="italic">h <tspan font-style="normal">cm</tspan></text><text x="280" y="151" text-anchor="middle" stroke="none">8 cm</text><text x="250" y="182" text-anchor="middle" stroke="none">Fig. 2</text></svg>`,
    stem: "Fig. 1 shows a right circular cone with a base radius of $8\\text{ cm}$ and a height of $H\\text{ cm}$. A smaller right circular cone with a base radius of $r\\text{ cm}$ is removed from the cone in Fig. 1 along a plane parallel to the base, resulting in a frustrum as shown in Fig. 2. The variables $r$ and $h$ are related such that $r + h = 9$ where $0 < r < 8$.<br>[The volume of a cone of base radius $r$ and height $h$ is given by $V = \\frac{1}{3}\\pi r^2 h$.]",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that the volume of the frustum is $V = \\frac{1}{3}\\pi(9-r)(r^2+8r+64)\\text{ cm}^3$.",
        type: "self",
        solution: "By similar triangles: $\\frac{8}{r} = \\frac{H}{H-h} = \\frac{H}{H-(9-r)} \\implies H = \\frac{8(9-r)}{8-r}$.<br>$$V = \\frac{1}{3}\\pi(8)^2 H - \\frac{1}{3}\\pi r^2(H - 9 + r) = \\frac{1}{3}\\pi(9-r)\\left[\\frac{512 - 8r^2 + r^2(8-r)}{8-r}\\right]$$ $$= \\frac{1}{3}\\pi(9-r)\\left[\\frac{8(8+r)(8-r)+r^2(8-r)}{8-r}\\right] = \\frac{1}{3}\\pi(9-r)(r^2+8r+64)\\text{ (shown)}.$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Using differentiation, find the maximum volume of the frustum, leaving your answer in terms of $\\pi$ (in $\\text{cm}^3$).",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "196*pi",
        placeholder: "Exact value in pi",
        solution: "$$\\frac{\\mathrm{d}V}{\\mathrm{d}r} = \\frac{1}{3}\\pi\\left[(9-r)(2r+8) - (r^2+8r+64)\\right] = \\frac{1}{3}\\pi(-3r^2+2r+8).$$ Setting $\\frac{\\mathrm{d}V}{\\mathrm{d}r} = 0 \\implies (3r+4)(r-2) = 0 \\implies r = 2$ (since $0 < r < 8$).<br>$\\frac{\\mathrm{d}^2V}{\\mathrm{d}r^2} = \\frac{1}{3}\\pi(-6r+2)$, so at $r=2$, $\\frac{\\mathrm{d}^2V}{\\mathrm{d}r^2} = -\\frac{10}{3}\\pi < 0$ (maximum).<br>Maximum volume $= \\frac{1}{3}\\pi(9-2)(4+16+64) = 196\\pi\\text{ cm}^3$."
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q8",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "The curve $D$ is defined by the parametric equations $$x = t^3 + t \\quad \\text{and} \\quad y = t^4 + t^2 \\quad \\text{where } t \\in \\mathbb{R}.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "What can be said about the tangent at $t = 0$?",
        type: "self",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 3t^2 + 1$, $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 4t^3 + 2t \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{4t^3 + 2t}{3t^2 + 1}$.<br>When $t = 0$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$, so the tangent is horizontal (parallel to the $x$-axis, with equation $y = 0$)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the equation of the normal to $D$ at the point $P(p^3 + p, p^4 + p^2)$, leaving your answer in the form $y = mx + c$. (You do not need to simplify your answer.)",
        type: "self",
        solution: "Gradient of normal $= -\\frac{3p^2 + 1}{4p^3 + 2p}$.<br>Equation of normal: $$y = -\\frac{3p^2 + 1}{4p^3 + 2p}x + \\frac{(3p^2+1)(p^3+p)}{4p^3+2p} + p^4 + p^2.$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The point $M$ is the midpoint of $OP$ where $O$ is the origin. Find a cartesian equation of the curve traced by $M$ as $p$ varies, leaving your answer in the form $Ax^4 + Bx^2 y + Cy^3 = 0$ where $A, B$ and $C$ are integers to be determined.",
        type: "self",
        solution: "$x = \\frac{p(p^2+1)}{2} \\implies 2x = p(p^2+1)$ and $y = \\frac{p^2(p^2+1)}{2} \\implies 2y = p^2(p^2+1)$.<br>Squaring the first gives $4x^2 = p^2(p^2+1)^2$. Dividing by $2y = p^2(p^2+1)$ gives $\\frac{2x^2}{y} = p^2 + 1 \\implies p^2 = \\frac{2x^2}{y} - 1$.<br>Substituting back: $2y = \\left(\\frac{2x^2}{y} - 1\\right)\\left(\\frac{2x^2}{y}\\right) \\implies 2y^3 = 4x^4 - 2x^2 y \\implies 2x^4 - x^2 y - y^3 = 0$ ($A = 2, B = -1, C = -1$)."
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q9",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "The sum of the first $n$ terms of a sequence $u_1, u_2, u_3, \\dots$ is given by $S_n = n^3 - n$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $u_n = 3n^2 - 3n$, $n \\ge 1$.",
        type: "self",
        solution: "For $n \\ge 2$: $u_n = S_n - S_{n-1} = (n^3 - n) - [(n-1)^3 - (n-1)] = n^3 - n - (n^3 - 3n^2 + 2n) = 3n^2 - 3n$.<br>When $n = 1$: $u_1 = S_1 = 1^3 - 1 = 0$, and $3(1)^2 - 3(1) = 0$. Hence $u_n = 3n^2 - 3n$ for all $n \\ge 1$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find a recurrence relation for this sequence, giving the answer in the form $u_{n+1} = \\mathrm{f}(u_n)$.",
        type: "self",
        solution: "$$u_{n+1} = 3(n+1)^2 - 3(n+1) = 3n^2 + 3n = (3n^2 - 3n) + 6n = u_n + 6n.$$"
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "Using $\\sum_{r=1}^{n} r^2 = \\frac{n}{6}(n+1)(2n+1)$, find $\\sum_{r=5}^{2n} u_r$ simplifying the final answer in the form $an^3 + bn^2 + cn + d$, where $a, b, c$ and $d$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "8", exactRequired: true, placeholder: "Integer" },
          { label: "b =", answer: "0", exactRequired: true, placeholder: "Integer" },
          { label: "c =", answer: "-2", exactRequired: true, placeholder: "Integer" },
          { label: "d =", answer: "-60", exactRequired: true, placeholder: "Integer" }
        ],
        solution: "$$\\sum_{r=5}^{2n}(3r^2 - 3r) = 3\\left(\\sum_{r=1}^{2n} r^2 - \\sum_{r=1}^{4} r^2\\right) - 3\\left(\\sum_{r=1}^{2n} r - \\sum_{r=1}^{4} r\\right)$$ $$= 3\\left(\\frac{2n}{6}(2n+1)(4n+1) - 30\\right) - 3\\left(\\frac{2n}{2}(1+2n) - 10\\right) = 8n^3 - 2n - 60.$$ Hence $a = 8, b = 0, c = -2, d = -60$."
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q10",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Maclaurin Series"],
    diagramSvg: `<svg viewBox="0 0 260 140" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polygon points="90,22 38,85 222,115" fill="none" stroke-width="1.6"/><path d="M 55 88 A 20 20 0 0 0 51 69" fill="none" stroke-width="1.1"/><text x="64" y="81" stroke="none" font-style="italic">θ</text><path d="M 76 38 A 22 22 0 0 0 108 36" fill="none" stroke-width="1.1"/><text x="86" y="54" stroke="none" font-size="10">θ + π/3</text><text x="90" y="15" text-anchor="middle" stroke="none" font-style="italic">A</text><text x="28" y="92" text-anchor="end" stroke="none" font-style="italic">B</text><text x="228" y="122" stroke="none" font-style="italic">C</text><text x="128" y="114" text-anchor="middle" stroke="none">6 cm</text></svg>`,
    stem: "Answer both parts.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "A curve $C$ has equation $y\\cos x + y^2 = 2$, $y > 0$. Show that $(\\cos x + 2y)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y\\sin x$.",
        type: "self",
        solution: "Differentiating w.r.t. $x$: $y(-\\sin x) + (\\cos x)\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies (\\cos x + 2y)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y\\sin x$."
      },
      {
        label: "(a)(ii)",
        marks: 4,
        prompt: "Find the Maclaurin series for $y$ in ascending powers of $x$, up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.1, 0.2, 0.3] },
        answer: "1 + x^2/6",
        placeholder: "Exact polynomial in x",
        solution: "Differentiating again: $(\\cos x + 2y)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 - 2\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\sin x = y\\cos x$.<br>At $x = 0$: $y^2 + y - 2 = 0 \\implies y = 1$ (since $y > 0$), $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$, $(1+2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 1 \\implies \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\frac{1}{3}$.<br>Thus $y = 1 + \\frac{1}{6}x^2 + \\dots$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "In triangle $ABC$, $BC = 6\\text{ cm}$, ∠$ABC = \\theta$ radians and ∠$BAC = \\left(\\theta + \\frac{\\pi}{3}\\right)$ radians. Given that $\\theta$ is a sufficiently small angle, show that $AC \\approx p + q\\theta + r\\theta^2$, determining the exact constants $p$, $q$ and $r$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "p =", answer: "0", exactRequired: true },
          { label: "q =", answer: "4*sqrt(3)", exactRequired: true },
          { label: "r =", answer: "-4", exactRequired: true }
        ],
        solution: "By Sine Rule: $AC = \\frac{6\\sin\\theta}{\\sin(\\theta + \\frac{\\pi}{3})} = \\frac{6\\sin\\theta}{\\frac{1}{2}\\sin\\theta + \\frac{\\sqrt{3}}{2}\\cos\\theta} \\approx \\frac{6\\theta}{\\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\theta - \\frac{\\sqrt{3}}{4}\\theta^2}$.<br>$$AC \\approx \\frac{12}{\\sqrt{3}}\\theta\\left(1 + \\frac{1}{\\sqrt{3}}\\theta - \\frac{1}{2}\\theta^2\\right)^{-1} \\approx 4\\sqrt{3}\\theta\\left(1 - \\frac{1}{\\sqrt{3}}\\theta + \\dots\\right) = 4\\sqrt{3}\\theta - 4\\theta^2.$$ Thus $p = 0$, $q = 4\\sqrt{3}$, $r = -4$."
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q11",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto (x-k)^2$, $x \\in \\mathbb{R}$, $x < k$, where $k$ is a positive constant.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find $\\mathrm{f}^{-1}(x)$ and state its domain.",
        type: "self",
        solution: "$y = (x-k)^2 \\implies x = k \\pm \\sqrt{y}$. Since $x < k$, $x = k - \\sqrt{y}$.<br>Hence $\\mathrm{f}^{-1}(x) = -\\sqrt{x} + k$, with domain $\\mathrm{D}_{\\mathrm{f}^{-1}} = (0, \\infty)$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch on the same diagram, the graphs of $y = \\mathrm{f}(x)$ and $y = \\mathrm{f}^{-1}(x)$, giving the coordinates of the end points and indicating clearly their geometrical relationship.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 205" width="230" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="145" x2="225" y2="145" stroke-width="1.3"/><line x1="65" y1="192" x2="65" y2="12" stroke-width="1.3"/><line x1="25" y1="185" x2="205" y2="15" stroke="#4ca885" stroke-width="1.2" stroke-dasharray="4,3"/><text x="195" y="34" stroke="none" font-style="italic">y = x</text><path d="M 35 15 Q 72 135 125 145" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 65 85 Q 75 138 205 168" fill="none" stroke="#cf5652" stroke-width="2"/><circle cx="125" cy="145" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/><circle cx="65" cy="85" r="3" fill="#fff" stroke="#cf5652" stroke-width="1.8"/><text x="60" y="52" text-anchor="end" stroke="none">(0, k²)</text><text x="58" y="88" text-anchor="end" stroke="none">(0, k)</text><text x="125" y="160" text-anchor="middle" stroke="none">(k, 0)</text><text x="165" y="160" text-anchor="middle" stroke="none">(k², 0)</text><text x="38" y="40" stroke="none" font-style="italic">y = f(x)</text><text x="180" y="178" stroke="none" font-style="italic">y = f⁻¹(x)</text></svg>`,
        solution: "$y = \\mathrm{f}^{-1}(x)$ is the reflection of $y = \\mathrm{f}(x)$ in the line $y = x$.<br>End points (open circles): $(k, 0)$ for $\\mathrm{f}$ and $(0, k)$ for $\\mathrm{f}^{-1}$; axial intercepts $(0, k^2)$ and $(k^2, 0)$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "The function $\\mathrm{g}$ is defined by $\\mathrm{g}: x \\mapsto \\mathrm{e}^x$, $x \\in \\mathbb{R}$. Explain why the composite function $\\mathrm{gf}$ exists.",
        type: "self",
        solution: "$\\mathrm{R_f} = (0, \\infty)$ and $\\mathrm{D_g} = (-\\infty, \\infty)$. Since $\\mathrm{R_f} \\subseteq \\mathrm{D_g}$, $\\mathrm{gf}$ exists."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find the range of $\\mathrm{gf}$.",
        type: "self",
        solution: "Mapping $(0, \\infty)$ through $\\mathrm{g}(x) = \\mathrm{e}^x$ gives $\\mathrm{R_{gf}} = (1, \\infty)$."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Without first finding any inverse and composite functions, determine $\\mathrm{g}^{-1}\\mathrm{f}(-1)$ in terms of $k$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { k: [1, 2, 5] },
        answer: "2*ln(k+1)",
        placeholder: "Expression in terms of k",
        solution: "$\\mathrm{f}(-1) = (-1-k)^2 = (k+1)^2$.<br>Let $x = \\mathrm{g}^{-1}((k+1)^2) \\implies \\mathrm{e}^x = (k+1)^2 \\implies x = \\ln((k+1)^2) = 2\\ln(k+1)$."
      }
    ]
  },
  {
    id: "CJC-2026-P1-Q12",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "Scientists are interested in the rate of release of a particular drug from a capsule. The capsule initially contains $100$ milligrams (mg) of the drug. When $3$ hours have elapsed, half of the drug has been released. Let $M$ be the mass, in mg, of drug released into a human body $t$ hours after the capsule is consumed.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Team A proposes that the rate of change of $M$ is directly proportional to the time elapsed after the consumption of the capsule. Write down a differential equation for this model and solve it for $M$ in terms of $t$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}M}{\\mathrm{d}t} = pt$ ($p > 0$). Integrating gives $M = \\frac{pt^2}{2} + C$.<br>At $t = 0, M = 0 \\implies C = 0$. At $t = 3, M = 50 \\implies p = \\frac{100}{9}$.<br>Hence $M = \\frac{50}{9}t^2$."
      },
      {
        label: "(b)",
        marks: 7,
        prompt: "Team B proposes the differential equation $$\\frac{\\mathrm{d}M}{\\mathrm{d}t} = \\frac{k(100 - M)}{\\sqrt{t+1}}, \\quad k > 0.$$ Given that when $3$ hours have elapsed, the drug is being released at the rate of $\\frac{25}{2}\\ln 2\\text{ mg/h}$ and half of the drug has been released, solve this differential equation to express $M$ in terms of $t$.",
        type: "auto",
        mode: "expr",
        vars: { t: [0, 3, 8] },
        answer: "100 - 200*2^(-sqrt(t+1))",
        placeholder: "Expression in terms of t",
        solution: "At $t = 3, M = 50, \\frac{\\mathrm{d}M}{\\mathrm{d}t} = \\frac{25}{2}\\ln 2 \\implies \\frac{25}{2}\\ln 2 = \\frac{50k}{2} \\implies k = \\frac{1}{2}\\ln 2$.<br>Separating variables: $\\int \\frac{1}{100-M}\\,\\mathrm{d}M = \\int k(t+1)^{-1/2}\\,\\mathrm{d}t \\implies -\\ln|100-M| = 2k\\sqrt{t+1} + C_1$.<br>$M = 100 - A\\mathrm{e}^{-2k\\sqrt{t+1}}$. Sub $t=3, M=50 \\implies A = 200$.<br>Hence $M = 100 - 200\\mathrm{e}^{-\\sqrt{t+1}\\ln 2} = 100 - 200\\left(2^{-\\sqrt{t+1}}\\right)$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Using the answer in (b), sketch the graph of $M$ against $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 155" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="35" y1="135" x2="245" y2="135" stroke-width="1.3"/><line x1="40" y1="142" x2="40" y2="14" stroke-width="1.3"/><line x1="40" y1="35" x2="240" y2="35" stroke-dasharray="4,3" stroke-width="1.2"/><text x="35" y="38" text-anchor="end" stroke="none">100</text><path d="M 40 135 C 52 72, 95 40, 238 36.5" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="40" cy="135" r="2.5" fill="#4a8fe7"/><text x="32" y="146" stroke="none" font-style="italic">O</text><text x="242" y="148" stroke="none" font-style="italic">t/h</text><text x="46" y="18" stroke="none" font-style="italic">M/mg</text></svg>`,
        solution: "Starts at $(0, 0)$, increases at a decreasing rate and approaches the horizontal asymptote $M = 100$."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Explain whether the model proposed by Team B is an improvement of the model proposed by Team A.",
        type: "self",
        solution: "Yes, Team B's model is an improvement. In Team A's model, the mass released grows quadratically (unboundedly) over time, which is impossible since the capsule only contains $100\\text{ mg}$ of drug, whereas in Team B's model $M$ approaches $100\\text{ mg}$."
      }
    ]
  }
]);