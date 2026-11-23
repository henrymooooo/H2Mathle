window.registerQuestions([
  {
    id: "ASRJC-2025-P2-Q1",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Vectors"],
    stem: "Relative to the origin $O$, the position vectors of two points $A$ and $B$ are $\\mathbf{a}$ and $\\mathbf{b}$ respectively. The length of $\\mathbf{a}$ is $k$ units and $\\mathbf{b}$ is a unit vector. The angle between $\\mathbf{a}$ and $\\mathbf{b}$ is $\\frac{\\pi}{6}$ radians.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "It is given that the point $M$ lies on the line segment $AB$ such that $AM : AB$ is $3 : 4$. Find the exact area of △$OAM$, giving your answer in terms of $k$.",
        type: "auto",
        mode: "expr",
        vars: { k: [1, 2, 5] },
        answer: "3*k/16",
        placeholder: "Exact expression in terms of k",
        solution:
          "Since $AM : MB = 3 : 1$, by the ratio theorem:<br>" +
          "$OM = \\frac{3\\mathbf{b} + \\mathbf{a}}{4}$.<br>" +
          "Area of △$OAM = \\frac{1}{2}|OA \\times OM| = \\frac{1}{2}\\left|\\mathbf{a} \\times \\left(\\frac{3\\mathbf{b} + \\mathbf{a}}{4}\\right)\\right|$<br>" +
          "$= \\frac{1}{8}|3(\\mathbf{a} \\times \\mathbf{b}) + \\mathbf{a} \\times \\mathbf{a}| = \\frac{3}{8}|\\mathbf{a} \\times \\mathbf{b}|$ (since $\\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}$)<br>" +
          "$= \\frac{3}{8}|\\mathbf{a}||\\mathbf{b}|\\sin\\frac{\\pi}{6} = \\frac{3}{8}(k)(1)\\left(\\frac{1}{2}\\right) = \\frac{3}{16}k$ units$^2$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q2",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Without the use of a graphing calculator, solve the inequality $\\frac{x + 4}{x + 1} \\ge \\frac{x + 2}{2}$.",
        type: "self",
        solution:
          "$\\frac{x + 2}{2} - \\frac{x + 4}{x + 1} \\le 0$<br>" +
          "$\\frac{(x + 2)(x + 1) - 2(x + 4)}{2(x + 1)} \\le 0$<br>" +
          "$\\frac{x^2 + x - 6}{2(x + 1)} \\le 0 \\implies \\frac{(x - 2)(x + 3)}{x + 1} \\le 0$.<br>" +
          "Multiplying both sides by $(x + 1)^2 > 0$ (for $x \\ne -1$):<br>" +
          "$(x + 3)(x + 1)(x - 2) \\le 0$, $x \\ne -1$.<br>" +
          "$\\therefore x \\le -3$ or $-1 < x \\le 2$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence solve $1 + \\frac{3}{\\mathrm{e}^x + 1} \\ge \\frac{\\mathrm{e}^x + 2}{2}$.",
        type: "self",
        solution:
          "$1 + \\frac{3}{\\mathrm{e}^x + 1} = \\frac{\\mathrm{e}^x + 4}{\\mathrm{e}^x + 1} \\ge \\frac{\\mathrm{e}^x + 2}{2}$.<br>" +
          "Replacing $x$ with $\\mathrm{e}^x$ in part (a):<br>" +
          "$\\mathrm{e}^x \\le -3$ (no solution since $\\mathrm{e}^x > 0$) &nbsp; or &nbsp; $-1 < \\mathrm{e}^x \\le 2$.<br>" +
          "Since $\\mathrm{e}^x > 0$ for all real $x$, $0 < \\mathrm{e}^x \\le 2 \\implies x \\le \\ln 2$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q3",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "It is given that $y = \\tan^{-1}\\left(\\frac{1}{5}x\\right)$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $(25 + x^2)\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + 2x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$.",
        type: "self",
        solution:
          "$\\tan y = \\frac{1}{5}x$. Differentiating with respect to $x$:<br>" +
          "$\\sec^2 y \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{5} \\implies (1 + \\tan^2 y)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{5}$<br>" +
          "$\\left(1 + \\frac{1}{25}x^2\\right)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{5} \\implies (25 + x^2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 5$.<br>" +
          "Differentiating again with respect to $x$:<br>" +
          "$(25 + x^2)\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + 2x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$ (shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "By further differentiation of this result, find the Maclaurin's series of $y$ up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        vars: { x: [1, 2, 3] },
        answer: "x/5 - x^3/375",
        placeholder: "Polynomial in x up to x^3",
        solution:
          "Differentiating $(25 + x^2)\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + 2x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$ with respect to $x$:<br>" +
          "$(25 + x^2)\\frac{\\mathrm{d}^3 y}{\\mathrm{d}x^3} + 4x\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} + 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$.<br>" +
          "When $x = 0$: $y = 0$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{5}$, $\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 0$, and $25\\frac{\\mathrm{d}^3 y}{\\mathrm{d}x^3} + \\frac{2}{5} = 0 \\implies \\frac{\\mathrm{d}^3 y}{\\mathrm{d}x^3} = -\\frac{2}{125}$.<br>" +
          "$\\therefore y = \\frac{1}{5}x + \\frac{-\\frac{2}{125}}{3!}x^3 + \\cdots = \\frac{1}{5}x - \\frac{1}{375}x^3 + \\cdots$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q4",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "The curve $C$ is defined by the parametric equations $x = \\cos t + \\frac{1}{2}\\cos 5t$, $y = \\sin t + \\frac{1}{2}\\sin 5t$ for $0 \\le t \\le \\frac{\\pi}{2}$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Find the coordinates of the point on the curve $C$ corresponding to $t = 0$.",
        type: "auto",
        mode: "tuple",
        answer: [1.5, 0],
        placeholder: "Coordinates (x, y)",
        solution:
          "When $t = 0$, $x = \\cos 0 + \\frac{1}{2}\\cos 0 = \\frac{3}{2}$ and $y = \\sin 0 + \\frac{1}{2}\\sin 0 = 0$.<br>" +
          "$\\therefore$ The coordinates are $\\left(\\frac{3}{2}, 0\\right)$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Another curve $D$ has the parametric equations $x = 2 + \\sqrt{k}\\cos\\theta$, $y = \\frac{3}{2}\\sin\\theta$ for $0 \\le \\theta \\le 2\\pi$ and $k > 0$. Find the cartesian equation for curve $D$.",
        type: "self",
        solution:
          "$\\cos\\theta = \\frac{x - 2}{\\sqrt{k}}$ and $\\sin\\theta = \\frac{2y}{3}$.<br>" +
          "Using $\\cos^2\\theta + \\sin^2\\theta = 1$:<br>" +
          "$\\frac{(x - 2)^2}{k} + \\frac{4y^2}{9} = 1$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Sketch the curves $C$ and $D$ on the same diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 245" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (63, 122), scale x:70, y:60 -->
          <line x1="20" y1="122" x2="305" y2="122" stroke-width="1.2"/>
          <polyline points="299,118 305,122 299,126" fill="none" stroke-width="1.2"/>
          <line x1="63" y1="235" x2="63" y2="12" stroke-width="1.2"/>
          <polyline points="59,18 63,12 67,18" fill="none" stroke-width="1.2"/>
          <text x="308" y="126" stroke="none" font-style="italic">x</text>
          <text x="68" y="17" stroke="none" font-style="italic">y</text>
          <text x="51" y="135" stroke="none">0</text>
          <!-- Guide dashed lines for y = +-3/2 and x = 2 -->
          <line x1="63" y1="32" x2="203" y2="32" stroke="#2c2925" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
          <line x1="63" y1="212" x2="203" y2="212" stroke="#2c2925" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
          <line x1="203" y1="32" x2="203" y2="212" stroke="#2c2925" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
          <!-- Ellipse D centered at (203,122), rx=63 (sqrt(k)=0.9), ry=90 -->
          <ellipse cx="203" cy="122" rx="63" ry="90" fill="none" stroke="#4ca885" stroke-width="1.8"/>
          <text x="206" y="27" stroke="none" fill="#4ca885" font-style="italic">D</text>
          <!-- Curve C -->
          <polyline fill="none" stroke="#cf5652" stroke-width="2" points="168.0,122.0 167.7,116.5 166.7,111.1 165.1,105.8 162.9,100.7 160.2,95.9 156.9,91.4 153.1,87.3 149.0,83.5 144.5,80.3 139.7,77.5 134.7,75.2 129.6,73.5 124.4,72.2 119.3,71.5 114.3,71.3 109.4,71.6 104.9,72.4 100.6,73.5 96.7,75.1 93.3,77.0 90.3,79.2 87.9,81.6 86.0,84.1 84.6,86.7 83.8,89.4 83.6,92.0 83.9,94.5 84.7,96.9 86.0,99.0 87.7,100.8 89.9,102.3 92.3,103.4 95.1,104.1 98.0,104.3 101.0,104.1 104.1,103.5 107.2,102.3 110.2,100.7 113.0,98.6 115.5,96.0 117.7,93.1 119.5,89.8 120.9,86.1 121.8,82.2 122.1,78.0 121.9,73.7 121.1,69.4 119.6,64.9 117.6,60.6 114.9,56.3 111.7,52.2 107.9,48.3 103.5,44.7 98.7,41.5 93.4,38.7 87.8,36.3 81.9,34.5 75.7,33.1 69.4,32.3 63.0,32.0"/>
          <circle cx="168.0" cy="122.0" r="3" fill="#cf5652"/>
          <circle cx="63.0" cy="32.0" r="3" fill="#cf5652"/>
          <text x="72" y="102" stroke="none" fill="#cf5652" font-style="italic">C</text>
          <!-- Labels -->
          <text x="41" y="36" stroke="none">3/2</text>
          <text x="36" y="216" stroke="none">-3/2</text>
          <text x="163" y="138" stroke="none">3/2</text>
          <text x="206" y="136" stroke="none">2</text>
          <text x="103" y="138" stroke="none">2 - &#8730;k</text>
          <text x="268" y="138" stroke="none">2 + &#8730;k</text>
        </svg>`,
        solution:
          "Curve $C$ starts at $\\left(\\frac{3}{2}, 0\\right)$ ($t = 0$), forms a loop in the first quadrant, and ends at $\\left(0, \\frac{3}{2}\\right)$ ($t = \\frac{\\pi}{2}$).<br>" +
          "Curve $D$ is an ellipse centred at $(2, 0)$ with horizontal semi-axis $\\sqrt{k}$ ($x$-intercepts $2 - \\sqrt{k}$ and $2 + \\sqrt{k}$) and vertical semi-axis $\\frac{3}{2}$ ($y \\in [-\\frac{3}{2}, \\frac{3}{2}]$)."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Hence determine the range of values of $k$ such that the equation $\\frac{(\\cos t + 0.5\\cos 5t - 2)^2}{k} + \\frac{4(\\sin t + 0.5\\sin 5t)^2}{9} = 1$ has no real solutions.",
        type: "self",
        solution:
          "The equation represents the intersections between curves $C$ and $D$.<br>" +
          "For no real solutions, $C$ and $D$ must not intersect, so the leftmost point of ellipse $D$ must lie strictly to the right of $\\left(\\frac{3}{2}, 0\\right)$:<br>" +
          "$2 - \\sqrt{k} > \\frac{3}{2} \\implies \\sqrt{k} < \\frac{1}{2} \\implies k < \\frac{1}{4}$.<br>" +
          "Since $k > 0$, we have $0 < k < \\frac{1}{4}$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q5",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Graphs & Transformations", "Integration"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Find $\\int \\frac{1 - 2x}{\\sqrt{3 + 2x - x^2}} \\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0, 1, 2],
        answer: "2*sqrt(3 + 2*x - x^2) - asin((x - 1)/2)",
        placeholder: "Antiderivative in x (omit + c)",
        solution:
          "$\\int \\frac{1 - 2x}{\\sqrt{3 + 2x - x^2}}\\,\\mathrm{d}x = \\int \\frac{2 - 2x}{\\sqrt{3 + 2x - x^2}}\\,\\mathrm{d}x - \\int \\frac{1}{\\sqrt{4 - (x - 1)^2}}\\,\\mathrm{d}x$<br>" +
          "$= 2\\sqrt{3 + 2x - x^2} - \\sin^{-1}\\left(\\frac{x - 1}{2}\\right) + c$."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Find $\\int x \\ln(2 - x^2) \\,\\mathrm{d}x$, where $-\\sqrt{2} < x < \\sqrt{2}$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [-1, 0, 1],
        answer: "(x^2/2 - 1)*ln(2 - x^2) - x^2/2",
        placeholder: "Antiderivative in x (omit + c)",
        solution:
          "Using integration by parts with $u = \\ln(2 - x^2)$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = x$ ($v = \\frac{x^2}{2}$):<br>" +
          "$\\int x\\ln(2 - x^2)\\,\\mathrm{d}x = \\frac{x^2}{2}\\ln(2 - x^2) - \\int \\frac{x^2}{2}\\left(\\frac{-2x}{2 - x^2}\\right)\\mathrm{d}x$<br>" +
          "$= \\frac{x^2}{2}\\ln(2 - x^2) + \\int \\frac{x^3}{2 - x^2}\\,\\mathrm{d}x$<br>" +
          "$= \\frac{x^2}{2}\\ln(2 - x^2) + \\int \\left(-x + \\frac{2x}{2 - x^2}\\right)\\mathrm{d}x$<br>" +
          "$= \\frac{x^2}{2}\\ln(2 - x^2) - \\frac{x^2}{2} - \\ln(2 - x^2) + c$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "A function $\\mathrm{f}$ is defined by $\\mathrm{f}(x) = \\mathrm{e}^x - 2$. Sketch the graph of $y = |\\mathrm{f}(x)|$, indicating clearly the equation(s) of asymptote(s), if any.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 225" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (187, 190), scale x:54, y:40 -->
          <line x1="20" y1="190" x2="305" y2="190" stroke-width="1.2"/>
          <polyline points="299,186 305,190 299,194" fill="none" stroke-width="1.2"/>
          <line x1="187" y1="215" x2="187" y2="12" stroke-width="1.2"/>
          <polyline points="183,18 187,12 191,18" fill="none" stroke-width="1.2"/>
          <text x="308" y="194" stroke="none" font-style="italic">x</text>
          <text x="192" y="17" stroke="none" font-style="italic">y</text>
          <text x="175" y="203" stroke="none">0</text>
          <!-- Horizontal asymptote y = 2 at y = 110 -->
          <line x1="20" y1="110" x2="300" y2="110" stroke="#cf5652" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.7"/>
          <text x="275" y="104" stroke="none" fill="#cf5652" font-style="italic">y = 2</text>
          <!-- Left branch -->
          <polyline fill="none" stroke="#4a8fe7" stroke-width="2" points="25.0,112.0 41.2,112.7 57.4,113.6 73.6,114.9 89.8,116.6 106.0,118.9 122.2,122.0 138.4,126.3 154.6,132.0 170.8,139.6 187.0,150.0 203.2,164.0 219.4,182.9 224.4,190.0"/>
          <!-- Right branch -->
          <polyline fill="none" stroke="#4a8fe7" stroke-width="2" points="224.4,190.0 233.1,176.1 241.7,159.8 250.3,140.7 259.0,118.3 267.6,92.0 276.3,61.1 284.9,24.8"/>
          <!-- Intercepts -->
          <circle cx="187.0" cy="150.0" r="2.8" fill="#4a8fe7"/>
          <text x="150" y="156" stroke="none">(0, 1)</text>
          <circle cx="224.4" cy="190.0" r="2.8" fill="#4a8fe7"/>
          <text x="208" y="206" stroke="none">(ln 2, 0)</text>
          <text x="235" y="45" stroke="none" fill="#4a8fe7" font-style="italic">y = |e&#739; - 2|</text>
        </svg>`,
        solution:
          "For $y = |\\mathrm{e}^x - 2|$:<br>" +
          "• Horizontal asymptote: $y = 2$ (as $x$ → $-∞$).<br>" +
          "• $y$-intercept: $(0, 1)$.<br>" +
          "• Sharp $x$-intercept (cusp): $(\\ln 2, 0)$."
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Hence find $\\int_0^{\\ln 3} |\\mathrm{f}(x)| \\,\\mathrm{d}x$, giving your answer in exact form.",
        type: "auto",
        mode: "number",
        answer: "4*ln(2) - 2*ln(3)",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "$\\int_0^{\\ln 3} |\\mathrm{e}^x - 2|\\,\\mathrm{d}x = \\int_0^{\\ln 2} (2 - \\mathrm{e}^x)\\,\\mathrm{d}x + \\int_{\\ln 2}^{\\ln 3} (\\mathrm{e}^x - 2)\\,\\mathrm{d}x$<br>" +
          "$= \\left[2x - \\mathrm{e}^x\\right]_0^{\\ln 2} + \\left[\\mathrm{e}^x - 2x\\right]_{\\ln 2}^{\\ln 3}$<br>" +
          "$= (2\\ln 2 - 2) - (0 - 1) + (3 - 2\\ln 3) - (2 - 2\\ln 2)$<br>" +
          "$= 4\\ln 2 - 2\\ln 3 = \\ln\\left(\\frac{16}{9}\\right)$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q6",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "The points $P$ and $Q$ are represented by the complex numbers $p$ and $q$ respectively, where $p = \\sqrt{2} + \\sqrt{2}\\mathrm{i}$, $\\arg(q) = \\frac{2}{3}\\pi$ and $|q| = 2$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $|p|$ and $\\arg(p)$ in exact form.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "|p| =", answer: "2", exactRequired: true, placeholder: "Exact modulus" },
          { label: "arg(p) =", answer: "pi/4", exactRequired: true, placeholder: "Exact argument in radians" }
        ],
        solution:
          "$|p| = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{2})^2} = \\sqrt{4} = 2$.<br>" +
          "$\\arg(p) = \\tan^{-1}\\left(\\frac{\\sqrt{2}}{\\sqrt{2}}\\right) = \\frac{\\pi}{4}$ (since $P$ is in the 1st quadrant)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Sketch the points $P$ and $Q$ on an Argand diagram.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 220" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (140, 180), scale 55px per unit -->
          <line x1="25" y1="180" x2="260" y2="180" stroke-width="1.2"/>
          <polyline points="254,176 260,180 254,184" fill="none" stroke-width="1.2"/>
          <line x1="140" y1="208" x2="140" y2="16" stroke-width="1.2"/>
          <polyline points="136,22 140,16 144,22" fill="none" stroke-width="1.2"/>
          <text x="262" y="184" stroke="none">Re</text>
          <text x="145" y="21" stroke="none">Im</text>
          <text x="128" y="193" stroke="none" font-style="italic">O</text>
          <!-- P = (sqrt2, sqrt2) -> (217.8, 102.2) -->
          <line x1="140" y1="180" x2="217.8" y2="102.2" stroke="#4a8fe7" stroke-width="1.8"/>
          <circle cx="217.8" cy="102.2" r="3.2" fill="#4a8fe7"/>
          <text x="223" y="102" stroke="none" fill="#4a8fe7" font-weight="bold">P(&#8730;2, &#8730;2)</text>
          <!-- Q = (-1, sqrt3) -> (85, 84.7) -->
          <line x1="140" y1="180" x2="85" y2="84.7" stroke="#cf5652" stroke-width="1.8"/>
          <circle cx="85" cy="84.7" r="3.2" fill="#cf5652"/>
          <text x="32" y="82" stroke="none" fill="#cf5652" font-weight="bold">Q(-1, &#8730;3)</text>
          <!-- Angle arcs -->
          <path d="M 165 180 A 25 25 0 0 0 157.7 162.3" fill="none" stroke="#4a8fe7" stroke-width="1.2"/>
          <text x="169" y="170" stroke="none" fill="#4a8fe7">&#960;/4</text>
          <path d="M 176 180 A 36 36 0 0 0 122 148.8" fill="none" stroke="#cf5652" stroke-width="1.2" stroke-dasharray="3,2"/>
          <text x="146" y="140" stroke="none" fill="#cf5652">2&#960;/3</text>
        </svg>`,
        solution:
          "$P$ is plotted in the first quadrant at distance $2$ from $O$ with argument $\\frac{\\pi}{4}$ (coordinates $(\\sqrt{2}, \\sqrt{2})$).<br>" +
          "$Q$ is plotted in the second quadrant at distance $2$ from $O$ with argument $\\frac{2\\pi}{3}$ (coordinates $(-1, \\sqrt{3})$)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Use the Argand diagram to deduce $\\mathrm{Re}(q)$ and $\\mathrm{Im}(q)$, giving your answers in exact form.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Re(q) =", answer: "-1", exactRequired: true, placeholder: "Exact value" },
          { label: "Im(q) =", answer: "sqrt(3)", exactRequired: true, placeholder: "Exact value" }
        ],
        solution:
          "Since $|q| = 2$ and $\\arg(q) = \\frac{2\\pi}{3}$:<br>" +
          "$q = 2\\left(\\cos\\frac{2\\pi}{3} + \\mathrm{i}\\sin\\frac{2\\pi}{3}\\right) = 2\\left(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\mathrm{i}\\right) = -1 + \\sqrt{3}\\mathrm{i}$.<br>" +
          "$\\therefore \\mathrm{Re}(q) = -1$ and $\\mathrm{Im}(q) = \\sqrt{3}$."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "The point $R$ is represented by the complex number $p + q$. What can you deduce about the shape of quadrilateral $OPRQ$, where $O$ is the origin?",
        type: "self",
        solution:
          "By the parallelogram law of vector addition, $OPRQ$ is a parallelogram. Since $OP = |p| = 2 = |q| = OQ$, quadrilateral $OPRQ$ is a <strong>rhombus</strong>."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "By considering $\\arg(p + q)$ or otherwise, show that $\\tan\\left(\\frac{11}{24}\\pi\\right) = \\sqrt{6} + \\sqrt{3} + \\sqrt{2} + 2$.",
        type: "self",
        solution:
          "Since $OPRQ$ is a rhombus, the diagonal $OR$ bisects ∠$POQ$:<br>" +
          "$\\arg(p + q) = \\frac{1}{2}\\left(\\arg(p) + \\arg(q)\\right) = \\frac{1}{2}\\left(\\frac{\\pi}{4} + \\frac{2\\pi}{3}\\right) = \\frac{11\\pi}{24}$.<br>" +
          "Also, $p + q = (\\sqrt{2} + \\sqrt{2}\\mathrm{i}) + (-1 + \\sqrt{3}\\mathrm{i}) = (\\sqrt{2} - 1) + (\\sqrt{3} + \\sqrt{2})\\mathrm{i}$.<br>" +
          "Since $\\sqrt{2} - 1 > 0$ and $\\sqrt{3} + \\sqrt{2} > 0$, $p + q$ lies in the 1st quadrant:<br>" +
          "$\\tan\\left(\\frac{11\\pi}{24}\\right) = \\frac{\\sqrt{3} + \\sqrt{2}}{\\sqrt{2} - 1} = \\frac{(\\sqrt{3} + \\sqrt{2})(\\sqrt{2} + 1)}{(\\sqrt{2} - 1)(\\sqrt{2} + 1)} = \\sqrt{6} + \\sqrt{3} + \\sqrt{2} + 2$ (shown)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q7",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "Anthony plays a game using a four-sided fair die with the numbers $1$, $2$, $3$ and $4$ printed on its sides. Anthony rolls the die and should the outcome be a prime number, he wins an amount equivalent to that number in dollars. Conversely, if the outcome is a non-prime number, Anthony will lose an amount equivalent to that number in dollars. The random variable $X$ represents the amount of money Anthony wins in a roll of the die.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Tabulate the probability distribution of $X$ and find the value of $\\mathrm{E}(X)$.",
        type: "auto",
        mode: "number",
        answer: "0",
        exactRequired: true,
        placeholder: "Value of E(X)",
        solution:
          "Prime outcomes are $2, 3$ (win $2, 3$); non-prime outcomes are $1, 4$ (lose $1, 4$):<br>" +
          "<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$-4$</td><td>$-1$</td><td>$2$</td><td>$3$</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$\\frac{1}{4}$</td><td>$\\frac{1}{4}$</td><td>$\\frac{1}{4}$</td><td>$\\frac{1}{4}$</td></tr></table></div>" +
          "$\\mathrm{E}(X) = \\frac{-4 - 1 + 2 + 3}{4} = 0$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Find the value of the variance of $X$.",
        type: "auto",
        mode: "number",
        answer: "15/2",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "$\\mathrm{Var}(X) = \\mathrm{E}(X^2) - [\\mathrm{E}(X)]^2 = \\frac{(-4)^2 + (-1)^2 + 2^2 + 3^2}{4} - 0^2 = \\frac{16 + 1 + 4 + 9}{4} = \\frac{30}{4} = \\frac{15}{2}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The random variables $X_1$ and $X_2$ are two independent observations of $X$. By drawing a table of outcomes for $|X_1 + X_2|$ or otherwise, find $\\mathrm{E}(|X_1 + X_2|)$.",
        type: "auto",
        mode: "number",
        answer: "13/4",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "Let $Y = |X_1 + X_2|$. Each of the $16$ equally likely pairs $(X_1, X_2)$ has probability $\\frac{1}{16}$:<br>" +
          "<div class='q-table-wrap'><table class='q-table'><tr><th>$X_2 \\backslash X_1$</th><th>$-4$</th><th>$-1$</th><th>$2$</th><th>$3$</th></tr><tr><th>$-4$</th><td>$8$</td><td>$5$</td><td>$2$</td><td>$1$</td></tr><tr><th>$-1$</th><td>$5$</td><td>$2$</td><td>$1$</td><td>$2$</td></tr><tr><th>$2$</th><td>$2$</td><td>$1$</td><td>$4$</td><td>$5$</td></tr><tr><th>$3$</th><td>$1$</td><td>$2$</td><td>$5$</td><td>$6$</td></tr></table></div>" +
          "<div class='q-table-wrap'><table class='q-table'><tr><th>$y$</th><td>$1$</td><td>$2$</td><td>$4$</td><td>$5$</td><td>$6$</td><td>$8$</td></tr><tr><th>$\\mathrm{P}(Y = y)$</th><td>$\\frac{4}{16}$</td><td>$\\frac{5}{16}$</td><td>$\\frac{1}{16}$</td><td>$\\frac{4}{16}$</td><td>$\\frac{1}{16}$</td><td>$\\frac{1}{16}$</td></tr></table></div>" +
          "$\\mathrm{E}(Y) = \\frac{1(4) + 2(5) + 4(1) + 5(4) + 6(1) + 8(1)}{16} = \\frac{52}{16} = \\frac{13}{4}$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Assume now that a biased six-sided die with numbers $2, 3, 4, 5, 6$ and $7$ printed on its sides is used instead for the same game. It is known that for this biased die, the probability of obtaining a '3' is $p$, the probability of obtaining a '5' is $2p$ and the remaining four numbers each have an equal probability of occurring. Find the exact value of $p$ for the game to be fair using the biased die.",
        type: "auto",
        mode: "number",
        answer: "1/55",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "Each of the remaining four numbers ($2, 4, 6, 7$) has probability $\\frac{1 - 3p}{4}$.<br>" +
          "Prime outcomes are $2, 3, 5, 7$; non-prime outcomes are $4, 6$:<br>" +
          "<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$-6$</td><td>$-4$</td><td>$2$</td><td>$3$</td><td>$5$</td><td>$7$</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$\\frac{1 - 3p}{4}$</td><td>$\\frac{1 - 3p}{4}$</td><td>$\\frac{1 - 3p}{4}$</td><td>$p$</td><td>$2p$</td><td>$\\frac{1 - 3p}{4}$</td></tr></table></div>" +
          "$\\mathrm{E}(X) = (-6 - 4 + 2 + 7)\\left(\\frac{1 - 3p}{4}\\right) + 3p + 5(2p) = -\\frac{1 - 3p}{4} + 13p = -\\frac{1}{4} + \\frac{55}{4}p$.<br>" +
          "For a fair game, $\\mathrm{E}(X) = 0 \\implies -\\frac{1}{4} + \\frac{55}{4}p = 0 \\implies p = \\frac{1}{55}$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q8",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "A study was conducted on a group of pre-diabetic seniors to examine whether the number of hours of exercise per week ($t$) has any effect on their fasting blood sugar levels ($S$, measured in mg/dL). The results were as follows.<div class='q-table-wrap'><table class='q-table'><tr><th>$t$</th><td>$1.5$</td><td>$1.8$</td><td>$2.1$</td><td>$2.4$</td><td>$2.5$</td><td>$3.1$</td><td>$3.5$</td><td>$4.2$</td></tr><tr><th>$S$</th><td>$119$</td><td>$108$</td><td>$100$</td><td>$95$</td><td>$93$</td><td>$88$</td><td>$86$</td><td>$85$</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Draw the scatter diagram for these values, labelling the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 240" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: origin at (45, 210) -->
          <line x1="45" y1="210" x2="322" y2="210" stroke-width="1.2"/>
          <polyline points="316,206 322,210 316,214" fill="none" stroke-width="1.2"/>
          <line x1="45" y1="210" x2="45" y2="16" stroke-width="1.2"/>
          <polyline points="41,22 45,16 49,22" fill="none" stroke-width="1.2"/>
          <text x="325" y="214" stroke="none" font-style="italic">t</text>
          <text x="38" y="13" stroke="none" font-style="italic">S</text>
          <!-- Ticks -->
          <text x="41" y="224" stroke="none">0</text>
          <text x="100" y="224" stroke="none">1</text>
          <text x="159" y="224" stroke="none">2</text>
          <text x="218" y="224" stroke="none">3</text>
          <text x="277" y="224" stroke="none">4</text>
          <text x="20" y="159" stroke="none">40</text>
          <text x="20" y="105" stroke="none">80</text>
          <text x="15" y="51" stroke="none">120</text>
          <!-- Data points -->
          <circle cx="133.1" cy="48.5" r="3" fill="#4ca885"/>
          <circle cx="150.7" cy="63.4" r="3" fill="#4ca885"/>
          <circle cx="168.3" cy="74.3" r="3" fill="#4ca885"/>
          <circle cx="185.9" cy="81.1" r="3" fill="#4ca885"/>
          <circle cx="191.8" cy="83.8" r="3" fill="#4ca885"/>
          <circle cx="227.0" cy="90.6" r="3" fill="#4ca885"/>
          <circle cx="250.5" cy="93.3" r="3" fill="#4ca885"/>
          <circle cx="291.5" cy="94.6" r="3" fill="#4ca885"/>
          <!-- Endpoint labels -->
          <text x="102" y="38" stroke="none">(1.5, 119)</text>
          <text x="268" y="114" stroke="none">(4.2, 85)</text>
        </svg>`,
        solution:
          "Plot the 8 points $(t, S)$ from $(1.5, 119)$ to $(4.2, 85)$ with axes labelled $t$ and $S$. The points follow a decreasing, concave-up curve."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Comment on whether a linear model would be appropriate, referring both to the scatter diagram and the context of the question.",
        type: "self",
        solution:
          "A linear model is <strong>not appropriate</strong>:<br>" +
          "1. From the scatter diagram, the relationship between $S$ and $t$ is non-linear; $S$ decreases at a decreasing rate as $t$ increases.<br>" +
          "2. In context, a linear model with negative gradient would predict that fasting blood sugar level eventually decreases to zero or negative values for large $t$, which is biologically impossible."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "By considering the shape of the following graphs, explain which model is the most appropriate for the data collected, where $a$ and $b$ are positive constants.<br><strong>A:</strong> $S = a + bt^2$, &nbsp; <strong>B:</strong> $S = a + \\frac{b}{t}$, &nbsp; <strong>C:</strong> $S = a + b\\ln t$.",
        type: "self",
        solution:
          "From the scatter diagram, $S$ decreases at a decreasing rate as $t$ increases, which matches model <strong>B</strong> ($S = a + \\frac{b}{t}$, $b > 0$).<br>" +
          "For models A ($S = a + bt^2$) and C ($S = a + b\\ln t$), $S$ increases as $t$ increases since $b > 0$.<br>" +
          "Hence model <strong>B</strong> is the most appropriate."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Using the appropriate model selected above, find the value of the product moment correlation coefficient.",
        type: "auto",
        mode: "number",
        answer: "0.988064",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Using GC for the linear regression of $S$ on $\\frac{1}{t}$:<br>" +
          "$r = 0.988064 \\approx 0.988$ (3 s.f.)."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Using the appropriate model selected above, find the equation of the regression line of $S$ on $t$, and hence find an estimate of the exercise time required for the fasting blood sugar to be $99$ mg/dL. Comment on the reliability of your answer.",
        type: "self",
        solution:
          "From GC, the regression equation is:<br>" +
          "$S = 62.4376 + \\frac{81.6605}{t}$, i.e. $S = 62.4 + \\frac{81.7}{t}$ (3 s.f.).<br>" +
          "When $S = 99$: $99 = 62.4376 + \\frac{81.6605}{t} \\implies t = \\frac{81.6605}{36.5624} \\approx 2.23$ hours (3 s.f.).<br>" +
          "<strong>Reliability:</strong> The estimate is <strong>reliable</strong> because $|r| = 0.988$ is very close to $1$ (strong linear correlation between $S$ and $\\frac{1}{t}$) and $S = 99$ lies within the given data range $[85, 119]$ (interpolation)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q9",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "In this question, you should state clearly all the distributions that you use, together with the values of the appropriate parameters.<br><br>A toy designer creates weighted wooden blocks used in balance-based educational toys. There are two types of blocks: cylindrical blocks and cuboidal blocks. The mass, in grams, of each cylindrical block and cuboidal block follow a normal distribution with the following parameters:<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>Mean</th><th>Standard Deviation</th></tr><tr><th>cylindrical block</th><td>$280$</td><td>$6$</td></tr><tr><th>cuboidal block</th><td>$220$</td><td>$5$</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the probability that the mass of a randomly selected cylindrical block exceeds the mass of a randomly selected cuboidal block by more than $65$ grams.",
        type: "auto",
        mode: "number",
        answer: "0.261026",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Let $X$ and $Y$ be the masses (in g) of a randomly selected cylindrical and cuboidal block respectively.<br>" +
          "$X \\sim \\mathrm{N}(280, 6^2)$ and $Y \\sim \\mathrm{N}(220, 5^2)$.<br>" +
          "$X - Y \\sim \\mathrm{N}(280 - 220, 6^2 + 5^2) = \\mathrm{N}(60, 61)$.<br>" +
          "$\\mathrm{P}(X - Y > 65) = 0.261026 \\approx 0.261$ (3 s.f.)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The probability that the total of twice the mass of a cylindrical block and thrice the mass of a cuboidal block being less than $M$ g is $0.355$. Find the value of $M$, giving your answer to the nearest integer.",
        type: "auto",
        mode: "number",
        answer: "1213",
        exactRequired: true,
        placeholder: "Nearest integer",
        solution:
          "Let $C = 2X + 3Y$.<br>" +
          "$C \\sim \\mathrm{N}(2(280) + 3(220), 2^2(6^2) + 3^2(5^2)) = \\mathrm{N}(1220, 369)$.<br>" +
          "Given $\\mathrm{P}(C < M) = 0.355$, using GC (invNorm): $M = 1212.8568 \\approx 1213$ (nearest integer)."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "To build a deluxe seesaw model, the designer uses $2$ cylindrical blocks, $3$ cuboidal blocks, $7$ screws and $1$ wooden plank. The blocks are drilled before assembly to fit screws: each cylindrical block loses $5\\%$ of its mass after drilling, and each cuboidal block loses $3\\%$ of its mass after drilling. The masses of the remaining components follow a normal distribution with the following parameters:<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>Mean</th><th>Standard Deviation</th></tr><tr><th>screw</th><td>$8$</td><td>$1.2$</td></tr><tr><th>wooden plank</th><td>$540$</td><td>$8$</td></tr></table></div>When assembling the deluxe seesaw model, all of its components are chosen at random. Find the probability that the total mass of all the modified components in a deluxe seesaw model is more than $1785$ g.",
        type: "auto",
        mode: "number",
        answer: "0.122955",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Let $S \\sim \\mathrm{N}(8, 1.2^2)$ and $W \\sim \\mathrm{N}(540, 8^2)$ be the masses of a screw and wooden plank respectively.<br>" +
          "Let $T = 0.95(X_1 + X_2) + 0.97(Y_1 + Y_2 + Y_3) + (S_1 + \\cdots + S_7) + W$.<br>" +
          "$\\mathrm{E}(T) = 0.95(2)(280) + 0.97(3)(220) + 7(8) + 540 = 532 + 640.2 + 56 + 540 = 1768.2$.<br>" +
          "$\\mathrm{Var}(T) = 0.95^2(2)(6^2) + 0.97^2(3)(5^2) + 7(1.2^2) + 8^2 = 64.98 + 70.5675 + 10.08 + 64 = 209.6275$.<br>" +
          "$T \\sim \\mathrm{N}(1768.2, 209.6275)$.<br>" +
          "$\\mathrm{P}(T > 1785) = 0.122955 \\approx 0.123$ (3 s.f.)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q10",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Binomial Distribution", "Sampling & CLT"],
    stem: "Green Earth Factory produces solar panels. On average, $2\\%$ of the solar panels produced are found to contain defects. The solar panels are packed in batches of $10$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State, in the context of solar panel production, two assumptions needed for the number of defective solar panels in a batch to be well modelled by a binomial distribution.",
        type: "self",
        solution:
          "1. Whether a solar panel is defective is <strong>independent</strong> of whether any other solar panel in the batch is defective.<br>" +
          "2. The probability that a randomly chosen solar panel is defective is <strong>constant</strong> at $0.02$ for every solar panel."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "It is now given that the number of defective solar panels per batch follows a binomial distribution. Find the probability that a batch contains at least $2$ defective solar panels.",
        type: "auto",
        mode: "number",
        answer: "0.0161776",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Let $S$ be the number of defective solar panels out of $10$. $S \\sim \\mathrm{B}(10, 0.02)$.<br>" +
          "$\\mathrm{P}(S \\ge 2) = 1 - \\mathrm{P}(S \\le 1) = 0.0161776 \\approx 0.0162$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "As part of the Green Plan initiative, the Education Department plans to install solar panels on the rooftops of $100$ primary schools to reduce carbon footprint. Each school will be fitted with $10$ solar panels, and the school will lodge a complaint if there are at least two defective panels in their allocation. Find the probability that at most $5$ schools lodge complaints.",
        type: "auto",
        mode: "number",
        answer: "0.994136",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Let $Y$ be the number of schools out of $100$ that lodge a complaint.<br>" +
          "$Y \\sim \\mathrm{B}(100, 0.0161776)$.<br>" +
          "$\\mathrm{P}(Y \\le 5) = 0.994136 \\approx 0.994$ (3 s.f.)."
      },
      {
        label: "(d)",
        marks: 5,
        prompt: "Green Earth Factory also produces LED lights with a defect rate of $1\\%$. The number of defective LED lights also follows a binomial distribution. As part of the same green initiative, the Education Department orders installations for the $100$ primary schools, with each school receiving another $25$ LED lights. For quality control purposes, the Education Department will fine the factory if the total number of defective items (combining both solar panels and LED lights) across all $100$ schools exceeds $50$ units. By using an approximation, find the probability that Green Earth Factory receives a fine.",
        type: "auto",
        mode: "number",
        answer: "0.226387",
        placeholder: "Correct to 3 s.f.",
        solution:
          "Let $L \\sim \\mathrm{B}(25, 0.01)$ be the number of defective LED lights in one school, and $S \\sim \\mathrm{B}(10, 0.02)$ be the number of defective solar panels in one school.<br>" +
          "$\\mathrm{E}(L) = 25(0.01) = 0.25$, $\\mathrm{Var}(L) = 25(0.01)(0.99) = 0.2475$.<br>" +
          "$\\mathrm{E}(S) = 10(0.02) = 0.2$, $\\mathrm{Var}(S) = 10(0.02)(0.98) = 0.196$.<br>" +
          "Let $A = L_1 + \\cdots + L_{100}$ and $B = S_1 + \\cdots + S_{100}$.<br>" +
          "Since $n = 100$ is large, by the Central Limit Theorem:<br>" +
          "$A \\sim \\mathrm{N}(25, 24.75)$ and $B \\sim \\mathrm{N}(20, 19.6)$ approximately.<br>" +
          "Hence $A + B \\sim \\mathrm{N}(45, 44.35)$ approximately.<br>" +
          "$\\mathrm{P}(A + B > 50) = 0.226387 \\approx 0.226$ (3 s.f.)."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q11",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Permutations & Combinations", "Probability"],
    stem: "For part (a): In a survey conducted by a library, a group of $100$ members were asked the number of days in a month they visit the library. The results are shown below:<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>$1$ or less</th><th>$2$ to $4$</th><th>$5$ or more</th></tr><tr><th>Male</th><td>$15$</td><td>$25$</td><td>$22$</td></tr><tr><th>Female</th><td>$20$</td><td>$18 - n$</td><td>$n$</td></tr></table></div>A member is selected at random from the group. The events are defined as follows:<br>$A$: The member visits the library on $4$ days or less in a month.<br>$B$: The member visits the library on $2$ days or more in a month.<br>$F$: The member is a female.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Find $\\mathrm{P}(A \\cup B')$ in terms of $n$.",
        type: "auto",
        mode: "expr",
        vars: { n: [5, 10, 13] },
        answer: "(78 - n)/100",
        placeholder: "Expression in terms of n",
        solution:
          "Since $B'$ ('1 day or less') is a subset of $A$ ('4 days or less'), $A \\cup B' = A$.<br>" +
          "$\\mathrm{P}(A \\cup B') = \\mathrm{P}(A) = \\frac{15 + 25 + 20 + (18 - n)}{100} = \\frac{78 - n}{100}$."
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find $\\mathrm{P}(F \\mid A')$ in terms of $n$.",
        type: "auto",
        mode: "expr",
        vars: { n: [5, 10, 13] },
        answer: "n/(22 + n)",
        placeholder: "Expression in terms of n",
        solution:
          "$A'$ is the event '5 or more days', which has $22 + n$ members, of whom $n$ are female.<br>" +
          "$\\mathrm{P}(F \\mid A') = \\frac{\\mathrm{P}(F \\cap A')}{\\mathrm{P}(A')} = \\frac{n/100}{(22 + n)/100} = \\frac{n}{22 + n}$."
      },
      {
        label: "(a)(iii)",
        marks: 3,
        prompt: "Given that $\\mathrm{P}(A \\cap B) = \\frac{3}{10}$, find the value of $n$. Hence determine if $A$ and $B$ are independent, justifying your answer.",
        type: "auto",
        mode: "number",
        answer: "13",
        exactRequired: true,
        placeholder: "Value of n",
        solution:
          "$A \\cap B$ is the event '2 to 4 days': $\\mathrm{P}(A \\cap B) = \\frac{25 + (18 - n)}{100} = \\frac{43 - n}{100}$.<br>" +
          "$\\frac{43 - n}{100} = \\frac{3}{10} \\implies 43 - n = 30 \\implies n = 13$.<br>" +
          "Then $\\mathrm{P}(A) = \\frac{78 - 13}{100} = \\frac{65}{100} = \\frac{13}{20}$ and $\\mathrm{P}(B) = \\frac{100 - 35}{100} = \\frac{65}{100} = \\frac{13}{20}$.<br>" +
          "$\\mathrm{P}(A)\\mathrm{P}(B) = \\frac{13}{20} \\times \\frac{13}{20} = \\frac{169}{400} \\ne \\frac{3}{10} = \\mathrm{P}(A \\cap B)$.<br>" +
          "$\\therefore A$ and $B$ are <strong>not independent</strong>."
      },
      {
        label: "(b)(i)",
        marks: 1,
        prompt: "A librarian is organising a large community reading event. To manage registration, he needs to create $4$-letter access codes for the participants using the letters from the word <strong>BOOKKEEPER</strong>. How many access codes can be formed if all $4$ letters are distinct from one another?",
        type: "auto",
        mode: "number",
        answer: "360",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "BOOKKEEPER has $6$ distinct letters: B, O (×2), K (×2), E (×3), P, R.<br>" +
          "Number of $4$-letter codes with all distinct letters $= {^6C_4} \\times 4! = 15 \\times 24 = 360$."
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Find the total number of access codes that can be created given that there is no restriction.",
        type: "auto",
        mode: "number",
        answer: "758",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Case 1 (All $4$ distinct): $360$.<br>" +
          "Case 2 (One pair of repeated letters, XXYZ): ${^3C_1} \\times {^5C_2} \\times \\frac{4!}{2!} = 3 \\times 10 \\times 12 = 360$.<br>" +
          "Case 3 (Two pairs of repeated letters, XXYY): ${^3C_2} \\times \\frac{4!}{2!2!} = 3 \\times 6 = 18$.<br>" +
          "Case 4 (Three E's and one other letter, EEEX): ${^5C_1} \\times \\frac{4!}{3!} = 5 \\times 4 = 20$.<br>" +
          "Total $= 360 + 360 + 18 + 20 = 758$."
      },
      {
        label: "(b)(iii)",
        marks: 3,
        prompt: "To run an event, the librarian plans to select a team of $12$ volunteers from a group of $18$. The volunteers comprise three age groups: $5$ youths, $6$ young adults, and $7$ seniors. In how many ways can the team be formed if at least one volunteer must be chosen from each age group?",
        type: "auto",
        mode: "number",
        answer: "18550",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Total ways without restriction $= {^{18}C_{12}} = 18564$.<br>" +
          "Ways with no youth (choose all $12$ from the $13$ non-youths) $= {^{13}C_{12}} = 13$.<br>" +
          "Ways with no young adult (choose all $12$ from the $12$ non-young-adults) $= {^{12}C_{12}} = 1$.<br>" +
          "Ways with no senior $= 0$ (since only $5 + 6 = 11 < 12$ non-seniors).<br>" +
          "$\\therefore$ Required number of ways $= 18564 - 13 - 1 = 18550$."
      }
    ]
  },

  {
    id: "ASRJC-2025-P2-Q12",
    year: 2025,
    school: "ASRJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q12",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "Flour is packed in bags of $1.5$ kg, as stated on the packaging, by two separate machines $A$ and $B$ in a factory. During a quality control inspection, the production manager selects a random sample of $40$ bags filled by machine $A$ for checking. The masses, $x$ kg, of these $40$ bags are recorded as follows:<br>$\\sum x = 60.32$, &nbsp; $\\sum x^2 = 90.993$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State what it means for a sample to be random in this context.",
        type: "self",
        solution:
          "Every bag of flour filled by machine $A$ has an <strong>equal probability</strong> of being selected for the sample, and each bag is selected <strong>independently</strong> of the others."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find unbiased estimates of the population mean and variance of the mass of the filled bags.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "1.508", placeholder: "Exact or 3 s.f." },
          { label: "Variance =", answer: "0.000780513", placeholder: "Exact or 3 s.f." }
        ],
        solution:
          "Unbiased estimate of population mean: $\\bar{x} = \\frac{60.32}{40} = 1.508$ kg.<br>" +
          "Unbiased estimate of population variance: $s^2 = \\frac{1}{39}\\left(90.993 - \\frac{60.32^2}{40}\\right) = 0.000780513 \\approx 0.000781$ kg$^2$ (3 s.f.)."
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "Test, at the $5\\%$ level of significance, whether machine $A$ produces overweight bags. You should state your hypotheses and define any symbols you use.",
        type: "self",
        solution:
          "Let $X$ be the mass (in kg) of a randomly chosen bag of flour filled by machine $A$, and let $\\mu$ be the population mean mass of bags filled by machine $A$.<br>" +
          "$\\mathrm{H}_0 : \\mu = 1.5$ &nbsp; vs &nbsp; $\\mathrm{H}_1 : \\mu > 1.5$ (one-tailed test at $5\\%$ significance level).<br>" +
          "Under $\\mathrm{H}_0$, since $n = 40$ is large, by the Central Limit Theorem:<br>" +
          "$\\bar{X} \\sim \\mathrm{N}\\left(1.5, \\frac{0.000780513}{40}\\right)$ approximately.<br>" +
          "Test statistic: $z = \\frac{1.508 - 1.5}{\\sqrt{0.000780513 / 40}} = 1.811$.<br>" +
          "$p$-value $= \\mathrm{P}(Z > 1.811) = 0.0351$ (3 s.f.).<br>" +
          "Since $p$-value $= 0.0351 < 0.05$, we reject $\\mathrm{H}_0$ and conclude that there is sufficient evidence at the $5\\%$ level of significance that machine $A$ produces overweight bags."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Explain in the context of the question, the meaning of '$p$-value'.",
        type: "self",
        solution:
          "It is the probability of obtaining a sample mean mass of $40$ randomly selected bags of flour to be at least $1.508$ kg, assuming that the true population mean mass of bags filled by machine $A$ is $1.5$ kg."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "The manager also wants to test whether the mean mass of the bags filled by machine $B$ differs from $1.5$ kg. It is known that the mass of the bags filled by machine $B$ is normally distributed with variance $0.00198$ kg$^2$. A sample of size $n$ is randomly selected and its mean is found to be $1.489$ kg. Find the range of values that $n$ can take if there is sufficient evidence to conclude that the mean mass of the filled bags differs from $1.5$ kg, at the $5\\%$ level of significance.",
        type: "self",
        solution:
          "Test $\\mathrm{H}_0 : \\mu = 1.5$ against $\\mathrm{H}_1 : \\mu \\ne 1.5$ at the $5\\%$ level of significance (two-tailed, critical value $\\pm 1.95996$).<br>" +
          "Under $\\mathrm{H}_0$, $\\bar{Y} \\sim \\mathrm{N}\\left(1.5, \\frac{0.00198}{n}\\right)$.<br>" +
          "For $\\mathrm{H}_0$ to be rejected, since $\\bar{y} = 1.489 < 1.5$:<br>" +
          "$\\frac{1.489 - 1.5}{\\sqrt{0.00198 / n}} < -1.95996$<br>" +
          "$\\sqrt{n} > \\frac{1.95996\\sqrt{0.00198}}{0.011} = 7.9284$<br>" +
          "$n > 62.8602$.<br>" +
          "Since $n$ is a positive integer, $n \\ge 63$ ($n \\in \\mathbb{Z}^+$)."
      }
    ]
  }
]);
