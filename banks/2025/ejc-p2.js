window.registerQuestions([
  {
    id: "EJC-2025-P2-Q1",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Differentiation"],
    stem: "The curve $C$ has equation $x^3 + y^3 - 3xy = k$, where $k$ is a positive constant.<br>$C$ intersects the $x$-axis at the point $A$.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Find the equation of the tangent to $C$ at $A$. Give your answer in the form $y = px + q$, where $p$ and $q$ are constants to be found in terms of $k$.",
        type: "self",
        solution: "Differentiating $x^3 + y^3 - 3xy = k$ implicitly with respect to $x$:<br>$$3x^2 + 3y^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 3x\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 3y = 0$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3y - 3x^2}{3y^2 - 3x} = \\frac{y - x^2}{y^2 - x}$$<br>At $A$, $y = 0$, so $x^3 = k \\implies x = k^{1/3}$. Thus $A = \\left(k^{1/3}, 0\\right)$.<br>Gradient of tangent at $A$:<br>$$\\left.\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_A = \\frac{0 - x^2}{0 - x} = x = k^{1/3}$$<br>Equation of tangent at $A$:<br>$$y - 0 = k^{1/3}\\left(x - k^{1/3}\\right) \\implies y = k^{1/3}x - k^{2/3}$$<br>where $p = k^{1/3}$ and $q = -k^{2/3}$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "There are two points on $C$ where the tangents are parallel to the $y$-axis. Given that $k = 3$, find the exact $y$-coordinates of these two points.",
        type: "auto",
        mode: "number-list",
        answer: [1.4422495703074083, -1],
        exactRequired: true,
        placeholder: "Separate two exact values with a comma",
        solution: "For a tangent parallel to the $y$-axis, $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ is undefined, so the denominator is zero:<br>$$y^2 - x = 0 \\implies x = y^2$$<br>Substituting $x = y^2$ and $k = 3$ into $x^3 + y^3 - 3xy = k$:<br>$$(y^2)^3 + y^3 - 3(y^2)y = 3$$<br>$$y^6 - 2y^3 - 3 = 0$$<br>$$(y^3 - 3)(y^3 + 1) = 0$$<br>$$y^3 = 3 \\quad \\text{or} \\quad y^3 = -1$$<br>$$\\therefore y = 3^{1/3} \\quad \\text{or} \\quad y = -1$$"
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q2",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "A sequence $u_1, u_2, u_3, \\ldots$ is defined by $$u_{n+1} = 2u_n(1 - u_n)$$ for all positive integers $n$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the possible limits of the sequence, if the sequence is convergent.",
        type: "auto",
        mode: "number-list",
        answer: [0, 0.5],
        exactRequired: true,
        placeholder: "Separate values with a comma",
        solution: "Let $L$ be the limit of the sequence as $n$ → $∞$. Then:<br>$$L = 2L(1 - L) \\implies 2L^2 - L = 0 \\implies L(2L - 1) = 0$$<br>$$\\therefore L = 0 \\quad \\text{or} \\quad L = \\frac{1}{2}$$"
      },
      {
        label: "(b)",
        marks: 6,
        prompt: "For each of the following, evaluate $u_2$ and $u_3$, and state whether the sequence is convergent:<br>• $u_1 = 0$,<br>• $u_1 = 0.01$,<br>• $u_1 = -0.01$.",
        type: "self",
        solution: "• When $u_1 = 0$: $u_2 = 2(0)(1 - 0) = 0$, $u_3 = 0$. The sequence is <strong>convergent</strong> (converges to $0$).<br>• When $u_1 = 0.01$: $u_2 = 2(0.01)(0.99) = 0.0198$ (exact), $u_3 = 2(0.0198)(0.9802) = 0.03881592 \\approx 0.0388$ (3 s.f.). From GC, terms increase towards $0.5$, so the sequence is <strong>convergent</strong>.<br>• When $u_1 = -0.01$: $u_2 = 2(-0.01)(1.01) = -0.0202$ (exact), $u_3 = 2(-0.0202)(1.0202) = -0.04121608 \\approx -0.0412$ (3 s.f.). From GC, terms diverge to $-∞$, so the sequence is <strong>not convergent</strong>."
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q3",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Graphs & Transformations", "Integration"],
    stem: "The curve $C_1$ has equation $y = \\frac{x^2 - 8x + 28}{2 - x}$.<br>The curve $C_2$ has equation $\\frac{(x - 6)^2}{16} + \\frac{y^2}{25} = 1$.",
    parts: [
      {
        label: "(a)",
        marks: 7,
        prompt: "Sketch $C_1$ and $C_2$ on the same diagram, stating the coordinates of any vertices, turning points, intersections with the $x$-axis and the equations of any asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 260" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Coordinate system: origin O=(105, 165), scale: 14px per unit x, 6.5px per unit y -->
  <!-- Axes -->
  <line x1="20" y1="165" x2="295" y2="165" stroke-width="1.3" />
  <polyline points="289,161 295,165 289,169" fill="none" stroke-width="1.3" />
  <line x1="105" y1="248" x2="105" y2="16" stroke-width="1.3" />
  <polyline points="101,22 105,16 109,22" fill="none" stroke-width="1.3" />
  <!-- Asymptote x = 2 -> px = 105 + 28 = 133 -->
  <line x1="133" y1="245" x2="133" y2="20" stroke="#4a8fe7" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.7" />
  <!-- Asymptote y = 6 - x: at x=-5 (px=35), y=11 (py=93.5); at x=12 (px=273), y=-6 (py=204) -->
  <line x1="35" y1="93.5" x2="273" y2="204" stroke="#4a8fe7" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.7" />
  <!-- C1 upper branch: y = 6 - x + 16/(2-x) for x < 2. Min at (-2, 12) -> (77, 87). At x=0, y=14 -> (105, 74). At x=1.2, y=24.8 -> (121.8, 3.8). At x=-5, y=13.29 -> (35, 78.6) -->
  <path d="M 35,78.6 Q 58,89 77,87 Q 95,85 105,74 Q 116,58 124,22" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- C1 lower branch: for x > 2. Max at (6, -4) -> (189, 191). At x=3, y=-13 -> (147, 249.5). At x=4, y=-6 -> (161, 204). At x=11, y=-6.78 -> (259, 209) -->
  <path d="M 149,245 Q 156,210 165,200 Q 178,191 189,191 Q 210,191 259,209" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- C2 ellipse: centre (6,0)->(189,165), rx=4*14=56, ry=5*6.5=32.5 -->
  <ellipse cx="189" cy="165" rx="56" ry="32.5" fill="none" stroke="#cf5652" stroke-width="2" />
  <!-- Key dots -->
  <circle cx="77" cy="87" r="2.6" fill="#4a8fe7" stroke="none" />
  <circle cx="189" cy="191" r="2.6" fill="#4a8fe7" stroke="none" />
  <circle cx="189" cy="165" r="2.3" fill="#cf5652" stroke="none" />
  <circle cx="133" cy="165" r="2.5" fill="#cf5652" stroke="none" />
  <circle cx="245" cy="165" r="2.5" fill="#cf5652" stroke="none" />
  <circle cx="189" cy="132.5" r="2.5" fill="#cf5652" stroke="none" />
  <circle cx="189" cy="197.5" r="2.5" fill="#cf5652" stroke="none" />
  <!-- Labels -->
  <text x="299" y="169" stroke="none" font-style="italic">x</text>
  <text x="97" y="16" stroke="none" font-style="italic">y</text>
  <text x="94" y="177" stroke="none" font-style="italic">O</text>
  <text x="137" y="30" stroke="none" fill="#4a8fe7" font-style="italic">x = 2</text>
  <text x="25" y="65" stroke="none" fill="#4a8fe7" font-style="italic">y = 6 − x</text>
  <text x="72" y="102" text-anchor="middle" stroke="none" fill="#4a8fe7">(−2, 12)</text>
  <text x="189" y="185" text-anchor="middle" stroke="none" fill="#4a8fe7">(6, −4)</text>
  <text x="189" y="125" text-anchor="middle" stroke="none" fill="#cf5652">(6, 5)</text>
  <text x="189" y="213" text-anchor="middle" stroke="none" fill="#cf5652">(6, −5)</text>
  <text x="148" y="177" stroke="none" fill="#cf5652">(2, 0)</text>
  <text x="248" y="177" stroke="none" fill="#cf5652">(10, 0)</text>
  <text x="193" y="159" stroke="none" fill="#cf5652">(6, 0)</text>
  <text x="58" y="75" stroke="none" fill="#4a8fe7" font-style="italic">C₁</text>
  <text x="242" y="142" stroke="none" fill="#cf5652" font-style="italic">C₂</text>
</svg>`,
        solution: "<strong>For $C_1$:</strong> Performing long division, $y = 6 - x + \\frac{16}{2 - x}$.<br>• Asymptotes: $x = 2$ and $y = 6 - x$.<br>• Turning points: minimum at $(-2, 12)$ and maximum at $(6, -4)$.<br>• $y$-intercept: $(0, 14)$; no $x$-intercepts.<br><strong>For $C_2$:</strong> Ellipse centred at $(6, 0)$ with semi-axes $4$ (horizontal) and $5$ (vertical).<br>• Vertices / $x$-intercepts: $(2, 0)$, $(10, 0)$, $(6, 5)$, $(6, -5)$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the volume of solid obtained when the smaller region bounded by $C_1$ and $C_2$ is rotated through $2\\pi$ radians about the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "58.744316",
        placeholder: "Volume (3 s.f.)",
        solution: "From GC, the $x$-coordinates of the points of intersection of $C_1$ and the lower half of $C_2$ are $x_1 \\approx 4.63913$ and $x_2 \\approx 7.71723$.<br>On the ellipse $C_2$, $y^2 = 25\\left(1 - \\frac{(x - 6)^2}{16}\\right)$, which is further from the $x$-axis than $C_1$ on $[x_1, x_2]$.<br>Required volume:<br>$$V = \\pi\\int_{4.63913}^{7.71723} \\left[25\\left(1 - \\frac{(x - 6)^2}{16}\\right) - \\left(\\frac{x^2 - 8x + 28}{2 - x}\\right)^2\\right]\\mathrm{d}x$$<br>$$= 58.744\\ldots = 58.7\\text{ units}^3 \\text{ (to 3 s.f.)}$$"
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q4",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Vectors"],
    stem: "Relative to the origin $O$, point $A$ has position vector given by $\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix}$. The line $l_1$ passes through the point $A$ and is parallel to $\\begin{pmatrix} t \\\\ 3 - t^2 \\\\ 1 \\end{pmatrix}$. The plane $p$ has equation $\\mathbf{r} = \\lambda\\begin{pmatrix} 0 \\\\ 5 \\\\ 2 \\end{pmatrix} + \\mu\\begin{pmatrix} 5 \\\\ 0 \\\\ t \\end{pmatrix}$, $\\lambda, \\mu \\in \\mathbb{R}$ where $t$ is a real constant. It is known that $l_1$ and $p$ are parallel and $l_1$ is not on $p$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that $t = -1$.",
        type: "self",
        solution: "A normal vector to plane $p$ is:<br>$$\\begin{pmatrix} 0 \\\\ 5 \\\\ 2 \\end{pmatrix} \\times \\begin{pmatrix} 5 \\\\ 0 \\\\ t \\end{pmatrix} = \\begin{pmatrix} 5t \\\\ 10 \\\\ -25 \\end{pmatrix} = 5\\begin{pmatrix} t \\\\ 2 \\\\ -5 \\end{pmatrix}$$<br>Since $p$ passes through the origin, its equation is $\\mathbf{r} \\cdot \\begin{pmatrix} t \\\\ 2 \\\\ -5 \\end{pmatrix} = 0$.<br>Since $l_1$ is parallel to $p$, its direction vector is perpendicular to the normal:<br>$$\\begin{pmatrix} t \\\\ 3 - t^2 \\\\ 1 \\end{pmatrix} \\cdot \\begin{pmatrix} t \\\\ 2 \\\\ -5 \\end{pmatrix} = 0 \\implies t^2 + 6 - 2t^2 - 5 = 0 \\implies t^2 = 1$$<br>So $t = 1$ or $t = -1$.<br>Since $l_1$ is not on $p$, point $A$ does not lie on $p$:<br>$$\\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} \\cdot \\begin{pmatrix} t \\\\ 2 \\\\ -5 \\end{pmatrix} \\ne 0 \\implies t + 4 - 5 \\ne 0 \\implies t \\ne 1$$<br>$$\\therefore t = -1 \\quad \\text{(shown)}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The line $l_2$ passes through the origin and point $A$. Find the acute angle between $l_1$ and $l_2$.",
        type: "auto",
        mode: "number",
        answers: ["0.841069", "48.189685"],
        placeholder: "Angle in radians (3 s.f.) or degrees (1 d.p.)",
        solution: "With $t = -1$, the direction vector of $l_1$ is $\\mathbf{d}_1 = \\begin{pmatrix} -1 \\\\ 2 \\\\ 1 \\end{pmatrix}$ and the direction vector of $l_2$ is $\\mathbf{d}_2 = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix}$.<br>Let $\\theta$ be the acute angle between $l_1$ and $l_2$:<br>$$\\cos\\theta = \\frac{\\left|\\begin{pmatrix} -1 \\\\ 2 \\\\ 1 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix}\\right|}{\\sqrt{6}\\sqrt{6}} = \\frac{|-1 + 4 + 1|}{6} = \\frac{4}{6} = \\frac{2}{3}$$<br>$$\\theta = 0.841\\text{ rad (3 s.f.)} \\quad \\text{or} \\quad 48.2^\\circ \\text{ (1 d.p.)}$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The vector $\\mathbf{n}$ is a unit vector normal to $p$. State the geometrical meaning of $|\\mathbf{a} \\cdot \\mathbf{n}|$ and find the exact value of $|\\mathbf{a} \\cdot \\mathbf{n}|$.",
        type: "self",
        solution: "Since $O$ lies on plane $p$, $|\\mathbf{a} \\cdot \\mathbf{n}|$ is the <strong>perpendicular distance from point $A$ to plane $p$</strong>.<br>With $t = -1$, $\\mathbf{n} = \\frac{1}{\\sqrt{30}}\\begin{pmatrix} -1 \\\\ 2 \\\\ -5 \\end{pmatrix}$.<br>$$|\\mathbf{a} \\cdot \\mathbf{n}| = \\left|\\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} \\cdot \\frac{1}{\\sqrt{30}}\\begin{pmatrix} -1 \\\\ 2 \\\\ -5 \\end{pmatrix}\\right| = \\left|\\frac{-1 + 4 - 5}{\\sqrt{30}}\\right| = \\frac{2}{\\sqrt{30}}$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "Find a vector equation of the line of reflection of $l_2$ in $p$.",
        type: "self",
        solution: "Let $N$ be the foot of the perpendicular from $A$ to $p$. Then:<br>$$\\mathbf{ON} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} + s\\begin{pmatrix} -1 \\\\ 2 \\\\ -5 \\end{pmatrix} = \\begin{pmatrix} 1 - s \\\\ 2 + 2s \\\\ 1 - 5s \\end{pmatrix}$$<br>Since $N$ lies on $p$:<br>$$\\begin{pmatrix} 1 - s \\\\ 2 + 2s \\\\ 1 - 5s \\end{pmatrix} \\cdot \\begin{pmatrix} -1 \\\\ 2 \\\\ -5 \\end{pmatrix} = 0 \\implies -1 + s + 4 + 4s - 5 + 25s = 0 \\implies 30s = 2 \\implies s = \\frac{1}{15}$$<br>$$\\mathbf{ON} = \\frac{1}{15}\\begin{pmatrix} 14 \\\\ 32 \\\\ 10 \\end{pmatrix}$$<br>Let $B$ be the reflection of $A$ in $p$. By the midpoint theorem:<br>$$\\mathbf{OB} = 2\\mathbf{ON} - \\mathbf{OA} = \\frac{2}{15}\\begin{pmatrix} 14 \\\\ 32 \\\\ 10 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} = \\frac{1}{15}\\begin{pmatrix} 13 \\\\ 34 \\\\ 5 \\end{pmatrix}$$<br>Since $O$ lies on both $l_2$ and $p$, the reflected line passes through $O$ and $B$.<br>A vector equation of the line of reflection of $l_2$ in $p$ is:<br>$$\\mathbf{r} = k\\begin{pmatrix} 13 \\\\ 34 \\\\ 5 \\end{pmatrix}, \\quad k \\in \\mathbb{R}$$"
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q5",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Permutations & Combinations"],
    diagramSvg: `<svg viewBox="0 0 180 180" width="160" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Outer circular tray -->
  <circle cx="90" cy="90" r="74" fill="none" stroke-width="1.6" />
  <!-- 6 glasses equally spaced at radius 52 -->
  <circle cx="90" cy="38" r="13" fill="#d4d8df" stroke-width="1.3" />
  <circle cx="135" cy="64" r="13" fill="#d4d8df" stroke-width="1.3" />
  <circle cx="135" cy="116" r="13" fill="#d4d8df" stroke-width="1.3" />
  <circle cx="90" cy="142" r="13" fill="#d4d8df" stroke-width="1.3" />
  <circle cx="45" cy="116" r="13" fill="#d4d8df" stroke-width="1.3" />
  <circle cx="45" cy="64" r="13" fill="#d4d8df" stroke-width="1.3" />
</svg>`,
    stem: "Mary is setting up a tabletop display using 6 glasses, arranged around a circular tray, as shown in the diagram below. There are 4 different colours of glasses — Red, Blue, Green and Yellow. For each colour, Mary owns one tall and one short glass, so she has 8 glasses in total.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "In how many ways can Mary arrange 6 of the 8 glasses around the circular tray, such that at least one glass of each colour is used?",
        type: "auto",
        mode: "number",
        answer: "2880",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Number of ways to choose 6 glasses with at least one of each colour:<br>$= (\\text{total ways to choose 6}) - (\\text{ways with 1 missing colour}) = {^8\\mathrm{C}_6} - {^4\\mathrm{C}_1} = 28 - 4 = 24$.<br>Arranging the 6 chosen distinct glasses around a circular tray:<br>$$24 \\times (6 - 1)! = 24 \\times 120 = 2880$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Mary decides to give away one tall glass and one short glass to support a charity drive. In how many ways can she choose the two glasses to give away?",
        type: "auto",
        mode: "number",
        answer: "16",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "There are 4 tall glasses and 4 short glasses, so the number of ways is $4 \\times 4 = 16$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Mary decides to give away the red tall glass and green short glass. She now wants to arrange the remaining 6 glasses in a straight row, such that no two adjacent glasses are of the same colour. Find the number of different arrangements.",
        type: "auto",
        mode: "number",
        answer: "336",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "The remaining 6 glasses are: 1 Red, 1 Green, 2 Blue (tall & short), and 2 Yellow (tall & short).<br>Let $A$ be the event that the two blue glasses are adjacent, and $B$ be the event that the two yellow glasses are adjacent.<br>• Number of arrangements with blue glasses separated, $\\mathrm{n}(A')$: arrange the 4 non-blue glasses ($4!$), then slot the 2 blue glasses into the 5 gaps (${^5\\mathrm{C}_2} \\times 2!$):<br>$$\\mathrm{n}(A') = 4! \\times {^5\\mathrm{C}_2} \\times 2! = 24 \\times 10 \\times 2 = 480$$<br>• Number of arrangements with blue separated AND yellow adjacent, $\\mathrm{n}(A' \\cap B)$: group the 2 yellow glasses ($2!$), arrange with Red and Green ($3!$), then slot the 2 blue glasses into the 4 gaps (${^4\\mathrm{C}_2} \\times 2!$):<br>$$\\mathrm{n}(A' \\cap B) = 3! \\times 2! \\times {^4\\mathrm{C}_2} \\times 2! = 6 \\times 2 \\times 6 \\times 2 = 144$$<br>Required number of arrangements $= \\mathrm{n}(A') - \\mathrm{n}(A' \\cap B) = 480 - 144 = 336$."
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q6",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability"],
    stem: "An online game consists of three stages. All players start with Stage 1, and no matter whether they win or lose, they proceed to Stage 2. Players are allowed to proceed to Stage 3 only if they have won at least one of the first two stages.<br>Ming's probability of winning Stage 1 is $p$.<br>If Ming wins a stage, his probability of winning the next stage is halved. If he loses a stage, his probability of winning remains unchanged in the next stage.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Draw a probability tree diagram to represent all possible outcomes for Ming over the three stages.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 380 230" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925">
  <!-- Column headers -->
  <text x="115" y="16" text-anchor="middle" stroke="none" font-weight="bold">Stage 1</text>
  <text x="215" y="16" text-anchor="middle" stroke="none" font-weight="bold">Stage 2</text>
  <text x="320" y="16" text-anchor="middle" stroke="none" font-weight="bold">Stage 3</text>
  <!-- Start node -->
  <rect x="8" y="106" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="27" y="119" text-anchor="middle" stroke="none">Start</text>
  <!-- Stage 1 branches -->
  <line x1="46" y1="116" x2="96" y2="66" stroke="#4ca885" stroke-width="1.4" />
  <line x1="46" y1="116" x2="96" y2="174" stroke="#cf5652" stroke-width="1.4" />
  <text x="64" y="84" stroke="none" font-style="italic">p</text>
  <text x="56" y="154" stroke="none" font-style="italic">1 − p</text>
  <!-- Stage 1 nodes -->
  <rect x="96" y="56" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="115" y="69" text-anchor="middle" stroke="none">Win</text>
  <rect x="96" y="164" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="115" y="177" text-anchor="middle" stroke="none">Lose</text>
  <!-- Stage 2 branches from Win -->
  <line x1="134" y1="66" x2="196" y2="42" stroke="#4ca885" stroke-width="1.4" />
  <line x1="134" y1="66" x2="196" y2="96" stroke="#cf5652" stroke-width="1.4" />
  <text x="160" y="48" stroke="none" font-style="italic">0.5p</text>
  <text x="148" y="92" stroke="none" font-style="italic">1 − 0.5p</text>
  <!-- Stage 2 branches from Lose -->
  <line x1="134" y1="174" x2="196" y2="152" stroke="#4ca885" stroke-width="1.4" />
  <line x1="134" y1="174" x2="196" y2="204" stroke="#cf5652" stroke-width="1.4" />
  <text x="164" y="157" stroke="none" font-style="italic">p</text>
  <text x="152" y="200" stroke="none" font-style="italic">1 − p</text>
  <!-- Stage 2 nodes -->
  <rect x="196" y="32" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="215" y="45" text-anchor="middle" stroke="none">Win</text>
  <rect x="196" y="86" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="215" y="99" text-anchor="middle" stroke="none">Lose</text>
  <rect x="196" y="142" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="215" y="155" text-anchor="middle" stroke="none">Win</text>
  <rect x="196" y="194" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="215" y="207" text-anchor="middle" stroke="none">Lose</text>
  <!-- Stage 3 branches from W-W -->
  <line x1="234" y1="42" x2="300" y2="30" stroke="#4ca885" stroke-width="1.4" />
  <line x1="234" y1="42" x2="300" y2="56" stroke="#cf5652" stroke-width="1.4" />
  <text x="266" y="31" text-anchor="middle" stroke="none" font-style="italic">0.25p</text>
  <text x="266" y="61" text-anchor="middle" stroke="none" font-style="italic">1 − 0.25p</text>
  <!-- Stage 3 branches from W-L -->
  <line x1="234" y1="96" x2="300" y2="84" stroke="#4ca885" stroke-width="1.4" />
  <line x1="234" y1="96" x2="300" y2="110" stroke="#cf5652" stroke-width="1.4" />
  <text x="266" y="85" text-anchor="middle" stroke="none" font-style="italic">0.5p</text>
  <text x="266" y="115" text-anchor="middle" stroke="none" font-style="italic">1 − 0.5p</text>
  <!-- Stage 3 branches from L-W -->
  <line x1="234" y1="152" x2="300" y2="140" stroke="#4ca885" stroke-width="1.4" />
  <line x1="234" y1="152" x2="300" y2="166" stroke="#cf5652" stroke-width="1.4" />
  <text x="266" y="141" text-anchor="middle" stroke="none" font-style="italic">0.5p</text>
  <text x="266" y="171" text-anchor="middle" stroke="none" font-style="italic">1 − 0.5p</text>
  <!-- Stage 3 nodes -->
  <rect x="300" y="20" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="319" y="33" text-anchor="middle" stroke="none">Win</text>
  <rect x="300" y="46" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="319" y="59" text-anchor="middle" stroke="none">Lose</text>
  <rect x="300" y="74" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="319" y="87" text-anchor="middle" stroke="none">Win</text>
  <rect x="300" y="100" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="319" y="113" text-anchor="middle" stroke="none">Lose</text>
  <rect x="300" y="130" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="319" y="143" text-anchor="middle" stroke="none">Win</text>
  <rect x="300" y="156" width="38" height="20" rx="3" fill="#fff" stroke-width="1.2" />
  <text x="319" y="169" text-anchor="middle" stroke="none">Lose</text>
</svg>`,
        solution: "See the probability tree diagram above. Note that after Lose in Stage 1 and Lose in Stage 2, the game ends and Ming does not proceed to Stage 3."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the range of possible values of $p$ if the probability that Ming wins all three stages is more than $0.1$.",
        type: "self",
        solution: "$$\\mathrm{P}(\\text{wins all 3 stages}) = p(0.5p)(0.25p) = 0.125p^3 > 0.1$$<br>$$p^3 > 0.8 \\implies p > 0.8^{1/3} \\approx 0.9283$$<br>Since $p$ is a probability ($p \\le 1$), the range of possible values is $0.928 < p \\le 1$ (or $p > 0.928$)."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "It is now known that $p = 0.9$. Given that Ming proceeds to Stage 3, find the probability that he wins exactly two stages out of the three.",
        type: "auto",
        mode: "number",
        answer: "0.577125/0.99",
        placeholder: "Exact fraction or 3 s.f.",
        solution: "With $p = 0.9$, $0.5p = 0.45$ and $0.25p = 0.225$.<br>The three outcomes with exactly 2 wins are WWL, WLW, and LWW (all of which proceed to Stage 3):<br>$$\\mathrm{P}(\\text{exactly 2 wins}) = (0.9)(0.45)(1 - 0.225) + (0.9)(0.55)(0.45) + (0.1)(0.9)(0.45)$$<br>$$= 0.313875 + 0.22275 + 0.0405 = 0.577125$$<br>$$\\mathrm{P}(\\text{proceeds to Stage 3}) = 1 - \\mathrm{P}(\\text{LL}) = 1 - (0.1)(0.1) = 0.99$$<br>$$\\mathrm{P}(\\text{exactly 2 wins} \\mid \\text{proceeds to Stage 3}) = \\frac{0.577125}{0.99} = 0.583 \\text{ (to 3 s.f.)}$$"
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q7",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "An investigation into the relationship between two variables $x$ and $y$ results in the following data.<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><th>$y$</th><td>1.1</td><td>5.7</td><td>9.3</td><td>9.8</td><td>8.6</td><td>6.4</td><td>0.9</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Calculate the product moment correlation coefficient between $x$ and $y$.",
        type: "auto",
        mode: "number",
        answer: "0.00208247",
        placeholder: "Correct to 3 s.f.",
        solution: "From GC, the product moment correlation coefficient between $x$ and $y$ is $r = 0.00208$ (to 3 s.f.)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Draw a scatter diagram of the data and comment on the relationship between $x$ and $y$ based on the scatter diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 205" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (40, 175); x from 6 to 14 -> px = 40 + (x-6)*27; y from 0 to 10.5 -> py = 175 - y*14.5 -->
  <line x1="40" y1="175" x2="262" y2="175" stroke-width="1.3" />
  <polyline points="256,171 262,175 256,179" fill="none" stroke-width="1.3" />
  <line x1="40" y1="175" x2="40" y2="16" stroke-width="1.3" />
  <polyline points="36,22 40,16 44,22" fill="none" stroke-width="1.3" />
  <!-- Dashed guides for min/max x (7, 13) and min/max y (0.9, 9.8) -->
  <line x1="67" y1="175" x2="67" y2="159.05" stroke-width="1" stroke-dasharray="3,3" opacity="0.55" />
  <line x1="229" y1="175" x2="229" y2="161.95" stroke-width="1" stroke-dasharray="3,3" opacity="0.55" />
  <line x1="40" y1="32.9" x2="148" y2="32.9" stroke-width="1" stroke-dasharray="3,3" opacity="0.55" />
  <line x1="40" y1="161.95" x2="229" y2="161.95" stroke-width="1" stroke-dasharray="3,3" opacity="0.55" />
  <!-- Data points -->
  <circle cx="67" cy="159.05" r="3" fill="#4ca885" stroke="none" />
  <circle cx="94" cy="92.35" r="3" fill="#4ca885" stroke="none" />
  <circle cx="121" cy="40.15" r="3" fill="#4ca885" stroke="none" />
  <circle cx="148" cy="32.9" r="3" fill="#4ca885" stroke="none" />
  <circle cx="175" cy="50.3" r="3" fill="#4ca885" stroke="none" />
  <circle cx="202" cy="82.2" r="3" fill="#4ca885" stroke="none" />
  <circle cx="229" cy="161.95" r="3" fill="#4ca885" stroke="none" />
  <!-- Labels -->
  <text x="266" y="179" stroke="none" font-style="italic">x</text>
  <text x="32" y="15" stroke="none" font-style="italic">y</text>
  <text x="67" y="190" text-anchor="middle" stroke="none">7</text>
  <text x="229" y="190" text-anchor="middle" stroke="none">13</text>
  <text x="35" y="36" text-anchor="end" stroke="none">9.8</text>
  <text x="35" y="165" text-anchor="end" stroke="none">0.9</text>
</svg>`,
        solution: "From the scatter diagram, there is a <strong>non-linear (curved / quadratic)</strong> relationship between $x$ and $y$ ($y$ increases to a peak around $x = 10$ and then decreases)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Several possible models for the relationship between $x$ and $y$ are proposed; one is chosen for further investigation.<br>Calculate the product moment correlation coefficient between $y$ and $(x - 10)^2$, and comment on its value.",
        type: "self",
        solution: "From GC, $r = -0.9967\\ldots \\approx -0.997$ (to 3 s.f.).<br>Since $r$ is very close to $-1$, there is a <strong>very strong negative linear correlation</strong> between $y$ and $(x - 10)^2$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Find the equation of the regression line of $y$ on $(x - 10)^2$. Use the equation of the regression line to estimate the value of $y$ when $x = 17$ and comment on the reliability of this estimate.",
        type: "self",
        solution: "From GC, the regression line of $y$ on $(x - 10)^2$ is:<br>$$y = -0.98690(x - 10)^2 + 9.91905 \\implies y = -0.987(x - 10)^2 + 9.92 \\text{ (to 3 s.f.)}$$<br>When $x = 17$, $(x - 10)^2 = 49$:<br>$$y = -0.9869048(49) + 9.9190476 = -38.439\\ldots \\approx -38.4 \\text{ (to 3 s.f.)}$$<br><strong>Reliability:</strong> This estimate is <strong>not reliable</strong> because $x = 17$ lies outside the data range $7 \\le x \\le 13$ (extrapolation), where the linear relationship between $y$ and $(x - 10)^2$ may no longer hold."
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q8",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Discrete Random Variables", "Binomial Distribution"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "$X$ is a random variable such that $\\mathrm{E}(X) = 4$ and $\\mathrm{E}\\left[(X - 3)^2\\right] = 40$. Find the value of $\\mathrm{Var}(X)$.",
        type: "auto",
        mode: "number",
        answer: "39",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "$\\mathrm{E}(X - 3) = \\mathrm{E}(X) - 3 = 4 - 3 = 1$.<br>$$\\mathrm{Var}(X) = \\mathrm{Var}(X - 3) = \\mathrm{E}\\left[(X - 3)^2\\right] - \\left[\\mathrm{E}(X - 3)\\right]^2 = 40 - 1^2 = 39$$<br>(Alternatively: $\\mathrm{E}(X^2 - 6X + 9) = 40 \\implies \\mathrm{E}(X^2) = 40 + 6(4) - 9 = 55$, so $\\mathrm{Var}(X) = 55 - 4^2 = 39$.)"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Let $Y$ be a discrete random variable. Let $\\mathrm{f}$ be a function which is defined for all values that $Y$ can take. Then $\\mathrm{f}(Y)$ is also a random variable, and its expectation is given by $$\\mathrm{E}[\\mathrm{f}(Y)] = \\sum_{y} \\left[\\mathrm{f}(y) \\times \\mathrm{P}(Y = y)\\right].$$ Suppose now that $Y \\sim \\mathrm{B}\\left(3, \\frac{1}{3}\\right)$ and $\\mathrm{f}(t) = \\frac{1}{t + 1}$. Find the value of $\\mathrm{E}[\\mathrm{f}(Y)]$.",
        type: "auto",
        mode: "number",
        answer: "65/108",
        placeholder: "Exact fraction or 3 s.f.",
        solution: "<div class='q-table-wrap'><table class='q-table'><tr><th>$y$</th><td>$0$</td><td>$1$</td><td>$2$</td><td>$3$</td></tr><tr><th>$\\mathrm{f}(y)$</th><td>$1$</td><td>$\\frac{1}{2}$</td><td>$\\frac{1}{3}$</td><td>$\\frac{1}{4}$</td></tr><tr><th>$\\mathrm{P}(Y = y)$</th><td>$\\frac{8}{27}$</td><td>$\\frac{12}{27}$</td><td>$\\frac{6}{27}$</td><td>$\\frac{1}{27}$</td></tr><tr><th>$\\mathrm{f}(y)\\mathrm{P}(Y = y)$</th><td>$\\frac{8}{27}$</td><td>$\\frac{2}{9}$</td><td>$\\frac{2}{27}$</td><td>$\\frac{1}{108}$</td></tr></table></div><br>$$\\mathrm{E}[\\mathrm{f}(Y)] = \\frac{8}{27} + \\frac{2}{9} + \\frac{2}{27} + \\frac{1}{108} = \\frac{32 + 24 + 8 + 1}{108} = \\frac{65}{108} \\approx 0.602 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "$W$ is a random variable with the following probability distribution:<div class='q-table-wrap'><table class='q-table'><tr><th>$w$</th><td>$-3$</td><td>$-1$</td><td>$1$</td><td>$2$</td></tr><tr><th>$\\mathrm{P}(W = w)$</th><td>$p$</td><td>$q$</td><td>$0.15$</td><td>$r$</td></tr></table></div>It is given that $\\mathrm{E}(W) = -0.2$ and $\\mathrm{E}(W^3) = -3.2$. Find the values of $p$, $q$ and $r$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "p =", answer: "0.2", exactRequired: true, placeholder: "Exact value" },
          { label: "q =", answer: "0.35", exactRequired: true, placeholder: "Exact value" },
          { label: "r =", answer: "0.3", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "1. Sum of probabilities is $1$:<br>$$p + q + 0.15 + r = 1 \\implies p + q + r = 0.85$$<br>2. From $\\mathrm{E}(W) = -0.2$:<br>$$-3p - q + 0.15 + 2r = -0.2 \\implies -3p - q + 2r = -0.35$$<br>3. From $\\mathrm{E}(W^3) = -3.2$:<br>$$-27p - q + 0.15 + 8r = -3.2 \\implies -27p - q + 8r = -3.35$$<br>Solving the system of linear equations (using GC):<br>$$p = 0.2, \\qquad q = 0.35, \\qquad r = 0.3$$"
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q9",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "The students in Eunoia Junior College (EJC) have been complaining of long queue times at the canteen during peak hours. It was claimed that the average queue time per student is $20$ minutes. It is known that the standard deviation of the queue times is $3.8$ minutes.<br>The admin manager of EJC wishes to test if the average queue time is in fact $20$ minutes. She examines a random sample of $15$ students to determine the average queue time.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State what it means for a sample to be random in this context.",
        type: "self",
        solution: "Every student in EJC has an equal probability of being selected, and the selection of any student is independent of the selection of other students."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Given that the admin manager concludes that there is no reason to reject the null hypothesis at the $5\\%$ level of significance, find the range of possible values of the sample mean, and state an assumption needed for your calculations.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 135" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Baseline -->
  <line x1="20" y1="100" x2="260" y2="100" stroke-width="1.3" />
  <!-- Left tail shaded (x < 75) -->
  <path d="M 30,99.5 C 48,98 62,93 75,83 L 75,100 L 30,100 Z" fill="rgba(207,86,82,0.3)" stroke="none" />
  <!-- Right tail shaded (x > 205) -->
  <path d="M 205,83 C 218,93 232,98 250,99.5 L 250,100 L 205,100 Z" fill="rgba(207,86,82,0.3)" stroke="none" />
  <!-- Bell curve centred at x = 140 -->
  <path d="M 30,99.5 C 55,98 70,88 90,65 C 110,40 125,22 140,22 C 155,22 170,40 190,65 C 210,88 225,98 250,99.5" fill="none" stroke="#4ca885" stroke-width="2" />
  <!-- Vertical lines at critical values and mean -->
  <line x1="75" y1="83" x2="75" y2="100" stroke="#cf5652" stroke-width="1.2" />
  <line x1="205" y1="83" x2="205" y2="100" stroke="#cf5652" stroke-width="1.2" />
  <line x1="140" y1="22" x2="140" y2="100" stroke-width="1" stroke-dasharray="3,3" opacity="0.55" />
  <!-- Labels -->
  <text x="140" y="116" text-anchor="middle" stroke="none">20</text>
  <text x="75" y="116" text-anchor="middle" stroke="none" fill="#cf5652">18.1</text>
  <text x="205" y="116" text-anchor="middle" stroke="none" fill="#cf5652">21.9</text>
  <text x="48" y="82" text-anchor="middle" stroke="none" fill="#cf5652" font-size="9.5">0.025</text>
  <text x="232" y="82" text-anchor="middle" stroke="none" fill="#cf5652" font-size="9.5">0.025</text>
</svg>`,
        solution: "Let $X$ be the queue time (in minutes) of a randomly chosen EJC student, and let $\\mu$ be the population mean.<br>$\\mathrm{H}_0: \\mu = 20$ vs $\\mathrm{H}_1: \\mu \\ne 20$ (two-tailed test at $5\\%$ level of significance).<br><strong>Assumption:</strong> Queue times at the canteen follow a normal distribution.<br>Under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(20, \\frac{3.8^2}{15}\\right)$.<br>At the $5\\%$ level of significance (two-tailed, $0.025$ in each tail), the critical values are:<br>$$20 \\pm 1.95996\\left(\\frac{3.8}{\\sqrt{15}}\\right) = 20 \\pm 1.9230 = 18.077 \\text{ and } 21.923$$<br>Since $\\mathrm{H}_0$ is not rejected, the range of possible values of the sample mean is $18.1 < \\bar{x} < 21.9$ (to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "To reduce the queue time, a lunch pre-order system, EuOrder, was introduced. The admin manager is tasked to find out if there is any improvement to the average queue time per student. She obtained a random sample of $50$ students and recorded their queue times, $t$ minutes, on a particular day. The results are summarised as follows: $$\\sum (t - 20) = -35, \\qquad \\sum (t - 20)^2 = 489.$$ Find unbiased estimates of the population mean and variance.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "19.3", placeholder: "Exact value" },
          { label: "Variance =", answer: "929/98", placeholder: "Exact fraction or 3 s.f." }
        ],
        solution: "Unbiased estimate of the population mean:<br>$$\\bar{t} = \\frac{\\sum (t - 20)}{50} + 20 = \\frac{-35}{50} + 20 = 19.3$$<br>Unbiased estimate of the population variance:<br>$$s^2 = \\frac{1}{49}\\left(489 - \\frac{(-35)^2}{50}\\right) = \\frac{1}{49}(489 - 24.5) = \\frac{464.5}{49} = \\frac{929}{98} \\approx 9.48 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "Test, at the $10\\%$ level of significance, the claim that EuOrder has reduced the average queue time at the canteen.",
        type: "self",
        solution: "Let $\\mu$ be the population mean queue time after introducing EuOrder.<br>$\\mathrm{H}_0: \\mu = 20$<br>$\\mathrm{H}_1: \\mu < 20$ (left-tailed test at $10\\%$ level of significance).<br>Under $\\mathrm{H}_0$, since $n = 50$ is large, by the Central Limit Theorem:<br>$$\\bar{T} \\sim \\mathrm{N}\\left(20, \\frac{929/98}{50}\\right) \\text{ approximately.}$$<br>Using GC, $p\\text{-value} = \\mathrm{P}(\\bar{T} \\le 19.3) = 0.0539 < 0.10$ (equivalently, critical region is $\\bar{t} < 19.442$, and observed $\\bar{t} = 19.3 < 19.442$).<br><strong>Conclusion:</strong> We reject $\\mathrm{H}_0$ and conclude at the $10\\%$ level of significance that there is sufficient evidence that EuOrder has reduced the average queue time at the canteen."
      }
    ]
  },
  {
    id: "EJC-2025-P2-Q10",
    year: 2025,
    school: "EJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Binomial Distribution", "Normal Distribution"],
    stem: "<strong>In this question you should state the parameters of any distributions you use.</strong><br>A drinks stall specialises in fruit smoothies, which contain apples. The apples used by the stall have masses, in grams, that follow the distribution $\\mathrm{N}(100, 6^2)$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the probability that the mass of a randomly chosen apple is no more than $105$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.797672",
        placeholder: "Probability (3 s.f.)",
        solution: "Let $X$ be the mass of a randomly chosen apple, in grams. Then $X \\sim \\mathrm{N}(100, 6^2)$.<br>$$\\mathrm{P}(X \\le 105) = 0.79767\\ldots = 0.798 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Before the apples can be blended, they need to be prepared by peeling them and removing their cores. This preparation process reduces the mass of each apple by $30\\%$.<br>Find the probability that the mass of a randomly chosen apple, after preparation, is more than $78$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.028405",
        placeholder: "Probability (3 s.f.)",
        solution: "Let $Y = 0.7X$ be the mass of a prepared apple, in grams.<br>$\\mathrm{E}(Y) = 0.7(100) = 70$, $\\mathrm{Var}(Y) = 0.7^2(6^2) = 17.64$.<br>Thus $Y \\sim \\mathrm{N}(70, 17.64)$.<br>$$\\mathrm{P}(Y > 78) = 0.028405\\ldots = 0.0284 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The stall sells its Signature smoothie, which uses $2$ prepared apples, $1$ peeled banana and $12$ blackcurrants; all of these are randomly chosen. The stall also adds a fixed $50$ grams of milk before blending everything together. You should ignore any changes in mass from the blending process.<br>• The masses of peeled bananas, in grams, follow the distribution $\\mathrm{N}(130, 8^2)$.<br>• The masses of blackcurrants, in grams, follow the distribution $\\mathrm{N}(2.5, 0.6^2)$.<br>$90\\%$ of the Signature smoothies have a mass of at least $m$ grams. Find the value of $m$.",
        type: "auto",
        mode: "number",
        answer: "336.955845",
        placeholder: "Value of m (3 s.f.)",
        solution: "Let $T = Y_1 + Y_2 + B + C_1 + \\cdots + C_{12} + 50$ be the mass of a Signature smoothie, in grams.<br>$\\mathrm{E}(T) = 2(70) + 130 + 12(2.5) + 50 = 350$.<br>$\\mathrm{Var}(T) = 2(17.64) + 8^2 + 12(0.6^2) = 35.28 + 64 + 4.32 = 103.6$.<br>Thus $T \\sim \\mathrm{N}(350, 103.6)$.<br>Given $\\mathrm{P}(T \\ge m) = 0.9$, using GC:<br>$$m = 336.9558\\ldots = 337 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "A teacher purchases $25$ Signature smoothies for her form class. Find the probability that at least $20$ of the Signature smoothies have masses between $330$ and $360$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.676533",
        placeholder: "Probability (3 s.f.)",
        solution: "For one Signature smoothie, $\\mathrm{P}(330 < T < 360) = 0.812356\\ldots$.<br>Let $R$ be the number of Signature smoothies, out of $25$, with masses between $330$ and $360$ grams.<br>Then $R \\sim \\mathrm{B}(25, 0.812356)$.<br>$$\\mathrm{P}(R \\ge 20) = 1 - \\mathrm{P}(R \\le 19) = 0.67653\\ldots = 0.677 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "The stall also makes blackcurrant smoothies using $n$ blackcurrants and a fixed $175$ grams of milk.<br>Find the smallest value of $n$ such that the probability of the mass of a blackcurrant smoothie exceeding $300$ grams is at least $0.95$.",
        type: "auto",
        mode: "number",
        answer: "53",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Let $W$ be the mass of a blackcurrant smoothie, in grams.<br>$\\mathrm{E}(W) = 2.5n + 175$ and $\\mathrm{Var}(W) = n(0.6^2) = 0.36n$.<br>Thus $W \\sim \\mathrm{N}(2.5n + 175, 0.36n)$.<br>We require $\\mathrm{P}(W > 300) \\ge 0.95$.<br>From GC:<br>• When $n = 52$: $\\mathrm{P}(W > 300) = 0.8761 < 0.95$.<br>• When $n = 53$: $\\mathrm{P}(W > 300) = 0.9569 \\ge 0.95$.<br>Hence the smallest value of $n$ is $53$."
      }
    ]
  }
]);
