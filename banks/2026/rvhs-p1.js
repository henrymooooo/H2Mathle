window.registerQuestions([
  {
    id: "RVHS-2026-P1-Q1",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "It is given that $y = \\tan^{-1}(px)$, where $p$ is a constant and $-\\frac{\\pi}{2} < \\tan^{-1}(px) < \\frac{\\pi}{2}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $(1 + p^2 x^2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = p$.",
        type: "self",
        solution: "Differentiating $y = \\tan^{-1}(px)$ with respect to $x$: $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{p}{1 + p^2 x^2} \\implies (1 + p^2 x^2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = p \\text{ (shown).}$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "By further differentiation of the result in part (a), find the first two non-zero terms in the Maclaurin series for $y$.",
        type: "auto",
        mode: "expr",
        vars: { p: [1, 2, -1], x: [0.2, 0.5, 0.3] },
        answer: "p*x - (p^3/3)*x^3",
        placeholder: "Expression in terms of p and x",
        solution: "Differentiate $(1+p^2x^2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = p$ with respect to $x$:<br>$$(1+p^2x^2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2p^2x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0.$$<br>Differentiate again:<br>$$(1+p^2x^2)\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} + 4p^2x\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2p^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0.$$<br>At $x = 0$: $y = 0$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = p$, $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 0$, $\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} = -2p^3$.<br>By Maclaurin's Theorem: $$y = px + \\frac{-2p^3}{3!}x^3 + \\dots = px - \\frac{p^3}{3}x^3.$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q2",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "Solve the following inequalities.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Solve the inequality $$|\\mathrm{e}^x - 2| > \\frac{1}{x^2 - 1}$$ using a graphical approach.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 190" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="110" x2="245" y2="110" stroke-width="1.2"/><line x1="130" y1="180" x2="130" y2="12" stroke-width="1.2"/><line x1="95" y1="15" x2="95" y2="175" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/><line x1="165" y1="15" x2="165" y2="175" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/><polyline points="20,68 85,78 130,90 154,110 175,80 195,22" fill="none" stroke="#4a8fe7" stroke-width="2"/><polyline points="20,104 65,98 86,74 91,20" fill="none" stroke="#cf5652" stroke-width="1.8"/><polyline points="99,175 108,136 130,130 152,136 161,175" fill="none" stroke="#cf5652" stroke-width="1.8"/><polyline points="169,20 175,78 195,98 240,104" fill="none" stroke="#cf5652" stroke-width="1.8"/><circle cx="86" cy="76" r="2.6" fill="#2c2925"/><text x="78" y="69" text-anchor="end" stroke="none">A(−1.26, 1.72)</text><circle cx="175" cy="79" r="2.6" fill="#2c2925"/><text x="180" y="75" stroke="none">B(1.28, 1.59)</text><text x="93" y="185" text-anchor="middle" stroke="none">x = −1</text><text x="167" y="185" text-anchor="middle" stroke="none">x = 1</text></svg>`,
        solution: "Sketching $y = |\\mathrm{e}^x - 2|$ and $y = \\frac{1}{x^2 - 1}$ on the GC gives intersections $A(-1.2581, 1.7158)$ and $B(1.2770, 1.5857)$, with vertical asymptotes at $x = -1$ and $x = 1$.<br>For $|\\mathrm{e}^x - 2| > \\frac{1}{x^2 - 1}$: $$x < -1.26 \\quad \\text{or} \\quad -1 < x < 1 \\quad \\text{or} \\quad x > 1.28 \\text{ (3 s.f.).}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Without the use of a graphing calculator, solve the inequality $$\\frac{x+2}{x-1} \\ge \\frac{2}{x-3}.$$",
        type: "self",
        solution: "$$\\frac{x+2}{x-1} - \\frac{2}{x-3} \\ge 0 \\implies \\frac{(x+2)(x-3) - 2(x-1)}{(x-1)(x-3)} \\ge 0 \\implies \\frac{x^2 - 3x - 4}{(x-1)(x-3)} \\ge 0 \\implies \\frac{(x+1)(x-4)}{(x-1)(x-3)} \\ge 0.$$<br>Using the sign test with critical values $-1, 1, 3, 4$: $$x \\le -1 \\quad \\text{or} \\quad 1 < x < 3 \\quad \\text{or} \\quad x \\ge 4.$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q3",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    stem: "A curve $C$ has equation $y - 2\\sqrt{3}x + 3\\mathrm{e}^{-y} = 0$, for $x > 0$. The normal to $C$ at a point $P$ has positive gradient and makes an angle of $30^\\circ$ with the $x$-axis.",
    parts: [
      {
        label: "(Full)",
        marks: 6,
        prompt: "Find the <strong>exact</strong> equation of this normal.",
        type: "self",
        solution: "Differentiate implicitly with respect to $x$: $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 2\\sqrt{3} - 3\\mathrm{e}^{-y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2\\sqrt{3}}{1 - 3\\mathrm{e}^{-y}}.$$<br>Gradient of normal $= -\\frac{1 - 3\\mathrm{e}^{-y}}{2\\sqrt{3}} = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\implies -1 + 3\\mathrm{e}^{-y} = 2 \\implies \\mathrm{e}^{-y} = 1 \\implies y = 0$.<br>When $y = 0$: $-2\\sqrt{3}x + 3 = 0 \\implies x = \\frac{\\sqrt{3}}{2}$, so $P\\left(\\frac{\\sqrt{3}}{2}, 0\\right)$.<br>Exact equation of normal: $$y - 0 = \\frac{1}{\\sqrt{3}}\\left(x - \\frac{\\sqrt{3}}{2}\\right) \\implies y = \\frac{x}{\\sqrt{3}} - \\frac{1}{2}.$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q4",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Vectors"],
    stem: "With reference to the origin $O$, the points $A$ and $B$ are such that $OA = \\mathbf{a}$ and $OB = \\mathbf{b}$, where $\\mathbf{a}$ and $\\mathbf{b}$ are both non-zero and non-parallel.<br>The point $X$ lies on $OA$ such that $OX : XA = 2 : 1$. The point $Y$ lies on $OB$ such that $OY : YB = 3 : 2$. The lines $AY$ and $BX$ intersect at the point $P$.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Express $OP$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
        type: "auto",
        mode: "expr",
        vars: { a: [1, 3, -2], b: [2, -1, 5] },
        answer: "(4/9)*a + (1/3)*b",
        placeholder: "Expression in terms of a and b",
        solution: "$OX = \\frac{2}{3}\\mathbf{a}$ and $OY = \\frac{3}{5}\\mathbf{b}$.<br>Since $P$ lies on $AY$: $OP = \\mathbf{a} + \\lambda\\left(\\frac{3}{5}\\mathbf{b} - \\mathbf{a}\\right) = (1-\\lambda)\\mathbf{a} + \\frac{3}{5}\\lambda\\mathbf{b}$.<br>Since $P$ lies on $BX$: $OP = \\mathbf{b} + \\mu\\left(\\frac{2}{3}\\mathbf{a} - \\mathbf{b}\\right) = \\frac{2}{3}\\mu\\mathbf{a} + (1-\\mu)\\mathbf{b}$.<br>Since $\\mathbf{a}$ and $\\mathbf{b}$ are non-zero and non-parallel, comparing coefficients: $1 - \\lambda = \\frac{2}{3}\\mu$ and $\\frac{3}{5}\\lambda = 1 - \\mu$.<br>Solving gives $\\lambda = \\frac{5}{9}$, $\\mu = \\frac{2}{3}$, hence $$OP = \\frac{4}{9}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}.$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Point $Z$ lies on $AB$ such that $4AZ = 3BZ$. Express $OZ$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
        type: "auto",
        mode: "expr",
        vars: { a: [1, 3, -2], b: [2, -1, 5] },
        answer: "(4/7)*a + (3/7)*b",
        placeholder: "Expression in terms of a and b",
        solution: "Since $4AZ = 3BZ \\implies AZ : ZB = 3 : 4$, by the Ratio Theorem: $$OZ = \\frac{4OA + 3OB}{7} = \\frac{4}{7}\\mathbf{a} + \\frac{3}{7}\\mathbf{b}.$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Show that $O$, $P$ and $Z$ are collinear.",
        type: "self",
        solution: "$$OP = \\frac{4}{9}\\mathbf{a} + \\frac{1}{3}\\mathbf{b} = \\frac{7}{9}\\left(\\frac{4}{7}\\mathbf{a} + \\frac{3}{7}\\mathbf{b}\\right) = \\frac{7}{9}OZ.$$<br>Thus $OP$ is parallel to $OZ$. Since $O$ is a common point, $O$, $P$ and $Z$ are collinear."
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q5",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Integration"],
    stem: "Answer both parts.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "By writing $\\cos 3x$ as $\\cos(x + 2x)$ and applying the addition formula, show that $$\\cos 3x = \\cos x(4\\cos^2 x - 3).$$",
        type: "self",
        solution: "$$\\cos 3x = \\cos(x + 2x) = \\cos x\\cos 2x - \\sin x\\sin 2x = \\cos x(2\\cos^2 x - 1) - 2\\sin^2 x\\cos x$$ $$= 2\\cos^3 x - \\cos x - 2(1 - \\cos^2 x)\\cos x = 4\\cos^3 x - 3\\cos x = \\cos x(4\\cos^2 x - 3) \\text{ (shown).}$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "By using integration by parts, or otherwise, find $$\\int \\tan x \\sin 3x\\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.2, 0.5, 0.9],
        answer: "-(1/3)*cos(3*x)*tan(x) + (4/3)*sin(x) - ln(abs(1/cos(x) + tan(x)))",
        placeholder: "Antiderivative in x (include + c)",
        solution: "Integrate by parts with $u = \\tan x$ ($\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\sec^2 x$) and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\sin 3x$ ($v = -\\frac{1}{3}\\cos 3x$):<br>$$\\int \\tan x \\sin 3x\\,\\mathrm{d}x = -\\frac{1}{3}\\cos 3x\\tan x + \\frac{1}{3}\\int \\frac{\\cos x(4\\cos^2 x - 3)}{\\cos^2 x}\\,\\mathrm{d}x$$ $$= -\\frac{1}{3}\\cos 3x\\tan x + \\frac{1}{3}\\int (4\\cos x - 3\\sec x)\\,\\mathrm{d}x$$ $$= -\\frac{1}{3}\\cos 3x\\tan x + \\frac{4}{3}\\sin x - \\ln|\\sec x + \\tan x| + c.$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q6",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "A colony of bacteria is cultivated in a tank under experimental conditions. The amount of bacteria is $y$ (in grams), at time $t$ (in days) after the start of the experiment. The total growth rate of the bacteria is determined by the following two factors:<br>• The bacteria reproduce naturally and grow at a rate directly proportional to the amount of bacteria present.<br>• An automated feeder continuously supplies a liquid nutrient solution to the tank. This nutrient solution stimulates an additional growth rate which is directly proportional to the time taken from the start of the experiment.<br>Initially, there are $3$ grams of bacteria, and the total growth rate of the bacteria is $6$ grams per day. After $1$ day, the additional growth rate, due to the liquid nutrient, is $3$ grams per day.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 2y + 3t$.",
        type: "self",
        solution: "Let natural growth rate be $ay$ and additional growth rate be $bt$ ($a, b > 0$), so $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = ay + bt$.<br>At $t = 0, y = 3, \\frac{\\mathrm{d}y}{\\mathrm{d}t} = 6 \\implies 3a = 6 \\implies a = 2$.<br>At $t = 1$, additional growth rate $= b(1) = 3 \\implies b = 3$.<br>Therefore $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 2y + 3t$ (shown)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "By substituting $u = 2y + 3t$, show that the differential equation can be written as $\\frac{\\mathrm{d}u}{\\mathrm{d}t} = 2u + 3$.",
        type: "self",
        solution: "Differentiating $u = 2y + 3t$ with respect to $t$: $$\\frac{\\mathrm{d}u}{\\mathrm{d}t} = 2\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 3 = 2(2y + 3t) + 3 = 2u + 3 \\text{ (shown).}$$"
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "Find $u$ in terms of $t$ and hence $y$ in terms of $t$.",
        type: "self",
        solution: "Separating variables: $$\\int \\frac{1}{2u+3}\\,\\mathrm{d}u = \\int 1\\,\\mathrm{d}t \\implies \\frac{1}{2}\\ln|2u+3| = t + c \\implies 2u + 3 = A\\mathrm{e}^{2t},$$ so $u = \\frac{1}{2}(A\\mathrm{e}^{2t} - 3)$.<br>At $t = 0, y = 3 \\implies u = 6$: $6 = \\frac{1}{2}(A - 3) \\implies A = 15$.<br>Hence $u = \\frac{1}{2}(15\\mathrm{e}^{2t} - 3)$, and $$y = \\frac{1}{2}(u - 3t) = \\frac{15}{4}\\mathrm{e}^{2t} - \\frac{3}{2}t - \\frac{3}{4}.$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q7",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Differentiation"],
    stem: "Let $a$ and $b$ be fixed positive real numbers. A variable line $C$ passing through $(a, b)$ with varying gradient $m$ has equation $y - b = m(x - a)$, where $m < 0$. The line $C$ cuts the $x$-axis and $y$-axis at the points $P(p, 0)$ and $Q(0, q)$ respectively.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Show that $A$, the area of triangle $OPQ$, where $O$ is the origin, is given by $$A = \\frac{1}{2}\\left(2ab - a^2 m - \\frac{b^2}{m}\\right) \\text{ units}^2.$$",
        type: "self",
        solution: "At $P(p, 0)$: $-b = m(p - a) \\implies p = a - \\frac{b}{m}$. At $Q(0, q)$: $q = b - am$.<br>$$A = \\frac{1}{2}(OP)(OQ) = \\frac{1}{2}\\left(a - \\frac{b}{m}\\right)(b - am) = \\frac{1}{2}\\left(2ab - a^2 m - \\frac{b^2}{m}\\right) \\text{ units}^2 \\text{ (shown).}$$"
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Using differentiation, find the value of $m$ that gives the minimum $A$.",
        type: "auto",
        mode: "expr",
        vars: { a: [2, 3, 5], b: [4, 7, 2] },
        answer: "-b/a",
        placeholder: "Expression in terms of a and b",
        solution: "$$\\frac{\\mathrm{d}A}{\\mathrm{d}m} = -\\frac{a^2}{2} + \\frac{b^2}{2m^2} = 0 \\implies m^2 = \\frac{b^2}{a^2} \\implies m = -\\frac{b}{a} \\quad (\\text{since } m < 0, a, b > 0).$$<br>Check: $\\frac{\\mathrm{d}^2A}{\\mathrm{d}m^2} = -\\frac{b^2}{m^3} > 0$ since $m < 0$ and $b^2 > 0$. By the second derivative test, $A$ is minimum at $m = -\\frac{b}{a}$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "As $m$ varies, the line $C$ rotates about point $(a, b)$ causing the points $P$ and $Q$ to move along the $x$- and $y$-axes, respectively. At the instant when $m = -1$, point $P$ is moving to the right, where the rate of change of $p$ is $1$ unit per second and point $Q$ is moving downwards. At this instant, find the rate of change of $q$, in units per second, leaving your answer in terms of $a$ and $b$.",
        type: "auto",
        mode: "expr",
        vars: { a: [2, 3, 5], b: [4, 7, 2] },
        answer: "-a/b",
        placeholder: "Expression in terms of a and b",
        solution: "From $p = a - \\frac{b}{m}$ and $q = b - am$: $\\frac{\\mathrm{d}p}{\\mathrm{d}m} = \\frac{b}{m^2}$ and $\\frac{\\mathrm{d}q}{\\mathrm{d}m} = -a$.<br>At $m = -1$ with $\\frac{\\mathrm{d}p}{\\mathrm{d}t} = 1$: $$\\frac{\\mathrm{d}p}{\\mathrm{d}t} = \\frac{b}{(-1)^2}\\frac{\\mathrm{d}m}{\\mathrm{d}t} = 1 \\implies \\frac{\\mathrm{d}m}{\\mathrm{d}t} = \\frac{1}{b}.$$<br>Hence $$\\frac{\\mathrm{d}q}{\\mathrm{d}t} = \\frac{\\mathrm{d}q}{\\mathrm{d}m}\\cdot\\frac{\\mathrm{d}m}{\\mathrm{d}t} = -\\frac{a}{b} \\text{ units per second.}$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q8",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "Answer both parts.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "A sequence $u_1, u_2, u_3, \\dots$ is such that $u_1 = 5$ and $u_{n+1} = 3u_n + 2n$. It is known that the $n$th term of this sequence is given by $u_n = a(3^n) + bn + c$, where $a$, $b$ and $c$ are constants. Find the constants $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "13/6", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "-1", exactRequired: true, placeholder: "Exact value" },
          { label: "c =", answer: "-1/2", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "From the recurrence: $u_1 = 5$, $u_2 = 3(5) + 2(1) = 17$, $u_3 = 3(17) + 2(2) = 55$.<br>Substituting $n = 1, 2, 3$ into $u_n = a(3^n) + bn + c$:<br>$3a + b + c = 5$, $9a + 2b + c = 17$, $27a + 3b + c = 55$.<br>Solving gives $a = \\frac{13}{6}$, $b = -1$, $c = -\\frac{1}{2}$."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "State the value of $k$ such that $$\\sum_{r=1}^{2n} \\frac{1}{r} = \\sum_{r=1}^{n} \\left(\\frac{1}{2r+k} + \\frac{1}{2r}\\right).$$",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "-1",
        placeholder: "Integer value",
        solution: "Grouping consecutive odd and even terms: $\\sum_{r=1}^{2n}\\frac{1}{r} = \\left(\\frac{1}{1}+\\frac{1}{2}\\right) + \\left(\\frac{1}{3}+\\frac{1}{4}\\right) + \\dots + \\left(\\frac{1}{2n-1}+\\frac{1}{2n}\\right) = \\sum_{r=1}^{n}\\left(\\frac{1}{2r-1} + \\frac{1}{2r}\\right)$, so $k = -1$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Hence, show that $$\\sum_{r=n+1}^{2n} \\frac{1}{r} = \\sum_{r=1}^{n} \\left(\\frac{1}{2r-1} - \\frac{1}{2r}\\right).$$",
        type: "self",
        solution: "$$\\sum_{r=n+1}^{2n}\\frac{1}{r} = \\sum_{r=1}^{2n}\\frac{1}{r} - \\sum_{r=1}^{n}\\frac{1}{r} = \\sum_{r=1}^{n}\\left(\\frac{1}{2r-1} + \\frac{1}{2r}\\right) - \\sum_{r=1}^{n}\\frac{1}{r} = \\sum_{r=1}^{n}\\left(\\frac{1}{2r-1} + \\frac{1}{2r} - \\frac{1}{r}\\right) = \\sum_{r=1}^{n}\\left(\\frac{1}{2r-1} - \\frac{1}{2r}\\right) \\text{ (shown).}$$"
      },
      {
        label: "(b)(iii)",
        marks: 1,
        prompt: "Write down the value of $\\lim$ as $n$ → ∞ of $\\sum_{r=n+1}^{2n} \\frac{1}{r}$.",
        type: "auto",
        mode: "number",
        answer: "ln(2)",
        placeholder: "Exact value or 3 s.f.",
        solution: "$$\\sum_{r=1}^{\\infty}\\left(\\frac{1}{2r-1} - \\frac{1}{2r}\\right) = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\dots = \\ln(1 + 1) = \\ln 2 \\approx 0.693.$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q9",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f} : x \\mapsto 4 + \\mathrm{e}^{-x}$, where $0 < x \\le 4$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Show that $\\mathrm{f}^{-1}$ exists.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 150" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="125" x2="220" y2="125" stroke-width="1.2"/><line x1="55" y1="140" x2="55" y2="15" stroke-width="1.2"/><line x1="30" y1="78" x2="210" y2="78" stroke="#cf5652" stroke-width="1.2"/><text x="190" y="72" stroke="none" fill="#cf5652">y = k</text><path d="M 55 45 Q 100 80 175 94" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="55" cy="45" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/><circle cx="175" cy="94" r="3" fill="#4a8fe7"/><text x="48" y="42" text-anchor="end" stroke="none">(0, 5)</text><text x="176" y="110" text-anchor="middle" stroke="none">(4, 4+e⁻⁴)</text><text x="45" y="137" stroke="none" font-style="italic">O</text></svg>`,
        solution: "From the graph of $y = \\mathrm{f}(x)$ for $0 < x \\le 4$, any horizontal line $y = k$ cuts the graph at most once. Hence $\\mathrm{f}$ is one-one and $\\mathrm{f}^{-1}$ exists."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Find $\\mathrm{f}^{-1}(x)$ and the domain of $\\mathrm{f}^{-1}$.",
        type: "self",
        solution: "Let $y = 4 + \\mathrm{e}^{-x} \\implies \\mathrm{e}^{-x} = y - 4 \\implies x = -\\ln(y - 4)$.<br>Hence $\\mathrm{f}^{-1}(x) = -\\ln(x - 4)$ and $\\mathrm{D}_{\\mathrm{f}^{-1}} = \\mathrm{R}_{\\mathrm{f}} = [4 + \\mathrm{e}^{-4}, 5)$."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "The function $\\mathrm{g}$ is defined by $\\mathrm{g} : x \\mapsto \\mathrm{f}(x)$ for $0 < x \\le 4$, and $\\mathrm{g}(x) = \\mathrm{g}(x + 4)$ for all real values of $x$. Explain why the composite function $\\mathrm{g}^2$ exists.",
        type: "self",
        solution: "Since $\\mathrm{R}_{\\mathrm{g}} = [4 + \\mathrm{e}^{-4}, 5) \\subset \\mathbb{R} = \\mathrm{D}_{\\mathrm{g}}$, the composite function $\\mathrm{g}^2$ exists."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Find the <strong>exact</strong> value of $\\mathrm{g}^2(2)$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "4 + e^(-e^(-2))",
        placeholder: "Exact value in e",
        solution: "$$\\mathrm{g}^2(2) = \\mathrm{g}(\\mathrm{g}(2)) = \\mathrm{g}(4 + \\mathrm{e}^{-2}) = \\mathrm{g}(\\mathrm{e}^{-2}) = 4 + \\mathrm{e}^{-\\mathrm{e}^{-2}}.$$"
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "State the range of the composite function $\\mathrm{g}^2$.",
        type: "self",
        solution: "Since $\\mathrm{R}_{\\mathrm{g}} = [4 + \\mathrm{e}^{-4}, 5)$, by periodicity $\\mathrm{g}(x) = \\mathrm{g}(x - 4)$ maps this to inputs in $[\\mathrm{e}^{-4}, 1)$.<br>As $\\mathrm{f}$ is strictly decreasing on $(0, 4]$: $$\\mathrm{R}_{\\mathrm{g}^2} = \\left(4 + \\mathrm{e}^{-1},\\, 4 + \\mathrm{e}^{-\\mathrm{e}^{-4}}\\right] \\quad \\text{or } (4.37, 4.98] \\text{ (3 s.f.).}$$"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q10",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 300 200" width="285" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="130" x2="285" y2="130" stroke-width="1.2"/><line x1="145" y1="190" x2="145" y2="12" stroke-width="1.2"/><line x1="195" y1="15" x2="195" y2="188" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="20" y1="95" x2="280" y2="95" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 22 92 Q 70 90 102 52 Q 124 72 145 95 Q 165 120 175 130 Q 186 155 191 185" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 200 18 Q 208 88 228 112 Q 250 124 282 127" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="102" cy="52" r="2.6" fill="#2c2925"/><text x="102" y="42" text-anchor="middle" stroke="none">(−5, 6)</text><circle cx="145" cy="95" r="2.6" fill="#2c2925"/><text x="150" y="90" stroke="none">(0, 3)</text><circle cx="175" cy="130" r="2.6" fill="#2c2925"/><text x="172" y="122" stroke="none">(2, 0)</text><text x="200" y="185" stroke="none">x = 4</text><text x="255" y="89" stroke="none">y = 3</text><text x="30" y="143" stroke="none">y = 0</text><text x="135" y="142" stroke="none" font-style="italic">O</text></svg>`,
    stem: "The diagram shows the graph of $y = \\mathrm{f}(x)$. The graph intersects the axes at $(2, 0)$ and $(0, 3)$. It has a turning point at $(-5, 6)$ and asymptotes with equations $x = 4$, $y = 0$ and $y = 3$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{f}(|x|)$, stating the equation of any asymptotes, the coordinates of any points where the curve crosses the axes and the coordinates of any turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 180" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="115" x2="265" y2="115" stroke-width="1.2"/><line x1="140" y1="172" x2="140" y2="12" stroke-width="1.2"/><line x1="90" y1="15" x2="90" y2="170" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="190" y1="15" x2="190" y2="170" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 140 82 Q 160 105 168 115 Q 180 140 186 168" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 140 82 Q 120 105 112 115 Q 100 140 94 168" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 195 20 Q 204 82 225 103 Q 245 111 262 113" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 85 20 Q 76 82 55 103 Q 35 111 18 113" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="140" y="75" text-anchor="middle" stroke="none">(0, 3)</text><text x="174" y="109" stroke="none">(2, 0)</text><text x="106" y="109" text-anchor="end" stroke="none">(−2, 0)</text><text x="86" y="168" text-anchor="end" stroke="none">x = −4</text><text x="194" y="168" stroke="none">x = 4</text><text x="28" y="128" stroke="none">y = 0</text></svg>`,
        solution: "Keep the right half ($x \\ge 0$) and reflect it in the $y$-axis.<br>• Sharp cusp at $(0, 3)$; $x$-intercepts at $(-2, 0)$ and $(2, 0)$.<br>• Asymptotes: $x = -4$, $x = 4$, and $y = 0$. No turning points."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\frac{1}{\\mathrm{f}(x)}$, stating the equation of any asymptotes, the coordinates of any points where the curve crosses the axes and the coordinates of any turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 180" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="110" x2="265" y2="110" stroke-width="1.2"/><line x1="135" y1="172" x2="135" y2="12" stroke-width="1.2"/><line x1="165" y1="15" x2="165" y2="170" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="18" y1="78" x2="262" y2="78" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 20 80 Q 65 86 92 94 Q 118 92 135 78 Q 152 60 161 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 169 168 Q 174 130 188 110 Q 210 80 258 40" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="92" cy="94" r="2.5" fill="#2c2925"/><text x="92" y="106" text-anchor="middle" stroke="none">(−5, 1/6)</text><text x="130" y="72" text-anchor="end" stroke="none">(0, 1/3)</text><text x="193" y="122" stroke="none">(4, 0)</text><text x="170" y="25" stroke="none">x = 2</text><text x="235" y="72" stroke="none">y = 1/3</text></svg>`,
        solution: "• Vertical asymptote: $x = 2$. Horizontal asymptote (as $x$ → $-\\infty$): $y = \\frac{1}{3}$.<br>• Minimum point at $(-5, \\frac{1}{6})$, $y$-intercept at $(0, \\frac{1}{3})$, $x$-intercept at $(4, 0)$.<br>• As $x$ → $+\\infty$, $\\mathrm{f}(x)$ → $0^+$, so $\\frac{1}{\\mathrm{f}(x)}$ → $+\\infty$."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Express $\\frac{9x+5}{3x+2}$ in the form $a - \\frac{b}{3x+2}$ where $a$ and $b$ are positive constants. Hence, describe a sequence of transformations which transform the graph of $y = \\frac{9x+5}{3x+2}$ to the graph of $y = \\frac{1}{x}$.",
        type: "self",
        solution: "$$\\frac{9x+5}{3x+2} = 3 - \\frac{1}{3x+2} \\quad (a = 3,\\, b = 1).$$<br>Sequence of transformations from $y = 3 - \\frac{1}{3x+2}$ to $y = \\frac{1}{x}$:<br>1. Translate $3$ units in the negative $y$-direction ($y = -\\frac{1}{3x+2}$).<br>2. Reflect about the $x$-axis ($y = \\frac{1}{3x+2}$).<br>3. Scale by factor $3$ parallel to the $x$-axis ($y = \\frac{1}{x+2}$).<br>4. Translate $2$ units in the positive $x$-direction ($y = \\frac{1}{x}$).<br><em>(Alternative valid orders, e.g., translate $\\frac{2}{3}$ units in the positive $x$-direction before scaling by factor $3$, are also accepted.)</em>"
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q11",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong>",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}(z) = (2 - \\mathrm{i})z^2 + 10z + 20 + 10\\mathrm{i}$. Find the roots of $\\mathrm{f}(z) = 0$.",
        type: "auto",
        mode: "complex-list",
        answer: ["-3+i", "-1-3i"],
        placeholder: "Separate complex roots with a comma",
        solution: "$$z = \\frac{-10 \\pm \\sqrt{10^2 - 4(2-\\mathrm{i})(20+10\\mathrm{i})}}{2(2-\\mathrm{i})} = \\frac{-10 \\pm \\sqrt{100 - 200}}{2(2-\\mathrm{i})} = \\frac{-5 \\pm 5\\mathrm{i}}{2-\\mathrm{i}}.$$<br>Multiplying numerator and denominator by $(2+\\mathrm{i})$:<br>$z = \\frac{(-5+5\\mathrm{i})(2+\\mathrm{i})}{5} = -3 + \\mathrm{i}$ or $z = \\frac{(-5-5\\mathrm{i})(2+\\mathrm{i})}{5} = -1 - 3\\mathrm{i}$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "The function $\\mathrm{p}$ is defined by $\\mathrm{p}(z) = z^4 + az^3 + bz^2 + cz + d$, where $a, b, c$ and $d$ are real numbers. It is given that $\\mathrm{f}(z)$ is a factor of $\\mathrm{p}(z)$. Without any further calculations, state all the roots of $\\mathrm{p}(z) = 0$, explaining your answer clearly.",
        type: "self",
        solution: "Since $\\mathrm{f}(z)$ is a factor of $\\mathrm{p}(z)$, $z = -3 + \\mathrm{i}$ and $z = -1 - 3\\mathrm{i}$ are roots of $\\mathrm{p}(z) = 0$.<br>Since all coefficients of $\\mathrm{p}(z) = 0$ are real, complex roots occur in conjugate pairs, so $z = -3 - \\mathrm{i}$ and $z = -1 + 3\\mathrm{i}$ are also roots.<br>Hence the four roots are $-3 + \\mathrm{i}$, $-3 - \\mathrm{i}$, $-1 + 3\\mathrm{i}$, and $-1 - 3\\mathrm{i}$."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Solve the simultaneous equations, giving $z$ and $w$ in the form $a + b\\mathrm{i}$, where $a$ and $b$ are real numbers:<br>$$z^* w = 8 - 20\\mathrm{i}, \\quad w - 2z = 10.$$",
        type: "self",
        solution: "From the second equation, $w = 2z + 10$. Substituting into the first: $z^*(10 + 2z) = 8 - 20\\mathrm{i}$.<br>Let $z = x + \\mathrm{i}y$ ($x, y \\in \\mathbb{R}$):<br>$(x - \\mathrm{i}y)(10 + 2x + 2\\mathrm{i}y) = 10x + 2x^2 + 2y^2 - 10\\mathrm{i}y = 8 - 20\\mathrm{i}$.<br>Comparing imaginary parts: $-10y = -20 \\implies y = 2$.<br>Comparing real parts: $10x + 2x^2 + 2(2)^2 = 8 \\implies 2x(x + 5) = 0 \\implies x = 0$ or $x = -5$.<br>• When $x = 0, y = 2$: $z = 2\\mathrm{i}$, $w = 10 + 4\\mathrm{i}$.<br>• When $x = -5, y = 2$: $z = -5 + 2\\mathrm{i}$, $w = 4\\mathrm{i}$."
      }
    ]
  },
  {
    id: "RVHS-2026-P1-Q12",
    year: 2026,
    school: "RVHS",
    paper: "2026 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Vectors"],
    stem: "Underwater sonar buoys are deployed in the ocean to detect and monitor threats in the ocean and on the ocean surface. Two underwater sonar buoys, buoy $A$ and buoy $B$, are located at points $A$ and $B$ respectively.<br>Points are defined relative to an origin $(0, 0, 0)$ on the ocean bed, with units in metres.<br>The ocean surface is modelled as the plane with equation $3y + 4z = 240$. A submarine moves along a straight path with equation $$\\frac{x}{2} = y - 20 = \\frac{-z + 13}{2}.$$ $A$ and $B$ have coordinates $(-10, 31, 5)$ and $(4, 17, 19)$ respectively.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find a cartesian equation of the plane containing the path of the submarine and buoy $B$.",
        type: "self",
        solution: "Line of submarine: $\\mathbf{r} = \\begin{pmatrix} 0 \\\\ 20 \\\\ 13 \\end{pmatrix} + \\lambda\\begin{pmatrix} 2 \\\\ 1 \\\\ -2 \\end{pmatrix}$.<br>Second direction vector on the plane: $\\begin{pmatrix} 4 \\\\ 17 \\\\ 19 \\end{pmatrix} - \\begin{pmatrix} 0 \\\\ 20 \\\\ 13 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ -3 \\\\ 6 \\end{pmatrix}$.<br>Normal: $\\begin{pmatrix} 2 \\\\ 1 \\\\ -2 \\end{pmatrix} \\times \\begin{pmatrix} 4 \\\\ -3 \\\\ 6 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -20 \\\\ -10 \\end{pmatrix} = -10\\begin{pmatrix} 0 \\\\ 2 \\\\ 1 \\end{pmatrix}$.<br>$\\mathbf{r} \\cdot \\begin{pmatrix} 0 \\\\ 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 20 \\\\ 13 \\end{pmatrix} \\cdot \\begin{pmatrix} 0 \\\\ 2 \\\\ 1 \\end{pmatrix} = 53 \\implies 2y + z = 53$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Determine the acute angle between the path of the submarine and the ocean surface (in degrees, to 1 d.p.).",
        type: "auto",
        mode: "number",
        dp: 1,
        answer: "19.47122",
        placeholder: "Angle in degrees (1 d.p.)",
        solution: "$$\\sin\\theta = \\frac{\\left|\\begin{pmatrix} 2 \\\\ 1 \\\\ -2 \\end{pmatrix} \\cdot \\begin{pmatrix} 0 \\\\ 3 \\\\ 4 \\end{pmatrix}\\right|}{\\sqrt{2^2+1^2+(-2)^2}\\sqrt{0^2+3^2+4^2}} = \\frac{|-5|}{3(5)} = \\frac{1}{3} \\implies \\theta = \\sin^{-1}\\left(\\frac{1}{3}\\right) = 19.5^\\circ \\text{ (1 d.p.).}$$"
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "An unidentified boat on the ocean surface is detected by buoys $A$ and $B$. The boat is found to be equidistant from both buoys $A$ and $B$. Describe geometrically the set of all possible positions of the location of the unidentified boat.",
        type: "self",
        solution: "Midpoint of $AB$ is $M(-3, 24, 12)$ and $AB = \\begin{pmatrix} 14 \\\\ -14 \\\\ 14 \\end{pmatrix} = 14\\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}$.<br>Perpendicular bisector plane of $AB$: $\\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 24 \\\\ 12 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix} = -15 \\implies x - y + z = -15$.<br>Intersecting with the ocean surface $3y + 4z = 240$ gives $\\mathbf{r} = \\begin{pmatrix} 65 \\\\ 80 \\\\ 0 \\end{pmatrix} + \\lambda\\begin{pmatrix} 7 \\\\ 4 \\\\ -3 \\end{pmatrix},\\, \\lambda \\in \\mathbb{R}$.<br>The set of all possible positions is a straight line passing through $(65, 80, 0)$ and parallel to $\\begin{pmatrix} 7 \\\\ 4 \\\\ -3 \\end{pmatrix}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "At low tide, the ocean surface falls below the current ocean surface at a perpendicular distance of $0.8$ metres. The ocean surface at low tide is also modelled as a plane. Find the cartesian equation of this plane.",
        type: "self",
        solution: "Current ocean surface: $\\mathbf{r} \\cdot \\frac{1}{5}\\begin{pmatrix} 0 \\\\ 3 \\\\ 4 \\end{pmatrix} = \\frac{240}{5}$.<br>Falling $0.8 = \\frac{4}{5}$ m towards the origin: $$\\mathbf{r} \\cdot \\frac{1}{5}\\begin{pmatrix} 0 \\\\ 3 \\\\ 4 \\end{pmatrix} = \\frac{240}{5} - \\frac{4}{5} = \\frac{236}{5} \\implies 3y + 4z = 236.$$"
      }
    ]
  }
]);
