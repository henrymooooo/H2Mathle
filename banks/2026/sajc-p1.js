window.registerQuestions([
  {
    id: "SAJC-2026-P1-Q1", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q1", category: "pure",
    topics: ["Equations & Inequalities", "Integration"],
    stem: "Consider $\\sin x$ and $\\cos x$ for $0 \\le x \\le \\pi$.",
    parts: [
      {
        label: "(a)", marks: 2,
        prompt: "By sketching suitable graphs, solve exactly the inequality $\\sin x - \\cos x \\ge 0$ for $0 \\le x \\le \\pi$.",
        type: "self",
        solution: "Sketching $y = \\sin x$ and $y = \\cos x$ on $[0, \\pi]$: they intersect at $x = \\frac{\\pi}{4}$.<br>For $\\sin x \\ge \\cos x$, $\\frac{\\pi}{4} \\le x \\le \\pi$."
      },
      {
        label: "(b)", marks: 3,
        prompt: "Hence find $\\int_0^\\pi |\\sin x - \\cos x|\\,\\mathrm{d}x$, giving your answer in <strong>exact</strong> form.",
        type: "auto", mode: "number", exactRequired: true, answer: "2*sqrt(2)", placeholder: "Exact value",
        solution: "$\\int_0^{\\pi/4}(\\cos x - \\sin x)\\,\\mathrm{d}x + \\int_{\\pi/4}^\\pi(\\sin x - \\cos x)\\,\\mathrm{d}x = [\\sin x + \\cos x]_0^{\\pi/4} + [-\\cos x - \\sin x]_{\\pi/4}^\\pi = 2\\sqrt{2}$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q2", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q2", category: "pure",
    topics: ["Differentiation", "Integration"],
    stem: "Answer both parts.",
    parts: [
      {
        label: "(a)", marks: 1,
        prompt: "Find $\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\frac{1}{1+\\mathrm{e}^x}\\right]$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { x: [0, 1, 2] }, answer: "-e^x/((1+e^x)^2)", placeholder: "Exact expression in x",
        solution: "$\\frac{\\mathrm{d}}{\\mathrm{d}x}(1+\\mathrm{e}^x)^{-1} = \\frac{-\\mathrm{e}^x}{(1+\\mathrm{e}^x)^2}$."
      },
      {
        label: "(b)", marks: 4,
        prompt: "Hence evaluate $\\int_0^{\\ln 3} \\frac{x\\mathrm{e}^x}{(1+\\mathrm{e}^x)^2}\\,\\mathrm{d}x$, leaving your answer in <strong>exact</strong> form.",
        type: "auto", mode: "number", exactRequired: true, answer: "3/4*ln(3) - ln(2)", placeholder: "Exact value",
        solution: "By parts ($u = x$, $v = -\\frac{1}{1+\\mathrm{e}^x}$):<br>$\\left[-\\frac{x}{1+\\mathrm{e}^x}\\right]_0^{\\ln 3} + \\int_0^{\\ln 3}\\frac{1}{1+\\mathrm{e}^x}\\,\\mathrm{d}x = -\\frac{\\ln 3}{4} + \\int_0^{\\ln 3}\\frac{\\mathrm{e}^{-x}}{1+\\mathrm{e}^{-x}}\\,\\mathrm{d}x = \\frac{3}{4}\\ln 3 - \\ln 2$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q3", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q3", category: "pure",
    topics: ["Functions", "Graphs & Transformations"],
    stem: "Curve $C$ has equation $y = \\mathrm{f}(x)$ where $\\mathrm{f}(x) = \\mathrm{e}^{3x+6} - 2$. $C$ undergoes in succession:<br>1. Translation of $2$ units in positive $x$-direction.<br>2. Scaling parallel to $x$-axis with scale factor $k$.<br>3. Translation of $1$ unit in positive $y$-direction.<br>The resulting curve has equation $y = \\mathrm{g}(x)$.",
    parts: [
      {
        label: "(a)", marks: 2,
        prompt: "Find $\\mathrm{g}(x)$ in terms of $k$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { x: [1, 2], k: [2, 3] }, answer: "e^(3*x/k) - 1", placeholder: "Expression in x and k",
        solution: "Step 1: $\\mathrm{e}^{3(x-2)+6}-2 = \\mathrm{e}^{3x}-2$. Step 2: $\\mathrm{e}^{3x/k}-2$. Step 3: $\\mathrm{g}(x) = \\mathrm{e}^{3x/k}-1$."
      },
      {
        label: "(b)", marks: 2,
        prompt: "Given that $y = \\mathrm{g}(x)$ and $y = \\frac{1}{2}\\ln(x+1)$ are reflections of each other in $y = x$, find the value of $k$.",
        type: "auto", mode: "number", answer: "3/2", placeholder: "Exact or decimal",
        solution: "Inverse of $y = \\frac{1}{2}\\ln(x+1)$ is $y = \\mathrm{e}^{2x}-1$. Comparing $\\frac{3x}{k} = 2x \\implies k = \\frac{3}{2}$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q4", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q4", category: "pure",
    topics: ["Sequences & Series"],
    stem: "A sequence of numbers $u_1, u_2, \\dots, u_n$ has the sum $S_n = 5^{2n+1} - 5$.",
    parts: [
      {
        label: "(a)", marks: 2,
        prompt: "Express $u_r$ in the form $p(5^{qr})$, stating the constants $p$ and $q$.",
        type: "auto", mode: "multi-field",
        fields: [
          { label: "p =", answer: "24/5", exactRequired: true },
          { label: "q =", answer: "2", exactRequired: true }
        ],
        solution: "$u_n = S_n - S_{n-1} = 5^{2n+1} - 5^{2n-1} = \\frac{24}{5}(5^{2n})$, and $u_1 = S_1 = 120$. Thus $p = \\frac{24}{5}, q = 2$."
      },
      {
        label: "(b)", marks: 3,
        prompt: "Find $\\sum_{r=1}^n u_{2r-1}$ in terms of $n$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { n: [1, 2, 3] }, answer: "(5/26)*(5^(4*n)-1)", placeholder: "Expression in terms of n",
        solution: "$u_{2r-1} = \\frac{24}{125}(5^{4r})$. GP sum $= \\frac{24}{125}\\cdot\\frac{5^4(5^{4n}-1)}{5^4-1} = \\frac{5}{26}(5^{4n}-1)$."
      },
      {
        label: "(c)", marks: 3,
        prompt: "Show that $\\sum_{r=1}^n \\ln(u_r) = an + bn^2$, finding exact $a$ and $b$.",
        type: "auto", mode: "multi-field",
        fields: [
          { label: "a =", answer: "ln(24)", exactRequired: true },
          { label: "b =", answer: "ln(5)", exactRequired: true }
        ],
        solution: "$\\sum_{r=1}^n [\\ln(\\frac{24}{5}) + 2r\\ln 5] = n\\ln\\frac{24}{5} + 2\\ln 5\\cdot\\frac{n(n+1)}{2} = (\\ln 24)n + (\\ln 5)n^2$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q5", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q5", category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto 3x|x-2|$, $x \\in \\mathbb{R}$, $0 < x \\le 1$.",
    parts: [
      {
        label: "(a)", marks: 2,
        prompt: "Show that $\\mathrm{f}$ has an inverse.",
        type: "self",
        solution: "For $0 < x \\le 1$, $\\mathrm{f}(x) = 3x(2-x)$, which is strictly increasing on $(0, 1]$ with max at $(1, 3)$. Every horizontal line $y=k$ cuts $y=\\mathrm{f}(x)$ at most once, so $\\mathrm{f}$ is 1-1 and $\\mathrm{f}^{-1}$ exists."
      },
      {
        label: "(b)", marks: 4,
        prompt: "Find $\\mathrm{f}^{-1}(x)$ and state the domain of $\\mathrm{f}^{-1}$.",
        type: "self",
        solution: "$y = 3(2x - x^2) = 3[1 - (x-1)^2] \\implies x = 1 - \\sqrt{1 - \\frac{y}{3}}$ (since $0 < x \\le 1$).<br>$\\mathrm{f}^{-1}(x) = 1 - \\sqrt{1 - \\frac{x}{3}}$, $\\mathrm{D_{f^{-1}}} = (0, 3]$."
      },
      {
        label: "(c)", marks: 2,
        prompt: "It is given that $\\mathrm{g}(x) = 2x - 2$ for $0 \\le x \\le 2$ and $\\frac{4-x}{x-1}$ for $2 < x < 4$. Sketch $y = \\mathrm{g}(x)$ for $0 \\le x < 4$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 160" width="225" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="80" x2="220" y2="80" stroke-width="1.3"/><line x1="50" y1="150" x2="50" y2="12" stroke-width="1.3"/><line x1="50" y1="130" x2="115" y2="30" stroke="#4a8fe7" stroke-width="2"/><path d="M 115 30 Q 138 68 180 80" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="50" cy="130" r="2.5" fill="#4a8fe7"/><circle cx="115" cy="30" r="2.5" fill="#4a8fe7"/><circle cx="180" cy="80" r="2.5" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/><text x="14" y="133" stroke="none">(0,−2)</text><text x="118" y="27" stroke="none">(2,2)</text><text x="178" y="95" stroke="none">(4,0)</text></svg>`,
        solution: "Line segment from $(0, -2)$ to $(2, 2)$, then decreasing rational curve from $(2, 2)$ to open circle $(4, 0)$."
      },
      {
        label: "(d)", marks: 1,
        prompt: "Show that the composite function $\\mathrm{gf}$ exists.",
        type: "self",
        solution: "$\\mathrm{R_f} = (0, 3] \\subseteq [0, 4) = \\mathrm{D_g}$, hence $\\mathrm{gf}$ exists."
      },
      {
        label: "(e)", marks: 2,
        prompt: "Find the range of $\\mathrm{gf}$.",
        type: "self",
        solution: "$\\mathrm{D_f} = (0, 1] \\xrightarrow{\\mathrm{f}} (0, 3] \\xrightarrow{\\mathrm{g}} (-2, 2]$. Thus $\\mathrm{R_{gf}} = (-2, 2]$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q6", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q6", category: "pure",
    topics: ["Vectors"],
    stem: "Points $A$ and $B$ have non-zero, non-parallel position vectors $\\mathbf{a}$ and $\\mathbf{b}$.",
    parts: [
      {
        label: "(a)", marks: 3,
        prompt: "Given $\\mathbf{u} = \\mathbf{a} + \\mathbf{b}$ and $\\mathbf{v} = \\mathbf{a} - 2\\mathbf{b}$ have equal magnitudes, use scalar products to show $|\\mathbf{b}| = 2|\\mathbf{a}|\\cos\\theta$, where $\\theta$ is the angle between $\\mathbf{a}$ and $\\mathbf{b}$.",
        type: "self",
        solution: "$(\\mathbf{a}+\\mathbf{b})\\cdot(\\mathbf{a}+\\mathbf{b}) = (\\mathbf{a}-2\\mathbf{b})\\cdot(\\mathbf{a}-2\\mathbf{b}) \\implies 6(\\mathbf{a}\\cdot\\mathbf{b}) = 3|\\mathbf{b}|^2 \\implies 2|\\mathbf{a}||\\mathbf{b}|\\cos\\theta = |\\mathbf{b}|^2 \\implies |\\mathbf{b}| = 2|\\mathbf{a}|\\cos\\theta$."
      },
      {
        label: "(b)", marks: 1,
        prompt: "Given $\\mathbf{a}$ is a unit vector and $\\theta = 30^\\circ$, show $|\\mathbf{b}| = \\sqrt{3}$.",
        type: "self",
        solution: "$|\\mathbf{b}| = 2(1)\\cos 30^\\circ = 2\\left(\\frac{\\sqrt{3}}{2}\\right) = \\sqrt{3}$."
      },
      {
        label: "(c)", marks: 4,
        prompt: "$P$ lies on $AB$ with $AP:PB = 2:1$. $N$ lies on line $OB$ such that $\\overrightarrow{PN} \\perp \\overrightarrow{OB}$. Find $\\overrightarrow{OP}$ in terms of $\\mathbf{a}, \\mathbf{b}$ and $\\overrightarrow{ON}$ in terms of $\\mathbf{b}$.",
        type: "self",
        solution: "$\\overrightarrow{OP} = \\frac{1}{3}(2\\mathbf{b}+\\mathbf{a})$. Letting $\\overrightarrow{ON} = k\\mathbf{b}$, $(k\\mathbf{b} - \\overrightarrow{OP})\\cdot\\mathbf{b} = 0 \\implies 3k - \\frac{1}{3}(\\frac{3}{2}) - \\frac{2}{3}(3) = 0 \\implies k = \\frac{5}{6}$, so $\\overrightarrow{ON} = \\frac{5}{6}\\mathbf{b}$."
      },
      {
        label: "(d)", marks: 3,
        prompt: "Using a suitable vector product, find the <strong>exact</strong> shortest distance from $P$ to the line $OB$.",
        type: "auto", mode: "number", exactRequired: true, answer: "1/6", placeholder: "Exact value",
        solution: "$|\\overrightarrow{PN}| = \\left|\\frac{\\overrightarrow{OP}\\times\\mathbf{b}}{|\\mathbf{b}|}\\right| = \\frac{1}{3}\\left|\\mathbf{a}\\times\\frac{\\mathbf{b}}{|\\mathbf{b}|}\\right| = \\frac{1}{3}|\\mathbf{a}|\\sin 30^\\circ = \\frac{1}{6}$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q7", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q7", category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 260 165" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="12" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="140" x2="225" y2="140" stroke-dasharray="4,3" stroke-width="1.2"/><line x1="185" y1="20" x2="185" y2="140" stroke-width="1.3"/><rect x="182" y="25" width="6" height="62" fill="#e0726e" stroke-width="1.2"/><line x1="45" y1="140" x2="182" y2="25" stroke="#4a8fe7" stroke-width="1.4"/><line x1="45" y1="140" x2="182" y2="87" stroke="#4a8fe7" stroke-width="1.4"/><text x="195" y="60" stroke="none" font-style="italic">h</text><text x="195" y="116" stroke="none" font-style="italic">d</text><text x="115" y="155" stroke="none" font-style="italic">x</text><text x="90" y="115" stroke="none" font-style="italic">θ</text><text x="20" y="144" stroke="none" font-size="10">Eye</text></svg>`,
    stem: "A digital screen of height $h\\text{ m}$ is mounted on a wall, $d\\text{ m}$ above eye level. An observer stands $x\\text{ m}$ away; $\\theta$ is the angle subtended by the screen.",
    parts: [
      {
        label: "(a)", marks: 1,
        prompt: "Show that $\\theta = \\tan^{-1}\\left(\\frac{d+h}{x}\\right) - \\tan^{-1}\\left(\\frac{d}{x}\\right)$.",
        type: "self",
        solution: "$\\theta = \\alpha - \\beta = \\tan^{-1}\\left(\\frac{d+h}{x}\\right) - \\tan^{-1}\\left(\\frac{d}{x}\\right)$."
      },
      {
        label: "(b)", marks: 2,
        prompt: "Using $\\tan(A-B) = \\frac{\\tan A - \\tan B}{1 + \\tan A\\tan B}$, show that $\\tan\\theta = \\frac{hx}{x^2+dh+d^2}$.",
        type: "self",
        solution: "$\\tan\\theta = \\frac{\\frac{d+h}{x}-\\frac{d}{x}}{1+\\frac{d(d+h)}{x^2}} = \\frac{hx}{x^2+dh+d^2}$."
      },
      {
        label: "(c)", marks: 4,
        prompt: "Use differentiation to find, in terms of $d$ and $h$, the value of $x$ which gives the maximum value of $\\theta$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { d: [2, 3], h: [3, 5] }, answer: "sqrt(d*(d+h))", placeholder: "Expression in d and h",
        solution: "$\\sec^2\\theta\\frac{\\mathrm{d}\\theta}{\\mathrm{d}x} = \\frac{h(d^2+dh-x^2)}{(x^2+dh+d^2)^2} = 0 \\implies x = \\sqrt{d(d+h)}$ (since $x > 0$)."
      },
      {
        label: "(d)", marks: 3,
        prompt: "Suppose $h = 3\\text{ m}$ and $d = 2\\text{ m}$. The observer walks towards the wall at $0.5\\text{ m/s}$. Find the rate of change of $\\theta$ (in rad/s) when $x = 4\\text{ m}$.",
        type: "auto", mode: "number", answer: "9/820", placeholder: "Exact fraction or 3 s.f.",
        solution: "$\\frac{\\mathrm{d}\\theta}{\\mathrm{d}x} = -\\frac{5}{x^2+25} + \\frac{2}{x^2+4}$. At $x=4$ and $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -0.5$: $\\frac{\\mathrm{d}\\theta}{\\mathrm{d}t} = \\left(-\\frac{5}{41}+\\frac{2}{20}\\right)(-0.5) = \\frac{9}{820} \\approx 0.0110\\text{ rad/s}$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q8", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q8", category: "pure",
    topics: ["Complex Numbers"],
    stem: "<em>Do not use a calculator in answering this question.</em>",
    parts: [
      {
        label: "(a)", marks: 1,
        prompt: "Show that for any complex numbers $z$ and $w$, $(z-w)(z-w^*) = z^2 - 2\\operatorname{Re}(w)z + |w|^2$.",
        type: "self",
        solution: "$(z-w)(z-w^*) = z^2 - (w+w^*)z + ww^* = z^2 - 2\\operatorname{Re}(w)z + |w|^2$."
      },
      {
        label: "(b)(i)", marks: 1,
        prompt: "The equation $z^3 + pz^2 + qz + 16 = 0$ ($p, q \\in \\mathbb{R}$) has roots $-2$ and $w$. Show it can be expressed as $(z+2)(z^2 - 2\\operatorname{Re}(w)z + |w|^2) = 0$ and deduce $|w| = 2\\sqrt{2}$.",
        type: "self",
        solution: "Since $p, q \\in \\mathbb{R}$, $w^*$ is also a root, giving $(z+2)(z-w)(z-w^*) = 0$. Comparing constant terms: $2|w|^2 = 16 \\implies |w| = 2\\sqrt{2}$."
      },
      {
        label: "(b)(ii)", marks: 2,
        prompt: "Given $\\arg(w) = \\frac{3\\pi}{4}$, find all three roots of the cubic equation.",
        type: "auto", mode: "complex-list", answer: ["-2", "-2+2i", "-2-2i"], placeholder: "All 3 roots separated by commas",
        solution: "$w = 2\\sqrt{2}(\\cos\\frac{3\\pi}{4} + \\mathrm{i}\\sin\\frac{3\\pi}{4}) = -2 + 2\\mathrm{i}$. Roots are $-2$, $-2+2\\mathrm{i}$, $-2-2\\mathrm{i}$."
      },
      {
        label: "(b)(iii)", marks: 2,
        prompt: "Hence determine the values of $p$ and $q$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "p =", answer: "6", exactRequired: true }, { label: "q =", answer: "16", exactRequired: true }],
        solution: "$(z+2)(z^2+4z+8) = z^3 + 6z^2 + 16z + 16 \\implies p = 6, q = 16$."
      },
      {
        label: "(c)(i)", marks: 2,
        prompt: "$v = \\lambda\\mathrm{i}^3 w$ ($\\lambda > 0$). Describe a sequence of two geometric transformations that maps $A(w)$ onto $B(v)$.",
        type: "self",
        solution: "$v = -\\lambda\\mathrm{i}w$: rotate $A$ through $\\frac{\\pi}{2}$ clockwise about $O$, then scale by factor $\\lambda$."
      },
      {
        label: "(c)(ii)-(iii)", marks: 3,
        prompt: "$C$ represents $u = v+w$. Sketch $A, B, C$ on an Argand diagram, and given area of $OACB$ is $24\\text{ units}^2$, determine $\\lambda$.",
        type: "auto", mode: "number", exactRequired: true, answer: "3", placeholder: "Value of λ",
        solution: "$OACB$ is a rectangle with $OA = |w| = 2\\sqrt{2}$ and $OB = \\lambda|w|$. Area $= \\lambda|w|^2 = 8\\lambda = 24 \\implies \\lambda = 3$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q9", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q9", category: "pure",
    topics: ["Integration"],
    diagramSvg: `<svg viewBox="0 0 260 155" width="245" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="130" x2="245" y2="130" stroke-width="1.3"/><line x1="38" y1="145" x2="38" y2="12" stroke-width="1.3"/><line x1="38" y1="35" x2="235" y2="35" stroke-dasharray="4,3" stroke-width="1.1"/><text x="236" y="39" stroke="none">y = 1</text><line x1="125" y1="18" x2="125" y2="130" stroke-width="1.2"/><text x="125" y="144" text-anchor="middle" stroke="none" font-style="italic">x = k</text><path d="M 38 130 Q 75 68 125 54 T 230 40" fill="none" stroke="#4a8fe7" stroke-width="2"/></svg>`,
    stem: "Curve $C$ has equation $y = \\frac{x}{\\sqrt{1+x^2}}$ for $x \\ge 0$. Region $R$ is bounded by $C$, the $x$-axis and $x = k$ ($k > 0$).",
    parts: [
      {
        label: "(a)", marks: 3,
        prompt: "Find the volume $V$ formed when $R$ is rotated $2\\pi$ radians about the $x$-axis, in terms of $k$ and $\\pi$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { k: [1, 2] }, answer: "pi*(k - atan(k))", placeholder: "Expression in k and pi (use atan)",
        solution: "$V = \\pi\\int_0^k \\frac{x^2}{1+x^2}\\,\\mathrm{d}x = \\pi\\int_0^k\\left(1 - \\frac{1}{1+x^2}\\right)\\mathrm{d}x = \\pi(k - \\tan^{-1}k)$."
      },
      {
        label: "(b)(i)", marks: 2,
        prompt: "Find the area of $R$ in terms of $k$.",
        type: "auto", mode: "expr", exactRequired: true, vars: { k: [1, 2] }, answer: "sqrt(1+k^2) - 1", placeholder: "Expression in terms of k",
        solution: "$\\int_0^k x(1+x^2)^{-1/2}\\,\\mathrm{d}x = [\\sqrt{1+x^2}]_0^k = \\sqrt{1+k^2} - 1$."
      },
      {
        label: "(b)(ii)-(iii)", marks: 4,
        prompt: "For $k = 1$, $n$ right-endpoint rectangles approximate $R$. Illustrate why this is an overestimate and show $\\frac{1}{n}\\sum_{r=1}^n \\frac{r}{\\sqrt{n^2+r^2}} > \\sqrt{2} - 1$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 140" width="210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="120" x2="205" y2="120" stroke-width="1.3"/><line x1="35" y1="132" x2="35" y2="14" stroke-width="1.3"/><g fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1"><rect x="35" y="102" width="38" height="18"/><rect x="73" y="84" width="38" height="36"/><rect x="111" y="68" width="38" height="52"/><rect x="149" y="54" width="38" height="66"/></g><path d="M 35 120 Q 95 76 187 54" fill="none" stroke="#2c2925" stroke-width="1.8"/><text x="187" y="133" text-anchor="middle" stroke="none">1</text></svg>`,
        solution: "Since $y$ is strictly increasing on $[0, 1]$, each right-endpoint rectangle exceeds the curve. Total rectangle area $= \\frac{1}{n}\\sum_{r=1}^n \\frac{r/n}{\\sqrt{1+(r/n)^2}} = \\frac{1}{n}\\sum_{r=1}^n \\frac{r}{\\sqrt{n^2+r^2}} > \\sqrt{2}-1$."
      }
    ]
  },
  {
    id: "SAJC-2026-P1-Q10", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q10", category: "pure",
    topics: ["Vectors"],
    diagramSvg: `<svg viewBox="0 0 240 205" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polygon points="65,120 155,120 185,95 95,95" fill="none" stroke-width="1.3"/><line x1="65" y1="120" x2="65" y2="170" stroke-width="1.3"/><line x1="155" y1="120" x2="155" y2="170" stroke-width="1.3"/><line x1="185" y1="95" x2="185" y2="145" stroke-width="1.3"/><line x1="95" y1="95" x2="95" y2="145" stroke-dasharray="3,3" stroke-width="1.1"/><line x1="65" y1="170" x2="155" y2="170" stroke-width="1.3"/><line x1="155" y1="170" x2="185" y2="145" stroke-width="1.3"/><line x1="65" y1="170" x2="95" y2="145" stroke-dasharray="3,3" stroke-width="1.1"/><line x1="95" y1="145" x2="185" y2="145" stroke-dasharray="3,3" stroke-width="1.1"/><polyline points="65,120 125,22 155,120" fill="none" stroke="#4a8fe7" stroke-width="1.5"/><line x1="125" y1="22" x2="185" y2="95" stroke="#4a8fe7" stroke-width="1.5"/><line x1="125" y1="22" x2="95" y2="95" stroke="#4a8fe7" stroke-dasharray="3,3" stroke-width="1.3"/><text x="125" y="16" text-anchor="middle" stroke="none" font-style="italic">V</text><text x="53" y="122" stroke="none" font-style="italic">A</text><text x="160" y="126" stroke="none" font-style="italic">B</text><text x="190" y="96" stroke="none" font-style="italic">C</text><text x="53" y="176" stroke="none" font-style="italic">E</text><text x="160" y="178" stroke="none" font-style="italic">F</text><text x="124" y="162" stroke="none" font-style="italic">O</text></svg>`,
    stem: "A right pyramid $VABCD$ ($VA=VB=VC=VD=5$) is placed on cuboid $ABCDEFGH$ ($EF=EH=4, EA=2$). $O$ is the centre of $EFGH$, with unit vectors $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ parallel to $EF, EH, EA$.",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that $\\overrightarrow{OV} = \\begin{pmatrix}0\\\\0\\\\2+\\sqrt{17}\\end{pmatrix}$.", type: "self", solution: "From centre $M$ of $ABCD$, $AM = \\sqrt{2^2+2^2}=\\sqrt{8}$, so $VM = \\sqrt{5^2-8}=\\sqrt{17}$, hence $VO = 2+\\sqrt{17}$." },
      { label: "(b)", marks: 1, prompt: "State the geometrical meaning of $\\frac{1}{2+\\sqrt{17}}|\\overrightarrow{OV}\\cdot\\overrightarrow{VA}|$.", type: "self", solution: "Length of projection of $\\overrightarrow{VA}$ onto $\\overrightarrow{OV}$." },
      { label: "(c)", marks: 3, prompt: "Find the equation of plane $VBC$ in the form $ax+by+cz=d$.", type: "self", solution: "$\\mathbf{n} = \\overrightarrow{BC}\\times\\overrightarrow{VB} = \\begin{pmatrix}-\\sqrt{17}\\\\0\\\\-2\\end{pmatrix} \\implies \\sqrt{17}x + 2z = 2\\sqrt{17}+4$." },
      { label: "(d)", marks: 5, prompt: "$X$ lies on $AC$ with $AX:XC=3:1$. Find line $VX$ and determine whether it intersects plane $EFGH$ within or outside $EFGH$.", type: "self", solution: "$\\overrightarrow{OX} = \\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix}$, $l_{VX}: \\mathbf{r} = \\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\1\\\\-\\sqrt{17}\\end{pmatrix}$. At $z=0$, intersection is $(1+\\frac{2}{\\sqrt{17}}, 1+\\frac{2}{\\sqrt{17}}, 0) \\approx (1.49, 1.49, 0)$, which lies <strong>within</strong> $EFGH$ ($-2\\le x, y\\le 2$)." }
    ]
  },
  {
    id: "SAJC-2026-P1-Q11", year: 2026, school: "SAJC", paper: "2026 Prelim Paper 1", qNum: "Q11", category: "pure",
    topics: ["Differential Equations"],
    stem: "The birth rate of marsupials is proportional to $P$ and death rate is proportional to $P^2$. When $P = N$, the population stabilizes.",
    parts: [
      { label: "(a)", marks: 3, prompt: "Write down a differential equation and show $\\frac{\\mathrm{d}P}{\\mathrm{d}t} = kP\\left(1-\\frac{P}{N}\\right)$ ($k > 0$).", type: "self", solution: "$\\frac{\\mathrm{d}P}{\\mathrm{d}t} = aP - bP^2$. At $P=N, \\frac{\\mathrm{d}P}{\\mathrm{d}t}=0 \\implies b = \\frac{a}{N}$, giving $\\frac{\\mathrm{d}P}{\\mathrm{d}t} = kP(1-\\frac{P}{N})$." },
      { label: "(b)", marks: 5, prompt: "Initially $P = P_0 < N$. Show that $kt = \\ln\\left[\\frac{P}{P_0}\\left(\\frac{N-P_0}{N-P}\\right)\\right]$.", type: "self", solution: "By partial fractions: $\\int\\left(\\frac{1}{P}+\\frac{1}{N-P}\\right)\\mathrm{d}P = \\int k\\,\\mathrm{d}t \\implies \\frac{P}{N-P} = \\frac{P_0}{N-P_0}\\mathrm{e}^{kt}$." },
      { label: "(c)", marks: 2, prompt: "After $10$ years, $P = 4P_0$ and $N = 5P_0$. Find the <strong>exact</strong> value of $k$.", type: "auto", mode: "number", exactRequired: true, answer: "ln(16)/10", placeholder: "Exact value",
        solution: "$10k = \\ln\\left(4\\cdot\\frac{4P_0}{P_0}\\right) = \\ln 16 \\implies k = \\frac{1}{10}\\ln 16 = \\frac{1}{5}\\ln 4 = \\frac{2}{5}\\ln 2$." },
      { label: "(d)", marks: 3, prompt: "Hence show $P = \\frac{5P_0}{1 + 2^{2-0.4t}}$ and sketch $P$ against $t$.", type: "self",
        solutionSvg: `<svg viewBox="0 0 240 140" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="30" y1="120" x2="225" y2="120" stroke-width="1.3"/><line x1="42" y1="130" x2="42" y2="12" stroke-width="1.3"/><line x1="42" y1="30" x2="220" y2="30" stroke-dasharray="4,3" stroke-width="1.1"/><text x="36" y="34" text-anchor="end" stroke="none">5P₀</text><text x="36" y="102" text-anchor="end" stroke="none">P₀</text><path d="M 42 98 C 85 90, 110 42, 215 33" fill="none" stroke="#4a8fe7" stroke-width="2"/></svg>`,
        solution: "S-curve starting at $(0, P_0)$ and rising asymptotically towards $P = 5P_0$." },
      { label: "(e)-(f)", marks: 2, prompt: "Explain the significance of $N$ in context, and describe how reducing predators (with same limited vegetation) changes the graph in (d).", type: "self", solution: "(e) $N$ is the carrying capacity (max sustainable population).<br>(f) Curve becomes steeper (approaches $P = N$ more rapidly)." }
    ]
  }
]);