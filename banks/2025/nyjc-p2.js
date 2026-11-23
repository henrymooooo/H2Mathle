window.registerQuestions([
  {
    id: "NYJC-2025-P2-Q1",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the set of values of $x$ for which $3|x - 3| \\le |1 - 2x|$.",
        type: "self",
        solution: "Squaring both sides (since both sides are non-negative):<br>$$9(x - 3)^2 \\le (1 - 2x)^2$$<br>$$9x^2 - 54x + 81 \\le 1 - 4x + 4x^2$$<br>$$5x^2 - 50x + 80 \\le 0$$<br>$$x^2 - 10x + 16 \\le 0$$<br>$$(x - 2)(x - 8) \\le 0$$<br>Hence $2 \\le x \\le 8$.<br>The required set of values is $\\{x \\in \\mathbb{R} : 2 \\le x \\le 8\\}$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Without using a calculator, solve $\\frac{x + 18}{x^2 + 5x - 14} \\ge -1$.",
        type: "self",
        solution: "$$\\frac{x + 18}{x^2 + 5x - 14} + 1 \\ge 0$$<br>$$\\frac{x + 18 + x^2 + 5x - 14}{(x + 7)(x - 2)} \\ge 0, \\quad x \\ne -7, 2$$<br>$$\\frac{x^2 + 6x + 4}{(x + 7)(x - 2)} \\ge 0$$<br>Completing the square for the numerator: $x^2 + 6x + 4 = (x + 3)^2 - 5 = (x + 3 - \\sqrt{5})(x + 3 + \\sqrt{5})$.<br>$$\\frac{(x + 3 - \\sqrt{5})(x + 3 + \\sqrt{5})}{(x + 7)(x - 2)} \\ge 0$$<br>The critical values in ascending order are $-7$, $-3 - \\sqrt{5} \\approx -5.24$, $-3 + \\sqrt{5} \\approx -0.76$, and $2$.<br>Testing signs across the intervals:<br>$$x < -7 \\quad \\text{or} \\quad -3 - \\sqrt{5} \\le x \\le -3 + \\sqrt{5} \\quad \\text{or} \\quad x > 2$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q2",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "It is given that the roots to the equation $-\\mathrm{i}x^3 + 5\\mathrm{i}x^2 + ax + b = 0$, where $a$ and $b$ are purely imaginary, are $2 + \\mathrm{i}$, $2 - \\mathrm{i}$ and $1$. Explain why the complex roots occur in conjugate pairs.",
        type: "self",
        solution: "Since $a$ and $b$ are purely imaginary, let $a = \\lambda\\mathrm{i}$ and $b = \\mu\\mathrm{i}$ where $\\lambda, \\mu \\in \\mathbb{R}$.<br>Substituting into the equation:<br>$$-\\mathrm{i}x^3 + 5\\mathrm{i}x^2 + \\lambda\\mathrm{i}x + \\mu\\mathrm{i} = 0$$<br>Dividing throughout by $-\\mathrm{i}$:<br>$$x^3 - 5x^2 - \\lambda x - \\mu = 0$$<br>Since all coefficients of this polynomial equation are real, any non-real complex roots must occur in conjugate pairs."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "By using (a) and an appropriate substitution, find the roots of the equation $\\mathrm{i}x^3 + 5\\mathrm{i}x^2 + a^* x + b = 0$, where the complex conjugate of $a$ is denoted by $a^*$.",
        type: "auto",
        mode: "complex-list",
        answer: ["-2+i", "-2-i", "-1"],
        placeholder: "Separate roots with commas",
        solution: "Since $a$ is purely imaginary, $a^* = -a$.<br>Rewriting the given equation:<br>$$\\mathrm{i}x^3 + 5\\mathrm{i}x^2 - ax + b = 0$$<br>$$-\\mathrm{i}(-x)^3 + 5\\mathrm{i}(-x)^2 + a(-x) + b = 0$$<br>Comparing this with the equation in (a) using the substitution $u = -x$, the roots for $-x$ are $2 + \\mathrm{i}$, $2 - \\mathrm{i}$ and $1$.<br>Therefore, the roots for $x$ are $-2 - \\mathrm{i}$, $-2 + \\mathrm{i}$ and $-1$."
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q3",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Given that $\\mathrm{f}$ is a continuous function, explain, with the aid of a sketch, why the value of<br>$$\\lim_{n \\text{ → ∞}} \\frac{2}{n}\\left\\{\\mathrm{f}\\left(1 + \\frac{2}{n}\\right) + \\mathrm{f}\\left(1 + \\frac{4}{n}\\right) + \\dots + \\mathrm{f}\\left(1 + \\frac{2n}{n}\\right)\\right\\}$$<br>is $\\int_1^3 \\mathrm{f}(x)\\,\\mathrm{d}x$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="165" x2="285" y2="165" stroke-width="1.2"/>
  <polyline points="279,162 285,165 279,168" fill="none" stroke-width="1.2"/>
  <line x1="45" y1="185" x2="45" y2="20" stroke-width="1.2"/>
  <polyline points="42,26 45,20 48,26" fill="none" stroke-width="1.2"/>
  <text x="288" y="169" stroke="none" font-style="italic">x</text>
  <text x="41" y="14" stroke="none" font-style="italic">y</text>
  <!-- Curve y = f(x) rising from x=1 (85,165) to x=3 (245,42) -->
  <path d="M 78,185 C 88,125 130,52 260,36" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <text x="225" y="27" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>
  <!-- Right-endpoint rectangles -->
  <rect x="85" y="132" width="16" height="33" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <rect x="101" y="106" width="16" height="59" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <rect x="117" y="88" width="16" height="77" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <text x="168" y="118" stroke="none" font-size="14">…</text>
  <rect x="229" y="39" width="16" height="126" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1"/>
  <!-- x-axis labels -->
  <text x="82" y="180" stroke="none">1</text>
  <text x="242" y="180" stroke="none">3</text>
</svg>`,
        solution: "Divide the interval $[1, 3]$ (of total length $3 - 1 = 2$) into $n$ equal sub-intervals, each of width $\\frac{2}{n}$.<br>Construct $n$ rectangles using the right endpoints of each sub-interval:<br>• Height of the $1$st rectangle is $\\mathrm{f}\\left(1 + \\frac{2}{n}\\right)$,<br>• Height of the $2$nd rectangle is $\\mathrm{f}\\left(1 + \\frac{4}{n}\\right)$, ...,<br>• Height of the $n$th rectangle is $\\mathrm{f}\\left(1 + \\frac{2n}{n}\\right) = \\mathrm{f}(3)$.<br><br>The total area of the $n$ rectangles is $\\frac{2}{n}\\left\\{\\mathrm{f}\\left(1 + \\frac{2}{n}\\right) + \\mathrm{f}\\left(1 + \\frac{4}{n}\\right) + \\dots + \\mathrm{f}\\left(1 + \\frac{2n}{n}\\right)\\right\\}$.<br>As $n$ → ∞, the width $\\frac{2}{n}$ → $0$, and the sum of the areas of the $n$ rectangles tends to the exact area under the curve $y = \\mathrm{f}(x)$ from $x = 1$ to $x = 3$, which is $\\int_1^3 \\mathrm{f}(x)\\,\\mathrm{d}x$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Hence evaluate $\\lim_{n \\text{ → ∞}} \\sum_{k=1}^{n} \\ln\\left(1 + \\frac{2k}{n}\\right)\\frac{2}{n}$ exactly.",
        type: "auto",
        mode: "number",
        answer: "3*ln(3) - 2",
        exactRequired: true,
        placeholder: "Exact value in terms of ln",
        solution: "Taking $\\mathrm{f}(x) = \\ln x$ in part (a):<br>$$\\lim_{n \\text{ → ∞}} \\sum_{k=1}^{n} \\ln\\left(1 + \\frac{2k}{n}\\right)\\frac{2}{n} = \\int_1^3 \\ln x\\,\\mathrm{d}x$$<br>Integrating by parts with $u = \\ln x$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = 1$:<br>$$\\int_1^3 \\ln x\\,\\mathrm{d}x = \\left[x\\ln x\\right]_1^3 - \\int_1^3 x \\cdot \\frac{1}{x}\\,\\mathrm{d}x = \\left[x\\ln x\\right]_1^3 - \\left[x\\right]_1^3$$<br>$$= (3\\ln 3 - 1\\ln 1) - (3 - 1) = 3\\ln 3 - 2$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q4",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Differentiation"],
    stem: "The equation of a curve $C$ is $x^3 + xy + 2y^3 = k$, where $k$ is a constant.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 3], y: [1, -1, 2] },
        answer: "(-y - 3*x^2)/(x + 6*y^2)",
        placeholder: "Expression in terms of x and y",
        solution: "Differentiating implicitly with respect to $x$:<br>$$3x^2 + x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y + 6y^2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$$<br>$$(x + 6y^2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -y - 3x^2$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{-y - 3x^2}{x + 6y^2}$$"
      },
      {
        label: "(b)",
        marks: 6,
        prompt: "It is given that $C$ has a tangent which is parallel to the $y$-axis.<br>Show that the $y$-coordinate of the points of contact of the tangent with $C$ must satisfy $216y^6 + 4y^3 + k = 0$. Hence show that $k \\le \\frac{1}{54}$.",
        type: "self",
        solution: "If a tangent is parallel to the $y$-axis, $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ is undefined, so the denominator is zero:<br>$$x + 6y^2 = 0 \\implies x = -6y^2$$<br>Substituting $x = -6y^2$ into the equation of $C$:<br>$$(-6y^2)^3 + (-6y^2)y + 2y^3 = k$$<br>$$-216y^6 - 6y^3 + 2y^3 = k$$<br>$$216y^6 + 4y^3 + k = 0 \\quad (\\text{shown})$$<br><br>Treating this as a quadratic equation in $y^3$: $216(y^3)^2 + 4(y^3) + k = 0$.<br>For real values of $y$ (and hence real $y^3$) to exist, the discriminant must be non-negative:<br>$$4^2 - 4(216)(k) \\ge 0$$<br>$$16 - 864k \\ge 0 \\implies k \\le \\frac{16}{864} = \\frac{1}{54} \\quad (\\text{shown})$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the possible values of $k$ in the case where the line $x = -6$ is a tangent to $C$.",
        type: "auto",
        mode: "number-list",
        answer: [-220, -212],
        exactRequired: true,
        placeholder: "Separate values with a comma",
        solution: "Since $x = -6$ is parallel to the $y$-axis, at the point of contact $x = -6y^2$:<br>$$-6y^2 = -6 \\implies y^2 = 1 \\implies y = \\pm 1$$<br>• When $y = 1$: $k = -216(1)^6 - 4(1)^3 = -220$.<br>• When $y = -1$: $k = -216(-1)^6 - 4(-1)^3 = -216 + 4 = -212$.<br>Hence $k = -220$ or $k = -212$."
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q5",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Vectors"],
    stem: "Two planes $p_1$ and $p_2$ have respective cartesian equations given by $$4x + y + z = 8 \\quad \\text{and} \\quad 4x + 3y - z = 0.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the sine of the acute angle between $p_1$ and $p_2$ in the form $\\frac{m}{\\sqrt{n}}$ where $m$ and $n$ are positive integers to be determined.",
        type: "auto",
        mode: "number",
        answer: "2/sqrt(13)",
        exactRequired: true,
        placeholder: "Exact surd expression",
        solution: "Let $\\theta$ be the acute angle between $p_1$ and $p_2$. The normal vectors are $\\mathbf{n}_1 = \\begin{pmatrix} 4 \\\\ 1 \\\\ 1 \\end{pmatrix}$ and $\\mathbf{n}_2 = \\begin{pmatrix} 4 \\\\ 3 \\\\ -1 \\end{pmatrix}$.<br>$$\\cos\\theta = \\frac{|\\mathbf{n}_1 \\cdot \\mathbf{n}_2|}{|\\mathbf{n}_1||\\mathbf{n}_2|} = \\frac{|16 + 3 - 1|}{\\sqrt{16 + 1 + 1}\\sqrt{16 + 9 + 1}} = \\frac{18}{\\sqrt{18}\\sqrt{26}} = \\frac{\\sqrt{18}}{\\sqrt{26}} = \\frac{3}{\\sqrt{13}}$$<br>Since $\\theta$ is acute:<br>$$\\sin\\theta = \\sqrt{1 - \\cos^2\\theta} = \\sqrt{1 - \\frac{9}{13}} = \\frac{2}{\\sqrt{13}}$$<br>(so $m = 2$, $n = 13$)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Verify that the point $A$ with coordinates $(1, 0, 4)$ lies on $p_1$ and $p_2$. Hence, without the use of a calculator, find the vector equation of the line $l$ formed by the intersection of $p_1$ and $p_2$.",
        type: "self",
        solution: "Substituting $A(1, 0, 4)$ into $p_1$: $4(1) + 0 + 4 = 8$.<br>Substituting $A(1, 0, 4)$ into $p_2$: $4(1) + 3(0) - 4 = 0$.<br>Hence $A(1, 0, 4)$ lies on both $p_1$ and $p_2$ (and thus on $l$).<br><br>The direction vector of $l$ is parallel to $\\mathbf{n}_1 \\times \\mathbf{n}_2$:<br>$$\\begin{pmatrix} 4 \\\\ 1 \\\\ 1 \\end{pmatrix} \\times \\begin{pmatrix} 4 \\\\ 3 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} -1 - 3 \\\\ 4 - (-4) \\\\ 12 - 4 \\end{pmatrix} = \\begin{pmatrix} -4 \\\\ 8 \\\\ 8 \\end{pmatrix} = 4\\begin{pmatrix} -1 \\\\ 2 \\\\ 2 \\end{pmatrix}$$<br>Therefore, the vector equation of $l$ is:<br>$$\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 4 \\end{pmatrix} + \\lambda\\begin{pmatrix} -1 \\\\ 2 \\\\ 2 \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "It is given that $B$ is a point on $p_1$ with coordinates $(1, 3, 1)$. Show that $AB$ is perpendicular to $l$ and hence use (a) to deduce exactly the shortest distance from $B$ to $p_2$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 120" width="220" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Plane p2 base line -->
  <line x1="55" y1="95" x2="210" y2="95" stroke="#4a8fe7" stroke-width="1.6"/>
  <!-- AB segment on p1 -->
  <line x1="65" y1="95" x2="155" y2="25" stroke="#4a8fe7" stroke-width="1.6"/>
  <!-- Perpendicular from B to p2 -->
  <line x1="155" y1="25" x2="155" y2="95" stroke="#cf5652" stroke-width="1.4" stroke-dasharray="4,3"/>
  <!-- Right angle marker -->
  <polyline points="147,95 147,87 155,87" fill="none" stroke-width="1"/>
  <!-- Angle arc -->
  <path d="M 88,95 A 23,23 0 0,0 83,81" fill="none" stroke-width="1"/>
  <text x="90" y="90" stroke="none" font-style="italic">θ</text>
  <!-- Labels -->
  <text x="12" y="99" stroke="none">A(1, 0, 4)</text>
  <text x="150" y="18" stroke="none">B(1, 3, 1)</text>
  <text x="195" y="89" stroke="none" fill="#4a8fe7" font-style="italic">p₂</text>
  <text x="160" y="63" stroke="none" fill="#cf5652" font-style="italic">d</text>
</svg>`,
        solution: "$$\\mathbf{AB} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 0 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 3 \\\\ -3 \\end{pmatrix}$$<br>Taking the dot product with the direction vector of $l$:<br>$$\\mathbf{AB} \\cdot \\begin{pmatrix} -1 \\\\ 2 \\\\ 2 \\end{pmatrix} = 0(-1) + 3(2) + (-3)(2) = 0$$<br>Hence $AB$ is perpendicular to $l$ (shown).<br><br>Since $A$ lies on $l$ and $AB \\perp l$ with $B$ on $p_1$, the acute angle between $AB$ and $p_2$ is the acute angle $\\theta$ between $p_1$ and $p_2$.<br>$$AB = \\sqrt{0^2 + 3^2 + (-3)^2} = 3\\sqrt{2}$$<br>Shortest distance from $B$ to $p_2$:<br>$$d = AB\\sin\\theta = 3\\sqrt{2}\\left(\\frac{2}{\\sqrt{13}}\\right) = \\frac{6\\sqrt{2}}{\\sqrt{13}} = \\frac{12}{\\sqrt{26}} = \\frac{6\\sqrt{26}}{13}$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find the cartesian equation of the plane $p_3$ which contains $B$ and is perpendicular to both $p_1$ and $p_2$.",
        type: "self",
        solution: "Since $p_3$ is perpendicular to both $p_1$ and $p_2$, its normal vector is parallel to $\\mathbf{n}_1 \\times \\mathbf{n}_2$, i.e. $\\mathbf{n}_3 = \\begin{pmatrix} -1 \\\\ 2 \\\\ 2 \\end{pmatrix}$ (from part (b)).<br>Since $p_3$ contains $B(1, 3, 1)$:<br>$$\\mathbf{r} \\cdot \\begin{pmatrix} -1 \\\\ 2 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 1 \\end{pmatrix} \\cdot \\begin{pmatrix} -1 \\\\ 2 \\\\ 2 \\end{pmatrix} = -1 + 6 + 2 = 7$$<br>Hence the cartesian equation of $p_3$ is $-x + 2y + 2z = 7$ (or $x - 2y - 2z = -7$)."
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q6",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability"],
    stem: "Two fair six-sided dice are thrown. Events $A$, $B$ and $C$ are defined as follows.<br>$A$: sum of the two scores is odd<br>$B$: at least one of the two scores is greater than $4$<br>$C$: the two scores are equal",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Find, giving your reasons clearly, which pair of the events are mutually exclusive.",
        type: "self",
        solution: "If the two scores are equal (event $C$), say both are $x$, then their sum is $2x$, which is always even (never odd).<br>Thus $A$ and $C$ cannot occur simultaneously, i.e. $\\mathrm{P}(A \\cap C) = 0$.<br>Hence <strong>$A$ and $C$</strong> are mutually exclusive."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Find, giving your reasons clearly, which pair of the events are independent.",
        type: "self",
        solution: "There are $36$ equally likely outcomes.<br>• $\\mathrm{P}(A) = \\frac{18}{36} = \\frac{1}{2}$ (one odd and one even).<br>• $\\mathrm{P}(B) = 1 - \\left(\\frac{4}{6}\\right)^2 = 1 - \\frac{4}{9} = \\frac{5}{9}$ ($20$ outcomes out of $36$).<br>• $\\mathrm{P}(A \\cap B)$: outcomes where at least one die is $5$ or $6$ and the sum is odd:<br>&nbsp;&nbsp;— $(5, 2), (5, 4), (5, 6), (2, 5), (4, 5), (6, 5)$ ($6$ outcomes)<br>&nbsp;&nbsp;— $(6, 1), (6, 3), (1, 6), (3, 6)$ ($4$ outcomes)<br>&nbsp;&nbsp;Total $= 10$ outcomes, so $\\mathrm{P}(A \\cap B) = \\frac{10}{36} = \\frac{5}{18}$.<br><br>Since $\\mathrm{P}(A)\\mathrm{P}(B) = \\frac{1}{2} \\times \\frac{5}{9} = \\frac{5}{18} = \\mathrm{P}(A \\cap B)$, events <strong>$A$ and $B$</strong> are independent."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find $\\mathrm{P}(C \\mid B)$.",
        type: "auto",
        mode: "number",
        answer: "1/10",
        placeholder: "Exact fraction or decimal",
        solution: "$C \\cap B$ consists of the outcomes $(5, 5)$ and $(6, 6)$, so $\\mathrm{P}(C \\cap B) = \\frac{2}{36}$.<br>$$\\mathrm{P}(C \\mid B) = \\frac{\\mathrm{P}(C \\cap B)}{\\mathrm{P}(B)} = \\frac{2/36}{5/9} = \\frac{2}{20} = \\frac{1}{10}$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q7",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Discrete Random Variables", "Binomial Distribution"],
    stem: "The random variable $S$ is the number of successes in $5$ independent trials of an experiment in which the probability of success in any trial is $\\frac{1}{3}$. The random variable $D$ is the difference between the number of successes and the number of failures in $5$ such trials.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State the values that $D$ can take.",
        type: "auto",
        mode: "number-list",
        answer: [1, 3, 5],
        exactRequired: true,
        placeholder: "Separate values with commas",
        solution: "The number of successes $S$ can be $0, 1, 2, 3, 4, 5$, and the corresponding number of failures $5 - S$ is $5, 4, 3, 2, 1, 0$.<br>Thus $D = |S - (5 - S)| = |2S - 5|$ takes values $1$, $3$, or $5$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Show that $\\mathrm{P}(D = 1) = \\frac{40}{81}$.",
        type: "self",
        solution: "We have $S \\sim \\mathrm{B}\\left(5, \\frac{1}{3}\\right)$.<br>$D = 1$ occurs when $S = 2$ or $S = 3$:<br>$$\\mathrm{P}(D = 1) = \\mathrm{P}(S = 2) + \\mathrm{P}(S = 3) = {}^5\\mathrm{C}_2\\left(\\frac{1}{3}\\right)^2\\left(\\frac{2}{3}\\right)^3 + {}^5\\mathrm{C}_3\\left(\\frac{1}{3}\\right)^3\\left(\\frac{2}{3}\\right)^2$$<br>$$= \\frac{80}{243} + \\frac{40}{243} = \\frac{120}{243} = \\frac{40}{81} \\quad (\\text{shown})$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "By finding the probability distribution of $D$, find the exact value of $\\mathrm{E}(D^2)$.",
        type: "auto",
        mode: "number",
        answer: "65/9",
        exactRequired: true,
        placeholder: "Exact fraction",
        solution: "• $\\mathrm{P}(D = 1) = \\frac{40}{81}$<br>• $\\mathrm{P}(D = 3) = \\mathrm{P}(S = 1) + \\mathrm{P}(S = 4) = 5\\left(\\frac{1}{3}\\right)\\left(\\frac{2}{3}\\right)^4 + 5\\left(\\frac{1}{3}\\right)^4\\left(\\frac{2}{3}\\right) = \\frac{80 + 10}{243} = \\frac{90}{243} = \\frac{10}{27}$<br>• $\\mathrm{P}(D = 5) = \\mathrm{P}(S = 0) + \\mathrm{P}(S = 5) = \\left(\\frac{2}{3}\\right)^5 + \\left(\\frac{1}{3}\\right)^5 = \\frac{32 + 1}{243} = \\frac{33}{243} = \\frac{11}{81}$<br><div class='q-table-wrap'><table class='q-table'><tr><th>$d$</th><td>$1$</td><td>$3$</td><td>$5$</td></tr><tr><th>$\\mathrm{P}(D = d)$</th><td>$\\frac{40}{81}$</td><td>$\\frac{10}{27}$</td><td>$\\frac{11}{81}$</td></tr></table></div><br>$$\\mathrm{E}(D^2) = 1^2\\left(\\frac{40}{81}\\right) + 3^2\\left(\\frac{10}{27}\\right) + 5^2\\left(\\frac{11}{81}\\right) = \\frac{40 + 270 + 275}{81} = \\frac{585}{81} = \\frac{65}{9}$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find the exact values of $\\mathrm{E}(S)$ and $\\mathrm{E}(S^2)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "E(S) =", answer: "5/3", exactRequired: true, placeholder: "Exact fraction" },
          { label: "E(S²) =", answer: "35/9", exactRequired: true, placeholder: "Exact fraction" }
        ],
        solution: "Since $S \\sim \\mathrm{B}\\left(5, \\frac{1}{3}\\right)$:<br>$$\\mathrm{E}(S) = 5 \\times \\frac{1}{3} = \\frac{5}{3}, \\quad \\mathrm{Var}(S) = 5 \\times \\frac{1}{3} \\times \\frac{2}{3} = \\frac{10}{9}$$<br>$$\\mathrm{E}(S^2) = \\mathrm{Var}(S) + [\\mathrm{E}(S)]^2 = \\frac{10}{9} + \\left(\\frac{5}{3}\\right)^2 = \\frac{10 + 25}{9} = \\frac{35}{9}$$"
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Hence, by showing that $D^2 = 4S^2 - 20S + 25$, verify the correctness of the value of $\\mathrm{E}(D^2)$ found in part (c).",
        type: "self",
        solution: "$$D^2 = |S - (5 - S)|^2 = (2S - 5)^2 = 4S^2 - 20S + 25 \\quad (\\text{shown})$$<br>Taking expectations:<br>$$\\mathrm{E}(D^2) = 4\\mathrm{E}(S^2) - 20\\mathrm{E}(S) + 25 = 4\\left(\\frac{35}{9}\\right) - 20\\left(\\frac{5}{3}\\right) + 25 = \\frac{140 - 300 + 225}{9} = \\frac{65}{9}$$<br>This matches the value found in part (c) (verified)."
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q8",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "Helen is a conservationist who monitors the health of fish in a river. She is investigating whether a new water-treatment plant has affected the mass of adult trout in the river. Previously, the mean mass of adult trout in the river has been $w$ kg. Helen carries out a test, at the $10\\%$ level of significance to find out whether there has been a change in the mean mass of adult trout in the river.<br><br>Helen catches $45$ adult trout and measures the mass, $X$, kilograms, of each fish. Her summarised data are as follows.<br>$$n = 45, \\quad \\sum x = 80.1, \\quad \\sum (x - \\bar{x})^2 = 24.29$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Calculate unbiased estimates of the population mean and variance of the mass of adult trout.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "1.78", placeholder: "Exact or 3 s.f." },
          { label: "Variance =", answer: "24.29/44", placeholder: "Exact or 3 s.f." }
        ],
        solution: "Unbiased estimate of population mean:<br>$$\\bar{x} = \\frac{\\sum x}{n} = \\frac{80.1}{45} = 1.78$$<br>Unbiased estimate of population variance:<br>$$s^2 = \\frac{1}{n - 1}\\sum (x - \\bar{x})^2 = \\frac{24.29}{44} = 0.55205 \\approx 0.552 \\quad (3\\text{ s.f.})$$"
      },
      {
        label: "(b)",
        marks: 6,
        prompt: "Use an algebraic method to calculate the set of values of $w$ for which there is insufficient evidence to conclude that there has been a change in the mean mass of adult trout in the river. You should state your hypotheses and define any symbols you use.",
        type: "self",
        solution: "Let $\\mu$ be the population mean mass of adult trout in the river (in kg).<br>Test $\\mathrm{H}_0 : \\mu = w$ against $\\mathrm{H}_1 : \\mu \\ne w$ at the $10\\%$ level of significance (2-tailed).<br><br>Under $\\mathrm{H}_0$, since $n = 45$ is large, by the Central Limit Theorem:<br>$$\\bar{X} \\sim \\mathrm{N}\\left(w, \\frac{s^2}{45}\\right) \\text{ approximately}, \\quad Z = \\frac{\\bar{X} - w}{s / \\sqrt{45}} \\sim \\mathrm{N}(0, 1) \\text{ approximately}$$<br>Critical values at $10\\%$ significance level (2-tailed): $\\pm 1.64485$.<br>For insufficient evidence to reject $\\mathrm{H}_0$:<br>$$-1.64485 < \\frac{1.78 - w}{\\sqrt{0.552045 / 45}} < 1.64485$$<br>$$-0.18218 < 1.78 - w < 0.18218$$<br>$$1.5978 < w < 1.9622$$<br>Hence the required set of values is $\\{w \\in \\mathbb{R} : 1.60 < w < 1.96\\}$ (to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Explain why there is no need for Helen to know anything about the population distribution of the mass of adult trout.",
        type: "self",
        solution: "Since the sample size $n = 45$ is large, by the Central Limit Theorem, the distribution of the sample mean $\\bar{X}$ can be approximated by a normal distribution regardless of the underlying population distribution of $X$."
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q9",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "A small ceramic workshop produces $100$ plates each working day. Some of the plates turn out to be faulty.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State, in the context of the question, two assumptions needed for the number of faulty plates made in a day to be well modelled by a binomial distribution.",
        type: "self",
        solution: "1. The probability that any plate produced is faulty is constant for all plates.<br>2. Whether a plate is faulty is independent of whether any other plate is faulty."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Assume now that the number of faulty plates produced each working day has the distribution $\\mathrm{B}(100, p)$.<br>Show that the probability that exactly $3$ faulty plates are produced on a randomly chosen working day is $161700p^3(1 - p)^{97}$.",
        type: "self",
        solution: "Let $X \\sim \\mathrm{B}(100, p)$ be the number of faulty plates out of $100$.<br>$$\\mathrm{P}(X = 3) = {}^{100}\\mathrm{C}_3\\, p^3 (1 - p)^{100 - 3} = 161700p^3(1 - p)^{97} \\quad (\\text{shown})$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Given that the most likely number of faulty plates produced on a working day is $3$, find the possible range of values of $p$, leaving your answer in exact form.",
        type: "self",
        solution: "Since $X = 3$ is the mode, $\\mathrm{P}(X = 3) > \\mathrm{P}(X = 2)$ and $\\mathrm{P}(X = 3) > \\mathrm{P}(X = 4)$ (with $0 < p < 1$).<br><br>From $\\mathrm{P}(X = 3) > \\mathrm{P}(X = 2)$:<br>$$161700p^3(1 - p)^{97} > 4950p^2(1 - p)^{98}$$<br>$$\\frac{98}{3}p > 1 - p \\implies \\frac{101}{3}p > 1 \\implies p > \\frac{3}{101}$$<br><br>From $\\mathrm{P}(X = 3) > \\mathrm{P}(X = 4)$:<br>$$161700p^3(1 - p)^{97} > 3921225p^4(1 - p)^{96}$$<br>$$1 - p > \\frac{97}{4}p \\implies 1 > \\frac{101}{4}p \\implies p < \\frac{4}{101}$$<br><br>Hence $\\frac{3}{101} < p < \\frac{4}{101}$."
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "The workshop also produces bowls on each working day. The number of faulty bowls also follows a binomial distribution. The probability that a bowl is faulty is $q$. Faults on plates are independent of faults on bowls. The plates and bowls are sold in sets of $2$ randomly chosen bowls and $2$ randomly chosen plates. In the case where $p = 0.01$, the probability that a set contains at most $1$ faulty item is $0.88$.<br>Write down an equation satisfied by $q$. Hence find the value of $q$.",
        type: "auto",
        mode: "number",
        answer: "1/3",
        placeholder: "Exact or 3 s.f.",
        solution: "$\\mathrm{P}(\\text{at most 1 faulty item}) = \\mathrm{P}(\\text{0 faulty}) + \\mathrm{P}(\\text{1 faulty plate, 0 faulty bowls}) + \\mathrm{P}(\\text{0 faulty plates, 1 faulty bowl}) = 0.88$<br>$$(0.99)^2(1 - q)^2 + 2(0.99)(0.01)(1 - q)^2 + (0.99)^2 \\cdot 2q(1 - q) = 0.88$$<br>$$0.9999(1 - q)^2 + 1.9602q(1 - q) = 0.88$$<br>Simplifying: $-0.9603q^2 - 0.0396q + 0.1199 = 0$.<br>Solving using GC (since $0 < q < 1$):<br>$$q = \\frac{1}{3} = 0.33333\\dots \\approx 0.333 \\quad (3\\text{ s.f.})$$"
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q10",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "The director of an art gallery wishes to find out the relationship between the time spent, $t$ minutes, in the art gallery and the age, $a$ (in years), of the visitors. Ten visitors were randomly selected and the data are summarised as follows:<div class='q-table-wrap'><table class='q-table'><tr><th>$t$ (minutes)</th><td>$20$</td><td>$70$</td><td>$56$</td><td>$75$</td><td>$k$</td><td>$42$</td><td>$50$</td><td>$52$</td><td>$60$</td><td>$60$</td></tr><tr><th>$a$ (years)</th><td>$21$</td><td>$56$</td><td>$42$</td><td>$77$</td><td>$22$</td><td>$34$</td><td>$40$</td><td>$41$</td><td>$48$</td><td>$47$</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "A linear model is proposed for the relationship between $t$ and $a$. Given that the least squares regression line of $t$ on $a$ is $t = 0.8957914a + 14.16013$, show that $k = 40$.",
        type: "self",
        solution: "We have $\\bar{a} = \\frac{21 + 56 + 42 + 77 + 22 + 34 + 40 + 41 + 48 + 47}{10} = \\frac{428}{10} = 42.8$ and $\\bar{t} = \\frac{485 + k}{10}$.<br>Since $(\\bar{a}, \\bar{t})$ lies on the least squares regression line of $t$ on $a$:<br>$$\\frac{485 + k}{10} = 0.8957914(42.8) + 14.16013 = 52.50000\\dots$$<br>$$485 + k = 525 \\implies k = 40 \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Sketch a scatter diagram of $t$ against $a$ for the data given in the table and draw the line given in (a) on the same diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 220" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: O at (45, 195), x-scale 3.0 px/yr, y-scale 1.9 px/min -->
  <line x1="35" y1="195" x2="300" y2="195" stroke-width="1.2"/>
  <polyline points="294,192 300,195 294,198" fill="none" stroke-width="1.2"/>
  <line x1="45" y1="205" x2="45" y2="18" stroke-width="1.2"/>
  <polyline points="42,24 45,18 48,24" fill="none" stroke-width="1.2"/>
  <text x="304" y="199" stroke="none" font-style="italic">a</text>
  <text x="33" y="20" stroke="none" font-style="italic">t</text>
  <text x="32" y="208" stroke="none" font-style="italic">O</text>
  <!-- Axis ticks for min/max -->
  <line x1="108" y1="192" x2="108" y2="198" stroke-width="1"/>
  <text x="101" y="211" stroke="none">21</text>
  <line x1="276" y1="192" x2="276" y2="198" stroke-width="1"/>
  <text x="269" y="211" stroke="none">77</text>
  <line x1="42" y1="157" x2="48" y2="157" stroke-width="1"/>
  <text x="23" y="161" stroke="none">20</text>
  <line x1="42" y1="52.5" x2="48" y2="52.5" stroke-width="1"/>
  <text x="23" y="56" stroke="none">75</text>
  <!-- Regression line t = 0.8957914a + 14.16013 from a=21 (108,132.4) to a=77 (276,37.0) -->
  <line x1="95" y1="139.8" x2="285" y2="31.9" stroke="#cf5652" stroke-width="1.5"/>
  <!-- 10 Data points -->
  <circle cx="108" cy="157" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="111" cy="119" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="147" cy="115.2" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="165" cy="100" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="168" cy="96.2" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="171" cy="88.6" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="186" cy="81" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="189" cy="81" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="213" cy="62" r="2.8" fill="#4ca885" stroke="none"/>
  <circle cx="276" cy="52.5" r="2.8" fill="#4ca885" stroke="none"/>
  <text x="195" y="25" stroke="none" fill="#cf5652" font-size="10">t = 0.896a + 14.2</text>
</svg>`,
        solution: "Plot the $10$ data points $(a, t)$ with $a \\in [21, 77]$ on the horizontal axis and $t \\in [20, 75]$ on the vertical axis, together with the regression line $t = 0.8957914a + 14.16013$ passing through $(\\bar{a}, \\bar{t}) = (42.8, 52.5)$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Use the least squares regression line of $t$ on $a$ in (a) to estimate the time spent in the art gallery by a $60$-year old visitor.",
        type: "auto",
        mode: "number",
        answers: ["67.907614", "68"],
        placeholder: "Correct to 3 s.f.",
        solution: "When $a = 60$:<br>$$t = 0.8957914(60) + 14.16013 = 67.9076\\dots \\approx 67.9 \\text{ minutes (or } 68 \\text{ minutes)}$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "A regression line $t = ma + c$ where $m$ and $c$ are constants is used to model the above set of data. The residual for a data point $(a_i, t_i)$ where $i = 1, 2, \\dots, 10$ which is plotted on a scatter diagram is defined to be the number $t_i - (ma_i + c)$.<br>The sum of the squares of these residuals, denoted by $S$, is given by $$S = \\sum_{i=1}^{10} \\left[t_i - (ma_i + c)\\right]^2.$$<br>Find an inequality that is satisfied by $S$.",
        type: "self",
        solution: "Using GC, the sum of squares of residuals for the least squares regression line of $t$ on $a$ is $352.1937\\dots$.<br>Since the least squares regression line minimises the sum of squares of residuals among all straight lines $t = ma + c$:<br>$$S \\ge 352.19 \\quad (\\text{or } S \\ge 352 \\text{ to 3 s.f.; marking guide also notes } S \\ge 353 \\text{ as a safe integer bound})$$"
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "The director wishes to explore the following two models which represent the relationship between $t$ and $a$, where $p$ and $q$ are constants.<br>(A) $t = p + \\frac{q}{a}$, &nbsp;&nbsp;&nbsp;&nbsp; (B) $t = p\\mathrm{e}^{qa}$.<br>For each model, find the product moment correlation coefficient and hence explain with a reason which model is more appropriate.",
        type: "self",
        solution: "• <strong>Model (A):</strong> $t = p + q\\left(\\frac{1}{a}\\right)$, linearising $t$ against $\\frac{1}{a}$ gives $r_A = -0.929$ (3 s.f.).<br>• <strong>Model (B):</strong> $\\ln t = qa + \\ln p$, linearising $\\ln t$ against $a$ gives $r_B = 0.833$ (3 s.f.).<br><br>Since $|r_A| = 0.929 > |r_B| = 0.833$, $|r_A|$ is closer to $1$, so <strong>Model (A)</strong> is more appropriate."
      }
    ]
  },
  {
    id: "NYJC-2025-P2-Q11",
    year: 2025,
    school: "NYJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "In this question you should state the parameters of any normal distributions you use.<br><br>A machine grades apples according to their mass. Apples with mass exceeding $120\\text{ g}$ are labelled as \"large\" and apples with mass less than $80\\text{ g}$ are labelled as \"small\". A large batch of apples is graded and it is found that $15\\%$ are \"large\" and $10\\%$ are \"small\". It is known that the masses of the apples are normally distributed.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the mean mass of a randomly chosen apple from the batch and show that the standard deviation is $17.3\\text{ g}$, correct to $3$ significant figures.",
        type: "self",
        solution: "Let $X$ be the mass (in g) of a randomly chosen apple, where $X \\sim \\mathrm{N}(\\mu, \\sigma^2)$.<br>• $\\mathrm{P}(X > 120) = 0.15 \\implies \\frac{120 - \\mu}{\\sigma} = 1.03643 \\implies 120 - \\mu = 1.03643\\sigma$ &nbsp; --- (1)<br>• $\\mathrm{P}(X < 80) = 0.10 \\implies \\frac{80 - \\mu}{\\sigma} = -1.28155 \\implies 80 - \\mu = -1.28155\\sigma$ &nbsp; --- (2)<br><br>Subtracting (2) from (1):<br>$$40 = 2.31798\\sigma \\implies \\sigma = 17.256\\dots \\approx 17.3\\text{ g} \\quad (3\\text{ s.f., shown})$$<br>Substituting back into (1):<br>$$\\mu = 120 - 1.03643(17.256) = 102.115\\dots \\approx 102\\text{ g} \\quad (3\\text{ s.f.})$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Two apples are chosen at random. Find the probability that the difference in their masses is at least $20\\text{ g}$.",
        type: "auto",
        mode: "number",
        answers: ["0.41247", "0.41248", "0.41366"],
        placeholder: "Correct to 3 s.f.",
        solution: "Let $X_1, X_2$ be the masses of the two apples.<br>$$X_1 - X_2 \\sim \\mathrm{N}(0,\\; 17.256^2 + 17.256^2) = \\mathrm{N}(0,\\; 595.54)$$<br>$$\\mathrm{P}(|X_1 - X_2| \\ge 20) = 2\\mathrm{P}(X_1 - X_2 \\ge 20) = 0.41247\\dots \\approx 0.412 \\quad (3\\text{ s.f.})$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The apples are labelled and packed into boxes. Each box contains $20$ apples.<br>Apples with mass between $110\\text{ g}$ and $140\\text{ g}$ are labelled as \"premium\". Find the expected number of \"premium\" apples in a randomly chosen box.",
        type: "auto",
        mode: "number",
        answers: ["6.1976", "6.1958"],
        placeholder: "Correct to 3 s.f.",
        solution: "With $X \\sim \\mathrm{N}(102.12,\\; 17.256^2)$:<br>$$\\mathrm{P}(110 < X < 140) = 0.30988$$<br>Expected number of \"premium\" apples in a box of $20$:<br>$$20 \\times 0.30988 = 6.1976\\dots \\approx 6.20 \\quad (3\\text{ s.f.})$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Find the probability that the mean mass of apples in a randomly chosen box is at most $105\\text{ g}$.",
        type: "auto",
        mode: "number",
        answers: ["0.77229", "0.77268"],
        placeholder: "Correct to 3 s.f.",
        solution: "Let $\\bar{X} = \\frac{X_1 + X_2 + \\dots + X_{20}}{20}$ be the mean mass of $20$ apples in a box.<br>$$\\bar{X} \\sim \\mathrm{N}\\left(102.12,\\; \\frac{17.256^2}{20}\\right) = \\mathrm{N}(102.12,\\; 14.888)$$<br>$$\\mathrm{P}(\\bar{X} \\le 105) = 0.77229\\dots \\approx 0.772 \\quad (3\\text{ s.f.})$$"
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "The boxes of apples are sold by weight at a price of SGD 2.90 per kilogram. Find the probability that the total price of $3$ randomly chosen boxes of apples exceeds SGD 18.",
        type: "auto",
        mode: "number",
        answers: ["0.27560", "0.27475"],
        placeholder: "Correct to 3 s.f.",
        solution: "Let $W = X_1 + X_2 + \\dots + X_{60}$ be the total mass (in grams) of $3$ boxes ($60$ apples), and $C = 0.0029W$ be the total price in SGD.<br>$$C \\sim \\mathrm{N}\\left(0.0029 \\times 60 \\times 102.12,\\; 0.0029^2 \\times 60 \\times 17.256^2\\right) = \\mathrm{N}(17.769,\\; 0.15025)$$<br>$$\\mathrm{P}(C > 18) = 0.27560\\dots \\approx 0.276 \\quad (3\\text{ s.f.})$$"
      }
    ]
  }
]);
