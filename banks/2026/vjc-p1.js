window.registerQuestions([
  {
    id: "VJC-2026-P1-Q1", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q1", category: "pure",
    topics: ["Inequalities"],
    stem: "Solve the following inequalities without using a calculator.",
    parts: [
      {
        label: "(a)", marks: 4,
        prompt: "Without using a calculator, solve $\\frac{x+4}{x} \\le \\frac{3}{x-1}$.",
        type: "self",
        solution: "$\\frac{(x+4)(x-1)-3x}{x(x-1)} \\le 0 \\implies \\frac{(x+2)(x-2)}{x(x-1)} \\le 0$.<br>Using sign test with critical values $-2, 0, 1, 2$:<br>$-2 \\le x < 0$ or $1 < x \\le 2$."
      },
      {
        label: "(b)", marks: 2,
        prompt: "Hence solve $\\frac{x^2+4}{x^2} \\le \\frac{3}{x^2-1}$.",
        type: "self",
        solution: "Replace $x$ with $x^2$: $-2 \\le x^2 < 0$ (no solution as $x^2 \\ge 0$) or $1 < x^2 \\le 2$.<br>Hence $-\\sqrt{2} \\le x < -1$ or $1 < x \\le \\sqrt{2}$."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q2", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q2", category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    diagramSvg: `<svg viewBox="0 0 240 165" width="230" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="12" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="95" x2="215" y2="95" stroke-width="1.4"/><polyline points="209,91 215,95 209,99" fill="none" stroke-width="1.4"/><text x="220" y="99" stroke="none">Re</text><line x1="115" y1="155" x2="115" y2="15" stroke-width="1.4"/><polyline points="111,21 115,15 119,21" fill="none" stroke-width="1.4"/><text x="122" y="21" stroke="none">Im</text><text x="120" y="109" stroke="none" font-style="italic">O</text><path d="M 96 42 L 102 48 M 102 42 L 96 48" stroke="#4a8fe7" stroke-width="1.8"/><text x="82" y="48" stroke="none" font-style="italic">Q</text></svg>`,
    stem: "Answer both parts on complex numbers.",
    parts: [
      {
        label: "(a) |p|", marks: 2,
        prompt: "The complex number $p$ is given by $\\frac{4a\\mathrm{i}}{\\sqrt{3}+\\mathrm{i}}$, where $a$ is a real number and $a < 0$. Without using a calculator, find $|p|$ in terms of $a$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { a: [-1, -2, -5] }, answer: "-2*a",
        placeholder: "Exact expression in a",
        solution: "$p = \\frac{4a\\mathrm{i}(\\sqrt{3}-\\mathrm{i})}{3+1} = a + a\\sqrt{3}\\mathrm{i}$.<br>$|p| = \\sqrt{a^2+3a^2} = 2\\sqrt{a^2} = -2a$ (since $a < 0$)."
      },
      {
        label: "(a) arg(p)", marks: 1,
        prompt: "Find the exact value of $\\arg(p)$.",
        type: "auto", mode: "number", exactRequired: true, answer: "-2*pi/3",
        placeholder: "Exact angle in radians",
        solution: "Since $a < 0$, $p$ lies in the 3rd quadrant: $\\arg(p) = -\\pi + \\tan^{-1}\\sqrt{3} = -\\frac{2\\pi}{3}$."
      },
      {
        label: "(b)", marks: 3,
        prompt: "The point $Q$ on the Argand diagram represents $q$. Plot $R$, $S$ and $T$ to represent $q^*$, $2\\mathrm{i}q$ and $q^* + 2\\mathrm{i}q$ respectively, showing clearly the geometrical relationship between $Q, R, S, T$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 190" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="90" x2="240" y2="90" stroke-width="1.3"/><line x1="150" y1="180" x2="150" y2="12" stroke-width="1.3"/><text x="243" y="94" stroke="none">Re</text><text x="155" y="17" stroke="none">Im</text><text x="155" y="102" stroke="none" font-style="italic">O</text><line x1="150" y1="90" x2="138" y2="42" stroke="#4a8fe7" stroke-dasharray="4,2" stroke-width="1.4"/><line x1="150" y1="90" x2="138" y2="138" stroke="#4a8fe7" stroke-dasharray="4,2" stroke-width="1.4"/><line x1="150" y1="90" x2="54" y2="114" stroke="#e0726e" stroke-dasharray="4,2" stroke-width="1.4"/><polyline points="138,138 42,162 54,114" fill="none" stroke="#e0726e" stroke-dasharray="3,3" stroke-width="1.3"/><rect x="139" y="83" width="7" height="7" fill="none" stroke-width="1"/><text x="126" y="42" stroke="none" font-style="italic">Q</text><text x="128" y="150" stroke="none" font-style="italic">R(q*)</text><text x="40" y="114" stroke="none" font-style="italic">S(2iq)</text><text x="25" y="168" stroke="none" font-style="italic">T</text></svg>`,
        solution: "$R(q^*)$ is the reflection of $Q$ in the real axis ($OR = OQ$).<br>$S(2\\mathrm{i}q)$ is obtained by rotating $Q$ anticlockwise by $\\frac{\\pi}{2}$ about $O$ and scaling by $2$ ($OS = 2OQ$, $\\angle QOS = 90^\\circ$).<br>$ORTS$ forms a parallelogram ($\\overrightarrow{OT} = \\overrightarrow{OR} + \\overrightarrow{OS}$)."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q3", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q3", category: "pure",
    topics: ["Differential Equations"],
    stem: "An invasive aquatic plant is introduced into a reservoir. The area covered by the plant, $A$ hectares, at time $t$ weeks is modelled by $\\frac{\\mathrm{d}A}{\\mathrm{d}t} = k(120 - A)$ ($k > 0$). Initially $A = 3$, and after $4$ weeks $A = 18$.",
    parts: [
      {
        label: "(a)", marks: 1,
        prompt: "Explain in context what happens as $A$ approaches $120$.",
        type: "self",
        solution: "As the area covered by the plant approaches $120$ hectares, the rate of growth of the area covered decreases and approaches zero."
      },
      {
        label: "(b)", marks: 4,
        prompt: "Show that $A = 120 - B\\mathrm{e}^{-kt}$, finding the values of $B$ and $k$.",
        type: "auto", mode: "multi-field",
        fields: [
          { label: "B =", answer: "117", exactRequired: true, placeholder: "Exact integer" },
          { label: "k =", answer: "0.034292", placeholder: "3 s.f." }
        ],
        solution: "$\\int \\frac{1}{120-A}\\,\\mathrm{d}A = \\int k\\,\\mathrm{d}t \\implies -\\ln|120-A| = kt + C \\implies A = 120 - B\\mathrm{e}^{-kt}$.<br>At $t=0, A=3 \\implies B = 117$.<br>At $t=4, A=18 \\implies 18 = 120 - 117\\mathrm{e}^{-4k} \\implies k = \\frac{1}{4}\\ln\\frac{117}{102} = 0.0343$ (3 s.f.)."
      },
      {
        label: "(c)", marks: 2,
        prompt: "Sketch the graph of $A$ against $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 160" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="35" y1="140" x2="240" y2="140" stroke-width="1.4"/><line x1="45" y1="148" x2="45" y2="15" stroke-width="1.4"/><text x="244" y="144" stroke="none" font-style="italic">t</text><text x="35" y="18" stroke="none" font-style="italic">A</text><line x1="45" y1="35" x2="235" y2="35" stroke-dasharray="4,3" stroke-width="1.2"/><text x="180" y="28" stroke="none" font-style="italic">A <tspan font-style="normal">= 120</tspan></text><path d="M 45 132 Q 115 48 232 39" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="40" y="133" text-anchor="end" stroke="none">(0, 3)</text></svg>`,
        solution: "Starts at $(0, 3)$, increases with decreasing gradient, approaching the horizontal asymptote $A = 120$."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q4", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q4", category: "pure",
    topics: ["Differentiation", "Maxima & Minima"],
    diagramSvg: `<svg viewBox="0 0 280 185" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="12" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="140" x2="255" y2="140" stroke-width="1.5"/><line x1="150" y1="24" x2="150" y2="140" stroke-dasharray="4,3" stroke-width="1.3"/><line x1="150" y1="24" x2="72" y2="140" stroke="#4a8fe7" stroke-width="1.6"/><line x1="150" y1="24" x2="228" y2="140" stroke="#4a8fe7" stroke-width="1.6"/><rect x="142" y="132" width="8" height="8" fill="none" stroke-width="1.1"/><path d="M 138 42 Q 150 48 162 42" fill="none" stroke-width="1.2"/><text x="147" y="56" stroke="none" font-style="italic">θ</text><text x="150" y="16" text-anchor="middle" stroke="none" font-style="italic">C</text><text x="122" y="88" stroke="none">30 m</text><text x="28" y="155" stroke="none" font-style="italic">A</text><text x="68" y="155" stroke="none" font-style="italic">X</text><text x="146" y="155" stroke="none" font-style="italic">B</text><text x="224" y="155" stroke="none" font-style="italic">Y</text><text x="48" y="169" stroke="none" font-size="11" font-style="italic">x <tspan font-style="normal">m</tspan></text><text x="188" y="169" stroke="none" font-size="11" font-style="italic">y <tspan font-style="normal">m</tspan></text><text x="90" y="178" text-anchor="middle" stroke="none" font-size="11">← 30 m →</text></svg>`,
    stem: "Points $A$ and $B$ are $30\\text{ m}$ apart on a straight track. Drone $X$ flies from $A$ toward $B$ ($x\\text{ m}$ from $A$, $0 \\le x < 30$) while Drone $Y$ flies from $B$ away from $A$ ($y\\text{ m}$ from $B$). A camera $C$ is $30\\text{ m}$ vertically above $B$, with tracking angle $\\theta = \\angle XCY$.",
    parts: [
      {
        label: "(a)", marks: 3,
        prompt: "By considering $\\theta$ as the sum of two acute angles, show that $\\tan\\theta = \\frac{30(30 - x + y)}{900 - 30y + xy}$.",
        type: "self",
        solution: "$\\tan\\angle XCB = \\frac{30-x}{30}$ and $\\tan\\angle BCY = \\frac{y}{30}$.<br>$\\tan\\theta = \\tan(\\angle XCB + \\angle BCY) = \\frac{\\frac{30-x}{30}+\\frac{y}{30}}{1 - \\frac{30-x}{30}\\cdot\\frac{y}{30}} = \\frac{30(30-x+y)}{900-30y+xy}$ (shown)."
      },
      {
        label: "(b)", marks: 4,
        prompt: "Given $y = 3x$, use differentiation to find the value of $x$ when $\\theta$ is maximum.",
        type: "auto", mode: "number", answer: "16.22499", placeholder: "Exact or 3 s.f.",
        solution: "$\\tan\\theta = \\frac{10(30+2x)}{300-30x+x^2}$.<br>Differentiating: $\\sec^2\\theta\\frac{\\mathrm{d}\\theta}{\\mathrm{d}x} = \\frac{20(750-30x-x^2)}{(300-30x+x^2)^2} = 0$.<br>Solving $750 - 30x - x^2 = 0$ for $0 \\le x < 30$: $x = 16.2$ (3 s.f.)."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q5", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q5", category: "pure",
    topics: ["Integration by Parts", "Area Under Curve"],
    stem: "Answer both parts.",
    parts: [
      {
        label: "(a)", marks: 2,
        prompt: "Show by integration that $\\int (\\pi - 2x)\\sin x\\,\\mathrm{d}x = (2x - \\pi)\\cos x - 2\\sin x + c$.",
        type: "self",
        solution: "Integrating by parts ($u = \\pi - 2x$, $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\sin x$):<br>$(\\pi - 2x)(-\\cos x) - \\int (-2)(-\\cos x)\\,\\mathrm{d}x = (2x - \\pi)\\cos x - 2\\sin x + c$."
      },
      {
        label: "(b)", marks: 5,
        prompt: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}(x) = |\\pi - 2x|\\sin x$ for $0 \\le x < \\pi$, and $\\mathrm{f}(x) = \\cos^2 x - 1$ for $\\pi \\le x < 2\\pi$, with $\\mathrm{f}(x) = \\mathrm{f}(x+2\\pi)$. Find the <strong>exact</strong> area bounded by $y = \\mathrm{f}(x)$, the $x$-axis, $x = 0$ and $x = 3\\pi$.",
        type: "auto", mode: "number", exactRequired: true, answer: "9*pi/2 - 8", placeholder: "Exact value in pi",
        solution: "Area on $[0, \\pi]$: $\\int_0^{\\pi/2}(\\pi-2x)\\sin x\\,\\mathrm{d}x - \\int_{\\pi/2}^\\pi(\\pi-2x)\\sin x\\,\\mathrm{d}x = 2\\pi - 4$.<br>Area on $[\\pi, 2\\pi]$: $-\\int_\\pi^{2\\pi}(\\cos^2 x - 1)\\,\\mathrm{d}x = -\\frac{1}{2}\\int_\\pi^{2\\pi}(\\cos 2x - 1)\\,\\mathrm{d}x = \\frac{\\pi}{2}$.<br>Total on $[0, 3\\pi] = 2(2\\pi - 4) + \\frac{\\pi}{2} = \\frac{9\\pi}{2} - 8$."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q6", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q6", category: "pure",
    topics: ["Circles", "Parametric Equations"],
    stem: "The equation of a circle $C$ is $x^2 + y^2 = 2ax + 2by - 16$ where $a$ and $b$ are non-zero real constants. The radius of $C$ is $3$ units and the line $y = -3x + 5$ passes through the centre of $C$.",
    parts: [
      {
        label: "(a)", marks: 4,
        prompt: "Show that the equation of $C$ is $(x-3)^2 + (y+4)^2 = 9$.",
        type: "self",
        solution: "Centre $(a, b)$, $a^2+b^2-16 = 3^2 \\implies a^2+b^2 = 25$. Also $b = -3a+5$.<br>Sub in: $10a^2 - 30a = 0 \\implies a = 3$ (reject $a=0$), $b = -4$.<br>Thus $(x-3)^2 + (y+4)^2 = 9$ (shown)."
      },
      {
        label: "(b)", marks: 4,
        prompt: "Curve $D$ has parametric equations $x = 3 + \\sqrt{7t}$, $y = 2t - 6$ for $t \\ge 0$. Find the <strong>exact</strong> gradient of $D$ at the point of intersection of $C$ and $D$.",
        type: "auto", mode: "number", exactRequired: true, answer: "2*sqrt(5/7)", placeholder: "Exact value",
        solution: "Sub into $C$: $7t + 4(t-1)^2 = 9 \\implies 4t^2 - t - 5 = 0 \\implies t = \\frac{5}{4}$ ($t \\ge 0$).<br>$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2}{\\sqrt{7}/(2\\sqrt{t})} = \\frac{4\\sqrt{t}}{\\sqrt{7}} = 2\\sqrt{\\frac{5}{7}} = \\frac{2\\sqrt{35}}{7}$."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q7", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q7", category: "pure",
    topics: ["Conics", "Hyperbola", "Implicit Differentiation"],
    stem: "The hyperbola $H$ has equation $(y-4)^2 - (x-2)^2 = 1$.",
    parts: [
      {
        label: "(a)", marks: 2,
        prompt: "State the coordinates of the vertices of $H$.",
        type: "self",
        solution: "Centre $(2, 4)$, vertices $(2, 4 \\pm 1)$, i.e. $(2, 3)$ and $(2, 5)$."
      },
      {
        label: "(b)", marks: 2,
        prompt: "Write down the equations of the tangent and the normal to $H$ at the point where $y = 3$.",
        type: "self",
        solution: "At the vertex $(2, 3)$, the tangent is $y = 3$ and the normal is $x = 2$."
      },
      {
        label: "(c)", marks: 4,
        prompt: "Find the equations of the tangents to $H$ in exact form at the points where $y = 6$.",
        type: "self",
        solution: "Differentiating: $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x-2}{y-4}$. When $y = 6$, $(x-2)^2 = 3 \\implies x = 2 \\pm \\sqrt{3}$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\pm\\frac{\\sqrt{3}}{2}$.<br>Tangents: $y = -\\frac{\\sqrt{3}}{2}x + \\sqrt{3} + \\frac{9}{2}$ and $y = \\frac{\\sqrt{3}}{2}x - \\sqrt{3} + \\frac{9}{2}$."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q8", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q8", category: "pure",
    topics: ["Summation of Series", "Convergence"],
    stem: "It is given that $\\sum_{r=1}^n \\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2} - \\frac{1}{4n+2}$.",
    parts: [
      {
        label: "(a)", marks: 2,
        prompt: "Give a reason why $\\sum_{r=1}^\\infty \\frac{1}{(2r-1)(2r+1)}$ converges, and write down its value.",
        type: "self",
        solution: "As $n \\to \\infty$, $\\frac{1}{4n+2} \\to 0$, so the partial sum tends to $\\frac{1}{2}$, a constant. Hence the series converges to $\\frac{1}{2}$."
      },
      {
        label: "(b)", marks: 3,
        prompt: "Show that $1 + \\frac{1}{4} + \\frac{1}{9} + \\frac{1}{16} + \\dots$ is less than $2$.",
        type: "self",
        solution: "Since $4r^2 > 4r^2 - 1$, $\\frac{1}{4r^2} < \\frac{1}{(2r-1)(2r+1)}$.<br>$\\sum_{r=1}^\\infty \\frac{1}{r^2} = 4\\sum_{r=1}^\\infty \\frac{1}{4r^2} < 4\\sum_{r=1}^\\infty \\frac{1}{(2r-1)(2r+1)} = 4\\left(\\frac{1}{2}\\right) = 2$."
      },
      {
        label: "(c)", marks: 3,
        prompt: "Find $\\sum_{r=10}^N \\frac{1}{(2r+1)(2r+3)}$ in terms of $N$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { N: [12, 15, 20] }, answer: "1/42 - 1/(4*N+6)",
        placeholder: "Exact expression in N",
        solution: "Replacing $r$ by $r-1$: $\\sum_{r=11}^{N+1}\\frac{1}{(2r-1)(2r+1)} = S_{N+1} - S_{10} = \\left(\\frac{1}{2}-\\frac{1}{4N+6}\\right) - \\left(\\frac{1}{2}-\\frac{1}{42}\\right) = \\frac{1}{42} - \\frac{1}{4N+6}$."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q9", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q9", category: "pure",
    topics: ["Volumes of Revolution", "Integration by Substitution"],
    diagramSvg: `<svg viewBox="0 0 280 185" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><path d="M 60 66 Q 115 86 190 98 L 190 155 L 60 155 Z" fill="rgba(91,155,213,0.22)" stroke="none"/><line x1="25" y1="155" x2="255" y2="155" stroke-width="1.4"/><line x1="60" y1="170" x2="60" y2="15" stroke-width="1.4"/><text x="260" y="159" stroke="none" font-style="italic">x</text><text x="50" y="21" stroke="none" font-style="italic">y</text><text x="48" y="168" stroke="none" font-style="italic">O</text><line x1="190" y1="28" x2="190" y2="155" stroke-width="1.3"/><text x="195" y="34" stroke="none" font-style="italic">x <tspan font-style="normal">= 3</tspan></text><path d="M 40 52 Q 100 84 225 102" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="125" y="128" stroke="none" font-style="italic" font-size="13">R</text><text x="202" y="88" stroke="none" font-size="11">y = 1 / (1+√(x+1))</text></svg>`,
    stem: "The curve $C$ has equation $y = \\frac{1}{1+\\sqrt{x+1}}$. The shaded region $R$ is bounded by $C$, the $x$-axis and the lines $x = 0$ and $x = 3$.",
    parts: [
      {
        label: "(a)", marks: 4,
        prompt: "Find the volume of the solid formed when $R$ is rotated completely about the $y$-axis.",
        type: "auto", mode: "number", answer: "10.4719755", placeholder: "3 s.f.",
        solution: "At $x=0, y=\\frac{1}{2}$; at $x=3, y=\\frac{1}{3}$.<br>$x = \\left(\\frac{1-y}{y}\\right)^2 - 1$.<br>$V = \\pi(3)^2\\left(\\frac{1}{3}\\right) + \\pi\\int_{1/3}^{1/2}\\left[\\left(\\frac{1-y}{y}\\right)^2 - 1\\right]^2\\mathrm{d}y = 10.5$ (3 s.f.)."
      },
      {
        label: "(b)", marks: 5,
        prompt: "By using the substitution $u = \\sqrt{x+1}$, find the <strong>exact</strong> volume of the solid formed when $R$ is rotated completely about the $x$-axis.",
        type: "auto", mode: "number", exactRequired: true, answer: "pi*(-1/3 + 2*ln(3/2))", placeholder: "Exact value in pi and ln",
        solution: "$\\mathrm{d}x = 2u\\,\\mathrm{d}u$, limits $u=1$ to $2$.<br>$V = \\pi\\int_1^2 \\frac{2u}{(1+u)^2}\\,\\mathrm{d}u = \\pi\\int_1^2 \\left(\\frac{2}{1+u} - \\frac{2}{(1+u)^2}\\right)\\mathrm{d}u = \\pi\\left[2\\ln(1+u) + \\frac{2}{1+u}\\right]_1^2 = \\pi\\left(-\\frac{1}{3} + 2\\ln\\frac{3}{2}\\right)$."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q10", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q10", category: "pure",
    topics: ["3D Vectors", "Planes & Lines"],
    stem: "Planes $\\pi_1$ and $\\pi_2$ have equations $\\mathbf{r} = \\begin{pmatrix}-4\\\\1\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix} + \\mu\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix}$ and $\\mathbf{r}\\cdot\\begin{pmatrix}-1\\\\-2\\\\2\\end{pmatrix} = 10$ respectively, and intersect in $l_1$.",
    parts: [
      {
        label: "(a)", marks: 3,
        prompt: "Find the acute angle between $\\pi_1$ and $\\pi_2$ (in degrees, to 1 d.p.).",
        type: "auto", mode: "number", dp: 1, answer: "15.793", placeholder: "Degrees (1 d.p.)",
        solution: "Normal of $\\pi_1$: $\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix}\\times\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix} = \\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix}$.<br>$\\cos\\theta = \\frac{|-1-2-2|}{\\sqrt{3}\\sqrt{9}} = \\frac{5}{3\\sqrt{3}} \\implies \\theta = 15.8^\\circ$ (1 d.p.)."
      },
      {
        label: "(b)", marks: 2,
        prompt: "Find a vector equation of $l_1$.",
        type: "self",
        solution: "$\\pi_1: x+y-z=-5$, $\\pi_2: -x-2y+2z=10$.<br>Solving gives $l_1: \\mathbf{r} = \\begin{pmatrix}0\\\\-5\\\\0\\end{pmatrix} + \\alpha\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}, \\alpha \\in \\mathbb{R}$."
      },
      {
        label: "(c)", marks: 2,
        prompt: "Find the position vector (coordinates) of the point on $l_1$ closest to $(4, -2, 3)$.",
        type: "auto", mode: "tuple", exactRequired: true, answer: [0, -2, 3], placeholder: "(x, y, z)",
        solution: "Foot of perpendicular $F$: $(0, -5+\\alpha, \\alpha)$. Setting $\\overrightarrow{AF}\\cdot\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}=0 \\implies \\alpha = 3 \\implies \\overrightarrow{OF} = \\begin{pmatrix}0\\\\-2\\\\3\\end{pmatrix}$."
      },
      {
        label: "(d)", marks: 1,
        prompt: "Line $l_2$ has equation $x = m$, $y+1 = z-5$. Given $\\pi_2$ and $l_2$ have no point in common, what can we say about $m$?",
        type: "self",
        solution: "$l_2$ is parallel to $\\pi_2$. Since they have no point in common, $(m, -1, 5) \\notin \\pi_2 \\implies -m + 2 + 10 \\ne 10 \\implies m \\ne 2$."
      },
      {
        label: "(e)", marks: 2,
        prompt: "Given that $m > 2$ and the distance from $l_2$ to $\\pi_2$ is $3$ units, find the value of $m$.",
        type: "auto", mode: "number", exactRequired: true, answer: "11", placeholder: "Exact value",
        solution: "$\\frac{|-m + 2 + 10 - 10|}{3} = 3 \\implies |-m + 2| = 9 \\implies m = 11$ (since $m > 2$)."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q11", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q11", category: "pure",
    topics: ["Functions", "Graph Transformations"],
    diagramSvg: `<svg viewBox="0 0 280 185" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="75" x2="265" y2="75" stroke-width="1.3"/><line x1="95" y1="175" x2="95" y2="12" stroke-width="1.3"/><text x="268" y="79" stroke="none" font-style="italic">x</text><text x="100" y="19" stroke="none" font-style="italic">y</text><text x="86" y="88" stroke="none" font-style="italic">O</text><line x1="155" y1="14" x2="155" y2="170" stroke-dasharray="4,3" stroke-width="1.2"/><text x="155" y="182" text-anchor="middle" stroke="none">x = 2k</text><line x1="25" y1="40" x2="250" y2="152" stroke-dasharray="4,3" stroke-width="1.2"/><text x="48" y="34" stroke="none" font-style="italic">y = −x/2</text><path d="M 28 38 Q 75 64 95 62 Q 130 60 148 16" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 161 18 Q 168 65 182 75 Q 205 110 250 148" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="95" cy="62" r="2.5" fill="#4a8fe7"/><text x="99" y="57" stroke="none">(0, k)</text><circle cx="182" cy="75" r="2.5" fill="#4a8fe7"/><text x="186" y="69" stroke="none">(3k, 0)</text></svg>`,
    stem: "The diagram shows $y = \\mathrm{f}(x)$, with turning point $(0, k)$, $x$-intercept $(3k, 0)$ ($k > 1$), and asymptotes $x = 2k$ and $y = -\\frac{x}{2}$.",
    parts: [
      {
        label: "(a)", marks: 3,
        prompt: "Sketch the graph of $y = \\frac{1}{\\mathrm{f}(x)}$, stating equations of asymptotes and axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 175" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="90" x2="245" y2="90" stroke-width="1.3"/><line x1="90" y1="168" x2="90" y2="14" stroke-width="1.3"/><line x1="165" y1="14" x2="165" y2="168" stroke-dasharray="4,3" stroke-width="1.2"/><text x="165" y="174" text-anchor="middle" stroke="none">x = 3k</text><text x="22" y="84" stroke="none">y = 0</text><path d="M 25 87 Q 65 82 90 66 Q 110 82 128 87 Q 145 78 158 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 169 162 Q 178 102 242 94" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="90" cy="66" r="2.4" fill="#4a8fe7"/><text x="58" y="58" stroke="none">(0, 1/k)</text><circle cx="128" cy="87" r="2.4" fill="#4a8fe7"/><text x="115" y="102" stroke="none">(2k, 0)</text></svg>`,
        solution: "Vertical asymptote $x = 3k$, horizontal asymptote $y = 0$. Intercepts: $(0, \\frac{1}{k})$ (max point) and $(2k, 0)$ (min point)."
      },
      {
        label: "(b)", marks: 2,
        prompt: "Given $\\mathrm{g}: x \\mapsto \\ln(2x+3)$ for $-1.5 < x < 0$, find the range of $\\mathrm{fg}$ in terms of $k$.",
        type: "self",
        solution: "$\\mathrm{R_g} = (-\\infty, \\ln 3)$. Since $\\ln 3 < 2k$ (as $k > 1$), mapping $(-\\infty, \\ln 3)$ through $\\mathrm{f}$ gives $\\mathrm{R_{fg}} = [k, \\infty)$."
      },
      {
        label: "(c)", marks: 3,
        prompt: "The domain of $\\mathrm{f}$ is restricted to $x > 2k$. Sketch $\\mathrm{f}^{-1}$ and $\\mathrm{f}^{-1}\\mathrm{f}$ on the same diagram.",
        type: "self",
        solution: "$\\mathrm{f}^{-1}(x)$ has asymptotes $y = 2k$ and $y = -2x$, crossing $y$-axis at $(0, 3k)$.<br>$\\mathrm{f}^{-1}\\mathrm{f}(x) = x$ is the straight ray starting from open circle $(2k, 2k)$ with gradient $1$ for $x > 2k$."
      },
      {
        label: "(d)", marks: 4,
        prompt: "$\mathrm{h}: x \\mapsto \\frac{a-x}{1+x}$ ($x \\ne -1$, $a \\ne -1$). Find $\\mathrm{h}^2(x)$ in simplified form, and hence find the set of values of $a$ such that $\\mathrm{h}^3(x) = x$ has two distinct real roots.",
        type: "self",
        solution: "$\\mathrm{h}^2(x) = \\frac{a - \\frac{a-x}{1+x}}{1 + \\frac{a-x}{1+x}} = \\frac{(1+a)x}{1+a} = x$.<br>Thus $\\mathrm{h}^3(x) = \\mathrm{h}(x) = x \\implies \\frac{a-x}{1+x} = x \\implies x^2 + 2x - a = 0$.<br>Discriminant $> 0 \\implies 4 + 4a > 0 \\implies a > -1$."
      }
    ]
  },
  {
    id: "VJC-2026-P1-Q12", year: 2026, school: "VJC", paper: "2026 Prelim Paper 1", qNum: "Q12", category: "pure",
    topics: ["AP & GP", "Financial Modelling"],
    stem: "Mrs Lin wants to save at least $\\$20\\,000$. On 1 Jan 2024, she sets aside $\\$50$, and on the 1st of each subsequent month sets aside $\\$a$ more than the previous month.",
    parts: [
      {
        label: "(a)", marks: 1,
        prompt: "State the amount, in terms of $a$, that she sets aside on 1 December 2025.",
        type: "auto", mode: "expr", exactRequired: true, vars: { a: [10, 50, 70] }, answer: "50 + 23*a",
        placeholder: "Expression in terms of a",
        solution: "24th month: $50 + (24-1)a = \\$(50 + 23a)$."
      },
      {
        label: "(b)", marks: 2,
        prompt: "Find, to the nearest cent, the smallest value of $a$ such that her total savings by the end of December 2025 is at least $\\$20\\,000$.",
        type: "auto", mode: "number", dp: 2, answer: "68.12", placeholder: "Nearest cent (2 d.p.)",
        solution: "$\\frac{24}{2}(50 + 50 + 23a) \\ge 20000 \\implies a \\ge 68.1159$. Smallest $a = 68.12$."
      },
      {
        label: "(c)", marks: 1,
        prompt: "On 1 Jan 2026, she deposits $\\$20\\,000$ into a fund earning $0.2\\%$ per month compounded monthly (credited at month-end). She withdraws $\\$180$ on 1 Feb 2026 and on the 1st of every subsequent month. Show that the amount at the end of Feb 2026 is $\\$19\\,899.72$.",
        type: "self",
        solution: "End Jan: $20000(1.002)$. End Feb: $1.002[20000(1.002) - 180] = \\$19\\,899.72$."
      },
      {
        label: "(d)", marks: 4,
        prompt: "Taking Jan 2026 as the 1st month, show that the amount at the end of the $n$th month is $k - 70\\,000(1.002)^n$, finding $k$.",
        type: "auto", mode: "number", exactRequired: true, answer: "90180", placeholder: "Exact value of k",
        solution: "$20000(1.002)^n - 180\\frac{1.002(1.002^{n-1}-1)}{0.002} = 90180 - 70000(1.002)^n$, so $k = 90180$."
      },
      {
        label: "(e)", marks: 2,
        prompt: "Determine the month and year in which the fund is first exhausted.",
        type: "self",
        solution: "$90180 - 70000(1.002)^n \\le 0 \\implies n \\ge 126.78$.<br>Account is exhausted on her 127th month withdrawal in <strong>July 2036</strong>."
      },
      {
        label: "(f)", marks: 2,
        prompt: "Find the amount of the final withdrawal.",
        type: "auto", mode: "number", dp: 2, answer: "140.94", placeholder: "In dollars (2 d.p.)",
        solution: "Amount at end of 126th month $= 90180 - 70000(1.002)^{126} = \\$140.94$."
      }
    ]
  }
]);