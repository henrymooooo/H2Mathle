window.registerQuestions([
  {
    id: "HCI-2025-P2-Q1",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Area Under Curve", "Volume of Revolution"],
    stem: "The region $A$ is bounded by the curves $y = \\sqrt{x + 1}$, $y = \\sqrt{7 - 2x}$, the $x$-axis and the $y$-axis.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Find the exact area of $A$.",
        type: "auto",
        mode: "number",
        answer: "3*sqrt(3) - 2/3",
        exactRequired: true,
        placeholder: "Exact value",
        solutionSvg: `<svg viewBox="0 0 280 185" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="150" x2="262" y2="150" stroke-width="1.3"/>
  <polyline points="256,146 262,150 256,154" fill="none" stroke-width="1.3"/>
  <line x1="55" y1="168" x2="55" y2="16" stroke-width="1.3"/>
  <polyline points="51,22 55,16 59,22" fill="none" stroke-width="1.3"/>
  <text x="260" y="164" stroke="none">x</text>
  <text x="61" y="22" stroke="none">y</text>
  <text x="43" y="163" stroke="none">O</text>
  <path d="M 55,150 L 55,108 Q 100,86 145,77 Q 186,95 212.5,150 Z" fill="rgba(91,155,213,0.22)" stroke="none"/>
  <path d="M 10,150 Q 32,120 55,108 Q 100,86 145,77 Q 180,71 225,65" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <path d="M 55,39 Q 105,53 145,77 Q 186,98 212.5,150" fill="none" stroke="#4a8fe7" stroke-width="1.8"/>
  <circle cx="55" cy="108" r="2.6" fill="#2c2925" stroke="none"/>
  <circle cx="55" cy="39" r="2.6" fill="#2c2925" stroke="none"/>
  <circle cx="145" cy="77" r="2.8" fill="#cf5652" stroke="none"/>
  <circle cx="212.5" cy="150" r="2.6" fill="#2c2925" stroke="none"/>
  <text x="15" y="42" stroke="none">(0, √7)</text>
  <text x="60" y="116" stroke="none">(0, 1)</text>
  <text x="132" y="64" stroke="none">(2, √3)</text>
  <text x="195" y="166" stroke="none">(3.5, 0)</text>
  <text x="125" y="130" stroke="none" font-style="italic">A</text>
</svg>`,
        solution: "Find the intersection of $y = \\sqrt{x + 1}$ and $y = \\sqrt{7 - 2x}$:<br>$$x + 1 = 7 - 2x \\implies 3x = 6 \\implies x = 2, \\quad y = \\sqrt{3}$$<br>Also $y = \\sqrt{7 - 2x}$ meets the $x$-axis at $x = 3.5$.<br>Integrating with respect to $x$:<br>$$\\text{Area} = \\int_0^2 \\sqrt{x + 1}\\,\\mathrm{d}x + \\int_2^{3.5} \\sqrt{7 - 2x}\\,\\mathrm{d}x$$<br>$$= \\left[\\frac{2(x + 1)^{\\frac{3}{2}}}{3}\\right]_0^2 + \\left[-\\frac{(7 - 2x)^{\\frac{3}{2}}}{3}\\right]_2^{3.5}$$<br>$$= \\left(\\frac{2(3\\sqrt{3})}{3} - \\frac{2}{3}\\right) + \\left(0 - \\left(-\\frac{3\\sqrt{3}}{3}\\right)\\right)$$<br>$$= 2\\sqrt{3} - \\frac{2}{3} + \\sqrt{3} = 3\\sqrt{3} - \\frac{2}{3}\\text{ units}^2.$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "Find the volume of the solid obtained when $A$ is rotated through $2\\pi$ radians about the $y$-axis.",
        type: "auto",
        mode: "number",
        answer: "47.3832601",
        placeholder: "Value to 3 s.f.",
        solution: "Express $x$ in terms of $y$: $y = \\sqrt{7 - 2x} \\implies x = \\frac{7 - y^2}{2}$, and $y = \\sqrt{x + 1} \\implies x = y^2 - 1$.<br>Rotating $A$ about the $y$-axis:<br>$$V = \\pi\\int_0^{\\sqrt{3}} \\left(\\frac{7 - y^2}{2}\\right)^2 \\mathrm{d}y - \\pi\\int_1^{\\sqrt{3}} (y^2 - 1)^2\\,\\mathrm{d}y$$<br>Evaluating via GC:<br>$$V \\approx 47.38326 \\approx 47.4\\text{ units}^3 \\text{ (3 s.f.)}.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q2",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Maclaurin Series", "Differentiation"],
    stem: "It is given that $y = \\ln\\left[\\sin\\left(x + \\frac{\\pi}{4}\\right)\\right]$, where $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$.",
    parts: [
      {
        label: "(a)",
        marks: 6,
        prompt: "Show that $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + 1 = 0$. Hence find the first four non-zero terms of the Maclaurin expansion of $y$, leaving your answer in exact form.",
        type: "self",
        solution: "Exponentiating gives $\\mathrm{e}^y = \\sin\\left(x + \\frac{\\pi}{4}\\right)$.<br>Differentiating with respect to $x$:<br>$$\\mathrm{e}^y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\cos\\left(x + \\frac{\\pi}{4}\\right)$$<br>Differentiating again with respect to $x$:<br>$$\\mathrm{e}^y\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + \\mathrm{e}^y\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\sin\\left(x + \\frac{\\pi}{4}\\right) = -\\mathrm{e}^y$$<br>Dividing through by $\\mathrm{e}^y > 0$:<br>$$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} + \\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 + 1 = 0 \\quad (\\text{shown}).$$<br>Differentiating implicitly once more:<br>$$\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} + 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\left(\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right) = 0$$<br>At $x = 0$:<br>• $y = \\ln\\left(\\frac{1}{\\sqrt{2}}\\right) = -\\frac{1}{2}\\ln 2$<br>• $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\cot\\frac{\\pi}{4} = 1$<br>• $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -(1)^2 - 1 = -2$<br>• $\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3} = -2(1)(-2) = 4$<br>Hence the Maclaurin expansion of $y$ is:<br>$$y = \\ln\\left(\\frac{1}{\\sqrt{2}}\\right) + x - x^2 + \\frac{2}{3}x^3 + \\dots$$"
      },
      {
        label: "(b)",
        marks: 5,
        prompt: "Verify the result obtained in part (a) using standard series from the List of Formulae (MF27).",
        type: "self",
        solution: "Using the addition formula for sine:<br>$$y = \\ln\\left[\\sin x\\cos\\frac{\\pi}{4} + \\cos x\\sin\\frac{\\pi}{4}\\right] = \\ln\\left[\\frac{1}{\\sqrt{2}}(\\sin x + \\cos x)\\right] = \\ln\\left(\\frac{1}{\\sqrt{2}}\\right) + \\ln(\\sin x + \\cos x)$$<br>Using standard series up to $x^3$: $\\sin x + \\cos x = 1 + x - \\frac{x^2}{2} - \\frac{x^3}{6} + \\dots$<br>Let $u = x - \\frac{x^2}{2} - \\frac{x^3}{6} + \\dots$ and apply $\\ln(1 + u) = u - \\frac{u^2}{2} + \\frac{u^3}{3} - \\dots$:<br>$$\\ln(\\sin x + \\cos x) = \\left(x - \\frac{x^2}{2} - \\frac{x^3}{6}\\right) - \\frac{1}{2}\\left(x - \\frac{x^2}{2}\\right)^2 + \\frac{1}{3}x^3 + \\dots$$<br>$$= \\left(x - \\frac{x^2}{2} - \\frac{x^3}{6}\\right) - \\frac{1}{2}(x^2 - x^3) + \\frac{1}{3}x^3 + \\dots$$<br>$$= x + \\left(-\\frac{1}{2} - \\frac{1}{2}\\right)x^2 + \\left(-\\frac{1}{6} + \\frac{1}{2} + \\frac{1}{3}\\right)x^3 + \\dots = x - x^2 + \\frac{2}{3}x^3 + \\dots$$<br>Therefore $y = \\ln\\left(\\frac{1}{\\sqrt{2}}\\right) + x - x^2 + \\frac{2}{3}x^3 + \\dots$ (verified)."
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q3",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Parametric Equations", "Tangents and Normals", "Conic Sections"],
    stem: "The parametric equations of the curve $C$ are<br>$$x = 1 - 3\\cosec\\theta \\quad \\text{and} \\quad y = 2\\cot\\theta - 3, \\quad \\text{where } 0 \\le \\theta \\le \\pi.$$",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{2}{3}\\sec\\theta$. Hence find the equation of the normal to $C$ at the point where $\\theta = \\frac{\\pi}{4}$. Give the equation in the form $y = Ax + B$, where $A$ and $B$ are exact constants to be found.",
        type: "self",
        solution: "$$\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta} = 3\\cosec\\theta\\cot\\theta, \\qquad \\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = -2\\cosec^2\\theta$$<br>$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{-2\\cosec^2\\theta}{3\\cosec\\theta\\cot\\theta} = -\\frac{2\\cosec\\theta}{3\\cot\\theta} = -\\frac{2}{3\\cos\\theta} = -\\frac{2}{3}\\sec\\theta \\quad (\\text{shown}).$$<br>When $\\theta = \\frac{\\pi}{4}$: $x = 1 - 3\\sqrt{2}$, $y = -1$, and $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{2\\sqrt{2}}{3}$.<br>Gradient of normal $= \\frac{3}{2\\sqrt{2}} = \\frac{3\\sqrt{2}}{4}$.<br>Equation of normal:<br>$$y - (-1) = \\frac{3}{2\\sqrt{2}}\\big(x - (1 - 3\\sqrt{2})\\big)$$<br>$$y = \\frac{3}{2\\sqrt{2}}x - \\frac{3}{2\\sqrt{2}} + \\frac{9}{2} - 1 = \\frac{3\\sqrt{2}}{4}x + \\frac{7}{2} - \\frac{3\\sqrt{2}}{4}.$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Show that the normal found in part (a) will cut $C$ again.",
        type: "self",
        solution: "Substituting $x = 1 - 3\\cosec\\theta$ and $y = 2\\cot\\theta - 3$ into the normal equation:<br>$$2\\cot\\theta - 3 = \\frac{3}{2\\sqrt{2}}(1 - 3\\cosec\\theta) - \\frac{3}{2\\sqrt{2}} + \\frac{7}{2}$$<br>Solving graphically on the GC for $0 < \\theta < \\pi$ gives two solutions:<br>$$\\theta = \\frac{\\pi}{4} \\approx 0.7854 \\quad \\text{and} \\quad \\theta \\approx 2.9532$$<br>Since there is a second valid value of $\\theta \\in (0, \\pi)$, the normal cuts $C$ again (shown)."
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "Find the Cartesian equation of $C$.",
        type: "self",
        solution: "From the parametric equations, $\\cosec\\theta = \\frac{1 - x}{3}$ and $\\cot\\theta = \\frac{y + 3}{2}$.<br>Using $\\cosec^2\\theta - \\cot^2\\theta = 1$:<br>$$\\frac{(x - 1)^2}{9} - \\frac{(y + 3)^2}{4} = 1$$<br>For $0 < \\theta < \\pi$, $0 < \\sin\\theta \\le 1 \\implies \\cosec\\theta \\ge 1 \\implies x = 1 - 3\\cosec\\theta \\le -2$.<br>Hence the Cartesian equation of $C$ is $\\frac{(x - 1)^2}{9} - \\frac{(y + 3)^2}{4} = 1$, $x \\le -2$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Sketch $C$, indicating clearly its key features.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 280 210" width="280" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="65" x2="262" y2="65" stroke-width="1.3"/>
  <polyline points="256,61 262,65 256,69" fill="none" stroke-width="1.3"/>
  <line x1="125" y1="200" x2="125" y2="15" stroke-width="1.3"/>
  <polyline points="121,21 125,15 129,21" fill="none" stroke-width="1.3"/>
  <text x="260" y="79" stroke="none">x</text>
  <text x="114" y="21" stroke="none">y</text>
  <text x="114" y="77" stroke="none">O</text>
  <line x1="35" y1="185" x2="235" y2="25" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.2"/>
  <line x1="35" y1="25" x2="235" y2="185" stroke-dasharray="4,3" opacity="0.65" stroke-width="1.2"/>
  <path d="M 42,35 C 76,63 99,85 99,105 C 99,125 76,147 42,175" fill="none" stroke="#4a8fe7" stroke-width="2.2"/>
  <circle cx="99" cy="105" r="2.8" fill="#4a8fe7" stroke="none"/>
  <circle cx="135" cy="105" r="2.5" fill="#2c2925" stroke="none"/>
  <text x="48" y="114" stroke="none">(-2, -3)</text>
  <text x="142" y="109" stroke="none">(1, -3)</text>
  <text x="145" y="34" stroke="none">y = (2/3)x - 11/3</text>
  <text x="172" y="156" stroke="none">y = -(2/3)x - 7/3</text>
</svg>`,
        solution: "Curve $C$ is the left branch ($x \\le -2$) of the hyperbola centred at $(1, -3)$:<br>• Vertex: $(-2, -3)$<br>• Oblique asymptotes: $y + 3 = \\pm\\frac{2}{3}(x - 1)$, i.e. $y = \\frac{2}{3}x - \\frac{11}{3}$ and $y = -\\frac{2}{3}x - \\frac{7}{3}$<br>• $x$-intercept: when $y = 0$, $\\frac{(x-1)^2}{9} = 1 + \\frac{9}{4} = \\frac{13}{4} \\implies x = 1 - \\frac{3\\sqrt{13}}{2} \\approx -4.41$."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "Find the range of values of $m$ such that there is no intersection between the line $y = m(x - 1) - 3$ and $C$.",
        type: "self",
        solution: "The line $y = m(x - 1) - 3$ passes through the centre $(1, -3)$ of the hyperbola with gradient $m$.<br>Since the asymptotes through $(1, -3)$ have gradients $\\pm\\frac{2}{3}$, the line does not intersect $C$ if and only if:<br>$$m \\le -\\frac{2}{3} \\quad \\text{or} \\quad m \\ge \\frac{2}{3}.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q4",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Vectors", "Dot Product", "Cross Product"],
    stem: "Let $A$, $B$ and $C$ be the points on the same plane with position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively and $\\mathbf{a} + \\mathbf{b} + \\mathbf{c} = \\mathbf{0}$. It is given that vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ are unit vectors.",
    parts: [
      {
        label: "(a)(i)",
        marks: 3,
        prompt: "By considering $\\mathbf{c} \\cdot \\mathbf{c}$, find the value of $\\mathbf{a} \\cdot \\mathbf{b}$.",
        type: "auto",
        mode: "number",
        answer: "-1/2",
        exactRequired: true,
        placeholder: "Exact value",
        solution: "Since $\\mathbf{a} + \\mathbf{b} + \\mathbf{c} = \\mathbf{0}$, we have $\\mathbf{c} = -(\\mathbf{a} + \\mathbf{b})$.<br>$$\\mathbf{c} \\cdot \\mathbf{c} = (-\\mathbf{a} - \\mathbf{b}) \\cdot (-\\mathbf{a} - \\mathbf{b}) = |\\mathbf{a}|^2 + 2\\mathbf{a} \\cdot \\mathbf{b} + |\\mathbf{b}|^2$$<br>Since $|\\mathbf{a}| = |\\mathbf{b}| = |\\mathbf{c}| = 1$:<br>$$1 = 1 + 2\\mathbf{a} \\cdot \\mathbf{b} + 1 \\implies \\mathbf{a} \\cdot \\mathbf{b} = -\\frac{1}{2}.$$"
      },
      {
        label: "(a)(ii)",
        marks: 2,
        prompt: "Find the angle ∠$AOB$.",
        type: "auto",
        mode: "number",
        answers: ["120", "2*pi/3"],
        placeholder: "Angle in degrees (or radians)",
        solution: "$$\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos(\\text{∠}AOB) \\implies \\cos(\\text{∠}AOB) = -\\frac{1}{2}$$<br>Therefore, ∠$AOB = 120^\\circ$ (or $\\frac{2\\pi}{3}$ rad)."
      },
      {
        label: "(a)(iii)",
        marks: 2,
        prompt: "Draw the position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ on a single diagram. Using your diagram, identify the type of triangle $ABC$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 220 190" width="220" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="110,24 46,135 174,135" fill="rgba(91,155,213,0.12)" stroke="#2c2925" stroke-width="1.6"/>
  <line x1="110" y1="98" x2="110" y2="24" stroke="#4a8fe7" stroke-width="2"/>
  <line x1="110" y1="98" x2="46" y2="135" stroke="#4a8fe7" stroke-width="2"/>
  <line x1="110" y1="98" x2="174" y2="135" stroke="#4a8fe7" stroke-width="2"/>
  <circle cx="110" cy="98" r="2.6" fill="#2c2925"/>
  <text x="115" y="96" stroke="none" font-style="italic">O</text>
  <text x="106" y="18" stroke="none" font-style="italic">C</text>
  <text x="32" y="146" stroke="none" font-style="italic">A</text>
  <text x="178" y="146" stroke="none" font-style="italic">B</text>
  <text x="115" y="64" stroke="none" fill="#4a8fe7" font-weight="bold">c</text>
  <text x="72" y="112" stroke="none" fill="#4a8fe7" font-weight="bold">a</text>
  <text x="142" y="112" stroke="none" fill="#4a8fe7" font-weight="bold">b</text>
  <text x="98" y="122" stroke="none" font-size="10">120°</text>
</svg>`,
        solution: "By symmetry, $\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{c} = \\mathbf{c} \\cdot \\mathbf{a} = -\\frac{1}{2}$, so ∠$AOB =$ ∠$BOC =$ ∠$COA = 120^\\circ$ and $OA = OB = OC = 1$.<br>Thus △$OAB$, △$OBC$ and △$OCA$ are congruent isosceles triangles, giving $AB = BC = CA = \\sqrt{3}$ and ∠$ABC =$ ∠$BCA =$ ∠$CAB = 60^\\circ$.<br>Hence triangle $ABC$ is an <strong>equilateral triangle</strong>."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The point $D$ has position vector $\\mathbf{a} + \\mathbf{b}$. Find the area of the quadrilateral $ACBD$.",
        type: "auto",
        mode: "number",
        answer: "sqrt(3)",
        exactRequired: true,
        placeholder: "Exact value",
        solutionSvg: `<svg viewBox="0 0 220 205" width="220" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
  <polygon points="110,22 46,133 110,170 174,133" fill="rgba(91,155,213,0.16)" stroke="#2c2925" stroke-width="1.6"/>
  <line x1="110" y1="22" x2="110" y2="170" stroke-dasharray="4,3" opacity="0.7" stroke-width="1.2"/>
  <line x1="46" y1="133" x2="174" y2="133" stroke-dasharray="4,3" opacity="0.7" stroke-width="1.2"/>
  <polyline points="110,124 119,124 119,133" fill="none" stroke-width="1.1"/>
  <circle cx="110" cy="96" r="2.6" fill="#2c2925"/>
  <text x="115" y="94" stroke="none" font-style="italic">O</text>
  <text x="106" y="16" stroke="none" font-style="italic">C</text>
  <text x="32" y="140" stroke="none" font-style="italic">A</text>
  <text x="179" y="140" stroke="none" font-style="italic">B</text>
  <text x="106" y="186" stroke="none" font-style="italic">D</text>
</svg>`,
        solution: "Since $OD = \\mathbf{a} + \\mathbf{b} = -\\mathbf{c}$, the points $C$, $O$ and $D$ are collinear with $DC = |\\mathbf{c} - (-\\mathbf{c})| = 2|\\mathbf{c}| = 2$.<br>Also $OADB$ is a rhombus (since $|\\mathbf{a}| = |\\mathbf{b}| = 1$), so its diagonals $OD$ (hence $CD$) and $AB$ are perpendicular.<br>Since $AB = \\sqrt{1^2 + 1^2 - 2(1)(1)\\cos 120^\\circ} = \\sqrt{3}$, $ACBD$ is a kite with perpendicular diagonals $DC = 2$ and $AB = \\sqrt{3}$:<br>$$\\text{Area of } ACBD = \\frac{1}{2} \\times DC \\times AB = \\frac{1}{2}(2)(\\sqrt{3}) = \\sqrt{3}\\text{ units}^2.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q5",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Permutations and Combinations", "Probability"],
    stem: "The eleven letters in the word <strong>INSPIRATION</strong> are each printed on separate, identical cards.",
    parts: [
      {
        label: "(a)(i)",
        marks: 1,
        prompt: "Find the number of ways in which the cards can be arranged in a row if there are no restrictions.",
        type: "auto",
        mode: "number",
        answer: "3326400",
        exactRequired: true,
        placeholder: "Integer",
        solution: "INSPIRATION has $11$ letters: $3$ I's, $2$ N's, and $6$ distinct letters (S, P, R, A, T, O).<br>Number of arrangements $= \\frac{11!}{2!\\,3!} = 3326400$."
      },
      {
        label: "(a)(ii)",
        marks: 3,
        prompt: "Find the number of ways in which the cards can be arranged in a row if the letters N are together or the letters I must all be separated, but not both.",
        type: "auto",
        mode: "number",
        answer: "1733760",
        exactRequired: true,
        placeholder: "Integer",
        solution: "Let $A$ be the event 'both N's are together' and $B$ be the event 'all three I's are separated'.<br>• $n(A)$: Treat NN as 1 unit (10 units total, 3 identical I's): $\\frac{10!}{3!} = 604800$.<br>• $n(B)$: Arrange the 8 non-I letters ($\\frac{8!}{2!}$) and slot the 3 I's into 3 of the 9 gaps ($^9C_3$): $\\frac{8!}{2!} \\times {^9C_3} = 1693440$.<br>• $n(A \\cap B)$: Arrange the 7 non-I units with NN grouped ($7!$) and slot the 3 I's into 3 of the 8 gaps ($^8C_3$): $7! \\times {^8C_3} = 282240$.<br>Required number of ways (either $A$ or $B$, not both):<br>$$n(A) + n(B) - 2n(A \\cap B) = 604800 + 1693440 - 2(282240) = 1733760.$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Three of the eleven cards are removed at random. Find the probability that the letters on the eight cards left behind are all distinct.",
        type: "auto",
        mode: "number",
        answer: "2/55",
        placeholder: "Exact fraction or 3 s.f.",
        solution: "There are $8$ distinct letters in INSPIRATION (I, N, S, P, R, A, T, O).<br>For the remaining $8$ cards to be all distinct, the $3$ removed cards must consist of $2$ of the $3$ I's and $1$ of the $2$ N's:<br>$$\\text{Probability} = \\frac{{^3C_2} \\times {^2C_1}}{{^{11}C_3}} = \\frac{3 \\times 2}{165} = \\frac{2}{55}.$$"
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q6",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability", "Conditional Probability"],
    stem: "A basketball free throw game involves a team of two players, Ben and John. The game consists of at most three throws and the moment a player makes a successful shot, the team wins, and the game will end.<br>The game uses the following rules:<br>• Only one player is selected for each game and the probability that Ben is selected in a game is $0.7$.<br>• The probabilities that Ben and John make a successful shot in any single attempt are $0.1$ and $0.07$ respectively.<br>• The shots are independent of each other.",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "Find the probability that the team wins the game.",
        type: "auto",
        mode: "number",
        answer: "0.2483929",
        placeholder: "Probability (exact or 3 s.f.)",
        solution: "A player wins if they do not miss all $3$ throws:<br>$$\\mathrm{P}(\\text{win}) = \\mathrm{P}(\\text{Ben})\\,\\mathrm{P}(\\text{win} \\mid \\text{Ben}) + \\mathrm{P}(\\text{John})\\,\\mathrm{P}(\\text{win} \\mid \\text{John})$$<br>$$= 0.7(1 - 0.9^3) + 0.3(1 - 0.93^3) = 0.7(0.271) + 0.3(0.195643) = 0.2483929 \\approx 0.248 \\text{ (3 s.f.)}.$$"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The team did not win the game. Find the probability that John was the one who was selected to shoot.",
        type: "auto",
        mode: "number",
        answer: "0.32105484",
        placeholder: "Probability to 3 s.f.",
        solution: "$$\\mathrm{P}(\\text{John} \\mid \\text{did not win}) = \\frac{\\mathrm{P}(\\text{John and did not win})}{\\mathrm{P}(\\text{did not win})} = \\frac{0.3 \\times 0.93^3}{1 - 0.2483929} = \\frac{0.2413071}{0.7516071} \\approx 0.321 \\text{ (3 s.f.)}.$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "The team attempts the game repeatedly until the first game is won. Find the least number of attempts required such that the probability of winning within $n$ games is at least $0.95$.",
        type: "auto",
        mode: "number",
        answer: "11",
        exactRequired: true,
        placeholder: "Integer",
        solution: "Probability of winning within $n$ games is $1 - (1 - 0.2483929)^n \\ge 0.95$:<br>$$(0.7516071)^n \\le 0.05$$<br>Taking logarithms (or using GC table):<br>$$n \\ge \\frac{\\ln 0.05}{\\ln 0.7516071} \\approx 10.49$$<br>Check: $n = 10 \\implies (0.7516071)^{10} \\approx 0.0575 > 0.05$; $n = 11 \\implies (0.7516071)^{11} \\approx 0.0432 < 0.05$.<br>Hence the least number of attempts is $11$."
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q7",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Correlation and Regression"],
    stem: "An ice-cream seller records the monthly ice cream sales, $s$ thousand dollars for different temperature, $t$ degrees Celsius during the winter season. The recorded values are shown in the table below.<br><div class='q-table-wrap'><table class='q-table'><tr><th>$t$</th><td>1</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><th>$s$</th><td>14</td><td>15</td><td>15</td><td>16</td><td>18</td><td>21</td><td>23</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "It is given that the regression line of $s$ on $t$ is $s = 1.125t + 11$. Using this regression line, find the sum of the squares of the residuals.",
        type: "auto",
        mode: "number",
        answer: "14.75",
        placeholder: "Exact value",
        solution: "Predicted values $\\hat{s} = 1.125t + 11$: $12.125, 15.5, 16.625, 17.75, 18.875, 20, 21.125$.<br>Squared residuals $(s - \\hat{s})^2$: $3.515625, 0.25, 2.640625, 3.0625, 0.765625, 1, 3.515625$.<br>Sum of squares of residuals $= \\sum (s - \\hat{s})^2 = 14.75$."
      },
      {
        label: "(b)",
        marks: 1,
        prompt: "State the coordinates of an additional data point such that, with all $8$ data points, the regression line remains the same as in part (a).",
        type: "self",
        solution: "Any point lying on the regression line $s = 1.125t + 11$ (for instance, $(\\bar{t}, \\bar{s}) = \\left(\\frac{40}{7}, \\frac{122}{7}\\right) \\approx (5.71, 17.4)$, or $(0, 11)$) has zero residual and leaves the regression line unchanged."
      },
      {
        label: "(c)",
        marks: 1,
        prompt: "Sketch a scatter diagram of $s$ against $t$ for the data given in the table.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 185" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="35" y1="155" x2="245" y2="155" stroke-width="1.3"/>
  <polyline points="239,151 245,155 239,159" fill="none" stroke-width="1.3"/>
  <line x1="45" y1="165" x2="45" y2="16" stroke-width="1.3"/>
  <polyline points="41,22 45,16 49,22" fill="none" stroke-width="1.3"/>
  <text x="242" y="170" stroke="none" font-style="italic">t</text>
  <text x="32" y="22" stroke="none" font-style="italic">s</text>
  <text x="61" y="170" stroke="none">1</text>
  <text x="221" y="170" stroke="none">9</text>
  <text x="24" y="128" stroke="none">14</text>
  <text x="24" y="39" stroke="none">23</text>
  <circle cx="65" cy="125" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="125" cy="115" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="145" cy="115" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="165" cy="105" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="185" cy="85" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="205" cy="55" r="3" fill="#4ca885" stroke="none"/>
  <circle cx="225" cy="35" r="3" fill="#4ca885" stroke="none"/>
</svg>`,
        solution: "Plot the $7$ points $(1, 14), (4, 15), (5, 15), (6, 16), (7, 18), (8, 21), (9, 23)$ with axes labelled $t$ and $s$, indicating the endpoint ranges $t \\in [1, 9]$ and $s \\in [14, 23]$."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The following three models are proposed, where $a, b, c, d, f$ and $h$ are positive constants:<br>(A) $s = at^2 + b$<br>(B) $s = -c\\mathrm{e}^t + d$<br>(C) $s = f\\ln(t + h)$<br>Explain which of these models gives the best fit to the data. State the values of the constants for the chosen model.",
        type: "self",
        solution: "From the scatter diagram, as $t$ increases, $s$ increases at an increasing rate (positive gradient and concave upwards).<br>Model (B) is decreasing and model (C) increases at a decreasing rate (concave downwards).<br>Thus <strong>model (A)</strong> ($s = at^2 + b$) gives the best fit.<br>Regressing $s$ on $t^2$ using the GC gives $s = 0.118587t^2 + 12.8206$.<br>Hence $a = 0.119$ and $b = 12.8$ (to 3 s.f.)."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "A temperature of $F$ degrees Fahrenheit is equivalent to a temperature of $C$ degrees Celsius, where $F = \\frac{9}{5}C + 32$.<br>Using the model you chose in part (d), re-write the equation so that it can be used to estimate the monthly sales when the temperature, $T$, is given in degrees Fahrenheit.",
        type: "self",
        solution: "Since $T = \\frac{9}{5}t + 32$, we have $t = \\frac{5}{9}(T - 32)$.<br>Substituting into $s = 0.118587t^2 + 12.8206$:<br>$$s = 0.118587\\left[\\frac{5}{9}(T - 32)\\right]^2 + 12.8206$$<br>$$s = 0.0366(T - 32)^2 + 12.8 \\quad (\\text{to 3 s.f.}).$$"
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q8",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Sampling", "Hypothesis Testing"],
    stem: "A food producer claims that the mean mass of a can of beans it produces is $425\\text{ g}$. Following customer feedback, the production manager wishes to test if the mean mass of a can of beans is indeed $425\\text{ g}$.<br>The production manager took a random sample of size $50$ and the mass of each can, in $x\\text{ g}$, is recorded and the results are shown below:<br>$$\\sum x = 21209, \\qquad \\sum (x - 424.18)^2 = 522.$$",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "State what it means for a sample to be random in this context.",
        type: "self",
        solution: "Every can of beans produced by the food producer has an equal chance of being selected, and each can is selected independently of the others."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Find the unbiased estimates for the population mean and variance.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "424.18", placeholder: "Exact or 3 s.f." },
          { label: "Variance =", answer: "522/49", placeholder: "Exact or 3 s.f." }
        ],
        solution: "Unbiased estimate of the population mean:<br>$$\\bar{x} = \\frac{\\sum x}{50} = \\frac{21209}{50} = 424.18$$<br>Unbiased estimate of the population variance:<br>$$s^2 = \\frac{\\sum (x - \\bar{x})^2}{n - 1} = \\frac{\\sum (x - 424.18)^2}{49} = \\frac{522}{49} \\approx 10.7 \\text{ (3 s.f.)}.$$"
      },
      {
        label: "(c)",
        marks: 5,
        prompt: "State the hypotheses for the manager's test, defining any parameters you use. Carry out the test at the $5\\%$ level of significance, giving your conclusion in the context of the question.",
        type: "self",
        solution: "Let $X$ be the mass (in grams) of a can of beans, and let $\\mu$ be the population mean mass of a can of beans.<br>$$\\mathrm{H}_0: \\mu = 425 \\qquad \\text{vs} \\qquad \\mathrm{H}_1: \\mu \\ne 425$$<br>Under $\\mathrm{H}_0$, since $n = 50$ is large, by the Central Limit Theorem, $\\bar{X} \\sim \\mathrm{N}\\left(425, \\frac{\\sigma^2}{50}\\right)$ approximately.<br>Test statistic: $Z = \\frac{\\bar{X} - 425}{S/\\sqrt{50}} \\sim \\mathrm{N}(0, 1)$ approximately.<br>Using $\\bar{x} = 424.18$ and $s^2 = \\frac{522}{49}$:<br>$$z = \\frac{424.18 - 425}{\\sqrt{\\frac{522}{49 \\times 50}}} \\approx -1.7764, \\qquad p\\text{-value} = 0.0757 \\text{ (3 s.f.)}$$<br>Since $p\\text{-value} = 0.0757 > 0.05$, we <strong>do not reject $\\mathrm{H}_0$</strong> at the $5\\%$ level of significance. There is insufficient evidence to conclude that the population mean mass of a can of beans is not $425\\text{ g}$."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "The production manager wishes to test whether the mean mass of a can of beans has increased using the alternative manufacturing process. He finds that the mean mass of $55$ randomly chosen cans is $426.5\\text{ g}$. He carries out a hypothesis test at $10\\%$ level of significance.<br>Explain, with justification, how the population standard deviation of the mass of a can produced under the alternative process will affect the conclusion made by the production manager.",
        type: "self",
        solution: "Let $\\mu$ and $\\sigma$ be the population mean and standard deviation of the mass of a can produced under the alternative process.<br>$$\\mathrm{H}_0: \\mu = 425 \\qquad \\text{vs} \\qquad \\mathrm{H}_1: \\mu > 425$$<br>With $n = 55$ (large, by CLT), test statistic $Z = \\frac{\\bar{Y} - 425}{\\sigma/\\sqrt{55}} \\sim \\mathrm{N}(0, 1)$ approximately.<br>At the $10\\%$ level of significance (one-tailed), we reject $\\mathrm{H}_0$ if $z \\ge 1.28155$:<br>$$\\frac{426.5 - 425}{\\sigma/\\sqrt{55}} \\ge 1.28155 \\implies \\sigma \\le \\frac{1.5\\sqrt{55}}{1.28155} \\approx 8.6803$$<br>Therefore:<br>• If $0 < \\sigma \\le 8.68$ (3 s.f.), $\\mathrm{H}_0$ is rejected and the manager concludes the mean mass has increased.<br>• If $\\sigma > 8.68$ (3 s.f.), $\\mathrm{H}_0$ is not rejected and there is insufficient evidence that the mean mass has increased."
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q9",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Discrete Random Variables", "Central Limit Theorem", "Binomial Distribution"],
    stem: "In each round of a treasure hunt game, a player randomly selects a spot from a large number of predefined treasure locations on an island. Each spot uncovers one outcome, and a score $x$ is awarded based on the outcome. The table below shows all the possible outcomes in a round and the corresponding scores. Each round is independent and the game resets after every round, so that the probabilities remain unchanged.<br><div class='q-table-wrap'><table class='q-table'><tr><th>Outcome</th><td>Cursed trap</td><td>Small trap</td><td>Mystery box</td><td>Gold chest</td></tr><tr><th>Score, $x$</th><td>$-3$</td><td>$-0.3$</td><td>$p$</td><td>$5$</td></tr><tr><th>$\\mathrm{P}(X = x)$</th><td>$0.2$</td><td>$p$</td><td>$q$</td><td>$0.1$</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 2,
        prompt: "Show that $\\mathrm{E}(X) = -0.1 + 0.4p - p^2$.",
        type: "self",
        solution: "Since probabilities sum to $1$: $0.2 + p + q + 0.1 = 1 \\implies q = 0.7 - p$.<br>$$\\mathrm{E}(X) = (-3)(0.2) + (-0.3)p + pq + 5(0.1)$$<br>$$= -0.6 - 0.3p + p(0.7 - p) + 0.5 = -0.1 + 0.4p - p^2 \\quad (\\text{shown}).$$"
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "Hence find the maximum and minimum possible values of $\\mathrm{E}(X)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Max E(X) =", answer: "-0.06", exactRequired: true, placeholder: "Exact value" },
          { label: "Min E(X) =", answer: "-0.31", exactRequired: true, placeholder: "Exact value" }
        ],
        solution: "Since $p \\ge 0$ and $q = 0.7 - p \\ge 0$, the valid domain is $0 \\le p \\le 0.7$.<br>Completing the square: $\\mathrm{E}(X) = -(p - 0.2)^2 - 0.06$.<br>• Maximum occurs at $p = 0.2$: $\\max \\mathrm{E}(X) = -0.06$.<br>• Minimum occurs at the endpoint furthest from $0.2$, i.e. $p = 0.7$: $\\min \\mathrm{E}(X) = -0.1 + 0.4(0.7) - (0.7)^2 = -0.31$."
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "The treasure hunt game is played for $30$ rounds. If $p = 0.4$, find the probability that the player's mean score exceeds $0$.",
        type: "auto",
        mode: "number",
        answer: "0.39670264",
        placeholder: "Probability to 3 s.f.",
        solution: "When $p = 0.4$, $q = 0.3$:<br>• $\\mathrm{E}(X) = -0.1 + 0.4(0.4) - (0.4)^2 = -0.1$<br>• $\\mathrm{E}(X^2) = (-3)^2(0.2) + (-0.3)^2(0.4) + (0.4)^2(0.3) + 5^2(0.1) = 4.384$<br>• $\\mathrm{Var}(X) = 4.384 - (-0.1)^2 = 4.374$<br>Since $n = 30$ is large, by the Central Limit Theorem:<br>$$\\bar{X} \\sim \\mathrm{N}\\left(-0.1,\\; \\frac{4.374}{30}\\right) \\text{ approximately}$$<br>$$\\mathrm{P}(\\bar{X} > 0) \\approx 0.39670 \\approx 0.397 \\text{ (3 s.f.)}.$$"
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "The treasure hunt game is played for $10$ rounds. Given that the probability of finding more than $3$ Small traps in these $10$ rounds is $10\\%$, find the value of $p$.",
        type: "auto",
        mode: "number",
        answer: "0.1875623",
        placeholder: "Value to 3 s.f.",
        solution: "Let $Y$ be the number of Small traps found in $10$ rounds, so $Y \\sim \\mathrm{B}(10, p)$.<br>$$\\mathrm{P}(Y > 3) = 0.10 \\implies \\mathrm{P}(Y \\le 3) = 0.90$$<br>Using GC to solve $\\text{binomcdf}(10, p, 3) = 0.90$:<br>$$p \\approx 0.18756 \\approx 0.188 \\text{ (3 s.f.)}.$$"
      },
      {
        label: "(e)",
        marks: 3,
        prompt: "Over a long period of time, it is observed that the number of Small traps found in $10$ rounds of the game follows a bimodal distribution, with one of the modes being $3$. Find the two exact possible values of $p$, showing your working clearly.",
        type: "auto",
        mode: "number-list",
        answer: [3 / 11, 4 / 11],
        exactRequired: true,
        placeholder: "Separate two exact values with a comma",
        solution: "For $Y \\sim \\mathrm{B}(10, p)$ to be bimodal with $3$ as one mode, either $\\mathrm{P}(Y = 2) = \\mathrm{P}(Y = 3)$ or $\\mathrm{P}(Y = 3) = \\mathrm{P}(Y = 4)$.<br><strong>Case 1:</strong> $\\mathrm{P}(Y = 2) = \\mathrm{P}(Y = 3)$:<br>$${^{10}C_2}p^2(1 - p)^8 = {^{10}C_3}p^3(1 - p)^7 \\implies 45(1 - p) = 120p \\implies 165p = 45 \\implies p = \\frac{3}{11}$$<br><strong>Case 2:</strong> $\\mathrm{P}(Y = 3) = \\mathrm{P}(Y = 4)$:<br>$${^{10}C_3}p^3(1 - p)^7 = {^{10}C_4}p^4(1 - p)^6 \\implies 120(1 - p) = 210p \\implies 330p = 120 \\implies p = \\frac{4}{11}$$<br>Hence $p = \\frac{3}{11}$ or $p = \\frac{4}{11}$."
      }
    ]
  },
  {
    id: "HCI-2025-P2-Q10",
    year: 2025,
    school: "HCI",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Normal Distribution", "Linear Combinations of Random Variables", "Binomial Distribution"],
    stem: "<strong>In this question you should state the parameters of any distributions you use.</strong><br>At a burger shop, the wait time, $W$ (in minutes), is defined to be the time from when a customer places an order at the counter until the food is collected. It was proposed that $W$ is modelled by $\\mathrm{N}(2, 1.5^2)$.",
    parts: [
      {
        label: "(a)",
        marks: 1,
        prompt: "Give a reason why this model is not suitable.",
        type: "self",
        solution: "Under $W \\sim \\mathrm{N}(2, 1.5^2)$, $\\mathrm{P}(W < 0) \\approx 0.0912$, meaning about $9.12\\%$ of orders would have a negative wait time, which is not realistic."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "A new model for $W$ is given by $\\mathrm{N}(5, 1^2)$.<br>Find the range of values of $k$ such that at least $90\\%$ of customers experience a wait time longer than $k$ minutes.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 260 120" width="260" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <path d="M 88,92 L 88,65 C 102,42 116,22 132,22 C 154,22 172,72 215,92 Z" fill="rgba(76,168,133,0.28)" stroke="none"/>
  <path d="M 30,92 C 68,90 92,65 110,38 C 120,25 126,22 132,22 C 138,22 144,25 154,38 C 172,65 196,90 234,92" fill="none" stroke="#4ca885" stroke-width="2"/>
  <line x1="20" y1="92" x2="245" y2="92" stroke-width="1.2"/>
  <polyline points="239,88 245,92 239,96" fill="none" stroke-width="1.2"/>
  <line x1="88" y1="65" x2="88" y2="92" stroke-width="1.2"/>
  <text x="122" y="66" stroke="none" font-weight="bold">0.9</text>
  <text x="72" y="108" stroke="none">3.7184</text>
</svg>`,
        solution: "We require $\\mathrm{P}(W > k) \\ge 0.9$, with wait time $k > 0$.<br>Using $\\text{invNorm}(0.1, 5, 1) \\approx 3.71844$, we get $k \\le 3.71844$.<br>Rounding down so that the probability remains at least $0.90$:<br>$$0 < k \\le 3.71 \\quad (\\text{to 3 s.f.}).$$"
      },
      {
        label: "(c)",
        marks: 2,
        prompt: "A customer bought burgers from the shop on three independent occasions, with wait times denoted by $W_1$, $W_2$ and $W_3$ respectively. Let $\\bar{W} = \\frac{W_1 + W_2 + W_3}{3}$.<br>Find the values of $\\mathrm{Var}(\\bar{W} - W_1)$ and $\\mathrm{Var}(\\bar{W}) + \\mathrm{Var}(W_1)$ and hence, determine whether $\\mathrm{Var}(\\bar{W} - W_1) = \\mathrm{Var}(\\bar{W}) + \\mathrm{Var}(W_1)$.",
        type: "self",
        solution: "$$\\bar{W} - W_1 = \\frac{W_1 + W_2 + W_3}{3} - W_1 = \\frac{-2W_1 + W_2 + W_3}{3}$$<br>Since $W_1, W_2, W_3$ are independent with $\\mathrm{Var}(W_i) = 1$:<br>$$\\mathrm{Var}(\\bar{W} - W_1) = \\frac{1}{9}\\big((-2)^2(1) + 1^2(1) + 1^2(1)\\big) = \\frac{6}{9} = \\frac{2}{3}$$<br>$$\\mathrm{Var}(\\bar{W}) + \\mathrm{Var}(W_1) = \\frac{1}{3} + 1 = \\frac{4}{3}$$<br>Hence $\\mathrm{Var}(\\bar{W} - W_1) \\ne \\mathrm{Var}(\\bar{W}) + \\mathrm{Var}(W_1)$ (since $\\bar{W}$ and $W_1$ are not independent)."
      },
      {
        label: "(d)",
        marks: 3,
        prompt: "Find the probability that the mean wait time is within one minute of the wait time on the first occasion.",
        type: "auto",
        mode: "number",
        answer: "0.7793285",
        placeholder: "Probability to 3 s.f.",
        solution: "From part (c), $\\bar{W} - W_1 = \\frac{-2W_1 + W_2 + W_3}{3} \\sim \\mathrm{N}\\left(0,\\; \\frac{2}{3}\\right)$.<br>$$\\mathrm{P}(|\\bar{W} - W_1| \\le 1) = \\mathrm{P}(-1 \\le \\bar{W} - W_1 \\le 1) \\approx 0.77933 \\approx 0.779 \\text{ (3 s.f.)}.$$"
      },
      {
        label: "(e)",
        marks: 4,
        prompt: "On the $4\\text{th}$ occasion, the customer went to the restroom immediately after the order was placed. The time spent in the restroom, in $T$ minutes, is modelled by $T \\sim \\mathrm{N}(7, 1.5^2)$. Assume that the time taken to walk to the restroom is negligible and $W$ and $T$ follow independent normal distributions.<br>The customer is in a rush and will not wait for more than $3$ minutes after leaving the restroom. Given that the burger is not ready for collection after the customer leaves the restroom, find the probability that the customer will leave the shop without collecting the burger.",
        type: "auto",
        mode: "number",
        answer: "0.0207507",
        placeholder: "Probability to 3 s.f.",
        solution: "Since $W \\sim \\mathrm{N}(5, 1^2)$ and $T \\sim \\mathrm{N}(7, 1.5^2)$ are independent:<br>$$W - T \\sim \\mathrm{N}(5 - 7,\\; 1^2 + 1.5^2) = \\mathrm{N}(-2,\\; 3.25)$$<br>Required conditional probability:<br>$$\\mathrm{P}(W - T > 3 \\mid W > T) = \\frac{\\mathrm{P}(W - T > 3 \\text{ and } W - T > 0)}{\\mathrm{P}(W - T > 0)} = \\frac{\\mathrm{P}(W - T > 3)}{\\mathrm{P}(W - T > 0)}$$<br>$$\\approx \\frac{0.0027745}{0.133642} \\approx 0.02075 \\approx 0.0208 \\text{ (3 s.f.)}.$$"
      },
      {
        label: "(f)",
        marks: 4,
        prompt: "To reduce the wait time for customers, the shop later installs self-order kiosks. The wait time from when a customer places an order at the kiosk until the food is collected is modelled as being reduced by $20\\%$ compared to that at the counter.<br>$8$ customers who ordered at the counter and $8$ customers who ordered at the kiosk are randomly selected and their wait times are recorded. The wait time of each customer is independent of the others. Find the probability that exactly $2$ of these $16$ customers have a wait time of at least $5$ minutes.",
        type: "auto",
        mode: "number",
        answer: "0.05748209",
        placeholder: "Probability to 3 s.f.",
        solution: "Let $K = 0.8W$ be the kiosk wait time:<br>$$K \\sim \\mathrm{N}(0.8 \\times 5,\\; 0.8^2 \\times 1^2) = \\mathrm{N}(4,\\; 0.64)$$<br>For a counter customer: $\\mathrm{P}(W \\ge 5) = 0.5$.<br>For a kiosk customer: $\\mathrm{P}(K \\ge 5) \\approx 0.10565$.<br>Let $X \\sim \\mathrm{B}(8, 0.5)$ and $Y \\sim \\mathrm{B}(8, 0.10565)$ be the number of counter and kiosk customers (out of $8$ each) waiting at least $5$ minutes.<br>Required probability:<br>$$\\mathrm{P}(X = 2)\\mathrm{P}(Y = 0) + \\mathrm{P}(X = 1)\\mathrm{P}(Y = 1) + \\mathrm{P}(X = 0)\\mathrm{P}(Y = 2)$$<br>$$\\approx 0.044808 + 0.011906 + 0.000768 \\approx 0.0575 \\text{ (3 s.f.)}.$$"
      }
    ]
  }
]);
