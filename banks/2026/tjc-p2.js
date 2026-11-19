window.registerQuestions([
  // ==================== TJC 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "TJC-2026-P2-Q1", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q1", category: "pure",
    topics: ["Sequences & Series", "Convergence"],
    stem: "A sequence is defined by $x_1 = a$ and $x_{n+1} = x_n + \\left(\\frac{3}{2}\\right)^n$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find $x_2$, $x_3$ and $x_4$ in terms of $a$.", type: "self", solution: "$x_2 = a + \\frac{3}{2}$, $x_3 = a + \\frac{15}{4}$, $x_4 = a + \\frac{57}{8}$." },
      { label: "(b)", marks: 2, prompt: "Find $x_n$ in the form $p + q\\left(\\frac{3}{2}\\right)^{n-1}$ in terms of $a$ and $n$.", type: "auto", mode: "expr", exactRequired: true, vars: { a: [1, 2], n: [2, 3] }, answer: "(a-3) + 3*((3/2)^(n-1))", placeholder: "Expression in a and n", solution: "$x_n = a + \\frac{\\frac{3}{2}((3/2)^{n-1}-1)}{3/2-1} = (a - 3) + 3\\left(\\frac{3}{2}\\right)^{n-1}$." },
      { label: "(c)", marks: 1, prompt: "Determine if the sequence $\\{x_n\\}$ converges.", type: "self", solution: "As $n$ approaches infinity, $(3/2)^{n-1}$ approaches infinity, so $\\{x_n\\}$ diverges." }
    ]
  },
  {
    id: "TJC-2026-P2-Q2", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q2", category: "pure",
    topics: ["3D Vectors", "Ratio Theorem", "Projection"],
    stem: "Points $A$ and $B$ have position vectors $\\begin{pmatrix}1\\\\7\\\\2\\end{pmatrix}$ and $\\begin{pmatrix}4\\\\-2\\\\2\\end{pmatrix}$. Point $C$ divides $AB$ in ratio $AC:CB = 2:1$. $D$ is midpoint of $OB$ and $E$ is $(1, k, 0)$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Find the position vector of $C$.", type: "auto", mode: "tuple", exactRequired: true, answer: [3, 1, 2], placeholder: "Coordinates (x, y, z)", solution: "$\\overrightarrow{OC} = \\frac{2\\mathbf{b}+\\mathbf{a}}{3} = \\begin{pmatrix}3\\\\1\\\\2\\end{pmatrix}$." },
      { label: "(b)", marks: 2, prompt: "Find $k$ such that $C, D$ and $E$ are collinear.", type: "auto", mode: "number", exactRequired: true, answer: "-3", placeholder: "Value of k", solution: "$D(2,-1,1) \\implies \\overrightarrow{CD}=\\begin{pmatrix}-1\\\\-2\\\\-1\\end{pmatrix}$, $\\overrightarrow{CE}=\\begin{pmatrix}-2\\\\k-1\\\\-2\\end{pmatrix} \\implies k = -3$." },
      { label: "(c)", marks: 3, prompt: "Find the possible values of $k$ such that the length of projection of $OE$ onto $AB$ is $\\sqrt{10}$.", type: "auto", mode: "number-list", exactRequired: true, answer: [-3, 11 / 3], placeholder: "Values separated by comma", solution: "$\\frac{|1-3k|}{\\sqrt{10}} = \\sqrt{10} \\implies |1-3k| = 10 \\implies k = -3$ or $\\frac{11}{3}$." }
    ]
  },
  {
    id: "TJC-2026-P2-Q3", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q3", category: "pure",
    topics: ["Complex Numbers", "Quadratic Equations"],
    stem: "<em>Do not use a calculator.</em> $z^2(-2+\\mathrm{i}) + 4\\mathrm{i}z + q = 0$ ($q \\in \\mathbb{R}$) has a root $p + p\\mathrm{i}$ ($p \\ne 0, p \\in \\mathbb{R}$).",
    parts: [
      { label: "(a)", marks: 4, prompt: "Find the values of $p$ and $q$.", type: "auto", mode: "multi-field", fields: [{ label: "p =", answer: "1", exactRequired: true }, { label: "q =", answer: "6", exactRequired: true }], solution: "Sub $z = p+p\\mathrm{i}$: $(-2p^2-4p+q) + (-4p^2+4p)\\mathrm{i} = 0 \\implies p = 1, q = 6$." },
      { label: "(b)", marks: 3, prompt: "Find the other root of the equation.", type: "auto", mode: "complex-list", exactRequired: true, answer: ["-9/5 + 3/5*i"], placeholder: "Complex number a + bi", solution: "$r = -\\frac{6}{(-2+\\mathrm{i})(-(1+\\mathrm{i}))} = -\\frac{6}{3+\\mathrm{i}} = -\\frac{9}{5} + \\frac{3}{5}\\mathrm{i}$." }
    ]
  },
  {
    id: "TJC-2026-P2-Q4", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q4", category: "pure",
    topics: ["Parametric Equations", "Tangents"],
    stem: "Curve $C$ has parametric equations $x = t^2 - 1$, $y = t^3 - 3t^2 + 1$ for $t > 0$.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $t$, and find the coordinates of the stationary point of $C$.", type: "auto", mode: "tuple", exactRequired: true, answer: [3, -3], placeholder: "Coordinates (x, y)", solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3}{2}(t-2) = 0 \\implies t = 2 \\implies (3, -3)$." },
      {
        label: "(b)", marks: 2, prompt: "Sketch the graph of $C$ for $t > 0$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 155" width="205" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="90" x2="205" y2="90" stroke-width="1.3"/><line x1="65" y1="145" x2="65" y2="12" stroke-width="1.3"/><path d="M 48 75 Q 72 135 95 130 Q 135 122 185 20" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><circle cx="48" cy="75" r="2.6" fill="#fff" stroke="#cf5652" stroke-width="1.6"/><text x="40" y="68" text-anchor="end" stroke="none">(−1,1)</text><text x="95" y="143" text-anchor="middle" stroke="none">(3,−3)</text></svg>`,
        solution: "Starts at open circle $(-1, 1)$, dips to minimum at $(3, -3)$, then increases into the 1st quadrant."
      },
      { label: "(c)-(d)", marks: 5, prompt: "Find the tangent at $P$ ($t = 4$), and determine non-graphically if it meets $C$ again.", type: "self", solution: "Tangent: $y = 3x - 28$. Solving $t^3-3t^2+1 = 3(t^2-1)-28$ gives $(t-4)^2(t+2)=0$. Since $t > 0$, $t=-2$ is rejected; it does not meet $C$ again." }
    ]
  },
  {
    id: "TJC-2026-P2-Q5", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q5", category: "pure",
    topics: ["Integration by Substitution", "Volumes of Revolution"],
    diagramSvg: `<svg viewBox="0 0 220 185" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="125" x2="205" y2="125" stroke-width="1.3"/><line x1="75" y1="175" x2="75" y2="12" stroke-width="1.3"/><circle cx="75" cy="125" r="42" fill="none" stroke="#2c2925" stroke-width="1.5"/><circle cx="117" cy="83" r="42" fill="none" stroke="#4a8fe7" stroke-width="1.5"/><path d="M 75 83 A 42 42 0 0 1 117 125 A 42 42 0 0 1 75 83 Z" fill="rgba(91,155,213,0.28)" stroke="none"/><text x="93" y="109" stroke="none" font-style="italic" font-size="12">R</text></svg>`,
    stem: "Part (b) shows circles $x^2+y^2=4$ and $(x-2)^2+(y-2)^2=4$ enclosing shaded region $R$.",
    parts: [
      { label: "(a)", marks: 6, prompt: "Use $x = 2 + 2\\sin\\theta$ to find the <strong>exact</strong> value of $\\int_0^2 \\sqrt{4-(x-2)^2}\\,\\mathrm{d}x$.", type: "auto", mode: "number", exactRequired: true, answer: "pi", placeholder: "Exact value", solution: "$\\int_{-\\pi/2}^0 4\\cos^2\\theta\\,\\mathrm{d}\\theta = 2\\int_{-\\pi/2}^0(1+\\cos 2\\theta)\\mathrm{d}\\theta = \\pi$." },
      { label: "(b)", marks: 5, prompt: "Find the <strong>exact</strong> volume formed when $R$ is rotated $2\\pi$ radians about the $x$-axis.", type: "auto", mode: "number", exactRequired: true, answer: "4*(pi^2) - 8*pi", placeholder: "Exact value in pi", solution: "Hemisphere minus lower arc of $(x-2)^2+(y-2)^2=4$: $\\frac{16}{3}\\pi - \\pi\\int_0^2(2-\\sqrt{4-(x-2)^2})^2\\,\\mathrm{d}x = 4\\pi^2 - 8\\pi$." }
    ]
  },

  // ==================== TJC 2026 PAPER 2: STATISTICS (Q6 - Q11) ====================
  {
    id: "TJC-2026-P2-Q6", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q6", category: "stats",
    topics: ["Discrete Random Variables", "Central Limit Theorem"],
    stem: "In each game, Anand tosses $3$ tokens (red cup prob $0.7$). Scores: $0$ red $\\to 0$ pts; $1$ or $2$ red $\\to 1$ pt; $3$ red $\\to 3$ pts. Score is $S$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Show that $\\mathrm{E}(S) = 1.659$.", type: "self", solution: "$\\mathrm{P}(S=0)=0.027$, $\\mathrm{P}(S=1)=0.63$, $\\mathrm{P}(S=3)=0.343 \\implies \\mathrm{E}(S) = 0.63 + 3(0.343) = 1.659$." },
      { label: "(b)", marks: 1, prompt: "Find $\\mathrm{Var}(S)$.", type: "auto", mode: "number", answer: "0.964719", placeholder: "Exact or 3 s.f.", solution: "$\\mathrm{E}(S^2) = 3.717 \\implies \\mathrm{Var}(S) = 3.717 - 1.659^2 = 0.964719$." },
      { label: "(c)", marks: 1, prompt: "To win a toy needing $100$ points, state the least number of games he must play to have a chance of winning.", type: "auto", mode: "number", exactRequired: true, answer: "34", placeholder: "Integer", solution: "$3n \\ge 100 \\implies n = 34$." },
      { label: "(d)", marks: 4, prompt: "Find the smallest integer $n$ for at least $90\\%$ chance that Anand can redeem the toy after $n$ games.", type: "auto", mode: "number", exactRequired: true, answer: "67", placeholder: "Integer n", solution: "By CLT, $T \\sim \\mathrm{N}(1.659n, 0.964719n)$. From GC, $\\mathrm{P}(T \\ge 100) \\ge 0.9$ first holds at $n = 67$ ($0.9173$)." }
    ]
  },
  {
    id: "TJC-2026-P2-Q7", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q7", category: "stats",
    topics: ["Permutations & Combinations"],
    stem: "Beng, Charlie and $6$ other friends go to a concert and then dinner.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Find the number of ways the $8$ friends sit in a row if Beng is next to Charlie on Charlie's left.", type: "auto", mode: "number", exactRequired: true, answer: "5040", placeholder: "Integer", solution: "Treat (BC) as 1 unit in fixed order: $7! = 5040$." },
      { label: "(b)", marks: 3, prompt: "Each wears blue or silver. Find the number of ways they can choose outfits if there must be at least two of each colour.", type: "auto", mode: "number", exactRequired: true, answer: "238", placeholder: "Integer", solution: "$2^8 - 2 - {}^8C_1(2) = 238$." },
      { label: "(c)", marks: 3, prompt: "At a cafe with a round table of $5$ seats and a round table of $3$ seats, find the number of ways if Beng and Charlie are at the same table.", type: "auto", mode: "number", exactRequired: true, answer: "1248", placeholder: "Integer", solution: "Both at 3-table: ${}^6C_1(2!)(4!) = 288$. Both at 5-table: ${}^6C_3(4!)(2!) = 960$. Total $= 1248$." }
    ]
  },
  {
    id: "TJC-2026-P2-Q8", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q8", category: "stats",
    topics: ["Normal Distribution", "Linear Combinations"],
    stem: "Task A time $\\sim \\mathrm{N}(m, 1.25)$ min, Task B time $\\sim \\mathrm{N}(7, 1)$ min (independent). $3.1\\%$ take at least $22.8$ min for both.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Show that $m = 13.0$, correct to 1 decimal place.", type: "self", solution: "$T \\sim \\mathrm{N}(m+7, 2.25)$. $\\frac{22.8-(m+7)}{1.5} = 1.8663 \\implies m = 13.0$." },
      { label: "(b)", marks: 2, prompt: "Fastest $10\\%$ take no longer than $k$ minutes. Find $k$.", type: "auto", mode: "number", answer: "18.0777", placeholder: "3 s.f.", solution: "$\\mathrm{P}(T \\le k) = 0.1$ for $T\\sim\\mathrm{N}(20, 2.25) \\implies k = 18.1$ (3 s.f.)." },
      { label: "(c)", marks: 3, prompt: "Find probability total time taken by $3$ randomly chosen contestants to complete both tasks is $< 62$ min.", type: "auto", mode: "number", answer: "0.77912", placeholder: "3 s.f.", solution: "$T_1+T_2+T_3 \\sim \\mathrm{N}(60, 6.75) \\implies \\mathrm{P}(<62) = 0.779$ (3 s.f.)." },
      { label: "(d)", marks: 3, prompt: "Find probability one contestant's Task A time is greater than twice another contestant's Task B time.", type: "auto", mode: "number", answer: "0.33126", placeholder: "3 s.f.", solution: "$X - 2Y \\sim \\mathrm{N}(-1, 5.25) \\implies \\mathrm{P}(X - 2Y > 0) = 0.331$ (3 s.f.)." }
    ]
  },
  {
    id: "TJC-2026-P2-Q9", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q9", category: "stats",
    topics: ["Correlation & Regression", "Quadratic Model"],
    stem: "Rice yield $y$ (tons/ha) vs rainfall $x$ (cm), with $r = 0.93244$:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>60</td><td>80</td><td>100</td><td>120</td><td>140</td><td>160</td><td>180</td><td>200</td></tr><tr><th>$y$</th><td>2.1</td><td>2.8</td><td>3.5</td><td>4.2</td><td>4.6</td><td>4.9</td><td>5.0</td><td>4.8</td></tr></table></div>Quadratic model $y = c + d(x-H)^2$ gives $r = -0.997383$ ($H=182$), $-0.997390$ ($H=183$), $-0.997293$ ($H=185$).",
    parts: [
      { label: "(a)-(c)", marks: 4, prompt: "State what $r=0.93244$ suggests, sketch the scatter diagram & explain why (a) changes, and give a contextual reason why a linear model is inappropriate.", type: "self", solution: "(a) Strong positive linear correlation. (b) Points increase at decreasing rate then decrease; linear correlation does not hold. (c) Too much rainfall floods/damages crops." },
      { label: "(d)", marks: 1, prompt: "Calculate $r$ between $(x-H)^2$ and $y$ for $H = 184$, to <strong>6 decimal places</strong>.", type: "auto", mode: "number", dp: 6, answer: "-0.997359", placeholder: "6 d.p.", solution: "From GC, $r = -0.997359$." },
      { label: "(e)", marks: 2, prompt: "Identify the most appropriate $H$, and calculate $c$ and $d$.", type: "auto", mode: "multi-field", fields: [{ label: "H =", answer: "183", exactRequired: true }, { label: "c =", answer: "4.93927" }, { label: "d =", answer: "-0.00019388" }], solution: "$H = 183$ ($r = -0.997390$ closest to $-1$). Regression gives $c = 4.94$, $d = -0.000194$." },
      { label: "(f)", marks: 2, prompt: "Interpret $H$ and $c$ in context.", type: "self", solution: "$H = 183\\text{ cm}$ is the optimal rainfall giving the maximum yield of $c = 4.94\\text{ tons/ha}$." }
    ]
  },
  {
    id: "TJC-2026-P2-Q10", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q10", category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "Library books borrowed: $80\\%$ Fiction, $15\\%$ Non-fiction, $5\\%$ Reference (one book per borrower, independent).",
    parts: [
      { label: "(a)(i)", marks: 1, prompt: "Explain what is meant by randomly selected in context.", type: "self", solution: "Each borrower has an equal chance of being selected and selections are independent." },
      { label: "(a)(ii)", marks: 1, prompt: "$3$ borrowers selected. Find probability all three borrowed different types.", type: "auto", mode: "number", answer: "0.036", placeholder: "Exact or 3 s.f.", solution: "$0.8 \\times 0.15 \\times 0.05 \\times 3! = 0.036$." },
      { label: "(a)(iii)", marks: 2, prompt: "Find probability at least one borrowed a Reference book.", type: "auto", mode: "number", answer: "0.142625", placeholder: "Exact or 3 s.f.", solution: "$1 - 0.95^3 = 0.142625 \\approx 0.143$." },
      { label: "(a)(iv)", marks: 3, prompt: "Given at least one borrowed a Reference book, find probability none borrowed Fiction.", type: "auto", mode: "number", answer: "37/1141", placeholder: "Exact or 3 s.f.", solution: "$\\frac{0.2^3 - 0.15^3}{0.142625} = \\frac{0.004625}{0.142625} = \\frac{37}{1141} \\approx 0.0324$." },
      { label: "(b)(i)", marks: 1, prompt: "Sample of $10$ borrowers: state one assumption for Fiction borrowers to follow a binomial distribution.", type: "self", solution: "The probability that a borrower borrows a Fiction book is constant for all borrowers." },
      { label: "(b)(ii)", marks: 2, prompt: "Find probability between $5$ and $9$ inclusive borrowed Fiction.", type: "auto", mode: "number", answer: "0.88626", placeholder: "3 s.f.", solution: "$X\\sim\\mathrm{B}(10,0.8) \\implies \\mathrm{P}(X\\le 9)-\\mathrm{P}(X\\le 4) = 0.886$ (3 s.f.)." },
      { label: "(b)(iii)", marks: 1, prompt: "Librarian selects $50$ samples of $10$. Find expected number of samples with $5$ to $9$ inclusive Fiction borrowers.", type: "auto", mode: "number", answer: "44.313", placeholder: "3 s.f.", solution: "$50 \\times 0.88626 = 44.3$ (3 s.f.)." },
      { label: "(c)", marks: 3, prompt: "Find least number of borrowers so librarian is $\\ge 90\\%$ confident more than $1$ borrowed a Reference book.", type: "auto", mode: "number", exactRequired: true, answer: "77", placeholder: "Integer", solution: "$Y\\sim\\mathrm{B}(n,0.05)$, $\\mathrm{P}(Y \\le 1) \\le 0.1 \\implies n = 77$." }
    ]
  },
  {
    id: "TJC-2026-P2-Q11", year: 2026, school: "TJC", paper: "2026 Prelim Paper 2", qNum: "Q11", category: "stats",
    topics: ["Hypothesis Testing", "Central Limit Theorem"],
    stem: "Teabag claimed mean mass is $3.2\\text{ g}$. Random sample of $50$: $\\sum x = 156$, $\\sum(x-\\bar{x})^2 = 7$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Find unbiased estimates of population mean and variance.", type: "auto", mode: "multi-field", fields: [{ label: "Mean =", answer: "3.12", exactRequired: true }, { label: "Var =", answer: "1/7" }], solution: "$\\bar{x} = 3.12$, $s^2 = \\frac{7}{49} = \\frac{1}{7} \\approx 0.143$." },
      { label: "(b)", marks: 5, prompt: "Test at $5\\%$ significance level whether mean mass differs from $3.2\\text{ g}$ (find critical region and conclude).", type: "self", solution: "$\\mathrm{H}_0: \\mu=3.2, \\mathrm{H}_1: \\mu\\ne 3.2$. Critical region: $\\bar{x} \\le 3.09$ or $\\bar{x} \\ge 3.30$. Since $3.12$ is outside ($p=0.134 > 0.05$), do not reject $\\mathrm{H}_0$." },
      { label: "(c)", marks: 3, prompt: "Supervisor suspects mean $< 3.2\\text{ g}$ and concludes suspicion is justified at $\\alpha\\%$ level. Find range of $\\alpha$.", type: "self", solution: "1-tail $p$-value $= \\frac{0.13448}{2} = 0.06724 \\le \\frac{\\alpha}{100} \\implies 6.72 \\le \\alpha < 100$." }
    ]
  }
]);