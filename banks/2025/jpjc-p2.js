window.registerQuestions([
  // =========================================================================
  // SECTION A: PURE MATHEMATICS (40 marks)
  // =========================================================================

  // =========================================================================
  // Q1 (9 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q1",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations", "Differential Equations"],
    stem: "To prepare for the General Election, a political party studies the effectiveness of spreading information on Instantglam, a social media platform, by uploading a particular video. The number of Instantglam users who have viewed the video increases at a rate that is directly proportional to the number of Instantglam users who have yet to view the video. The number of Instantglam users who have viewed the video $t$ hours after the video is uploaded is $x$. The total number of Instantglam users is $P$, assumed to be fixed.",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "Write down a differential equation and show that $x = P(1 - \\mathrm{e}^{-kt})$, where $k$ is a positive constant.",
        type: "self",
        solution: "The differential equation is:<br>$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = k(P - x), \\quad k > 0$$<br>Separating variables and integrating:<br>$$\\int \\frac{1}{P - x} \\,\\mathrm{d}x = \\int k \\,\\mathrm{d}t$$<br>$$-\\ln(P - x) = kt + C \\quad (\\text{since } P > x)$$<br>$$P - x = \\mathrm{e}^{-kt - C} = A\\mathrm{e}^{-kt}, \\quad \\text{where } A = \\mathrm{e}^{-C}$$<br>$$x = P - A\\mathrm{e}^{-kt}$$<br>When $t = 0$, $x = 0 \\implies 0 = P - A \\implies A = P$.<br>Hence, $x = P(1 - \\mathrm{e}^{-kt})$ (shown)."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "It is known that $12$ hours after the video is uploaded, half the total number of Instantglam users have viewed the video.<br>Estimate to the nearest hour, the time needed for $80\\%$ of the total number of Instantglam users to have viewed the video.",
        type: "auto",
        mode: "number",
        answer: "28",
        exactRequired: true,
        placeholder: "Time in hours (nearest hour)",
        solution: "When $t = 12$, $x = \\frac{1}{2}P$:<br>$$\\frac{1}{2}P = P(1 - \\mathrm{e}^{-12k}) \\implies \\mathrm{e}^{-12k} = \\frac{1}{2} \\implies k = \\frac{\\ln 2}{12}$$<br>When $x = 0.8P$:<br>$$0.8P = P\\left(1 - \\mathrm{e}^{-\\frac{t}{12}\\ln 2}\\right) \\implies \\mathrm{e}^{-\\frac{t}{12}\\ln 2} = 0.2$$<br>$$-\\frac{t}{12}\\ln 2 = \\ln 0.2 \\implies t = \\frac{-12\\ln 0.2}{\\ln 2} = 27.863\\ldots \\approx 28 \\text{ hours (nearest hour)}$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Sketch the graph of $x$ against $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 185" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="30" y1="150" x2="275" y2="150" stroke-width="1.2"/>
  <polyline points="269,146 275,150 269,154" fill="none" stroke-width="1.2"/>
  <line x1="55" y1="170" x2="55" y2="20" stroke-width="1.2"/>
  <polyline points="51,26 55,20 59,26" fill="none" stroke-width="1.2"/>
  <text x="280" y="154" stroke="none" font-style="italic">t</text>
  <text x="43" y="22" stroke="none" font-style="italic">x</text>
  <text x="43" y="163" stroke="none" font-style="italic">O</text>
  <!-- Horizontal asymptote x = P -->
  <line x1="30" y1="55" x2="265" y2="55" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.1"/>
  <text x="242" y="47" stroke="none" font-style="italic">x = P</text>
  <!-- Curve x = P(1 - e^(-kt)) -->
  <path d="M 55,150 C 78,92 125,63 260,57" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="55" cy="150" r="2.5" fill="#4a8fe7" stroke="none"/>
  <text x="128" y="112" stroke="none" fill="#4a8fe7" font-style="italic">x = P(1 − e⁻ᵏᵗ)</text>
</svg>`,
        solution: "The graph starts at the origin $(0, 0)$ for $t \\ge 0$, increases at a decreasing rate (concave downwards), and approaches the horizontal asymptote $x = P$ from below as $t$ → ∞."
      }
    ]
  },

  // =========================================================================
  // Q2 (10 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q2",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Vectors"],
    stem: "With reference to the origin $O$, the points $A$, $P$ and $Q$ have position vectors $\\mathbf{a}$, $\\mathbf{p}$ and $\\mathbf{q}$ respectively. A straight line $l$ through the point $A$ is parallel to a unit vector $\\mathbf{e}$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "The point $Q$ lies on $l$. Show that $(\\mathbf{q} - \\mathbf{a}) \\times \\mathbf{e} = \\mathbf{0}$.",
        type: "self",
        solution: "Equation of line $l$: $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{e}$, $\\lambda \\in \\mathbb{R}$.<br>Since $Q$ lies on $l$, $\\mathbf{q} = \\mathbf{a} + \\lambda\\mathbf{e}$ for some $\\lambda \\in \\mathbb{R}$ (so $AQ = \\mathbf{q} - \\mathbf{a} = \\lambda\\mathbf{e}$ is parallel to $\\mathbf{e}$).<br>$$(\\mathbf{q} - \\mathbf{a}) \\times \\mathbf{e} = (\\lambda\\mathbf{e}) \\times \\mathbf{e} = \\lambda(\\mathbf{e} \\times \\mathbf{e}) = \\mathbf{0} \\quad (\\text{shown})$$"
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Given that $P$ is not on $l$, give the geometrical meaning of $|(\\mathbf{p} - \\mathbf{a}) \\times \\mathbf{e}|$.",
        type: "self",
        solution: "Since $\\mathbf{e}$ is a unit vector parallel to $l$ and $A$ lies on $l$, $|(\\mathbf{p} - \\mathbf{a}) \\times \\mathbf{e}|$ represents the <strong>perpendicular distance from the point $P$ to the line $l$</strong>.<br>(Alternatively, the area of the parallelogram with adjacent sides parallel and equal in magnitude to $AP$ and $\\mathbf{e}$.)"
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "It is also given that $\\mathbf{p} = 3\\mathbf{q}$ and $AQ$ is $2$ units.<br>Using the results in (i) and (ii), or otherwise, show that the area of triangle $APQ$ can be written as $k|\\mathbf{q} \\times \\mathbf{e}|$, where $k$ is a constant to be determined.",
        type: "self",
        solution: "Taking $AQ$ (on line $l$) as the base of △$APQ$ and $|(\\mathbf{p} - \\mathbf{a}) \\times \\mathbf{e}|$ as the perpendicular height from $P$ to $l$:<br>$$\\text{Area of } \\text{△}APQ = \\frac{1}{2} \\cdot AQ \\cdot |(\\mathbf{p} - \\mathbf{a}) \\times \\mathbf{e}|$$<br>Substituting $AQ = 2$ and $\\mathbf{p} = 3\\mathbf{q}$:<br>$$= \\frac{1}{2}(2)|(3\\mathbf{q} - \\mathbf{a}) \\times \\mathbf{e}| = |(2\\mathbf{q} + \\mathbf{q} - \\mathbf{a}) \\times \\mathbf{e}|$$<br>$$= |2(\\mathbf{q} \\times \\mathbf{e}) + (\\mathbf{q} - \\mathbf{a}) \\times \\mathbf{e}|$$<br>Using $(\\mathbf{q} - \\mathbf{a}) \\times \\mathbf{e} = \\mathbf{0}$ from part (i):<br>$$= |2(\\mathbf{q} \\times \\mathbf{e}) + \\mathbf{0}| = 2|\\mathbf{q} \\times \\mathbf{e}|$$<br>Hence, $k = 2$ (shown)."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Hence, or otherwise, find the acute angle between $l$ and $PQ$, given further that the area of triangle $APQ$ is $3\\text{ units}^2$ and $|\\mathbf{q}| = 2$.",
        type: "auto",
        mode: "number",
        answer: "48.590378",
        dp: 1,
        placeholder: "Angle in degrees (1 d.p.)",
        solution: "Since $\\mathbf{p} = 3\\mathbf{q}$, the vector $QP = \\mathbf{p} - \\mathbf{q} = 2\\mathbf{q}$ is parallel to $\\mathbf{q}$.<br>Thus, the acute angle $\\theta$ between $l$ (parallel to $\\mathbf{e}$) and $PQ$ is the acute angle between $\\mathbf{q}$ and $\\mathbf{e}$.<br><br>From part (iii):<br>$$2|\\mathbf{q} \\times \\mathbf{e}| = 3 \\implies 2|\\mathbf{q}||\\mathbf{e}|\\sin\\theta = 3$$<br>Since $|\\mathbf{q}| = 2$ and $|\\mathbf{e}| = 1$:<br>$$2(2)(1)\\sin\\theta = 3 \\implies \\sin\\theta = \\frac{3}{4}$$<br>$$\\theta = \\sin^{-1}\\left(\\frac{3}{4}\\right) = 48.590° \\approx 48.6° \\text{ (1 d.p.)}$$"
      }
    ]
  },

  // =========================================================================
  // Q3 (10 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q3",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "The curve $C$ has parametric equations<br>$$x = \\sin\\theta + 1 \\quad \\text{and} \\quad y = \\sqrt{3}\\cos\\theta - 1, \\quad \\text{where } -\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}.$$",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\sqrt{3}\\tan\\theta$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = \\cos\\theta, \\quad \\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = -\\sqrt{3}\\sin\\theta$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\mathrm{d}y/\\mathrm{d}\\theta}{\\mathrm{d}x/\\mathrm{d}\\theta} = \\frac{-\\sqrt{3}\\sin\\theta}{\\cos\\theta} = -\\sqrt{3}\\tan\\theta \\quad (\\text{shown})$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "The tangent to $C$ at point $T\\left(\\sin t + 1, \\sqrt{3}\\cos t - 1\\right)$ makes an angle of $\\frac{3\\pi}{4}$ with the positive $x$-axis. Find the equation of the normal to $C$ at $T$.",
        type: "self",
        solution: "At $T$, the gradient of the tangent is $\\tan\\left(\\frac{3\\pi}{4}\\right) = -1$:<br>$$-\\sqrt{3}\\tan t = -1 \\implies \\tan t = \\frac{1}{\\sqrt{3}} \\implies t = \\frac{\\pi}{6} \\quad \\left(\\text{since } -\\frac{\\pi}{2} \\le t \\le \\frac{\\pi}{2}\\right)$$<br>Coordinates of $T$:<br>$$x = \\sin\\frac{\\pi}{6} + 1 = \\frac{3}{2}, \\quad y = \\sqrt{3}\\cos\\frac{\\pi}{6} - 1 = \\frac{3}{2} - 1 = \\frac{1}{2}$$<br>Gradient of normal at $T$ $= -\\frac{1}{-1} = 1$.<br>Equation of normal at $T$:<br>$$y - \\frac{1}{2} = 1\\left(x - \\frac{3}{2}\\right) \\implies y = x - 1$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Find the exact $y$-coordinate of the point on $C$ where the tangent to $C$ is parallel to the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "sqrt(3) - 1",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "For the tangent to be parallel to the $x$-axis:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\sqrt{3}\\tan\\theta = 0 \\implies \\theta = 0$$<br>Hence, $y = \\sqrt{3}\\cos 0 - 1 = \\sqrt{3} - 1$."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Find the area of the quadrilateral bounded by the axes, the normal to $C$ at $T$ and the tangent in (iii).",
        type: "auto",
        mode: "number",
        answer: "1",
        exactRequired: true,
        placeholder: "Exact area",
        solutionSvg: `<svg viewBox="0 0 300 200" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes (origin at (70, 120), scale 65px/unit) -->
  <line x1="25" y1="120" x2="275" y2="120" stroke-width="1.2"/>
  <polyline points="269,116 275,120 269,124" fill="none" stroke-width="1.2"/>
  <line x1="70" y1="190" x2="70" y2="20" stroke-width="1.2"/>
  <polyline points="66,26 70,20 74,26" fill="none" stroke-width="1.2"/>
  <text x="279" y="124" stroke="none" font-style="italic">x</text>
  <text x="58" y="22" stroke="none" font-style="italic">y</text>
  <text x="56" y="133" stroke="none" font-style="italic">O</text>
  <!-- Shaded quadrilateral (trapezium): (0,0)->(1,0)->(sqrt(3), sqrt(3)-1)->(0, sqrt(3)-1) -->
  <!-- Pixels: (70,120) -> (135,120) -> (182.6, 72.4) -> (70, 72.4) -->
  <polygon points="70,120 135,120 182.6,72.4 70,72.4" fill="rgba(91,155,213,0.25)" stroke="none"/>
  <!-- Upper half ellipse C: (0,-1) to (2,-1) with vertex (1, sqrt(3)-1) -->
  <!-- (70, 185) through (135, 72.4) to (200, 185) -->
  <path d="M 70,185 A 65 112.6 0 0 1 200,185" fill="none" stroke="#cf5652" stroke-width="1.7"/>
  <!-- Tangent y = sqrt(3) - 1 -->
  <line x1="40" y1="72.4" x2="250" y2="72.4" stroke="#4ca885" stroke-width="1.5"/>
  <text x="198" y="65" stroke="none" fill="#4ca885" font-style="italic">y = √3 − 1</text>
  <!-- Normal y = x - 1: passes through (0,-1)=(70,185), (1,0)=(135,120), (1.5,0.5)=(167.5,87.5), Q=(182.6,72.4) -->
  <line x1="50" y1="205" x2="225" y2="30" stroke="#4a8fe7" stroke-width="1.6"/>
  <text x="206" y="34" stroke="none" fill="#4a8fe7" font-style="italic">y = x − 1</text>
  <!-- Points -->
  <circle cx="135" cy="120" r="2.5" fill="#2c2925" stroke="none"/>
  <text x="137" y="133" stroke="none">(1, 0)</text>
  <circle cx="167.5" cy="87.5" r="2.5" fill="#2c2925" stroke="none"/>
  <text x="172" y="96" stroke="none" font-style="italic">T</text>
  <circle cx="182.6" cy="72.4" r="2.5" fill="#2c2925" stroke="none"/>
  <text x="186" y="83" stroke="none" font-style="italic">Q</text>
  <text x="204" y="160" stroke="none" fill="#cf5652" font-style="italic">C</text>
</svg>`,
        solution: "The tangent in (iii) is the horizontal line $y = \\sqrt{3} - 1$.<br>The normal at $T$ is $y = x - 1$, which meets the $x$-axis at $(1, 0)$ and meets the tangent $y = \\sqrt{3} - 1$ at $Q$:<br>$$x - 1 = \\sqrt{3} - 1 \\implies x = \\sqrt{3}$$<br>The quadrilateral is a trapezium bounded by the $x$-axis ($y = 0$), the $y$-axis ($x = 0$), $y = \\sqrt{3} - 1$, and $y = x - 1$, with parallel horizontal sides of lengths $1$ and $\\sqrt{3}$ and height $\\sqrt{3} - 1$.<br><br>$$\\text{Area} = \\frac{1}{2}(1 + \\sqrt{3})(\\sqrt{3} - 1) = \\frac{1}{2}(3 - 1) = 1$$"
      }
    ]
  },

  // =========================================================================
  // Q4 (11 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q4",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong>",
    parts: [
      {
        label: "(a)",
        marks: 5,
        prompt: "One of the roots of the equation $5w^3 + pw^2 + 68w + q = 0$, where $p$ and $q$ are real, is $3 - \\mathrm{i}$. Find the other roots of the equation and the values of $p$ and $q$.",
        type: "self",
        solution: "Since the polynomial has real coefficients and $3 - \\mathrm{i}$ is a root, its complex conjugate $3 + \\mathrm{i}$ is also a root.<br><br>Quadratic factor:<br>$$[w - (3 - \\mathrm{i})][w - (3 + \\mathrm{i})] = (w - 3)^2 - \\mathrm{i}^2 = w^2 - 6w + 10$$<br>Write $5w^3 + pw^2 + 68w + q = (w^2 - 6w + 10)(5w + a) = 5w^3 + (a - 30)w^2 + (-6a + 50)w + 10a$.<br><br>Comparing coefficients:<br>• $w$: $-6a + 50 = 68 \\implies -6a = 18 \\implies a = -3$<br>• $w^2$: $p = a - 30 = -3 - 30 = -33$<br>• Constant: $q = 10a = 10(-3) = -30$<br><br>From $5w - 3 = 0$, the third root is $w = \\frac{3}{5}$.<br>Hence, $p = -33$, $q = -30$, and the other roots are $3 + \\mathrm{i}$ and $\\frac{3}{5}$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Two complex numbers are given by $z_1 = -1 + 2\\mathrm{i}$ and $z_2 = 2 + \\mathrm{i}$. Draw an Argand diagram showing $z_1$ and $z_2$, labelling the origin as $O$ and the points representing $z_1$ and $z_2$ as $Z_1$ and $Z_2$ respectively. Given that $z_3 = z_1 + z_2$, mark the corresponding point $Z_3$ on your Argand diagram, showing clearly the geometrical relationship between $Z_1$, $Z_2$ and $Z_3$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 230" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes (origin at (115, 190), scale 48px/unit) -->
  <line x1="25" y1="190" x2="255" y2="190" stroke-width="1.2"/>
  <polyline points="249,186 255,190 249,194" fill="none" stroke-width="1.2"/>
  <line x1="115" y1="215" x2="115" y2="18" stroke-width="1.2"/>
  <polyline points="111,24 115,18 119,24" fill="none" stroke-width="1.2"/>
  <text x="258" y="194" stroke="none">Re(z)</text>
  <text x="122" y="22" stroke="none">Im(z)</text>
  <text x="102" y="203" stroke="none" font-style="italic">O</text>
  <!-- Points: O(115,190), Z1(-1,2)=(67,94), Z2(2,1)=(211,142), Z3(1,3)=(163,46) -->
  <!-- Parallelogram OZ2Z3Z1 -->
  <polygon points="115,190 211,142 163,46 67,94" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.6"/>
  <!-- Diagonal OZ3 -->
  <line x1="115" y1="190" x2="163" y2="46" stroke="#cf5652" stroke-width="1.4" stroke-dasharray="4,3"/>
  <!-- Right angle marker at O -->
  <polyline points="124,185.5 119.5,176.5 110.5,181" fill="none" stroke-width="1.1"/>
  <!-- Points -->
  <circle cx="115" cy="190" r="2.8" fill="#2c2925" stroke="none"/>
  <circle cx="67" cy="94" r="3" fill="#4a8fe7" stroke="none"/>
  <circle cx="211" cy="142" r="3" fill="#4a8fe7" stroke="none"/>
  <circle cx="163" cy="46" r="3" fill="#cf5652" stroke="none"/>
  <!-- Labels -->
  <text x="15" y="92" stroke="none" font-style="italic">Z₁(−1, 2)</text>
  <text x="217" y="145" stroke="none" font-style="italic">Z₂(2, 1)</text>
  <text x="169" y="45" stroke="none" font-style="italic">Z₃(1, 3)</text>
</svg>`,
        solution: "$z_1 = -1 + 2\\mathrm{i}$ is at $Z_1(-1, 2)$, $z_2 = 2 + \\mathrm{i}$ is at $Z_2(2, 1)$, and $z_3 = z_1 + z_2 = 1 + 3\\mathrm{i}$ is at $Z_3(1, 3)$.<br>By the parallelogram law of vector addition, $OZ_2Z_3Z_1$ is a parallelogram (with $OZ_1 \\parallel Z_2Z_3$ and $OZ_2 \\parallel Z_1Z_3$, and $OZ_3$ as the diagonal)."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Find $\\frac{z_1}{z_2}$ in the form $k\\mathrm{i}$.",
        type: "auto",
        mode: "complex-list",
        answer: ["i"],
        placeholder: "Complex number in the form ki",
        solution: "$$\\frac{z_1}{z_2} = \\frac{-1 + 2\\mathrm{i}}{2 + \\mathrm{i}} \\times \\frac{2 - \\mathrm{i}}{2 - \\mathrm{i}} = \\frac{-2 + \\mathrm{i} + 4\\mathrm{i} - 2\\mathrm{i}^2}{4 + 1} = \\frac{5\\mathrm{i}}{5} = \\mathrm{i}$$"
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Hence, or otherwise, show that $OZ_2Z_3Z_1$ is a square.",
        type: "self",
        solution: "From (b)(i), $\\frac{z_1}{z_2} = \\mathrm{i} \\implies z_1 = \\mathrm{i}z_2$.<br><br>1. Multiplying by $\\mathrm{i}$ rotates $OZ_2$ by $\\frac{\\pi}{2}$ radians anti-clockwise about $O$ onto $OZ_1$, so ∠$Z_1OZ_2 = \\frac{\\pi}{2}$ (a right angle).<br>2. $|z_1| = |\\mathrm{i}||z_2| = |z_2|$ (both equal $\\sqrt{5}$), so adjacent sides are equal: $OZ_1 = OZ_2$.<br>3. Since $z_3 = z_1 + z_2$, $OZ_2Z_3Z_1$ is a parallelogram.<br><br>A parallelogram with equal adjacent sides and a right angle is a <strong>square</strong> (shown)."
      }
    ]
  },

  // =========================================================================
  // SECTION B: PROBABILITY AND STATISTICS (60 marks)
  // =========================================================================

  // =========================================================================
  // Q5 (6 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q5",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Permutations & Combinations"],
    stem: "In a strategy game called <em>Colour Clash</em>, players draw coloured orbs from a magical pouch to determine their elemental powers. The pouch contains:<br>• $5$ red orbs (Level 1 to 5),<br>• $4$ blue orbs (Level 1 to 4),<br>• $3$ green orbs (Level 1 to 3).<br>Orbs of the same colour are non-identical with each same-coloured orb representing a different level.<br>A player randomly draws four orbs without replacement at the start of the game. Given that the order in which the orb is drawn is not relevant, find the number of ways this can be done such that",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "there are no restrictions,",
        type: "auto",
        mode: "number",
        answer: "495",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "There are $5 + 4 + 3 = 12$ distinct orbs in total.<br>Number of ways $= {}^{12}\\text{C}_4 = 495$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "there are at least two colours present,",
        type: "auto",
        mode: "number",
        answer: "489",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Subtract the ways where all $4$ orbs are of the same colour (either all red or all blue; impossible for green since there are only $3$ green orbs):<br>$$\\text{Number of ways} = 495 - {}^5\\text{C}_4 - {}^4\\text{C}_4 = 495 - 5 - 1 = 489$$"
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "at least one orb of each colour is drawn.",
        type: "auto",
        mode: "number",
        answer: "270",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "There are $3$ possible colour distributions:<br>• Case 1 (2R, 1B, 1G): ${}^5\\text{C}_2 \\times {}^4\\text{C}_1 \\times {}^3\\text{C}_1 = 10 \\times 4 \\times 3 = 120$<br>• Case 2 (1R, 2B, 1G): ${}^5\\text{C}_1 \\times {}^4\\text{C}_2 \\times {}^3\\text{C}_1 = 5 \\times 6 \\times 3 = 90$<br>• Case 3 (1R, 1B, 2G): ${}^5\\text{C}_1 \\times {}^4\\text{C}_1 \\times {}^3\\text{C}_2 = 5 \\times 4 \\times 3 = 60$<br><br>Total number of ways $= 120 + 90 + 60 = 270$."
      }
    ]
  },

  // =========================================================================
  // Q6 (7 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q6",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "A particular streaming service platform claims that the average time a user spends watching content on the platform per visit is more than $15$ minutes. A team of data analysts for the platform wants to verify this claim. They randomly select a sample of $80$ users and record the amount of time each user spends watching content in a single visit. The sample mean of time spent is found to be $16$ minutes. The population standard deviation of time spent is assumed to be $\\sigma$ minutes.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Explain why the team should carry out a 1-tail test.",
        type: "self",
        solution: "The team should carry out a 1-tail test because they are testing a directional claim — specifically, whether the mean time users spend watching content per visit is <strong>more than</strong> $15$ minutes ($\\mathrm{H}_1 : \\mu > 15$)."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "A test at the $5\\%$ significance level indicates that the platform's claim is valid.<br>Explain why the team is able to carry out a hypothesis test without knowing anything about the distribution of the times spent by the users.",
        type: "self",
        solution: "Since the sample size $n = 80$ is large, by the <strong>Central Limit Theorem</strong>, the sample mean $\\bar{X}$ follows a normal distribution approximately, regardless of the underlying distribution of the times spent by the users."
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "Find the range of values of $\\sigma$.",
        type: "self",
        solution: "Let $X$ be the time spent per visit and $\\mu$ be the population mean time spent per visit.<br>$\\mathrm{H}_0 : \\mu = 15$ vs $\\mathrm{H}_1 : \\mu > 15$.<br><br>Under $\\mathrm{H}_0$, since $n = 80$ is large, by the Central Limit Theorem, $\\bar{X} \\sim \\mathrm{N}\\left(15, \\frac{\\sigma^2}{80}\\right)$ approximately.<br>Test statistic:<br>$$z = \\frac{16 - 15}{\\sigma / \\sqrt{80}} = \\frac{\\sqrt{80}}{\\sigma}$$<br>At the $5\\%$ significance level (upper-tail test), reject $\\mathrm{H}_0$ if $z > 1.64485$.<br>For the platform's claim to be valid, $\\mathrm{H}_0$ is rejected:<br>$$\\frac{\\sqrt{80}}{\\sigma} > 1.64485 \\implies \\sigma < \\frac{\\sqrt{80}}{1.64485} = 5.4377\\ldots$$<br>Since $\\sigma > 0$, the range of values of $\\sigma$ is $0 < \\sigma < 5.44$ (to 3 s.f.)."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "Explain, in the context of the question, the meaning of 'at the $5\\%$ significance level'.",
        type: "self",
        solution: "There is a probability of $0.05$ of wrongly concluding that the population mean time spent per visit is more than $15$ minutes when in fact the population mean time spent per visit is $15$ minutes."
      }
    ]
  },

  // =========================================================================
  // Q7 (7 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q7",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Discrete Random Variables", "Sampling & CLT"],
    stem: "In a game, a player selects one ball at random from a bag which contains four balls numbered '1', '1', '2' and '3'. The player notes the number on the selected ball, and then tosses that number of fair coins. The number of heads obtained is denoted by $X$ and has a probability distribution as follows:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$0$</td><td>$1$</td><td>$2$</td><td>$3$</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$a$</td><td>$\\frac{15}{32}$</td><td>$b$</td><td>$\\frac{1}{32}$</td></tr></table></div>",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Find the exact values of $a$ and $b$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "11/32", exactRequired: true, placeholder: "Exact fraction" },
          { label: "b =", answer: "5/32", exactRequired: true, placeholder: "Exact fraction" }
        ],
        solution: "$$a = \\mathrm{P}(X = 0) = \\frac{1}{2}\\left(\\frac{1}{2}\\right) + \\frac{1}{4}\\left(\\frac{1}{2}\\right)^2 + \\frac{1}{4}\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{4} + \\frac{1}{16} + \\frac{1}{32} = \\frac{11}{32}$$<br>$$b = \\mathrm{P}(X = 2) = 1 - \\frac{11}{32} - \\frac{15}{32} - \\frac{1}{32} = \\frac{5}{32}$$<br>(Or directly: $b = \\frac{1}{4}\\left(\\frac{1}{2}\\right)^2 + \\frac{1}{4} \\cdot {}^3\\text{C}_2\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{16} + \\frac{3}{32} = \\frac{5}{32}$.)"
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Find $\\mathrm{E}(X)$ and show that $\\mathrm{Var}(X) = \\frac{39}{64}$.",
        type: "self",
        solution: "$$\\mathrm{E}(X) = 0\\left(\\frac{11}{32}\\right) + 1\\left(\\frac{15}{32}\\right) + 2\\left(\\frac{5}{32}\\right) + 3\\left(\\frac{1}{32}\\right) = \\frac{28}{32} = \\frac{7}{8}$$<br>$$\\mathrm{E}(X^2) = 0^2\\left(\\frac{11}{32}\\right) + 1^2\\left(\\frac{15}{32}\\right) + 2^2\\left(\\frac{5}{32}\\right) + 3^2\\left(\\frac{1}{32}\\right) = \\frac{44}{32} = \\frac{11}{8}$$<br>$$\\mathrm{Var}(X) = \\mathrm{E}(X^2) - [\\mathrm{E}(X)]^2 = \\frac{11}{8} - \\left(\\frac{7}{8}\\right)^2 = \\frac{88 - 49}{64} = \\frac{39}{64} \\quad (\\text{shown})$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "The player plays $50$ games. Find the probability that the average number of heads obtained per game exceeds $1$.",
        type: "auto",
        mode: "number",
        answer: "0.12876",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $\\bar{X}$ be the mean number of heads obtained per game over $50$ games.<br>Since $n = 50$ is large, by the Central Limit Theorem:<br>$$\\bar{X} \\sim \\mathrm{N}\\left(\\frac{7}{8}, \\frac{39/64}{50}\\right) = \\mathrm{N}\\left(\\frac{7}{8}, \\frac{39}{3200}\\right) \\text{ approximately}$$<br>Using GC:<br>$$\\mathrm{P}(\\bar{X} > 1) = 0.12876\\ldots \\approx 0.129 \\text{ (3 s.f.)}$$"
      }
    ]
  },

  // =========================================================================
  // Q8 (8 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q8",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "A company makes portable speakers. Some speakers turn out to be faulty. Each carton has $24$ portable speakers.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "State, in context, two assumptions needed for the number of faulty portable speakers in a randomly chosen carton to be well modelled by a binomial distribution.",
        type: "self",
        solution: "1. Whether a portable speaker is faulty is <strong>independent</strong> of whether any other portable speaker in the carton is faulty.<br>2. The probability that any portable speaker is faulty is <strong>constant</strong> for all speakers."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "It is given that $2\\%$ of the portable speakers produced are faulty.<br>Find the probability that a randomly chosen carton contains at most one faulty portable speaker.",
        type: "auto",
        mode: "number",
        answer: "0.917387",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $X$ be the number of faulty portable speakers out of $24$.<br>$X \\sim \\mathrm{B}(24, 0.02)$.<br>$$\\mathrm{P}(X \\le 1) = 0.917387\\ldots \\approx 0.917 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "A carton with more than one faulty portable speaker is considered as 'substandard'. Find the probability that, out of $50$ cartons, there are no 'substandard' cartons.",
        type: "auto",
        mode: "number",
        answer: "0.013416",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $Y$ be the number of substandard cartons out of $50$.<br>$\\mathrm{P}(\\text{substandard}) = \\mathrm{P}(X > 1) = 1 - 0.917387 = 0.082613$, so $Y \\sim \\mathrm{B}(50, 0.082613)$.<br>$$\\mathrm{P}(Y = 0) = [\\mathrm{P}(X \\le 1)]^{50} = (0.917387)^{50} = 0.013416\\ldots \\approx 0.0134 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "The company also makes flash drives packed in batches of one hundred. The probability that a flash drive is faulty is $p$, where $0 < p < 1$. For quality control purposes, a random sample of $3$ flash drives is tested from each batch.<br>• If there are $2$ or $3$ faulty flash drives, the batch is rejected.<br>• If there is no faulty flash drive, the batch is accepted.<br>• If there is one faulty flash drive in the sample, another random sample of $3$ flash drives is tested and the batch is accepted if there are no faulty flash drives in the second sample. Otherwise the batch is rejected.<br>Find the range of $p$ such that we accept at least $95\\%$ of the batches based on this quality control method.",
        type: "self",
        solution: "Let $F \\sim \\mathrm{B}(3, p)$ be the number of faulty flash drives in a sample of $3$.<br>$$\\mathrm{P}(\\text{batch is accepted}) = \\mathrm{P}(F = 0) + \\mathrm{P}(F = 1) \\times \\mathrm{P}(F = 0)$$<br>$$= (1 - p)^3 + 3p(1 - p)^2(1 - p)^3 = (1 - p)^3\\left[1 + 3p(1 - p)^2\\right]$$<br>We require:<br>$$(1 - p)^3\\left[1 + 3p(1 - p)^2\\right] \\ge 0.95$$<br>From GC, the intersection with $y = 0.95$ for $0 < p < 1$ is at $p = 0.0703486$.<br>Hence, $0 < p \\le 0.0703$ (to 3 s.f.)."
      }
    ]
  },

  // =========================================================================
  // Q9 (9 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q9",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Probability"],
    stem: "The events $A$ and $B$ are such that $\\mathrm{P}(B) = \\frac{1}{3}$, $\\mathrm{P}(A \\mid B) = \\frac{2}{5}$ and $\\mathrm{P}(A \\cup B) = \\frac{3}{5}$.",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "Find $\\mathrm{P}(A)$ and hence, determine whether events $A$ and $B$ are independent.",
        type: "self",
        solution: "From $\\mathrm{P}(A \\mid B) = \\frac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)} = \\frac{2}{5}$:<br>$$\\mathrm{P}(A \\cap B) = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$$<br>Using $\\mathrm{P}(A \\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B) - \\mathrm{P}(A \\cap B)$:<br>$$\\frac{3}{5} = \\mathrm{P}(A) + \\frac{1}{3} - \\frac{2}{15} \\implies \\mathrm{P}(A) = \\frac{3}{5} - \\frac{1}{5} = \\frac{2}{5}$$<br>Since $\\mathrm{P}(A) = \\frac{2}{5} = \\mathrm{P}(A \\mid B)$ (or $\\mathrm{P}(A)\\mathrm{P}(B) = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15} = \\mathrm{P}(A \\cap B)$), events $A$ and $B$ are <strong>independent</strong>."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Find the exact value of $\\mathrm{P}(A' \\cap B)$.",
        type: "auto",
        mode: "number",
        answer: "1/5",
        exactRequired: true,
        placeholder: "Exact fraction",
        solution: "$$\\mathrm{P}(A' \\cap B) = \\mathrm{P}(B) - \\mathrm{P}(A \\cap B) = \\frac{1}{3} - \\frac{2}{15} = \\frac{1}{5}$$<br>(Or $\\mathrm{P}(A \\cup B) - \\mathrm{P}(A) = \\frac{3}{5} - \\frac{2}{5} = \\frac{1}{5}$.)"
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "For a third event $C$, it is given that $\\mathrm{P}(C) = \\frac{1}{2}$ and that $A$ and $C$ are mutually exclusive.<br>Find exactly the greatest and least possible values of $\\mathrm{P}(B' \\cap C)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Greatest =", answer: "2/5", exactRequired: true, placeholder: "Exact fraction" },
          { label: "Least =", answer: "3/10", exactRequired: true, placeholder: "Exact fraction" }
        ],
        solutionSvg: `<svg viewBox="0 0 300 175" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <rect x="10" y="10" width="280" height="155" fill="none" stroke-width="1.2"/>
  <!-- Circle A (disjoint from C) -->
  <circle cx="95" cy="85" r="52" fill="rgba(74,143,231,0.10)" stroke="#4a8fe7" stroke-width="1.5"/>
  <!-- Circle B -->
  <circle cx="172" cy="82" r="52" fill="rgba(76,168,133,0.10)" stroke="#4ca885" stroke-width="1.5"/>
  <!-- Circle C (disjoint from A, overlaps B) -->
  <circle cx="215" cy="116" r="38" fill="rgba(207,86,82,0.12)" stroke="#cf5652" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="52" y="42" stroke="none" fill="#4a8fe7" font-style="italic">A (2/5)</text>
  <text x="195" y="42" stroke="none" fill="#4ca885" font-style="italic">B (1/3)</text>
  <text x="236" y="156" stroke="none" fill="#cf5652" font-style="italic">C (1/2)</text>
  <text x="125" y="88" stroke="none" font-size="10">2/15</text>
  <text x="182" y="108" stroke="none" font-size="10">1/2 − x</text>
  <text x="218" y="135" stroke="none" font-size="10" font-style="italic">x</text>
</svg>`,
        solution: "Let $x = \\mathrm{P}(B' \\cap C)$. Since $A$ and $C$ are mutually exclusive:<br>• $\\mathrm{P}(B \\cap C) = \\mathrm{P}(C) - \\mathrm{P}(B' \\cap C) = \\frac{1}{2} - x$.<br>• Because $B \\cap C$ is contained in $A' \\cap B$, we need $\\mathrm{P}(B \\cap C) \\le \\mathrm{P}(A' \\cap B) = \\frac{1}{5}$:<br>$$\\frac{1}{2} - x \\le \\frac{1}{5} \\implies x \\ge \\frac{1}{2} - \\frac{1}{5} = \\frac{3}{10}$$<br>• Also, $\\mathrm{P}(A \\cup B \\cup C) = \\mathrm{P}(A \\cup B) + \\mathrm{P}(B' \\cap C) \\le 1$:<br>$$\\frac{3}{5} + x \\le 1 \\implies x \\le \\frac{2}{5}$$<br>Hence, the greatest possible value of $\\mathrm{P}(B' \\cap C)$ is $\\frac{2}{5}$ and the least possible value is $\\frac{3}{10}$."
      }
    ]
  },

  // =========================================================================
  // Q10 (12 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q10",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "<strong>In this question, you should state clearly all the distributions that you use, together with the values of the appropriate parameters.</strong><br>A company produces two types of yarn balls with two machines. Machine $A$ produces balls of 2-ply yarn. Over a period of time, it is found that $80\\%$ of the balls of yarn from Machine $A$ have lengths less than $340$ metres and $10\\%$ of the balls of yarn from Machine $A$ have lengths less than $280$ metres.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Assuming that the lengths, in metres, of yarn in balls of 2-ply yarn from Machine $A$ follow the distribution $\\mathrm{N}(\\mu, \\sigma^2)$, find $\\mu$ and show that $\\sigma = 28.3$.",
        type: "self",
        solution: "Let $A \\sim \\mathrm{N}(\\mu, \\sigma^2)$ be the length of a ball of 2-ply yarn from Machine $A$.<br>• $\\mathrm{P}(A < 340) = 0.8 \\implies \\frac{340 - \\mu}{\\sigma} = 0.841621 \\implies \\mu + 0.841621\\sigma = 340 \\quad \\text{--- (1)}$<br>• $\\mathrm{P}(A < 280) = 0.1 \\implies \\frac{280 - \\mu}{\\sigma} = -1.281552 \\implies \\mu - 1.281552\\sigma = 280 \\quad \\text{--- (2)}$<br><br>Solving (1) and (2) simultaneously:<br>$2.123173\\sigma = 60 \\implies \\sigma = 28.2596\\ldots \\approx 28.3$ (shown, to 3 s.f.)<br>$\\mu = 316.216\\ldots \\approx 316$ (to 3 s.f.)."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "For the rest of the question let $\\mu = 300$ and $\\sigma = 20$.<br>Machine $B$ produces balls of 3-ply yarn. The lengths, in metres, of yarn in balls of 3-ply yarn from Machine $B$ follow the distribution $\\mathrm{N}(220, 6^2)$.<br>Five balls of 3-ply yarn from Machine $B$ are randomly chosen. Find the probability that two of them have lengths more than $230\\text{ m}$ and three of them have lengths less than $215\\text{ m}$.",
        type: "auto",
        mode: "number",
        answer: "0.000189169",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $B \\sim \\mathrm{N}(220, 6^2)$ be the length of a ball of 3-ply yarn from Machine $B$.<br>$\\mathrm{P}(B > 230) = 0.047790$, $\\mathrm{P}(B < 215) = 0.202328$.<br><br>$$\\text{Required probability} = [\\mathrm{P}(B > 230)]^2 \\times [\\mathrm{P}(B < 215)]^3 \\times \\frac{5!}{3!2!} = 0.000189169\\ldots \\approx 0.000189 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "The probability that two randomly chosen balls of 2-ply yarn from Machine $A$ and three randomly chosen balls of 3-ply yarn from Machine $B$ have total length exceeding $k$ metres is $0.385$. Find the value of $k$, correct to $2$ decimal places.",
        type: "auto",
        mode: "number",
        answer: "1268.8101",
        dp: 2,
        placeholder: "Correct to 2 d.p.",
        solution: "Let $T = A_1 + A_2 + B_1 + B_2 + B_3$.<br>$\\mathrm{E}(T) = 2(300) + 3(220) = 1260$.<br>$\\mathrm{Var}(T) = 2(20^2) + 3(6^2) = 800 + 108 = 908$.<br>So $T \\sim \\mathrm{N}(1260, 908)$.<br><br>Given $\\mathrm{P}(T > k) = 0.385$, using GC (invNorm):<br>$$k = 1268.810\\ldots \\approx 1268.81 \\text{ (2 d.p.)}$$"
      },
      {
        label: "(iv)",
        marks: 4,
        prompt: "A technician changed the settings on the two machines. The lengths of yarn in balls of 2-ply yarn from Machine $A$ are reduced by $9\\%$ and the lengths of yarn in balls of 3-ply yarn from Machine $B$ are reduced by $5\\%$. Find the probability that the total length of yarn in three randomly chosen balls of 2-ply yarn from Machine $A$ is within $50$ metres of the total length of yarn in four randomly chosen balls of 3-ply yarn from Machine $B$.",
        type: "auto",
        mode: "number",
        answer: "0.814733",
        placeholder: "Correct to 3 s.f.",
        solution: "Let $X = 0.91(A_1 + A_2 + A_3)$ and $Y = 0.95(B_1 + B_2 + B_3 + B_4)$.<br>• $X \\sim \\mathrm{N}\\left(0.91 \\times 3 \\times 300, \\; 0.91^2 \\times 3 \\times 20^2\\right) = \\mathrm{N}(819, 993.72)$<br>• $Y \\sim \\mathrm{N}\\left(0.95 \\times 4 \\times 220, \\; 0.95^2 \\times 4 \\times 6^2\\right) = \\mathrm{N}(836, 129.96)$<br>• $X - Y \\sim \\mathrm{N}(819 - 836, \\; 993.72 + 129.96) = \\mathrm{N}(-17, 1123.68)$<br><br>Using GC:<br>$$\\mathrm{P}(|X - Y| < 50) = \\mathrm{P}(-50 < X - Y < 50) = 0.814733\\ldots \\approx 0.815 \\text{ (3 s.f.)}$$"
      }
    ]
  },

  // =========================================================================
  // Q11 (11 marks)
  // =========================================================================
  {
    id: "JPJC-2025-P2-Q11",
    year: 2025,
    school: "JPJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Draw a scatter diagram, with $7$ points, all in the first quadrant, which represents the situation where the product moment correlation coefficient between variables $x$ and $y$ is $0$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 175" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="150" x2="235" y2="150" stroke-width="1.2"/>
  <polyline points="229,146 235,150 229,154" fill="none" stroke-width="1.2"/>
  <line x1="45" y1="165" x2="45" y2="20" stroke-width="1.2"/>
  <polyline points="41,26 45,20 49,26" fill="none" stroke-width="1.2"/>
  <text x="239" y="154" stroke="none" font-style="italic">x</text>
  <text x="33" y="22" stroke="none" font-style="italic">y</text>
  <text x="33" y="162" stroke="none" font-style="italic">O</text>
  <!-- 7 symmetric points in 1st quadrant (r = 0) -->
  <circle cx="90" cy="65" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="140" cy="65" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="190" cy="65" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="140" cy="90" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="90" cy="115" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="140" cy="115" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="190" cy="115" r="3" fill="#4ca885" stroke="none"/>
</svg>`,
        solution: "Plot $7$ points in the first quadrant arranged symmetrically about a vertical line (e.g. a symmetric rectangular pattern with a centre point, or a symmetric inverted-U arch), giving $r = 0$."
      },
      {
        label: "(a)(ii)",
        marks: 1,
        prompt: "Draw a scatter diagram, with $7$ points, all in the first quadrant, which represents the situation where the product moment correlation coefficient between variables $x$ and $y$ is approximately $0.8$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 175" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes -->
  <line x1="25" y1="150" x2="235" y2="150" stroke-width="1.2"/>
  <polyline points="229,146 235,150 229,154" fill="none" stroke-width="1.2"/>
  <line x1="45" y1="165" x2="45" y2="20" stroke-width="1.2"/>
  <polyline points="41,26 45,20 49,26" fill="none" stroke-width="1.2"/>
  <text x="239" y="154" stroke="none" font-style="italic">x</text>
  <text x="33" y="22" stroke="none" font-style="italic">y</text>
  <text x="33" y="162" stroke="none" font-style="italic">O</text>
  <!-- 7 points with moderate-strong positive linear correlation (r ~ 0.8) -->
  <circle cx="68" cy="132" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="92" cy="108" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="116" cy="116" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="138" cy="84" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="162" cy="92" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="185" cy="54" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="206" cy="46" r="3" fill="#4ca885" stroke="none"/>
</svg>`,
        solution: "Plot $7$ points in the first quadrant showing an upward-sloping linear trend with moderate scatter around an upward line of best fit (so $r \\approx 0.8$)."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "Eight cities in a certain country are linked by rail to the capital city. The table below shows the distance of each city from the capital and the rail price from the city to the capital.<div class='q-table-wrap'><table class='q-table'><tr><th>City</th><td>$A$</td><td>$B$</td><td>$C$</td><td>$D$</td><td>$E$</td><td>$F$</td><td>$G$</td><td>$H$</td></tr><tr><th>Distance, $d$ km</th><td>$124$</td><td>$44$</td><td>$76$</td><td>$148$</td><td>$16$</td><td>$180$</td><td>$104$</td><td>$195$</td></tr><tr><th>Rail price, SGD $p$</th><td>$156$</td><td>$53$</td><td>$99$</td><td>$169$</td><td>$23$</td><td>$177$</td><td>$138$</td><td>$178$</td></tr></table></div>Draw a scatter diagram of the data.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 200" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <!-- Axes (origin at (48, 168), d-scale 1.1px/km, p-scale 0.72px/SGD) -->
  <line x1="30" y1="168" x2="282" y2="168" stroke-width="1.2"/>
  <polyline points="276,164 282,168 276,172" fill="none" stroke-width="1.2"/>
  <line x1="48" y1="184" x2="48" y2="20" stroke-width="1.2"/>
  <polyline points="44,26 48,20 52,26" fill="none" stroke-width="1.2"/>
  <text x="285" y="172" stroke="none" font-style="italic">d</text>
  <text x="36" y="22" stroke="none" font-style="italic">p</text>
  <text x="35" y="180" stroke="none" font-style="italic">O</text>
  <!-- Guide lines for min (16, 23) and max (195, 178) -->
  <!-- (16, 23) -> (65.6, 151.4), (195, 178) -> (262.5, 39.8) -->
  <line x1="65.6" y1="151.4" x2="65.6" y2="168" stroke-dasharray="3,3" opacity="0.55" stroke-width="1"/>
  <line x1="48" y1="151.4" x2="65.6" y2="151.4" stroke-dasharray="3,3" opacity="0.55" stroke-width="1"/>
  <line x1="262.5" y1="39.8" x2="262.5" y2="168" stroke-dasharray="3,3" opacity="0.55" stroke-width="1"/>
  <line x1="48" y1="39.8" x2="262.5" y2="39.8" stroke-dasharray="3,3" opacity="0.55" stroke-width="1"/>
  <!-- Data points: E(16,23), B(44,53), C(76,99), G(104,138), A(124,156), D(148,169), F(180,177), H(195,178) -->
  <circle cx="65.6" cy="151.4" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="96.4" cy="129.8" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="131.6" cy="96.7" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="162.4" cy="68.6" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="184.4" cy="55.7" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="210.8" cy="46.3" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="246.0" cy="40.6" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="262.5" cy="39.8" r="3" fill="#4ca885" stroke="none"/>
  <!-- Min/max labels -->
  <text x="58" y="181" stroke="none" font-size="10">16</text>
  <text x="252" y="181" stroke="none" font-size="10">195</text>
  <text x="29" y="155" stroke="none" font-size="10">23</text>
  <text x="23" y="43" stroke="none" font-size="10">178</text>
</svg>`,
        solution: "Plot all $8$ points $(d, p)$: $(16, 23)$, $(44, 53)$, $(76, 99)$, $(104, 138)$, $(124, 156)$, $(148, 169)$, $(180, 177)$, and $(195, 178)$, indicating the minimum and maximum values on both axes."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "For a line of best fit $p = \\mathrm{f}(d)$, the residual for a point $(a, b)$ plotted on the scatter diagram is the vertical distance between $(a, \\mathrm{f}(a))$ and $(a, b)$. Explain why, in general, the sum of the squares of the residuals rather than the sum of the residuals is used.",
        type: "self",
        solution: "The residuals may be positive or negative. Taking the sum of the squares of the residuals (which are all non-negative) avoids positive and negative residuals cancelling each other out."
      },
      {
        label: "(b)(iii)",
        marks: 1,
        prompt: "Using the scatter diagram in (i), explain if a linear relationship between the distance and the rail price is appropriate.",
        type: "self",
        solution: "A linear relationship is <strong>not appropriate</strong> because the scatter diagram shows a curved trend: as $d$ increases, $p$ increases at a decreasing rate."
      },
      {
        label: "(b)(iv)",
        marks: 2,
        prompt: "Suppose that the relationship between $d$ and $p$ is modelled by an equation of the form $p = s + t\\ln d$, where $s$ and $t$ are constants. Find the equation of this regression line and use it to estimate the rail price for a city which is $210\\text{ km}$ from the capital.",
        type: "self",
        solution: "Performing linear regression of $p$ on $\\ln d$ using GC:<br>$$p = -184.5953 + 68.9582\\ln d$$<br>$$p = -185 + 69.0\\ln d \\quad (\\text{to 3 s.f.})$$<br><br>When $d = 210$:<br>$$p = -184.5953 + 68.9582\\ln(210) = 184.132\\ldots \\approx \\text{SGD } 184.13 \\text{ (to 2 d.p.)}$$"
      },
      {
        label: "(b)(v)",
        marks: 1,
        prompt: "Comment on the reliability of the estimate in (iv).",
        type: "self",
        solution: "Since the given distances range from $16\\text{ km}$ to $195\\text{ km}$, $d = 210$ lies outside the data range. The estimate is an <strong>extrapolation</strong> and may not be reliable because the linear relationship between $\\ln d$ and $p$ may not hold beyond the observed range."
      },
      {
        label: "(b)(vi)",
        marks: 2,
        prompt: "Following an adjustment to the rail prices, all rail prices are increased by $10$ dollars. Without any further calculations, state any change you would expect in the values of the constants $s$ and $t$ found in (iv).",
        type: "self",
        solution: "The value of $s$ will <strong>increase by $10$</strong>, while the value of $t$ will <strong>remain unchanged</strong>."
      }
    ]
  }
]);
