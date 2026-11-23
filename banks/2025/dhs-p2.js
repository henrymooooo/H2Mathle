window.registerQuestions([
  {
    id: "DHS-2025-P2-Q1",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "A curve $C$ has equation $y = x + \\frac{9}{x+1}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Using differentiation, find the range of values of $x$ such that $C$ concaves upwards.",
        type: "self",
        solution: "$$y = x + \\frac{9}{x+1}$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 - \\frac{9}{(x+1)^2}$$<br>$$\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = \\frac{18}{(x+1)^3}$$<br>For $C$ to concave upwards, $\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} > 0$:<br>$$\\frac{18}{(x+1)^3} > 0 \\implies (x+1)^3 > 0 \\implies x > -1$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch $C$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 240" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (125, 130), scale 11px per unit -->
          <line x1="20" y1="130" x2="260" y2="130" stroke-width="1.2"/>
          <polyline points="255,127 260,130 255,133" fill="none" stroke-width="1.2"/>
          <text x="263" y="133" stroke="none" font-style="italic">x</text>
          <line x1="125" y1="228" x2="125" y2="15" stroke-width="1.2"/>
          <polyline points="122,20 125,15 128,20" fill="none" stroke-width="1.2"/>
          <text x="130" y="20" stroke="none" font-style="italic">y</text>
          <text x="129" y="142" stroke="none" font-style="italic">O</text>
          <!-- Vertical asymptote x = -1 -> x = 114 -->
          <line x1="114" y1="18" x2="114" y2="225" stroke-dasharray="4,3" opacity="0.65"/>
          <text x="76" y="26" stroke="none" font-style="italic">x = -1</text>
          <!-- Oblique asymptote y = x: (25, 230) to (235, 20) -->
          <line x1="25" y1="230" x2="235" y2="20" stroke-dasharray="4,3" opacity="0.65"/>
          <text x="234" y="34" stroke="none" font-style="italic">y = x</text>
          <!-- Upper branch (x > -1): y-int (0,9)=(125,31), min (2,5)=(147,75), (8,9)=(213,31) -->
          <path d="M 119,18 C 122,30 125,31 128,45 C 134,68 140,75 147,75 C 165,75 190,58 242,20" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="125" cy="31" r="2.5" fill="#2c2925" stroke="none"/>
          <text x="130" y="35" stroke="none">(0, 9)</text>
          <circle cx="147" cy="75" r="2.5" fill="#2c2925" stroke="none"/>
          <text x="150" y="88" stroke="none">(2, 5)</text>
          <!-- Lower branch (x < -1): max (-4,-7)=(81,207) -->
          <path d="M 24,225 C 50,206 68,207 81,207 C 96,207 105,212 110,226" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="81" cy="207" r="2.5" fill="#2c2925" stroke="none"/>
          <text x="58" y="222" stroke="none">(-4, -7)</text>
        </svg>`,
        solution: "• Vertical asymptote: $x = -1$.<br>• Oblique asymptote: $y = x$.<br>• $y$-intercept: when $x = 0$, $y = 9$, i.e. $(0, 9)$. No $x$-intercepts since $x^2 + x + 9 = 0$ has discriminant $1 - 36 < 0$.<br>• Stationary points: $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 - \\frac{9}{(x+1)^2} = 0 \\implies (x+1)^2 = 9 \\implies x = 2$ or $x = -4$.<br>&nbsp;&nbsp;– Minimum point at $(2, 5)$.<br>&nbsp;&nbsp;– Maximum point at $(-4, -7)$."
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q2",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Use the substitution $t = \\mathrm{e}^x$ to show that $$\\int \\mathrm{e}^{2x} \\tan^{-1}(\\mathrm{e}^x)\\,\\mathrm{d}x = \\int t \\tan^{-1}(t)\\,\\mathrm{d}t.$$",
        type: "self",
        solution: "Let $t = \\mathrm{e}^x$. Then $\\frac{\\mathrm{d}t}{\\mathrm{d}x} = \\mathrm{e}^x = t \\implies \\mathrm{d}x = \\frac{\\mathrm{d}t}{t}$.<br>$$\\int \\mathrm{e}^{2x} \\tan^{-1}(\\mathrm{e}^x)\\,\\mathrm{d}x = \\int t^2 \\tan^{-1}(t) \\cdot \\frac{\\mathrm{d}t}{t} = \\int t \\tan^{-1}(t)\\,\\mathrm{d}t \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Hence find the exact value of $$\\int_{0}^{1} \\mathrm{e}^{2x} \\tan^{-1}(\\mathrm{e}^x)\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "number",
        answer: "atan(e)*(e^2 + 1)/2 - e/2 - pi/4 + 1/2",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Using integration by parts with $u = \\tan^{-1} t$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}t} = t$ ($\\frac{\\mathrm{d}u}{\\mathrm{d}t} = \\frac{1}{1+t^2}$, $v = \\frac{t^2}{2}$):<br>$$\\int t\\tan^{-1}(t)\\,\\mathrm{d}t = \\frac{t^2}{2}\\tan^{-1} t - \\frac{1}{2}\\int \\frac{t^2}{1+t^2}\\,\\mathrm{d}t$$<br>$$= \\frac{t^2}{2}\\tan^{-1} t - \\frac{1}{2}\\int \\left(1 - \\frac{1}{1+t^2}\\right)\\mathrm{d}t$$<br>$$= \\frac{t^2}{2}\\tan^{-1} t - \\frac{1}{2}(t - \\tan^{-1} t) + C$$<br>$$= \\frac{\\tan^{-1} t}{2}(t^2 + 1) - \\frac{t}{2} + C$$<br>Changing limits: when $x = 0$, $t = \\mathrm{e}^0 = 1$; when $x = 1$, $t = \\mathrm{e}$.<br>$$\\int_{0}^{1} \\mathrm{e}^{2x} \\tan^{-1}(\\mathrm{e}^x)\\,\\mathrm{d}x = \\left[\\frac{\\tan^{-1} t}{2}(t^2 + 1) - \\frac{t}{2}\\right]_{1}^{\\mathrm{e}}$$<br>$$= \\left(\\frac{\\tan^{-1}\\mathrm{e}}{2}(\\mathrm{e}^2 + 1) - \\frac{\\mathrm{e}}{2}\\right) - \\left(\\tan^{-1} 1 - \\frac{1}{2}\\right)$$<br>$$= \\frac{\\tan^{-1}\\mathrm{e}}{2}(\\mathrm{e}^2 + 1) - \\frac{\\mathrm{e}}{2} - \\frac{\\pi}{4} + \\frac{1}{2}$$"
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q3",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    stem: "A curve $C$ has equation $x^3 + y^3 - 5xy = 0$ where $x > 0$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 3], y: [2, 3, 4] },
        answer: "(5*y - 3*x^2)/(3*y^2 - 5*x)",
        placeholder: "Expression in terms of x and y",
        solution: "Differentiating $x^3 + y^3 - 5xy = 0$ implicitly with respect to $x$:<br>$$3x^2 + 3y^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 5\\left(x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\right) = 0$$<br>$$(3y^2 - 5x)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 5y - 3x^2$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{5y - 3x^2}{3y^2 - 5x}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the coordinates of the point on $C$ at which the normal is parallel to the $y$-axis.",
        type: "auto",
        mode: "tuple",
        answer: [2.099868416491455, 2.645668419946999],
        placeholder: "Coordinates (x, y)",
        solution: "When the normal is parallel to the $y$-axis, the tangent is parallel to the $x$-axis, so $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>$$5y - 3x^2 = 0 \\implies y = \\frac{3}{5}x^2$$<br>Substituting into $x^3 + y^3 - 5xy = 0$:<br>$$x^3 + \\left(\\frac{3}{5}x^2\\right)^3 - 5x\\left(\\frac{3}{5}x^2\\right) = 0$$<br>$$\\frac{27}{125}x^6 - 2x^3 = 0 \\implies \\frac{x^3}{125}(27x^3 - 250) = 0$$<br>Since $x > 0$:<br>$$x = \\frac{5\\sqrt[3]{2}}{3} \\approx 2.10, \\quad y = \\frac{3}{5}x^2 = \\frac{5\\sqrt[3]{4}}{3} \\approx 2.65$$<br>The coordinates of the point are $(2.10, 2.65)$ (or exact $\\left(\\frac{5\\sqrt[3]{2}}{3}, \\frac{5\\sqrt[3]{4}}{3}\\right)$)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Determine the nature of the stationary point.",
        type: "self",
        solution: "Differentiating $3x^2 + 3y^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 5x\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 5y = 0$ with respect to $x$:<br>$$6x + 3y^2\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + 6y\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 - 5x\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} - 10\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$$<br>At the stationary point $\\left(\\frac{5\\sqrt[3]{2}}{3}, \\frac{5\\sqrt[3]{4}}{3}\\right)$ where $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>$$\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = \\frac{-6x}{3y^2 - 5x} = -1.2 < 0$$<br>Hence, the stationary point is a <strong>maximum point</strong>."
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q4",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Vectors"],
    diagramSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- O=(65,165), A=(40,105), B=(235,165), C=(160,25) -->
      <!-- D on AB (k=0.4): (40+0.4*195, 105+0.4*60) = (118, 129) -->
      <!-- E midpoint of BC: (197.5, 95) -->
      <polygon points="65,165 235,165 160,25" fill="none" stroke-width="1.3"/>
      <line x1="65" y1="165" x2="40" y2="105" stroke-width="1.3"/>
      <line x1="40" y1="105" x2="235" y2="165" stroke-width="1.3"/>
      <line x1="65" y1="165" x2="118" y2="129" stroke="#4a8fe7" stroke-width="1.5"/>
      <circle cx="118" cy="129" r="2.5" fill="#4a8fe7" stroke="none"/>
      <circle cx="197.5" cy="95" r="2.5" fill="#2c2925" stroke="none"/>
      <text x="53" y="178" stroke="none" font-style="italic">O</text>
      <text x="24" y="107" stroke="none" font-style="italic">A</text>
      <text x="241" y="170" stroke="none" font-style="italic">B</text>
      <text x="150" y="20" stroke="none" font-style="italic">C</text>
      <text x="118" y="143" stroke="none" font-style="italic">D</text>
      <text x="204" y="95" stroke="none" font-style="italic">E</text>
      <text x="38" y="143" stroke="none" font-weight="bold">a</text>
      <text x="145" y="181" stroke="none" font-weight="bold">b</text>
    </svg>`,
    stem: "Relative to the origin $O$, the points $A$, $B$, and $C$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $3\\mathbf{a} + \\mathbf{b}$ respectively. The point $D$ lies on $AB$ such that $AD = kAB$, where $0 < k < 1$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find a vector equation of the line $OD$ in terms of $k$, $\\mathbf{a}$ and $\\mathbf{b}$.",
        type: "self",
        solution: "Since $D$ lies on $AB$ with $AD : DB = k : (1 - k)$, by the Ratio Theorem:<br>$$OD = k\\mathbf{b} + (1 - k)\\mathbf{a}$$<br>Since the line $OD$ passes through the origin $O$, a vector equation of the line $OD$ is:<br>$$\\mathbf{r} = \\lambda\\left(k\\mathbf{b} + (1 - k)\\mathbf{a}\\right), \\quad \\lambda \\in \\mathbb{R}$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "The point $E$ is the midpoint of $BC$. Find the value of $k$ if $O$, $D$ and $E$ are collinear.",
        type: "auto",
        mode: "number",
        answer: "2/5",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Position vector of $E$:<br>$$OE = \\frac{1}{2}(OC + OB) = \\frac{1}{2}\\left((3\\mathbf{a} + \\mathbf{b}) + \\mathbf{b}\\right) = \\frac{3}{2}\\mathbf{a} + \\mathbf{b}$$<br>Since $O$, $D$ and $E$ are collinear, $OE = \\lambda OD$ for some scalar $\\lambda$:<br>$$\\frac{3}{2}\\mathbf{a} + \\mathbf{b} = \\lambda(1 - k)\\mathbf{a} + \\lambda k\\mathbf{b}$$<br>Since $\\mathbf{a}$ and $\\mathbf{b}$ are non-zero and non-parallel:<br>$\\lambda k = 1$ &nbsp;--- (1)<br>$\\lambda(1 - k) = \\frac{3}{2} \\implies \\lambda - \\lambda k = \\frac{3}{2}$ &nbsp;--- (2)<br>Substituting (1) into (2): $\\lambda - 1 = \\frac{3}{2} \\implies \\lambda = \\frac{5}{2}$.<br>From (1): $k = \\frac{1}{\\lambda} = \\frac{2}{5}$."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "It is given that $|\\mathbf{a}| = 1$, $|\\mathbf{b}| = 2$ and $|3\\mathbf{a} - 2\\mathbf{b}| = \\sqrt{31}$. By considering the scalar product $(3\\mathbf{a} - 2\\mathbf{b}) \\cdot (3\\mathbf{a} - 2\\mathbf{b})$, find the numerical value of $\\mathbf{a} \\cdot \\mathbf{b}$ and hence determine the angle between $\\mathbf{a}$ and $\\mathbf{b}$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a · b =", answer: "-1/2", exactRequired: true, placeholder: "Exact value" },
          { label: "Angle (degrees) =", answer: "104.4775", dp: 1, placeholder: "1 d.p. (in degrees)" }
        ],
        solution: "$$(3\\mathbf{a} - 2\\mathbf{b}) \\cdot (3\\mathbf{a} - 2\\mathbf{b}) = |3\\mathbf{a} - 2\\mathbf{b}|^2 = 31$$<br>$$9|\\mathbf{a}|^2 - 12(\\mathbf{a} \\cdot \\mathbf{b}) + 4|\\mathbf{b}|^2 = 31$$<br>$$9(1)^2 - 12(\\mathbf{a} \\cdot \\mathbf{b}) + 4(2)^2 = 31$$<br>$$25 - 12(\\mathbf{a} \\cdot \\mathbf{b}) = 31 \\implies \\mathbf{a} \\cdot \\mathbf{b} = -\\frac{1}{2}$$<br>Let $\\theta$ be the angle between $\\mathbf{a}$ and $\\mathbf{b}$:<br>$$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|} = \\frac{-\\frac{1}{2}}{1 \\times 2} = -\\frac{1}{4}$$<br>$$\\theta = 104.5^\\circ \\text{ (to 1 d.p.)} \\quad (\\text{or } 1.82\\text{ rad})$$"
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Give a geometrical interpretation of $|\\mathbf{a} \\cdot \\mathbf{b}|$.",
        type: "self",
        solution: "Since $|\\mathbf{a}| = 1$ (i.e. $\\mathbf{a}$ is a unit vector), $|\\mathbf{a} \\cdot \\mathbf{b}| = |\\mathbf{b} \\cdot \\hat{\\mathbf{a}}|$ is the <strong>length of projection of $\\mathbf{b}$ onto $\\mathbf{a}$</strong> (or the length of projection of $OB$ onto $OA$)."
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q5",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Graphs & Transformations", "Differential Equations"],
    stem: "A heated metal block at $160^\\circ\\text{C}$ is left to cool in a laboratory with an ambient temperature of $30^\\circ\\text{C}$. The temperature, $T$ in $^\\circ\\text{C}$, of the metal block $t$ minutes after it is left in the laboratory is modelled as a function $T(t)$. The rate of cooling is proportional to the difference between the object's temperature and the ambient temperature, with a positive constant of proportionality $k$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Write down a differential equation for the situation and find the expression of $T(t)$ in terms of $k$.",
        type: "self",
        solution: "Since $T$ is decreasing and $k > 0$:<br>$$\\frac{\\mathrm{d}T}{\\mathrm{d}t} = -k(T - 30)$$<br>Separating variables and integrating:<br>$$\\int \\frac{1}{T - 30}\\,\\mathrm{d}T = \\int (-k)\\,\\mathrm{d}t$$<br>$$\\ln|T - 30| = -kt + c$$<br>$$T - 30 = A\\mathrm{e}^{-kt} \\quad (A = \\pm\\mathrm{e}^c)$$<br>When $t = 0$, $T = 160$: $160 - 30 = A \\implies A = 130$.<br>$$\\therefore T(t) = 30 + 130\\mathrm{e}^{-kt}$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "An experiment to study the cooling of the heated metal block starts at 10:00 am. However, a protective thermal casing is used to delay the cooling of the metal block for 5 minutes, resulting in the temperature of the metal block remaining constant at $160^\\circ\\text{C}$ during this time. At 10:05 am, the casing is removed and cooling begins immediately. At 10:15 am, the temperature of the metal block is measured to be $100^\\circ\\text{C}$.<br><br>In order to use the solution obtained in part (a) to model the cooling process now, the time $t$ needs to be replaced with $t + a$, where $a$ is a constant. State the value of $a$.",
        type: "auto",
        mode: "number",
        answer: "-5",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Since cooling starts 5 minutes later, the graph of $T(t)$ is translated 5 units in the positive $t$-direction. Replacing $t$ with $t - 5$ gives $a = -5$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Due to the protective thermal casing, the temperature of the metal block $T_p(t)^\\circ\\text{C}$, $t$ minutes after 10:00 am can be modelled by the piecewise function:<br>$T_p(t) = 160$ for $0 \\le t < 5$, and $T_p(t) = T(t + a)$ for $t \\ge 5$.<br>Using your answers from parts (a) and (b), show that $T(t + a) = 30 + 177\\mathrm{e}^{-0.0619t}$.",
        type: "self",
        solution: "For $t \\ge 5$, $T_p(t) = T(t - 5) = 30 + 130\\mathrm{e}^{-k(t - 5)}$.<br>At 10:15 am, $t = 15$ and $T_p = 100$:<br>$$100 = 30 + 130\\mathrm{e}^{-10k} \\implies \\mathrm{e}^{-10k} = \\frac{70}{130} = \\frac{7}{13}$$<br>$$k = -\\frac{1}{10}\\ln\\frac{7}{13} = 0.061904$$<br>Therefore:<br>$$T(t - 5) = 30 + 130\\mathrm{e}^{5(0.061904)}\\mathrm{e}^{-0.061904t} = 30 + 177.16\\mathrm{e}^{-0.061904t} \\approx 30 + 177\\mathrm{e}^{-0.0619t} \\quad (\\text{shown})$$"
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Find the time it takes for the metal block to cool to $60^\\circ\\text{C}$.",
        type: "auto",
        mode: "number",
        answer: "28.687",
        answers: ["28.687", "28.678"],
        placeholder: "3 s.f. (in minutes)",
        solution: "$$60 = 30 + 177.16\\mathrm{e}^{-0.061904t}$$<br>$$\\mathrm{e}^{-0.061904t} = \\frac{30}{177.16}$$<br>$$t = 28.687 \\approx 28.7\\text{ minutes (to 3 s.f.)}$$"
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Sketch the graph of $T_p(t)$ against $t$ for $t \\ge 0$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (45, 155) -->
          <line x1="30" y1="155" x2="255" y2="155" stroke-width="1.2"/>
          <polyline points="250,152 255,155 250,158" fill="none" stroke-width="1.2"/>
          <text x="259" y="158" stroke="none" font-style="italic">t</text>
          <line x1="45" y1="168" x2="45" y2="18" stroke-width="1.2"/>
          <polyline points="42,23 45,18 48,23" fill="none" stroke-width="1.2"/>
          <text x="25" y="22" stroke="none" font-style="italic">Tₚ</text>
          <text x="33" y="168" stroke="none" font-style="italic">O</text>
          <!-- Horizontal asymptote Tp = 30 at y = 132 -->
          <line x1="45" y1="132" x2="245" y2="132" stroke-dasharray="4,3" opacity="0.65"/>
          <text x="210" y="146" stroke="none" font-style="italic">Tₚ = 30</text>
          <!-- Dashed vertical line at t = 5 (x = 90) -->
          <line x1="90" y1="45" x2="90" y2="155" stroke-dasharray="3,3" opacity="0.5"/>
          <text x="86" y="169" stroke="none">5</text>
          <text x="20" y="49" stroke="none">160</text>
          <!-- Piecewise graph: horizontal from (45,45) to (90,45), then exponential decay to y=132 -->
          <line x1="45" y1="45" x2="90" y2="45" stroke="#4a8fe7" stroke-width="2"/>
          <path d="M 90,45 C 110,95 145,124 245,130" fill="none" stroke="#4a8fe7" stroke-width="2"/>
        </svg>`,
        solution: "• For $0 \\le t < 5$: horizontal line segment at $T_p = 160$.<br>• For $t \\ge 5$: exponential decay curve starting from $(5, 160)$, decreasing and approaching the horizontal asymptote $T_p = 30$ as $t$ → ∞."
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q6",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability"],
    stem: "The events $A$, $B$ and $C$ are such that $\\mathrm{P}(A) = 0.8$, $\\mathrm{P}(B) = 0.2$ and $\\mathrm{P}(C) = 0.6$. It is also known that $\\mathrm{P}(A \\cap B) = \\mathrm{P}(B)$ and $\\mathrm{P}(B \\cap C) = 0.1$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "Find exactly the maximum and minimum possible values of $\\mathrm{P}(A \\cap B' \\cap C)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Min =", answer: "0.3", exactRequired: true, placeholder: "Exact value" },
          { label: "Max =", answer: "0.5", exactRequired: true, placeholder: "Exact value" }
        ],
        solutionSvg: `<svg viewBox="0 0 280 155" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <rect x="10" y="10" width="260" height="135" fill="none" stroke-width="1.3"/>
          <!-- A: large ellipse on left -->
          <ellipse cx="105" cy="78" rx="78" ry="48" fill="none" stroke="#4ca885" stroke-width="1.5"/>
          <text x="48" y="42" stroke="none" font-style="italic" fill="#4ca885">A</text>
          <!-- B: inside A -->
          <ellipse cx="115" cy="78" rx="34" ry="26" fill="none" stroke="#2c2925" stroke-width="1.3"/>
          <text x="72" y="82" stroke="none" font-style="italic">B</text>
          <!-- C: right ellipse overlapping B and A -->
          <ellipse cx="190" cy="78" rx="60" ry="34" fill="none" stroke="#cf5652" stroke-width="1.5"/>
          <text x="208" y="38" stroke="none" font-style="italic" fill="#cf5652">C</text>
          <!-- Region labels -->
          <text x="95" y="82" stroke="none">0.1</text>
          <text x="133" y="82" stroke="none">0.1</text>
          <text x="160" y="82" stroke="none" font-style="italic">x</text>
          <text x="200" y="82" stroke="none">0.5 - x</text>
          <text x="42" y="108" stroke="none">0.6 - x</text>
          <text x="208" y="135" stroke="none">x - 0.3</text>
        </svg>`,
        solution: "Since $\\mathrm{P}(A \\cap B) = \\mathrm{P}(B)$, we have $B \\subset A$, so $\\mathrm{P}(A \\cap B \\cap C) = \\mathrm{P}(B \\cap C) = 0.1$.<br>Let $x = \\mathrm{P}(A \\cap B' \\cap C)$. Then $\\mathrm{P}(A \\cap C) = 0.1 + x$.<br>• Since $\\mathrm{P}(C) = 0.6$, the region in $C$ outside $A$ has probability $0.5 - x \\ge 0 \\implies x \\le 0.5$.<br>• Since $\\mathrm{P}(A \\cup C) \\le 1$: $0.8 + 0.6 - (0.1 + x) \\le 1 \\implies x \\ge 0.3$.<br>• Also $0.6 - x \\ge 0 \\implies x \\le 0.6$.<br>Therefore, minimum $= 0.3$ and maximum $= 0.5$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find exactly the maximum and minimum possible values of $\\mathrm{P}(A \\cap B' \\cap C \\mid A \\cup C)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Min =", answer: "0.3", exactRequired: true, placeholder: "Exact value" },
          { label: "Max =", answer: "0.625", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "Since $(A \\cap B' \\cap C) \\subseteq (A \\cup C)$:<br>$$\\mathrm{P}(A \\cap B' \\cap C \\mid A \\cup C) = \\frac{\\mathrm{P}(A \\cap B' \\cap C)}{\\mathrm{P}(A \\cup C)} = \\frac{x}{0.8 + 0.6 - (0.1 + x)} = \\frac{x}{1.3 - x} = \\frac{1.3}{1.3 - x} - 1$$<br>This is a strictly increasing function of $x$ for $0.3 \\le x \\le 0.5$.<br>• Minimum (at $x = 0.3$): $\\frac{0.3}{1.3 - 0.3} = 0.3$.<br>• Maximum (at $x = 0.5$): $\\frac{0.5}{1.3 - 0.5} = \\frac{5}{8} = 0.625$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is given further that $A$ and $C$ are independent, find the value of $\\mathrm{P}(A \\cap B' \\cap C)$.",
        type: "auto",
        mode: "number",
        answer: "0.38",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $A$ and $C$ are independent:<br>$$\\mathrm{P}(A \\cap C) = \\mathrm{P}(A)\\mathrm{P}(C) = (0.8)(0.6) = 0.48$$<br>$$0.1 + x = 0.48 \\implies \\mathrm{P}(A \\cap B' \\cap C) = x = 0.38$$"
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q7",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Permutations & Combinations"],
    diagramSvg: `<svg viewBox="0 0 470 155" width="470" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
      <!-- Column headers -->
      <text x="72" y="18" stroke="none" font-style="italic">C</text>
      <text x="148" y="18" stroke="none" font-style="italic">D</text>
      <text x="190" y="18" stroke="none" font-style="italic">E</text>
      <text x="232" y="18" stroke="none" font-style="italic">F</text>
      <text x="308" y="18" stroke="none" font-style="italic">G</text>
      <text x="350" y="18" stroke="none" font-style="italic">H</text>
      <text x="392" y="18" stroke="none" font-style="italic">I</text>
      <!-- Row labels -->
      <text x="12" y="45" stroke="none">Row 55</text>
      <text x="12" y="77" stroke="none">Row 56</text>
      <text x="12" y="109" stroke="none">Row 57</text>
      <!-- Aisles -->
      <rect x="102" y="26" width="26" height="92" fill="rgba(44,41,37,0.06)" stroke-width="0.9"/>
      <text x="115" y="76" stroke="none" text-anchor="middle" font-size="9.5">Aisle</text>
      <rect x="262" y="26" width="26" height="92" fill="rgba(44,41,37,0.06)" stroke-width="0.9"/>
      <text x="275" y="76" stroke="none" text-anchor="middle" font-size="9.5">Aisle</text>
      <!-- Seats: each 34x24 -->
      <!-- Row 55 (y=28): C(X), D(X), E, F, G, H, I -->
      <rect x="60" y="28" width="34" height="24" fill="none" stroke-width="1.3"/><line x1="60" y1="28" x2="94" y2="52" stroke-width="1"/><line x1="94" y1="28" x2="60" y2="52" stroke-width="1"/>
      <rect x="136" y="28" width="34" height="24" fill="none" stroke-width="1.3"/><line x1="136" y1="28" x2="170" y2="52" stroke-width="1"/><line x1="170" y1="28" x2="136" y2="52" stroke-width="1"/>
      <rect x="178" y="28" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="220" y="28" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="296" y="28" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="338" y="28" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="380" y="28" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <!-- Emergency exit label -->
      <text x="422" y="38" stroke="none" fill="#cf5652" font-weight="bold" font-size="9.5">Emergency</text>
      <text x="422" y="50" stroke="none" fill="#cf5652" font-weight="bold" font-size="9.5">exit</text>
      <!-- Row 56 (y=60): C(X), D(X), E, F, G, H, I -->
      <rect x="60" y="60" width="34" height="24" fill="none" stroke-width="1.3"/><line x1="60" y1="60" x2="94" y2="84" stroke-width="1"/><line x1="94" y1="60" x2="60" y2="84" stroke-width="1"/>
      <rect x="136" y="60" width="34" height="24" fill="none" stroke-width="1.3"/><line x1="136" y1="60" x2="170" y2="84" stroke-width="1"/><line x1="170" y1="60" x2="136" y2="84" stroke-width="1"/>
      <rect x="178" y="60" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="220" y="60" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="296" y="60" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="338" y="60" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="380" y="60" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <!-- Row 57 (y=92): C, D(X), E, F, G, H(X), I(X) -->
      <rect x="60" y="92" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="136" y="92" width="34" height="24" fill="none" stroke-width="1.3"/><line x1="136" y1="92" x2="170" y2="116" stroke-width="1"/><line x1="170" y1="92" x2="136" y2="116" stroke-width="1"/>
      <rect x="178" y="92" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="220" y="92" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="296" y="92" width="34" height="24" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.4"/>
      <rect x="338" y="92" width="34" height="24" fill="none" stroke-width="1.3"/><line x1="338" y1="92" x2="372" y2="116" stroke-width="1"/><line x1="372" y1="92" x2="338" y2="116" stroke-width="1"/>
      <rect x="380" y="92" width="34" height="24" fill="none" stroke-width="1.3"/><line x1="380" y1="92" x2="414" y2="116" stroke-width="1"/><line x1="414" y1="92" x2="380" y2="116" stroke-width="1"/>
      <!-- Legend -->
      <rect x="145" y="132" width="22" height="14" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.3"/>
      <text x="173" y="143" stroke="none" font-size="9.5">Available Seat (14 total)</text>
      <rect x="300" y="132" width="22" height="14" fill="none" stroke-width="1.2"/><line x1="300" y1="132" x2="322" y2="146" stroke-width="1"/><line x1="322" y1="132" x2="300" y2="146" stroke-width="1"/>
      <text x="328" y="143" stroke="none" font-size="9.5">Occupied Seat</text>
    </svg>`,
    stem: "Twelve students from three CCAs organised an overseas learning trip to Shanghai. It comprises five students from Tennis, four students from Bowling and three students from Softball. The available seats for the flight for them to choose from are shown on the diagram above.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "In how many different ways can the students be seated if there is a particular student who must be seated nearest to the emergency exit?",
        type: "auto",
        mode: "number",
        answer: "3113510400",
        placeholder: "Exact integer or 3 s.f.",
        solution: "The particular student takes Row 55 Seat I (1 way).<br>There are 13 remaining available seats for the remaining 11 students:<br>$$^{13}\\mathrm{C}_{11} \\times 11! = \\frac{13!}{2!} = 3\\,113\\,510\\,400$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the number of ways they can be seated if two particular students do not want to be seated on any of the aisle seats.",
        type: "auto",
        mode: "number",
        answer: "10059033600",
        placeholder: "Exact integer or 3 s.f.",
        solution: "There are 7 non-aisle available seats (E55, E56, E57, H55, H56, I55, I56).<br>Stage 1: Seat the 2 particular students in 2 of the 7 non-aisle seats: $^{7}\\mathrm{C}_{2} \\times 2! = 42$ ways.<br>Stage 2: Seat the remaining 10 students in the remaining 12 seats: $^{12}\\mathrm{C}_{10} \\times 10! = \\frac{12!}{2!}$ ways.<br>$$\\text{Total ways} = 42 \\times \\frac{12!}{2!} = 10\\,059\\,033\\,600 \\quad (\\approx 1.01 \\times 10^{10})$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find the number of ways they can be seated if students of the same CCA must be seated together either front and back or left and right, and cannot be separated by an aisle. For example, the three students from Softball can be seated at Row 56 Seat G, H and Row 57 Seat G, but not Row 56 Seat H, I and Row 57 Seat G.",
        type: "auto",
        mode: "number",
        answer: "518400",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Seat C57 is isolated by an aisle and cannot be used.<br>The middle segment (E55–F57) has 6 connected seats, while the right segment (G55–I56 and G57) has 7 connected seats.<br>Since Bowling (4) and Softball (3) together need 7 seats, they must occupy the right segment, and Tennis (5) must occupy the middle segment.<br>• For Tennis (5 students in 6 seats of the middle segment): every choice of 5 out of 6 seats leaves a connected block of 5 seats, so $^{6}\\mathrm{C}_{5} \\times 5! = 6! = 720$ ways.<br>• For Bowling (4) and Softball (3) in the 7 seats of the right segment: by counting connected partitions of the 7 seats into a connected block of 4 and a connected block of 3, there are exactly 5 valid shape configurations:<br>&nbsp;&nbsp;(1) B: G55, H55, G56, G57; S: I55, H56, I56<br>&nbsp;&nbsp;(2) B: G55, H55, I55, I56; S: G56, H56, G57<br>&nbsp;&nbsp;(3) B: H55, I55, H56, I56; S: G55, G56, G57<br>&nbsp;&nbsp;(4) B: G56, H56, I56, G57; S: G55, H55, I55<br>&nbsp;&nbsp;(5) B: G55, G56, H56, G57; S: H55, I55, I56<br>Number of ways for Bowling and Softball $= 5 \\times 4! \\times 3! = 720$.<br>$$\\text{Total number of ways} = 720 \\times 720 = 518\\,400$$"
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q8",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability", "Discrete Random Variables", "Binomial Distribution"],
    stem: "A bag contains 6 red discs, 6 green discs, 6 yellow discs and 6 blue discs. The discs are indistinguishable aside from their colour. 4 discs are taken one after another from the bag without replacement. The random variable $X$ is the number of different colours obtained among the 4 discs.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $\\mathrm{P}(X = 2) = \\frac{465}{1771}$.",
        type: "self",
        solution: "To get exactly 2 different colours among 4 discs, there are two mutually exclusive cases:<br>Case 1: 2 discs of one colour and 2 discs of another colour:<br>$$\\frac{^{4}\\mathrm{C}_{2} \\times {^{6}\\mathrm{C}_{2}} \\times {^{6}\\mathrm{C}_{2}}}{^{24}\\mathrm{C}_{4}} = \\frac{6 \\times 15 \\times 15}{10626} = \\frac{1350}{10626}$$<br>Case 2: 3 discs of one colour and 1 disc of another colour:<br>$$\\frac{^{4}\\mathrm{C}_{2} \\times 2 \\times {^{6}\\mathrm{C}_{3}} \\times {^{6}\\mathrm{C}_{1}}}{^{24}\\mathrm{C}_{4}} = \\frac{12 \\times 20 \\times 6}{10626} = \\frac{1440}{10626}$$<br>Adding both cases:<br>$$\\mathrm{P}(X = 2) = \\frac{1350 + 1440}{10626} = \\frac{2790}{10626} = \\frac{465}{1771} \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Hence determine the probability distribution of $X$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "P(X = 1) =", answer: "10/1771", exactRequired: true, placeholder: "Exact fraction" },
          { label: "P(X = 2) =", answer: "465/1771", exactRequired: true, placeholder: "Exact fraction" },
          { label: "P(X = 3) =", answer: "1080/1771", exactRequired: true, placeholder: "Exact fraction" },
          { label: "P(X = 4) =", answer: "216/1771", exactRequired: true, placeholder: "Exact fraction" }
        ],
        solution: "$\\mathrm{P}(X = 1) = \\frac{^{4}\\mathrm{C}_{1} \\times {^{6}\\mathrm{C}_{4}}}{^{24}\\mathrm{C}_{4}} = \\frac{60}{10626} = \\frac{10}{1771}$<br>$\\mathrm{P}(X = 4) = \\frac{(^{6}\\mathrm{C}_{1})^4}{^{24}\\mathrm{C}_{4}} = \\frac{1296}{10626} = \\frac{216}{1771}$<br>$\\mathrm{P}(X = 3) = 1 - \\frac{10}{1771} - \\frac{465}{1771} - \\frac{216}{1771} = \\frac{1080}{1771}$<br><div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$1$</td><td>$2$</td><td>$3$</td><td>$4$</td></tr><tr><th>$\\mathrm{P}(X=x)$</th><td>$\\frac{10}{1771}$</td><td>$\\frac{465}{1771}$</td><td>$\\frac{1080}{1771}$</td><td>$\\frac{216}{1771}$</td></tr></table></div>"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Joe plays a game that comprises 8 rounds of drawing 4 discs from the bag. For each round, he wins SGD 10 if he obtains at most 2 discs of different colours, otherwise he loses SGD 5. After each round, all the discs are returned to the bag before the next round.<br><br>Find the probability that Joe wins some money at the end of the game.",
        type: "auto",
        mode: "number",
        answer: "0.3672845593",
        placeholder: "3 s.f.",
        solution: "Let $Y$ be the number of rounds (out of 8) in which Joe obtains at most 2 different colours (i.e. wins SGD 10).<br>$\\mathrm{P}(X \\le 2) = \\frac{10 + 465}{1771} = \\frac{475}{1771}$, so $Y \\sim \\mathrm{B}\\left(8, \\frac{475}{1771}\\right)$.<br>Net winnings $= 10Y - 5(8 - Y) = 15Y - 40 > 0 \\implies Y > \\frac{8}{3}$, so $Y \\ge 3$.<br>$$\\mathrm{P}(Y \\ge 3) = 1 - \\mathrm{P}(Y \\le 2) = 0.36728 \\approx 0.367 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Explain, with working, whether it is worthwhile for Joe to play this game to win money.",
        type: "self",
        solution: "Expected net profit from 1 round:<br>$$10\\left(\\frac{475}{1771}\\right) + (-5)\\left(\\frac{1296}{1771}\\right) = -\\frac{1730}{1771} \\approx -\\text{SGD } 0.98$$<br>(Equivalently, expected net profit per 8-round game $= 8 \\times \\left(-\\frac{1730}{1771}\\right) \\approx -\\text{SGD } 7.81$, or $\\mathrm{E}(Y) = 8 \\times \\frac{475}{1771} \\approx 2.15 < 3$.)<br>Since Joe is expected to lose SGD 7.81 per game (or SGD 0.98 per round), it is <strong>not worthwhile</strong> for him to play the game to win money."
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q9",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Correlation & Regression"],
    diagramSvg: `<svg viewBox="0 0 480 125" width="480" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
      <!-- Scatter Diagram I (r = 0) -->
      <text x="75" y="14" stroke="none" text-anchor="middle" font-weight="bold">Scatter Diagram I</text>
      <rect x="10" y="20" width="130" height="95" fill="none" stroke-width="1.2"/>
      <circle cx="24" cy="34" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="126" cy="34" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="75" cy="67" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="24" cy="100" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="126" cy="100" r="2.2" fill="#4ca885" stroke="none"/>
      <!-- Scatter Diagram II (r = 1) -->
      <text x="240" y="14" stroke="none" text-anchor="middle" font-weight="bold">Scatter Diagram II</text>
      <rect x="175" y="20" width="130" height="95" fill="none" stroke-width="1.2"/>
      <circle cx="186" cy="96" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="198" cy="92" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="216" cy="86" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="252" cy="74" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="294" cy="60" r="2.2" fill="#4ca885" stroke="none"/>
      <!-- Scatter Diagram III (r = -0.7) -->
      <text x="405" y="14" stroke="none" text-anchor="middle" font-weight="bold">Scatter Diagram III</text>
      <rect x="340" y="20" width="130" height="95" fill="none" stroke-width="1.2"/>
      <circle cx="352" cy="28" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="368" cy="52" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="388" cy="78" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="416" cy="73" r="2.2" fill="#4ca885" stroke="none"/>
      <circle cx="442" cy="104" r="2.2" fill="#4ca885" stroke="none"/>
    </svg>`,
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "The scatter diagrams above with 5 data points each have product moment correlation coefficients $-0.7$, $0$, $1$, not necessarily in the given order. State the product moment correlation coefficients for the scatter diagrams I, II and III.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Diagram I: r =", answer: "0", exactRequired: true, placeholder: "Value" },
          { label: "Diagram II: r =", answer: "1", exactRequired: true, placeholder: "Value" },
          { label: "Diagram III: r =", answer: "-0.7", exactRequired: true, placeholder: "Value" }
        ],
        solution: "• Scatter Diagram I: $r = 0$ (symmetric pattern with no linear correlation).<br>• Scatter Diagram II: $r = 1$ (points lie exactly on a straight line with positive gradient).<br>• Scatter Diagram III: $r = -0.7$ (moderate negative linear trend)."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "A private developer hires workers for renovation works for its townhouse projects. The renovation works required for each townhouse in a certain project are identical. The private developer wishes to investigate how the number of working days taken to complete the renovation works for a townhouse for a certain project, $y$, varies with the number of workers hired to renovate a townhouse, $x$. The relevant data collected by the private developer is given in the following table:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>3</td><td>5</td><td>8</td><td>10</td><td>13</td><td>15</td><td>18</td><td>20</td></tr><tr><th>$y$</th><td>92</td><td>50</td><td>33</td><td>25</td><td>21</td><td>19</td><td>17</td><td>16</td></tr></table></div>Draw a scatter diagram for these values. Use your diagram to comment on whether a linear model would be appropriate to model the relationship between $x$ and $y$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 185" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: origin (45, 155), x: 0..22 -> 10px/unit, y: 0..100 -> 1.3px/unit -->
          <line x1="45" y1="155" x2="275" y2="155" stroke-width="1.2"/>
          <polyline points="270,152 275,155 270,158" fill="none" stroke-width="1.2"/>
          <text x="279" y="158" stroke="none" font-style="italic">x</text>
          <line x1="45" y1="155" x2="45" y2="18" stroke-width="1.2"/>
          <polyline points="42,23 45,18 48,23" fill="none" stroke-width="1.2"/>
          <text x="42" y="13" stroke="none" font-style="italic">y</text>
          <!-- Ticks: x=3 (75), x=20 (245), y=16 (134.2), y=92 (35.4) -->
          <line x1="75" y1="152" x2="75" y2="158"/><text x="72" y="170" stroke="none">3</text>
          <line x1="245" y1="152" x2="245" y2="158"/><text x="238" y="170" stroke="none">20</text>
          <line x1="42" y1="134" x2="48" y2="134"/><text x="24" y="138" stroke="none">16</text>
          <line x1="42" y1="35" x2="48" y2="35"/><text x="24" y="39" stroke="none">92</text>
          <!-- 8 Data points: (3,92)->(75,35), (5,50)->(95,90), (8,33)->(125,112), (10,25)->(145,123), (13,21)->(175,128), (15,19)->(195,130), (18,17)->(225,133), (20,16)->(245,134) -->
          <circle cx="75" cy="35" r="2.8" fill="#4ca885" stroke="none"/>
          <circle cx="95" cy="90" r="2.8" fill="#4ca885" stroke="none"/>
          <circle cx="125" cy="112" r="2.8" fill="#4ca885" stroke="none"/>
          <circle cx="145" cy="123" r="2.8" fill="#4ca885" stroke="none"/>
          <circle cx="175" cy="128" r="2.8" fill="#4ca885" stroke="none"/>
          <circle cx="195" cy="130" r="2.8" fill="#4ca885" stroke="none"/>
          <circle cx="225" cy="133" r="2.8" fill="#4ca885" stroke="none"/>
          <circle cx="245" cy="134" r="2.8" fill="#4ca885" stroke="none"/>
        </svg>`,
        solution: "From the scatter diagram, as $x$ increases, $y$ decreases at a decreasing rate (the points follow a curve that is concave upwards rather than a straight line).<br>Hence, a <strong>linear model would not be appropriate</strong>."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "By referring to the scatter diagram in part (b)(i) and the context of the question, choose and explain which one of the following models (A), (B) and (C) below, where $a$ and $b$ are positive constants, is the most appropriate for modelling the relationship between $x$ and $y$.<br><strong>(A)</strong> $y = a - b\\ln x$<br><strong>(B)</strong> $y = a - bx^2$<br><strong>(C)</strong> $y = a + \\frac{b}{x^2}$",
        type: "self",
        solution: "From the scatter diagram, as $x$ increases, $y$ decreases at a decreasing rate, which is consistent with Models (A) and (C) (whereas Model (B) decreases at an increasing rate).<br>In context, there must be a positive lower limit to the number of working days required to complete the renovation even if many workers are hired. Model (A) predicts that $y$ decreases indefinitely (even becoming negative), whereas Model (C) has a positive horizontal asymptote $y = a$.<br>Hence, <strong>Model (C)</strong> is the most appropriate."
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "Use the most appropriate model from part (b)(ii) for the rest of the question. Find the equation for the relationship between $x$ and $y$, giving the numerical values of the coefficients and the product moment correlation coefficient for this model.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "17.4880", placeholder: "3 s.f." },
          { label: "b =", answer: "690.745", placeholder: "3 s.f." },
          { label: "r =", answer: "0.9921", placeholder: "3 s.f." }
        ],
        solution: "Performing linear regression of $y$ on $\\frac{1}{x^2}$ using a graphing calculator:<br>$$y = 17.4880 + \\frac{690.745}{x^2} \\implies y = 17.5 + \\frac{691}{x^2} \\text{ (to 3 s.f.)}$$<br>Product moment correlation coefficient: $r = 0.992$ (to 3 s.f.)."
      },
      {
        label: "(b)(iv)",
        marks: 2,
        prompt: "Estimate the number of working days required to complete the renovation works for a townhouse when 9 workers are hired and comment on the reliability of your estimate.",
        type: "self",
        solution: "When $x = 9$:<br>$$y = 17.4880 + \\frac{690.745}{9^2} = 26.016 \\approx 26 \\text{ working days (to nearest whole number)}$$<br>Since $x = 9$ lies within the given data range ($3 \\le x \\le 20$, i.e. interpolation) and $r = 0.992$ is very close to $1$, the estimate is <strong>reliable</strong>."
      },
      {
        label: "(b)(v)",
        marks: 2,
        prompt: "The private developer pays each worker a fixed amount of SGD 120 for a day's work. Estimate the number of workers the developer should hire to minimise the total amount of workers' wages the developer will have to pay if he can only hire a maximum of 20 workers.",
        type: "auto",
        mode: "number",
        answer: "6",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Total wages $T = 120xy = 120x\\left(17.4880 + \\frac{690.745}{x^2}\\right) = 120\\left(17.4880x + \\frac{690.745}{x}\\right)$.<br>Using a graphing calculator, the continuous minimum occurs at $x \\approx 6.28$.<br>Checking adjacent integers:<br>• $x = 6$: $T = \\text{SGD } 26\\,406.26$<br>• $x = 7$: $T = \\text{SGD } 26\\,531.26$<br>Therefore, the developer should hire <strong>6 workers</strong>."
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q10",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Binomial Distribution", "Normal Distribution"],
    stem: "<strong>In this question you should state the parameters of any distributions that you use.</strong><br><br>To regulate the use of its facilities by its paying members, a gym provides a guideline of a maximum usage time of 90 minutes per visit per paying member. However, the gym's records show that the usage time, $X$ minutes, of its paying members follows the distribution $\\mathrm{N}(95, \\sigma^2)$, where $\\sigma$ is the standard deviation. Only $30\\%$ of its paying members adhere to the guideline.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\sigma = 9.53$, correct to 3 significant figures.",
        type: "self",
        solution: "$X \\sim \\mathrm{N}(95, \\sigma^2)$ and $\\mathrm{P}(X \\le 90) = 0.3$.<br>Standardising:<br>$$\\mathrm{P}\\left(Z \\le \\frac{90 - 95}{\\sigma}\\right) = 0.3$$<br>$$\\frac{-5}{\\sigma} = -0.52440$$<br>$$\\sigma = \\frac{5}{0.52440} = 9.5347 \\approx 9.53 \\text{ (to 3 s.f.)} \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "The gym closes at 11 pm. John, a paying member, arrives at 9.15 pm. Find the probability that he cannot finish his workout.",
        type: "auto",
        mode: "number",
        answer: "0.14714",
        answers: ["0.14714", "0.14702"],
        placeholder: "3 s.f.",
        solution: "Time available from 9:15 pm to 11:00 pm is $105$ minutes.<br>$$\\mathrm{P}(X > 105) = 0.147 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Ten paying members are randomly chosen. Find the probability that the usage time of the ninth paying member is the third and last one that adhere to the guideline.",
        type: "auto",
        mode: "number",
        answer: "28 * 0.3^3 * 0.7^7",
        placeholder: "3 s.f.",
        solution: "Probability a paying member adheres to the guideline is $0.3$.<br>Among the first 8 members, exactly 2 adhere; the 9th adheres; and the 10th does not adhere:<br>$$\\text{Required probability} = {^{8}\\mathrm{C}_{2}}(0.3)^2(0.7)^6 \\times 0.3 \\times 0.7 = 0.0623 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "To grow its membership, the gym allows each paying member to sign up a friend as a trial member. For a limited period, the trial member can use the gym for free. Over time, it is found that the usage time, $W$ minutes, of its trial members follows the distribution $\\mathrm{N}(85, 80)$.<br><br>Sketch the distribution of $X$ and $W$ on the same diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 310 165" width="310" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Axis -->
          <line x1="20" y1="135" x2="290" y2="135" stroke-width="1.2"/>
          <polyline points="285,132 290,135 285,138" fill="none" stroke-width="1.2"/>
          <!-- W ~ N(85, 80): mean at x=125, sd=8.94 -> taller peak at y=28 -->
          <path d="M 35,134 C 70,132 95,95 108,58 C 115,38 120,28 125,28 C 130,28 135,38 142,58 C 155,95 180,132 215,134" fill="none" stroke="#cf5652" stroke-width="1.9"/>
          <line x1="125" y1="28" x2="125" y2="135" stroke="#cf5652" stroke-dasharray="3,3" opacity="0.65"/>
          <text x="118" y="150" stroke="none">85</text>
          <text x="64" y="42" stroke="none" fill="#cf5652" font-style="italic">W ~ N(85, 80)</text>
          <!-- X ~ N(95, 9.53^2): mean at x=175, sd=9.53 -> slightly shorter/wider peak at y=40 -->
          <path d="M 75,134 C 112,132 140,100 155,66 C 163,48 169,40 175,40 C 181,40 187,48 195,66 C 210,100 238,132 275,134" fill="none" stroke="#4ca885" stroke-width="1.9"/>
          <line x1="175" y1="40" x2="175" y2="135" stroke="#4ca885" stroke-dasharray="3,3" opacity="0.65"/>
          <text x="168" y="150" stroke="none">95</text>
          <text x="208" y="65" stroke="none" fill="#4ca885" font-style="italic">X ~ N(95, 9.53²)</text>
        </svg>`,
        solution: "• $W \\sim \\mathrm{N}(85, 80)$ has mean $85$ and standard deviation $\\sqrt{80} \\approx 8.94$.<br>• $X \\sim \\mathrm{N}(95, 9.53^2)$ has mean $95$ and standard deviation $9.53$.<br>• Since $\\sigma_W < \\sigma_X$, the curve for $W$ has a higher peak and smaller spread than $X$. Both are bell-shaped and asymptotic to the horizontal axis."
      },
      {
        label: "(e)",
        marks: 4,
        prompt: "Find the probability that the total usage time spent by two randomly chosen paying members differs from twice the time spent by a randomly chosen trial member by at least 15 minutes.",
        type: "auto",
        mode: "number",
        answer: "0.64729",
        answers: ["0.64729", "0.64734"],
        placeholder: "3 s.f.",
        solution: "Let $D = X_1 + X_2 - 2W$.<br>$$\\mathrm{E}(D) = 2\\mathrm{E}(X) - 2\\mathrm{E}(W) = 2(95) - 2(85) = 20$$<br>$$\\mathrm{Var}(D) = 2\\mathrm{Var}(X) + 4\\mathrm{Var}(W) = 2(9.5347^2) + 4(80) = 501.82 \\quad (\\text{or } 501.64 \\text{ using } 9.53)$$<br>So $D \\sim \\mathrm{N}(20, 501.82)$.<br>$$\\mathrm{P}(|D| \\ge 15) = 1 - \\mathrm{P}(-15 < D < 15) = 0.647 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(f)",
        marks: 1,
        prompt: "State an assumption needed for your calculation in part (e) to be valid.",
        type: "self",
        solution: "The usage times of <strong>all paying members and trial members are independent of each other</strong>."
      }
    ]
  },

  {
    id: "DHS-2025-P2-Q11",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "Mr Dough's factory produces packets of flour for sale in local supermarkets packed in 2 sizes – Regular-sized packets and Large-sized packets. Automated machines weigh and pack the flour. A recent major power outage resulted in all his machines being needed to be recalibrated upon restarting.<br><br>Regular-sized packets are supposed to have a mean mass of 1 kg. Mr Dough suspects that his machines now pack Regular-sized packets that are underweight. He took a sample of his Regular-sized packets and measured their masses, $x\\text{ g}$ (correct to nearest $5\\text{ g}$). The results are recorded as follows:<div class='q-table-wrap'><table class='q-table'><tr><th>Mass, $x$ (g)</th><td>980</td><td>985</td><td>990</td><td>995</td><td>1000</td><td>1005</td><td>1010</td><td>1015</td><td>1020</td></tr><tr><th>No. of Regular-sized packets</th><td>5</td><td>6</td><td>7</td><td>7</td><td>9</td><td>6</td><td>5</td><td>3</td><td>2</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Determine the unbiased estimate of the population variance of the mass of Regular-sized packets.",
        type: "auto",
        mode: "number",
        answer: "122.6938776",
        placeholder: "3 s.f.",
        solution: "Using a graphing calculator with $n = 50$:<br>$$\\bar{x} = 997.4, \\quad s = 11.076727$$<br>Unbiased estimate of the population variance:<br>$$s^2 = 122.6939 \\approx 123\\text{ g}^2 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Explain whether Mr Dough should conduct a one-tail or a two-tail test.",
        type: "self",
        solution: "Mr Dough should conduct a <strong>one-tail (lower-tail) test</strong> because he specifically suspects that his machines now pack Regular-sized packets with a mean mass <strong>less than</strong> the intended $1\\text{ kg}$ ($1000\\text{ g}$), i.e. underweight."
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "Carry out the test at $5\\%$ level of significance and give your conclusion in context. Explain whether it is necessary to assume that the mass of Regular-sized packets of flour follow a normal distribution.",
        type: "self",
        solution: "Let $\\mu$ be the population mean mass (in g) of a Regular-sized packet of flour.<br>$\\mathrm{H}_0: \\mu = 1000$<br>$\\mathrm{H}_1: \\mu < 1000$ (one-tail test at $5\\%$ level of significance).<br><br>Under $\\mathrm{H}_0$, since $n = 50$ is large, by the Central Limit Theorem:<br>$$\\bar{X} \\sim \\mathrm{N}\\left(1000, \\frac{122.6939}{50}\\right) \\text{ approximately}$$<br>With $\\bar{x} = 997.4$, using a graphing calculator:<br>$$p\\text{-value} = \\mathrm{P}(\\bar{X} \\le 997.4) = 0.04848 \\approx 0.0485 \\text{ (to 3 s.f.)}$$<br>Since $p\\text{-value} = 0.0485 < 0.05$, we reject $\\mathrm{H}_0$.<br>There is sufficient evidence at the $5\\%$ level of significance to conclude that the mean mass of a Regular-sized packet of flour is less than $1000\\text{ g}$ (i.e. underweight).<br><br>It is <strong>not necessary</strong> to assume that the mass of Regular-sized packets follows a normal distribution because the sample size $n = 50$ is large enough for the Central Limit Theorem to apply, so the sample mean mass $\\bar{X}$ is approximately normally distributed."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Large-sized packets of flour are known to have a normal distribution with a mean mass of 2 kg. Mr Dough also suspects that his machines are now not packing the Large-sized packets according to the required mass correctly. A sample of 15 Large-sized packets of flour gave a total mass of $30075\\text{ g}$.<br><br>Assuming Large-sized packets of flour have a population variance of $\\sigma^2\\text{ g}^2$, an appropriate test was carried out which gave a $p$-value of $0.0529$. Showing all necessary workings, prove that $\\sigma = 10.0$ correct to 3 significant figures.",
        type: "self",
        solution: "Let $\\mu_Y$ be the population mean mass (in g) of a Large-sized packet of flour.<br>$\\mathrm{H}_0: \\mu_Y = 2000$ vs $\\mathrm{H}_1: \\mu_Y \\ne 2000$ (two-tail test).<br>Under $\\mathrm{H}_0$, $\\bar{Y} \\sim \\mathrm{N}\\left(2000, \\frac{\\sigma^2}{15}\\right)$, and $\\bar{y} = \\frac{30075}{15} = 2005$.<br>Since $2005 > 2000$:<br>$$p\\text{-value} = 2\\mathrm{P}(\\bar{Y} \\ge 2005) = 0.0529$$<br>$$\\mathrm{P}\\left(Z \\ge \\frac{2005 - 2000}{\\sigma/\\sqrt{15}}\\right) = \\frac{0.0529}{2} = 0.02645$$<br>$$\\frac{5\\sqrt{15}}{\\sigma} = 1.93574 \\implies \\sigma = \\frac{5\\sqrt{15}}{1.93574} = 10.004 \\approx 10.0 \\text{ (to 3 s.f.)} \\quad (\\text{shown})$$"
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Another packet of Large-sized packet of flour with mass $h\\text{ g}$ is then added to the sample of 15. The combined sample of Large-sized packets resulted in a rejection of the claim that the mean mass of a Large-sized packet of flour is 2 kg at $4\\%$ level of significance.<br><br>Using $\\sigma = 10.0$, find the possible range of values of $h$, giving your answer to the nearest gram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 290 135" width="290" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="105" x2="270" y2="105" stroke-width="1.2"/>
          <!-- Shaded left and right 0.02 tails -->
          <path d="M 35,105 C 55,103 70,96 80,82 L 80,105 Z" fill="rgba(207,86,82,0.32)" stroke="none"/>
          <path d="M 210,82 C 220,96 235,103 255,105 L 210,105 Z" fill="rgba(207,86,82,0.32)" stroke="none"/>
          <!-- Normal curve centered at x=145 -->
          <path d="M 35,104 C 65,102 88,82 108,52 C 122,30 134,20 145,20 C 156,20 168,30 182,52 C 202,82 225,102 255,104" fill="none" stroke="#4ca885" stroke-width="1.8"/>
          <line x1="145" y1="20" x2="145" y2="105" stroke-dasharray="3,3" opacity="0.6"/>
          <line x1="80" y1="82" x2="80" y2="105" stroke="#cf5652" stroke-width="1.2"/>
          <line x1="210" y1="82" x2="210" y2="105" stroke="#cf5652" stroke-width="1.2"/>
          <text x="134" y="120" stroke="none">2000</text>
          <text x="53" y="120" stroke="none">1994.87</text>
          <text x="193" y="120" stroke="none">2005.13</text>
          <text x="42" y="84" stroke="none" fill="#cf5652">0.02</text>
          <text x="225" y="84" stroke="none" fill="#cf5652">0.02</text>
        </svg>`,
        solution: "With $n = 16$, under $\\mathrm{H}_0$: $\\bar{Y}_{\\text{new}} \\sim \\mathrm{N}\\left(2000, \\frac{10.0^2}{16}\\right)$, i.e. $\\mathrm{N}(2000, 6.25)$.<br>The new sample mean is $\\bar{y}_{\\text{new}} = \\frac{30075 + h}{16}$.<br>For a two-tail test at $4\\%$ level of significance ($2\\%$ in each tail), the critical values are $1994.8656$ and $2005.1344$ (or $z = \\pm 2.05375$).<br>Since $\\mathrm{H}_0$ is rejected:<br>$$\\frac{30075 + h}{16} \\le 1994.8656 \\quad \\text{or} \\quad \\frac{30075 + h}{16} \\ge 2005.1344$$<br>$$h \\le 1842.85 \\quad \\text{or} \\quad h \\ge 2007.15$$<br>To the nearest gram:<br>$$h \\le 1842 \\quad \\text{or} \\quad h \\ge 2008$$"
      }
    ]
  }
]);
