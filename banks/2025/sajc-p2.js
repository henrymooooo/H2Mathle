window.registerQuestions([
  {
    id: "SAJC-2025-P2-Q1",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "Solve the following inequalities involving modulus functions.",
    parts: [
      {
        label: "(i)",
        marks: 4,
        prompt: "Solve the inequality $3|x^2 - 4| \\le |x + 2|$.",
        type: "self",
        solution: "Squaring both sides (since both sides are non-negative):<br>" +
          "$$9(x^2 - 4)^2 \\le (x + 2)^2$$" +
          "$$9(x - 2)^2(x + 2)^2 - (x + 2)^2 \\le 0$$" +
          "$$(x + 2)^2\\left[9(x - 2)^2 - 1\\right] \\le 0$$" +
          "$$(x + 2)^2\\left(3(x - 2) - 1\\right)\\left(3(x - 2) + 1\\right) \\le 0$$" +
          "$$(x + 2)^2(3x - 7)(3x - 5) \\le 0$$" +
          "Since $(x + 2)^2 \\ge 0$ for all real $x$, the inequality holds when $(3x - 7)(3x - 5) \\le 0$ or $x + 2 = 0$.<br>" +
          "$$\\therefore \\frac{5}{3} \\le x \\le \\frac{7}{3} \\quad \\text{or} \\quad x = -2$$"
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Hence, solve $\\frac{3}{x^2}|1 - 4x^2| \\le \\left|\\frac{1 + 2x}{x}\\right|$.",
        type: "self",
        solution: "Rewrite the inequality (noting $x \\ne 0$):<br>" +
          "$$3\\left|\\frac{1 - 4x^2}{x^2}\\right| \\le \\left|\\frac{1}{x} + 2\\right| \\implies 3\\left|\\frac{1}{x^2} - 4\\right| \\le \\left|\\frac{1}{x} + 2\\right|$$" +
          "Replacing $x$ with $\\frac{1}{x}$ in the result from part (i):<br>" +
          "$$\\frac{5}{3} \\le \\frac{1}{x} \\le \\frac{7}{3} \\quad \\text{or} \\quad \\frac{1}{x} = -2$$" +
          "Taking reciprocals:<br>" +
          "$$\\therefore \\frac{3}{7} \\le x \\le \\frac{3}{5} \\quad \\text{or} \\quad x = -\\frac{1}{2}$$"
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q2",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "This question consists of two independent parts (a) and (b) on roots of polynomial equations.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "It is given that $\\mathrm{f}(x) = px^6 + qx^4 + r$, where $p$, $q$, and $r$ are real constants.<br>Show that if $x = \\alpha$ is a root of $\\mathrm{f}(x) = 0$, then $x = -\\alpha$ is also a root.",
        type: "self",
        solution: "Since $x = \\alpha$ is a root, $\\mathrm{f}(\\alpha) = p\\alpha^6 + q\\alpha^4 + r = 0$.<br>" +
          "Then $\\mathrm{f}(-\\alpha) = p(-\\alpha)^6 + q(-\\alpha)^4 + r = p\\alpha^6 + q\\alpha^4 + r = 0$.<br>" +
          "Hence $x = -\\alpha$ is also a root of $\\mathrm{f}(x) = 0$ (shown)."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Given now that $x = 5$ and $x = \\beta$ are roots of $\\mathrm{f}(x) = 0$, where $\\text{Re}(\\beta) \\ne 0$ and $\\text{Im}(\\beta) \\ne 0$, write down all the remaining roots.",
        type: "self",
        solution: "By part (a)(i), since $5$ and $\\beta$ are roots, $-5$ and $-\\beta$ are also roots.<br>" +
          "Since the coefficients $p, q, r$ of $\\mathrm{f}(x)$ are all real, complex roots occur in conjugate pairs, so $\\beta^*$ and $-\\beta^*$ are also roots.<br>" +
          "Because $\\text{Re}(\\beta) \\ne 0$ and $\\text{Im}(\\beta) \\ne 0$, all six roots are distinct.<br>" +
          "Therefore, the remaining roots are $-5$, $-\\beta$, $\\beta^*$ and $-\\beta^*$."
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "The complex number $z$ satisfies the equation<br>$$z^3 + (3 - a)z^2 - (2 + 6\\mathrm{i})z - 6 = 0,$$where $a$ is a complex number. It is given that one of the roots is $1 + \\mathrm{i}$.<br>Find $a$ and the other roots of the equation.",
        type: "self",
        solution: "Since $z = 1 + \\mathrm{i}$ is a root, substitute $z = 1 + \\mathrm{i}$ into the equation:<br>" +
          "$$(1 + \\mathrm{i})^3 + (3 - a)(1 + \\mathrm{i})^2 - (2 + 6\\mathrm{i})(1 + \\mathrm{i}) - 6 = 0$$" +
          "$$(-2 + 2\\mathrm{i}) + (3 - a)(2\\mathrm{i}) - (-4 + 8\\mathrm{i}) - 6 = 0$$" +
          "$$(3 - a)(2\\mathrm{i}) = 4 + 6\\mathrm{i} \\implies 3 - a = \\frac{4 + 6\\mathrm{i}}{2\\mathrm{i}} = 3 - 2\\mathrm{i} \\implies a = 2\\mathrm{i}$$" +
          "Now factorise $z^3 + (3 - 2\\mathrm{i})z^2 - (2 + 6\\mathrm{i})z - 6 = (z - 1 - \\mathrm{i})(z^2 + Bz + C)$.<br>" +
          "Comparing constants: $(-1 - \\mathrm{i})C = -6 \\implies C = \\frac{6}{1 + \\mathrm{i}} = 3 - 3\\mathrm{i}$.<br>" +
          "Comparing $z^2$ terms: $B - 1 - \\mathrm{i} = 3 - 2\\mathrm{i} \\implies B = 4 - \\mathrm{i}$.<br>" +
          "Solving $z^2 + (4 - \\mathrm{i})z + (3 - 3\\mathrm{i}) = 0$:<br>" +
          "$$(z + 3)(z + 1 - \\mathrm{i}) = 0 \\implies z = -3 \\text{ or } z = -1 + \\mathrm{i}$$" +
          "Therefore, $a = 2\\mathrm{i}$ and the other roots are $-3$ and $-1 + \\mathrm{i}$."
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q3",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Maclaurin Series"],
    diagramSvg: `<svg viewBox="0 0 320 170" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- B(35, 140), E(85, 140), C(135, 140), D(285, 140), A(85, 35) -->
      <polygon points="35,140 85,35 135,140" fill="rgba(91,155,213,0.12)" stroke="#2c2925" stroke-width="1.5"/>
      <line x1="85" y1="35" x2="285" y2="140" stroke="#4a8fe7" stroke-width="1.6"/>
      <line x1="135" y1="140" x2="285" y2="140" stroke="#2c2925" stroke-width="1.5"/>
      <line x1="85" y1="35" x2="85" y2="140" stroke="#2c2925" stroke-width="1.3"/>
      <!-- Right-angle marker at E -->
      <polyline points="85,129 96,129 96,140" fill="none" stroke-width="1.2"/>
      <!-- Angle arc at D -->
      <path d="M 250 140 A 35 35 0 0 1 254 123.5" fill="none" stroke="#cf5652" stroke-width="1.3"/>
      <!-- Labels -->
      <text x="85" y="26" text-anchor="middle" stroke="none" font-style="italic">A</text>
      <text x="27" y="153" stroke="none" font-style="italic">B</text>
      <text x="85" y="155" text-anchor="middle" stroke="none" font-style="italic">E</text>
      <text x="135" y="155" text-anchor="middle" stroke="none" font-style="italic">C</text>
      <text x="288" y="153" stroke="none" font-style="italic">D</text>
      <text x="48" y="84" stroke="none">2</text>
      <text x="220" y="128" stroke="none" fill="#cf5652">π/4 + x</text>
    </svg>`,
    stem: "The diagram above shows △$ABC$ and △$AED$. △$ABC$ is an equilateral triangle with each side measuring $2$ units and △$AED$ is a right-angled triangle with ∠$ADE = \\frac{\\pi}{4} + x$. Points $C$ and $E$ both lie on the line $BD$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $BD = 1 + \\frac{\\sqrt{3}}{\\tan\\left(\\frac{\\pi}{4} + x\\right)}$.",
        type: "self",
        solution: "Since △$ABC$ is equilateral with side $2$ and $AE \\perp BC$, $E$ is the midpoint of $BC$, so $BE = 1$.<br>" +
          "By Pythagoras' theorem, $AE = \\sqrt{2^2 - 1^2} = \\sqrt{3}$.<br>" +
          "In right-angled △$AED$:<br>" +
          "$$\\tan\\left(\\frac{\\pi}{4} + x\\right) = \\frac{AE}{ED} = \\frac{\\sqrt{3}}{ED} \\implies ED = \\frac{\\sqrt{3}}{\\tan\\left(\\frac{\\pi}{4} + x\\right)}$$" +
          "$$\\therefore BD = BE + ED = 1 + \\frac{\\sqrt{3}}{\\tan\\left(\\frac{\\pi}{4} + x\\right)} \\quad \\text{(shown)}$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Given that $x$ is sufficiently small for $x^3$ and higher powers of $x$ to be neglected, show that $BD \\approx a + bx + cx^2$ where $a$, $b$ and $c$ are exact constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "1+sqrt(3)", exactRequired: true, placeholder: "Exact value" },
          { label: "b =", answer: "-2*sqrt(3)", exactRequired: true, placeholder: "Exact value" },
          { label: "c =", answer: "2*sqrt(3)", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "Using the addition formula $\\tan\\left(\\frac{\\pi}{4} + x\\right) = \\frac{1 + \\tan x}{1 - \\tan x}$:<br>" +
          "$$BD = 1 + \\sqrt{3}\\left(\\frac{1 - \\tan x}{1 + \\tan x}\\right)$$" +
          "For small $x$, $\\tan x \\approx x$ (up to $x^2$):<br>" +
          "$$BD \\approx 1 + \\sqrt{3}(1 - x)(1 + x)^{-1} \\approx 1 + \\sqrt{3}(1 - x)(1 - x + x^2)$$" +
          "$$= 1 + \\sqrt{3}(1 - 2x + 2x^2) = (1 + \\sqrt{3}) - 2\\sqrt{3}x + 2\\sqrt{3}x^2$$" +
          "Hence $a = 1 + \\sqrt{3}$, $b = -2\\sqrt{3}$, $c = 2\\sqrt{3}$."
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q4",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "A sequence $u_1, u_2, u_3, \\dots$ is such that $23u_{r+1} = 19u_r + 16$, for $r > 0$ and $u_1 = 2$.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Write down the value of $u_{10}$, giving your answer correct to 4 decimal places.",
        type: "auto",
        mode: "number",
        answer: "3.64168757",
        dp: 4,
        placeholder: "Value to 4 d.p.",
        solution: "From $u_{r+1} = \\frac{19}{23}u_r + \\frac{16}{23}$ with $u_1 = 2$, using GC:<br>" +
          "$u_{10} = 3.6417$ (4 d.p.)."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "It is given that as $r$ → ∞, $u_r$ → $l$. Show that $l = 4$.",
        type: "self",
        solution: "As $r$ → ∞, both $u_r$ → $l$ and $u_{r+1}$ → $l$.<br>" +
          "Substituting into $23u_{r+1} = 19u_r + 16$:<br>" +
          "$23l = 19l + 16 \\implies 4l = 16 \\implies l = 4$ (shown)."
      },
      {
        label: "(iii)",
        marks: 3,
        prompt: "Hence, find the smallest integer $r$ for which $u_r$ exceeds $99.9\\%$ of $l$.",
        type: "auto",
        mode: "number",
        answer: "34",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "We require $u_r > 0.999 \\times 4 = 3.996$.<br>" +
          "From GC:<br>" +
          "When $r = 33$, $u_{33} = 3.9956 < 3.996$.<br>" +
          "When $r = 34$, $u_{34} = 3.9963 > 3.996$.<br>" +
          "$\\therefore$ Smallest integer $r = 34$."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "It is known that the $k\\text{th}$ term of this sequence is given by $u_k = 4 - 2\\left(\\frac{19}{23}\\right)^{k-1}$.<br>Given that a new series $S_n$ is defined by $S_n = \\sum_{k=1}^{n} (u_k - c)$, where $c$ is a real constant, express $S_n$ in the form $An + B\\left[1 - \\left(\\frac{19}{23}\\right)^n\\right]$, where $A$ is a constant in terms of $c$ and $B$ is a real number.",
        type: "self",
        solution: "$$S_n = \\sum_{k=1}^{n} \\left[4 - 2\\left(\\frac{19}{23}\\right)^{k-1} - c\\right] = \\sum_{k=1}^{n} (4 - c) - 2\\sum_{k=1}^{n} \\left(\\frac{19}{23}\\right)^{k-1}$$" +
          "$$= (4 - c)n - 2 \\cdot \\frac{1 - \\left(\\frac{19}{23}\\right)^n}{1 - \\frac{19}{23}}$$" +
          "$$= (4 - c)n - \\frac{23}{2}\\left[1 - \\left(\\frac{19}{23}\\right)^n\\right]$$" +
          "Hence $A = 4 - c$ and $B = -\\frac{23}{2}$."
      },
      {
        label: "(v)",
        marks: 1,
        prompt: "Determine the possible values of $c$ for $S_n$ to diverge as $n$ → ∞.",
        type: "self",
        solution: "As $n$ → ∞, $\\left(\\frac{19}{23}\\right)^n$ → $0$.<br>" +
          "The term $(4 - c)n$ diverges to ±∞ whenever $4 - c \\ne 0$, i.e., $c \\ne 4$.<br>" +
          "Hence $S_n$ diverges for $c \\in \\mathbb{R}$, $c \\ne 4$."
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q5",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "pure",
    topics: ["Differentiation"],
    stem: "A curve $C$ has parametric equations<br>$$x = \\tan\\theta - \\cot\\theta, \\quad y = \\tan\\theta + \\cot\\theta, \\quad \\text{for } 0 < \\theta < \\frac{\\pi}{4}.$$",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\cos 2\\theta$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = \\sec^2\\theta + \\cosec^2\\theta$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = \\sec^2\\theta - \\cosec^2\\theta$.<br>" +
          "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\sec^2\\theta - \\cosec^2\\theta}{\\sec^2\\theta + \\cosec^2\\theta} = \\frac{\\frac{1}{\\cos^2\\theta} - \\frac{1}{\\sin^2\\theta}}{\\frac{1}{\\cos^2\\theta} + \\frac{1}{\\sin^2\\theta}} = \\frac{\\sin^2\\theta - \\cos^2\\theta}{\\sin^2\\theta + \\cos^2\\theta} = -\\cos 2\\theta \\quad \\text{(shown)}$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "The line $L$ is the tangent to $C$ at point $P$ with parameter $p$.<br>Show that the equation of $L$ is $y + (\\cos 2p)x = 2\\sin 2p$.",
        type: "self",
        solution: "At $\\theta = p$, equation of tangent $L$:<br>" +
          "$$y - (\\tan p + \\cot p) = -\\cos 2p\\left[x - (\\tan p - \\cot p)\\right]$$" +
          "$$y + (\\cos 2p)x = \\tan p(1 + \\cos 2p) + \\cot p(1 - \\cos 2p)$$" +
          "$$= \\frac{\\sin p}{\\cos p}(2\\cos^2 p) + \\frac{\\cos p}{\\sin p}(2\\sin^2 p)$$" +
          "$$= 2\\sin p\\cos p + 2\\sin p\\cos p = 2\\sin 2p \\quad \\text{(shown)}$$"
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "Let $Q$ and $R$ be the points where $L$ cuts the $x$-axis and $y$-axis respectively.<br>Given that $p$ increases at a constant rate of $0.2$ radians per second, find the exact rate of change of the area of △$OQR$ when $p = \\frac{\\pi}{6}$, where $O$ is the origin.",
        type: "auto",
        mode: "number",
        answer: "2*sqrt(3)",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $0 < p < \\frac{\\pi}{4}$, we have $0 < 2p < \\frac{\\pi}{2}$, so $\\sin 2p > 0$ and $\\tan 2p > 0$.<br>" +
          "When $y = 0$: $x = \\frac{2\\sin 2p}{\\cos 2p} = 2\\tan 2p$, so $Q(2\\tan 2p, 0)$.<br>" +
          "When $x = 0$: $y = 2\\sin 2p$, so $R(0, 2\\sin 2p)$.<br>" +
          "Area of △$OQR$: $A = \\frac{1}{2}(2\\tan 2p)(2\\sin 2p) = 2\\tan 2p\\sin 2p$.<br>" +
          "$$\\frac{\\mathrm{d}A}{\\mathrm{d}p} = 2\\left[\\tan 2p(2\\cos 2p) + \\sin 2p(2\\sec^2 2p)\\right] = 4(\\sin 2p + \\tan 2p\\sec 2p)$$" +
          "When $p = \\frac{\\pi}{6}$ ($2p = \\frac{\\pi}{3}$):<br>" +
          "$$\\frac{\\mathrm{d}A}{\\mathrm{d}p} = 4\\left(\\frac{\\sqrt{3}}{2} + \\sqrt{3}(2)\\right) = 4\\left(\\frac{5\\sqrt{3}}{2}\\right) = 10\\sqrt{3}$$" +
          "Given $\\frac{\\mathrm{d}p}{\\mathrm{d}t} = 0.2$:<br>" +
          "$$\\frac{\\mathrm{d}A}{\\mathrm{d}t} = \\frac{\\mathrm{d}A}{\\mathrm{d}p} \\cdot \\frac{\\mathrm{d}p}{\\mathrm{d}t} = 10\\sqrt{3} \\times 0.2 = 2\\sqrt{3}\\text{ units}^2/\\text{s}$$"
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q6",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations & Combinations"],
    diagramSvg: `<svg viewBox="0 0 380 125" width="380" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Taxi X -->
      <text x="105" y="16" text-anchor="middle" stroke="none" font-weight="bold">Taxi X</text>
      <rect x="65" y="24" width="80" height="86" fill="none" stroke-width="1.3"/>
      <text x="58" y="71" text-anchor="end" stroke="none">Back</text>
      <text x="152" y="71" stroke="none">Front</text>
      <!-- 3 back seats + 1 front seat -->
      <rect x="76" y="33" width="16" height="18" rx="3" fill="rgba(76,168,133,0.18)" stroke="#4ca885" stroke-width="1.2"/>
      <rect x="76" y="58" width="16" height="18" rx="3" fill="rgba(76,168,133,0.18)" stroke="#4ca885" stroke-width="1.2"/>
      <rect x="76" y="83" width="16" height="18" rx="3" fill="rgba(76,168,133,0.18)" stroke="#4ca885" stroke-width="1.2"/>
      <rect x="115" y="33" width="16" height="18" rx="3" fill="rgba(76,168,133,0.18)" stroke="#4ca885" stroke-width="1.2"/>

      <!-- Taxi Y -->
      <text x="275" y="16" text-anchor="middle" stroke="none" font-weight="bold">Taxi Y</text>
      <rect x="235" y="24" width="80" height="86" fill="none" stroke-width="1.3"/>
      <text x="228" y="71" text-anchor="end" stroke="none">Back</text>
      <text x="322" y="71" stroke="none">Front</text>
      <rect x="246" y="33" width="16" height="18" rx="3" fill="rgba(76,168,133,0.18)" stroke="#4ca885" stroke-width="1.2"/>
      <rect x="246" y="58" width="16" height="18" rx="3" fill="rgba(76,168,133,0.18)" stroke="#4ca885" stroke-width="1.2"/>
      <rect x="246" y="83" width="16" height="18" rx="3" fill="rgba(76,168,133,0.18)" stroke="#4ca885" stroke-width="1.2"/>
      <rect x="285" y="33" width="16" height="18" rx="3" fill="rgba(76,168,133,0.18)" stroke="#4ca885" stroke-width="1.2"/>
    </svg>`,
    stem: "A group of $8$ tourists — $2$ married couples and $4$ singles — travels to the airport in two taxis, $X$ and $Y$. Each taxi can take $4$ passengers.<br>The $8$ tourists divide themselves into two groups of $4$, one group for taxi $X$ and one group for taxi $Y$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find the number of different ways in which this can be done if each married couple must travel together in the same taxi.",
        type: "auto",
        mode: "number",
        answer: "14",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "<strong>Case 1:</strong> Both married couples are in the same taxi (either both in $X$ or both in $Y$):<br>" +
          "Number of ways $= 2$.<br>" +
          "<strong>Case 2:</strong> The two married couples are in different taxis:<br>" +
          "Choose which couple goes to taxi $X$: $^2\\text{C}_1 = 2$ ways. Choose $2$ of the $4$ singles for taxi $X$: $^4\\text{C}_2 = 6$ ways.<br>" +
          "Number of ways $= 2 \\times 6 = 12$.<br>" +
          "Total number of ways $= 2 + 12 = 14$."
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Each taxi can take $1$ passenger in the front and $3$ passengers in the back (see diagram).<br>Find the number of seating arrangements so that each married couple sit next to each other at the back of the taxi.",
        type: "auto",
        mode: "number",
        answer: "768",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Since the back of each taxi only has $3$ seats, the two married couples must sit at the back of different taxis.<br>" +
          "Assign the $2$ couples to taxis $X$ and $Y$: $2$ ways.<br>" +
          "In each taxi, a couple sitting next to each other at the back can occupy either the first two or the last two back seats ($2$ choices) and can swap seats ($2!$ ways), giving $2 \\times 2 = 4$ ways per taxi.<br>" +
          "The remaining $4$ seats (one back seat and one front seat in each taxi) are occupied by the $4$ singles in $4! = 24$ ways.<br>" +
          "Total number of seating arrangements $= 2 \\times 4 \\times 4 \\times 24 = 768$."
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q7",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Probability", "Discrete Random Variables"],
    diagramSvg: `<svg viewBox="0 0 260 120" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <text x="130" y="13" text-anchor="middle" stroke="none" font-style="italic" font-size="10">Venn diagram for part (a)</text>
      <rect x="20" y="20" width="210" height="90" fill="none" stroke-width="1.3"/>
      <text x="236" y="30" stroke="none" font-style="italic">S</text>
      <circle cx="125" cy="65" r="36" fill="rgba(76,168,133,0.12)" stroke="#4ca885" stroke-width="1.5"/>
      <circle cx="125" cy="75" r="16" fill="rgba(76,168,133,0.28)" stroke="#4ca885" stroke-width="1.5"/>
      <text x="82" y="42" stroke="none" font-style="italic">A</text>
      <text x="145" y="70" stroke="none" font-style="italic">B</text>
    </svg>`,
    stem: "This question consists of two independent parts (a) and (b) on probability and discrete random variables.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "With reference to the Venn diagram above, $S$ is the universal set and $A$ and $B$ are non-empty proper subsets of $S$. Explain whether $A$ and $B$ are independent, and write down the value of $\\mathrm{P}(A \\mid B)$.",
        type: "self",
        solution: "Since $B \\subset A$, we have $\\mathrm{P}(A \\cap B) = \\mathrm{P}(B) > 0$.<br>" +
          "Also, since $A$ is a proper subset of $S$, $\\mathrm{P}(A) \\ne 1$.<br>" +
          "Therefore, $\\mathrm{P}(A \\cap B) = \\mathrm{P}(B) \\ne \\mathrm{P}(A)\\mathrm{P}(B)$ (equivalently, $\\mathrm{P}(A \\mid B) = 1 \\ne \\mathrm{P}(A)$).<br>" +
          "Hence $A$ and $B$ are <strong>not independent</strong>.<br>" +
          "$\\mathrm{P}(A \\mid B) = 1$."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "A fair die has three sides numbered $2$, two sides numbered $1$ and one side numbered $0$. A game is played by throwing this fair die three times and the score, $X$, is the sum of the numbers obtained.<br>Show that $\\mathrm{P}(X = 2) = \\frac{7}{72}$.",
        type: "self",
        solution: "For a single throw: $\\mathrm{P}(2) = \\frac{1}{2}$, $\\mathrm{P}(1) = \\frac{1}{3}$, $\\mathrm{P}(0) = \\frac{1}{6}$.<br>" +
          "To obtain a sum of $2$ in three throws, the outcomes are either $(2, 0, 0)$ in any order or $(1, 1, 0)$ in any order:<br>" +
          "$$\\mathrm{P}(X = 2) = \\left(\\frac{1}{2} \\times \\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{3!}{2!}\\right) + \\left(\\frac{1}{3} \\times \\frac{1}{3} \\times \\frac{1}{6} \\times \\frac{3!}{2!}\\right) = \\frac{3}{72} + \\frac{4}{72} = \\frac{7}{72} \\quad \\text{(shown)}$$"
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "The table shows an incomplete probability distribution of $X$. Find the missing probabilities, showing your workings clearly.<br>" +
          "<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$0$</td><td>$1$</td><td>$2$</td><td>$3$</td><td>$4$</td><td>$5$</td><td>$6$</td></tr>" +
          "<tr><th>$\\mathrm{P}(X = x)$</th><td>$\\frac{1}{216}$</td><td>$\\frac{1}{36}$</td><td>$\\frac{7}{72}$</td><td></td><td>$\\frac{7}{24}$</td><td></td><td></td></tr></table></div>",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "P(X = 3) =", answer: "11/54", exactRequired: true, placeholder: "Exact fraction" },
          { label: "P(X = 5) =", answer: "1/4", exactRequired: true, placeholder: "Exact fraction" },
          { label: "P(X = 6) =", answer: "1/8", exactRequired: true, placeholder: "Exact fraction" }
        ],
        solution: "$\\mathrm{P}(X = 6) = \\mathrm{P}(2, 2, 2) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.<br>" +
          "$\\mathrm{P}(X = 5) = \\mathrm{P}(\\text{two } 2\\text{s and one } 1) = \\left(\\frac{1}{2}\\right)^2\\left(\\frac{1}{3}\\right) \\times \\frac{3!}{2!} = \\frac{1}{4}$.<br>" +
          "$\\mathrm{P}(X = 3) = \\mathrm{P}(2, 1, 0 \\text{ in any order}) + \\mathrm{P}(1, 1, 1) = \\left(\\frac{1}{2} \\times \\frac{1}{3} \\times \\frac{1}{6} \\times 3!\\right) + \\left(\\frac{1}{3}\\right)^3 = \\frac{1}{6} + \\frac{1}{27} = \\frac{11}{54}$.<br>" +
          "(Or by complement: $1 - \\frac{1}{216} - \\frac{1}{36} - \\frac{7}{72} - \\frac{7}{24} - \\frac{1}{4} - \\frac{1}{8} = \\frac{11}{54}$.)"
      },
      {
        label: "(b)(iii)",
        marks: 3,
        prompt: "The game is played $5$ times.<br>Find the probability that exactly one of the games obtained a score of $0$ and exactly $2$ games obtained a score of more than $2$.",
        type: "auto",
        mode: "number",
        answer: "0.001643977",
        placeholder: "3 s.f. or exact",
        solution: "In each game:<br>" +
          "$\\mathrm{P}(X = 0) = \\frac{1}{216}$<br>" +
          "$\\mathrm{P}(X = 1 \\text{ or } 2) = \\frac{1}{36} + \\frac{7}{72} = \\frac{9}{72} = \\frac{1}{8}$<br>" +
          "$\\mathrm{P}(X > 2) = 1 - \\frac{1}{216} - \\frac{1}{8} = \\frac{188}{216} = \\frac{47}{54}$<br>" +
          "Out of $5$ independent games, we need one game with $X = 0$, two games with $X > 2$, and the remaining two games with $X \\in \\{1, 2\\}$:<br>" +
          "$$\\text{Required probability} = \\frac{1}{216} \\times \\left(\\frac{47}{54}\\right)^2 \\times \\left(\\frac{1}{8}\\right)^2 \\times \\frac{5!}{1!\\,2!\\,2!} = 0.00164 \\text{ (3 s.f.)}$$"
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q8",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Probability", "Binomial Distribution"],
    stem: "A company sells toys in blind boxes. Each blind box contains exactly one toy. On average, $2\\%$ of such blind boxes contain a faulty toy.<br>A collector buys $15$ such blind boxes at random.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "State, in context, two assumptions needed for the number of faulty toys he gets to be well modelled by a binomial distribution.",
        type: "self",
        solution: "1. Whether a toy in a blind box is faulty or not is independent of any other toy.<br>" +
          "2. The probability that a toy in a blind box is faulty is constant at $0.02$ for every blind box."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Assume now that the number of faulty toys the collector gets has a binomial distribution.<br>Find the probability that the collector gets no less than $3$ faulty toys.",
        type: "auto",
        mode: "number",
        answer: "0.003039375",
        placeholder: "3 s.f.",
        solution: "Let $X$ be the number of faulty toys in $15$ blind boxes. $X \\sim \\mathrm{B}(15, 0.02)$.<br>" +
          "$\\mathrm{P}(X \\ge 3) = 1 - \\mathrm{P}(X \\le 2) = 0.00304$ (3 s.f.)."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Find the probability that the fourteenth box is the second box with a faulty toy.",
        type: "auto",
        mode: "number",
        answer: "0.004080527",
        placeholder: "3 s.f.",
        solution: "Let $Y$ be the number of faulty toys in the first $13$ blind boxes. $Y \\sim \\mathrm{B}(13, 0.02)$.<br>" +
          "Required probability $= \\mathrm{P}(Y = 1) \\times 0.02 = 13(0.02)(0.98)^{12} \\times 0.02 = 0.00408$ (3 s.f.)."
      },
      {
        label: "(iv)",
        marks: 1,
        prompt: "The company also sells keychains. The probability of a keychain being faulty is $p$. The number of faulty keychains follows a binomial distribution. Faults on keychains are independent of faults on toys in blind boxes.<br>Write down an expression, in terms of $p$, for the probability that in a random sample of $3$ keychains, exactly one is faulty.",
        type: "auto",
        mode: "expr",
        vars: { p: [0.1, 0.25, 0.5] },
        answer: "3*p*(1-p)^2",
        placeholder: "Expression in terms of p",
        solution: "Let $K \\sim \\mathrm{B}(3, p)$ be the number of faulty keychains out of $3$.<br>" +
          "$\\mathrm{P}(K = 1) = 3p(1 - p)^2$."
      },
      {
        label: "(v)",
        marks: 4,
        prompt: "A surprise pack contains $2$ randomly chosen blind boxes and $3$ randomly chosen keychains. Given that a randomly selected surprise pack contains at most $1$ faulty item, the probability that one of the toys is the only faulty item in the pack is $0.035$.<br>Write down an equation satisfied by $p$. Hence, find the value of $p$.",
        type: "auto",
        mode: "number",
        answer: "43/1072",
        placeholder: "3 s.f. or exact",
        solution: "Let $A \\sim \\mathrm{B}(2, 0.02)$ be the number of faulty toys in $2$ blind boxes, and $K \\sim \\mathrm{B}(3, p)$ be the number of faulty keychains.<br>" +
          "$\\mathrm{P}(A = 0) = 0.98^2 = 0.9604$, $\\mathrm{P}(A = 1) = 2(0.02)(0.98) = 0.0392$.<br>" +
          "$$\\frac{\\mathrm{P}(A = 1)\\mathrm{P}(K = 0)}{\\mathrm{P}(A = 0)\\mathrm{P}(K = 0) + \\mathrm{P}(A = 1)\\mathrm{P}(K = 0) + \\mathrm{P}(A = 0)\\mathrm{P}(K = 1)} = 0.035$$" +
          "$$\\frac{0.0392(1 - p)^3}{0.9604(1 - p)^3 + 0.0392(1 - p)^3 + 0.9604 \\cdot 3p(1 - p)^2} = 0.035$$" +
          "Dividing numerator and denominator by $(1 - p)^2$ (since $p \\ne 1$):<br>" +
          "$$\\frac{0.0392(1 - p)}{0.9996(1 - p) + 2.8812p} = 0.035$$" +
          "$$0.0392(1 - p) = 0.034986(1 - p) + 0.100842p$$" +
          "$$0.004214 = 0.105056p \\implies p = \\frac{43}{1072} \\approx 0.0401 \\text{ (3 s.f.)}$$"
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q9",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Alvin is investigating the relationship between the amount of screen time per day and the sleep quality of youths. He recorded the sleep quality score, $y$, on a scale of $1$ to $10$ with $1$ being the worst and $10$ being the best, of particular youths with $x$ hours of screen time per day.<br>" +
      "<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>$1.6$</td><td>$1.7$</td><td>$1.9$</td><td>$2.0$</td><td>$2.5$</td><td>$2.8$</td><td>$3.9$</td></tr>" +
      "<tr><th>$y$</th><td>$9$</td><td>$8$</td><td>$7$</td><td>$6$</td><td>$4$</td><td>$3$</td><td>$1$</td></tr></table></div>",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Sketch a scatter diagram that might be expected when $x$ and $y$ are related approximately as given in each of the cases <strong>(A)</strong> and <strong>(B)</strong> below. In each case your diagram should include $6$ points, approximately equally spaced with respect to $x$, and with all $x$- and $y$-values positive. The letters $a$, $b$, $c$ and $d$ represent constants.<br><strong>(A)</strong> $y = a + bx^2$, where $a$ is positive and $b$ is negative,<br><strong>(B)</strong> $y = c + \\frac{d}{x}$, where $c$ is positive and $d$ is positive.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 380 155" width="380" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Case (A): concave downward decreasing -->
          <text x="95" y="14" text-anchor="middle" stroke="none" font-weight="bold">(A) y = a + bx² (a&gt;0, b&lt;0)</text>
          <line x1="25" y1="135" x2="170" y2="135" stroke-width="1.2"/>
          <polyline points="164,132 170,135 164,138" fill="none" stroke-width="1.2"/>
          <line x1="30" y1="140" x2="30" y2="25" stroke-width="1.2"/>
          <polyline points="27,31 30,25 33,31" fill="none" stroke-width="1.2"/>
          <text x="174" y="139" stroke="none" font-style="italic">x</text>
          <text x="23" y="30" stroke="none" font-style="italic">y</text>
          <text x="22" y="147" stroke="none">0</text>
          <!-- 6 points along y = 100 - 2.5 x^2 -->
          <circle cx="48" cy="40" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="68" cy="47" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="88" cy="58" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="108" cy="75" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="128" cy="96" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="148" cy="122" r="2.5" fill="#4ca885" stroke="none"/>

          <!-- Case (B): concave upward decreasing -->
          <text x="285" y="14" text-anchor="middle" stroke="none" font-weight="bold">(B) y = c + d/x (c&gt;0, d&gt;0)</text>
          <line x1="215" y1="135" x2="360" y2="135" stroke-width="1.2"/>
          <polyline points="354,132 360,135 354,138" fill="none" stroke-width="1.2"/>
          <line x1="220" y1="140" x2="220" y2="25" stroke-width="1.2"/>
          <polyline points="217,31 220,25 223,31" fill="none" stroke-width="1.2"/>
          <text x="364" y="139" stroke="none" font-style="italic">x</text>
          <text x="213" y="30" stroke="none" font-style="italic">y</text>
          <text x="212" y="147" stroke="none">0</text>
          <!-- 6 points along y = c + d/x -->
          <circle cx="238" cy="42" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="258" cy="78" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="278" cy="94" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="298" cy="103" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="318" cy="109" r="2.5" fill="#4ca885" stroke="none"/>
          <circle cx="338" cy="113" r="2.5" fill="#4ca885" stroke="none"/>
        </svg>`,
        solution: "<strong>(A)</strong> As $x$ increases, $y$ decreases at an <em>increasing</em> rate (concave downwards).<br>" +
          "<strong>(B)</strong> As $x$ increases, $y$ decreases at a <em>decreasing</em> rate (concave upwards), levelling off above $y = c > 0$."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Draw a scatter diagram for the values in the table, labelling the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 190" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (45, 160), x in [0, 4.3] -> 56px/unit, y in [0, 10] -> 13px/unit -->
          <line x1="35" y1="160" x2="295" y2="160" stroke-width="1.2"/>
          <polyline points="289,157 295,160 289,163" fill="none" stroke-width="1.2"/>
          <line x1="45" y1="168" x2="45" y2="18" stroke-width="1.2"/>
          <polyline points="42,24 45,18 48,24" fill="none" stroke-width="1.2"/>
          <text x="290" y="177" text-anchor="end" stroke="none" font-style="italic">x (screen time, h)</text>
          <text x="52" y="22" stroke="none" font-style="italic">y (sleep quality score)</text>
          <text x="36" y="172" stroke="none">0</text>
          <!-- Ticks at x=1.6 (134.6), x=3.9 (263.4), y=1 (147), y=9 (43) -->
          <line x1="134.6" y1="157" x2="134.6" y2="163" stroke-width="1"/>
          <text x="134.6" y="174" text-anchor="middle" stroke="none">1.6</text>
          <line x1="263.4" y1="157" x2="263.4" y2="163" stroke-width="1"/>
          <text x="263.4" y="174" text-anchor="middle" stroke="none">3.9</text>
          <line x1="42" y1="147" x2="48" y2="147" stroke-width="1"/>
          <text x="37" y="151" text-anchor="end" stroke="none">1</text>
          <line x1="42" y1="43" x2="48" y2="43" stroke-width="1"/>
          <text x="37" y="47" text-anchor="end" stroke="none">9</text>
          <!-- Points: (1.6,9)->(134.6,43), (1.7,8)->(140.2,56), (1.9,7)->(151.4,69), (2.0,6)->(157,82), (2.5,4)->(185,108), (2.8,3)->(201.8,121), (3.9,1)->(263.4,147) -->
          <circle cx="134.6" cy="43" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="140.2" cy="56" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="151.4" cy="69" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="157" cy="82" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="185" cy="108" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="201.8" cy="121" r="3" fill="#4ca885" stroke="none"/>
          <circle cx="263.4" cy="147" r="3" fill="#4ca885" stroke="none"/>
        </svg>`,
        solution: "Plot the $7$ points $(1.6, 9)$, $(1.7, 8)$, $(1.9, 7)$, $(2.0, 6)$, $(2.5, 4)$, $(2.8, 3)$ and $(3.9, 1)$ with labelled axes and key boundary values ($x = 1.6, 3.9$; $y = 1, 9$)."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Explain which of the two cases in part (i) is the most appropriate for modelling these values and calculate the product moment correlation coefficient for this case.",
        type: "self",
        solution: "From the scatter diagram, as $x$ increases, $y$ decreases at a decreasing rate. Therefore, <strong>Case (B)</strong> ($y = c + \\frac{d}{x}$) is the most appropriate model.<br>" +
          "Using GC for $y$ against $\\frac{1}{x}$:<br>" +
          "$r = 0.99868 \\approx 0.999$ (3 s.f.)."
      },
      {
        label: "(iv)",
        marks: 4,
        prompt: "Alvin wants to estimate the sleep quality score when the screen time per day is $3$ hours. Use the case that you have identified in part (iii) to find the equation of a suitable regression line and use your equation to find the required estimate. Explain whether you would expect this estimate to be reliable.",
        type: "self",
        solution: "Regression line of $y$ on $\\frac{1}{x}$ (from GC):<br>" +
          "$$y = -4.6636 + \\frac{21.716}{x} \\implies y = -4.66 + \\frac{21.7}{x} \\text{ (3 s.f.)}$$" +
          "When $x = 3$:<br>" +
          "$$y = -4.6636 + \\frac{21.716}{3} = 2.5751 \\approx 3 \\text{ (nearest integer, or } 2.58 \\text{ to 3 s.f.)}$$" +
          "Yes, the estimate is reliable because $r = 0.999$ is very close to $1$ (indicating a very strong positive linear correlation between $y$ and $\\frac{1}{x}$) and $x = 3$ lies within the given data range $[1.6, 3.9]$ (interpolation)."
      },
      {
        label: "(v)",
        marks: 3,
        prompt: "Write the equation from part (iv) in terms of $y$ and $t$, where $t$ is the amount of screen time per day in minutes. Explain whether the product moment correlation coefficient for this case differs from the one found in part (iii).",
        type: "self",
        solution: "Since $t = 60x$, we have $x = \\frac{t}{60}$:<br>" +
          "$$y = -4.6636 + \\frac{21.716 \\times 60}{t} = -4.6636 + \\frac{1303.0}{t} \\implies y = -4.66 + \\frac{1300}{t} \\text{ (3 s.f.)}$$" +
          "No, the product moment correlation coefficient does not differ (it remains $0.999$), because $r$ is unaffected by linear scaling / change of units ($\\frac{1}{t} = \\frac{1}{60} \\cdot \\frac{1}{x}$)."
      },
      {
        label: "(vi)",
        marks: 1,
        prompt: "Alvin concluded that this study shows that increased amount of screen time per day causes poorer sleep quality. Explain whether you agree with his conclusion.",
        type: "self",
        solution: "Disagree. Correlation does not imply causation — the study only shows a strong statistical association between screen time and sleep quality, and does not prove that increased screen time directly causes poorer sleep quality."
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q10",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Normal Distribution", "Sampling & CLT"],
    diagramSvg: `<svg viewBox="0 0 420 155" width="420" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <!-- Left: pdf of X ~ N(40, alpha^2) -->
      <text x="105" y="13" text-anchor="middle" stroke="none" font-style="italic" font-size="10">PDF of X</text>
      <line x1="15" y1="125" x2="195" y2="125" stroke-width="1.2"/>
      <polyline points="189,122 195,125 189,128" fill="none" stroke-width="1.2"/>
      <line x1="105" y1="28" x2="105" y2="125" stroke-dasharray="3,3" opacity="0.6"/>
      <path d="M 20 122 C 55 120, 75 40, 105 40 C 135 40, 155 120, 190 122" fill="none" stroke="#4ca885" stroke-width="2"/>
      <text x="105" y="140" text-anchor="middle" stroke="none">40</text>
      <text x="195" y="142" text-anchor="end" stroke="none" font-size="10">Number of hours</text>

      <!-- Right: standard normal shaded Z < 1.8 -->
      <text x="315" y="13" text-anchor="middle" stroke="none" font-style="italic" font-size="10">Standard normal curve</text>
      <line x1="225" y1="125" x2="405" y2="125" stroke-width="1.2"/>
      <polyline points="399,122 405,125 399,128" fill="none" stroke-width="1.2"/>
      <!-- Shaded area up to z=1.8 (px 348) -->
      <path d="M 230 124 C 265 122, 285 40, 315 40 C 330 40, 340 62, 348 86 L 348 125 L 230 125 Z" fill="rgba(76,168,133,0.28)" stroke="none"/>
      <line x1="315" y1="28" x2="315" y2="125" stroke-dasharray="3,3" opacity="0.6"/>
      <line x1="348" y1="86" x2="348" y2="125" stroke="#2c2925" stroke-width="1.1"/>
      <path d="M 230 124 C 265 122, 285 40, 315 40 C 345 40, 365 122, 400 124" fill="none" stroke="#4ca885" stroke-width="2"/>
      <text x="315" y="140" text-anchor="middle" stroke="none">0</text>
      <text x="348" y="140" text-anchor="middle" stroke="none">1.8</text>
      <text x="410" y="129" stroke="none" font-style="italic">z</text>
    </svg>`,
    stem: "<strong>In this question, you should state the parameters of any distributions you use.</strong><br><br>" +
      "<strong>(a)</strong> The number of hours worked per week by employees of Company $A$ follow a normal distribution with mean $40$ hours and standard deviation $\\alpha$ hours, while the number of hours worked per week by employees of Company $B$ follow a normal distribution with mean $40$ hours and standard deviation $\\beta$ hours, where $\\alpha > \\beta$.<br>" +
      "The left diagram shows the probability density function of $X$, where $X$ is the random variable denoting the number of hours worked per week by a randomly chosen employee of Company $A$.<br>" +
      "The probability that a randomly chosen employee of Company $A$ works less than $t$ hours per week is represented by the shaded area of the standard normal curve in the right diagram.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Sketch on the same diagram as $X$ the probability density function of $Y$, where $Y$ is the random variable denoting the number of hours worked per week by a randomly chosen employee of Company $B$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 145" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="15" y1="120" x2="235" y2="120" stroke-width="1.2"/>
          <polyline points="229,117 235,120 229,123" fill="none" stroke-width="1.2"/>
          <line x1="125" y1="18" x2="125" y2="120" stroke-dasharray="3,3" opacity="0.6"/>
          <!-- X: wider, lower peak -->
          <path d="M 22 117 C 65 115, 88 52, 125 52 C 162 52, 185 115, 228 117" fill="none" stroke="#4ca885" stroke-width="1.8"/>
          <!-- Y: narrower, taller peak (since beta < alpha) -->
          <path d="M 45 119 C 82 118, 102 25, 125 25 C 148 25, 168 118, 205 119" fill="none" stroke="#cf5652" stroke-width="2"/>
          <text x="125" y="135" text-anchor="middle" stroke="none">40</text>
          <text x="200" y="106" stroke="none" font-style="italic" fill="#4ca885">X</text>
          <text x="103" y="34" stroke="none" font-style="italic" fill="#cf5652">Y</text>
        </svg>`,
        solution: "Both $X$ and $Y$ are symmetric bell curves centred at the same mean $40$. Since $\\beta < \\alpha$, the curve of $Y$ is <strong>taller and narrower</strong> than the curve of $X$."
      },
      {
        label: "(a)(ii)",
        marks: 1,
        prompt: "Write down an equation involving $t$ and $\\alpha$.",
        type: "self",
        solution: "Standardising $X \\sim \\mathrm{N}(40, \\alpha^2)$:<br>" +
          "$$\\frac{t - 40}{\\alpha} = 1.8 \\quad \\text{(or } t = 40 + 1.8\\alpha\\text{)}$$"
      },
      {
        label: "(a)(iii)",
        marks: 1,
        prompt: "Two employees of Company $A$ are randomly chosen. Find the probability that both employees work more than $t$ hours per week.",
        type: "auto",
        mode: "number",
        answer: "0.001290984",
        placeholder: "3 s.f.",
        solution: "$\\mathrm{P}(X > t) = \\mathrm{P}(Z > 1.8) = 0.035930$.<br>" +
          "Required probability $= [\\mathrm{P}(Z > 1.8)]^2 = (0.035930)^2 = 0.00129$ (3 s.f.)."
      },
      {
        label: "(a)(iv)",
        marks: 2,
        prompt: "Given that the probability that a randomly chosen employee of Company $B$ works more than $42$ hours per week is at least $0.25$, find the range of values of $\\beta$.",
        type: "self",
        solution: "$Y \\sim \\mathrm{N}(40, \\beta^2)$.<br>" +
          "$$\\mathrm{P}(Y > 42) \\ge 0.25 \\implies \\mathrm{P}\\left(Z > \\frac{42 - 40}{\\beta}\\right) \\ge 0.25$$" +
          "$$\\mathrm{P}\\left(Z > \\frac{2}{\\beta}\\right) \\ge 0.25 \\implies \\frac{2}{\\beta} \\le 0.67449$$" +
          "$$\\beta \\ge \\frac{2}{0.67449} = 2.9652 \\implies \\beta \\ge 2.97 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "A shop sells small and large bags of rice. The masses of small bags of rice are normally distributed with mean $1\\text{ kg}$ and standard deviation $0.16\\text{ kg}$. The masses of large bags of rice have mean $5\\text{ kg}$ and standard deviation $0.5\\text{ kg}$. The masses of the small and large bags of rice are independent of one another.<br>In a random sample of $300$ small bags of rice, find the expected number of bags that have a mass greater than $1.25\\text{ kg}$.",
        type: "auto",
        mode: "number",
        answer: "17.72554",
        placeholder: "3 s.f.",
        solution: "Let $S \\sim \\mathrm{N}(1, 0.16^2)$ be the mass of a small bag of rice.<br>" +
          "$\\mathrm{P}(S > 1.25) = 0.059085$.<br>" +
          "Let $W \\sim \\mathrm{B}(300, 0.059085)$ be the number of small bags with mass greater than $1.25\\text{ kg}$.<br>" +
          "$\\mathrm{E}(W) = 300 \\times 0.059085 = 17.7$ (3 s.f.)."
      },
      {
        label: "(b)(ii)",
        marks: 4,
        prompt: "Find the probability that the total mass of $5$ randomly chosen small bags of rice exceeds the mean mass of $30$ randomly chosen large bags of rice by more than $0.25\\text{ kg}$.",
        type: "auto",
        mode: "number",
        answer: "0.249178",
        placeholder: "3 s.f.",
        solution: "Let $L$ be the mass of a large bag of rice. Since $n = 30$ is large, by the Central Limit Theorem:<br>" +
          "$\\bar{L} \\sim \\mathrm{N}\\left(5, \\frac{0.5^2}{30}\\right)$ approximately.<br>" +
          "Let $W = S_1 + S_2 + S_3 + S_4 + S_5 - \\bar{L}$.<br>" +
          "$\\mathrm{E}(W) = 5(1) - 5 = 0$.<br>" +
          "$\\mathrm{Var}(W) = 5(0.16^2) + \\frac{0.5^2}{30} = \\frac{409}{3000} \\approx 0.13633$.<br>" +
          "So $W \\sim \\mathrm{N}\\left(0, \\frac{409}{3000}\\right)$ approximately.<br>" +
          "Required probability $= \\mathrm{P}(W > 0.25) = 0.249$ (3 s.f.)."
      }
    ]
  },
  {
    id: "SAJC-2025-P2-Q11",
    year: 2025,
    school: "SAJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "A beverage company produces bottled orange juice, claiming that the mean vitamin C content in each $250\\text{ ml}$ bottle is $50\\text{ mg}$. It is known that the vitamin C content is normally distributed with a standard deviation of $2\\text{ mg}$.<br>Due to feedback from consumers, the quality control manager wants to test, at the $4\\%$ level of significance, whether the mean vitamin C content is, in fact, $50\\text{ mg}$. He randomly samples $12$ bottles and measures the vitamin C content.",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "State the hypotheses and find the critical region for this test.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 135" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="108" x2="260" y2="108" stroke-width="1.2"/>
          <!-- Left tail shaded -->
          <path d="M 28 107 C 48 106, 62 102, 74 92 L 74 108 Z" fill="rgba(207,86,82,0.35)" stroke="none"/>
          <!-- Right tail shaded -->
          <path d="M 206 92 C 218 102, 232 106, 252 107 L 252 108 L 206 108 Z" fill="rgba(207,86,82,0.35)" stroke="none"/>
          <!-- Bell curve -->
          <path d="M 28 107 C 68 105, 95 25, 140 25 C 185 25, 212 105, 252 107" fill="none" stroke="#4ca885" stroke-width="2"/>
          <line x1="140" y1="104" x2="140" y2="112" stroke-width="1"/>
          <line x1="74" y1="92" x2="74" y2="112" stroke="#cf5652" stroke-width="1.2"/>
          <line x1="206" y1="92" x2="206" y2="112" stroke="#cf5652" stroke-width="1.2"/>
          <text x="140" y="126" text-anchor="middle" stroke="none">50</text>
          <text x="74" y="126" text-anchor="middle" stroke="none" fill="#cf5652">48.814</text>
          <text x="206" y="126" text-anchor="middle" stroke="none" fill="#cf5652">51.186</text>
          <text x="50" y="88" text-anchor="middle" stroke="none" font-size="10" fill="#cf5652">0.02</text>
          <text x="230" y="88" text-anchor="middle" stroke="none" font-size="10" fill="#cf5652">0.02</text>
        </svg>`,
        solution: "Let $X\\text{ mg}$ be the vitamin C content in a randomly chosen bottle and $\\mu\\text{ mg}$ be the population mean.<br>" +
          "$\\mathrm{H}_0 : \\mu = 50$<br>" +
          "$\\mathrm{H}_1 : \\mu \\ne 50$<br>" +
          "Two-tailed test at $4\\%$ level of significance ($2\\%$ in each tail).<br>" +
          "Under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(50, \\frac{2^2}{12}\\right)$.<br>" +
          "Using GC (invNorm): critical values are $48.814$ and $51.186$.<br>" +
          "Critical region: $\\bar{x} \\le 48.8$ or $\\bar{x} \\ge 51.2$ (3 s.f.)."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "Recently, the company launched a new \"Vitamin Boost\" orange juice line, advertised to contain an average of $60\\text{ mg}$ of vitamin C content per $250\\text{ ml}$ bottle. After some complaints that the juice is too sour, the manager suspects that the vitamin C content might be higher than advertised. He decides to conduct a hypothesis test to investigate. This time, he randomly samples $30$ bottles from the new juice line.<br>Explain why the manager takes a sample of $30$ bottles for this test when he only took a sample of $12$ bottles in his earlier test.",
        type: "self",
        solution: "In the earlier test, the vitamin C content was known to follow a normal distribution, so $\\bar{X}$ is exactly normally distributed regardless of sample size.<br>" +
          "For the new \"Vitamin Boost\" line, the population distribution of vitamin C content is unknown. Hence a large sample size ($n \\ge 30$) is needed so that the Central Limit Theorem can be applied to approximate the distribution of the sample mean $\\bar{Y}$ by a normal distribution."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "The vitamin C content, $y\\text{ mg}$, in the sample of $30$ bottles is summarised as follows:<br>$$\\sum y = 1865, \\quad \\sum y^2 = 116275$$Calculate unbiased estimates of the population mean and variance for the vitamin C content in the bottles of the new juice line.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "1865/30", placeholder: "Exact or 3 s.f." },
          { label: "Variance =", answer: "2005/174", placeholder: "Exact or 3 s.f." }
        ],
        solution: "Unbiased estimate of population mean:<br>" +
          "$$\\bar{y} = \\frac{1865}{30} = 62.167 \\approx 62.2 \\text{ (3 s.f.)}$$" +
          "Unbiased estimate of population variance:<br>" +
          "$$s^2 = \\frac{1}{29}\\left(116275 - \\frac{1865^2}{30}\\right) = \\frac{2005}{174} = 11.523 \\approx 11.5 \\text{ (3 s.f.)}$$"
      },
      {
        label: "(iv)",
        marks: 4,
        prompt: "At the $5\\%$ level of significance, test whether the mean vitamin C content in the bottles of the new juice line is greater than $60\\text{ mg}$. Clearly state your hypotheses and define any symbols you use.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 135" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="108" x2="260" y2="108" stroke-width="1.2"/>
          <!-- Right tail shaded (0.05) -->
          <path d="M 196 84 C 210 98, 228 106, 252 107 L 252 108 L 196 108 Z" fill="rgba(207,86,82,0.35)" stroke="none"/>
          <path d="M 28 107 C 68 105, 95 25, 140 25 C 185 25, 212 105, 252 107" fill="none" stroke="#4ca885" stroke-width="2"/>
          <line x1="140" y1="104" x2="140" y2="112" stroke-width="1"/>
          <line x1="196" y1="84" x2="196" y2="112" stroke="#cf5652" stroke-width="1.2"/>
          <text x="140" y="126" text-anchor="middle" stroke="none">60</text>
          <text x="196" y="126" text-anchor="middle" stroke="none" fill="#cf5652">61.019</text>
          <text x="224" y="84" text-anchor="middle" stroke="none" font-size="10" fill="#cf5652">0.05</text>
        </svg>`,
        solution: "Let $Y\\text{ mg}$ be the vitamin C content in a randomly chosen bottle of \"Vitamin Boost\" orange juice, and let $\\mu_Y\\text{ mg}$ be the population mean vitamin C content.<br>" +
          "$\\mathrm{H}_0 : \\mu_Y = 60$<br>" +
          "$\\mathrm{H}_1 : \\mu_Y > 60$<br>" +
          "One-tailed test at $5\\%$ level of significance.<br>" +
          "Under $\\mathrm{H}_0$, since $n = 30$ is large, by the Central Limit Theorem, $\\bar{Y} \\sim \\mathrm{N}\\left(60, \\frac{11.523}{30}\\right)$ approximately.<br>" +
          "Using GC, $p\\text{-value} = \\mathrm{P}(\\bar{Y} \\ge 62.167) = 0.000236$ ($2.36 \\times 10^{-4}$, 3 s.f.).<br>" +
          "Since $p\\text{-value} = 0.000236 < 0.05$, we reject $\\mathrm{H}_0$.<br>" +
          "Therefore, there is sufficient evidence at the $5\\%$ level of significance to conclude that the mean vitamin C content in the bottles of the new juice line is greater than $60\\text{ mg}$."
      }
    ]
  }
]);
