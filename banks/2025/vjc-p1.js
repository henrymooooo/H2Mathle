window.registerQuestions([
  // =========================================================================
  // VJC 2025 PRELIM PAPER 1 (9758/01)
  // =========================================================================

  // ── Q1 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q1",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Inequalities", "Logarithms"],
    stem: "",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Using an algebraic method, solve the inequality $\\frac{4x-3}{4x^2+3x-1} \\le 1$.",
        type: "self",
        solution: "$\\frac{4x-3}{4x^2+3x-1} \\le 1$<br>$\\frac{4x-3}{4x^2+3x-1} - 1 \\le 0$<br>$\\frac{4x-3-(4x^2+3x-1)}{(x+1)(4x-1)} \\le 0$<br>$\\frac{-4x^2+x-2}{(x+1)(4x-1)} \\le 0$<br>$\\frac{4x^2-x+2}{(x+1)(4x-1)} \\ge 0$<br><br>Completing the square (or checking discriminant) for the numerator:<br>$4x^2-x+2 = 4\\left(x-\\frac{1}{8}\\right)^2 + \\frac{31}{16} > 0$ for all real $x$ (alternatively, coefficient of $x^2$ is $4 > 0$ and discriminant $(-1)^2 - 4(4)(2) = -31 < 0$).<br><br>Thus $(x+1)(4x-1) > 0$.<br>$\\therefore x < -1$ or $x > \\frac{1}{4}$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Hence, find the set of values of $x$ that satisfy $\\frac{4\\ln x - 3}{4(\\ln x)^2 + 3\\ln x - 1} \\le 1$.",
        type: "self",
        solution: "Replace $x$ with $\\ln x$ in the result from part (i):<br>$\\ln x < -1$ or $\\ln x > \\frac{1}{4}$<br>Since $x > 0$ for $\\ln x$ to be defined:<br>$0 < x < \\mathrm{e}^{-1}$ or $x > \\mathrm{e}^{\\frac{1}{4}}$.<br><br>Set of values of $x$: $\\{x \\in \\mathbb{R} : 0 < x < \\mathrm{e}^{-1} \\text{ or } x > \\mathrm{e}^{\\frac{1}{4}}\\}$."
      }
    ]
  },

  // ── Q2 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q2",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Functions", "Composite Functions", "Inverse Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $$\\mathrm{f} : x \\mapsto \\frac{x-1}{x}, \\quad x \\in \\mathbb{R}, \\; x \\ne 0, \\; x \\ne 1.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $\\mathrm{f}^2(x) = \\mathrm{f}^{-1}(x)$.",
        type: "self",
        solution: "Let $y = \\frac{x-1}{x} = 1 - \\frac{1}{x}$.<br>$\\frac{1}{x} = 1 - y \\implies x = \\frac{1}{1-y}$.<br>Hence $\\mathrm{f}^{-1}(x) = \\frac{1}{1-x}$.<br><br>Also,<br>$\\mathrm{f}^2(x) = \\mathrm{f}\\left(\\frac{x-1}{x}\\right) = \\frac{\\frac{x-1}{x} - 1}{\\frac{x-1}{x}} = \\frac{x-1-x}{x-1} = \\frac{-1}{x-1} = \\frac{1}{1-x}$.<br>$\\therefore \\mathrm{f}^2(x) = \\mathrm{f}^{-1}(x)$ (shown)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Find $\\mathrm{f}^3(x)$ in simplified form.",
        type: "auto",
        mode: "expr",
        vars: { x: [2, 5, -3] },
        answer: "x",
        placeholder: "Simplified expression in x",
        solution: "Since $\\mathrm{f}^2(x) = \\mathrm{f}^{-1}(x)$,<br>$\\mathrm{f}^3(x) = \\mathrm{f}\\left(\\mathrm{f}^2(x)\\right) = \\mathrm{f}\\left(\\mathrm{f}^{-1}(x)\\right) = x$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find $\\mathrm{f}^{2030}(5)$.",
        type: "auto",
        mode: "number",
        answer: "-1/4",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $\\mathrm{f}^3(x) = x$ and $2030 = 3(676) + 2$:<br>$\\mathrm{f}^{2030}(5) = \\mathrm{f}^{3(676)+2}(5) = \\mathrm{f}^2(5) = \\frac{1}{1-5} = -\\frac{1}{4}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Functions $\\mathrm{g}$ and $\\mathrm{h}$ are defined by<br>$$\\mathrm{g} : x \\mapsto \\frac{x-1}{x}, \\quad x \\in \\mathbb{R}, \\; x \\ge 1,$$<br>$$\\mathrm{h} : x \\mapsto -\\sin ax, \\quad x \\in \\mathbb{R},$$<br>where $a$ is a positive constant.<br>Find the value of $a$ given that the range of $\\mathrm{hg}$ is $(-1, 0]$.",
        type: "auto",
        mode: "number",
        answer: "pi/2",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solutionSvg: `<svg viewBox="0 0 320 150" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="75" x2="295" y2="75" stroke-width="1.2"/>
  <polyline points="290,71 296,75 290,79" fill="none" stroke-width="1.2"/>
  <line x1="50" y1="135" x2="50" y2="15" stroke-width="1.2"/>
  <polyline points="46,20 50,14 54,20" fill="none" stroke-width="1.2"/>
  <text x="300" y="79" stroke="none" font-style="italic">x</text>
  <text x="45" y="12" stroke="none" font-style="italic">y</text>
  <text x="38" y="87" stroke="none" font-style="italic">O</text>
  <line x1="45" y1="30" x2="280" y2="30" stroke-dasharray="4,3" opacity="0.5"/>
  <line x1="45" y1="120" x2="280" y2="120" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="36" y="34" stroke="none">1</text>
  <text x="30" y="124" stroke="none">−1</text>
  <path d="M 50,75 C 70,120 85,120 105,120 C 125,120 140,120 160,75 C 180,30 195,30 215,30 C 235,30 250,30 270,75" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <line x1="105" y1="75" x2="105" y2="120" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="97" y="64" stroke="none">π/(2a)</text>
  <text x="155" y="92" stroke="none">π/a</text>
  <text x="262" y="92" stroke="none">2π/a</text>
  <text x="200" y="22" stroke="none" fill="#4a8fe7">y = −sin ax</text>
</svg>`,
        solution: "For $\\mathrm{g}(x) = 1 - \\frac{1}{x}$ with $x \\ge 1$, the range of $\\mathrm{g}$ is $[0, 1)$, which is the domain of $\\mathrm{h}$ in $\\mathrm{hg}$.<br>For $\\mathrm{h}(x) = -\\sin ax$ on $[0, 1)$ to have range $(-1, 0]$ (not including $-1$), the right endpoint $x = 1$ must correspond to the first minimum of $-\\sin ax$ at $ax = \\frac{\\pi}{2}$.<br>Thus $\\frac{\\pi}{2a} = 1 \\implies a = \\frac{\\pi}{2}$."
      }
    ]
  },

  // ── Q3 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q3",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors", "Ratio Theorem", "Vector Projection"],
    stem: "Referred to the origin $O$, points $A$ and $B$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$ respectively. Point $C$ lies on $OA$, such that $OC : CA = 2 : 1$. Point $D$ lies on $OB$, such that $OD : DB = \\lambda : \\mu$. It is given that the area of triangle $ABD$ is half the area of triangle $ABC$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show the area of triangle $ABD$ is given by $\\frac{\\mu}{2(\\lambda+\\mu)}|\\mathbf{a} \\times \\mathbf{b}|$. Hence find the ratio $\\lambda : \\mu$.",
        type: "self",
        solution: "Since $OD : DB = \\lambda : \\mu$, $DB = \\frac{\\mu}{\\lambda+\\mu}\\mathbf{b}$ and $AB = \\mathbf{b} - \\mathbf{a}$.<br>Area of △$ABD$ $= \\frac{1}{2}|DB \\times AB| = \\frac{1}{2}\\left|\\frac{\\mu}{\\lambda+\\mu}\\mathbf{b} \\times (\\mathbf{b} - \\mathbf{a})\\right| = \\frac{\\mu}{2(\\lambda+\\mu)}|\\mathbf{b} \\times \\mathbf{b} - \\mathbf{b} \\times \\mathbf{a}| = \\frac{\\mu}{2(\\lambda+\\mu)}|\\mathbf{a} \\times \\mathbf{b}|$ (shown).<br><br>Similarly, $CA = \\frac{1}{3}\\mathbf{a}$, so:<br>Area of △$ABC$ $= \\frac{1}{2}|CA \\times AB| = \\frac{1}{2}\\left|\\frac{1}{3}\\mathbf{a} \\times (\\mathbf{b} - \\mathbf{a})\\right| = \\frac{1}{6}|\\mathbf{a} \\times \\mathbf{b}|$.<br><br>Given Area of △$ABD$ $= \\frac{1}{2}$(Area of △$ABC$):<br>$\\frac{\\mu}{2(\\lambda+\\mu)}|\\mathbf{a} \\times \\mathbf{b}| = \\frac{1}{2}\\left(\\frac{1}{6}|\\mathbf{a} \\times \\mathbf{b}|\\right)$<br>$\\frac{\\mu}{2(\\lambda+\\mu)} = \\frac{1}{12} \\implies 6\\mu = \\lambda + \\mu \\implies \\lambda = 5\\mu$.<br>$\\therefore \\lambda : \\mu = 5 : 1$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The point $E$ has position vector $\\frac{1}{4}\\mathbf{a} + \\frac{5}{8}\\mathbf{b}$. Show that $A$, $E$ and $D$ are collinear.",
        type: "self",
        solution: "$AE = OE - OA = \\left(\\frac{1}{4}\\mathbf{a} + \\frac{5}{8}\\mathbf{b}\\right) - \\mathbf{a} = -\\frac{3}{4}\\mathbf{a} + \\frac{5}{8}\\mathbf{b}$.<br>From part (a), $\\lambda : \\mu = 5 : 1$, so $OD = \\frac{5}{6}\\mathbf{b}$.<br>$AD = OD - OA = -\\mathbf{a} + \\frac{5}{6}\\mathbf{b} = \\frac{4}{3}\\left(-\\frac{3}{4}\\mathbf{a} + \\frac{5}{8}\\mathbf{b}\\right) = \\frac{4}{3}AE$.<br>Since $AD = \\frac{4}{3}AE$ and $A$ is a common point, $A$, $E$ and $D$ are collinear."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "It is further given that the angle $AOB$ is $\\frac{\\pi}{4}$ and $O$ lies on the perpendicular bisector of the line segment $AB$.<br>Find the length of projection of $\\mathbf{a}$ on $\\mathbf{b}$, giving your answer in terms of $|\\mathbf{b}|$. Hence find the position vector of the point $F$, the foot of perpendicular from $A$ to $OB$.",
        type: "self",
        solution: "Since $O$ lies on the perpendicular bisector of $AB$, $OA = OB$, i.e. $|\\mathbf{a}| = |\\mathbf{b}|$.<br>Length of projection of $\\mathbf{a}$ on $\\mathbf{b}$:<br>$= |\\mathbf{a} \\cdot \\hat{\\mathbf{b}}| = |\\mathbf{a}|\\cos\\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}}|\\mathbf{b}|$ (or $\\frac{\\sqrt{2}}{2}|\\mathbf{b}|$).<br><br>Since ∠$AOB = \\frac{\\pi}{4}$ is acute, $OF$ is in the same direction as $\\mathbf{b}$:<br>$OF = \\left(\\frac{1}{\\sqrt{2}}|\\mathbf{b}|\\right)\\hat{\\mathbf{b}} = \\frac{1}{\\sqrt{2}}|\\mathbf{b}|\\frac{\\mathbf{b}}{|\\mathbf{b}|} = \\frac{1}{\\sqrt{2}}\\mathbf{b}$."
      }
    ]
  },

  // ── Q4 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q4",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Sequences and Series", "Recurrence Relations", "Arithmetic Progression"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "A sequence is such that $u_1 = p$, where $p$ is a constant and $u_{n+1} = \\frac{5u_n}{8u_n + 1}$, for $n \\ge 1$.<br>Describe how the sequence behaves when $p = 1$.",
        type: "self",
        solution: "When $p = 1$:<br>$u_1 = 1, \\; u_2 = \\frac{5}{9} \\approx 0.556, \\; u_3 = \\frac{25}{49} \\approx 0.510, \\; u_4 = \\frac{125}{249} \\approx 0.502, \\; u_5 = \\frac{625}{1245} \\approx 0.502, \\ldots$<br>The sequence is a <strong>decreasing</strong> sequence, and it <strong>converges to $\\frac{1}{2}$</strong>."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find the value of $p$ for which $u_6 = \\frac{3125}{6253}$.",
        type: "auto",
        mode: "number",
        answer: "1/5",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Express $u_n$ in terms of $u_{n+1}$:<br>$u_{n+1} = \\frac{5u_n}{8u_n + 1} \\implies 8u_n u_{n+1} + u_{n+1} = 5u_n \\implies u_n(5 - 8u_{n+1}) = u_{n+1} \\implies u_n = \\frac{u_{n+1}}{5 - 8u_{n+1}}$.<br>Working backwards from $u_6 = \\frac{3125}{6253}$ (or using GC):<br>$u_5 = \\frac{625}{1253}, \\; u_4 = \\frac{125}{253}, \\; u_3 = \\frac{25}{53}, \\; u_2 = \\frac{5}{13}, \\; u_1 = \\frac{1}{5}$.<br>$\\therefore p = \\frac{1}{5}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Another sequence $v_1, v_2, v_3, \\ldots$ is such that for all $n \\ge 1$, $v_{n+2} - 2v_{n+1} + v_n = k$, where $k$ is a constant.<br>Let $w_n = v_{n+1} - v_n$ for $n \\ge 1$. Explain why the sequence $\\{w_n\\}$ is an arithmetic progression.",
        type: "self",
        solution: "For all $n \\ge 1$:<br>$w_{n+1} - w_n = (v_{n+2} - v_{n+1}) - (v_{n+1} - v_n) = v_{n+2} - 2v_{n+1} + v_n = k$,<br>which is a constant independent of $n$.<br>Hence $\\{w_n\\}$ is an arithmetic progression (with common difference $k$)."
      }
    ]
  },

  // ── Q5 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q5",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Graphing Techniques", "Periodic Functions", "Conic Sections"],
    stem: "The function $\\mathrm{f}$ is given by<br>$\\mathrm{f}(x) = 2 + \\sqrt{2^2 - (x-2)^2}$ for $0 < x \\le 4$,<br>$\\mathrm{f}(x) = 2 - \\sqrt{2^2 - (x-6)^2}$ for $4 < x \\le 8$.<br>It is given that $\\mathrm{f}(x) = \\mathrm{f}(x+8)$ for all real values of $x$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$ for $-6 \\le x \\le 7$, indicating clearly the coordinates of the end points and the points where the graph cuts the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 360 170" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Scale: x in [-7, 8] -> 1 unit = 20px, x=0 at 160; y in [-1, 5] -> 1 unit = 25px, y=0 at 135 -->
  <line x1="20" y1="135" x2="340" y2="135" stroke-width="1.2"/>
  <polyline points="335,131 341,135 335,139" fill="none" stroke-width="1.2"/>
  <line x1="160" y1="160" x2="160" y2="15" stroke-width="1.2"/>
  <polyline points="156,20 160,14 164,20" fill="none" stroke-width="1.2"/>
  <text x="345" y="139" stroke="none" font-style="italic">x</text>
  <text x="155" y="12" stroke="none" font-style="italic">y</text>
  <text x="148" y="148" stroke="none" font-style="italic">O</text>
  <!-- Semicircle arcs:
       [-6,-4]: centre (-6,2) -> (40,85), radius rx=40, ry=50, from (-6,4)=(40,35) to (-4,2)=(80,85)
       [-4,0]: centre (-2,2) -> (120,85), bottom semicircle from (-4,2)=(80,85) to (0,2)=(160,85) passing (-2,0)=(120,135)
       [0,4]: centre (2,2) -> (200,85), top semicircle from (0,2)=(160,85) to (4,2)=(240,85) passing (2,4)=(200,35)
       [4,7]: centre (6,2) -> (280,85), bottom arc from (4,2)=(240,85) via (6,0)=(280,135) to (7, 2-sqrt(3))=(300, 128.3) -->
  <path d="M 40,35 A 40,50 0 0,1 80,85 A 40,50 0 0,0 160,85 A 40,50 0 0,1 240,85 A 40,50 0 0,0 300,128.3" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <circle cx="40" cy="35" r="3.5" fill="#4a8fe7"/>
  <circle cx="300" cy="128.3" r="3.5" fill="#4a8fe7"/>
  <text x="8" y="30" stroke="none">(−6, 4)</text>
  <text x="83" y="88" stroke="none">(−4, 2)</text>
  <text x="103" y="150" stroke="none">(−2, 0)</text>
  <text x="131" y="81" stroke="none">(0, 2)</text>
  <text x="188" y="28" stroke="none">(2, 4)</text>
  <text x="244" y="88" stroke="none">(4, 2)</text>
  <text x="266" y="150" stroke="none">(6, 0)</text>
  <text x="292" y="118" stroke="none">(7, 2−√3)</text>
  <text x="255" y="42" stroke="none" fill="#4a8fe7">y = f(x)</text>
</svg>`,
        solution: "The graph consists of alternating upper and lower semicircles of radius $2$ with centres on $y = 2$, repeating every $8$ units:<br>- Left endpoint: $(-6, 4)$ (closed).<br>- Passes through $(-4, 2)$, touches the $x$-axis at $(-2, 0)$, cuts the $y$-axis at $(0, 2)$.<br>- Reaches maximum at $(2, 4)$, passes through $(4, 2)$, touches the $x$-axis at $(6, 0)$.<br>- Right endpoint: $(7, 2 - \\sqrt{3})$ (closed)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Without integrating, write down the exact area of the region bounded by $y = \\mathrm{f}(x)$, the line $x = 4$, the $x$-axis and the $y$-axis.",
        type: "auto",
        mode: "number",
        answer: "8 + 2*pi",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solution: "The region consists of a $4 \\times 2$ rectangle below $y = 2$ and an upper semicircle of radius $2$:<br>$\\text{Area} = 2 \\times 4 + \\frac{1}{2}\\pi(2^2) = 8 + 2\\pi$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "The curve $C$ has equation $\\frac{(y-3)^2}{a^2} - (x+2)^2 = 1$, where $a$ is a positive real constant.<br>State the equations of the asymptotes of $C$ in terms of $a$.",
        type: "self",
        solution: "Setting $\\frac{(y-3)^2}{a^2} = (x+2)^2$:<br>$y - 3 = \\pm a(x+2)$.<br>Equations of asymptotes: $y = 3 + a(x+2)$ and $y = 3 - a(x+2)$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Determine the range of values of $a$ if there is at most one intersection between $C$ and the graph of $y = \\mathrm{f}(x)$.",
        type: "self",
        solution: "$C$ is a north-south hyperbola centred at $(-2, 3)$ with vertices at $(-2, 3+a)$ and $(-2, 3-a)$.<br>The graph of $y = \\mathrm{f}(x)$ lies between $y = 0$ and $y = 4$, and has a minimum point at $(-2, 0)$.<br>Note that for $a > 1$, the upper vertex $(-2, 3+a)$ is above $y = 4$, and at $x = -2$ the lower vertex is $(-2, 3-a)$.<br>When $a = 3$, the lower vertex is at $(-2, 0)$, giving exactly one intersection at $(-2, 0)$ (since $3 + a = 6 > 4$).<br>When $a > 3$, the lower vertex is below $y = 0$ and there are no intersections.<br>Hence there is at most one intersection when $a \\ge 3$."
      }
    ]
  },

  // ── Q6 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q6",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Summation of Series", "Convergence of Series"],
    stem: "It is given that $$\\sum_{r=2}^{n} \\frac{1}{r(r^2-1)} = \\frac{1}{4} + \\frac{1}{2(n+1)} - \\frac{1}{2n}.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\sum_{r=2}^{n} \\frac{1}{r(r^2-1)}$ is less than $\\frac{1}{4}$.",
        type: "self",
        solution: "For all $n \\ge 2$:<br>$\\frac{1}{2(n+1)} - \\frac{1}{2n} = \\frac{n - (n+1)}{2n(n+1)} = \\frac{-1}{2n(n+1)} < 0$.<br>$\\therefore \\sum_{r=2}^{n} \\frac{1}{r(r^2-1)} = \\frac{1}{4} + \\frac{1}{2(n+1)} - \\frac{1}{2n} < \\frac{1}{4}$ (shown)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Give a reason why the series $\\sum_{r=2}^{∞} \\frac{1}{r(r^2-1)}$ converges, and write down its value.",
        type: "self",
        solution: "As $n$ → ∞, $\\frac{1}{2(n+1)}$ → $0$ and $\\frac{1}{2n}$ → $0$.<br>Therefore, $\\sum_{r=2}^{n} \\frac{1}{r(r^2-1)}$ → $\\frac{1}{4}$, which is a finite constant.<br>Hence the infinite series converges and its value is $\\frac{1}{4}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the smallest value of $n$ for which $\\sum_{r=2}^{n} \\frac{1}{r(r^2-1)}$ differs from $\\sum_{r=2}^{∞} \\frac{1}{r(r^2-1)}$ by less than $0.0007$.",
        type: "auto",
        mode: "number",
        answer: "27",
        exactRequired: true,
        placeholder: "Positive integer",
        solution: "$\\left|\\sum_{r=2}^{n} \\frac{1}{r(r^2-1)} - \\sum_{r=2}^{∞} \\frac{1}{r(r^2-1)}\\right| < 0.0007$<br>$\\left|\\frac{1}{2(n+1)} - \\frac{1}{2n}\\right| < 0.0007 \\implies \\frac{1}{2n(n+1)} < 0.0007$.<br>Using GC:<br>When $n = 26$, $\\frac{1}{2(26)(27)} = 0.000712 > 0.0007$.<br>When $n = 27$, $\\frac{1}{2(27)(28)} = 0.000661 < 0.0007$.<br>(Alternatively, solving $n > 26.231$.)<br>$\\therefore$ smallest value of $n = 27$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find $\\sum_{r=m+1}^{N} \\frac{1}{(r-m)(r-m+1)(r-m+2)}$, where $m$ and $N$ are integers with $N > m > 0$.<br>(There is no need to express your answer as a single algebraic fraction.)",
        type: "auto",
        mode: "expr",
        vars: { N: [5, 8, 12], m: [1, 2, 4] },
        answer: "1/4 + 1/(2*(N - m + 2)) - 1/(2*(N - m + 1))",
        placeholder: "Expression in terms of N and m",
        solution: "Let $k = r - m + 1$. When $r = m+1$, $k = 2$; when $r = N$, $k = N - m + 1$.<br>$\\sum_{r=m+1}^{N} \\frac{1}{(r-m)(r-m+1)(r-m+2)} = \\sum_{k=2}^{N-m+1} \\frac{1}{(k-1)k(k+1)} = \\sum_{k=2}^{N-m+1} \\frac{1}{k(k^2-1)}$<br>$= \\frac{1}{4} + \\frac{1}{2(N-m+2)} - \\frac{1}{2(N-m+1)}$."
      }
    ]
  },

  // ── Q7 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q7",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "<strong>Do not use a calculator in answering this question.</strong>",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the complex number $z$ which satisfies the equation $\\frac{4|z|}{15 - z^*} = 5\\mathrm{i}$.",
        type: "auto",
        mode: "complex-list",
        answer: ["15 - 20i"],
        placeholder: "Complex number in form a + bi",
        solution: "Let $z = a + b\\mathrm{i}$, where $a, b \\in \\mathbb{R}$.<br>$\\frac{4\\sqrt{a^2+b^2}}{15 - (a - b\\mathrm{i})} = 5\\mathrm{i}$<br>$4\\sqrt{a^2+b^2} = 5\\mathrm{i}(15 - a + b\\mathrm{i}) = -5b + (75 - 5a)\\mathrm{i}$.<br>Comparing real and imaginary parts:<br>(1) $4\\sqrt{a^2+b^2} = -5b$ (so $b < 0$)<br>(2) $75 - 5a = 0 \\implies a = 15$.<br>Substituting $a = 15$ into (1):<br>$4\\sqrt{15^2 + b^2} = -5b \\implies 16(225 + b^2) = 25b^2 \\implies 9b^2 = 3600 \\implies b^2 = 400$.<br>Since $b < 0$, $b = -20$.<br>$\\therefore z = 15 - 20\\mathrm{i}$."
      },
      {
        label: "(b)(i)",
        marks: 4,
        prompt: "The complex number $w$ is such that $(w - \\mathrm{i})^3 = -\\mathrm{i}$.<br>Given that one possible value of $w$ is $2\\mathrm{i}$, find the two other possible values of $w$. Give your answers in cartesian form $a + b\\mathrm{i}$.",
        type: "auto",
        mode: "complex-list",
        answer: ["sqrt(3)/2 + i/2", "-sqrt(3)/2 + i/2"],
        placeholder: "Separate two complex numbers with a comma",
        solution: "Expanding $(w - \\mathrm{i})^3 = -\\mathrm{i}$:<br>$w^3 - 3\\mathrm{i}w^2 - 3w + \\mathrm{i} = -\\mathrm{i} \\implies w^3 - 3\\mathrm{i}w^2 - 3w + 2\\mathrm{i} = 0$.<br>Since $w = 2\\mathrm{i}$ is a root, factorise:<br>$w^3 - 3\\mathrm{i}w^2 - 3w + 2\\mathrm{i} = (w - 2\\mathrm{i})(w^2 - \\mathrm{i}w - 1) = 0$.<br>Solving $w^2 - \\mathrm{i}w - 1 = 0$:<br>$w = \\frac{\\mathrm{i} \\pm \\sqrt{(-\\mathrm{i})^2 - 4(1)(-1)}}{2} = \\frac{\\mathrm{i} \\pm \\sqrt{3}}{2}$.<br>$\\therefore w = \\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\mathrm{i}$ or $w = -\\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\mathrm{i}$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "The points $W_1$, $W_2$ and $W_3$ on the Argand diagram represent the three roots of the equation $(w - \\mathrm{i})^3 = -\\mathrm{i}$, and the point $A$ represents the complex number $k\\mathrm{i}$, where $k$ is a positive real number.<br>Show that the points $W_1$, $W_2$ and $W_3$ lie on a circle with centre $A$ for some value of $k$, stating the value of $k$.",
        type: "self",
        solution: "From $(w - \\mathrm{i})^3 = -\\mathrm{i}$, taking moduli of both sides:<br>$|w - \\mathrm{i}|^3 = |-\\mathrm{i}| = 1 \\implies |w - \\mathrm{i}| = 1$.<br>(Alternatively, verify directly that with $k = 1$, $W_1 A = |2\\mathrm{i} - \\mathrm{i}| = 1$, $W_2 A = \\left|\\frac{\\sqrt{3}}{2} - \\frac{1}{2}\\mathrm{i}\\right| = 1$, and $W_3 A = \\left|-\\frac{\\sqrt{3}}{2} - \\frac{1}{2}\\mathrm{i}\\right| = 1$.)<br>Since all three points are at a constant distance of $1$ from $A$ representing $\\mathrm{i}$, $W_1$, $W_2$ and $W_3$ lie on a circle of radius $1$ centred at $A$ with $k = 1$."
      }
    ]
  },

  // ── Q8 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q8",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Transformations of Graphs", "Graphing Techniques", "Differentiation"],
    diagramSvg: `<svg viewBox="0 0 320 200" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: O at (170, 130) -->
  <line x1="20" y1="130" x2="300" y2="130" stroke-width="1.2"/>
  <polyline points="295,126 301,130 295,134" fill="none" stroke-width="1.2"/>
  <line x1="170" y1="190" x2="170" y2="15" stroke-width="1.2"/>
  <polyline points="166,20 170,14 174,20" fill="none" stroke-width="1.2"/>
  <text x="303" y="134" stroke="none" font-style="italic">x</text>
  <text x="160" y="15" stroke="none" font-style="italic">y</text>
  <text x="159" y="142" stroke="none" font-style="italic">O</text>
  <!-- Asymptotes x=2 (x=190) and y=3 (y=98) -->
  <line x1="190" y1="18" x2="190" y2="188" stroke-dasharray="4,3" opacity="0.65"/>
  <line x1="22" y1="98" x2="295" y2="98" stroke-dasharray="4,3" opacity="0.65"/>
  <text x="193" y="23" stroke="none">x = 2</text>
  <text x="24" y="92" stroke="none">y = 3</text>
  <!-- Left branch: approaches y=3 from below on left, crosses (-4,0)=(90,130), min (-2,-3)=(130,162), crosses (-1,0)=(150,130), -> +inf at x=2 -->
  <path d="M 24,104 C 55,112 75,122 90,130 C 106,140 118,162 130,162 C 141,162 146,144 150,130 C 160,92 178,60 185,20" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Right branch: x>2, comes from +inf down to y=3 from above -->
  <path d="M 195,20 C 199,68 208,90 232,94 C 255,97 278,97.5 295,97.5" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="218" y="65" stroke="none" fill="#4a8fe7">y = g(x)</text>
  <text x="66" y="144" stroke="none">(−4, 0)</text>
  <text x="115" y="176" stroke="none">(−2, −3)</text>
  <text x="131" y="124" stroke="none">(−1, 0)</text>
  <text x="108" y="196" stroke="none" font-size="9.5" opacity="0.75">(Diagram for part (b))</text>
</svg>`,
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "A curve $C$ with equation $y = \\mathrm{f}(x)$ undergoes in succession, the following transformations.<br>A: A reflection in the $x$-axis.<br>B: A stretch parallel to the $x$-axis with scale factor $\\frac{1}{2}$, with the $y$-axis invariant.<br>The resulting curve has equation $y = ax^2 + \\frac{b}{x}$, where $a$ and $b$ are real constants.<br>Given that $\\left(-1, \\frac{1}{3}\\right)$ is a turning point of $y = \\frac{1}{\\mathrm{f}(x)}$, find the values of $a$ and $b$ and state the equation of $C$.",
        type: "self",
        solution: "Reversing transformation B (replace $x$ with $\\frac{x}{2}$):<br>$y = a\\left(\\frac{x}{2}\\right)^2 + \\frac{b}{x/2} = \\frac{a}{4}x^2 + \\frac{2b}{x}$.<br>Reversing transformation A (replace $y$ with $-y$):<br>$y = \\mathrm{f}(x) = -\\frac{a}{4}x^2 - \\frac{2b}{x}$.<br><br>Since $\\left(-1, \\frac{1}{3}\\right)$ is a turning point of $y = \\frac{1}{\\mathrm{f}(x)}$, $(-1, 3)$ is a turning point of $y = \\mathrm{f}(x)$.<br>Substituting $(-1, 3)$ into $y = \\mathrm{f}(x)$:<br>$3 = -\\frac{a}{4} + 2b \\quad \\text{--- (1)}$<br>Differentiating: $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{1}{2}ax + \\frac{2b}{x^2}$.<br>At $x = -1$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>$\\frac{1}{2}a + 2b = 0 \\quad \\text{--- (2)}$<br><br>Solving (1) and (2): $a = -4$ and $b = 1$.<br>Therefore, the equation of $C$ is $y = x^2 - \\frac{2}{x}$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "The diagram above shows the curve of $y = \\mathrm{g}(x)$. The curve has a minimum point at $(-2, -3)$ and crosses the $x$-axis at $(-1, 0)$ and $(-4, 0)$. The line $x = 2$ is the vertical asymptote and the line $y = 3$ is the horizontal asymptote.<br>Sketch the graph of $y = \\mathrm{g}'(x)$, labelling the coordinates of all relevant point(s) and state the equations of any asymptotes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 180" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="95" x2="300" y2="95" stroke-width="1.2"/>
  <polyline points="295,91 301,95 295,99" fill="none" stroke-width="1.2"/>
  <line x1="170" y1="170" x2="170" y2="15" stroke-width="1.2"/>
  <polyline points="166,20 170,14 174,20" fill="none" stroke-width="1.2"/>
  <text x="303" y="99" stroke="none" font-style="italic">x</text>
  <text x="160" y="15" stroke="none" font-style="italic">y</text>
  <text x="174" y="108" stroke="none" font-style="italic">O</text>
  <line x1="192" y1="18" x2="192" y2="168" stroke-dasharray="4,3" opacity="0.65"/>
  <text x="196" y="24" stroke="none">x = 2</text>
  <text x="24" y="88" stroke="none">y = 0</text>
  <!-- Left branch: approaches y=0 from below as x -> -inf, dips to min, crosses (-2,0)=(130,95), increases to +inf as x -> 2^- -->
  <path d="M 24,99 C 55,101 75,118 92,118 C 108,118 122,104 130,95 C 148,74 174,50 186,18" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Right branch: for x>2, g'(x) < 0, rises from -inf to y=0 from below -->
  <path d="M 197,168 C 202,124 212,104 236,99 C 258,96.5 278,96 296,96" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="106" y="87" stroke="none">(−2, 0)</text>
  <text x="220" y="128" stroke="none" fill="#4a8fe7">y = g'(x)</text>
</svg>`,
        solution: "Key features of $y = \\mathrm{g}'(x)$:<br>- Crosses the $x$-axis at $(-2, 0)$ (corresponding to the minimum point of $y = \\mathrm{g}(x)$ at $x = -2$).<br>- For $x < -2$, $\\mathrm{g}'(x) < 0$, approaching $y = 0$ from below as $x$ → −∞.<br>- For $-2 < x < 2$, $\\mathrm{g}'(x) > 0$, increasing to +∞ as $x$ → $2^-$.<br>- For $x > 2$, $\\mathrm{g}'(x) < 0$, rising from −∞ as $x$ → $2^+$ and approaching $y = 0$ from below as $x$ → +∞.<br>- Asymptotes: $x = 2$ and $y = 0$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Find the area of the region bounded by the graph of $y = \\mathrm{g}'(x)$, the lines $x = -4$, $x = -2$ and the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "3",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $\\mathrm{g}'(x) \\le 0$ for $-4 \\le x \\le -2$:<br>$\\text{Required area} = -\\int_{-4}^{-2} \\mathrm{g}'(x)\\,\\mathrm{d}x = -[\\mathrm{g}(x)]_{-4}^{-2} = -[\\mathrm{g}(-2) - \\mathrm{g}(-4)] = -[-3 - 0] = 3$ units$^2$."
      }
    ]
  },

  // ── Q9 ────────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q9",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Applications of Integration", "Area and Volume"],
    diagramSvg: `<svg viewBox="0 0 340 210" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Scale: x in [-7, 7] -> 1 unit = 18px, x=0 at 175; y in [-2, 9] -> 1 unit = 16px, y=0 at 165 -->
  <!-- Key points:
       (6,2) -> (283, 133)
       (-3,5) -> (121, 85)
       (2,0) -> (211, 165)
       (0, 2+sqrt(6)) = (0, 4.449) -> (175, 93.8)
       (0, 2-sqrt(6)) = (0, -0.449) -> (175, 172.2)
       (-6, 8) -> (67, 37)
       y=8 -> y=37 -->
  <!-- Shaded region S: between curve x=6-(y-2)^2 and line y=2-x from (-3,5) to (2,0) -->
  <path d="M 121,85 L 211,165 Q 283,155 283,133 Q 283,108 121,85 Z" fill="rgba(91,155,213,0.22)" stroke="none"/>
  <!-- Axes -->
  <line x1="40" y1="165" x2="310" y2="165" stroke-width="1.2"/>
  <polyline points="305,161 311,165 305,169" fill="none" stroke-width="1.2"/>
  <line x1="175" y1="200" x2="175" y2="14" stroke-width="1.2"/>
  <polyline points="171,19 175,13 179,19" fill="none" stroke-width="1.2"/>
  <text x="313" y="169" stroke="none" font-style="italic">x</text>
  <text x="164" y="16" stroke="none" font-style="italic">y</text>
  <text x="163" y="177" stroke="none" font-style="italic">O</text>
  <!-- Horizontal line y=8 -->
  <line x1="45" y1="37" x2="300" y2="37" stroke-width="1.2"/>
  <text x="270" y="32" stroke="none">y = 8</text>
  <!-- Line y = 2 - x: (-7,9)=(49,21) to (4,-2)=(247,197) -->
  <line x1="49" y1="21" x2="247" y2="197" stroke-width="1.3"/>
  <text x="72" y="28" stroke="none">y = 2 − x</text>
  <!-- Parabola x = 6 - (y-2)^2: plotted accurately -->
  <path d="M 49,73.8 C 95,80 140,87 175,93.8 C 235,105 283,118 283,133 C 283,148 235,161 175,172.2 C 130,180 85,187 49,192.2" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="283" cy="133" r="2.8" fill="#2c2925"/>
  <text x="288" y="137" stroke="none">(6, 2)</text>
  <text x="135" y="64" stroke="none" font-style="italic">R</text>
  <text x="200" y="135" stroke="none" font-style="italic">S</text>
  <text x="78" y="203" stroke="none" fill="#4a8fe7">x = 6 − (y − 2)²</text>
</svg>`,
    stem: "In the diagram above, the region $R$ is bounded by the curve $C$ with equation $x = 6 - (y-2)^2$, the lines $y = 8$, $y = 2 - x$ and the $y$-axis. The region $S$ is bounded by $C$ and the line $y = 2 - x$.",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "Find the exact area of region $R$.",
        type: "auto",
        mode: "number",
        answer: "9/2 + 4*sqrt(6)",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Find intersections of $C$ and $y = 2 - x$ ($x = 2 - y$):<br>$2 - y = 6 - (y-2)^2 \\implies y^2 - 5y = 0 \\implies y = 0$ or $y = 5$.<br>When $x = 0$, $6 - (y-2)^2 = 0 \\implies y = 2 \\pm \\sqrt{6}$ (upper $y$-intercept is $2 + \\sqrt{6}$).<br><br>Since $R$ lies to the left of the $y$-axis ($x \\le 0$):<br>$\\text{Area of } R = -\\left[\\int_{2+\\sqrt{6}}^{5} (6 - (y-2)^2)\\,\\mathrm{d}y + \\int_{5}^{8} (2 - y)\\,\\mathrm{d}y\\right]$<br>$= -\\left\\{\\left[6y - \\frac{(y-2)^3}{3}\\right]_{2+\\sqrt{6}}^{5} + \\left[2y - \\frac{y^2}{2}\\right]_{5}^{8}\\right\\}$<br>$= -\\left[(30 - 9) - \\left(6(2+\\sqrt{6}) - \\frac{6\\sqrt{6}}{3}\\right) + (16 - 32) - \\left(10 - \\frac{25}{2}\\right)\\right]$<br>$= -\\left[21 - 12 - 4\\sqrt{6} - 16 + \\frac{5}{2}\\right] = \\frac{9}{2} + 4\\sqrt{6}$ units$^2$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the volume of the solid of revolution formed when region $S$ is rotated through $360^\\circ$ about the $x$-axis, leaving your answer to 2 decimal places.",
        type: "auto",
        mode: "number",
        answer: "327.249199",
        dp: 2,
        placeholder: "Correct to 2 decimal places",
        solution: "From $x = 6 - (y-2)^2$, $y = 2 \\pm \\sqrt{6-x}$.<br>The intersections of $C$ and $y = 2 - x$ are $(-3, 5)$ and $(2, 0)$.<br>Rotating $S$ about the $x$-axis:<br>$\\text{Volume} = \\pi\\int_{-3}^{6} \\left(2 + \\sqrt{6-x}\\right)^2 \\,\\mathrm{d}x - \\pi\\int_{-3}^{2} (2-x)^2 \\,\\mathrm{d}x - \\pi\\int_{2}^{6} \\left(2 - \\sqrt{6-x}\\right)^2 \\,\\mathrm{d}x$<br>$\\approx 327.25$ units$^3$ (to 2 d.p.)."
      }
    ]
  },

  // ── Q10 ───────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q10",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Integration Techniques", "Integration by Parts"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Express $1 + 4x$ in the form $A(2x - 2) + B$, where $A$ and $B$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "A =", answer: "2", exactRequired: true, placeholder: "Constant" },
          { label: "B =", answer: "5", exactRequired: true, placeholder: "Constant" }
        ],
        solution: "$1 + 4x = A(2x - 2) + B = 2Ax + (B - 2A)$.<br>Comparing coefficients: $2A = 4 \\implies A = 2$, and $B - 2(2) = 1 \\implies B = 5$.<br>Hence $1 + 4x = 2(2x - 2) + 5$."
      },
      {
        label: "(a)(ii)",
        marks: 4,
        prompt: "Hence, find $\\int \\frac{1+4x}{x^2-2x+5}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0, 1, 3],
        answer: "2*ln(x^2 - 2*x + 5) + (5/2)*atan((x - 1)/2)",
        placeholder: "Antiderivative in terms of x (include + C)",
        solution: "$\\int \\frac{1+4x}{x^2-2x+5}\\,\\mathrm{d}x = \\int \\frac{2(2x-2) + 5}{x^2-2x+5}\\,\\mathrm{d}x$<br>$= 2\\int \\frac{2x-2}{x^2-2x+5}\\,\\mathrm{d}x + 5\\int \\frac{1}{(x-1)^2 + 2^2}\\,\\mathrm{d}x$<br>$= 2\\ln(x^2 - 2x + 5) + \\frac{5}{2}\\tan^{-1}\\left(\\frac{x-1}{2}\\right) + C$<br>(since $x^2 - 2x + 5 = (x-1)^2 + 4 > 0$ for all real $x$)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the exact value of $\\int_{0}^{\\frac{\\pi}{3}} x\\sin 2x\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "number",
        answer: "pi/12 + sqrt(3)/8",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Using integration by parts with $u = x$, $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\sin 2x$ ($\\frac{\\mathrm{d}u}{\\mathrm{d}x} = 1$, $v = -\\frac{1}{2}\\cos 2x$):<br>$\\int_{0}^{\\frac{\\pi}{3}} x\\sin 2x\\,\\mathrm{d}x = \\left[-\\frac{1}{2}x\\cos 2x\\right]_{0}^{\\frac{\\pi}{3}} + \\frac{1}{2}\\int_{0}^{\\frac{\\pi}{3}} \\cos 2x\\,\\mathrm{d}x$<br>$= \\left[-\\frac{1}{2}\\left(\\frac{\\pi}{3}\\right)\\cos\\frac{2\\pi}{3} - 0\\right] + \\left[\\frac{1}{4}\\sin 2x\\right]_{0}^{\\frac{\\pi}{3}}$<br>$= -\\frac{\\pi}{6}\\left(-\\frac{1}{2}\\right) + \\frac{1}{4}\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{12} + \\frac{\\sqrt{3}}{8}$."
      }
    ]
  },

  // ── Q11 ───────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q11",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Differential Equations", "Graphing Techniques"],
    stem: "It is given that $$2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\frac{2}{x} - \\ln x = y.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Use the substitution $y = \\ln\\left(\\frac{u}{x}\\right)$ to show that the differential equation can be reduced to $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\mathrm{f}(u)$, where the function $\\mathrm{f}(u)$ is to be found.",
        type: "self",
        solution: "$y = \\ln\\left(\\frac{u}{x}\\right) = \\ln u - \\ln x \\quad \\text{--- (1)}$<br>Differentiating with respect to $x$:<br>$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{u}\\frac{\\mathrm{d}u}{\\mathrm{d}x} - \\frac{1}{x} \\quad \\text{--- (2)}$<br>Substituting (1) and (2) into the differential equation:<br>$2\\left(\\frac{1}{u}\\frac{\\mathrm{d}u}{\\mathrm{d}x} - \\frac{1}{x}\\right) + \\frac{2}{x} - \\ln x = \\ln u - \\ln x$<br>$\\frac{2}{u}\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\ln u$<br>$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{1}{2}u\\ln u$.<br>Hence $\\mathrm{f}(u) = \\frac{1}{2}u\\ln u$."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Given that $y$ has a minimum value at $x = 3$, solve the differential equation $2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\frac{2}{x} - \\ln x = y$, to find the particular solution for $y$ in terms of $x$.",
        type: "self",
        solution: "Separating variables in $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{1}{2}u\\ln u$:<br>$\\int \\frac{\\frac{1}{u}}{\\ln u}\\,\\mathrm{d}u = \\int \\frac{1}{2}\\,\\mathrm{d}x$<br>$\\ln|\\ln u| = \\frac{x}{2} + C$<br>$|\\ln u| = B\\mathrm{e}^{\\frac{x}{2}}$, where $B = \\mathrm{e}^C$<br>$\\ln u = A\\mathrm{e}^{\\frac{x}{2}}$, where $A = \\pm B$.<br><br>From (1), $y + \\ln x = \\ln u = A\\mathrm{e}^{\\frac{x}{2}} \\implies y = A\\mathrm{e}^{\\frac{x}{2}} - \\ln x$.<br>Differentiating: $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{A}{2}\\mathrm{e}^{\\frac{x}{2}} - \\frac{1}{x}$.<br>When $x = 3$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>$\\frac{A}{2}\\mathrm{e}^{\\frac{3}{2}} - \\frac{1}{3} = 0 \\implies A = \\frac{2}{3}\\mathrm{e}^{-\\frac{3}{2}} \\approx 0.14875$.<br>$\\therefore y = \\frac{2}{3}\\mathrm{e}^{\\frac{x-3}{2}} - \\ln x$ (or $y = 0.149\\mathrm{e}^{\\frac{x}{2}} - \\ln x$)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Sketch the graph of this particular solution.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 175" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Scale: x in [0, 7] -> 35px/unit, x=0 at 45; y in [-1, 3] -> 35px/unit, y=0 at 125 -->
  <line x1="20" y1="125" x2="295" y2="125" stroke-width="1.2"/>
  <polyline points="290,121 296,125 290,129" fill="none" stroke-width="1.2"/>
  <line x1="45" y1="162" x2="45" y2="15" stroke-width="1.2"/>
  <polyline points="41,20 45,14 49,20" fill="none" stroke-width="1.2"/>
  <text x="298" y="129" stroke="none" font-style="italic">x</text>
  <text x="34" y="15" stroke="none" font-style="italic">y</text>
  <text x="33" y="138" stroke="none" font-style="italic">O</text>
  <text x="33" y="170" stroke="none">x = 0</text>
  <!-- Curve y = 0.14875*e^(x/2) - ln(x):
       x=0.1 -> y=2.46 -> (48.5, 38.9)
       x=0.3 -> y=1.38 -> (55.5, 76.7)
       x=0.6 -> y=0.71 -> (66, 100.1)
       x=1.0 -> y=0.25 -> (80, 116.4)
       x=1.34 -> y=0 -> (91.9, 125)
       x=2.0 -> y=-0.29 -> (115, 135.1)
       x=3.0 -> y=-0.432 -> (150, 140.1)
       x=4.0 -> y=-0.29 -> (185, 135.1)
       x=4.68 -> y=0 -> (208.8, 125)
       x=5.5 -> y=0.62 -> (237.5, 103.3)
       x=6.5 -> y=1.96 -> (272.5, 56.4)
       x=7.0 -> y=2.98 -> (290, 20.7) -->
  <path d="M 48,22 C 51,65 56,88 68,104 C 78,116 86,122 92,125 C 110,135 132,140.1 150,140.1 C 170,140.1 192,134 209,125 C 232,110 256,82 285,24" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <circle cx="150" cy="140.1" r="2.8" fill="#4a8fe7"/>
  <text x="90" y="119" stroke="none">1.34</text>
  <text x="180" y="119" stroke="none">4.68</text>
  <text x="122" y="156" stroke="none">(3, −0.432)</text>
  <text x="135" y="38" stroke="none" fill="#4a8fe7">y = 0.149e^(x/2) − ln x</text>
</svg>`,
        solution: "The graph of $y = 0.14875\\mathrm{e}^{\\frac{x}{2}} - \\ln x$ is defined for $x > 0$:<br>- Vertical asymptote: $x = 0$ (as $x$ → $0^+$, $y$ → +∞).<br>- $x$-intercepts: $(1.34, 0)$ and $(4.68, 0)$.<br>- Minimum point: $(3, -0.432)$."
      }
    ]
  },

  // ── Q12 ───────────────────────────────────────────────────────────────────
  {
    id: "VJC-2025-P1-Q12",
    year: 2025,
    school: "VJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Arithmetic and Geometric Progressions", "Applications of Series"],
    stem: "A chemical processing plant uses two types of automated dosing pumps, Pump A and Pump B, to regulate the flow of a catalyst into a reaction chamber. Each pump is removed from the plant and tested over a 10-hour trial period, and the volume of liquid dosed per hour is recorded.<br><br>The following data were collected.<br>• <strong>Pump A</strong>: The volume of liquid dosed was $4.5$ litres in the first hour, and for each subsequent hour, the volume of liquid dosed decreased by a constant percentage of $r\\%$.<br>• <strong>Pump B</strong>: The volume of liquid dosed was $4.7$ litres in the first hour, and for each subsequent hour, the volume of liquid dosed decreased by $0.1$ litres.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that the total volume of liquid dosed by Pump A at the end of the trial period is $$\\frac{450}{r}\\left[1 - \\left(1 - \\frac{r}{100}\\right)^k\\right] \\text{ litres,}$$ where $k$ is a constant to be determined.",
        type: "self",
        solution: "The hourly volumes dosed by Pump A form a geometric progression with first term $a = 4.5$, common ratio $R = 1 - \\frac{r}{100}$, and $n = 10$ terms.<br>Total volume at the end of 10 hours:<br>$S_{10} = \\frac{4.5\\left[1 - \\left(1 - \\frac{r}{100}\\right)^{10}\\right]}{1 - \\left(1 - \\frac{r}{100}\\right)} = \\frac{4.5}{\\frac{r}{100}}\\left[1 - \\left(1 - \\frac{r}{100}\\right)^{10}\\right] = \\frac{450}{r}\\left[1 - \\left(1 - \\frac{r}{100}\\right)^{10}\\right]$ litres.<br>Hence $k = 10$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It would be ideal if at the end of the trial period, the total volume of liquid dosed by Pump A is equal to that of Pump B. Find the value of $r$ for this ideal situation.",
        type: "auto",
        mode: "number",
        answer: "1.277104",
        placeholder: "Correct to 3 s.f.",
        solution: "Total volume dosed by Pump B in 10 hours (AP with $a = 4.7, d = -0.1$):<br>$\\frac{10}{2}\\left[2(4.7) + 9(-0.1)\\right] = 5(8.5) = 42.5$ litres.<br>Equating Pump A and Pump B:<br>$\\frac{450}{r}\\left[1 - \\left(1 - \\frac{r}{100}\\right)^{10}\\right] = 42.5$.<br>Using GC, $r = 1.2771 \\approx 1.28$ (to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "After the trial period, the two pumps were cleaned and reset, and were subsequently installed in the actual plant. Assume that the two pumps perform consistently as what was observed during the trial period.<br>Pump A is installed for dosing in Reaction Line 1. To prevent underdosing, Pump A will cease to operate if the volume dosed in the next hour falls below $4.0$ litres. With the assumption that $r = 1$, find the number of complete hours that Pump A should be in operation.",
        type: "auto",
        mode: "number",
        answer: "12",
        exactRequired: true,
        placeholder: "Integer number of hours",
        solution: "Let $n$ be the number of hours Pump A operates. Volume dosed in the $n$-th hour is $4.5(0.99)^{n-1}$.<br>Require $4.5(0.99)^{n-1} \\ge 4.0$:<br>$(n-1)\\ln(0.99) \\ge \\ln\\left(\\frac{4.0}{4.5}\\right)$<br>$n - 1 \\le \\frac{\\ln(4.0/4.5)}{\\ln(0.99)} = 11.719 \\implies n \\le 12.719$.<br>(Check: for $n = 12$, $4.5(0.99)^{11} = 4.03 \\ge 4.0$; for $n = 13$, $4.5(0.99)^{12} = 3.99 < 4.0$.)<br>$\\therefore$ Pump A should operate for $12$ complete hours."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Before operations begin in Reaction Line 2, Pump A breaks down.<br>To minimise disruption, the company considers buying a new motor for Pump A from a third-party supplier. The supplier claims that with the new motor, Pump A can dose at least $360$ litres of liquid in total if it ran continuously without stopping. Determine the range of values of $r$ for which the supplier's claim is invalid.",
        type: "self",
        solution: "The maximum total volume Pump A can dose if run indefinitely is the sum to infinity:<br>$S_{∞} = \\frac{4.5}{1 - \\left(1 - \\frac{r}{100}\\right)} = \\frac{450}{r}$.<br>For the supplier's claim to be invalid, $S_{∞} < 360$:<br>$\\frac{450}{r} < 360 \\implies r > \\frac{450}{360} = 1.25$."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "The company eventually decides to use Pump B in Reaction Line 2. Using an algebraic method, determine if Pump B can dose at least $150$ litres of liquid if left to run continuously without stopping.",
        type: "self",
        solution: "Total volume dosed by Pump B in $n$ hours:<br>$S_n = \\frac{n}{2}\\left[2(4.7) + (n-1)(-0.1)\\right] = 4.75n - 0.05n^2$.<br>For $S_n \\ge 150$:<br>$4.75n - 0.05n^2 \\ge 150 \\implies 0.05n^2 - 4.75n + 150 \\le 0$.<br>Discriminant $= (-4.75)^2 - 4(0.05)(150) = 22.5625 - 30 = -7.4375 < 0$, and the coefficient of $n^2$ is $0.05 > 0$.<br>Hence $0.05n^2 - 4.75n + 150 > 0$ for all real $n$, so there is no real solution for $n$.<br>(Alternatively: $4.7 + (n-1)(-0.1) = 0 \\implies n = 48$, so Pump B doses positive amounts for at most $47$ hours, giving a maximum total volume of $\\frac{47}{2}[2(4.7) + 46(-0.1)] = 112.8 < 150$ litres.)<br>Thus it is <strong>not possible</strong> for Pump B to dose at least $150$ litres of liquid."
      }
    ]
  }
]);
