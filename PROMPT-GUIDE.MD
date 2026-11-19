# ROLE & OBJECTIVE
You are converting Singapore GCE A-Level H2 Mathematics (Syllabus 9758) examination papers and their official worked solutions (provided as PDFs/text/images) into modular JavaScript question bank files for an offline local web app (`Daily H2 Math`).

Output ONLY valid JavaScript wrapped in `window.registerQuestions([...]);` matching the exact schema, evaluator constraints, LaTeX subset, and SVG conventions below. Do NOT truncate, summarize, or skip any question or sub-part. Verify every answer and intermediate value against the provided solutions PDF before outputting.

---

# 1. FILE NAMING & REGISTRATION
- Target file path convention: `banks/<year>/<school>-p<1|2>.js` (lowercase, e.g., `banks/2026/tmjc-p1.js`, `banks/2025/ri-p2.js`).
- If adding a school/year not pre-linked in `index.html`, remind the user to add `<script src="banks/..."></script>` before `<script src="app.js"></script>` in `index.html`, or put the questions in `banks/custom.js`.
- Wrap the entire array in:
window.registerQuestions([
  // question objects
]);

# 2. QUESTION OBJECT SCHEMA
Each item in the array is one full multi-part exam question:
{
  id: "SCHOOL-YEAR-P1-Q1",       // Unique, immutable ID. E.g. "TMJC-2026-P2-Q4", "ASRJC-2026-P2-Q9b"
  year: 2026,                    // Integer year
  school: "SCHOOL",              // Uppercase short code (e.g. "VJC", "TMJC", "RI", "SAJC")
  paper: "2026 Prelim Paper 1",  // Human-readable paper label
  qNum: "Q1",                    // Question number string
  category: "pure",              // STRICTLY "pure" or "stats".
                                 // Paper 1 is always "pure".
                                 // Paper 2 Section A is "pure"; Section B is "stats".
  topics: ["Topic 1", "Topic 2"],// 1 to 4 concise topic tags
  diagramSvg: `...`,             // OPTIONAL: inline <svg> for stem diagram (see Section 5)
  diagramImg: "images/...",      // OPTIONAL fallback image path (omit if using diagramSvg)
  stem: "...",                   // Shared question setup (HTML + LaTeX)
  parts: [ /* part objects */ ]
}

# 3. PART OBJECT SCHEMA & EVALUATOR ENGINE RULES
Each element of parts has:
{
  label: "(a)",                  // e.g. "(a)", "(b)(i)", "(b)(ii)", or "(Full)" if no sub-parts
  marks: 3,                      // Integer marks
  prompt: "...",                 // Sub-part question text (HTML + LaTeX)
  type: "auto",                  // STRICTLY "auto" (typed answer) or "self" (reveal + self-grade)
  // --- Fields below are for type: "auto" ---
  mode: "number",                // See exact supported modes below
  answer: "...",                 // Exact value/expression string, OR array depending on mode
  answers: ["...", "..."],       // OPTIONAL (mode: "number" only): array of alternative valid numeric values (e.g. 5sf vs 3sf intermediate rounding)
  exactRequired: true,           // OPTIONAL boolean: rejects rounded decimals if true
  dp: 2,                         // OPTIONAL integer: accepts exact OR value rounded to `dp` decimal places (e.g. dp: 2 for money, dp: 1 for degrees)
  signHint: true,                // OPTIONAL boolean (mode: "number" only): warns without crashing if magnitude matches with opposite sign
  vars: { x: [1, 2] },           // REQUIRED for modes "expr", "expr-list", "expr-pm"
  domainPoints: [2, 3, 5],       // REQUIRED for mode "antiderivative"
  fields: [ /* multi-field */ ], // REQUIRED for mode "multi-field"
  placeholder: "...",            // Generic format hint ONLY (NEVER leak the answer!)
  // --- Fields below are for ALL types ---
  solutionSvg: `...`,            // OPTIONAL: inline <svg> for worked solution / graph sketch
  solutionImg: "images/...",     // OPTIONAL fallback image path
  solution: "..."                // REQUIRED: clear worked solution (HTML + LaTeX)
}

CRITICAL: Supported mode Values & Hard Engine Limits
The browser app uses a custom pure-JS evaluator evalComplex(). You MUST respect these exact capabilities and limitations:
1. Supported syntax inside answer strings:
Operators: +, -, *, /, ^
Constants: pi, e, i
Functions: sqrt(), ln(), log() (base 10), abs(), sin(), cos(), tan(), asin(), acos(), atan()
NEVER put \frac, \sqrt, cosec, sec, cot, ! (factorial), nCr, \pm, = signs, or units (cm, $, °) inside answer strings! Pre-convert them (e.g. \frac{\sqrt{3}\pi}{9} -> "sqrt(3)*pi/9", sec^2 -> 1/cos(...)^2, 5!/(2!3!) -> pre-evaluate to "10" or decimal).
2. mode: "number"
Single real number or constant expression (no variables).
Store the exact expression (e.g. "15/28", "sqrt(3)*pi/9", "ln(16)/10") or 5+ sig figs (e.g. "0.5368302878") so that BOTH exact form and 3 s.f. (0.536, 0.537) pass!
Use exactRequired: true whenever the question asks for "exact" form or expects an integer.
Use dp: 1 for angles in degrees (e.g., 15.8° -> answer: "15.793", dp: 1), dp: 2 for money or "2 d.p.".
Use answers: ["78.0016", "78.0627"] if full-precision vs 3 s.f. intermediate steps yield slightly different 3 s.f. values (78.0 vs 78.1).
3. mode: "number-list"
answer is an array of numbers, e.g. [1, 17]. Order-independent. Supports exactRequired.
4. mode: "tuple"
answer is an ordered array of numbers for coordinates/vectors, e.g. [1, -1, -1]. Strips outer () or [] from user input.
5. mode: "complex-list"
answer is an array of complex number strings, e.g. ["1-i", "-1-i", "-1+i"]. Order-independent.
6. mode: "expr"
Evaluates a single-side algebraic expression at multiple test points specified in vars.
Example: vars: { a: [1, 2, 5] }, answer: "3*a + 4/pi + 1/2".
Constraints:
expr mode evaluates .re only (no complex i).
Variable names must NOT collide with pi, e, i, or function names (sin, cos, tan, ln, log, abs, sqrt).
Choose vars test points strictly inside the valid real domain (e.g. avoid division by zero or negative sqrt/ln arguments).
NEVER use expr mode for equations containing = (e.g. y = 2x - 9) or vector lines (r = a + \lambda d). Use type: "self" instead.
7. mode: "expr-list"
answer is an array of expression strings, e.g. ["2*x+2*v", "-2*x-2*v"], evaluated across vars (all arrays in vars must have equal length, e.g. { x: [1, 2], v: [3, 5] }). Order-independent.
8. mode: "expr-pm"
HARD QUIRK: In app.js, expr-pm is hardcoded to iterate ONLY over part.vars.c using variable name c!
answer is the positive branch only (e.g. "sqrt(-c)/2").
If the variable is NOT named c, do NOT use expr-pm; use mode: "expr-list" with both branches or type: "self".
9. mode: "antiderivative"
For indefinite integrals in x. answer omits + c.
Requires domainPoints: [x1, x2, x3] (3 valid points in the continuous domain of the antiderivative, e.g. [2, 3, 5] for \ln|x-1|).
Evaluator automatically compares F(x_2) - F(x_1) and F(x_3) - F(x_1) and reminds the user if +C is missing.
10. mode: "multi-field"
fields: array of { label: "p =", answer: "...", exactRequired?: true, dp?: 2, placeholder?: "..." }.
HARD QUIRK: Each field inside multi-field is graded as mode: "number". It CANNOT grade expressions containing variables like x or a. Only use multi-field for numeric/constant values (including constants like "ln(24)", "388/65").
When to Use type: "self"
Always use type: "self" (never force "auto") for:
"Show that...", "Prove...", "Explain...", "Describe...", "State what it means...", "Sketch the graph..."
Inequalities / intervals / set notation (e.g., -2 <= x < 0 or 1 < x <= 2, {k in R+ : k <= 177})
Equations of lines, planes, tangents, normals, or curves (containing = or vector parameters)
Hypothesis test full presentations (H0, H1, distribution, p-value, contextual conclusion)
Algebraic answers with >1 variable where formatting is ambiguous or non-numeric (multi-field cannot handle variables)

# 4. PLACEHOLDERS, STRINGS & SAFE LATEX SUBSET
Placeholder Anti-Leak Rule
NEVER include the answer, answer digits, or exact structure of the answer in placeholder!
Bad: "e.g. 1, 17", "e.g. +-sqrt(-c)/2", "e.g. 0.537"
Good: "Separate values with a comma", "Expression in terms of c", "Exact or 3 s.f.", "Integer value", "Coordinates (x, y, z)"
Currency Dollar Sign Rule
NEVER write literal currency "$" signs (like "$151" or "$100") inside stem, prompt, or solution text, because "$" is parsed as a LaTeX math delimiter and will accidentally swallow text between two dollar amounts! Write "151 dollars" or "SGD 151" instead.
JS String Escaping Rule
All LaTeX backslashes inside JS strings MUST be doubled: "\\frac{1}{2}", "\\mathrm{i}", "\\ln".
Inside \begin{pmatrix} ... \end{pmatrix}, row breaks require FOUR backslashes in a JS string: "\\begin{pmatrix} 1 \\\\ -2 \\\\ 1 \\end{pmatrix}".
Do NOT put unescaped backticks (`) or ${ inside template literals (`...`).
Safe LaTeX Subset (Offline MathML Compatible)
app.js renders with KaTeX when online and falls back to a built-in LaTeX-to-MathML renderer when 100% offline. To ensure prompts and solutions render cleanly in both online and offline modes:
Supported commands: \frac{}{}, \sqrt{}, \bar{}, ^{}, _{}, \int, \sum, \begin{pmatrix}...\end{pmatrix}, \sin, \cos, \tan, \ln, \log, \sec, \cosec, \mathrm{d}, \mathrm{i}, \mathrm{e}, \mathrm{P}, \mathrm{E}, \mathrm{Var}, \mathrm{H}, \mathrm{N}, \mathrm{B}, \mathbf{r}.
Supported symbols: \pi, \theta, \lambda, \mu, \sigma, \pm, \times, \cdot, \le, \ge, \ne, \approx, \implies, \therefore, \sim, \mid, \cap, \cup, \left, \right, \,, \quad, \text{}.
Avoid unsupported LaTeX commands in prompt/stem/solution so the offline MathML fallback stays clean:
- Avoid \tfrac (use \frac instead)
- Avoid \to and \infty inside LaTeX when simple Unicode or plain words work (e.g. write "as n -> infinity" or Unicode "→", "∞" in HTML text, or keep math simple)
- Avoid \overrightarrow{AB}, \angle, \triangle, \operatorname, \binom, and \begin{cases} in inline math where simple alternatives exist (use AB or \mathbf{a}, Unicode "∠", "△", "^nC_r" or HTML text, and display $$...$$ or HTML <br> for piecewise lines).
Use HTML <br>, <strong>, <em> for layout.
Data Tables: Format all tables using native HTML:
<div class='q-table-wrap'><table class='q-table'><tr><th>$x$</th><td>...</td></tr></table></div>

# 5. INLINE SVG DIAGRAM & GRAPH SPEC
Whenever a question has a geometric/3D figure, curve diagram, Argand diagram, scatter plot, or whenever a worked solution asks to "Sketch..." or relies on a Venn/normal/scatter/curve visual, generate a crisp inline <svg> in diagramSvg or solutionSvg.
Technical SVG Rules
Self-contained: <svg viewBox="0 0 W H" width="..." xmlns="http://www.w3.org/2000/svg" font-family="Georgia,serif" font-size="11" fill="#2c2925" stroke="#2c2925">
NO <defs> or id="..." attributes (especially NO <marker id="...">): Multiple SVGs are injected into the same HTML DOM, so duplicate IDs collide across questions. Draw arrowheads manually using <polyline points="..." fill="none" />.
Color Palette:
Axes, edges, text: #2c2925
Pure Math primary curves/highlights: #4a8fe7 (fill tint rgba(91,155,213,0.22))
Statistics primary curves/points: #4ca885
Outliers / highlights / secondary lines: #cf5652 or #e0726e
Asymptotes, hidden 3D edges, guide lines: stroke-dasharray="4,3" with opacity="0.5"–"0.7"
Mathematical & Geometric Accuracy:
Compute real pixel coordinates from the exact equation/data points when plotting curves, scatter plots, or normal distributions.
Open vs. closed endpoint circles: open = fill="#fff" stroke="#4a8fe7" stroke-width="2", closed = fill="#4a8fe7".
Include right-angle square markers, labelled intercepts, turning points, asymptote equations, and axis labels (O, x, y, Re, Im).

# 6. OUTPUT CHECKLIST BEFORE RESPONDING
1. Verify every category is "pure" (P1 + P2 Sec A) or "stats" (P2 Sec B).
2. Verify every "auto" answer against the solutions PDF, ensuring vars / domainPoints avoid domain errors.
3. Verify NO placeholder leaks any part of an answer.
4. Verify NO literal "$" currency signs appear in text, NO "=" signs or unsupported functions appear in "auto" answer strings, and "multi-field" only contains numeric/constant answers.
5. Verify all \frac, \begin{pmatrix}, etc. have properly escaped backslashes (\\, \\\\), no unsupported offline MathML commands (\tfrac, \overrightarrow, \to, \infty, \angle, \triangle) are used, and all SVGs have zero id attributes.
6. Output the complete .js file ready to save.