window.registerQuestions([
  // ==================== Q1 ====================
  {
    id: "RVHS-2025-P1-Q1",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}(x) = ax^3 + bx^2 + cx + d$ where $a, b, c$ and $d$ are real numbers.",
    parts: [
      {
        label: "(Full)",
        marks: 4,
        prompt: "Given that $4 + \\mathrm{i}$ and $-1$ are roots of $\\mathrm{f}(x) = 0$, find $b, c$ and $d$ in terms of $a$.",
        type: "self",
        solution:
          "<strong>Method 1 (Conjugate Root Theorem):</strong><br>" +
          "Since all the coefficients of $\\mathrm{f}(x)$ are real, $4 + \\mathrm{i}$ and $4 - \\mathrm{i}$ are conjugate roots of $\\mathrm{f}(x) = 0$.<br>" +
          "$$\\mathrm{f}(x) = a\\left[x - (4+\\mathrm{i})\\right]\\left[x - (4-\\mathrm{i})\\right](x + 1)$$" +
          "$$= a\\left[(x - 4)^2 - \\mathrm{i}^2\\right](x + 1) = a(x^2 - 8x + 17)(x + 1)$$" +
          "$$= a(x^3 - 7x^2 + 9x + 17) = ax^3 - 7ax^2 + 9ax + 17a$$" +
          "Comparing coefficients: $b = -7a$, $c = 9a$, $d = 17a$.<br><br>" +
          "<strong>Method 2 (Substitution):</strong><br>" +
          "$\\mathrm{f}(-1) = 0 \\implies -a + b - c + d = 0 \\implies b - c + d = a \\quad (1)$<br>" +
          "$\\mathrm{f}(4+\\mathrm{i}) = 0 \\implies a(52 + 47\\mathrm{i}) + b(15 + 8\\mathrm{i}) + c(4 + \\mathrm{i}) + d = 0$<br>" +
          "Comparing real parts: $15b + 4c + d = -52a \\quad (2)$<br>" +
          "Comparing imaginary parts: $8b + c = -47a \\quad (3)$<br>" +
          "Solving $(1), (2), (3)$ gives $b = -7a$, $c = 9a$ and $d = 17a$."
      }
    ]
  },

  // ==================== Q2 ====================
  {
    id: "RVHS-2025-P1-Q2",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(i)",
        marks: 3,
        prompt: "Without using a calculator, solve the inequality $\\frac{9}{1 - x^2} < \\frac{x + 5}{x + 1}$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 360 80" width="360" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <line x1="20" y1="45" x2="340" y2="45" stroke-width="1.5"/>
          <polyline points="334,41 340,45 334,49" fill="none" stroke-width="1.5"/>
          <circle cx="95" cy="45" r="4" fill="#fff" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="175" cy="45" r="4" fill="#fff" stroke="#4a8fe7" stroke-width="2"/>
          <circle cx="255" cy="45" r="4" fill="#fff" stroke="#4a8fe7" stroke-width="2"/>
          <text x="95" y="65" text-anchor="middle" stroke="none">-2</text>
          <text x="175" y="65" text-anchor="middle" stroke="none">-1</text>
          <text x="255" y="65" text-anchor="middle" stroke="none">1</text>
          <text x="55" y="30" text-anchor="middle" stroke="none" fill="#4a8fe7" font-weight="bold">−</text>
          <text x="135" y="30" text-anchor="middle" stroke="none" fill="#4a8fe7" font-weight="bold">−</text>
          <text x="215" y="30" text-anchor="middle" stroke="none" fill="#cf5652" font-weight="bold">+</text>
          <text x="300" y="30" text-anchor="middle" stroke="none" fill="#4a8fe7" font-weight="bold">−</text>
        </svg>`,
        solution:
          "$$\\frac{9}{(1-x)(1+x)} - \\frac{x+5}{x+1} < 0$$" +
          "$$\\frac{9 - (x+5)(1-x)}{(x+1)(1-x)} < 0$$" +
          "$$\\frac{9 - (-x^2 - 4x + 5)}{(x+1)(1-x)} < 0 \\implies \\frac{x^2 + 4x + 4}{(x+1)(1-x)} < 0$$" +
          "$$\\frac{(x+2)^2}{(x+1)(1-x)} < 0$$" +
          "Testing signs around critical values $x = -2, -1, 1$ (note $(x+2)^2 \\ge 0$, zero at $x = -2$):<br>" +
          "$x < -1$ or $x > 1$, with $x \\ne -2$<br>" +
          "(Equivalently, $x < -2$ or $-2 < x < -1$ or $x > 1$.)"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Hence solve $\\frac{9}{1 - \\mathrm{e}^{2x}} < \\frac{\\mathrm{e}^x + 5}{\\mathrm{e}^x + 1}$.",
        type: "self",
        solution:
          "Replace $x$ with $\\mathrm{e}^x$ in the result from part (i):<br>" +
          "$\\mathrm{e}^x < -1$ (no solution since $\\mathrm{e}^x > 0$ for all real $x$)<br>" +
          "or $\\mathrm{e}^x > 1 \\implies x > 0$.<br>" +
          "(Note that $\\mathrm{e}^x \\ne -2$ is always satisfied since $\\mathrm{e}^x > 0$.)<br>" +
          "Thus $x > 0$."
      }
    ]
  },

  // ==================== Q3 ====================
  {
    id: "RVHS-2025-P1-Q3",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong>",
    parts: [
      {
        label: "(Full)",
        marks: 6,
        prompt: "Find the roots of the equation $z^2 - (1 + 2\\mathrm{i})z + 1 + 7\\mathrm{i} = 0$, giving your answers in the cartesian form $a + \\mathrm{i}b$.",
        type: "auto",
        mode: "complex-list",
        answer: ["2-i", "-1+3i"],
        exactRequired: true,
        placeholder: "Separate complex roots with a comma",
        solution:
          "Using the quadratic formula with $a = 1$, $b = -(1+2\\mathrm{i})$, $c = 1+7\\mathrm{i}$:<br>" +
          "$$z = \\frac{1 + 2\\mathrm{i} \\pm \\sqrt{(-1-2\\mathrm{i})^2 - 4(1)(1+7\\mathrm{i})}}{2} = \\frac{1 + 2\\mathrm{i} \\pm \\sqrt{4\\mathrm{i} - 3 - 4 - 28\\mathrm{i}}}{2} = \\frac{1 + 2\\mathrm{i} \\pm \\sqrt{-7 - 24\\mathrm{i}}}{2}$$" +
          "Let $\\sqrt{-7 - 24\\mathrm{i}} = x + \\mathrm{i}y$ where $x, y$ are real.<br>" +
          "Squaring both sides: $-7 - 24\\mathrm{i} = (x^2 - y^2) + 2xy\\mathrm{i}$.<br>" +
          "Comparing real and imaginary parts: $x^2 - y^2 = -7$ and $2xy = -24 \\implies x = -\\frac{12}{y}$.<br>" +
          "Substituting: $\\frac{144}{y^2} - y^2 = -7 \\implies y^4 - 7y^2 - 144 = 0 \\implies (y^2 - 16)(y^2 + 9) = 0$.<br>" +
          "Since $y$ is real, $y^2 = 16 \\implies y = \\pm 4$.<br>" +
          "When $y = 4$, $x = -3$; when $y = -4$, $x = 3$.<br>" +
          "So the square roots of $-7 - 24\\mathrm{i}$ are $3 - 4\\mathrm{i}$ and $-3 + 4\\mathrm{i}$.<br>" +
          "Hence:<br>" +
          "$$z = \\frac{1 + 2\\mathrm{i} + (3 - 4\\mathrm{i})}{2} = 2 - \\mathrm{i} \\quad \\text{or} \\quad z = \\frac{1 + 2\\mathrm{i} - (3 - 4\\mathrm{i})}{2} = -1 + 3\\mathrm{i}$$"
      }
    ]
  },

  // ==================== Q4 ====================
  {
    id: "RVHS-2025-P1-Q4",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "It is given that $\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = 1 - \\frac{1}{n+1}$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find $\\sum_{r=1}^{N} \\frac{1}{(r+1)(r+2)}$ in terms of $N$.",
        type: "auto",
        mode: "expr",
        vars: { N: [1, 2, 5] },
        answer: "1/2 - 1/(N+2)",
        placeholder: "Expression in terms of N",
        solution:
          "Let $k = r + 1$. When $r = 1$, $k = 2$; when $r = N$, $k = N + 1$.<br>" +
          "$$\\sum_{r=1}^{N} \\frac{1}{(r+1)(r+2)} = \\sum_{k=2}^{N+1} \\frac{1}{k(k+1)} = \\sum_{k=1}^{N+1} \\frac{1}{k(k+1)} - \\frac{1}{1(2)}$$" +
          "$$= \\left(1 - \\frac{1}{(N+1)+1}\\right) - \\frac{1}{2} = \\frac{1}{2} - \\frac{1}{N+2}$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "It is given that $$8 \\sum_{r=k+1}^{\\infty} \\frac{1}{r(r+1)} = \\sum_{r=1}^{k} \\frac{1}{r(r+1)}.$$ Find the value of $k$.",
        type: "auto",
        mode: "number",
        answer: "8",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Rewrite the left-hand side:<br>" +
          "$$8\\left(\\sum_{r=1}^{\\infty} \\frac{1}{r(r+1)} - \\sum_{r=1}^{k} \\frac{1}{r(r+1)}\\right) = \\sum_{r=1}^{k} \\frac{1}{r(r+1)}$$" +
          "$$8 \\sum_{r=1}^{\\infty} \\frac{1}{r(r+1)} = 9 \\sum_{r=1}^{k} \\frac{1}{r(r+1)}$$" +
          "As $n$ → ∞, $\\frac{1}{n+1}$ → $0$, so $\\sum_{r=1}^{\\infty} \\frac{1}{r(r+1)} = 1$.<br>" +
          "Therefore:<br>" +
          "$$8(1) = 9\\left(1 - \\frac{1}{k+1}\\right) \\implies 1 - \\frac{1}{k+1} = \\frac{8}{9} \\implies \\frac{1}{k+1} = \\frac{1}{9} \\implies k = 8$$"
      }
    ]
  },

  // ==================== Q5 ====================
  {
    id: "RVHS-2025-P1-Q5",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Integration"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find $\\int \\frac{x}{\\sqrt{16 - x^4}}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0, 1, 1.5],
        answer: "1/2 * asin(x^2 / 4)",
        placeholder: "Indefinite integral in terms of x (omit + C)",
        solution:
          "$$\\int \\frac{x}{\\sqrt{16 - x^4}}\\,\\mathrm{d}x = \\frac{1}{2} \\int \\frac{2x}{\\sqrt{4^2 - (x^2)^2}}\\,\\mathrm{d}x = \\frac{1}{2}\\sin^{-1}\\left(\\frac{x^2}{4}\\right) + C$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Find $\\int \\frac{x}{2}\\sin^{-1}\\left(\\frac{x^2}{4}\\right)\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [0, 1, 1.5],
        answer: "(x^2/4)*asin(x^2/4) + (1/4)*sqrt(16 - x^4)",
        placeholder: "Indefinite integral in terms of x (omit + C)",
        solution:
          "Using integration by parts, let $u = \\frac{1}{2}\\sin^{-1}\\left(\\frac{x^2}{4}\\right)$ and $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = x$.<br>" +
          "From part (a), $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{x}{\\sqrt{16 - x^4}}$, and $v = \\frac{1}{2}x^2$.<br>" +
          "$$\\int \\frac{x}{2}\\sin^{-1}\\left(\\frac{x^2}{4}\\right)\\,\\mathrm{d}x = \\frac{x^2}{4}\\sin^{-1}\\left(\\frac{x^2}{4}\\right) - \\int \\frac{x^2}{2} \\cdot \\frac{x}{\\sqrt{16 - x^4}}\\,\\mathrm{d}x$$" +
          "$$= \\frac{x^2}{4}\\sin^{-1}\\left(\\frac{x^2}{4}\\right) - \\frac{1}{2}\\left(-\\frac{1}{4}\\right)\\int \\frac{-4x^3}{\\sqrt{16 - x^4}}\\,\\mathrm{d}x$$" +
          "$$= \\frac{x^2}{4}\\sin^{-1}\\left(\\frac{x^2}{4}\\right) + \\frac{1}{8}\\left(2\\sqrt{16 - x^4}\\right) + C$$" +
          "$$= \\frac{x^2}{4}\\sin^{-1}\\left(\\frac{x^2}{4}\\right) + \\frac{1}{4}\\sqrt{16 - x^4} + C$$"
      }
    ]
  },

  // ==================== Q6 ====================
  {
    id: "RVHS-2025-P1-Q6",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Vectors"],
    stem: "With respect to the origin $O$, the points $A$, $B$ and $C$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively. $O$, $A$, $B$ and $C$ are non-coplanar. The point $M$ is the mid-point of $AC$ and $p$ denotes the plane $OAB$.",
    parts: [
      {
        label: "(Intro)",
        marks: 1,
        prompt: "For any vectors $\\mathbf{m}$ and $\\mathbf{n}$, explain why $\\mathbf{m}\\cdot(\\mathbf{m}\\times\\mathbf{n}) = 0$.",
        type: "self",
        solution:
          "$\\mathbf{m}\\times\\mathbf{n}$ is a vector perpendicular to both $\\mathbf{m}$ and $\\mathbf{n}$.<br>" +
          "Since $\\mathbf{m}$ is perpendicular to $\\mathbf{m}\\times\\mathbf{n}$, their scalar product is zero: $\\mathbf{m}\\cdot(\\mathbf{m}\\times\\mathbf{n}) = 0$."
      },
      {
        label: "(a)",
        marks: 2,
        prompt: "The point $R$ is such that $MR$ is perpendicular to $p$. Show that $R$ lies on a line $l$ with equation $\\mathbf{r} = k(\\mathbf{a} + \\mathbf{c}) + \\lambda(\\mathbf{a}\\times\\mathbf{b})$, $\\lambda \\in \\mathbb{R}$, where $k$ is a constant to be determined.",
        type: "self",
        solution:
          "Since $M$ is the mid-point of $AC$, the position vector of $M$ is $\\mathbf{m} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{c})$.<br>" +
          "Since $p$ is the plane $OAB$, $\\mathbf{a}\\times\\mathbf{b}$ is normal to $p$.<br>" +
          "Since $MR$ is perpendicular to $p$, $MR$ is parallel to $\\mathbf{a}\\times\\mathbf{b}$, so $\\mathbf{r} - \\mathbf{m} = \\lambda(\\mathbf{a}\\times\\mathbf{b})$ for some real $\\lambda$.<br>" +
          "Therefore, $R$ lies on the line $l$ with equation:<br>" +
          "$$\\mathbf{r} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{c}) + \\lambda(\\mathbf{a}\\times\\mathbf{b}), \\quad \\lambda \\in \\mathbb{R}$$<br>" +
          "Hence $k = \\frac{1}{2}$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Given that $\\mathbf{a}$ and $\\mathbf{b}$ are unit vectors perpendicular to each other, $\\mathbf{a}\\cdot\\mathbf{c} = -2$ and $\\mathbf{b}\\cdot\\mathbf{c} = 4$, find in terms of $\\mathbf{a}$ and $\\mathbf{b}$, the position vector of the point of intersection between $l$ and $p$.",
        type: "auto",
        mode: "expr",
        vars: { a: [1, 2, 5], b: [3, -1, 4] },
        answer: "-1/2*a + 2*b",
        placeholder: "Expression in terms of a and b",
        solution:
          "The plane $p$ has equation $\\mathbf{r} = \\alpha\\mathbf{a} + \\beta\\mathbf{b}$, where $\\alpha, \\beta \\in \\mathbb{R}$.<br>" +
          "At the point of intersection of $l$ and $p$:<br>" +
          "$$\\frac{1}{2}(\\mathbf{a} + \\mathbf{c}) + \\lambda(\\mathbf{a}\\times\\mathbf{b}) = \\alpha\\mathbf{a} + \\beta\\mathbf{b} \\quad (*)$$" +
          "Taking scalar product of $(*)$ with $\\mathbf{a}$ (using $|\\mathbf{a}| = 1$, $\\mathbf{a}\\cdot\\mathbf{b} = 0$, and $\\mathbf{a}\\cdot(\\mathbf{a}\\times\\mathbf{b}) = 0$):<br>" +
          "$$\\frac{1}{2}(1) + \\frac{1}{2}(-2) + 0 = \\alpha(1) + 0 \\implies \\alpha = -\\frac{1}{2}$$" +
          "Taking scalar product of $(*)$ with $\\mathbf{b}$ (using $|\\mathbf{b}| = 1$, $\\mathbf{b}\\cdot\\mathbf{a} = 0$, and $\\mathbf{b}\\cdot(\\mathbf{a}\\times\\mathbf{b}) = 0$):<br>" +
          "$$0 + \\frac{1}{2}(4) + 0 = 0 + \\beta(1) \\implies \\beta = 2$$" +
          "Therefore, the position vector of the point of intersection is $-\\frac{1}{2}\\mathbf{a} + 2\\mathbf{b}$."
      }
    ]
  },

  // ==================== Q7 ====================
  {
    id: "RVHS-2025-P1-Q7",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 260 220" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <line x1="25" y1="185" x2="235" y2="185" stroke-width="1.5"/>
      <polyline points="229,181 235,185 229,189" fill="none" stroke-width="1.5"/>
      <text x="232" y="200" stroke="none" font-style="italic">x</text>
      <line x1="65" y1="210" x2="65" y2="15" stroke-width="1.5"/>
      <polyline points="61,21 65,15 69,21" fill="none" stroke-width="1.5"/>
      <text x="73" y="22" stroke="none" font-style="italic">y</text>
      <text x="53" y="199" stroke="none" font-style="italic">O</text>
      <path d="M 65 73 L 72.5 64.9 L 80 57.5 L 87.5 51.0 L 95 45.4 L 102.5 40.9 L 110 37.6 L 117.5 35.7 L 125 35.2 L 132.5 36.1 L 140 38.6 L 147.5 42.9 L 155 49.4 L 162.5 58.6 L 170 72.0 L 175 87.3 L 177 101.0 L 175 113.0 L 170 124.2 L 162.5 135.4 L 155 144.4 L 147.5 152.1 L 140 158.9 L 132.5 164.7 L 125 169.8 L 117.5 174.1 L 110 177.7 L 102.5 180.6 L 95 182.8 L 87.5 184.2 L 80 184.9 L 72.5 185.0 L 65 185.0" fill="none" stroke="#cf5652" stroke-width="2.2"/>
    </svg>`,
    stem: "A curve $C$ has equation $x^2 + y^2 - 4y = xy$, where $x \\ge 0$.<br>The diagram above shows the curve $C$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $(2y - x - 4)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y - 2x$.",
        type: "self",
        solution:
          "Differentiating $x^2 + y^2 - 4y = xy$ implicitly with respect to $x$:<br>" +
          "$$2x + 2y\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 4\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y + x\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$" +
          "$$(2y - x - 4)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y - 2x \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "$M$ is a point on $C$ with coordinates $(x, y)$ and $N$ is a fixed point $(3, 0)$. The area of triangle $OMN$ is denoted by $A$. Find $A$ in terms of $y$.",
        type: "auto",
        mode: "expr",
        vars: { y: [1, 2, 4] },
        answer: "1.5*y",
        placeholder: "Expression in terms of y",
        solution:
          "With base $ON = 3$ along the $x$-axis and perpendicular height $y$:<br>" +
          "$$A = \\frac{1}{2}(3)(y) = \\frac{3}{2}y = 1.5y$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{d}A}{\\mathrm{d}x} = \\frac{3}{2}\\left(\\frac{y - 2x}{2y - x - 4}\\right)$.",
        type: "self",
        solution:
          "Using the chain rule and part (a):<br>" +
          "$$\\frac{\\mathrm{d}A}{\\mathrm{d}x} = \\frac{\\mathrm{d}A}{\\mathrm{d}y}\\cdot\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3}{2}\\cdot\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3}{2}\\left(\\frac{y - 2x}{2y - x - 4}\\right) \\quad (\\text{shown})$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Hence find the exact value of $x$ for which $A$ is a maximum. (You do not need to show that $A$ is a maximum for the value of $x$ found.)",
        type: "auto",
        mode: "number",
        answer: "8/3",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "At a stationary point, $\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 0 \\implies y - 2x = 0 \\implies y = 2x$.<br>" +
          "Substituting $y = 2x$ into the equation of $C$:<br>" +
          "$$x^2 + (2x)^2 - 4(2x) = x(2x)$$" +
          "$$5x^2 - 8x = 2x^2 \\implies 3x^2 - 8x = 0 \\implies x(3x - 8) = 0$$" +
          "Thus $x = 0$ (rejected since $y = 0 \\implies A = 0$, a minimum) or $x = \\frac{8}{3}$."
      }
    ]
  },

  // ==================== Q8 ====================
  {
    id: "RVHS-2025-P1-Q8",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Differentiation", "Maclaurin Series"],
    stem: "It is given that $(1 + 9x^2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3y$, and the curve $y = \\mathrm{f}(x)$ passes through the $y$-axis at $(0, \\mathrm{e}^2)$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $(1 + 9x^2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + (18x - 3)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$.",
        type: "self",
        solution:
          "Differentiating $(1 + 9x^2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3y$ with respect to $x$:<br>" +
          "$$(1 + 9x^2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 18x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$" +
          "$$(1 + 9x^2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + (18x - 3)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\quad (\\text{shown})$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "Find the Maclaurin series for $y$, up to and including the term in $x^3$, giving the exact coefficients for each term.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.2, 0.5, 1] },
        answer: "e^2 + 3*e^2*x + (9*e^2/2)*x^2 - (9*e^2/2)*x^3",
        placeholder: "Polynomial in x up to x^3",
        solution:
          "Differentiating $(1 + 9x^2)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + (18x - 3)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$ with respect to $x$:<br>" +
          "$$(1 + 9x^2)\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} + 18x\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + (18x - 3)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 18\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$$" +
          "When $x = 0$:<br>" +
          "$y = \\mathrm{e}^2$<br>" +
          "$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3\\mathrm{e}^2$<br>" +
          "$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 3(3\\mathrm{e}^2) = 9\\mathrm{e}^2$<br>" +
          "$\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} - 3(9\\mathrm{e}^2) + 18(3\\mathrm{e}^2) = 0 \\implies \\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} = -27\\mathrm{e}^2$<br>" +
          "Hence the Maclaurin series for $y$ is:<br>" +
          "$$y = \\mathrm{e}^2 + 3\\mathrm{e}^2 x + \\frac{9\\mathrm{e}^2}{2!}x^2 - \\frac{27\\mathrm{e}^2}{3!}x^3 + \\cdots = \\mathrm{e}^2 + 3\\mathrm{e}^2 x + \\frac{9\\mathrm{e}^2}{2}x^2 - \\frac{9\\mathrm{e}^2}{2}x^3 + \\cdots$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Given that $\\ln y = 2 + \\tan^{-1}(3x)$, find the Maclaurin series for $\\mathrm{e}^{\\tan^{-1}(3x)}$, up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        vars: { x: [0.2, 0.5, 1] },
        answer: "1 + 3*x + (9/2)*x^2 - (9/2)*x^3",
        placeholder: "Polynomial in x up to x^3",
        solution:
          "Since $\\ln y = 2 + \\tan^{-1}(3x)$, we have $y = \\mathrm{e}^{2 + \\tan^{-1}(3x)} = \\mathrm{e}^2 \\mathrm{e}^{\\tan^{-1}(3x)}$.<br>" +
          "Dividing the Maclaurin series from part (b) by $\\mathrm{e}^2$:<br>" +
          "$$\\mathrm{e}^{\\tan^{-1}(3x)} = \\frac{y}{\\mathrm{e}^2} = 1 + 3x + \\frac{9}{2}x^2 - \\frac{9}{2}x^3 + \\cdots$$"
      }
    ]
  },

  // ==================== Q9 ====================
  {
    id: "RVHS-2025-P1-Q9",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "A curve $C$ has equation $y = ax + b + \\frac{b - 2a}{x + 2}$, where $a$ and $b$ are real constants such that $a > 0$, $a \\ne \\frac{1}{2}b$ and $x \\ne -2$.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Given that $C$ has stationary points, use differentiation to find the relationship between $a$ and $b$.",
        type: "self",
        solution:
          "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = a - \\frac{b - 2a}{(x + 2)^2}$$" +
          "At stationary points, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>" +
          "$$a = \\frac{b - 2a}{(x + 2)^2} \\implies (x + 2)^2 = \\frac{b - 2a}{a}$$" +
          "Since $x \\ne -2$, $(x + 2)^2 > 0$ for all valid $x$.<br>" +
          "Hence $\\frac{b - 2a}{a} > 0$. Since $a > 0$ (and $a \\ne \\frac{1}{2}b$), we have $b - 2a > 0$, i.e. $b > 2a$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "It is now given that $a = 1$ and $b = 3$. Prove algebraically that $y$ cannot lie between $-1$ and $3$.",
        type: "self",
        solution:
          "With $a = 1$ and $b = 3$, $y = x + 3 + \\frac{1}{x + 2}$.<br>" +
          "Multiplying by $(x + 2)$:<br>" +
          "$$y(x + 2) = (x + 3)(x + 2) + 1 \\implies xy + 2y = x^2 + 5x + 7$$" +
          "$$x^2 + (5 - y)x + (7 - 2y) = 0$$" +
          "For no real solutions $x$, the discriminant is negative ($b^2 - 4ac < 0$):<br>" +
          "$$(5 - y)^2 - 4(1)(7 - 2y) < 0$$" +
          "$$25 - 10y + y^2 - 28 + 8y < 0 \\implies y^2 - 2y - 3 < 0 \\implies (y + 1)(y - 3) < 0$$" +
          "$$-1 < y < 3$$" +
          "Hence $y$ cannot lie between $-1$ and $3$ (shown)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Sketch $C$, stating the equations of any asymptotes and the coordinates of any axial intercepts and turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 280" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Axes: origin at (180, 175), scale 22px per unit -->
          <line x1="20" y1="175" x2="300" y2="175" stroke-width="1.5"/>
          <polyline points="294,171 300,175 294,179" fill="none" stroke-width="1.5"/>
          <text x="295" y="190" stroke="none" font-style="italic">x</text>
          <line x1="180" y1="265" x2="180" y2="15" stroke-width="1.5"/>
          <polyline points="176,21 180,15 184,21" fill="none" stroke-width="1.5"/>
          <text x="188" y="22" stroke="none" font-style="italic">y</text>
          <text x="168" y="189" stroke="none" font-style="italic">O</text>
          <!-- Vertical asymptote x = -2 -> x_px = 180 - 44 = 136 -->
          <line x1="136" y1="18" x2="136" y2="262" stroke="#4ca885" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8"/>
          <text x="140" y="258" stroke="none" fill="#4ca885">x = -2</text>
          <!-- Oblique asymptote y = x + 3: at x=-7, y=-4 -> (26,263); at x=4, y=7 -> (268,21) -->
          <line x1="26" y1="263" x2="268" y2="21" stroke="#4ca885" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8"/>
          <text x="242" y="55" stroke="none" fill="#4ca885">y = x + 3</text>
          <!-- Upper branch x > -2: y = x + 3 + 1/(x+2) -->
          <path d="M 140 28 C 143 85, 148 109, 158 109 C 168 109, 180 98, 202 80 L 265 20" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
          <!-- Lower branch x < -2: y = x + 3 + 1/(x+2) -->
          <path d="M 32 252 L 95 198 C 107 192, 114 197, 114 197 C 122 197, 129 212, 132 260" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
          <!-- Turning points: (-1,3) -> (158,109); (-3,-1) -> (114,197) -->
          <circle cx="158" cy="109" r="3" fill="#cf5652" stroke="none"/>
          <text x="155" y="125" text-anchor="middle" stroke="none" font-size="10">(-1, 3)</text>
          <circle cx="114" cy="197" r="3" fill="#cf5652" stroke="none"/>
          <text x="98" y="213" text-anchor="middle" stroke="none" font-size="10">(-3, -1)</text>
          <!-- y-intercept: (0, 3.5) -> (180, 98) -->
          <circle cx="180" cy="98" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="206" y="102" stroke="none" font-size="10">(0, 3.5)</text>
        </svg>`,
        solution:
          "Key features of $C: y = x + 3 + \\frac{1}{x+2}$:<br>" +
          "• Vertical asymptote: $x = -2$<br>" +
          "• Oblique asymptote: $y = x + 3$<br>" +
          "• Minimum turning point: $(-1, 3)$<br>" +
          "• Maximum turning point: $(-3, -1)$<br>" +
          "• $y$-intercept: $(0, 3.5)$ (or $(0, \\frac{7}{2})$); no $x$-intercepts."
      }
    ]
  },

  // ==================== Q10 ====================
  {
    id: "RVHS-2025-P1-Q10",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Functions"],
    diagramSvg: `<svg viewBox="0 0 320 210" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
      <text x="160" y="14" text-anchor="middle" stroke="none" font-size="10" fill="#666">Graph of y = g(x) for part (d)</text>
      <!-- Axes: origin at (105, 130) -->
      <line x1="25" y1="130" x2="300" y2="130" stroke-width="1.3"/>
      <polyline points="294,126 300,130 294,134" fill="none" stroke-width="1.3"/>
      <text x="294" y="122" stroke="none" font-style="italic">x</text>
      <line x1="105" y1="198" x2="105" y2="22" stroke-width="1.3"/>
      <polyline points="101,28 105,22 109,28" fill="none" stroke-width="1.3"/>
      <text x="112" y="30" stroke="none" font-style="italic">y</text>
      <!-- Horizontal asymptote y = b at y=48 -->
      <line x1="60" y1="48" x2="295" y2="48" stroke="#2c2925" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.65"/>
      <text x="54" y="52" text-anchor="end" stroke="none" font-style="italic">y = b</text>
      <!-- Curve y = g(x) from (-1,2) -> (80,90) to min (2,a) -> (155,172) then up to asymptote y=48 -->
      <path d="M 80 90 C 98 118, 128 172, 155 172 C 185 172, 205 60, 290 52" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
      <circle cx="80" cy="90" r="3.5" fill="#4a8fe7" stroke="none"/>
      <text x="72" y="82" text-anchor="end" stroke="none">(-1, 2)</text>
      <circle cx="155" cy="172" r="3.5" fill="#4a8fe7" stroke="none"/>
      <text x="155" y="190" text-anchor="middle" stroke="none">(2, a)</text>
      <text x="218" y="102" stroke="none" font-style="italic">y = g(x)</text>
    </svg>`,
    stem: "The function $\\mathrm{f}$ is defined by $\\mathrm{f}: x \\mapsto \\frac{1}{(x+2)^2}$, $x \\in \\mathbb{R},\\; x \\ne -2$.<br>The domain of $\\mathrm{f}$ is further restricted to be $x > a$, where $a$ is an integer.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State the least value of $a$ such that the function $\\mathrm{f}^{-1}$ exists.",
        type: "auto",
        mode: "number",
        answer: "-2",
        exactRequired: true,
        placeholder: "Integer value",
        solution:
          "Since $y = \\frac{1}{(x+2)^2}$ is symmetric about $x = -2$ and strictly decreasing for $x > -2$, the least integer value of $a$ for $\\mathrm{f}$ to be one-one (so $\\mathrm{f}^{-1}$ exists) is $a = -2$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Hence find $\\mathrm{f}^{-1}(x)$ and state its domain.",
        type: "self",
        solution:
          "Let $y = \\frac{1}{(x+2)^2}$. Then $(x+2)^2 = \\frac{1}{y} \\implies x + 2 = \\pm\\frac{1}{\\sqrt{y}}$.<br>" +
          "Since $x > -2$, we have $x + 2 > 0$, so $x + 2 = \\frac{1}{\\sqrt{y}} \\implies x = \\frac{1}{\\sqrt{y}} - 2$.<br>" +
          "Hence $\\mathrm{f}^{-1}(x) = \\frac{1}{\\sqrt{x}} - 2$, with domain $D_{\\mathrm{f}^{-1}} = R_{\\mathrm{f}} = (0, \\infty)$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Sketch the graphs of $y = \\mathrm{f}(x)$ and $y = \\mathrm{f}^{-1}(x)$ on the same diagram, giving the equations of any asymptotes and the coordinates of the points where the curves meet the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 280" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (120, 160), scale 30px per unit -->
          <line x1="20" y1="160" x2="285" y2="160" stroke-width="1.4"/>
          <polyline points="279,156 285,160 279,164" fill="none" stroke-width="1.4"/>
          <text x="278" y="150" stroke="none" font-style="italic">x</text>
          <line x1="120" y1="265" x2="120" y2="15" stroke-width="1.4"/>
          <polyline points="116,21 120,15 124,21" fill="none" stroke-width="1.4"/>
          <text x="127" y="24" stroke="none" font-style="italic">y</text>
          <!-- y = x line -->
          <line x1="30" y1="250" x2="250" y2="30" stroke="#2c2925" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
          <text x="235" y="34" stroke="none" font-style="italic" font-size="10">y = x</text>
          <!-- Asymptotes x = -2 (x=60) and y = -2 (y=220) -->
          <line x1="60" y1="18" x2="60" y2="260" stroke="#4ca885" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.7"/>
          <text x="24" y="32" stroke="none" fill="#4ca885" font-size="10">x = -2</text>
          <line x1="20" y1="220" x2="280" y2="220" stroke="#4ca885" stroke-width="1.1" stroke-dasharray="4,3" opacity="0.7"/>
          <text x="22" y="214" stroke="none" fill="#4ca885" font-size="10">y = -2</text>
          <!-- y = f(x) = 1/(x+2)^2 for x > -2: passes (0, 0.25) -> (120, 152.5) -->
          <path d="M 74 22 C 77 95, 86 135, 120 152.5 C 155 158, 210 159, 275 159.5" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
          <text x="64" y="102" stroke="none" fill="#4a8fe7" font-size="10">y = f(x)</text>
          <!-- y = f^-1(x) = 1/sqrt(x) - 2 for x > 0: passes (0.25, 0) -> (127.5, 160) -->
          <path d="M 120.5 22 C 121 90, 122 135, 127.5 160 C 136 185, 170 205, 275 212" fill="none" stroke="#cf5652" stroke-width="2.2"/>
          <text x="134" y="75" stroke="none" fill="#cf5652" font-size="10">y = f⁻¹(x)</text>
          <!-- Intercepts -->
          <circle cx="120" cy="152.5" r="2.8" fill="#4a8fe7" stroke="none"/>
          <text x="72" y="151" stroke="none" font-size="9.5">(0, 0.25)</text>
          <circle cx="127.5" cy="160" r="2.8" fill="#cf5652" stroke="none"/>
          <text x="130" y="175" stroke="none" font-size="9.5">(0.25, 0)</text>
        </svg>`,
        solution:
          "• $y = \\mathrm{f}(x)$: vertical asymptote $x = -2$, horizontal asymptote $y = 0$, $y$-intercept $(0, 0.25)$.<br>" +
          "• $y = \\mathrm{f}^{-1}(x)$: vertical asymptote $x = 0$, horizontal asymptote $y = -2$, $x$-intercept $(0.25, 0)$.<br>" +
          "• The two curves are reflections of each other in the line $y = x$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "The function $\\mathrm{g}$ is defined on the domain $[-1, \\infty)$. The graph of $y = \\mathrm{g}(x)$ has minimum point at $(2, a)$ and the equation of its asymptote is $y = b$ as shown in the diagram above.<br>Determine if $\\mathrm{gf}$ exists. If it exists, find its range.",
        type: "self",
        solution:
          "$R_{\\mathrm{f}} = (0, \\infty)$ and $D_{\\mathrm{g}} = [-1, \\infty)$.<br>" +
          "Since $R_{\\mathrm{f}} \\subseteq D_{\\mathrm{g}}$, the composite function $\\mathrm{gf}$ exists.<br>" +
          "Mapping: $D_{\\mathrm{gf}} = (-2, \\infty)$ → via $\\mathrm{f}$ to $(0, \\infty)$ → via $\\mathrm{g}$ to $[a, b)$.<br>" +
          "Since $x = 2 \\in (0, \\infty)$ gives the minimum value $a$ and as $x$ → ∞, $\\mathrm{g}(x)$ approaches $b$ from below, the range of $\\mathrm{gf}$ is $R_{\\mathrm{gf}} = [a, b)$."
      }
    ]
  },

  // ==================== Q11 ====================
  {
    id: "RVHS-2025-P1-Q11",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Differentiation", "Integration"],
    stem: "The curve $C$ has cartesian equation $y = \\sqrt{4 - 2x^2}$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the curve $C$, labelling the exact coordinates of any axial intercepts.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (140, 150), scale 55px per unit -->
          <line x1="25" y1="150" x2="260" y2="150" stroke-width="1.5"/>
          <polyline points="254,146 260,150 254,154" fill="none" stroke-width="1.5"/>
          <text x="256" y="166" stroke="none" font-style="italic">x</text>
          <line x1="140" y1="185" x2="140" y2="18" stroke-width="1.5"/>
          <polyline points="136,24 140,18 144,24" fill="none" stroke-width="1.5"/>
          <text x="148" y="25" stroke="none" font-style="italic">y</text>
          <text x="128" y="164" stroke="none" font-style="italic">O</text>
          <!-- Upper half of ellipse: rx = 55*sqrt(2) = 77.78, ry = 55*2 = 110 -->
          <path d="M 62.2 150 A 77.8 110 0 0 1 217.8 150" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
          <circle cx="62.2" cy="150" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="58" y="168" text-anchor="middle" stroke="none">(-√2, 0)</text>
          <circle cx="217.8" cy="150" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="220" y="168" text-anchor="middle" stroke="none">(√2, 0)</text>
          <circle cx="140" cy="40" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="160" y="38" stroke="none">(0, 2)</text>
        </svg>`,
        solution:
          "Squaring gives $\\frac{x^2}{2} + \\frac{y^2}{4} = 1$ with $y \\ge 0$, which is the upper half of an ellipse centred at the origin.<br>" +
          "Axial intercepts: $(-\\sqrt{2}, 0)$, $(\\sqrt{2}, 0)$, and $(0, 2)$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the equation of the tangent to $C$ at the point $P(1, \\sqrt{2})$, leaving your answer in exact form.",
        type: "self",
        solution:
          "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{2}(4 - 2x^2)^{-\\frac{1}{2}}(-4x) = \\frac{-2x}{\\sqrt{4 - 2x^2}}$$" +
          "When $x = 1$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{-2}{\\sqrt{2}} = -\\sqrt{2}$.<br>" +
          "Equation of tangent at $P(1, \\sqrt{2})$:<br>" +
          "$$y - \\sqrt{2} = -\\sqrt{2}(x - 1) \\implies y = -\\sqrt{2}x + 2\\sqrt{2}$$"
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "Using the substitution $x = \\sqrt{2}\\sin\\theta$, find the exact value of $\\int_{1}^{\\sqrt{2}} \\sqrt{4 - 2x^2}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "number",
        answer: "sqrt(2)*(pi/4 - 1/2)",
        exactRequired: true,
        placeholder: "Exact value",
        solution:
          "Let $x = \\sqrt{2}\\sin\\theta$, so $\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = \\sqrt{2}\\cos\\theta$.<br>" +
          "When $x = 1$, $\\theta = \\frac{\\pi}{4}$; when $x = \\sqrt{2}$, $\\theta = \\frac{\\pi}{2}$.<br>" +
          "$$\\int_{1}^{\\sqrt{2}} \\sqrt{4 - 2x^2}\\,\\mathrm{d}x = \\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}} \\sqrt{4 - 4\\sin^2\\theta}\\cdot \\sqrt{2}\\cos\\theta\\,\\mathrm{d}\\theta$$" +
          "$$= \\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}} 2\\sqrt{2}\\cos^2\\theta\\,\\mathrm{d}\\theta = \\sqrt{2}\\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}} (1 + \\cos 2\\theta)\\,\\mathrm{d}\\theta$$" +
          "$$= \\sqrt{2}\\left[\\theta + \\frac{1}{2}\\sin 2\\theta\\right]_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}} = \\sqrt{2}\\left(\\frac{\\pi}{2} + 0 - \\frac{\\pi}{4} - \\frac{1}{2}\\right) = \\sqrt{2}\\left(\\frac{\\pi}{4} - \\frac{1}{2}\\right)$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Hence, find the exact value of the area of the region bounded by $C$, the tangent to $C$ at $P$, and the $x$-axis.",
        type: "auto",
        mode: "number",
        answer: "sqrt(2) - sqrt(2)*pi/4",
        exactRequired: true,
        placeholder: "Exact value",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (105, 160), scale 65px per unit -->
          <line x1="15" y1="160" x2="265" y2="160" stroke-width="1.4"/>
          <polyline points="259,156 265,160 259,164" fill="none" stroke-width="1.4"/>
          <text x="260" y="175" stroke="none" font-style="italic">x</text>
          <line x1="105" y1="190" x2="105" y2="15" stroke-width="1.4"/>
          <polyline points="101,21 105,15 109,21" fill="none" stroke-width="1.4"/>
          <text x="112" y="22" stroke="none" font-style="italic">y</text>
          <!-- Shaded region between P(1,sqrt2)->(170,68.1), tangent x-int (2,0)->(235,160), curve x-int (sqrt2,0)->(196.9,160) -->
          <path d="M 170 68.1 L 235 160 L 196.9 160 A 91.9 130 0 0 0 170 68.1 Z" fill="rgba(91,155,213,0.28)" stroke="none"/>
          <!-- Upper half ellipse: rx=91.92, ry=130 -->
          <path d="M 13.1 160 A 91.9 130 0 0 1 196.9 160" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
          <!-- Tangent line from (0.6, 1.98)->(144,31.3) to (2.15, -0.21)->(244.8,173.8) -->
          <line x1="140" y1="25.6" x2="245" y2="174.1" stroke="#cf5652" stroke-width="1.8"/>
          <!-- Dashed line x=1 -->
          <line x1="170" y1="68.1" x2="170" y2="160" stroke="#2c2925" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
          <circle cx="170" cy="68.1" r="3" fill="#cf5652" stroke="none"/>
          <text x="180" y="65" stroke="none" font-size="10">P(1, √2)</text>
          <text x="170" y="175" text-anchor="middle" stroke="none" font-size="10">1</text>
          <text x="197" y="175" text-anchor="middle" stroke="none" font-size="10">√2</text>
          <text x="235" y="175" text-anchor="middle" stroke="none" font-size="10">2</text>
        </svg>`,
        solution:
          "The tangent $y = -\\sqrt{2}x + 2\\sqrt{2}$ meets the $x$-axis at $x = 2$.<br>" +
          "The area of the right-angled triangle under the tangent from $x = 1$ to $x = 2$ is $\\frac{1}{2}(2 - 1)(\\sqrt{2}) = \\frac{\\sqrt{2}}{2}$.<br>" +
          "Subtracting the area under $C$ from $x = 1$ to $x = \\sqrt{2}$ (found in part (c)):<br>" +
          "$$\\text{Area} = \\frac{\\sqrt{2}}{2} - \\sqrt{2}\\left(\\frac{\\pi}{4} - \\frac{1}{2}\\right) = \\sqrt{2} - \\frac{\\sqrt{2}}{4}\\pi \\text{ units}^2$$"
      }
    ]
  },

  // ==================== Q12 ====================
  {
    id: "RVHS-2025-P1-Q12",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "The curve $C$ is defined by the parametric equations $x = 6t - 5$ and $y = 2t^2 + 1$, where $t \\ge \\frac{5}{6}$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Sketch the curve $C$, labelling the exact coordinates of any axial intercept(s).",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 210" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (75, 175) -->
          <line x1="25" y1="175" x2="240" y2="175" stroke-width="1.5"/>
          <polyline points="234,171 240,175 234,179" fill="none" stroke-width="1.5"/>
          <text x="236" y="191" stroke="none" font-style="italic">x</text>
          <line x1="75" y1="198" x2="75" y2="15" stroke-width="1.5"/>
          <polyline points="71,21 75,15 79,21" fill="none" stroke-width="1.5"/>
          <text x="83" y="23" stroke="none" font-style="italic">y</text>
          <text x="63" y="189" stroke="none" font-style="italic">O</text>
          <!-- Parabola y = (x+5)^2/18 + 1 for x >= 0: starts at (0, 43/18=2.39) -> (75, 140) -->
          <path d="M 75 140 Q 150 112, 215 24" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
          <circle cx="75" cy="140" r="3.5" fill="#4a8fe7" stroke="none"/>
          <text x="68" y="143" text-anchor="end" stroke="none">(0, 43/18)</text>
        </svg>`,
        solution:
          "Since $t \\ge \\frac{5}{6}$, $x = 6t - 5 \\ge 0$.<br>" +
          "When $t = \\frac{5}{6}$, $x = 0$ and $y = 2\\left(\\frac{5}{6}\\right)^2 + 1 = \\frac{43}{18}$.<br>" +
          "Eliminating $t$: $y = \\frac{1}{18}(x+5)^2 + 1$ for $x \\ge 0$, which is an increasing concave-up curve starting at the $y$-intercept $\\left(0, \\frac{43}{18}\\right)$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the equation of the normal to $C$ at the point $P$ where $t = 1$.",
        type: "self",
        solution:
          "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 6$, $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 4t \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{4t}{6} = \\frac{2}{3}t$.<br>" +
          "When $t = 1$: $x = 1$, $y = 3$, and $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2}{3}$.<br>" +
          "Gradient of normal at $P$ is $-\\frac{3}{2}$.<br>" +
          "Equation of normal:<br>" +
          "$$y - 3 = -\\frac{3}{2}(x - 1) \\implies y = -\\frac{3}{2}x + \\frac{9}{2}$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the acute angle between the normal to $C$ at the point $P$ where $t = 1$ and the tangent to $C$ at the point $M$ where $t = 3$.",
        type: "auto",
        mode: "number",
        answer: "1.0516502125",
        answers: ["1.0516502125", "60.2551187"],
        placeholder: "Angle in radians (3 s.f.) or degrees (1 d.p.)",
        solution:
          "Gradient of normal at $P$ ($t = 1$) is $m_1 = -\\frac{3}{2}$.<br>" +
          "Gradient of tangent at $M$ ($t = 3$) is $m_2 = \\frac{2}{3}(3) = 2$.<br>" +
          "Angle between the two lines:<br>" +
          "$$\\theta_1 + \\theta_2 = \\tan^{-1}(2) - \\tan^{-1}\\left(-\\frac{3}{2}\\right) = 2.08994 \\text{ rad} \\quad (119.74^\\circ)$$" +
          "Required acute angle $= \\pi - 2.08994 = 1.05\\text{ rad}$ (or $180^\\circ - 119.74^\\circ = 60.3^\\circ$)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The curve $C$ is translated $5$ units in the positive $x$-direction and translated $3$ units in the negative $y$-direction, to form the curve $D$. Find the equation of $D$ in parametric form.",
        type: "self",
        solution:
          "Replacing $x$ with $x - 5$ and $y$ with $y + 3$:<br>" +
          "$x - 5 = 6t - 5 \\implies x = 6t$<br>" +
          "$y + 3 = 2t^2 + 1 \\implies y = 2t^2 - 2$<br>" +
          "Thus $D$ has parametric equations $x = 6t$, $y = 2t^2 - 2$, where $t \\ge \\frac{5}{6}$."
      },
      {
        label: "(e)",
        marks: 4,
        prompt: "The curve $E$ is defined by the parametric equations $x = 7u$ and $y = \\frac{9}{u}$, where $u \\ne 0$.<br>Show that at the point of intersection of the curves $C$ and $E$, $6t^3 - 5t^2 + 3t - 34 = 0$. Deduce that there is only one point of intersection and find the coordinates of this point.",
        type: "self",
        solution:
          "Equating $x$-coordinates: $6t - 5 = 7u \\implies u = \\frac{6t - 5}{7}$.<br>" +
          "Equating $y$-coordinates: $2t^2 + 1 = \\frac{9}{u} = \\frac{63}{6t - 5}$.<br>" +
          "$$(2t^2 + 1)(6t - 5) = 63 \\implies 12t^3 - 10t^2 + 6t - 5 = 63$$" +
          "$$12t^3 - 10t^2 + 6t - 68 = 0 \\implies 6t^3 - 5t^2 + 3t - 34 = 0 \\quad (\\text{shown})$$" +
          "Factorising (since $t = 2$ is a root):<br>" +
          "$$(t - 2)(6t^2 + 7t + 17) = 0$$" +
          "For $6t^2 + 7t + 17 = 0$, the discriminant is $7^2 - 4(6)(17) = -359 < 0$, so there are no real roots.<br>" +
          "Therefore $t = 2$ (which satisfies $t \\ge \\frac{5}{6}$) is the only real root, so there is only one point of intersection.<br>" +
          "When $t = 2$: $x = 6(2) - 5 = 7$ and $y = 2(2)^2 + 1 = 9$.<br>" +
          "The point of intersection is $(7, 9)$."
      }
    ]
  },

  // ==================== Q13 ====================
  {
    id: "RVHS-2025-P1-Q13",
    year: 2025,
    school: "RVHS",
    paper: "2025 Prelim Paper 1",
    qNum: "Q13",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "A cafe roasts its own coffee beans and packages them to be sold. The amount of roasted coffee beans remaining in the cafe at time $t$ days is denoted by $x$ kg. The cafe produces roasted coffee beans at a fixed rate of $10$ kg/day, and sells the roasted coffee beans at a rate proportional to $x^2$ kg/day.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Given that there is no change in the amount of roasted coffee beans remaining in the cafe when there is $5$ kg of beans remaining, show that $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 10 - \\frac{2}{5}x^2$. Find the general solution of this differential equation. (You do not have to make $x$ the subject.)",
        type: "self",
        solution:
          "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 10 - kx^2$ for some constant $k$.<br>" +
          "When $x = 5$, $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 0 \\implies 0 = 10 - 25k \\implies k = \\frac{2}{5}$.<br>" +
          "Hence $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 10 - \\frac{2}{5}x^2$ (shown).<br><br>" +
          "Separating variables:<br>" +
          "$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -\\frac{2}{5}(x^2 - 25) \\implies \\int \\frac{1}{x^2 - 25}\\,\\mathrm{d}x = \\int -\\frac{2}{5}\\,\\mathrm{d}t$$" +
          "$$\\frac{1}{10}\\ln\\left|\\frac{x - 5}{x + 5}\\right| = -\\frac{2}{5}t + C$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Due to improvement in roasting capabilities of the cafe, it is now able to produce roasted coffee beans at the rate of $3x$ kg/day, and sells the roasted coffee beans at a rate proportional to $x^2$ kg/day.<br>Given that the amount of roasted coffee beans is increasing at the rate of $6$ kg/day when the amount of roasted coffee beans remaining in the cafe is $6$ kg, write down the modified differential equation relating $\\frac{\\mathrm{d}x}{\\mathrm{d}t}$ and $x$.",
        type: "self",
        solution:
          "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 3x - kx^2$.<br>" +
          "When $x = 6$, $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 6 \\implies 6 = 3(6) - k(6)^2 \\implies 36k = 12 \\implies k = \\frac{1}{3}$.<br>" +
          "Therefore, $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 3x - \\frac{1}{3}x^2$."
      },
      {
        label: "(c)",
        marks: 6,
        prompt: "Given that the initial amount of roasted coffee beans in the cafe is $13.5$ kg, solve the differential equation in part (b), expressing $x$ in terms of $t$.<br>Deduce the amount of roasted coffee beans remaining in the cafe in the long run, and sketch the curve of $x$ against $t$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 200" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
          <!-- Origin at (55, 165) -->
          <line x1="35" y1="165" x2="255" y2="165" stroke-width="1.5"/>
          <polyline points="249,161 255,165 249,169" fill="none" stroke-width="1.5"/>
          <text x="236" y="182" stroke="none" font-style="italic">t (days)</text>
          <line x1="55" y1="185" x2="55" y2="18" stroke-width="1.5"/>
          <polyline points="51,24 55,18 59,24" fill="none" stroke-width="1.5"/>
          <text x="62" y="25" stroke="none" font-style="italic">x (kg)</text>
          <text x="44" y="179" stroke="none" font-style="italic">O</text>
          <!-- Asymptote x = 9 at y = 100 -->
          <line x1="55" y1="100" x2="245" y2="100" stroke="#4ca885" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.75"/>
          <text x="48" y="104" text-anchor="end" stroke="none">9</text>
          <!-- Curve x = 27/(3 - e^-3t) starting at (0, 13.5) -> (55, 55) approaching y = 100 -->
          <path d="M 55 55 C 78 82, 115 97, 240 99" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
          <circle cx="55" cy="55" r="3" fill="#4a8fe7" stroke="none"/>
          <text x="48" y="59" text-anchor="end" stroke="none">13.5</text>
        </svg>`,
        solution:
          "Separating variables for $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{1}{3}x(9 - x)$:<br>" +
          "$$\\int \\frac{1}{x(9-x)}\\,\\mathrm{d}x = \\int \\frac{1}{3}\\,\\mathrm{d}t \\implies \\int \\frac{1}{9}\\left(\\frac{1}{x} + \\frac{1}{9-x}\\right)\\mathrm{d}x = \\int \\frac{1}{3}\\,\\mathrm{d}t$$" +
          "$$\\int \\left(\\frac{1}{x} + \\frac{1}{9-x}\\right)\\mathrm{d}x = \\int 3\\,\\mathrm{d}t \\implies \\ln\\left|\\frac{x}{9-x}\\right| = 3t + C$$" +
          "$$\\frac{x}{9-x} = A\\mathrm{e}^{3t} \\implies x = \\frac{9A\\mathrm{e}^{3t}}{1 + A\\mathrm{e}^{3t}}$$" +
          "When $t = 0$, $x = 13.5$: $13.5 = \\frac{9A}{1+A} \\implies 13.5 + 13.5A = 9A \\implies A = -3$.<br>" +
          "Hence:<br>" +
          "$$x = \\frac{-27\\mathrm{e}^{3t}}{1 - 3\\mathrm{e}^{3t}} = \\frac{27\\mathrm{e}^{3t}}{3\\mathrm{e}^{3t} - 1} = \\frac{27}{3 - \\mathrm{e}^{-3t}}$$" +
          "As $t$ → ∞, $\\mathrm{e}^{-3t}$ → $0$, so $x$ → $\\frac{27}{3} = 9$.<br>" +
          "In the long run, the amount of roasted coffee beans remaining in the cafe stabilises at (approaches) $9$ kg."
      },
      {
        label: "(d)",
        marks: 1,
        prompt: "Based on the curve in part (c), explain in context why this might be favourable for the cafe owner.",
        type: "self",
        solution:
          "There are always roasted coffee beans left in the inventory for selling (never runs out of stock).<br>" +
          "<em>OR:</em> The amount of roasted coffee beans stabilises at a fixed value ($9$ kg), allowing the owner to plan for adequate storage capacity."
      }
    ]
  }
]);
