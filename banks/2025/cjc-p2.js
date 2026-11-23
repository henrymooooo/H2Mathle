window.registerQuestions([
  {
    id: "CJC-2025-P2-Q1",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations"],
    diagramSvg: `<svg viewBox="0 0 460 205" width="460" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Left panel: y = f(|x|), origin at (120, 110), x-scale: 18px/unit, y-scale: 13px/unit -->
  <line x1="20" y1="110" x2="220" y2="110" stroke-width="1.2" />
  <polyline points="215,107 220,110 215,113" fill="none" stroke-width="1.2" />
  <line x1="120" y1="185" x2="120" y2="18" stroke-width="1.2" />
  <polyline points="117,23 120,18 123,23" fill="none" stroke-width="1.2" />
  <text x="223" y="114" stroke="none" font-style="italic">x</text>
  <text x="116" y="13" stroke="none" font-style="italic">y</text>
  <text x="110" y="106" stroke="none" font-style="italic">O</text>
  <!-- Asymptotes: y=2 (y=84), x=-1 (102), x=1 (138) -->
  <line x1="25" y1="84" x2="215" y2="84" stroke-dasharray="4,3" stroke-width="1" opacity="0.6" />
  <line x1="102" y1="22" x2="102" y2="180" stroke-dasharray="4,3" stroke-width="1" opacity="0.6" />
  <line x1="138" y1="22" x2="138" y2="180" stroke-dasharray="4,3" stroke-width="1" opacity="0.6" />
  <!-- Centre arch between x=-1 and x=1, cusp/peak at (0,0) -> (120,110) -->
  <path d="M 105 178 C 109 145 114 114 120 110 C 126 114 131 145 135 178" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <!-- Right branch x > 1: crosses (2,0) -> (156,110), max at (3,4) -> (174,58), approaches y=2 (84) -->
  <path d="M 141 178 C 145 148 150 126 156 110 C 162 90 168 58 174 58 C 182 58 190 80 214 82" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <!-- Left branch x < -1: mirror of right -->
  <path d="M 99 178 C 95 148 90 126 84 110 C 78 90 72 58 66 58 C 58 58 50 80 26 82" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <!-- Labels left panel -->
  <text x="160" y="34" stroke="none" font-style="italic">y = f(|x|)</text>
  <text x="6" y="88" stroke="none" font-style="italic">y = 2</text>
  <text x="80" y="195" stroke="none" font-style="italic">x = −1</text>
  <text x="128" y="195" stroke="none" font-style="italic">x = 1</text>
  <text x="48" y="52" stroke="none">(−3, 4)</text>
  <text x="170" y="52" stroke="none">(3, 4)</text>
  <text x="58" y="124" stroke="none">(−2, 0)</text>
  <text x="155" y="124" stroke="none">(2, 0)</text>

  <!-- Right panel: y = f'(x), origin at (315, 110), x-scale: 22px/unit -->
  <line x1="250" y1="110" x2="445" y2="110" stroke-width="1.2" />
  <polyline points="440,107 445,110 440,113" fill="none" stroke-width="1.2" />
  <line x1="315" y1="185" x2="315" y2="18" stroke-width="1.2" />
  <polyline points="312,23 315,18 318,23" fill="none" stroke-width="1.2" />
  <text x="448" y="114" stroke="none" font-style="italic">x</text>
  <text x="311" y="13" stroke="none" font-style="italic">y</text>
  <text x="304" y="106" stroke="none" font-style="italic">O</text>
  <!-- Vertical asymptote x = 1 -> 337 -->
  <line x1="337" y1="22" x2="337" y2="180" stroke-dasharray="4,3" stroke-width="1" opacity="0.6" />
  <!-- Left branch x < 1: approaches y=0 from below, goes to -inf at x=1 -->
  <path d="M 255 112 C 295 113 324 118 334 178" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <!-- Right branch x > 1: +inf at x=1, crosses (3,0) -> (381,110), dips to min below x-axis, approaches y=0 from below -->
  <path d="M 340 24 C 344 75 352 100 364 110 C 370 116 374 152 382 152 C 392 152 396 118 440 112" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <!--Wait: x-intercept is at (3,0)! Let's place x-intercept at 364 (so scale ~24px for 2 units) and min to the right-->
  <text x="392" y="34" stroke="none" font-style="italic">y = f '(x)</text>
  <text x="326" y="195" stroke="none" font-style="italic">x = 1</text>
  <text x="366" y="122" stroke="none">(3, 0)</text>
  <text x="242" y="123" stroke="none" font-style="italic">y = 0</text>
</svg>`,
    stem: "The diagram above shows the graphs of $y = \\mathrm{f}(|x|)$ and $y = \\mathrm{f}'(x)$.<br>The graph of $y = \\mathrm{f}(|x|)$ has turning points at $(-3, 4)$ and $(3, 4)$, crosses the $x$-axis at $(-2, 0)$ and $(2, 0)$, and the equations of asymptotes are $x = -1$, $x = 1$ and $y = 2$. The graph of $y = \\mathrm{f}'(x)$ crosses the $x$-axis at $(3, 0)$, and the equations of asymptotes are $x = 1$ and $y = 0$.<br>On separate diagrams, sketch the following graphs, labelling clearly the equation(s) of any asymptote(s), coordinates of any axial intercept(s) and turning point(s) where applicable.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (105, 110) -->
  <line x1="25" y1="110" x2="260" y2="110" stroke-width="1.3" />
  <polyline points="254,106 260,110 254,114" fill="none" stroke-width="1.3" />
  <line x1="105" y1="185" x2="105" y2="18" stroke-width="1.3" />
  <polyline points="101,24 105,18 109,24" fill="none" stroke-width="1.3" />
  <text x="264" y="114" stroke="none" font-style="italic">x</text>
  <text x="101" y="13" stroke="none" font-style="italic">y</text>
  <text x="93" y="123" stroke="none" font-style="italic">O</text>
  <!-- Asymptotes: y=2 (82), x=1 (133) -->
  <line x1="25" y1="82" x2="250" y2="82" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.6" />
  <line x1="133" y1="22" x2="133" y2="180" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.6" />
  <!-- Left branch x < 1: approaches y=2 from below as x -> -inf, passes (0,0), goes to -inf at x=1 -->
  <path d="M 28 86 C 65 88 90 98 105 110 C 120 124 126 150 130 178" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Right branch x > 1: -inf at x=1, crosses (2,0) -> (161,110), max at (3,4) -> (189,54), approaches y=2 from above -->
  <path d="M 136 178 C 142 145 152 125 161 110 C 170 86 180 54 189 54 C 199 54 212 78 248 80" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <text x="195" y="34" stroke="none" font-style="italic">y = f(x)</text>
  <text x="6" y="86" stroke="none" font-style="italic">y = 2</text>
  <text x="122" y="194" stroke="none" font-style="italic">x = 1</text>
  <text x="164" y="124" stroke="none">(2, 0)</text>
  <text x="180" y="47" stroke="none">(3, 4)</text>
</svg>`,
        solution: "For $x \\ge 0$, $y = \\mathrm{f}(x)$ matches the right half of $y = \\mathrm{f}(|x|)$: passing through $(0, 0)$, vertical asymptote $x = 1$, $x$-intercept $(2, 0)$, maximum turning point $(3, 4)$, and horizontal asymptote $y = 2$.<br>For $x < 0$, since $\\mathrm{f}'(x) < 0$ for all $x < 1$ and $\\mathrm{f}'(x)$ → $0^-$ as $x$ → $-∞$, $\\mathrm{f}(x)$ is strictly decreasing from the horizontal asymptote $y = 2$ (as $x$ → $-∞$) down through $(0, 0)$ towards $-∞$ as $x$ → $1^-$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\frac{1}{\\mathrm{f}'(x)}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (105, 95) -->
  <line x1="25" y1="95" x2="260" y2="95" stroke-width="1.3" />
  <polyline points="254,91 260,95 254,99" fill="none" stroke-width="1.3" />
  <line x1="105" y1="185" x2="105" y2="18" stroke-width="1.3" />
  <polyline points="101,24 105,18 109,24" fill="none" stroke-width="1.3" />
  <text x="264" y="99" stroke="none" font-style="italic">x</text>
  <text x="101" y="13" stroke="none" font-style="italic">y</text>
  <text x="93" y="108" stroke="none" font-style="italic">O</text>
  <!-- Vertical asymptote x = 3 -> (175) -->
  <line x1="175" y1="22" x2="175" y2="180" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.6" />
  <!-- Left branch x < 3: from -inf as x -> -inf, rises through (1,0) -> (128,95) [open circle or crossing since f'(x) -> +-inf], goes to +inf at x=3 -->
  <path d="M 35 178 C 80 165 112 135 128 95 C 142 68 162 45 171 22" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Right branch x > 3: from -inf at x=3, rises to a maximum turning point below x-axis (where f' had a minimum), then goes to -inf as x -> +inf -->
  <path d="M 179 178 C 185 130 194 112 204 112 C 216 112 232 135 250 175" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <circle cx="128" cy="95" r="2.8" fill="#4a8fe7" stroke="#4a8fe7" />
  <text x="195" y="34" stroke="none" font-style="italic">y = 1 / f '(x)</text>
  <text x="164" y="194" stroke="none" font-style="italic">x = 3</text>
  <text x="109" y="88" stroke="none">(1, 0)</text>
</svg>`,
        solution: "• Where $\\mathrm{f}'(x) = 0$ at $x = 3$, $y = \\frac{1}{\\mathrm{f}'(x)}$ has a vertical asymptote $x = 3$.<br>• Where $\\mathrm{f}'(x)$ has a vertical asymptote at $x = 1$ (from $-∞$ on the left to $+∞$ on the right), $y = \\frac{1}{\\mathrm{f}'(x)}$ crosses the $x$-axis at $(1, 0)$ (from negative to positive).<br>• As $x$ → $\\pm∞$, $\\mathrm{f}'(x)$ → $0^-$, so $y = \\frac{1}{\\mathrm{f}'(x)}$ → $-∞$.<br>• For $x > 3$, the minimum turning point of $\\mathrm{f}'(x)$ (below the $x$-axis) becomes a maximum turning point of $\\frac{1}{\\mathrm{f}'(x)}$ (also below the $x$-axis)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Sketch the graph of $y = -\\mathrm{f}(|x - 1|)$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 205" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (125, 95), x-scale: 20px/unit, y-scale: 13px/unit -->
  <line x1="20" y1="95" x2="280" y2="95" stroke-width="1.2" />
  <polyline points="275,92 280,95 275,98" fill="none" stroke-width="1.2" />
  <line x1="125" y1="185" x2="125" y2="18" stroke-width="1.2" />
  <polyline points="122,23 125,18 128,23" fill="none" stroke-width="1.2" />
  <text x="284" y="99" stroke="none" font-style="italic">x</text>
  <text x="121" y="13" stroke="none" font-style="italic">y</text>
  <text x="129" y="107" stroke="none" font-style="italic">O</text>
  <!-- Asymptotes: y=-2 (121), x=0 (y-axis, 125), x=2 (165) -->
  <line x1="25" y1="121" x2="270" y2="121" stroke-dasharray="4,3" stroke-width="1" opacity="0.6" />
  <line x1="165" y1="22" x2="165" y2="180" stroke-dasharray="4,3" stroke-width="1" opacity="0.6" />
  <!-- Middle U-branch between x=0 and x=2, touches (1,0) -> (145, 95) -->
  <path d="M 128 24 C 132 58 138 92 145 95 C 152 92 158 58 162 24" fill="none" stroke="#4a8fe7" stroke-width="1.9" />
  <!-- Left branch x < 0: crosses (-1,0) -> (105,95), min (-2,-4) -> (85,147), approaches y=-2 (121) -->
  <path d="M 122 24 C 118 55 112 78 105 95 C 98 118 92 147 85 147 C 75 147 64 125 28 123" fill="none" stroke="#4a8fe7" stroke-width="1.9" />
  <!-- Right branch x > 2: crosses (3,0) -> (185,95), min (4,-4) -> (205,147), approaches y=-2 (121) -->
  <path d="M 168 24 C 172 55 178 78 185 95 C 192 118 198 147 205 147 C 215 147 226 125 268 123" fill="none" stroke="#4a8fe7" stroke-width="1.9" />
  <text x="200" y="34" stroke="none" font-style="italic">y = −f(|x − 1|)</text>
  <text x="4" y="125" stroke="none" font-style="italic">y = −2</text>
  <text x="114" y="195" stroke="none" font-style="italic">x = 0</text>
  <text x="155" y="195" stroke="none" font-style="italic">x = 2</text>
  <text x="72" y="160" stroke="none">(−2, −4)</text>
  <text x="192" y="160" stroke="none">(4, −4)</text>
  <text x="75" y="88" stroke="none">(−1, 0)</text>
  <text x="136" y="109" stroke="none">(1, 0)</text>
  <text x="187" y="88" stroke="none">(3, 0)</text>
</svg>`,
        solution: "Starting from $y = \\mathrm{f}(|x|)$:<br>1. Translate $1$ unit in the positive $x$-direction to get $y = \\mathrm{f}(|x - 1|)$.<br>2. Reflect in the $x$-axis to get $y = -\\mathrm{f}(|x - 1|)$.<br><strong>Asymptotes:</strong> $x = 0$, $x = 2$ and $y = -2$.<br><strong>$x$-intercepts:</strong> $(-1, 0)$, $(1, 0)$ and $(3, 0)$.<br><strong>Minimum turning points:</strong> $(-2, -4)$ and $(4, -4)$."
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q2",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Functions", "Graphs & Transformations"],
    stem: "Functions $\\mathrm{f}$ and $\\mathrm{g}$ are defined by<br>$\\mathrm{f}: x$ → $\\frac{4}{(x-4)^2}, \\quad x \\in \\mathbb{R},\\; x \\ne 4,$<br>$\\mathrm{g}: x$ → $\\ln\\left(1 + \\frac{1}{x}\\right), \\quad x \\in \\mathbb{R},\\; x > 0.$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$, stating the equations of any asymptotes, the coordinates of the points where it crosses the axes and the coordinates of the turning points, if any.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 190" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (105, 145) -->
  <line x1="20" y1="145" x2="260" y2="145" stroke-width="1.3" />
  <polyline points="254,141 260,145 254,149" fill="none" stroke-width="1.3" />
  <line x1="105" y1="175" x2="105" y2="18" stroke-width="1.3" />
  <polyline points="101,24 105,18 109,24" fill="none" stroke-width="1.3" />
  <text x="264" y="149" stroke="none" font-style="italic">x</text>
  <text x="101" y="13" stroke="none" font-style="italic">y</text>
  <text x="93" y="158" stroke="none" font-style="italic">O</text>
  <!-- Vertical asymptote x = 4 at x=155 -->
  <line x1="155" y1="22" x2="155" y2="170" stroke-dasharray="4,3" stroke-width="1.1" opacity="0.6" />
  <!-- Left branch x < 4: y-intercept (0, 1/4) -> (105, 128) -->
  <path d="M 25 142 C 75 140 95 135 105 128 C 128 112 142 75 151 24" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <!-- Right branch x > 4 -->
  <path d="M 159 24 C 168 75 182 112 205 128 C 222 138 238 141 255 142" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <text x="188" y="42" stroke="none" font-style="italic">y = f(x)</text>
  <text x="144" y="182" stroke="none" font-style="italic">x = 4</text>
  <text x="22" y="158" stroke="none" font-style="italic">y = 0</text>
  <text x="64" y="122" stroke="none">(0, 1/4)</text>
</svg>`,
        solution: "<strong>Asymptotes:</strong> $x = 4$ and $y = 0$.<br><strong>$y$-intercept:</strong> $\\left(0, \\frac{1}{4}\\right)$. No $x$-intercepts.<br><strong>Turning points:</strong> None."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Show that $\\mathrm{gf}$ exists. Hence find the rule, domain and range of $\\mathrm{gf}$.",
        type: "self",
        solution: "From the graph of $\\mathrm{f}$, the range of $\\mathrm{f}$ is $\\mathrm{R}_\\mathrm{f} = (0, ∞)$.<br>The domain of $\\mathrm{g}$ is $\\mathrm{D}_\\mathrm{g} = (0, ∞)$.<br>Since $\\mathrm{R}_\\mathrm{f} \\subseteq \\mathrm{D}_\\mathrm{g}$, the composite function $\\mathrm{gf}$ exists (shown).<br><strong>Rule:</strong> $$\\mathrm{gf}(x) = \\mathrm{g}\\left(\\frac{4}{(x-4)^2}\\right) = \\ln\\left(1 + \\frac{(x-4)^2}{4}\\right).$$ <strong>Domain:</strong> $\\mathrm{D}_{\\mathrm{gf}} = \\mathrm{D}_\\mathrm{f} = (-∞, 4) \\cup (4, ∞)$ (or $\\mathbb{R} \\setminus \\{4\\}$).<br><strong>Range:</strong> Since $\\mathrm{R}_\\mathrm{f} = (0, ∞)$ and $\\mathrm{g}$ maps $(0, ∞)$ onto $(0, ∞)$, $\\mathrm{R}_{\\mathrm{gf}} = (0, ∞)$."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "If the domain of $\\mathrm{f}$ is further restricted to $x < k$, state the largest value of $k$ for which the function $\\mathrm{f}^{-1}$ exists.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "4",
        placeholder: "Exact value",
        solution: "For $\\mathrm{f}^{-1}$ to exist, $\\mathrm{f}$ must be one-to-one. From the graph, $\\mathrm{f}$ is strictly increasing for $x < 4$, so the largest value of $k$ is $4$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Using the restricted domain found in part (c), find $\\mathrm{f}^{-1}$ in a similar form.",
        type: "self",
        solution: "Let $y = \\frac{4}{(x-4)^2}$. Then $$(x - 4)^2 = \\frac{4}{y} \\implies x - 4 = \\pm\\frac{2}{\\sqrt{y}} \\implies x = 4 \\pm \\frac{2}{\\sqrt{y}}.$$ Since $x < 4$, we reject $x = 4 + \\frac{2}{\\sqrt{y}}$, giving $x = 4 - \\frac{2}{\\sqrt{y}}$.<br>Also $\\mathrm{D}_{\\mathrm{f}^{-1}} = \\mathrm{R}_\\mathrm{f} = (0, ∞)$.<br>Hence $\\mathrm{f}^{-1}: x$ → $4 - \\frac{2}{\\sqrt{x}}, \\quad x \\in \\mathbb{R},\\; x > 0.$"
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q3",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 420 220" width="420" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Fig. 1: Star net centred at (110, 105), inner hexagon radius r=34, outer star tips radius R=88 -->
  <!-- Hexagon vertices at angles 0, 60, 120, 180, 240, 300 deg:
       (144,105), (127,134.4), (93,134.4), (76,105), (93,75.6), (127,75.6) -->
  <!-- Star tips at angles 30, 90, 150, 210, 270, 330 deg (R=86):
       (184.5,148), (110,191), (35.5,148), (35.5,62), (110,19), (184.5,62) -->
  <polygon points="144,105 184.5,148 127,134.4 110,191 93,134.4 35.5,148 76,105 35.5,62 93,75.6 110,19 127,75.6 184.5,62" fill="rgba(91,155,213,0.1)" stroke="#2c2925" stroke-width="1.3" />
  <!-- Dashed inner hexagon & diagonals -->
  <polygon points="144,105 127,134.4 93,134.4 76,105 93,75.6 127,75.6" fill="none" stroke-dasharray="3,2" stroke-width="1" opacity="0.7" />
  <line x1="144" y1="105" x2="76" y2="105" stroke-dasharray="3,2" stroke-width="0.9" opacity="0.6" />
  <line x1="127" y1="134.4" x2="93" y2="75.6" stroke-dasharray="3,2" stroke-width="0.9" opacity="0.6" />
  <line x1="93" y1="134.4" x2="127" y2="75.6" stroke-dasharray="3,2" stroke-width="0.9" opacity="0.6" />
  <!-- Dimension a -->
  <line x1="116" y1="19" x2="133" y2="75" stroke-width="1" />
  <text x="131" y="45" stroke="none" font-style="italic">a</text>
  <!-- Dimension x -->
  <line x1="93" y1="141" x2="127" y2="141" stroke-width="1" />
  <text x="107" y="131" stroke="none" font-style="italic">x</text>
  <text x="95" y="212" stroke="none">Fig. 1</text>

  <!-- Fig. 2: 3D Hexagonal Pyramid centred at (300, 140), apex at (300, 22) -->
  <!-- Base hexagon (foreshortened): (344,140), (322,174), (278,174), (256,140), (278,106), (322,106) -->
  <polygon points="344,140 322,174 278,174 256,140 278,106 322,106" fill="rgba(91,155,213,0.18)" stroke="#2c2925" stroke-width="1.2" />
  <line x1="344" y1="140" x2="256" y2="140" stroke-dasharray="3,2" stroke-width="0.9" opacity="0.6" />
  <line x1="322" y1="174" x2="278" y2="106" stroke-dasharray="3,2" stroke-width="0.9" opacity="0.6" />
  <line x1="278" y1="174" x2="322" y2="106" stroke-dasharray="3,2" stroke-width="0.9" opacity="0.6" />
  <!-- Slant edges from apex (300,22) -->
  <line x1="300" y1="22" x2="344" y2="140" stroke-width="1.3" />
  <line x1="300" y1="22" x2="322" y2="174" stroke-width="1.3" />
  <line x1="300" y1="22" x2="278" y2="174" stroke-width="1.3" />
  <line x1="300" y1="22" x2="256" y2="140" stroke-width="1.3" />
  <line x1="300" y1="22" x2="278" y2="106" stroke-dasharray="3,2" stroke-width="1" opacity="0.6" />
  <line x1="300" y1="22" x2="322" y2="106" stroke-dasharray="3,2" stroke-width="1" opacity="0.6" />
  <!-- Vertical height h -->
  <line x1="300" y1="22" x2="300" y2="140" stroke-dasharray="4,3" stroke="#4a8fe7" stroke-width="1.3" />
  <line x1="362" y1="22" x2="362" y2="140" stroke-width="1" />
  <polyline points="359,28 362,22 365,28" fill="none" stroke-width="1" />
  <polyline points="359,134 362,140 365,134" fill="none" stroke-width="1" />
  <text x="370" y="84" stroke="none" font-style="italic">h</text>
  <!-- Base edge x -->
  <line x1="278" y1="184" x2="322" y2="184" stroke-width="1" />
  <text x="297" y="196" stroke="none" font-style="italic">x</text>
  <text x="285" y="212" stroke="none">Fig. 2</text>
</svg>`,
    stem: "Fig. 1 shows a net of a hexagonal pyramid folded from a star-shaped cardboard of equal edge length $a$ cm. The net consists of a hexagon with equal sides of $x$ cm and six isosceles triangles with base $x$ cm and side $a$ cm. The net is folded to form a right pyramid with a hexagonal base of edge length $x$ cm and vertical height $h$ cm, as shown in Fig. 2. The hexagonal base is made up of six equilateral triangles of side length $x$ cm.<br>The volume of a right hexagonal pyramid with base edge $x$ cm and height $h$ cm is given by $$V = \\frac{\\sqrt{3}}{2}x^2 h.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that the volume of the hexagonal pyramid, $V$ satisfies the expression given by $$V^2 = \\frac{3}{4}(a^2 x^4 - x^6).$$",
        type: "self",
        solution: "Since the hexagonal base consists of six equilateral triangles of side $x$, the distance from the centre of the base to each vertex is $x$. By Pythagoras' Theorem, $$a^2 = x^2 + h^2 \\implies h = \\sqrt{a^2 - x^2}.$$ Substituting into $V = \\frac{\\sqrt{3}}{2}x^2 h$: $$V = \\frac{\\sqrt{3}}{2}x^2\\sqrt{a^2 - x^2} \\implies V^2 = \\frac{3}{4}x^4(a^2 - x^2) = \\frac{3}{4}(a^2 x^4 - x^6) \\quad (\\text{shown}).$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find, in terms of $a$, the maximum possible volume of the hexagonal pyramid. You need not show that this value is a maximum.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { a: [1, 2, 3] },
        answer: "a^3/3",
        placeholder: "Expression in terms of a",
        solution: "Differentiating $V^2 = \\frac{3}{4}(a^2 x^4 - x^6)$ implicitly with respect to $x$: $$2V\\frac{\\mathrm{d}V}{\\mathrm{d}x} = \\frac{3}{4}(4a^2 x^3 - 6x^5).$$ At a stationary point, $\\frac{\\mathrm{d}V}{\\mathrm{d}x} = 0$: $$4a^2 x^3 - 6x^5 = 0 \\implies 2x^3(2a^2 - 3x^2) = 0.$$ Since $x > 0$, $x^2 = \\frac{2}{3}a^2$.<br>Substituting into $V$: $$\\max V = \\sqrt{\\frac{3}{4}\\left[a^2\\left(\\frac{2}{3}a^2\\right)^2 - \\left(\\frac{2}{3}a^2\\right)^3\\right]} = \\sqrt{\\frac{3}{4}\\left(\\frac{4}{9}a^6 - \\frac{8}{27}a^6\\right)} = \\sqrt{\\frac{3}{4}\\cdot\\frac{4}{27}a^6} = \\sqrt{\\frac{a^6}{9}} = \\frac{a^3}{3}.$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Find, in terms of $a$, the total surface area of the hexagonal pyramid when the volume is a maximum.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { a: [1, 2, 3] },
        answer: "(sqrt(5)+sqrt(3))*a^2",
        placeholder: "Expression in terms of a",
        solution: "Total surface area $A = 6 \\times (\\text{area of isosceles triangle}) + 6 \\times (\\text{area of equilateral triangle})$: $$A = 6\\left(\\frac{1}{2}x\\sqrt{a^2 - \\frac{x^2}{4}}\\right) + 6\\left(\\frac{1}{2}x\\sqrt{x^2 - \\frac{x^2}{4}}\\right) = 3x\\sqrt{a^2 - \\frac{x^2}{4}} + \\frac{3\\sqrt{3}}{2}x^2.$$ Substituting $x^2 = \\frac{2}{3}a^2$ (and $x = \\sqrt{\\frac{2}{3}}a$): $$A = 3\\sqrt{\\frac{2}{3}}a\\sqrt{a^2 - \\frac{1}{6}a^2} + \\frac{3\\sqrt{3}}{2}\\left(\\frac{2}{3}a^2\\right) = 3\\sqrt{\\frac{2}{3}\\cdot\\frac{5}{6}}a^2 + \\sqrt{3}a^2 = 3\\sqrt{\\frac{5}{9}}a^2 + \\sqrt{3}a^2 = (\\sqrt{5} + \\sqrt{3})a^2.$$"
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q4",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "One of the roots of the equation $$2z^4 - 14z^3 + 33z^2 - 26z + p = 0, \\quad \\text{where } p \\text{ is a constant}$$ is $3 + \\mathrm{i}$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Based on the above information only, a student claims that the equation has a root $3 - \\mathrm{i}$.<br>State, with a reason, why the student's claim may not be true.",
        type: "self",
        solution: "The student's claim may not be true because the constant $p$ is not stated to be real (the conjugate root theorem only applies when all coefficients of the polynomial are real)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Show that $p = 10$.",
        type: "self",
        solution: "Substituting $z = 3 + \\mathrm{i}$ into the equation:<br>$(3 + \\mathrm{i})^2 = 8 + 6\\mathrm{i}$,<br>$(3 + \\mathrm{i})^3 = (3 + \\mathrm{i})(8 + 6\\mathrm{i}) = 18 + 26\\mathrm{i}$,<br>$(3 + \\mathrm{i})^4 = (8 + 6\\mathrm{i})^2 = 28 + 96\\mathrm{i}$.<br>Hence $$2(28 + 96\\mathrm{i}) - 14(18 + 26\\mathrm{i}) + 33(8 + 6\\mathrm{i}) - 26(3 + \\mathrm{i}) + p = 0$$ $$(56 - 252 + 264 - 78) + (192 - 364 + 198 - 26)\\mathrm{i} + p = 0$$ $$-10 + p = 0 \\implies p = 10 \\quad (\\text{shown}).$$"
      },
      {
        label: "(c)",
        marks: 7,
        prompt: "<strong>For the rest of this question, do not use a calculator.</strong><br>Find the roots of the equation $2z^4 - 14z^3 + 33z^2 - 26z + 10 = 0$ and mark them clearly on a single labelled Argand diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (55, 100), scale: 52px/unit -->
  <line x1="25" y1="100" x2="255" y2="100" stroke-width="1.3" />
  <polyline points="249,96 255,100 249,104" fill="none" stroke-width="1.3" />
  <line x1="55" y1="185" x2="55" y2="18" stroke-width="1.3" />
  <polyline points="51,24 55,18 59,24" fill="none" stroke-width="1.3" />
  <text x="259" y="104" stroke="none">Re</text>
  <text x="48" y="13" stroke="none">Im</text>
  <text x="42" y="113" stroke="none" font-style="italic">O</text>
  <!-- Roots: (0.5, 0.5) -> (81, 74); (0.5, -0.5) -> (81, 126); (3, 1) -> (211, 48); (3, -1) -> (211, 152) -->
  <polygon points="81,74 211,48 211,152 81,126" fill="rgba(91,155,213,0.18)" stroke="#4a8fe7" stroke-width="1.6" />
  <circle cx="81" cy="74" r="3.2" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="81" cy="126" r="3.2" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="211" cy="48" r="3.2" fill="#4a8fe7" stroke="#4a8fe7" />
  <circle cx="211" cy="152" r="3.2" fill="#4a8fe7" stroke="#4a8fe7" />
  <text x="64" y="65" stroke="none">(1/2, 1/2)</text>
  <text x="60" y="142" stroke="none">(1/2, −1/2)</text>
  <text x="216" y="46" stroke="none">(3, 1)</text>
  <text x="216" y="160" stroke="none">(3, −1)</text>
</svg>`,
        solution: "Since $p = 10$ is real, all coefficients are real, so $3 - \\mathrm{i}$ is also a root.<br>The quadratic factor corresponding to $3 \\pm \\mathrm{i}$ is $$[z - (3 + \\mathrm{i})][z - (3 - \\mathrm{i})] = (z - 3)^2 - \\mathrm{i}^2 = z^2 - 6z + 10.$$ Factorising by long division (or comparing coefficients): $$2z^4 - 14z^3 + 33z^2 - 26z + 10 = (z^2 - 6z + 10)(2z^2 - 2z + 1).$$ Solving $2z^2 - 2z + 1 = 0$: $$z = \\frac{2 \\pm \\sqrt{4 - 8}}{4} = \\frac{2 \\pm 2\\mathrm{i}}{4} = \\frac{1}{2} \\pm \\frac{1}{2}\\mathrm{i}.$$ Hence the four roots are $3 + \\mathrm{i}$, $3 - \\mathrm{i}$, $\\frac{1}{2} + \\frac{1}{2}\\mathrm{i}$ and $\\frac{1}{2} - \\frac{1}{2}\\mathrm{i}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The points of the Argand diagram in part (c) form the vertices of a quadrilateral. Identify the type of quadrilateral and determine its area.",
        type: "self",
        solution: "The quadrilateral has two vertical parallel sides along $x = \\frac{1}{2}$ (length $1$ unit) and $x = 3$ (length $2$ units), separated by perpendicular distance $3 - \\frac{1}{2} = 2.5$ units.<br><strong>Type:</strong> Trapezium (isosceles trapezium).<br><strong>Area:</strong> $$\\frac{1}{2}(1 + 2)(2.5) = 3.75 \\text{ units}^2 \\quad \\left(\\text{or } \\frac{15}{4} \\text{ units}^2\\right).$$"
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q5",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Permutations & Combinations", "Sampling & CLT"],
    stem: "The basketball club in a college has $5$ centers, $8$ forwards and $7$ guards. With the National School Games approaching, the coach wishes to find out the opinions of members of the club about the training programme. He gives a questionnaire to all the members of the club and receives replies from everyone.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Explain whether the $20$ members form a sample or a population.",
        type: "self",
        solution: "The $20$ members form a <strong>population</strong>, because the coach surveyed all $20$ members of the basketball club (the entire group of interest)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "The coach then decides to select teams to play in the matches for National School Games. A basketball team to play in a match consists of $1$ center, $2$ forwards and $2$ guards.<br>Explain an advantage for choosing a random sample in each category of members for the match.",
        type: "self",
        solution: "Choosing a random sample in each category reduces bias (is fair to all players in each position) and ensures the selected team is representative of each category of members in the club."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "How many different teams can be formed?",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2940",
        placeholder: "Integer value",
        solution: "$$\\text{Number of teams} = {^5\\mathrm{C}_1} \\times {^8\\mathrm{C}_2} \\times {^7\\mathrm{C}_2} = 5 \\times 28 \\times 21 = 2940.$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "In the club, one particular forward is the classmate of one particular guard. Both classmates are injured and cannot participate in a particular match. The coach decides that one of the remaining guards can play either as a guard or as a forward.<br>How many different teams can now be formed?",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "1925",
        placeholder: "Integer value",
        solution: "Remaining available players: $5$ centers, $7$ forwards, and $6$ guards (consisting of versatile player $A$ plus $5$ other guards).<br>• <strong>Case 1 ($A$ does not play as a forward — i.e., plays as a guard or is not selected):</strong> Choose $1$ center from $5$, $2$ forwards from $7$, and $2$ guards from $6$: $${^5\\mathrm{C}_1} \\times {^7\\mathrm{C}_2} \\times {^6\\mathrm{C}_2} = 5 \\times 21 \\times 15 = 1575.$$ • <strong>Case 2 ($A$ plays as a forward):</strong> Choose $1$ center from $5$, $1$ other forward from $7$, and $2$ guards from the remaining $5$: $${^5\\mathrm{C}_1} \\times {^7\\mathrm{C}_1} \\times {^5\\mathrm{C}_2} = 5 \\times 7 \\times 10 = 350.$$ Total number of teams $= 1575 + 350 = 1925$."
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q6",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability"],
    diagramSvg: `<svg viewBox="0 0 300 215" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="12" fill="#2c2925" stroke="#2c2925">
  <rect x="10" y="10" width="280" height="195" fill="none" stroke-width="1.3" />
  <circle cx="150" cy="82" r="54" fill="none" stroke="#4ca885" stroke-width="1.5" />
  <circle cx="116" cy="134" r="54" fill="none" stroke="#4ca885" stroke-width="1.5" />
  <circle cx="184" cy="134" r="54" fill="none" stroke="#4ca885" stroke-width="1.5" />
  <text x="82" y="45" stroke="none" font-style="italic">A</text>
  <text x="48" y="168" stroke="none" font-style="italic">B</text>
  <text x="242" y="168" stroke="none" font-style="italic">C</text>
  <text x="146" y="118" stroke="none" font-style="italic">x</text>
  <text x="146" y="148" stroke="none" font-style="italic">y</text>
</svg>`,
    stem: "A group of $100$ students are asked if they are student leaders, in a sports CCA, or studying in a science faculty. The number of students who are student leaders is $25$, the number of students who are in a sports CCA is $30$ and the number of students studying in a science faculty is $40$. There are $15$ student leaders who are in a sports CCA. The number of students who are student leaders, in a sports CCA and studying in a science faculty is $x$. The number of students who are in a sports CCA and studying in a science faculty but not a student leader is $y$.<br>One of the students is chosen at random.<br>$A$ is the event that the student is a student leader.<br>$B$ is the event that the student is in a sports CCA.<br>$C$ is the event that the student is studying in a science faculty.<br>It is given that $A$ and $C$ are independent.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Complete the Venn diagram above to represent all the above information. You are allowed to give expressions in terms of $x$ and $y$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 215" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11.5" fill="#2c2925" stroke="#2c2925">
  <rect x="10" y="10" width="280" height="195" fill="none" stroke-width="1.3" />
  <circle cx="150" cy="82" r="54" fill="none" stroke="#4ca885" stroke-width="1.5" />
  <circle cx="116" cy="134" r="54" fill="none" stroke="#4ca885" stroke-width="1.5" />
  <circle cx="184" cy="134" r="54" fill="none" stroke="#4ca885" stroke-width="1.5" />
  <text x="82" y="45" stroke="none" font-style="italic">A</text>
  <text x="48" y="168" stroke="none" font-style="italic">B</text>
  <text x="242" y="168" stroke="none" font-style="italic">C</text>
  <text x="146" y="64" stroke="none" font-style="italic">x</text>
  <text x="106" y="103" stroke="none">15 − x</text>
  <text x="163" y="103" stroke="none">10 − x</text>
  <text x="146" y="118" stroke="none" font-style="italic">x</text>
  <text x="82" y="148" stroke="none">15 − y</text>
  <text x="146" y="148" stroke="none" font-style="italic">y</text>
  <text x="184" y="148" stroke="none">30 − y</text>
  <text x="234" y="42" stroke="none">30 + y</text>
</svg>`,
        solution: "Since $A$ and $C$ are independent, $$\\mathrm{P}(A \\cap C) = \\mathrm{P}(A)\\mathrm{P}(C) = \\frac{25}{100} \\times \\frac{40}{100} = \\frac{10}{100} \\implies \\mathrm{n}(A \\cap C) = 10.$$ Filling each region:<br>• $A \\cap B \\cap C$: $x$<br>• $A \\cap B \\cap C'$: $15 - x$<br>• $A \\cap B' \\cap C$: $10 - x$<br>• $A$ only: $25 - (15 - x) - x - (10 - x) = x$<br>• $B$ only: $30 - (15 - x) - x - y = 15 - y$<br>• $C$ only: $40 - (10 - x) - x - y = 30 - y$<br>• Outside $A \\cup B \\cup C$: $100 - [25 + (15 - y) + y + (30 - y)] = 30 + y$."
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "It is further given that $B$ and $C$ are independent.<br>Find $y$ in terms of $x$. Hence, find the greatest and least possible values of $y$.",
        type: "self",
        solution: "Since $B$ and $C$ are independent, $$\\mathrm{P}(B \\cap C) = \\mathrm{P}(B)\\mathrm{P}(C) = \\frac{30}{100} \\times \\frac{40}{100} = \\frac{12}{100} \\implies \\mathrm{n}(B \\cap C) = 12.$$ Thus $x + y = 12 \\implies y = 12 - x$.<br>For all Venn diagram regions to be non-negative:<br>• $x \\ge 0$ and $10 - x \\ge 0 \\implies 0 \\le x \\le 10$ (other conditions $15 - x \\ge 0$, $15 - y \\ge 0$, $30 - y \\ge 0$ are satisfied within this range).<br>Hence:<br>• <strong>Greatest value of $y$</strong> $= 12$ (when $x = 0$).<br>• <strong>Least value of $y$</strong> $= 2$ (when $x = 10$)."
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q7",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "Happie, the owner of a store selling novelty items, is organizing a publicity stunt for his store. Using a stock of ultra-rare Lubaba dolls that he acquired, he sets up a game where a player opens \"mystery boxes\" to try to find a Lubaba doll hidden inside one of the identical boxes used for the game.<br>The rules of the game are:<br>• The player pays an initial SGD 5 to start the game to open one of $n$ boxes.<br>• If the opened box is empty, the player can pay an additional SGD 3 to open a second box.<br>• If the second box is empty, the player can pay SGD 2.50 again to open a third box.<br>• If the third box is still empty, the player loses the game. The doll that is not won will then be donated away and the game is reset for the next player.<br>As the Lubaba dolls are considered rare collectors' items, it can be assumed that in every game, the players will keep opening the boxes until they win the doll and that they have the means to pay for the maximum of $3$ allowable tries at opening the boxes.<br>Let $X$ be the random variable denoting the number of empty boxes a player has opened in a game.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that $\\mathrm{P}(X = 2) = \\frac{1}{n}$.",
        type: "self",
        solution: "To open $2$ empty boxes, the first two boxes must be empty and the third box must contain the doll: $$\\mathrm{P}(X = 2) = \\frac{n-1}{n} \\times \\frac{n-2}{n-1} \\times \\frac{1}{n-2} = \\frac{1}{n} \\quad (\\text{shown}).$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the probability distribution of $X$, leaving your answers in terms of $n$.",
        type: "self",
        solution: "$$\\mathrm{P}(X = 0) = \\frac{1}{n}, \\quad \\mathrm{P}(X = 1) = \\frac{n-1}{n}\\cdot\\frac{1}{n-1} = \\frac{1}{n}, \\quad \\mathrm{P}(X = 2) = \\frac{1}{n},$$ $$\\mathrm{P}(X = 3) = \\frac{n-1}{n}\\cdot\\frac{n-2}{n-1}\\cdot\\frac{n-3}{n-2} = \\frac{n-3}{n}.$$<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$0$</td><td>$1$</td><td>$2$</td><td>$3$</td></tr><tr><th>$\\mathrm{P}(X=x)$</th><td>$\\frac{1}{n}$</td><td>$\\frac{1}{n}$</td><td>$\\frac{1}{n}$</td><td>$\\frac{n-3}{n}$</td></tr></table></div>"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "If $n = 10$, find $\\mathrm{P}(X \\le \\sigma)$, where $\\sigma$ is the standard deviation of $X$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "0.2",
        placeholder: "Exact decimal or fraction",
        solution: "When $n = 10$, the probabilities for $x = 0, 1, 2, 3$ are $0.1, 0.1, 0.1, 0.7$.<br>$\\mathrm{E}(X) = 0(0.1) + 1(0.1) + 2(0.1) + 3(0.7) = 2.4$.<br>$\\mathrm{E}(X^2) = 0(0.1) + 1(0.1) + 4(0.1) + 9(0.7) = 6.8$.<br>$\\mathrm{Var}(X) = 6.8 - 2.4^2 = 1.04 \\implies \\sigma = \\sqrt{1.04} \\approx 1.0198$.<br>Hence $$\\mathrm{P}(X \\le 1.0198) = \\mathrm{P}(X = 0) + \\mathrm{P}(X = 1) = 0.1 + 0.1 = 0.2.$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "If the cost price of a Lubaba doll is SGD 10, find the number of boxes $n$, that Happie should prepare so that he will not make any profit nor incur any loss from organising this publicity stunt.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "16",
        placeholder: "Integer value",
        solution: "Let $Y$ (in SGD) be the amount paid by a player in a game: $Y = 5$ if $X = 0$, $Y = 8$ if $X = 1$, and $Y = 10.5$ if $X = 2$ or $X = 3$.<br>$$\\mathrm{E}(Y) = 5\\left(\\frac{1}{n}\\right) + 8\\left(\\frac{1}{n}\\right) + 10.5\\left(\\frac{1}{n}\\right) + 10.5\\left(\\frac{n-3}{n}\\right) = \\frac{10.5n - 8}{n}.$$ Since one doll costing SGD 10 is either won or donated away in every game, breaking even requires $\\mathrm{E}(Y) = 10$: $$\\frac{10.5n - 8}{n} = 10 \\implies 10.5n - 8 = 10n \\implies 0.5n = 8 \\implies n = 16.$$"
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q8",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "In each batch of pralines that a chocolate factory produces, they are packed into boxes of $16$. Due to the new health guidelines regarding sugar content, quality control tests are implemented and show that on average, the proportion of pralines that exceed the recommended sugar content is $p$. The number of pralines in a box that exceed the recommended sugar content is denoted by $X$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "State, in context of the question, two assumptions needed for $X$ to be well-modelled by a binomial distribution.",
        type: "self",
        solution: "1. The probability that a praline exceeds the recommended sugar content is constant at $p$ for every praline.<br>2. Whether a praline exceeds the recommended sugar content is independent of any other praline."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Assume now that $X$ is modelled by a binomial distribution.<br>It is known that the most probable number of pralines that exceed the recommended sugar content is $2$. Find the exact range of values that $p$ can take.",
        type: "self",
        solution: "$X \\sim \\mathrm{B}(16, p)$. Since the mode is $2$, $\\mathrm{P}(X = 2) > \\mathrm{P}(X = 1)$ and $\\mathrm{P}(X = 2) > \\mathrm{P}(X = 3)$.<br>• $\\mathrm{P}(X = 2) > \\mathrm{P}(X = 1)$: $${^{16}\\mathrm{C}_2}p^2(1-p)^{14} > {^{16}\\mathrm{C}_1}p(1-p)^{15} \\implies 120p > 16(1-p) \\implies 15p > 2 - 2p \\implies p > \\frac{2}{17}.$$ • $\\mathrm{P}(X = 2) > \\mathrm{P}(X = 3)$: $${^{16}\\mathrm{C}_2}p^2(1-p)^{14} > {^{16}\\mathrm{C}_3}p^3(1-p)^{13} \\implies 120(1-p) > 560p \\implies 3(1-p) > 14p \\implies p < \\frac{3}{17}.$$ Hence $\\frac{2}{17} < p < \\frac{3}{17}$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "For each batch of pralines produced, the chocolate factory implements the following quality control system by testing the first random sample of $16$ pralines in a box:<br>• If there are at most $1$ praline that exceed the recommended sugar content in a box, the batch is accepted.<br>• If there are $3$ or more pralines that exceed the recommended sugar content in a box, the batch is rejected.<br>• If there are $2$ pralines that exceed the recommended sugar content in a box, a second box of $16$ pralines is tested. The batch will be accepted if there are at most $1$ praline that exceed the recommended sugar content in the second box, otherwise the batch will be rejected.<br>It is given that $p = 0.15$.<br>Find the probability that the batch of pralines is accepted under this quality control system.",
        type: "auto",
        mode: "number",
        answer: "0.3626775851",
        placeholder: "3 s.f.",
        solution: "$X \\sim \\mathrm{B}(16, 0.15)$.<br>$\\mathrm{P}(X \\le 1) = 0.2839012136$, $\\mathrm{P}(X = 2) = 0.2774781077$.<br>$$\\mathrm{P}(\\text{batch is accepted}) = \\mathrm{P}(X \\le 1) + \\mathrm{P}(X = 2)\\mathrm{P}(X \\le 1) = 0.2839012136(1 + 0.2774781077) = 0.3626776 \\approx 0.363 \\text{ (3 s.f.)}.$$"
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Given that the batch of pralines is accepted, find the probability that a second box of pralines is tested.",
        type: "auto",
        mode: "number",
        answer: "0.2172077205",
        placeholder: "3 s.f.",
        solution: "$$\\mathrm{P}(\\text{2nd box tested} \\mid \\text{batch accepted}) = \\frac{\\mathrm{P}(X = 2)\\mathrm{P}(X \\le 1)}{\\mathrm{P}(\\text{batch accepted})} = \\frac{0.2774781077 \\times 0.2839012136}{0.3626775851} = 0.217208 \\approx 0.217 \\text{ (3 s.f.)}.$$"
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q9",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "A teacher conducts a survey on $7$ students to investigate the relationship between the number of hours ($h$) of \"screen-time\" per week and the average scores ($s$) they obtained in a recently concluded examination. She records her findings as shown in the following table.<div class='q-table-wrap'><table class='q-table'><tr><th>$h$</th><td>$8.5$</td><td>$14$</td><td>$20$</td><td>$27$</td><td>$10.5$</td><td>$17$</td><td>$23$</td></tr><tr><th>$s$</th><td>$68$</td><td>$61$</td><td>$44$</td><td>$12$</td><td>$\\alpha$</td><td>$58$</td><td>$31$</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Given that the regression line of $s$ on $h$ is $s = -3.00799h + 100.27974$, show that $\\alpha = 67.0$.",
        type: "self",
        solution: "The mean of $h$ is $$\\bar{h} = \\frac{8.5 + 14 + 20 + 27 + 10.5 + 17 + 23}{7} = \\frac{120}{7} \\approx 17.14286.$$ Since $(\\bar{h}, \\bar{s})$ lies on the regression line of $s$ on $h$: $$\\bar{s} = -3.00799(17.14286) + 100.27974 = 48.7142.$$ Thus $$\\frac{68 + 61 + 44 + 12 + \\alpha + 58 + 31}{7} = 48.7142 \\implies 274 + \\alpha = 341.0 \\implies \\alpha = 67.0 \\quad (\\text{shown}).$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Draw a scatter diagram for the data.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Origin at (40, 170), h in [0, 30] -> x = 40 + h*7.2, s in [0, 80] -> y = 170 - s*1.8 -->
  <line x1="35" y1="170" x2="262" y2="170" stroke-width="1.3" />
  <polyline points="256,166 262,170 256,174" fill="none" stroke-width="1.3" />
  <line x1="40" y1="175" x2="40" y2="18" stroke-width="1.3" />
  <polyline points="36,24 40,18 44,24" fill="none" stroke-width="1.3" />
  <text x="266" y="174" stroke="none" font-style="italic">h</text>
  <text x="36" y="13" stroke="none" font-style="italic">s</text>
  <text x="27" y="182" stroke="none" font-style="italic">O</text>
  <!-- Exact points: (8.5,68)->(101.2,47.6), (10.5,67)->(115.6,49.4), (14,61)->(140.8,60.2), (17,58)->(162.4,65.6), (20,44)->(184,90.8), (23,31)->(205.6,114.2), (27,12)->(234.4,148.4) -->
  <circle cx="101.2" cy="47.6" r="3" fill="#4ca885" stroke="#4ca885" />
  <circle cx="115.6" cy="49.4" r="3" fill="#4ca885" stroke="#4ca885" />
  <circle cx="140.8" cy="60.2" r="3" fill="#4ca885" stroke="#4ca885" />
  <circle cx="162.4" cy="65.6" r="3" fill="#4ca885" stroke="#4ca885" />
  <circle cx="184" cy="90.8" r="3" fill="#4ca885" stroke="#4ca885" />
  <circle cx="205.6" cy="114.2" r="3" fill="#4ca885" stroke="#4ca885" />
  <circle cx="234.4" cy="148.4" r="3" fill="#4ca885" stroke="#4ca885" />
  <text x="82" y="38" stroke="none">(8.5, 68)</text>
  <text x="218" y="162" stroke="none">(27, 12)</text>
</svg>`,
        solution: "Plot the $7$ points $(8.5, 68)$, $(10.5, 67)$, $(14, 61)$, $(17, 58)$, $(20, 44)$, $(23, 31)$ and $(27, 12)$, labelling axes $h$ and $s$ and the extreme points $(8.5, 68)$ and $(27, 12)$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Explain why $s = kh^2 + c$ is the better model compared to the one in part (a), by giving appropriate reasons. State the values of $k$ and $c$.",
        type: "self",
        solution: "1. The product moment correlation coefficient between $s$ and $h^2$ is $r = -0.991$, which is closer to $-1$ than the $r$-value between $s$ and $h$ ($r = -0.961$), indicating a stronger linear correlation between $s$ and $h^2$.<br>2. From the scatter diagram, as $h$ increases, $s$ decreases at an increasing rate (concave downwards), which fits a quadratic model $s = kh^2 + c$ ($k < 0$) better than a linear model.<br>From GC, $k = -0.0873$ and $c = 77.7$ (3 s.f.), so $s = -0.0873h^2 + 77.7$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Using the better model, estimate the score a student can expect to obtain if he spends $7$ hours of screen-time a week. Comment on the reliability of the estimate obtained.",
        type: "self",
        solution: "When $h = 7$: $$s = -0.087331(7)^2 + 77.727 = 73.448 \\approx 73.4 \\text{ (3 s.f.)}.$$ Since $h = 7$ lies outside the given data range ($8.5 \\le h \\le 27$), the estimate is obtained by extrapolation and is therefore <strong>not reliable</strong>."
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "The teacher observes a trend from her findings and concludes with a statement: <em>Increased screen-time will cause the exam scores to decrease.</em> Comment on the validity of the statement.",
        type: "self",
        solution: "The statement is <strong>not valid</strong> because correlation does not imply causation; there may be other confounding factors contributing to this trend."
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q10",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Normal Distribution", "Sampling & CLT"],
    stem: "Fishing Company A has two types of fishing vessels, the \"Standard\" vessel and the \"Large\" vessel. The amount of fish caught by the respective vessels on a typical fishing trip are normally distributed with means and standard deviations as shown in the table.<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>Mean (kg)</th><th>Standard deviation (kg)</th></tr><tr><th>Standard</th><td>$300$</td><td>$\\sigma$</td></tr><tr><th>Large</th><td>$540$</td><td>$110$</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "If a Standard vessel returns with more than $400\\text{ kg}$ of fish, it is called a Bumper catch. Bumper catches occur $8\\%$ of the time. Show that $\\sigma \\approx 71.2$.",
        type: "self",
        solution: "Let $S \\sim \\mathrm{N}(300, \\sigma^2)$ be the catch of a Standard vessel. Given $\\mathrm{P}(S > 400) = 0.08$: $$\\mathrm{P}\\left(Z > \\frac{400 - 300}{\\sigma}\\right) = 0.08 \\implies \\frac{100}{\\sigma} = 1.40507 \\implies \\sigma = 71.171 \\approx 71.2 \\text{ (3 s.f.) (shown)}.$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "On a particular fishing trip, Company A sends out $3$ Standard vessels and $2$ Large vessels, with a target to catch at least $2100\\text{ kg}$ of fish. Find the probability that the fishing vessels are able to meet their target.",
        type: "auto",
        mode: "number",
        answer: "0.27273",
        placeholder: "3 s.f.",
        solution: "Let $A = S_1 + S_2 + S_3 + L_1 + L_2$. Then $$A \\sim \\mathrm{N}\\left(3(300) + 2(540),\\; 3(71.171^2) + 2(110^2)\\right) = \\mathrm{N}(1980,\\; 39395.9).$$ Hence $\\mathrm{P}(A \\ge 2100) = 0.27273 \\approx 0.273$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "State an assumption needed in your calculation in part (b).",
        type: "self",
        solution: "The amount of fish caught by all the vessels are independent of one another."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Fishing Company B operates in the same seas as Fishing Company A. However, Company B has the improved versions of the two types of fishing vessels that Company A has: the \"Premium-Standard\" vessel and the \"Premium-Large\" vessel. In a fishing trip, the Premium-Standard vessel is capable of catching $3$ times as much fish as the Standard vessel and the Premium-Large vessel is capable of catching $2$ times as much fish as Large vessel.<br>Company B sends out $1$ Premium-Standard vessel and $1$ Premium-Large vessel, with the same target to catch at least $2100\\text{ kg}$ of fish. Find the probability that these two fishing vessels are able to meet their target.",
        type: "auto",
        mode: "number",
        answer: "0.34774",
        placeholder: "3 s.f.",
        solution: "Let $B = 3S + 2L$. Then $$B \\sim \\mathrm{N}\\left(3(300) + 2(540),\\; 3^2(71.171^2) + 2^2(110^2)\\right) = \\mathrm{N}(1980,\\; 93987.6).$$ Hence $\\mathrm{P}(B \\ge 2100) = 0.34774 \\approx 0.348$ (3 s.f.)."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "It is found that, in a sample of $n$ randomly chosen fishing trips, the probability that the average catch of a Large vessel being less than $552\\text{ kg}$ is at least $0.7$.<br>Find the least possible value of $n$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "24",
        placeholder: "Integer value",
        solution: "$\\bar{L} \\sim \\mathrm{N}\\left(540, \\frac{110^2}{n}\\right)$. Standardising $\\mathrm{P}(\\bar{L} < 552) \\ge 0.7$: $$\\mathrm{P}\\left(Z < \\frac{552 - 540}{110/\\sqrt{n}}\\right) \\ge 0.7 \\implies \\frac{6\\sqrt{n}}{55} \\ge 0.52440$$ $$\\sqrt{n} \\ge 4.8070 \\implies n \\ge 23.107.$$ Thus the least possible integer value of $n$ is $24$."
      }
    ]
  },
  {
    id: "CJC-2025-P2-Q11",
    year: 2025,
    school: "CJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "EastHam is a football club in a competitive league. It is found that the average time taken by EastHam to score their first goal in a match is $50$ minutes. The coach trialled a new play tactic and the time taken, $x$ minutes, to score the first goal is recorded for a random sample of $35$ matches in the season. The total time taken is found to be $1650$ minutes and the variance of the time is $250\\text{ minutes}^2$.<br>The coach wants to test if the average time taken to score the first goal has decreased with the implementation of the new play tactic.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Explain why the coach is able to carry out a hypothesis test without any assumption about the distribution of the time taken to score the first goal.",
        type: "self",
        solution: "Since the sample size $n = 35$ is sufficiently large, by the Central Limit Theorem, the sample mean time $\\bar{X}$ is approximately normally distributed, so no assumption about the population distribution is needed."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find unbiased estimates of the population mean and variance. Give your answers correct to $3$ decimal places.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "1650/35", dp: 3, placeholder: "3 d.p." },
          { label: "Variance =", answer: "35*250/34", dp: 3, placeholder: "3 d.p." }
        ],
        solution: "Unbiased estimate of population mean: $$\\bar{x} = \\frac{1650}{35} = 47.143 \\text{ (3 d.p.)}.$$ Unbiased estimate of population variance: $$s^2 = \\frac{35}{34}(250) = \\frac{4375}{17} = 257.353 \\text{ (3 d.p.)}.$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Carry out the test at $10\\%$ level of significance. You should state your hypotheses and define any symbols you use.",
        type: "self",
        solution: "Let $X$ be the time taken by EastHam to score the first goal in a match, and $\\mu$ be the population mean time taken.<br>$\\mathrm{H}_0: \\mu = 50$<br>$\\mathrm{H}_1: \\mu < 50$ (left-tailed test at $\\alpha = 0.10$).<br>Under $\\mathrm{H}_0$, since $n = 35$ is large, $\\bar{X} \\sim \\mathrm{N}\\left(50, \\frac{257.353}{35}\\right)$ approximately by CLT.<br>Test statistic: $$z_{\\text{test}} = \\frac{\\frac{1650}{35} - 50}{\\sqrt{\\frac{4375/17}{35}}} = -1.0537, \\quad p\\text{-value} = 0.146 \\text{ (3 s.f.)}.$$ Since $p\\text{-value} = 0.146 > 0.10$ (or $z_{\\text{test}} = -1.05 > -1.28$), we do not reject $\\mathrm{H}_0$ and conclude that there is insufficient evidence at the $10\\%$ significance level to say that the average time taken by EastHam to score the first goal has decreased."
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "A fan of another football club in the same league, NewPalace, claims that the average time taken by NewPalace to score their first goal in a match is $40$ minutes. The time taken by NewPalace to score the first goal in a match can be assumed to be normally distributed with variance $280\\text{ minutes}^2$.<br>A random sample of $50$ matches is taken and a hypothesis test is carried out on whether the fan's claim is valid. Find the range of values of the mean time of this sample for which the fan's claim would be rejected at $10\\%$ level of significance.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 155" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <!-- Normal curve centred at x=140, baseline y=120 -->
  <line x1="25" y1="120" x2="255" y2="120" stroke-width="1.3" />
  <polyline points="249,116 255,120 249,124" fill="none" stroke-width="1.3" />
  <text x="259" y="124" stroke="none" font-style="italic">Z</text>
  <!-- Left shaded tail (x <= 91) -->
  <path d="M 35 120 C 55 118 75 112 91 96 L 91 120 Z" fill="rgba(207,86,82,0.3)" stroke="none" />
  <!-- Right shaded tail (x >= 189) -->
  <path d="M 189 96 C 205 112 225 118 245 120 L 189 120 Z" fill="rgba(207,86,82,0.3)" stroke="none" />
  <!-- Bell curve -->
  <path d="M 35 120 C 65 118 85 104 105 70 C 120 42 130 28 140 28 C 150 28 160 42 175 70 C 195 104 215 118 245 120" fill="none" stroke="#4ca885" stroke-width="2" />
  <line x1="91" y1="96" x2="91" y2="125" stroke="#cf5652" stroke-width="1.2" />
  <line x1="189" y1="96" x2="189" y2="125" stroke="#cf5652" stroke-width="1.2" />
  <line x1="140" y1="116" x2="140" y2="124" stroke-width="1.2" />
  <text x="68" y="138" stroke="none">−1.6449</text>
  <text x="172" y="138" stroke="none">1.6449</text>
  <text x="48" y="92" stroke="none" fill="#cf5652">0.05</text>
  <text x="208" y="92" stroke="none" fill="#cf5652">0.05</text>
</svg>`,
        solution: "Let $Y$ be the time taken by NewPalace to score the first goal in a match.<br>$\\mathrm{H}_0: \\mu = 40$, $\\mathrm{H}_1: \\mu \\ne 40$ (two-tailed test at $\\alpha = 0.10$, critical values $z = \\pm 1.6449$).<br>Under $\\mathrm{H}_0$, $\\bar{Y} \\sim \\mathrm{N}\\left(40, \\frac{280}{50}\\right) = \\mathrm{N}(40, 5.6)$.<br>To reject $\\mathrm{H}_0$: $$\\frac{\\bar{y} - 40}{\\sqrt{5.6}} < -1.6449 \\quad \\text{or} \\quad \\frac{\\bar{y} - 40}{\\sqrt{5.6}} > 1.6449$$ $$\\bar{y} < 36.107 \\quad \\text{or} \\quad \\bar{y} > 43.893.$$ Since time is positive, the range of values of $\\bar{y}$ is $0 < \\bar{y} < 36.1$ or $\\bar{y} > 43.9$ (3 s.f.)."
      }
    ]
  }
]);
