window.registerQuestions([
  {
    id: "ASRJC-2026-P1-Q1",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs and Transformations"],
    stem: "A graph with equation $y = \\mathrm{f}(x)$ undergoes, in succession, the following transformations:<br>I: A translation of $3$ units in the negative $y$-direction;<br>II: A translation of $1$ unit in the negative $x$-direction;<br>III: A scale parallel to the $x$-axis by a scale factor of $\\frac{1}{2}$;<br>IV: A reflection in the $y$-axis.<br>The equation of the resulting curve is $y = \\ln(2 - 4x) - 2$.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Determine the equation of function $\\mathrm{f}$, showing your workings clearly.",
        type: "self",
        solution: "Applying I to IV to $y = \\mathrm{f}(x)$ gives $y = \\mathrm{f}(-2x+1) - 3$.<br>Equating to $\\ln(2-4x) - 2$:<br>$$\\mathrm{f}(-2x+1) = \\ln(2-4x) + 1 = \\ln(2(-2x+1)) + 1.$$ Hence $\\mathrm{f}(x) = \\ln(2x) + 1$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q2",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Inequalities", "Modulus Functions"],
    stem: "Solve the following inequalities.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Using an algebraic method, solve the inequality $$\\frac{2x^2 + 17x + 37}{x^2 + 3x - 10} \\le 1$$ exactly.",
        type: "self",
        solution: "$$\\frac{2x^2+17x+37 - (x^2+3x-10)}{x^2+3x-10} \\le 0 \\implies \\frac{x^2+14x+47}{(x+5)(x-2)} \\le 0 \\implies \\frac{(x+7+\\sqrt{2})(x+7-\\sqrt{2})}{(x+5)(x-2)} \\le 0.$$ Using sign test: $-7-\\sqrt{2} \\le x \\le -7+\\sqrt{2}$ or $-5 < x < 2$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Hence, solve $$\\frac{2x^2 + 17|x| + 37}{x^2 + 3|x| - 10} \\le 1.$$",
        type: "self",
        solution: "Replacing $x$ with $|x|$: $-7-\\sqrt{2} \\le |x| \\le -7+\\sqrt{2}$ (no solution since $|x| \\ge 0$) or $-5 < |x| < 2 \\implies 0 \\le |x| < 2$.<br>Hence $-2 < x < 2$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q3",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Parametric Equations", "Normals"],
    stem: "A curve $C$ has parametric equations $x = \\sin t$, $y = \\cos 2t$, for $\\frac{\\pi}{2} < t < \\frac{3\\pi}{2}$, $t \\ne \\pi$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the equation of the normal at the point $P(\\sin p, \\cos 2p)$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\cos t$, $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = -2\\sin 2t = -4\\sin t\\cos t \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -4\\sin t$.<br>Equation of normal at $P$: $$y - \\cos 2p = \\frac{1}{4\\sin p}(x - \\sin p).$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The normal at $P$ passes through another distinct point $Q(\\sin q, \\cos 2q)$. Show that $8\\sin p(\\sin p + \\sin q) = -1$.",
        type: "self",
        solution: "Sub $Q(\\sin q, \\cos 2q)$: $\\cos 2q - \\cos 2p = \\frac{1}{4\\sin p}(\\sin q - \\sin p)$.<br>$-2(\\sin^2 q - \\sin^2 p) = \\frac{1}{4\\sin p}(\\sin q - \\sin p) \\implies -2(\\sin q - \\sin p)(\\sin q + \\sin p) = \\frac{1}{4\\sin p}(\\sin q - \\sin p)$.<br>Since $P$ and $Q$ are distinct ($q \\ne p$ in $(\\frac{\\pi}{2}, \\frac{3\\pi}{2})$ so $\\sin q \\ne \\sin p$), $8\\sin p(\\sin p + \\sin q) = -1$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q4",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Rational Functions", "Curve Sketching"],
    stem: "A curve $C$ has equation $x^2 + 3x - xy + 3y - 2 = 0$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "For real values $x$, use a non-graphical method to determine that $y$ cannot lie between $a$ and $b$, finding the real constants $a$ and $b$.",
        type: "auto",
        mode: "number-list",
        exactRequired: true,
        answer: [1, 17],
        placeholder: "Values of a and b separated by a comma",
        solution: "$y = \\frac{x^2+3x-2}{x-3}$. Setting $y = k$: $x^2 + (3-k)x + (3k-2) = 0$.<br>For no real roots: $(3-k)^2 - 4(3k-2) < 0 \\implies k^2 - 18k + 17 < 0 \\implies (k-1)(k-17) < 0 \\implies 1 < k < 17$.<br>Thus $y$ cannot lie between $1$ and $17$ ($a = 1, b = 17$)."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Sketch the graph of $C$, stating clearly the equations of any asymptotes and the coordinates of any turning points and axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 220" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="145" x2="245" y2="145" stroke-width="1.3"/><line x1="90" y1="210" x2="90" y2="12" stroke-width="1.3"/><line x1="126" y1="14" x2="126" y2="210" stroke-dasharray="4,3" stroke-width="1.2"/><text x="130" y="206" stroke="none">x = 3</text><line x1="25" y1="158" x2="235" y2="35" stroke-dasharray="4,3" stroke-width="1.2"/><text x="200" y="34" stroke="none">y = x + 6</text><polyline points="22,162 47,145 78,139 90,141 105,152 118,178 122,205" fill="none" stroke="#4a8fe7" stroke-width="2"/><polyline points="131,20 138,55 152,72 174,64 210,45 235,31" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="78" cy="139" r="2.5" fill="#4a8fe7"/><text x="72" y="130" text-anchor="end" stroke="none">(−1, 1)</text><circle cx="152" cy="72" r="2.5" fill="#4a8fe7"/><text x="160" y="80" stroke="none">(7, 17)</text><circle cx="47" cy="145" r="2.2" fill="#4a8fe7"/><text x="48" y="160" text-anchor="middle" stroke="none">(−3.56, 0)</text><circle cx="97" cy="145" r="2.2" fill="#4a8fe7"/><text x="108" y="140" stroke="none">(0.562, 0)</text><circle cx="90" cy="141" r="2.2" fill="#4a8fe7"/><text x="102" y="122" stroke="none">(0, 2/3)</text><text x="82" y="156" stroke="none" font-style="italic">O</text></svg>`,
        solution: "Asymptotes: $x = 3$, $y = x + 6$. Turning points: $(-1, 1)$ and $(7, 17)$.<br>Axial intercepts: $(-3.56, 0)$, $(0.562, 0)$ and $\\left(0, \\frac{2}{3}\\right)$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q5",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Integration", "Integration by Parts", "Modulus Functions"],
    stem: "Answer all parts.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the <strong>exact</strong> value of $$\\int_{-1}^{2} |\\mathrm{e}^{-x} - x - 1|\\,\\mathrm{d}x.$$ Show your workings clearly.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "e + 3/2 + e^(-2)",
        placeholder: "Exact value in e",
        solution: "For $x \\in [-1, 0]$, $\\mathrm{e}^{-x} - x - 1 \\ge 0$; for $x \\in [0, 2]$, $\\mathrm{e}^{-x} - x - 1 \\le 0$.<br>$$\\int_{-1}^{0}(\\mathrm{e}^{-x}-x-1)\\,\\mathrm{d}x - \\int_{0}^{2}(\\mathrm{e}^{-x}-x-1)\\,\\mathrm{d}x = \\left[-\\mathrm{e}^{-x}-\\frac{x^2}{2}-x\\right]_{-1}^{0} - \\left[-\\mathrm{e}^{-x}-\\frac{x^2}{2}-x\\right]_{0}^{2} = \\mathrm{e} + \\frac{3}{2} + \\mathrm{e}^{-2}.$$"
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "Show that $\\frac{\\mathrm{d}}{\\mathrm{d}x}[\\ln(\\sec x + \\tan x)] = \\sec x$ for $0 < x < \\frac{\\pi}{2}$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}}{\\mathrm{d}x}[\\ln(\\sec x + \\tan x)] = \\frac{\\sec x\\tan x + \\sec^2 x}{\\sec x + \\tan x} = \\frac{\\sec x(\\tan x + \\sec x)}{\\sec x + \\tan x} = \\sec x\\text{ (shown)}.$$"
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Hence, using integration, show that $$\\int \\sec^3 x\\,\\mathrm{d}x = \\frac{1}{2}\\left(\\sec x\\tan x + \\ln(\\sec x + \\tan x)\\right) + C \\quad \\text{for } 0 < x < \\frac{\\pi}{2}.$$",
        type: "self",
        solution: "Integrate by parts with $u = \\sec x$, $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\sec^2 x$:<br>$$\\int \\sec^3 x\\,\\mathrm{d}x = \\sec x\\tan x - \\int \\sec x\\tan^2 x\\,\\mathrm{d}x = \\sec x\\tan x - \\int \\sec x(\\sec^2 x - 1)\\,\\mathrm{d}x$$ $$2\\int \\sec^3 x\\,\\mathrm{d}x = \\sec x\\tan x + \\ln(\\sec x + \\tan x) + c' \\implies \\int \\sec^3 x\\,\\mathrm{d}x = \\frac{1}{2}(\\sec x\\tan x + \\ln(\\sec x + \\tan x)) + C.$$"
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q6",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Vectors", "Scalar & Vector Products"],
    stem: "Relative to the origin $O$, the position vectors of $A$, $B$ and $C$ are $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively where $\\mathbf{c} = 3\\mathbf{b} - \\mathbf{a}$. Given that $\\mathbf{b}$ is a unit vector, $|\\mathbf{a}| = 3$, $|\\mathbf{b} - \\mathbf{a}| = \\sqrt{7}$ and the angle between $\\mathbf{a}$ and $\\mathbf{b}$ is $\\frac{\\pi}{3}$,",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "find the <strong>exact</strong> shortest distance from $C$ to the line $AB$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "3*sqrt(21)/14",
        placeholder: "Exact surd form",
        solution: "$$\\text{Distance} = \\frac{|AC \\times AB|}{|AB|} = \\frac{|(3\\mathbf{b}-2\\mathbf{a})\\times(\\mathbf{b}-\\mathbf{a})|}{|\\mathbf{b}-\\mathbf{a}|} = \\frac{|\\mathbf{a}\\times\\mathbf{b}|}{\\sqrt{7}} = \\frac{(3)(1)\\sin\\frac{\\pi}{3}}{\\sqrt{7}} = \\frac{3\\sqrt{21}}{14}.$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "find the angle between $\\mathbf{b}$ and $AC$ (in degrees).",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "90",
        placeholder: "Angle in degrees",
        solution: "$\\mathbf{b} \\cdot AC = \\mathbf{b}\\cdot(3\\mathbf{b}-2\\mathbf{a}) = 3|\\mathbf{b}|^2 - 2\\mathbf{a}\\cdot\\mathbf{b} = 3 - 2(3)(1)\\cos\\frac{\\pi}{3} = 0$.<br>Hence $\\cos\\theta = 0 \\implies$ angle is $90^\\circ$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q7",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Maclaurin Series", "Implicit Differentiation"],
    stem: "Given that $y = \\mathrm{e}^{\\sqrt{1-x}}$,",
    parts: [
      {
        label: "(Show)",
        marks: 2,
        prompt: "show that $$2\\ln y \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\frac{2}{y}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = -\\frac{\\mathrm{d}y}{\\mathrm{d}x}.$$",
        type: "self",
        solution: "$\\ln y = \\sqrt{1-x} \\implies \\frac{1}{y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{1}{2\\sqrt{1-x}} \\implies 2\\ln y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -y$.<br>Differentiating w.r.t. $x$: $2\\ln y\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\frac{2}{y}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = -\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ (shown)."
      },
      {
        label: "(i)",
        marks: 4,
        prompt: "By further differentiation of this result, or otherwise, find the Maclaurin's series of $y$ up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.1, 0.2, 0.3] },
        answer: "e - e/2*x - e/48*x^3",
        placeholder: "Exact polynomial in x and e",
        solution: "At $x=0$: $y=\\mathrm{e}$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{\\mathrm{e}}{2}$, $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 0$, $\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} = -\\frac{\\mathrm{e}}{8}$.<br>Thus $y = \\mathrm{e} - \\frac{\\mathrm{e}}{2}x - \\frac{\\mathrm{e}}{48}x^3 + \\dots$"
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Deduce the series expansion of $y = \\frac{\\mathrm{e}^{\\sqrt{1-x}}}{\\sqrt{1-x}}$ up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.1, 0.2, 0.3] },
        answer: "e + 1/8*e*x^2",
        placeholder: "Exact polynomial in x and e",
        solution: "Since $\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{\\sqrt{1-x}}\\right) = -\\frac{\\mathrm{e}^{\\sqrt{1-x}}}{2\\sqrt{1-x}} = -\\frac{\\mathrm{e}}{2} - \\frac{\\mathrm{e}}{16}x^2 + \\dots$, multiplying by $-2$ gives $$\\frac{\\mathrm{e}^{\\sqrt{1-x}}}{\\sqrt{1-x}} = \\mathrm{e} + \\frac{1}{8}\\mathrm{e}x^2 + \\dots$$"
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q8",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Arithmetic Progression", "Geometric Progression", "Convergence"],
    stem: "<em>For this question, all answers for distance are to be expressed in kilometres.</em><br>Madilyn and Nancy are participating in a $60$-day charity running challenge. Madilyn runs on alternate days starting on Day $1$: $2\\text{ km}$ on Day $1$, $2.1\\text{ km}$ on Day $3$, $2.2\\text{ km}$ on Day $5$, and so on. Nancy runs every day: $2\\text{ km}$ on Day $1$, $2.2\\text{ km}$ on Day $2$, $2.38\\text{ km}$ on Day $3$, where each subsequent additional distance is $90\\%$ of the previous day's additional distance.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the total distance run by Madilyn (in km).",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "103.5",
        placeholder: "Exact distance in km",
        solution: "$30$ running days (AP with $a=2, d=0.1$): $\\frac{30}{2}[2(2) + 29(0.1)] = 103.5\\text{ km}$."
      },
      {
        label: "(b) Show d",
        marks: 2,
        prompt: "Show that the daily distance, $d$, run by Nancy on Day $n$ is in the form $4 - k(0.9)^{n-1}$, where $k$ is a real constant.",
        type: "self",
        solution: "$d = 2 + 0.2 + 0.2(0.9) + \\dots + 0.2(0.9)^{n-2} = 2 + \\frac{0.2(1-0.9^{n-1})}{1-0.9} = 4 - 2(0.9)^{n-1}$ ($k = 2$)."
      },
      {
        label: "(b) Total distance",
        marks: 2,
        prompt: "Hence find the total distance covered by Nancy in $60$ days (in km, correct to <strong>2 decimal places</strong>).",
        type: "auto",
        mode: "number",
        dp: 2,
        answer: "220.03594",
        placeholder: "Distance in km (2 d.p.)",
        solution: "$$\\sum_{n=1}^{60} \\left[4 - 2(0.9)^{n-1}\\right] = 240 - 2\\left(\\frac{1-0.9^{60}}{1-0.9}\\right) = 220.03594 \\approx 220.04\\text{ km (2 d.p.)}.$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Show that Nancy's daily running distance converges to a limiting value. Hence, determine the limit of her daily running distance.",
        type: "self",
        solution: "Since common ratio $0.9 \\in (0, 1)$, as $n$ increases without bound, $(0.9)^{n-1}$ approaches $0$. Hence $d$ converges to $4\\text{ km}$."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Determine the day on which Madilyn will first run more daily distance than Nancy.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "41",
        placeholder: "Day number",
        solution: "On odd day $n$, Madilyn runs $2 + \\frac{n-1}{2}(0.1) = 2 + 0.05(n-1)$. From GC, on Day $39$ Madilyn runs $3.9 < 3.9635$; on Day $41$ Madilyn runs $4.0 > 3.9704$. First occurs on Day $41$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q9",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Functions", "Inverse & Composite Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto -4x^2 - 2x + 2$, $x \\in \\mathbb{R}$, $-2 \\le x < 2$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$, stating clearly the coordinates of the axial intercepts and end points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 205" width="230" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="60" x2="225" y2="60" stroke-width="1.3"/><line x1="115" y1="196" x2="115" y2="12" stroke-width="1.3"/><polyline points="55,125 65,105 75,88 85,73 95,60 105,50 110,47 115,48 125,54 130,60 145,86 165,140 175,175" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="55" cy="125" r="2.8" fill="#4a8fe7"/><text x="52" y="140" text-anchor="middle" stroke="none">(−2, −10)</text><circle cx="175" cy="175" r="2.8" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/><text x="180" y="178" stroke="none">(2, −18)</text><circle cx="95" cy="60" r="2.2" fill="#4a8fe7"/><text x="88" y="54" text-anchor="end" stroke="none">(−1, 0)</text><circle cx="130" cy="60" r="2.2" fill="#4a8fe7"/><text x="135" y="54" stroke="none">(1/2, 0)</text><circle cx="115" cy="48" r="2.2" fill="#4a8fe7"/><text x="120" y="42" stroke="none">(0, 2)</text></svg>`,
        solution: "Inverted parabola with closed end point $(-2, -10)$, open end point $(2, -18)$, $x$-intercepts $(-1, 0)$ and $\\left(\\frac{1}{2}, 0\\right)$, and $y$-intercept $(0, 2)$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Explain why $\\mathrm{f}^{-1}$ does not exist.",
        type: "self",
        solution: "Since $\\mathrm{f}(-1) = \\mathrm{f}\\left(\\frac{1}{2}\\right) = 0$, $\\mathrm{f}$ is not a one-one function and so $\\mathrm{f}^{-1}$ does not exist."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The function $\\mathrm{g}$ is defined by $\\mathrm{g}: x \\mapsto -4x^2 - 2x + 2$, $x \\in \\mathbb{R}$, $-2 \\le x < -\\frac{1}{4}$. Find $\\mathrm{g}^{-1}$ in a similar form.",
        type: "self",
        solution: "$y = -4\\left(x + \\frac{1}{4}\\right)^2 + \\frac{9}{4} \\implies x = -\\frac{1}{4} \\pm \\frac{\\sqrt{9-4y}}{4}$. Since $x < -\\frac{1}{4}$, $x = -\\frac{1}{4} - \\frac{\\sqrt{9-4y}}{4}$.<br>$$\\mathrm{g}^{-1}: x \\mapsto -\\frac{1}{4} - \\frac{\\sqrt{9-4x}}{4}, \\quad x \\in \\mathbb{R}, \\quad -10 \\le x < \\frac{9}{4}.$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The functions $\\mathrm{h}$ and $\\mathrm{k}$ are defined by $\\mathrm{h}: x \\mapsto -\\ln(x+1)$, $x > -1$, and $\\mathrm{k}: x \\mapsto |4x^2 + 2x - 2|$, $-1 \\le x < 0$. Show that $\\mathrm{hk}$ exists and find the exact range of $\\mathrm{hk}$.",
        type: "self",
        solution: "$\\mathrm{R_k} = \\left[0, \\frac{9}{4}\\right] \\subseteq (-1, \\infty) = \\mathrm{D_h}$, so $\\mathrm{hk}$ exists.<br>Mapping $\\left[0, \\frac{9}{4}\\right]$ through $\\mathrm{h}$ gives $\\mathrm{R_{hk}} = \\left[-\\ln\\frac{13}{4}, 0\\right]$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q10",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Sequences and Series", "Recurrence Relations", "Sigma Notation"],
    stem: "Answer all parts.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Given that $k$ is a real constant, find $$\\sum_{r=5}^{30}\\left[2^{1-2r} - (k - 2r)\\right],$$ leaving your answer in the form $A(1 - B) + Ck + 910$, where $A, B$ and $C$ are exact real constants.",
        type: "self",
        solution: "$$\\sum_{r=5}^{30} 2\\left(\\frac{1}{4}\\right)^r - 26k + 2\\left(\\frac{26}{2}(5+30)\\right) = 2\\cdot\\frac{(1/4)^5(1 - (1/4)^{26})}{1 - 1/4} - 26k + 910 = \\frac{1}{384}\\left(1 - \\frac{1}{4^{26}}\\right) - 26k + 910.$$"
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "Another series satisfies $\\sum_{r=1}^{N}\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(N+1)(N+2)}\\right)$. Find $\\sum_{r=1}^{\\infty}\\frac{1}{r(r+1)(r+2)}$ and explain your answer clearly.",
        type: "self",
        solution: "As $N$ increases without bound, $\\frac{1}{(N+1)(N+2)}$ approaches $0$. Hence $\\sum_{r=1}^{\\infty}\\frac{1}{r(r+1)(r+2)} = \\frac{1}{4}$."
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Find $$\\sum_{r=13}^{N}\\frac{1}{r(r-1)(r-2)}$$ in terms of $N$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { N: [15, 20, 30] },
        answer: "1/264 - 1/(2*N*(N-1))",
        placeholder: "Expression in terms of N",
        solution: "Replacing $r$ by $r+2$: $$\\sum_{r=11}^{N-2}\\frac{1}{r(r+1)(r+2)} = \\sum_{r=1}^{N-2}\\frac{1}{r(r+1)(r+2)} - \\sum_{r=1}^{10}\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{2}-\\frac{1}{N(N-1)}\\right) - \\frac{1}{2}\\left(\\frac{1}{2}-\\frac{1}{11(12)}\\right) = \\frac{1}{264} - \\frac{1}{2N(N-1)}.$$"
      },
      {
        label: "(c)(i)",
        marks: 2,
        prompt: "A sequence of positive numbers $x_1, x_2, x_3, \\dots$ satisfies $x_{n+1} = \\sqrt{10 - 3x_n}$. Given $x_4 = 1$, find the <strong>exact</strong> value of $x_1$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "89/27",
        placeholder: "Exact fraction",
        solution: "$x_n = \\frac{1}{3}(10 - x_{n+1}^2) \\implies x_3 = \\frac{1}{3}(10 - 1) = 3$, $x_2 = \\frac{1}{3}(10 - 9) = \\frac{1}{3}$, $x_1 = \\frac{1}{3}\\left(10 - \\frac{1}{9}\\right) = \\frac{89}{27}$."
      },
      {
        label: "(c)(ii)",
        marks: 2,
        prompt: "It is also known that the sequence converges to $l$. Find the value of $l$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2",
        placeholder: "Exact value",
        solution: "$l = \\sqrt{10 - 3l} \\implies l^2 + 3l - 10 = 0 \\implies (l-2)(l+5) = 0$. Since $x_n > 0$, $l = 2$."
      },
      {
        label: "(c)(iii)",
        marks: 1,
        prompt: "Prove that $(x_{n+1})^2 - l^2 = 3(l - x_n)$.",
        type: "self",
        solution: "$$(x_{n+1})^2 - l^2 = (10 - 3x_n) - 4 = 6 - 3x_n = 3(2 - x_n) = 3(l - x_n).$$"
      },
      {
        label: "(c)(iv)",
        marks: 2,
        prompt: "Use the result in part (iii) to show that if $x_n < l$, then $x_{n+1} > l$.",
        type: "self",
        solution: "If $x_n < l$, then $l - x_n > 0$, so $(x_{n+1})^2 - l^2 = (x_{n+1}-l)(x_{n+1}+l) > 0$. Since $x_{n+1} + l > 0$ (sequence of positive numbers), $x_{n+1} - l > 0 \\implies x_{n+1} > l$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q11",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "Answer all parts on complex numbers.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the complex number $z$ in the form $x + \\mathrm{i}y$, where $x, y \\in \\mathbb{R}$, such that $$\\frac{10\\mathrm{i}z}{z^* - 1 + 2\\mathrm{i}} = 1 + 7\\mathrm{i}.$$",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["-2+i"],
        placeholder: "Complex number x + iy",
        solution: "$10\\mathrm{i}(x+\\mathrm{i}y) = (1+7\\mathrm{i})[(x-1) + (2-y)\\mathrm{i}]$.<br>Equating real and imaginary parts: $x + 17y = 15$ and $3x + y = -5 \\implies x = -2, y = 1$, so $z = -2 + \\mathrm{i}$."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "The cubic equation $az^3 + bz^2 - 2 = 0$ has real coefficients $a$ and $b$, $a \\ne 0$. Its roots are $z_1$ (real) and $z_2, z_3$ (non-real). If $|z_2 - z_3| = \\sqrt{3}$ and $z^2 + cz + 1$, where $c > 0$, is the quadratic factor of the cubic function in $z$, find the roots of the cubic equation.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["1", "-1/2+sqrt(3)/2*i", "-1/2-sqrt(3)/2*i"],
        placeholder: "All three roots separated by commas",
        solution: "$z_2, z_3 = -\\frac{c}{2} \\pm \\frac{\\sqrt{4-c^2}}{2}\\mathrm{i}$. $|z_2-z_3| = \\sqrt{4-c^2} = \\sqrt{3} \\implies c = 1$ ($c > 0$).<br>Thus $z_2, z_3 = \\frac{-1 \\pm \\sqrt{3}\\mathrm{i}}{2}$.<br>Writing $az^3+bz^2-2 = a(z-z_1)(z^2+z+1)$ and comparing coefficient of $z$: $0 = a(1 - z_1) \\implies z_1 = 1$."
      },
      {
        label: "(c) Argand & shape",
        marks: 4,
        prompt: "Point $A$ represents a fixed complex number $a$ such that $-\\frac{\\pi}{2} < \\arg a < -\\frac{\\pi}{4}$. Points $B$ and $C$ represent $\\mathrm{i}a$ and $a + \\mathrm{i}a$ respectively. On a clearly labelled Argand diagram, show $A, B$ and $C$, and deduce the shape of quadrilateral $OACB$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 195" width="210" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="62" x2="205" y2="62" stroke-width="1.3"/><polyline points="199,58 205,62 199,66" fill="none" stroke-width="1.3"/><text x="195" y="52" stroke="none">Re(z)</text><line x1="58" y1="185" x2="58" y2="12" stroke-width="1.3"/><polyline points="54,18 58,12 62,18" fill="none" stroke-width="1.3"/><text x="64" y="18" stroke="none">Im(z)</text><polygon points="58,62 84,148 170,122 144,36" fill="rgba(91,155,213,0.14)" stroke="#4a8fe7" stroke-width="1.7" stroke-dasharray="4,2"/><rect x="58" y="62" width="8" height="8" transform="rotate(-16.8 58 62)" fill="none" stroke-width="1"/><circle cx="84" cy="148" r="2.5" fill="#4a8fe7"/><circle cx="144" cy="36" r="2.5" fill="#4a8fe7"/><circle cx="170" cy="122" r="2.5" fill="#4a8fe7"/><text x="48" y="75" stroke="none" font-style="italic">O</text><text x="80" y="164" text-anchor="middle" stroke="none" font-style="italic">A</text><text x="148" y="28" stroke="none" font-style="italic">B</text><text x="176" y="128" stroke="none" font-style="italic">C</text></svg>`,
        solution: "$OB = |\\mathrm{i}a| = |a| = OA$, ∠$AOB = \\frac{\\pi}{2}$, and $OC = OA + OB$. Hence $OACB$ is a <strong>square</strong>."
      },
      {
        label: "(c) Max |z|",
        marks: 2,
        prompt: "The set of points on the quadrilateral $OACB$ is represented by $z$. If $a = 1 - \\sqrt{3}\\mathrm{i}$, find the <strong>exact</strong> maximum $|z|$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2*sqrt(2)",
        placeholder: "Exact surd form",
        solution: "Maximum $|z|$ occurs at vertex $C$: $|a + \\mathrm{i}a| = |1+\\mathrm{i}||a| = \\sqrt{2}|1 - \\sqrt{3}\\mathrm{i}| = \\sqrt{2}(2) = 2\\sqrt{2}$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P1-Q12",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Differential Equations", "Modelling"],
    stem: "An ocean-monitoring sensor stores electrical energy generated from wave motion. Let $E$ joules be the amount of energy stored $t$ hours after activation. Wave motion supplies energy at a rate of $\\frac{12}{t+1}$ joules per hour, and energy is consumed by the sensor at a rate of $\\frac{3E^2}{16(t+1)}$ joules per hour. Initially, $E = 4$.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Show that the rate of change of energy per hour is given by $$\\frac{\\mathrm{d}E}{\\mathrm{d}t} = \\frac{3(64 - E^2)}{16(t+1)}.$$",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}E}{\\mathrm{d}t} = \\frac{12}{t+1} - \\frac{3E^2}{16(t+1)} = \\frac{192 - 3E^2}{16(t+1)} = \\frac{3(64 - E^2)}{16(t+1)}\\text{ (shown)}.$$"
      },
      {
        label: "(ii)",
        marks: 6,
        prompt: "Hence, show that the energy stored is given in the form $E = 8 - \\frac{A}{3(t+1)^3 + 1}$, where $A$ is a positive constant.",
        type: "self",
        solution: "Separating variables: $\\int \\frac{1}{64-E^2}\\,\\mathrm{d}E = \\frac{3}{16}\\int \\frac{1}{t+1}\\,\\mathrm{d}t \\implies \\frac{1}{16}\\ln\\left|\\frac{8+E}{8-E}\\right| = \\frac{3}{16}\\ln(t+1) + C_1$.<br>$\\frac{8+E}{8-E} = A'(t+1)^3$. Sub $t=0, E=4 \\implies A' = 3$.<br>Rearranging: $8 + E = 24(t+1)^3 - 3E(t+1)^3 \\implies E = \\frac{24(t+1)^3 - 8}{3(t+1)^3 + 1} = 8 - \\frac{16}{3(t+1)^3 + 1}$ ($A = 16$)."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "Deduce the amount of energy stored in the sensor in the long run (in joules).",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "8",
        placeholder: "Exact value in joules",
        solution: "As $t$ increases without bound, $\\frac{16}{3(t+1)^3+1}$ approaches $0$, so $E$ approaches $8$ joules."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Sketch the graph of $E$ against $t$ and state the range of $E$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 155" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="30" y1="135" x2="245" y2="135" stroke-width="1.3"/><line x1="40" y1="142" x2="40" y2="12" stroke-width="1.3"/><line x1="40" y1="35" x2="240" y2="35" stroke-dasharray="4,3" stroke-width="1.2"/><text x="195" y="28" stroke="none" font-style="italic">E = 8</text><text x="34" y="38" text-anchor="end" stroke="none">8</text><text x="34" y="88" text-anchor="end" stroke="none">4</text><path d="M 40 85 C 50 45, 85 37, 238 35.8" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="40" cy="85" r="2.5" fill="#4a8fe7"/><text x="32" y="146" stroke="none" font-style="italic">O</text><text x="242" y="148" stroke="none" font-style="italic">t</text><text x="46" y="18" stroke="none" font-style="italic">E</text></svg>`,
        solution: "Starts at $(0, 4)$, increases concave down towards the horizontal asymptote $E = 8$. Range of $E$: $4 \\le E < 8$."
      },
      {
        label: "(v)",
        marks: 2,
        prompt: "On average, a town requires $9 \\times 10^8$ joules of energy per hour. If the plan is to generate $2\\%$ of one hour's energy requirement using $3 \\times 10^6$ of these sensors, how long after activation will it take to meet this target? Give your answer to the <strong>nearest minute</strong>.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "20",
        placeholder: "Time in minutes (integer)",
        solution: "$$0.02(9 \\times 10^8) = 3 \\times 10^6\\left(8 - \\frac{16}{3(t+1)^3 + 1}\\right) \\implies 6 = 8 - \\frac{16}{3(t+1)^3+1}$$ $$3(t+1)^3 + 1 = 8 \\implies t = \\left(\\frac{7}{3}\\right)^{1/3} - 1 = 0.32635\\text{ h} = 19.58\\text{ min} \\approx 20\\text{ minutes}.$$"
      }
    ]
  }
]);