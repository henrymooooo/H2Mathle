window.registerQuestions([
  // ==================== RI 2026 PAPER 2: PURE MATH (Q1 - Q4) ====================
  {
    id: "RI-2026-P2-Q1",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Complex Numbers"],
    diagramSvg: `<svg viewBox="0 0 260 200" width="250" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="125" x2="242" y2="125" stroke-width="1.4"/><polyline points="236,121 242,125 236,129" fill="none" stroke-width="1.4"/><text x="246" y="129" stroke="none">Re</text><line x1="130" y1="190" x2="130" y2="15" stroke-width="1.4"/><polyline points="126,21 130,15 134,21" fill="none" stroke-width="1.4"/><text x="136" y="21" stroke="none">Im</text><text x="135" y="138" stroke="none" font-style="italic">O</text><polygon points="200,85 160,15 20,95 60,165" fill="rgba(91,155,213,0.12)" stroke="#4a8fe7" stroke-width="1.6"/><text x="206" y="88" stroke="none" font-style="italic">A</text><text x="164" y="16" stroke="none" font-style="italic">B</text><text x="10" y="96" stroke="none" font-style="italic">C</text><text x="50" y="178" stroke="none" font-style="italic">D</text></svg>`,
    stem: "Answer the following parts on complex numbers.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "The complex number $w$ is such that $w^2 + ww^* = 6 + 2\\sqrt{3}\\,\\mathrm{i}$. Find exactly the possible values of $w$, giving your answer in the form $x + \\mathrm{i}y$ where $x, y \\in \\mathbb{R}$.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["sqrt(3)+i", "-sqrt(3)-i"],
        placeholder: "Both values separated by a comma",
        solution: "Let $w = x + \\mathrm{i}y$. Then $(x+\\mathrm{i}y)^2 + (x+\\mathrm{i}y)(x-\\mathrm{i}y) = 2x^2 + 2\\mathrm{i}xy = 6 + 2\\sqrt{3}\\,\\mathrm{i}$.<br>Comparing real and imaginary parts: $2x^2 = 6 \\implies x = \\pm\\sqrt{3}$, and $2xy = 2\\sqrt{3} \\implies y = \\pm 1$.<br>Hence $w = \\sqrt{3} + \\mathrm{i}$ or $w = -\\sqrt{3} - \\mathrm{i}$."
      },
      {
        label: "(b) Find b",
        marks: 2,
        prompt: "Points $A$ and $D$ represent the complex numbers from (a), and points $B$ and $C$ represent $b$ and $c$. Given $ABCD$ is a rectangle with $AD = 2AB$ (see diagram), find $b$ in the form $u + \\mathrm{i}v$.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["(sqrt(3)-1)+(sqrt(3)+1)*i"],
        placeholder: "Complex number u + iv",
        solution: "From the diagram, $A$ represents $\\sqrt{3}+\\mathrm{i}$ and $D$ represents $-\\sqrt{3}-\\mathrm{i}$. Let $E$ be the midpoint of $BC$; rotating $OA$ anticlockwise by $\\frac{\\pi}{2}$ gives $E$: $\\mathrm{i}(\\sqrt{3}+\\mathrm{i}) = -1 + \\sqrt{3}\\,\\mathrm{i}$.<br>Hence $b = (\\sqrt{3}+\\mathrm{i}) + (-1+\\sqrt{3}\\,\\mathrm{i}) = (\\sqrt{3}-1) + (\\sqrt{3}+1)\\mathrm{i}$."
      },
      {
        label: "(b) Find c",
        marks: 1,
        prompt: "Find the complex number $c$ in the form $u + \\mathrm{i}v$.",
        type: "auto",
        mode: "complex-list",
        exactRequired: true,
        answer: ["(-sqrt(3)-1)+(sqrt(3)-1)*i"],
        placeholder: "Complex number u + iv",
        solution: "$c = (-\\sqrt{3}-\\mathrm{i}) + (-1+\\sqrt{3}\\,\\mathrm{i}) = (-\\sqrt{3}-1) + (\\sqrt{3}-1)\\mathrm{i}$."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "By finding $\\arg(b)$, find the <strong>exact</strong> value of $\\tan\\frac{5\\pi}{12}$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "2+sqrt(3)",
        placeholder: "Exact surd form",
        solution: "Since $OA = AB$, $\\angle BOA = \\frac{\\pi}{4}$. Also $\\arg(a) = \\tan^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) = \\frac{\\pi}{6}$.<br>Thus $\\arg(b) = \\frac{\\pi}{6} + \\frac{\\pi}{4} = \\frac{5\\pi}{12}$.<br>Hence $\\tan\\frac{5\\pi}{12} = \\frac{\\text{Im}(b)}{\\text{Re}(b)} = \\frac{\\sqrt{3}+1}{\\sqrt{3}-1} = 2 + \\sqrt{3}$."
      }
    ]
  },
  {
    id: "RI-2026-P2-Q2",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Integration"],
    stem: "Evaluate the following integrals.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find $\\int \\frac{2x+3}{x^2+2x-3}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "antiderivative",
        domainPoints: [2, 3, 5],
        answer: "3/4*ln(abs(x+3)) + 5/4*ln(abs(x-1))",
        placeholder: "Expression in x + c",
        solution: "$\\frac{2x+3}{(x+3)(x-1)} = \\frac{3}{4(x+3)} + \\frac{5}{4(x-1)}$.<br>Integrating: $\\frac{3}{4}\\ln|x+3| + \\frac{5}{4}\\ln|x-1| + c$."
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "Using the substitution $u = \\tan\\frac{x}{2}$, show that $\\int \\frac{1}{2+\\cos x}\\,\\mathrm{d}x = \\int \\frac{2}{3+u^2}\\,\\mathrm{d}u$.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{1}{2}\\sec^2\\frac{x}{2} = \\frac{1}{2}(1+u^2) \\implies \\mathrm{d}x = \\frac{2}{1+u^2}\\,\\mathrm{d}u$.<br>Using $\\cos x = 2\\cos^2\\frac{x}{2}-1 = \\frac{1-u^2}{1+u^2}$:<br>$\\int \\frac{1}{2+\\frac{1-u^2}{1+u^2}} \\cdot \\frac{2}{1+u^2}\\,\\mathrm{d}u = \\int \\frac{2}{3+u^2}\\,\\mathrm{d}u$ (shown)."
      },
      {
        label: "(b)(ii)",
        marks: 3,
        prompt: "Hence find the <strong>exact</strong> value of $\\int_0^{\\pi/2} \\frac{1}{2+\\cos x}\\,\\mathrm{d}x$.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "sqrt(3)*pi/9",
        placeholder: "Exact value",
        solution: "When $x = 0, u = 0$; when $x = \\frac{\\pi}{2}, u = 1$.<br>$\\int_0^1 \\frac{2}{3+u^2}\\,\\mathrm{d}u = 2\\left[\\frac{1}{\\sqrt{3}}\\tan^{-1}\\frac{u}{\\sqrt{3}}\\right]_0^1 = \\frac{2}{\\sqrt{3}}\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}\\pi}{9}$."
      }
    ]
  },
  {
    id: "RI-2026-P2-Q3",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Functions"],
    stem: "The function $\\mathrm{f}$ is given by $\\mathrm{f}: x \\mapsto a - \\mathrm{e}^{|x-a|}$, $x \\in \\mathbb{R}$, where $a$ is a positive constant. The range of $\\mathrm{f}$ is $(-\\infty, k]$, where $k > 0$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Find the range of values of $a$.",
        type: "self",
        solution: "Since $|x-a| \\ge 0$, $\\mathrm{e}^{|x-a|} \\ge 1 \\implies a - \\mathrm{e}^{|x-a|} \\le a - 1 = k$.<br>Since $k > 0$, $a - 1 > 0 \\implies a > 1$."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Show that $\\mathrm{f}^{-1}$ does not exist.",
        type: "self",
        solution: "Since $\\mathrm{f}(a+1) = \\mathrm{f}(a-1) = a - \\mathrm{e}$, $\\mathrm{f}$ is not one-one. Hence $\\mathrm{f}^{-1}$ does not exist."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "If the domain of $\\mathrm{f}$ is restricted to $(-\\infty, m]$, state the largest value of $m$ in terms of $a$ for which $\\mathrm{f}^{-1}$ exists.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { a: [2, 3, 5] },
        answer: "a",
        placeholder: "Expression in terms of a",
        solution: "Turning point/vertex is at $x = a$, so the largest $m = a$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Using your answer in (c), find $\\mathrm{f}^{-1}$ in similar form.",
        type: "self",
        solution: "For $x \\le a$, $y = a - \\mathrm{e}^{a-x} \\implies \\mathrm{e}^{a-x} = a - y \\implies x = a - \\ln(a-y)$.<br>$\\mathrm{f}^{-1}: x \\mapsto a - \\ln(a-x)$, $x \\le a - 1$."
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "The function $\\mathrm{g}$ is given by $\\mathrm{g}: x \\mapsto \\ln\\left(1 - \\frac{x}{a}\\right)$, $x < a$. Show that $\\mathrm{gf}$ exists and find the range of $\\mathrm{gf}$ in terms of $a$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 240 160" width="225" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20" y1="75" x2="225" y2="75" stroke-width="1.3"/><line x1="85" y1="150" x2="85" y2="12" stroke-width="1.3"/><line x1="165" y1="12" x2="165" y2="150" stroke-dasharray="4,3" stroke-width="1.1"/><text x="169" y="24" stroke="none" font-style="italic">x = a</text><path d="M 28 48 Q 75 68 85 75 Q 112 96 125 112" fill="none" stroke="#4a8fe7" stroke-width="2"/><path d="M 125 112 Q 145 134 156 148" fill="none" stroke="#4a8fe7" stroke-dasharray="3,3" stroke-width="1.4"/><circle cx="125" cy="112" r="2.8" fill="#4a8fe7"/><text x="129" y="110" stroke="none" font-size="10">(a−1, −ln a)</text></svg>`,
        solution: "$\\mathrm{R_f} = (-\\infty, a-1] \\subseteq (-\\infty, a) = \\mathrm{D_g}$, so $\\mathrm{gf}$ exists.<br>Mapping $( -\\infty, a-1 ]$ through $\\mathrm{g}$ gives $\\mathrm{g}(a-1) = \\ln(\\frac{1}{a}) = -\\ln a$.<br>Hence $\\mathrm{R_{gf}} = [-\\ln a, \\infty)$."
      }
    ]
  },
  {
    id: "RI-2026-P2-Q4",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Maclaurin Series"],
    stem: "<em>Do not use a calculator in answering this question.</em>",
    parts: [
      {
        label: "(a)(i)",
        marks: 2,
        prompt: "Curve $y = \\mathrm{f}(x)$ passes through the origin and has $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x+y}{1+xy}$. Show that $(1+xy)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + x\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + (y-1)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1$.",
        type: "self",
        solution: "$(1+xy)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = x + y$. Differentiating w.r.t. $x$:<br>$(1+xy)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\left(x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\right)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + \\frac{\\mathrm{d}y}{\\mathrm{d}x}$, which rearranges to $(1+xy)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + x\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + (y-1)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1$."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "By further differentiation of (a)(i), show $(1+xy)\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} + \\mathrm{p}(x)\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\left(\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right) + \\mathrm{q}(y)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + r\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 0$, determining $\\mathrm{p}(x)$, $\\mathrm{q}(y)$ and $r$.",
        type: "self",
        solution: "Differentiating again w.r.t. $x$ and collecting like terms gives:<br>$(1+xy)\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} + 3x\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\left(\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right) + (2y-1)\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 0$.<br>Thus $\\mathrm{p}(x) = 3x$, $\\mathrm{q}(y) = 2y - 1$, $r = 2$."
      },
      {
        label: "(a)(iii)",
        marks: 2,
        prompt: "Hence find the Maclaurin series for $y$ up to and including the term in $x^3$.",
        type: "auto",
        mode: "expr",
        exactRequired: true,
        vars: { x: [0.1, 0.2, 0.3] },
        answer: "x^2/2 + x^3/6",
        placeholder: "Exact polynomial in x",
        solution: "At $x=0, y=0$: $\\frac{\\mathrm{d}y}{\\mathrm{d}x}=0$, $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}=1$, $\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3}=1$.<br>Thus $y = \\frac{x^2}{2} + \\frac{x^3}{6} + \\dots$"
      },
      {
        label: "(b)(i)",
        marks: 3,
        prompt: "The equation $2\\sqrt{2}\\cos\\left(x - \\frac{\\pi}{4}\\right) + 3\\sin 2x - 3 = 0$ has a root $\\theta$ close to zero. Show that $\\theta^2 + a\\theta + b \\approx 0$, finding integers $a$ and $b$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "-8", exactRequired: true },
          { label: "b =", answer: "1", exactRequired: true }
        ],
        solution: "$2\\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}(\\cos x + \\sin x)\\right) + 3\\sin 2x - 3 = 0 \\implies 2(\\cos\\theta + \\sin\\theta) + 3\\sin 2\\theta - 3 = 0$.<br>Using small angle approximations: $2\\left(1 - \\frac{\\theta^2}{2} + \\theta\\right) + 3(2\\theta) - 3 \\approx 0 \\implies \\theta^2 - 8\\theta + 1 \\approx 0$, so $a = -8, b = 1$."
      },
      {
        label: "(b)(ii)",
        marks: 2,
        prompt: "Hence find an approximation for $\\theta$ in surd form.",
        type: "auto",
        mode: "number",
        exactRequired: true,
        answer: "4-sqrt(15)",
        placeholder: "Exact surd form",
        solution: "$\\theta \\approx \\frac{8 \\pm \\sqrt{60}}{2} = 4 \\pm \\sqrt{15}$. Since $\\theta$ is close to zero, $\\theta \\approx 4 - \\sqrt{15}$."
      }
    ]
  },

  // ==================== RI 2026 PAPER 2: STATISTICS (Q5 - Q10) ====================
  {
    id: "RI-2026-P2-Q5",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Discrete Random Variables"],
    stem: "A random variable $X$ has $\\mathrm{P}(X = x) = kx^2$ for $x = 1, 2, 3$; $\\mathrm{P}(X = x) = k(7-x)$ for $x = 4, 5, 6$; and $0$ otherwise ($k > 0$).",
    parts: [
      { label: "(a)", marks: 2, prompt: "Show that $k = \\frac{1}{20}$.", type: "self", solution: "$\\sum \\mathrm{P}(X=x) = k(1+4+9+3+2+1) = 20k = 1 \\implies k = \\frac{1}{20}$." },
      {
        label: "(b)", marks: 3, prompt: "Find the values of $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "E(X) =", answer: "3.2" }, { label: "Var(X) =", answer: "1.36" }],
        solution: "$\\mathrm{E}(X) = \\frac{1}{20}(1+8+27+12+10+6) = 3.2$.<br>$\\mathrm{E}(X^2) = \\frac{1}{20}(1+16+81+48+50+36) = 11.6$.<br>$\\mathrm{Var}(X) = 11.6 - 3.2^2 = 1.36$."
      },
      { label: "(c)", marks: 2, prompt: "$Y = 3X_1 - X_2$, where $X_1, X_2$ are independent observations of $X$. Find $\\mathrm{Var}(Y)$.", type: "auto", mode: "number", answer: "68/5", placeholder: "Exact or 3 s.f.", solution: "$\\mathrm{Var}(Y) = 3^2\\mathrm{Var}(X) + \\mathrm{Var}(X) = 10(1.36) = 13.6 = \\frac{68}{5}$." }
    ]
  },
  {
    id: "RI-2026-P2-Q6",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Permutations & Combinations"],
    stem: "A talent show involves $8$ performers ($3$ singers, $3$ dancers, $2$ musicians) for the opening act, and $12$ or $15$ performers for later acts.",
    parts: [
      { label: "(a)(i)", marks: 1, prompt: "The $8$ performers stand in a circle on stage. Find the number of arrangements if there are no restrictions.", type: "auto", mode: "number", exactRequired: true, answer: "5040", placeholder: "Integer", solution: "$(8-1)! = 7! = 5040$." },
      { label: "(a)(ii)", marks: 2, prompt: "Find the number of circular arrangements if all performers of the same role must stand together.", type: "auto", mode: "number", exactRequired: true, answer: "144", placeholder: "Integer", solution: "$(3-1)! \\times 3! \\times 3! \\times 2! = 144$." },
      { label: "(b)", marks: 2, prompt: "For the main performance, $12$ performers ($3$ singers, $5$ dancers, $4$ musicians) stand in a line such that no two musicians are adjacent. Find the number of arrangements.", type: "auto", mode: "number", exactRequired: true, answer: "121927680", placeholder: "Integer", solution: "Arrange $8$ non-musicians ($8!$), then choose $4$ of $9$ gaps and arrange $4$ musicians: $8! \\times {}^9C_4 \\times 4! = 121\\,927\\,680$." },
      { label: "(c)", marks: 3, prompt: "$7$ performers are selected from $15$ ($6$ singers, $5$ dancers, $4$ musicians) for the closing act. Find the number of selections with at least $2$ from each role.", type: "auto", mode: "number", exactRequired: true, answer: "2700", placeholder: "Integer", solution: "$(2,2,3): {}^6C_2{}^5C_2{}^4C_3 = 600$; $(2,3,2): 900$; $(3,2,2): 1200$. Total $= 2700$." }
    ]
  },
  {
    id: "RI-2026-P2-Q7",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "Time taken by Sports Recreational Club members for a $20\\text{ km}$ race is $\\mathrm{N}(105, 12^2)$ minutes.",
    parts: [
      { label: "(a)", marks: 1, prompt: "Find the probability a randomly chosen Sports Recreational Club member finishes in less than $100$ minutes.", type: "auto", mode: "number", answer: "0.33846", placeholder: "3 s.f.", solution: "$\\mathrm{P}(X < 100) = 0.338$ (3 s.f.)." },
      { label: "(b)", marks: 1, prompt: "Find the time exceeded by $10\\%$ of Sports Recreational Club members (in minutes).", type: "auto", mode: "number", answer: "120.379", placeholder: "3 s.f.", solution: "$\\mathrm{P}(X > t) = 0.1 \\implies t = 120.38 \\approx 120$ minutes (3 s.f.)." },
      {
        label: "(c)", marks: 4, prompt: "Swift Runners Club times follow $\\mathrm{N}(\\mu, \\sigma^2)$. $36\\%$ finished in $< 95$ minutes and $8\\%$ finished in $> 125$ minutes. Determine $\\mu$ and $\\sigma$.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "μ =", answer: "101.0977", placeholder: "3 s.f." }, { label: "σ =", answer: "17.0111", placeholder: "3 s.f." }],
        solution: "$\\frac{95-\\mu}{\\sigma} = -0.35846$, $\\frac{125-\\mu}{\\sigma} = 1.4051$. Solving gives $\\sigma = 17.011 \\approx 17.0$ and $\\mu = 101.10 \\approx 101$."
      },
      { label: "(d)", marks: 4, prompt: "Find the probability that the total running time of $2$ randomly chosen Swift Runners Club members is less than $1.8$ times that of a randomly chosen Sports Recreational Club member. (Also note the required assumption in the solution.)", type: "auto", mode: "number", answer: "0.3416", placeholder: "3 s.f.", solution: "$W = Y_1 + Y_2 - 1.8X \\sim \\mathrm{N}(13.2, 1045.3)$. $\\mathrm{P}(W < 0) = 0.342$ (3 s.f.).<br><strong>Assumption:</strong> The running time taken by a club member to complete the race is independent of the time taken by any other club member." }
    ]
  },
  {
    id: "RI-2026-P2-Q8",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "Light intensity $y$ (lux) at distance $x$ (cm) is recorded below:<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>10</td><td>15</td><td>20</td><td>30</td><td>40</td><td>50</td><td>70</td><td>100</td></tr><tr><th>$y$</th><td>112.2</td><td>60.1</td><td>42.5</td><td>28.8</td><td>24.2</td><td>22.0</td><td>20.1</td><td>19.2</td></tr></table></div>",
    parts: [
      {
        label: "(a)", marks: 3, prompt: "Sketch the scatter diagram for the data. Hence explain why $y = a + bx$ is likely to be inappropriate.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 380 220" width="355" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10" fill="#2c2925" stroke="#2c2925"><line x1="48" y1="196" x2="365" y2="196" stroke-width="1.4"/><polyline points="359,192 365,196 359,200" fill="none" stroke-width="1.4"/><line x1="50" y1="200" x2="50" y2="18" stroke-width="1.4"/><polyline points="46,24 50,18 54,24" fill="none" stroke-width="1.4"/><text x="369" y="200" stroke="none" font-style="italic" font-family="Georgia,serif">x</text><text x="42" y="22" stroke="none" font-style="italic" font-family="Georgia,serif">y</text><text x="80" y="210" text-anchor="middle" stroke="none">10</text><text x="350" y="210" text-anchor="middle" stroke="none">100</text><text x="44" y="177" text-anchor="end" stroke="none">19.2</text><text x="44" y="46" text-anchor="end" stroke="none">112.2</text><g stroke="#4ca885" stroke-width="1.7"><path d="M 76 38.9 L 84 46.9 M 84 38.9 L 76 46.9"/><path d="M 91 111.9 L 99 119.9 M 99 111.9 L 91 119.9"/><path d="M 106 136.5 L 114 144.5 M 114 136.5 L 106 144.5"/><path d="M 136 155.7 L 144 163.7 M 144 155.7 L 136 163.7"/><path d="M 166 162.1 L 174 170.1 M 174 162.1 L 166 170.1"/><path d="M 196 165.2 L 204 173.2 M 204 165.2 L 196 173.2"/><path d="M 256 167.9 L 264 175.9 M 264 167.9 L 256 175.9"/><path d="M 346 169.1 L 354 177.1 M 354 169.1 L 346 177.1"/></g></svg>`,
        solution: "From the scatter diagram, as $x$ increases, $y$ decreases at a decreasing rate, so a linear model $y = a + bx$ is inappropriate."
      },
      {
        label: "(b)", marks: 3, prompt: "Calculate $r$ for Model 1 ($y = c + \\frac{d}{x}$) and Model 2 ($y = e + f\\ln x$). (See solution for comparison explanation.)",
        type: "auto", mode: "multi-field",
        fields: [{ label: "r (y vs 1/x) =", answer: "0.97308", placeholder: "3 s.f." }, { label: "r (y vs ln x) =", answer: "-0.85879", placeholder: "3 s.f." }],
        solution: "$r_1 = 0.973$, $r_2 = -0.859$. Since $|r_1| > |r_2|$ ($|r_1|$ is closer to $1$), $y = c + \\frac{d}{x}$ has a stronger linear relationship and is more appropriate."
      },
      {
        label: "(c)", marks: 1, prompt: "Find the constants $c$ and $d$ of $y = c + \\frac{d}{x}$ to <strong>2 decimal places</strong>.",
        type: "auto", mode: "multi-field",
        fields: [{ label: "c =", answer: "0.86938", dp: 2, placeholder: "2 d.p." }, { label: "d =", answer: "1008.9551", dp: 2, placeholder: "2 d.p." }],
        solution: "$y = 0.87 + \\frac{1008.96}{x}$ (2 d.p.)."
      },
      { label: "(d) Estimate", marks: 1, prompt: "Estimate the light intensity (lux) when $x = 120$.", type: "auto", mode: "number", answers: ["9.2773", "9.2807"], placeholder: "3 s.f.", solution: "$y = 0.86938 + \\frac{1008.9551}{120} = 9.28\\text{ lux}$." },
      { label: "(d) Reliability & (e)-(f)", marks: 3, prompt: "Comment on the reliability of the estimate at $x=120$, state what $c$ represents in this context, and suggest a physical interpretation for $c$.", type: "self", solution: "<strong>(d)</strong> Unreliable because $x = 120$ lies outside the given range $[10, 100]$ (extrapolation).<br><strong>(e)</strong> $c = 0.87$ lux represents the theoretical light intensity measured when the sensor is very far from the light source ($x$ very large).<br><strong>(f)</strong> Ambient/background light in the environment or systematic sensor offset." }
    ]
  },
  {
    id: "RI-2026-P2-Q9",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Binomial Distribution", "Sampling & CLT"],
    stem: "An inspector randomly selects $30$ components for testing daily ($0.8\\%$ are defective).",
    parts: [
      { label: "(a)", marks: 2, prompt: "State, in context, two assumptions needed for the number of defective components found each day to be well-modelled by a binomial distribution.", type: "self", solution: "1. Probability of a component being defective is constant at $0.008$.<br>2. The event of a component being defective is independent of any other component being defective." },
      { label: "(b)", marks: 1, prompt: "Find the probability that at most $1$ component is found to be defective in a day.", type: "auto", mode: "number", answer: "0.97600", placeholder: "3 s.f.", solution: "$X \\sim \\mathrm{B}(30, 0.008) \\implies \\mathrm{P}(X \\le 1) = 0.976$ (3 s.f.)." },
      { label: "(c)", marks: 2, prompt: "Find the probability that the first defective component is the $4$th tested and a total of $3$ defective components are found in a day.", type: "auto", mode: "number", answer: "0.00013396", placeholder: "3 s.f.", solution: "$[(0.992)^3(0.008)] \\times {}^{26}C_2(0.008)^2(0.992)^{24} = 0.000134$ (3 s.f.)." },
      { label: "(d)", marks: 2, prompt: "Given the inspector finds at least $1$ defective component in a day, find the probability she finds less than $3$ defective components.", type: "auto", mode: "number", answer: "0.99174", placeholder: "3 s.f.", solution: "$\\frac{\\mathrm{P}(1\\le X\\le 2)}{1 - \\mathrm{P}(X=0)} = 0.992$ (3 s.f.)." },
      { label: "(e)", marks: 2, prompt: "Find the probability that in a $5$-day working week, at most $1$ component is found defective on more than $3$ days.", type: "auto", mode: "number", answer: "0.99451", placeholder: "3 s.f.", solution: "$Y \\sim \\mathrm{B}(5, 0.97600) \\implies \\mathrm{P}(Y > 3) = 1 - \\mathrm{P}(Y \\le 3) = 0.995$ (3 s.f.)." },
      { label: "(f)", marks: 3, prompt: "$5\\%$ of memory chips are defective; $100$ chips are tested daily. Estimate the probability that the average number of defective memory chips found on $50$ randomly chosen days is between $4.5$ and $5.5$.", type: "auto", mode: "number", answer: "0.89524", placeholder: "3 s.f.", solution: "$W \\sim \\mathrm{B}(100, 0.05)$ has $\\mathrm{E}(W)=5, \\mathrm{Var}(W)=4.75$.<br>By CLT ($n=50$ large), $\\bar{W} \\sim \\mathrm{N}(5, \\frac{4.75}{50})$ approx. $\\mathrm{P}(4.5 \\le \\bar{W} \\le 5.5) = 0.895$ (3 s.f.)." }
    ]
  },
  {
    id: "RI-2026-P2-Q10",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "Bus waiting time $X$ minutes has $\\sigma = 1.2$ and claimed mean $6.5$ minutes. A random sample of $20$ waiting times has mean $\\bar{x}$.",
    parts: [
      { label: "(a)(i)", marks: 4, prompt: "Given $\\bar{x} = 6.9$, test at $5\\%$ significance level whether the mean waiting time differs from $6.5$ minutes, stating a necessary assumption.", type: "self", solution: "Assume $X$ is normally distributed. $\\mathrm{H}_0: \\mu = 6.5$, $\\mathrm{H}_1: \\mu \\ne 6.5$.<br>$\\bar{X} \\sim \\mathrm{N}(6.5, \\frac{1.2^2}{20})$. $p$-value $= 2\\mathrm{P}(\\bar{X} \\ge 6.9) = 0.136 > 0.05$.<br>Do not reject $\\mathrm{H}_0$: insufficient evidence at $5\\%$ level that mean waiting time differs from $6.5$ minutes." },
      { label: "(a)(ii)", marks: 1, prompt: "Explain what you understand by 'at the $5\\%$ level of significance' in this context.", type: "self", solution: "There is a probability of $0.05$ of wrongly concluding that the mean waiting time differs from $6.5$ minutes when it is in fact $6.5$ minutes." },
      { label: "(a)(iii)", marks: 2, prompt: "Find the range of values of $\\bar{x}$ for which there is sufficient evidence at $1\\%$ significance level that the mean waiting time differs from $6.5$ minutes.", type: "self", solution: "2-tailed critical region at $1\\%$ ($0.005$ each tail): $0 \\le \\bar{x} \\le 5.81$ or $\\bar{x} \\ge 7.19$ (3 s.f.)." },
      { label: "(b)", marks: 5, prompt: "Train waiting times are normally distributed. MTB tests at $5\\%$ significance level if the mean exceeds $3.7$ minutes. A sample of $n$ observations ($n \\ge 30$) has mean $3.95$ and SD $0.9$. Given $\\mathrm{H}_0$ is not rejected, obtain an inequality in $n$ and find the set of values $n$ can take.", type: "self", solution: "Unbiased variance $s_y^2 = \\frac{n}{n-1}(0.9^2)$, so $\\bar{Y} \\sim \\mathrm{N}(3.7, \\frac{0.9^2}{n-1})$ under $\\mathrm{H}_0: \\mu_y = 3.7$ vs $\\mathrm{H}_1: \\mu_y > 3.7$.<br>Since $\\mathrm{H}_0$ is not rejected, $\\frac{3.95 - 3.7}{0.9/\\sqrt{n-1}} < 1.64485 \\implies n < 36.1$.<br>Since $n \\ge 30$ is an integer, $n \\in \\{30, 31, 32, 33, 34, 35, 36\\}$." }
    ]
  }
]);