# H2 Daily Math

An offline-first daily practice web app for Singapore A-Level **H2 Mathematics (9758)** prelim questions — built with zero build step, no backend, and local-first storage.

**Live App:** https://henrymoooo.github.io/h2dailymath/

![H2 Daily Math screenshot](screenshot.png)

## Features

- **Synchronized Daily Practice (6:00 AM SGT Reset):** Serves 1 Pure Math and 1 Statistics question each day from a 292-question bank (212 Pure, 80 Statistics) using a deterministic Wordle-style daily cycle — everyone gets the same questions each day with zero repeats within a full cycle.
- **Effort-Based Streak & Calendar:** Tracks daily completion (`0/2`), streaks, and monthly history using completion states (`Done`, `Partially Complete`, `Incomplete`) so showing up and finishing a question always counts, even when you learn from mistakes. Includes `.json` backup export and restore.
- **Desmos-Style WYSIWYG Math Input & Offline Grader:**
  - Typeset with Computer Modern (`KaTeX_Main` / `KaTeX_Math`) and full KaTeX rendering on blur/submit, plus an inline SVG radical and keyboard shortcuts (`sqrt`, `pi`, `pm`, `theta`, `^`, `/`).
  - Built-in offline evaluator supporting exact forms, 3 s.f. (and accurate 4+ s.f.), decimal places, complex numbers, lists, tuples, algebraic expressions, and antiderivatives (`+ c`), with MathML fallback when offline.
- **Per-Part Flagging & Focused Practice:**
  - Hover over the pin dot on any question part to reveal a subtle pink flag (`⚑`) and bookmark specific parts for later review.
  - The Mistake Log features a dedicated expandable **Flagged Questions** panel at the top with topic labels, sorting (`Date: Newest/Oldest`, `Topic`, `School`), quick unflagging, and **Focus Mode** — jumping to a flagged question greys out unflagged parts with their worked reference answers already shown so the preamble and flagged part(s) stand out.
- **Mistake Log with Inline LaTeX:**
  - Log multiple reflection entries per question, tag each entry to a specific question part (`All`, `(a)`, `(b)`, ...), and categorize errors (`GC Error`, `Algebra Slip`, `Conceptual Gap`, etc.).
  - Supports inline `$...$` and display `$$...$$` LaTeX with automatic `$` pairing, live preview while typing, and inline **Edit / Delete** directly from the Mistake Log tab.
- **Free Practice Mode (`Random`):** Filter the full bank by topic, school, and status (`Unseen`, `Missed`, `Solved`), or jump straight to any question.
- **Out-of-the-Way Study Tools:**
  - **MF26 (`M`):** Searchable formula quick-reference drawer.
  - **Scratchpad (`W`):** Floating vector whiteboard with smooth strokes, pan (`Space+drag` / middle-click / 2-finger), zoom, grid toggle, `Ctrl+Z` undo, and part-pinning.
  - **Ask (`A`):** Offline-by-default AI helper supporting Bring-Your-Own-Key Google Gemini or OpenAI-compatible endpoints, with pinned parts automatically passed as context.
  - **Stopwatch:** Optional per-question timer tucked in the question header.

## Project Structure

- `index.html` — App shell, JetBrains Mono & KaTeX links, and study-tool drawers
- `styles.css` — Paper-grid tab themes, responsive layout, and math-field styling
- `app.js` — WYSIWYG math field, offline evaluator, daily scheduler, Mistake Log, Scratchpad, and Ask drawer
- `questions.js` — Question registry (`window.registerQuestions`)
- `banks/manifest.js` & `banks/2026/*.js` — 2026 JC prelim question banks (26 papers, 292 questions)
- `PROMPT-GUIDE.MD` — LLM prompt template for converting past-paper PDFs into question bank `.js` files
- `sw.js` — Network-first Service Worker for fresh deploys with offline cache fallback

## Adding Question Banks

To add new prelim papers or custom question sets:

1. Give an LLM the instructions in [PROMPT-GUIDE.MD](PROMPT-GUIDE.MD) along with your past-paper PDF to convert the questions into the `.js` format used by `banks/`.
2. Save the generated file under `banks/<year>/` (e.g., `banks/2026/my-paper.js`).
3. Add the new file path to `banks/manifest.js` so `loadBankScripts()` loads it automatically.

## Usage

Open `index.html` directly in a browser, or host the static folder over HTTP/HTTPS (e.g., GitHub Pages, Cloudflare Pages, or Netlify) to enable Service Worker offline caching.

### Keyboard Shortcuts

- `1`–`5` — Switch tabs (`Pure Math`, `Statistics`, `Random`, `Calendar`, `Mistake Log`)
- `M` — Toggle MF26 Reference
- `W` — Toggle Scratchpad
- `A` — Toggle Ask drawer
- `Esc` — Close open drawer

## Notes

All progress, mistake logs, flagged parts, and optional API keys are stored locally in your browser's `localStorage`. Question banks in `banks/` are compiled from school prelim papers for personal study.
