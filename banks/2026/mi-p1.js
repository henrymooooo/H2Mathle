window.registerQuestions([
  {
    id: "MI-2026-P1-Q1",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["System of Linear Equations"],
    stem: "Priya intends to buy $5$ jars of strawberry jam, $4$ bottles of honey and $6$ cans of sardines. She will have to pay SGD $59.80$ in total if she buys them at their usual retail prices. However, two supermarkets are each running their own promotions.<br>At Supermarket $A$, there is a $25\\%$ discount for each jar of strawberry jam, and for every $3$ bottles of honey purchased, one additional bottle is given free of charge. Priya can also redeem an SGD $8$ voucher at Supermarket $A$ which would bring her total bill to SGD $41.05$.<br>At Supermarket $B$, there is a $40\\%$ discount for each jar of strawberry jam while $3$ bottles of honey are sold for the price of $2$ bottles at the usual price. Each can of sardines is also $20$ cents cheaper than its usual retail price. Priya notes that shopping at Supermarket $B$ would cost her SGD $44.70$ in total.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "If both supermarkets price all items at their usual retail prices before promotions, find the usual retail price (in dollars) of each jar of strawberry jam, each bottle of honey and each can of sardines.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Jam (SGD) =", answer: "4.20", dp: 2, placeholder: "Price in dollars" },
          { label: "Honey (SGD) =", answer: "5.50", dp: 2, placeholder: "Price in dollars" },
          { label: "Sardines (SGD) =", answer: "2.80", dp: 2, placeholder: "Price in dollars" }
        ],
        solution: "Let $x$, $y$ and $z$ be the usual retail prices (in dollars) of each jar of strawberry jam, bottle of honey and can of sardines respectively.<br>$5x + 4y + 6z = 59.80$ --- (1)<br>Supermarket $A$: $5(0.75x) + 3y + 6z - 8 = 41.05 \\implies 3.75x + 3y + 6z = 49.05$ --- (2)<br>Supermarket $B$: $5(0.6x) + (2+1)y + 6(z - 0.2) = 44.70 \\implies 3x + 3y + 6z = 45.90$ --- (3)<br>Solving using GC: $x = 4.20$, $y = 5.50$, $z = 2.80$ (SGD $4.20$, SGD $5.50$ and SGD $2.80$)."
      }
    ]
  },
  {
    id: "MI-2026-P1-Q2",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Summation", "Series Convergence"],
    stem: "It is given that $$\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = 1 - \\frac{1}{n+1}.$$",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Write out the first three terms and the last term of $\\sum_{r=1}^{n} \\frac{1}{r(r+1)}$. Hence, verify the given result for $n = 4$.",
        type: "self",
        solution: "First three terms and last term: $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\dots + \\frac{1}{n(n+1)}$.<br>For $n = 4$: $\\text{LHS} = \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} = \\frac{4}{5}$, and $\\text{RHS} = 1 - \\frac{1}{4+1} = \\frac{4}{5}$ (verified)."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Find $\\sum_{r=5}^{N} \\frac{1}{r(r+1)}$ for integers $N \\ge 5$.",
        type: "auto",
        mode: "expr",
        vars: { N: [5, 7, 10] },
        answer: "1/5 - 1/(N+1)",
        placeholder: "Expression in terms of N",
        solution: "$$\\sum_{r=5}^{N}\\frac{1}{r(r+1)} = \\sum_{r=1}^{N}\\frac{1}{r(r+1)} - \\sum_{r=1}^{4}\\frac{1}{r(r+1)} = \\left(1 - \\frac{1}{N+1}\\right) - \\frac{4}{5} = \\frac{1}{5} - \\frac{1}{N+1}.$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Explain why the series in part (ii) is convergent and state the value of $\\sum_{r=5}^{\\infty} \\frac{1}{r(r+1)}$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "1/5",
        placeholder: "Exact sum to infinity",
        solution: "As $N$ → $\\infty$, $\\frac{1}{N+1}$ → $0$, so $\\sum_{r=5}^{N}\\frac{1}{r(r+1)}$ → $\\frac{1}{5}$. Hence the series is convergent with sum to infinity $\\frac{1}{5}$."
      }
    ]
  },
  {
    id: "MI-2026-P1-Q3",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Complex Numbers", "Polynomial Roots"],
    stem: "Answer both parts.",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "One of the roots of the equation $z^3 + 3\\mathrm{i}z^2 + 6z + 8\\mathrm{i} = 0$ is $z = -\\mathrm{i}$. Find the other roots of the equation.",
        type: "auto",
        mode: "complex-list",
        answer: ["2i", "-4i"],
        placeholder: "Separate complex roots with a comma",
        solution: "Factorising $(z + \\mathrm{i})$ out gives $z^3 + 3\\mathrm{i}z^2 + 6z + 8\\mathrm{i} = (z + \\mathrm{i})(z^2 + 2\\mathrm{i}z + 8) = 0$.<br>$$z = \\frac{-2\\mathrm{i} \\pm \\sqrt{(2\\mathrm{i})^2 - 4(1)(8)}}{2} = \\frac{-2\\mathrm{i} \\pm \\sqrt{-36}}{2} = \\frac{-2\\mathrm{i} \\pm 6\\mathrm{i}}{2} = 2\\mathrm{i} \\text{ or } -4\\mathrm{i}.$$"
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Hence, find the roots of the equation $$\\frac{1}{w^3} + \\frac{3\\mathrm{i}}{w^2} + \\frac{6}{w} + 8\\mathrm{i} = 0.$$",
        type: "auto",
        mode: "complex-list",
        answer: ["i", "-i/2", "i/4"],
        placeholder: "Separate complex roots with a comma",
        solution: "Let $z = \\frac{1}{w}$. Then $\\frac{1}{w} = -\\mathrm{i},\\, 2\\mathrm{i},\\, -4\\mathrm{i}$, giving $w = \\mathrm{i},\\, -\\frac{\\mathrm{i}}{2},\\, \\frac{\\mathrm{i}}{4}$."
      }
    ]
  },
  {
    id: "MI-2026-P1-Q4",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Maclaurin Series", "Implicit Differentiation"],
    stem: "It is given that $\\mathrm{e}^{y-1} + xy = \\cos x - x^2$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $$\\mathrm{e}^{y-1}\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\mathrm{e}^{y-1}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + x\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\cos x - 2.$$",
        type: "self",
        solution: "Differentiate implicitly: $\\mathrm{e}^{y-1}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y = -\\sin x - 2x$.<br>Differentiate implicitly again: $$\\mathrm{e}^{y-1}\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\mathrm{e}^{y-1}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + x\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\cos x - 2,$$ which simplifies to the given equation (shown)."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Hence, find the Maclaurin series for $y$ up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.2, 0.5, -0.3] },
        answer: "1 - x - x^2",
        placeholder: "Polynomial in x",
        solution: "At $x = 0$: $\\mathrm{e}^{y-1} = 1 \\implies y = 1$.<br>From first derivative: $1\\cdot\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 1 = 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -1$.<br>From (a): $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + (-1)^2 + 2(-1) = -1 - 2 \\implies \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -2$.<br>Hence $y = 1 - x + \\frac{-2}{2!}x^2 + \\dots = 1 - x - x^2$."
      }
    ]
  },
  {
    id: "MI-2026-P1-Q5",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Recurrence Relations", "Sequences and Series"],
    stem: "A sequence $u_1, u_2, u_3, \\dots$ is defined by the recurrence relation $$u_1 = k, \\quad u_{n+1} = 2u_n - 3$$ where $k \\in \\mathbb{Z}$ and $k \\ge 3$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Describe how the sequence behaves when $k = 3$.",
        type: "self",
        solution: "The sequence is constant with every term equal to $3$."
      },
      {
        label: "(a)(ii)",
        marks: 1,
        prompt: "Describe how the sequence behaves when $k = 5$.",
        type: "self",
        solution: "The sequence has positive terms that increase without bound (tends to $\\infty$), so it diverges."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find an expression for $u_n$ in terms of $n$ and $k$.",
        type: "auto",
        mode: "expr",
        vars: { n: [1, 2, 4], k: [3, 5, 7] },
        answer: "2^(n-1)*(k - 3) + 3",
        placeholder: "Expression in terms of n and k",
        solution: "$u_2 = 2k - 3$, $u_3 = 2^2 k - 2(3) - 3$, ...,<br>$$u_n = 2^{n-1}k - 3(1 + 2 + 2^2 + \\dots + 2^{n-2}) = 2^{n-1}k - 3\\left(\\frac{2^{n-1} - 1}{2 - 1}\\right) = 2^{n-1}(k - 3) + 3.$$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Explain why $u_n$ is an odd integer for all $n \\ge 2$.",
        type: "self",
        solution: "For $n \\ge 2$, $2^{n-1}(k - 3)$ is even (or directly from $u_n = 2u_{n-1} - 3$, $2u_{n-1}$ is even) and $3$ is odd, so $u_n$ is always odd."
      }
    ]
  },
  {
    id: "MI-2026-P1-Q6",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Applications of Integration", "Area and Volume"],
    diagramSvg: `<svg viewBox="0 0 260 190" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="160" x2="245" y2="160" stroke-width="1.2"/><line x1="40" y1="175" x2="40" y2="12" stroke-width="1.2"/><path d="M 40 160 Q 85 156 125 112 Q 170 128 210 160 Z" fill="rgba(91,155,213,0.22)" stroke="none"/><path d="M 40 160 Q 85 156 125 112 Q 160 72 185 25" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 40 96 Q 90 100 125 112 Q 175 130 210 160" fill="none" stroke="#4a8fe7" stroke-width="2"/><line x1="125" y1="112" x2="125" y2="160" stroke-dasharray="3,3" stroke-width="1"/><text x="125" y="174" text-anchor="middle" stroke="none">1/2</text><text x="210" y="174" text-anchor="middle" stroke="none">1</text><text x="125" y="146" text-anchor="middle" stroke="none" font-style="italic">R</text><text x="190" y="32" stroke="none">y = (4π/3)x²</text><text x="195" y="128" stroke="none">y = cos⁻¹(x)</text><text x="30" y="172" stroke="none" font-style="italic">O</text></svg>`,
    stem: "The curves with equations $y = \\cos^{-1}(x)$ and $y = \\frac{4\\pi}{3}x^2$, where $0 \\le x \\le 1$, intersect at $x = \\frac{1}{2}$. The shaded region $R$ is bounded by the two curves and the $x$-axis, as shown in the diagram.",
    parts: [
      {
        label: "(i)",
        marks: 5,
        prompt: "Find <strong>exactly</strong> the area of the region $R$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "sqrt(3)/2 - pi/9",
        placeholder: "Exact value in surd and pi",
        solution: "Intersection is $\\left(\\frac{1}{2}, \\frac{\\pi}{3}\\right)$. Integrating with respect to $y$:<br>$$\\text{Area} = \\int_0^{\\pi/3} \\left(\\cos y - \\sqrt{\\frac{3y}{4\\pi}}\\right)\\mathrm{d}y = [\\sin y]_0^{\\pi/3} - \\sqrt{\\frac{3}{4\\pi}}\\left[\\frac{2}{3}y^{3/2}\\right]_0^{\\pi/3} = \\frac{\\sqrt{3}}{2} - \\frac{\\pi}{9} \\text{ units}^2.$$"
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "Find <strong>exactly</strong> the volume generated when $R$ is rotated $2\\pi$ radians about the $y$-axis.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "sqrt(3)*pi/8 + pi^2/8",
        placeholder: "Exact value in surd and pi",
        solution: "$$V_y = \\pi\\int_0^{\\pi/3}\\left(\\cos^2 y - \\frac{3y}{4\\pi}\\right)\\mathrm{d}y = \\frac{\\pi}{2}\\int_0^{\\pi/3}(\\cos 2y + 1)\\,\\mathrm{d}y - \\frac{3}{4}\\left[\\frac{y^2}{2}\\right]_0^{\\pi/3}$$ $$= \\frac{\\pi}{2}\\left(\\frac{\\sqrt{3}}{4} + \\frac{\\pi}{3}\\right) - \\frac{\\pi^2}{24} = \\frac{\\sqrt{3}\\pi}{8} + \\frac{\\pi^2}{8} \\text{ units}^3.$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Find the volume generated when $R$ is rotated through $2\\pi$ radians about the $x$-axis, giving your answer correct to $2$ decimal places.",
        type: "auto",
        mode: "number",
        dp: 2,
        answer: "1.17946",
        placeholder: "Value to 2 d.p.",
        solution: "$$V_x = \\pi\\int_0^{1/2}\\left(\\frac{4\\pi}{3}x^2\\right)^2\\mathrm{d}x + \\pi\\int_{1/2}^{1}(\\cos^{-1} x)^2\\,\\mathrm{d}x = 1.18 \\text{ units}^3 \\text{ (2 d.p.).}$$"
      }
    ]
  },
  {
    id: "MI-2026-P1-Q7",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Integration Techniques", "Integration by Substitution", "Integration by Parts"],
    stem: "Find the following indefinite integrals.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $$\\int \\frac{\\sin 2x}{(1 + \\cos^2 x)^2}\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.3, 0.8, 1.2],
        answer: "1/(1 + cos(x)^2)",
        placeholder: "Antiderivative in x (include + c)",
        solution: "Notice $\\frac{\\mathrm{d}}{\\mathrm{d}x}(1 + \\cos^2 x) = -2\\sin x\\cos x = -\\sin 2x$.<br>$$\\int \\frac{\\sin 2x}{(1+\\cos^2 x)^2}\\,\\mathrm{d}x = -\\int (-\\sin 2x)(1+\\cos^2 x)^{-2}\\,\\mathrm{d}x = \\frac{1}{1+\\cos^2 x} + c.$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Using the substitution $u = \\sqrt{x}$, find $$\\int \\frac{1}{\\sqrt{x}(1 + 2x)}\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.5, 1.5, 3],
        answer: "sqrt(2)*atan(sqrt(2*x))",
        placeholder: "Antiderivative in x (include + c)",
        solution: "Let $u = \\sqrt{x} \\implies x = u^2$, $\\mathrm{d}x = 2u\\,\\mathrm{d}u$.<br>$$\\int \\frac{1}{u(1+2u^2)}2u\\,\\mathrm{d}u = \\int \\frac{2}{1+2u^2}\\,\\mathrm{d}u = \\int \\frac{1}{(1/\\sqrt{2})^2 + u^2}\\,\\mathrm{d}u = \\sqrt{2}\\tan^{-1}(\\sqrt{2}u) + c = \\sqrt{2}\\tan^{-1}(\\sqrt{2x}) + c.$$"
      },
      {
        label: "(c)(i)",
        marks: 2,
        prompt: "Use integration by parts to find $$\\int x\\ln(2x)\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [1, 2, 4],
        answer: "(x^2/2)*ln(2*x) - x^2/4",
        placeholder: "Antiderivative in x (include + c)",
        solution: "With $u = \\ln(2x)$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = x$:<br>$$\\int x\\ln(2x)\\,\\mathrm{d}x = \\frac{x^2}{2}\\ln(2x) - \\int \\frac{x^2}{2}\\cdot\\frac{1}{x}\\,\\mathrm{d}x = \\frac{x^2}{2}\\ln(2x) - \\frac{x^2}{4} + c.$$"
      },
      {
        label: "(c)(ii)",
        marks: 3,
        prompt: "Hence, or otherwise, find $$\\int x(\\ln(2x))^2\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [1, 2, 4],
        answer: "(x^2/2)*(ln(2*x))^2 - (x^2/2)*ln(2*x) + x^2/4",
        placeholder: "Antiderivative in x (include + c)",
        solution: "Integrate by parts with $u = (\\ln(2x))^2$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = x$:<br>$$\\int x(\\ln(2x))^2\\,\\mathrm{d}x = \\frac{x^2}{2}(\\ln(2x))^2 - \\int x\\ln(2x)\\,\\mathrm{d}x = \\frac{x^2}{2}(\\ln(2x))^2 - \\frac{x^2}{2}\\ln(2x) + \\frac{x^2}{4} + c.$$"
      }
    ]
  },
  {
    id: "MI-2026-P1-Q8",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["3D Vectors", "Lines", "Planes"],
    stem: "The line $l$ has equation $\\mathbf{r} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix} + \\lambda\\begin{pmatrix} 1 \\\\ 3 \\\\ -2 \\end{pmatrix}$, where $\\lambda$ is a parameter. The point $P$ has coordinates $(-2, 0, 1)$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find the coordinates of the point $N$ on $l$ where the length of $PN$ is as small as possible.",
        type: "auto",
        mode: "tuple",
        exactRequired: true,
        answer: ["12/7", "-6/7", "11/7"],
        placeholder: "Coordinates (x, y, z)",
        solution: "$PN = \\begin{pmatrix} 4 + \\lambda \\\\ 3\\lambda \\\\ -2\\lambda \\end{pmatrix}$. Since $PN \\perp l$: $(4 + \\lambda)(1) + (3\\lambda)(3) + (-2\\lambda)(-2) = 0 \\implies 14\\lambda = -4 \\implies \\lambda = -\\frac{2}{7}$.<br>Substituting back gives $N\\left(\\frac{12}{7}, -\\frac{6}{7}, \\frac{11}{7}\\right)$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "The plane $\\pi_1$ has equation $\\mathbf{r} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 0 \\end{pmatrix} + \\alpha\\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} + \\beta\\begin{pmatrix} -1 \\\\ 0 \\\\ 3 \\end{pmatrix}$. Find the acute angle between $l$ and $\\pi_1$ (in degrees, to 1 d.p.).",
        type: "auto",
        mode: "number",
        dp: 1,
        answer: "20.9248",
        placeholder: "Angle in degrees (1 d.p.)",
        solution: "Normal to $\\pi_1$: $\\mathbf{n} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} \\times \\begin{pmatrix} -1 \\\\ 0 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ -4 \\\\ 2 \\end{pmatrix}$.<br>$$\\theta = \\sin^{-1}\\left(\\frac{|1(6) + 3(-4) + (-2)(2)|}{\\sqrt{14}\\sqrt{56}}\\right) = \\sin^{-1}\\left(\\frac{10}{28}\\right) = 20.9^\\circ \\text{ (1 d.p.).}$$"
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "It is given that the plane $\\pi_2$ with equation $x - 2y + az = 2$ does not meet the line $l$. Show that $a = -\\frac{5}{2}$.",
        type: "self",
        solution: "Since $l$ is parallel to $\\pi_2$, $\\begin{pmatrix} 1 \\\\ -2 \\\\ a \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 3 \\\\ -2 \\end{pmatrix} = 0 \\implies 1 - 6 - 2a = 0 \\implies a = -\\frac{5}{2}$ (shown)."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Find the perpendicular distance between $l$ and $\\pi_2$.",
        type: "auto",
        mode: "number",
        answer: "5/(3*sqrt(5))",
        placeholder: "Exact value or 3 s.f.",
        solution: "Take $A(2, 0, 1)$ on $l$ and $B(2, 0, 0)$ on $\\pi_2$, so $BA = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$.<br>$$\\text{Distance} = \\frac{\\left|\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ -2 \\\\ -5/2 \\end{pmatrix}\\right|}{\\sqrt{1 + 4 + 25/4}} = \\frac{5/2}{\\sqrt{45/4}} = \\frac{5}{3\\sqrt{5}} = 0.745 \\text{ (3 s.f.).}$$"
      },
      {
        label: "(v)",
        marks: 3,
        prompt: "Find a cartesian equation of the line where both planes $\\pi_1$ and $\\pi_2$ meet.",
        type: "self",
        solution: "$\\pi_1$: $6x - 4y + 2z = 16$; $\\pi_2$: $x - 2y - \\frac{5}{2}z = 2$.<br>Solving gives $x = 3 - \\frac{7}{4}z$, $y = \\frac{1}{2} - \\frac{17}{8}z$.<br>Cartesian equation: $$\\frac{x - 3}{-14} = \\frac{y - 0.5}{-17} = \\frac{z}{8} \\quad \\left(\\text{or } \\frac{x - 3}{-1.75} = \\frac{y - 0.5}{-2.125} = z\\right).$$"
      }
    ]
  },
  {
    id: "MI-2026-P1-Q9",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Functions", "Inverse Functions", "Composite Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $$\\mathrm{f} : x \\mapsto \\frac{ax + 2}{x - 1}, \\quad x \\in \\mathbb{R},\\, x \\ne 1,$$ where $a$ is a positive constant.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$, stating the equations of any asymptotes and the coordinates of any points where the curve crosses the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 185" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="100" x2="245" y2="100" stroke-width="1.2"/><line x1="115" y1="178" x2="115" y2="12" stroke-width="1.2"/><line x1="145" y1="15" x2="145" y2="175" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="18" y1="68" x2="242" y2="68" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 20 74 Q 80 78 100 100 Q 115 118 128 140 Q 138 158 141 174" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 150 18 Q 156 54 185 62 Q 215 65 242 66" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="95" y="93" text-anchor="end" stroke="none">(−2/a, 0)</text><text x="110" y="128" text-anchor="end" stroke="none">(0, −2)</text><text x="150" y="174" stroke="none">x = 1</text><text x="220" y="62" stroke="none">y = a</text></svg>`,
        solution: "Vertical asymptote: $x = 1$; horizontal asymptote: $y = a$.<br>Axial intercepts: $\\left(-\\frac{2}{a}, 0\\right)$ and $(0, -2)$."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Explain why $\\mathrm{f}$ has an inverse.",
        type: "self",
        solution: "Any horizontal line $y = k$ ($k \\in \\mathbb{R}$) intersects the graph of $y = \\mathrm{f}(x)$ at most once, so $\\mathrm{f}$ is one-one and has an inverse."
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "Define $\\mathrm{f}^{-1}$ in a similar form and state its range.",
        type: "self",
        solution: "From $y = \\frac{ax+2}{x-1} \\implies x(y-a) = y + 2 \\implies x = \\frac{y+2}{y-a}$.<br>$$\\mathrm{f}^{-1} : x \\mapsto \\frac{x+2}{x-a}, \\quad x \\in \\mathbb{R},\\, x \\ne a.$$<br>Range: $\\mathrm{R}_{\\mathrm{f}^{-1}} = \\mathrm{D}_{\\mathrm{f}} = \\mathbb{R} \\setminus \\{1\\}$."
      },
      {
        label: "(iv)",
        marks: 2,
        prompt: "Another function $\\mathrm{g}$ is defined by $\\mathrm{g} : x \\mapsto \\sin x + 1$, where $x \\in \\mathbb{R},\\, 0 < x < \\pi$. Find the range of $\\mathrm{g}$ and use it to explain why the composite function $\\mathrm{fg}$ exists.",
        type: "self",
        solution: "$\\mathrm{R}_{\\mathrm{g}} = (1, 2]$. Since $\\mathrm{R}_{\\mathrm{g}} = (1, 2] \\subseteq \\mathbb{R} \\setminus \\{1\\} = \\mathrm{D}_{\\mathrm{f}}$, $\\mathrm{fg}$ exists."
      },
      {
        label: "(v)",
        marks: 2,
        prompt: "Find the range of $\\mathrm{fg}$ in terms of $a$ and explain why $\\mathrm{fg}(x) > 2a + 1$ for all $0 < x < \\pi$.",
        type: "self",
        solution: "Mapping $(1, 2]$ through $\\mathrm{f}$: at $x = 2$, $\\mathrm{f}(2) = \\frac{2a+2}{1} = 2a + 2$, and as $x$ → $1^+$, $\\mathrm{f}(x)$ → $\\infty$.<br>Thus $\\mathrm{R}_{\\mathrm{fg}} = [2a + 2, \\infty)$. Since $\\mathrm{fg}(x) \\ge 2a + 2 > 2a + 1$, the inequality holds for all $0 < x < \\pi$."
      }
    ]
  },
  {
    id: "MI-2026-P1-Q10",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Parametric Equations", "Normals", "Curve Sketching"],
    stem: "A curve $C$ has parametric equations $$x = 3t^2, \\quad y = 2t^3 - 6t, \\quad \\text{for } t \\in \\mathbb{R}.$$",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $t$.",
        type: "auto",
        mode: "expr",
        vars: { t: [1, 2, -3] },
        answer: "(t^2 - 1)/t",
        placeholder: "Expression in terms of t",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 6t$, $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 6t^2 - 6 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{6t^2 - 6}{6t} = \\frac{t^2 - 1}{t}$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Find algebraically the coordinates of all stationary points of $C$.",
        type: "self",
        solution: "Set $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies t^2 - 1 = 0 \\implies t = 1$ or $t = -1$.<br>When $t = 1$: $(3, -4)$. When $t = -1$: $(3, 4)$."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Sketch $C$, indicating the coordinates of any stationary points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 170" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="85" x2="245" y2="85" stroke-width="1.2"/><line x1="45" y1="160" x2="45" y2="12" stroke-width="1.2"/><path d="M 195 25 Q 155 95 110 120 Q 52 140 45 85 Q 52 30 110 50 Q 155 75 195 145" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="88" cy="46" r="2.6" fill="#2c2925"/><text x="88" y="36" text-anchor="middle" stroke="none">(3, 4)</text><circle cx="88" cy="124" r="2.6" fill="#2c2925"/><text x="88" y="140" text-anchor="middle" stroke="none">(3, −4)</text><text x="38" y="96" text-anchor="end" stroke="none">(0, 0)</text><text x="165" y="78" stroke="none">(9, 0)</text></svg>`,
        solution: "A symmetric loop starting at $(0, 0)$ with stationary points at $(3, 4)$ and $(3, -4)$, self-intersecting at $(9, 0)$."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "The point $P$ on $C$ has parameter $p$. Show that the equation of the normal to $C$ at $P$ can be written in the form $px + (p^2 - 1)y = 2p^5 - 5p^3 + 6p$.",
        type: "self",
        solution: "At $P(3p^2, 2p^3 - 6p)$, gradient of normal is $-\\frac{p}{p^2 - 1}$.<br>$$y - (2p^3 - 6p) = -\\frac{p}{p^2 - 1}(x - 3p^2) \\implies (p^2 - 1)y - (2p^5 - 8p^3 + 6p) = -px + 3p^3$$ $$\\implies px + (p^2 - 1)y = 2p^5 - 5p^3 + 6p \\text{ (shown).}$$"
      },
      {
        label: "(v)",
        marks: 3,
        prompt: "If the normal to $C$ at $P$ passes through the point $(18, 0)$, find all possible coordinates of the point $P$.",
        type: "self",
        solution: "Substitute $(18, 0)$: $18p = 2p^5 - 5p^3 + 6p \\implies p(2p^4 - 5p^2 - 12) = 0 \\implies p(2p^2 + 3)(p^2 - 4) = 0$.<br>So $p = 0, 2, -2$, giving possible coordinates $(0, 0)$, $(12, 4)$ and $(12, -4)$."
      }
    ]
  },
  {
    id: "MI-2026-P1-Q11",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "A medical researcher is comparing two targeted therapies for a specific type of benign tumour. Therapy $A$ is an established treatment that has been in use for many years and proven to have minimal side effects. The volume of the tumour, $V\\text{ cm}^3$, after $t$ months of treatment under Therapy $A$ is modelled by the differential equation: $$\\frac{\\mathrm{d}V}{\\mathrm{d}t} = t(V^2 - 10V + 16) \\quad \\text{for } t \\ge 0.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that the given differential equation can be written in the form $\\frac{\\mathrm{d}V}{\\mathrm{d}t} = t((V - a)^2 - b^2)$, where $a$ and $b$ are positive constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "5", exactRequired: true, placeholder: "Positive constant" },
          { label: "b =", answer: "3", exactRequired: true, placeholder: "Positive constant" }
        ],
        solution: "$V^2 - 10V + 16 = (V - 5)^2 - 9 = (V - 5)^2 - 3^2$, so $a = 5$ and $b = 3$."
      },
      {
        label: "(b)",
        marks: 7,
        prompt: "Given that the initial volume of the tumour at the start of the treatment is $4\\text{ cm}^3$, solve the differential equation to show that $$V = \\frac{4\\mathrm{e}^{3t^2} + 8}{2\\mathrm{e}^{3t^2} + 1}.$$",
        type: "self",
        solution: "Separating variables: $$\\int \\frac{1}{(V-5)^2 - 3^2}\\,\\mathrm{d}V = \\int t\\,\\mathrm{d}t \\implies \\frac{1}{6}\\ln\\left|\\frac{V-8}{V-2}\\right| = \\frac{t^2}{2} + C \\implies \\frac{V-8}{V-2} = A\\mathrm{e}^{3t^2}.$$<br>At $t = 0, V = 4$: $\\frac{4-8}{4-2} = A \\implies A = -2$.<br>$V - 8 = -2(V - 2)\\mathrm{e}^{3t^2} \\implies V(2\\mathrm{e}^{3t^2} + 1) = 4\\mathrm{e}^{3t^2} + 8 \\implies V = \\frac{4\\mathrm{e}^{3t^2} + 8}{2\\mathrm{e}^{3t^2} + 1}$ (shown)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find, correct to $4$ decimal places, the time taken for the tumour to shrink to $3\\text{ cm}^3$ under Therapy $A$. Explain what happens to the volume of the tumour in the long run according to this model.",
        type: "auto",
        mode: "number",
        dp: 4,
        answer: "0.552657",
        placeholder: "Time in months (4 d.p.)",
        solution: "When $V = 3$: $3(2\\mathrm{e}^{3t^2} + 1) = 4\\mathrm{e}^{3t^2} + 8 \\implies 2\\mathrm{e}^{3t^2} = 5 \\implies t = \\sqrt{\\frac{\\ln 2.5}{3}} = 0.5527$ months (4 d.p.).<br>Long run: $V = \\frac{4 + 8\\mathrm{e}^{-3t^2}}{2 + \\mathrm{e}^{-3t^2}}$ → $\\frac{4}{2} = 2$ as $t$ → $\\infty$, so the tumour shrinks and approaches $2\\text{ cm}^3$."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Therapy $B$ is a new experimental therapy which is highly aggressive. When tested on a similar tumour of the same initial volume, it was found that in the long run, Therapy $B$ could shrink the volume of the tumour to a size smaller than that of Therapy $A$. Suggest one reason why a patient might still choose Therapy $A$ given the context of both therapies.",
        type: "self",
        solution: "Since the tumour is benign, a patient might prefer Therapy $A$ because it is an established treatment with proven minimal side effects, avoiding the high risks and aggressive side effects of experimental Therapy $B$."
      }
    ]
  }
]);
