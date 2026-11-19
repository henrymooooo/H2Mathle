window.registerQuestions([
  // ==================== JPJC 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "JPJC-2026-P2-Q1",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Inequalities", "Modulus Functions"],
    stem: "Solve the following inequalities without using a calculator.",
    parts: [
      {
        label: "(Full) Part 1",
        marks: 4,
        prompt: "Without using a calculator, solve $$\\frac{3x^2 + 4x - 10}{x^2 + 2x - 3} \\ge 2.$$",
        type: "self",
        solution: "$$\\frac{3x^2+4x-10 - 2(x^2+2x-3)}{x^2+2x-3} \\ge 0 \\implies \\frac{(x+2)(x-2)}{(x-1)(x+3)} \\ge 0.$$ By sign test: $x < -3$ or $-2 \\le x < 1$ or $x \\ge 2$."
      },
      {
        label: "(Full) Part 2",
        marks: 2,
        prompt: "Hence solve $$\\frac{3x^2 + 4|x| - 10}{x^2 + 2|x| - 3} \\ge 2.$$",
        type: "self",
        solution: "Replacing $x$ by $|x|$: $|x| < -3$ (no solution), $-2 \\le |x| < 1 \\implies -1 < x < 1$, or $|x| \\ge 2 \\implies x \\le -2$ or $x \\ge 2$.<br>Hence $x \\le -2$ or $-1 < x < 1$ or $x \\ge 2$."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q2",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["3D Vectors", "Planes & Lines"],
    stem: "Planes $p_1$ and $p_2$ have vector equations:<br>$$p_1: \\mathbf{r} = \\begin{pmatrix} 2 \\\\ b \\\\ -1 \\end{pmatrix} + \\lambda_1\\begin{pmatrix} a \\\\ 0 \\\\ 1 \\end{pmatrix} + \\mu_1\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\quad p_2: \\mathbf{r} = \\begin{pmatrix} 2 \\\\ b \\\\ -1 \\end{pmatrix} + \\lambda_2\\begin{pmatrix} a \\\\ 0 \\\\ 1 \\end{pmatrix} + \\mu_2\\begin{pmatrix} 4 \\\\ 5 \\\\ 6 \\end{pmatrix},$$ where $a$ and $b$ are constants.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Given that $p_1$ and $p_2$ intersect along a line $L$, write down a vector equation of $L$, in terms of $a$ and $b$.",
        type: "self",
        solution: "$$\\mathbf{r} = \\begin{pmatrix} 2 \\\\ b \\\\ -1 \\end{pmatrix} + \\lambda\\begin{pmatrix} a \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}.$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Deduce an equation of the plane $p_3$ that passes through $(0, 4, 4)$ and is perpendicular to both $p_1$ and $p_2$, in terms of $a$.",
        type: "self",
        solution: "$p_3$ is perpendicular to $L$, so $\\begin{pmatrix} a \\\\ 0 \\\\ 1 \\end{pmatrix}$ is normal to $p_3$.<br>$$\\mathbf{r}\\cdot\\begin{pmatrix} a \\\\ 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 4 \\\\ 4 \\end{pmatrix}\\cdot\\begin{pmatrix} a \\\\ 0 \\\\ 1 \\end{pmatrix} = 4.$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The plane $p_4$ has equation $\\mathbf{r}\\cdot\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} = 3$. Given that $L$ lies in $p_4$, find the values of $a$ and $b$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "-3", exactRequired: true, placeholder: "Integer" },
          { label: "b =", answer: "2", exactRequired: true, placeholder: "Integer" }
        ],
        solution: "$\\begin{pmatrix} a \\\\ 0 \\\\ 1 \\end{pmatrix}\\cdot\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} = 0 \\implies a + 3 = 0 \\implies a = -3$.<br>$\\begin{pmatrix} 2 \\\\ b \\\\ -1 \\end{pmatrix}\\cdot\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} = 3 \\implies 2 + 2b - 3 = 3 \\implies b = 2$."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q3",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Maclaurin Series", "Binomial Expansion"],
    stem: "Answer all parts.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Using standard series from MF27, expand $\\ln(k - 2x)$ as far as the term in $x^2$, where $k$ is a positive constant.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.1, 0.2], k: [2, 5] },
        answer: "ln(k) - 2*x/k - 2*x^2/k^2",
        placeholder: "Polynomial in x and k",
        solution: "$$\\ln(k-2x) = \\ln k + \\ln\\left(1 - \\frac{2x}{k}\\right) = \\ln k - \\frac{2x}{k} - \\frac{1}{2}\\left(-\\frac{2x}{k}\\right)^2 + \\dots = \\ln k - \\frac{2x}{k} - \\frac{2x^2}{k^2} + \\dots$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Find the range of values of $x$ for which the expansion in part (a) is valid.",
        type: "self",
        solution: "$-1 < -\\frac{2x}{k} \\le 1 \\implies -\\frac{k}{2} \\le x < \\frac{k}{2}$."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "It is given that the first three terms found in part (a) are equal to the first three terms in the series expansion of $(1 + mx)^n$, where $m$ is a constant. Find the <strong>exact</strong> values of $k$ and $m$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "k =", answer: "e", exactRequired: true, placeholder: "Exact constant" },
          { label: "m =", answer: "-4/e", exactRequired: true, placeholder: "Exact constant" }
        ],
        solution: "$\\ln k = 1 \\implies k = \\mathrm{e}$.<br>$nm = -\\frac{2}{k}$ and $\\frac{(nm)^2 - (nm)m}{2} = -\\frac{2}{k^2} \\implies \\frac{4}{k^2} + \\frac{2m}{k} = -\\frac{4}{k^2} \\implies m = -\\frac{4}{k} = -\\frac{4}{\\mathrm{e}}$."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q4",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Functions", "Inverse & Composite Functions"],
    stem: "The function $\\mathrm{f}$ is such that $\\mathrm{f}: x \\mapsto x^2 - 4x + 7$, $x \\in \\mathbb{R}$, $x \\le k$, where $k$ is a real constant.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "State the greatest value of $k$ for which the function $\\mathrm{f}^{-1}$ exists.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2",
        placeholder: "Exact value",
        solution: "$y = (x-2)^2 + 3$ has vertex at $(2, 3)$, so the greatest $k = 2$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Taking $k = 2$, find $\\mathrm{f}^{-1}$ in similar form.",
        type: "self",
        solution: "$x = 2 \\pm \\sqrt{y-3}$. Since $x \\le 2$, $x = 2 - \\sqrt{y-3}$.<br>$$\\mathrm{f}^{-1}: x \\mapsto 2 - \\sqrt{x-3}, \\quad x \\in \\mathbb{R}, \\quad x \\ge 3.$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "The function $\\mathrm{g}$ is such that $\\mathrm{g}: x \\mapsto 2 + \\frac{10}{x^2+1}$, $x \\in \\mathbb{R}$. Sketch the graph of $y = \\mathrm{g}(x)$, giving the equations of any asymptotes and coordinates of any turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 165" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="138" x2="225" y2="138" stroke-width="1.3"/><line x1="120" y1="150" x2="120" y2="12" stroke-width="1.3"/><line x1="20" y1="115" x2="220" y2="115" stroke-dasharray="4,3" stroke-width="1.1"/><text x="200" y="128" stroke="none">y = 2</text><path d="M 22 113 C 85 110, 102 25, 120 25 C 138 25, 155 110, 218 113" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="120" cy="25" r="2.4" fill="#4a8fe7"/><text x="126" y="25" stroke="none">(0, 12)</text><text x="223" y="149" stroke="none" font-style="italic">x</text><text x="125" y="18" stroke="none" font-style="italic">y</text></svg>`,
        solution: "Bell-shaped curve with maximum turning point $(0, 12)$ and horizontal asymptote $y = 2$."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "Show that the composite function $\\mathrm{gf}$ exists.",
        type: "self",
        solution: "$\\mathrm{R_f} = [3, \\infty)$ and $\\mathrm{D_g} = (-\\infty, \\infty)$. Since $\\mathrm{R_f} \\subseteq \\mathrm{D_g}$, $\\mathrm{gf}$ exists."
      },
      {
        label: "(v)",
        marks: 2,
        prompt: "Find the range of $\\mathrm{gf}$.",
        type: "self",
        solution: "Mapping $[3, \\infty)$ through $\\mathrm{g}$ gives $\\mathrm{g}(3) = 2 + \\frac{10}{10} = 3$ and $\\mathrm{g}(x)$ approaching $2$ as $x$ increases without bound. Hence $\\mathrm{R_{gf}} = (2, 3]$."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q5",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Arithmetic Progression", "Geometric Progression", "Financial Modelling"],
    stem: "Answer both parts (a) and (b).",
    parts: [
      {
        label: "(a)(i)",
        marks: 4,
        prompt: "A man borrows $5000$ dollars at the start of the first month. Interest is added immediately at $2.5\\%$ of the amount borrowed and thereafter at the start of every month at $2.5\\%$ of the outstanding loan. The man pays $400$ dollars at the end of every month. Find the outstanding loan (in dollars) at the end of the $n$th month.",
        type: "auto",
        mode: "expr",
        vars: { n: [1, 2, 5] },
        answer: "16000 - 11000*(1.025^n)",
        placeholder: "Expression in terms of n",
        solution: "Amount owed $= 5000(1.025)^n - 400(1 + 1.025 + \\dots + 1.025^{n-1}) = 5000(1.025)^n - 16000(1.025^n - 1) = 16000 - 11000(1.025)^n$."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Calculate how many complete months he will take to repay his loan.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "16",
        placeholder: "Integer months",
        solution: "$16000 - 11000(1.025)^n \\le 0 \\implies n \\ge \\frac{\\ln(16/11)}{\\ln 1.025} = 15.174$. Thus he takes $16$ complete months."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "A supplier delivers steel rods weekly: $100$ in week $1$, and $10$ more each subsequent week. Find the total number of steel rods delivered in $n$ weeks.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { n: [1, 2, 5] },
        answer: "n*(95 + 5*n)",
        placeholder: "Expression in terms of n",
        solution: "$S_n = \\frac{n}{2}[2(100) + (n-1)(10)] = \\frac{n}{2}(190 + 10n) = n(95 + 5n)$."
      },
      {
        label: "(b)(ii)",
        marks: 4,
        prompt: "After $n$ weeks ($n < 20$), each subsequent week's delivery is $10$ steel rods fewer than the previous week's delivery. By the $20$th week, the total number of steel rods delivered is $3180$. Find the value of $n$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "12",
        placeholder: "Integer value",
        solution: "Remaining $(20-n)$ weeks start at $100 + (n-1)(10) - 10 = 80 + 10n$ with $d = -10$.<br>$\\frac{n}{2}(190+10n) + \\frac{20-n}{2}(30n-30) = 3180 \\implies n^2 - 41n + 348 = 0 \\implies (n-12)(n-29) = 0$.<br>Since $n < 20$, $n = 12$."
      }
    ]
  },

  // ==================== JPJC 2026 PAPER 2: STATISTICS (Q6 - Q11) ====================
  {
    id: "JPJC-2026-P2-Q6",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Discrete Random Variables", "Expectation"],
    stem: "Two balls are drawn at random without replacement from an urn containing $4$ red, $4$ blue and $2$ green balls. Peter wins $m$ dollars if the $2$ balls are of the same colour, and loses $1$ dollar if they are of different colours. In addition, he gains $0.50$ dollars if at least one ball drawn is green. Let $X$ be the amount (in dollars) Peter wins.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Show that $\\mathrm{P}(X = -0.5) = \\frac{16}{45}$.",
        type: "self",
        solution: "$\\mathrm{P}(X = -0.5) = \\mathrm{P}(\\text{BG or RG}) = \\frac{{}^4C_1\\times {}^2C_1 + {}^4C_1\\times {}^2C_1}{{}^{10}C_2} = \\frac{16}{45}$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Determine the probability distribution of $X$, expressing your answers in terms of $m$.",
        type: "self",
        solution: "<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$-1$</td><td>$-0.5$</td><td>$m$</td><td>$m+0.5$</td></tr><tr><th>$\\mathrm{P}(X=x)$</th><td>$16/45$</td><td>$16/45$</td><td>$4/15$</td><td>$1/45$</td></tr></table></div>"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Find the least value of $m$ (to the nearest cent, 2 d.p.) such that it is favourable for Peter to play the game.",
        type: "auto",
        mode: "number",
        dp: 2,
        answer: "47/26",
        placeholder: "Value in dollars (2 d.p.)",
        solution: "$\\mathrm{E}(X) = -\\frac{16}{45} - \\frac{8}{45} + \\frac{4}{15}m + \\frac{1}{45}\\left(m+\\frac{1}{2}\\right) = \\frac{13}{45}m - \\frac{47}{90} > 0 \\implies m > 1.8077$.<br>Least $m = 1.81$ dollars."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q7",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Correlation & Regression", "Linearisation"],
    stem: "Wind speed $x\\text{ m s}^{-1}$ and electrical power $y\\text{ kW}$ generated by a wind turbine were recorded:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>4</td><td>6</td><td>8</td><td>10</td><td>12</td><td>14</td></tr><tr><th>$y$</th><td>41</td><td>83</td><td>165</td><td>303</td><td>523</td><td>805</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Draw a scatter diagram and explain which model among (A) $y = ax+b$, (B) $y = ax^3+b$, (C) $y = a\\sqrt{x}+b$ ($a, b > 0$) is most appropriate.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 175" width="245" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="38" y1="150" x2="245" y2="150" stroke-width="1.3"/><line x1="45" y1="158" x2="45" y2="12" stroke-width="1.3"/><text x="247" y="153" stroke="none" font-style="italic" font-family="Georgia,serif">x</text><text x="35" y="18" stroke="none" font-style="italic" font-family="Georgia,serif">y</text><text x="65" y="164" text-anchor="middle" stroke="none">4</text><text x="215" y="164" text-anchor="middle" stroke="none">14</text><text x="38" y="143" text-anchor="end" stroke="none">41</text><text x="38" y="29" text-anchor="end" stroke="none">805</text><g stroke="#4ca885" stroke-width="1.7"><path d="M 62 137 L 68 143 M 68 137 L 62 143"/><path d="M 92 131 L 98 137 M 98 131 L 92 137"/><path d="M 122 119 L 128 125 M 128 119 L 122 125"/><path d="M 152 98 L 158 104 M 158 98 L 152 104"/><path d="M 182 65 L 188 71 M 188 65 L 182 71"/><path d="M 212 22 L 218 28 M 218 22 L 212 28"/></g></svg>`,
        solution: "Model (B) $y = ax^3 + b$ is most appropriate because as $x$ increases, $y$ increases at an increasing rate."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Using $y = ax^3 + b$, find the coefficients $a$ and $b$, and the product moment correlation coefficient $r$ (give $r$ to <strong>6 decimal places</strong>).",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "0.286684", placeholder: "3 s.f." },
          { label: "b =", answer: "20.7016", placeholder: "3 s.f." },
          { label: "r =", answer: "0.999905", placeholder: "6 d.p." }
        ],
        solution: "$y = 0.28668x^3 + 20.702 \\approx 0.287x^3 + 20.7$, $r = 0.999905$ (6 d.p.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Give two reasons why it would be reasonable to use your model to estimate the value of $y$ when $x = 11$.",
        type: "self",
        solution: "1. $x = 11$ lies within the data range $[4, 14]$ (interpolation).<br>2. $r = 0.999905$ is very close to $+1$, indicating a strong positive linear correlation between $y$ and $x^3$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "A second wind turbine generates $450\\text{ kW}$ at $x = 11\\text{ m s}^{-1}$. Justify if the second turbine appears to perform better than the original turbine.",
        type: "self",
        solution: "At $x = 11$, the original turbine is estimated to generate $0.28668(11)^3 + 20.702 \\approx 402\\text{ kW}$. Since $450 > 402$, the second turbine appears to perform better."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q8",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Permutations & Combinations", "Probability", "Binomial Distribution"],
    stem: "A group of $12$ players consists of $5$ attackers, $4$ defenders and $3$ goalkeepers. A team of $5$ players is selected at random.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Find the number of different teams containing exactly $2$ attackers, $2$ defenders and $1$ goalkeeper.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "180",
        placeholder: "Integer value",
        solution: "${}^5C_2 \\times {}^4C_2 \\times {}^3C_1 = 10 \\times 6 \\times 3 = 180$."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Find the probability that the team contains exactly $1$ goalkeeper and at most $2$ attackers.",
        type: "auto",
        mode: "number",
        answer: "27/88",
        placeholder: "Exact or 3 s.f.",
        solution: "$\\frac{{}^3C_1({}^5C_2{}^4C_2 + {}^5C_1{}^4C_3 + {}^5C_0{}^4C_4)}{{}^{12}C_5} = \\frac{180 + 60 + 3}{792} = \\frac{243}{792} = \\frac{27}{88} \\approx 0.307$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "In a passing drill among the $5$ attackers and $4$ defenders, $4$ passes are made by randomly choosing a player each time (with replacement). Find the probability that exactly $3$ passes are made to attackers.",
        type: "auto",
        mode: "number",
        answer: "2000/6561",
        placeholder: "Exact or 3 s.f.",
        solution: "$4\\left(\\frac{5}{9}\\right)^3\\left(\\frac{4}{9}\\right) = \\frac{2000}{6561} \\approx 0.305$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find the probability that either the first $3$ passes or the last $3$ passes are made to attackers (or both).",
        type: "auto",
        mode: "number",
        answer: "1625/6561",
        placeholder: "Exact or 3 s.f.",
        solution: "$\\left(\\frac{5}{9}\\right)^3 + \\left(\\frac{5}{9}\\right)^3 - \\left(\\frac{5}{9}\\right)^4 = \\frac{1625}{6561} \\approx 0.248$ (3 s.f.)."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q9",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Normal Distribution", "Linear Combinations"],
    stem: "<em>In this question you should state the parameters of any distribution you use.</em>",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Masses of oranges from Farm A follow $\\mathrm{N}(245, 8^2)$ grams and Farm B follow $\\mathrm{N}(212, 7^2)$ grams. Find the probability that the mass of a randomly chosen Farm A orange differs from that of Farm B by more than $30$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.61111",
        placeholder: "3 s.f.",
        solution: "$X - Y \\sim \\mathrm{N}(33, 113)$. $\\mathrm{P}(|X-Y|>30) = \\mathrm{P}(X-Y>30) + \\mathrm{P}(X-Y<-30) = 0.611$ (3 s.f.)."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find the probability that the total mass of $3$ randomly chosen oranges from Farm A and $2$ randomly chosen oranges from Farm B is more than $1180$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.10876",
        placeholder: "3 s.f.",
        solution: "$W = X_1+X_2+X_3+Y_1+Y_2 \\sim \\mathrm{N}(1159, 290) \\implies \\mathrm{P}(W > 1180) = 0.109$ (3 s.f.)."
      },
      {
        label: "(a)(iii)",
        marks: 1,
        prompt: "State an assumption needed for your calculations in parts (i) and (ii).",
        type: "self",
        solution: "The mass of every orange is independent of one another."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "The random variable $X$ has distribution $\\mathrm{N}(\\mu, \\sigma^2)$. Given $\\mathrm{P}(X < m) = 0.25$, find $\\mathrm{P}(X > 2\\mu - m)$.",
        type: "auto",
        mode: "number",
        answer: "0.25",
        placeholder: "Exact value",
        solution: "By symmetry, $\\mathrm{P}(X > 2\\mu - m) = \\mathrm{P}\\left(Z > \\frac{\\mu-m}{\\sigma}\\right) = \\mathrm{P}\\left(Z < \\frac{m-\\mu}{\\sigma}\\right) = 0.25$."
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "The mean of a random sample of $n$ independent observations of $X$ is $\\bar{X}$. Find the greatest value of $n$ such that $\\mathrm{P}(\\bar{X} \\ge \\mu + 0.01\\sigma) > 0.4$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "641",
        placeholder: "Integer value",
        solution: "$\\mathrm{P}(Z \\ge 0.01\\sqrt{n}) > 0.4 \\implies \\mathrm{P}(Z < 0.01\\sqrt{n}) < 0.6 \\implies 0.01\\sqrt{n} < 0.25335 \\implies n < 641.85$.<br>Greatest $n = 641$."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q10",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Hypothesis Testing", "Unbiased Estimates", "Central Limit Theorem"],
    stem: "Meat servings are intended to have mass $150\\text{ g}$. A random sample of $30$ servings prepared by Josh is summarised:<br>$$\\sum(x-150) = 104.7, \\quad \\sum(x-150)^2 = 3367.5.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Calculate unbiased estimates of the population mean and population variance of the mass of meat in a serving.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "153.49", exactRequired: true, placeholder: "Exact value" },
          { label: "Variance =", answer: "103.5196", placeholder: "3 s.f." }
        ],
        solution: "$\\bar{x} = \\frac{104.7}{30} + 150 = 153.49$ (exact).<br>$s^2 = \\frac{1}{29}\\left(3367.5 - \\frac{104.7^2}{30}\\right) = 103.52 \\approx 104$ (3 s.f.)."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Test, at the $5\\%$ level of significance, whether the manager's suspicion that Josh is over-portioning is supported by the data.",
        type: "self",
        solution: "Let $\\mu$ be the population mean mass of meat in a serving prepared by Josh.<br>$\\mathrm{H}_0: \\mu = 150$, $\\mathrm{H}_1: \\mu > 150$. By CLT ($n=30$ large), $\\bar{X} \\sim \\mathrm{N}\\left(150, \\frac{103.52}{30}\\right)$ approx.<br>$z = 1.88$, $p$-value $= 0.0301 < 0.05$. Reject $\\mathrm{H}_0$: sufficient evidence at $5\\%$ level that $\\mu > 150\\text{ g}$, so the manager's suspicion is justified."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "An automatic dispenser dispenses meat with normal distribution and standard deviation $10\\text{ g}$. A random sample of $30$ servings is taken for a two-tailed test at $5\\%$ significance level. Find the critical region (to <strong>2 decimal places</strong>).",
        type: "self",
        solution: "Under $\\mathrm{H}_0: \\mu = 150$, $\\bar{Y} \\sim \\mathrm{N}\\left(150, \\frac{100}{30}\\right)$.<br>Critical region: $\\left|\\frac{\\bar{y}-150}{10/\\sqrt{30}}\\right| > 1.95996 \\implies \\bar{y} < 146.42$ or $\\bar{y} > 153.58$."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Explain why a sample of fewer than $30$ servings could still be used for the hypothesis test in part (c).",
        type: "self",
        solution: "Since the mass of meat dispensed by the machine is normally distributed, the sample mean follows an exact normal distribution regardless of sample size."
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "Explain why the manager would have less confidence in the conclusion if the sample had not been chosen randomly.",
        type: "self",
        solution: "If the sample is not chosen randomly, it may be biased and not representative of all servings dispensed by the machine."
      }
    ]
  },
  {
    id: "JPJC-2026-P2-Q11",
    year: 2026,
    school: "JPJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Binomial Distribution", "Central Limit Theorem"],
    stem: "<em>In this question you should state the parameters of any distribution you use.</em><br>On average, $24\\%$ of interactions handled by a senior manager are successful. A senior manager handles $6$ interactions a day.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "State, in context, two assumptions needed for the number of successful interactions made by a senior manager to be well-modelled by a binomial distribution.",
        type: "self",
        solution: "1. The event that a senior manager has a successful interaction is independent of other interactions.<br>2. The probability that a senior manager has a successful interaction is constant at $0.24$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Find the probability that Sky, a senior manager, secures less than $2$ successful interactions in a day.",
        type: "auto",
        mode: "number",
        answer: "0.55782",
        placeholder: "3 s.f.",
        solution: "$X \\sim \\mathrm{B}(6, 0.24) \\implies \\mathrm{P}(X \\le 1) = 0.558$ (3 s.f.)."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Find the probability that, in a randomly chosen month of $20$ working days, Sky secures at least $2$ successful interactions on more than $5$ days.",
        type: "auto",
        mode: "number",
        answer: "0.93644",
        placeholder: "3 s.f.",
        solution: "$Y \\sim \\mathrm{B}(20, 0.44218) \\implies \\mathrm{P}(Y > 5) = 1 - \\mathrm{P}(Y \\le 5) = 0.936$ (3 s.f.)."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Jules, a junior manager, handles $9$ interactions a day with success probability $p$ ($W \\sim \\mathrm{B}(9, p)$). Given the most probable number of successful interactions in a day is $2$, find exactly the possible range of values of $p$.",
        type: "self",
        solution: "$\\mathrm{P}(W=2) > \\mathrm{P}(W=1) \\implies 36p > 9(1-p) \\implies p > \\frac{1}{5}$.<br>$\\mathrm{P}(W=2) > \\mathrm{P}(W=3) \\implies 36(1-p) > 84p \\implies p < \\frac{3}{10}$.<br>Hence $\\frac{1}{5} < p < \\frac{3}{10}$."
      },
      {
        label: "(v)",
        marks: 2,
        prompt: "Let $p = 0.2$. Find the probability that the sixth customer served by Jules on a particular day is the third successful interaction of the day.",
        type: "auto",
        mode: "number",
        answer: "0.04096",
        placeholder: "3 s.f.",
        solution: "First $5$ have $2$ successes, and $6$th is a success: ${}^5C_2(0.2)^2(0.8)^3 \\times 0.2 = 0.04096 \\approx 0.0410$ (3 s.f.)."
      },
      {
        label: "(vi)",
        marks: 3,
        prompt: "Over a period of $50$ working days, find the probability that the average number of successful interactions per day for Sky exceeds that of Jules.",
        type: "auto",
        mode: "number",
        answer: "0.054910",
        placeholder: "3 s.f.",
        solution: "By CLT, $\\bar{X} \\sim \\mathrm{N}\\left(1.44, \\frac{1.0944}{50}\\right)$ and $\\bar{W} \\sim \\mathrm{N}\\left(1.8, \\frac{1.44}{50}\\right)$ approx.<br>$\\bar{X} - \\bar{W} \\sim \\mathrm{N}\\left(-0.36, \\frac{2.5344}{50}\\right) \\implies \\mathrm{P}(\\bar{X} - \\bar{W} > 0) = 0.0549$ (3 s.f.)."
      }
    ]
  }
]);