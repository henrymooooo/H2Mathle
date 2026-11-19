window.registerQuestions([
  {
    id: "MI-2026-P2-Q1",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "Find the complex number $z$ satisfying the equation below.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the complex number $z$ such that $(z + 2\\mathrm{i})^* = 3\\mathrm{i}z + 2$.",
        type: "auto",
        mode: "complex-list",
        answer: ["-1+i"],
        placeholder: "Complex number in form a + bi",
        solution: "Let $z = a + b\\mathrm{i}$ ($a, b \\in \\mathbb{R}$): $a - \\mathrm{i}(b + 2) = 3\\mathrm{i}(a + b\\mathrm{i}) + 2 = (2 - 3b) + 3a\\mathrm{i}$.<br>Comparing real and imaginary parts: $a = 2 - 3b$ and $-(b + 2) = 3a$.<br>Substituting gives $-b - 2 = 6 - 9b \\implies 8b = 8 \\implies b = 1$ and $a = -1$. Hence $z = -1 + \\mathrm{i}$."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q2",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Graphs and Transformations"],
    diagramSvg: `<svg viewBox="0 0 280 175" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="105" x2="265" y2="105" stroke-width="1.2"/><line x1="130" y1="168" x2="130" y2="12" stroke-width="1.2"/><line x1="20" y1="68" x2="260" y2="68" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 20 74 Q 80 80 102 105 Q 118 128 125 164" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 135 18 Q 152 105 180 105 Q 204 105 220 78 Q 238 70 262 69" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="95" y="120" text-anchor="end" stroke="none">(−2, 0)</text><text x="180" y="120" text-anchor="middle" stroke="none">(4, 0)</text><text x="32" y="62" stroke="none">y = 2</text><text x="136" y="164" stroke="none">x = 0</text><text x="122" y="116" stroke="none" font-style="italic">O</text></svg>`,
    stem: "The diagram shows the graph of $y = \\mathrm{f}(x)$. The curve passes through the $x$-axis at $(-2, 0)$ and has a stationary point at $(4, 0)$. The asymptotes are $x = 0$ and $y = 2$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Sketch the graph of $y = -\\mathrm{f}(2x - 1)$, showing all asymptotes, intercepts and stationary points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 175" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="75" x2="265" y2="75" stroke-width="1.2"/><line x1="120" y1="168" x2="120" y2="12" stroke-width="1.2"/><line x1="138" y1="15" x2="138" y2="165" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="20" y1="112" x2="260" y2="112" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 20 106 Q 75 100 100 75 Q 124 55 134 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 143 162 Q 162 75 190 75 Q 214 75 232 102 Q 246 110 262 111" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="96" y="66" text-anchor="end" stroke="none">(−0.5, 0)</text><text x="190" y="66" text-anchor="middle" stroke="none">(2.5, 0)</text><text x="143" y="25" stroke="none">x = 0.5</text><text x="232" y="124" stroke="none">y = −2</text></svg>`,
        solution: "Translate $+1$ in $x$, scale by $\\frac{1}{2}$ parallel to $x$-axis, then reflect in $x$-axis.<br>• Asymptotes: $x = 0.5$ and $y = -2$.<br>• $x$-intercept at $(-0.5, 0)$; maximum stationary point at $(2.5, 0)$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\frac{1}{\\mathrm{f}(x)}$, showing all asymptotes and axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 175" width="265" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="15" y1="105" x2="265" y2="105" stroke-width="1.2"/><line x1="130" y1="168" x2="130" y2="12" stroke-width="1.2"/><line x1="95" y1="15" x2="95" y2="165" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="190" y1="15" x2="190" y2="165" stroke-dasharray="4,3" stroke-width="1.1"/><line x1="18" y1="84" x2="262" y2="84" stroke-dasharray="4,3" stroke-width="1.1"/><path d="M 18 82 Q 68 74 91 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 99 162 Q 108 108 130 105 Q 170 100 186 18" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 194 18 Q 204 76 262 82" fill="none" stroke="#4a8fe7" stroke-width="2"/><text x="90" y="25" text-anchor="end" stroke="none">x = −2</text><text x="195" y="25" stroke="none">x = 4</text><text x="235" y="76" stroke="none">y = 1/2</text><text x="122" y="117" stroke="none" font-style="italic">O</text></svg>`,
        solution: "• Vertical asymptotes at $x = -2$ and $x = 4$; horizontal asymptote at $y = \\frac{1}{2}$.<br>• Passes through $(0, 0)$ (or approaches $(0, 0)$ as $x$ → $0$); positive on both sides of $x = 4$."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q3",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Binomial Expansion", "Series Approximation"],
    stem: "It is given that $y = \\frac{1}{\\sqrt{4 - 3x}}$.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Show that $y = \\frac{1}{k}\\left(1 - \\frac{3}{4}x\\right)^{-\\frac{1}{2}}$, where $k$ is a constant to be found.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2",
        placeholder: "Exact value of k",
        solution: "$y = (4 - 3x)^{-1/2} = 4^{-1/2}\\left(1 - \\frac{3}{4}x\\right)^{-1/2} = \\frac{1}{2}\\left(1 - \\frac{3}{4}x\\right)^{-1/2}$, so $k = 2$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Hence, expand $\\frac{1}{\\sqrt{4 - 3x}}$ as a series in ascending powers of $x$ up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.2, 0.4, -0.3] },
        answer: "1/2 + (3/16)*x + (27/256)*x^2 + (135/2048)*x^3",
        placeholder: "Polynomial in x up to x^3",
        solution: "$$\\frac{1}{2}\\left(1 + \\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{4}x\\right) + \\frac{(-1/2)(-3/2)}{2!}\\left(-\\frac{3}{4}x\\right)^2 + \\frac{(-1/2)(-3/2)(-5/2)}{3!}\\left(-\\frac{3}{4}x\\right)^3 + \\dots\\right)$$ $$= \\frac{1}{2} + \\frac{3}{16}x + \\frac{27}{256}x^2 + \\frac{135}{2048}x^3.$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Find the range of values of $x$ for which this expansion is valid.",
        type: "self",
        solution: "Valid for $\\left|-\\frac{3}{4}x\\right| < 1 \\implies |x| < \\frac{4}{3}$, i.e. $-\\frac{4}{3} < x < \\frac{4}{3}$."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "Use your answer in (ii) and integration to give an approximation for $\\int_0^{0.8} \\frac{1}{\\sqrt{4 - 3x}}\\,\\mathrm{d}x$, giving your answer to $4$ decimal places.",
        type: "auto",
        mode: "number",
        dp: 4,
        answer: "0.48477",
        placeholder: "Value to 4 d.p.",
        solution: "$$\\left[\\frac{1}{2}x + \\frac{3}{32}x^2 + \\frac{9}{256}x^3 + \\frac{135}{8192}x^4\\right]_0^{0.8} = 0.4848 \\text{ (4 d.p.).}$$"
      },
      {
        label: "(v)",
        marks: 2,
        prompt: "Use your calculator to find numerically the value of $\\int_0^{0.8} \\frac{1}{\\sqrt{4 - 3x}}\\,\\mathrm{d}x$, up to $4$ decimal places. Why is the approximation in (iv) not very good?",
        type: "auto",
        mode: "number",
        dp: 4,
        answer: "0.49006",
        placeholder: "Calculator value (4 d.p.)",
        solution: "By GC: $\\int_0^{0.8} \\frac{1}{\\sqrt{4 - 3x}}\\,\\mathrm{d}x = 0.4901$ (4 d.p.).<br>The approximation in (iv) is not very good because the upper limit $x = 0.8$ is not close enough to $0$ (or not enough terms in the binomial expansion were used)."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q4",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Vectors", "Vector Product", "Collinearity"],
    stem: "Answer all parts.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "The non-zero vectors $\\mathbf{v}$ and $\\mathbf{w}$ are such that $(\\mathbf{v} - 2\\mathbf{w}) \\times (3\\mathbf{v} + \\mathbf{w}) = \\mathbf{0}$. Determine the geometrical relationship between $\\mathbf{v}$ and $\\mathbf{w}$.",
        type: "self",
        solution: "Expanding: $3(\\mathbf{v}\\times\\mathbf{v}) + (\\mathbf{v}\\times\\mathbf{w}) - 6(\\mathbf{w}\\times\\mathbf{v}) - 2(\\mathbf{w}\\times\\mathbf{w}) = \\mathbf{0} \\implies 7(\\mathbf{v}\\times\\mathbf{w}) = \\mathbf{0} \\implies \\mathbf{v}\\times\\mathbf{w} = \\mathbf{0}$.<br>Since $\\mathbf{v} \\ne \\mathbf{0}$ and $\\mathbf{w} \\ne \\mathbf{0}$, $\\mathbf{v}$ and $\\mathbf{w}$ are parallel."
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "It is given that $\\mathbf{a}$ and $\\mathbf{b}$ are non-zero vectors such that $|\\mathbf{a}| = 2$ and $|\\mathbf{b}| = 3$. If $\\mathbf{a} \\cdot \\mathbf{b} = -3$, find the <strong>exact</strong> value of $|\\mathbf{a} \\times \\mathbf{b}|$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "3*sqrt(3)",
        placeholder: "Exact surd form",
        solution: "$\\cos\\theta = \\frac{-3}{2(3)} = -\\frac{1}{2} \\implies \\theta = 120^\\circ$.<br>$|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin 120^\\circ = 6\\left(\\frac{\\sqrt{3}}{2}\\right) = 3\\sqrt{3}$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Referred to origin $O$, points $A$ and $B$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$ respectively. The point $C$ lies on the line segment $BA$ produced such that $3AC = 2BC$. Find the position vector $\\mathbf{c}$ of the point $C$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
        type: "auto",
        mode: "expr",
        vars: { a: [1, 3, -2], b: [2, -1, 5] },
        answer: "3*a - 2*b",
        placeholder: "Expression in terms of a and b",
        solution: "$3(\\mathbf{c} - \\mathbf{a}) = 2(\\mathbf{c} - \\mathbf{b}) \\implies \\mathbf{c} = 3\\mathbf{a} - 2\\mathbf{b}$."
      },
      {
        label: "(b)(iii)",
        marks: 3,
        prompt: "The point $P$ has position vector $\\mathbf{p} = \\mathbf{a} + \\mu\\mathbf{b}$, where $\\mu$ is a parameter. Find the value of $\\mu$ such that the points $O$, $C$ and $P$ are collinear.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "-2/3",
        placeholder: "Exact value",
        solution: "For collinearity, $\\mathbf{c} = \\lambda\\mathbf{p} \\implies 3\\mathbf{a} - 2\\mathbf{b} = \\lambda(\\mathbf{a} + \\mu\\mathbf{b})$. Comparing coefficients: $\\lambda = 3$ and $\\lambda\\mu = -2 \\implies \\mu = -\\frac{2}{3}$."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q5",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Applications of Differentiation", "Maxima & Minima"],
    diagramSvg: `<svg viewBox="0 0 220 185" width="205" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polygon points="45,165 45,75 110,25 175,75 175,165" fill="rgba(91,155,213,0.12)" stroke="#2c2925" stroke-width="1.8"/><path d="M 96 36 A 18 18 0 0 0 124 36" fill="none" stroke="#4a8fe7" stroke-width="1.3"/><text x="110" y="52" text-anchor="middle" stroke="none" font-style="italic">θ</text><text x="35" y="122" text-anchor="end" stroke="none">10</text><text x="185" y="122" stroke="none">10</text><text x="72" y="45" stroke="none">8</text><text x="148" y="45" stroke="none">8</text><text x="34" y="168" stroke="none" font-style="italic">A</text><text x="32" y="78" stroke="none" font-style="italic">B</text><text x="110" y="17" text-anchor="middle" stroke="none" font-style="italic">C</text><text x="182" y="78" stroke="none" font-style="italic">D</text><text x="182" y="168" stroke="none" font-style="italic">E</text></svg>`,
    stem: "An architectural firm is designing a signature glass façade for the entrance of a museum. The cross-section of the façade is modelled as a pentagon $ABCDE$. The lower portion $ABDE$ is a rectangle with fixed vertical sides $AB = DE = 10\\text{ m}$. The upper portion is an isosceles triangular roof $BCD$ where $BC = CD = 8\\text{ m}$ and $\\angle BCD = \\theta$, where $0 < \\theta < \\pi$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that the total area of the glass façade, $G\\text{ m}^2$, can be expressed as $$G = 160\\sin\\left(\\frac{\\theta}{2}\\right) + 32\\sin\\theta.$$",
        type: "self",
        solution: "Width $BD = 2(8\\sin(\\theta/2)) = 16\\sin(\\theta/2)$, so Area($ABDE$) $= 10 \\times 16\\sin(\\theta/2) = 160\\sin(\\theta/2)$.<br>Area($BCD$) $= \\frac{1}{2}(8)(8)\\sin\\theta = 32\\sin\\theta$.<br>Total area $G = 160\\sin(\\theta/2) + 32\\sin\\theta$ (shown)."
      },
      {
        label: "(b)(i)",
        marks: 4,
        prompt: "Using calculus, find the exact value of $\\cos\\left(\\frac{\\theta}{2}\\right)$ that gives a stationary value of $G$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "(-5 + sqrt(57))/8",
        placeholder: "Exact surd form",
        solution: "$\\frac{\\mathrm{d}G}{\\mathrm{d}\\theta} = 80\\cos\\frac{\\theta}{2} + 32\\cos\\theta = 80\\cos\\frac{\\theta}{2} + 32\\left(2\\cos^2\\frac{\\theta}{2} - 1\\right) = 0$.<br>$4\\cos^2\\frac{\\theta}{2} + 5\\cos\\frac{\\theta}{2} - 2 = 0 \\implies \\cos\\frac{\\theta}{2} = \\frac{-5 \\pm \\sqrt{57}}{8}$.<br>Since $0 < \\frac{\\theta}{2} < \\frac{\\pi}{2}$, $\\cos\\frac{\\theta}{2} > 0$, so $\\cos\\left(\\frac{\\theta}{2}\\right) = \\frac{-5 + \\sqrt{57}}{8}$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Determine whether this stationary value of $G$ is a maximum or minimum, justifying your answer.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}^2G}{\\mathrm{d}\\theta^2} = -40\\sin\\frac{\\theta}{2} - 32\\sin\\theta < 0$ for $0 < \\theta < \\pi$ (since $\\sin\\theta > 0$ and $\\sin\\frac{\\theta}{2} > 0$). By the second derivative test, this stationary value of $G$ is a maximum."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q6",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "A bag contains $x$ gold coins and $2$ silver coins where $x > 1$. In a game, a player removes coins at random from the bag without replacement, one at a time, until the player has taken out $1$ gold coin. The total number of coins that the player removes from the bag is denoted by $T$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find, in terms of $x$, the probability distribution of $T$.",
        type: "self",
        solution: "Possible values of $T$ are $1, 2, 3$:<br>• $\\mathrm{P}(T = 1) = \\frac{x}{x+2}$<br>• $\\mathrm{P}(T = 2) = \\frac{2}{x+2}\\cdot\\frac{x}{x+1} = \\frac{2x}{(x+2)(x+1)}$<br>• $\\mathrm{P}(T = 3) = \\frac{2}{x+2}\\cdot\\frac{1}{x+1}\\cdot 1 = \\frac{2}{(x+2)(x+1)}$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Given that $\\mathrm{E}(T) = \\frac{7}{6}$, find the value of $x$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "11",
        placeholder: "Integer value of x",
        solution: "$\\mathrm{E}(T) = \\frac{x(x+1) + 4x + 6}{(x+2)(x+1)} = \\frac{7}{6} \\implies x^2 - 9x - 22 = 0 \\implies (x - 11)(x + 2) = 0$. Since $x > 1$, $x = 11$."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "Hence find $\\mathrm{Var}(T)$.",
        type: "auto",
        mode: "number",
        answer: "0.16453",
        placeholder: "Value to 3 s.f.",
        solution: "With $x = 11$, $\\mathrm{P}(T=1)=\\frac{11}{13}$, $\\mathrm{P}(T=2)=\\frac{11}{78}$, $\\mathrm{P}(T=3)=\\frac{1}{78}$. Using GC, $\\mathrm{Var}(T) = 0.165$ (3 s.f.)."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q7",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Permutations & Combinations", "Probability"],
    stem: "This question is about arrangements of all nine letters in the word <strong>EXCELLENT</strong>.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find the number of different arrangements that can be made in a row.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "30240",
        placeholder: "Exact integer",
        solution: "Letters: $3$ E's, $2$ L's, X, C, N, T. Number of arrangements $= \\frac{9!}{3!2!} = 30240$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Given that the nine letters are arranged randomly in a row, find the probability that both 'L's are together and no two 'E's are adjacent to each other.",
        type: "auto",
        mode: "number",
        answer: "5/63",
        placeholder: "Exact fraction or 3 s.f.",
        solution: "Group (LL) as 1 unit and arrange with X, C, N, T in $5!$ ways ($6$ gaps). Slot the $3$ identical E's in ${^6C_3}$ ways.<br>Probability $= \\frac{5! \\times {^6C_3}}{30240} = \\frac{2400}{30240} = \\frac{5}{63} \\approx 0.0794$ (3 s.f.)."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q8",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Binomial Distribution"],
    stem: "On average, $6\\%$ of the audio chips produced by a manufacturer are defective. The audio chips are packed into trays, with each tray containing $50$ audio chips.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "State, in context, two assumptions needed for the number of defective audio chips in a tray to be well modelled by a binomial distribution.",
        type: "self",
        solution: "1. Whether an audio chip is defective is independent of other audio chips.<br>2. The probability of an audio chip being defective is constant ($0.06$) for every audio chip."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Assume now that the number of defective audio chips in a tray has a binomial distribution. Find the probability that a randomly chosen tray of $50$ audio chips contains more than $3$ defective audio chips.",
        type: "auto",
        mode: "number",
        answer: "0.35270",
        placeholder: "Probability (3 s.f.)",
        solution: "$X \\sim \\mathrm{B}(50, 0.06)$. $\\mathrm{P}(X > 3) = 1 - \\mathrm{P}(X \\le 3) = 0.353$ (3 s.f.)."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "The trays are randomly packed into boxes. Each box contains $8$ trays of audio chips. Find the probability that, in a randomly chosen box, at most $4$ trays of audio chips contain more than $3$ defective audio chips.",
        type: "auto",
        mode: "number",
        answer: "0.89076",
        placeholder: "Probability (3 s.f.)",
        solution: "Let $Y \\sim \\mathrm{B}(8, 0.35270)$. $\\mathrm{P}(Y \\le 4) = 0.891$ (3 s.f.)."
      },
      {
        label: "(iv)",
        marks: 2,
        prompt: "Find the probability that none of the trays in a randomly chosen box contain any defective audio chips. Give your answer in the form $a \\times 10^b$ where $a$ and $b$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "1.78296", placeholder: "Value to 3 s.f." },
          { label: "b =", answer: "-11", exactRequired: true, placeholder: "Integer exponent" }
        ],
        solution: "$[\\mathrm{P}(X = 0)]^8 = (0.94^{50})^8 = 0.94^{400} = 1.78296 \\times 10^{-11} \\approx 1.78 \\times 10^{-11}$, so $a = 1.78$ and $b = -11$."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q9",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Probability", "Conditional Probability"],
    stem: "The events $A$, $B$ and $C$ are such that $\\mathrm{P}(A) = 0.5$, $\\mathrm{P}(B) = 0.4$ and $\\mathrm{P}(B \\cap C) = 0.15$. The probability that none of the three events occur is $0.1$ and the events $A$ and $B$ are independent.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "It is given that events $A$ and $C$ are mutually exclusive. Write down the values of $\\mathrm{P}(A \\cap B)$ and $\\mathrm{P}(A \\cap C)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "P(A∩B) =", answer: "0.2", placeholder: "Exact value" },
          { label: "P(A∩C) =", answer: "0", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "Since $A$ and $B$ are independent: $\\mathrm{P}(A \\cap B) = 0.5 \\times 0.4 = 0.2$.<br>Since $A$ and $C$ are mutually exclusive: $\\mathrm{P}(A \\cap C) = 0$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find $\\mathrm{P}(C)$.",
        type: "auto",
        mode: "number",
        answer: "0.35",
        placeholder: "Exact value",
        solution: "$\\mathrm{P}(A \\cup B) = 0.5 + 0.4 - 0.2 = 0.7$.<br>$\\mathrm{P}(C) = 1 - 0.1 - \\mathrm{P}(A \\cup B) + \\mathrm{P}(B \\cap C) = 1 - 0.1 - 0.7 + 0.15 = 0.35$."
      },
      {
        label: "(a)(iii)",
        marks: 2,
        prompt: "Find $\\mathrm{P}(B' \\mid C)$.",
        type: "auto",
        mode: "number",
        answer: "4/7",
        placeholder: "Exact fraction or 3 s.f.",
        solution: "$\\mathrm{P}(B' \\mid C) = \\frac{\\mathrm{P}(C) - \\mathrm{P}(B \\cap C)}{\\mathrm{P}(C)} = \\frac{0.35 - 0.15}{0.35} = \\frac{4}{7} \\approx 0.571$ (3 s.f.)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Given instead that events $A$ and $C$ are not mutually exclusive, and $\\mathrm{P}(A \\cap B \\cap C) = 0.05$, find the range of possible values of $\\mathrm{P}(C)$.",
        type: "self",
        solution: "$\\mathrm{P}(A' \\cap B' \\cap C) = 1 - 0.7 - 0.1 = 0.2$, and $\\mathrm{P}(A' \\cap B \\cap C) = 0.15 - 0.05 = 0.1$.<br>Thus $\\mathrm{P}(C) = 0.3 + \\mathrm{P}(A \\cap C)$.<br>Minimum $\\mathrm{P}(A \\cap C) = 0.05 \\implies \\min \\mathrm{P}(C) = 0.35$.<br>Maximum $\\mathrm{P}(A \\cap C) = \\mathrm{P}(A \\cap B') + 0.05 = 0.3 + 0.05 = 0.35 \\implies \\max \\mathrm{P}(C) = 0.65$.<br>Hence $0.35 \\le \\mathrm{P}(C) \\le 0.65$."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q10",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Correlation and Regression"],
    stem: "A researcher is investigating the relationship between sleep duration and academic achievement score of university students. The average daily sleep duration, $t$ hours, in the week before the assessments, and the academic achievement score, $y$ points, were recorded for a random sample of $9$ students.<div class='q-table-wrap'><table class='q-table'><tr><th>$t$</th><td>4.2</td><td>5.1</td><td>5.5</td><td>6.3</td><td>6.4</td><td>6.8</td><td>7.2</td><td>7.6</td><td>8.1</td></tr><tr><th>$y$</th><td>33</td><td>51</td><td>64</td><td>72</td><td>75</td><td>78</td><td>80</td><td>82</td><td>87</td></tr></table></div>It is thought that this set of data can be modelled by one of the following equations:<br>Model A: $y = mt + c$<br>Model B: $y = a\\ln t + b$",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Give an interpretation, in context, of the value of $m$ for Model A.",
        type: "self",
        solution: "For every $1$ hour increase in average daily sleep duration, there is an expected increase of $m$ points in the academic achievement score."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "Find the value of the product moment correlation coefficient between $t$ and $y$.",
        type: "auto",
        mode: "number",
        answer: "0.95967",
        placeholder: "Value to 3 s.f.",
        solution: "Using GC, $r = 0.95967 \\approx 0.960$ (3 s.f.)."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "Find the value of the product moment correlation coefficient between $\\ln t$ and $y$.",
        type: "auto",
        mode: "number",
        answer: "0.98115",
        placeholder: "Value to 3 s.f.",
        solution: "Using GC, $r = 0.98115 \\approx 0.981$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Explain whether the product moment correlation coefficient between $t$ and $y$ would differ if the researcher converted the average daily duration of sleep to minutes.",
        type: "self",
        solution: "No, because the product moment correlation coefficient is invariant under linear transformations / scaling of units."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "By using your answers in part (b), explain whether Model A or Model B is a more appropriate model for the given set of data and find the equation of the regression line for this model.",
        type: "self",
        solution: "Since $r = 0.981$ (between $\\ln t$ and $y$) is closer to $1$ than $r = 0.960$ (between $t$ and $y$), Model B is more appropriate.<br>Regression line: $y = 81.1\\ln t - 79.4$ (3 s.f.)."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Use the equation of the regression line in part (d) to estimate the academic achievement score for a student who has an average daily sleep duration of $6$ hours, leaving your answer to the nearest integer. Comment on the reliability of the estimate.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "66",
        placeholder: "Nearest integer",
        solution: "At $t = 6$: $y = 81.119\\ln(6) - 79.399 = 65.947 \\approx 66$ points (nearest integer).<br>Since $r = 0.981$ is close to $1$ and $t = 6$ lies within the data range $4.2 \\le t \\le 8.1$ (interpolation), the estimate is reliable."
      }
    ]
  },
  {
    id: "MI-2026-P2-Q11",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Hypothesis Testing", "Sampling", "Central Limit Theorem"],
    stem: "A hand soap company claims that the mean volume of each bottle of their hand soap is $250\\text{ ml}$. The consumer association suspects that the company is overstating the mean volume of its hand soap and decides to carry out a hypothesis test on a sample of these bottles.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Explain why the consumer association should take a sample of at least $30$ bottles, and state how these bottles should be chosen.",
        type: "self",
        solution: "A sample of at least $30$ bottles ensures the sample size is sufficiently large to approximate $\\bar{X}$ by a normal distribution using the Central Limit Theorem. The bottles should be chosen randomly (independently and with equal chance of selection)."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "The consumer association takes a suitable sample of $40$ bottles and the volumes, $x\\text{ ml}$, are summarised below: $$\\sum(x - 250) = -7.6, \\quad \\sum(x - 250)^2 = 18.2.$$ Calculate the unbiased estimates of the population mean and variance.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "249.81", exactRequired: true, placeholder: "Exact value" },
          { label: "Variance =", answer: "0.429641", placeholder: "Value to 3 s.f." }
        ],
        solution: "$\\bar{x} = 250 + \\frac{-7.6}{40} = 249.81$.<br>$s^2 = \\frac{1}{39}\\left(18.2 - \\frac{(-7.6)^2}{40}\\right) = 0.42964 \\approx 0.430$ (3 s.f.)."
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "Test, at $5\\%$ level of significance, whether the consumer association's suspicion is justified. You should state your hypotheses and define any symbols you use.",
        type: "self",
        solution: "Let $\\mu$ be the population mean volume of a bottle of hand soap.<br>$\\mathrm{H}_0 : \\mu = 250$, $\\mathrm{H}_1 : \\mu < 250$.<br>Under $\\mathrm{H}_0$, by CLT ($n = 40$ large), $\\bar{X} \\sim \\mathrm{N}\\left(250, \\frac{0.42964}{40}\\right)$ approx.<br>$p\\text{-value} = 0.0334 < 0.05$, so reject $\\mathrm{H}_0$. There is sufficient evidence at the $5\\%$ level of significance that the company is overstating the mean volume."
      },
      {
        label: "(iv)",
        marks: 4,
        prompt: "In another random sample of $30$ bottles of hand soap, it was found that the sample mean volume is $246\\text{ ml}$ and the sample standard deviation is $k\\text{ ml}$. The consumer association carried out another hypothesis test using this sample and concludes that there is insufficient evidence to justify their suspicion at $1\\%$ level of significance. Find the range of possible values of $k$.",
        type: "self",
        solution: "Unbiased variance $s^2 = \\frac{30}{29}k^2$, so $\\bar{X} \\sim \\mathrm{N}\\left(250, \\frac{k^2}{29}\\right)$ approx.<br>Since $\\mathrm{H}_0$ is not rejected at $1\\%$ level (critical value $-2.3263$):<br>$$\\frac{246 - 250}{k/\\sqrt{29}} > -2.3263 \\implies k > \\frac{4\\sqrt{29}}{2.3263} = 9.2596 \\implies k > 9.26 \\text{ (3 s.f.).}$$"
      }
    ]
  },
  {
    id: "MI-2026-P2-Q12",
    year: 2026,
    school: "MI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q12",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "<strong>In this question, you should state the parameters of any normal distribution you use.</strong><br>The delay time, $x$ milliseconds, for players using a wired connection to connect to a gaming server follows a normal distribution with mean $60$ milliseconds and standard deviation $8$ milliseconds.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Three players who use a wired connection are chosen randomly. Find the probability that the total delay time experienced by them is between $150$ and $200$ milliseconds.",
        type: "auto",
        mode: "number",
        answer: "0.91035",
        placeholder: "Probability (3 s.f.)",
        solution: "$X_1 + X_2 + X_3 \\sim \\mathrm{N}(3(60), 3(8^2)) = \\mathrm{N}(180, 192)$.<br>$\\mathrm{P}(150 < X_1 + X_2 + X_3 < 200) = 0.910$ (3 s.f.)."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "The delay time, $y$ milliseconds, for players using a wireless connection follows a normal distribution where $60\\%$ of these players experience a delay time greater than $80$ milliseconds, and $7\\%$ of them experience a delay time less than $65$ milliseconds. Find the mean delay time of players who use a wireless connection and show that the standard deviation is $12.3$ milliseconds, correct to $1$ decimal place.",
        type: "auto",
        mode: "number",
        answer: "83.109",
        placeholder: "Mean delay time (3 s.f.)",
        solution: "Let $Y \\sim \\mathrm{N}(\\mu, \\sigma^2)$. $\\frac{80 - \\mu}{\\sigma} = -0.25335$ and $\\frac{65 - \\mu}{\\sigma} = -1.47579$.<br>Solving gives $\\mu = 83.109 \\approx 83.1$ ms (3 s.f.) and $\\sigma = 12.271 \\approx 12.3$ ms (1 d.p.) (shown)."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "It is assumed that the delay time experienced by players is independent of the types of connection used. One player using a wired connection and one player using a wireless connection are randomly selected. Find the probability that the connection delay time between both players differs by less than $10$ milliseconds.",
        type: "auto",
        mode: "number",
        answer: "0.1743",
        placeholder: "Probability (3 s.f.)",
        solution: "$X - Y \\sim \\mathrm{N}(60 - 83.109, 8^2 + 12.3^2) = \\mathrm{N}(-23.109, 215.29)$.<br>$\\mathrm{P}(|X - Y| < 10) = \\mathrm{P}(-10 < X - Y < 10) = 0.174$ (3 s.f.)."
      },
      {
        label: "(iv)",
        marks: 4,
        prompt: "The developers release a software update which reduces the wired connection delay time by $10\\%$ and the wireless connection delay time by $20\\%$ respectively. Two players who use a wired connection and one player who uses a wireless connection are randomly chosen. Find the probability that their total connection delay time is at most $190$ milliseconds.",
        type: "auto",
        mode: "number",
        answer: "0.8634",
        placeholder: "Probability (3 s.f.)",
        solution: "Let $T = 0.9(X_1 + X_2) + 0.8Y$.<br>$\\mathrm{E}(T) = 0.9(120) + 0.8(83.109) = 174.4872$, $\\mathrm{Var}(T) = 0.9^2(8^2 + 8^2) + 0.8^2(12.3^2) = 200.5056$.<br>$\\mathrm{P}(T \\le 190) = 0.863$ (3 s.f.)."
      }
    ]
  }
]);
