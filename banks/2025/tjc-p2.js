window.registerQuestions([
  {
    id: "TJC-2025-P2-Q1",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Maclaurin Series", "Differentiation"],
    stem: "It is given that $y = \\ln\\sqrt{1 + \\mathrm{e}^{3x}}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $2\\mathrm{e}^{2y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3\\mathrm{e}^{3x}$.",
        type: "self",
        solution: "Rewrite $y = \\frac{1}{2}\\ln(1 + \\mathrm{e}^{3x})$, so $2y = \\ln(1 + \\mathrm{e}^{3x})$, which gives:<br>$$\\mathrm{e}^{2y} = 1 + \\mathrm{e}^{3x}$$<br>Differentiating implicitly with respect to $x$:<br>$$2\\mathrm{e}^{2y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3\\mathrm{e}^{3x} \\quad \\text{(Shown)}$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "By further differentiation of the result in part (a), find the Maclaurin series for $y$, up to and including the term in $x^2$, giving the coefficients in exact form.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.5, 1, 2] },
        answer: "ln(2)/2 + 3*x/4 + 9*x^2/16",
        placeholder: "Expression in terms of x",
        solution: "Differentiating $2\\mathrm{e}^{2y}\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3\\mathrm{e}^{3x}$ with respect to $x$:<br>$$2\\mathrm{e}^{2y}\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 4\\mathrm{e}^{2y}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 9\\mathrm{e}^{3x}$$<br>When $x = 0$:<br><ul><li>$y = \\frac{1}{2}\\ln(1 + 1) = \\frac{1}{2}\\ln 2$, and $\\mathrm{e}^{2y} = 2$.</li><li>From (a): $2(2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3}{4}$.</li><li>From the second derivative: $2(2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 4(2)\\left(\\frac{3}{4}\\right)^2 = 9 \\implies 4\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\frac{9}{2} = 9 \\implies \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\frac{9}{8}$.</li></ul><br>Hence, the Maclaurin series for $y$ up to the $x^2$ term is:<br>$$y = \\frac{1}{2}\\ln 2 + \\frac{3}{4}x + \\frac{9/8}{2!}x^2 + \\dots = \\frac{1}{2}\\ln 2 + \\frac{3}{4}x + \\frac{9}{16}x^2 + \\dots$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Deduce the Maclaurin series for $\\ln\\left(\\frac{\\sqrt{1 + \\mathrm{e}^{-3x}}}{2}\\right)$, up to and including the term in $x^2$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.5, 1, 2] },
        answer: "-ln(2)/2 - 3*x/4 + 9*x^2/16",
        placeholder: "Expression in terms of x",
        solution: "$$\\ln\\left(\\frac{\\sqrt{1 + \\mathrm{e}^{-3x}}}{2}\\right) = \\ln\\sqrt{1 + \\mathrm{e}^{3(-x)}} - \\ln 2$$<br>Replacing $x$ by $-x$ in the result from part (b) and subtracting $\\ln 2$:<br>$$= \\left(\\frac{1}{2}\\ln 2 + \\frac{3}{4}(-x) + \\frac{9}{16}(-x)^2 + \\dots\\right) - \\ln 2$$<br>$$= -\\frac{1}{2}\\ln 2 - \\frac{3}{4}x + \\frac{9}{16}x^2 + \\dots$$"
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q2",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Sequences and Series", "Method of Differences", "Recurrence Relations"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Using the result $\\sum_{r=2}^{n} \\frac{2}{(2r + 1)(2r + 3)} = \\frac{1}{5} - \\frac{1}{2n + 3}$, find $$\\sum_{r=2}^{2n} \\frac{2}{(2r - 1)(2r + 1)}$$ in terms of $n$.",
        type: "auto",
        mode: "expr",
        vars: { n: [1, 2, 5] },
        answer: "1/3 - 1/(4*n+1)",
        placeholder: "Expression in terms of n",
        solution: "Replace $r$ by $r + 1$ in the summation:<br>$$\\sum_{r=2}^{2n} \\frac{2}{(2r - 1)(2r + 1)} = \\sum_{r+1=2}^{r+1=2n} \\frac{2}{(2(r+1) - 1)(2(r+1) + 1)} = \\sum_{r=1}^{2n-1} \\frac{2}{(2r + 1)(2r + 3)}$$<br>Split off the $r = 1$ term:<br>$$= \\frac{2}{(2(1) + 1)(2(1) + 3)} + \\sum_{r=2}^{2n-1} \\frac{2}{(2r + 1)(2r + 3)}$$<br>Using the given result with $n$ replaced by $2n - 1$:<br>$$= \\frac{2}{15} + \\frac{1}{5} - \\frac{1}{2(2n - 1) + 3} = \\frac{1}{3} - \\frac{1}{4n + 1}$$"
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "A sequence of positive numbers $x_1, x_2, x_3, \\dots$ satisfies the recurrence relation $$x_{n+1} = \\sqrt{4 + 5x_n} \\quad \\text{for } n = 1, 2, 3, \\dots$$ Given that the sequence converges to $L$, find the exact value of $L$.",
        type: "auto",
        mode: "number",
        answer: "(5+sqrt(41))/2",
        exactRequired: true,
        placeholder: "Exact value of L",
        solution: "Since the sequence converges to $L$, as $n$ → ∞, $x_n$ → $L$ and $x_{n+1}$ → $L$.<br>$$L = \\sqrt{4 + 5L} \\implies L^2 = 4 + 5L \\implies L^2 - 5L - 4 = 0$$<br>$$L = \\frac{5 \\pm \\sqrt{25 + 16}}{2} = \\frac{5 \\pm \\sqrt{41}}{2}$$<br>Since $x_n > 0$ for all $n$, $L \\ge 0$, so $L = \\frac{5 + \\sqrt{41}}{2}$."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "Prove that $x_{n+1}^2 - L^2 = 5(x_n - L)$.",
        type: "self",
        solution: "From the recurrence relation, $x_{n+1}^2 = 4 + 5x_n$, and from part (b)(i), $L^2 = 4 + 5L$.<br>Subtracting the two equations:<br>$$x_{n+1}^2 - L^2 = (4 + 5x_n) - (4 + 5L) = 5(x_n - L) \\quad \\text{(Shown)}$$"
      },
      {
        label: "(b)(iii)",
        marks: 2,
        prompt: "Use the result in part (ii) to show that if $x_n > L$, then $x_{n+1} > L$.",
        type: "self",
        solution: "If $x_n > L$, then $x_n - L > 0$. By part (b)(ii):<br>$$x_{n+1}^2 - L^2 = 5(x_n - L) > 0$$<br>$$(x_{n+1} - L)(x_{n+1} + L) > 0$$<br>Since $x_{n+1} > 0$ and $L > 0$, we have $x_{n+1} + L > 0$.<br>Dividing both sides by $x_{n+1} + L$:<br>$$x_{n+1} - L > 0 \\implies x_{n+1} > L \\quad \\text{(Shown)}$$"
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q3",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Functions", "Inverse Functions", "Composite Functions"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto \\frac{1}{2} + \\mathrm{e}^{-x}$, $x \\in \\mathbb{R}$, $x \\ge 0$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Sketch the graph of $y = \\mathrm{f}(x)$, $y = \\mathrm{f}^{-1}(x)$ and $y = \\mathrm{f}^{-1}\\mathrm{f}(x)$ on the same diagram, showing clearly their relationship.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 260" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="215" x2="280" y2="215" stroke-width="1.3"/>
  <polyline points="274,211 280,215 274,219" fill="none" stroke-width="1.3"/>
  <text x="283" y="219" stroke="none" font-style="italic">x</text>
  <line x1="55" y1="245" x2="55" y2="18" stroke-width="1.3"/>
  <polyline points="51,24 55,18 59,24" fill="none" stroke-width="1.3"/>
  <text x="60" y="22" stroke="none" font-style="italic">y</text>
  <text x="43" y="228" stroke="none" font-style="italic">O</text>
  <line x1="55" y1="175" x2="270" y2="175" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/>
  <text x="238" y="169" stroke="none">y = 1/2</text>
  <line x1="95" y1="25" x2="95" y2="240" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/>
  <text x="78" y="253" stroke="none">x = 1/2</text>
  <line x1="55" y1="215" x2="245" y2="25" stroke="#2c2925" stroke-width="1.4"/>
  <text x="195" y="42" stroke="none" font-style="italic">y = f⁻¹f(x) = x</text>
  <path d="M 55 95 C 80 142 125 166 255 173" fill="none" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="55" cy="95" r="3" fill="#4a8fe7" stroke="none"/>
  <text x="28" y="99" stroke="none">3/2</text>
  <text x="210" y="156" stroke="none" fill="#4a8fe7" font-style="italic">y = f(x)</text>
  <path d="M 175 215 C 128 190 104 145 97 25" fill="none" stroke="#cf5652" stroke-width="2"/>
  <circle cx="175" cy="215" r="3" fill="#cf5652" stroke="none"/>
  <text x="167" y="230" stroke="none">3/2</text>
  <text x="102" y="42" stroke="none" fill="#cf5652" font-style="italic">y = f⁻¹(x)</text>
</svg>`,
        solution: "<ul><li>$y = \\mathrm{f}(x)$ starts at $\\left(0, \\frac{3}{2}\\right)$ and decreases towards the horizontal asymptote $y = \\frac{1}{2}$ as $x$ → ∞.</li><li>$y = \\mathrm{f}^{-1}(x)$ is the reflection of $y = \\mathrm{f}(x)$ in the line $y = x$, starting at $\\left(\\frac{3}{2}, 0\\right)$ and increasing towards the vertical asymptote $x = \\frac{1}{2}$.</li><li>$y = \\mathrm{f}^{-1}\\mathrm{f}(x) = x$ for $x \\ge 0$, which is the line of symmetry (reflection) between $y = \\mathrm{f}(x)$ and $y = \\mathrm{f}^{-1}(x)$, passing through their point of intersection.</li></ul>"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "The function $\\mathrm{g}$ is defined by $\\mathrm{g}: x \\mapsto 1 + 4x - x^2$, $x \\le 2$.<br>Explain why $\\mathrm{g}^{-1}$ exists.",
        type: "self",
        solution: "Completing the square, $\\mathrm{g}(x) = 5 - (x - 2)^2$ for $x \\le 2$, which is the left branch of a downward-opening parabola with maximum at $(2, 5)$. Every horizontal line $y = k$ ($k \\in \\mathbb{R}$) cuts the graph of $y = \\mathrm{g}(x)$ at most once. Hence $\\mathrm{g}$ is one-to-one, so $\\mathrm{g}^{-1}$ exists."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find $\\mathrm{g}^{-1}(x)$ and state its domain.",
        type: "self",
        solution: "Let $y = \\mathrm{g}(x) = 5 - (x - 2)^2$.<br>$$(x - 2)^2 = 5 - y \\implies x = 2 \\pm \\sqrt{5 - y}$$<br>Since the domain of $\\mathrm{g}$ is $x \\le 2$, we take the negative square root:<br>$$\\mathrm{g}^{-1}(x) = 2 - \\sqrt{5 - x}$$<br>The domain of $\\mathrm{g}^{-1}$ equals the range of $\\mathrm{g}$:<br>$D_{\\mathrm{g}^{-1}} = R_{\\mathrm{g}} = (-$∞$, 5]$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Explain why the composite function $\\mathrm{gf}$ exists.",
        type: "self",
        solution: "From part (a), the range of $\\mathrm{f}$ is $R_{\\mathrm{f}} = \\left(\\frac{1}{2}, \\frac{3}{2}\\right]$.<br>The domain of $\\mathrm{g}$ is $D_{\\mathrm{g}} = (-$∞$, 2]$.<br>Since $R_{\\mathrm{f}} = \\left(\\frac{1}{2}, \\frac{3}{2}\\right] \\subseteq (-$∞$, 2] = D_{\\mathrm{g}}$, the composite function $\\mathrm{gf}$ exists."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Find the exact range of $\\mathrm{gf}$.",
        type: "self",
        solution: "On the interval $\\left(\\frac{1}{2}, \\frac{3}{2}\\right]$, $\\mathrm{g}(x) = 5 - (x - 2)^2$ is strictly increasing.<br><ul><li>At $x = \\frac{1}{2}$ (open): $\\mathrm{g}\\left(\\frac{1}{2}\\right) = 5 - \\left(\\frac{1}{2} - 2\\right)^2 = 5 - \\frac{9}{4} = \\frac{11}{4}$.</li><li>At $x = \\frac{3}{2}$ (closed): $\\mathrm{g}\\left(\\frac{3}{2}\\right) = 5 - \\left(\\frac{3}{2} - 2\\right)^2 = 5 - \\frac{1}{4} = \\frac{19}{4}$.</li></ul><br>Hence, the exact range of $\\mathrm{gf}$ is $\\left(\\frac{11}{4}, \\frac{19}{4}\\right]$."
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q4",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Differentiation", "Maxima and Minima", "Rates of Change"],
    diagramSvg: `<svg viewBox="0 0 380 165" width="380" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <path d="M 55 125 A 55 55 0 1 1 135 125 L 95 85 Z" fill="none" stroke-width="1.4"/>
  <path d="M 85 95 A 14 14 0 1 1 105 95" fill="none" stroke="#4a8fe7" stroke-width="1.2"/>
  <text x="92" y="65" stroke="none" fill="#4a8fe7" font-style="italic">θ</text>
  <text x="91" y="99" stroke="none" font-style="italic">O</text>
  <text x="45" y="138" stroke="none" font-style="italic">A</text>
  <text x="137" y="138" stroke="none" font-style="italic">B</text>
  <text x="64" y="103" stroke="none" font-style="italic">a</text>
  <text x="118" y="103" stroke="none" font-style="italic">a</text>
  <text x="74" y="156" stroke="none">Figure 1</text>

  <ellipse cx="285" cy="122" rx="52" ry="12" fill="none" stroke-width="1.3"/>
  <line x1="233" y1="122" x2="285" y2="48" stroke-width="1.4"/>
  <line x1="337" y1="122" x2="285" y2="48" stroke-width="1.4"/>
  <line x1="285" y1="48" x2="285" y2="122" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/>
  <line x1="285" y1="122" x2="337" y2="122" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/>
  <polyline points="285,114 293,114 293,122" fill="none" stroke-width="1"/>
  <text x="316" y="84" stroke="none" font-style="italic">a</text>
  <text x="307" y="132" stroke="none" font-style="italic">r</text>
  <text x="264" y="156" stroke="none">Figure 2</text>
</svg>`,
    stem: "[The arc length $L$ of a sector of radius $a$ and angle $\\theta$ is given by $L = a\\theta$;<br>The volume $V$ of a cone of base radius $r$ and height $h$ is given by $V = \\frac{1}{3}\\pi r^2 h$.]<br><br>A metal sheet is shaped as a circular sector with angle $\\theta$ and fixed radius $a$, as shown in Figure 1. This sector is then formed into a right circular cone with slant height $a$ by joining the two radii $OA$ and $OB$ together as shown in Figure 2.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "If $\\theta$ is measured in radians, state the base radius of the cone, $r$, in terms of $a$ and $\\theta$.",
        type: "self",
        solution: "The circumference of the circular base equals the arc length $AB$:<br>$$2\\pi r = a\\theta \\implies r = \\frac{a\\theta}{2\\pi}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Show that the volume of the cone, $V$, is given by $$V^2 = \\frac{a^6}{576\\pi^4}\\theta^4(4\\pi^2 - \\theta^2).$$",
        type: "self",
        solution: "Let $h$ be the height of the cone. By Pythagoras' theorem:<br>$$h^2 = a^2 - r^2 = a^2 - \\frac{a^2\\theta^2}{4\\pi^2} = \\frac{a^2}{4\\pi^2}(4\\pi^2 - \\theta^2)$$<br>Since $V = \\frac{1}{3}\\pi r^2 h$:<br>$$V^2 = \\frac{1}{9}\\pi^2 r^4 h^2 = \\frac{1}{9}\\pi^2\\left(\\frac{a^4\\theta^4}{16\\pi^4}\\right)\\cdot\\frac{a^2}{4\\pi^2}(4\\pi^2 - \\theta^2)$$<br>$$V^2 = \\frac{a^6}{576\\pi^4}\\theta^4(4\\pi^2 - \\theta^2) \\quad \\text{(Shown)}$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Using differentiation, find the exact value of $\\theta$ that will maximise $V$.",
        type: "auto",
        mode: "number",
        answer: "2*pi*sqrt(2/3)",
        exactRequired: true,
        placeholder: "Exact value of θ",
        solution: "Since $V > 0$, maximising $V$ is equivalent to maximising $V^2$:<br>$$V^2 = \\frac{a^6}{576\\pi^4}(4\\pi^2\\theta^4 - \\theta^6)$$<br>$$\\frac{\\mathrm{d}(V^2)}{\\mathrm{d}\\theta} = \\frac{a^6}{576\\pi^4}(16\\pi^2\\theta^3 - 6\\theta^5) = \\frac{a^6}{288\\pi^4}\\theta^3(8\\pi^2 - 3\\theta^2)$$<br>Setting $\\frac{\\mathrm{d}(V^2)}{\\mathrm{d}\\theta} = 0$ (with $\\theta > 0$):<br>$$8\\pi^2 - 3\\theta^2 = 0 \\implies \\theta^2 = \\frac{8\\pi^2}{3} \\implies \\theta = 2\\pi\\sqrt{\\frac{2}{3}}$$<br>Checking the second derivative:<br>$$\\frac{\\mathrm{d}^2(V^2)}{\\mathrm{d}\\theta^2} = \\frac{a^6}{576\\pi^4}(48\\pi^2\\theta^2 - 30\\theta^4)$$<br>When $\\theta^2 = \\frac{8\\pi^2}{3}$:<br>$$\\frac{\\mathrm{d}^2(V^2)}{\\mathrm{d}\\theta^2} = \\frac{a^6}{576\\pi^4}\\left(48\\pi^2\\left(\\frac{8\\pi^2}{3}\\right) - 30\\left(\\frac{64\\pi^4}{9}\\right)\\right) = -\\frac{4a^6}{27} < 0$$<br>Hence $V$ is maximised when $\\theta = 2\\pi\\sqrt{\\frac{2}{3}}$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Two identical cones, as described in part (c), are joined together tip-to-tip to form a new object, as shown in Figure 3. The upper cone is initially filled with water, which leaks out into the lower cone at a rate of $\\frac{\\pi}{15}\\text{ cm}^3\\text{ s}^{-1}$. At time $t$ seconds, the height of the water in the upper cone is $y$.<br>Show that the volume of water in the upper cone, $W\\text{ cm}^3$, is given by $W = \\frac{2\\pi y^3}{3}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 180 185" width="180" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <ellipse cx="90" cy="28" rx="46" ry="10" fill="none" stroke-width="1.3"/>
  <ellipse cx="90" cy="148" rx="46" ry="10" fill="none" stroke-width="1.3"/>
  <line x1="44" y1="28" x2="136" y2="148" stroke-width="1.4"/>
  <line x1="136" y1="28" x2="44" y2="148" stroke-width="1.4"/>
  <line x1="90" y1="28" x2="90" y2="148" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/>
  <line x1="44" y1="28" x2="90" y2="28" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/>
  <line x1="90" y1="148" x2="136" y2="148" stroke-dasharray="4,3" stroke-width="1" opacity="0.6"/>
  <polyline points="83,28 83,35 90,35" fill="none" stroke-width="1"/>
  <polyline points="90,141 97,141 97,148" fill="none" stroke-width="1"/>
  <text x="65" y="25" stroke="none" font-style="italic">r</text>
  <text x="108" y="156" stroke="none" font-style="italic">r</text>
  <text x="54" y="64" stroke="none" font-style="italic">a</text>
  <text x="119" y="114" stroke="none" font-style="italic">a</text>
  <text x="69" y="175" stroke="none">Figure 3</text>
</svg>`,
        solution: "When $\\theta = 2\\pi\\sqrt{\\frac{2}{3}}$:<br>$$r = \\frac{a}{2\\pi}\\left(2\\pi\\sqrt{\\frac{2}{3}}\\right) = a\\sqrt{\\frac{2}{3}}$$<br>$$h = \\sqrt{a^2 - r^2} = \\sqrt{a^2 - \\frac{2}{3}a^2} = \\frac{a}{\\sqrt{3}}$$<br>By similar triangles, for water of radius $r_w$ and height $y$:<br>$$\\frac{r_w}{y} = \\frac{r}{h} = \\frac{a\\sqrt{2/3}}{a/\\sqrt{3}} = \\sqrt{2} \\implies r_w = \\sqrt{2}y$$<br>Therefore:<br>$$W = \\frac{1}{3}\\pi r_w^2 y = \\frac{1}{3}\\pi(\\sqrt{2}y)^2 y = \\frac{2\\pi y^3}{3} \\quad \\text{(Shown)}$$"
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Calculate the rate of change of $y$ when $y = 2$.",
        type: "auto",
        mode: "number",
        answer: "-1/120",
        signHint: true,
        placeholder: "Exact or 3 s.f. (include sign)",
        solution: "Given $\\frac{\\mathrm{d}W}{\\mathrm{d}t} = -\\frac{\\pi}{15}$ and $\\frac{\\mathrm{d}W}{\\mathrm{d}y} = 2\\pi y^2$:<br>$$\\frac{\\mathrm{d}W}{\\mathrm{d}t} = \\frac{\\mathrm{d}W}{\\mathrm{d}y}\\cdot\\frac{\\mathrm{d}y}{\\mathrm{d}t} \\implies -\\frac{\\pi}{15} = 2\\pi y^2\\frac{\\mathrm{d}y}{\\mathrm{d}t}$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}t} = -\\frac{1}{30y^2}$$<br>When $y = 2$:<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}t} = -\\frac{1}{30(2)^2} = -\\frac{1}{120}\\text{ cm s}^{-1}$$"
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q5",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Probability", "Conditional Probability"],
    stem: "In a simple archery game, a player shoots an arrow at a target. The probability of hitting the target depends on the player's skill and the wind conditions for the day. The wind can either be good or bad, with the probability of a good wind day being $0.7$.<br><br>According to past statistics:<ul><li>Dave has a $70\\%$ chance of hitting the target on a good wind day and a $60\\%$ chance on a bad wind day.</li><li>Rafael has an $80\\%$ chance of hitting the target on a good wind day and a $50\\%$ chance on a bad wind day.</li></ul>Dave and Rafael decide to compete in a game where each player shoots $2$ arrows at the target. The player who hits the target more times wins the game.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the probability that Dave wins the game on a good wind day.",
        type: "auto",
        mode: "number",
        answer: "0.1932",
        placeholder: "Exact or 3 s.f.",
        solution: "On a good wind day, Dave wins if (Dave hits $2$ and Rafael hits $0$ or $1$) or (Dave hits $1$ and Rafael hits $0$):<br>$$\\mathrm{P}(\\text{Dave wins} \\mid \\text{Good}) = (0.7)^2\\left[2(0.8)(0.2) + (0.2)^2\\right] + 2(0.7)(0.3)(0.2)^2$$<br>$$= 0.49(0.32 + 0.04) + 0.42(0.04) = 0.1764 + 0.0168 = 0.1932$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "It is now known that the probability Dave wins the game on a bad wind day is $0.39$.<br>Given that Dave wins the game, find the probability that the day was a bad wind day.",
        type: "auto",
        mode: "number",
        answer: "0.4638439581",
        placeholder: "Exact or 3 s.f.",
        solution: "$$\\mathrm{P}(\\text{Bad} \\mid \\text{Dave wins}) = \\frac{\\mathrm{P}(\\text{Bad} \\cap \\text{Dave wins})}{\\mathrm{P}(\\text{Dave wins})}$$<br>$$= \\frac{(0.3)(0.39)}{(0.7)(0.1932) + (0.3)(0.39)} = \\frac{0.117}{0.13524 + 0.117} = \\frac{0.117}{0.25224} \\approx 0.464 \\text{ (3 s.f.)}$$"
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q6",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations and Combinations"],
    stem: "A treasure hunt game is to be played in a 3-storey building. There are $12$ specific locations where $5$ treasures are to be hidden. Among the $5$ treasures, $4$ of them are identical. The locations are distributed across the storeys as follows:<ul><li>$3$ locations on the 1st storey,</li><li>$3$ locations on the 2nd storey, and</li><li>$6$ locations on the 3rd storey.</li></ul>Each location can hold at most one treasure.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Find the number of ways to distribute the $5$ treasures among the $12$ locations if the $5$ treasures can be hidden in any of the $12$ locations.",
        type: "auto",
        mode: "number",
        answer: "3960",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Choose $5$ out of $12$ locations, then choose $1$ of those $5$ locations for the distinct treasure (the remaining $4$ receive identical treasures):<br>$$^{12}\\mathrm{C}_5 \\times {^5\\mathrm{C}_1} = 792 \\times 5 = 3960$$"
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find the number of ways to distribute the $5$ treasures among the $12$ locations if exactly $2$ treasures must be hidden on the 3rd storey.",
        type: "auto",
        mode: "number",
        answer: "1500",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Choose $2$ locations on the 3rd storey (out of $6$), $3$ locations on the 1st and 2nd storeys (out of $6$), and $1$ of the $5$ chosen locations for the distinct treasure:<br>$$^6\\mathrm{C}_2 \\times {^6\\mathrm{C}_3} \\times {^5\\mathrm{C}_1} = 15 \\times 20 \\times 5 = 1500$$"
      },
      {
        label: "(a)(iii)",
        marks: 3,
        prompt: "Find the number of ways to distribute the $5$ treasures among the $12$ locations if there must be at least one treasure on each of the 1st and 2nd storeys, and at least $2$ treasures on the 3rd storey.",
        type: "auto",
        mode: "number",
        answer: "2250",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "There are $3$ possible distributions across (1st, 2nd, 3rd) storeys:<br><ul><li><strong>Case 1 (2, 1, 2):</strong> $^3\\mathrm{C}_2 \\times {^3\\mathrm{C}_1} \\times {^6\\mathrm{C}_2} \\times {^5\\mathrm{C}_1} = 3 \\times 3 \\times 15 \\times 5 = 675$</li><li><strong>Case 2 (1, 2, 2):</strong> $^3\\mathrm{C}_1 \\times {^3\\mathrm{C}_2} \\times {^6\\mathrm{C}_2} \\times {^5\\mathrm{C}_1} = 3 \\times 3 \\times 15 \\times 5 = 675$</li><li><strong>Case 3 (1, 1, 3):</strong> $^3\\mathrm{C}_1 \\times {^3\\mathrm{C}_1} \\times {^6\\mathrm{C}_3} \\times {^5\\mathrm{C}_1} = 3 \\times 3 \\times 20 \\times 5 = 900$</li></ul><br>Total number of ways $= 675 + 675 + 900 = 2250$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Five teams of $2$ players each take part in the game. The $10$ players and $2$ game masters are to be seated around a round table for a briefing.<br>Find the number of different seating arrangements such that players from the same team must be seated next to each other but the two game masters must not be seated next to each other.",
        type: "auto",
        mode: "number",
        answer: "15360",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Group each of the $5$ teams as a single unit. Arrange the $5$ team units around the round table and permute the $2$ players within each team:<br>$$(5 - 1)! \\times (2!)^5 = 24 \\times 32 = 768$$<br>There are $5$ gaps between the $5$ teams to slot in the $2$ game masters so they are not adjacent:<br>$$^5\\mathrm{C}_2 \\times 2! = 20$$<br>Total seating arrangements $= 768 \\times 20 = 15360$."
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q7",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Binomial Distribution", "Central Limit Theorem", "Sampling Distributions"],
    stem: "A factory produces porcelain bowls. It is known that, on average, $8\\%$ of the bowls are faulty. The bowls are packed in boxes of $20$. A box is considered imperfect if it contains more than $2$ faulty bowls. Assume that the number of faulty bowls in a box follows a binomial distribution.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the probability that a randomly chosen box is imperfect.",
        type: "auto",
        mode: "number",
        answer: "0.212053754",
        placeholder: "Value to 3 s.f.",
        solution: "Let $X$ be the number of faulty bowls in a box of $20$ bowls. Then $X \\sim \\mathrm{B}(20, 0.08)$.<br>$$\\mathrm{P}(X > 2) = 1 - \\mathrm{P}(X \\le 2) = 1 - 0.78795 = 0.21205 \\approx 0.212 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "These boxes are packed into cartons of $12$ boxes each.<br>Find the probability that, out of $3$ randomly chosen cartons, there are $2$ cartons that contain fewer than $15$ faulty bowls each.",
        type: "auto",
        mode: "number",
        answer: "0.043689114",
        placeholder: "Value to 3 s.f.",
        solution: "Let $W$ be the number of faulty bowls in a carton of $12 \\times 20 = 240$ bowls. Then $W \\sim \\mathrm{B}(240, 0.08)$.<br>$$\\mathrm{P}(W < 15) = \\mathrm{P}(W \\le 14) = 0.12933 \\text{ (5 s.f.)}$$<br>Let $A$ be the number of cartons out of $3$ containing fewer than $15$ faulty bowls. Then $A \\sim \\mathrm{B}(3, 0.12933)$.<br>$$\\mathrm{P}(A = 2) = {^3\\mathrm{C}_2}(0.12933)^2(1 - 0.12933) = 0.04369 \\approx 0.0437 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Let $Y$ be the number of imperfect boxes in a randomly chosen carton.<br>State the values of $\\mathrm{E}(Y)$ and $\\mathrm{Var}(Y)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "E(Y) =", answer: "2.54464505", placeholder: "Value to 3 s.f." },
          { label: "Var(Y) =", answer: "2.00504351", placeholder: "Value to 3 s.f." }
        ],
        solution: "$Y \\sim \\mathrm{B}(12, 0.21205)$.<br>$$\\mathrm{E}(Y) = np = 12 \\times 0.21205 = 2.5446 \\approx 2.54 \\text{ (3 s.f.)}$$<br>$$\\mathrm{Var}(Y) = np(1 - p) = 12 \\times 0.21205 \\times (1 - 0.21205) = 2.0050 \\approx 2.01 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Hence using a suitable approximation, find the probability that the total number of imperfect boxes in a random sample of $35$ cartons is at most $85$.",
        type: "auto",
        mode: "number",
        answer: "0.31385247",
        placeholder: "Value to 3 s.f.",
        solution: "Let $T = Y_1 + Y_2 + \\dots + Y_{35}$.<br>Since the sample size $n = 35$ is large, by the Central Limit Theorem:<br>$$T \\sim \\mathrm{N}(35 \\times 2.5446, \\; 35 \\times 2.0050) \\quad \\text{approximately}$$<br>$$T \\sim \\mathrm{N}(89.061, \\; 70.175) \\quad \\text{approximately}$$<br>$$\\mathrm{P}(T \\le 85) = 0.3139 \\approx 0.314 \\text{ (3 s.f.)}$$"
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q8",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Normal Distribution", "Linear Combinations of Normal Variables"],
    stem: "An examination consists of two parts: a written paper and a lab-based practical. Marks obtained by a randomly chosen candidate follow normal distributions with means and standard deviations as shown in the following table.<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>Mean</th><th>Standard deviation</th></tr><tr><td>Written paper</td><td>62</td><td>$\\sigma$</td></tr><tr><td>Lab-based practical</td><td>56</td><td>12</td></tr></table></div>It is given that the $95^\\text{th}$ percentile score for the written paper is $85$ marks.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Show that the value of $\\sigma$ is $13.983$, correct to $5$ significant figures.",
        type: "self",
        solution: "Let $W \\sim \\mathrm{N}(62, \\sigma^2)$ and $L \\sim \\mathrm{N}(56, 12^2)$.<br>Given $\\mathrm{P}(W \\le 85) = 0.95$:<br>$$\\mathrm{P}\\left(Z \\le \\frac{85 - 62}{\\sigma}\\right) = 0.95$$<br>Using GC, $\\frac{23}{\\sigma} = 1.64485 \\implies \\sigma = \\frac{23}{1.64485} = 13.983 \\text{ (5 s.f.)}$ (Shown)."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the probability that the difference between the marks obtained in the written paper and in the lab-based practical of a randomly chosen candidate is at least $9$.",
        type: "auto",
        mode: "number",
        answer: "0.64313894",
        placeholder: "Value to 3 s.f.",
        solution: "$$W - L \\sim \\mathrm{N}(62 - 56, \\; 13.983^2 + 12^2) \\implies W - L \\sim \\mathrm{N}(6, \\; 339.524)$$<br>$$\\mathrm{P}(|W - L| \\ge 9) = 1 - \\mathrm{P}(-9 < W - L < 9) = 0.6431 \\approx 0.643 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The overall mark obtained for the examination is the total of $60\\%$ of the mark obtained from written paper and $40\\%$ of the mark obtained from lab-based practical.<br>Find the probability that the overall mark of a randomly chosen candidate is less than $60$.",
        type: "auto",
        mode: "number",
        answer: "0.51650469",
        placeholder: "Value to 3 s.f.",
        solution: "Let $T = 0.6W + 0.4L$.<br>$$\\mathrm{E}(T) = 0.6(62) + 0.4(56) = 59.6$$<br>$$\\mathrm{Var}(T) = 0.6^2(13.983^2) + 0.4^2(12^2) = 93.42874$$<br>So $T \\sim \\mathrm{N}(59.6, \\; 93.42874)$.<br>$$\\mathrm{P}(T < 60) = 0.5165 \\approx 0.517 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Find the smallest value of $n$ such that the probability that the mean overall mark of $n$ randomly chosen candidates being at least $58$ is at least $0.95$.",
        type: "auto",
        mode: "number",
        answer: "99",
        exactRequired: true,
        placeholder: "Smallest integer value of n",
        solution: "$$\\bar{T} \\sim \\mathrm{N}\\left(59.6, \\; \\frac{93.42874}{n}\\right)$$<br>We require $\\mathrm{P}(\\bar{T} \\ge 58) \\ge 0.95$:<br>$$\\mathrm{P}\\left(Z \\ge \\frac{58 - 59.6}{\\sqrt{93.42874/n}}\\right) \\ge 0.95$$<br>$$\\frac{-1.6\\sqrt{n}}{\\sqrt{93.42874}} \\le -1.64485 \\implies \\sqrt{n} \\ge \\frac{1.64485\\sqrt{93.42874}}{1.6} = 9.9371$$<br>$$n \\ge 98.746$$<br>Hence, the smallest integer value of $n$ is $99$."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "State an assumption needed for the calculations in part (b) to (d) to be valid and explain why the assumption may not be valid in practice.",
        type: "self",
        solution: "<strong>Assumption:</strong> A candidate's mark for the written paper and their mark for the lab-based practical are independent.<br><strong>Why it may not be valid:</strong> In practice, a candidate who understands the subject well and scores high on the written paper is also more likely to perform well in the lab-based practical (so the two scores are likely positively correlated rather than independent)."
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q9",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Hypothesis Testing", "Central Limit Theorem", "Sampling"],
    stem: "At a school canteen, the average queuing time (in minutes) for a student to be served at a stall is known to be $4.5$ minutes. The school operation manager claims that with a recent change in students' timetable, there is an improvement in the average queuing time.<br>A random sample of $10$ students' queuing time is observed after the change in students' timetable and the data is shown below.<br>$$4.2, \\; 5.2, \\; 3.1, \\; 3.5, \\; 4.6, \\; 4.8, \\; 3.8, \\; 3.7, \\; 4.5, \\; 5.0$$<br>Given that the population variance of queuing time is known to be $0.48\\text{ minutes}^2$, a one-tailed test is carried out to determine whether the manager's claim is justified.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State an assumption needed to carry out the hypothesis test.",
        type: "self",
        solution: "Assume that the queuing time of students at the stall follows a <strong>normal distribution</strong>."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Test whether the manager's claim is justified at $5\\%$ level of significance.",
        type: "self",
        solution: "Let $\\mu$ be the population mean queuing time (in minutes).<br>From the sample of $n = 10$, $\\bar{x} = \\frac{42.4}{10} = 4.24$.<br><br>$$\\mathrm{H}_0: \\mu = 4.5$$<br>$$\\mathrm{H}_1: \\mu < 4.5 \\quad \\text{(manager's claim of improvement)}$$<br>Level of significance: $5\\%$ (left-tailed test).<br>Under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(4.5, \\frac{0.48}{10}\\right)$.<br>Test statistic:<br>$$Z = \\frac{\\bar{X} - 4.5}{\\sqrt{0.48/10}} \\sim \\mathrm{N}(0, 1)$$<br>Observed value: $z = \\frac{4.24 - 4.5}{\\sqrt{0.048}} = -1.1867$.<br>From GC, $p\\text{-value} = \\mathrm{P}(Z \\le -1.1867) = 0.118$ (3 s.f.).<br>Since $p\\text{-value} = 0.118 > 0.05$, we do not reject $\\mathrm{H}_0$.<br>There is insufficient evidence at the $5\\%$ level of significance to conclude that the manager's claim is justified."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "A student leader Jason suspected that with the change in students' timetable, the average queuing time for a student to be served at a stall is in fact more than $\\lambda$ minutes and also that the population variance of queuing time is no longer $0.48\\text{ minutes}^2$. To investigate this, Jason recorded the queuing time of the first $50$ students who visited the stall from 12 pm to 1 pm.<br>Give a reason why the sample collected is not a random sample.",
        type: "self",
        solution: "Any one of the following reasons:<ul><li>Not all students visiting the canteen have an equal chance of being selected (students visiting outside 12 pm to 1 pm, or after the first $50$ students, have zero chance of selection).</li><li>Students who are friends or from the same class may visit the stall together, so observations are not selected independently.</li></ul>"
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Jason decided to collect another set of data to do his investigation. He recorded the queuing time, $x$, in minutes, of a random sample of $50$ students. The summarized data is as shown below.<br>$$\\bar{x} = 4.6 \\quad \\text{and} \\quad \\sum x^2 = 1068$$<br>Find an unbiased estimate of the population variance.",
        type: "auto",
        mode: "number",
        answer: "10/49",
        placeholder: "Exact or 3 s.f.",
        solution: "$$s^2 = \\frac{1}{n - 1}\\left(\\sum x^2 - \\frac{(\\sum x)^2}{n}\\right) = \\frac{1}{49}\\left(1068 - \\frac{(4.6 \\times 50)^2}{50}\\right)$$<br>$$= \\frac{1}{49}(1068 - 1058) = \\frac{10}{49} \\approx 0.20408 \\approx 0.204 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(e)",
        marks: 1,
        prompt: "Jason carried out a hypothesis test at $2\\%$ level of significance with an alternative hypothesis of $\\mu > \\lambda$ where $\\mu$ is the population mean queuing time.<br>Explain why the assumption in (a) is no longer necessary.",
        type: "self",
        solution: "Since the sample size $n = 50$ is large, by the <strong>Central Limit Theorem</strong>, the sample mean queuing time $\\bar{X}$ follows a normal distribution approximately, regardless of the population distribution."
      },
      {
        label: "(f)",
        marks: 3,
        prompt: "By finding the critical region in terms of $z$-values, find the range of values of $\\lambda$ such that Jason's suspicion is justified.",
        type: "self",
        solution: "$$\\mathrm{H}_0: \\mu = \\lambda, \\quad \\mathrm{H}_1: \\mu > \\lambda$$<br>At $2\\%$ significance level (upper-tailed test), under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(\\lambda, \\frac{10/49}{50}\\right)$ approximately by CLT.<br>Test statistic: $Z = \\frac{\\bar{X} - \\lambda}{\\sqrt{0.20408/50}} \\sim \\mathrm{N}(0, 1)$.<br>Critical region: $\\{z \\in \\mathbb{R} : z \\ge 2.05375\\}$.<br>To reject $\\mathrm{H}_0$ (justifying Jason's suspicion):<br>$$\\frac{4.6 - \\lambda}{\\sqrt{0.20408/50}} \\ge 2.05375$$<br>$$4.6 - \\lambda \\ge 0.13121 \\implies \\lambda \\le 4.4688$$<br>Since queuing time is positive, $0 < \\lambda \\le 4.47$ (3 s.f.)."
      }
    ]
  },
  {
    id: "TJC-2025-P2-Q10",
    year: 2025,
    school: "TJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Correlation and Linear Regression"],
    stem: "Anand signed up for a privilege card with Temasek Airlines where cardholders earn more reward points as they fly further with the airline. From the airlines' website, Anand identified $8$ different destinations and recorded the flight distance, $x$ miles, of each destination from Singapore. He also recorded the corresponding reward points, $y$, credited into his card after each flight. The data are shown below.<div class='q-table-wrap'><table class='q-table'><tr><th>Destination</th><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td></tr><tr><th>Flight distance, $x$</th><td>200</td><td>400</td><td>600</td><td>800</td><td>1000</td><td>1200</td><td>1400</td><td>1600</td></tr><tr><th>Reward points, $y$</th><td>110</td><td>160</td><td>190</td><td>200</td><td>210</td><td>215</td><td>220</td><td>225</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch a scatter diagram of the data.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 330 215" width="330" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <line x1="40" y1="180" x2="310" y2="180" stroke-width="1.3"/>
  <polyline points="304,176 310,180 304,184" fill="none" stroke-width="1.3"/>
  <text x="313" y="184" stroke="none" font-style="italic">x</text>
  <line x1="50" y1="192" x2="50" y2="15" stroke-width="1.3"/>
  <polyline points="46,21 50,15 54,21" fill="none" stroke-width="1.3"/>
  <text x="36" y="20" stroke="none" font-style="italic">y</text>
  <line x1="50" y1="146.9" x2="80" y2="146.9" stroke-dasharray="4,3" stroke-width="0.9" opacity="0.55"/>
  <line x1="80" y1="146.9" x2="80" y2="180" stroke-dasharray="4,3" stroke-width="0.9" opacity="0.55"/>
  <line x1="50" y1="39.1" x2="290" y2="39.1" stroke-dasharray="4,3" stroke-width="0.9" opacity="0.55"/>
  <line x1="290" y1="39.1" x2="290" y2="180" stroke-dasharray="4,3" stroke-width="0.9" opacity="0.55"/>
  <text x="23" y="151" stroke="none">110</text>
  <text x="23" y="43" stroke="none">225</text>
  <text x="70" y="196" stroke="none">200</text>
  <text x="276" y="196" stroke="none">1600</text>
  <circle cx="80" cy="146.9" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="110" cy="100.0" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="140" cy="71.9" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="170" cy="62.5" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="200" cy="53.1" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="230" cy="48.4" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="260" cy="43.8" r="3.2" fill="#4ca885" stroke="none"/>
  <circle cx="290" cy="39.1" r="3.2" fill="#4ca885" stroke="none"/>
</svg>`,
        solution: "Plot the $8$ data points from $(200, 110)$ to $(1600, 225)$ as shown. The points follow a smooth upward-sloping curve that flattens out (concave downwards)."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Calculate the value of the product moment correlation coefficient, and explain why this value does not necessarily mean that a linear model is the best for the relationship between $x$ and $y$.",
        type: "self",
        solution: "Using GC, $r = 0.89438 \\approx 0.894$ (3 s.f.).<br>Even though the $r$-value is close to $1$ (indicating a strong positive linear correlation), the scatter diagram clearly shows a <strong>curvilinear</strong> trend between $x$ and $y$. Therefore, a linear model may not be the best fit."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Without calculating the product moment correlation coefficient, explain which of the following equations, where $a$ and $b$ are constants, and $b > 0$, can be used to model the relationship between $x$ and $y$.<br>(I) $y = a + bx^2$<br>(II) $y = a + b\\ln x$<br>(III) $y = a + b\\mathrm{e}^{-x}$",
        type: "self",
        solution: "Since $b > 0$:<ul><li><strong>Model (I) $y = a + bx^2$:</strong> As $x$ increases, $y$ increases at an <em>increasing</em> rate (concave upwards).</li><li><strong>Model (II) $y = a + b\\ln x$:</strong> As $x$ increases, $y$ increases at a <em>decreasing</em> rate (concave downwards).</li><li><strong>Model (III) $y = a + b\\mathrm{e}^{-x}$:</strong> As $x$ increases, $y$ <em>decreases</em>.</li></ul><br>From the scatter diagram, as $x$ increases, $y$ increases at a decreasing rate. Hence, <strong>Model (II)</strong> ($y = a + b\\ln x$) is the only suitable model."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Using the model identified in (c), find the equation of the corresponding regression line.",
        type: "self",
        solution: "Regressing $y$ on $\\ln x$ using GC:<br>$$y = 54.269\\ln x - 168.22$$<br>i.e. $y = 54.3\\ln x - 168$ (3 s.f.)."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Hence estimate the reward points that can be earned for a destination $700$ miles away from Singapore. Comment on the reliability of your estimation.",
        type: "self",
        solution: "When $x = 700$:<br>$$y = 54.269\\ln(700) - 168.22 = 187.30 \\approx 187 \\text{ (3 s.f.)}$$<br><strong>Reliability:</strong> The estimate is <strong>reliable</strong> because $x = 700$ lies within the data range $[200, 1600]$ (interpolation) and there is a very strong positive linear correlation between $y$ and $\\ln x$ ($r = 0.984$)."
      },
      {
        label: "(f)",
        marks: 1,
        prompt: "It is given that $1$ mile is approximately $1.609$ kilometres. State what will happen to the product moment correlation coefficient found in (b) if the flight distance is measured in kilometres instead of miles.",
        type: "self",
        solution: "It will <strong>remain the same</strong> (unchanged), because the product moment correlation coefficient is invariant under positive linear scaling of a variable."
      }
    ]
  }
]);
