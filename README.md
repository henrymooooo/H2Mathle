# H2 Daily Math

An offline-first daily practice web app for Singapore A-Level H2 Mathematics (9758) prelim questions. It runs as plain HTML, CSS, and JavaScript with no build step or backend, and stores everything locally in your browser.

Live app: https://henrymoooo.github.io/h2dailymath/

![H2 Daily Math screenshot](screenshot.png)

## Features

Daily practice resets at 6:00 AM SGT and gives 1 Pure Math and 1 Statistics question from a bank of 727 questions (523 Pure, 204 Statistics). Questions follow a deterministic daily cycle, so everyone gets the same questions on a given day with no repeats until a full cycle finishes.

The Calendar tab tracks daily completion (`0/2`), streaks, and monthly history using `Done`, `Partially Complete`, and `Incomplete` states so finishing a question still counts even if you got parts wrong. You can also export and restore your progress as a `.json` file.

For typing answers, the app uses a WYSIWYG math input styled with Computer Modern (`KaTeX_Main` and `KaTeX_Math`), an inline SVG radical while typing, and full KaTeX rendering once you click away or submit. It supports keyboard shortcuts (`sqrt`, `pi`, `pm`, `theta`, `^`, `/`). The built-in offline grader checks exact forms, 3 s.f. (and accurate 4+ s.f.), decimal places, complex numbers, lists, tuples, algebraic expressions, and antiderivatives (`+ c`), with a MathML fallback when offline.

Hovering over the pin dot on any question part reveals a pink flag (`⚑`) to bookmark that part. In the Mistake Log tab, an expandable Flagged Questions panel at the top lists your flagged questions with topic labels, sorting (`Date: Newest`, `Date: Oldest`, `Topic`, `School`), and quick unflagging. Opening a question from this panel starts Focus Mode, which greys out unflagged parts with their reference answers shown so the preamble and flagged parts stand out.

Below the flagged panel, the Mistake Log lets you keep multiple reflection entries per question, tag each entry to a specific part (`All`, `(a)`, `(b)`, and so on), and label errors (`GC Error`, `Algebra Slip`, `Conceptual Gap`, etc.). Notes support inline `$...$` and display `$$...$$` LaTeX with automatic `$` pairing, live preview while typing, and inline editing or deletion directly from the Mistake Log tab.

The `Random` tab lets you practice freely by filtering the full bank by topic, school, and status (`Unseen`, `Missed`, `Solved`), or jumping to any question.

A few extra study tools stay hidden until you open them:

- MF26 (`M`): searchable formula reference drawer.
- Scratchpad (`W`): floating vector whiteboard with pan (`Space+drag`, middle-click, or two-finger drag), zoom, grid toggle, `Ctrl+Z` undo, and part pinning.
- Ask (`A`): copies the current question, official solution, and any pinned parts along with your prompt to the clipboard and opens Gemini in a new tab.
- Stopwatch: optional per-question timer in the question header.

## Project structure

- `index.html`: app shell, Newsreader, Source Serif 4, and KaTeX links, and drawers.
- `styles.css`: Exam Folio Prussian Navy styling, responsive rail layout, and math-field styling.
- `app.js`: WYSIWYG math field, offline grader, daily scheduler, Mistake Log, Scratchpad, and Ask drawer.
- `questions.js`: question registry (`window.registerQuestions`).
- `banks/manifest.js`, `banks/2025/*.js`, and `banks/2026/*.js`: 2025 and 2026 JC prelim question banks (64 papers, 727 questions).
- `PROMPT-GUIDE.MD`: LLM prompt template for converting past-paper PDFs into question bank `.js` files.
- `sw.js`: network-first Service Worker with offline cache fallback.

## Adding question banks

1. Give an LLM the instructions in [PROMPT-GUIDE.MD](PROMPT-GUIDE.MD) along with your past-paper PDF to convert the questions into the `.js` format used in `banks/`.
2. Save the generated file under `banks/<year>/` (for example, `banks/2026/my-paper.js`).
3. Add the new file path to `banks/manifest.js` so `loadBankScripts()` loads it automatically.

## Usage

Open `index.html` directly in a browser, or host the folder over HTTP/HTTPS (such as GitHub Pages, Cloudflare Pages, or Netlify) to enable Service Worker offline caching.

### Keyboard shortcuts

- `1` to `5`: switch tabs (`Pure Math`, `Statistics`, `Practice`, `Calendar`, `Study Log`)
- `M`: toggle MF26 reference
- `W`: toggle Scratchpad
- `A`: toggle Ask drawer
- `Esc`: close open drawer

## Notes

All progress, mistake logs, and flagged parts stay in your browser's `localStorage`. The question banks in `banks/` come from school prelim papers for personal study.
