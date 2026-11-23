window.registerQuestions([
  // ==================== Q1 ====================
  {
    id: "MI-2025-P1-Q1",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Maclaurin Series"],
    stem: "In this question you may use expansions from the List of Formulae (MF27).<br>It is given that $\\mathrm{f}(\\theta) = \\frac{1}{3 - \\sin\\theta}$, for $\\theta > 0$.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Show that when $\\theta$ is sufficiently small, $\\mathrm{f}(\\theta) \\approx p + q\\theta + r\\theta^2$, where $p$, $q$ and $r$ are exact constants to be determined.",
        type: "self",
        solution:
          "Since $\\theta$ is sufficiently small, $\\sin\\theta \\approx \\theta$.<br><br>" +
          "<strong>Method 1 (Binomial Series):</strong><br>" +
          "$\\mathrm{f}(\\theta) \\approx \\frac{1}{3 - \\theta} = (3 - \\theta)^{-1} = \\frac{1}{3}\\left(1 - \\frac{\\theta}{3}\\right)^{-1}$<br>" +
          "$= \\frac{1}{3}\\left[1 + (-1)\\left(-\\frac{\\theta}{3}\\right) + \\frac{(-1)(-2)}{2!}\\left(-\\frac{\\theta}{3}\\right)^2 + \\dots\\right]$<br>" +
          "$= \\frac{1}{3}\\left(1 + \\frac{1}{3}\\theta + \\frac{1}{9}\\theta^2 + \\dots\\right)$<br>" +
          "$\\approx \\frac{1}{3} + \\frac{1}{9}\\theta + \\frac{1}{27}\\theta^2$ (shown)<br><br>" +
          "$\\therefore p = \\frac{1}{3}$, $q = \\frac{1}{9}$ and $r = \\frac{1}{27}$."
      }
    ]
  },

  // ==================== Q2 ====================
  {
    id: "MI-2025-P1-Q2",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities"],
    diagramSvg: `<svg viewBox="0 0 320 240" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes: origin at (125, 130), scale 20px per unit -->
  <line x1="20" y1="130" x2="295" y2="130" stroke-width="1.2"/>
  <polyline points="289,126 295,130 289,134" fill="none" stroke-width="1.2"/>
  <text x="300" y="134" stroke="none" font-style="italic">x</text>

  <line x1="125" y1="225" x2="125" y2="15" stroke-width="1.2"/>
  <polyline points="121,21 125,15 129,21" fill="none" stroke-width="1.2"/>
  <text x="112" y="20" stroke="none" font-style="italic">y</text>
  <text x="112" y="143" stroke="none" font-style="italic">O</text>

  <!-- Vertical asymptote x = 2 => X = 165 -->
  <line x1="165" y1="220" x2="165" y2="20" stroke-dasharray="4,3" opacity="0.6" stroke-width="1"/>
  <text x="170" y="216" stroke="none" font-style="italic">x = r</text>

  <!-- Oblique asymptote y = x - 1 => passes through (-4,-5)->(45,230) and (6,5)->(245,30) -->
  <line x1="50" y1="225" x2="255" y2="20" stroke-dasharray="4,3" opacity="0.6" stroke-width="1"/>
  <text x="242" y="45" stroke="none" font-style="italic">y = x − 1</text>

  <!-- Curve y = (x^2 - 3x + 3)/(x - 2) = x - 1 + 1/(x - 2) -->
  <!-- Left branch: x from -3.5 to 1.82 -->
  <path d="M 55,223.6 Q 95,186.7 125,160 T 145,150 Q 155,156 161.4,225" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <!-- Right branch: x from 2.18 to 6 -->
  <path d="M 168.6,25 Q 173,90 185,90 Q 205,90 250,30" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- y-intercept (0, -1.5) => (125, 160) -->
  <circle cx="125" cy="160" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="64" y="164" stroke="none">(0, −1.5)</text>

  <text x="176" y="34" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>
</svg>`,
    stem: "The diagram below shows the curve with equation $y = \\mathrm{f}(x)$ where $\\mathrm{f}(x) = \\frac{x^2 + px + q}{x - 2}$ for some constants $p$ and $q$. The curve passes through the point with coordinates $(0, -1.5)$ and has asymptotes $y = x - 1$ and $x = r$ for some constant $r$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Write down the value of $r$ and show that $p = -3$ and $q = 3$.",
        type: "self",
        solution:
          "Since the denominator is $x - 2$, the vertical asymptote is $x = 2 \\implies r = 2$.<br><br>" +
          "Since the curve passes through $(0, -1.5)$:<br>" +
          "$-1.5 = \\frac{0 + 0 + q}{0 - 2} \\implies q = 3$ (shown).<br><br>" +
          "Since the curve has asymptotes $y = x - 1$ and $x = 2$, we can write:<br>" +
          "$y = x - 1 + \\frac{a}{x - 2} = \\frac{(x - 1)(x - 2) + a}{x - 2} = \\frac{x^2 - 3x + 2 + a}{x - 2}$ for some constant $a$.<br><br>" +
          "Comparing the coefficient of $x$ in the numerator with $x^2 + px + 3$, we obtain $p = -3$ (shown)."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Solve the inequality $\\mathrm{f}(x) > \\frac{7}{2}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 240" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="140" x2="295" y2="140" stroke-width="1.2"/>
  <polyline points="289,136 295,140 289,144" fill="none" stroke-width="1.2"/>
  <text x="300" y="144" stroke="none" font-style="italic">x</text>
  <line x1="115" y1="225" x2="115" y2="15" stroke-width="1.2"/>
  <polyline points="111,21 115,15 119,21" fill="none" stroke-width="1.2"/>
  <text x="102" y="20" stroke="none" font-style="italic">y</text>
  <text x="102" y="153" stroke="none" font-style="italic">O</text>

  <!-- Vertical asymptote x = 2 => X = 155 -->
  <line x1="155" y1="220" x2="155" y2="20" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="159" y="216" stroke="none" font-style="italic">x = 2</text>

  <!-- Oblique asymptote y = x - 1 -->
  <line x1="50" y1="225" x2="255" y2="20" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="238" y="34" stroke="none" font-style="italic">y = x − 1</text>

  <!-- Curve branches -->
  <path d="M 55,222 Q 90,192 115,170 T 135,160 Q 145,165 151,222" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <path d="M 159,25 Q 163,98 175,100 Q 195,100 245,35" fill="none" stroke="#4a8fe7" stroke-width="2"/>

  <!-- Horizontal line y = 3.5 => Y = 70 -->
  <line x1="30" y1="70" x2="275" y2="70" stroke="#cf5652" stroke-width="1.5"/>
  <text x="278" y="74" stroke="none" fill="#cf5652">y = 7/2</text>

  <!-- Intersections at x = 2.5 (X=165) and x = 4 (X=195) -->
  <line x1="165" y1="70" x2="165" y2="140" stroke="#cf5652" stroke-dasharray="3,2"/>
  <line x1="195" y1="70" x2="195" y2="140" stroke="#cf5652" stroke-dasharray="3,2"/>
  <circle cx="165" cy="70" r="3" fill="#cf5652" stroke="none"/>
  <circle cx="195" cy="70" r="3" fill="#cf5652" stroke="none"/>
  <text x="159" y="154" stroke="none" fill="#cf5652" font-size="10">2.5</text>
  <text x="191" y="154" stroke="none" fill="#cf5652" font-size="10">4</text>
</svg>`,
        solution:
          "Solving $\\frac{x^2 - 3x + 3}{x - 2} = \\frac{7}{2}$:<br>" +
          "$2(x^2 - 3x + 3) = 7(x - 2)$<br>" +
          "$2x^2 - 13x + 20 = 0 \\implies (2x - 5)(x - 4) = 0$<br>" +
          "$x = 2.5$ or $x = 4$.<br><br>" +
          "From the graph, $\\mathrm{f}(x) > \\frac{7}{2}$ when:<br>" +
          "$2 < x < 2.5$ or $x > 4$."
      }
    ]
  },

  // ==================== Q3 ====================
  {
    id: "MI-2025-P1-Q3",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Integration"],
    stem: "Find the following indefinite integrals.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $\\int \\frac{x}{\\sqrt{x^2 - 4}}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "sqrt(x^2 - 4)",
        domainPoints: [3, 4, 5],
        placeholder: "Expression in x (omit + C)",
        solution:
          "$\\int \\frac{x}{\\sqrt{x^2 - 4}}\\,\\mathrm{d}x = \\frac{1}{2}\\int 2x(x^2 - 4)^{-\\frac{1}{2}}\\,\\mathrm{d}x$<br>" +
          "$= \\frac{1}{2}\\left[\\frac{(x^2 - 4)^{\\frac{1}{2}}}{\\frac{1}{2}}\\right] + C = \\sqrt{x^2 - 4} + C$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find $\\int x^2 \\ln(2x)\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "x^3*ln(2*x)/3 - x^3/9",
        domainPoints: [1, 2, 3],
        placeholder: "Expression in x (omit + C)",
        solution:
          "Using integration by parts, let $u = \\ln(2x)$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = x^2$.<br>" +
          "Then $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{1}{x}$ and $v = \\frac{x^3}{3}$.<br><br>" +
          "$\\int x^2 \\ln(2x)\\,\\mathrm{d}x = \\frac{x^3}{3}\\ln(2x) - \\int \\frac{1}{x}\\left(\\frac{x^3}{3}\\right)\\mathrm{d}x$<br>" +
          "$= \\frac{1}{3}x^3 \\ln(2x) - \\frac{1}{3}\\int x^2\\,\\mathrm{d}x$<br>" +
          "$= \\frac{1}{3}x^3 \\ln(2x) - \\frac{1}{9}x^3 + C$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find $\\int \\frac{\\sin 2x}{1 + \\cos^2 x}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        answer: "-ln(1 + cos(x)^2)",
        domainPoints: [0.5, 1, 2],
        placeholder: "Expression in x (omit + C)",
        solution:
          "Since $\\frac{\\mathrm{d}}{\\mathrm{d}x}(1 + \\cos^2 x) = -2\\cos x \\sin x = -\\sin 2x$:<br>" +
          "$\\int \\frac{\\sin 2x}{1 + \\cos^2 x}\\,\\mathrm{d}x = -\\int \\frac{-2\\cos x\\sin x}{1 + \\cos^2 x}\\,\\mathrm{d}x$<br>" +
          "$= -\\ln|1 + \\cos^2 x| + C = -\\ln(1 + \\cos^2 x) + C$."
      }
    ]
  },

  // ==================== Q4 ====================
  {
    id: "MI-2025-P1-Q4",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem:
      "Three different blends of coffee beans – Blend A, Blend B and Blend C – are sold at both M Café and I Café. The usual selling prices of the blends are the same at both cafés. The total cost of buying one package each of Blend A, Blend B and Blend C is SGD 176. During a holiday sale, the two cafés offered the following discounts:<br>" +
      "<div class='q-table-wrap'><table class='q-table'>" +
      "<tr><th rowspan='2'>Café</th><th colspan='3'>Discounts given for each package</th><th rowspan='2'>Total price after the discount</th></tr>" +
      "<tr><th>Blend A</th><th>Blend B</th><th>Blend C</th></tr>" +
      "<tr><td><strong>M Café</strong></td><td>15%</td><td>10%</td><td>5%</td><td>SGD 161.80</td></tr>" +
      "<tr><td><strong>I Café</strong></td><td>7%</td><td>5%</td><td>2%</td><td>SGD 169.56</td></tr>" +
      "</table></div>",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find the usual selling price of each package of Blend A, Blend B and Blend C coffee beans respectively.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Blend A (SGD) =", answer: "32", exactRequired: true, placeholder: "Exact value" },
          { label: "Blend B (SGD) =", answer: "44", exactRequired: true, placeholder: "Exact value" },
          { label: "Blend C (SGD) =", answer: "100", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "Let $x$, $y$ and $z$ be the usual selling prices (in SGD) of Blend A, Blend B and Blend C coffee beans respectively.<br>" +
          "$x + y + z = 176 \\quad \\text{--- (1)}$<br>" +
          "$0.85x + 0.90y + 0.95z = 161.80 \\quad \\text{--- (2)}$<br>" +
          "$0.93x + 0.95y + 0.98z = 169.56 \\quad \\text{--- (3)}$<br><br>" +
          "Solving using GC:<br>" +
          "$x = 32$, $y = 44$, $z = 100$.<br>" +
          "Hence the usual selling prices are SGD 32, SGD 44 and SGD 100 respectively."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt:
          "Loyal customers of I Café receive an additional discount of $x\\%$ on the usual selling price of the packages for Blend A and Blend B only. (This loyalty discount is calculated as $x\\%$ of the usual price of each package and is subtracted from the sale prices above.)<br>" +
          "I Café wants the total cost for its loyal customers to be less than the total cost at M Café when buying one of each package of the three blends.<br>" +
          "Form an inequality and find the smallest integer value of $x$.",
        type: "auto",
        mode: "number",
        answer: "11",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Price difference between I Café and M Café during the sale $= 169.56 - 161.80 = 7.76$ dollars.<br>" +
          "For I Café's total cost for loyal customers to be less than M Café's total cost:<br>" +
          "Additional loyalty discount $> 7.76$<br>" +
          "$\\left(\\frac{x}{100}\\right)(32) + \\left(\\frac{x}{100}\\right)(44) > 7.76$<br>" +
          "$0.76x > 7.76$<br>" +
          "$x > \\frac{776}{76} \\approx 10.21$<br><br>" +
          "Hence the smallest integer value of $x$ is $11$."
      }
    ]
  },

  // ==================== Q5 ====================
  {
    id: "MI-2025-P1-Q5",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "Using the substitution $u = x^2 + 3$, show that<br>$$\\int \\frac{x^3}{\\sqrt{x^2 + 3}}\\,\\mathrm{d}x = \\frac{1}{3}\\sqrt{(x^2 + 3)^3} - 3\\sqrt{x^2 + 3} + C.$$",
        type: "self",
        solution:
          "Let $u = x^2 + 3 \\implies \\frac{\\mathrm{d}u}{\\mathrm{d}x} = 2x \\implies x\\,\\mathrm{d}x = \\frac{1}{2}\\,\\mathrm{d}u$, and $x^2 = u - 3$.<br><br>" +
          "$\\int \\frac{x^3}{\\sqrt{x^2 + 3}}\\,\\mathrm{d}x = \\int \\frac{x^2}{\\sqrt{x^2 + 3}}(x\\,\\mathrm{d}x) = \\int \\frac{u - 3}{\\sqrt{u}}\\left(\\frac{\\mathrm{d}u}{2}\\right)$<br>" +
          "$= \\frac{1}{2}\\int \\left(u^{\\frac{1}{2}} - 3u^{-\\frac{1}{2}}\\right)\\mathrm{d}u$<br>" +
          "$= \\frac{1}{2}\\left(\\frac{2}{3}u^{\\frac{3}{2}} - 6u^{\\frac{1}{2}}\\right) + C$<br>" +
          "$= \\frac{1}{3}u^{\\frac{3}{2}} - 3u^{\\frac{1}{2}} + C$<br>" +
          "$= \\frac{1}{3}\\sqrt{(x^2 + 3)^3} - 3\\sqrt{x^2 + 3} + C$ (shown)."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Hence find the exact value of $\\int_{-1}^{3} \\left|\\frac{3x^3}{\\sqrt{x^2 + 3}}\\right|\\mathrm{d}x$, leaving your answer in the form $a + b\\sqrt{3}$ where $a$ and $b$ are integers to be determined.",
        type: "auto",
        mode: "number",
        answer: "-10 + 18*sqrt(3)",
        exactRequired: true,
        placeholder: "Exact value in surd form",
        solution:
          "For $-1 \\le x < 0$, $\\frac{3x^3}{\\sqrt{x^2 + 3}} < 0$; for $0 \\le x \\le 3$, $\\frac{3x^3}{\\sqrt{x^2 + 3}} \\ge 0$.<br><br>" +
          "$\\int_{-1}^{3} \\left|\\frac{3x^3}{\\sqrt{x^2 + 3}}\\right|\\mathrm{d}x = -\\int_{-1}^{0} \\frac{3x^3}{\\sqrt{x^2 + 3}}\\,\\mathrm{d}x + \\int_{0}^{3} \\frac{3x^3}{\\sqrt{x^2 + 3}}\\,\\mathrm{d}x$<br>" +
          "$= -\\left[\\sqrt{(x^2 + 3)^3} - 9\\sqrt{x^2 + 3}\\right]_{-1}^{0} + \\left[\\sqrt{(x^2 + 3)^3} - 9\\sqrt{x^2 + 3}\\right]_{0}^{3}$<br>" +
          "$= -\\left[(3\\sqrt{3} - 9\\sqrt{3}) - (8 - 18)\\right] + \\left[(12\\sqrt{12} - 9\\sqrt{12}) - (3\\sqrt{3} - 9\\sqrt{3})\\right]$<br>" +
          "$= -\\left[10 - 6\\sqrt{3}\\right] + \\left[3(2\\sqrt{3}) + 6\\sqrt{3}\\right]$<br>" +
          "$= -10 + 6\\sqrt{3} + 12\\sqrt{3} = -10 + 18\\sqrt{3}$."
      }
    ]
  },

  // ==================== Q6 ====================
  {
    id: "MI-2025-P1-Q6",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 280 230" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Rectangle ABFG: A(75,30), B(165,30), F(165,190), G(75,190) -->
  <!-- Two semicircles on BD and DF with radius 40: center1 (165,70), center2 (165,150) -->
  <path d="M 75,30 L 165,30 A 40,40 0 0 1 165,110 A 40,40 0 0 1 165,190 L 75,190 Z" fill="rgba(91,155,213,0.12)" stroke="#2c2925" stroke-width="1.6"/>
  <!-- Internal vertical line BF -->
  <line x1="165" y1="30" x2="165" y2="190" stroke-width="1.2"/>

  <!-- Labels of vertices -->
  <text x="68" y="22" stroke="none" font-style="italic">A</text>
  <text x="161" y="22" stroke="none" font-style="italic">B</text>
  <text x="210" y="74" stroke="none" font-style="italic">C</text>
  <text x="150" y="114" stroke="none" font-style="italic">D</text>
  <text x="210" y="154" stroke="none" font-style="italic">E</text>
  <text x="161" y="206" stroke="none" font-style="italic">F</text>
  <text x="68" y="206" stroke="none" font-style="italic">G</text>

  <!-- Dimension 2x along AG -->
  <line x1="60" y1="30" x2="60" y2="190" stroke-width="1"/>
  <polyline points="56,36 60,30 64,36" fill="none" stroke-width="1"/>
  <polyline points="56,184 60,190 64,184" fill="none" stroke-width="1"/>
  <text x="41" y="114" stroke="none" font-style="italic">2x</text>

  <!-- Dimension x along BD -->
  <line x1="156" y1="33" x2="156" y2="107" stroke-width="1"/>
  <polyline points="153,39 156,33 159,39" fill="none" stroke-width="1"/>
  <polyline points="153,101 156,107 159,101" fill="none" stroke-width="1"/>
  <text x="144" y="74" stroke="none" font-style="italic">x</text>

  <!-- Dimension y along GF -->
  <line x1="78" y1="181" x2="162" y2="181" stroke-width="1"/>
  <polyline points="84,178 78,181 84,184" fill="none" stroke-width="1"/>
  <polyline points="156,178 162,181 156,184" fill="none" stroke-width="1"/>
  <text x="117" y="175" stroke="none" font-style="italic">y</text>
</svg>`,
    stem: "A company produces customised badges. The diagram below shows the design of one such badge which consists of a rectangle and two identical semicircles.<br>It is given that $AG = 2x\\text{ cm}$, $FG = y\\text{ cm}$, $BD = DF = x\\text{ cm}$ and the outer perimeter $ABCDEFGA$ of the badge is $25\\text{ cm}$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Show that the area of the badge, $S\\text{ cm}^2$, is given by the formula<br>$$S = 25x - 2x^2 - \\frac{3}{4}\\pi x^2.$$",
        type: "self",
        solution:
          "Each semicircle has radius $\\frac{x}{2}\\text{ cm}$.<br>" +
          "Area of badge: $S = 2xy + 2\\left[\\frac{1}{2}\\pi\\left(\\frac{x}{2}\\right)^2\\right] = 2xy + \\frac{\\pi x^2}{4}$.<br><br>" +
          "Outer perimeter: $25 = 2x + 2y + 2\\left[\\frac{1}{2} \\times 2\\pi\\left(\\frac{x}{2}\\right)\\right] = 2x + 2y + \\pi x$<br>" +
          "$\\implies 2y = 25 - 2x - \\pi x$.<br><br>" +
          "Substituting $2y$ into $S$:<br>" +
          "$S = x(25 - 2x - \\pi x) + \\frac{\\pi x^2}{4} = 25x - 2x^2 - \\pi x^2 + \\frac{\\pi x^2}{4} = 25x - 2x^2 - \\frac{3}{4}\\pi x^2$ (shown)."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "Use calculus to find the exact value of $x$ which gives the maximum value of $S$.",
        type: "auto",
        mode: "number",
        answer: "50/(8 + 3*pi)",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solution:
          "$\\frac{\\mathrm{d}S}{\\mathrm{d}x} = 25 - 4x - \\frac{3}{2}\\pi x$<br>" +
          "At stationary point, $\\frac{\\mathrm{d}S}{\\mathrm{d}x} = 0$:<br>" +
          "$25 - 4x - \\frac{3}{2}\\pi x = 0 \\implies 50 - (8 + 3\\pi)x = 0 \\implies x = \\frac{50}{8 + 3\\pi}$.<br><br>" +
          "$\\frac{\\mathrm{d}^2 S}{\\mathrm{d}x^2} = -4 - \\frac{3}{2}\\pi < 0$ for all $x$.<br>" +
          "Hence $x = \\frac{50}{8 + 3\\pi}$ gives the maximum value of $S$."
      }
    ]
  },

  // ==================== Q7 ====================
  {
    id: "MI-2025-P1-Q7",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Sequences & Series"],
    stem:
      "Epidemiologists are modelling the spread of an infectious disease in a town. The following assumptions are made:<br>" +
      "• At Week 0, there are 500 new infections.<br>" +
      "• In each subsequent week, the number of new infections is 60% the number of new infections in the previous week, due to ongoing community transmission.<br>" +
      "Let $u_n$ denote the number of new infections in Week $n$, for $n \\ge 0$, $n \\in \\mathbb{Z}$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Write down the value $u_1$ and verify that $u_2 = 180$.",
        type: "self",
        solution:
          "$u_0 = 500$, common ratio $r = 0.6$.<br>" +
          "$u_1 = 0.6 \\times 500 = 300$.<br>" +
          "$u_2 = 0.6 \\times 300 = 180$ (verified)."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "If $S_n$ denotes the total cumulative number of new infections after $n$ weeks, show that $S_n = 1250\\left(1 - 0.6^{n+1}\\right)$.",
        type: "self",
        solution:
          "$S_n = u_0 + u_1 + u_2 + \\dots + u_n = 500 + 500(0.6) + 500(0.6)^2 + \\dots + 500(0.6)^n$<br>" +
          "This is the sum of $(n + 1)$ terms of a geometric progression with first term $500$ and common ratio $0.6$:<br>" +
          "$S_n = \\frac{500(1 - 0.6^{n+1})}{1 - 0.6} = \\frac{500}{0.4}(1 - 0.6^{n+1}) = 1250(1 - 0.6^{n+1})$ (shown)."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "The local healthcare facility has a capacity of 1240 beds. You may assume that each infected person occupies one bed, and that none are discharged during the period being considered.<br>Find the smallest value of $n$ such that the total number of infections up to and including Week $n$ first exceeds 1240.",
        type: "auto",
        mode: "number",
        answer: "9",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "We need $1250(1 - 0.6^{n+1}) > 1240$:<br>" +
          "$1 - 0.6^{n+1} > \\frac{1240}{1250} = 0.992 \\implies 0.6^{n+1} < 0.008$<br>" +
          "$(n + 1)\\ln(0.6) < \\ln(0.008)$<br>" +
          "Since $\\ln(0.6) < 0$, $n + 1 > \\frac{\\ln(0.008)}{\\ln(0.6)} \\approx 9.45 \\implies n > 8.45$.<br>" +
          "(From GC: $S_8 = 1237.4$, $S_9 = 1242.4 > 1240$.)<br>" +
          "Hence the smallest integer value of $n$ is $9$."
      },
      {
        label: "(iv)",
        marks: 2,
        prompt: "The healthcare facility later increases its capacity to 1280 beds.<br>Based on the given model, comment on whether this new capacity is sufficient to accommodate all infected persons over a prolonged period of time.",
        type: "self",
        solution:
          "As $n$ → ∞, $0.6^{n+1}$ → $0$, so $S_n = 1250(1 - 0.6^{n+1})$ → $1250$.<br>" +
          "Since the total cumulative number of infections approaches a maximum limit of $1250$, which is less than $1280$, the new capacity of 1280 beds is sufficient to accommodate all infected persons over a prolonged period of time."
      }
    ]
  },

  // ==================== Q8 ====================
  {
    id: "MI-2025-P1-Q8",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series", "Integration"],
    stem: "It is given that $y = \\mathrm{e}^{2\\sin^{-1} x}$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Show that $\\sqrt{1 - x^2}\\,\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2y$.",
        type: "self",
        solution:
          "Differentiating $y = \\mathrm{e}^{2\\sin^{-1} x}$ with respect to $x$:<br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\mathrm{e}^{2\\sin^{-1} x} \\cdot \\frac{2}{\\sqrt{1 - x^2}} = \\frac{2y}{\\sqrt{1 - x^2}}$<br>" +
          "$\\implies \\sqrt{1 - x^2}\\,\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2y$ (shown)."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "By further differentiation of the result in part (i), find the Maclaurin series for $y$ up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 5] },
        answer: "1 + 2*x + 2*x^2",
        placeholder: "Polynomial in x up to x^2",
        solution:
          "Squaring part (i): $(1 - x^2)\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 4y^2$.<br>" +
          "Differentiating with respect to $x$:<br>" +
          "$(1 - x^2) \\cdot 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\left(\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2}\\right) - 2x\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 8y\\frac{\\mathrm{d}y}{\\mathrm{d}x}$.<br><br>" +
          "When $x = 0$:<br>" +
          "$y = \\mathrm{e}^{2\\sin^{-1}(0)} = 1$<br>" +
          "$\\sqrt{1 - 0}\\,\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2(1) \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2$<br>" +
          "$2(2)\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} - 0 = 8(1)(2) \\implies \\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 4$.<br><br>" +
          "Hence the Maclaurin series for $y$ is:<br>" +
          "$y = 1 + 2x + \\frac{4}{2!}x^2 + \\dots = 1 + 2x + 2x^2 + \\dots$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Using your result from part (ii), find an approximate value for $\\int_{0}^{0.1} x\\mathrm{e}^{2\\sin^{-1} x}\\,\\mathrm{d}x$, giving your answer to 4 significant figures.",
        type: "auto",
        mode: "number",
        answer: "0.0057166667",
        dp: 6,
        placeholder: "Decimal to 4 s.f.",
        solution:
          "$\\int_{0}^{0.1} x\\mathrm{e}^{2\\sin^{-1} x}\\,\\mathrm{d}x \\approx \\int_{0}^{0.1} x(1 + 2x + 2x^2)\\,\\mathrm{d}x$<br>" +
          "$= \\left[\\frac{1}{2}x^2 + \\frac{2}{3}x^3 + \\frac{1}{2}x^4\\right]_{0}^{0.1}$<br>" +
          "$= 0.005 + \\frac{0.002}{3} + 0.00005 = 0.00571667 \\approx 0.005717$ (4 s.f.)."
      }
    ]
  },

  // ==================== Q9 ====================
  {
    id: "MI-2025-P1-Q9",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Vectors"],
    stem: "The coordinates of point $A$ and $B$ are $(1, 2, 3)$ and $(17, 10, 19)$ respectively. The line $l_1$ passes through both points $A$ and $B$ and is parallel to the vector $\\begin{pmatrix} k \\\\ 1 \\\\ 2 \\end{pmatrix}$, where $k$ is a constant.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Show that $k = 2$.",
        type: "self",
        solution:
          "Direction vector $AB = \\begin{pmatrix} 17 \\\\ 10 \\\\ 19 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 16 \\\\ 8 \\\\ 16 \\end{pmatrix} = 8\\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix}$.<br>" +
          "Since $AB$ is parallel to $\\begin{pmatrix} k \\\\ 1 \\\\ 2 \\end{pmatrix}$, comparing components gives $\\lambda = 8$ and $k = 2$ (shown)."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "The line $l_2$ has equation $\\mathbf{r} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 6 \\end{pmatrix} + \\mu\\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}$ where $\\mu$ is a parameter.<br>Determine whether the lines $l_1$ and $l_2$ intersect. If they do, find the position vector of their point of intersection; otherwise, explain why they do not intersect.",
        type: "self",
        solution:
          "Equation of $l_1$: $\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + \\lambda\\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix}$, $\\lambda \\in \\mathbb{R}$.<br>" +
          "Equating $l_1$ and $l_2$:<br>" +
          "$\\begin{pmatrix} 1 + 2\\lambda \\\\ 2 + \\lambda \\\\ 3 + 2\\lambda \\end{pmatrix} = \\begin{pmatrix} 3 + 2\\mu \\\\ 4 \\\\ 6 + \\mu \\end{pmatrix}$<br>" +
          "From the second component: $2 + \\lambda = 4 \\implies \\lambda = 2$.<br>" +
          "From the first component: $1 + 2(2) = 3 + 2\\mu \\implies \\mu = 1$.<br>" +
          "Checking the third component: $\\text{LHS} = 3 + 2(2) = 7$, $\\text{RHS} = 6 + 1 = 7$. Consistent!<br><br>" +
          "Hence $l_1$ and $l_2$ intersect at the point with position vector $\\begin{pmatrix} 5 \\\\ 4 \\\\ 7 \\end{pmatrix}$."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "The plane $p$ has equation $\\mathbf{r} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} = 16$.<br>Let $\\alpha$ be the acute angle between $l_1$ and $p$. Find the exact value of $\\sin\\alpha$ and $\\cos\\alpha$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "sin α =", answer: "2*sqrt(2)/3", exactRequired: true, placeholder: "Exact value" },
          { label: "cos α =", answer: "1/3", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "$\\sin\\alpha = \\frac{\\left|\\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}\\right|}{\\sqrt{2^2 + 1^2 + 2^2}\\sqrt{1^2 + 0^2 + 1^2}} = \\frac{|2 + 0 + 2|}{3\\sqrt{2}} = \\frac{4}{3\\sqrt{2}} = \\frac{2\\sqrt{2}}{3}$.<br><br>" +
          "Since $\\alpha$ is acute, $\\cos\\alpha = \\sqrt{1 - \\sin^2\\alpha} = \\sqrt{1 - \\frac{8}{9}} = \\frac{1}{3}$."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Find the coordinates of point $F$, the foot of the perpendicular of the point $B$ to the plane $p$.",
        type: "auto",
        mode: "tuple",
        answer: [7, 10, 9],
        exactRequired: true,
        placeholder: "Coordinates (x, y, z)",
        solution:
          "Line $BF$ has equation $\\mathbf{r} = \\begin{pmatrix} 17 \\\\ 10 \\\\ 19 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$, $t \\in \\mathbb{R}$.<br>" +
          "Since $F$ lies on plane $p$:<br>" +
          "$\\begin{pmatrix} 17 + t \\\\ 10 \\\\ 19 + t \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} = 16$<br>" +
          "$(17 + t) + (19 + t) = 16 \\implies 2t = -20 \\implies t = -10$.<br><br>" +
          "Position vector of $F = \\begin{pmatrix} 17 \\\\ 10 \\\\ 19 \\end{pmatrix} - 10\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 10 \\\\ 9 \\end{pmatrix}$.<br>" +
          "Hence the coordinates of $F$ are $(7, 10, 9)$."
      }
    ]
  },

  // ==================== Q10 ====================
  {
    id: "MI-2025-P1-Q10",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Integration"],
    stem: "The curves $C_1$ and $C_2$ are given by the equations $y = \\frac{1}{1 + 4x^2}$ and $y = \\frac{x^2}{5}$ respectively.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find the coordinates of the intersection points for $C_1$ and $C_2$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 210" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (160, 175), x scale 65px/unit, y scale 135px/unit -->
  <line x1="20" y1="175" x2="300" y2="175" stroke-width="1.2"/>
  <polyline points="294,171 300,175 294,179" fill="none" stroke-width="1.2"/>
  <text x="304" y="179" stroke="none" font-style="italic">x</text>
  <line x1="160" y1="195" x2="160" y2="15" stroke-width="1.2"/>
  <polyline points="156,21 160,15 164,21" fill="none" stroke-width="1.2"/>
  <text x="148" y="20" stroke="none" font-style="italic">y</text>
  <text x="147" y="188" stroke="none" font-style="italic">O</text>

  <!-- Shaded region R between x=-1 (95) and x=1 (225) -->
  <path d="M 95,148 C 120,130 142,40 160,40 C 178,40 200,130 225,148 Q 160,202 95,148 Z" fill="rgba(91,155,213,0.22)" stroke="none"/>

  <!-- C1: y = 1/(1+4x^2) -->
  <path d="M 40,165 C 70,160 85,154 95,148 C 120,130 142,40 160,40 C 178,40 200,130 225,148 C 235,154 250,160 280,165" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <text x="200" y="50" stroke="none" fill="#4a8fe7">C₁: y = 1/(1+4x²)</text>

  <!-- C2: y = x^2 / 5 -->
  <path d="M 45,90 Q 160,260 275,90" fill="none" stroke="#cf5652" stroke-width="2"/>
  <text x="230" y="95" stroke="none" fill="#cf5652">C₂: y = x²/5</text>

  <!-- Intersection points (-1, 1/5) => (95, 148) and (1, 1/5) => (225, 148) -->
  <circle cx="95" cy="148" r="3" fill="#2c2925" stroke="none"/>
  <circle cx="225" cy="148" r="3" fill="#2c2925" stroke="none"/>
  <text x="48" y="142" stroke="none">(−1, 1/5)</text>
  <text x="230" y="142" stroke="none">(1, 1/5)</text>
  <text x="165" y="42" stroke="none">1</text>
  <text x="155" y="118" stroke="none" font-style="italic">R</text>
</svg>`,
        solution:
          "Equating the two equations:<br>" +
          "$\\frac{1}{1 + 4x^2} = \\frac{x^2}{5} \\implies 4x^4 + x^2 - 5 = 0 \\implies (4x^2 + 5)(x^2 - 1) = 0$<br>" +
          "Since $4x^2 + 5 > 0$, $x^2 = 1 \\implies x = -1$ or $x = 1$.<br>" +
          "When $x = \\pm 1$, $y = \\frac{1}{5}$.<br>" +
          "Hence the coordinates of the intersection points are $\\left(-1, \\frac{1}{5}\\right)$ and $\\left(1, \\frac{1}{5}\\right)$."
      },
      {
        label: "(ii)",
        marks: 5,
        prompt: "The region $R$ is bounded by $C_1$ and $C_2$.<br>Find the exact area of $R$.",
        type: "auto",
        mode: "number",
        answer: "atan(2) - 2/15",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "Exact area of $R = \\int_{-1}^{1} \\left(\\frac{1}{1 + 4x^2} - \\frac{x^2}{5}\\right)\\mathrm{d}x$<br>" +
          "$= \\left[\\frac{1}{2}\\tan^{-1}(2x) - \\frac{1}{15}x^3\\right]_{-1}^{1}$<br>" +
          "$= \\left(\\frac{1}{2}\\tan^{-1}(2) - \\frac{1}{15}\\right) - \\left(\\frac{1}{2}\\tan^{-1}(-2) + \\frac{1}{15}\\right)$<br>" +
          "$= \\tan^{-1}(2) - \\frac{2}{15}$ units$^2$."
      },
      {
        label: "(iii)",
        marks: 5,
        prompt: "Find the exact volume generated when $R$ is rotated through $\\pi$ radians about the $y$-axis.",
        type: "auto",
        mode: "number",
        answer: "pi*ln(5)/4 - pi/10",
        exactRequired: true,
        placeholder: "Exact value in terms of pi and ln",
        solution:
          "Since $R$ is symmetric about the $y$-axis, rotating $R$ through $\\pi$ radians about the $y$-axis generates the full solid of revolution obtained by rotating the right half ($x \\ge 0$) through $2\\pi$ radians about the $y$-axis.<br><br>" +
          "From $C_2$: $y = \\frac{x^2}{5} \\implies x_1^2 = 5y$ (for $0 \\le y \\le \\frac{1}{5}$).<br>" +
          "From $C_1$: $y = \\frac{1}{1 + 4x^2} \\implies x_2^2 = \\frac{1}{4}\\left(\\frac{1}{y} - 1\\right)$ (for $\\frac{1}{5} \\le y \\le 1$).<br><br>" +
          "Exact volume $= \\pi\\int_{0}^{\\frac{1}{5}} 5y\\,\\mathrm{d}y + \\pi\\int_{\\frac{1}{5}}^{1} \\frac{1}{4}\\left(\\frac{1}{y} - 1\\right)\\mathrm{d}y$<br>" +
          "$= \\pi\\left[\\frac{5}{2}y^2\\right]_{0}^{\\frac{1}{5}} + \\frac{\\pi}{4}\\left[\\ln y - y\\right]_{\\frac{1}{5}}^{1}$<br>" +
          "$= \\pi\\left(\\frac{1}{10}\\right) + \\frac{\\pi}{4}\\left[(0 - 1) - \\left(\\ln\\frac{1}{5} - \\frac{1}{5}\\right)\\right]$<br>" +
          "$= \\frac{\\pi}{10} + \\frac{\\pi}{4}\\left(\\ln 5 - \\frac{4}{5}\\right) = \\frac{\\pi}{4}\\ln 5 - \\frac{\\pi}{10}$ units$^3$."
      }
    ]
  },

  // ==================== Q11 ====================
  {
    id: "MI-2025-P1-Q11",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Vectors"],
    stem: "Referred to the origin $O$, the points $A$ and $B$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$ respectively, where $\\mathbf{a}$ and $\\mathbf{b}$ are non-zero and non-parallel vectors. The point $C$ lies on $OA$ such that $OC : CA = 1 : 2$. The point $D$ lies on $OB$ such that $OB : DB = 3 : 1$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find the position vectors $OC$ and $OD$, giving your answers in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
        type: "self",
        solution:
          "Since $OC : CA = 1 : 2$, $OC = \\frac{1}{3}OA = \\frac{1}{3}\\mathbf{a}$.<br>" +
          "Since $D$ lies on $OB$ with $OB : DB = 3 : 1$, $OD : DB = 2 : 1$, so $OD = \\frac{2}{3}OB = \\frac{2}{3}\\mathbf{b}$."
      },
      {
        label: "(ii)",
        marks: 5,
        prompt: "Show that the point $E$ where the lines $AD$ and $BC$ meet has position vector $\\frac{1}{7}\\mathbf{a} + \\frac{4}{7}\\mathbf{b}$.",
        type: "self",
        solution:
          "Line $AD$: $\\mathbf{r} = \\mathbf{a} + \\lambda\\left(\\frac{2}{3}\\mathbf{b} - \\mathbf{a}\\right) = (1 - \\lambda)\\mathbf{a} + \\frac{2}{3}\\lambda\\mathbf{b}$.<br>" +
          "Line $BC$: $\\mathbf{r} = \\mathbf{b} + \\mu\\left(\\frac{1}{3}\\mathbf{a} - \\mathbf{b}\\right) = \\frac{1}{3}\\mu\\mathbf{a} + (1 - \\mu)\\mathbf{b}$.<br><br>" +
          "At the point of intersection $E$, since $\\mathbf{a}$ and $\\mathbf{b}$ are non-zero and non-parallel, comparing coefficients:<br>" +
          "$1 - \\lambda = \\frac{1}{3}\\mu \\implies 3\\lambda + \\mu = 3 \\quad \\text{--- (1)}$<br>" +
          "$\\frac{2}{3}\\lambda = 1 - \\mu \\implies 2\\lambda + 3\\mu = 3 \\quad \\text{--- (2)}$<br><br>" +
          "Solving (1) and (2): $\\lambda = \\frac{6}{7}$ and $\\mu = \\frac{3}{7}$.<br>" +
          "Substituting $\\lambda = \\frac{6}{7}$ into line $AD$:<br>" +
          "$OE = \\left(1 - \\frac{6}{7}\\right)\\mathbf{a} + \\frac{2}{3}\\left(\\frac{6}{7}\\right)\\mathbf{b} = \\frac{1}{7}\\mathbf{a} + \\frac{4}{7}\\mathbf{b}$ (shown)."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "Show that the area of triangle $OAE$ can be written as $k|\\mathbf{a} \\times \\mathbf{b}|$, where $k$ is a constant to be found.",
        type: "self",
        solution:
          "Area of △$OAE = \\frac{1}{2}|OA \\times OE| = \\frac{1}{2}\\left|\\mathbf{a} \\times \\left(\\frac{1}{7}\\mathbf{a} + \\frac{4}{7}\\mathbf{b}\\right)\\right|$<br>" +
          "$= \\frac{1}{2}\\left|\\frac{1}{7}(\\mathbf{a} \\times \\mathbf{a}) + \\frac{4}{7}(\\mathbf{a} \\times \\mathbf{b})\\right|$<br>" +
          "Since $\\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}$:<br>" +
          "Area of △$OAE = \\frac{1}{2}\\left|\\frac{4}{7}(\\mathbf{a} \\times \\mathbf{b})\\right| = \\frac{2}{7}|\\mathbf{a} \\times \\mathbf{b}|$, where $k = \\frac{2}{7}$ (shown)."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "It is further given that $\\mathbf{b}$ is a unit vector.<br>Give the geometrical meaning of $|\\mathbf{a} \\cdot \\mathbf{b}|$.",
        type: "self",
        solution:
          "Since $\\mathbf{b}$ is a unit vector, $|\\mathbf{a} \\cdot \\mathbf{b}|$ represents the length of projection of $OA$ onto the line $OB$."
      },
      {
        label: "(v)",
        marks: 3,
        prompt: "If $|\\mathbf{a} \\cdot \\mathbf{b}| = \\frac{1}{2}|\\mathbf{a}|$, find the perpendicular distance of point $A$ to $OB$, leaving your answer in terms of $|\\mathbf{a}|$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 150" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Triangle O (45,110), foot N (135,110), A (135,30), B (205,110) -->
  <line x1="45" y1="110" x2="205" y2="110" stroke-width="1.5"/>
  <polyline points="199,106 205,110 199,114" fill="none" stroke-width="1.5"/>
  <line x1="45" y1="110" x2="135" y2="30" stroke="#4a8fe7" stroke-width="1.8"/>
  <line x1="135" y1="30" x2="135" y2="110" stroke="#cf5652" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Right angle marker -->
  <polyline points="126,110 126,101 135,101" fill="none" stroke-width="1"/>
  <!-- Angle arc -->
  <path d="M 70,110 A 25,25 0 0 0 64,93" fill="none" stroke-width="1"/>
  <text x="74" y="103" stroke="none" font-style="italic">θ</text>
  <!-- Labels -->
  <text x="33" y="122" stroke="none" font-style="italic">O</text>
  <text x="132" y="23" stroke="none" font-style="italic">A</text>
  <text x="210" y="114" stroke="none" font-style="italic">B</text>
  <text x="72" y="62" stroke="none" fill="#4a8fe7">|a|</text>
  <text x="76" y="128" stroke="none">|a · b| = ½|a|</text>
  <text x="142" y="75" stroke="none" fill="#cf5652">d = |a| sin θ</text>
</svg>`,
        solution:
          "<strong>Method 1 (Pythagoras' Theorem):</strong><br>" +
          "Perpendicular distance from $A$ to $OB$<br>" +
          "$= \\sqrt{|\\mathbf{a}|^2 - |\\mathbf{a} \\cdot \\mathbf{b}|^2} = \\sqrt{|\\mathbf{a}|^2 - \\left(\\frac{1}{2}|\\mathbf{a}|\\right)^2} = \\sqrt{\\frac{3}{4}|\\mathbf{a}|^2} = \\frac{\\sqrt{3}}{2}|\\mathbf{a}|$.<br><br>" +
          "<strong>Method 2 (Angle):</strong><br>" +
          "Since $|\\mathbf{b}| = 1$, $|\\mathbf{a}||\\mathbf{b}|\\cos\\theta = \\frac{1}{2}|\\mathbf{a}| \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ$.<br>" +
          "Perpendicular distance $= |\\mathbf{a}|\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}|\\mathbf{a}|$."
      }
    ]
  },

  // ==================== Q12 ====================
  {
    id: "MI-2025-P1-Q12",
    year: 2025,
    school: "MI",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "A tank initially contains 100 litres of pure water. A brine solution, with a salt concentration of $0.2\\text{ kg}$ per litre, is pumped into the tank continuously at a constant rate of 5 litres per minute. At the same time, a well-stirred mixture of the tank's contents is continuously drained from the tank at the same rate of 5 litres per minute. At time $t$ minutes, the mass of salt in the tank is denoted by $Q$ kilograms.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Explain briefly why the volume of the mixture in the tank remains constant.",
        type: "self",
        solution:
          "At any point in time, the inflow rate of the brine solution equals the outflow rate of the mixture (both 5 litres per minute). Therefore, the volume of the mixture in the tank remains constant at 100 litres."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "By considering the salt concentration of the brine solution, show that salt enters the tank at a constant rate of $1\\text{ kg}$ per minute.",
        type: "self",
        solution:
          "Salt inflow rate $= \\text{Salt concentration of brine} \\times \\text{Inflow rate} = 0.2 \\times 5 = 1\\text{ kg/min}$ (shown)."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Hence, by also considering the mass of salt leaving the tank, show that the rate of change of the mass of salt in the tank can be expressed as<br>$$\\frac{\\mathrm{d}Q}{\\mathrm{d}t} = 1 - \\frac{Q}{20}.$$",
        type: "self",
        solution:
          "At time $t$, the salt concentration in the tank is $\\frac{Q}{100}\\text{ kg/litre}$.<br>" +
          "Salt outflow rate $= \\frac{Q}{100} \\times 5 = \\frac{Q}{20}\\text{ kg/min}$.<br><br>" +
          "Therefore, $\\frac{\\mathrm{d}Q}{\\mathrm{d}t} = \\text{inflow rate} - \\text{outflow rate} = 1 - \\frac{Q}{20}$ (shown)."
      },
      {
        label: "(iv)",
        marks: 5,
        prompt: "Solve the differential equation found in part (iii) to find $Q$ in terms of $t$.",
        type: "auto",
        mode: "expr",
        vars: { t: [1, 10, 20] },
        answer: "20 - 20*e^(-t/20)",
        placeholder: "Expression in terms of t",
        solution:
          "$\\frac{\\mathrm{d}Q}{\\mathrm{d}t} = \\frac{20 - Q}{20}$<br>" +
          "$\\int \\frac{1}{20 - Q}\\,\\mathrm{d}Q = \\int \\frac{1}{20}\\,\\mathrm{d}t$<br>" +
          "$-\\ln|20 - Q| = \\frac{t}{20} + c$<br>" +
          "$20 - Q = A\\mathrm{e}^{-\\frac{t}{20}}$ where $A = \\pm \\mathrm{e}^{-c}$.<br><br>" +
          "When $t = 0$, $Q = 0$ (initially pure water):<br>" +
          "$20 - 0 = A\\mathrm{e}^{0} \\implies A = 20$.<br><br>" +
          "$\\therefore Q = 20 - 20\\mathrm{e}^{-\\frac{t}{20}}$."
      },
      {
        label: "(v)",
        marks: 2,
        prompt: "Determine the time taken for the salt concentration in the tank to reach $0.1\\text{ kg}$ per litre.",
        type: "auto",
        mode: "number",
        answer: "20*ln(2)",
        placeholder: "Exact or 3 s.f. (minutes)",
        solution:
          "When salt concentration $= 0.1\\text{ kg/litre}$, mass of salt $Q = 0.1 \\times 100 = 10\\text{ kg}$.<br>" +
          "$10 = 20 - 20\\mathrm{e}^{-\\frac{t}{20}} \\implies \\mathrm{e}^{-\\frac{t}{20}} = \\frac{1}{2}$<br>" +
          "$-\\frac{t}{20} = \\ln\\left(\\frac{1}{2}\\right) = -\\ln 2$<br>" +
          "$t = 20\\ln 2 \\approx 13.9\\text{ minutes}$ (3 s.f.)."
      },
      {
        label: "(vi)",
        marks: 1,
        prompt: "What happens to $Q$ for large values of $t$?",
        type: "self",
        solution:
          "As $t$ → ∞, $\\mathrm{e}^{-\\frac{t}{20}}$ → $0$, so $Q = 20 - 20\\mathrm{e}^{-\\frac{t}{20}}$ → $20$.<br>" +
          "Hence $Q$ increases and approaches $20\\text{ kg}$."
      }
    ]
  }
]);
