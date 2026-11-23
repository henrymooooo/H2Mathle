window.registerQuestions([
  {
    id: "NJC-2025-P2-Q1",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q1",
    category: "pure",
    topics: ["Complex Numbers"],
    stem: "<strong>Do not use a calculator in answering this question.</strong><br>The complex number $w$ is such that $w = \\mathrm{i} - \\sqrt{3}$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find $|w|$ and $\\arg(w)$ in exact form.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "|w| =", answer: "2", exactRequired: true, placeholder: "Exact modulus" },
          { label: "arg(w) =", answer: "5*pi/6", exactRequired: true, placeholder: "Exact argument in radians" }
        ],
        solution: "$$|w| = |\\mathrm{i} - \\sqrt{3}| = \\sqrt{(-\\sqrt{3})^2 + 1^2} = 2$$<br>Since $w = -\\sqrt{3} + \\mathrm{i}$ lies in the second quadrant:<br>$$\\arg(w) = \\pi - \\tan^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Represent $w$, $-w$ and $2-w$ in the same Argand diagram, illustrating clearly the geometrical relationship between them.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 340 210" width="340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="95" x2="320" y2="95" stroke-width="1.2" />
  <polyline points="314,91 320,95 314,99" fill="none" stroke-width="1.2" />
  <line x1="120" y1="195" x2="120" y2="18" stroke-width="1.2" />
  <polyline points="116,24 120,18 124,24" fill="none" stroke-width="1.2" />
  <text x="304" y="88" stroke="none">Re</text>
  <text x="125" y="25" stroke="none">Im</text>
  <text x="108" y="109" stroke="none" font-style="italic">O</text>
  <line x1="51" y1="55" x2="189" y2="135" stroke="#4a8fe7" stroke-dasharray="4,3" stroke-width="1.4" />
  <line x1="189" y1="135" x2="269" y2="135" stroke="#4a8fe7" stroke-dasharray="4,3" stroke-width="1.4" />
  <line x1="120" y1="95" x2="269" y2="135" stroke="#cf5652" stroke-width="1.6" />
  <circle cx="51" cy="55" r="3" fill="#4a8fe7" stroke="none" />
  <circle cx="189" cy="135" r="3" fill="#4a8fe7" stroke="none" />
  <circle cx="269" cy="135" r="3" fill="#cf5652" stroke="none" />
  <text x="32" y="46" stroke="none" font-style="italic">W (w = −√3 + i)</text>
  <text x="176" y="152" stroke="none" font-style="italic">A (−w)</text>
  <text x="255" y="152" stroke="none" fill="#cf5652" font-style="italic">B (2 − w)</text>
  <text x="86" y="69" stroke="none" font-size="10">2</text>
  <text x="148" y="128" stroke="none" font-size="10">2</text>
  <text x="225" y="148" stroke="none" font-size="10">2</text>
  <text x="72" y="90" stroke="none" font-size="9.5">π/6</text>
  <text x="165" y="105" stroke="none" font-size="9.5" fill="#cf5652">θ</text>
</svg>`,
        solution: "• $W$ represents $w = -\\sqrt{3} + \\mathrm{i}$ with $|OW| = 2$, at angle $\\frac{\\pi}{6}$ above the negative real axis.<br>• $A$ represents $-w = \\sqrt{3} - \\mathrm{i}$, obtained by reflecting $W$ through the origin $O$, so $W, O, A$ are collinear with $|OA| = 2$ and angle $\\frac{\\pi}{6}$ below the positive real axis.<br>• $B$ represents $2 - w = (2 + \\sqrt{3}) - \\mathrm{i}$, obtained by translating $A$ by $2$ units in the positive real direction, so $AB$ is parallel to the real axis with $|AB| = 2 = |OA|$."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Hence, find $\\arg(2-w)$ exactly.",
        type: "auto",
        mode: "number",
        answer: "-pi/12",
        exactRequired: true,
        placeholder: "Exact argument in radians",
        solution: "Since $|OA| = |AB| = 2$, △$OAB$ is isosceles with ∠$AOB$ = ∠$ABO$ = $\\theta$.<br>Since $AB$ is parallel to the positive real axis, alternate angles give ∠$ABO$ + ∠$AOB$ = $2\\theta = \\frac{\\pi}{6}$ (the exterior angle of △$OAB$ at $A$ equals $\\frac{\\pi}{6}$, or the angle between $OA$ and the positive real axis is $\\frac{\\pi}{6}$, so $2\\theta = \\frac{\\pi}{6}$).<br>Thus $\\theta = \\frac{\\pi}{12}$. Since $B$ lies in the fourth quadrant below the positive real axis:<br>$$\\arg(2-w) = -\\frac{\\pi}{12}$$"
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q2",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q2",
    category: "pure",
    topics: ["Graphs & Transformations", "Differentiation", "Integration"],
    stem: "The curve $E$ has equation $$(x-a)^2 + 4y^2 = 4,$$ where $0 < a < 2$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Sketch $E$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 200" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="100" x2="300" y2="100" stroke-width="1.2" />
  <polyline points="294,96 300,100 294,104" fill="none" stroke-width="1.2" />
  <line x1="115" y1="185" x2="115" y2="15" stroke-width="1.2" />
  <polyline points="111,21 115,15 119,21" fill="none" stroke-width="1.2" />
  <text x="304" y="104" stroke="none" font-style="italic">x</text>
  <text x="120" y="20" stroke="none" font-style="italic">y</text>
  <text x="103" y="114" stroke="none" font-style="italic">O</text>
  <ellipse cx="165" cy="100" rx="100" ry="50" fill="none" stroke="#4a8fe7" stroke-width="1.9" />
  <circle cx="165" cy="100" r="2.5" fill="#2c2925" stroke="none" />
  <text x="155" y="116" stroke="none" font-size="10">(a, 0)</text>
  <circle cx="65" cy="100" r="2.5" fill="#4a8fe7" stroke="none" />
  <text x="26" y="116" stroke="none" font-size="10">(a−2, 0)</text>
  <circle cx="265" cy="100" r="2.5" fill="#4a8fe7" stroke="none" />
  <text x="248" y="116" stroke="none" font-size="10">(a+2, 0)</text>
  <circle cx="165" cy="50" r="2.5" fill="#4a8fe7" stroke="none" />
  <text x="155" y="42" stroke="none" font-size="10">(a, 1)</text>
  <circle cx="165" cy="150" r="2.5" fill="#4a8fe7" stroke="none" />
  <text x="152" y="166" stroke="none" font-size="10">(a, −1)</text>
</svg>`,
        solution: "Rewriting the equation in standard form:<br>$$\\frac{(x-a)^2}{2^2} + \\frac{y^2}{1^2} = 1$$<br>$E$ is an ellipse centred at $(a, 0)$ with horizontal semi-major axis $2$ and vertical semi-minor axis $1$. Since $0 < a < 2$, $a - 2 < 0 < a$, so the $y$-axis intersects the ellipse between $(a-2, 0)$ and $(a, 0)$. Key vertices: $(a-2, 0)$, $(a+2, 0)$, $(a, 1)$ and $(a, -1)$."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "You are now given that $a = 1$. Show that the equation of a normal to $E$ at $x = 0$ is $y = 2\\sqrt{3}x - \\frac{\\sqrt{3}}{2}$.",
        type: "self",
        solution: "With $a = 1$, $E$ has equation $(x-1)^2 + 4y^2 = 4$.<br>When $x = 0$: $(0-1)^2 + 4y^2 = 4 \\implies 4y^2 = 3 \\implies y = \\pm\\frac{\\sqrt{3}}{2}$.<br>Differentiating implicitly with respect to $x$:<br>$$2(x-1) + 8y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{x-1}{4y}$$<br>Thus the gradient of the normal is $\\frac{4y}{x-1}$.<br>At the point $\\left(0, -\\frac{\\sqrt{3}}{2}\\right)$:<br>$$\\text{gradient of normal} = \\frac{4\\left(-\\frac{\\sqrt{3}}{2}\\right)}{0-1} = 2\\sqrt{3}$$<br>Since the $y$-intercept is $-\\frac{\\sqrt{3}}{2}$, the equation of this normal is:<br>$$y = 2\\sqrt{3}x - \\frac{\\sqrt{3}}{2}$$"
      },
      {
        label: "(iii)",
        marks: 5,
        prompt: "The region $R$ is bounded by $E$, the normal in part (ii) and the $y$-axis. Find the volume of the solid generated when $R$ is rotated through $2\\pi$ radians about the $y$-axis.",
        type: "auto",
        mode: "number",
        answer: "0.51711923",
        placeholder: "Value to 3 s.f.",
        solutionSvg: `<svg viewBox="0 0 320 210" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="105" x2="300" y2="105" stroke-width="1.2" />
  <polyline points="294,101 300,105 294,109" fill="none" stroke-width="1.2" />
  <line x1="115" y1="195" x2="115" y2="15" stroke-width="1.2" />
  <polyline points="111,21 115,15 119,21" fill="none" stroke-width="1.2" />
  <text x="304" y="109" stroke="none" font-style="italic">x</text>
  <text x="120" y="20" stroke="none" font-style="italic">y</text>
  <text x="103" y="118" stroke="none" font-style="italic">O</text>
  <path d="M 115,148 L 142,56 Q 128,58 115,62 Z" fill="rgba(91,155,213,0.28)" stroke="none" />
  <ellipse cx="165" cy="105" rx="100" ry="50" fill="none" stroke="#4a8fe7" stroke-width="1.7" />
  <line x1="106" y1="178" x2="152" y2="22" stroke="#cf5652" stroke-width="1.6" />
  <circle cx="142" cy="56" r="2.8" fill="#cf5652" stroke="none" />
  <text x="148" y="45" stroke="none" fill="#cf5652">(0.531, 0.972)</text>
  <text x="122" y="100" stroke="none" font-style="italic" font-weight="bold">R</text>
  <text x="64" y="154" stroke="none">(0, −√3/2)</text>
  <text x="64" y="60" stroke="none">(0, √3/2)</text>
</svg>`,
        solution: "Find the upper point of intersection between $y = 2\\sqrt{3}x - \\frac{\\sqrt{3}}{2}$ and $y = \\sqrt{\\frac{4-(x-1)^2}{4}}$ by GC:<br>$$(0.530612, 0.972069)$$<br>Also the upper $y$-intercept of $E$ is $\\left(0, \\frac{\\sqrt{3}}{2}\\right) = (0, 0.866025)$.<br>On the left half of $E$ ($x \\le 1$), $x = 1 - \\sqrt{4 - 4y^2}$.<br>Rotating $R$ about the $y$-axis gives a cone (from $y = -\\frac{\\sqrt{3}}{2}$ to $y = 0.972069$) minus the small cap bounded by $E$ (from $y = \\frac{\\sqrt{3}}{2}$ to $y = 0.972069$):<br>$$V = \\frac{1}{3}\\pi(0.530612)^2\\left(\\frac{\\sqrt{3}}{2} + 0.972069\\right) - \\pi\\int_{0.866025}^{0.972069} \\left(1 - \\sqrt{4-4y^2}\\right)^2\\mathrm{d}y$$<br>$$= 0.54194 - 0.02482 = 0.517\\text{ units}^3 \\; (3\\text{ s.f.})$$"
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q3",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q3",
    category: "pure",
    topics: ["Vectors"],
    stem: "With respect to an origin $O$, points $P$ and $Q$ have variable position vectors $\\mathbf{p}$ and $\\mathbf{q}$ respectively, given by $$\\mathbf{p} = (\\cos t)\\mathbf{i} + (\\sin t)\\mathbf{j} - \\mathbf{k}, \\quad \\mathbf{q} = (\\cos 2t)\\mathbf{i} - (\\sin 2t)\\mathbf{j} + \\alpha\\mathbf{k},$$ where $\\alpha$ is a real parameter and $0 < t < \\pi$.",
    parts: [
      {
        label: "(i)",
        marks: 5,
        prompt: "By considering the cross product or otherwise, find the exact values of $t$ and $\\alpha$ if $O$, $P$ and $Q$ are collinear.",
        type: "self",
        solution: "Since $O, P, Q$ are collinear, $\\mathbf{p} \\times \\mathbf{q} = \\mathbf{0}$:<br>$$\\begin{pmatrix} \\cos t \\\\ \\sin t \\\\ -1 \\end{pmatrix} \\times \\begin{pmatrix} \\cos 2t \\\\ -\\sin 2t \\\\ \\alpha \\end{pmatrix} = \\begin{pmatrix} \\alpha\\sin t - \\sin 2t \\\\ -\\alpha\\cos t - \\cos 2t \\\\ -\\sin 2t\\cos t - \\cos 2t\\sin t \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$$<br>From the $\\mathbf{k}$-component:<br>$$-(\\sin 2t\\cos t + \\cos 2t\\sin t) = 0 \\implies -\\sin 3t = 0$$<br>Since $0 < t < \\pi$, we have $0 < 3t < 3\\pi$, so $3t = \\pi$ or $3t = 2\\pi$, giving $t = \\frac{\\pi}{3}$ or $t = \\frac{2\\pi}{3}$.<br>• When $t = \\frac{\\pi}{3}$: from the $\\mathbf{j}$-component, $-\\alpha\\cos\\frac{\\pi}{3} - \\cos\\frac{2\\pi}{3} = 0 \\implies -\\frac{1}{2}\\alpha + \\frac{1}{2} = 0 \\implies \\alpha = 1$.<br>• When $t = \\frac{2\\pi}{3}$: from the $\\mathbf{j}$-component, $-\\alpha\\cos\\frac{2\\pi}{3} - \\cos\\frac{4\\pi}{3} = 0 \\implies \\frac{1}{2}\\alpha + \\frac{1}{2} = 0 \\implies \\alpha = -1$.<br>(Both pairs satisfy the $\\mathbf{i}$-component as well.)<br>Hence $t = \\frac{\\pi}{3}, \\alpha = 1$ or $t = \\frac{2\\pi}{3}, \\alpha = -1$."
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "It is given that $\\alpha = 0.5$. Show that $\\mathbf{p} \\cdot \\mathbf{q} = \\cos 3t - 0.5$. Find the greatest length of projection of $\\mathbf{q}$ onto $\\mathbf{p}$.",
        type: "self",
        solution: "$$\\mathbf{p} \\cdot \\mathbf{q} = \\begin{pmatrix} \\cos t \\\\ \\sin t \\\\ -1 \\end{pmatrix} \\cdot \\begin{pmatrix} \\cos 2t \\\\ -\\sin 2t \\\\ 0.5 \\end{pmatrix} = \\cos t\\cos 2t - \\sin t\\sin 2t - 0.5 = \\cos(2t + t) - 0.5 = \\cos 3t - 0.5$$<br>Note that $|\\mathbf{p}| = \\sqrt{\\cos^2 t + \\sin^2 t + (-1)^2} = \\sqrt{2}$.<br>The length of projection of $\\mathbf{q}$ onto $\\mathbf{p}$ is:<br>$$\\frac{|\\mathbf{p} \\cdot \\mathbf{q}|}{|\\mathbf{p}|} = \\frac{|\\cos 3t - 0.5|}{\\sqrt{2}}$$<br>Since $-1 \\le \\cos 3t \\le 1$ (and $0 < t < \\pi$ includes $t = \\frac{\\pi}{3}$ where $\\cos 3t = -1$), the maximum of $|\\cos 3t - 0.5|$ is $|-1 - 0.5| = 1.5$.<br>Hence the greatest length of projection is $\\frac{1.5}{\\sqrt{2}} = \\frac{3}{2\\sqrt{2}} = \\frac{3\\sqrt{2}}{4} \\approx 1.06$ (3 s.f.)."
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q4",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q4",
    category: "pure",
    topics: ["Differential Equations"],
    stem: "The rate of decrease of atmospheric pressure $P$ Pascals (Pa) with respect to altitude $h$ kilometres above sea level, is proportional to $\\frac{P}{T}$, where $T$ is the temperature measured in Kelvin (K). The temperature $T$ decreases linearly by $6.5\\text{ K}$ for every one-kilometre increase in the altitude above sea level. It is given that the temperature is $293\\text{ K}$ at sea level.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Find a differential equation for $\\frac{\\mathrm{d}P}{\\mathrm{d}h}$ in terms of $P$ and $h$.",
        type: "self",
        solution: "Since $T$ decreases linearly by $6.5\\text{ K}$ per km from $293\\text{ K}$ at $h = 0$, $T = 293 - 6.5h$.<br>Since the rate of decrease of $P$ with respect to $h$ is proportional to $\\frac{P}{T}$:<br>$$\\frac{\\mathrm{d}P}{\\mathrm{d}h} = -k\\left(\\frac{P}{T}\\right) = \\frac{-kP}{293 - 6.5h}, \\quad \\text{where } k > 0$$"
      },
      {
        label: "(ii)",
        marks: 4,
        prompt: "Given that $P > 0$, solve this model in part (i) to show that $P = A|293 - 6.5h|^b$, where $A$ and $b$ are constants. Explain whether $b$ is positive or negative.",
        type: "self",
        solution: "Separating variables:<br>$$\\int \\frac{1}{P}\\,\\mathrm{d}P = \\int -\\frac{k}{293 - 6.5h}\\,\\mathrm{d}h$$<br>Since $P > 0$:<br>$$\\ln P = \\frac{k}{6.5}\\ln|293 - 6.5h| + C$$<br>$$P = \\mathrm{e}^C |293 - 6.5h|^{\\frac{k}{6.5}} = A|293 - 6.5h|^b$$<br>where $A = \\mathrm{e}^C$ and $b = \\frac{k}{6.5}$.<br>Since $k > 0$, $b = \\frac{k}{6.5} > 0$, so $b$ is <strong>positive</strong>."
      },
      {
        label: "(iii)",
        marks: 4,
        prompt: "It is given that the atmospheric pressures are $101\\,300\\text{ Pa}$ at sea level and $80\\,000\\text{ Pa}$ at $h = 2$. Find the atmospheric pressure at the top of Mount Everest with an altitude of $8848\\text{ metres}$.",
        type: "auto",
        mode: "number",
        answer: "32508.2046",
        placeholder: "Pressure in Pascals (3 s.f.)",
        solution: "When $h = 0$, $P = 101\\,300 \\implies 101\\,300 = A(293^b)$ ...(1)<br>When $h = 2$, $P = 80\\,000 \\implies 80\\,000 = A(293 - 13)^b = A(280^b)$ ...(2)<br>Dividing (1) by (2):<br>$$\\frac{101\\,300}{80\\,000} = \\left(\\frac{293}{280}\\right)^b \\implies b = \\frac{\\ln(101\\,300/80\\,000)}{\\ln(293/280)} = 5.2015 \\; (5\\text{ s.f.})$$<br>$$A = \\frac{101\\,300}{293^{5.2015}} = 1.4935 \\times 10^{-8}$$<br>At Mount Everest, $h = 8.848\\text{ km}$:<br>$$P = 1.4935 \\times 10^{-8} |293 - 6.5(8.848)|^{5.2015} \\approx 32\\,500\\text{ Pa} \\; (3\\text{ s.f.})$$"
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "For $h \\ge 0$, sketch the graph of $P$ against $h$. Explain a limitation of this model.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 200" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="40" y1="170" x2="300" y2="170" stroke-width="1.2" />
  <polyline points="294,166 300,170 294,174" fill="none" stroke-width="1.2" />
  <line x1="60" y1="185" x2="60" y2="18" stroke-width="1.2" />
  <polyline points="56,24 60,18 64,24" fill="none" stroke-width="1.2" />
  <text x="304" y="174" stroke="none" font-style="italic">h</text>
  <text x="53" y="15" stroke="none" font-style="italic">P</text>
  <text x="47" y="182" stroke="none" font-style="italic">O</text>
  <path d="M 60,92 C 85,135 110,170 140,170 C 175,170 215,128 265,25" fill="none" stroke="#4a8fe7" stroke-width="2" />
  <circle cx="60" cy="92" r="2.8" fill="#4a8fe7" stroke="none" />
  <text x="10" y="95" stroke="none" font-size="9.5">101 300</text>
  <circle cx="140" cy="170" r="2.8" fill="#4a8fe7" stroke="none" />
  <text x="130" y="186" stroke="none" font-size="10">45.1</text>
</svg>`,
        solution: "$P = 0$ when $293 - 6.5h = 0 \\implies h = \\frac{293}{6.5} \\approx 45.1\\text{ km}$.<br><strong>Limitation:</strong> The model predicts that for altitudes $h > 45.1\\text{ km}$, atmospheric pressure increases without bound as altitude increases, which is physically impossible (equivalently, temperature in Kelvin $T = 293 - 6.5h$ becomes negative for $h > 45.1$, which is impossible)."
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q5",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q5",
    category: "stats",
    topics: ["Binomial Distribution"],
    stem: "The random variable $Y$ has distribution $\\mathrm{B}(12, p)$ for $0 < p < 1$.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "Show that $\\frac{\\mathrm{P}(Y=k)}{\\mathrm{P}(Y=k-1)} = \\frac{(13-k)p}{k(1-p)}$.",
        type: "self",
        solution: "$$\\frac{\\mathrm{P}(Y=k)}{\\mathrm{P}(Y=k-1)} = \\frac{^{12}\\mathrm{C}_k\\, p^k (1-p)^{12-k}}{^{12}\\mathrm{C}_{k-1}\\, p^{k-1} (1-p)^{13-k}}$$<br>$$= \\frac{\\frac{12!}{k!(12-k)!}}{\\frac{12!}{(k-1)!(13-k)!}} \\cdot \\frac{p}{1-p} = \\frac{(k-1)!(13-k)!}{k!(12-k)!} \\cdot \\frac{p}{1-p} = \\frac{(13-k)p}{k(1-p)}$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "It is given that the mode of the distribution is $4$. Find the exact range of values of $p$.",
        type: "self",
        solution: "Since the mode is $4$, $\\mathrm{P}(Y=4) > \\mathrm{P}(Y=3)$ and $\\mathrm{P}(Y=4) > \\mathrm{P}(Y=5)$:<br>1. $\\frac{\\mathrm{P}(Y=4)}{\\mathrm{P}(Y=3)} > 1 \\implies \\frac{9p}{4(1-p)} > 1 \\implies 9p > 4 - 4p \\implies p > \\frac{4}{13}$.<br>2. $\\frac{\\mathrm{P}(Y=5)}{\\mathrm{P}(Y=4)} < 1 \\implies \\frac{8p}{5(1-p)} < 1 \\implies 8p < 5 - 5p \\implies p < \\frac{5}{13}$.<br>Hence $\\frac{4}{13} < p < \\frac{5}{13}$."
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q6",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q6",
    category: "stats",
    topics: ["Probability", "Discrete Random Variables"],
    diagramSvg: `<svg viewBox="0 0 200 180" width="200" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="13" fill="#2c2925" stroke="#2c2925">
  <circle cx="100" cy="90" r="72" fill="none" stroke-width="1.5" />
  <line x1="28" y1="90" x2="172" y2="90" stroke-width="1.2" />
  <line x1="64" y1="27.6" x2="136" y2="152.4" stroke-width="1.2" />
  <line x1="136" y1="27.6" x2="64" y2="152.4" stroke-width="1.2" />
  <text x="95" y="54" stroke="none" font-style="italic" font-weight="bold">A</text>
  <text x="132" y="76" stroke="none" font-style="italic" font-weight="bold">B</text>
  <text x="132" y="114" stroke="none" font-style="italic" font-weight="bold">C</text>
  <text x="95" y="138" stroke="none" font-style="italic" font-weight="bold">D</text>
  <text x="58" y="114" stroke="none" font-style="italic" font-weight="bold">E</text>
  <text x="58" y="76" stroke="none" font-style="italic" font-weight="bold">F</text>
</svg>`,
    stem: "A circular board has $6$ sectors labelled $A, B, C, D, E$ and $F$. A game is played by placing a pawn on sector $A$. It is then moved clockwise around the board according to the number shown on the top face of a fair die when it is tossed. The die has faces labelled $2, 2, 3, 4, 4, 5$. For example, an initial toss of $4$ would move the pawn from sector $A$ to sector $E$. The player continues tossing the die and moving the pawn accordingly. When the pawn lands on sector $F$, the game ends.<br>Let $T$ be the number of tosses required to move the pawn until the game ends.",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "Show that $\\mathrm{P}(T=3) = \\frac{5}{36}$. Hence, copy and complete the probability distribution table for $T$.<div class='q-table-wrap'><table class='q-table'><tr><th>$t$</th><td>$1$</td><td>$2$</td><td>$3$</td><td>$4$ or more</td></tr><tr><th>$\\mathrm{P}(T=t)$</th><td></td><td></td><td></td><td></td></tr></table></div>",
        type: "self",
        solution: "To land on $F$, the cumulative sum of tosses must be $5 \\pmod 6$ for the first time (i.e. $5, 11, 17, \\ldots$, without hitting $5$ earlier).<br>For $T = 3$, the sum of 3 tosses must be $11$ without any partial sum being $5$:<br>• $\\{2, 4, 5\\}$: cannot start with $5$ ($2$ permutations start with $5$, so $3! - 2 = 4$ valid orders): $\\left(\\frac{2}{6}\\right)^2\\left(\\frac{1}{6}\\right)\\times 4 = \\frac{16}{216}$.<br>• $\\{3, 3, 5\\}$: cannot start with $5$ ($\\frac{3!}{2!} - 1 = 2$ valid orders): $\\left(\\frac{1}{6}\\right)^3 \\times 2 = \\frac{2}{216}$.<br>• $\\{3, 4, 4\\}$: no partial sum is $5$ ($\\frac{3!}{2!} = 3$ valid orders): $\\left(\\frac{1}{6}\\right)\\left(\\frac{2}{6}\\right)^2 \\times 3 = \\frac{12}{216}$.<br>Total: $\\mathrm{P}(T=3) = \\frac{16 + 2 + 12}{216} = \\frac{30}{216} = \\frac{5}{36}$ (Shown).<br><br>• $\\mathrm{P}(T=1) = \\mathrm{P}(5) = \\frac{1}{6}$.<br>• $\\mathrm{P}(T=2) = \\mathrm{P}(\\{2, 3\\} \\text{ in either order}) = \\frac{2}{6}\\cdot\\frac{1}{6}\\cdot 2! = \\frac{1}{9}$.<br>• $\\mathrm{P}(T \\ge 4) = 1 - \\frac{1}{6} - \\frac{1}{9} - \\frac{5}{36} = \\frac{7}{12}$.<div class='q-table-wrap'><table class='q-table'><tr><th>$t$</th><td>$1$</td><td>$2$</td><td>$3$</td><td>$4$ or more</td></tr><tr><th>$\\mathrm{P}(T=t)$</th><td>$\\frac{1}{6}$</td><td>$\\frac{1}{9}$</td><td>$\\frac{5}{36}$</td><td>$\\frac{7}{12}$</td></tr></table></div>"
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "The score $S$ for each game is given by $S = 5T$, for $t = 1, 2, 3$ and $S = 0$ for $t \\ge 4$. Find $\\mathrm{E}(S)$ and $\\mathrm{Var}(S)$.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "E(S) =", answer: "145/36", placeholder: "Exact or 3 s.f." },
          { label: "Var(S) =", answer: "39275/1296", placeholder: "Exact or 3 s.f." }
        ],
        solution: "$S$ takes values $5, 10, 15, 0$ with probabilities $\\frac{1}{6}, \\frac{1}{9}, \\frac{5}{36}, \\frac{7}{12}$ respectively.<br>$$\\mathrm{E}(S) = 5\\left(\\frac{1}{6}\\right) + 10\\left(\\frac{1}{9}\\right) + 15\\left(\\frac{5}{36}\\right) + 0 = \\frac{145}{36} \\approx 4.03$$<br>$$\\mathrm{Var}(S) = \\mathrm{E}(S^2) - [\\mathrm{E}(S)]^2 = 5^2\\left(\\frac{1}{6}\\right) + 10^2\\left(\\frac{1}{9}\\right) + 15^2\\left(\\frac{5}{36}\\right) - \\left(\\frac{145}{36}\\right)^2 = \\frac{39\\,275}{1296} \\approx 30.3$$"
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q7",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q7",
    category: "stats",
    topics: ["Permutations & Combinations"],
    stem: "A toy train is made up of $3$ types of train units: engine, carriage, and wagon. There are $4$ identical engines ($E$), $3$ identical carriages ($C$), and $2$ identical wagons ($W$).",
    parts: [
      {
        label: "(a)",
        marks: 4,
        prompt: "All the train units are placed in a line such that either the first unit is an engine or the last two units are engines, or both. Find the number of ways to form the toy train.",
        type: "auto",
        mode: "number",
        answer: "710",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Using inclusion-exclusion:<br>• First unit is $E$: arrange remaining $3E, 3C, 2W$ in $\\frac{8!}{3!3!2!} = 560$ ways.<br>• Last two units are $EE$: arrange remaining $2E, 3C, 2W$ in $\\frac{7!}{2!3!2!} = 210$ ways.<br>• First unit is $E$ AND last two units are $EE$: arrange remaining $1E, 3C, 2W$ in $\\frac{6!}{3!2!} = 60$ ways.<br>Total number of ways $= 560 + 210 - 60 = 710$."
      },
      {
        label: "(b)",
        marks: 3,
        prompt: "For another kind of toy train, all the train units are placed in a line such that the first train unit is an engine and all the carriages are in front of the wagons. An example of such a toy train would be: $E\\;C\\;C\\;E\\;E\\;C\\;W\\;E\\;W$. Find the number of ways to form the toy train.",
        type: "auto",
        mode: "number",
        answer: "56",
        exactRequired: true,
        placeholder: "Integer value",
        solution: "Fix $E$ in the first position. There are $8$ remaining positions to fill with $3E, 3C, 2W$.<br>Choose $5$ positions out of $8$ for the $3$ carriages and $2$ wagons: $^{8}\\mathrm{C}_{5} = 56$ ways.<br>Since all carriages must be in front of all wagons and units of the same type are identical, there is only $1$ way to place $C, C, C, W, W$ in those $5$ chosen positions, and $1$ way to place the remaining $3$ engines in the other $3$ positions.<br>Total number of ways $= 56$."
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q8",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q8",
    category: "stats",
    topics: ["Correlation & Regression"],
    stem: "The Ministry of Health declared \"War on Diabetes\" in 2016 to rally a whole-of-nation effort to tackle diabetes. A study was conducted to investigate the effects of diabetes on one's health, specifically to determine if the blood pressure of an adult aged between $50$ and $60$ years old is dependent on one's haemoglobin level. Data from six patients in this age group from a hospital was collected. Their haemoglobin level, $s\\text{ mmol/mol}$, and blood pressure, $p\\text{ mmHg}$, are shown in the table.<div class='q-table-wrap'><table class='q-table'><tr><th>$s$</th><td>32</td><td>37</td><td>41</td><td>46</td><td>50</td><td>54</td></tr><tr><th>$p$</th><td>120</td><td>150</td><td>168</td><td>172</td><td>179</td><td>183</td></tr></table></div>",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "Draw a scatter diagram of these data.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 200" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925">
  <line x1="35" y1="175" x2="295" y2="175" stroke-width="1.2" />
  <polyline points="289,171 295,175 289,179" fill="none" stroke-width="1.2" />
  <line x1="45" y1="185" x2="45" y2="15" stroke-width="1.2" />
  <polyline points="41,21 45,15 49,21" fill="none" stroke-width="1.2" />
  <text x="299" y="179" stroke="none" font-style="italic">s</text>
  <text x="50" y="20" stroke="none" font-style="italic">p</text>
  <circle cx="65" cy="155" r="3.5" fill="#4ca885" stroke="none" />
  <circle cx="109" cy="100" r="3.5" fill="#4ca885" stroke="none" />
  <circle cx="144" cy="67" r="3.5" fill="#4ca885" stroke="none" />
  <circle cx="188" cy="60" r="3.5" fill="#4ca885" stroke="none" />
  <circle cx="223" cy="47" r="3.5" fill="#4ca885" stroke="none" />
  <circle cx="258" cy="40" r="3.5" fill="#4ca885" stroke="none" />
  <text x="72" y="160" stroke="none">(32, 120)</text>
  <text x="264" y="43" stroke="none">(54, 183)</text>
</svg>`,
        solution: "Plot the $6$ points $(32, 120), (37, 150), (41, 168), (46, 172), (50, 179), (54, 183)$ on the $s$-$p$ plane, labelling the extreme points $(32, 120)$ and $(54, 183)$."
      },
      {
        label: "(ii)",
        marks: 2,
        prompt: "It is thought that blood pressure $p$ can be modelled by one of the formulae $p = a + bs^2$ or $p = c + \\frac{d}{s}$, where $a, b$ and $c$ are positive real numbers and $d$ is a negative real number. By using your diagram, explain which of $p = a + bs^2$ or $p = c + \\frac{d}{s}$ is the better model.",
        type: "self",
        solution: "$p = c + \\frac{d}{s}$ is the better model because from the scatter diagram, as $s$ increases, $p$ increases at a <strong>decreasing rate</strong> (concave down), which matches $p = c + \\frac{d}{s}$ ($d < 0$) rather than $p = a + bs^2$ ($b > 0$, which increases at an increasing rate)."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "Using the model you chose in part (ii), write down the equation for the relationship between $s$ and $p$, giving the numerical values of the coefficients. State the product moment correlation coefficient for this model.",
        type: "self",
        solution: "Performing linear regression of $p$ on $\\frac{1}{s}$ using a GC:<br>$$p = 276.88 - \\frac{4822.6}{s} \\; (5\\text{ s.f.})$$<br>$$p = 277 - \\frac{4820}{s} \\; (3\\text{ s.f.})$$<br>Product moment correlation coefficient: $r = -0.973$ (3 s.f.)."
      },
      {
        label: "(iv)",
        marks: 3,
        prompt: "Estimate the value of $p$ when $s = 45$. Determine whether this estimate is reliable.",
        type: "self",
        solution: "When $s = 45$:<br>$$p = 276.88 - \\frac{4822.6}{45} = 169.71 \\approx 170 \\; (3\\text{ s.f.})$$<br>Since $s = 45$ lies within the data range $[32, 54]$ (interpolation) and $r = -0.973$ is close to $-1$, indicating a strong negative linear correlation between $p$ and $\\frac{1}{s}$, this estimate is <strong>reliable</strong>."
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q9",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q9",
    category: "stats",
    topics: ["Probability"],
    stem: "In a sales campaign, a supermarket gives each shopper a receipt printed with a cartoon character when a shopper pays for his or her purchase. There are $10$ different cartoon characters available, character $A, B, C, \\ldots, J$. The printed cartoon character is equally likely to be any one of the $10$ different cartoon characters.",
    parts: [
      {
        label: "(i)",
        marks: 2,
        prompt: "A shopper received three receipts after having made three purchases. Find the probability that only one receipt has the character $A$ printed on it.",
        type: "auto",
        mode: "number",
        answer: "243/1000",
        placeholder: "Exact or 3 s.f.",
        solution: "$$\\mathrm{P}(\\text{exactly one } A) = 3 \\times (0.1)(0.9)^2 = 0.243 = \\frac{243}{1000}$$"
      },
      {
        label: "(ii)",
        marks: 3,
        prompt: "Given that exactly one of the cartoon characters printed is $A$, find the probability that the other two characters printed are $B$ and $C$.",
        type: "auto",
        mode: "number",
        answer: "2/81",
        placeholder: "Exact or 3 s.f.",
        solution: "$$\\mathrm{P}(A, B, C \\text{ in any order}) = 3! \\times (0.1)^3 = 0.006$$<br>$$\\mathrm{P}(\\text{other two are } B, C \\mid \\text{exactly one } A) = \\frac{0.006}{0.243} = \\frac{2}{81} \\approx 0.0247 \\; (3\\text{ s.f.})$$"
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "To redeem a gift, exactly $8$ distinct cartoon characters need to be collected. After some time, Tom collected $7$ distinct characters. Let $p_n$ be the probability that Tom can redeem the gift on exactly the $n^{\\text{th}}$ additional purchase. Find $p_1$ and the recurrence relation in the form $p_n = \\mathrm{f}(p_{n-1})$, for $n \\ge 2$.",
        type: "self",
        solution: "There are $3$ uncollected characters out of $10$, so on any purchase the probability of getting a new character is $\\frac{3}{10}$ and a duplicate is $\\frac{7}{10}$.<br>$$p_1 = \\frac{3}{10}$$<br>Since $p_n = \\left(\\frac{7}{10}\\right)^{n-1}\\left(\\frac{3}{10}\\right)$, for $n \\ge 2$:<br>$$p_n = \\frac{7}{10} p_{n-1}$$"
      },
      {
        label: "(iv)",
        marks: 2,
        prompt: "Find the probability, in terms of $n$, that at most $n$ additional purchases are needed to redeem the gift.",
        type: "auto",
        mode: "expr",
        vars: { n: [1, 3, 5] },
        answer: "1 - 0.7^n",
        placeholder: "Expression in terms of n",
        solution: "Using the complement (not getting any of the $3$ remaining characters in all $n$ purchases):<br>$$\\mathrm{P}(\\text{at most } n \\text{ additional purchases}) = 1 - \\left(\\frac{7}{10}\\right)^n = 1 - (0.7)^n$$"
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q10",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q10",
    category: "stats",
    topics: ["Sampling & CLT", "Hypothesis Testing"],
    stem: "The production manager of a food container manufacturing company wishes to take a random sample of a certain type of lunch box from the thousands produced one day at his factory, for quality control purposes. He wishes to check that the mean height of the lunch boxes is $12.8\\text{ cm}$.",
    parts: [
      {
        label: "(i)",
        marks: 1,
        prompt: "State what it means for a sample to be random in this context.",
        type: "self",
        solution: "Each lunch box produced on that day has an equal chance (same probability) of being selected, and the selection of any lunch box is independent of the selection of any other lunch box."
      },
      {
        label: "(ii)",
        marks: 1,
        prompt: "Explain why the manager should take a sample of at least $30$ lunch boxes to carry out a hypothesis test.",
        type: "self",
        solution: "As the population distribution of the heights of the lunch boxes is unknown, a large sample size (of at least $30$) is needed so that by the Central Limit Theorem, the sample mean follows a normal distribution approximately."
      },
      {
        label: "(iii)",
        marks: 2,
        prompt: "The heights, $x\\text{ cm}$, of a random sample of $48$ lunch boxes are summarised as follows: $\\sum(x - 13) = -3.6$ and $\\sum(x - 13)^2 = 12.02$. Calculate the unbiased estimates of the population mean and variance of the height of the lunch boxes.",
        type: "auto",
        mode: "multi-field",
        fields: [
          { label: "Mean =", answer: "12.925", placeholder: "Unbiased estimate of mean" },
          { label: "Variance =", answer: "0.25", placeholder: "Unbiased estimate of variance" }
        ],
        solution: "Unbiased estimate of population mean:<br>$$\\bar{x} = 13 + \\frac{-3.6}{48} = 12.925\\text{ cm}$$<br>Unbiased estimate of population variance:<br>$$s^2 = \\frac{1}{47}\\left(12.02 - \\frac{(-3.6)^2}{48}\\right) = \\frac{1}{47}(12.02 - 0.27) = \\frac{11.75}{47} = 0.25\\text{ cm}^2$$"
      },
      {
        label: "(iv)",
        marks: 4,
        prompt: "The production manager claims that the mean height of the lunch boxes is $12.8\\text{ cm}$. Test his claim at the $10\\%$ level of significance, stating the hypotheses clearly.",
        type: "self",
        solution: "Let $\\mu\\text{ cm}$ be the population mean height of the lunch boxes.<br>$$\\mathrm{H}_0: \\mu = 12.8 \\quad \\text{against} \\quad \\mathrm{H}_1: \\mu \\ne 12.8$$<br>Test at $10\\%$ level of significance (two-tailed).<br>Under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(12.8, \\frac{0.25}{48}\\right)$ approximately by the Central Limit Theorem since $n = 48$ is large.<br>Test statistic: $z = \\frac{12.925 - 12.8}{\\sqrt{0.25/48}} = 1.732$.<br>By GC, $p\\text{-value} = 0.0833 < 0.10$ (or $|z| = 1.732 > 1.645 = z_{\\text{crit}}$).<br>We reject $\\mathrm{H}_0$ and conclude that there is sufficient evidence at the $10\\%$ level of significance to reject the manager's claim (i.e. that the population mean height of the lunch boxes is not $12.8\\text{ cm}$)."
      },
      {
        label: "(v)",
        marks: 4,
        prompt: "In the hope of keeping the mean height of the lunch boxes not to exceed $12.8\\text{ cm}$, the production manager decides to replace the production line such that the population variance is reduced to $0.04\\text{ cm}^2$. He then carries out a hypothesis test at $2\\%$ level of significance using another random sample of $n$ lunch boxes. Assuming that $n$ is sufficiently large, find the critical region for this test in terms of $n$.",
        type: "self",
        solution: "Testing $\\mathrm{H}_0: \\mu = 12.8$ against $\\mathrm{H}_1: \\mu > 12.8$ at the $2\\%$ level of significance (upper-tailed).<br>Under $\\mathrm{H}_0$, $\\bar{X} \\sim \\mathrm{N}\\left(12.8, \\frac{0.04}{n}\\right)$ approximately by CLT.<br>Let the critical region be $\\bar{x} \\ge a$, where $\\mathrm{P}(\\bar{X} \\ge a) = 0.02$:<br>$$\\mathrm{P}\\left(Z \\ge \\frac{a - 12.8}{0.2/\\sqrt{n}}\\right) = 0.02$$<br>$$\\frac{(a - 12.8)\\sqrt{n}}{0.2} = 2.053749 \\implies a = 12.8 + \\frac{0.41075}{\\sqrt{n}} \\approx 12.8 + \\frac{0.411}{\\sqrt{n}}$$<br>Hence the critical region is $\\bar{x} \\ge 12.8 + \\frac{0.411}{\\sqrt{n}}$ (3 s.f.)."
      }
    ]
  },
  {
    id: "NJC-2025-P2-Q11",
    year: 2025,
    school: "NJC",
    paper: "2025 Prelim Paper 2",
    qNum: "Q11",
    category: "stats",
    topics: ["Normal Distribution"],
    stem: "The fasting glucose concentration in millimoles per litre ($\\text{mmol/L}$) of a randomly chosen man and a randomly chosen woman is normally distributed with mean and standard deviation as given in the table below.<div class='q-table-wrap'><table class='q-table'><tr><th></th><th>Mean</th><th>Standard deviation</th></tr><tr><th>Man</th><td>5.4</td><td>0.5</td></tr><tr><th>Woman</th><td>5.0</td><td>0.3</td></tr></table></div>",
    parts: [
      {
        label: "(a)",
        marks: 3,
        prompt: "If one man and one woman are chosen randomly, find the probability that the man's fasting glucose concentration exceeds the woman's. State an assumption you make in your calculation.",
        type: "self",
        solution: "Let $X \\sim \\mathrm{N}(5.4, 0.5^2)$ and $Y \\sim \\mathrm{N}(5.0, 0.3^2)$ be the fasting glucose concentrations of a randomly chosen man and woman respectively.<br>$$X - Y \\sim \\mathrm{N}(5.4 - 5.0, 0.5^2 + 0.3^2) = \\mathrm{N}(0.4, 0.34)$$<br>$$\\mathrm{P}(X > Y) = \\mathrm{P}(X - Y > 0) = 0.754 \\; (3\\text{ s.f.})$$<br><strong>Assumption:</strong> The fasting glucose concentration of a randomly chosen man is independent of that of a randomly chosen woman."
      },
      {
        label: "(b)",
        marks: 2,
        prompt: "The fasting glucose concentration of at most $3\\%$ of men exceeds $5.4\\text{ mmol/L}$ by $c\\text{ mmol/L}$. Find the range of $c$.",
        type: "self",
        solution: "$$\\mathrm{P}(X - 5.4 \\ge c) \\le 0.03 \\implies \\mathrm{P}\\left(Z \\ge \\frac{c}{0.5}\\right) \\le 0.03$$<br>$$\\frac{c}{0.5} \\ge 1.880794 \\implies c \\ge 0.940 \\; (3\\text{ s.f.})$$"
      },
      {
        label: "(c)",
        marks: 3,
        prompt: "For $k > 5.4$, explain which of the following has a larger value:<br>$p_1$: the probability that the fasting glucose concentration of a randomly chosen man is greater than $k$, or<br>$p_2$: the probability that the mean fasting glucose concentration of four randomly chosen women is greater than $k$.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 320 185" width="320" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10" fill="#2c2925" stroke="#2c2925">
  <line x1="20" y1="155" x2="300" y2="155" stroke-width="1.2" />
  <polyline points="294,151 300,155 294,159" fill="none" stroke-width="1.2" />
  <path d="M 185,155 L 185,112 C 205,118 228,145 270,155 Z" fill="rgba(76,168,133,0.28)" stroke="none" />
  <path d="M 30,154 C 75,152 105,110 155,102 C 205,110 235,152 280,154" fill="none" stroke="#4ca885" stroke-width="1.8" />
  <path d="M 55,154 C 82,152 98,35 115,28 C 132,35 148,152 175,154" fill="none" stroke="#4a8fe7" stroke-width="1.8" />
  <line x1="115" y1="22" x2="115" y2="155" stroke-dasharray="4,3" opacity="0.55" />
  <line x1="155" y1="92" x2="155" y2="155" stroke-dasharray="4,3" opacity="0.55" />
  <line x1="185" y1="100" x2="185" y2="155" stroke="#cf5652" stroke-width="1.2" />
  <text x="106" y="170" stroke="none">5.0</text>
  <text x="146" y="170" stroke="none">5.4</text>
  <text x="182" y="170" stroke="none" fill="#cf5652" font-style="italic">k</text>
  <text x="58" y="45" stroke="none" fill="#4a8fe7">pdf of Ȳ</text>
  <text x="200" y="102" stroke="none" fill="#4ca885">pdf of X</text>
</svg>`,
        solution: "$X \\sim \\mathrm{N}(5.4, 0.5^2)$ and $\\bar{Y} = \\frac{Y_1 + Y_2 + Y_3 + Y_4}{4} \\sim \\mathrm{N}\\left(5.0, \\frac{0.3^2}{4}\\right) = \\mathrm{N}(5.0, 0.15^2)$.<br>Standardising both probabilities:<br>$$p_1 = \\mathrm{P}(X > k) = \\mathrm{P}\\left(Z > \\frac{k - 5.4}{0.5}\\right), \\quad p_2 = \\mathrm{P}(\\bar{Y} > k) = \\mathrm{P}\\left(Z > \\frac{k - 5.0}{0.15}\\right)$$<br>For $k > 5.4$, we have $0 < k - 5.4 < k - 5.0$ and $0.5 > 0.15 > 0$, so:<br>$$\\frac{k - 5.0}{0.15} > \\frac{k - 5.4}{0.5}$$<br>Therefore $\\mathrm{P}\\left(Z > \\frac{k-5.4}{0.5}\\right) > \\mathrm{P}\\left(Z > \\frac{k-5.0}{0.15}\\right)$, so <strong>$p_1$ has a larger value</strong> ($p_1 > p_2$)."
      },
      {
        label: "(d)",
        marks: 2,
        prompt: "Fasting glucose concentration can also be measured using milligram per decilitre ($\\text{mg/dL}$). The formula to convert $\\text{mmol/L}$ to $\\text{mg/dL}$ is $1\\text{ mmol/L} = 18.0\\text{ mg/dL}$. The random variable $G$ denotes the fasting glucose concentration, in $\\text{mg/dL}$, of a randomly chosen man. Draw a sketch to show the distribution of $G$, including the main features of the curve.",
        type: "self",
        solutionSvg: `<svg viewBox="0 0 300 175" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="145" x2="275" y2="145" stroke-width="1.2" />
  <polyline points="269,141 275,145 269,149" fill="none" stroke-width="1.2" />
  <text x="279" y="149" stroke="none" font-style="italic">G</text>
  <path d="M 35,144 C 75,142 105,30 150,26 C 195,30 225,142 265,144" fill="none" stroke="#4ca885" stroke-width="2" />
  <line x1="150" y1="18" x2="150" y2="145" stroke-dasharray="4,3" opacity="0.6" />
  <text x="128" y="162" stroke="none">μ = 97.2</text>
  <text x="172" y="42" stroke="none" fill="#4ca885" font-size="10">G ~ N(97.2, 81.0)</text>
</svg>`,
        solution: "$G = 18.0X$, so $\\mathrm{E}(G) = 18.0(5.4) = 97.2$ and $\\mathrm{Var}(G) = 18.0^2(0.5^2) = 81.0$ (standard deviation $\\sigma = 9.0$).<br>Thus $G \\sim \\mathrm{N}(97.2, 81.0)$: a symmetric bell-shaped curve centred at $\\mu = 97.2$, approaching the horizontal $G$-axis asymptotically at both tails."
      },
      {
        label: "(e)",
        marks: 2,
        prompt: "On your sketch, shade the region represented by $\\mathrm{P}(79 < G < 106)$ and state its value.",
        type: "auto",
        mode: "number",
        answer: "0.81433125",
        placeholder: "Probability to 3 s.f.",
        solutionSvg: `<svg viewBox="0 0 300 175" width="300" xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="10.5" fill="#2c2925" stroke="#2c2925">
  <line x1="25" y1="145" x2="275" y2="145" stroke-width="1.2" />
  <polyline points="269,141 275,145 269,149" fill="none" stroke-width="1.2" />
  <text x="279" y="149" stroke="none" font-style="italic">G</text>
  <path d="M 88,145 L 88,125 C 110,85 128,28 150,26 C 166,28 176,55 182,78 L 182,145 Z" fill="rgba(76,168,133,0.32)" stroke="none" />
  <path d="M 35,144 C 75,142 105,30 150,26 C 195,30 225,142 265,144" fill="none" stroke="#4ca885" stroke-width="2" />
  <line x1="150" y1="18" x2="150" y2="145" stroke-dasharray="4,3" opacity="0.6" />
  <line x1="88" y1="125" x2="88" y2="145" stroke="#4ca885" stroke-width="1.2" />
  <line x1="182" y1="78" x2="182" y2="145" stroke="#4ca885" stroke-width="1.2" />
  <text x="80" y="162" stroke="none">79</text>
  <text x="136" y="162" stroke="none">97.2</text>
  <text x="174" y="162" stroke="none">106</text>
</svg>`,
        solution: "With $G \\sim \\mathrm{N}(97.2, 81.0)$, shade the area under the bell curve between $G = 79$ and $G = 106$.<br>By GC:<br>$$\\mathrm{P}(79 < G < 106) = 0.814 \\; (3\\text{ s.f.})$$"
      }
    ]
  }
]);
