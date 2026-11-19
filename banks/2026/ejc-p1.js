window.registerQuestions([
  {
    id: "EJC-2026-P1-Q1", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q1", category: "pure",
    topics: ["Simultaneous Equations"],
    stem: "Recoverable materials per broken machine:<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>Machine A ($550\\text{ dollars}$)</th><th>Machine B ($400\\text{ dollars}$)</th><th>Machine C ($350\\text{ dollars}$)</th></tr><tr><th>Copper (kg)</th><td>2</td><td>1</td><td>4</td></tr><tr><th>Steel (kg)</th><td>3</td><td>4</td><td>3</td></tr><tr><th>Plastic (kg)</th><td>1</td><td>5</td><td>8</td></tr></table></div>The company recovered $40\\text{ kg}$ copper, $61\\text{ kg}$ steel and $56\\text{ kg}$ plastic.",
    parts: [
      { label: "(Full)", marks: 4, prompt: "Find the total amount paid by the recycling company to purchase the machines (in dollars).", type: "auto", mode: "number", exactRequired: true, answer: "9250", placeholder: "Amount in dollars", solution: "$2a+b+4c=40$, $3a+4b+3c=61$, $a+5b+8c=56 \\implies a=12, b=4, c=3$.<br>Total $= 550(12)+400(4)+350(3) = 9250$ dollars." }
    ]
  },
  {
    id: "EJC-2026-P1-Q2", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q2", category: "pure",
    topics: ["Complex Numbers", "Polynomial Roots"],
    stem: "<em>Do not use a calculator.</em> One root of $px^4 - 7x^3 + 8x^2 - 3x + 10 = 0$ ($p \\in \\mathbb{R}$) is $2 - \\mathrm{i}$.",
    parts: [
      { label: "(Full) p", marks: 2, prompt: "Find the value of $p$.", type: "auto", mode: "number", exactRequired: true, answer: "2", placeholder: "Value of p", solution: "Conjugate $2+\\mathrm{i}$ gives factor $x^2-4x+5$. Factoring $(x^2-4x+5)(px^2+qx+2)$ and comparing $x^3$: $-7 = 1 - 4p \\implies p = 2$." },
      { label: "(Full) Other roots", marks: 4, prompt: "Find the other three roots in <strong>exact</strong> form.", type: "auto", mode: "complex-list", exactRequired: true, answer: ["2+i", "-1/4-sqrt(15)/4*i", "-1/4+sqrt(15)/4*i"], placeholder: "Three roots separated by commas", solution: "Comparing $x$: $-3 = 5q - 8 \\implies q = 1$. Solving $2x^2+x+2=0$ gives $-\\frac{1}{4} \\pm \\frac{\\sqrt{15}}{4}\\mathrm{i}$, alongside $2+\\mathrm{i}$." }
    ]
  },
  {
    id: "EJC-2026-P1-Q3", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q3", category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "<em>Do not use a calculator.</em> $V$ and $W$ represent $v = (3+\\sqrt{3}\\,\\mathrm{i})(1-\\sqrt{3}\\,\\mathrm{i})$ and $w = v\\mathrm{i}$.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Find the exact values of $|v|$ and $\\arg(v)$.", type: "auto", mode: "multi-field", fields: [{ label: "|v| =", answer: "4*sqrt(3)", exactRequired: true }, { label: "arg(v) =", answer: "-pi/6", exactRequired: true }], solution: "$v = 6 - 2\\sqrt{3}\\,\\mathrm{i} \\implies |v| = 4\\sqrt{3}$, $\\arg(v) = -\\tan^{-1}\\frac{\\sqrt{3}}{3} = -\\frac{\\pi}{6}$." },
      { label: "(b)", marks: 2, prompt: "Plot $V$ and $W$ on an Argand diagram, showing clearly their geometrical relationship.", type: "self", solutionSvg: `<svg viewBox="0 0 220 175" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="95" x2="205" y2="95" stroke-width="1.3"/><line x1="75" y1="165" x2="75" y2="12" stroke-width="1.3"/><line x1="75" y1="95" x2="155" y2="141" stroke="#4a8fe7" stroke-width="1.5"/><line x1="75" y1="95" x2="121" y2="15" stroke="#4a8fe7" stroke-width="1.5"/><polyline points="82,91 86,98 79,102" fill="none" stroke-width="1"/><text x="160" y="145" stroke="none" font-style="italic">V</text><text x="126" y="18" stroke="none" font-style="italic">W</text><text x="64" y="108" stroke="none" font-style="italic">O</text></svg>`, solution: "$OW = OV$ and $OW \\perp OV$ ($W$ is a $90°$ anticlockwise rotation of $V$ about $O$)." }
    ]
  },
  {
    id: "EJC-2026-P1-Q4", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q4", category: "pure",
    topics: ["Inequalities"],
    stem: "Solve the following inequalities without using a calculator.",
    parts: [
      { label: "(a)", marks: 4, prompt: "Solve $\\frac{11-13x}{4x^2-1} < 1$.", type: "self", solution: "$\\frac{(4x-3)(x+4)}{(2x+1)(2x-1)} > 0 \\implies x < -4$ or $-\\frac{1}{2} < x < \\frac{1}{2}$ or $x > \\frac{3}{4}$." },
      { label: "(b)", marks: 3, prompt: "Hence solve $\\frac{11-13x^2}{4x^4-1} < 1$ in exact form.", type: "self", solution: "$x^2 < \\frac{1}{2}$ or $x^2 > \\frac{3}{4} \\implies x < -\\frac{\\sqrt{3}}{2}$ or $-\\frac{1}{\\sqrt{2}} < x < \\frac{1}{\\sqrt{2}}$ or $x > \\frac{\\sqrt{3}}{2}$." }
    ]
  },
  {
    id: "EJC-2026-P1-Q5", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q5", category: "pure",
    topics: ["Riemann Sums", "Integration by Parts"],
    diagramSvg: `<svg viewBox="0 0 230 155" width="215" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="130" x2="215" y2="130" stroke-width="1.3"/><line x1="38" y1="142" x2="38" y2="12" stroke-width="1.3"/><g fill="rgba(91,155,213,0.16)" stroke="#4a8fe7" stroke-width="1"><rect x="62" y="124" width="24" height="6"/><rect x="86" y="112" width="24" height="18"/><rect x="148" y="68" width="24" height="62"/><rect x="172" y="42" width="24" height="88"/></g><path d="M 38 130 Q 125 122 196 22" fill="none" stroke="#2c2925" stroke-width="1.8"/><text x="196" y="143" text-anchor="middle" stroke="none">1</text><text x="120" y="60" stroke="none" font-style="italic">y = x²eˣ</text></svg>`,
    stem: "Curve $y = x^2\\mathrm{e}^x$ ($x \\ge 0$) has $n$ rectangles of width $\\frac{1}{n}$ drawn under the curve on $[0, 1]$, with total area $A_n$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Show that $A_n = \\frac{1}{n^3}\\sum_{r=1}^{n-1} r^2\\mathrm{e}^{r/n}$.", type: "self", solution: "$A_n = \\frac{1}{n}\\sum_{r=1}^{n-1}\\left(\\frac{r}{n}\\right)^2\\mathrm{e}^{r/n} = \\frac{1}{n^3}\\sum_{r=1}^{n-1} r^2\\mathrm{e}^{r/n}$." },
      { label: "(b)", marks: 4, prompt: "Find the <strong>exact</strong> value of $\\lim_{n \\to \\infty} A_n$.", type: "auto", mode: "number", exactRequired: true, answer: "e-2", placeholder: "Exact value in e", solution: "$\\int_0^1 x^2\\mathrm{e}^x\\,\\mathrm{d}x = [x^2\\mathrm{e}^x]_0^1 - [2x\\mathrm{e}^x]_0^1 + [2\\mathrm{e}^x]_0^1 = \\mathrm{e} - 2$." }
    ]
  },
  {
    id: "EJC-2026-P1-Q6", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q6", category: "pure",
    topics: ["Functions", "Inverse & Composite Functions"],
    stem: "Function $\\mathrm{f}$ is defined by $\\mathrm{f}(x) = \\sqrt{|2-x|+1}$, $x \\ge -1$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that $\\mathrm{f}^{-1}$ does not exist.", type: "self", solution: "$\\mathrm{f}(-1) = 2 = \\mathrm{f}(5)$ (or $y=\\sqrt{3}$ cuts twice), so $\\mathrm{f}$ is not 1-1." },
      { label: "(b)-(c)", marks: 7, prompt: "Domain restricted to $x \\ge 2$. Find $\\mathrm{f}^{-1}$ and its domain, and sketch $\\mathrm{f}$ and $\\mathrm{f}^{-1}$ on the same diagram.", type: "self", solution: "$y^2 - 1 = x - 2 \\implies \\mathrm{f}^{-1}(x) = x^2 + 1$, domain $[1, \\infty)$. Sketches are reflections in $y=x$ starting from $(2, 1)$ and $(1, 2)$." },
      { label: "(d)", marks: 2, prompt: "$\\mathrm{g}(x) = \\frac{4}{4x^2-1}$ ($x \\ne \\pm\\frac{1}{2}$), $\\mathrm{h}(x) = 1 + \\mathrm{e}^{-x}$. Find exact range of $\\mathrm{hg}$.", type: "self", solution: "$\\mathrm{R_g} = (-\\infty, -4] \\cup (0, \\infty) \\implies \\mathrm{R_{hg}} = (1, 2) \\cup [1 + \\mathrm{e}^4, \\infty)$." }
    ]
  },
  {
    id: "EJC-2026-P1-Q7", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q7", category: "pure",
    topics: ["Rates of Change", "Maxima & Minima"],
    diagramSvg: `<svg viewBox="0 0 180 180" width="165" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><ellipse cx="85" cy="35" rx="45" ry="10" fill="none" stroke-width="1.4"/><path d="M 40 35 L 40 115 A 45 45 0 0 0 130 115 L 130 35" fill="none" stroke-width="1.4"/><path d="M 40 115 A 45 10 0 0 0 130 115" fill="none" stroke-dasharray="3,3" stroke-width="1.1"/><line x1="85" y1="35" x2="130" y2="35" stroke-width="1.2"/><text x="108" y="30" text-anchor="middle" stroke="none" font-style="italic">r</text><line x1="145" y1="35" x2="145" y2="115" stroke-width="1.1"/><text x="153" y="78" stroke="none" font-style="italic">h</text></svg>`,
    stem: "A closed storage tank consists of a hemisphere (radius $r\\text{ m}$), cylinder (radius $r\\text{ m}$, height $h\\text{ m}$) and circular top (radius $r\\text{ m}$), with fixed volume $k\\text{ m}^3$.",
    parts: [
      { label: "(a)", marks: 4, prompt: "$r$ increases at $1\\text{ m/s}$. Find $\\frac{\\mathrm{d}h}{\\mathrm{d}t}$ when $r = \\left(\\frac{6k}{7\\pi}\\right)^{1/3}$.", type: "auto", mode: "number", exactRequired: true, answer: "-3", placeholder: "Exact value", solution: "$h = \\frac{k}{\\pi r^2} - \\frac{2}{3}r \\implies \\frac{\\mathrm{d}h}{\\mathrm{d}r} = -\\frac{2k}{\\pi r^3} - \\frac{2}{3}$. When $r^3 = \\frac{6k}{7\\pi}$, $\\frac{\\mathrm{d}h}{\\mathrm{d}t} = -3$." },
      { label: "(b)", marks: 3, prompt: "Show total external surface area $S = \\frac{5}{3}\\pi r^2 + \\frac{2k}{r}$.", type: "self", solution: "$S = 2\\pi r^2 + 2\\pi rh + \\pi r^2 = 3\\pi r^2 + 2\\pi r(\\frac{k}{\\pi r^2}-\\frac{2}{3}r) = \\frac{5}{3}\\pi r^2 + \\frac{2k}{r}$." },
      { label: "(c)", marks: 4, prompt: "Find the value of $r$, in terms of $k$, for minimum $S$.", type: "auto", mode: "expr", exactRequired: true, vars: { k: [5, 10] }, answer: "(3*k/(5*pi))^(1/3)", placeholder: "Expression in terms of k", solution: "$\\frac{\\mathrm{d}S}{\\mathrm{d}r} = \\frac{10}{3}\\pi r - \\frac{2k}{r^2} = 0 \\implies r = \\left(\\frac{3k}{5\\pi}\\right)^{1/3}$ ($\\frac{\\mathrm{d}^2S}{\\mathrm{d}r^2} > 0$)." }
    ]
  },
  {
    id: "EJC-2026-P1-Q8", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q8", category: "pure",
    topics: ["Graph Transformations", "Derivative Graphs"],
    diagramSvg: `<svg viewBox="0 0 240 165" width="225" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="85" x2="225" y2="85" stroke-width="1.3"/><line x1="95" y1="155" x2="95" y2="12" stroke-width="1.3"/><line x1="65" y1="12" x2="65" y2="155" stroke-dasharray="4,3" stroke-width="1.1"/><text x="58" y="22" text-anchor="end" stroke="none">x=−1</text><line x1="20" y1="55" x2="225" y2="55" stroke-dasharray="4,3" stroke-width="1.1"/><text x="218" y="49" text-anchor="end" stroke="none">y=2</text><path d="M 25 51 Q 56 46 61 16" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><path d="M 70 16 Q 82 65 95 85 Q 112 128 130 132 Q 158 128 190 92 Q 208 87 222 86" fill="none" stroke="#4a8fe7" stroke-width="1.8"/><circle cx="130" cy="132" r="2.4" fill="#4a8fe7"/><text x="130" y="146" text-anchor="middle" stroke="none">(1,−3)</text></svg>`,
    stem: "The graph of $y = \\mathrm{f}(x)$ has turning point $(1, -3)$, asymptotes $x=-1, y=0, y=2$, and crosses $(0, 0)$.",
    parts: [
      { label: "(a)", marks: 8, prompt: "Sketch (i) $y = \\mathrm{f}(-x)$, (ii) $y = \\mathrm{f}(|x|)+2$, (iii) $y = \\mathrm{f}'(x)$.", type: "self", solution: "(i) Reflect in $y$-axis: turning pt $(-1,-3)$, $x=1$. (ii) Reflect $x \\ge 0$ in $y$-axis and shift $+2$: $(0,2)$, $(\\pm 1,-1)$, $y=2$. (iii) $x=-1, y=0$, cuts $(1,0)$, negative on $(-1,1)$." },
      { label: "(b)", marks: 3, prompt: "State a sequence of transformations transforming $y = \\ln(8x^3)-1$ onto $y = \\ln x$.", type: "self", solution: "$y = \\ln 8 + 3\\ln x - 1$: 1. Translate $-(\\ln 8 - 1)$ units in $y$-direction. 2. Scale parallel to $y$-axis by $\\frac{1}{3}$." }
    ]
  },
  {
    id: "EJC-2026-P1-Q9", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q9", category: "pure",
    topics: ["GP Proof", "Method of Differences"],
    stem: "Part (a): $W_n = \\sum_{r=1}^n U_r = \\frac{k^n}{3^{n-1}} - 3$ ($k \\ne 0, 3$). Part (b): $u_r = \\frac{1}{r!}$ ($r \\ge 1$).",
    parts: [
      { label: "(a)", marks: 5, prompt: "Find $U_n$ in terms of $k$ and $n$, prove $U_n$ is geometric, and find the range of $k$ for $W_\\infty$ to exist.", type: "self", solution: "$U_n = W_n - W_{n-1} = \\left(\\frac{k}{3}\\right)^n\\left(3-\\frac{9}{k}\\right)$. Ratio $\\frac{k}{3}$ is constant. Converges for $-3 < k < 3, k \\ne 0$." },
      { label: "(b)", marks: 6, prompt: "Show $\\sum_{r=1}^4(u_r-u_{r+1}) = u_1 - u_5$; given $u_r - u_{r+1} = \\frac{1}{r!+(r-1)!}$, show $\\sum_{r=1}^N \\frac{1}{r!+(r-1)!} = 1 - \\frac{1}{(N+1)!}$ and $\\frac{1}{2!+1!}+\\frac{1}{3!+2!}+\\dots = \\frac{1}{2}$.", type: "self", solution: "Telescoping sum gives $1 - \\frac{1}{(N+1)!}$. Starting from $r=2$ to $\\infty$: $\\lim(1 - \\frac{1}{(N+1)!}) - \\frac{1}{1!+0!} = 1 - \\frac{1}{2} = \\frac{1}{2}$." }
    ]
  },
  {
    id: "EJC-2026-P1-Q10", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q10", category: "pure",
    topics: ["3D Vectors", "Planes & Lines"],
    stem: "Plane $p: \\mathbf{r} = \\begin{pmatrix}0\\\\1\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix} + \\mu\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix}$. Line $l: \\mathbf{r} = \\begin{pmatrix}t\\\\1\\\\-2\\end{pmatrix} + s\\begin{pmatrix}-t\\\\t^2\\\\2t+4\\end{pmatrix}$.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Use a vector product to show $2\\mathbf{i}-\\mathbf{j}+2\\mathbf{k}$ is normal to $p$, and find cartesian equation of $p$.", type: "self", solution: "$\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}\\times\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix} = \\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$. Cartesian: $2x - y + 2z = 3$." },
      { label: "(b)-(c)", marks: 7, prompt: "Show $l$ is never perpendicular to $p$ for all $t$; given $l$ does not intersect $p$, show $t = -2$.", type: "self", solution: "(b) Equating $x, z$ gives $t = -\\frac{4}{3}$, where $y$-component fails. (c) Parallel ($t=4$ or $-2$); $(4,1,-2)$ lies on $p$, so $t = -2$." },
      { label: "(d)", marks: 3, prompt: "For $t = -2$, find the shortest distance between $l$ and $p$.", type: "auto", mode: "number", exactRequired: true, answer: "4", placeholder: "Exact distance", solution: "$\\frac{1}{3}\\left|\\begin{pmatrix}-2\\\\0\\\\-4\\end{pmatrix}\\cdot\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}\\right| = \\frac{12}{3} = 4$." }
    ]
  },
  {
    id: "EJC-2026-P1-Q11", year: 2026, school: "EJC", paper: "2026 Prelim Paper 1", qNum: "Q11", category: "pure",
    topics: ["Differential Equations", "Logistic Model"],
    stem: "A prawn farm starts with $2000$ prawns and has $3000$ prawns after $12$ months.",
    parts: [
      { label: "(a)-(b)", marks: 6, prompt: "Rate of change of $P$ is proportional to $P$. Write and solve the DE for $P(t)$ and comment on its suitability.", type: "self", solution: "$P = 2000(1.5)^{t/12}$. Unrealistic because $P$ grows infinitely despite finite space." },
      { label: "(c)-(d)", marks: 5, prompt: "Alternative model: $\\frac{\\mathrm{d}P}{\\mathrm{d}t} = rP\\left(1-\\frac{P}{N}\\right)$. Show $\\frac{\\mathrm{d}^2P}{\\mathrm{d}t^2} = r^2P\\left(1-\\frac{P}{N}\\right)\\left(1-\\frac{2P}{N}\\right)$, show max growth rate occurs at $P = \\frac{N}{2}$, and find this growth rate.", type: "self", solution: "At $P = \\frac{N}{2}$, max growth rate $= \\frac{rN}{4}$." },
      { label: "(e)-(f)", marks: 2, prompt: "Modify the DE for constant monthly sale $h$, and state what happens in the long run if $h > \\frac{rN}{4}$.", type: "self", solution: "$\\frac{\\mathrm{d}P}{\\mathrm{d}t} = rP(1-\\frac{P}{N}) - h$. Since $\\frac{\\mathrm{d}P}{\\mathrm{d}t} < 0$ always, the prawn population will decrease to $0$." }
    ]
  }
]);