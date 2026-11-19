window.registerQuestions([
  // ==================== DHS 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "DHS-2026-P2-Q1", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q1", category: "pure",
    topics: ["Inequalities"],
    stem: "Solve the following inequalities without using a calculator.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Solve $\\frac{2x^2-3x+5}{x^2+3x-4} > 1$.", type: "self", solution: "$\\frac{(x-3)^2}{(x-1)(x+4)} > 0 \\implies x < -4$ or $x > 1, x \\ne 3$." },
      { label: "(b)", marks: 3, prompt: "Hence solve $\\frac{2-3x+5x^2}{1+3x-4x^2} > 1$.", type: "self", solution: "Replace $x$ with $\\frac{1}{x}$ (and check $x=0$ gives $2 > 1$): $-\\frac{1}{4} < x < 1, x \\ne \\frac{1}{3}$." }
    ]
  },
  {
    id: "DHS-2026-P2-Q2", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q2", category: "pure",
    topics: ["3D Vectors", "Geometrical Interpretation"],
    stem: "Variable point $R(\\mathbf{r})$, fixed points $A(\\mathbf{a}), B(\\mathbf{b})$ (non-zero, non-parallel).",
    parts: [
      { label: "(a)-(c)", marks: 5, prompt: "Interpret $|\\mathbf{a}\\times\\mathbf{b}|$, $3\\mathbf{r}\\times(\\mathbf{b}-\\mathbf{a}) = \\mathbf{0}$, and $\\mathbf{r}\\cdot\\mathbf{b} = \\mathbf{r}\\cdot\\mathbf{a}$ geometrically.", type: "self", solution: "(a) Area of parallelogram with sides $OA, OB$. (b) Line through $O$ parallel to $AB$. (c) Plane through $O$ with normal $AB$." },
      { label: "(d)", marks: 3, prompt: "$C$ has position vector $(-3, -6, 2)$. Find $\\sin\\theta$ (acute angle between $OC$ and $x$-axis).", type: "auto", mode: "number", exactRequired: true, answer: "2*sqrt(10)/7", placeholder: "Exact surd form", solution: "$\\cos\\theta = \\frac{3}{7} \\implies \\sin\\theta = \\sqrt{1-\\frac{9}{49}} = \\frac{2\\sqrt{10}}{7}$." }
    ]
  },
  {
    id: "DHS-2026-P2-Q3", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q3", category: "pure",
    topics: ["Algebraic Proofs", "Discriminant"],
    stem: "Curve $(x+y)^2 + axy = 6$ ($a > 0$) is intersected by line $y = -x + k$ for all $|k| \\ge 2$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Show that the $x$-coordinate satisfies $ax^2 - akx + (6-k^2) = 0$.", type: "self", solution: "$k^2 + ax(-x+k) = 6 \\implies ax^2 - akx + (6-k^2) = 0$." },
      { label: "(b)", marks: 4, prompt: "Find the value of $a$.", type: "auto", mode: "number", exactRequired: true, answer: "2", placeholder: "Exact value of a", solution: "Discriminant $\\ge 0 \\implies (a+4)k^2 - 24 \\ge 0 \\implies k^2 \\ge \\frac{24}{a+4}$. Comparing with $k^2 \\ge 4$ gives $a = 2$." }
    ]
  },
  {
    id: "DHS-2026-P2-Q4", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q4", category: "pure",
    topics: ["Parametric Equations", "Trigonometry"],
    stem: "Curve $C$: $x = \\sin t + \\sqrt{3}\\cos t$, $y = \\sqrt{3}\\cos t$ ($0 \\le t \\le \\pi$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "Express $x = R\\sin(t + \\alpha)$ ($R > 0$, $\\alpha$ acute).", type: "auto", mode: "multi-field", fields: [{ label: "R =", answer: "2", exactRequired: true }, { label: "α =", answer: "pi/3", exactRequired: true }], solution: "$R = \\sqrt{1+3} = 2$, $\\tan\\alpha = \\sqrt{3} \\implies \\alpha = \\frac{\\pi}{3}$." },
      {
        label: "(b)-(d)", marks: 8, prompt: "Deduce max $x$ and explain why min $x \\ne -R$, sketch $C$ with endpoints and intercepts, and find cartesian equation $x = \\mathrm{f}(y)$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 200 160" width="185" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="80" x2="185" y2="80" stroke-width="1.3"/><line x1="100" y1="150" x2="100" y2="12" stroke-width="1.3"/><path d="M 142 36 Q 158 55 124 80 Q 100 100 58 124" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><circle cx="142" cy="36" r="2.5" fill="#4a8fe7"/><circle cx="58" cy="124" r="2.5" fill="#4a8fe7"/><text x="146" y="34" stroke="none">(√3,√3)</text><text x="52" y="138" text-anchor="middle" stroke="none">(−√3,−√3)</text><text x="128" y="92" stroke="none">(1,0)</text></svg>`,
        solution: "Max $x=2$; $\\frac{\\pi}{3} \\le t+\\frac{\\pi}{3} \\le \\frac{4\\pi}{3} \\implies \\min x = -\\sqrt{3} \\ne -2$. Cartesian: $x = \\frac{\\sqrt{3-y^2}}{\\sqrt{3}} + y$ ($-\\sqrt{3} \\le y \\le \\sqrt{3}$)."
      }
    ]
  },
  {
    id: "DHS-2026-P2-Q5", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q5", category: "pure",
    topics: ["Differential Equations"],
    stem: "Tank initially contains $200\\text{ L}$ pure water. Nitrogen solution ($0.075\\text{ g/L}$) is pumped in at $10\\text{ L/min}$ and well-mixed solution leaves at $10\\text{ L/min}$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{3}{4} - \\frac{1}{20}x$.", type: "self", solution: "Rate in $= 0.075(10) = \\frac{3}{4}$; rate out $= \\frac{x}{200}(10) = \\frac{1}{20}x$." },
      { label: "(b)-(c)", marks: 8, prompt: "Solve for $x(t)$, sketch $x$ against $t$, and explain what happens to nitrogen mass in the long run.", type: "self", solution: "$x = 15 - 15\\mathrm{e}^{-t/20}$. Approaches asymptote $x = 15\\text{ g}$ in the long run." }
    ]
  },

  // ==================== DHS 2026 PAPER 2: STATISTICS (Q6 - Q11) ====================
  {
    id: "DHS-2026-P2-Q6", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q6", category: "stats",
    topics: ["Probability", "Conditional Probability"],
    stem: "$90$ ornaments:<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>White</th><th>Blue</th><th>Pink</th><th>Green</th></tr><tr><th>Star</th><td>12</td><td>6</td><td>9</td><td>13</td></tr><tr><th>Diamond</th><td>2</td><td>3</td><td>7</td><td>10</td></tr><tr><th>Moon</th><td>4</td><td>5</td><td>11</td><td>8</td></tr></table></div>Tom chooses $2$ items at random.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Given neither is green, find probability both are either white or have a moon design (or both).", type: "auto", mode: "number", answer: "561/1711", placeholder: "Exact or 3 s.f.", solution: "Non-green $= 59$; white-or-moon (non-green) $= 34$. $\\frac{\\binom{34}{2}}{\\binom{59}{2}} = \\frac{561}{1711} \\approx 0.328$." },
      { label: "(b)", marks: 3, prompt: "Find probability the $2$ items include exactly $1$ blue ornament and exactly $1$ star design.", type: "auto", mode: "number", answer: "524/4005", placeholder: "Exact or 3 s.f.", solution: "$\\frac{8(34) + 6(42)}{\\binom{90}{2}} = \\frac{524}{4005} \\approx 0.131$." },
      { label: "(c)", marks: 2, prompt: "Probability both items are Tom's favourite combination is $\\frac{28}{4005}$. Determine Tom's favourite ornament.", type: "self", solution: "$\\frac{x(x-1)}{90\\times 89} = \\frac{28}{4005} \\implies x = 8$, which is <strong>Green Moon</strong>." }
    ]
  },
  {
    id: "DHS-2026-P2-Q7", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q7", category: "stats",
    topics: ["Permutations & Combinations"],
    stem: "Ten cards spell the word <strong>ASSESSMENT</strong> (4 S, 2 E, 1 A, 1 M, 1 N, 1 T).",
    parts: [
      { label: "(a)", marks: 3, prompt: "Find the number of $4$-card selections without restriction.", type: "auto", mode: "number", exactRequired: true, answer: "42", placeholder: "Integer", solution: "4S: 1; 3S: 5; 2S/2E: $2({}^5C_2)+1 = 21$; all distinct: ${}^6C_4 = 15$. Total $= 42$." },
      { label: "(b)(i)", marks: 2, prompt: "Find row arrangements where A, M, N, T are together.", type: "auto", mode: "number", exactRequired: true, answer: "2520", placeholder: "Integer", solution: "$\\frac{7!}{4!2!} \\times 4! = 2520$." },
      { label: "(b)(ii)", marks: 2, prompt: "Find row arrangements where no two S are together.", type: "auto", mode: "number", exactRequired: true, answer: "12600", placeholder: "Integer", solution: "$\\frac{6!}{2!} \\times {}^7C_4 = 12600$." },
      { label: "(b)(iii)", marks: 2, prompt: "Hence find row arrangements where no two adjacent letters are the same.", type: "auto", mode: "number", exactRequired: true, answer: "10800", placeholder: "Integer", solution: "$12600 - (5! \\times {}^6C_4) = 12600 - 1800 = 10800$." }
    ]
  },
  {
    id: "DHS-2026-P2-Q8", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q8", category: "stats",
    topics: ["Correlation & Regression", "Residuals"],
    stem: "Light meter ($x$) and phone app ($y$) readings:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>289</td><td>329</td><td>395</td><td>420</td><td>508</td></tr><tr><th>$y$</th><td>220</td><td>280</td><td>260</td><td>360</td><td>400</td></tr></table></div>",
    parts: [
      { label: "(a)(i)-(iii)", marks: 4, prompt: "Draw $x = 98 + 0.95y$, explain why residual $a - \\mathrm{f}(b)$ and sum of squares are used, and mark residuals.", type: "self", solution: "Horizontal residuals measure error in estimating $x$ from $y$; squaring prevents positive/negative cancellation." },
      { label: "(a)(iv)", marks: 1, prompt: "Calculate sum of squares of residuals for $x = 98 + 0.95y$.", type: "auto", mode: "number", exactRequired: true, answer: "5349", placeholder: "Exact integer", solution: "$(289-307)^2+(329-364)^2+(395-345)^2+(420-440)^2+(508-478)^2 = 5349$." },
      { label: "(b)(i)", marks: 2, prompt: "Find least squares regression line $x = ay + b$ and correlation coefficient $r$.", type: "auto", mode: "multi-field", fields: [{ label: "a (coeff of y) =", answer: "1.0372" }, { label: "b (const) =", answer: "72.883" }, { label: "r =", answer: "0.90560" }], solution: "$x = 1.04y + 72.9$ (3 s.f.), $r = 0.906$ (3 s.f.)." },
      { label: "(b)(ii)-(iii)", marks: 2, prompt: "Calculate sum of squares of residuals for the regression line and explain if estimate at $y=300$ is reliable.", type: "self", solution: "Sum of squares $\\approx 5172.43 < 5349$. Estimate at $y=300$ is reliable ($y=300$ within $[220,400]$ and $r=0.906$ close to $1$)." }
    ]
  },
  {
    id: "DHS-2026-P2-Q9", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q9", category: "stats",
    topics: ["Normal Distribution", "Linear Combinations"],
    stem: "Large cheese blocks $\\sim \\mathrm{N}(4.25, 0.15^2)$ kg; Standard blocks $\\sim \\mathrm{N}(2.85, 0.2^2)$ kg.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Calculate expected number out of $90$ Standard blocks weighing $> 2.9\\text{ kg}$.", type: "auto", mode: "number", answer: "36.1161", placeholder: "3 s.f.", solution: "$90 \\times \\mathrm{P}(S > 2.9) = 90(0.40129) = 36.1$ (3 s.f.)." },
      { label: "(b)-(c)", marks: 4, prompt: "Find probability total mass of $10$ Large differs by $< 2.3\\text{ kg}$ from $15$ Standard (note assumption in solution).", type: "auto", mode: "number", answer: "0.985498", placeholder: "3 s.f.", solution: "$D \\sim \\mathrm{N}(-0.25, 0.825) \\implies \\mathrm{P}(|D| < 2.3) = 0.985$ (3 s.f.). Assumption: masses of all blocks are independent." },
      { label: "(d)-(e)", marks: 5, prompt: "Large cut into $3$ equal Small blocks, Standard into $2$. Find $\\mathrm{P}(L/3 > S/2)$ (and note wastage effect in solution).", type: "auto", mode: "number", answer: "0.47029", placeholder: "3 s.f.", solution: "$\\frac{L}{3}-\\frac{S}{2} \\sim \\mathrm{N}(-0.008333, 0.0125) \\implies \\mathrm{P}(>0) = 0.470$. With wastage, Large (2 cuts) loses double that of Standard (1 cut), so prob decreases." }
    ]
  },
  {
    id: "DHS-2026-P2-Q10", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q10", category: "stats",
    topics: ["Hypothesis Testing", "Central Limit Theorem"],
    stem: "Claimed average order prep time $< 12\\text{ min}$. Sample of $50$ orders: $\\sum(x-12) = -11.9$, $\\sum(x-12)^2 = 17.36$.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Explain random sample in context.", type: "self", solution: "Each order is selected independently and has an equal chance of being selected." },
      { label: "(b)", marks: 2, prompt: "Find unbiased estimates of population mean and variance.", type: "auto", mode: "multi-field", fields: [{ label: "Mean =", answer: "11.762" }, { label: "Var =", answer: "0.29649" }], solution: "$\\bar{x} = 11.762$, $s^2 = 0.296$ (3 s.f.)." },
      { label: "(c)", marks: 4, prompt: "Carry out hypothesis test on the company's claim and find the $p$-value.", type: "self", solution: "$\\mathrm{H}_0: \\mu=12, \\mathrm{H}_1: \\mu<12$. By CLT, $p = 0.000998 < 0.05 \\implies$ reject $\\mathrm{H}_0$, strong evidence supporting claim." },
      { label: "(d)-(e)", marks: 5, prompt: "New sample of $80$ (mean $k$, SD $2.3$) does not support claim at $5\\%$: find range of $k$ (2 d.p.); explain why invalid for $n=12$ and state needed assumption.", type: "self", solution: "$s^2=\\frac{80}{79}(2.3^2) \\implies k > 11.57$. For $n=12$, CLT does not apply so we must assume population prep time is normally distributed." }
    ]
  },
  {
    id: "DHS-2026-P2-Q11", year: 2026, school: "DHS", paper: "2026 Prelim Paper 2", qNum: "Q11", category: "stats",
    topics: ["Discrete Random Variables", "Binomial Distribution", "Central Limit Theorem"],
    stem: "Bag has 1 blue, 1 red, 1 green marble drawn with replacement; $X =$ draws needed for any colour to appear a second time.",
    parts: [
      { label: "(a)(i)", marks: 2, prompt: "Show $\\mathrm{P}(X=4) = \\frac{2}{9}$ and find the probability distribution of $X$.", type: "self", solution: "$\\mathrm{P}(X=2)=\\frac{1}{3}, \\mathrm{P}(X=3)=\\frac{4}{9}, \\mathrm{P}(X=4)=\\frac{2}{9}$." },
      { label: "(a)(ii)", marks: 2, prompt: "Find exact $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.", type: "auto", mode: "multi-field", fields: [{ label: "E(X) =", answer: "26/9", exactRequired: true }, { label: "Var(X) =", answer: "44/81", exactRequired: true }], solution: "$\\mathrm{E}(X) = \\frac{26}{9}$, $\\mathrm{Var}(X) = \\frac{80}{9} - \\left(\\frac{26}{9}\\right)^2 = \\frac{44}{81}$." },
      { label: "(b)", marks: 1, prompt: "Box of $25$ ($40\\%$ blue). Find probability a box has fewer blue than non-blue marbles.", type: "auto", mode: "number", answer: "0.84623", placeholder: "3 s.f.", solution: "$Y\\sim\\mathrm{B}(25,0.4) \\implies \\mathrm{P}(Y\\le 12) = 0.846$." },
      { label: "(c)", marks: 2, prompt: "John buys $5$ boxes. Find probability at least $3$ contain fewer blue than non-blue.", type: "auto", mode: "number", answer: "0.97151", placeholder: "3 s.f.", solution: "$W\\sim\\mathrm{B}(5,0.84623) \\implies \\mathrm{P}(W\\ge 3) = 0.972$." },
      { label: "(d)", marks: 2, prompt: "Find probability $5$ boxes contain no more than $50$ blue marbles in total.", type: "auto", mode: "number", answer: "0.53875", placeholder: "3 s.f.", solution: "$V\\sim\\mathrm{B}(125,0.4) \\implies \\mathrm{P}(V\\le 50) = 0.539$." },
      { label: "(e)", marks: 3, prompt: "Sample of $30$ boxes: using approximate distribution, find probability mean blue marbles per box is between $7$ and $11$.", type: "auto", mode: "number", answer: "0.98667", placeholder: "3 s.f.", solution: "By CLT, $\\bar{Y}\\sim\\mathrm{N}(10, \\frac{6}{30}) \\implies \\mathrm{P}(7 < \\bar{Y} < 11) = 0.987$." }
    ]
  }
]);