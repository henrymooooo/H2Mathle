window.registerQuestions([
  {
    id: "YIJC-2026-P1-Q1",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities", "Differentiation"],
    stem: "A function $\\mathrm{f}$ is defined by $\\mathrm{f}(x) = ax^3 + bx^2 + cx + d$. The graph of $y = \\mathrm{f}(x)$ has turning points at $(-1, 4)$ and $\\left(\\frac{1}{2}, -\\frac{11}{4}\\right)$.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the values of $a, b, c$ and $d$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "4", exactRequired: true, placeholder: "Integer" },
          { label: "b =", answer: "3", exactRequired: true, placeholder: "Integer" },
          { label: "c =", answer: "-6", exactRequired: true, placeholder: "Integer" },
          { label: "d =", answer: "-1", exactRequired: true, placeholder: "Integer" }
        ],
        solution: "Point $(-1, 4)$: $-a + b - c + d = 4$.<br>Point $(\\frac{1}{2}, -\\frac{11}{4})$: $\\frac{a}{8} + \\frac{b}{4} + \\frac{c}{2} + d = -\\frac{11}{4}$.<br>Turning points ($\mathrm{f}'(x) = 3ax^2 + 2bx + c$): $3a - 2b + c = 0$ and $\\frac{3a}{4} + b + c = 0$.<br>Solving with GC gives $a = 4, b = 3, c = -6, d = -1$."
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q2",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "A geometric series has first term $a$ and common ratio $r$. The sum to infinity of the series is $16$ and its fourth term is $\\frac{3}{16}$.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Show that $r$ satisfies the equation $256r^4 - 256r^3 + 3 = 0$. Given that $|r| < 0.5$, solve this equation and hence show that $a = 12$.",
        type: "self",
        solution: "$\\frac{a}{1-r} = 16$ and $ar^3 = \\frac{3}{16}$. Dividing: $r^3(1-r) = \\frac{3}{256} \\implies 256r^4 - 256r^3 + 3 = 0$.<br>Using GC, $r = 0.25$ or $0.988$ (rejected as $|r| < 0.5$). Sub $r = 0.25$: $\\frac{a}{1-0.25} = 16 \\implies a = 12$ (shown)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the <strong>exact</strong> value of the sum to infinity of the even-numbered terms of the geometric series.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "3.2",
        placeholder: "Exact value",
        solution: "Even-numbered terms have first term $ar = 12(0.25) = 3$ and common ratio $r^2 = 0.0625$.<br>$$S_\\infty = \\frac{3}{1 - 0.0625} = 3.2 = \\frac{16}{5}.$$"
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q3",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Functions", "Integration"],
    stem: "It is given that<br>$$\\mathrm{f}(x) = \\begin{cases} \\frac{10}{9 - 4x^2} & \\text{for } -1 \\le x < 1, \\\\ 2 & \\text{for } 1 \\le x < 3, \\end{cases}$$<br>and that $\\mathrm{f}(x) = \\mathrm{f}(x + 4)$ for all real values of $x$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Evaluate $\\mathrm{f}(-49)$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2",
        placeholder: "Exact value",
        solution: "$\\mathrm{f}(-49) = \\mathrm{f}(-49 + 4\\times 12) = \\mathrm{f}(-1) = \\frac{10}{9 - 4(-1)^2} = 2$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$ for $-2 \\le x \\le 7$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 145" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="120" x2="265" y2="120" stroke-width="1.3"/><line x1="80" y1="132" x2="80" y2="12" stroke-width="1.3"/><line x1="36" y1="75" x2="58" y2="75" stroke="#4a8fe7" stroke-width="2"/><path d="M 58 75 Q 80 108 102 75" fill="none" stroke="#4a8fe7" stroke-width="2"/><line x1="102" y1="75" x2="146" y2="75" stroke="#4a8fe7" stroke-width="2"/><path d="M 146 75 Q 168 108 190 75" fill="none" stroke="#4a8fe7" stroke-width="2"/><line x1="190" y1="75" x2="234" y2="75" stroke="#4a8fe7" stroke-width="2"/><circle cx="36" cy="75" r="2.5" fill="#4a8fe7"/><circle cx="58" cy="75" r="2.3" fill="#4a8fe7"/><circle cx="102" cy="75" r="2.3" fill="#4a8fe7"/><circle cx="146" cy="75" r="2.3" fill="#4a8fe7"/><circle cx="190" cy="75" r="2.3" fill="#4a8fe7"/><circle cx="234" cy="75" r="2.5" fill="#4a8fe7"/><text x="34" y="65" text-anchor="middle" stroke="none">(−2, 2)</text><text x="58" y="65" text-anchor="middle" stroke="none">(−1, 2)</text><text x="102" y="65" text-anchor="middle" stroke="none">(1, 2)</text><text x="146" y="65" text-anchor="middle" stroke="none">(3, 2)</text><text x="190" y="65" text-anchor="middle" stroke="none">(5, 2)</text><text x="234" y="65" text-anchor="middle" stroke="none">(7, 2)</text><text x="72" y="132" stroke="none" font-style="italic">O</text><text x="262" y="132" stroke="none" font-style="italic">x</text><text x="72" y="18" stroke="none" font-style="italic">y</text></svg>`,
        solution: "Continuous periodic graph of period $4$ with closed end points $(-2, 2)$ and $(7, 2)$, flat segments at $y = 2$ on $[-2,-1], [1,3], [5,7]$ and curved dips to $y = \\frac{10}{9}$ at $x = 0$ and $x = 4$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find the <strong>exact</strong> value of $\\int_{4}^{6}\\mathrm{f}(x)\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2 + 5/6*ln(5)",
        placeholder: "Exact value in ln",
        solution: "$$\\int_{4}^{6}\\mathrm{f}(x)\\,\\mathrm{d}x = \\int_{0}^{1}\\frac{10}{9-4x^2}\\,\\mathrm{d}x + 1(2) = 2 + 10\\left[\\frac{1}{12}\\ln\\left|\\frac{3+2x}{3-2x}\\right|\\right]_{0}^{1} = 2 + \\frac{5}{6}\\ln 5.$$"
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q4",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "Consider the equation $|x^2 - 6| = 2x + 7$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find the <strong>exact</strong> solutions of the equation $|x^2 - 6| = 2x + 7$.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["1+sqrt(14)", "1-sqrt(14)", "-1"],
        placeholder: "Exact solutions separated by commas",
        solution: "Case 1: $x^2 - 6 = 2x + 7 \\implies x^2 - 2x - 13 = 0 \\implies x = 1 \\pm \\sqrt{14}$.<br>Case 2: $x^2 - 6 = -(2x + 7) \\implies (x+1)^2 = 0 \\implies x = -1$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch, on the same axes, the graphs of $y = |x^2 - 6|$ and $y = 2x + 7$. Hence solve exactly the inequality $|x^2 - 6| < 2x + 7$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 190" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="155" x2="225" y2="155" stroke-width="1.3"/><line x1="95" y1="175" x2="95" y2="12" stroke-width="1.3"/><path d="M 38 18 Q 52 108 62 155 Q 95 75 128 155 Q 152 80 185 15" fill="none" stroke="#cf5652" stroke-width="1.8"/><line x1="25" y1="168" x2="205" y2="15" stroke="#4a8fe7" stroke-width="1.7"/><text x="85" y="167" stroke="none" font-style="italic">O</text><text x="155" y="42" stroke="none" font-style="italic">y = 2x + 7</text><text x="165" y="112" stroke="none" font-style="italic">y = |x² − 6|</text></svg>`,
        solution: "The line is tangent to the curve at $x = -1$ and intersects at $x = 1 - \\sqrt{14}$ and $x = 1 + \\sqrt{14}$.<br>Hence $1 - \\sqrt{14} < x < -1$ or $-1 < x < 1 + \\sqrt{14}$."
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q5",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "The sum of the first $n$ terms of a sequence $u_1, u_2, u_3, \\dots$ is given by<br>$$\\sum_{r=1}^{n} u_r = a - \\frac{2a}{(n+2)!}, \\quad \\text{where } a \\text{ is a positive constant.}$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $u_n$ in terms of $a$, expressing your answer as a single algebraic fraction.",
        type: "self",
        solution: "$$u_n = S_n - S_{n-1} = \\frac{2a}{(n+1)!} - \\frac{2a}{(n+2)!} = \\frac{2a(n+2) - 2a}{(n+2)!} = \\frac{2a(n+1)}{(n+2)!}.$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Explain why the series $\\sum_{r=1}^{\\infty} u_r$ converges.",
        type: "self",
        solution: "As $n$ increases without bound, $\\frac{1}{(n+2)!}$ approaches $0$, so $\\sum_{r=1}^{n} u_r$ approaches $a$. Hence the series converges (to $a$)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find $\\sum_{r=7}^{\\infty} u_r$ in terms of $a$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { a: [1, 2, 5] },
        answer: "a/20160",
        placeholder: "Expression in terms of a",
        solution: "$$\\sum_{r=7}^{\\infty} u_r = \\sum_{r=1}^{\\infty} u_r - \\sum_{r=1}^{6} u_r = a - \\left(a - \\frac{2a}{8!}\\right) = \\frac{2a}{40320} = \\frac{a}{20160}.$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Find the least value of $n$ for which the sum of the first $n$ terms of the sequence is within $a \\times 10^{-8}$ of its sum to infinity.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "10",
        placeholder: "Integer value",
        solution: "$|S_n - S_\\infty| \\le a \\times 10^{-8} \\implies \\frac{2}{(n+2)!} \\le 10^{-8}$.<br>From GC: $n = 9 \\implies 5.01\\times 10^{-8}$; $n = 10 \\implies 4.18\\times 10^{-9} \\le 10^{-8}$.<br>Least $n = 10$."
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q6",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "Answer both parts (a) and (b).",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Describe a sequence of transformations that transform the graph of $y = \\ln x$ onto the graph of $y = \\ln(ax + b)$, where $a$ and $b$ are positive constants.",
        type: "self",
        solution: "1. Translation of $b$ units in the negative $x$-direction.<br>2. Scaling parallel to the $x$-axis by factor $\\frac{1}{a}$.<br>(Or: scale parallel to $x$-axis by $\\frac{1}{a}$, then translate $\\frac{b}{a}$ units in negative $x$-direction.)"
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "The curve $y = \\mathrm{f}(x)$ cuts the axes at $(0, -3)$ and $(-1, 0)$, and has asymptote $x = 2$. State, if possible, the equations of any asymptotes and coordinates of axial intercepts for $y = \\mathrm{f}(|x|)$.",
        type: "self",
        solution: "Cuts axes at $(0, -3)$. Equations of asymptotes: $x = -2$, $x = 2$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "State, if possible, the equations of any asymptotes and coordinates of axial intercepts for $y = \\frac{1}{\\mathrm{f}(x)}$.",
        type: "self",
        solution: "Cuts axes at $\\left(0, -\\frac{1}{3}\\right)$ and $(2, 0)$. Equation of asymptote: $x = -1$."
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q7",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "A curve has parametric equations $x = \\cos 2\\theta$, $y = \\ln(\\sin 2\\theta)$, $0 < \\theta < \\frac{\\pi}{2}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the curve, stating the equations of the two vertical asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 155" width="210" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="32" x2="200" y2="32" stroke-width="1.3"/><line x1="110" y1="145" x2="110" y2="12" stroke-width="1.3"/><line x1="55" y1="20" x2="55" y2="138" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="165" y1="20" x2="165" y2="138" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 59 135 C 65 55, 85 32, 110 32 C 135 32, 155 55, 161 135" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="55" y="148" text-anchor="middle" stroke="none">x = −1</text><text x="165" y="148" text-anchor="middle" stroke="none">x = 1</text><text x="102" y="45" stroke="none" font-style="italic">O</text></svg>`,
        solution: "Inverted arch passing through $(0, 0)$ with vertical asymptotes $x = -1$ and $x = 1$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "State the equation of the line of symmetry of the curve.",
        type: "self",
        solution: "$$x = 0.$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Given that the gradient of the curve at a point $P$ is between $-1.5$ and $1.5$, find the range of possible values of the $x$-coordinate of $P$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{\\cos 2\\theta}{\\sin^2 2\\theta} = -\\frac{x}{1 - x^2}$.<br>Solving $-1.5 < -\\frac{x}{1-x^2} < 1.5$ for $-1 < x < 1$ via GC gives $-0.721 < x < 0.721$ (3 s.f.)."
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q8",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Differentiation"],
    stem: "A curve has equation $\\frac{1}{x} - \\frac{1}{y} = 3$, where $x < \\frac{1}{3}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{y^2}{x^2}$.",
        type: "self",
        solution: "Differentiating w.r.t. $x$: $-\\frac{1}{x^2} + \\frac{1}{y^2}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{y^2}{x^2}$ (shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Using calculus, find the equation of the tangent to the curve at the point where $x = -1$, giving your answer in the form $y = mx + c$.",
        type: "self",
        solution: "At $x = -1$, $y = -\\frac{1}{4}$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{16}$.<br>Tangent: $y + \\frac{1}{4} = \\frac{1}{16}(x + 1) \\implies y = \\frac{1}{16}x - \\frac{3}{16}$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Given that $y$ increases at a constant rate of $5$ units per second, find the rate of change of $x$ (in units per second) when $y = 1$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "5/16",
        placeholder: "Exact fraction",
        solution: "When $y = 1$, $\\frac{1}{x} - 1 = 3 \\implies x = \\frac{1}{4}$.<br>$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{x^2}{y^2}\\frac{\\mathrm{d}y}{\\mathrm{d}t} = \\frac{(1/4)^2}{1^2}(5) = \\frac{5}{16}\\text{ units/s}.$$"
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q9",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Complex Numbers", "Maclaurin Series"],
    stem: "Answer both parts.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Without using a calculator, solve the equation $z^2 = 9 - 40\\mathrm{i}$, leaving your answers in the form $a + b\\mathrm{i}$, where $a, b \\in \\mathbb{R}$.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["5-4*i", "-5+4*i"],
        placeholder: "Both roots separated by a comma",
        solution: "Let $z = a + b\\mathrm{i}$. Then $a^2 - b^2 = 9$ and $2ab = -40 \\implies b = -\\frac{20}{a}$.<br>$a^4 - 9a^2 - 400 = 0 \\implies a^2 = 25$ ($a^2 = -16$ rejected) $\\implies a = \\pm 5$.<br>Hence $z = 5 - 4\\mathrm{i}$ or $z = -5 + 4\\mathrm{i}$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Find the first six non-zero terms of the Maclaurin series for $\\mathrm{e}^{\\mathrm{i}x}$.",
        type: "self",
        solution: "$$\\mathrm{e}^{\\mathrm{i}x} = 1 + \\mathrm{i}x - \\frac{x^2}{2!} - \\mathrm{i}\\frac{x^3}{3!} + \\frac{x^4}{4!} + \\mathrm{i}\\frac{x^5}{5!} + \\dots$$"
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "By considering the Maclaurin series for $\\cos x$ and $\\sin x$, verify that $\\mathrm{e}^{\\mathrm{i}x} = \\cos x + \\mathrm{i}\\sin x$.",
        type: "self",
        solution: "Grouping real and imaginary terms: $\\left(1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots\\right) + \\mathrm{i}\\left(x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots\\right) = \\cos x + \\mathrm{i}\\sin x$."
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q10",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "It is given that $y = \\mathrm{e}^{\\sin^{-1}(3x)}$, where $-\\frac{1}{3} < x < \\frac{1}{3}$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $(1 - 9x^2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} - 9x\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 9y = 0$.",
        type: "self",
        solution: "$\\sqrt{1-9x^2}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3y$. Differentiating w.r.t. $x$ and multiplying by $\\sqrt{1-9x^2}$ gives $(1-9x^2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} - 9x\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 9y = 0$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "By differentiating the above result, find the Maclaurin series for $y$, up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.05, 0.1, 0.2] },
        answer: "1 + 3*x + 9/2*x^2 + 9*x^3",
        placeholder: "Exact polynomial in x",
        solution: "$(1-9x^2)\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} - 27x\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} - 18\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$.<br>At $x=0$: $y=1, y'=3, y''=9, y'''=54 \\implies y = 1 + 3x + \\frac{9}{2}x^2 + 9x^3 + \\dots$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Using your result in part (b) and the standard series in MF27, obtain the Maclaurin series for $\\sin^{-1}(3x)$, up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.05, 0.1, 0.2] },
        answer: "3*x + 9/2*x^3",
        placeholder: "Exact polynomial in x",
        solution: "$$\\sin^{-1}(3x) \\approx \\ln\\left(1 + 3x + \\frac{9}{2}x^2 + 9x^3\\right) \\approx \\left(3x + \\frac{9}{2}x^2 + 9x^3\\right) - \\frac{1}{2}\\left(3x + \\frac{9}{2}x^2\\right)^2 + \\frac{1}{3}(3x)^3 = 3x + \\frac{9}{2}x^3.$$"
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q11",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Vectors"],
    stem: "The plane $\\pi_1$ has equation $x + 2y + 2z = 14$. The line $l_1$ passes through $A(1, 0, 2)$ and is parallel to $\\mathbf{i} + \\mathbf{j}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the acute angle between $\\pi_1$ and $l_1$ (in degrees).",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "45",
        placeholder: "Angle in degrees",
        solution: "$\\sin\\theta = \\frac{\\left|\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}\\cdot\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\right|}{\\sqrt{9}\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the coordinates of the point of intersection of $l_1$ and $\\pi_1$.",
        type: "auto",
        mode: "tuple",
        exactRequired: true,
        answer: [4, 3, 2],
        placeholder: "(x, y, z)",
        solution: "$(1+\\lambda) + 2(\\lambda) + 2(2) = 14 \\implies \\lambda = 3 \\implies (4, 3, 2)$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find the position vector of the foot of perpendicular from $A$ to $\\pi_1$.",
        type: "self",
        solution: "Line $AF$: $\\mathbf{r} = \\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix} + \\mu\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}$. Sub into $\\pi_1$: $5 + 9\\mu = 14 \\implies \\mu = 1 \\implies \\begin{pmatrix}2\\\\2\\\\4\\end{pmatrix}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The line $l_2$ is the reflection of $l_1$ in $\\pi_1$. Show that $l_2$ is parallel to $-\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}$.",
        type: "self",
        solution: "Reflected point $A' = 2\\begin{pmatrix}2\\\\2\\\\4\\end{pmatrix} - \\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix} = \\begin{pmatrix}3\\\\4\\\\6\\end{pmatrix}$. With $B(4, 3, 2)$, $BA' = \\begin{pmatrix}-1\\\\1\\\\4\\end{pmatrix}$, so $l_2$ is parallel to $-\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}$."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "The plane $\\pi_2$ contains $l_1$ and $l_2$. Find a cartesian equation of $\\pi_2$.",
        type: "self",
        solution: "Normal: $\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\times\\begin{pmatrix}-1\\\\1\\\\4\\end{pmatrix} = 2\\begin{pmatrix}2\\\\-2\\\\1\\end{pmatrix}$. Passing through $(1,0,2)$ gives $2x - 2y + z = 4$."
      },
      {
        label: "(f)",
        marks: 1,
        prompt: "Explain whether $\\pi_1$ and $\\pi_2$ are perpendicular.",
        type: "self",
        solution: "$\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}\\cdot\\begin{pmatrix}2\\\\-2\\\\1\\end{pmatrix} = 2 - 4 + 2 = 0$. Since their normal vectors are perpendicular, $\\pi_1$ and $\\pi_2$ are perpendicular."
      }
    ]
  },
  {
    id: "YIJC-2026-P1-Q12",
    year: 2026,
    school: "YIJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Sequences & Series", "Differential Equations"],
    stem: "Scientists investigate toxin levels $u\\text{ mg}$ in marine fish after $t$ days. In Model A, the rate of change of $u$ is proportional to $a - u$, where $a\\text{ mg}$ is the constant habitat toxin level.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Write down a differential equation for Model A.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}u}{\\mathrm{d}t} = k(a - u).$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "By solving the differential equation in (a), show that $u = a - A\\mathrm{e}^{-kt}$, where $A$ and $k$ are constants.",
        type: "self",
        solution: "$\\int\\frac{1}{a-u}\\,\\mathrm{d}u = \\int k\\,\\mathrm{d}t \\implies -\\ln|a-u| = kt + C \\implies a - u = A\\mathrm{e}^{-kt} \\implies u = a - A\\mathrm{e}^{-kt}$."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "For a particular species with $a = 23$, initial toxin level is $13\\text{ mg}$ and after $15$ days it reaches $19.3\\text{ mg}$. Find the toxin level (in mg) after $30$ days.",
        type: "auto",
        mode: "number",
        answer: "21.631",
        placeholder: "3 s.f.",
        solution: "$t=0, u=13 \\implies A = 10$. $t=15, u=19.3 \\implies \\mathrm{e}^{-15k} = 0.37$.<br>At $t = 30$: $u = 23 - 10(0.37)^2 = 21.631 \\approx 21.6\\text{ mg}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Sketch the graph of $u$ against $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 155" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="130" x2="225" y2="130" stroke-width="1.3"/><line x1="40" y1="142" x2="40" y2="14" stroke-width="1.3"/><line x1="40" y1="35" x2="220" y2="35" stroke-dasharray="4,3" stroke-width="1.1"/><text x="35" y="38" text-anchor="end" stroke="none">23</text><text x="35" y="88" text-anchor="end" stroke="none">13</text><path d="M 40 85 C 75 48, 125 38, 218 36.2" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="40" cy="85" r="2.4" fill="#4a8fe7"/><text x="223" y="142" stroke="none" font-style="italic">t</text><text x="45" y="18" stroke="none" font-style="italic">u</text></svg>`,
        solution: "Starts at $(0, 13)$, rises concave down towards the horizontal asymptote $u = 23$."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Model B uses $u_n = C + (0.96)^n D$ ($u_0 = 13$, $u_{15} = 19.3$). Find $C$ and $D$, giving your answers correct to <strong>3 decimal places</strong>.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "C =", answer: "26.75809", dp: 3, placeholder: "3 d.p." },
          { label: "D =", answer: "-13.75809", dp: 3, placeholder: "3 d.p." }
        ],
        solution: "$C + D = 13$ and $C + (0.96)^{15}D = 19.3 \\implies C = 26.758, D = -13.758$ (3 d.p.)."
      },
      {
        label: "(f)",
        marks: 1,
        prompt: "Describe how the toxin level changes over time based on Model B.",
        type: "self",
        solution: "The toxin level increases and converges towards $26.758\\text{ mg}$."
      },
      {
        label: "(g)",
        marks: 1,
        prompt: "The fish will die if the toxin level reaches $25\\text{ mg}$, and a study reveals many fish have died from the toxin in recent years. Explain which of Model A or B should be used.",
        type: "self",
        solution: "Model B should be used because it predicts the toxin level approaches $26.758\\text{ mg}$ (exceeding $25\\text{ mg}$), whereas Model A approaches $23\\text{ mg}$ and cannot predict fish deaths at $25\\text{ mg}$."
      }
    ]
  }
]);