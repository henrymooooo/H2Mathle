# H2 Daily Math

An offline-first daily practice web app for Singapore A-Level **H2 Mathematics (9758)** prelim questions.

## Features

- **Daily Practice (6:00 AM SGT Reset):** Serves 1 Pure Math and 1 Statistics question each day, tracking your daily completion (`0/2`), streak, and full history.
- **WYSIWYG Math Input & Offline Grader:** Built-in math keypad and expression evaluator supporting exact forms, 3 s.f., decimal places, complex numbers, lists, tuples, algebraic expressions, and antiderivatives (`+ c`).
- **Free Practice Mode:** Filter questions by topic, school, and status (`Unseen`, `Missed`, `Solved`), or jump to any question.
- **Calendar & Backups:** Browse past months, revisit previous days' attempts, and export/import progress as `.json`.
- **Mistake Log & Topic Mastery:** Tag errors (`GC Error`, `Algebra Slip`, `Conceptual Gap`, etc.), write reflection notes, and view per-topic accuracy.
- **Study Tools (Out of the Way Until Needed):**
  - **MF26:** Searchable formula quick reference (`M`).
  - **Scratchpad:** Floating vector whiteboard with pan, zoom, grid, `Ctrl+Z` undo, and part-pinning (`W`).
  - **Ask:** Toggleable, offline-by-default question helper supporting Bring-Your-Own-Key Gemini or OpenAI-compatible endpoints (`A`).
  - **Stopwatch:** Optional per-question timer tucked in the question header.

## Project Structure

- `index.html` — App shell and drawers
- `styles.css` — Paper-themed styling and responsive layout
- `app.js` — Math field, evaluator, state management, and UI views
- `questions.js` — Question registry (`window.registerQuestions`)
- `banks/manifest.js` & `banks/2026/*.js` — Prelim question banks
- `PROMPT-GUIDE.MD` — LLM prompt template for converting past-paper PDFs into question bank `.js` files
- `sw.js` — Service Worker for offline caching over HTTP/HTTPS

## Adding Question Banks

To add new prelim papers or custom question sets:

1. Give an LLM the instructions in [PROMPT-GUIDE.MD](PROMPT-GUIDE.MD) along with your past-paper PDF to convert the questions into the `.js` format used by `banks/`.
2. Save the generated file under `banks/<year>/` (e.g., `banks/2026/my-paper.js`).
3. Add the new file path to `banks/manifest.js` so `loadBankScripts()` loads it automatically.

## Usage

Open `index.html` directly in a browser, or serve the folder over HTTP/HTTPS (e.g., GitHub Pages, Cloudflare Pages, or Netlify) to enable Service Worker offline caching.

### Keyboard Shortcuts

- `1`–`5` — Switch tabs (`Pure Math`, `Statistics`, `Random`, `Calendar`, `Mistake Log`)
- `M` — Toggle MF26 Reference
- `W` — Toggle Scratchpad
- `A` — Toggle Ask drawer
- `Esc` — Close open drawer

## Notes

All progress, notes, and optional API keys are stored locally in your browser's `localStorage`. Question banks in `banks/` are compiled from school prelim papers for personal study.
