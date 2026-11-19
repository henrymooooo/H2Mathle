window.registerQuestions([
  // ==================== VJC 2026 PAPER 2: PURE MATH (Q1 - Q5) ====================
  {
    id: "VJC-2026-P2-Q1",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Graph Transformations", "Modulus Functions"],
    diagramSvg: `
      <svg viewBox="0 0 280 185" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="13" fill="#2c2925" stroke="#2c2925">
        <line x1="20" y1="150" x2="262" y2="150" stroke-width="1.5"/>
        <polyline points="255,146 262,150 255,154" fill="none" stroke-width="1.5"/>
        <text x="267" y="154" stroke="none" font-style="italic">x</text>
        <line x1="168" y1="170" x2="168" y2="16" stroke-width="1.5"/>
        <polyline points="164,23 168,16 172,23" fill="none" stroke-width="1.5"/>
        <text x="174" y="21" stroke="none" font-style="italic">y</text>
        <!-- V-shape vertex at (-v, 0) = (120, 150), y-int (0, 2v) = (168, 72) -->
        <polyline points="62,56 120,150 188,40" fill="none" stroke="#4a8fe7" stroke-width="2.1"/>
        <text x="115" y="168" text-anchor="middle" stroke="none">−<tspan font-style="italic">v</tspan></text>
        <text x="158" y="166" text-anchor="middle" stroke="none" font-style="italic">O</text>
        <text x="176" y="76" stroke="none">2<tspan font-style="italic">v</tspan></text>
      </svg>
    `,
    stem: "The diagram shows the graph of $y = |\\mathrm{f}(x)|$, where $\\mathrm{f}(x) = ax + b$ and $a$ and $b$ are constants. The graph intersects the $x$-axis and $y$-axis at $(-v, 0)$ and $(0, 2v)$ respectively, where $v$ is a positive constant.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the possible expressions for $\\mathrm{f}(x)$ in terms of $v$.",
        type: "auto",
        mode: "expr-list",
        vars: { x: [1, 2], v: [3, 5] },
        answer: ["2*x+2*v", "-2*x-2*v"],
        placeholder: "Both expressions separated by a comma",
        solution: "Sub $(0, 2v)$: $|b| = 2v \\implies b = \\pm 2v$.<br>Sub $(-v, 0)$: $|-av + b| = 0 \\implies a = \\frac{b}{v}$.<br>Hence $\\mathrm{f}(x) = 2x + 2v$ or $\\mathrm{f}(x) = -2x - 2v$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "It is given that $a < 0$. Sketch the graph of $y = |\\mathrm{f}(2x - 2v)|$, labelling the points where the graph intersects or touches the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 175" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="12" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="142" x2="245" y2="142" stroke-width="1.4"/><polyline points="239,138 245,142 239,146" fill="none" stroke-width="1.4"/><text x="249" y="146" stroke="none" font-style="italic">x</text><line x1="72" y1="162" x2="72" y2="16" stroke-width="1.4"/><polyline points="68,22 72,16 76,22" fill="none" stroke-width="1.4"/><text x="78" y="21" stroke="none" font-style="italic">y</text><polyline points="62,25 110,142 162,20" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="61" y="157" stroke="none" font-style="italic">O</text><text x="110" y="159" text-anchor="middle" stroke="none" fill="#4a8fe7">0.5<tspan font-style="italic">v</tspan></text><text x="64" y="54" text-anchor="end" stroke="none" fill="#4a8fe7">2<tspan font-style="italic">v</tspan></text></svg>`,
        solution: "Since $a < 0$, $\\mathrm{f}(x) = -2x - 2v \\implies |\\mathrm{f}(2x-2v)| = |-4x + 2v|$.<br>V-shaped graph touching the $x$-axis at $(0.5v, 0)$ and crossing the $y$-axis at $(0, 2v)$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{f}(|x|)$ (with $a < 0$), labelling the points where the graph intersects or touches the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 175" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="12" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="45" x2="240" y2="45" stroke-width="1.4"/><polyline points="234,41 240,45 234,49" fill="none" stroke-width="1.4"/><text x="244" y="49" stroke="none" font-style="italic">x</text><line x1="130" y1="165" x2="130" y2="16" stroke-width="1.4"/><polyline points="126,22 130,16 134,22" fill="none" stroke-width="1.4"/><text x="136" y="21" stroke="none" font-style="italic">y</text><text x="118" y="60" stroke="none" font-style="italic">O</text><polyline points="62,158 130,90 198,158" fill="none" stroke="#4a8fe7" stroke-width="2"/><line x1="65" y1="25" x2="130" y2="90" stroke-dasharray="4,3" stroke-width="1.2" opacity="0.6"/><text x="122" y="94" text-anchor="end" stroke="none">−2<tspan font-style="italic">v</tspan></text></svg>`,
        solution: "Since $a < 0$, $\\mathrm{f}(|x|) = -2|x| - 2v$.<br>Inverted V-shape symmetric about the $y$-axis with peak at $(0, -2v)$ and no $x$-intercepts."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q2",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Complex Numbers", "Polynomial Roots"],
    stem: "It is given that $P(z) = z^6 + az^4 + bz^2 + c$, where $a$, $b$ and $c$ are real constants and $c < 0$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "David claims that if $w$ is a root of $P(z) = 0$, then $-w$ must also be a root. Explain why David's claim is true.",
        type: "self",
        solution: "If $w$ is a root of $P(z) = 0$, then $w^6 + aw^4 + bw^2 + c = 0$.<br>Consider $P(-w) = (-w)^6 + a(-w)^4 + b(-w)^2 + c = w^6 + aw^4 + bw^2 + c = 0$.<br>Hence $-w$ must also be a root."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "It is given that $1+\\mathrm{i}$ is a root of $P(z)=0$. State three other non-real roots of the equation $P(z)=0$.",
        type: "auto",
        mode: "complex-list",
        answer: ["1-i", "-1-i", "-1+i"],
        placeholder: "Separate roots with commas",
        solution: "Since all coefficients are real and $1+\\mathrm{i}$ is a root, by the conjugate root theorem, $1-\\mathrm{i}$ is a root.<br>From (a), $-(1+\\mathrm{i}) = -1-\\mathrm{i}$ and $-(1-\\mathrm{i}) = -1+\\mathrm{i}$ are also roots.<br>Hence the 3 other non-real roots are $1-\\mathrm{i}$, $-1-\\mathrm{i}$ and $-1+\\mathrm{i}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the remaining two roots of the equation, leaving your answers in terms of $c$.",
        type: "auto",
        mode: "expr-pm",
        vars: { c: [-4, -9, -16] },
        answer: "sqrt(-c)/2",
        placeholder: "Expression in terms of c",
        solution: "Comparing constant terms: $[-(1+\\mathrm{i})][-(1-\\mathrm{i})][-(-1-\\mathrm{i})][-(-1+\\mathrm{i})](-k)(k) = c \\implies -4k^2 = c$.<br>Since $c < 0$, $k = \\pm\\sqrt{-\\frac{c}{4}} = \\pm\\frac{\\sqrt{-c}}{2}$."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q3",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors", "Scalar & Vector Products"],
    stem: "Answer both parts below.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Referred to the origin $O$, points $A$, $B$ and $C$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively. Vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ are non-zero vectors, and $\\mathbf{a}$ and $\\mathbf{c}$ are non-parallel. Given that $M$ is the midpoint of $AC$ and $\\mathbf{a}\\times\\mathbf{b} = \\mathbf{b}\\times\\mathbf{c}$, show that $O$, $B$ and $M$ are collinear.",
        type: "self",
        solution: "$\\overrightarrow{OM} = \\frac{\\mathbf{a}+\\mathbf{c}}{2}$.<br>$\\mathbf{a}\\times\\mathbf{b} = \\mathbf{b}\\times\\mathbf{c} \\implies \\mathbf{a}\\times\\mathbf{b} + \\mathbf{c}\\times\\mathbf{b} = \\mathbf{0} \\implies (\\mathbf{a}+\\mathbf{c})\\times\\mathbf{b} = \\mathbf{0}$.<br>Since $\\mathbf{a}, \\mathbf{c}$ are non-parallel ($\\mathbf{a}+\\mathbf{c} \\ne \\mathbf{0}$) and $\\mathbf{b} \\ne \\mathbf{0}$, $\\overrightarrow{OM} \\parallel \\overrightarrow{OB}$. Since $O$ is a common point, $O, B, M$ are collinear."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "It is given that $\\mathbf{p}$ is a non-zero vector and $\\mathbf{q}$ is a unit vector. The angle between $\\mathbf{p}$ and $\\mathbf{q}$ is $\\cos^{-1}\\left(\\frac{1}{6}\\right)$ and $|\\mathbf{p}+10\\mathbf{q}| = 2|\\mathbf{p}-5\\mathbf{q}|$. Find the magnitude of $\\mathbf{p}$.",
        type: "auto",
        mode: "number",
        answer: "10/3",
        placeholder: "Exact or 3 s.f.",
        solution: "$\\mathbf{p}\\cdot\\mathbf{q} = |\\mathbf{p}|(1)\\left(\\frac{1}{6}\\right) = \\frac{1}{6}|\\mathbf{p}|$.<br>Squaring $|\\mathbf{p}+10\\mathbf{q}|^2 = 4|\\mathbf{p}-5\\mathbf{q}|^2$:<br>$|p|^2 + 20\\mathbf{p}\\cdot\\mathbf{q} + 100 = 4|p|^2 - 40\\mathbf{p}\\cdot\\mathbf{q} + 100 \\implies 3|\\mathbf{p}|^2 - 60\\mathbf{p}\\cdot\\mathbf{q} = 0$.<br>$3|\\mathbf{p}|^2 - 10|\\mathbf{p}| = 0 \\implies |\\mathbf{p}| = \\frac{10}{3}$ (since $|\\mathbf{p}| > 0$)."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q4",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Maclaurin Series", "Small Angle Approximations"],
    stem: "Answer the following.",
    parts: [
      {
        label: "(a)(i)",
        marks: 4,
        prompt: "A curve has equation $\\ln y + xy = \\cos x$. Find the Maclaurin's series for $y$ up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.1, 0.2, 0.3] },
        answer: "e - (e^2)*x + e*(3*(e^2)-1)/2*(x^2)",
        placeholder: "Exact polynomial in x and e",
        solution: "$\\frac{1}{y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y + x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\sin x$, and $\\frac{1}{y}\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} - \\frac{1}{y^2}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + x\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\cos x$.<br>At $x=0$: $y=\\mathrm{e}$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\mathrm{e}^2$, $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\mathrm{e}(3\\mathrm{e}^2 - 1)$.<br>$y = \\mathrm{e} - \\mathrm{e}^2 x + \\frac{\\mathrm{e}(3\\mathrm{e}^2 - 1)}{2}x^2 + \\dots$"
      },
      {
        label: "(a)(ii)",
        marks: 1,
        prompt: "Another curve has equation $\\ln y + xy = \\operatorname{cosec} x$. Explain why no Maclaurin's series for $y$ exists.",
        type: "self",
        solution: "To find the first term, we need to substitute $x = 0$, however $\\operatorname{cosec} 0$ is undefined. Hence no Maclaurin's series for $y$ exists."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "By using small angle approximations, where $x$ is small enough for $x^3$ and higher powers of $x$ to be neglected, show that $$\\frac{\\cos\\left(x - \\frac{3\\pi}{4}\\right)}{\\sqrt{2-2x}} \\approx \\frac{1}{16}(ax^2 + bx + c),$$ determining the integers $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "5", exactRequired: true },
          { label: "b =", answer: "4", exactRequired: true },
          { label: "c =", answer: "-8", exactRequired: true }
        ],
        solution: "$\\cos\\left(x-\\frac{3\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}(-\\cos x + \\sin x) \\approx \\frac{1}{\\sqrt{2}}\\left(-1 + x + \\frac{x^2}{2}\\right)$.<br>$(2-2x)^{-1/2} = \\frac{1}{\\sqrt{2}}\\left(1 + \\frac{x}{2} + \\frac{3x^2}{8} + \\dots\\right)$.<br>Multiplying gives $\\frac{1}{2}\\left(-1 + \\frac{x}{2} + \\frac{5x^2}{8}\\right) = \\frac{1}{16}(5x^2 + 4x - 8)$, so $a=5, b=4, c=-8$."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q5",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Rational Functions", "Graph Sketching", "Algebraic Proof"],
    stem: "The curve $C$ has equation $y = \\frac{-2x^2 - 5x + a}{x - 2}$, where $a$ is a constant and $a < 18$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Prove, using an algebraic method, that $\\frac{-2x^2 - 5x + a}{x - 2}$ cannot lie between two certain values, to be determined, in terms of $a$.",
        type: "self",
        solution: "$2x^2 + (y+5)x + (-2y - a) = 0$. For no real roots, $\\Delta = (y+5)^2 - 8(-2y - a) < 0$.<br>$y^2 + 26y + 25 + 8a < 0 \\implies (y+13)^2 < 144 - 8a$.<br>Thus $y$ cannot lie between $-13 - 2\\sqrt{36 - 2a}$ and $-13 + 2\\sqrt{36 - 2a}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is now given that $a = 0$. Find the equations of the asymptotes of $C$.",
        type: "self",
        solution: "$y = \\frac{-2x^2 - 5x}{x - 2} = -2x - 9 - \\frac{18}{x - 2}$.<br>Asymptotes: $y = -2x - 9$ and $x = 2$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Sketch the graph of $C$ (with $a = 0$), stating the equations of the asymptotes and the coordinates of stationary points and axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 260" width="300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="90" x2="295" y2="90" stroke-width="1.4"/><line x1="125" y1="250" x2="125" y2="15" stroke-width="1.4"/><text x="299" y="94" stroke="none" font-style="italic" font-family="Georgia,serif" font-size="12">x</text><text x="114" y="20" stroke="none" font-style="italic" font-family="Georgia,serif" font-size="12">y</text><text x="131" y="102" stroke="none">(0, 0)</text><line x1="165" y1="15" x2="165" y2="250" stroke-dasharray="4,3" stroke-width="1.2"/><text x="169" y="246" stroke="none">x = 2</text><line x1="45" y1="45" x2="265" y2="235" stroke-dasharray="4,3" stroke-width="1.2"/><text x="248" y="210" stroke="none">y = −2x−9</text><path d="M 48 52 Q 82 78 105 97 Q 130 112 148 92 Q 158 68 161 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 169 248 Q 175 182 200 175 Q 222 172 260 225" fill="none" stroke="#4a8fe7" stroke-width="2"/><circle cx="105" cy="97" r="2.8" fill="#4a8fe7"/><text x="72" y="112" stroke="none">(−1, −1)</text><circle cx="200" cy="175" r="2.8" fill="#4a8fe7"/><text x="206" y="172" stroke="none">(5, −25)</text><circle cx="75" cy="90" r="2.5" fill="#2c2925"/><text x="48" y="83" stroke="none">(−2.5, 0)</text></svg>`,
        solution: "Turning points: $(-1, -1)$ and $(5, -25)$. Axial intercepts: $(0, 0)$ and $(-2.5, 0)$. Asymptotes: $x = 2$ and $y = -2x - 9$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "By adding an appropriate graph to the same diagram, determine the number of real roots of the equation $2x^4 + 5x^3 + 2x - 4 = 0$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2",
        placeholder: "Number of real roots",
        solution: "Rearranging: $\\frac{2}{x^2} = \\frac{-2x^2 - 5x}{x - 2}$.<br>Adding $y = \\frac{2}{x^2}$ to the sketch cuts the upper branch of $C$ twice (around $x < 0$ and $0 < x < 2$). Hence there are $2$ real roots."
      }
    ]
  },

  // ==================== VJC 2026 PAPER 2: STATISTICS (Q6 - Q11) ====================
  {
    id: "VJC-2026-P2-Q6",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Binomial Distribution", "Quality Control"],
    stem: "A factory produces a large batch of electronic microchips, of which $20\\%$ are defective. A quality control test consists of an inspector selecting a random sample of $n$ microchips from the batch. If at most one defective microchip is found, the batch is accepted. If more than two defective microchips are found, the batch is rejected. If exactly two defective microchips are found, the inspector selects a second random sample of $n$ microchips and the batch is rejected if this sample contains any defective microchips; otherwise it is accepted.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that the probability that a randomly chosen batch is accepted is $P = (0.8 + 0.2n)(0.8)^{n-1} + 0.02n(n-1)(0.8)^{2n-2}$.",
        type: "self",
        solution: "$X, Y \\sim \\mathrm{B}(n, 0.2)$.<br>$P = \\mathrm{P}(X \\le 1) + \\mathrm{P}(X = 2)\\mathrm{P}(Y = 0) = (0.8)^n + n(0.2)(0.8)^{n-1} + \\binom{n}{2}(0.2)^2(0.8)^{n-2}(0.8)^n$<br>$= (0.8 + 0.2n)(0.8)^{n-1} + 0.02n(n-1)(0.8)^{2n-2}$ (shown)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence, find the least possible value of $n$, given that the probability that a randomly chosen batch is accepted is less than $0.1$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "19",
        placeholder: "Integer value",
        solution: "From GC: at $n=18$, $P=0.102$; at $n=19$, $P=0.0851 < 0.1$.<br>Least $n = 19$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Given instead that $P = 0.398$, find the probability that out of $100$ randomly selected batches that are inspected, between $40$ and $45$ batches inclusive are accepted.",
        type: "auto",
        mode: "number",
        answer: "0.399",
        placeholder: "Exact or 3 s.f.",
        solution: "$W \\sim \\mathrm{B}(100, 0.398)$.<br>$\\mathrm{P}(40 \\le W \\le 45) = \\mathrm{P}(W \\le 45) - \\mathrm{P}(W \\le 39) = 0.399$ (3 s.f.)."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q7",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Probability", "Independent Events", "Venn Diagrams"],
    stem: "For events $A$ and $B$, it is given that $\\mathrm{P}(A \\cap B) = \\frac{7}{20}$, $\\mathrm{P}(B \\mid A) = \\frac{7}{12}$ and $\\mathrm{P}(A \\mid B) = \\frac{7}{9}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\mathrm{P}(A \\cap B') = \\frac{1}{4}$.",
        type: "self",
        solution: "$\\mathrm{P}(A) = \\frac{7/20}{7/12} = \\frac{3}{5}$.<br>$\\mathrm{P}(A \\cap B') = \\mathrm{P}(A) - \\mathrm{P}(A \\cap B) = \\frac{3}{5} - \\frac{7}{20} = \\frac{1}{4}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find $\\mathrm{P}(A \\cup B)$.",
        type: "auto",
        mode: "number",
        answer: "7/10",
        placeholder: "Exact or 3 s.f.",
        solution: "$\\mathrm{P}(B) = \\frac{7/20}{7/9} = \\frac{9}{20}$.<br>$\\mathrm{P}(A \\cup B) = \\frac{3}{5} + \\frac{9}{20} - \\frac{7}{20} = \\frac{7}{10}$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Find $\\mathrm{P}(A' \\cap B')$.",
        type: "auto",
        mode: "number",
        answer: "3/10",
        placeholder: "Exact or 3 s.f.",
        solution: "$\\mathrm{P}(A' \\cap B') = 1 - \\mathrm{P}(A \\cup B) = \\frac{3}{10}$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "It is given that $\\mathrm{P}(C) = \\frac{7}{10}$, where $C$ is an event such that events $A$ and $C$ are independent, and $B$ and $C$ are independent. Find the greatest and least possible values of $\\mathrm{P}(A \\cap B \\cap C)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Greatest =", answer: "0.315" },
          { label: "Least =", answer: "0.215" }
        ],
        solutionSvg: `<svg viewBox="0 0 280 185" width="260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><rect x="10" y="10" width="260" height="165" rx="8" fill="#fff" stroke-width="1.2"/><circle cx="140" cy="64" r="46" fill="none" stroke-width="1.3"/><circle cx="106" cy="112" r="46" fill="none" stroke-width="1.3"/><circle cx="174" cy="112" r="46" fill="none" stroke-width="1.3"/><text x="140" y="29" text-anchor="middle" stroke="none" font-weight="bold">A</text><text x="72" y="142" text-anchor="middle" stroke="none" font-weight="bold">B</text><text x="208" y="142" text-anchor="middle" stroke="none" font-weight="bold">C</text><text x="140" y="96" text-anchor="middle" stroke="none" font-weight="bold" fill="#4ca885">x</text><text x="115" y="76" text-anchor="middle" stroke="none">x−0.17</text><text x="168" y="76" text-anchor="middle" stroke="none">0.42−x</text><text x="140" y="132" text-anchor="middle" stroke="none">0.315−x</text><text x="95" y="114" text-anchor="middle" stroke="none">x−0.215</text><text x="186" y="114" text-anchor="middle" stroke="none">x−0.035</text><text x="38" y="45" text-anchor="middle" stroke="none">0.35−x</text><text x="225" y="164" text-anchor="middle" stroke="none">out: 0.335−x</text></svg>`,
        solution: "Let $x = \\mathrm{P}(A\\cap B\\cap C)$. Using $\\mathrm{P}(A\\cap C) = 0.42$, $\\mathrm{P}(B\\cap C) = 0.315$, all Venn regions $\\ge 0$ give $x - 0.215 \\ge 0$ and $0.315 - x \\ge 0$.<br>Greatest $= 0.315$, Least $= 0.215$."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q8",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Discrete Random Variables", "Expectation & Variance", "Permutations & Combinations"],
    stem: "A box contains $6$ red balls, $5$ white balls and $3$ black balls. A player draws one ball at random at a time without replacement until two balls of the same colour are drawn. Let $X$ denote the total number of balls drawn.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that $\\mathrm{P}(X = 3) = \\frac{81}{182}$ and tabulate the probability distribution of $X$.",
        type: "self",
        solution: "$\\mathrm{P}(X=3) = \\frac{6}{14}\\frac{8}{13}\\frac{5}{12}(2!) + \\frac{5}{14}\\frac{9}{13}\\frac{4}{12}(2!) + \\frac{3}{14}\\frac{11}{13}\\frac{2}{12}(2!) = \\frac{972}{2184} = \\frac{81}{182}$.<br><div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>2</td><td>3</td><td>4</td></tr><tr><th>$\\mathrm{P}(X=x)$</th><td>$4/13$</td><td>$81/182$</td><td>$45/182$</td></tr></table></div>"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The player receives prize money of $\\$(200 - 50X)$ at the end of the game. Find the expectation and variance of the prize money, leaving your answer correct to <strong>2 decimal places</strong>.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "E($) =", answer: "53.021978", dp: 2, placeholder: "2 d.p." },
          { label: "Var($²) =", answer: "1378.230286", dp: 2, placeholder: "2 d.p." }
        ],
        solution: "$\\mathrm{E}(X) = 2.93956$, $\\mathrm{Var}(X) = 0.55129$.<br>$\\mathrm{E}(200-50X) = \\$53.02$ (2 d.p.), $\\mathrm{Var}(200-50X) = 2500\\mathrm{Var}(X) = \\$^2 1378.23$ (2 d.p.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "If the first game ends after exactly two balls are drawn, all balls are returned and the player plays a second game under the same rules (at most two games). Find the expected total prize money received.",
        type: "auto",
        mode: "number",
        dp: 2,
        answer: "69.33643",
        placeholder: "In dollars (2 d.p.)",
        solution: "Expected total $= 53.0220 + \\frac{4}{13}(53.0220) = \\$69.34$ (2 d.p.)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Five players are to be seated in a row of $10$ seats. Find the number of distinct seating arrangements if two particular players are seated next to each other.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "6048",
        placeholder: "Integer value",
        solution: "Group the pair ($2!$), 3 other players, and 5 identical empty seats: $\\frac{9!\\times 2!}{5!} = 6048$."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q9",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Normal Distribution", "Central Limit Theorem"],
    stem: "The capacity of a Standard battery cell has distribution $\\mathrm{N}(\\mu, \\sigma^2)$ (in mAh). A Standard battery cell is equally likely to have a capacity of less than $2750\\text{ mAh}$ and more than $3650\\text{ mAh}$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State the value of $\\mu$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "3200",
        placeholder: "Value in mAh",
        solution: "By symmetry, $\\mu = \\frac{2750 + 3650}{2} = 3200$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Given that $\\mathrm{P}(2750 < X < 3650) = 0.860$, show that $\\sigma = 305$, correct to 3 significant figures.",
        type: "self",
        solution: "$\\mathrm{P}(-1.4758 < Z < 1.4758) = 0.860 \\implies \\frac{2750 - 3200}{\\sigma} = -1.4758 \\implies \\sigma = 304.92 \\approx 305$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Sketch the distribution of the capacity of a Standard battery cell for capacities between $1900\\text{ mAh}$ and $4500\\text{ mAh}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 165" width="320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="25" y1="130" x2="318" y2="130" stroke-width="1.4"/><polyline points="311,126 318,130 311,134" fill="none" stroke-width="1.4"/><text x="323" y="134" stroke="none" font-style="italic" font-family="Georgia,serif" font-size="12">x</text><path d="M 35 129 C 85 128, 118 28, 170 28 C 222 28, 255 128, 305 129" fill="none" stroke="#4ca885" stroke-width="2"/><line x1="170" y1="28" x2="170" y2="130" stroke-dasharray="4,3" stroke-width="1.1"/><g stroke="none" text-anchor="middle"><text x="38" y="145">1900</text><text x="80" y="145">2285</text><text x="170" y="145" font-weight="bold">3200</text><text x="260" y="145">4115</text><text x="302" y="145">4500</text><text x="260" y="50" font-family="Georgia,serif" font-size="11">X ~ N(3200, 305²)</text></g></svg>`,
        solution: "Bell curve symmetric about $\\mu = 3200$, inflection points at $\\mu \\pm \\sigma$ and tails approaching axis near $\\mu \\pm 3\\sigma$ ($2285, 4115$)."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "A Premium battery is created by increasing a Standard cell's capacity by $10\\%$. Find the probability that the total capacities of two Standard battery cells exceed the capacity of a Premium battery cell by more than $3000\\text{ mAh}$.",
        type: "auto",
        mode: "number",
        answer: "0.41309",
        placeholder: "Exact or 3 s.f.",
        solution: "$Y = 1.1X \\sim \\mathrm{N}(3520, 112560.25)$.<br>$T = X_1 + X_2 - Y \\sim \\mathrm{N}(2880, 298610.25)$.<br>$\\mathrm{P}(T > 3000) = 0.413$ (3 s.f.)."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "A Budget battery cell has mean $1200\\text{ mAh}$ and standard deviation $400\\text{ mAh}$. Three independent random samples of $100$ Budget cells each are selected. Estimate the probability that exactly two of the three samples have mean capacity of less than $1150\\text{ mAh}$.",
        type: "auto",
        mode: "number",
        answer: "0.02994",
        placeholder: "Exact or 3 s.f.",
        solution: "By CLT, $\\bar{B} \\sim \\mathrm{N}(1200, 400^2/100)$ approx.<br>$\\mathrm{P}(\\bar{B} < 1150) = 0.10565$.<br>$W \\sim \\mathrm{B}(3, 0.10565) \\implies \\mathrm{P}(W = 2) = 0.0299$ (3 s.f.)."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q10",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Hypothesis Testing", "Random Sampling"],
    stem: "Bottles of tomato juice are said to contain on average $250\\text{ ml}$. The production manager takes a random sample of $n$ bottles and measures volume $x\\text{ ml}$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State what it means for a sample to be random in this context.",
        type: "self",
        solution: "Each bottle of tomato juice produced has an equal chance of being selected, and the selections are independent of each other."
      },
      {
        label: "(b)(i)",
        marks: 5,
        prompt: "For $n = 12$, the values of $x$ are: $252, 245, 251.8, 249.2, 245, 250.5, 245.5, 239.5, 248.5, 250.2, 245, 249.6$. Taking $\\sigma = 5\\text{ ml}$, test at the $5\\%$ significance level whether the mean volume has been overstated. State a necessary assumption.",
        type: "self",
        solution: "$\\mathrm{H}_0: \\mu = 250$, $\\mathrm{H}_1: \\mu < 250$ (5% level). Assumption: Volume $X$ follows a normal distribution.<br>$\\bar{x} = 247.65$, $p$-value $= 0.0517 > 0.05$.<br>Do not reject $\\mathrm{H}_0$: insufficient evidence at 5% level that the population mean volume has been overstated."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "Explain the meaning of the $p$-value found in part (b)(i) in context.",
        type: "self",
        solution: "$5.17\\%$ is the smallest level of significance at which the test concludes that the population mean volume of tomato juice in a bottle is less than $250\\text{ ml}$ using this sample (or: assuming $\\mu = 250$, the probability of observing $\\bar{X} \\le 247.65$ is $0.0517$)."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "A new machine produces prune juice with mean volume $k\\text{ ml}$. A random sample of $60$ bottles has mean $179.3\\text{ ml}$ and variance $50.8\\text{ ml}^2$. Calculate the set of values of $k$ for the test to conclude, at $2\\%$ level of significance, that the mean volume is not $k\\text{ ml}$.",
        type: "self",
        solution: "$s^2 = \\frac{60}{59}(50.8)$. By CLT, reject $\\mathrm{H}_0: \\mu = k$ vs $\\mathrm{H}_1: \\mu \\ne k$ when $|z| \\ge 2.3263$.<br>$k \\le 177.14$ or $k \\ge 181.46$, i.e. $\\{k \\in \\mathbb{R}^+ : k \\le 177 \\text{ or } k \\ge 181\\}$."
      }
    ]
  },
  {
    id: "VJC-2026-P2-Q11",
    year: 2026,
    school: "VJC",
    paper: "2026 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Correlation & Regression", "Linearisation"],
    stem: "New user acquisitions ($y$, in hundreds) and digital advertising spend ($x$, in hundreds of dollars) are tabulated below:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>300</td><td>1100</td><td>1900</td><td>2700</td><td>3500</td><td>4300</td><td>5100</td><td>5900</td><td>6700</td><td>7500</td></tr><tr><th>$y$</th><td>55</td><td>66</td><td>70</td><td>73</td><td>76</td><td>$k$</td><td>79</td><td>80</td><td>81</td><td>82</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Given that the regression line of $y$ on $x$ is $y = 0.0031667x + 61.65$, show that $k = 78$.",
        type: "self",
        solution: "$\\bar{x} = 3900 \\implies \\bar{y} = 0.0031667(3900) + 61.65 = 74.00013$.<br>$\\frac{622 + k}{10} = 74.00013 \\implies k = 78.0013 \\approx 78$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Sketch a scatter diagram of the data.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 205" width="300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="45" y1="175" x2="295" y2="175" stroke-width="1.4"/><line x1="45" y1="180" x2="45" y2="18" stroke-width="1.4"/><text x="299" y="179" stroke="none" font-style="italic">x</text><text x="34" y="21" stroke="none" font-style="italic">y</text><text x="64" y="190" text-anchor="middle" stroke="none">300</text><text x="275" y="190" text-anchor="middle" stroke="none">7500</text><text x="38" y="160" text-anchor="end" stroke="none">55</text><text x="38" y="34" text-anchor="end" stroke="none">82</text><g stroke="#4ca885" stroke-width="1.6"><path d="M 61 153 L 67 159 M 67 153 L 61 159"/><path d="M 85 102 L 91 108 M 91 102 L 85 108"/><path d="M 108 83 L 114 89 M 114 83 L 108 89"/><path d="M 131 69 L 137 75 M 137 69 L 131 75"/><path d="M 154 55 L 160 61 M 160 55 L 154 61"/><path d="M 178 46 L 184 52 M 184 46 L 178 52"/><path d="M 201 41 L 207 47 M 207 41 L 201 47"/><path d="M 224 37 L 230 43 M 230 37 L 224 43"/><path d="M 248 32 L 254 38 M 254 32 L 248 38"/><path d="M 271 27 L 277 33 M 277 27 L 271 33"/></g></svg>`,
        solution: "Points curve upwards at a decreasing rate from $(300, 55)$ to $(7500, 82)$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Explain from your scatter diagram why the relationship should not be modelled by $y = ax + b$.",
        type: "self",
        solution: "From the scatter diagram, as $x$ increases, $y$ increases by a decreasing amount (curved, not linear)."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Model the relationship by $\\ln y = c + d\\ln x$. Find $c$, $d$ and the product moment correlation coefficient $r$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "c =", answer: "3.3126", placeholder: "3 s.f." },
          { label: "d =", answer: "0.12369", placeholder: "3 s.f." },
          { label: "r =", answer: "0.998", placeholder: "3 s.f." }
        ],
        solution: "From GC: $\\ln y = 3.3126 + 0.12369\\ln x \\approx 3.31 + 0.124\\ln x$ (3 s.f.), $r = 0.998$ (3 s.f.)."
      },
      {
        label: "(e) Estimate",
        marks: 1,
        prompt: "Estimate the amount spent on digital advertising (in dollars, nearest hundred) when user acquisitions $= 6000$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "55600",
        placeholder: "Nearest hundred ($)",
        solution: "$y = \\frac{6000}{100} = 60 \\implies \\ln(60) = 3.3126 + 0.12369\\ln x \\implies x = 555.68$.<br>Advertising budget $= 555.68 \\times 100 \\approx \\$55600$ (nearest hundred)."
      },
      {
        label: "(e) Reliability & (f)",
        marks: 3,
        prompt: "Give 2 reasons why the estimate in (e) is reliable, and state with a reason whether Dilip's claim that correlation proves advertising directly causes acquisition growth is valid.",
        type: "self",
        solution: "<strong>Reliability:</strong> $y = 60$ is within the data range $55 \\le y \\le 82$ (interpolation) and $r = 0.998$ is close to $1$ (good fit).<br><strong>Dilip's claim:</strong> Invalid. Correlation does not imply causation—other factors (e.g. seasonal trends or economic conditions) may drive both variables."
      }
    ]
  }
]);