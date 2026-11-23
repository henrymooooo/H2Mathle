window.registerQuestions([
  {
    id: "ACJC-2025-P2-Q1",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Vectors"],
    stem: "It is given that $OA = 3\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}$ and $OB = 5\\mathbf{i} - 4\\mathbf{j} + 3\\mathbf{k}$.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Find the position vector of a point $R$ on line $OB$ such that $AR$ is perpendicular to $OB$. Hence find the position vector of the point $A'$, the reflection of the point $A$ in the line $OB$.",
        type: "self",
        solution: "Since $R$ lies on line $OB$, $OR = \\lambda\\begin{pmatrix} 5 \\\\ -4 \\\\ 3 \\end{pmatrix}$ for some $\\lambda \\in \\mathbb{R}$.<br>$$AR = OR - OA = \\begin{pmatrix} 5\\lambda - 3 \\\\ -4\\lambda - 1 \\\\ 3\\lambda - 3 \\end{pmatrix}$$<br>Since $AR$ is perpendicular to $OB$, $AR \\cdot OB = 0$:<br>$$\\begin{pmatrix} 5\\lambda - 3 \\\\ -4\\lambda - 1 \\\\ 3\\lambda - 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 5 \\\\ -4 \\\\ 3 \\end{pmatrix} = 0$$<br>$$25\\lambda - 15 + 16\\lambda + 4 + 9\\lambda - 9 = 0 \\implies 50\\lambda = 20 \\implies \\lambda = \\frac{2}{5}$$<br>Hence,<br>$$OR = \\frac{2}{5}\\begin{pmatrix} 5 \\\\ -4 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -\\frac{8}{5} \\\\ \\frac{6}{5} \\end{pmatrix}$$<br>Since $R$ is the midpoint of $AA'$, $OA' = 2OR - OA$:<br>$$OA' = \\frac{4}{5}\\begin{pmatrix} 5 \\\\ -4 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 3 \\\\ 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -\\frac{21}{5} \\\\ -\\frac{3}{5} \\end{pmatrix} = \\frac{1}{5}\\begin{pmatrix} 5 \\\\ -21 \\\\ -3 \\end{pmatrix}$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q2",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Maclaurin Series"],
    stem: "It is given that $\\mathrm{f}(x) = \\frac{1}{\\sqrt{1 - 4x^2}}$ where $-\\frac{1}{2} < x < \\frac{1}{2}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Using standard series from the List of Formulae (MF27), find the Maclaurin's expansion of $\\mathrm{f}(x)$, up to and including the term in $x^6$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.1, 0.2, 0.3] },
        answer: "1 + 2*x^2 + 6*x^4 + 20*x^6",
        placeholder: "Polynomial in x up to x^6",
        solution: "$$\\mathrm{f}(x) = (1 - 4x^2)^{-\\frac{1}{2}}$$<br>$$= 1 + \\left(-\\frac{1}{2}\\right)(-4x^2) + \\frac{(-\\frac{1}{2})(-\\frac{3}{2})}{2!}(-4x^2)^2 + \\frac{(-\\frac{1}{2})(-\\frac{3}{2})(-\\frac{5}{2})}{3!}(-4x^2)^3 + \\dots$$<br>$$= 1 + 2x^2 + 6x^4 + 20x^6 + \\dots$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Hence find the first four non-zero terms of the Maclaurin series for $\\sin^{-1} 2x$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.1, 0.2, 0.3] },
        answer: "2*x + 4/3*x^3 + 12/5*x^5 + 40/7*x^7",
        placeholder: "Polynomial in x",
        solution: "Integrating both sides of the expansion in (a) with respect to $x$:<br>$$\\int \\frac{1}{\\sqrt{1 - 4x^2}} \\,\\mathrm{d}x = \\int \\left(1 + 2x^2 + 6x^4 + 20x^6 + \\dots\\right)\\mathrm{d}x$$<br>$$\\frac{1}{2}\\sin^{-1} 2x = x + \\frac{2}{3}x^3 + \\frac{6}{5}x^5 + \\frac{20}{7}x^7 + c$$<br>$$\\sin^{-1} 2x = 2x + \\frac{4}{3}x^3 + \\frac{12}{5}x^5 + \\frac{40}{7}x^7 + d$$<br>When $x = 0$, $\\sin^{-1}(0) = 0 \\implies d = 0$.<br>Hence, the first four non-zero terms are:<br>$$\\sin^{-1} 2x \\approx 2x + \\frac{4}{3}x^3 + \\frac{12}{5}x^5 + \\frac{40}{7}x^7$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q3",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "You may use the results $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ and $\\sum_{r=1}^{n} r^3 = \\frac{n^2(n+1)^2}{4}$.<br>Show that $\\sum_{r=1}^{n} r(r+1)^2 = \\frac{n(n+1)(n+2)(3n+5)}{12}$.",
        type: "self",
        solution: "$$\\sum_{r=1}^{n} r(r+1)^2 = \\sum_{r=1}^{n} (r^3 + 2r^2 + r)$$<br>$$= \\frac{n^2(n+1)^2}{4} + 2\\left(\\frac{n(n+1)(2n+1)}{6}\\right) + \\frac{n(n+1)}{2}$$<br>$$= \\frac{n(n+1)}{12}\\left[3n(n+1) + 4(2n+1) + 6\\right]$$<br>$$= \\frac{n(n+1)}{12}\\left(3n^2 + 11n + 10\\right) = \\frac{n(n+1)(n+2)(3n+5)}{12} \\quad (\\text{shown})$$"
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Hence find $\\sum_{r=5}^{n-1} (r+2)(r+3)^2$ in terms of $n$.",
        type: "auto",
        mode: "expr",
        vars: { n: [7, 8, 10] },
        answer: "(n+1)*(n+2)*(n+3)*(3*n+8)/12 - 644",
        placeholder: "Expression in terms of n",
        solution: "Let $k = r + 2$. When $r = 5$, $k = 7$; when $r = n - 1$, $k = n + 1$.<br>$$\\sum_{r=5}^{n-1} (r+2)(r+3)^2 = \\sum_{k=7}^{n+1} k(k+1)^2 = \\sum_{k=1}^{n+1} k(k+1)^2 - \\sum_{k=1}^{6} k(k+1)^2$$<br>Using the result from (a)(i):<br>$$= \\frac{(n+1)(n+2)(n+3)(3(n+1)+5)}{12} - \\frac{6(7)(8)(23)}{12}$$<br>$$= \\frac{(n+1)(n+2)(n+3)(3n+8)}{12} - 644$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The sequence $u_1, u_2, u_3, \\dots$ is defined by $u_1 = 2$, $u_{n+1} = \\frac{1}{1 - u_n}$, $n \\ge 1$. Find the values of $u_2$, $u_3$ and $u_4$. Hence find the value of $u_{2025}$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "u₂ =", answer: "-1", exactRequired: true, placeholder: "Exact value" },
          { label: "u₃ =", answer: "1/2", exactRequired: true, placeholder: "Exact value" },
          { label: "u₄ =", answer: "2", exactRequired: true, placeholder: "Exact value" },
          { label: "u₂₀₂₅ =", answer: "1/2", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "$$u_2 = \\frac{1}{1 - 2} = -1$$<br>$$u_3 = \\frac{1}{1 - (-1)} = \\frac{1}{2}$$<br>$$u_4 = \\frac{1}{1 - \\frac{1}{2}} = 2$$<br>Since $u_4 = u_1 = 2$, the sequence is periodic with period $3$.<br>Since $2025 = 3 \\times 675$ is a multiple of $3$, $u_{2025} = u_3 = \\frac{1}{2}$."
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q4",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto \\frac{1}{x^2 + 6x + 5}$, for $x \\ge -3$, $x \\ne -1$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find $\\mathrm{f}^{-1}(x)$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 4] },
        answer: "-3 + sqrt(1/x + 4)",
        placeholder: "Expression in terms of x",
        solution: "Let $y = \\frac{1}{x^2 + 6x + 5}$.<br>$$x^2 + 6x + 5 = \\frac{1}{y} \\implies (x + 3)^2 - 4 = \\frac{1}{y} \\implies (x + 3)^2 = \\frac{1}{y} + 4$$<br>$$x = -3 \\pm \\sqrt{\\frac{1}{y} + 4}$$<br>Since $x \\ge -3$, we take the positive square root:<br>$$x = -3 + \\sqrt{\\frac{1}{y} + 4}$$<br>Hence, $\\mathrm{f}^{-1}(x) = -3 + \\sqrt{\\frac{1}{x} + 4}$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find <strong>algebraically</strong> the range of $\\mathrm{f}$.",
        type: "self",
        solution: "Let $y = \\frac{1}{x^2 + 6x + 5}$, where $y \\ne 0$. Rearranging gives:<br>$$yx^2 + 6yx + (5y - 1) = 0$$<br>For $y \\in \\mathrm{R}_{\\mathrm{f}}$, this quadratic equation in $x$ must have real roots, so discriminant $\\ge 0$:<br>$$(6y)^2 - 4y(5y - 1) \\ge 0$$<br>$$36y^2 - 20y^2 + 4y \\ge 0 \\implies 16y^2 + 4y \\ge 0 \\implies 4y(4y + 1) \\ge 0$$<br>Since $y \\ne 0$, we get $y \\le -\\frac{1}{4}$ or $y > 0$.<br>(Notice also that as $x$ ranges over $[-3, \\text{∞})$ excluding $-1$, $x^2 + 6x + 5 = (x+3)^2 - 4$ takes all values in $[-4, \\text{∞})$ excluding $0$, confirming every such $y$ is attained for $x \\ge -3$.)<br>Hence $\\mathrm{R}_{\\mathrm{f}} = \\left(-\\text{∞}, -\\frac{1}{4}\\right] \\cup (0, \\text{∞})$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The function $\\mathrm{g}$ is defined by $\\mathrm{g}: x \\mapsto \\mathrm{e}^x$, for $x \\in \\mathbb{R}$. Find the exact range of $\\mathrm{gf}$.",
        type: "self",
        solution: "Applying $\\mathrm{g}(x) = \\mathrm{e}^x$ (which is strictly increasing) to $\\mathrm{R}_{\\mathrm{f}} = \\left(-\\text{∞}, -\\frac{1}{4}\\right] \\cup (0, \\text{∞})$:<br>- For $u \\in (-\\text{∞}, -\\frac{1}{4}]$, $\\mathrm{e}^u \\in \\left(0, \\mathrm{e}^{-\\frac{1}{4}}\\right]$.<br>- For $u \\in (0, \\text{∞})$, $\\mathrm{e}^u \\in (1, \\text{∞})$.<br>Hence, $\\mathrm{R}_{\\mathrm{gf}} = \\left(0, \\mathrm{e}^{-\\frac{1}{4}}\\right] \\cup (1, \\text{∞})$."
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q5",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Integration", "Differential Equations"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "By using the substitution $x = a\\tan\\theta$, show that $$\\int \\frac{1}{x\\sqrt{x^2 + a^2}} \\,\\mathrm{d}x = \\frac{1}{a}\\ln\\frac{x}{\\sqrt{x^2 + a^2} + a} + c,$$ where $x > 0$ and $a > 0$.",
        type: "self",
        solution: "Let $x = a\\tan\\theta$ with $0 < \\theta < \\frac{\\pi}{2}$. Then $\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = a\\sec^2\\theta$ and $\\sqrt{x^2 + a^2} = a\\sec\\theta$.<br>$$\\int \\frac{1}{x\\sqrt{x^2 + a^2}} \\,\\mathrm{d}x = \\int \\frac{1}{(a\\tan\\theta)(a\\sec\\theta)} \\cdot a\\sec^2\\theta \\,\\mathrm{d}\\theta = \\frac{1}{a}\\int \\frac{\\sec\\theta}{\\tan\\theta}\\,\\mathrm{d}\\theta = \\frac{1}{a}\\int \\cosec\\theta \\,\\mathrm{d}\\theta$$<br>$$= -\\frac{1}{a}\\ln|\\cosec\\theta + \\cot\\theta| + c$$<br>From $\\tan\\theta = \\frac{x}{a}$, we have $\\sin\\theta = \\frac{x}{\\sqrt{x^2 + a^2}}$, so $\\cosec\\theta = \\frac{\\sqrt{x^2 + a^2}}{x}$ and $\\cot\\theta = \\frac{a}{x}$.<br>$$= -\\frac{1}{a}\\ln\\left|\\frac{\\sqrt{x^2 + a^2} + a}{x}\\right| + c = \\frac{1}{a}\\ln\\left(\\frac{x}{\\sqrt{x^2 + a^2} + a}\\right) + c \\quad (\\text{since } x, a > 0, \\text{ shown})$$"
      },
      {
        label: "(b)(i)",
        marks: 4,
        prompt: "At time $t$ in a chemical reaction, $x\\text{ kg}$ of substance $X$ and $y\\text{ kg}$ of substance $Y$ are present. Initially, there is $4\\text{ kg}$ of $X$ and $5\\text{ kg}$ of $Y$. The variables $x$ and $y$ satisfy the equations $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = xy$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = x^2$.<br>Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$, and by solving this differential equation, show that $y = \\sqrt{x^2 + 9}$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\mathrm{d}y/\\mathrm{d}t}{\\mathrm{d}x/\\mathrm{d}t} = \\frac{x^2}{xy} = \\frac{x}{y}$$<br>Separating variables and integrating:<br>$$\\int y \\,\\mathrm{d}y = \\int x \\,\\mathrm{d}x \\implies \\frac{y^2}{2} = \\frac{x^2}{2} + c \\implies y^2 = x^2 + d$$<br>When $t = 0$, $x = 4$ and $y = 5$: $d = 5^2 - 4^2 = 9$.<br>Thus $y^2 = x^2 + 9$. Since mass $y > 0$, we take the positive square root to obtain $y = \\sqrt{x^2 + 9}$ (shown)."
      },
      {
        label: "(b)(ii)",
        marks: 4,
        prompt: "Obtain a differential equation in terms of $x$ and $t$ only and hence find an expression of $t$ in terms of $x$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 4, 8] },
        answer: "1/3*ln(x/(sqrt(x^2+9)+3)) + 1/3*ln(2)",
        placeholder: "Expression in terms of x",
        solution: "Substituting $y = \\sqrt{x^2 + 9}$ into $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = xy$ gives:<br>$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = x\\sqrt{x^2 + 9}$$<br>Separating variables:<br>$$\\int \\frac{1}{x\\sqrt{x^2 + 9}} \\,\\mathrm{d}x = \\int 1 \\,\\mathrm{d}t$$<br>Using (a) with $a = 3$:<br>$$t = \\frac{1}{3}\\ln\\left(\\frac{x}{\\sqrt{x^2 + 9} + 3}\\right) + c$$<br>When $t = 0$, $x = 4$:<br>$$0 = \\frac{1}{3}\\ln\\left(\\frac{4}{5 + 3}\\right) + c = \\frac{1}{3}\\ln\\left(\\frac{1}{2}\\right) + c \\implies c = \\frac{1}{3}\\ln 2$$<br>Hence,<br>$$t = \\frac{1}{3}\\ln\\left(\\frac{x}{\\sqrt{x^2 + 9} + 3}\\right) + \\frac{1}{3}\\ln 2 = \\frac{1}{3}\\ln\\left(\\frac{2x}{\\sqrt{x^2 + 9} + 3}\\right)$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q6",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "If $\\mathrm{P}(B \\mid A) = 0.2$, $\\mathrm{P}(A \\mid B) = 0.6$ and $\\mathrm{P}(A' \\cap B') = 0.3$, find $\\mathrm{P}(A \\cap B)$.",
        type: "auto",
        mode: "number",
        answer: "21/170",
        placeholder: "Exact fraction or 3 s.f.",
        solutionSvg: `<svg viewBox="0 0 260 150" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <rect x="10" y="15" width="240" height="125" fill="none" stroke-width="1.4"/>
  <text x="16" y="11" stroke="none" font-style="italic">S</text>
  <circle cx="98" cy="78" r="44" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.8"/>
  <circle cx="152" cy="78" r="44" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.8"/>
  <text x="72" y="30" stroke="none" font-style="italic">A</text>
  <text x="168" y="30" stroke="none" font-style="italic">B</text>
  <text x="72" y="82" stroke="none">4x</text>
  <text x="121" y="82" stroke="none">x</text>
  <text x="155" y="82" stroke="none">2x/3</text>
  <text x="210" y="128" stroke="none">0.3</text>
</svg>`,
        solution: "Let $x = \\mathrm{P}(A \\cap B)$.<br>From $\\mathrm{P}(B \\mid A) = \\frac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(A)} = 0.2$, we get $\\mathrm{P}(A) = 5x$.<br>From $\\mathrm{P}(A \\mid B) = \\frac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)} = 0.6$, we get $\\mathrm{P}(B) = \\frac{5}{3}x$.<br>Also $\\mathrm{P}(A \\cup B) = 1 - \\mathrm{P}(A' \\cap B') = 1 - 0.3 = 0.7$.<br>Using $\\mathrm{P}(A \\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B) - \\mathrm{P}(A \\cap B)$:<br>$$0.7 = 5x + \\frac{5}{3}x - x = \\frac{17}{3}x \\implies x = \\frac{21}{170} \\approx 0.124 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The events $X$, $Y$ and $Z$ are such that the events $X$ and $Z$ are mutually exclusive. Given further that $\\mathrm{P}(X \\cap Y) = 0.1$, $\\mathrm{P}(X' \\cap Y) = 0.35$, $\\mathrm{P}(Y \\cap Z) = 0.2$, and $\\mathrm{P}(X \\cup Y \\cup Z) = 0.95$, find the minimum and maximum values of $\\mathrm{P}(X)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Min P(X) =", answer: "0.1", exactRequired: true, placeholder: "Exact value" },
          { label: "Max P(X) =", answer: "0.6", exactRequired: true, placeholder: "Exact value" }
        ],
        solutionSvg: `<svg viewBox="0 0 290 155" width="290" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <rect x="10" y="15" width="270" height="130" fill="none" stroke-width="1.4"/>
  <text x="16" y="11" stroke="none" font-style="italic">S</text>
  <circle cx="76" cy="80" r="42" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.7"/>
  <circle cx="145" cy="80" r="42" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.7"/>
  <circle cx="214" cy="80" r="42" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.7"/>
  <text x="68" y="34" stroke="none" font-style="italic">X</text>
  <text x="140" y="34" stroke="none" font-style="italic">Y</text>
  <text x="210" y="34" stroke="none" font-style="italic">Z</text>
  <text x="58" y="84" stroke="none" font-style="italic">x</text>
  <text x="101" y="84" stroke="none" font-size="10">0.1</text>
  <text x="134" y="76" stroke="none" font-size="10">0.15</text>
  <text x="171" y="84" stroke="none" font-size="10">0.2</text>
  <text x="206" y="84" stroke="none" font-size="10">0.5 - x</text>
  <text x="134" y="138" stroke="none" font-size="10">0.05</text>
</svg>`,
        solution: "Since $X$ and $Z$ are mutually exclusive ($X \\cap Z = \\emptyset$):<br>- $\\mathrm{P}((X \\cup Y \\cup Z)') = 1 - 0.95 = 0.05$.<br>- $\\mathrm{P}(Y \\cap X' \\cap Z') = \\mathrm{P}(X' \\cap Y) - \\mathrm{P}(Y \\cap Z) = 0.35 - 0.2 = 0.15$.<br>Let $x = \\mathrm{P}(X \\cap Y')$. Since all disjoint regions sum to $1$:<br>$$\\mathrm{P}(Z \\cap Y') = 1 - 0.05 - (0.1 + 0.15 + 0.2) - x = 0.5 - x$$<br>Since probabilities are non-negative, $x \\ge 0$ and $0.5 - x \\ge 0 \\implies 0 \\le x \\le 0.5$.<br>As $\\mathrm{P}(X) = x + 0.1$, we have:<br>- Minimum $\\mathrm{P}(X) = 0 + 0.1 = 0.1$<br>- Maximum $\\mathrm{P}(X) = 0.5 + 0.1 = 0.6$"
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q7",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Permutations & Combinations", "Probability"],
    stem: "A gathering of 12 people break into 3 groups of 4 to play 3 different games: carrom, UNO and bridge.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the number of ways these 12 people can be grouped.",
        type: "auto",
        mode: "number",
        answer: "34650",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Since the 3 groups are distinct (assigned to carrom, UNO and bridge):<br>$$\\text{Number of ways} = {^{12}\\mathrm{C}_4} \\times {^{8}\\mathrm{C}_4} \\times {^{4}\\mathrm{C}_4} = 495 \\times 70 \\times 1 = 34650$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Aaron and Sandy do not get along with each other and do not want to be in the same group. Find the number of ways these 12 people can be grouped with this restriction.",
        type: "auto",
        mode: "number",
        answer: "25200",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "<strong>Method 1 (Complement):</strong><br>Number of ways Aaron and Sandy are in the same group:<br>Choose 1 of 3 games for them ($3$), choose 2 of the remaining 10 people to complete their group (${^{10}\\mathrm{C}_2}$), then split the remaining 8 people into the other 2 groups (${^8\\mathrm{C}_4} \\times {^4\\mathrm{C}_4}$):<br>$$3 \\times {^{10}\\mathrm{C}_2} \\times {^8\\mathrm{C}_4} \\times {^4\\mathrm{C}_4} = 3 \\times 45 \\times 70 \\times 1 = 9450$$<br>Required number of ways $= 34650 - 9450 = 25200$.<br><br><strong>Method 2 (Direct):</strong><br>$3 \\times 2 \\times {^{10}\\mathrm{C}_3} \\times {^7\\mathrm{C}_3} \\times {^4\\mathrm{C}_4} = 6 \\times 120 \\times 35 \\times 1 = 25200$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Given that Aaron and Sandy are not in the same group, find the probability that a third person Billy is in the same group as Aaron.",
        type: "auto",
        mode: "number",
        answer: "3/10",
        placeholder: "Exact fraction or decimal",
        solution: "Let $A = \\{\\text{Aaron and Billy are in the same group}\\}$ and $B = \\{\\text{Aaron and Sandy are in different groups}\\}$.<br>Number of ways for $A \\cap B$:<br>- Choose 1 of 3 games for Aaron and Billy ($3$)<br>- Choose 1 of the other 2 games for Sandy ($2$)<br>- Choose 2 of the remaining 9 people to complete Aaron &amp; Billy's group (${^9\\mathrm{C}_2}$)<br>- Choose 3 of the remaining 7 people to complete Sandy's group (${^7\\mathrm{C}_3}$)<br>- Remaining 4 people form the last group (${^4\\mathrm{C}_4}$)<br>$$n(A \\cap B) = 3 \\times 2 \\times 36 \\times 35 \\times 1 = 7560$$<br>From (b), $n(B) = 25200$. Hence:<br>$$\\mathrm{P}(A \\mid B) = \\frac{7560}{25200} = \\frac{3}{10} = 0.3$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q8",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "The probability distribution of a discrete random variable $X$ is given as follows:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$-2$</td><td>$-1$</td><td>$0$</td><td>$1$</td><td>$3$</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$0.1$</td><td>$a$</td><td>$0.3$</td><td>$b$</td><td>$c$</td></tr></table></div>",
    parts: [
      {
        label: "(Full)",
        marks: 5,
        prompt: "Given that $\\mathrm{E}(X) = 0.9$ and $\\mathrm{Var}(X) = 2.99$, find the values of $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "0.1", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "0.15", exactRequired: true, placeholder: "Exact value" },
          { label: "c =", answer: "0.35", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "1. Sum of probabilities equals 1:<br>$$0.1 + a + 0.3 + b + c = 1 \\implies a + b + c = 0.6 \\quad \\text{--- (1)}$$<br>2. Using $\\mathrm{E}(X) = 0.9$:<br>$$(-2)(0.1) + (-1)(a) + 0(0.3) + 1(b) + 3(c) = 0.9 \\implies -a + b + 3c = 1.1 \\quad \\text{--- (2)}$$<br>3. Using $\\mathrm{Var}(X) = \\mathrm{E}(X^2) - [\\mathrm{E}(X)]^2 = 2.99$:<br>$$\\mathrm{E}(X^2) = 2.99 + 0.9^2 = 3.8$$<br>$$(-2)^2(0.1) + (-1)^2(a) + 0^2(0.3) + 1^2(b) + 3^2(c) = 3.8 \\implies a + b + 9c = 3.4 \\quad \\text{--- (3)}$$<br>Subtracting (1) from (3): $8c = 2.8 \\implies c = 0.35$.<br>Adding (1) and (2): $2b + 4c = 1.7 \\implies 2b + 1.4 = 1.7 \\implies b = 0.15$.<br>From (1): $a = 0.6 - 0.15 - 0.35 = 0.1$.<br>Hence $a = 0.1$, $b = 0.15$, $c = 0.35$."
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q9",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "A fruit seller sources his oranges from a supplier with a large plantation where $1\\%$ of the oranges are rotten. The supplier picks the oranges regardless of whether the oranges are rotten or not, and packs 20 oranges in each box at random.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "The random variable $X$ denotes the number of rotten oranges in a randomly chosen box. State in context two assumptions for $X$ to follow a binomial distribution.",
        type: "self",
        solution: "1. The probability that an orange is rotten is constant at $0.01$ for every orange.<br>2. Whether an orange is rotten is independent of whether any other orange in the box is rotten."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Assume that $X$ follows a binomial distribution for the rest of this question. The fruit seller considers a box containing between 2 and 5 rotten oranges inclusive as substandard.<br>Find the probability that a randomly chosen box is substandard.",
        type: "auto",
        mode: "number",
        answer: "0.0168593",
        placeholder: "3 s.f.",
        solution: "$X \\sim \\mathrm{B}(20, 0.01)$.<br>$$\\mathrm{P}(2 \\le X \\le 5) = \\mathrm{P}(X \\le 5) - \\mathrm{P}(X \\le 1) = 0.016859 \\approx 0.0169 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Find the expected number of rotten oranges in a box.",
        type: "auto",
        mode: "number",
        answer: "0.2",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "$$\\mathrm{E}(X) = np = 20 \\times 0.01 = 0.2$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "A truckload of 10 randomly chosen boxes of oranges is then sent to the fruit seller. Find the probability that not more than 2 boxes from the entire truckload are substandard.",
        type: "auto",
        mode: "number",
        answer: "0.999474",
        placeholder: "3 s.f.",
        solution: "Let $Y$ be the number of substandard boxes out of 10 boxes. Then $Y \\sim \\mathrm{B}(10, 0.016859)$.<br>$$\\mathrm{P}(Y \\le 2) = 0.99947 \\approx 0.999 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Upon receiving the oranges, the fruit seller inspects the boxes with these conditions:<br>&bull; Accept the entire truckload if the first box opened has no rotten oranges.<br>&bull; Reject the entire truckload if the first box opened has more than 1 rotten orange.<br>&bull; If the first box has exactly 1 rotten orange, the fruit seller opens a second box.<br>&bull; If the second box has at most 1 rotten orange, he will accept the entire truckload. Otherwise, he will reject the entire truckload.<br>Find the probability that he will reject the entire truckload.",
        type: "auto",
        mode: "number",
        answer: "0.0196451",
        placeholder: "3 s.f.",
        solution: "He rejects the truckload if either (i) the first box has $X \\ge 2$, or (ii) the first box has $X = 1$ and the second box has $X \\ge 2$:<br>$$\\mathrm{P}(\\text{reject}) = \\mathrm{P}(X \\ge 2) + \\mathrm{P}(X = 1)\\mathrm{P}(X \\ge 2)$$<br>$$= [1 - \\mathrm{P}(X \\le 1)] + \\mathrm{P}(X = 1)[1 - \\mathrm{P}(X \\le 1)]$$<br>$$= 0.0168593 + (0.165234)(0.0168593) = 0.019645 \\approx 0.0196 \\text{ (3 s.f.)}$$"
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q10",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Scientists are studying the growth of a particular species of bamboo. They want to understand how the height of the bamboo stalk changes over time. The table below shows the height, $h$ inches, of a bamboo stalk at age, $t$ weeks, after sprouting.<div class='q-table-wrap'><table class='q-table'><tr><th>$t$</th><td>$1$</td><td>$2$</td><td>$3$</td><td>$4$</td><td>$5$</td><td>$7$</td><td>$8$</td><td>$9$</td></tr><tr><th>$h$</th><td>$3.6$</td><td>$7.4$</td><td>$10.2$</td><td>$11.7$</td><td>$12.6$</td><td>$14.1$</td><td>$14.5$</td><td>$15.5$</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Draw a scatter diagram of these data, and explain using the diagram why the relationship between $h$ and $t$ is not well-modelled by an equation of the form $h = a + bt$ or $h = a + bt^2$, where $b > 0$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 290 205" width="290" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (45,175), t in [0,10] -> x = 45 + t*22, h in [0,18] -> y = 175 - h*8.5 -->
  <line x1="45" y1="175" x2="275" y2="175" stroke-width="1.3"/>
  <polyline points="269,171 275,175 269,179" fill="none" stroke-width="1.3"/>
  <line x1="45" y1="175" x2="45" y2="15" stroke-width="1.3"/>
  <polyline points="41,21 45,15 49,21" fill="none" stroke-width="1.3"/>
  <text x="270" y="191" stroke="none" font-style="italic">t</text>
  <text x="32" y="21" stroke="none" font-style="italic">h</text>
  <!-- Tick marks -->
  <line x1="67" y1="172" x2="67" y2="178" stroke-width="1"/>
  <text x="64" y="191" stroke="none" font-size="10">1</text>
  <line x1="243" y1="172" x2="243" y2="178" stroke-width="1"/>
  <text x="240" y="191" stroke="none" font-size="10">9</text>
  <line x1="42" y1="144.4" x2="48" y2="144.4" stroke-width="1"/>
  <text x="20" y="148" stroke="none" font-size="10">3.6</text>
  <line x1="42" y1="43.25" x2="48" y2="43.25" stroke-width="1"/>
  <text x="16" y="47" stroke="none" font-size="10">15.5</text>
  <line x1="243" y1="43.25" x2="243" y2="175" stroke-dasharray="3,3" opacity="0.4" stroke-width="1"/>
  <line x1="45" y1="43.25" x2="243" y2="43.25" stroke-dasharray="3,3" opacity="0.4" stroke-width="1"/>
  <!-- Data points: (1,3.6)->(67,144.4), (2,7.4)->(89,112.1), (3,10.2)->(111,88.3), (4,11.7)->(133,75.55), (5,12.6)->(155,67.9), (7,14.1)->(199,55.15), (8,14.5)->(221,51.75), (9,15.5)->(243,43.25) -->
  <circle cx="67" cy="144.4" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="89" cy="112.1" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="111" cy="88.3" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="133" cy="75.6" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="155" cy="67.9" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="199" cy="55.2" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="221" cy="51.8" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="243" cy="43.3" r="3" fill="#4ca885" stroke="none"/>
  <text x="74" y="148" stroke="none" font-size="10">(1, 3.6)</text>
  <text x="215" y="36" stroke="none" font-size="10">(9, 15.5)</text>
</svg>`,
        solution: "From the scatter diagram, the points follow a curved (non-linear) trend, so the linear model $h = a + bt$ is not suitable.<br>Furthermore, as $t$ increases, $h$ increases at a <strong>decreasing rate</strong> (concave downwards), whereas the model $h = a + bt^2$ with $b > 0$ has $h$ increasing at an <strong>increasing rate</strong> (concave upwards) for $t > 0$. Thus $h = a + bt^2$ ($b > 0$) is also not suitable."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Consider the two models below:<br>Model $A$: $h = c + d\\sqrt{t}$,<br>Model $B$: $h = c + d\\ln t$,<br>where $c$ and $d$ are constants. Explain which of Model $A$ or Model $B$ is a better fit to the data. State the equation of the least squares regression line in this case, giving your answer to 3 decimal places.",
        type: "self",
        solution: "Using a graphing calculator:<br>- For Model $A$ ($h = c + d\\sqrt{t}$): $r = 0.97364 \\approx 0.974$ (3 s.f.)<br>- For Model $B$ ($h = c + d\\ln t$): $r = 0.99658 \\approx 0.997$ (3 s.f.)<br>Since the product moment correlation coefficient $r$ for Model $B$ is closer to $1$, <strong>Model $B$</strong> ($h = c + d\\ln t$) is a better fit to the data.<br>The least squares regression line is:<br>$$h = 3.890 + 5.311\\ln t \\quad (\\text{to 3 d.p.})$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Use the equation of your regression line in (b) to estimate the length of a 6-week-old bamboo stalk. Comment on the reliability of this estimate.",
        type: "self",
        solution: "When $t = 6$:<br>$$h = 3.89017 + 5.31138\\ln 6 = 13.407 \\approx 13.4\\text{ inches (3 s.f.)}$$<br>This estimate is likely to be <strong>reliable</strong> because $t = 6$ lies within the given data range ($1 \\le t \\le 9$, interpolation) and $|r| = 0.997$ is very close to $1$, indicating a strong linear relationship between $h$ and $\\ln t$."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Comment on the suitability of using this model in the long run.",
        type: "self",
        solution: "As $t$ increases indefinitely, $\\ln t$ and hence $h = 3.890 + 5.311\\ln t$ increases without bound. The model is <strong>not suitable in the long run</strong> because a bamboo stalk cannot grow infinitely tall (and $t > 9$ involves extrapolation beyond the observed range)."
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "Let $H$ denote the height of the bamboo stalk calculated for each value of $t$ in the table using the least squares regression line obtained in (b). Find the value of $S$, where $S = \\sum (h - H)^2$, giving your answer to 2 decimal places.",
        type: "auto",
        mode: "number",
        answer: "0.77319",
        dp: 2,
        placeholder: "2 d.p.",
        solution: "Computing $H = 3.89017 + 5.31138\\ln t$ for each $t$:<div class='q-table-wrap'><table class='q-table'><tr><th>$t$</th><td>$1$</td><td>$2$</td><td>$3$</td><td>$4$</td><td>$5$</td><td>$7$</td><td>$8$</td><td>$9$</td></tr><tr><th>$h$</th><td>$3.6$</td><td>$7.4$</td><td>$10.2$</td><td>$11.7$</td><td>$12.6$</td><td>$14.1$</td><td>$14.5$</td><td>$15.5$</td></tr><tr><th>$H$</th><td>$3.890$</td><td>$7.572$</td><td>$9.725$</td><td>$11.253$</td><td>$12.438$</td><td>$14.225$</td><td>$14.935$</td><td>$15.560$</td></tr></table></div>Summing $(h - H)^2$ over all 8 points gives $S = 0.77319 \\approx 0.77$ (2 d.p.)."
      },
      {
        label: "(f)",
        marks: 1,
        prompt: "For each of the eight sample values of $t$, $H'$ is given by $H' = p + q\\ln t$, where $p$ and $q$ are constants. Would $\\sum (h - H')^2$ be greater or less than $S$ and why?",
        type: "self",
        solution: "$\\sum (h - H')^2$ will be <strong>greater than (or equal to) $S$</strong>, because $S$ is the minimum possible sum of squared residuals achieved by the least squares regression line of $h$ on $\\ln t$."
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q11",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "In a laboratory, the time in minutes for an inspector to test an electrical circuit board is a continuous random variable $X$. The standard deviation of $X$ is $0.63$ and under ordinary conditions, the expected value of $X$ is $5.82$. As a result of the introduction of an incentive scheme, the laboratory supervisor claims that the inspector carries out the test more quickly. It is found that for a random sample of 150 tests, the mean time taken to test an electrical circuit board is $5.74$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State appropriate hypotheses for the test of the claim, defining any symbols that you use.",
        type: "self",
        solution: "Let $\\mu$ be the <strong>population mean</strong> time (in minutes) taken by the inspector to test an electrical circuit board.<br>$$\\mathrm{H}_0: \\mu = 5.82$$<br>$$\\mathrm{H}_1: \\mu < 5.82$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Test whether the supervisor's claim is justified at $5\\%$ level of significance.",
        type: "self",
        solution: "Under $\\mathrm{H}_0$, since $n = 150$ is large, by the Central Limit Theorem:<br>$$\\bar{X} \\sim \\mathrm{N}\\left(5.82, \\frac{0.63^2}{150}\\right) \\quad \\text{approximately}$$<br>Test statistic:<br>$$z = \\frac{5.74 - 5.82}{0.63 / \\sqrt{150}} = -1.5553 \\approx -1.56 \\text{ (3 s.f.)}$$<br>$$p\\text{-value} = \\mathrm{P}(\\bar{X} < 5.74) = \\mathrm{P}(Z < -1.5553) = 0.05994 \\approx 0.0599 > 0.05$$<br>Since $p\\text{-value} > 0.05$, we do not reject $\\mathrm{H}_0$.<br>There is insufficient evidence at the $5\\%$ level of significance to conclude that the inspector carries out the test more quickly (the supervisor's claim is not justified)."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Explain whether there is a need for the laboratory supervisor to know anything about the population distribution of $X$.",
        type: "self",
        solution: "There is <strong>no need</strong> to know the population distribution of $X$, because the sample size $n = 150$ is large, so by the Central Limit Theorem, the sample mean $\\bar{X}$ is approximately normally distributed."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Two years later, a quality control officer took a random sample of 20 tests and found that the mean time taken to test an electrical circuit board is $5.88$. He makes a claim that the mean time taken to test an electrical circuit board differs from $\\mu_0$ mins.<br>State two assumptions the quality control officer has to make in order to carry out a hypothesis test for this claim.",
        type: "self",
        solution: "1. The time taken to test an electrical circuit board ($X$) follows a normal distribution (since the sample size $n = 20$ is small).<br>2. The population standard deviation of the time taken to test an electrical circuit board remains unchanged at $0.63$ minutes."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Given that the officer concludes that there is no reason to reject the null hypothesis at $1\\%$ level of significance, find the range of values of $\\mu_0$.",
        type: "self",
        solution: "Testing $\\mathrm{H}_0: \\mu = \\mu_0$ against $\\mathrm{H}_1: \\mu \\ne \\mu_0$ at the $1\\%$ level of significance (two-tailed).<br>Under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(\\mu_0, \\frac{0.63^2}{20}\\right)$.<br>To not reject $\\mathrm{H}_0$ at $1\\%$ significance level, the test statistic must lie within the non-rejection region ($|z| < 2.57583$):<br>$$-2.57583 < \\frac{5.88 - \\mu_0}{0.63 / \\sqrt{20}} < 2.57583$$<br>$$-0.36287 < 5.88 - \\mu_0 < 0.36287$$<br>$$5.5171 < \\mu_0 < 6.2429$$<br>Hence, $5.52 < \\mu_0 < 6.24$ (3 s.f.)."
      }
    ]
  },
  {
    id: "ACJC-2025-P2-Q12",
    year: 2025,
    school: "ACJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q12",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "<strong>In this question you should state the parameters of any distribution you use.</strong><br><br>A customer service call centre categorises incoming calls for follow-up resolution of the issues. The time taken to categorise an incoming call, $T$ minutes, follows a normal distribution $\\mathrm{N}(2, 0.2^2)$. Incoming calls are categorised as routine or complex calls. The time taken to resolve a routine call, $X$ minutes, follows a normal distribution $\\mathrm{N}(5, k)$ and the time taken to resolve a complex call, $Y$ minutes, follows a normal distribution $\\mathrm{N}(20, 6^2)$. You may assume that any incoming call is first categorised as either routine or complex and is immediately followed up with the resolution of the issue. The duration of the call is taken to be the sum of the time taken to categorise the call and then to resolve the issue.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the distribution for the time taken to categorise an incoming call, and shade clearly the area representing the probability that it took between $1.2$ minutes and $2.8$ minutes to categorise a randomly chosen incoming call.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 155" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="18" y1="128" x2="282" y2="128" stroke-width="1.3"/>
  <!-- Shaded area between 1.2 (x=42, -4 sigma) and 2.8 (x=258, +4 sigma), mean=2 at x=150 -->
  <path d="M 42,128 L 42,127.6 C 72,127 98,120 116,86 C 128,58 139,28 150,28 C 161,28 172,58 184,86 C 202,120 228,127 258,127.6 L 258,128 Z" fill="rgba(76,168,133,0.28)" stroke="none"/>
  <!-- Full bell curve -->
  <path d="M 24,127.9 C 68,127.6 98,120 116,86 C 128,58 139,28 150,28 C 161,28 172,58 184,86 C 202,120 232,127.6 276,127.9" fill="none" stroke="#4ca885" stroke-width="2.2"/>
  <line x1="150" y1="28" x2="150" y2="128" stroke-dasharray="4,3" opacity="0.6" stroke-width="1.1"/>
  <line x1="42" y1="122" x2="42" y2="132" stroke-width="1.2"/>
  <line x1="258" y1="122" x2="258" y2="132" stroke-width="1.2"/>
  <text x="34" y="145" stroke="none">1.2</text>
  <text x="147" y="145" stroke="none">2</text>
  <text x="250" y="145" stroke="none">2.8</text>
  <text x="188" y="46" stroke="none" fill="#4ca885">T ~ N(2, 0.2²)</text>
</svg>`,
        solution: "Sketch a symmetric bell curve for $T \\sim \\mathrm{N}(2, 0.2^2)$ centred at $2$. Since $1.2 = 2 - 4(0.2)$ and $2.8 = 2 + 4(0.2)$ are $4$ standard deviations from the mean, shade almost the entire region under the curve between $1.2$ and $2.8$ (note $\\mathrm{P}(1.2 < T < 2.8) = 0.99994$)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "For a randomly chosen incoming call that is categorised as routine and then resolved, there is a probability of $0.254$ that the duration of the call is more than $8$ minutes. Show that $k = 2.24$ correct to 2 decimal places.",
        type: "self",
        solution: "The duration of a routine call is $T + X$, where $T \\sim \\mathrm{N}(2, 0.2^2)$ and $X \\sim \\mathrm{N}(5, k)$:<br>$$T + X \\sim \\mathrm{N}(7, k + 0.04)$$<br>Given $\\mathrm{P}(T + X > 8) = 0.254$:<br>$$\\mathrm{P}\\left(Z > \\frac{8 - 7}{\\sqrt{k + 0.04}}\\right) = 0.254$$<br>$$\\frac{1}{\\sqrt{k + 0.04}} = 0.661964$$<br>$$k + 0.04 = \\frac{1}{0.661964^2} = 2.28208 \\implies k = 2.2421 \\approx 2.24 \\text{ (2 d.p., shown)}$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "On a weekday morning where there are 20 incoming calls, $n$ calls are categorised as complex calls. Given that there is a probability of at most $0.01$ that the mean time taken to resolve the $n$ complex calls exceeds 24 mins, find the set of values of $n$.",
        type: "self",
        solution: "The mean time to resolve $n$ complex calls is $\\bar{Y} \\sim \\mathrm{N}\\left(20, \\frac{6^2}{n}\\right)$.<br>Given $\\mathrm{P}(\\bar{Y} > 24) \\le 0.01$:<br>$$\\mathrm{P}\\left(Z > \\frac{24 - 20}{6 / \\sqrt{n}}\\right) \\le 0.01 \\implies \\frac{4\\sqrt{n}}{6} \\ge 2.32635$$<br>$$\\sqrt{n} \\ge 3.48952 \\implies n \\ge 12.177$$<br>Since $n$ is a positive integer and at most 20 incoming calls occur ($n \\le 20$), the set of values of $n$ is:<br>$$\\{13, 14, 15, 16, 17, 18, 19, 20\\} \\quad (\\text{or } \\{n \\in \\mathbb{Z}^+ : 13 \\le n \\le 20\\})$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "There is a review of the resolution processes such that the time taken to resolve a complex call is now reduced by $20\\%$. Find the probability that the time taken to resolve 2 complex calls is more than twice the time taken to resolve a routine call.",
        type: "auto",
        mode: "number",
        answer: "0.998488",
        placeholder: "3 s.f.",
        solution: "Let $W = 0.8(Y_1 + Y_2) - 2X$, where $Y_1, Y_2 \\sim \\mathrm{N}(20, 6^2)$ independently and $X \\sim \\mathrm{N}(5, 2.24)$.<br>$$\\mathrm{E}(W) = 0.8(20 + 20) - 2(5) = 32 - 10 = 22$$<br>$$\\mathrm{Var}(W) = 0.8^2(6^2 + 6^2) + 2^2(2.24) = 0.64(72) + 8.96 = 46.08 + 8.96 = 55.04$$<br>Thus $W \\sim \\mathrm{N}(22, 55.04)$.<br>$$\\mathrm{P}(W > 0) = 0.99849 \\approx 0.998 \\text{ (3 s.f.)}$$"
      }
    ]
  }
]);
