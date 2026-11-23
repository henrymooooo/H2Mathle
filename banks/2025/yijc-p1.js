window.registerQuestions([
  {
    id: "YIJC-2025-P1-Q1",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Show that the differential equation $$y\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2y\\right) = \\frac{x}{\\mathrm{e}^{4x+x^2}}$$ can be reduced by the substitution $z = y^2\\mathrm{e}^{4x}$ to $$\\frac{\\mathrm{d}z}{\\mathrm{d}x} = \\frac{2x}{\\mathrm{e}^{x^2}}.$$ Hence, find the general solution in the form $y^2 = \\mathrm{f}(x)$.",
        type: "self",
        solution: "Given $z = y^2\\mathrm{e}^{4x}$, differentiating with respect to $x$ using the product rule:<br>$$\\frac{\\mathrm{d}z}{\\mathrm{d}x} = 2y\\mathrm{e}^{4x}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 4y^2\\mathrm{e}^{4x} = 2\\mathrm{e}^{4x}y\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2y\\right)$$<br>Since $y\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2y\\right) = \\frac{x}{\\mathrm{e}^{4x+x^2}}$:<br>$$\\frac{\\mathrm{d}z}{\\mathrm{d}x} = 2\\mathrm{e}^{4x}\\cdot\\frac{x}{\\mathrm{e}^{4x+x^2}} = \\frac{2x}{\\mathrm{e}^{x^2}} \\quad (\\text{shown})$$<br>Integrating both sides with respect to $x$:<br>$$z = \\int 2x\\mathrm{e}^{-x^2}\\,\\mathrm{d}x = -\\mathrm{e}^{-x^2} + c$$<br>where $c$ is an arbitrary constant.<br>Substituting back $z = y^2\\mathrm{e}^{4x}$:<br>$$y^2\\mathrm{e}^{4x} = c - \\mathrm{e}^{-x^2}$$<br>$$y^2 = \\mathrm{e}^{-4x}\\left(c - \\mathrm{e}^{-x^2}\\right)$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q2",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "Ronald is writing a novel. He began his new novel on 1 March 2025, writing 23 pages on the first day. On each subsequent day, he writes $90\\%$ of the number of pages he has written the previous day.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the total number of pages Ronald will have written by 31 March 2025.",
        type: "auto",
        mode: "number",
        answer: "23*(1-0.9^31)/0.1",
        answers: ["23*(1-0.9^31)/0.1", "221"],
        placeholder: "Value to 3 s.f.",
        solution: "The number of pages Ronald writes each day forms a geometric progression with first term $a = 23$ and common ratio $r = 0.9$.<br>From 1 March to 31 March, there are 31 days:<br>$$S_{31} = \\frac{23(1 - 0.9^{31})}{1 - 0.9} = 221.22\\dots \\approx 221 \\text{ pages (3 s.f.)}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Sam is also writing a novel. He began writing his novel on 8 March 2025, writing 2 pages on the first day. On each subsequent day, he writes 1 more page than the day before.<br><br>Find the first date on which Sam writes more pages in a day than Ronald.",
        type: "self",
        solution: "Let $n$ be the day number starting with $n = 1$ on 1 March 2025. Since Sam starts 7 days later (on 8 March, $n = 8$), on day $n$ ($n \\ge 8$):<br>Sam's pages written on day $n$: $a_n = 2 + [(n - 7) - 1](1) = n - 6$<br>Ronald's pages written on day $n$: $b_n = 23(0.9)^{n-1}$<br><div class='q-table-wrap'><table class='q-table'><tr><th>$n$</th><th>$a_n$</th><th>$b_n$</th></tr><tr><td>12</td><td>6</td><td>7.22</td></tr><tr><td>13</td><td>7</td><td>6.50</td></tr><tr><td>14</td><td>8</td><td>5.85</td></tr></table></div><br>The least $n$ such that $a_n > b_n$ is $n = 13$.<br>Therefore, the first date is <strong>13 March 2025</strong>."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the first date on which Sam's total number of pages written exceeds Ronald's.",
        type: "self",
        solution: "On day $n$ ($n \\ge 8$):<br>Sam's total pages written: $c_n = \\frac{n-7}{2}\\left(2(2) + [(n-7) - 1](1)\\right) = \\frac{(n-7)(n-4)}{2}$<br>Ronald's total pages written: $d_n = \\frac{23(1 - 0.9^n)}{1 - 0.9}$<br><div class='q-table-wrap'><table class='q-table'><tr><th>$n$</th><th>$c_n$</th><th>$d_n$</th></tr><tr><td>26</td><td>209</td><td>215.14</td></tr><tr><td>27</td><td>230</td><td>216.63</td></tr><tr><td>28</td><td>252</td><td>217.96</td></tr></table></div><br>The least $n$ such that $c_n > d_n$ is $n = 27$.<br>Therefore, the first date is <strong>27 March 2025</strong>."
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q3",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Maclaurin Series"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the series expansion of $\\frac{1}{\\sqrt{1+5x}}$, up to and including the term in $x^2$. State the range of values of $x$ for which the expansion is valid.",
        type: "self",
        solution: "$$\\frac{1}{\\sqrt{1+5x}} = (1 + 5x)^{-\\frac{1}{2}} = 1 + \\left(-\\frac{1}{2}\\right)(5x) + \\frac{\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{2!}(5x)^2 + \\dots$$<br>$$= 1 - \\frac{5}{2}x + \\frac{75}{8}x^2 + \\dots$$<br>The expansion is valid for $|5x| < 1$, i.e. $-\\frac{1}{5} < x < \\frac{1}{5}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence, use the substitution $x = \\frac{1}{20}$ to obtain an approximation of $\\sqrt{5}$, expressing your answer as a fraction.",
        type: "auto",
        mode: "number",
        answer: "575/256",
        answers: ["575/256", "256/115"],
        exactRequired: true,
        placeholder: "Exact fraction",
        solution: "Substituting $x = \\frac{1}{20}$ into the expansion:<br>RHS: $1 - \\frac{5}{2}\\left(\\frac{1}{20}\\right) + \\frac{75}{8}\\left(\\frac{1}{20}\\right)^2 = 1 - \\frac{1}{8} + \\frac{3}{128} = \\frac{115}{128}$<br><br><strong>Method 1:</strong><br>LHS: $\\left(1 + 5\\left(\\frac{1}{20}\\right)\\right)^{-\\frac{1}{2}} = \\left(\\frac{5}{4}\\right)^{-\\frac{1}{2}} = \\sqrt{\\frac{4}{5}} = \\frac{2\\sqrt{5}}{5}$<br>$$\\frac{2\\sqrt{5}}{5} \\approx \\frac{115}{128} \\implies \\sqrt{5} \\approx \\frac{575}{256}$$<br><strong>Method 2:</strong><br>LHS: $\\frac{2}{\\sqrt{5}} \\approx \\frac{115}{128} \\implies \\sqrt{5} \\approx \\frac{256}{115}$"
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Without any further calculation, explain whether using the substitution $x = -\\frac{4}{25}$ gives a better approximation of $\\sqrt{5}$ than the substitution used in part (b).",
        type: "self",
        solution: "Since $\\left|\\frac{1}{20}\\right| = 0.05 < \\left|-\\frac{4}{25}\\right| = 0.16$, $x = \\frac{1}{20}$ is closer to $0$ than $x = -\\frac{4}{25}$.<br>Hence, using $x = -\\frac{4}{25}$ does <strong>not</strong> give a better approximation of $\\sqrt{5}$."
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q4",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "A curve has parametric equations $x = \\frac{4t^3}{3} - t$, $y = t - 3t^2$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "For the part of the curve where $x > 0$, find the equation of the tangent to the curve which is parallel to the $y$-axis.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 4t^2 - 1, \\quad \\frac{\\mathrm{d}y}{\\mathrm{d}t} = 1 - 6t, \\quad \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1 - 6t}{4t^2 - 1}$$<br>For a tangent parallel to the $y$-axis, $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 0$:<br>$$4t^2 - 1 = 0 \\implies t = -\\frac{1}{2} \\text{ or } t = \\frac{1}{2}$$<br>When $t = \\frac{1}{2}$, $x = \\frac{4}{3}\\left(\\frac{1}{8}\\right) - \\frac{1}{2} = -\\frac{1}{3} < 0$ (rejected since $x > 0$).<br>When $t = -\\frac{1}{2}$, $x = \\frac{4}{3}\\left(-\\frac{1}{8}\\right) + \\frac{1}{2} = \\frac{1}{3} > 0$.<br>Therefore, the equation of the tangent is $x = \\frac{1}{3}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the coordinates of the point where the tangent meets the curve again.",
        type: "auto",
        mode: "tuple",
        answer: [1/3, -2],
        exactRequired: true,
        placeholder: "Coordinates (x, y)",
        solution: "Substitute $x = \\frac{1}{3}$ into $x = \\frac{4t^3}{3} - t$:<br>$$\\frac{4t^3}{3} - t = \\frac{1}{3} \\implies 4t^3 - 3t - 1 = 0$$<br>$$(2t + 1)^2(t - 1) = 0 \\implies t = -\\frac{1}{2} \\text{ or } t = 1$$<br>At $t = 1$, $x = \\frac{1}{3}$ and $y = 1 - 3(1)^2 = -2$.<br>Hence the tangent meets the curve again at $\\left(\\frac{1}{3}, -2\\right)$."
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q5",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Without using a calculator, solve the inequality $$\\frac{9x - 8}{x^2 + 2x - 3} \\ge 2.$$",
        type: "self",
        solution: "$$\\frac{9x - 8}{x^2 + 2x - 3} - 2 \\ge 0$$<br>$$\\frac{9x - 8 - 2(x^2 + 2x - 3)}{x^2 + 2x - 3} \\ge 0$$<br>$$\\frac{-2x^2 + 5x - 2}{x^2 + 2x - 3} \\ge 0 \\implies \\frac{2x^2 - 5x + 2}{x^2 + 2x - 3} \\le 0$$<br>$$\\frac{(x - 2)(2x - 1)}{(x + 3)(x - 1)} \\le 0$$<br>Critical values: $x = -3, \\frac{1}{2}, 1, 2$ (with $x \\ne -3, 1$).<br>Testing signs across the intervals gives:<br>$$-3 < x \\le \\frac{1}{2} \\quad \\text{or} \\quad 1 < x \\le 2$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence solve the inequality $$\\frac{9\\ln x - 8}{(\\ln x)^2 + 2\\ln x - 3} \\ge 2.$$",
        type: "self",
        solution: "Replacing $x$ with $\\ln x$ in the result from part (a):<br>$$-3 < \\ln x \\le \\frac{1}{2} \\quad \\text{or} \\quad 1 < \\ln x \\le 2$$<br>Exponentiating throughout:<br>$$\\mathrm{e}^{-3} < x \\le \\mathrm{e}^{\\frac{1}{2}} \\quad \\text{or} \\quad \\mathrm{e} < x \\le \\mathrm{e}^2$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q6",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 280 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Axes -->
      <line x1="25" y1="95" x2="260" y2="95" stroke-width="1.2"/>
      <polyline points="254,91 260,95 254,99" fill="none" stroke-width="1.2"/>
      <text x="264" y="99" stroke="none" font-style="italic">x</text>
      <line x1="150" y1="195" x2="150" y2="15" stroke-width="1.2"/>
      <polyline points="146,21 150,15 154,21" fill="none" stroke-width="1.2"/>
      <text x="137" y="20" stroke="none" font-style="italic">y</text>
      <text x="137" y="108" stroke="none" font-style="italic">O</text>
      <text x="155" y="32" stroke="none">x = 0</text>
      <!-- Oblique asymptote y = a + bx -->
      <line x1="45" y1="20" x2="250" y2="160" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
      <text x="72" y="29" stroke="none" font-style="italic">y = a + bx</text>
      <!-- Left branch: approaches oblique asymptote from below, crosses x-axis at c, goes to -inf at x=0- -->
      <path d="M 45 25 C 85 52, 118 76, 128 95 C 138 115, 144 150, 147 195" fill="none" stroke="#4a8fe7" stroke-width="2"/>
      <text x="118" y="108" stroke="none" font-style="italic">c</text>
      <!-- Right branch: from -inf at x=0+, local max at (d, e), approaches oblique asymptote from below -->
      <path d="M 153 195 C 155 150, 160 120, 173 115 C 188 112, 215 138, 248 164" fill="none" stroke="#4a8fe7" stroke-width="2"/>
      <circle cx="173" cy="115" r="2.8" fill="#4a8fe7" stroke="none"/>
      <text x="155" y="111" stroke="none" font-style="italic">(d, e)</text>
    </svg>`,
    stem: "The diagram shows the graph of $y = \\mathrm{f}(x)$. The graph has asymptotes $y = a + bx$ and $x = 0$, intersects the $x$-axis at the point $(c, 0)$ and has a turning point $(d, e)$.<br><br>Sketch the following graphs on separate diagrams, labelling the equations of any asymptotes and the coordinates of any points where the graphs cross the axes and of any turning points.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "$y = 3\\mathrm{f}(x+c)$",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 215" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="105" x2="262" y2="105" stroke-width="1.2"/>
          <polyline points="256,101 262,105 256,109" fill="none" stroke-width="1.2"/>
          <text x="266" y="109" stroke="none" font-style="italic">x</text>
          <line x1="115" y1="200" x2="115" y2="15" stroke-width="1.2"/>
          <polyline points="111,21 115,15 119,21" fill="none" stroke-width="1.2"/>
          <text x="122" y="22" stroke="none" font-style="italic">y</text>
          <text x="102" y="118" stroke="none" font-style="italic">O</text>
          <!-- Vertical asymptote x = -c (> 0) -->
          <line x1="145" y1="18" x2="145" y2="200" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
          <text x="150" y="34" stroke="none" font-style="italic">x = -c</text>
          <!-- Oblique asymptote y = 3(a + b(x+c)) -->
          <line x1="35" y1="22" x2="245" y2="175" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
          <text x="38" y="16" stroke="none" font-size="10" font-style="italic">y = 3bx + 3a + 3bc</text>
          <!-- Left branch passes through O(115, 105) -->
          <path d="M 35 28 C 75 58, 102 84, 115 105 C 128 128, 138 158, 142 200" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Right branch with local max at (d-c, 3e) -->
          <path d="M 148 200 C 151 155, 157 132, 170 128 C 185 125, 212 152, 243 179" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="170" cy="128" r="2.8" fill="#4a8fe7" stroke="none"/>
          <text x="174" y="145" stroke="none" font-style="italic">(d - c, 3e)</text>
        </svg>`,
        solution: "Since $c < 0$, replacing $x$ by $x + c$ translates the graph in the positive $x$-direction by $-c$ units, and multiplying by $3$ scales the graph parallel to the $y$-axis by a factor of $3$.<br>• Vertical asymptote: $x = -c$ (with $-c > 0$).<br>• Oblique asymptote: $y = 3(a + b(x+c)) = 3bx + 3a + 3bc$.<br>• Intercept: passes through the origin $(0, 0)$.<br>• Turning point: $(d - c, 3e)$ (local maximum)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "$y = \\frac{1}{\\mathrm{f}(x)}$",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 205" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="100" x2="260" y2="100" stroke-width="1.2"/>
          <polyline points="254,96 260,100 254,104" fill="none" stroke-width="1.2"/>
          <text x="264" y="104" stroke="none" font-style="italic">x</text>
          <line x1="140" y1="190" x2="140" y2="15" stroke-width="1.2"/>
          <polyline points="136,21 140,15 144,21" fill="none" stroke-width="1.2"/>
          <text x="128" y="22" stroke="none" font-style="italic">y</text>
          <text x="128" y="95" stroke="none" font-style="italic">O</text>
          <text x="24" y="114" stroke="none" font-style="italic">y = 0</text>
          <!-- Vertical asymptote x = c (< 0) -->
          <line x1="105" y1="15" x2="105" y2="190" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
          <text x="72" y="26" stroke="none" font-style="italic">x = c</text>
          <!-- Left branch x < c: positive, approaches y=0 from above, goes to +inf at x=c- -->
          <path d="M 22 97 C 65 95, 92 86, 98 60 C 101 44, 103 28, 103.5 18" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Middle & right branch x > c: from -inf at x=c+, rises to O(0,0), drops to local min at (d, 1/e), approaches y=0 from below -->
          <path d="M 107 188 C 110 155, 118 118, 140 100 C 150 108, 158 134, 168 134 C 180 134, 200 106, 252 102" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="168" cy="134" r="2.8" fill="#4a8fe7" stroke="none"/>
          <text x="172" y="148" stroke="none" font-style="italic">(d, 1/e)</text>
        </svg>`,
        solution: "• Vertical asymptote at the $x$-intercept of $y = \\mathrm{f}(x)$: $x = c$ ($c < 0$).<br>• Horizontal asymptote: $y = 0$ (since $\\mathrm{f}(x)$ → ±∞ as $x$ → ∓∞).<br>• As $x$ → $0$, $\\mathrm{f}(x)$ → −∞, so $\\frac{1}{\\mathrm{f}(x)}$ → $0^-$ (meets the origin $O(0, 0)$ from below).<br>• The local maximum $(d, e)$ becomes a local minimum at $\\left(d, \\frac{1}{e}\\right)$ in the fourth quadrant."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "$y = \\mathrm{f}'(x)$",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 205" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="100" x2="260" y2="100" stroke-width="1.2"/>
          <polyline points="254,96 260,100 254,104" fill="none" stroke-width="1.2"/>
          <text x="264" y="104" stroke="none" font-style="italic">x</text>
          <line x1="130" y1="190" x2="130" y2="15" stroke-width="1.2"/>
          <polyline points="126,21 130,15 134,21" fill="none" stroke-width="1.2"/>
          <text x="118" y="22" stroke="none" font-style="italic">y</text>
          <text x="118" y="113" stroke="none" font-style="italic">O</text>
          <text x="95" y="38" stroke="none" font-style="italic">x = 0</text>
          <!-- Horizontal asymptote y = b (< 0) -->
          <line x1="22" y1="125" x2="255" y2="125" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
          <text x="24" y="118" stroke="none" font-style="italic">y = b</text>
          <!-- Left branch x < 0: below y=b, decreases to -inf as x -> 0- -->
          <path d="M 22 128 C 75 130, 112 138, 122 162 C 126 172, 128 182, 128.5 190" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Right branch x > 0: from +inf as x -> 0+, crosses (d, 0), approaches y=b from above -->
          <path d="M 133 20 C 136 52, 144 82, 160 100 C 176 116, 205 122, 255 123" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="160" cy="100" r="2.8" fill="#4a8fe7" stroke="none"/>
          <text x="150" y="115" stroke="none" font-style="italic">(d, 0)</text>
        </svg>`,
        solution: "• Vertical asymptote: $x = 0$.<br>• Horizontal asymptote: $y = b$ (since the gradient approaches $b < 0$ as $x$ → ±∞).<br>• $x$-intercept: $(d, 0)$ (corresponding to the stationary point at $x = d$).<br>• For $x < 0$, $\\mathrm{f}'(x) < b < 0$ and $\\mathrm{f}'(x)$ → −∞ as $x$ → $0^-$.<br>• For $x > 0$, $\\mathrm{f}'(x) > 0$ for $0 < x < d$ (approaching +∞ as $x$ → $0^+$), and $b < \\mathrm{f}'(x) < 0$ for $x > d$."
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q7",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "On the same diagram, sketch the graphs $y = |2x - 1|$ and $y = x^2 - 4x - 2$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 310 230" width="310" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: origin at (90, 150), x scale=25, y scale=8.5 -->
          <line x1="20" y1="150" x2="295" y2="150" stroke-width="1.2"/>
          <polyline points="289,146 295,150 289,154" fill="none" stroke-width="1.2"/>
          <text x="298" y="154" stroke="none" font-style="italic">x</text>
          <line x1="90" y1="220" x2="90" y2="14" stroke-width="1.2"/>
          <polyline points="86,20 90,14 94,20" fill="none" stroke-width="1.2"/>
          <text x="77" y="21" stroke="none" font-style="italic">y</text>
          <text x="77" y="162" stroke="none" font-style="italic">O</text>
          <!-- y = |2x - 1|: (-2.5,6)->(27.5,99), (0.5,0)->(102.5,150), (7,13)->(265,39.5) -->
          <polyline points="27.5,99 102.5,150 268,37.4" fill="none" stroke="#cf5652" stroke-width="1.9"/>
          <text x="18" y="92" stroke="none" fill="#cf5652" font-style="italic">y = |2x - 1|</text>
          <!-- y = x^2 - 4x - 2: plotted accurately -->
          <path d="M 40 65 Q 140 337 252.5 28.9" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <text x="186" y="28" stroke="none" fill="#4a8fe7" font-style="italic">y = x² - 4x - 2</text>
          <!-- Key points -->
          <circle cx="102.5" cy="150" r="2.5" fill="#cf5652" stroke="none"/>
          <text x="103" y="163" stroke="none" font-size="9.5">(0.5, 0)</text>
          <circle cx="90" cy="141.5" r="2.2" fill="#cf5652" stroke="none"/>
          <text x="94" y="140" stroke="none" font-size="9.5">1</text>
          <circle cx="90" cy="167" r="2.2" fill="#4a8fe7" stroke="none"/>
          <text x="72" y="172" stroke="none" font-size="9.5">-2</text>
          <circle cx="140" cy="201" r="2.5" fill="#4a8fe7" stroke="none"/>
          <text x="142" y="213" stroke="none" font-size="9.5">(2, -6)</text>
          <!-- Intersections (-1,3) and (6.16, 11.32) -->
          <circle cx="65" cy="124.5" r="2.8" fill="#2c2925" stroke="none"/>
          <circle cx="244" cy="53.8" r="2.8" fill="#2c2925" stroke="none"/>
        </svg>`,
        solution: "• $y = |2x - 1|$ is a V-shaped graph with vertex at $\\left(\\frac{1}{2}, 0\\right)$ and $y$-intercept $(0, 1)$.<br>• $y = x^2 - 4x - 2 = (x - 2)^2 - 6$ is an upward-opening parabola with minimum point $(2, -6)$, $y$-intercept $(0, -2)$, and $x$-intercepts $2 \\pm \\sqrt{6} \\approx -0.449, 4.45$.<br>• The two graphs intersect at $(-1, 3)$ and $(6.16, 11.3)$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence find the set of values of $x$ for which $|2x - 1| < x^2 - 4x - 2$.",
        type: "self",
        solution: "From the GC, the graphs intersect at $x = -1$ and $x = 6.16$ (3 s.f.) (exact: $3 + \\sqrt{10}$).<br>From the sketch, the parabola lies strictly above $y = |2x - 1|$ when $x < -1$ or $x > 6.16$.<br>Hence the required set of values is:<br>$$\\{x \\in \\mathbb{R} : x < -1 \\text{ or } x > 6.16\\}$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Without using a calculator, find the range of values of $k$ for which $|2x - 1| = x^2 - 4x - 2 + k$ has only positive real roots.",
        type: "self",
        solution: "For $|2x - 1| = x^2 - 4x - 2 + k$ to have only positive real roots, the graphs of $y = |2x - 1|$ and $y = x^2 - 4x - 2 + k$ must intersect only for $x > 0$.<br><br><strong>Lower bound for $k$</strong> (when both graphs have the same $y$-intercept at $x = 0$):<br>$$|2(0) - 1| = 0^2 - 4(0) - 2 + k \\implies 1 = -2 + k \\implies k = 3$$<br>Since $x = 0$ is not positive, we require $k > 3$.<br><br><strong>Upper bound for $k$</strong> (when $y = x^2 - 4x - 2 + k$ intersects the right branch $y = 2x - 1$):<br>$$2x - 1 = x^2 - 4x - 2 + k \\implies x^2 - 6x + (k - 1) = 0$$<br>For real roots, discriminant $\\Delta \\ge 0$:<br>$$(-6)^2 - 4(1)(k - 1) \\ge 0 \\implies 36 - 4k + 4 \\ge 0 \\implies 4k \\le 40 \\implies k \\le 10$$<br>(Note that when $k = 10$, $x = 3 > \\frac{1}{2}$, which lies on the right branch.)<br>Hence $3 < k \\le 10$."
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q8",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Differentiation", "Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find the exact value of $$\\int_0^{\\frac{1}{4}\\pi} \\mathrm{e}^x \\cos 2x \\,\\mathrm{d}x.$$",
        type: "auto",
        mode: "number",
        answer: "(2*e^(pi/4)-1)/5",
        exactRequired: true,
        placeholder: "Exact value in terms of e and pi",
        solution: "Let $I = \\int_0^{\\frac{\\pi}{4}} \\mathrm{e}^x \\cos 2x \\,\\mathrm{d}x$. Applying integration by parts twice:<br>$$I = \\left[\\mathrm{e}^x \\cos 2x\\right]_0^{\\frac{\\pi}{4}} - \\int_0^{\\frac{\\pi}{4}} \\mathrm{e}^x (-2\\sin 2x)\\,\\mathrm{d}x$$<br>$$= (0 - 1) + 2\\int_0^{\\frac{\\pi}{4}} \\mathrm{e}^x \\sin 2x\\,\\mathrm{d}x$$<br>$$= -1 + 2\\left\\{\\left[\\mathrm{e}^x \\sin 2x\\right]_0^{\\frac{\\pi}{4}} - \\int_0^{\\frac{\\pi}{4}} \\mathrm{e}^x (2\\cos 2x)\\,\\mathrm{d}x\\right\\}$$<br>$$= -1 + 2\\mathrm{e}^{\\frac{\\pi}{4}} - 4I$$<br>$$5I = 2\\mathrm{e}^{\\frac{\\pi}{4}} - 1 \\implies I = \\frac{1}{5}\\left(2\\mathrm{e}^{\\frac{\\pi}{4}} - 1\\right)$$"
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{d}}{\\mathrm{d}x}\\ln(\\tan x) = \\frac{k}{\\sin 2x}$, where $k$ is a constant to be determined.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\ln(\\tan x) = \\frac{\\sec^2 x}{\\tan x} = \\frac{\\cos x}{\\sin x}\\cdot\\frac{1}{\\cos^2 x} = \\frac{1}{\\sin x \\cos x} = \\frac{2}{2\\sin x \\cos x} = \\frac{2}{\\sin 2x}$$<br>Thus $k = 2$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Hence find $$\\int \\cosec 2x \\left[\\ln(\\tan x) + \\cos 2x\\right]\\mathrm{d}x.$$",
        type: "auto",
        mode: "antiderivative",
        answer: "(ln(tan(x)))^2/4 + ln(abs(sin(2*x)))/2",
        domainPoints: [0.3, 0.6, 1.0],
        placeholder: "Expression in x (include + C)",
        solution: "$$\\int \\cosec 2x\\left[\\ln(\\tan x) + \\cos 2x\\right]\\mathrm{d}x = \\int \\left[\\frac{1}{2}\\cdot\\frac{2}{\\sin 2x}\\ln(\\tan x) + \\frac{\\cos 2x}{\\sin 2x}\\right]\\mathrm{d}x$$<br>$$= \\frac{1}{2}\\cdot\\frac{\\left[\\ln(\\tan x)\\right]^2}{2} + \\frac{1}{2}\\ln|\\sin 2x| + C$$<br>$$= \\frac{1}{4}\\left[\\ln(\\tan x)\\right]^2 + \\frac{1}{2}\\ln|\\sin 2x| + C$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q9",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong>",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "The complex numbers $z$ and $w$ satisfy the following equations.<br>$$\\mathrm{i}w + z = 3\\mathrm{i}$$<br>$$2w^* - 3z = 12 - \\mathrm{i}$$<br>Find $z$ and $w$, giving your answers in the form $x + \\mathrm{i}y$ where $x$ and $y$ are real numbers.",
        type: "self",
        solution: "From the first equation, $z = 3\\mathrm{i} - \\mathrm{i}w$. Substituting into the second equation:<br>$$2w^* - 3(3\\mathrm{i} - \\mathrm{i}w) = 12 - \\mathrm{i} \\implies 2w^* + 3\\mathrm{i}w = 12 + 8\\mathrm{i}$$<br>Let $w = a + b\\mathrm{i}$ where $a, b \\in \\mathbb{R}$. Then $w^* = a - b\\mathrm{i}$:<br>$$2(a - b\\mathrm{i}) + 3\\mathrm{i}(a + b\\mathrm{i}) = 12 + 8\\mathrm{i}$$<br>$$(2a - 3b) + (3a - 2b)\\mathrm{i} = 12 + 8\\mathrm{i}$$<br>Comparing real and imaginary parts:<br>$2a - 3b = 12$ --- (1)<br>$3a - 2b = 8$ --- (2)<br>$3\\times(1) - 2\\times(2)$: $-9b + 4b = 36 - 16 \\implies -5b = 20 \\implies b = -4$.<br>Substituting $b = -4$ into (1): $2a - 3(-4) = 12 \\implies a = 0$.<br>Hence $w = -4\\mathrm{i}$ and $z = 3\\mathrm{i} - \\mathrm{i}(-4\\mathrm{i}) = -4 + 3\\mathrm{i}$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "It is given that $\\mathrm{f}(x) = ax^4 + x^3 + bx^2 - 9x + 35$, where $a$ and $b$ are real numbers, and $\\mathrm{f}(x) = 0$ has no repeated roots. The graph of $y = \\mathrm{f}(x)$ intersects the $x$-axis exactly once.<br><br>Explain why $a = 0$.",
        type: "self",
        solution: "Since the graph of $y = \\mathrm{f}(x)$ intersects the $x$-axis exactly once and $\\mathrm{f}(x) = 0$ has no repeated roots, $\\mathrm{f}(x) = 0$ has a unique real root.<br>Since all coefficients of $\\mathrm{f}(x)$ are real, by the Conjugate Root Theorem, all non-real roots occur in complex conjugate pairs (an even number of non-real roots).<br>Hence $\\mathrm{f}(x) = 0$ has an odd total number of roots, so $\\mathrm{f}(x)$ must be an odd-degree polynomial. Therefore $a = 0$."
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "One of the roots of $\\mathrm{f}(x) = 0$ is $1 + 2\\mathrm{i}$. Find the other roots and the value of $b$.",
        type: "self",
        solution: "Since all coefficients of $\\mathrm{f}(x)$ are real, by the Conjugate Root Theorem, $1 - 2\\mathrm{i}$ is another root.<br>The corresponding quadratic factor is:<br>$$(x - 1 - 2\\mathrm{i})(x - 1 + 2\\mathrm{i}) = (x - 1)^2 - (2\\mathrm{i})^2 = x^2 - 2x + 5$$<br>With $a = 0$, $\\mathrm{f}(x) = x^3 + bx^2 - 9x + 35$. By comparing the leading and constant terms:<br>$$x^3 + bx^2 - 9x + 35 = (x^2 - 2x + 5)(x + 7)$$<br>Comparing coefficients of $x^2$: $b = 7 - 2 = 5$.<br>The real root is $x = -7$.<br>Therefore, the other roots are $1 - 2\\mathrm{i}$ and $-7$, and $b = 5$."
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q10",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Vectors"],
    stem: "Planes $p$ and $q$ are perpendicular. Plane $p$ has equation $\\mathbf{r} \\cdot (\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = 6$. Plane $q$ contains the line $l$ with equation $\\mathbf{r} = \\mathbf{j} - 12\\mathbf{k} + \\lambda(4\\mathbf{i} + \\mathbf{j} + 10\\mathbf{k})$ where $\\lambda$ is a parameter. The point $A$ has coordinates $(0, 1, -12)$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find a cartesian equation of $q$.",
        type: "self",
        solution: "Since planes $p$ and $q$ are perpendicular, the normal of $p$ is parallel to $q$. Since $l$ lies in $q$, the direction vector of $l$ is also parallel to $q$.<br>A normal vector to $q$ is:<br>$$\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} \\times \\begin{pmatrix} 4 \\\\ 1 \\\\ 10 \\end{pmatrix} = \\begin{pmatrix} 21 \\\\ -14 \\\\ -7 \\end{pmatrix} = 7\\begin{pmatrix} 3 \\\\ -2 \\\\ -1 \\end{pmatrix}$$<br>Since $A(0, 1, -12)$ lies on $l$ and hence on $q$:<br>$$\\mathbf{r} \\cdot \\begin{pmatrix} 3 \\\\ -2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\\\ -12 \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\\\ -2 \\\\ -1 \\end{pmatrix} = 10$$<br>A cartesian equation of $q$ is $3x - 2y - z = 10$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find a vector equation of the line $m$, where $p$ and $q$ meet.",
        type: "self",
        solution: "Solving the cartesian equations of $p$ and $q$ simultaneously:<br>$x + 2y - z = 6$<br>$3x - 2y - z = 10$<br>Adding the equations: $4x - 2z = 16 \\implies x = 4 + \\frac{1}{2}z$.<br>Subtracting: $2x - 4y = 4 \\implies y = 1 + \\frac{1}{4}z$.<br>Letting $z = 4\\mu$, we obtain a vector equation of $m$:<br>$$\\mathbf{r} = \\begin{pmatrix} 4 \\\\ 1 \\\\ 0 \\end{pmatrix} + \\mu\\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix}, \\quad \\mu \\in \\mathbb{R}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "$l$ passes through $p$ at point $B$. Point $C$ is the foot of the perpendicular of $A$ to $p$.<br><br>Find the position vector of $B$.",
        type: "auto",
        mode: "tuple",
        answer: [8, 3, 8],
        exactRequired: true,
        placeholder: "Vector (x, y, z)",
        solution: "Since $B$ is the intersection of $l$ and $p$:<br>$$\\left[\\begin{pmatrix} 0 \\\\ 1 \\\\ -12 \\end{pmatrix} + \\lambda\\begin{pmatrix} 4 \\\\ 1 \\\\ 10 \\end{pmatrix}\\right] \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} = 6$$<br>$$14 - 4\\lambda = 6 \\implies \\lambda = 2$$<br>Therefore, the position vector of $B$ is:<br>$$\\mathbf{b} = \\begin{pmatrix} 0 \\\\ 1 \\\\ -12 \\end{pmatrix} + 2\\begin{pmatrix} 4 \\\\ 1 \\\\ 10 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\\\ 8 \\end{pmatrix}$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Find the position vector of $C$.",
        type: "auto",
        mode: "tuple",
        answer: [-4/3, -5/3, -32/3],
        exactRequired: true,
        placeholder: "Vector (x, y, z)",
        solution: "The line through $A$ perpendicular to $p$ has equation $\\mathbf{r} = \\begin{pmatrix} 0 \\\\ 1 \\\\ -12 \\end{pmatrix} + s\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$.<br>Substituting into plane $p$:<br>$$\\left[\\begin{pmatrix} 0 \\\\ 1 \\\\ -12 \\end{pmatrix} + s\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}\\right] \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} = 6$$<br>$$14 + 6s = 6 \\implies s = -\\frac{4}{3}$$<br>Therefore, the position vector of $C$ is:<br>$$\\mathbf{c} = \\begin{pmatrix} 0 \\\\ 1 \\\\ -12 \\end{pmatrix} - \\frac{4}{3}\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} = \\frac{1}{3}\\begin{pmatrix} -4 \\\\ -5 \\\\ -32 \\end{pmatrix}$$"
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Find the exact area of triangle $ABC$.",
        type: "auto",
        mode: "number",
        answer: "28*sqrt(14)/3",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "From parts (c) and (d):<br>$$\\mathbf{b} - \\mathbf{a} = 2\\begin{pmatrix} 4 \\\\ 1 \\\\ 10 \\end{pmatrix}, \\quad \\mathbf{c} - \\mathbf{a} = -\\frac{4}{3}\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$$<br>Area of △$ABC$:<br>$$= \\frac{1}{2}\\left|2\\begin{pmatrix} 4 \\\\ 1 \\\\ 10 \\end{pmatrix} \\times \\left(-\\frac{4}{3}\\right)\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}\\right|$$<br>Using the cross product from part (a):<br>$$= \\frac{1}{2}(2)\\left(\\frac{4}{3}\\right)\\left|-7\\begin{pmatrix} 3 \\\\ -2 \\\\ -1 \\end{pmatrix}\\right| = \\frac{28}{3}\\sqrt{3^2 + (-2)^2 + (-1)^2} = \\frac{28\\sqrt{14}}{3} \\text{ units}^2$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q11",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $$\\mathrm{f} : x \\mapsto \\frac{1}{x^2 + 2x}, \\quad x \\in \\mathbb{R},\\; x < -1,\\; x \\ne -2.$$",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that $\\mathrm{f}$ has an inverse.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 190" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: origin at (170, 95) -->
          <line x1="20" y1="95" x2="225" y2="95" stroke-width="1.2"/>
          <polyline points="219,91 225,95 219,99" fill="none" stroke-width="1.2"/>
          <text x="228" y="99" stroke="none" font-style="italic">x</text>
          <line x1="170" y1="180" x2="170" y2="14" stroke-width="1.2"/>
          <polyline points="166,20 170,14 174,20" fill="none" stroke-width="1.2"/>
          <text x="175" y="21" stroke="none" font-style="italic">y</text>
          <!-- Vertical asymptote x = -2 at px=90 -->
          <line x1="90" y1="18" x2="90" y2="178" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
          <text x="72" y="185" stroke="none" font-style="italic">x = -2</text>
          <!-- Left branch x < -2 -->
          <path d="M 22 92 C 55 90, 78 82, 84 55 C 87 40, 88.5 26, 89 18" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <!-- Right branch -2 < x < -1: from -inf at x=-2+ up to open circle at (-1, -1) -> (130, 125) -->
          <path d="M 92 178 C 96 155, 108 130, 130 125" fill="none" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="130" cy="125" r="3.2" fill="#fff" stroke="#4a8fe7" stroke-width="2"/>
          <text x="134" y="122" stroke="none" font-size="9.5">(-1, -1)</text>
          <!-- Horizontal line y = k -->
          <line x1="20" y1="142" x2="215" y2="142" stroke="#cf5652" stroke-width="1.3"/>
          <text x="180" y="154" stroke="none" fill="#cf5652" font-style="italic">y = k</text>
        </svg>`,
        solution: "From the graph of $y = \\mathrm{f}(x)$ for $x < -1, x \\ne -2$, any horizontal line $y = k$ ($k \\in \\mathbb{R}$) intersects the graph of $\\mathrm{f}$ at most once.<br>Therefore, $\\mathrm{f}$ is one-to-one, and hence $\\mathrm{f}^{-1}$ exists."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Define $\\mathrm{f}^{-1}$ in similar form.",
        type: "self",
        solution: "Let $y = \\frac{1}{x^2 + 2x}$ for $x < -1, x \\ne -2$.<br>$$x^2 + 2x = \\frac{1}{y} \\implies (x + 1)^2 - 1 = \\frac{1}{y}$$<br>$$(x + 1)^2 = \\frac{1}{y} + 1 \\implies x = -1 \\pm \\sqrt{\\frac{1}{y} + 1}$$<br>Since $x < -1$, we reject the positive root, giving $x = -1 - \\sqrt{\\frac{1}{y} + 1}$.<br>From the graph, the range of $\\mathrm{f}$ is $y < -1$ or $y > 0$, which is the domain of $\\mathrm{f}^{-1}$.<br>Therefore:<br>$$\\mathrm{f}^{-1} : x \\mapsto -1 - \\sqrt{\\frac{1}{x} + 1}, \\quad x \\in \\mathbb{R},\\; x < -1 \\text{ or } x > 0$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The function $\\mathrm{g}$ is such that $\\mathrm{fg}(x) = x^2 + 1$. Find $\\mathrm{g}(x)$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0, 1, 2] },
        answer: "-1 - sqrt(1/(x^2 + 1) + 1)",
        placeholder: "Expression in terms of x",
        solution: "Applying $\\mathrm{f}^{-1}$ to both sides of $\\mathrm{fg}(x) = x^2 + 1$:<br>$$\\mathrm{g}(x) = \\mathrm{f}^{-1}(x^2 + 1) = -1 - \\sqrt{\\frac{1}{x^2 + 1} + 1}$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "The function $\\mathrm{h}$ is defined by $$\\mathrm{h} : x \\mapsto \\frac{1}{x^2}, \\quad x \\in \\mathbb{R},\\; x \\ne 0.$$ Only one of the composite functions $\\mathrm{fh}$ and $\\mathrm{hf}$ exists. Give a definition (including the domain) of the composite that exists, and explain why the other composite does not exist.",
        type: "self",
        solution: "We have $D_{\\mathrm{f}} = (-∞, -2) \\cup (-2, -1)$ and $R_{\\mathrm{h}} = (0, ∞)$.<br>Since $R_{\\mathrm{h}}$ is not a subset of $D_{\\mathrm{f}}$, the composite function $\\mathrm{fh}$ does <strong>not</strong> exist.<br><br>On the other hand, $R_{\\mathrm{f}} = (-∞, -1) \\cup (0, ∞)$ and $D_{\\mathrm{h}} = (-∞, 0) \\cup (0, ∞)$.<br>Since $R_{\\mathrm{f}}$ is a subset of $D_{\\mathrm{h}}$, the composite function $\\mathrm{hf}$ exists.<br>$$\\mathrm{hf}(x) = \\mathrm{h}\\left(\\frac{1}{x^2 + 2x}\\right) = (x^2 + 2x)^2 = x^4 + 4x^3 + 4x^2$$<br>Definition:<br>$$\\mathrm{hf} : x \\mapsto (x^2 + 2x)^2, \\quad x \\in \\mathbb{R},\\; x < -1,\\; x \\ne -2$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q12",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Integration"],
    diagramSvg: `<svg viewBox="0 0 240 220" width="240" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Axes: origin at (100, 180), scale 40 px/unit -->
      <line x1="20" y1="180" x2="225" y2="180" stroke-width="1.2"/>
      <polyline points="219,176 225,180 219,184" fill="none" stroke-width="1.2"/>
      <text x="228" y="184" stroke="none" font-style="italic">x</text>
      <line x1="100" y1="212" x2="100" y2="10" stroke-width="1.2"/>
      <polyline points="96,16 100,10 104,16" fill="none" stroke-width="1.2"/>
      <text x="87" y="18" stroke="none" font-style="italic">y</text>
      <text x="87" y="193" stroke="none" font-style="italic">O</text>
      <!-- Shaded region R between line y=2x and bottom-right arc of ellipse -->
      <path d="M 100 180 L 140 100 A 40 80 0 0 1 100 180 Z" fill="rgba(91,155,213,0.28)" stroke="none"/>
      <!-- Ellipse 4x^2 + (y-2)^2 = 4: center (100, 100), rx=40, ry=80 -->
      <ellipse cx="100" cy="100" rx="40" ry="80" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
      <!-- Line y = 2x -->
      <line x1="85" y1="210" x2="170" y2="40" stroke="#2c2925" stroke-width="1.5"/>
      <!-- Dotted horizontal guide to (1,2) -->
      <line x1="100" y1="100" x2="140" y2="100" stroke-dasharray="3,3" opacity="0.6" stroke-width="1"/>
      <circle cx="140" cy="100" r="2.6" fill="#2c2925" stroke="none"/>
      <text x="146" y="104" stroke="none">(1, 2)</text>
      <text x="122" y="160" stroke="none" font-style="italic" fill="#4a8fe7">R</text>
    </svg>`,
    stem: "The diagram shows the region $R$ bounded by the ellipse with equation $4x^2 + (y - 2)^2 = 4$ and the line $y = 2x$. The ellipse and the line intersect at the origin and the point $(1, 2)$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Use the substitution $x = \\sin\\theta$ to show that $$\\int_0^1 \\sqrt{1 - x^2}\\,\\mathrm{d}x = \\frac{\\pi}{4}.$$",
        type: "self",
        solution: "Let $x = \\sin\\theta$, so $\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = \\cos\\theta$.<br>When $x = 0$, $\\theta = 0$; when $x = 1$, $\\theta = \\frac{\\pi}{2}$.<br>$$\\int_0^1 \\sqrt{1 - x^2}\\,\\mathrm{d}x = \\int_0^{\\frac{\\pi}{2}} \\sqrt{1 - \\sin^2\\theta}\\cos\\theta\\,\\mathrm{d}\\theta = \\int_0^{\\frac{\\pi}{2}} \\cos^2\\theta\\,\\mathrm{d}\\theta$$<br>$$= \\int_0^{\\frac{\\pi}{2}} \\left(\\frac{1}{2} + \\frac{1}{2}\\cos 2\\theta\\right)\\mathrm{d}\\theta = \\left[\\frac{1}{2}\\theta + \\frac{1}{4}\\sin 2\\theta\\right]_0^{\\frac{\\pi}{2}}$$<br>$$= \\left(\\frac{\\pi}{4} + 0\\right) - (0 + 0) = \\frac{\\pi}{4} \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the area of $R$, giving your answer in terms of $\\pi$.",
        type: "auto",
        mode: "number",
        answer: "pi/2 - 1",
        exactRequired: true,
        placeholder: "Exact value in terms of pi",
        solution: "From $4x^2 + (y - 2)^2 = 4$, we have $(y - 2)^2 = 4(1 - x^2)$, so $y = 2 \\pm 2\\sqrt{1 - x^2}$.<br>For the lower boundary of $R$, $y \\le 2$, so $y = 2 - 2\\sqrt{1 - x^2}$.<br>$$\\text{Area of } R = \\frac{1}{2}(1)(2) - \\int_0^1 \\left(2 - 2\\sqrt{1 - x^2}\\right)\\mathrm{d}x$$<br>$$= 1 - \\left[2x\\right]_0^1 + 2\\int_0^1 \\sqrt{1 - x^2}\\,\\mathrm{d}x$$<br>$$= 1 - 2 + 2\\left(\\frac{\\pi}{4}\\right) = \\frac{\\pi}{2} - 1$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the volume of solid generated when $R$ is rotated $2\\pi$ radians about the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "2*pi^2 - 16*pi/3",
        placeholder: "Exact or 3 s.f.",
        solution: "$$\\text{Volume} = \\frac{1}{3}\\pi(2)^2(1) - \\pi\\int_0^1 \\left(2 - 2\\sqrt{1 - x^2}\\right)^2\\mathrm{d}x$$<br>$$= \\frac{4\\pi}{3} - \\pi\\int_0^1 \\left(8 - 8\\sqrt{1 - x^2} - 4x^2\\right)\\mathrm{d}x$$<br>$$= 2\\pi^2 - \\frac{16\\pi}{3} \\approx 2.98 \\text{ (3 s.f.)}$$"
      }
    ]
  },

  {
    id: "YIJC-2025-P1-Q13",
    year: 2025,
    school: "YIJC",
    paper: "2025 Prelim Paper 1",
    qNum: "Q13",
    category: "pure",
    topics: ["Differentiation", "Differential Equations"],
    stem: "Around November 2019, there was an outbreak of COVID-19 in Wuhan, China, caused by the coronavirus SARS-CoV-2 virus, which subsequently spread to the rest of the world. On 23 January 2020, there was 1 confirmed case in Singapore. 70 days later, there were 1 049 confirmed cases.<br><br>A student is interested to study the spread of the virus in Singapore and uses the model $\\frac{\\mathrm{d}N}{\\mathrm{d}t} = rN$, where $r$ is a positive constant, $N$ denotes the total number of confirmed cases, and $t$ is the number of days after 23 January 2020.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Solve the differential equation to express $N$ in terms of $t$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}N}{\\mathrm{d}t} = rN \\implies \\int \\frac{1}{N}\\,\\mathrm{d}N = \\int r\\,\\mathrm{d}t$$<br>$$\\ln|N| = rt + C \\implies N = A\\mathrm{e}^{rt} \\quad (A = \\pm\\mathrm{e}^C)$$<br>When $t = 0, N = 1$: $A = 1$, so $N = \\mathrm{e}^{rt}$.<br>When $t = 70, N = 1049$: $\\mathrm{e}^{70r} = 1049 \\implies r = \\frac{\\ln 1049}{70} \\approx 0.099366$ (5 s.f.) $\\approx 0.0994$ (3 s.f.).<br>Hence $N = \\mathrm{e}^{0.0994t}$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Use the model to estimate the number of days it will take to reach 1 000 000 cases.",
        type: "auto",
        mode: "number",
        answer: "140",
        answers: ["140", "70*ln(1000000)/ln(1049)"],
        placeholder: "Number of days",
        solution: "$$1\\,000\\,000 = \\mathrm{e}^{0.099366t} \\implies t = \\frac{\\ln(1\\,000\\,000)}{0.099366} \\approx 139.04$$<br>Thus it will take <strong>140 days</strong> (or 139 days to 3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "To contain the spread of the virus, Singapore implemented strict circuit breaker lockdown measures starting on 7 April 2020, when the number of confirmed cases stood at 1,481. By the time the measures were lifted 55 days later, the number of confirmed cases had surged to 35 292.<br><br>To study the spread of the virus during this period, the student uses a second model $\\frac{\\mathrm{d}N}{\\mathrm{d}u} = sN$, where $s$ is a positive constant, and $u$ is the number of days after 7 April 2020.<br><br>Find the value of $s$.",
        type: "auto",
        mode: "number",
        answer: "ln(35292/1481)/55",
        placeholder: "Exact or 3 s.f.",
        solution: "Similar to part (a), $N = B\\mathrm{e}^{su}$.<br>When $u = 0, N = 1481$: $B = 1481$.<br>When $u = 55, N = 35292$: $35292 = 1481\\mathrm{e}^{55s}$.<br>$$s = \\frac{1}{55}\\ln\\left(\\frac{35292}{1481}\\right) \\approx 0.0577 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "By comparing the values of $r$ and $s$, comment on whether the lockdown measures were effective in containing the spread of the virus.",
        type: "self",
        solution: "Since $s \\approx 0.0577 < r \\approx 0.0994$, the growth rate decreased significantly during the circuit breaker period, so the lockdown measures were effective in containing the spread of the virus."
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "Give a reason why neither model can estimate the actual number of confirmed cases accurately.",
        type: "self",
        solution: "The exponential models predict that the number of confirmed cases will increase indefinitely without bound, which is unrealistic since Singapore has a finite population size.<br>(Alternatively: the models assume the growth rate constants $r$ and $s$ remain constant, whereas in reality they change due to vaccinations, immunity, and safe management measures.)"
      },
      {
        label: "(f)",
        marks: 3,
        prompt: "On 30 December 2020, Singapore became the first country in Asia to start its COVID-19 vaccination campaign. The student now uses a third model $$\\frac{\\mathrm{d}N}{\\mathrm{d}v} = aN\\left(1 - \\frac{N}{b}\\right),$$ where $a$ and $b$ are positive constants, and $v$ is the number of days after 30 December 2020.<br><br>Find the maximum rate of change of $N$ in terms of $a$ and $b$.",
        type: "auto",
        mode: "expr",
        vars: { a: [1, 2, 5], b: [2, 3, 4] },
        answer: "a*b/4",
        placeholder: "Expression in terms of a and b",
        solution: "Completing the square on $\\frac{\\mathrm{d}N}{\\mathrm{d}v}$ as a quadratic in $N$:<br>$$\\frac{\\mathrm{d}N}{\\mathrm{d}v} = a\\left(N - \\frac{1}{b}N^2\\right) = -\\frac{a}{b}\\left(N^2 - bN\\right) = -\\frac{a}{b}\\left[\\left(N - \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}\\right]$$<br>$$= \\frac{ab}{4} - \\frac{a}{b}\\left(N - \\frac{b}{2}\\right)^2$$<br>Since $a, b > 0$, $\\frac{\\mathrm{d}N}{\\mathrm{d}v}$ is largest when $N = \\frac{b}{2}$, giving a maximum rate of change of $\\frac{ab}{4}$."
      }
    ]
  }
]);
