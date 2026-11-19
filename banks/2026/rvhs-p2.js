window.registerQuestions([
  {
    id: "RVHS-2026-P2-Q1",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Parametric Equations", "Curve Sketching"],
    stem: "The curve $C$ has parametric equations $$x = t + \\frac{4}{t}, \\quad y = -\\frac{2}{t}, \\quad 0 < t < 2.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2}{t^2 - 4}$. Hence find the value of $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ as $t$ → $0$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 1 - \\frac{4}{t^2} = \\frac{t^2 - 4}{t^2}$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = \\frac{2}{t^2}$.<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2/t^2}{(t^2 - 4)/t^2} = \\frac{2}{t^2 - 4} \\text{ (shown).}$$<br>As $t$ → $0$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ → $\\frac{2}{0 - 4} = -\\frac{1}{2}$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "The equation of an asymptote of $C$ is of the form $y = kx$, where $k$ is a real constant. Find the value of $k$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "-1/2",
        placeholder: "Exact value",
        solution: "From (a), as $t$ → $0$, $x$ → $\\infty$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ → $-\\frac{1}{2}$, so the oblique asymptote is $y = -\\frac{1}{2}x$. Hence $k = -\\frac{1}{2}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Sketch $C$, indicating clearly the coordinates of the endpoint of the curve and the equations of any asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 170" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="55" x2="245" y2="55" stroke-width="1.2"/><line x1="65" y1="160" x2="65" y2="12" stroke-width="1.2"/><line x1="25" y1="35" x2="235" y2="140" stroke="#4a8fe7" stroke-dasharray="4,3" stroke-width="1.2"/><path d="M 135 72 Q 137 98 175 112 Q 205 126 235 139" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="135" cy="72" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/><text x="128" y="75" text-anchor="end" stroke="none">(4, −1)</text><text x="190" y="108" stroke="none" font-style="italic">C</text><text x="148" y="148" stroke="none">y = −½x</text><text x="55" y="68" stroke="none" font-style="italic">O</text></svg>`,
        solution: "At $t = 2$, the excluded endpoint is $(4, -1)$ (open circle). The curve descends from $(4, -1)$ with vertical tangent approaching the dashed asymptote $y = -\\frac{1}{2}x$ as $x$ → $\\infty$."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q2",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["AP and GP", "Sequences and Series"],
    stem: "A start-up company is launching a project to capture airborne dust particles using two different filtration models $A$ and $B$, with its efficiency measured over time.<br>Model $A$ is programmed such that the amount of dust particles captured in its first month of operation is $8$ units and increases by a fixed amount of $d$ units each month. In its first $12$ months of operation, Model $A$ captured a total of $360$ units of dust particles.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the amount of dust particles captured by Model $A$ in its 20th month of operation.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "84",
        placeholder: "Exact number of units",
        solution: "$S_{12} = \\frac{12}{2}(2(8) + 11d) = 360 \\implies 96 + 66d = 360 \\implies d = 4$.<br>$u_{20} = 8 + 19(4) = 84$ units."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Model $B$ uses a depleting chemical catalyst to capture dust particles. The amount captured in the first month is $a$ units. For each subsequent month, the amount captured is $r$ times that of the previous month. Over its lifespan, Model $B$ can capture a theoretical maximum of $1000$ units. In the first two months, Model $B$ captured a total of $640$ units. Find the values of $a$ and $r$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "400", exactRequired: true, placeholder: "Value of a" },
          { label: "r =", answer: "0.6", placeholder: "Value of r" }
        ],
        solution: "$S_\\infty = \\frac{a}{1-r} = 1000 \\implies a = 1000(1-r)$.<br>$S_2 = a(1+r) = 640 \\implies 1000(1-r^2) = 640 \\implies r^2 = 0.36 \\implies r = 0.6$ (reject $r = -0.6$ since dust captured cannot be negative).<br>$a = 1000(1 - 0.6) = 400$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The start-up company will decommission Model $B$ once its total amount of dust particles captured reaches at least $99\\%$ of its maximum capacity over its lifespan. Find the minimum number of months that Model $B$ will be deployed before it is decommissioned.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "10",
        placeholder: "Integer number of months",
        solution: "$S_n \\ge 0.99 S_\\infty \\implies 1 - 0.6^n \\ge 0.99 \\implies 0.6^n \\le 0.01 \\implies n \\ge \\frac{\\ln 0.01}{\\ln 0.6} \\approx 9.015$.<br>Hence the minimum number of months is $10$."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q3",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    diagramSvg: `<svg viewBox="0 0 260 200" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="135" x2="245" y2="135" stroke-width="1.2"/><line x1="120" y1="190" x2="120" y2="15" stroke-width="1.2"/><polygon points="120,135 180,106 151,46 91,75" fill="rgba(91,155,213,0.14)" stroke="#4a8fe7" stroke-width="1.8"/><text x="186" y="108" stroke="none" font-style="italic">A</text><text x="156" y="42" stroke="none" font-style="italic">B</text><text x="80" y="74" stroke="none" font-style="italic">C</text><text x="108" y="149" stroke="none" font-style="italic">O</text><text x="238" y="149" stroke="none">Re</text><text x="102" y="24" stroke="none">Im</text></svg>`,
    stem: "The point $A$ on the Argand diagram represents the complex number $z$, where $|z| = 3$ and $\\arg(z) = \\frac{\\pi}{7}$. Points $B$ and $C$ are on the diagram such that $OABC$ is a square.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "The points $B$ and $C$ represent complex numbers $v$ and $w$ respectively. Find $v$ and $w$ in terms of $z$.",
        type: "self",
        solution: "$C$ is obtained by rotating $A$ by $\\frac{\\pi}{2}$ anticlockwise about $O$, so $w = \\mathrm{i}z$.<br>Since $OB = OA + OC$, $v = z + \\mathrm{i}z = (1 + \\mathrm{i})z$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "State the <strong>exact</strong> values of $|v|$ and $\\arg(v)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "|v| =", answer: "3*sqrt(2)", exactRequired: true, placeholder: "Exact surd form" },
          { label: "arg(v) =", answer: "11*pi/28", exactRequired: true, placeholder: "Exact multiple of pi" }
        ],
        solution: "$|v| = OB = \\sqrt{OA^2 + OC^2} = \\sqrt{3^2 + 3^2} = 3\\sqrt{2}$.<br>$\\arg(v) = \\frac{\\pi}{4} + \\arg(z) = \\frac{\\pi}{4} + \\frac{\\pi}{7} = \\frac{11\\pi}{28}$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Points $D$ and $E$ represent the complex numbers $-\\mathrm{i}z^*$ and $2\\mathrm{Re}(z)$ respectively. On the same Argand diagram, plot the points $D$ and $E$, showing clearly the geometrical relationship between $C$ and $D$, and between $A$ and $E$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 220" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="120" x2="250" y2="120" stroke-width="1.2"/><line x1="105" y1="210" x2="105" y2="15" stroke-width="1.2"/><polygon points="105,120 165,91 136,31 76,60" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.6"/><line x1="76" y1="60" x2="76" y2="180" stroke="#cf5652" stroke-dasharray="4,3" stroke-width="1.2"/><line x1="165" y1="91" x2="225" y2="120" stroke="#4a8fe7" stroke-width="1.4"/><rect x="76" y="112" width="8" height="8" fill="none" stroke-width="1"/><circle cx="76" cy="180" r="2.8" fill="#cf5652"/><text x="64" y="185" stroke="none" font-style="italic">D</text><circle cx="225" cy="120" r="2.8" fill="#cf5652"/><text x="225" y="135" stroke="none" font-style="italic">E</text><text x="171" y="90" stroke="none" font-style="italic">A</text><text x="142" y="28" stroke="none" font-style="italic">B</text><text x="64" y="58" stroke="none" font-style="italic">C</text><text x="94" y="134" stroke="none" font-style="italic">O</text></svg>`,
        solution: "• Since $(-\\mathrm{i}z^*)^* = \\mathrm{i}z$, $D$ is the reflection of $C$ in the real axis ($CD \\perp \\text{Re}$-axis and $C, D$ are equidistant from the Re-axis).<br>• $E$ lies on the positive real axis with $OE = 2\\mathrm{Re}(z)$, so $OA = AE$ (triangle $OAE$ is isosceles with $A$ equidistant from $O$ and $E$)."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "Show that the complex number representing $DB$ is $z + \\mathrm{i}z + \\mathrm{i}z^*$.",
        type: "self",
        solution: "Complex number representing $DB = z_B - z_D = (1 + \\mathrm{i})z - (-\\mathrm{i}z^*) = z + \\mathrm{i}z + \\mathrm{i}z^*$ (shown)."
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "Show that $BD$ is perpendicular to $CE$.",
        type: "self",
        solution: "Complex number representing $EC = z_C - z_E = \\mathrm{i}z - 2\\mathrm{Re}(z)$.<br>Multiplying $DB$ by $\\mathrm{i}$: $$\\mathrm{i}(z + \\mathrm{i}z + \\mathrm{i}z^*) = \\mathrm{i}z - z - z^* = \\mathrm{i}z - (z + z^*) = \\mathrm{i}z - 2\\mathrm{Re}(z).$$<br>Since $EC = \\mathrm{i}(DB)$, rotating $DB$ by $90^\\circ$ anticlockwise gives $EC$, so $BD$ is perpendicular to $CE$."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q4",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Integration by Substitution", "Area and Volume"],
    stem: "Answer all parts.",
    parts: [
      {
        label: "(a)",
        marks: 6,
        prompt: "Find $$\\int \\frac{1 - x^2}{(1 + x^2)^2}\\,\\mathrm{d}x$$ using the substitution $x = \\tan u$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0, 1, 2],
        answer: "x/(x^2 + 1)",
        placeholder: "Antiderivative in x (include + c)",
        solution: "Let $x = \\tan u \\implies \\frac{\\mathrm{d}x}{\\mathrm{d}u} = \\sec^2 u$.<br>$$\\int \\frac{1 - \\tan^2 u}{(1 + \\tan^2 u)^2}\\sec^2 u\\,\\mathrm{d}u = \\int \\frac{1 - \\tan^2 u}{\\sec^2 u}\\,\\mathrm{d}u = \\int (\\cos^2 u - \\sin^2 u)\\,\\mathrm{d}u = \\int \\cos 2u\\,\\mathrm{d}u$$ $$= \\frac{1}{2}\\sin 2u + c = \\sin u\\cos u + c = \\left(\\frac{x}{\\sqrt{x^2+1}}\\right)\\left(\\frac{1}{\\sqrt{x^2+1}}\\right) + c = \\frac{x}{x^2+1} + c.$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The curves $C_1$ and $C_2$ have equations $y = \\frac{2}{(1+x^2)^2}$ and $y = \\frac{1}{1+x^2}$ respectively. Sketch $C_1$ and $C_2$ on the same graph, giving the coordinates of any points where $C_1$ and $C_2$ intersect and the equations of any asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 165" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="138" x2="265" y2="138" stroke-width="1.2"/><line x1="140" y1="156" x2="140" y2="12" stroke-width="1.2"/><path d="M 20 136 Q 70 134 100 108 Q 125 45 140 28 Q 155 45 180 108 Q 210 134 260 136" fill="none" stroke="#cf5652" stroke-width="2"/><path d="M 20 132 Q 70 124 100 108 Q 122 88 140 82 Q 158 88 180 108 Q 210 124 260 132" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="100" cy="108" r="2.6" fill="#2c2925"/><text x="94" y="102" text-anchor="end" stroke="none">(−1, 0.5)</text><circle cx="180" cy="108" r="2.6" fill="#2c2925"/><text x="186" y="102" stroke="none">(1, 0.5)</text><text x="148" y="30" stroke="none" fill="#cf5652">C₁</text><text x="215" y="118" stroke="none" fill="#4a8fe7">C₂</text><text x="24" y="150" stroke="none">y = 0</text><text x="132" y="150" stroke="none" font-style="italic">O</text></svg>`,
        solution: "Both curves are symmetric about the $y$-axis with horizontal asymptote $y = 0$. $C_1$ peaks at $(0, 2)$ and $C_2$ peaks at $(0, 1)$. They intersect at $(-1, 0.5)$ and $(1, 0.5)$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The finite region $R$ is bounded by $C_1$ and $C_2$. Using the result in part (a), find the area of the region $R$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "1",
        placeholder: "Exact area",
        solution: "$$\\text{Area} = \\int_{-1}^{1} \\left(\\frac{2}{(1+x^2)^2} - \\frac{1}{1+x^2}\\right)\\mathrm{d}x = \\int_{-1}^{1} \\frac{1 - x^2}{(1+x^2)^2}\\,\\mathrm{d}x = \\left[\\frac{x}{x^2+1}\\right]_{-1}^{1} = \\frac{1}{2} - \\left(-\\frac{1}{2}\\right) = 1 \\text{ unit}^2.$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Find the volume of the solid generated when the region $R$ is rotated $2\\pi$ radians about the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "7.88989",
        placeholder: "Value to 3 s.f.",
        solution: "$$\\text{Volume} = \\pi\\int_{-1}^{1}\\left(\\frac{2}{(1+x^2)^2}\\right)^2\\mathrm{d}x - \\pi\\int_{-1}^{1}\\left(\\frac{1}{1+x^2}\\right)^2\\mathrm{d}x = 7.89 \\text{ units}^3 \\text{ (3 s.f.).}$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q5",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "The probability distribution of a discrete random variable $X$ is given as follows:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$-2$</td><td>$0$</td><td>$2$</td><td>$4$</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$p$</td><td>$0.2$</td><td>$q$</td><td>$0.3$</td></tr></table></div>Given $\\mathrm{E}(X) = 1.2$,",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "find the values of $p$ and $q$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "p =", answer: "0.25", placeholder: "Value of p" },
          { label: "q =", answer: "0.25", placeholder: "Value of q" }
        ],
        solution: "Sum of probabilities $= 1 \\implies p + 0.2 + q + 0.3 = 1 \\implies p + q = 0.5$.<br>$\\mathrm{E}(X) = -2p + 2q + 4(0.3) = 1.2 \\implies -p + q = 0$.<br>Solving gives $p = 0.25$ and $q = 0.25$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "find the value of $\\mathrm{Var}(X)$.",
        type: "auto",
        mode: "number",
        answer: "5.36",
        placeholder: "Exact value",
        solution: "$\\mathrm{E}(X^2) = (-2)^2(0.25) + 2^2(0.25) + 4^2(0.3) = 6.8$.<br>$\\mathrm{Var}(X) = \\mathrm{E}(X^2) - (\\mathrm{E}(X))^2 = 6.8 - 1.2^2 = 5.36$."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q6",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Sampling", "Central Limit Theorem"],
    stem: "A consumer wants to investigate the average delivery timing by recording $50$ timings of food delivery to his house for dinner over $6$ months.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "In the context of the question, give a reason why this method of sampling is not suitable.",
        type: "self",
        solution: "It introduces bias because the timings recorded are only for dinner (excluding other mealtimes like breakfast or lunch), or only for deliveries to his own house (excluding other locations)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "A delivery platform's auditor collects the timings from a random sample of $50$ food deliveries. The delivery timings, denoted by $x$ minutes, are summarised below: $$\\sum(x - 30) = -66.5, \\quad \\sum(x - 30)^2 = 586.0763.$$ Find the unbiased estimates for the population mean (exact) and variance (to 3 s.f.).",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "28.67", exactRequired: true, placeholder: "Exact value" },
          { label: "Variance =", answer: "10.15574", placeholder: "Value to 3 s.f." }
        ],
        solution: "Unbiased estimate of mean: $\\bar{x} = 30 + \\frac{-66.5}{50} = 28.67$ min (exact).<br>Unbiased estimate of variance: $s^2 = \\frac{1}{49}\\left(586.0763 - \\frac{(-66.5)^2}{50}\\right) = 10.1557 \\approx 10.2 \\text{ min}^2$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The platform's auditor chooses another random sample of $45$ timings. Use your estimates from part (b) to find the probability that in a randomly chosen sample of $45$ delivery timings, the mean delivery timing is between $28$ minutes and $35$ minutes.",
        type: "auto",
        mode: "number",
        answer: "0.92069",
        placeholder: "Probability (3 s.f.)",
        solution: "Since $n = 45 \\ge 30$ is large, by CLT, $\\bar{X} \\sim \\mathrm{N}\\left(28.67, \\frac{10.1557}{45}\\right)$ approximately.<br>$\\mathrm{P}(28 \\le \\bar{X} \\le 35) = 0.921$ (3 s.f.)."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q7",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Correlation and Regression"],
    stem: "The following table shows the number of charge cycles, $n$, undergone by a battery, and its capacity, as a percentage of its original capacity, $p\\%$.<div class='q-table-wrap'><table class='q-table'><tr><th>$n$</th><td>100</td><td>150</td><td>200</td><td>250</td><td>300</td><td>350</td><td>400</td><td>450</td></tr><tr><th>$p$</th><td>96</td><td>90</td><td>85</td><td>83</td><td>80</td><td>79</td><td>77</td><td>76</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch a scatter diagram of the data, labelling the axes. Explain why the scatter diagram is consistent with a model of the form $p = a + \\frac{b}{n}$, where $a$ and $b$ are constants.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 175" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="150" x2="245" y2="150" stroke-width="1.2"/><line x1="40" y1="162" x2="40" y2="15" stroke-width="1.2"/><circle cx="65" cy="35" r="2.6" fill="#4ca885" stroke="none"/><circle cx="88" cy="65" r="2.6" fill="#4ca885" stroke="none"/><circle cx="111" cy="90" r="2.6" fill="#4ca885" stroke="none"/><circle cx="134" cy="100" r="2.6" fill="#4ca885" stroke="none"/><circle cx="157" cy="115" r="2.6" fill="#4ca885" stroke="none"/><circle cx="180" cy="120" r="2.6" fill="#4ca885" stroke="none"/><circle cx="203" cy="130" r="2.6" fill="#4ca885" stroke="none"/><circle cx="226" cy="135" r="2.6" fill="#4ca885" stroke="none"/><text x="72" y="34" stroke="none">(100, 96)</text><text x="226" y="125" text-anchor="middle" stroke="none">(450, 76)</text><text x="242" y="162" stroke="none" font-style="italic">n</text><text x="28" y="22" stroke="none" font-style="italic">p</text></svg>`,
        solution: "From the scatter diagram, as $n$ increases, $p$ decreases at a decreasing rate. This is consistent with the model $p = a + \\frac{b}{n}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "For the model of the form $p = a + \\frac{b}{n}$, calculate the product moment correlation coefficient $r$ and the constants $a$ and $b$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "r =", answer: "0.98852", placeholder: "Value to 3 s.f." },
          { label: "a =", answer: "71.4514", placeholder: "Value to 3 s.f." },
          { label: "b =", answer: "2580.3804", placeholder: "Value to 3 s.f." }
        ],
        solution: "Using GC linear regression of $p$ on $\\frac{1}{n}$:<br>$r = 0.989$ (3 s.f.), $a = 71.4514 \\approx 71.5$ (3 s.f.), $b = 2580.3804 \\approx 2580$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Using the model in part (b), estimate the capacity, as a percentage of its original capacity, when the battery undergoes $365$ charge cycles. Comment on the reliability of the estimate.",
        type: "self",
        solution: "When $n = 365$: $p = 71.4514 + \\frac{2580.3804}{365} = 78.5\\%$ (3 s.f.).<br>Since $n = 365$ lies within the data range $100 \\le n \\le 450$ (interpolation), and $r = 0.989$ is close to $1$ (strong positive linear relationship between $p$ and $\\frac{1}{n}$), the estimate is reliable."
      },
      {
        label: "(d)(i)",
        marks: 1,
        prompt: "For the model $p = \\mathrm{f}(n)$, the residual for a point $(c, d)$ is $d - \\mathrm{f}(c)$. Let $S$ be the sum of the squares of residuals for the model $p = \\mathrm{f}(n)$. For the values of $a$ and $b$ found in part (b), find $S$ when $\\mathrm{f}(n) = a + \\frac{b}{n}$.",
        type: "auto",
        mode: "number",
        answer: "7.56498",
        placeholder: "Value to 3 s.f.",
        solution: "Computing $\\sum (p_i - \\mathrm{f}(n_i))^2$ on the GC gives $S = 7.56498 \\approx 7.56$ (3 s.f.)."
      },
      {
        label: "(d)(ii)",
        marks: 1,
        prompt: "State the range of $S$ when $\\mathrm{f}(n) = a + \\frac{b}{dn}$, where $d$ is a non-zero real constant.",
        type: "self",
        solution: "Since $\\mathrm{f}(n) = a + \\frac{b/d}{n}$ is still a model of the form $\\alpha + \\frac{\\beta}{n}$, and the least squares line ($d = 1$) minimises the sum of squared residuals, $S \\ge 7.56$ (3 s.f.)."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q8",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Hypothesis Testing", "Central Limit Theorem"],
    stem: "White truffles are harvested from the forest. According to harvest records, the distribution of the mass of a white truffle has mean $20$ grams and standard deviation $3.5$ grams.<br>It is known that climate change affects the mass of white truffles. To investigate these effects, Lucia collects a random sample of $32$ white truffles with a mean mass of $19$ grams. She decides to test, at the $5\\%$ level of significance, whether the mean mass of white truffles has decreased.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State hypotheses for Lucia's test, defining any parameter that you use.",
        type: "self",
        solution: "Let $\\mu$ be the population mean mass of a white truffle (in grams).<br>$\\mathrm{H}_0 : \\mu = 20$ against $\\mathrm{H}_1 : \\mu < 20$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "State one assumption Lucia makes to carry out her test.",
        type: "self",
        solution: "Lucia assumes that the population standard deviation of the mass of white truffles remains $3.5$ grams."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Carry out Lucia's test at the $5\\%$ level of significance. Show the values you use to carry out the test and give your conclusion in the context of the question.",
        type: "self",
        solution: "Under $\\mathrm{H}_0$, since $n = 32 \\ge 30$ is large, by CLT, $\\bar{X} \\sim \\mathrm{N}\\left(20, \\frac{3.5^2}{32}\\right)$ approx.<br>$z_{\\text{cal}} = \\frac{19 - 20}{3.5/\\sqrt{32}} = -1.6162$, $p\\text{-value} = 0.05302 > 0.05$.<br>We do not reject $\\mathrm{H}_0$. There is insufficient evidence at the $5\\%$ level of significance to suggest that the mean mass of white truffles has decreased."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Jason also wishes to investigate whether the mean mass of white truffles has decreased. He collects another random sample of $n$ white truffles, where $n \\ge 30$, with a mean mass of $k$ grams. Past records revealed that across many harvest expeditions that collected $n$ truffles, $98\\%$ of them harvested truffles with a mean mass of more than $k$ grams. State the meaning of $p$-value in the context of Jason's test.",
        type: "self",
        solution: "It is the probability of obtaining a sample mean mass of at most $k$ grams (at least as extreme as $k$ grams), assuming that the population mean mass of a white truffle is $20$ grams."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Carry out Jason's test at the $2.5\\%$ level of significance. Show the values you use to carry out the test and give your conclusion in the context of the question.",
        type: "self",
        solution: "Under $\\mathrm{H}_0$, as $n \\ge 30$ is large, by CLT, $\\bar{X} \\sim \\mathrm{N}\\left(20, \\frac{3.5^2}{n}\\right)$ approx.<br>Given $\\mathrm{P}(\\bar{X} > k) = 0.98 \\implies p\\text{-value} = \\mathrm{P}(\\bar{X} \\le k) = 1 - 0.98 = 0.02 < 0.025$.<br>We reject $\\mathrm{H}_0$. There is sufficient evidence at the $2.5\\%$ level of significance to conclude that the mean mass of white truffles has decreased."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q9",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Probability", "Permutations & Combinations"],
    stem: "Answer both parts.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Events $A$ and $B$ are such that $\\mathrm{P}(B' \\mid A') = \\frac{4}{5}$ and $\\mathrm{P}(A) + 5\\mathrm{P}(B) = \\frac{5}{2}$. Find $\\mathrm{P}(A \\cap B)$.",
        type: "auto",
        mode: "number",
        answer: "3/10",
        placeholder: "Exact fraction or decimal",
        solution: "$$\\frac{\\mathrm{P}(A' \\cap B')}{\\mathrm{P}(A')} = \\frac{1 - \\mathrm{P}(A \\cup B)}{1 - \\mathrm{P}(A)} = \\frac{4}{5}$$<br>$$5 - 5\\mathrm{P}(A) - 5\\mathrm{P}(B) + 5\\mathrm{P}(A \\cap B) = 4 - 4\\mathrm{P}(A) \\implies 5\\mathrm{P}(A \\cap B) = \\mathrm{P}(A) + 5\\mathrm{P}(B) - 1 = \\frac{5}{2} - 1 = \\frac{3}{2}.$$<br>Hence $\\mathrm{P}(A \\cap B) = \\frac{3}{10}$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "A school organises a camp for $6$ seniors and $5$ juniors. For the opening ceremony, the $11$ students are arranged in a straight line for a photograph. Find the number of possible arrangements if the students standing at each end of the line are not both seniors.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "29030400",
        placeholder: "Exact integer",
        solution: "Using the complement (both ends are seniors): $$11! - {^6C_2} \\times 2! \\times 9! = 39916800 - 10886400 = 29030400.$$"
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "For a discussion session, the $11$ students are seated at a round table. Find the number of possible arrangements if no $2$ juniors are seated together.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "86400",
        placeholder: "Exact integer",
        solution: "Arrange the $6$ seniors in a circle in $(6-1)!$ ways, creating $6$ slots. Slot and arrange the $5$ juniors in ${^6C_5} \\times 5!$ ways.<br>Total $= 5! \\times 6 \\times 5! = 86400$."
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "For an activity, the $11$ students are grouped into a group of $5$ and a group of $6$. Find the number of ways to group the students if each group has at least $2$ juniors.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "350",
        placeholder: "Exact integer",
        solution: "Case 1 ($3$ juniors in group of $5$): ${^5C_3}{^6C_2} = 150$.<br>Case 2 ($2$ juniors in group of $5$): ${^5C_2}{^6C_3} = 200$.<br>Total $= 150 + 200 = 350$."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q10",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Binomial Distribution", "Discrete Random Variables"],
    stem: "A robot is programmed to move along the $x$-axis on the $x$-$y$ plane. It starts at the origin $O(0, 0)$.<br>The robot receives a signal to either:<br>• move one unit to the right with a probability of $0.3$; or<br>• move one unit to the left with a probability of $0.7$.<br>The signals are independent of each other. The robot receives $10$ signals. The random variable $R$ denotes the number of times the robot moves to the right.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the probability the robot moves exactly $3$ times to the right.",
        type: "auto",
        mode: "number",
        answer: "0.266828",
        placeholder: "Probability (3 s.f.)",
        solution: "$R \\sim \\mathrm{B}(10, 0.3)$. $\\mathrm{P}(R = 3) = 0.267$ (3 s.f.)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the probability the robot moves more than $3$ but less than $8$ times to the right.",
        type: "auto",
        mode: "number",
        answer: "0.348801",
        placeholder: "Probability (3 s.f.)",
        solution: "$\\mathrm{P}(3 < R < 8) = \\mathrm{P}(R \\le 7) - \\mathrm{P}(R \\le 3) = 0.349$ (3 s.f.)."
      },
      {
        label: "(c)(i)",
        marks: 1,
        prompt: "The random variable $X$ denotes the $x$-coordinate of the final position of the robot after the $10$ signals. If the robot moves exactly $r$ times to the right, show that the $x$-coordinate of the final position of the robot is $2r - 10$.",
        type: "self",
        solution: "Number of left moves $= 10 - r$. Final $x$-coordinate $= r - (10 - r) = 2r - 10$ (shown)."
      },
      {
        label: "(c)(ii)",
        marks: 1,
        prompt: "Find $\\mathrm{P}(X = -4)$.",
        type: "auto",
        mode: "number",
        answer: "0.266828",
        placeholder: "Probability (3 s.f.)",
        solution: "$X = -4 \\implies 2R - 10 = -4 \\implies R = 3$, so $\\mathrm{P}(X = -4) = \\mathrm{P}(R = 3) = 0.267$ (3 s.f.)."
      },
      {
        label: "(c)(iii)",
        marks: 3,
        prompt: "Find the mean and variance of $X$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "E(X) =", answer: "-4", exactRequired: true, placeholder: "Mean" },
          { label: "Var(X) =", answer: "8.4", placeholder: "Variance" }
        ],
        solution: "$\\mathrm{E}(R) = 10(0.3) = 3$, $\\mathrm{Var}(R) = 10(0.3)(0.7) = 2.1$.<br>$\\mathrm{E}(X) = 2\\mathrm{E}(R) - 10 = 2(3) - 10 = -4$.<br>$\\mathrm{Var}(X) = 2^2\\mathrm{Var}(R) = 4(2.1) = 8.4$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "In a separate experiment involving $n$ independent signals, the probability that the robot moves to the right more than $4$ times exceeds $0.2$. Find the least possible value of $n$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "11",
        placeholder: "Least integer n",
        solution: "Let $Y \\sim \\mathrm{B}(n, 0.3)$. $\\mathrm{P}(Y > 4) > 0.2 \\implies \\mathrm{P}(Y \\le 4) < 0.8$.<br>From GC: $n = 10 \\implies 0.8497$; $n = 11 \\implies 0.7897 < 0.8$.<br>Hence least $n = 11$."
      }
    ]
  },
  {
    id: "RVHS-2026-P2-Q11",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Normal Distribution", "Conditional Probability"],
    diagramSvg: `<svg viewBox="0 0 340 72" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="9.5" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="30" x2="315" y2="30" stroke="#4ca885" stroke-width="3"/><circle cx="25" cy="30" r="6" fill="#fff" stroke="#4ca885" stroke-width="2"/><circle cx="95" cy="30" r="6" fill="#fff" stroke="#4ca885" stroke-width="2"/><circle cx="165" cy="30" r="6" fill="#fff" stroke="#4ca885" stroke-width="2"/><circle cx="245" cy="30" r="6" fill="#fff" stroke="#4ca885" stroke-width="2"/><circle cx="315" cy="30" r="6" fill="#fff" stroke="#4ca885" stroke-width="2"/><text x="60" y="18" text-anchor="middle" stroke="none">1st seg</text><text x="130" y="18" text-anchor="middle" stroke="none">2nd seg</text><text x="205" y="18" text-anchor="middle" stroke="none">…</text><text x="280" y="18" text-anchor="middle" stroke="none">12th seg</text><text x="25" y="52" text-anchor="middle" stroke="none">1st</text><text x="95" y="52" text-anchor="middle" stroke="none">2nd</text><text x="165" y="52" text-anchor="middle" stroke="none">3rd</text><text x="205" y="52" text-anchor="middle" stroke="none">…</text><text x="245" y="52" text-anchor="middle" stroke="none">12th</text><text x="315" y="52" text-anchor="middle" stroke="none">13th</text></svg>`,
    stem: "Mr Lim travels to work by train every weekday morning. His journey begins at the 1st station and ends at the 13th station. The train passes through $12$ segments, where each segment is the distance between two consecutive stations.<br>Mr Lim leaves the 1st station at $8.25$ am every weekday. If Mr Lim arrives at the final station at or before $9$ am, he is considered to be early. Otherwise, he is considered to be late.<br>On fine days, the travel time for each train segment is independent and normally distributed with mean $2.5$ minutes and standard deviation $0.8$ minutes.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that, on a randomly chosen fine day, the probability that he arrives early for work is $0.9644$, correct to $4$ decimal places.",
        type: "self",
        solution: "Let $T \\sim \\mathrm{N}(2.5, 0.8^2)$ be one segment time and $X = T_1 + \\dots + T_{12}$.<br>$X \\sim \\mathrm{N}(12(2.5), 12(0.8^2)) = \\mathrm{N}(30, 7.68)$.<br>$\\mathrm{P}(X \\le 35) = 0.9644016 = 0.9644$ (4 d.p.) (shown)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Over $75$ fine days, find the expected number of times Mr Lim arrives early for work.",
        type: "auto",
        mode: "number",
        answer: "72.3301",
        placeholder: "Value to 3 s.f.",
        solution: "Expected number of times $= 75 \\times 0.9644 = 72.3$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "On rainy days, the train takes $20\\%$ longer to travel across each train segment. Show that, on a randomly chosen rainy day, the probability that he is late for work is $0.6182$, correct to $4$ decimal places.",
        type: "self",
        solution: "Let $Y = 1.2X$ be the total travel time on a rainy day.<br>$Y \\sim \\mathrm{N}(1.2(30), 1.2^2(7.68)) = \\mathrm{N}(36, 11.0592)$.<br>$\\mathrm{P}(Y > 35) = 0.6181795 = 0.6182$ (4 d.p.) (shown)."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "On rainy days, Mr Lim wishes to change his departure time so that he is early for work on at least $95\\%$ of the rainy days. Find the latest time, to the nearest minute, that he should leave the first station on a rainy day.",
        type: "self",
        solution: "Let $t$ be the allowed travel time (in minutes): $\\mathrm{P}(Y \\le t) \\ge 0.95$.<br>By GC, $t \\ge 41.47$, so $t = 42$ minutes (to nearest minute).<br>Leaving $42$ minutes before $9.00$ am gives $8.18$ am."
      },
      {
        label: "(e)",
        marks: 4,
        prompt: "It is known that there is a probability of $p$ that it rains on a weekday morning. Regardless of the weather, it is also known that when Mr Lim leaves the first station at $8.25$ am, he is early for work $80\\%$ of the time. One day, Mr Lim is late for work. Find the probability it was a rainy day.",
        type: "auto",
        mode: "number",
        answer: "0.8722",
        placeholder: "Probability (3 s.f.)",
        solution: "Let $R$ be the event it rains and $E$ be the event he is early.<br>$\\mathrm{P}(E) = p(1 - 0.6182) + (1 - p)(0.9644) = 0.8 \\implies 0.5826p = 0.1644 \\implies p = 0.28218$.<br>$$\\mathrm{P}(R \\mid E') = \\frac{\\mathrm{P}(R \\cap E')}{\\mathrm{P}(E')} = \\frac{0.28218 \\times 0.6182}{1 - 0.8} = 0.872 \\text{ (3 s.f.).}$$"
      }
    ]
  }
]);
