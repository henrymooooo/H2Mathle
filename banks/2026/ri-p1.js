window.registerQuestions([
  {
    id: "RI-2026-P1-Q1",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q1",
    category: "pure",
    topics: ["Graphs & Transformations", "Equations & Inequalities", "Differentiation"],
    stem: "A curve has parametric equations $$x = t^2 + 1, \\quad y = at^3 + bt^2 + ct,$$ where $t > -2$ and $a$, $b$ and $c$ are constants.<br>The curve has stationary points at $t = -1$ and $t = 2$. The curve passes through the point $(5, -2)$.",
    parts: [
      {
        label: "",
        marks: 4,
        prompt: "Find the values of $a$, $b$ and $c$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "a =", answer: "1/5", placeholder: "Exact value or decimal" },
          { label: "b =", answer: "-3/10", placeholder: "Exact value or decimal" },
          { label: "c =", answer: "-6/5", placeholder: "Exact value or decimal" }
        ],
        solution: "$\\frac{\\mathrm{d}y}{\\mathrm{d}t} = 3at^2 + 2bt + c$.<br>At a stationary point, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}t} = 0$.<br>When $t = -1$: $3a - 2b + c = 0$ &nbsp;(1)<br>When $t = 2$: $12a + 4b + c = 0$ &nbsp;(2)<br><br>The curve passes through $(5, -2)$: $5 = t^2 + 1 \\implies t = \\pm 2$. Since $t > -2$, $t = 2$.<br>When $t = 2$: $8a + 4b + 2c = -2$ &nbsp;(3)<br><br>Solving (1), (2), (3) using GC: $$a = \\frac{1}{5}, \\quad b = -\\frac{3}{10}, \\quad c = -\\frac{6}{5}.$$"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q2",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q2",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "The sequence $u_1, u_2, u_3$, … is defined by $u_1 = 4$ and $u_{n+1} = -\\frac{1}{3}u_n + 2$, for $n \\ge 1$.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Write down the value of $u_6$.",
        type: "auto",
        mode: "number",
        answer: "362/243",
        placeholder: "Exact or 3 s.f.",
        solution: "Using GC (or iterating the recurrence): $u_2 = \\frac{2}{3}$, $u_3 = \\frac{16}{9}$, $u_4 = \\frac{38}{27}$, $u_5 = \\frac{124}{81}$, $$u_6 = \\frac{362}{243} \\approx 1.49.$$"
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Given that as $n \\to \\infty$, $u_n \\to l$, find the exact value of $l$ using an algebraic method.",
        type: "auto",
        mode: "number",
        answer: "3/2",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "As $n \\to \\infty$, $u_n \\to l$ and $u_{n+1} \\to l$.<br>Hence $$l = -\\frac{1}{3}l + 2 \\implies \\frac{4}{3}l = 2 \\implies l = \\frac{3}{2}.$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Using the result $\\sum_{r=1}^{n} r^2 = \\frac{n}{6}(n+1)(2n+1)$, find $\\sum_{r=0}^{n} (n+r)(r+1)$, giving your answer in terms of $n$, in fully factorised form.",
        type: "auto",
        mode: "expr",
        answer: "5*n*(n+1)*(n+2)/6",
        vars: { n: [1, 2, 3] },
        placeholder: "Expression in n",
        solution: "Note the sum from $r = 0$ to $n$ has $n + 1$ terms, and the $r = 0$ term of $\\sum r^2$ and $\\sum r$ is $0$.<br>$$\\sum_{r=0}^{n} (n+r)(r+1) = \\sum_{r=0}^{n} \\left[ r^2 + (n+1)r + n \\right]$$ $$= \\frac{n}{6}(n+1)(2n+1) + (n+1)\\cdot\\frac{n(n+1)}{2} + n(n+1)$$ $$= \\frac{n(n+1)}{6}\\left[ (2n+1) + 3(n+1) + 6 \\right] = \\frac{n(n+1)}{6}(5n+10)$$ $$= \\frac{5}{6}n(n+1)(n+2).$$"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q3",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q3",
    category: "pure",
    topics: ["Differentiation"],
    diagramSvg: `<svg viewBox="0 0 260 175" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><ellipse cx="100" cy="50" rx="90" ry="18" fill="none"/><path d="M10 50 A90 90 0 0 0 190 50" fill="none"/><line x1="100.0" y1="28.0" x2="100.0" y2="146.0" stroke-dasharray="4,3" opacity="0.6"/><ellipse cx="100" cy="110" rx="67.1" ry="12" fill="rgba(91,155,213,0.22)" stroke="#4a8fe7" stroke-dasharray="4,3"/><circle cx="100.0" cy="50.0" r="3" fill="#2c2925" stroke="#2c2925"/><circle cx="100.0" cy="110.0" r="3" fill="#2c2925" stroke="#2c2925"/><line x1="100.0" y1="110.0" x2="167.1" y2="110.0" stroke="#cf5652" stroke-width="1.5"/><text x="132.0" y="106.0" text-anchor="middle" stroke="none" font-style="italic">r</text><line x1="100.0" y1="50.0" x2="228.0" y2="50.0" stroke-dasharray="4,3" opacity="0.6"/><line x1="100.0" y1="140.0" x2="228.0" y2="140.0" stroke-dasharray="4,3" opacity="0.6"/><line x1="100.0" y1="110.0" x2="182.0" y2="110.0" stroke-dasharray="4,3" opacity="0.6"/><line x1="225.0" y1="95.0" x2="225.0" y2="50.0" /><polyline points="228.5,56.1 225.0,50.0 221.5,56.1" fill="none"/><line x1="225.0" y1="95.0" x2="225.0" y2="140.0" /><polyline points="221.5,133.9 225.0,140.0 228.5,133.9" fill="none"/><text x="232.0" y="99.0" text-anchor="start" stroke="none" >3</text><line x1="178.0" y1="125.0" x2="178.0" y2="110.0" /><polyline points="181.5,116.1 178.0,110.0 174.5,116.1" fill="none"/><line x1="178.0" y1="125.0" x2="178.0" y2="140.0" /><polyline points="174.5,133.9 178.0,140.0 181.5,133.9" fill="none"/><text x="184.0" y="129.0" text-anchor="start" stroke="none" font-style="italic">h</text></svg>`,
    stem: "Water is poured at a rate of $0.5\\ \\text{m}^3$ per minute into an empty container in the form of an open hemisphere with inside radius $3$ m (see diagram). At time $t$ minutes after the start, the radius of the water surface is $r$ m and the volume of the water in the hemispherical container is $\\frac{1}{3}\\pi h^2(9 - h)$, where $h$ m is the depth of the water.<br>When the depth of the water is $1$ m,",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "find the rate of change of the depth of water (in m per minute).",
        type: "auto",
        mode: "number",
        answer: "1/(10*pi)",
        placeholder: "Exact or 3 s.f.",
        solution: "$V = \\frac{1}{3}\\pi h^2(9-h) = \\pi\\left(3h^2 - \\frac{1}{3}h^3\\right)$, so $\\frac{\\mathrm{d}V}{\\mathrm{d}h} = \\pi(6h - h^2)$.<br>$$\\frac{\\mathrm{d}h}{\\mathrm{d}t} = \\frac{\\mathrm{d}h}{\\mathrm{d}V} \\times \\frac{\\mathrm{d}V}{\\mathrm{d}t} = \\frac{1}{\\pi(6h - h^2)} \\times 0.5.$$ When $h = 1$: $$\\frac{\\mathrm{d}h}{\\mathrm{d}t} = \\frac{0.5}{5\\pi} = \\frac{1}{10\\pi} \\approx 0.0318.$$ The depth is increasing at $0.0318$ m per minute."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "find the rate of change of the radius of the water surface (in m per minute).",
        type: "auto",
        mode: "number",
        answer: "sqrt(5)/(25*pi)",
        placeholder: "Exact or 3 s.f.",
        solution: "By Pythagoras' Theorem (the centre of the hemisphere is $3 - h$ above the water surface): $$r^2 = 3^2 - (3-h)^2 = 6h - h^2.$$ Differentiate w.r.t. $t$: $2r\\frac{\\mathrm{d}r}{\\mathrm{d}t} = (6 - 2h)\\frac{\\mathrm{d}h}{\\mathrm{d}t}$.<br>When $h = 1$: $r^2 = 5 \\implies r = \\sqrt{5}$ (since $r > 0$). $$2\\sqrt{5}\\,\\frac{\\mathrm{d}r}{\\mathrm{d}t} = 4 \\times \\frac{1}{10\\pi} \\implies \\frac{\\mathrm{d}r}{\\mathrm{d}t} = \\frac{1}{5\\sqrt{5}\\,\\pi} = \\frac{\\sqrt{5}}{25\\pi} \\approx 0.0285.$$ The radius is increasing at $0.0285$ m per minute.<br><em>Common mistake: the water forms a spherical cap, not a hemisphere, so $V \\ne \\frac{2}{3}\\pi r^3$.</em>"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q4",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q4",
    category: "pure",
    topics: ["Vectors"],
    stem: "With reference to the origin $O$, three distinct points $A$, $B$ and $C$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively. The mid-point of $AC$ is $D$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Express the position vector of $D$ (that is, $OD$) in terms of $\\mathbf{a}$ and $\\mathbf{c}$.",
        type: "self",
        solution: "$$\\overrightarrow{OD} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{c})$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Given that $|\\mathbf{a}| = |\\mathbf{c}|$, $\\mathbf{b} \\ne \\mathbf{0}$ and $BD$ is perpendicular to $AC$, show that $OB$ is also perpendicular to $AC$ by using a suitable scalar product.",
        type: "self",
        solution: "$\\overrightarrow{BD} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{c}) - \\mathbf{b}$ and $\\overrightarrow{AC} = \\mathbf{c} - \\mathbf{a}$.<br>Since $BD \\perp AC$: $$\\overrightarrow{BD} \\cdot \\overrightarrow{AC} = 0$$ $$\\left[\\tfrac{1}{2}(\\mathbf{a} + \\mathbf{c}) - \\mathbf{b}\\right] \\cdot (\\mathbf{c} - \\mathbf{a}) = 0$$ $$\\tfrac{1}{2}\\left(|\\mathbf{c}|^2 - |\\mathbf{a}|^2\\right) - \\mathbf{b} \\cdot (\\mathbf{c} - \\mathbf{a}) = 0.$$ Since $|\\mathbf{a}| = |\\mathbf{c}|$, the first term is $0$, so $$\\mathbf{b} \\cdot (\\mathbf{c} - \\mathbf{a}) = 0 \\implies \\overrightarrow{OB} \\cdot \\overrightarrow{AC} = 0.$$ As $\\mathbf{b} \\ne \\mathbf{0}$ and $AC \\ne \\mathbf{0}$ (the points are distinct), $OB$ is perpendicular to $AC$. (shown)<br><br><strong>Alternative:</strong> $\\overrightarrow{OB} \\cdot \\overrightarrow{AC} = (\\overrightarrow{OD} - \\overrightarrow{BD}) \\cdot \\overrightarrow{AC} = \\overrightarrow{OD} \\cdot \\overrightarrow{AC} - \\overrightarrow{BD} \\cdot \\overrightarrow{AC}$. Triangle $OAC$ is isosceles ($|\\mathbf{a}| = |\\mathbf{c}|$) with $D$ the mid-point of $AC$, so $OD \\perp AC$ and the first term is $0$; the second term is $0$ as $BD \\perp AC$.<br><em>Do not assume $O$, $B$, $D$ are collinear in this part.</em>"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Given further that point $D$ lies on line segment $OB$, $|\\mathbf{a}| = 2$, $|\\mathbf{b}| = 6$ and $\\angle AOC = 60°$, find the exact area of quadrilateral $OABC$ (in square units).",
        type: "auto",
        mode: "number",
        answer: "6",
        exactRequired: true,
        placeholder: "Exact value",
        solutionSvg: `<svg viewBox="0 0 200 190" width="200" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><polyline points="100.0,175.0 73.3,128.8 100.0,15.0 126.7,128.8 100.0,175.0" fill="rgba(91,155,213,0.22)" stroke="#4a8fe7" stroke-width="2" stroke-linejoin="round"/><line x1="100.0" y1="175.0" x2="100.0" y2="15.0" stroke-dasharray="4,3" opacity="0.7"/><line x1="73.3" y1="128.8" x2="126.7" y2="128.8" stroke-dasharray="4,3" opacity="0.7"/><polyline points="94.0,128.8 94.0,122.8 100.0,122.8" fill="none"/><circle cx="100.0" cy="128.8" r="3" fill="#2c2925" stroke="#2c2925"/><text x="100.0" y="188.0" text-anchor="middle" stroke="none" >O</text><text x="100.0" y="10.0" text-anchor="middle" stroke="none" >B</text><text x="67.3" y="132.8" text-anchor="end" stroke="none" >A</text><text x="132.7" y="132.8" text-anchor="start" stroke="none" >C</text><text x="105.0" y="141.8" text-anchor="start" stroke="none" >D</text><text x="100.0" y="153.0" text-anchor="middle" stroke="none" font-size="9">60°</text><text x="108.0" y="95.0" text-anchor="start" stroke="none" font-size="9">OB = 6</text></svg>`,
        solution: "Since $|\\mathbf{a}| = |\\mathbf{c}|$ and $\\angle AOC = 60°$, triangle $OAC$ is equilateral, so $AC = 2$.<br>$D$ lies on $OB$ and $OB \\perp AC$, so $OB$ is the perpendicular bisector of $AC$ and $OABC$ is a kite.<br>$$\\text{Area} = \\frac{1}{2} \\times AC \\times OB = \\frac{1}{2} \\times 2 \\times 6 = 6 \\text{ units}^2.$$ <br><strong>Alternative:</strong> Area $= 2 \\times \\text{Area of } \\triangle OAB = 2 \\times \\frac{1}{2}|\\mathbf{a}||\\mathbf{b}|\\sin 30° = 2 \\times \\frac{1}{2}(2)(6)\\left(\\frac{1}{2}\\right) = 6$."
      }
    ]
  },
  {
    id: "RI-2026-P1-Q5",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q5",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<em>Do not use a calculator in answering this question.</em><br>It is given that $1 + 2\\mathrm{i}$ is a complex root of the quartic equation $$z^4 + pz^3 + qz^2 + rz + 45 = 0,$$ where $p$, $q$ and $r$ are real numbers.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "State, with justification, another complex root of the equation in the form $a + b\\mathrm{i}$, where $a$ and $b$ are real numbers and $b \\ne 0$. Hence find a quadratic factor corresponding to these two roots.",
        type: "self",
        solution: "Since all the coefficients of the polynomial are real, non-real roots occur in conjugate pairs. Hence $1 - 2\\mathrm{i}$ is also a root.<br>Quadratic factor: $$\\left[z - (1 - 2\\mathrm{i})\\right]\\left[z - (1 - 2\\mathrm{i})\\right] = \\left[(z-1) + 2\\mathrm{i}\\right]\\left[(z-1) - 2\\mathrm{i}\\right]$$ $$= (z-1)^2 + 4 = z^2 - 2z + 5.$$"
      },
      {
        label: "(b)",
        marks: 4,
        prompt: "The quartic equation has a repeated negative real root. Find the value of the repeated real root and hence find the values of $p$, $q$ and $r$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Repeated root =", answer: "-3", exactRequired: true, placeholder: "Integer value" },
          { label: "p =", answer: "4", exactRequired: true, placeholder: "Integer value" },
          { label: "q =", answer: "2", exactRequired: true, placeholder: "Integer value" },
          { label: "r =", answer: "12", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "Let the repeated real root be $k$, where $k < 0$. Then $$z^4 + pz^3 + qz^2 + rz + 45 = (z^2 - 2z + 5)(z^2 - 2kz + k^2).$$ Comparing constant terms: $5k^2 = 45 \\implies k = \\pm 3$. Since $k < 0$, $k = -3$.<br>So $$z^4 + pz^3 + qz^2 + rz + 45 = (z^2 - 2z + 5)(z^2 + 6z + 9).$$ Comparing coefficients:<br>$z^3$: $p = 6 - 2 = 4$<br>$z^2$: $q = 9 - 12 + 5 = 2$<br>$z$: $r = -18 + 30 = 12$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "By means of a suitable substitution, solve $45w^4 + rw^3 + qw^2 + pw + 1 = 0$.",
        type: "auto",
        mode: "complex-list",
        answer: ["1/5+2/5*i", "1/5-2/5*i", "-1/3"],
        placeholder: "Roots separated by commas",
        solution: "Divide throughout by $w^4$: $$45 + \\frac{r}{w} + \\frac{q}{w^2} + \\frac{p}{w^3} + \\frac{1}{w^4} = 0.$$ Let $z = \\frac{1}{w}$: $z^4 + pz^3 + qz^2 + rz + 45 = 0$, whose roots are $1 \\pm 2\\mathrm{i}$ and $-3$ (repeated).<br>Hence $w = \\frac{1}{z}$: $$w = \\frac{1}{1 - 2\\mathrm{i}} = \\frac{1 + 2\\mathrm{i}}{5}, \\quad w = \\frac{1}{1 + 2\\mathrm{i}} = \\frac{1 - 2\\mathrm{i}}{5}, \\quad w = -\\frac{1}{3} \\text{ (repeated)}.$$"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q6",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q6",
    category: "pure",
    topics: ["Equations & Inequalities"],
    stem: "",
    parts: [
      {
        label: "(a)",
        marks: 6,
        prompt: "Show that $2x^2 - 4x + 3$ is always positive for all real values of $x$.<br>Without using a calculator, solve the inequality $$\\frac{x^2 - 10x + 3}{(2x+1)(x-3)} \\ge x.$$",
        type: "self",
        solution: "<strong>Show:</strong> $2x^2 - 4x + 3 = 2\\left[(x-1)^2 - 1\\right] + 3 = 2(x-1)^2 + 1$. Since $(x-1)^2 \\ge 0$ for all real $x$, $2(x-1)^2 + 1 \\ge 1 > 0$. (shown)<br><br><strong>Solve:</strong> $$\\frac{x^2 - 10x + 3}{(2x+1)(x-3)} - x \\ge 0 \\implies \\frac{x^2 - 10x + 3 - x(2x^2 - 5x - 3)}{(2x+1)(x-3)} \\ge 0$$ $$\\implies \\frac{-2x^3 + 6x^2 - 7x + 3}{(2x+1)(x-3)} \\ge 0 \\implies \\frac{2x^3 - 6x^2 + 7x - 3}{(2x+1)(x-3)} \\le 0.$$ By observation, $2(1)^3 - 6(1)^2 + 7(1) - 3 = 0$, so $x - 1$ is a factor: $$\\frac{(x-1)(2x^2 - 4x + 3)}{(2x+1)(x-3)} \\le 0.$$ Since $2x^2 - 4x + 3 > 0$ for all real $x$, this reduces to $$\\frac{x-1}{(2x+1)(x-3)} \\le 0, \\quad x \\ne -\\frac{1}{2}, 3.$$ Critical values: $-\\frac{1}{2}$, $1$, $3$. A sign diagram gives $$x < -\\frac{1}{2} \\quad \\text{or} \\quad 1 \\le x < 3.$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence solve the inequality $$\\frac{x^2 - 10|x| + 3}{(2|x|+1)(|x|-3)} > |x|.$$",
        type: "self",
        solution: "Using (a) with $x$ replaced by $|x|$ (and note the inequality is now strict, so $x = 1$ where equality holds is excluded): $$|x| < -\\frac{1}{2} \\quad \\text{or} \\quad 1 < |x| < 3.$$ $|x| < -\\frac{1}{2}$ has no solution since $|x| \\ge 0$. For $1 < |x| < 3$: $$-3 < x < -1 \\quad \\text{or} \\quad 1 < x < 3.$$"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q7",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q7",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "Conservationists are investigating the effect of habitat loss on the number of deer on an island. They observe that the population of the deer on the island decreases at a rate of $2\\%$ every year. The number of deer on the island is $P$ at a time $t$ years after conservationists begin observations.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Write down a differential equation relating $P$ and $t$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}P}{\\mathrm{d}t} = -0.02P$$"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "To maintain population stability, the conservationists relocate deer to the island at a constant uniform rate of $h$ deer per year. Write down a differential equation to model the new situation.",
        type: "self",
        solution: "Rate of change = rate of increase $-$ rate of decrease: $$\\frac{\\mathrm{d}P}{\\mathrm{d}t} = h - 0.02P$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Without solving the differential equation, determine the value of $h$ if the conservationists would like the number of deer to settle down to $600$ after many years.",
        type: "auto",
        mode: "number",
        answer: "12",
        exactRequired: true,
        placeholder: "Value of h",
        solution: "When the number of deer settles down to $600$, $P = 600$ and $\\frac{\\mathrm{d}P}{\\mathrm{d}t} = 0$: $$0 = h - 0.02(600) \\implies h = 12.$$"
      },
      {
        label: "(d)",
        marks: 5,
        prompt: "Solve the differential equation to find an expression for $P$ in terms of $t$ and $h$. Hence, state the population of the deer, in terms of $h$, in the long term.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}P}{\\mathrm{d}t} = h - 0.02P \\implies \\int \\frac{1}{h - 0.02P}\\,\\mathrm{d}P = \\int 1\\,\\mathrm{d}t$$ $$-50\\ln|h - 0.02P| = t + c$$ $$|h - 0.02P| = \\mathrm{e}^{-0.02(t + c)} = \\mathrm{e}^{-0.02c}\\,\\mathrm{e}^{-0.02t}$$ $$h - 0.02P = A\\mathrm{e}^{-0.02t}, \\quad \\text{where } A = \\pm\\mathrm{e}^{-0.02c}$$ $$P = 50h - 50A\\mathrm{e}^{-0.02t} = 50h + B\\mathrm{e}^{-0.02t}, \\quad B \\text{ an arbitrary constant.}$$ As $t \\to \\infty$, $\\mathrm{e}^{-0.02t} \\to 0$, so $P \\to 50h$.<br>The population of the deer approaches $50h$ in the long term. (Check with (c): $50 \\times 12 = 600$.)"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q8",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q8",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation"],
    stem: "The curve $C$ has parametric equations $$x = a\\sin t, \\quad y = a\\sin t\\cos t,$$ for $0 \\le t < \\pi$ and $a$ is a positive constant.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Sketch the graph of $C$, stating clearly the coordinates of the points where the curve $C$ meets the axes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 200" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20.0" y1="100.0" x2="245.0" y2="100.0" /><polyline points="238.9,103.5 245.0,100.0 238.9,96.5" fill="none"/><line x1="50.0" y1="185.0" x2="50.0" y2="12.0" /><polyline points="53.5,18.1 50.0,12.0 46.5,18.1" fill="none"/><polyline points="50.0,100.0 59.2,90.9 68.3,81.9 77.3,73.2 86.2,65.0 95.0,57.4 103.6,50.5 111.9,44.5 120.0,39.4 127.8,35.3 135.2,32.4 142.3,30.6 149.0,30.0 155.3,30.6 161.1,32.4 166.4,35.3 171.2,39.4 175.6,44.5 179.3,50.5 182.6,57.4 185.2,65.0 187.3,73.2 188.8,81.9 189.7,90.9 190.0,100.0 189.7,109.1 188.8,118.1 187.3,126.8 185.2,135.0 182.6,142.6 179.3,149.5 175.6,155.5 171.2,160.6 166.4,164.7 161.1,167.6 155.3,169.4 149.0,170.0 142.3,169.4 135.2,167.6 127.8,164.7 120.0,160.6 111.9,155.5 103.6,149.5 95.0,142.6 86.2,135.0 77.3,126.8 68.3,118.1 59.2,109.1 50.0,100.0" fill="none" stroke="#4a8fe7" stroke-width="2" stroke-linejoin="round"/><circle cx="50.0" cy="100.0" r="3" fill="#2c2925" stroke="#2c2925"/><circle cx="190.0" cy="100.0" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><text x="244.0" y="114.0" text-anchor="end" stroke="none" font-style="italic">x</text><text x="56.0" y="16.0" text-anchor="start" stroke="none" font-style="italic">y</text><text x="44.0" y="113.0" text-anchor="end" stroke="none" >O</text><text x="190.0" y="115.0" text-anchor="middle" stroke="none" >(a, 0)</text><text x="44.0" y="94.0" text-anchor="end" stroke="none" font-size="9">(0, 0)</text><text x="95.0" y="24.0" text-anchor="start" stroke="none" font-size="10">x = a sin t, y = a sin t cos t</text></svg>`,
        solution: "The curve is a teardrop-shaped loop, symmetric about the $x$-axis. Use $0 \\le t < \\pi$ only (not $0 \\le t < 2\\pi$, which would add a second loop on the negative side).<br>The curve meets the axes at $(0, 0)$ (when $t = 0$) and $(a, 0)$ (when $t = \\frac{\\pi}{2}$)."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "State the equation of the line of symmetry.",
        type: "self",
        solution: "$$y = 0$$ (the $x$-axis; replacing $t$ by $\\pi - t$ keeps $x$ the same and changes the sign of $y$)."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "Find the equation(s) of the tangent to $C$ which is parallel to the $x$-axis.",
        type: "self",
        solution: "$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = a\\cos t$, $\\frac{\\mathrm{d}y}{\\mathrm{d}t} = a(\\cos^2 t - \\sin^2 t)$. $$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\cos^2 t - \\sin^2 t}{\\cos t} = \\frac{\\cos 2t}{\\cos t}.$$ For the tangent to be parallel to the $x$-axis, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$: $\\cos 2t = 0$. Since $0 \\le 2t < 2\\pi$, $2t = \\frac{\\pi}{2}$ or $\\frac{3\\pi}{2}$, so $t = \\frac{\\pi}{4}$ or $t = \\frac{3\\pi}{4}$.<br>When $t = \\frac{\\pi}{4}$: $y = a\\sin\\frac{\\pi}{4}\\cos\\frac{\\pi}{4} = \\frac{a}{2}$.<br>When $t = \\frac{3\\pi}{4}$: $y = a\\sin\\frac{3\\pi}{4}\\cos\\frac{3\\pi}{4} = -\\frac{a}{2}$.<br>The tangents are $$y = \\frac{a}{2} \\quad \\text{and} \\quad y = -\\frac{a}{2}.$$"
      },
      {
        label: "(d)",
        marks: 4,
        prompt: "The tangent and normal to $C$ at the point $P$ where $t = \\frac{\\pi}{6}$ cut the $x$-axis at points $Q$ and $R$ respectively. Find the exact area of triangle $PQR$ (in terms of $a$).",
        type: "auto",
        mode: "expr",
        answer: "sqrt(3)*a^2/8",
        vars: { a: [1, 2, 3] },
        placeholder: "Expression in a",
        solutionSvg: `<svg viewBox="0 0 290 200" width="290" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="20.0" y1="100.0" x2="278.0" y2="100.0" /><polyline points="271.9,103.5 278.0,100.0 271.9,96.5" fill="none"/><line x1="70.0" y1="185.0" x2="70.0" y2="12.0" /><polyline points="73.5,18.1 70.0,12.0 66.5,18.1" fill="none"/><polygon points="140.0,39.4 35.0,100.0 175.0,100.0" fill="rgba(91,155,213,0.22)" stroke="none"/><polyline points="70.0,100.0 79.2,90.9 88.3,81.9 97.3,73.2 106.2,65.0 115.0,57.4 123.6,50.5 131.9,44.5 140.0,39.4 147.8,35.3 155.2,32.4 162.3,30.6 169.0,30.0 175.3,30.6 181.1,32.4 186.4,35.3 191.2,39.4 195.6,44.5 199.3,50.5 202.6,57.4 205.2,65.0 207.3,73.2 208.8,81.9 209.7,90.9 210.0,100.0 209.7,109.1 208.8,118.1 207.3,126.8 205.2,135.0 202.6,142.6 199.3,149.5 195.6,155.5 191.2,160.6 186.4,164.7 181.1,167.6 175.3,169.4 169.0,170.0 162.3,169.4 155.2,167.6 147.8,164.7 140.0,160.6 131.9,155.5 123.6,149.5 115.0,142.6 106.2,135.0 97.3,126.8 88.3,118.1 79.2,109.1 70.0,100.0" fill="none" stroke="#4a8fe7" stroke-width="2" stroke-linejoin="round"/><line x1="35.0" y1="100.0" x2="140.0" y2="39.4" stroke="#cf5652" stroke-width="1.5"/><line x1="140.0" y1="39.4" x2="175.0" y2="100.0" stroke="#cf5652" stroke-width="1.5"/><circle cx="140.0" cy="39.4" r="3" fill="#cf5652" stroke="#cf5652"/><circle cx="35.0" cy="100.0" r="3" fill="#cf5652" stroke="#cf5652"/><circle cx="175.0" cy="100.0" r="3" fill="#cf5652" stroke="#cf5652"/><circle cx="70.0" cy="100.0" r="3" fill="#2c2925" stroke="#2c2925"/><circle cx="210.0" cy="100.0" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><text x="277.0" y="114.0" text-anchor="end" stroke="none" font-style="italic">x</text><text x="76.0" y="16.0" text-anchor="start" stroke="none" font-style="italic">y</text><text x="74.0" y="114.0" text-anchor="start" stroke="none" >O</text><text x="134.0" y="33.4" text-anchor="end" stroke="none" >P</text><text x="35.0" y="115.0" text-anchor="middle" stroke="none" font-size="10">Q(−a/4, 0)</text><text x="173.0" y="115.0" text-anchor="middle" stroke="none" font-size="10">R(3a/4, 0)</text><text x="222.0" y="94.0" text-anchor="start" stroke="none" font-size="10">(a, 0)</text></svg>`,
        solution: "At $t = \\frac{\\pi}{6}$: $x = a\\sin\\frac{\\pi}{6} = \\frac{a}{2}$, $y = a\\sin\\frac{\\pi}{6}\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{4}a$. So $P = \\left(\\frac{a}{2}, \\frac{\\sqrt{3}}{4}a\\right)$.<br>$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\cos\\frac{\\pi}{3}}{\\cos\\frac{\\pi}{6}} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$.<br><strong>Tangent at $P$:</strong> $y - \\frac{\\sqrt{3}}{4}a = \\frac{1}{\\sqrt{3}}\\left(x - \\frac{a}{2}\\right)$. When $y = 0$: $x - \\frac{a}{2} = -\\frac{3}{4}a \\implies x = -\\frac{a}{4}$. So $Q = \\left(-\\frac{a}{4}, 0\\right)$.<br><strong>Normal at $P$</strong> (gradient $-\\sqrt{3}$): $y - \\frac{\\sqrt{3}}{4}a = -\\sqrt{3}\\left(x - \\frac{a}{2}\\right)$. When $y = 0$: $x - \\frac{a}{2} = \\frac{a}{4} \\implies x = \\frac{3}{4}a$. So $R = \\left(\\frac{3}{4}a, 0\\right)$.<br>$QR = \\frac{3}{4}a + \\frac{1}{4}a = a$ and the height of $P$ above the $x$-axis is $\\frac{\\sqrt{3}}{4}a$. $$\\text{Area of } \\triangle PQR = \\frac{1}{2}(a)\\left(\\frac{\\sqrt{3}}{4}a\\right) = \\frac{\\sqrt{3}}{8}a^2.$$"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q9",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q9",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation", "Integration"],
    stem: "A curve $C$ has equation $y = x\\mathrm{e}^{-x}$, $x \\ge 0$.",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $C$ has exactly one stationary point.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\mathrm{e}^{-x} - x\\mathrm{e}^{-x} = \\mathrm{e}^{-x}(1 - x).$$ When $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$: $\\mathrm{e}^{-x}(1 - x) = 0$. Since $\\mathrm{e}^{-x} > 0$ for all $x$, $1 - x = 0 \\implies x = 1$.<br>Hence $C$ has exactly one stationary point. (shown)"
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "Sketch $C$, giving the exact coordinates of the stationary point.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 185" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="25.0" y1="150.0" x2="310.0" y2="150.0" /><polyline points="303.9,153.5 310.0,150.0 303.9,146.5" fill="none"/><line x1="40.0" y1="172.0" x2="40.0" y2="15.0" /><polyline points="43.5,21.1 40.0,15.0 36.5,21.1" fill="none"/><line x1="40.0" y1="39.6" x2="90.0" y2="39.6" stroke-dasharray="4,3" opacity="0.6"/><line x1="90.0" y1="39.6" x2="90.0" y2="150.0" stroke-dasharray="4,3" opacity="0.6"/><polyline points="40.0,150.0 42.5,135.7 45.0,122.9 52.5,91.6 65.0,59.0 77.5,43.7 90.0,39.6 102.5,42.6 115.0,49.6 140.0,68.8 165.0,88.4 190.0,105.2 215.0,118.3 240.0,128.0 265.0,135.0 290.0,139.9" fill="none" stroke="#4a8fe7" stroke-width="2" stroke-linejoin="round"/><circle cx="90.0" cy="39.6" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><text x="96.0" y="33.6" text-anchor="start" stroke="none" >(1, 1/e)</text><text x="35.0" y="163.0" text-anchor="end" stroke="none" >O</text><text x="308.0" y="164.0" text-anchor="end" stroke="none" font-style="italic">x</text><text x="46.0" y="16.0" text-anchor="start" stroke="none" font-style="italic">y</text><text x="90.0" y="163.0" text-anchor="middle" stroke="none" >1</text><text x="35.0" y="43.6" text-anchor="end" stroke="none" >1/e</text><text x="150.0" y="64.0" text-anchor="start" stroke="none" font-style="italic">y = xe⁻ˣ</text><text x="300.0" y="144.0" text-anchor="end" stroke="none" font-size="10">y = 0</text></svg>`,
        solution: "When $x = 1$, $y = \\mathrm{e}^{-1}$. The stationary point is $\\left(1, \\frac{1}{\\mathrm{e}}\\right)$ (a maximum). The curve starts at the origin and approaches the asymptote $y = 0$ as $x \\to \\infty$ (since $\\mathrm{e}^{-x}$ decays faster than $x$ grows)."
      },
      {
        label: "(c)",
        marks: 4,
        prompt: "The region $R$ is bounded by $C$, the $y$-axis and the line $y = \\frac{1}{\\mathrm{e}}$. Find the exact area of $R$.",
        type: "auto",
        mode: "number",
        answer: "3/e-1",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Let $S$ be the region under $C$ from $x = 0$ to $x = 1$ (note that $R$ is the region <em>above</em> $C$ and below $y = \\frac{1}{\\mathrm{e}}$, so $R$ = rectangle $-$ $S$). Using integration by parts with $u = x$, $\\frac{\\mathrm{d}v}{\\mathrm{d}x} = \\mathrm{e}^{-x}$: $$\\text{Area of } S = \\int_0^1 x\\mathrm{e}^{-x}\\,\\mathrm{d}x = \\left[-x\\mathrm{e}^{-x}\\right]_0^1 + \\int_0^1 \\mathrm{e}^{-x}\\,\\mathrm{d}x = -\\mathrm{e}^{-1} + \\left[-\\mathrm{e}^{-x}\\right]_0^1$$ $$= -\\frac{1}{\\mathrm{e}} + \\left(-\\frac{1}{\\mathrm{e}} + 1\\right) = 1 - \\frac{2}{\\mathrm{e}}.$$ $$\\text{Area of } R = (1)\\left(\\frac{1}{\\mathrm{e}}\\right) - \\left(1 - \\frac{2}{\\mathrm{e}}\\right) = \\frac{3}{\\mathrm{e}} - 1.$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "An ornament is formed by rotating $R$ through $2\\pi$ radians about the line $y = 2$. By considering a suitable translation of $C$, find the volume of the ornament (in cubic units).",
        type: "auto",
        mode: "number",
        answer: "pi*(12/e-9/(4*e^2)-15/4)",
        placeholder: "Exact or 3 s.f.",
        solution: "Translate $C$ by $2$ units in the negative $y$-direction: $y = x\\mathrm{e}^{-x} - 2$, so the axis of rotation becomes the $x$-axis ($y = 0$) and $R$ becomes $R'$, lying between $y = x\\mathrm{e}^{-x} - 2$ (further from the axis) and $y = \\frac{1}{\\mathrm{e}} - 2$ (nearer to the axis), for $0 \\le x \\le 1$.<br>$$\\text{Volume} = \\pi\\int_0^1 \\left[ \\left(x\\mathrm{e}^{-x} - 2\\right)^2 - \\left(\\frac{1}{\\mathrm{e}} - 2\\right)^2 \\right] \\mathrm{d}x \\approx 1.13 \\text{ units}^3.$$ (Using GC; exactly, this equals $\\pi\\left(\\frac{12}{\\mathrm{e}} - \\frac{9}{4\\mathrm{e}^2} - \\frac{15}{4}\\right)$.)<br><em>Translating in the positive $y$-direction is a common mistake and gives a meaningless region.</em>"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q10",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q10",
    category: "pure",
    topics: ["Graphs & Transformations"],
    stem: "It is given that $$f(x) = \\frac{x^2 - 20x + 109}{x - 10}.$$",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Describe the transformation which transforms the graph of $y = x + \\frac{9}{x}$ onto the graph of $y = f(x)$.",
        type: "self",
        solution: "$$f(x) = \\frac{(x-10)^2 + 9}{x - 10} = (x - 10) + \\frac{9}{x - 10}.$$ The transformation is a translation of $10$ units in the positive $x$-direction."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Sketch the graph of $y = f(x)$, labelling clearly the equations of any asymptotes and the coordinates of any axial intercepts and turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 250" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="10.0" y1="120.0" x2="292.0" y2="120.0" /><polyline points="285.9,123.5 292.0,120.0 285.9,116.5" fill="none"/><line x1="50.0" y1="238.0" x2="50.0" y2="12.0" /><polyline points="53.5,18.1 50.0,12.0 46.5,18.1" fill="none"/><line x1="150.0" y1="20.0" x2="150.0" y2="236.0" stroke-dasharray="4,3" opacity="0.6"/><line x1="30.0" y1="204.0" x2="270.0" y2="36.0" stroke-dasharray="4,3" opacity="0.6"/><polyline points="158.0,35.6 158.5,39.9 159.0,43.7 160.0,50.0 162.0,59.1 165.0,67.5 170.0,74.5 175.0,77.3 180.0,78.0 185.0,77.5 190.0,76.2 200.0,72.4 210.0,67.5 230.0,56.1 250.0,43.7 270.0,30.8" fill="none" stroke="#4a8fe7" stroke-width="2" stroke-linejoin="round"/><polyline points="142.0,204.4 141.5,200.1 141.0,196.3 140.0,190.0 138.0,180.9 135.0,172.5 130.0,165.5 125.0,162.7 120.0,162.0 115.0,162.5 110.0,163.8 100.0,167.6 90.0,172.5 70.0,183.9 50.0,196.3 30.0,209.2" fill="none" stroke="#4a8fe7" stroke-width="2" stroke-linejoin="round"/><circle cx="180.0" cy="78.0" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><circle cx="120.0" cy="162.0" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><circle cx="50.0" cy="196.3" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><text x="180.0" y="92.0" text-anchor="middle" stroke="none" font-size="10">(13, 6)</text><text x="120.0" y="153.0" text-anchor="middle" stroke="none" font-size="10">(7, −6)</text><text x="55.0" y="213.3" text-anchor="start" stroke="none" font-size="10">(0, −10.9)</text><text x="154.0" y="232.0" text-anchor="start" stroke="none" font-size="10">x = 10</text><text x="272.0" y="24.0" text-anchor="end" stroke="none" font-size="10">y = x − 10</text><text x="44.0" y="132.0" text-anchor="end" stroke="none" >O</text><text x="292.0" y="134.0" text-anchor="end" stroke="none" font-style="italic">x</text><text x="56.0" y="16.0" text-anchor="start" stroke="none" font-style="italic">y</text><text x="240.0" y="141.0" text-anchor="start" stroke="none" font-style="italic">y = f(x)</text></svg>`,
        solution: "Asymptotes: $x = 10$ and $y = x - 10$. Turning points: $(13, 6)$ and $(7, -6)$ (from the translation of the turning points $(3, 6)$ and $(-3, -6)$ of $y = x + \\frac{9}{x}$). There is no $x$-intercept (the graph has $|y| \\ge 6$), and the $y$-intercept is $\\left(0, -10.9\\right)$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "On a separate diagram, sketch the graph of $y = f'(x)$, labelling clearly the equations of any asymptotes and the coordinates of any axial intercepts and turning points.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 260" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925"><line x1="10.0" y1="100.0" x2="292.0" y2="100.0" /><polyline points="285.9,103.5 292.0,100.0 285.9,96.5" fill="none"/><line x1="50.0" y1="255.0" x2="50.0" y2="15.0" /><polyline points="53.5,21.1 50.0,15.0 46.5,21.1" fill="none"/><line x1="150.0" y1="20.0" x2="150.0" y2="255.0" stroke-dasharray="4,3" opacity="0.6"/><line x1="10.0" y1="60.0" x2="292.0" y2="60.0" stroke-dasharray="4,3" opacity="0.6"/><polyline points="164.0,243.7 165.0,220.0 167.0,184.6 170.0,150.0 175.0,117.6 180.0,100.0 185.0,89.4 190.0,82.5 200.0,74.4 210.0,70.0 230.0,65.6 250.0,63.6 270.0,62.5" fill="none" stroke="#4a8fe7" stroke-width="2" stroke-linejoin="round"/><polyline points="136.0,243.7 135.0,220.0 133.0,184.6 130.0,150.0 125.0,117.6 120.0,100.0 115.0,89.4 110.0,82.5 100.0,74.4 90.0,70.0 70.0,65.6 50.0,63.6 30.0,62.5" fill="none" stroke="#4a8fe7" stroke-width="2" stroke-linejoin="round"/><circle cx="120.0" cy="100.0" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><circle cx="180.0" cy="100.0" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><circle cx="50.0" cy="63.6" r="3" fill="#4a8fe7" stroke="#4a8fe7"/><text x="116.0" y="114.0" text-anchor="end" stroke="none" font-size="10">(7, 0)</text><text x="184.0" y="114.0" text-anchor="start" stroke="none" font-size="10">(13, 0)</text><text x="55.0" y="86.0" text-anchor="start" stroke="none" font-size="10">(0, 0.91)</text><text x="154.0" y="250.0" text-anchor="start" stroke="none" font-size="10">x = 10</text><text x="288.0" y="55.0" text-anchor="end" stroke="none" font-size="10">y = 1</text><text x="44.0" y="112.0" text-anchor="end" stroke="none" >O</text><text x="292.0" y="114.0" text-anchor="end" stroke="none" font-style="italic">x</text><text x="56.0" y="18.0" text-anchor="start" stroke="none" font-style="italic">y</text><text x="222.0" y="180.0" text-anchor="start" stroke="none" font-style="italic">y = f′(x)</text></svg>`,
        solution: "$f'(x) = 1 - \\frac{9}{(x-10)^2}$. Asymptotes: $x = 10$ (with $f'(x) \\to -\\infty$ on both sides) and $y = 1$ (approached from below as $x \\to \\pm\\infty$). The $x$-intercepts are $(7, 0)$ and $(13, 0)$ (the $x$-coordinates of the turning points of $f$), and the $y$-intercept is $(0, 0.91)$. There are no turning points."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "By considering the graph of $(x-13)^2 + \\frac{y^2}{m} = 1$, where $m > 0$, determine the value of $m$ for which the equation $$m(x-13)^2 + \\left(\\frac{x^2 - 20x + 109}{x - 10}\\right)^2 = m$$ has exactly one real root.",
        type: "auto",
        mode: "number",
        answer: "36",
        exactRequired: true,
        placeholder: "Value of m",
        solution: "Dividing the equation by $m$ gives $(x-13)^2 + \\frac{[f(x)]^2}{m} = 1$, so the roots are the $x$-coordinates of the intersections of $y = f(x)$ with the ellipse $(x-13)^2 + \\frac{y^2}{m} = 1$.<br>The ellipse is centred at $(13, 0)$ with semi-axis $1$ along the $x$-axis and $\\sqrt{m}$ along the $y$-axis. There is exactly one intersection when the top of the ellipse $(13, \\sqrt{m})$ just touches the minimum point $(13, 6)$ of $y = f(x)$: $$\\sqrt{m} = 6 \\implies m = 36.$$"
      }
    ]
  },
  {
    id: "RI-2026-P1-Q11",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q11",
    category: "pure",
    topics: ["Vectors"],
    stem: "With reference to the origin $O$, the coordinates of $A$, $B$ and $C$ are $(2, 8, -a)$, $(1, -10, 3)$ and $(5, 6, a)$ respectively. The plane $\\pi$ contains points $O$, $A$, $B$ and $C$.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that $a = 1$.",
        type: "self",
        solution: "Since $O$ lies in $\\pi$, a normal to $\\pi$ is $$\\mathbf{n} = \\overrightarrow{OA} \\times \\overrightarrow{OB} = \\begin{pmatrix} 2 \\\\ 8 \\\\ -a \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ -10 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 24 - 10a \\\\ -a - 6 \\\\ -28 \\end{pmatrix}.$$ Since $C$ lies in $\\pi$ and $O$ lies in $\\pi$, $\\overrightarrow{OC} \\cdot \\mathbf{n} = 0$: $$\\begin{pmatrix} 5 \\\\ 6 \\\\ a \\end{pmatrix} \\cdot \\begin{pmatrix} 24 - 10a \\\\ -a - 6 \\\\ -28 \\end{pmatrix} = 0$$ $$120 - 50a - 6a - 36 - 28a = 0 \\implies 84 - 84a = 0 \\implies a = 1. \\text{ (shown)}$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the acute angle between $\\pi$ and the $yz$-plane (in degrees).",
        type: "auto",
        mode: "number",
        answer: "64.123",
        dp: 1,
        placeholder: "Angle in degrees",
        solution: "With $a = 1$, $\\mathbf{n} = \\begin{pmatrix} 14 \\\\ -7 \\\\ -28 \\end{pmatrix} = -7\\begin{pmatrix} 2 \\\\ -1 \\\\ -4 \\end{pmatrix}$, so $\\pi$ has normal $\\begin{pmatrix} -2 \\\\ 1 \\\\ 4 \\end{pmatrix}$ (direction), and $\\pi: \\mathbf{r} \\cdot \\begin{pmatrix} -2 \\\\ 1 \\\\ 4 \\end{pmatrix} = 0$. The $yz$-plane has normal $\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$.<br>Let $\\theta$ be the acute angle between the planes: $$\\cos\\theta = \\frac{\\left|\\begin{pmatrix} -2 \\\\ 1 \\\\ 4 \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}\\right|}{\\sqrt{21}\\,(1)} = \\frac{2}{\\sqrt{21}} \\implies \\theta = 64.123° \\approx 64.1°.$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "$\\pi$ and the $yz$-plane meet in the line $l$. By evaluating an appropriate cross product, find a vector equation for $l$.",
        type: "self",
        solution: "$l$ is parallel to the cross product of the two normals: $$\\begin{pmatrix} -2 \\\\ 1 \\\\ 4 \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 4 \\\\ -1 \\end{pmatrix}.$$ Since the origin lies on both planes, the origin lies on $l$. A vector equation of $l$ is $$\\mathbf{r} = \\lambda\\begin{pmatrix} 0 \\\\ 4 \\\\ -1 \\end{pmatrix}, \\quad \\lambda \\in \\mathbb{R}.$$"
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Write down the distance from $A$ to the $yz$-plane. Hence or otherwise, find the distance from $A$ to $l$ (give the second answer exact or to 3 s.f.).",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Distance from A to the yz-plane =", answer: "2", exactRequired: true, placeholder: "Integer value" },
          { label: "Distance from A to l =", answer: "sqrt(84/17)", placeholder: "Exact or 3 s.f." }
        ],
        solution: "$A = (2, 8, -1)$, so the distance from $A$ to the $yz$-plane is its $x$-coordinate, $2$.<br>The perpendicular from $A$ to the $yz$-plane, together with the perpendicular from that foot to $l$ and the line from $A$ to $l$, forms a right-angled triangle in which the angle at $l$ is the angle $\\theta$ between $\\pi$ and the $yz$-plane. Hence $$\\text{Distance from } A \\text{ to } l = \\frac{2}{\\sin 64.123°} = 2.22 \\text{ (3 s.f.)}.$$ <br><strong>Otherwise:</strong> $\\overrightarrow{OA} \\times \\begin{pmatrix} 0 \\\\ 4 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} -4 \\\\ 2 \\\\ 8 \\end{pmatrix}$, so the distance is $\\frac{\\sqrt{84}}{\\sqrt{17}} = \\sqrt{\\frac{84}{17}} \\approx 2.22$."
      }
    ]
  },
  {
    id: "RI-2026-P1-Q12",
    year: 2026,
    school: "RI",
    paper: "2026 Prelim Paper 1",
    qNum: "Q12",
    category: "pure",
    topics: ["Sequences & Series"],
    stem: "A seating specialist was tasked to install seats for a performance arena. In the curved section of the arena, he installed 21 seats in the front row facing the arena and for each subsequent row, there are 2 more seats than the row before it. The seating capacity of this curved section is 1664.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the total number of rows in this section of the arena, and the number of seats in the tenth row from the back of the section.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Number of rows =", answer: "32", exactRequired: true, placeholder: "Integer value" },
          { label: "Seats in tenth row from the back =", answer: "65", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "The numbers of seats form an AP with $a = 21$, $d = 2$. For $n$ rows: $$\\frac{n}{2}\\left[2(21) + (n-1)(2)\\right] = 1664 \\implies n^2 + 20n - 1664 = 0.$$ Using GC, $n = 32$ or $n = -52$ (rejected). There are $32$ rows.<br>The tenth row from the back is the $(32 - 10 + 1) = 23$rd row from the front: $$u_{23} = 21 + (23-1)(2) = 65.$$ There are $65$ seats."
      },
      {
        label: "(b)(i)",
        marks: 2,
        prompt: "At a performance held at this arena, the cost of a ticket for a front row seat at this curved section is 151 dollars. The cost of a ticket for a seat in every subsequent row decreases by $2\\%$ compared to the row before. The cost of tickets for seats in the same row are equal.<br>Sam can only afford a ticket below 100 dollars and he would like to sit as near to the front of the section as possible. Find the row nearest to the front for which he can purchase a ticket.",
        type: "auto",
        mode: "number",
        answer: "22",
        exactRequired: true,
        placeholder: "Row number",
        solution: "The ticket in the $n$th row costs $151(0.98)^{n-1}$ dollars. $$151(0.98)^{n-1} < 100 \\implies (n-1)\\ln 0.98 < \\ln\\frac{100}{151}$$ Dividing by $\\ln 0.98 < 0$ reverses the inequality: $$n - 1 > \\frac{\\ln(100/151)}{\\ln 0.98} = 20.4 \\implies n > 21.4.$$ <strong>Or</strong> from GC: row 21 costs $100.81 > 100$; row 22 costs $98.793 < 100$.<br>The row nearest to the front is the $22$nd row."
      },
      {
        label: "(b)(ii)",
        marks: 1,
        prompt: "If $F(r)$ is the total cost of tickets for the seats in the $r$th row from the front of the section, write down $F(r)$ in terms of $r$.",
        type: "auto",
        mode: "expr",
        answer: "151*0.98^(r-1)*(19+2*r)",
        vars: { r: [1, 2, 3] },
        placeholder: "Expression in r",
        solution: "Number of seats in the $r$th row $= 21 + (r-1)(2) = 19 + 2r$. Cost of a ticket in the $r$th row $= 151(0.98)^{r-1}$. $$F(r) = 151(0.98)^{r-1}(19 + 2r).$$"
      },
      {
        label: "(b)(iii)",
        marks: 3,
        prompt: "Find the total cost of tickets for all the seats in the first $n$ rows from the front, in the form of $$143450\\left(1 - A^n\\right) + B\\sum_{r=1}^{n} rA^{r-1},$$ where $A$ and $B$ are constants to be determined.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "A =", answer: "0.98", placeholder: "Decimal or exact value" },
          { label: "B =", answer: "302", exactRequired: true, placeholder: "Integer value" }
        ],
        solution: "$$\\sum_{r=1}^{n} F(r) = \\sum_{r=1}^{n} 151(0.98)^{r-1}(19 + 2r) = 2869\\sum_{r=1}^{n} (0.98)^{r-1} + 302\\sum_{r=1}^{n} r(0.98)^{r-1}.$$ The first sum is a GP with first term $1$ and common ratio $0.98$: $$2869 \\cdot \\frac{1 - 0.98^n}{1 - 0.98} = 143450\\left(1 - 0.98^n\\right).$$ Hence $$\\sum_{r=1}^{n} F(r) = 143450\\left(1 - 0.98^n\\right) + 302\\sum_{r=1}^{n} r(0.98)^{r-1},$$ so $A = 0.98$ and $B = 302$. (shown)"
      },
      {
        label: "(b)(iv)",
        marks: 3,
        prompt: "Suppose a company can purchase tickets for this performance before public sales are open and they would like to purchase 600 tickets in this curved section with a budget of 52 000 dollars. Determine whether this budget is sufficient for this purchase.",
        type: "self",
        solution: "The cheapest 600 tickets are in the back rows. The last (32nd) row has $21 + 31(2) = 83$ seats.<br>The last seven rows (rows 32 down to 26) have $83 + 81 + 79 + 77 + 75 + 73 + 71 = 539$ seats at full capacity, and we need $61$ more seats from the eighth row from the back, i.e. the 25th row.<br>$$\\text{Minimum cost} = \\sum_{r=26}^{32} F(r) + 61 \\times 151(0.98)^{24}$$ $$= \\left[\\sum_{r=1}^{32} F(r) - \\sum_{r=1}^{25} F(r)\\right] + 61 \\times 151(0.98)^{24}$$ $$\\approx 51\\,840 \\text{ dollars (nearest dollar)}.$$ Since $51\\,840 < 52\\,000$, <strong>yes, the budget is sufficient.</strong><br><em>(Buying from the front is far more expensive: the first 16 rows alone cost more than the budget.)</em>"
      }
    ]
  }
]);
