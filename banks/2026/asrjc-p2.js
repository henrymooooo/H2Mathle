window.registerQuestions([
  // ==================== ASRJC 2026 PAPER 2: PURE MATH (Q1 - Q4) ====================
  {
    id: "ASRJC-2026-P2-Q1",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "Two complex numbers $z$ and $w$ are such that $2z + 5 = |w|$.",
    parts: [
      {
        label: "(Full) Inequality",
        marks: 2,
        prompt: "State, with a reason, an inequality satisfied by $z$.",
        type: "self",
        solution: "Since $|w|$ is real and $|w| \\ge 0$, $z = \\frac{|w|-5}{2}$ is real and satisfies $$z \\ge -\\frac{5}{2}.$$"
      },
      {
        label: "(Full) Find w",
        marks: 3,
        prompt: "Given also that $\\arg(w) = 2.411865$ and $z = -1$, find $w$.",
        type: "auto",
        mode: "complex-list",
        answer: ["-sqrt(5)+2*i"],
        placeholder: "Complex number x + iy",
        solution: "When $z = -1$, $|w| = 2(-1) + 5 = 3$.<br>Let $w = x + y\\mathrm{i}$ ($x < 0, y > 0$ since $w$ is in the 2nd quadrant).<br>$x^2 + y^2 = 9$ and $\\pi - \\tan^{-1}\\left(\\frac{y}{-x}\\right) = 2.411865 \\implies y = -0.894427x$.<br>Sub in: $x^2 + 0.8x^2 = 9 \\implies x = -\\sqrt{5}, y = 2$. Hence $w = -\\sqrt{5} + 2\\mathrm{i}$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P2-Q2",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Integration"],
    stem: "A toy plane is modelled using curves $C$ and $S$.",
    parts: [
      {
        label: "(a)",
        marks: 7,
        prompt: "Curve $C$ has equation $y = \\frac{(4\\cosec x - 3)\\cot x\\cosec x}{2\\cot^2 x - 4\\cosec x + 7}$ for $\\frac{\\pi}{6} \\le x \\le \\frac{\\pi}{2}$. One wing is modelled by the region bounded by $C$, the $x$-axis and lines $x = \\frac{\\pi}{6}$ and $x = \\frac{\\pi}{2}$. Using $u = \\cosec x$, find the <strong>exact</strong> area of the wing.<br><svg viewBox='0 0 240 140' width='225' xmlns='http://www.w3.org/2000/svg' font-family='Georgia,serif' font-size='10' fill='#2c2925' stroke='#2c2925'><line x1='15' y1='115' x2='225' y2='115' stroke-width='1.3'/><line x1='45' y1='128' x2='45' y2='12' stroke-width='1.3'/><line x1='85' y1='25' x2='85' y2='115' stroke-dasharray='4,3' stroke-width='1.1'/><path d='M 85 25 Q 115 95 190 115' fill='none' stroke='#4a8fe7' stroke-width='2'/><text x='36' y='127' stroke='none' font-style='italic'>O</text><text x='85' y='130' text-anchor='middle' stroke='none'>π/6</text><text x='190' y='130' text-anchor='middle' stroke='none'>π/2</text><text x='222' y='127' stroke='none' font-style='italic'>x</text><text x='50' y='18' stroke='none' font-style='italic'>y</text></svg>",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "ln(5/3) + 1/sqrt(6)*atan(sqrt(2/3))",
        placeholder: "Exact value in ln and atan",
        solution: "$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = -\\cot x\\cosec x$. Limits: $x = \\frac{\\pi}{6} \\implies u = 2$; $x = \\frac{\\pi}{2} \\implies u = 1$.<br>$$\\text{Area} = \\int_{1}^{2}\\frac{4u - 3}{2u^2 - 4u + 5}\\,\\mathrm{d}u = \\int_{1}^{2}\\frac{4u-4}{2u^2-4u+5}\\,\\mathrm{d}u + \\frac{1}{2}\\int_{1}^{2}\\frac{1}{(u-1)^2 + \\frac{3}{2}}\\,\\mathrm{d}u$$ $$= \\left[\\ln|2u^2-4u+5|\\right]_1^2 + \\frac{1}{2}\\sqrt{\\frac{2}{3}}\\left[\\tan^{-1}\\left(\\frac{u-1}{\\sqrt{3/2}}\\right)\\right]_1^2 = \\ln\\frac{5}{3} + \\frac{1}{\\sqrt{6}}\\tan^{-1}\\left(\\sqrt{\\frac{2}{3}}\\right).$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Curve $S$ has equation $\\left(x+\\frac{1}{4}\\right)^2 = \\frac{9y^2}{25}\\left(1-\\frac{y}{5}\\right)^2$ for $x \\le -\\frac{1}{4}$ and $0 \\le y \\le 5$. The region bounded by $S$, the axes and $y = 5$ is rotated $2\\pi$ radians about the $y$-axis to form the plane's body. Find its volume (correct to <strong>2 decimal places</strong>).<br><svg viewBox='0 0 220 155' width='210' xmlns='http://www.w3.org/2000/svg' font-family='Georgia,serif' font-size='10' fill='#2c2925' stroke='#2c2925'><line x1='20' y1='125' x2='200' y2='125' stroke-width='1.3'/><line x1='145' y1='145' x2='145' y2='12' stroke-width='1.3'/><path d='M 125 125 C 65 110, 65 40, 125 25' fill='none' stroke='#4a8fe7' stroke-width='2'/><circle cx='125' cy='125' r='2.3' fill='#4a8fe7'/><circle cx='125' cy='25' r='2.3' fill='#4a8fe7'/><text x='115' y='24' text-anchor='end' stroke='none'>(−1/4, 5)</text><text x='118' y='140' text-anchor='end' stroke='none'>(−1/4, 0)</text><text x='150' y='138' stroke='none' font-style='italic'>O</text></svg>",
        type: "auto",
        mode: "number",
        dp: 2,
        answer: "3.0625*pi",
        placeholder: "Volume (2 d.p.)",
        solution: "Since $x \\le -\\frac{1}{4}$, $x = -\\frac{1}{4} - \\frac{3y}{5}\\left(1 - \\frac{y}{5}\\right)$.<br>$$V = \\pi\\int_{0}^{5}\\left[-\\frac{1}{4} - \\frac{3y}{5}\\left(1-\\frac{y}{5}\\right)\\right]^2\\mathrm{d}y = 3.0625\\pi = 9.62\\text{ units}^3\\text{ (2 d.p.)}.$$"
      }
    ]
  },
  {
    id: "ASRJC-2026-P2-Q3",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors"],
    stem: "In a 3D kingdom with origin $O$, a wizard travels along $l_1: 5 - \\frac{x}{2} = z + 1, y = 3$. Later he enters a Cursed Forest along $l_2: \\mathbf{r} = \\begin{pmatrix} 4 \\\\ 1 \\\\ 0 \\end{pmatrix} + \\mu\\begin{pmatrix} -1 \\\\ 0 \\\\ 4 \\end{pmatrix}$ ($\\mu > 0$), bounded by planes $p_1: x+2y+2z=3$ and $p_2: 2x+y-2z=5$. Point $A$ is $(6, 3, 9)$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Write down a vector equation form of the path $l_1$.",
        type: "self",
        solution: "$$\\mathbf{r} = \\begin{pmatrix} 10 \\\\ 3 \\\\ -1 \\end{pmatrix} + \\lambda\\begin{pmatrix} -2 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}.$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the coordinates of point $B$ on $l_2$, which is the closest point to $A(6, 3, 9)$.",
        type: "auto",
        mode: "tuple",
        exactRequired: true,
        answer: [2, 1, 8],
        placeholder: "(x, y, z)",
        solution: "$B = (4-\\mu, 1, 4\\mu)$. Setting $AB \\cdot \\begin{pmatrix} -1 \\\\ 0 \\\\ 4 \\end{pmatrix} = 0$:<br>$$(-2-\\mu)(-1) + (-9+4\\mu)(4) = 0 \\implies 17\\mu = 34 \\implies \\mu = 2.$$ Hence $B$ is $(2, 1, 8)$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Planes $p_1$ and $p_2$ intersect along a dangerous fault line. Find the vector equation of the fault line.",
        type: "self",
        solution: "Solving $x+2y+2z=3$ and $2x+y-2z=5$ using GC:<br>$$\\mathbf{r} = \\begin{pmatrix} 7/3 \\\\ 1/3 \\\\ 0 \\end{pmatrix} + \\mu\\begin{pmatrix} 2 \\\\ -2 \\\\ 1 \\end{pmatrix}, \\quad \\mu \\in \\mathbb{R}.$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "Find the position vectors of the points on $l_2$ that are equidistant from planes $p_1$ and $p_2$.",
        type: "self",
        solution: "Using $C(3, 0, 0) \\in p_1$ and $D(0, 5, 0) \\in p_2$, equating distances from $S(4-\\lambda, 1, 4\\lambda)$ gives $|3 + 7\\lambda| = |4 - 10\\lambda| \\implies \\lambda = \\frac{1}{17}$ or $\\lambda = \\frac{7}{3}$.<br>Position vectors: $\\frac{1}{17}\\begin{pmatrix} 67 \\\\ 17 \\\\ 4 \\end{pmatrix}$ and $\\frac{1}{3}\\begin{pmatrix} 5 \\\\ 3 \\\\ 28 \\end{pmatrix}$."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "The wizard casts an escape spell along $l_2$ toward $p_2$. If the spell strikes $p_2$ at an angle of less than $50^\\circ$ to the plane, it is absorbed (trapping the wizard); otherwise it passes through. Determine whether the wizard escapes or remains trapped.",
        type: "self",
        solution: "$$\\sin\\theta = \\frac{\\left|\\begin{pmatrix} -1 \\\\ 0 \\\\ 4 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ -2 \\end{pmatrix}\\right|}{\\sqrt{17}\\sqrt{9}} = \\frac{10}{3\\sqrt{17}} \\implies \\theta = 53.9^\\circ.$$ Since $53.9^\\circ > 50^\\circ$, the wizard escapes the Cursed Forest."
      }
    ]
  },
  {
    id: "ASRJC-2026-P2-Q4",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 240 155" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="125" x2="225" y2="125" stroke-width="1.5"/><line x1="65" y1="22" x2="65" y2="125" stroke-dasharray="4,3" stroke-width="1.3"/><line x1="65" y1="22" x2="145" y2="125" stroke="#4a8fe7" stroke-width="1.7"/><rect x="65" y="117" width="8" height="8" fill="none" stroke-width="1"/><circle cx="65" cy="22" r="3" fill="#2c2925"/><circle cx="195" cy="125" r="3" fill="#2c2925"/><text x="65" y="14" text-anchor="middle" stroke="none" font-style="italic">B</text><text x="58" y="75" text-anchor="end" stroke="none">1 km</text><text x="65" y="140" text-anchor="middle" stroke="none" font-style="italic">P</text><text x="145" y="140" text-anchor="middle" stroke="none" font-style="italic">Q</text><text x="195" y="140" text-anchor="middle" stroke="none" font-style="italic">A</text><text x="105" y="120" text-anchor="middle" stroke="none" font-style="italic">w <tspan font-style="normal">km</tspan></text><text x="130" y="151" text-anchor="middle" stroke="none">← 2 km →</text></svg>`,
    stem: "Paul, at point $A$ on a straight beach, sees a swimmer at point $B$ in the sea ($BP = 1\\text{ km}$, $AP = 2\\text{ km}$, $BP \\perp AP$). Paul runs from $A$ to $Q$ ($PQ = w\\text{ km}$, $0 \\le w \\le 2$) at $4$ min/km and swims from $Q$ to $B$ at $10$ min/km.",
    parts: [
      {
        label: "(i) Show T",
        marks: 2,
        prompt: "Assume the swimmer remains stationary. Show that the time $T$ minutes taken by Paul is $T = 8 - 4w + 10\\sqrt{1+w^2}$.",
        type: "self",
        solution: "$$T = 4(2 - w) + 10\\sqrt{1 + w^2} = 8 - 4w + 10\\sqrt{1 + w^2}.$$"
      },
      {
        label: "(i) Exact w",
        marks: 3,
        prompt: "Hence, find the <strong>exact</strong> value of $w$ for which $T$ is a minimum.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2/sqrt(21)",
        placeholder: "Exact surd value",
        solution: "$\\frac{\\mathrm{d}T}{\\mathrm{d}w} = -4 + \\frac{10w}{\\sqrt{1+w^2}} = 0 \\implies 2\\sqrt{1+w^2} = 5w \\implies 21w^2 = 4 \\implies w = \\frac{2}{\\sqrt{21}}$ ($w \\ge 0$).<br>$\\frac{\\mathrm{d}^2T}{\\mathrm{d}w^2} = \\frac{10}{(1+w^2)^{3/2}} > 0$, confirming minimum."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Sketch the graph of $T$ against $w$ for $0 \\le w \\le 2$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 165" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="140" x2="225" y2="140" stroke-width="1.3"/><line x1="45" y1="150" x2="45" y2="12" stroke-width="1.3"/><path d="M 45 82 Q 78 96 195 36" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="45" cy="82" r="2.6" fill="#4a8fe7"/><circle cx="195" cy="36" r="2.6" fill="#4a8fe7"/><line x1="195" y1="36" x2="195" y2="140" stroke-dasharray="4,3" stroke-width="1.1"/><text x="40" y="85" text-anchor="end" stroke="none">(0, 18)</text><text x="195" y="28" text-anchor="middle" stroke="none">(2, 10√5)</text><text x="36" y="152" stroke="none" font-style="italic">O</text><text x="225" y="152" stroke="none" font-style="italic">w</text><text x="51" y="18" stroke="none" font-style="italic">T</text></svg>`,
        solution: "Starts at $(0, 18)$, dips to a minimum at $\\left(\\frac{2}{\\sqrt{21}}, 8 + 2\\sqrt{21}\\right)$, and rises to $(2, 10\\sqrt{5})$."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "Find the minimum time taken by Paul to reach the swimmer, giving your answer to the <strong>nearest minute</strong>.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "17",
        placeholder: "Minutes (integer)",
        solution: "$T_{\\min} = 8 + 2\\sqrt{21} = 17.165 \\approx 17$ minutes."
      },
      {
        label: "(iv) Show DE",
        marks: 3,
        prompt: "Suppose instead that as Paul runs from $A$ towards $P$, the swimmer is carried directly away from the beach at $0.01\\text{ km/min}$. At time $t$ min, Paul and the swimmer are at $R$ and $S$ ($PR = x\\text{ km}, PS = y\\text{ km}, \\theta = $ ∠$PRS$). Show that $$\\sec^2\\theta\\frac{\\mathrm{d}\\theta}{\\mathrm{d}t} = \\frac{x + 25y}{100x^2}.$$",
        type: "self",
        solution: "$\\tan\\theta = \\frac{y}{x} \\implies \\sec^2\\theta\\frac{\\mathrm{d}\\theta}{\\mathrm{d}t} = \\frac{x\\frac{\\mathrm{d}y}{\\mathrm{d}t} - y\\frac{\\mathrm{d}x}{\\mathrm{d}t}}{x^2}$.<br>With $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 0.01$ and $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -\\frac{1}{4}$: $\\sec^2\\theta\\frac{\\mathrm{d}\\theta}{\\mathrm{d}t} = \\frac{0.01x + 0.25y}{x^2} = \\frac{x + 25y}{100x^2}$."
      },
      {
        label: "(iv) Rate",
        marks: 2,
        prompt: "Hence find the rate of change of $\\theta$ (in rad/min) when $x = 1$.",
        type: "auto",
        mode: "number",
        answer: "0.12971",
        placeholder: "3 s.f.",
        solution: "When $x = 1$, Paul has run $1\\text{ km}$ so $t = 4$, giving $y = 1 + 4(0.01) = 1.04$, $\\tan\\theta = 1.04$.<br>$(1 + 1.04^2)\\frac{\\mathrm{d}\\theta}{\\mathrm{d}t} = \\frac{1 + 25(1.04)}{100(1)^2} \\implies \\frac{\\mathrm{d}\\theta}{\\mathrm{d}t} = 0.12971 \\approx 0.130\\text{ rad/min}$ (3 s.f.)."
      }
    ]
  },

  // ==================== ASRJC 2026 PAPER 2: STATISTICS (Q5 - Q10) ====================
  {
    id: "ASRJC-2026-P2-Q5",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "Deck A has $9$ cards ($2$ showing $10$ dollars, $3$ showing $20$ dollars, $4$ showing $50$ dollars). Deck B has $9$ cards ($6$ showing $\\times 1$, $3$ showing $\\times 2$). One card is drawn from each deck; $X$ is the product (cash prize in dollars).",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Write down the probability distribution of $X$.",
        type: "self",
        solution: "<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>10</td><td>20</td><td>40</td><td>50</td><td>100</td></tr><tr><th>$\\mathrm{P}(X=x)$</th><td>$4/27$</td><td>$8/27$</td><td>$1/9$</td><td>$8/27$</td><td>$4/27$</td></tr></table></div>"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "E(X) =", answer: "1120/27", placeholder: "Exact or 3 s.f." },
          { label: "Var(X) =", answer: "592400/729", placeholder: "Exact or 3 s.f." }
        ],
        solution: "$\\mathrm{E}(X) = \\frac{1120}{27} \\approx 41.5$.<br>$\\mathrm{E}(X^2) = \\frac{7600}{3}$, so $\\mathrm{Var}(X) = \\frac{7600}{3} - \\left(\\frac{1120}{27}\\right)^2 = \\frac{592400}{729} \\approx 813$ (or $812.62$)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find $\\mathrm{P}(|X - 57| > 30)$.",
        type: "auto",
        mode: "number",
        answer: "16/27",
        placeholder: "Exact or 3 s.f.",
        solution: "$\\mathrm{P}(X > 87) + \\mathrm{P}(X < 27) = \\mathrm{P}(X=100) + \\mathrm{P}(X=10) + \\mathrm{P}(X=20) = \\frac{4}{27} + \\frac{4}{27} + \\frac{8}{27} = \\frac{16}{27}$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P2-Q6",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "A study reported that the population mean daily screen time of teenagers is $8.5$ hours. A random sample of $200$ teenagers had standard deviation $1.5$ hours.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Find the unbiased estimate of the population variance.",
        type: "auto",
        mode: "number",
        answer: "450/199",
        placeholder: "Exact or 3 s.f.",
        solution: "$s^2 = \\frac{200}{199}(1.5^2) = \\frac{450}{199} \\approx 2.26$ (3 s.f.)."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Estimate the probability that the total daily screen time of the $200$ teenagers is between $1640$ hours and $1730$ hours.",
        type: "auto",
        mode: "number",
        answer: "0.91839",
        placeholder: "3 s.f.",
        solution: "By CLT, $Y = \\sum_{i=1}^{200} X_i \\sim \\mathrm{N}(1700, 452.2613)$ approx.<br>$\\mathrm{P}(1640 < Y < 1730) = 0.918$ (3 s.f.)."
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "Another random sample of $200$ teenagers has mean $8.665$ hours. Population daily screen time is normally distributed with $\\sigma = 1.2452$ hours. Test at the $5\\%$ significance level whether there is sufficient evidence that the mean daily screen time exceeds $8.5$ hours.",
        type: "self",
        solution: "Let $\\mu$ be the population mean daily screen time. $\\mathrm{H}_0: \\mu = 8.5$, $\\mathrm{H}_1: \\mu > 8.5$.<br>Under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(8.5, \\frac{1.2452^2}{200}\\right)$. $p$-value $= 0.0305 < 0.05$.<br>Reject $\\mathrm{H}_0$: sufficient evidence at $5\\%$ level that mean daily screen time exceeds $8.5$ hours."
      },
      {
        label: "(iv)",
        marks: 2,
        prompt: "If instead a random sample of $10$ teenagers is selected, find the range of values of the sample mean $\\bar{x}$ for which there is sufficient evidence, at the $1\\%$ significance level, to conclude that the population mean differs from $8.5$ hours.",
        type: "self",
        solution: "2-tailed test at $1\\%$ level with $\\bar{X} \\sim \\mathrm{N}\\left(8.5, \\frac{1.2452^2}{10}\\right)$: reject $\\mathrm{H}_0$ if $\\bar{x} < 7.49$ or $\\bar{x} > 9.51$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P2-Q7",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Binomial Distribution", "Normal Distribution"],
    stem: "The continuous random variable $X$ has distribution $\\mathrm{N}(593, 127^2)$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "A random sample of ten observations of $X$ is taken. Find the probability that there are more than $5$ observations with outcome between $480$ and $600$.",
        type: "auto",
        mode: "number",
        answer: "0.078549",
        placeholder: "3 s.f.",
        solution: "$\\mathrm{P}(480 < X < 600) = 0.33518$.<br>$W \\sim \\mathrm{B}(10, 0.33518) \\implies \\mathrm{P}(W > 5) = 1 - \\mathrm{P}(W \\le 5) = 0.0785$ (3 s.f.)."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Another continuous random variable $Y$, independent of $X$, has distribution $\\mathrm{N}(\\mu, \\sigma^2)$. Given $\\mathrm{P}(2X - Y < 500) = \\mathrm{P}(2X - Y > 630) = 0.4$, find $\\mu$ and $\\sigma$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "μ =", answer: "621", exactRequired: true, placeholder: "Exact value" },
          { label: "σ =", answer: "36.188", placeholder: "3 s.f." }
        ],
        solution: "$2X - Y \\sim \\mathrm{N}(1186 - \\mu, 4(127)^2 + \\sigma^2)$.<br>By symmetry: $1186 - \\mu = \\frac{500 + 630}{2} = 565 \\implies \\mu = 621$.<br>$\\frac{630 - 565}{\\sqrt{4(127)^2 + \\sigma^2}} = 0.253347 \\implies \\sigma = 36.188 \\approx 36.2$ (3 s.f.)."
      }
    ]
  },
  {
    id: "ASRJC-2026-P2-Q8",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "On average $4\\%$ of cookies produced by a bakery are substandard. Ben randomly selects $50$ cookies each day ($X$).",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State, in context, one assumption needed for $X$ to be well-modelled by a binomial distribution.",
        type: "self",
        solution: "The probability that a cookie is substandard is constant at $0.04$ for each cookie (or: whether a cookie is substandard is independent of any other cookie)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the probability that, in a randomly chosen $5$-day working week, Ben finds fewer than two substandard cookies on more than three days.",
        type: "auto",
        mode: "number",
        answer: "0.087409",
        placeholder: "3 s.f.",
        solution: "$\\mathrm{P}(X < 2) = \\mathrm{P}(X \\le 1) = 0.40048$.<br>$W \\sim \\mathrm{B}(5, 0.40048) \\implies \\mathrm{P}(W > 3) = 1 - \\mathrm{P}(W \\le 3) = 0.0874$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the least number of cookies Ben needs to inspect daily such that the probability of finding at least two substandard cookies in a day exceeds $0.3$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "28",
        placeholder: "Integer value",
        solution: "$V \\sim \\mathrm{B}(n, 0.04)$. $\\mathrm{P}(V \\ge 2) > 0.3 \\implies \\mathrm{P}(V \\le 1) < 0.7$.<br>At $n = 27$, $\\mathrm{P}(V \\le 1) = 0.7058$; at $n = 28$, $\\mathrm{P}(V \\le 1) = 0.6909 < 0.7$. Least $n = 28$."
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "Ben also inspects $12$ randomly chosen muffins daily ($Y$, independent of $X$, probability of substandard muffin $= p$). Given he finds exactly two substandard baked goods in total, find in terms of $p$ the probability that they are not of the same type.",
        type: "self",
        solution: "$\\mathrm{P}(X=1)\\mathrm{P}(Y=1) = 0.270595(12p(1-p)^{11}) = 3.24714p(1-p)^{11}$.<br>$\\mathrm{P}(X+Y=2) = 0.27623(1-p)^{12} + 3.24714p(1-p)^{11} + 8.57246p^2(1-p)^{10}$.<br>Dividing and cancelling $(1-p)^{10}$ gives $\\frac{3.25p(1-p)}{5.60p^2 + 2.69p + 0.276}$."
      }
    ]
  },
  {
    id: "ASRJC-2026-P2-Q9",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Answer both parts (a) and (b).",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Eight pairs of $(x, y)$ are:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>2</td><td>7</td><td>$k$</td><td>11</td><td>18</td><td>23</td><td>29</td><td>36</td></tr><tr><th>$y$</th><td>1</td><td>4</td><td>9</td><td>14</td><td>19</td><td>26</td><td>31</td><td>40</td></tr></table></div>The least squares regression line of $x$ on $y$ is $x = 1.7624 + 0.84827y$. Find $k$ to <strong>2 decimal places</strong>.",
        type: "auto",
        mode: "number",
        dp: 2,
        answer: "10.25",
        placeholder: "2 d.p.",
        solution: "$\\bar{y} = 18 \\implies \\bar{x} = \\frac{126 + k}{8} = 1.7624 + 0.84827(18) \\implies k = 10.25$."
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "Tracer deposited $d\\text{ mg/m}^2$ at distance $h\\text{ m}$:<div class='q-table-wrap'><table class='q-table'><tr><th>$h$</th><td>2.0</td><td>2.8</td><td>4.0</td><td>5.5</td><td>7.5</td><td>9.0</td><td>10.0</td><td>14.0</td><td>20.0</td></tr><tr><th>$d$</th><td>493</td><td>411</td><td>70</td><td>97</td><td>64</td><td>43</td><td>26</td><td>23</td><td>8</td></tr></table></div>Draw a scatter diagram and circle the outlier.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 205" width="300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="45" y1="175" x2="295" y2="175" stroke-width="1.3"/><line x1="45" y1="180" x2="45" y2="16" stroke-width="1.3"/><text x="299" y="179" stroke="none" font-style="italic" font-family="Georgia,serif">h</text><text x="35" y="20" stroke="none" font-style="italic" font-family="Georgia,serif">d</text><text x="40" y="178" text-anchor="end" stroke="none">0</text><text x="275" y="190" text-anchor="middle" stroke="none">20</text><text x="38" y="34" text-anchor="end" stroke="none">500</text><g stroke="#4ca885" stroke-width="1.7"><path d="M 65 29 L 71 35 M 71 29 L 65 35"/><path d="M 74 52 L 80 58 M 80 52 L 74 58"/><path d="M 88 151 L 94 157 M 94 151 L 88 157"/><path d="M 105 144 L 111 150 M 111 144 L 105 150"/><path d="M 128 153 L 134 159 M 134 153 L 128 159"/><path d="M 145 159 L 151 165 M 151 159 L 145 165"/><path d="M 157 164 L 163 170 M 163 164 L 157 170"/><path d="M 203 165 L 209 171 M 209 165 L 203 171"/><path d="M 272 169 L 278 175 M 278 169 L 272 175"/></g><circle cx="91" cy="154" r="8" fill="none" stroke="#cf5652" stroke-width="1.7"/></svg>`,
        solution: "Outlier is $(4.0, 70)$ (circled in red)."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Excluding $(4.0, 70)$, determine and explain whether (A) $d = a + \\frac{b}{h^2}$ or (B) $d = a + b\\ln h$ is the better fit given $a, b > 0$.",
        type: "self",
        solution: "Model (A) $d = a + \\frac{b}{h^2}$ is the better fit because the scatter diagram shows $d$ decreasing at a decreasing rate as $h$ increases, matching Model A ($a, b > 0$), whereas Model B would increase with $h$ for $b > 0$."
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "For Model (A) $d = a + \\frac{b}{h^2}$, find $a$, $b$ and the product moment correlation coefficient $r$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "24.918", placeholder: "3 s.f." },
          { label: "b =", answer: "2106.88", placeholder: "3 s.f." },
          { label: "r =", answer: "0.964", placeholder: "3 s.f." }
        ],
        solution: "$d = 24.9 + \\frac{2110}{h^2}$ (3 s.f.), $r = 0.964$ (3 s.f.)."
      },
      {
        label: "(b)(iv) Estimate",
        marks: 1,
        prompt: "Estimate the amount of tracer deposited (in $\\text{mg/m}^2$) when $h = 6.3\\text{ m}$.",
        type: "auto",
        mode: "number",
        answers: ["77.999", "78.062"],
        placeholder: "3 s.f.",
        solution: "$d = 24.9183 + \\frac{2106.875}{6.3^2} = 78.0\\text{ mg/m}^2$ (3 s.f.)."
      },
      {
        label: "(b)(iv) Reliability",
        marks: 1,
        prompt: "Explain whether the estimate at $h = 6.3\\text{ m}$ is reliable.",
        type: "self",
        solution: "Reliable: $r = 0.964$ is close to $1$ (strong linear fit) and $h = 6.3$ lies within the given range $[2.0, 20.0]$ (interpolation)."
      }
    ]
  },
  {
    id: "ASRJC-2026-P2-Q10",
    year: 2026,
    school: "ASRJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Permutations & Combinations", "Probability"],
    stem: "A $5$-member Executive Committee is randomly selected from $12$ representatives: $4$ Physicists, $3$ Biologists, $2$ Historians and $3$ Philosophers.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the probability that the committee contains at least one Biologist.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "37/44",
        placeholder: "Exact fraction",
        solution: "$1 - \\frac{{}^9C_5}{{}^{12}C_5} = \\frac{37}{44}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the probability that the committee contains at least one Historian but no Biologist.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "35/264",
        placeholder: "Exact fraction",
        solution: "$\\frac{{}^9C_5 - {}^7C_5}{{}^{12}C_5} = \\frac{126 - 21}{792} = \\frac{35}{264}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the probability that the committee contains no Biologist or no Historian.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "119/264",
        placeholder: "Exact fraction",
        solution: "$\\frac{{}^{10}C_5 + {}^9C_5 - {}^7C_5}{{}^{12}C_5} = \\frac{252 + 126 - 21}{792} = \\frac{119}{264}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find the probability that the committee contains at least one Historian or at least one Biologist but not both.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "14/33",
        placeholder: "Exact fraction",
        solution: "$\\frac{37}{44} + \\frac{35}{264} - \\left(1 - \\frac{119}{264}\\right) = \\frac{14}{33}$."
      },
      {
        label: "(e)",
        marks: 4,
        prompt: "Two particular Physicists decline dinner. The remaining $10$ travel in a $10$-seater minibus (layout shown). Find the number of possible seating arrangements if no two Philosophers are seated next to each other in either row.<br><svg viewBox='0 0 230 105' width='215' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif' font-size='9' fill='#2c2925' stroke='#2c2925'><rect x='8' y='8' width='214' height='88' rx='10' fill='none' stroke-width='1.5'/><circle cx='34' cy='28' r='10' fill='none' stroke-width='1.2'/><path d='M 27 21 L 41 35 M 41 21 L 27 35' stroke-width='1.1'/><text x='34' y='49' text-anchor='middle' stroke='none'>driver</text><text x='34' y='84' text-anchor='middle' stroke='none'>door</text><rect x='74' y='18' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='100' y='18' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='126' y='18' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='152' y='18' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='178' y='18' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='74' y='64' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='100' y='64' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='126' y='64' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='152' y='64' width='26' height='22' fill='none' stroke-width='1.1'/><rect x='178' y='64' width='26' height='22' fill='none' stroke-width='1.1'/></svg>",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "1874880",
        placeholder: "Integer value",
        solution: "Case 1 (all $3$ Philosophers in one row): ${}^7C_2 \\times 2! \\times {}^3C_3 \\times 3! \\times 5! \\times 2! = 60\\,480$.<br>Case 2 ($2$ in one row, $1$ in the other): ${}^7C_3 \\times 3! \\times {}^3C_2 \\times {}^4C_2 \\times 2! \\times 5! \\times 2! = 1\\,814\\,400$.<br>Total $= 60\\,480 + 1\\,814\\,400 = 1\\,874\\,880$."
      },
      {
        label: "(f)",
        marks: 2,
        prompt: "At the restaurant, the $10$ representatives are seated at two identical round tables, with $5$ representatives at each table. Find the number of possible seating arrangements.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "72576",
        placeholder: "Integer value",
        solution: "$$\\frac{{}^{10}C_5 \\times 4! \\times 4!}{2!} = 72\\,576.$$"
      }
    ]
  }
]);