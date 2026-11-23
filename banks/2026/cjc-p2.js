window.registerQuestions([
  // ==================== CJC 2026 PAPER 2: PURE MATH (Q1 - Q4) ====================
  {
    id: "CJC-2026-P2-Q1",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Vectors"],
    stem: "The vectors $\\mathbf{v}$ and $\\mathbf{w}$ are defined as $\\mathbf{v} = \\mathbf{a} - 2\\mathbf{b}$ and $\\mathbf{w} = 5\\mathbf{a} + 4\\mathbf{b}$, where $\\mathbf{a}$ and $\\mathbf{b}$ are unit vectors.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Given that $\\mathbf{v}$ and $\\mathbf{w}$ are perpendicular, find the angle between $\\mathbf{a}$ and $\\mathbf{b}$ (in degrees).",
        type: "auto",
        mode: "number",
        dp: 1,
        answer: "120",
        placeholder: "Angle in degrees",
        solution: "Since $\\mathbf{v} \\cdot \\mathbf{w} = 0$:<br>$$(\\mathbf{a} - 2\\mathbf{b})\\cdot(5\\mathbf{a} + 4\\mathbf{b}) = 0 \\implies 5|\\mathbf{a}|^2 - 6\\mathbf{a}\\cdot\\mathbf{b} - 8|\\mathbf{b}|^2 = 0.$$ Since $|\\mathbf{a}| = |\\mathbf{b}| = 1$: $-3 - 6\\mathbf{a}\\cdot\\mathbf{b} = 0 \\implies \\mathbf{a}\\cdot\\mathbf{b} = -\\frac{1}{2}$.<br>Thus $\\cos\\theta = -\\frac{1}{2} \\implies \\theta = 120^\\circ$."
      }
    ]
  },
  {
    id: "CJC-2026-P2-Q2",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "An arithmetic progression $A$ has first term $a$ and non-zero common difference $d$. A geometric progression $G$ has first term $a$ and common ratio $r$, where $r \\ne 1$. It is given that the first, fourth and thirteenth terms of $A$ are equal to the first three consecutive terms of $G$ respectively.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Express $d$ in terms of $a$ and show that $r = 3$.",
        type: "self",
        solution: "$$\\frac{a+12d}{a+3d} = \\frac{a+3d}{a} \\implies a(a+12d) = (a+3d)^2 \\implies 3d(3d-2a) = 0.$$ Since $d \\ne 0$, $d = \\frac{2}{3}a$.<br>Common ratio $r = \\frac{a+3d}{a} = \\frac{a+2a}{a} = 3$ (shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Let $S_n$ denote the sum of the first $n$ terms of $A$. Given that $a > 0$, find the smallest value of $n$ such that $S_n > 100a$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "17",
        placeholder: "Integer value",
        solution: "$$\\frac{n}{2}\\left[2a + (n-1)\\frac{2}{3}a\\right] > 100a \\implies n^2 + 2n - 300 > 0.$$ Solving gives $n > 16.349$ (or $n < -18.349$). Least $n = 17$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "A new sequence $U$ is defined such that the $n$th term is given by $u_n = \\frac{k^n}{T_n}$, where $T_n$ is the $n$th term of $G$ and $k$ is a positive constant. Show that $U$ is also geometric.",
        type: "self",
        solution: "$$\\frac{u_n}{u_{n-1}} = \\frac{k^n / T_n}{k^{n-1} / T_{n-1}} = k\\left(\\frac{T_{n-1}}{T_n}\\right) = \\frac{k}{3},$$ which is a constant. Hence $U$ is a geometric sequence with common ratio $\\frac{k}{3}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Given that $U$ is a convergent sequence, find $\\sum_{r=1}^{\\infty} u_r$ in terms of $a$ and $k$. Express your answer as a single fraction.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { a: [1, 2], k: [1, 2] },
        answer: "3*k/(a*(3-k))",
        placeholder: "Single fraction in a and k",
        solution: "$u_1 = \\frac{k}{a}$ and common ratio $\\frac{k}{3}$ ($0 < \\frac{k}{3} < 1$ for convergence).<br>$$\\sum_{r=1}^{\\infty} u_r = \\frac{k/a}{1 - k/3} = \\frac{3k}{a(3-k)}.$$"
      }
    ]
  },
  {
    id: "CJC-2026-P2-Q3",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "Given that $3 + \\mathrm{i}$ is a root of the equation $P(z) = 0$, such that $P(z) = 2z^4 - 14z^3 + az^2 + bz + 10$, where $a$ and $b$ are real constants.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the values of $a$ and $b$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "33", exactRequired: true, placeholder: "Integer" },
          { label: "b =", answer: "-26", exactRequired: true, placeholder: "Integer" }
        ],
        solution: "$2(3+\\mathrm{i})^4 - 14(3+\\mathrm{i})^3 + a(3+\\mathrm{i})^2 + b(3+\\mathrm{i}) + 10 = 0 \\implies 2(28+96\\mathrm{i}) - 14(18+26\\mathrm{i}) + a(8+6\\mathrm{i}) + 3b + b\\mathrm{i} + 10 = 0$.<br>Comparing real and imaginary parts: $8a + 3b = 186$ and $6a + b = 172 \\implies a = 33, b = -26$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Using the values of $a$ and $b$ found in (a), state another complex root of the equation in the form $x + \\mathrm{i}y$, where $x$ and $y$ are real numbers and $y \\ne 0$. Justify your answer.",
        type: "self",
        solution: "Since all coefficients of $2z^4 - 14z^3 + 33z^2 - 26z + 10 = 0$ are real, complex roots occur in conjugate pairs. Hence $3 - \\mathrm{i}$ is a second root."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find, using an algebraic method, the other two roots of $P(z) = 0$.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["1/2+1/2*i", "1/2-1/2*i"],
        placeholder: "Both roots separated by a comma",
        solution: "$P(z) = (z^2 - 6z + 10)(2z^2 + cz + d)$. Comparing terms gives $d = 1, c = -2$.<br>Solving $2z^2 - 2z + 1 = 0$: $z = \\frac{2 \\pm \\sqrt{-4}}{4} = \\frac{1}{2} \\pm \\frac{1}{2}\\mathrm{i}$."
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "Indicate clearly, on an Argand diagram, the coordinates of the points that represent the roots of $P(z) = 0$. Hence, state the shape of the quadrilateral formed by these points, justifying your answer.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 185" width="230" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="95" x2="225" y2="95" stroke-width="1.3"/><polyline points="219,91 225,95 219,99" fill="none" stroke-width="1.3"/><text x="228" y="99" stroke="none">Re</text><line x1="65" y1="175" x2="65" y2="12" stroke-width="1.3"/><polyline points="61,18 65,12 69,18" fill="none" stroke-width="1.3"/><text x="72" y="18" stroke="none">Im</text><polygon points="85,75 185,55 185,135 85,115" fill="rgba(91,155,213,0.14)" stroke="#4a8fe7" stroke-width="1.7"/><circle cx="85" cy="75" r="2.6" fill="#4a8fe7"/><circle cx="85" cy="115" r="2.6" fill="#4a8fe7"/><circle cx="185" cy="55" r="2.6" fill="#4a8fe7"/><circle cx="185" cy="135" r="2.6" fill="#4a8fe7"/><text x="85" y="64" text-anchor="middle" stroke="none">(1/2, 1/2)</text><text x="85" y="131" text-anchor="middle" stroke="none">(1/2, −1/2)</text><text x="190" y="52" stroke="none">(3, 1)</text><text x="190" y="142" stroke="none">(3, −1)</text><text x="55" y="108" stroke="none" font-style="italic">O</text></svg>`,
        solution: "The points $(3, 1)$, $(3, -1)$, $(\\frac{1}{2}, \\frac{1}{2})$ and $(\\frac{1}{2}, -\\frac{1}{2})$ form a <strong>trapezium</strong> because one pair of opposite sides (vertical segments at $\\mathrm{Re}(z) = \\frac{1}{2}$ and $\\mathrm{Re}(z) = 3$) is parallel."
      }
    ]
  },
  {
    id: "CJC-2026-P2-Q4",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Vectors"],
    stem: "The points $A(0, 2, 1)$, $B(8, 6, 0)$ and $C(-4, 1, 1)$ lie on a plane $\\Pi_1$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find a cartesian equation for $\\Pi_1$.",
        type: "self",
        solution: "$AB = \\begin{pmatrix} 8 \\\\ 4 \\\\ -1 \\end{pmatrix}$, $AC = \\begin{pmatrix} -4 \\\\ -1 \\\\ 0 \\end{pmatrix}$.<br>$\\mathbf{n} = \\begin{pmatrix} 8 \\\\ 4 \\\\ -1 \\end{pmatrix} \\times \\begin{pmatrix} -4 \\\\ -1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 8 \\end{pmatrix}$.<br>$\\mathbf{r} \\cdot \\begin{pmatrix} -1 \\\\ 4 \\\\ 8 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 2 \\\\ 1 \\end{pmatrix} \\cdot \\begin{pmatrix} -1 \\\\ 4 \\\\ 8 \\end{pmatrix} = 16 \\implies -x + 4y + 8z = 16$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The point $T(1, 2, k)$ lies outside $\\Pi_1$, where $k$ is a real constant. Show that the shortest distance from $T$ to $\\Pi_1$ is $\\frac{1}{9}|8k - 9|$.",
        type: "self",
        solution: "$AT = \\begin{pmatrix} 1 \\\\ 0 \\\\ k-1 \\end{pmatrix}$. Shortest distance $= \\frac{\\left|AT \\cdot \\begin{pmatrix} -1 \\\\ 4 \\\\ 8 \\end{pmatrix}\\right|}{\\sqrt{(-1)^2 + 4^2 + 8^2}} = \\frac{|-1 + 8k - 8|}{9} = \\frac{1}{9}|8k - 9|$ (shown)."
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "The plane $\\Pi_2$ has cartesian equation $2x + y - 2z = -7$. Given that $T$ also lies outside $\\Pi_2$ and is equidistant from $\\Pi_1$ and $\\Pi_2$, find the possible values of $k$.",
        type: "auto",
        mode: "number-list",
        exactRequired: true,
        answer: [3, -12],
        placeholder: "Values separated by a comma",
        solution: "Distance from $T$ to $\\Pi_2$: $\\frac{|2(1) + 1(2) - 2(k) + 7|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\frac{|11 - 2k|}{3}$.<br>Equating: $\\frac{|8k-9|}{9} = \\frac{|11-2k|}{3} \\implies |8k-9| = 3|11-2k|$.<br>Solving $8k-9 = 33-6k$ or $8k-9 = -(33-6k)$ gives $k = 3$ or $k = -12$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find an equation of the line of intersection between $\\Pi_1$ and $\\Pi_2$.",
        type: "self",
        solution: "Direction: $\\begin{pmatrix} -1 \\\\ 4 \\\\ 8 \\end{pmatrix} \\times \\begin{pmatrix} 2 \\\\ 1 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} -16 \\\\ 14 \\\\ -9 \\end{pmatrix}$. Setting $z = 0$ gives $x = -\\frac{44}{9}, y = \\frac{25}{9}$.<br>$$\\mathbf{r} = \\begin{pmatrix} -44/9 \\\\ 25/9 \\\\ 0 \\end{pmatrix} + \\lambda\\begin{pmatrix} 16 \\\\ -14 \\\\ 9 \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}.$$"
      }
    ]
  },

  // ==================== CJC 2026 PAPER 2: STATISTICS (Q5 - Q10) ====================
  {
    id: "CJC-2026-P2-Q5",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Discrete Random Variables", "Binomial Distribution"],
    stem: "Vis plays a game where he puts a 1-dollar coin into a coin-operated machine to start the game. Vis loses with probability $0.8$ (pays out nothing), draws with probability $0.15$ (pays out one 1-dollar coin), or wins with probability $0.05$ (pays out ten 1-dollar coins). Let $Y$ represent the number of 1-dollar coins profited at the end of one game.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $\\mathrm{E}(Y) = -0.35$ and find $\\mathrm{Var}(Y)$.",
        type: "auto",
        mode: "number",
        answer: "4.7275",
        placeholder: "Exact or 3 s.f.",
        solution: "$\\mathrm{E}(Y) = (-1)(0.8) + 0(0.15) + 9(0.05) = -0.35$.<br>$\\mathrm{E}(Y^2) = (-1)^2(0.8) + 0^2(0.15) + 9^2(0.05) = 4.85$.<br>$\\mathrm{Var}(Y) = 4.85 - (-0.35)^2 = 4.7275$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Vis starts off with ten 1-dollar coins and plays the game exactly ten times. Find the expected number of 1-dollar coins that Vis will have at the end of ten games.",
        type: "auto",
        mode: "number",
        answer: "6.5",
        placeholder: "Exact value",
        solution: "$\\mathrm{E}(10 + Y_1 + \\dots + Y_{10}) = 10 + 10(-0.35) = 6.5$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find the probability that Vis will have at least ten 1-dollar coins left at the end of ten games.",
        type: "auto",
        mode: "number",
        answer: "0.40126",
        placeholder: "3 s.f.",
        solution: "Vis has $\\ge 10$ coins iff he draws all $10$ times OR wins at least once:<br>$$\\mathrm{P} = (0.15)^{10} + 1 - (0.95)^{10} = 0.40126 \\approx 0.401\\text{ (3 s.f.)}.$$"
      }
    ]
  },
  {
    id: "CJC-2026-P2-Q6",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "A railway company sells $200$ non-reserved tickets for a train that has $180$ seats. Historical records show that on average, each ticket holder turns up with probability $0.88$. Let $X$ represent the number of ticket holders who turn up.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State, in context, two assumptions needed for $X$ to be well modelled by a binomial distribution.",
        type: "self",
        solution: "1. Whether a ticket holder turns up for the journey is independent of other ticket holders.<br>2. The probability that each ticket holder turns up for the journey is constant at $0.88$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Explain why one of the assumptions stated in part (a) may not hold in this context.",
        type: "self",
        solution: "It is likely that some ticket holders are travelling together (e.g. families or friends), so whether a ticket holder turns up is not independent of other ticket holders."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Assume now that $X$ follows a binomial distribution. Find the probability that every ticket holder who turns up gets a seat.",
        type: "auto",
        mode: "number",
        answer: "0.83622",
        placeholder: "3 s.f.",
        solution: "$X \\sim \\mathrm{B}(200, 0.88) \\implies \\mathrm{P}(X \\le 180) = 0.83622 \\approx 0.836$ (3 s.f.)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Given that at least one ticket holder who turns up is unable to get a seat, find the probability that exactly three ticket holders who turn up are unable to get a seat.",
        type: "auto",
        mode: "number",
        answer: "0.17171",
        placeholder: "3 s.f.",
        solution: "$$\\frac{\\mathrm{P}(X = 183)}{\\mathrm{P}(X > 180)} = \\frac{0.02812275}{1 - 0.83621824} = 0.17171 \\approx 0.172\\text{ (3 s.f.)}.$$"
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Instead of selling $200$ tickets, the company wants to ensure that every ticket holder who turns up gets a seat more than $95\\%$ of the time. Determine the largest number of tickets that the company can sell.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "196",
        placeholder: "Integer value",
        solution: "$X \\sim \\mathrm{B}(n, 0.88)$ and $\\mathrm{P}(X \\le 180) > 0.95$.<br>From GC: $n = 196 \\implies 0.967 > 0.95$; $n = 197 \\implies 0.947 < 0.95$.<br>Largest number of tickets $= 196$."
      }
    ]
  },
  {
    id: "CJC-2026-P2-Q7",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Permutations & Combinations"],
    diagramSvg: `<svg viewBox="0 0 140 155" width="130" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><text x="70" y="18" text-anchor="middle" stroke="none" font-weight="bold">Front</text><rect x="34" y="28" width="26" height="26" fill="none" stroke-width="1.4"/><rect x="80" y="28" width="26" height="26" fill="none" stroke-width="1.4"/><rect x="34" y="68" width="26" height="26" fill="none" stroke-width="1.4"/><rect x="80" y="68" width="26" height="26" fill="none" stroke-width="1.4"/><rect x="34" y="108" width="26" height="26" fill="none" stroke-width="1.4"/><rect x="80" y="108" width="26" height="26" fill="none" stroke-width="1.4"/></svg>`,
    stem: "Ana and Din travel with one child each. Together with a couple consisting of one husband and one wife, they sit in a minibus with six passenger seats as shown.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the number of ways the six of them can be seated if there are no restrictions.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "720",
        placeholder: "Integer value",
        solution: "$6! = 720$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the number of ways if Ana and Din must sit beside their respective child.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "48",
        placeholder: "Integer value",
        solution: "3 pairs in 3 rows ($3!$), each pair can swap internally ($2!$), so $3! \\times (2!)^3 = 48$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the number of ways if the wife refuses to sit in the seat directly behind Ana.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "624",
        placeholder: "Integer value",
        solution: "Total $-$ (wife directly behind Ana): $6! - 4 \\times 4! = 720 - 96 = 624$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "During lunch, the six of them sit at a round table with six identical seats. In how many ways can Ana sit directly opposite the wife?",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "24",
        placeholder: "Integer value",
        solution: "Fix Ana ($1$ way), place wife opposite ($1$ way), arrange remaining $4$ people ($4!$): $4! = 24$."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Seven bowls of ice-cream of four flavours are served: $1$ coffee, $2$ chocolate, $2$ mint, and $2$ vanilla. Each bowl of the same flavour is indistinguishable and each person must select exactly one bowl. In how many ways can the bowls be distributed if the two children choose the chocolate flavour?",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "30",
        placeholder: "Integer value",
        solution: "The 4 adults choose from $1$ coffee, $2$ mint, $2$ vanilla:<br>Case 1 ($1$ coffee, $2$ mint, $1$ vanilla): $\\frac{4!}{2!} = 12$.<br>Case 2 ($1$ coffee, $1$ mint, $2$ vanilla): $\\frac{4!}{2!} = 12$.<br>Case 3 ($2$ mint, $2$ vanilla): $\\frac{4!}{2!2!} = 6$.<br>Total $= 12 + 12 + 6 = 30$."
      }
    ]
  },
  {
    id: "CJC-2026-P2-Q8",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "A researcher investigates the average time taken by students to complete a certain test using a random sample of $40$ students:<br>$$n = 40, \\quad \\sum x = 1080, \\quad \\sum x^2 = 31100.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Calculate unbiased estimates of population mean and variance for the time taken by students to complete the test.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "27", exactRequired: true, placeholder: "Exact value" },
          { label: "Variance =", answer: "1940/39", placeholder: "Exact or 3 s.f." }
        ],
        solution: "$\\bar{x} = \\frac{1080}{40} = 27$.<br>$s^2 = \\frac{1}{39}\\left(31100 - \\frac{1080^2}{40}\\right) = \\frac{1940}{39} \\approx 49.7$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Given that the test concludes there is sufficient evidence at the $\\alpha\\%$ significance level that the average time taken by students was not $25$ minutes, find the range of possible values of $\\alpha$.",
        type: "self",
        solution: "$\\mathrm{H}_0: \\mu = 25$, $\\mathrm{H}_1: \\mu \\ne 25$. By CLT, $\\bar{X} \\sim \\mathrm{N}\\left(25, \\frac{1940}{39(40)}\\right)$ approx.<br>From GC, $p$-value $= 0.072899$. To reject $\\mathrm{H}_0$, $0.072899 \\le \\frac{\\alpha}{100} \\implies 7.29 \\le \\alpha < 100$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Using the same sample, the test concludes there is sufficient evidence at the $2.5\\%$ significance level that the average time taken by students is less than $k$. Find the range of possible values of $k$.",
        type: "self",
        solution: "$\\mathrm{H}_0: \\mu = k$, $\\mathrm{H}_1: \\mu < k$ (left-tailed at $2.5\\%$).<br>$$\\frac{27 - k}{\\sqrt{\\frac{1940}{39(40)}}} < -1.95996 \\implies k > 29.1857 \\implies k \\ge 29.2\\text{ (3 s.f.)}.$$"
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Explain why this test would be inappropriate if the researcher had taken a random sample of $10$ students.",
        type: "self",
        solution: "The distribution of the time taken by students is unknown, so the sample size of $10$ is not large enough for the Central Limit Theorem to apply."
      }
    ]
  },
  {
    id: "CJC-2026-P2-Q9",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "An experiment investigated the relationship between maximum tidal current ($y\\text{ cm s}^{-1}$) and tidal range ($x\\text{ m}$) over $10$ days:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>2.0</td><td>2.4</td><td>3.0</td><td>3.1</td><td>3.4</td><td>3.7</td><td>3.8</td><td>4.0</td><td>4.5</td><td>4.6</td></tr><tr><th>$y$</th><td>15.2</td><td>22.0</td><td>25.2</td><td>33.0</td><td>33.1</td><td>34.2</td><td>51.0</td><td>45.0</td><td>50.7</td><td>61.0</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Draw a scatter diagram of the data.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 205" width="300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="45" y1="175" x2="300" y2="175" stroke-width="1.4"/><polyline points="294,171 300,175 294,179" fill="none" stroke-width="1.4"/><line x1="45" y1="180" x2="45" y2="16" stroke-width="1.4"/><polyline points="41,22 45,16 49,22" fill="none" stroke-width="1.4"/><text x="304" y="179" stroke="none" font-style="italic" font-family="Georgia,serif">x/m</text><text x="52" y="22" stroke="none" font-style="italic" font-family="Georgia,serif">y/cm s⁻¹</text><text x="80" y="190" text-anchor="middle" stroke="none">2.0</text><text x="262" y="190" text-anchor="middle" stroke="none">4.6</text><text x="38" y="145" text-anchor="end" stroke="none">15.2</text><text x="38" y="45" text-anchor="end" stroke="none">61.0</text><line x1="66" y1="152.6" x2="276" y2="45.2" stroke="#4a8fe7" stroke-width="1.4" stroke-dasharray="4,3"/><g stroke="#4ca885" stroke-width="1.7"><path d="M 77 138.6 L 83 144.6 M 83 138.6 L 77 144.6"/><path d="M 105 123.6 L 111 129.6 M 111 123.6 L 105 129.6"/><path d="M 147 116.6 L 153 122.6 M 153 116.6 L 147 122.6"/><path d="M 154 99.4 L 160 105.4 M 160 99.4 L 154 105.4"/><path d="M 175 99.2 L 181 105.2 M 181 99.2 L 175 105.2"/><path d="M 196 96.8 L 202 102.8 M 202 96.8 L 196 102.8"/><path d="M 203 59.8 L 209 65.8 M 209 59.8 L 203 65.8"/><path d="M 217 73.0 L 223 79.0 M 223 73.0 L 217 79.0"/><path d="M 252 60.5 L 258 66.5 M 258 60.5 L 252 66.5"/><path d="M 259 37.8 L 265 43.8 M 265 37.8 L 259 43.8"/></g></svg>`,
        solution: "Plot the $10$ pairs $(x, y)$ from $(2.0, 15.2)$ to $(4.6, 61.0)$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Calculate the product moment correlation coefficient $r$ for the data (and comment briefly with reference to the scatter diagram in your self-check).",
        type: "auto",
        mode: "number",
        answer: "0.94695",
        placeholder: "3 s.f.",
        solution: "$r = 0.947$ (3 s.f.).<br>Comment: $r$ is close to $1$, reflected in the scatter diagram where data points lie close to a straight line with a positive gradient."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Calculate the least squares regression line of $y$ on $x$ in the form $y = a + bx$ (and sketch this line on your scatter diagram).",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "-19.0861", placeholder: "3 s.f." },
          { label: "b =", answer: "16.2684", placeholder: "3 s.f." }
        ],
        solution: "$y = -19.0861 + 16.2684x \\approx -19.1 + 16.3x$ (3 s.f.)."
      },
      {
        label: "(d) Estimate",
        marks: 1,
        prompt: "Estimate the maximum tidal current (in $\\text{cm s}^{-1}$) when the tidal range is $4.2\\text{ m}$.",
        type: "auto",
        mode: "number",
        answers: ["49.241", "49.36"],
        placeholder: "3 s.f.",
        solution: "When $x = 4.2$: $y = -19.0861 + 16.2684(4.2) = 49.2\\text{ cm s}^{-1}$ (3 s.f.)."
      },
      {
        label: "(d) Reliability & (e)",
        marks: 3,
        prompt: "Give two reasons why your estimate in (d) is reliable, and comment briefly on the validity of using the equation from (c) at another marine location when $x = 4\\text{ m}$.",
        type: "self",
        solution: "<strong>(d)</strong> Reliable because: (1) $x = 4.2$ lies within the data range $2.0 \\le x \\le 4.6$ (interpolation), and (2) $r = 0.947$ is close to $1$, indicating a strong positive linear relationship.<br><strong>(e)</strong> Invalid, as data collected in one marine location may not be applicable to a new marine location and the relationship may no longer hold."
      }
    ]
  },
  {
    id: "CJC-2026-P2-Q10",
    year: 2026,
    school: "CJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "A manufacturer produces electrical components with length $L\\text{ mm}$. $30.85\\%$ of the components are longer than $15\\text{ mm}$ while $15.87\\%$ are shorter than $12\\text{ mm}$. Assume $L \\sim \\mathrm{N}(\\mu, \\sigma^2)$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $\\mu = 14.0$ and $\\sigma = 2.00$, correct to $3$ significant figures.",
        type: "self",
        solution: "$\\frac{12-\\mu}{\\sigma} = -0.99982$ and $\\frac{15-\\mu}{\\sigma} = 0.50011$.<br>Subtracting: $3 = 1.49992\\sigma \\implies \\sigma = 2.00$, $\\mu = 14.0$ (3 s.f.)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Draw a sketch of the distribution of $L$, indicating the main features of the curve.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 155" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="125" x2="298" y2="125" stroke-width="1.3"/><polyline points="292,121 298,125 292,129" fill="none" stroke-width="1.3"/><text x="303" y="129" stroke="none" font-style="italic">L</text><path d="M 32 124 C 82 123, 112 24, 160 24 C 208 24, 238 123, 288 124" fill="none" stroke="#4ca885" stroke-width="2"/><line x1="160" y1="24" x2="160" y2="125" stroke-dasharray="4,3" stroke-width="1.1"/><text x="160" y="140" text-anchor="middle" stroke="none">μ = 14.00</text></svg>`,
        solution: "Bell-shaped curve symmetric about $\\mu = 14.00$, approaching the horizontal axis asymptotically on both ends, with points of inflection at $14 \\pm 2$ ($12$ and $16$)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "$5\\%$ of components with length less than $k\\text{ mm}$ are rejected. Find the value of $k$.",
        type: "auto",
        mode: "number",
        answer: "10.710",
        placeholder: "3 s.f.",
        solution: "$\\mathrm{P}(L < k) = 0.05 \\implies k = 10.7$ (3 s.f.)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find the probability that the average length of $10$ randomly chosen components is at least $13\\text{ mm}$.",
        type: "auto",
        mode: "number",
        answer: "0.94308",
        placeholder: "3 s.f.",
        solution: "$\\bar{L} \\sim \\mathrm{N}\\left(14, \\frac{2^2}{10}\\right) \\implies \\mathrm{P}(\\bar{L} \\ge 13) = 0.943$ (3 s.f.)."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Each metre of component costs $1$ dollar to manufacture. Find the probability that $500$ randomly chosen components cost at most $6.95$ dollars to manufacture.",
        type: "auto",
        mode: "number",
        answer: "0.13178",
        placeholder: "3 s.f.",
        solution: "Cost $T = \\frac{1}{1000}(L_1 + \\dots + L_{500}) \\sim \\mathrm{N}\\left(7, 0.002\\right)$.<br>$\\mathrm{P}(T \\le 6.95) = 0.132$ (3 s.f.)."
      }
    ]
  }
]);