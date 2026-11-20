window.registerQuestions([
  {
    id: "DHS-2025-P1-Q1",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "",
    parts: [
      {
        label: "(Full)",
        marks: 6,
        prompt: "It is given that $2xy\\frac{\\mathrm{d}y}{\\mathrm{d}x} = x^2 - y^2$ where $x > 0$, $y < 0$. Using the substitution $u = \\frac{y}{x}$, show that the differential equation can be transformed to $$\\frac{2u}{1-3u^2}\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{1}{x}.$$ Hence find the general solution of $y$ in terms of $x$.",
        type: "self",
        solution: "Since $u = \\frac{y}{x}$, we have $y = ux$. Differentiating with respect to $x$:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = x\\frac{\\mathrm{d}u}{\\mathrm{d}x} + u \\quad \\text{--- (1)}$$<br>From the differential equation $2xy\\frac{\\mathrm{d}y}{\\mathrm{d}x} = x^2 - y^2$:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x^2 - y^2}{2xy} = \\frac{x^2 - u^2 x^2}{2ux^2} = \\frac{1 - u^2}{2u} \\quad \\text{--- (2)}$$<br>Equating (1) and (2):<br>$$x\\frac{\\mathrm{d}u}{\\mathrm{d}x} + u = \\frac{1 - u^2}{2u}$$<br>$$x\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{1 - u^2}{2u} - u = \\frac{1 - 3u^2}{2u}$$<br>$$\\frac{2u}{1 - 3u^2}\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{1}{x} \\quad (\\text{shown})$$<br>Separating variables and integrating:<br>$$\\int \\frac{2u}{1 - 3u^2}\\,\\mathrm{d}u = \\int \\frac{1}{x}\\,\\mathrm{d}x$$<br>$$-\\frac{1}{3}\\int \\frac{-6u}{1 - 3u^2}\\,\\mathrm{d}u = \\int \\frac{1}{x}\\,\\mathrm{d}x$$<br>$$-\\frac{1}{3}\\ln|1 - 3u^2| = \\ln x + c \\quad (\\text{since } x > 0)$$<br>$$\\ln|1 - 3u^2| = -3\\ln x - 3c$$<br>$$1 - 3u^2 = \\pm\\mathrm{e}^{-3c}\\cdot\\frac{1}{x^3} = \\frac{A}{x^3}, \\quad \\text{where } A = \\pm\\mathrm{e}^{-3c}$$<br>$$3u^2 = 1 - \\frac{A}{x^3} \\implies \\left(\\frac{y}{x}\\right)^2 = \\frac{1}{3}\\left(1 - \\frac{A}{x^3}\\right)$$<br>Since $x > 0$ and $y < 0$:<br>$$y = -x\\sqrt{\\frac{1}{3}\\left(1 - \\frac{A}{x^3}\\right)}$$"
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q2",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Sequences and Series", "Sigma Notation"],
    stem: "A series is given by $\\sum_{r=1}^{n} 2(4-3x)^r$ where $x$ is constant.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Explain why this is a geometric series. Determine the range of values of $x$ for the sum to infinity of this series to exist.",
        type: "self",
        solution: "Let $u_n = 2(4-3x)^n$. Then $u_{n+1} = 2(4-3x)^{n+1}$.<br>$$\\frac{u_{n+1}}{u_n} = \\frac{2(4-3x)^{n+1}}{2(4-3x)^n} = 4 - 3x$$<br>Since $4 - 3x$ is a constant independent of $n$ (a constant common ratio), the series is a geometric series.<br><br>For the sum to infinity to exist, $|4 - 3x| < 1$:<br>$$-1 < 4 - 3x < 1$$<br>$$-5 < -3x < -3$$<br>$$1 < x < \\frac{5}{3}$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Using $x = 1$, and given that $\\sum_{r=1}^{n} r^2 = \\frac{n}{6}(n+1)(2n+1)$, find $$\\sum_{r=0}^{n-1} \\left[2(4-3x)^r + (r+1)(2r+5)\\right],$$ leaving your answer in the form of $n(an^2 + bn + c)$, where $a$, $b$ and $c$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "2/3", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "5/2", exactRequired: true, placeholder: "Exact value" },
          { label: "c =", answer: "23/6", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "Substituting $x = 1$, we have $4 - 3(1) = 1$, so $2(4-3x)^r = 2(1)^r = 2$.<br>$$\\sum_{r=0}^{n-1} \\left[2(4-3x)^r + (r+1)(2r+5)\\right] = \\sum_{r=0}^{n-1} 2 + \\sum_{r=0}^{n-1} (r+1)(2r+5)$$<br>Replacing $r$ with $r - 1$ to shift the limits from $r = 0, \\dots, n-1$ to $r = 1, \\dots, n$:<br>$$= 2n + \\sum_{r=1}^{n} ((r-1)+1)(2(r-1)+5)$$<br>$$= 2n + \\sum_{r=1}^{n} r(2r+3)$$<br>$$= 2n + 2\\sum_{r=1}^{n} r^2 + 3\\sum_{r=1}^{n} r$$<br>$$= 2n + 2\\left(\\frac{n}{6}(n+1)(2n+1)\\right) + 3\\left(\\frac{n}{2}(n+1)\\right)$$<br>$$= n\\left(2 + \\frac{2n^2 + 3n + 1}{3} + \\frac{3n + 3}{2}\\right)$$<br>$$= n\\left(\\frac{2}{3}n^2 + \\frac{5}{2}n + \\frac{23}{6}\\right)$$<br>$$\\therefore a = \\frac{2}{3}, \\quad b = \\frac{5}{2}, \\quad c = \\frac{23}{6}$$"
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q3",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Maclaurin Series", "Binomial Expansion"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the first three non-zero terms in the Maclaurin series for $\\mathrm{e}^x \\sin(x+\\pi)$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.2, 0.5, 1] },
        answer: "-x - x^2 - x^3/3",
        placeholder: "Polynomial in x",
        solution: "Using $\\sin(x+\\pi) = \\sin x \\cos\\pi + \\cos x \\sin\\pi = -\\sin x$:<br>$$\\mathrm{e}^x \\sin(x+\\pi) = -\\mathrm{e}^x \\sin x$$<br>Using standard Maclaurin expansions:<br>$$= -\\left(1 + x + \\frac{x^2}{2!} + \\dots\\right)\\left(x - \\frac{x^3}{3!} + \\dots\\right)$$<br>$$= -\\left(x + x^2 + \\frac{x^3}{2} - \\frac{x^3}{6} + \\dots\\right)$$<br>$$= -x - x^2 - \\frac{x^3}{3} + \\dots$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "It is given that the three terms found in part (a) are equal to the first three terms in the series expansion of $ax(1+bx)^c$ for small $x$, where $a$, $b$ and $c$ are constants. Find the exact values of $a$, $b$ and $c$. Use these values to find the coefficient of $x^4$ in the expansion of $ax(1+bx)^c$, giving your answer as a simplified rational number.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "-1", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "1/3", exactRequired: true, placeholder: "Exact value" },
          { label: "c =", answer: "3", exactRequired: true, placeholder: "Exact value" },
          { label: "Coeff. of x^4 =", answer: "-1/27", exactRequired: true, placeholder: "Simplified fraction" }
        ],
        solution: "Expanding $ax(1+bx)^c$:<br>$$ax(1+bx)^c = ax\\left(1 + cbx + \\frac{c(c-1)}{2!}(bx)^2 + \\dots\\right) = ax + abcx^2 + \\frac{ab^2c(c-1)}{2}x^3 + \\dots$$<br>Comparing coefficients with $-x - x^2 - \\frac{1}{3}x^3$:<br>$a = -1$<br>$abc = -1 \\implies (-1)bc = -1 \\implies bc = 1 \\implies b = \\frac{1}{c}$<br>$\\frac{ab^2c(c-1)}{2} = -\\frac{1}{3} \\implies \\frac{(-1)(b)(1)(c-1)}{2} = -\\frac{1}{3} \\implies \\frac{b(c-1)}{2} = \\frac{1}{3}$<br>Substituting $b = \\frac{1}{c}$:<br>$$\\frac{c-1}{2c} = \\frac{1}{3} \\implies 3c - 3 = 2c \\implies c = 3$$<br>Therefore, $b = \\frac{1}{3}$.<br><br>Now $ax(1+bx)^c = -x\\left(1 + \\frac{1}{3}x\\right)^3$.<br>The $x^4$ term is $-x \\cdot \\left(\\frac{1}{3}x\\right)^3 = -\\frac{1}{27}x^4$.<br>Hence, the coefficient of $x^4$ is $-\\frac{1}{27}$."
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q4",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Sequences and Series", "Recurrence Relations"],
    stem: "A sequence of real numbers $x_1, x_2, x_3, \\dots$ satisfies the recurrence relation $$x_{n+1} = \\frac{5x_n + 2}{2x_n + 3} \\quad \\text{for all } n \\ge 1.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Given that the sequence converges to $l$, find the possible exact values of $l$.",
        type: "auto",
        mode: "number-list",
        answer: [(1 - Math.sqrt(5)) / 2, (1 + Math.sqrt(5)) / 2],
        exactRequired: true,
        placeholder: "Separate exact values with a comma",
        solution: "As $n$ → ∞, $x_n$ → $l$ and $x_{n+1}$ → $l$.<br>$$l = \\frac{5l + 2}{2l + 3}$$<br>$$2l^2 + 3l = 5l + 2$$<br>$$2l^2 - 2l - 2 = 0 \\implies l^2 - l - 1 = 0$$<br>$$l = \\frac{1 \\pm \\sqrt{(-1)^2 - 4(1)(-1)}}{2} = \\frac{1 \\pm \\sqrt{5}}{2}$$<br>$$\\therefore l = \\frac{1 + \\sqrt{5}}{2} \\text{ or } l = \\frac{1 - \\sqrt{5}}{2}$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Describe how the sequence behaves when $x_1 = 3$.",
        type: "self",
        solution: "Using a graphing calculator with $x_1 = 3$:<br>$x_1 = 3,\\; x_2 = 1.8889,\\; x_3 = 1.6885,\\; x_4 = 1.6375,\\; x_5 = 1.6235,\\; \\dots$<br>The sequence is <strong>decreasing</strong> and <strong>converges to $\\frac{1 + \\sqrt{5}}{2}$</strong> (or $1.62$ to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Given that $x_5 = \\frac{3503}{2158}$, find the value of $x_1$.",
        type: "auto",
        mode: "number",
        answer: "2.9",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Making $x_n$ the subject of $x_{n+1} = \\frac{5x_n + 2}{2x_n + 3}$:<br>$$x_{n+1}(2x_n + 3) = 5x_n + 2$$<br>$$(2x_{n+1} - 5)x_n = 2 - 3x_{n+1}$$<br>$$x_n = \\frac{2 - 3x_{n+1}}{2x_{n+1} - 5}$$<br>Working backwards from $x_5 = \\frac{3503}{2158}$:<br>$x_4 = \\frac{563}{344} \\approx 1.63663$<br>$x_3 = \\frac{91}{54} \\approx 1.68519$<br>$x_2 = \\frac{15}{8} = 1.875$<br>$x_1 = \\frac{29}{10} = 2.9$"
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q5",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Graphing Techniques", "Differentiation"],
    diagramSvg: `<svg viewBox="0 0 540 210" width="540" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
      <!-- Left graph: y = f'(x) -->
      <!-- Axes -->
      <line x1="20" y1="125" x2="245" y2="125" stroke-width="1.2"/>
      <polyline points="240,122 245,125 240,128" fill="none" stroke-width="1.2"/>
      <text x="248" y="128" stroke="none" font-style="italic">x</text>
      <line x1="125" y1="195" x2="125" y2="20" stroke-width="1.2"/>
      <polyline points="122,25 125,20 128,25" fill="none" stroke-width="1.2"/>
      <text x="122" y="14" stroke="none" font-style="italic">y</text>
      <text x="114" y="137" stroke="none" font-style="italic">O</text>
      <!-- Horizontal asymptote y = 1 -->
      <line x1="20" y1="80" x2="240" y2="80" stroke-dasharray="4,3" opacity="0.65"/>
      <text x="190" y="74" stroke="none" font-style="italic">y = 1</text>
      <text x="225" y="140" stroke="none" font-style="italic">y = 0</text>
      <text x="160" y="34" stroke="none" font-style="italic">y = f'(x)</text>
      <!-- Left branch of f'(x): approaches y=1 as x->-inf, crosses (-2,0) at x=95, goes to -inf as x->0- -->
      <path d="M 22,82 C 55,83 80,90 95,125 C 107,153 116,175 121,195" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
      <circle cx="95" cy="125" r="2.2" fill="#2c2925" stroke="none"/>
      <text x="64" y="138" stroke="none">(-2, 0)</text>
      <!-- Right branch of f'(x): from -inf as x->0+, crosses (1.5,0) at x=147, peaks then -> 0+ -->
      <path d="M 129,195 C 134,160 140,138 147,125 C 154,112 162,92 170,96 C 178,100 188,118 238,123" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
      <circle cx="147" cy="125" r="2.2" fill="#2c2925" stroke="none"/>
      <text x="148" y="138" stroke="none">(1.5, 0)</text>

      <!-- Right graph: y = |f(x)| -->
      <!-- Axes: origin at (390, 145), scale ~20px per unit -->
      <line x1="275" y1="145" x2="520" y2="145" stroke-width="1.2"/>
      <polyline points="515,142 520,145 515,148" fill="none" stroke-width="1.2"/>
      <text x="523" y="148" stroke="none" font-style="italic">x</text>
      <line x1="390" y1="195" x2="390" y2="20" stroke-width="1.2"/>
      <polyline points="387,25 390,20 393,25" fill="none" stroke-width="1.2"/>
      <text x="387" y="14" stroke="none" font-style="italic">y</text>
      <text x="379" y="157" stroke="none" font-style="italic">O</text>
      <text x="455" y="34" stroke="none" font-style="italic">y = |f(x)|</text>
      <!-- Asymptotes: (-3,0) is at x=330, y=145. y=-x-3 goes from (285,100) to (330,145) -->
      <line x1="285" y1="100" x2="330" y2="145" stroke-dasharray="4,3" opacity="0.6"/>
      <text x="275" y="94" stroke="none" font-style="italic">y = -x - 3</text>
      <!-- y = x + 3 goes from (330,145) through (390,85) to (465,10) -->
      <line x1="330" y1="145" x2="455" y2="20" stroke-dasharray="4,3" opacity="0.6"/>
      <text x="455" y="88" stroke="none" font-style="italic">y = x + 3</text>
      <!-- y = 3 at y = 145 - 60 = 85 -->
      <line x1="390" y1="85" x2="515" y2="85" stroke-dasharray="4,3" opacity="0.6"/>
      <text x="478" y="79" stroke="none" font-style="italic">y = 3</text>
      <!-- Curve y = |f(x)| left branch: above y=-x-3, min at (-2,2) -> (350, 105), goes to +inf as x->0- -->
      <path d="M 290,98 C 315,120 335,105 350,105 C 368,105 381,75 387,24" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
      <circle cx="350" cy="105" r="2.2" fill="#2c2925" stroke="none"/>
      <text x="303" y="114" stroke="none">(-2, 2)</text>
      <text x="320" y="159" stroke="none">(-3, 0)</text>
      <!-- Curve y = |f(x)| right branch: from +inf as x->0+, cusp at (1,0)->(410,145), max at (1.5,1)->(420,125), cusp at (2.5,0)->(440,145), -> y=3 from below -->
      <path d="M 393,24 C 397,85 402,128 410,145 C 414,132 417,125 420,125 C 425,125 433,133 440,145 C 452,118 468,90 515,87" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
      <circle cx="420" cy="125" r="2.2" fill="#2c2925" stroke="none"/>
      <text x="408" y="121" stroke="none">(1.5, 1)</text>
      <text x="396" y="159" stroke="none">(1, 0)</text>
      <text x="433" y="159" stroke="none">(2.5, 0)</text>
    </svg>`,
    stem: "The graphs of $y = \\mathrm{f}'(x)$ and $y = |\\mathrm{f}(x)|$ are shown above.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State the nature of all turning point(s) of the graph of $y = \\mathrm{f}(x)$.",
        type: "self",
        solution: "From the graph of $y = \\mathrm{f}'(x)$:<br>• At $x = -2$, $\\mathrm{f}'(x)$ changes sign from positive to negative, so there is a <strong>maximum point at $x = -2$</strong>.<br>• At $x = 1.5$, $\\mathrm{f}'(x)$ changes sign from negative to positive, so there is a <strong>minimum point at $x = 1.5$</strong>."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "State the range of values of $x$ where $\\mathrm{f}$ is decreasing.",
        type: "self",
        solution: "$\\mathrm{f}$ is decreasing when $\\mathrm{f}'(x) \\le 0$ and $\\mathrm{f}(x)$ is defined ($x \\ne 0$):<br>$$-2 \\le x < 0 \\quad \\text{or} \\quad 0 < x \\le 1.5$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$ indicating clearly the equations of the asymptotes, coordinates of the turning point(s) and the intersections with the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 220" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (140, 115), scale 22px per unit -->
          <line x1="20" y1="115" x2="315" y2="115" stroke-width="1.2"/>
          <polyline points="310,112 315,115 310,118" fill="none" stroke-width="1.2"/>
          <text x="319" y="118" stroke="none" font-style="italic">x</text>
          <line x1="140" y1="205" x2="140" y2="15" stroke-width="1.2"/>
          <polyline points="137,20 140,15 143,20" fill="none" stroke-width="1.2"/>
          <text x="137" y="11" stroke="none" font-style="italic">y</text>
          <text x="145" y="127" stroke="none" font-style="italic">O</text>
          <text x="128" y="216" stroke="none" font-style="italic">x = 0</text>
          <text x="65" y="34" stroke="none" font-style="italic">y = f(x)</text>
          <!-- Horizontal asymptote y = 3 -> y = 115 - 66 = 49 -->
          <line x1="140" y1="49" x2="305" y2="49" stroke-dasharray="4,3" opacity="0.65"/>
          <text x="268" y="42" stroke="none" font-style="italic">y = 3</text>
          <!-- Oblique asymptote y = x + 3: passes through (-3,0)=(74,115), (0,3)=(140,49), (1.5,4.5)=(173,16) -->
          <line x1="22" y1="167" x2="173" y2="16" stroke-dasharray="4,3" opacity="0.65"/>
          <text x="176" y="25" stroke="none" font-style="italic">y = x + 3</text>
          <!-- Left branch: approaches y=x+3 from below as x->-inf, max at (-2,-2)=(96,159), goes to -inf as x->0- -->
          <path d="M 28,168 C 60,150 82,159 96,159 C 118,159 131,175 136,204" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
          <circle cx="96" cy="159" r="2.5" fill="#2c2925" stroke="none"/>
          <text x="86" y="148" stroke="none">(-2, -2)</text>
          <!-- Right branch: from +inf as x->0+, crosses (1,0)=(162,115), min at (1.5,-1)=(173,137), crosses (2.5,0)=(195,115), -> y=3 from below -->
          <path d="M 144,18 C 149,65 155,100 162,115 C 166,127 169,137 173,137 C 179,137 187,127 195,115 C 212,85 235,55 305,51" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
          <circle cx="173" cy="137" r="2.5" fill="#2c2925" stroke="none"/>
          <text x="163" y="152" stroke="none">(1.5, -1)</text>
          <text x="148" y="109" stroke="none">(1, 0)</text>
          <text x="197" y="128" stroke="none">(2.5, 0)</text>
        </svg>`,
        solution: "Since $\\mathrm{f}'(x)$ → $1$ as $x$ → $-\\text{∞}$, the oblique asymptote for $x < 0$ is $y = x + 3$ (not $y = -x - 3$).<br>Since $x = -2$ is a maximum point of $\\mathrm{f}$, the branch for $x < 0$ lies below the $x$-axis, giving maximum point $(-2, -2)$.<br>For $x > 0$, $x = 1.5$ is a minimum point, so the section between $(1, 0)$ and $(2.5, 0)$ lies below the $x$-axis, giving minimum point $(1.5, -1)$.<br>• Asymptotes: $x = 0$, $y = 3$, and $y = x + 3$ (note that $y = 3$ and $y = x + 3$ intersect on the $y$-axis at $(0, 3)$).<br>• Turning points: maximum $(-2, -2)$ and minimum $(1.5, -1)$.<br>• $x$-intercepts: $(1, 0)$ and $(2.5, 0)$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "On a copy of the graph of $y = |\\mathrm{f}(x)|$, sketch and label a line $y = kx + 3k$, where $k$ is a constant. Hence state the range of values of $k$ for which there is no real solution to the equation $|\\mathrm{f}(x)| = kx + 3k$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 210" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (150, 145), scale 20px per unit -->
          <line x1="20" y1="145" x2="295" y2="145" stroke-width="1.2"/>
          <polyline points="290,142 295,145 290,148" fill="none" stroke-width="1.2"/>
          <text x="299" y="148" stroke="none" font-style="italic">x</text>
          <line x1="150" y1="195" x2="150" y2="18" stroke-width="1.2"/>
          <polyline points="147,23 150,18 153,23" fill="none" stroke-width="1.2"/>
          <text x="147" y="13" stroke="none" font-style="italic">y</text>
          <text x="139" y="157" stroke="none" font-style="italic">O</text>
          <text x="220" y="34" stroke="none" font-style="italic">y = |f(x)|</text>
          <!-- Asymptotes -->
          <line x1="45" y1="100" x2="90" y2="145" stroke-dasharray="4,3" opacity="0.55"/>
          <text x="28" y="94" stroke="none" font-style="italic">y = -x - 3</text>
          <line x1="90" y1="145" x2="215" y2="20" stroke-dasharray="4,3" opacity="0.55"/>
          <text x="216" y="34" stroke="none" font-style="italic"></text>
          <line x1="150" y1="85" x2="290" y2="85" stroke-dasharray="4,3" opacity="0.55"/>
          <text x="252" y="79" stroke="none" font-style="italic">y = 3</text>
          <!-- Curve y = |f(x)| -->
          <path d="M 50,98 C 75,120 95,105 110,105 C 128,105 141,75 147,22" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
          <path d="M 153,22 C 157,85 162,128 170,145 C 174,132 177,125 180,125 C 185,125 193,133 200,145 C 212,118 228,90 290,87" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
          <!-- Pivot point (-3, 0) = (90, 145) -->
          <circle cx="90" cy="145" r="3" fill="#cf5652" stroke="none"/>
          <text x="72" y="160" stroke="none">(-3, 0)</text>
          <!-- Line y = k(x+3) with k = -0.5: passes through (90, 145), at x=-5.5 (40) -> y=1.25 (120), at x=6 (270) -> y=-4.5 (190) -->
          <line x1="30" y1="120" x2="275" y2="195" stroke="#cf5652" stroke-width="1.8"/>
          <text x="215" y="176" stroke="none" fill="#cf5652" font-style="italic">y = kx + 3k</text>
        </svg>`,
        solution: "Rewrite the line as $y = k(x + 3)$, which passes through the fixed point $(-3, 0)$ with gradient $k$.<br>Pivoting the line about $(-3, 0)$:<br>• If $k \\ge 0$, the line intersects the right branch of $y = |\\mathrm{f}(x)|$ (at $k = 0$, it meets $(1, 0)$ and $(2.5, 0)$).<br>• If $k < -1$, the line is steeper than the oblique asymptote $y = -x - 3$ and intersects the left branch.<br>• For $-1 \\le k < 0$, the line lies strictly below the curve (parallel to $y = -x - 3$ when $k = -1$) and does not intersect $y = |\\mathrm{f}(x)|$.<br>$$\\therefore -1 \\le k < 0$$"
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q6",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Parametric Equations", "Graphing Techniques", "Integration"],
    stem: "A curve $C$ is defined parametrically by $$x = a\\tan t, \\quad y = a\\sec^2 t \\sin t, \\quad -\\frac{\\pi}{4} < t < \\frac{\\pi}{4},$$ where $a$ is a positive constant.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that $\\frac{\\tan t}{\\sqrt{1 + \\tan^2 t}} = \\sin t$.",
        type: "self",
        solution: "Since $-\\frac{\\pi}{4} < t < \\frac{\\pi}{4}$, $\\sec t > 0$, so $\\sqrt{1 + \\tan^2 t} = \\sqrt{\\sec^2 t} = \\sec t$.<br>$$\\text{LHS} = \\frac{\\tan t}{\\sqrt{1 + \\tan^2 t}} = \\left(\\frac{\\sin t}{\\cos t}\\right)\\left(\\frac{1}{\\sec t}\\right) = \\left(\\frac{\\sin t}{\\cos t}\\right)(\\cos t) = \\sin t = \\text{RHS} \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "By using part (a) or otherwise, find the cartesian equation of $C$ in the form $y = \\mathrm{f}(x)$, simplifying your answer.",
        type: "self",
        solution: "From $x = a\\tan t$, we have $\\tan t = \\frac{x}{a}$. Since $-\\frac{\\pi}{4} < t < \\frac{\\pi}{4}$, $-1 < \\tan t < 1 \\implies -a < x < a$.<br>$$y = a\\sec^2 t \\sin t = a(1 + \\tan^2 t)\\left(\\frac{\\tan t}{\\sqrt{1 + \\tan^2 t}}\\right) = a\\tan t\\sqrt{1 + \\tan^2 t}$$<br>Substituting $\\tan t = \\frac{x}{a}$ and using $a > 0$:<br>$$y = a\\left(\\frac{x}{a}\\right)\\sqrt{1 + \\frac{x^2}{a^2}} = x\\frac{\\sqrt{x^2 + a^2}}{a} = \\frac{x\\sqrt{x^2 + a^2}}{a}, \\quad -a < x < a$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Show that $\\mathrm{f}(-x) = -\\mathrm{f}(x)$. Hence sketch $C$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 220" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (140, 110), a = 60px, sqrt(2)*a = 85px -->
          <line x1="25" y1="110" x2="255" y2="110" stroke-width="1.2"/>
          <polyline points="250,107 255,110 250,113" fill="none" stroke-width="1.2"/>
          <text x="259" y="113" stroke="none" font-style="italic">x</text>
          <line x1="140" y1="205" x2="140" y2="15" stroke-width="1.2"/>
          <polyline points="137,20 140,15 143,20" fill="none" stroke-width="1.2"/>
          <text x="137" y="11" stroke="none" font-style="italic">y</text>
          <text x="128" y="122" stroke="none" font-style="italic">O</text>
          <!-- Curve y = x*sqrt(x^2+a^2)/a from (-60, 195) to (60, 25) -->
          <path d="M 80,195 C 95,148 115,126 140,110 C 165,94 185,72 200,25" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Open endpoint circles -->
          <circle cx="80" cy="195" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="200" cy="25" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="2"/>
          <text x="206" y="29" stroke="none">(a, √2 a)</text>
          <text x="86" y="201" stroke="none">(-a, -√2 a)</text>
          <text x="40" y="65" stroke="none" font-style="italic">y = f(x)</text>
        </svg>`,
        solution: "$$\\mathrm{f}(-x) = \\frac{(-x)\\sqrt{(-x)^2 + a^2}}{a} = -\\frac{x\\sqrt{x^2 + a^2}}{a} = -\\mathrm{f}(x) \\quad (\\text{shown})$$<br>Since $\\mathrm{f}$ is an odd function, $C$ is symmetrical about the origin $O$. It passes through $(0, 0)$ with open endpoints at $(-a, -\\sqrt{2}a)$ and $(a, \\sqrt{2}a)$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Find the exact area of the region bounded by $C$, the $x$-axis and the lines $x = -A$ and $x = A$, where $0 < A < a$, leaving your answer in terms of $A$ and $a$.",
        type: "auto",
        mode: "expr",
        vars: { A: [1, 2, 3], a: [2, 3, 5] },
        answer: "(2/(3*a))*((A^2 + a^2)^(3/2) - a^3)",
        placeholder: "Expression in terms of A and a",
        solution: "By symmetry about the origin:<br>$$\\text{Area} = 2\\int_{0}^{A} \\frac{x\\sqrt{x^2 + a^2}}{a}\\,\\mathrm{d}x = \\frac{1}{a}\\int_{0}^{A} 2x(x^2 + a^2)^{\\frac{1}{2}}\\,\\mathrm{d}x$$<br>$$= \\frac{1}{a}\\left[\\frac{2}{3}(x^2 + a^2)^{\\frac{3}{2}}\\right]_{0}^{A}$$<br>$$= \\frac{2}{3a}\\left((A^2 + a^2)^{\\frac{3}{2}} - a^3\\right)$$"
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q7",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Functions", "Differentiation"],
    stem: "The function $\\mathrm{f}$ is defined by $$\\mathrm{f}: x \\mapsto \\mathrm{e}^x + \\frac{1}{2x+2} \\quad \\text{for } x \\in \\mathbb{R},\\; x \\ne -1.$$ A function $\\mathrm{g}$, defined for $x \\in \\mathbb{R},\\; x \\ge 1$, is such that $y$ → ∞ as $x$ increases. It is also given that $\\mathrm{g}(1) = -0.5$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Explain why the composite function $\\mathrm{fg}$ exists and find the corresponding range of $\\mathrm{fg}$.",
        type: "self",
        solution: "Since $\\mathrm{g}(1) = -0.5$ and $\\mathrm{g}(x)$ increases as $x$ increases for $x \\ge 1$, the minimum value of $\\mathrm{g}(x)$ is $-0.5$, so $\\mathrm{R}_{\\mathrm{g}} = [-0.5, \\text{∞})$ (or $[-0.5, a)$ for some $a > -0.5$).<br>Since $\\mathrm{D}_{\\mathrm{f}} = \\mathbb{R} \\setminus \\{-1\\}$, we have $\\mathrm{R}_{\\mathrm{g}} \\subseteq \\mathrm{D}_{\\mathrm{f}}$. Hence $\\mathrm{fg}$ exists.<br><br><em>Note:</em> In the official mark scheme, the second part (range of $\\mathrm{fg}$) was not assessed due to unintended ambiguity in the behaviour of $\\mathrm{g}$. For $\\mathrm{R}_{\\mathrm{g}} = [-0.5, \\text{∞})$, since $\\mathrm{f}$ has a local minimum at $(-0.213, 1.44)$, $\\mathrm{R}_{\\mathrm{fg}} = [1.44, \\text{∞})$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Given that $\\mathrm{fg}(x) = \\frac{x}{\\sqrt{\\mathrm{e}}} + \\frac{1}{2\\ln x + 1}$, find an expression for $\\mathrm{g}(x)$ in terms of $x$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 5] },
        answer: "ln(x) - 1/2",
        placeholder: "Expression in terms of x",
        solution: "$$\\mathrm{fg}(x) = \\mathrm{e}^{\\mathrm{g}(x)} + \\frac{1}{2\\mathrm{g}(x) + 2} = \\frac{x}{\\sqrt{\\mathrm{e}}} + \\frac{1}{2\\ln x + 1}$$<br>Comparing denominators: $2\\mathrm{g}(x) + 2 = 2\\ln x + 1 \\implies \\mathrm{g}(x) = \\ln x - \\frac{1}{2}$.<br>Check: $\\mathrm{e}^{\\ln x - \\frac{1}{2}} = \\frac{x}{\\sqrt{\\mathrm{e}}}$.<br>$$\\therefore \\mathrm{g}(x) = \\ln x - \\frac{1}{2}$$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "The domain of $\\mathrm{f}$ is now further restricted to $x > k$. State the least value of integer $k$ for which the function $\\mathrm{f}^{-1}$ exists.",
        type: "auto",
        mode: "number",
        answer: "0",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "For $\\mathrm{f}^{-1}$ to exist, $\\mathrm{f}$ must be one-to-one.<br>From the graphing calculator, the minimum point of $y = \\mathrm{f}(x)$ for $x > -1$ is at $(-0.213, 1.44)$.<br>Thus $\\mathrm{f}$ is strictly increasing for $x \\ge -0.213$. Since $k$ must be an integer, the least value of $k$ is $0$."
      },
      {
        label: "(d)(i)",
        marks: 2,
        prompt: "For the rest of the question, use the value of $k$ found in part (c). Without finding $\\mathrm{f}^{-1}$, sketch, on the same diagram, the graphs of $\\mathrm{f}$, $\\mathrm{f}^{-1}$ and $\\mathrm{ff}^{-1}$ showing clearly the relationships between the graphs.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 230" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (45, 195), scale 32px per unit; 1.5 units = 48px -->
          <line x1="25" y1="195" x2="255" y2="195" stroke-width="1.2"/>
          <polyline points="250,192 255,195 250,198" fill="none" stroke-width="1.2"/>
          <text x="259" y="198" stroke="none" font-style="italic">x</text>
          <line x1="45" y1="210" x2="45" y2="18" stroke-width="1.2"/>
          <polyline points="42,23 45,18 48,23" fill="none" stroke-width="1.2"/>
          <text x="42" y="13" stroke="none" font-style="italic">y</text>
          <text x="33" y="207" stroke="none" font-style="italic">O</text>
          <!-- Dashed reflection line y = x from (45,195) to (93,147) and guide lines -->
          <line x1="45" y1="195" x2="93" y2="147" stroke-dasharray="4,3" opacity="0.6"/>
          <line x1="45" y1="147" x2="93" y2="147" stroke-dasharray="3,3" opacity="0.45"/>
          <line x1="93" y1="195" x2="93" y2="147" stroke-dasharray="3,3" opacity="0.45"/>
          <!-- y = ff^-1(x) = x for x > 1.5: from (93,147) to (225,15) -->
          <line x1="93" y1="147" x2="225" y2="15" stroke="#cf5652" stroke-width="1.8"/>
          <circle cx="93" cy="147" r="3" fill="#fff" stroke="#cf5652" stroke-width="1.8"/>
          <text x="100" y="149" stroke="none">(1.5, 1.5)</text>
          <text x="200" y="65" stroke="none" fill="#cf5652" font-style="italic">y = ff⁻¹(x)</text>
          <!-- y = f(x) for x > 0: starts at (0, 1.5)=(45, 147), (1, 2.97)=(77, 100), (1.7, 5.65)=(100, 15) -->
          <path d="M 45,147 C 62,135 80,100 100,18" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="45" cy="147" r="3" fill="#fff" stroke="#4a8fe7" stroke-width="1.8"/>
          <text x="24" y="150" stroke="none">1.5</text>
          <text x="103" y="34" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>
          <!-- y = f^-1(x) for x > 1.5: reflection of f(x) across y=x, from (93,195) to (222,140) -->
          <path d="M 93,195 C 105,178 140,160 222,140" fill="none" stroke="#4ca885" stroke-width="2"/>
          <circle cx="93" cy="195" r="3" fill="#fff" stroke="#4ca885" stroke-width="1.8"/>
          <text x="84" y="210" stroke="none">1.5</text>
          <text x="190" y="132" stroke="none" fill="#4ca885" font-style="italic">y = f⁻¹(x)</text>
        </svg>`,
        solution: "• $y = \\mathrm{f}(x)$ is defined for $x > 0$ with open endpoint at $(0, 1.5)$, increasing rapidly.<br>• $y = \\mathrm{f}^{-1}(x)$ is the reflection of $y = \\mathrm{f}(x)$ in the line $y = x$, defined for $x > 1.5$ with open endpoint at $(1.5, 0)$.<br>• $y = \\mathrm{ff}^{-1}(x) = x$ has domain $\\mathrm{D}_{\\mathrm{ff}^{-1}} = \\mathrm{D}_{\\mathrm{f}^{-1}} = \\mathrm{R}_{\\mathrm{f}} = (1.5, \\text{∞})$, so it is the ray $y = x$ starting from the open circle $(1.5, 1.5)$."
      },
      {
        label: "(d)(ii)",
        marks: 3,
        prompt: "Without finding $\\mathrm{f}^{-1}$, find the gradient of the tangent to the graph of $y = \\mathrm{f}^{-1}(x)$ at $x = \\mathrm{e} + \\frac{1}{4}$.",
        type: "auto",
        mode: "number",
        answer: "8/(8*e - 1)",
        placeholder: "Exact or 3 s.f.",
        solution: "Observe that $\\mathrm{f}(1) = \\mathrm{e}^1 + \\frac{1}{2(1)+2} = \\mathrm{e} + \\frac{1}{4}$.<br>Thus $\\left(1, \\mathrm{e} + \\frac{1}{4}\\right)$ lies on $y = \\mathrm{f}(x)$, and $\\left(\\mathrm{e} + \\frac{1}{4}, 1\\right)$ lies on $y = \\mathrm{f}^{-1}(x)$.<br><br>Differentiating $\\mathrm{f}(x) = \\mathrm{e}^x + \\frac{1}{2x+2}$:<br>$$\\mathrm{f}'(x) = \\mathrm{e}^x - \\frac{2}{(2x+2)^2}$$<br>At $x = 1$, $\\mathrm{f}'(1) = \\mathrm{e} - \\frac{2}{16} = \\mathrm{e} - \\frac{1}{8} = \\frac{8\\mathrm{e} - 1}{8}$.<br>Therefore, the gradient of $y = \\mathrm{f}^{-1}(x)$ at $x = \\mathrm{e} + \\frac{1}{4}$ is:<br>$$\\frac{1}{\\mathrm{f}'(1)} = \\frac{8}{8\\mathrm{e} - 1} \\approx 0.386 \\text{ (to 3 s.f.)}$$"
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q8",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Complex Numbers", "Argand Diagram"],
    stem: "A complex number $z$ varies with $t$ such that $$z = 2\\cos t + \\mathrm{i}(3\\sin t), \\quad \\text{where } 0 \\le t < 2\\pi.$$",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "By taking $x = \\text{Re}(z)$ and $y = \\text{Im}(z)$, sketch on an Argand diagram the curve that shows the positions of the points representing the complex number $z$. Find the cartesian equation of this curve.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 220" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (120, 110), rx=50 (2 units), ry=75 (3 units) -->
          <line x1="25" y1="110" x2="215" y2="110" stroke-width="1.2"/>
          <polyline points="210,107 215,110 210,113" fill="none" stroke-width="1.2"/>
          <text x="219" y="113" stroke="none" font-style="italic">Re</text>
          <line x1="120" y1="205" x2="120" y2="15" stroke-width="1.2"/>
          <polyline points="117,20 120,15 123,20" fill="none" stroke-width="1.2"/>
          <text x="126" y="20" stroke="none" font-style="italic">Im</text>
          <ellipse cx="120" cy="110" rx="50" ry="75" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <text x="174" y="124" stroke="none">2</text>
          <text x="55" y="124" stroke="none">-2</text>
          <text x="125" y="32" stroke="none">3</text>
          <text x="125" y="196" stroke="none">-3</text>
        </svg>`,
        solution: "Since $x = 2\\cos t$ and $y = 3\\sin t$, we have $\\cos t = \\frac{x}{2}$ and $\\sin t = \\frac{y}{3}$.<br>Using $\\cos^2 t + \\sin^2 t = 1$:<br>$$\\left(\\frac{x}{2}\\right)^2 + \\left(\\frac{y}{3}\\right)^2 = 1 \\quad \\left(\\text{or } \\frac{x^2}{4} + \\frac{y^2}{9} = 1\\right)$$<br>This is an ellipse centred at the origin with horizontal semi-axis $2$ and vertical semi-axis $3$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Two complex numbers $z_1$ and $z_2$ for two distinct values of $t$ are such that $|z_1| = |z_2|$ and $0 < \\arg(z_1) < \\frac{\\pi}{2}$. By referring to the Argand diagram in part (a), find the possible values of $\\arg(z_1 + z_2)$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 220" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <line x1="25" y1="110" x2="215" y2="110" stroke-width="1.2"/>
          <polyline points="210,107 215,110 210,113" fill="none" stroke-width="1.2"/>
          <text x="219" y="113" stroke="none" font-style="italic">Re</text>
          <line x1="120" y1="205" x2="120" y2="15" stroke-width="1.2"/>
          <polyline points="117,20 120,15 123,20" fill="none" stroke-width="1.2"/>
          <text x="126" y="20" stroke="none" font-style="italic">Im</text>
          <ellipse cx="120" cy="110" rx="50" ry="75" fill="none" stroke="#4a8fe7" stroke-width="1.6"/>
          <!-- z1 at (120+35, 110-53) = (155, 57) -->
          <line x1="120" y1="110" x2="155" y2="57" stroke="#2c2925" stroke-width="1.5"/>
          <circle cx="155" cy="57" r="2.8" fill="#4a8fe7" stroke="none"/>
          <text x="160" y="54" stroke="none" font-style="italic">z₁</text>
          <!-- (1) z2 at (85, 57) -->
          <line x1="120" y1="110" x2="85" y2="57" stroke="#cf5652" stroke-width="1.4" stroke-dasharray="3,2"/>
          <circle cx="85" cy="57" r="2.8" fill="#cf5652" stroke="none"/>
          <text x="53" y="54" stroke="none" fill="#cf5652">(1) z₂</text>
          <!-- (2) z2 at (85, 163) -->
          <line x1="120" y1="110" x2="85" y2="163" stroke="#cf5652" stroke-width="1.4" stroke-dasharray="3,2"/>
          <circle cx="85" cy="163" r="2.8" fill="#cf5652" stroke="none"/>
          <text x="53" y="175" stroke="none" fill="#cf5652">(2) z₂</text>
          <!-- (3) z2 at (155, 163) -->
          <line x1="120" y1="110" x2="155" y2="163" stroke="#cf5652" stroke-width="1.4" stroke-dasharray="3,2"/>
          <circle cx="155" cy="163" r="2.8" fill="#cf5652" stroke="none"/>
          <text x="158" y="175" stroke="none" fill="#cf5652">(3) z₂</text>
        </svg>`,
        solution: "Since $z_1 = a + b\\mathrm{i}$ ($a, b > 0$) lies in the first quadrant on the ellipse and $|z_1| = |z_2|$, by symmetry of the ellipse there are 3 possible positions for $z_2$:<br>(1) $z_2 = -a + b\\mathrm{i}$: $z_1 + z_2 = 2b\\mathrm{i} \\implies \\arg(z_1 + z_2) = \\frac{\\pi}{2}$.<br>(2) $z_2 = -a - b\\mathrm{i} = -z_1$: $z_1 + z_2 = 0 \\implies \\arg(z_1 + z_2)$ is <strong>undefined</strong>.<br>(3) $z_2 = a - b\\mathrm{i}$: $z_1 + z_2 = 2a \\implies \\arg(z_1 + z_2) = 0$.<br>$$\\therefore \\arg(z_1 + z_2) \\text{ is either undefined, } 0, \\text{ or } \\frac{\\pi}{2}.$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "It is given further that $z_1$ and $z_2$ are roots to the quadratic equation $z^2 + \\alpha z + \\beta = 0$. Explain whether it is necessary for $\\alpha$ to be real.",
        type: "self",
        solution: "Since $z_1$ and $z_2$ are roots of $z^2 + \\alpha z + \\beta = 0$, we have $(z - z_1)(z - z_2) = 0 \\implies z^2 - (z_1 + z_2)z + z_1 z_2 = 0$.<br>Comparing coefficients, $\\alpha = -(z_1 + z_2)$.<br>If $z_2$ is in position (1), i.e., $z_1 = a + b\\mathrm{i}$ and $z_2 = -a + b\\mathrm{i}$ ($b > 0$), then $\\alpha = -(2b\\mathrm{i}) = -2b\\mathrm{i}$, which is purely imaginary (not real).<br>Hence, it is <strong>not necessary</strong> for $\\alpha$ to be real."
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "Given that $\\alpha$ is not real and $|z_1| = |z_2| = \\frac{\\sqrt{26}}{2}$, find the values for $\\alpha$ and $\\beta$.",
        type: "self",
        solution: "Since $|z_1| = \\frac{\\sqrt{26}}{2}$, we have:<br>$$(2\\cos t)^2 + (3\\sin t)^2 = \\frac{26}{4} = \\frac{13}{2}$$<br>$$4(1 - \\sin^2 t) + 9\\sin^2 t = \\frac{13}{2} \\implies 5\\sin^2 t = \\frac{5}{2} \\implies \\sin^2 t = \\frac{1}{2}$$<br>Since $z_1$ is in the 1st quadrant, $t = \\frac{\\pi}{4}$, so:<br>$$z_1 = 2\\left(\\frac{\\sqrt{2}}{2}\\right) + 3\\left(\\frac{\\sqrt{2}}{2}\\right)\\mathrm{i} = \\sqrt{2} + \\frac{3\\sqrt{2}}{2}\\mathrm{i}$$<br>Since $\\alpha$ is not real, $z_2$ must be in the 2nd quadrant: $z_2 = -\\sqrt{2} + \\frac{3\\sqrt{2}}{2}\\mathrm{i}$.<br>Therefore:<br>$$\\alpha = -(z_1 + z_2) = -3\\sqrt{2}\\,\\mathrm{i}$$<br>$$\\beta = z_1 z_2 = \\left(\\sqrt{2} + \\frac{3\\sqrt{2}}{2}\\mathrm{i}\\right)\\left(-\\sqrt{2} + \\frac{3\\sqrt{2}}{2}\\mathrm{i}\\right) = -2 - \\frac{9}{2} = -\\frac{13}{2}$$"
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q9",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Vectors", "Lines and Planes"],
    stem: "The point $A$ has coordinates $(1, -2, 4)$ and the plane $\\pi_1$ has equation $2x - y + 2z = 5$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the exact shortest distance between $A$ and $\\pi_1$.",
        type: "auto",
        mode: "number",
        answer: "7/3",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Using the point-to-plane distance formula:<br>$$\\text{Shortest distance} = \\frac{\\left|5 - \\begin{pmatrix} 1 \\\\ -2 \\\\ 4 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 2 \\end{pmatrix}\\right|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|5 - (2 + 2 + 8)|}{\\sqrt{9}} = \\frac{|-7|}{3} = \\frac{7}{3} \\text{ units}$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "The plane $\\pi_2$ has equation $x + 3y - az = 3$, where $a$ is a constant. Find the vector equation of line $l$, which is the line of intersection of $\\pi_1$ and $\\pi_2$, in terms of $a$.",
        type: "self",
        solution: "Direction vector of $l$ is parallel to $\\mathbf{n}_1 \\times \\mathbf{n}_2$:<br>$$\\begin{pmatrix} 2 \\\\ -1 \\\\ 2 \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ 3 \\\\ -a \\end{pmatrix} = \\begin{pmatrix} a - 6 \\\\ 2a + 2 \\\\ 7 \\end{pmatrix}$$<br>To find a point on $l$, let $z = 0$:<br>$2x - y = 5$ and $x + 3y = 3$.<br>Solving simultaneously gives $x = \\frac{18}{7}$ and $y = \\frac{1}{7}$.<br>Therefore, the vector equation of $l$ is:<br>$$l: \\mathbf{r} = \\begin{pmatrix} \\frac{18}{7} \\\\ \\frac{1}{7} \\\\ 0 \\end{pmatrix} + \\lambda \\begin{pmatrix} a - 6 \\\\ 2a + 2 \\\\ 7 \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The plane $\\pi_3$ has equation $bx - 2y + 4z = 3$, where $b$ is a constant. Show that $(a - 6)(b - 4) = 0$ if $l$ is parallel to $\\pi_3$.",
        type: "self",
        solution: "If $l$ is parallel to $\\pi_3$, then the direction vector of $l$ is perpendicular to the normal vector of $\\pi_3$:<br>$$\\begin{pmatrix} a - 6 \\\\ 2a + 2 \\\\ 7 \\end{pmatrix} \\cdot \\begin{pmatrix} b \\\\ -2 \\\\ 4 \\end{pmatrix} = 0$$<br>$$b(a - 6) - 2(2a + 2) + 28 = 0$$<br>$$ab - 6b - 4a + 24 = 0$$<br>$$b(a - 6) - 4(a - 6) = 0$$<br>$$(a - 6)(b - 4) = 0 \\quad (\\text{shown})$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "State the conditions that $a$ and $b$ must follow for the three planes to form a triangular prism, where all the planes are non-parallel and they do not have any point in common. Justify your answer.",
        type: "self",
        solution: "For the three planes to form a triangular prism:<br>(1) The line of intersection $l$ of $\\pi_1$ and $\\pi_2$ must be parallel to $\\pi_3$, so from (c): $a = 6$ or $b = 4$.<br>(2) $l$ must not lie on $\\pi_3$, so the point $\\left(\\frac{18}{7}, \\frac{1}{7}, 0\\right)$ on $l$ does not satisfy $\\pi_3$:<br>$$\\frac{18}{7}b - \\frac{2}{7} + 0 \\ne 3 \\implies 18b \\ne 23 \\implies b \\ne \\frac{23}{18}$$<br>(3) $\\pi_1$ is not parallel to $\\pi_3$: $\\begin{pmatrix} 2 \\\\ -1 \\\\ 2 \\end{pmatrix} \\ne m\\begin{pmatrix} b \\\\ -2 \\\\ 4 \\end{pmatrix}$. Comparing $y$ and $z$ components gives $m = \\frac{1}{2}$, so $2 \\ne \\frac{1}{2}b \\implies b \\ne 4$.<br>Combining with (1), we must have $a = 6$.<br>(4) $\\pi_2$ is not parallel to $\\pi_3$: $\\begin{pmatrix} 1 \\\\ 3 \\\\ -6 \\end{pmatrix} \\ne k\\begin{pmatrix} b \\\\ -2 \\\\ 4 \\end{pmatrix}$. Comparing $y$ and $z$ components gives $k = -\\frac{3}{2}$, so $1 \\ne -\\frac{3}{2}b \\implies b \\ne -\\frac{2}{3}$.<br><br>Therefore, $a = 6$ and $b \\in \\mathbb{R} \\setminus \\left\\{-\\frac{2}{3}, \\frac{23}{18}, 4\\right\\}$."
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q10",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Integration", "Volume of Revolution", "Area Under Curve"],
    diagramSvg: `<svg viewBox="0 0 340 190" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
      <!-- Axes -->
      <line x1="35" y1="150" x2="315" y2="150" stroke-width="1.2"/>
      <polyline points="310,147 315,150 310,153" fill="none" stroke-width="1.2"/>
      <text x="319" y="153" stroke="none" font-style="italic">x</text>
      <line x1="45" y1="165" x2="45" y2="15" stroke-width="1.2"/>
      <polyline points="42,20 45,15 48,20" fill="none" stroke-width="1.2"/>
      <text x="33" y="22" stroke="none" font-style="italic">y</text>
      <text x="33" y="162" stroke="none" font-style="italic">O</text>
      <!-- Curve y = f(x) -->
      <path d="M 45,150 C 90,100 155,55 295,46" fill="none" stroke="#4a8fe7" stroke-width="2"/>
      <text x="242" y="38" stroke="none" font-style="italic">y = f(x)</text>
      <!-- Inscribed rectangles between x=1 (85) and x=3 (265) -->
      <rect x="85" y="112" width="28" height="38" fill="rgba(91,155,213,0.14)" stroke="#2c2925" stroke-width="1"/>
      <rect x="113" y="92" width="28" height="58" fill="rgba(91,155,213,0.14)" stroke="#2c2925" stroke-width="1"/>
      <text x="165" y="115" stroke="none" font-size="14">…</text>
      <rect x="209" y="57" width="28" height="93" fill="rgba(91,155,213,0.14)" stroke="#2c2925" stroke-width="1"/>
      <rect x="237" y="51" width="28" height="99" fill="rgba(91,155,213,0.14)" stroke="#2c2925" stroke-width="1"/>
      <!-- Labels -->
      <text x="82" y="164" stroke="none">1</text>
      <text x="103" y="164" stroke="none">1+h</text>
      <text x="132" y="164" stroke="none">1+2h</text>
      <text x="168" y="177" stroke="none" font-size="9.5">1+(n-2)h</text>
      <text x="225" y="177" stroke="none" font-size="9.5">1+(n-1)h</text>
      <text x="262" y="164" stroke="none">3</text>
    </svg>`,
    stem: "The diagram above shows a sketch of the graph of $y = \\mathrm{f}(x)$ for $x \\ge 0$. There are $n$ rectangles each of width $h$ drawn under the curve for $1 \\le x \\le 3$. Each rectangle when rotated through $2\\pi$ radians about the $x$-axis, will result in a cylindrical disc. The total volume of the $n$ cylindrical discs $V_1$, can be used to estimate the volume $V$, which is the actual volume generated when the region bounded by the curve, the lines $x = 1$ and $x = 3$, and the $x$-axis is rotated through $2\\pi$ radians about the $x$-axis.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that $V_1$, the total volume of the $n$ cylindrical discs, is given by $$V_1 = \\pi h \\sum_{r=0}^{n-1} \\left[\\mathrm{f}(1+rh)\\right]^2.$$ State the value of $h$ in terms of $n$.",
        type: "self",
        solution: "Each cylindrical disc has height $h$ and radius $\\mathrm{f}(1 + rh)$ for $r = 0, 1, 2, \\dots, n-1$.<br>Volume of a disc $= \\pi (\\text{radius})^2 (\\text{height})$.<br>$$V_1 = \\pi h [\\mathrm{f}(1)]^2 + \\pi h [\\mathrm{f}(1+h)]^2 + \\dots + \\pi h [\\mathrm{f}(1+(n-1)h)]^2$$<br>$$= \\pi h \\left([\\mathrm{f}(1)]^2 + [\\mathrm{f}(1+h)]^2 + \\dots + [\\mathrm{f}(1+(n-1)h)]^2\\right)$$<br>$$= \\pi h \\sum_{r=0}^{n-1} [\\mathrm{f}(1+rh)]^2 \\quad (\\text{shown})$$<br>Since the interval $[1, 3]$ is divided into $n$ equal subintervals:<br>$$h = \\frac{3 - 1}{n} = \\frac{2}{n}$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "From the above diagram, it can be observed that $V_1 < V$. Write down $V_2$, a similar expression as $V_1$ where $V_2 > V$.",
        type: "self",
        solution: "Using the right endpoints of each subinterval (circumscribed rectangles) so that the discs overestimate $V$:<br>$$V_2 = \\pi h \\sum_{r=1}^{n} \\left[\\mathrm{f}(1+rh)\\right]^2$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "It is now given that $\\mathrm{f}(x) = \\frac{x^2}{\\sqrt{1+\\mathrm{e}^x}}$ for $x \\ge 0$. Find the limit of $V_1$ as $n$ → ∞.",
        type: "auto",
        mode: "number",
        answer: "12.291",
        placeholder: "3 s.f.",
        solution: "As $n$ → ∞, $V_1$ approaches the exact volume of revolution $V$:<br>$$V = \\pi \\int_{1}^{3} \\left(\\frac{x^2}{\\sqrt{1+\\mathrm{e}^x}}\\right)^2 \\mathrm{d}x = \\pi \\int_{1}^{3} \\frac{x^4}{1+\\mathrm{e}^x}\\,\\mathrm{d}x$$<br>Using a graphing calculator:<br>$$V = 12.291 \\approx 12.3 \\text{ units}^3 \\text{ (to 3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "Find the area of the region bounded by $y = \\mathrm{f}(x)$ and another curve with equation $(x-1)^2 + (y-3)^2 = 9$, for $y \\le 3$.",
        type: "auto",
        mode: "number",
        answer: "3.0138",
        answers: ["3.0138", "3.01"],
        placeholder: "3 s.f.",
        solutionSvg: `<svg viewBox="0 0 300 180" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (55, 145), scale 45px per unit in x, 35px per unit in y -->
          <line x1="25" y1="145" x2="275" y2="145" stroke-width="1.2"/>
          <polyline points="270,142 275,145 270,148" fill="none" stroke-width="1.2"/>
          <text x="279" y="148" stroke="none" font-style="italic">x</text>
          <line x1="55" y1="160" x2="55" y2="15" stroke-width="1.2"/>
          <polyline points="52,20 55,15 58,20" fill="none" stroke-width="1.2"/>
          <text x="42" y="20" stroke="none" font-style="italic">y</text>
          <!-- Lower semicircle (x-1)^2+(y-3)^2=9, center at (100, 40), rx=135? Wait keep uniform scale 36px/unit! -->
          <!-- Origin at (55, 145): (1,3) is (91, 37), radius 3 = 108px -> wait too tall; use 30px/unit: (1,3)=(85,55), R=90 -> x from -5 to 175, y from 55 to 145 -->
          <path d="M 65,143 C 95,120 130,88 171,79 C 165,105 135,145 85,145 C 77,145 70,144 65,143 Z" fill="rgba(91,155,213,0.25)" stroke="none"/>
          <!-- Lower semicircle arc (center (85,55), r=90) from x=-2 (-5,55) to x=4 (175,55) -->
          <path d="M 35,129 A 90,90 0 0 0 175,55" fill="none" stroke="#cf5652" stroke-width="1.6"/>
          <!-- Curve y = f(x) -->
          <path d="M 55,145 C 80,140 120,90 171,79 C 205,74 235,77 265,88" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Intersections: x=0.33838 -> 55+10=65, y=0.075 -> 143; x=3.8744 -> 55+116=171, y=2.14 -> 81 -->
          <line x1="65" y1="143" x2="65" y2="145" stroke-dasharray="3,2"/>
          <line x1="171" y1="79" x2="171" y2="145" stroke-dasharray="3,2" opacity="0.65"/>
          <text x="53" y="160" stroke="none" font-size="9.5">0.33838</text>
          <text x="155" y="160" stroke="none" font-size="9.5">3.8744</text>
          <text x="215" y="68" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>
          <text x="180" y="112" stroke="none" fill="#cf5652" font-size="9.5" font-style="italic">y = 3 - √(9-(x-1)²)</text>
        </svg>`,
        solution: "From $(x - 1)^2 + (y - 3)^2 = 9$ and $y \\le 3$:<br>$$y = 3 - \\sqrt{9 - (x - 1)^2}$$<br>Using a graphing calculator, the two curves intersect at $x = 0.33838$ and $x = 3.8744$ (5 s.f.).<br>In this interval, $y = \\mathrm{f}(x)$ lies above the lower semicircle, so:<br>$$\\text{Area} = \\int_{0.33838}^{3.8744} \\left[\\frac{x^2}{\\sqrt{1+\\mathrm{e}^x}} - \\left(3 - \\sqrt{9 - (x - 1)^2}\\right)\\right]\\mathrm{d}x$$<br>$$= 3.01 \\text{ units}^2 \\text{ (to 3 s.f.)}$$"
      }
    ]
  },

  {
    id: "DHS-2025-P1-Q11",
    year: 2025,
    school: "DHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Differentiation", "Maxima and Minima", "Rates of Change"],
    diagramSvg: `<svg viewBox="0 0 460 190" width="460" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Left: Tank (cylinder + circular cover + hemispherical base) -->
      <!-- Top ellipse -->
      <ellipse cx="110" cy="40" rx="45" ry="16" fill="none" stroke-width="1.5"/>
      <!-- Vertical sides -->
      <line x1="65" y1="40" x2="65" y2="115" stroke-width="1.5"/>
      <line x1="155" y1="40" x2="155" y2="115" stroke-width="1.5"/>
      <!-- Bottom cylinder rim (dashed back, solid front) -->
      <path d="M 65,115 A 45,16 0 0 1 155,115" fill="none" stroke-dasharray="4,3" opacity="0.6"/>
      <path d="M 65,115 A 45,16 0 0 0 155,115" fill="none" stroke-width="1.5"/>
      <!-- Hemispherical base -->
      <path d="M 65,115 A 45,45 0 0 0 155,115" fill="none" stroke-width="1.5"/>
      <!-- Radius arrow -->
      <line x1="110" y1="115" x2="68" y2="115" stroke-width="1.2"/>
      <polyline points="73,112 68,115 73,118" fill="none" stroke-width="1.2"/>
      <text x="86" y="111" stroke="none" font-style="italic">r</text>
      <!-- Length L arrow -->
      <line x1="48" y1="42" x2="48" y2="113" stroke-width="1.1"/>
      <polyline points="45,47 48,42 51,47" fill="none" stroke-width="1.1"/>
      <polyline points="45,108 48,113 51,108" fill="none" stroke-width="1.1"/>
      <text x="33" y="82" stroke="none" font-style="italic">L</text>

      <!-- Right: Hemispherical bottom water cross-section -->
      <line x1="260" y1="70" x2="420" y2="70" stroke-width="1.6"/>
      <!-- Semicircle radius 80 centered at (340, 70) -->
      <path d="M 260,70 A 80,80 0 0 0 420,70" fill="none" stroke-width="1.6"/>
      <!-- Water level at y = 115 (h = 35px, 15-h = 45px, x = sqrt(80^2-45^2)=66px) -->
      <path d="M 274,115 L 406,115 A 80,80 0 0 1 274,115 Z" fill="rgba(91,155,213,0.22)" stroke="none"/>
      <line x1="274" y1="115" x2="406" y2="115" stroke="#4a8fe7" stroke-width="1.5"/>
      <!-- Dashed vertical centerline -->
      <line x1="340" y1="70" x2="340" y2="150" stroke-dasharray="4,3" opacity="0.65"/>
      <!-- Labels -->
      <text x="295" y="64" stroke="none">15</text>
      <text x="375" y="64" stroke="none">15</text>
      <text x="303" y="110" stroke="none" font-style="italic">x</text>
      <text x="346" y="137" stroke="none" font-style="italic">h</text>
    </svg>`,
    stem: "[The surface area and volume of a sphere are given by $4\\pi r^2$ and $\\frac{4}{3}\\pi r^3$ respectively.]<br><br>An aquarist who has a fixed budget of SGD $k$ wants to make a goldfish sanctuary. His design of the tank consists of a circular cover, a cylinder of length $L\\text{ cm}$ and a hemispherical base of radius $r\\text{ cm}$ neatly fitted together. The costs of the material per $\\text{cm}^2$ used for the cover, the cylindrical surface and hemispherical base are SGD 20, SGD 10 and SGD 30 respectively. Assume that the tank is made of material with negligible thickness.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Show that the volume of the tank is $V\\text{ cm}^3$, where $$V = \\frac{k}{20}r - \\frac{10}{3}\\pi r^3.$$",
        type: "self",
        solution: "Total cost of materials:<br>$$k = 2\\pi r^2 (30) + 2\\pi r L (10) + \\pi r^2 (20) = 80\\pi r^2 + 20\\pi r L$$<br>$$L = \\frac{k - 80\\pi r^2}{20\\pi r} = \\frac{k}{20\\pi r} - 4r$$<br>Total volume of the tank:<br>$$V = \\frac{2}{3}\\pi r^3 + \\pi r^2 L = \\frac{2}{3}\\pi r^3 + \\pi r^2\\left(\\frac{k}{20\\pi r} - 4r\\right)$$<br>$$= \\frac{2}{3}\\pi r^3 + \\frac{k}{20}r - 4\\pi r^3 = \\frac{k}{20}r - \\frac{10}{3}\\pi r^3 \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "As $r$ varies, find the cost of the material used to make the hemispherical base in terms of $k$ when $V$ is at its maximum value. You need to show that $V$ is a maximum.",
        type: "self",
        solution: "For stationary value of $V$:<br>$$\\frac{\\mathrm{d}V}{\\mathrm{d}r} = \\frac{k}{20} - 10\\pi r^2 = 0 \\implies r^2 = \\frac{k}{200\\pi} \\implies r = \\sqrt{\\frac{k}{200\\pi}} \\quad (\\text{since } r > 0)$$<br>Second derivative test:<br>$$\\frac{\\mathrm{d}^2 V}{\\mathrm{d}r^2} = -20\\pi r < 0 \\quad (\\text{since } r > 0)$$<br>Therefore, $V$ is a maximum.<br><br>Cost of material for the hemispherical base:<br>$$2\\pi r^2 (30) = 60\\pi \\left(\\frac{k}{200\\pi}\\right) = \\frac{3k}{10} \\text{ dollars (or SGD } \\frac{3k}{10}\\text{)}$$"
      },
      {
        label: "(c)(i)",
        marks: 3,
        prompt: "The aquarist has fixed the radius of the cylinder to be $15\\text{ cm}$. Initially, there is some water in the hemispherical part of the tank. However, due to a defect in the tank, water is leaking at a constant rate of $20\\text{ cm}^3$ per minute.<br><br>The depth of the water at the hemispherical bottom is denoted by $h\\text{ cm}$, and the radius of the water surface is $x\\text{ cm}$. The volume of water in the hemispherical bottom is given by $W\\text{ cm}^3$, where $W = \\frac{\\pi h(3x^2 + h^2)}{6}$.<br><br>By formulating a relationship between $x$ and $h$, find, when $h = 3$, the rate of change of the depth of water.",
        type: "auto",
        mode: "number",
        answer: "-20/(81*pi)",
        signHint: true,
        placeholder: "Exact or 3 s.f. (cm/min)",
        solution: "By Pythagoras' Theorem on the right-angled triangle with hypotenuse $15$ and legs $x$ and $15 - h$:<br>$$x^2 + (15 - h)^2 = 15^2 \\implies x^2 = 15^2 - (15 - h)^2 = 30h - h^2$$<br>Substituting into $W$:<br>$$W = \\frac{\\pi h(3(30h - h^2) + h^2)}{6} = \\frac{\\pi(90h^2 - 2h^3)}{6} = \\frac{\\pi(45h^2 - h^3)}{3}$$<br>Differentiating with respect to $h$:<br>$$\\frac{\\mathrm{d}W}{\\mathrm{d}h} = \\frac{\\pi(90h - 3h^2)}{3} = \\pi(30h - h^2)$$<br>Since water is leaking at $20\\text{ cm}^3/\\text{min}$, $\\frac{\\mathrm{d}W}{\\mathrm{d}t} = -20$.<br>At $h = 3$:<br>$$\\frac{\\mathrm{d}h}{\\mathrm{d}t} = \\frac{\\mathrm{d}W/\\mathrm{d}t}{\\mathrm{d}W/\\mathrm{d}h} = \\frac{-20}{\\pi(30(3) - 3^2)} = -\\frac{20}{81\\pi} \\approx -0.0786\\text{ cm/min (to 3 s.f.)}$$"
      },
      {
        label: "(c)(ii)",
        marks: 3,
        prompt: "Find, when $h = 3$, the rate of change of the radius of the water surface.",
        type: "auto",
        mode: "number",
        answer: "-80/(243*pi)",
        signHint: true,
        placeholder: "Exact or 3 s.f. (cm/min)",
        solution: "Since $x^2 = 30h - h^2$ and $x > 0$, differentiating with respect to $h$:<br>$$2x\\frac{\\mathrm{d}x}{\\mathrm{d}h} = 30 - 2h \\implies \\frac{\\mathrm{d}x}{\\mathrm{d}h} = \\frac{15 - h}{\\sqrt{30h - h^2}}$$<br>At $h = 3$, $\\frac{\\mathrm{d}x}{\\mathrm{d}h} = \\frac{15 - 3}{\\sqrt{90 - 9}} = \\frac{12}{9} = \\frac{4}{3}$.<br>Therefore:<br>$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{\\mathrm{d}x}{\\mathrm{d}h} \\times \\frac{\\mathrm{d}h}{\\mathrm{d}t} = \\frac{4}{3} \\times \\left(-\\frac{20}{81\\pi}\\right) = -\\frac{80}{243\\pi} \\approx -0.105\\text{ cm/min (to 3 s.f.)}$$"
      }
    ]
  }
]);
