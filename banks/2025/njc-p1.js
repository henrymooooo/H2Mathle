window.registerQuestions([
  {
    id: "NJC-2025-P1-Q1",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "Paul is helping his friends to convert their foreign currencies back to Singapore Dollars. The amounts of foreign currencies converted, and the total amount received in Singapore Dollars are shown in the following table.<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>Alex</th><th>Nicholas</th><th>Palmer</th><th>Maybelline</th></tr><tr><th>US Dollar (USD)</th><td>150</td><td>250</td><td>425</td><td>$a$</td></tr><tr><th>Japanese Yen (JPY)</th><td>5500</td><td>9500</td><td>1000</td><td>0</td></tr><tr><th>Chinese Yuan (CNY)</th><td>1000</td><td>2200</td><td>2000</td><td>1200</td></tr><tr><th>Total amount: Singapore Dollars (SGD)</th><td>419.30</td><td>797.20</td><td>913.10</td><td>568.40</td></tr></table></div>However, he has forgotten the amount of US Dollar that Maybelline has passed to him.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Assuming that, for each foreign currency, the exchange rate quoted for each of the friends is the same, calculate the value of $a$.",
        type: "auto",
        mode: "number",
        answer: "275",
        exactRequired: true,
        placeholder: "Exact value of a",
        solution: "Let the exchange rates for US Dollar, Japanese Yen and Chinese Yuan be $1$ to $U$, $1$ to $J$ and $1$ to $C$ Singapore Dollars respectively.<br>$$150U + 5500J + 1000C = 419.30$$<br>$$250U + 9500J + 2200C = 797.20$$<br>$$425U + 1000J + 2000C = 913.10$$<br>Solving using a GC:<br>$$U = 1.2856, \\quad J = 0.00862, \\quad C = 0.17905$$<br>For Maybelline:<br>$$1.2856a + 1200(0.17905) = 568.40$$<br>$$1.2856a = 353.54 \\implies a = 275$$"
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q2",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong>",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "Find the values of $z$ and $w$ that satisfy the equations $(1+\\mathrm{i})z + 2w = -2 + 4\\mathrm{i}$ and $3z - w = 4 + 2\\mathrm{i}$, expressing your answers in the form $c + d\\mathrm{i}$, where $c, d \\in \\mathbf{R}$.",
        type: "self",
        solution: "From the second equation:<br>$$3z - w = 4 + 2\\mathrm{i} \\implies 6z - 2w = 8 + 4\\mathrm{i}$$<br>Adding this to $(1+\\mathrm{i})z + 2w = -2 + 4\\mathrm{i}$:<br>$$(7+\\mathrm{i})z = 6 + 8\\mathrm{i}$$<br>$$z = \\frac{6+8\\mathrm{i}}{7+\\mathrm{i}} \\times \\frac{7-\\mathrm{i}}{7-\\mathrm{i}} = \\frac{42 - 6\\mathrm{i} + 56\\mathrm{i} + 8}{50} = \\frac{50 + 50\\mathrm{i}}{50} = 1 + \\mathrm{i}$$<br>Substituting into $w = 3z - 4 - 2\\mathrm{i}$:<br>$$w = 3(1+\\mathrm{i}) - 4 - 2\\mathrm{i} = -1 + \\mathrm{i}$$<br>Hence $z = 1 + \\mathrm{i}$ and $w = -1 + \\mathrm{i}$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Points $W$ and $Z$ represent $w$ and $z$ found in part (i). Find $\\frac{w}{z}$ in the form $p + \\mathrm{i}q$, where $p, q \\in \\mathbf{R}$. Hence, state the transformation that maps line segment $OZ$ onto line segment $OW$.",
        type: "self",
        solution: "$$\\frac{w}{z} = \\frac{-1+\\mathrm{i}}{1+\\mathrm{i}} \\times \\frac{1-\\mathrm{i}}{1-\\mathrm{i}} = \\frac{-1 + \\mathrm{i} + \\mathrm{i} + 1}{1^2 + 1^2} = \\mathrm{i}$$<br>Since $w = \\mathrm{i}z$, line segment $OW$ is obtained by an anti-clockwise rotation of line segment $OZ$ by $\\frac{\\pi}{2}$ radians (or $90^\\circ$) about the origin $O$."
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q3",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities"],
    stem: "Consider the curves $y = -\\frac{b}{x-a}$ and $y = |x-a|$, where $a$ and $b$ are positive constants and $a > b > 1$.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "On the same axes, sketch the graphs of $y = -\\frac{b}{x-a}$ and $y = |x-a|$, where $a$ and $b$ are positive constants and $a > b > 1$. State, in terms of $a$ and $b$, the coordinates of the points where the curves cross the $x$- and $y$-axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 240" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="150" x2="300" y2="150" stroke-width="1.2" />
  <polyline points="294,146 300,150 294,154" fill="none" stroke-width="1.2" />
  <line x1="90" y1="230" x2="90" y2="15" stroke-width="1.2" />
  <polyline points="86,21 90,15 94,21" fill="none" stroke-width="1.2" />
  <text x="304" y="154" stroke="none" font-style="italic">x</text>
  <text x="84" y="13" stroke="none" font-style="italic">y</text>
  <text x="77" y="163" stroke="none" font-style="italic">O</text>
  <line x1="175" y1="18" x2="175" y2="230" stroke-dasharray="4,3" opacity="0.6" stroke-width="1.1" />
  <text x="179" y="226" stroke="none" font-size="10">x = a</text>
  <polyline points="35,10 175,150 290,35" fill="none" stroke="#cf5652" stroke-width="1.8" />
  <text x="235" y="55" stroke="none" fill="#cf5652">y = |x − a|</text>
  <path d="M 20,141 Q 90,136 135,120 Q 160,100 168,20" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <path d="M 182,230 Q 189,170 220,160 Q 255,155 295,153" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <text x="180" y="34" stroke="none" fill="#4a8fe7">y = −b/(x − a)</text>
  <circle cx="90" cy="65" r="2.5" fill="#cf5652" stroke="none" />
  <text x="48" y="68" stroke="none" font-size="10">(0, a)</text>
  <circle cx="90" cy="133" r="2.5" fill="#4a8fe7" stroke="none" />
  <text x="38" y="130" stroke="none" font-size="10">(0, b/a)</text>
  <circle cx="175" cy="150" r="2.5" fill="#cf5652" stroke="none" />
  <text x="150" y="166" stroke="none" font-size="10">(a, 0)</text>
</svg>`,
        solution: "For $y = |x-a|$:<br>• $x$-intercept: $(a, 0)$<br>• $y$-intercept: $(0, a)$<br><br>For $y = -\\frac{b}{x-a}$:<br>• Vertical asymptote: $x = a$, horizontal asymptote: $y = 0$ (does not cross the $x$-axis)<br>• $y$-intercept: $\\left(0, \\frac{b}{a}\\right)$<br><br>Note that since $a > b > 1$, we have $\\frac{b}{a} < 1 < a$, so $\\left(0, \\frac{b}{a}\\right)$ lies below $(0, a)$ on the positive $y$-axis."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "Hence or otherwise, solve the inequality $-\\frac{b}{x-a} < |x-a|$.",
        type: "self",
        solution: "From the graph, the two curves intersect once for $x < a$, where $|x-a| = -(x-a)$:<br>$$-\\frac{b}{x-a} = -(x-a)$$<br>$$(x-a)^2 = b$$<br>$$x = a - \\sqrt{b} \\quad \\text{or} \\quad x = a + \\sqrt{b} \\; (\\text{rejected since } x < a)$$<br>From the sketch, the graph of $y = -\\frac{b}{x-a}$ lies strictly below $y = |x-a|$ when:<br>$$x < a - \\sqrt{b} \\quad \\text{or} \\quad x > a$$"
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q4",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "A curve has equation $y = \\mathrm{f}(x)$, where $\\mathrm{f}(x) = 1 - \\sqrt{q^2 - x^2}$ for $q > 1$.",
    parts: [
      {
        label: "(Intro)",
        marks: 1,
        prompt: "State the shape of $y = \\mathrm{f}(x)$.",
        type: "self",
        solution: "$$y = 1 - \\sqrt{q^2 - x^2} \\implies (y-1)^2 = q^2 - x^2 \\implies x^2 + (y-1)^2 = q^2$$<br>Since $y \\le 1$, the curve $y = \\mathrm{f}(x)$ is a <strong>semi-circle</strong> (lower half of a circle centred at $(0, 1)$ with radius $q$)."
      },
      {
        label: "(i)",
        marks: 3,
        prompt: "Sketch the curve $y = \\frac{1}{\\mathrm{f}(x)}$, giving the equations of any asymptotes and the coordinates of the end-points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 240" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="125" x2="300" y2="125" stroke-width="1.2" />
  <polyline points="294,121 300,125 294,129" fill="none" stroke-width="1.2" />
  <line x1="160" y1="230" x2="160" y2="15" stroke-width="1.2" />
  <polyline points="156,21 160,15 164,21" fill="none" stroke-width="1.2" />
  <text x="304" y="129" stroke="none" font-style="italic">x</text>
  <text x="154" y="13" stroke="none" font-style="italic">y</text>
  <text x="148" y="138" stroke="none" font-style="italic">O</text>
  <line x1="88" y1="18" x2="88" y2="230" stroke-dasharray="4,3" opacity="0.6" stroke-width="1.1" />
  <line x1="232" y1="18" x2="232" y2="230" stroke-dasharray="4,3" opacity="0.6" stroke-width="1.1" />
  <path d="M 65,105 Q 80,95 85,20" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <path d="M 255,105 Q 240,95 235,20" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <path d="M 92,228 Q 97,152 160,147 Q 223,152 228,228" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <circle cx="65" cy="105" r="3" fill="#4a8fe7" stroke="none" />
  <circle cx="255" cy="105" r="3" fill="#4a8fe7" stroke="none" />
  <text x="20" y="109" stroke="none">(−q, 1)</text>
  <text x="261" y="109" stroke="none">(q, 1)</text>
  <text x="92" y="118" stroke="none" font-size="9.5">x = −√(q²−1)</text>
  <text x="172" y="118" stroke="none" font-size="9.5">x = √(q²−1)</text>
  <circle cx="160" cy="147" r="2.5" fill="#4a8fe7" stroke="none" />
  <text x="164" y="160" stroke="none" font-size="9.5">(0, 1/(1−q))</text>
</svg>`,
        solution: "For $y = \\mathrm{f}(x) = 1 - \\sqrt{q^2 - x^2}$ with $q > 1$:<br>• Domain: $-q \\le x \\le q$.<br>• End-points of $y = \\mathrm{f}(x)$ are $(-q, 1)$ and $(q, 1)$, so end-points of $y = \\frac{1}{\\mathrm{f}(x)}$ are $(-q, 1)$ and $(q, 1)$ (closed points).<br>• $\\mathrm{f}(x) = 0 \\implies \\sqrt{q^2 - x^2} = 1 \\implies x = \\pm\\sqrt{q^2 - 1}$, giving vertical asymptotes $x = -\\sqrt{q^2 - 1}$ and $x = \\sqrt{q^2 - 1}$.<br>• Minimum point of $\\mathrm{f}(x)$ is $(0, 1-q)$ (where $1-q < 0$), giving a local maximum on $y = \\frac{1}{\\mathrm{f}(x)}$ at $\\left(0, \\frac{1}{1-q}\\right)$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Describe the transformations that map the graph of $y = \\mathrm{f}(x)$ to $y = -\\sqrt{1-x^2}$.",
        type: "self",
        solution: "Starting from $y = 1 - \\sqrt{q^2 - x^2}$:<br>1. Replace $y$ with $y+1$: $y = -\\sqrt{q^2 - x^2}$ (<strong>translation of $1$ unit in the negative $y$-direction</strong>).<br>2. Replace $x$ with $qx$: $y = -\\sqrt{q^2 - q^2 x^2} = -q\\sqrt{1-x^2}$ (<strong>scaling by a factor of $\\frac{1}{q}$ parallel to the $x$-axis</strong>).<br>3. Replace $y$ with $qy$: $y = -\\sqrt{1-x^2}$ (<strong>scaling by a factor of $\\frac{1}{q}$ parallel to the $y$-axis</strong>)."
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q5",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "The curve $C$ has equation $$y = \\frac{2x^2 + kx + 8}{x + p},$$ where $k$ and $p$ are constants. It is given that $C$ has a vertical asymptote $x = 2$ and a stationary point at $x = -4$.",
    parts: [
      {
        label: "(i)",
        marks: 5,
        prompt: "Find the equation of the oblique asymptote of $C$.",
        type: "self",
        solution: "Since $C$ has a vertical asymptote at $x = 2$, $p = -2$, so $y = \\frac{2x^2 + kx + 8}{x - 2}$.<br>Differentiating with respect to $x$:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{(x-2)(4x+k) - (2x^2+kx+8)}{(x-2)^2}$$<br>Since $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$ at $x = -4$:<br>$$(-4-2)(4(-4)+k) - (2(-4)^2 + k(-4) + 8) = 0$$<br>$$(-6)(-16+k) - (40 - 4k) = 0 \\implies 96 - 6k - 40 + 4k = 0 \\implies 2k = 56 \\implies k = 28$$<br>By long division:<br>$$y = \\frac{2x^2 + 28x + 8}{x-2} = 2x + 32 + \\frac{72}{x-2}$$<br>Hence the equation of the oblique asymptote of $C$ is $y = 2x + 32$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Sketch $C$, clearly labelling the equations of asymptotes and the coordinates of stationary points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 260" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="190" x2="300" y2="190" stroke-width="1.2" />
  <polyline points="294,186 300,190 294,194" fill="none" stroke-width="1.2" />
  <line x1="150" y1="250" x2="150" y2="15" stroke-width="1.2" />
  <polyline points="146,21 150,15 154,21" fill="none" stroke-width="1.2" />
  <text x="304" y="194" stroke="none" font-style="italic">x</text>
  <text x="144" y="13" stroke="none" font-style="italic">y</text>
  <text x="139" y="203" stroke="none" font-style="italic">O</text>
  <line x1="164" y1="18" x2="164" y2="250" stroke-dasharray="4,3" opacity="0.6" stroke-width="1.1" />
  <text x="168" y="242" stroke="none" font-size="10">x = 2</text>
  <line x1="55" y1="248" x2="265" y2="22" stroke-dasharray="4,3" opacity="0.6" stroke-width="1.1" />
  <text x="230" y="88" stroke="none" font-size="10">y = 2x + 32</text>
  <path d="M 62,248 Q 105,198 122,175 Q 134,164 143,174 Q 156,195 161,248" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <path d="M 168,22 Q 176,105 198,108 Q 218,105 262,32" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <circle cx="131" cy="171" r="2.8" fill="#4a8fe7" stroke="none" />
  <text x="86" y="166" stroke="none" font-size="10">(−4, 12)</text>
  <circle cx="198" cy="108" r="2.8" fill="#4a8fe7" stroke="none" />
  <text x="186" y="125" stroke="none" font-size="10">(8, 60)</text>
  <circle cx="150" cy="197" r="2.2" fill="#4a8fe7" stroke="none" />
  <text x="112" y="206" stroke="none" font-size="9">(0, −4)</text>
</svg>`,
        solution: "From $y = 2x + 32 + \\frac{72}{x-2}$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2 - \\frac{72}{(x-2)^2} = 0 \\implies (x-2)^2 = 36 \\implies x = -4$ or $x = 8$.<br>• Vertical asymptote: $x = 2$<br>• Oblique asymptote: $y = 2x + 32$<br>• Stationary points: local maximum at $(-4, 12)$ and local minimum at $(8, 60)$<br>• Axes intercepts: $(0, -4)$, $(-0.292, 0)$ and $(-13.7, 0)$."
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q6",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "This question is about geometric and arithmetic progressions.",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "An infinite geometric series $S$ has first term $1$ and non-zero common ratio $r$. It is given that the sum to infinity of $S$ is equal to the square of the sum of the first three terms of $S$. Show that $r$ satisfies the equation $r^4 + ar^3 + br^2 + cr + d = 0$, where $a, b, c$ and $d$ are constants to be determined.",
        type: "self",
        solution: "Since the sum to infinity $S$ exists, $|r| < 1$ and $S = \\frac{1}{1-r}$, while $S_3 = \\frac{1-r^3}{1-r}$.<br>$$\\frac{1}{1-r} = \\left(\\frac{1-r^3}{1-r}\\right)^2$$<br>Multiplying by $(1-r)^2$ (since $1-r \\ne 0$):<br>$$1 - r = (1 - r^3)^2 = 1 - 2r^3 + r^6$$<br>$$r^6 - 2r^3 + r = 0$$<br>Since $r \\ne 0$, divide by $r$:<br>$$r^5 - 2r^2 + 1 = 0$$<br>Factorising out $(r-1)$:<br>$$(r-1)(r^4 + r^3 + r^2 - r - 1) = 0$$<br>Since $|r| < 1$ so $r \\ne 1$:<br>$$r^4 + r^3 + r^2 - r - 1 = 0$$<br>Hence $a = 1$, $b = 1$, $c = -1$, $d = -1$."
      },
      {
        label: "(a)(ii)",
        marks: 1,
        prompt: "Find the possible values of $r$.",
        type: "auto",
        mode: "number-list",
        answer: [-0.66099253, 0.84837490],
        placeholder: "Separate values with a comma (3 s.f.)",
        solution: "Solving $r^4 + r^3 + r^2 - r - 1 = 0$ by GC, subject to $|r| < 1$:<br>$$r = -0.661 \\quad \\text{or} \\quad r = 0.848 \\; (3\\text{ s.f.})$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "An arithmetic progression with $4n$ terms has first term $7$ and common difference $d$. Every $4^{\\text{th}}$ term is removed. Find the sum of the remaining terms in terms of $n$ and $d$.",
        type: "auto",
        mode: "expr",
        vars: { n: [2, 5, 10], d: [1, 3, -2] },
        answer: "6*d*n^2 - 3*d*n + 21*n",
        placeholder: "Expression in terms of n and d",
        solution: "Sum of first $4n$ terms:<br>$$S_{4n} = \\frac{4n}{2}\\left[2(7) + (4n-1)d\\right] = 28n + 8dn^2 - 2dn$$<br>The removed terms are $7+3d, 7+7d, 7+11d, \\ldots$ ($n$ terms, first term $7+3d$, common difference $4d$):<br>$$S_{\\text{removed}} = \\frac{n}{2}\\left[2(7+3d) + (n-1)(4d)\\right] = \\frac{n}{2}(14 + 2d + 4dn) = 7n + dn + 2dn^2$$<br>Sum of remaining terms:<br>$$(28n + 8dn^2 - 2dn) - (7n + dn + 2dn^2) = 6dn^2 - 3dn + 21n$$"
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q7",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "The curve $C$ is defined parametrically by $x = \\mathrm{e}^{4t}$, $y = t^2$, where $t \\ge 0$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find the Cartesian equation of $C$.",
        type: "self",
        solution: "From $x = \\mathrm{e}^{4t}$, we have $t = \\frac{\\ln x}{4}$. Substituting into $y = t^2$:<br>$$y = \\left(\\frac{\\ln x}{4}\\right)^2 = \\frac{1}{16}(\\ln x)^2 \\quad (\\text{for } x \\ge 1)$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "The tangent at point $P$ has the steepest gradient. Find the exact coordinates of $P$. [You do not need to show that the gradient at $P$ is the steepest.]",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "x =", answer: "e", exactRequired: true, placeholder: "Exact x-coordinate" },
          { label: "y =", answer: "1/16", exactRequired: true, placeholder: "Exact y-coordinate" }
        ],
        solution: "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{16} \\cdot 2(\\ln x) \\cdot \\frac{1}{x} = \\frac{\\ln x}{8x}$$<br>For steepest gradient, set $\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 0$:<br>$$\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = \\frac{1}{8}\\left(\\frac{1 - \\ln x}{x^2}\\right) = 0$$<br>Since $x \\ge 1$, $1 - \\ln x = 0 \\implies x = \\mathrm{e}$.<br>Then $y = \\frac{1}{16}(\\ln \\mathrm{e})^2 = \\frac{1}{16}$.<br>Hence $P = \\left(\\mathrm{e}, \\frac{1}{16}\\right)$."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Sketch $C$, indicating the coordinates of $P$ and the point where $C$ crosses the axes clearly.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 220" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="185" x2="295" y2="185" stroke-width="1.2" />
  <polyline points="289,181 295,185 289,189" fill="none" stroke-width="1.2" />
  <line x1="50" y1="205" x2="50" y2="18" stroke-width="1.2" />
  <polyline points="46,24 50,18 54,24" fill="none" stroke-width="1.2" />
  <text x="299" y="189" stroke="none" font-style="italic">x</text>
  <text x="44" y="15" stroke="none" font-style="italic">y</text>
  <text x="38" y="198" stroke="none" font-style="italic">O</text>
  <path d="M 75,185 C 102,185 112,165 130,148 C 165,115 215,82 280,52" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <circle cx="75" cy="185" r="3" fill="#4a8fe7" stroke="none" />
  <text x="64" y="202" stroke="none" font-size="10.5">(1, 0)</text>
  <circle cx="130" cy="148" r="3" fill="#cf5652" stroke="none" />
  <text x="138" y="154" stroke="none" fill="#cf5652" font-size="10.5">P(e, 1/16)</text>
</svg>`,
        solution: "When $t = 0$, $x = \\mathrm{e}^0 = 1$ and $y = 0$, so $C$ starts at $(1, 0)$ with horizontal tangent ($\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$). For $x > 1$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} > 0$, curving upwards (concave up) until the point of inflexion $P\\left(\\mathrm{e}, \\frac{1}{16}\\right)$, and curving concave down thereafter."
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q8",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Maclaurin Series"],
    stem: "<strong>In this question, you may use expansions from the List of Formulae and Results (MF27).</strong><br>It is given that $a > 0$.",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "Find, in terms of $a$, the series expansion of $\\frac{a}{a-x} - 1$, in ascending powers of $x$, up to and including the term in $x^2$. State, in terms of $a$, the range of $x$ for which the expansion is valid.",
        type: "self",
        solution: "$$\\frac{a}{a-x} - 1 = a(a-x)^{-1} - 1 = \\left(1 - \\frac{x}{a}\\right)^{-1} - 1$$<br>$$= \\left(1 + (-1)\\left(-\\frac{x}{a}\\right) + \\frac{(-1)(-2)}{2!}\\left(-\\frac{x}{a}\\right)^2 + \\ldots\\right) - 1 = \\frac{x}{a} + \\frac{x^2}{a^2} + \\ldots$$<br>Validity range: $\\left|-\\frac{x}{a}\\right| < 1 \\implies |x| < a$ (since $a > 0$), i.e. $-a < x < a$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Hence, find the Maclaurin expansion of $\\mathrm{e}^{\\frac{a}{a-x}-1}$ in ascending powers of $x$, up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 3], a: [4, 5, 7] },
        answer: "1 + x/a + 3*x^2/(2*a^2)",
        placeholder: "Expansion in terms of x and a",
        solution: "$$\\mathrm{e}^{\\frac{a}{a-x}-1} = \\mathrm{e}^{\\frac{x}{a} + \\frac{x^2}{a^2} + \\ldots}$$<br>$$= 1 + \\left(\\frac{x}{a} + \\frac{x^2}{a^2} + \\ldots\\right) + \\frac{1}{2}\\left(\\frac{x}{a} + \\frac{x^2}{a^2} + \\ldots\\right)^2 + \\ldots$$<br>$$= 1 + \\frac{x}{a} + \\frac{x^2}{a^2} + \\frac{x^2}{2a^2} + \\ldots = 1 + \\frac{x}{a} + \\frac{3}{2}\\frac{x^2}{a^2} + \\ldots$$"
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "Use the expansion in part (ii) to approximate $\\int_0^{\\frac{a}{2}} \\mathrm{e}^{\\frac{a}{a-x}-1}\\,\\mathrm{d}x$. Explain why this approximation is an under-estimation.",
        type: "self",
        solution: "$$\\int_0^{\\frac{a}{2}} \\mathrm{e}^{\\frac{a}{a-x}-1}\\,\\mathrm{d}x \\approx \\int_0^{\\frac{a}{2}} \\left(1 + \\frac{x}{a} + \\frac{3x^2}{2a^2}\\right)\\,\\mathrm{d}x$$<br>$$= \\left[x + \\frac{x^2}{2a} + \\frac{x^3}{2a^2}\\right]_0^{\\frac{a}{2}} = \\frac{a}{2} + \\frac{a^2/4}{2a} + \\frac{a^3/8}{2a^2} = \\frac{a}{2} + \\frac{a}{8} + \\frac{a}{16} = \\frac{11}{16}a$$<br><strong>Explanation:</strong> For $0 < x < \\frac{a}{2}$ (with $a > 0$), all neglected higher-order terms ($x^3, x^4, \\ldots$) in the Maclaurin expansion of $\\mathrm{e}^{\\frac{a}{a-x}-1}$ are strictly positive. Thus the approximating polynomial lies below $y = \\mathrm{e}^{\\frac{a}{a-x}-1}$ on $\\left(0, \\frac{a}{2}\\right)$, so the area under the approximating curve is smaller than the actual integral — giving an under-estimation."
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q9",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Integration"],
    stem: "Evaluate the following indefinite integrals.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find $\\int \\cos(3\\ln x)\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [1, 2, 5],
        answer: "x*cos(3*ln(x))/10 + 3*x*sin(3*ln(x))/10",
        placeholder: "Antiderivative in terms of x (+ C)",
        solution: "Using integration by parts twice (differentiating the trigonometric term, integrating $1$):<br>$$\\int \\cos(3\\ln x)\\,\\mathrm{d}x = x\\cos(3\\ln x) - \\int x\\left(-\\sin(3\\ln x)\\cdot\\frac{3}{x}\\right)\\mathrm{d}x$$<br>$$= x\\cos(3\\ln x) + 3\\int \\sin(3\\ln x)\\,\\mathrm{d}x$$<br>$$= x\\cos(3\\ln x) + 3\\left[x\\sin(3\\ln x) - \\int x\\cos(3\\ln x)\\cdot\\frac{3}{x}\\,\\mathrm{d}x\\right]$$<br>$$= x\\cos(3\\ln x) + 3x\\sin(3\\ln x) - 9\\int \\cos(3\\ln x)\\,\\mathrm{d}x$$<br>Hence:<br>$$10\\int \\cos(3\\ln x)\\,\\mathrm{d}x = x\\cos(3\\ln x) + 3x\\sin(3\\ln x) + c$$<br>$$\\int \\cos(3\\ln x)\\,\\mathrm{d}x = \\frac{x}{10}\\cos(3\\ln x) + \\frac{3x}{10}\\sin(3\\ln x) + C$$"
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Let $I$ be the indefinite integral $\\int \\frac{\\mathrm{P}(x)}{1-\\sqrt{x}}\\,\\mathrm{d}x$, $0 < x < 1$, where $\\mathrm{P}(x)$ is a polynomial in $x$. Find $I$ when $\\mathrm{P}(x) = 1 - x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.1, 0.4, 0.8],
        answer: "x + (2/3)*x^(3/2)",
        placeholder: "Antiderivative in terms of x (+ C)",
        solution: "$$\\int \\frac{1-x}{1-\\sqrt{x}}\\,\\mathrm{d}x = \\int \\frac{(1-\\sqrt{x})(1+\\sqrt{x})}{1-\\sqrt{x}}\\,\\mathrm{d}x = \\int (1 + \\sqrt{x})\\,\\mathrm{d}x = x + \\frac{2}{3}x^{\\frac{3}{2}} + C$$"
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "By using the substitution $u = 1 - \\sqrt{x}$, find $I$ when $\\mathrm{P}(x) = 1$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.1, 0.4, 0.8],
        answer: "-2*sqrt(x) - 2*ln(1 - sqrt(x))",
        placeholder: "Antiderivative in terms of x (+ C)",
        solution: "Let $u = 1 - \\sqrt{x} \\implies \\sqrt{x} = 1 - u$ and $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = -\\frac{1}{2\\sqrt{x}} = -\\frac{1}{2(1-u)}$, so $\\mathrm{d}x = -2(1-u)\\,\\mathrm{d}u$.<br>$$\\int \\frac{1}{1-\\sqrt{x}}\\,\\mathrm{d}x = \\int \\frac{1}{u} \\cdot (-2(1-u))\\,\\mathrm{d}u = 2\\int \\left(1 - \\frac{1}{u}\\right)\\mathrm{d}u$$<br>$$= 2(u - \\ln u) + c \\quad (\\text{since } 0 < x < 1 \\implies u > 0)$$<br>$$= 2\\left(1 - \\sqrt{x} - \\ln(1-\\sqrt{x})\\right) + c = -2\\sqrt{x} - 2\\ln(1-\\sqrt{x}) + C$$"
      },
      {
        label: "(b)(ii) (Hence)",
        marks: 2,
        prompt: "Hence find $I$ when $\\mathrm{P}(x) = x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0.1, 0.4, 0.8],
        answer: "-x - (2/3)*x^(3/2) - 2*sqrt(x) - 2*ln(1 - sqrt(x))",
        placeholder: "Antiderivative in terms of x (+ C)",
        solution: "$$\\int \\frac{x}{1-\\sqrt{x}}\\,\\mathrm{d}x = -\\int \\frac{1-x}{1-\\sqrt{x}}\\,\\mathrm{d}x + \\int \\frac{1}{1-\\sqrt{x}}\\,\\mathrm{d}x$$<br>$$= -x - \\frac{2}{3}x^{\\frac{3}{2}} - 2\\sqrt{x} - 2\\ln(1-\\sqrt{x}) + C$$"
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q10",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "A sequence of numbers $u_1, u_2, u_3, \\ldots$ has a sum $S_n$, where $S_n = \\sum_{r=1}^n u_r$. It is given that $$S_n = A - \\frac{2}{(n+1)!},$$ where $A$ is a non-zero constant.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Find the value of $A$ if $u_1 = 1$.",
        type: "auto",
        mode: "number",
        answer: "2",
        exactRequired: true,
        placeholder: "Exact value of A",
        solution: "$$u_1 = S_1 = 1 \\implies 1 = A - \\frac{2}{2!} \\implies A = 2$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Show that $u_n = \\frac{2}{(n+1)[(n-1)!]}$ for $n \\ge 1$.",
        type: "self",
        solution: "For $n \\ge 2$:<br>$$u_n = S_n - S_{n-1} = \\left(2 - \\frac{2}{(n+1)!}\\right) - \\left(2 - \\frac{2}{n!}\\right) = \\frac{2}{n!} - \\frac{2}{(n+1)!}$$<br>$$= \\frac{2(n+1) - 2}{(n+1)!} = \\frac{2n}{(n+1)!} = \\frac{2n}{(n+1)(n)[(n-1)!]} = \\frac{2}{(n+1)[(n-1)!]}$$<br>Checking $n = 1$: $\\frac{2}{(1+1)[(1-1)!]} = \\frac{2}{2(0!)} = 1 = u_1$.<br>Hence $u_n = \\frac{2}{(n+1)[(n-1)!]}$ for all $n \\ge 1$."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Find a recurrence relation in the form $u_{n+1} = [\\mathrm{f}(n)] u_n$.",
        type: "self",
        solution: "$$u_{n+1} = \\frac{2}{(n+2)(n!)}$$<br>$$\\frac{u_{n+1}}{u_n} = \\frac{2}{(n+2)(n!)} \\times \\frac{(n+1)[(n-1)!]}{2} = \\frac{n+1}{n(n+2)}$$<br>Hence $u_{n+1} = \\frac{n+1}{n(n+2)} u_n$."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "Explain why $S_n$ converges as $n$ → ∞.",
        type: "self",
        solution: "As $n$ → ∞, $(n+1)!$ → ∞, so $\\frac{2}{(n+1)!}$ → $0$.<br>Therefore $S_n = 2 - \\frac{2}{(n+1)!}$ converges to $2$."
      },
      {
        label: "(v)",
        marks: 3,
        prompt: "Hence, find the least value of $m$ such that the sum of the infinite series $u_m + u_{m+1} + u_{m+2} + \\ldots$ does not exceed $10^{-10}$.",
        type: "auto",
        mode: "number",
        answer: "14",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "$$u_m + u_{m+1} + u_{m+2} + \\ldots = 2 - S_{m-1} = 2 - \\left(2 - \\frac{2}{m!}\\right) = \\frac{2}{m!}$$<br>We require $\\frac{2}{m!} \\le 10^{-10}$.<br>By GC:<br>• When $m = 13$: $\\frac{2}{13!} = 3.21 \\times 10^{-10} > 10^{-10}$<br>• When $m = 14$: $\\frac{2}{14!} = 2.29 \\times 10^{-11} \\le 10^{-10}$<br>Hence the least value of $m$ is $14$."
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q11",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by:<br>$\\mathrm{f}(x) = \\frac{a}{2} + \\frac{4}{3}\\left(x - \\frac{1}{2}\\right)^2$ for $x \\in \\mathbf{R}$, $\\frac{1}{2} < x < 2$,<br>$\\mathrm{f}(x) = \\frac{a}{x}$ for $x \\in \\mathbf{R}$, $x \\ge 2$,<br>where $a$ is a positive constant.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find the range of $\\mathrm{f}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 220" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="190" x2="280" y2="190" stroke-width="1.2" />
  <polyline points="274,186 280,190 274,194" fill="none" stroke-width="1.2" />
  <line x1="65" y1="205" x2="65" y2="18" stroke-width="1.2" />
  <polyline points="61,24 65,18 69,24" fill="none" stroke-width="1.2" />
  <text x="284" y="194" stroke="none" font-style="italic">x</text>
  <text x="59" y="15" stroke="none" font-style="italic">y</text>
  <text x="53" y="203" stroke="none" font-style="italic">O</text>
  <path d="M 85,155 Q 115,148 135,55" fill="none" stroke="#cf5652" stroke-width="2" />
  <circle cx="85" cy="155" r="3" fill="#fff" stroke="#cf5652" stroke-width="1.8" />
  <circle cx="135" cy="55" r="3" fill="#fff" stroke="#cf5652" stroke-width="1.8" />
  <path d="M 135,155 Q 185,176 270,184" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <circle cx="135" cy="155" r="3" fill="#4a8fe7" stroke="none" />
  <text x="8" y="158" stroke="none" font-size="9.5">(1/2, a/2)</text>
  <text x="142" y="58" stroke="none" font-size="9.5">(2, a/2 + 3)</text>
  <text x="140" y="148" stroke="none" font-size="9.5">(2, a/2)</text>
</svg>`,
        solution: "• For $\\frac{1}{2} < x < 2$, $\\mathrm{f}(x) = \\frac{a}{2} + \\frac{4}{3}\\left(x - \\frac{1}{2}\\right)^2$ increases strictly from $\\frac{a}{2}$ (at $x = \\frac{1}{2}$, excluded) to $\\frac{a}{2} + \\frac{4}{3}\\left(\\frac{3}{2}\\right)^2 = \\frac{a}{2} + 3$ (at $x = 2$, excluded), giving $\\left(\\frac{a}{2}, \\frac{a}{2}+3\\right)$.<br>• For $x \\ge 2$, $\\mathrm{f}(x) = \\frac{a}{x}$ decreases strictly from $\\frac{a}{2}$ (included) towards $0$ (excluded), giving $\\left(0, \\frac{a}{2}\\right]$.<br>Combining both pieces, the range of $\\mathrm{f}$ is $\\mathrm{R}_{\\mathrm{f}} = \\left(0, \\frac{a}{2} + 3\\right)$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Find $\\mathrm{f}^{-1}(x)$ and state its domain.",
        type: "self",
        solution: "For $\\frac{1}{2} < x < 2$ (where $\\frac{a}{2} < y < \\frac{a}{2} + 3$):<br>$$y = \\frac{a}{2} + \\frac{4}{3}\\left(x - \\frac{1}{2}\\right)^2 \\implies x = \\frac{1}{2} + \\sqrt{\\frac{3}{4}\\left(y - \\frac{a}{2}\\right)} \\quad \\left(\\text{since } x > \\frac{1}{2}\\right)$$<br>For $x \\ge 2$ (where $0 < y \\le \\frac{a}{2}$):<br>$$y = \\frac{a}{x} \\implies x = \\frac{a}{y}$$<br>Therefore:<br>$\\mathrm{f}^{-1}(x) = \\frac{a}{x}$ for $x \\in \\mathbf{R}$, $0 < x \\le \\frac{a}{2}$,<br>$\\mathrm{f}^{-1}(x) = \\frac{1}{2} + \\sqrt{\\frac{3}{4}\\left(x - \\frac{a}{2}\\right)}$ for $x \\in \\mathbf{R}$, $\\frac{a}{2} < x < \\frac{a}{2} + 3$.<br>Domain of $\\mathrm{f}^{-1}$: $\\left(0, \\frac{a}{2} + 3\\right)$."
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "The function $\\mathrm{g}$ is defined by $\\mathrm{g}(x) = 3 + \\mathrm{e}^x$, for $x \\in \\mathbf{R}$. Show that $\\mathrm{fg}$ exists.",
        type: "self",
        solution: "The range of $\\mathrm{g}$ is $\\mathrm{R}_{\\mathrm{g}} = (3, \\text{∞})$ and the domain of $\\mathrm{f}$ is $\\mathrm{D}_{\\mathrm{f}} = \\left(\\frac{1}{2}, \\text{∞}\\right)$.<br>Since $\\mathrm{R}_{\\mathrm{g}} = (3, \\text{∞}) \\subseteq \\left(\\frac{1}{2}, \\text{∞}\\right) = \\mathrm{D}_{\\mathrm{f}}$, the composite function $\\mathrm{fg}$ exists."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Find the exact value of $k$ for which $\\mathrm{fg}(k) = \\frac{a}{7}$.",
        type: "auto",
        mode: "number",
        answer: "ln(4)",
        exactRequired: true,
        placeholder: "Exact value of k",
        solution: "Since $\\mathrm{g}(k) = 3 + \\mathrm{e}^k > 3 > 2$, we apply the second branch of $\\mathrm{f}$:<br>$$\\mathrm{fg}(k) = \\mathrm{f}(3 + \\mathrm{e}^k) = \\frac{a}{3 + \\mathrm{e}^k}$$<br>Equating to $\\frac{a}{7}$:<br>$$\\frac{a}{3 + \\mathrm{e}^k} = \\frac{a}{7} \\implies 3 + \\mathrm{e}^k = 7 \\implies \\mathrm{e}^k = 4 \\implies k = \\ln 4$$"
      }
    ]
  },
  {
    id: "NJC-2025-P1-Q12",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Vectors"],
    diagramSvg: `<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <polygon points="48,125 170,28 310,55" fill="rgba(91,155,213,0.16)" stroke="#2c2925" stroke-width="1.6" />
  <polygon points="105,113 170,28 170,82 105,172" fill="rgba(207,86,82,0.18)" stroke="#cf5652" stroke-width="1.4" />
  <line x1="48" y1="125" x2="48" y2="188" stroke-width="1.5" />
  <line x1="170" y1="28" x2="170" y2="82" stroke-width="1.5" />
  <line x1="310" y1="55" x2="310" y2="128" stroke-width="1.5" />
  <line x1="105" y1="113" x2="105" y2="172" stroke="#cf5652" stroke-width="1.4" />
  <line x1="48" y1="188" x2="310" y2="128" stroke-dasharray="4,3" opacity="0.65" />
  <line x1="48" y1="188" x2="170" y2="82" stroke-dasharray="4,3" opacity="0.65" />
  <line x1="170" y1="82" x2="310" y2="128" stroke-dasharray="4,3" opacity="0.65" />
  <line x1="48" y1="188" x2="72" y2="182" stroke-width="1.5" />
  <polyline points="66,180 72,182 68,186" fill="none" stroke-width="1.3" />
  <line x1="48" y1="188" x2="48" y2="164" stroke-width="1.5" />
  <polyline points="45,169 48,164 51,169" fill="none" stroke-width="1.3" />
  <line x1="48" y1="188" x2="34" y2="174" stroke-width="1.5" />
  <polyline points="35,179 34,174 39,175" fill="none" stroke-width="1.3" />
  <circle cx="48" cy="125" r="2.5" fill="#2c2925" />
  <circle cx="170" cy="28" r="2.5" fill="#2c2925" />
  <circle cx="310" cy="55" r="2.5" fill="#2c2925" />
  <circle cx="170" cy="82" r="2.5" fill="#2c2925" />
  <circle cx="310" cy="128" r="2.5" fill="#2c2925" />
  <circle cx="105" cy="113" r="2.5" fill="#cf5652" stroke="none" />
  <circle cx="105" cy="172" r="2.5" fill="#cf5652" stroke="none" />
  <text x="36" y="124" stroke="none" font-style="italic">A</text>
  <text x="167" y="21" stroke="none" font-style="italic">C</text>
  <text x="315" y="55" stroke="none" font-style="italic">B</text>
  <text x="42" y="203" stroke="none" font-style="italic">O</text>
  <text x="175" y="88" stroke="none" font-style="italic">E</text>
  <text x="315" y="136" stroke="none" font-style="italic">D</text>
  <text x="95" y="108" stroke="none" fill="#cf5652" font-style="italic">F</text>
  <text x="103" y="188" stroke="none" fill="#cf5652" font-style="italic">G</text>
  <text x="72" y="195" stroke="none" font-weight="bold" font-size="9.5">i</text>
  <text x="27" y="174" stroke="none" font-weight="bold" font-size="9.5">j</text>
  <text x="53" y="170" stroke="none" font-weight="bold" font-size="9.5">k</text>
</svg>`,
    stem: "A model of a triangular canopy that provides shade outdoors is shown above. With point $O$ taken as the origin, the canopy $ABC$ is held taut using three vertical columns given by $OA$, $DB$ and $EC$. The unit vectors $\\mathbf{i}$ and $\\mathbf{k}$ are defined with $\\mathbf{i}$ along $OD$, $\\mathbf{k}$ along $OA$, and unit vector $\\mathbf{j}$ is perpendicular to both. The bases of the vertical columns are anchored to the horizontal ground $ODE$, which is perpendicular to $OA$.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "State the cartesian equation of plane $OAB$.",
        type: "self",
        solution: "Since $OA$ is along $\\mathbf{k}$ and $OD$ is along $\\mathbf{i}$, the plane $OAB$ is the $xz$-plane, which has cartesian equation $y = 0$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Points $A$ and $B$ have position vectors given by $OA = 3\\mathbf{k}$ and $OB = 10\\mathbf{i} + 4\\mathbf{k}$. A marking, given by point $M$, is to be placed on the line segment $AB$. Find the position vector $OM$ in terms of a parameter $\\lambda$, stating the range of $\\lambda$.",
        type: "self",
        solution: "$$OM = OA + \\lambda(OB - OA) = \\begin{pmatrix} 0 \\\\ 0 \\\\ 3 \\end{pmatrix} + \\lambda\\begin{pmatrix} 10 \\\\ 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 10\\lambda \\\\ 0 \\\\ 3+\\lambda \\end{pmatrix}, \\quad 0 \\le \\lambda \\le 1$$"
      },
      {
        label: "(iii)",
        marks: 1,
        prompt: "Point $C$ has position vector given by $OC = 6\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}$. The plan is to lay cables to connect $M$ to $C$ and then $C$ to $E$. All cables are laid in straight lines and have negligible thickness. Explain why it is not possible for ∠$MCE$ to be $90^\\circ$.",
        type: "self",
        solution: "Since $EC$ is vertical (parallel to $\\mathbf{k}$), for $MC$ and $EC$ to be perpendicular we require:<br>$$MC \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 6 - 10\\lambda \\\\ 4 \\\\ -1 - \\lambda \\end{pmatrix} \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix} = 0$$<br>$$-1 - \\lambda = 0 \\implies \\lambda = -1$$<br>Since $M$ lies on line segment $AB$, $0 \\le \\lambda \\le 1$, so $\\lambda = -1$ is impossible. (Equivalently, the $z$-coordinate of $M$ is $3+\\lambda \\ge 3 > 2$, whereas perpendicularity requires $z = 2$.) Hence ∠$MCE$ cannot be $90^\\circ$."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Points $F$ and $G$ lie on lines $AB$ and $OD$ respectively. Party streamers, with negligible thickness, are laid in straight lines to connect $E$, $C$, $F$ and $G$. The quadrilateral formed lies on a plane with cartesian equation $x - y = 2$. Show that quadrilateral $ECFG$ is a trapezium.",
        type: "self",
        solution: "Both $F$ (on $AB$) and $G$ (on $OD$) lie on plane $OAB$ ($y = 0$) as well as on plane $ECFG$ ($x - y = 2$).<br>Solving $x - y = 2$ and $y = 0$ simultaneously gives $x = 2$, $y = 0$ and $z \\in \\mathbf{R}$, so the line of intersection $l_{FG}$ is:<br>$$\\mathbf{r} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 0 \\end{pmatrix} + \\mu\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\mu \\in \\mathbf{R}$$<br>Thus $FG$ is parallel to $\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$, which is parallel to the vertical column $CE$.<br>Since quadrilateral $ECFG$ has a pair of parallel opposite sides ($FG$ and $CE$), it is a trapezium."
      },
      {
        label: "(v)",
        marks: 5,
        prompt: "Find the shortest distance between $F$ and the line $CE$. Hence or otherwise, find the area enclosed by the streamers.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Shortest distance =", answer: "4*sqrt(2)", placeholder: "Exact or 3 s.f." },
          { label: "Area =", answer: "52*sqrt(2)/5", placeholder: "Exact or 3 s.f." }
        ],
        solution: "Since $F$ lies on $x - y = 2$ and $AB$ ($\\begin{pmatrix} 10\\lambda \\\\ 0 \\\\ 3+\\lambda \\end{pmatrix}$):<br>$$10\\lambda - 0 = 2 \\implies \\lambda = \\frac{1}{5} = 0.2 \\implies OF = \\begin{pmatrix} 2 \\\\ 0 \\\\ 3.2 \\end{pmatrix}$$<br>Also $OG = \\begin{pmatrix} 2 \\\\ 0 \\\\ 0 \\end{pmatrix}$ and $OE = \\begin{pmatrix} 6 \\\\ 4 \\\\ 0 \\end{pmatrix}$.<br>Since $FG$ and $CE$ are vertical lines perpendicular to the horizontal ground $z = 0$, the shortest distance between $F$ and line $CE$ is the horizontal distance $|EG|$:<br>$$|EG| = \\left|\\begin{pmatrix} 2 \\\\ 0 \\\\ 0 \\end{pmatrix} - \\begin{pmatrix} 6 \\\\ 4 \\\\ 0 \\end{pmatrix}\\right| = \\left|\\begin{pmatrix} -4 \\\\ -4 \\\\ 0 \\end{pmatrix}\\right| = \\sqrt{32} = 4\\sqrt{2} \\approx 5.66$$<br>With parallel sides $EC = 2$ and $FG = 3.2$ and perpendicular height $4\\sqrt{2}$:<br>$$\\text{Area of } ECFG = \\frac{1}{2}(2 + 3.2)(4\\sqrt{2}) = 10.4\\sqrt{2} = \\frac{52\\sqrt{2}}{5} \\approx 14.7\\text{ sq units}$$"
      }
    ]
  }
]);
