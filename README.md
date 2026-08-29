# Learn Basic
 
A coding awareness program for school children — teaches HTML and CSS
through short, live lessons with an in-browser code editor, a 12-problem
set to practice with, and a beginner-friendly hackathon page.
 
**Live site:** [learnbasic.vercel.app](https://learnbasic.vercel.app/)
**Repo:** [furishere/cep](https://github.com/furishere/cep)
 
---
 
## Table of contents
 
- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Pages](#pages)
- [Project structure](#project-structure)
- [Design tokens](#design-tokens)
- [Content](#content)
- [Contributing](#contributing)
- [License](#license)
---
 
## About
 
Learn Basic exists for one reason: the first line of code someone writes
shouldn't feel intimidating. It's a small, self-contained web app aimed at
school students who've never written HTML or CSS before — no setup, no
sign-up, nothing to install. Open the site, read a short lesson, run some
code, and see it work.
 
It's built around three things:
 
1. **Website Learning** — a walkthrough of HTML and CSS fundamentals, each
   topic paired with an editable, runnable example.
2. **Problem Set** — twelve small problems (hosted on Codeforces) that move
   from basics to simple conditionals, so there's something to actually
   practice with once the lessons are done.
3. **Hackathon** — a lightweight event page for students ready to build
   something of their own, with a random project picker and a build timer
   to practice against a deadline solo.
## Features
 
- Live, editable code snippets — type HTML/CSS, hit **Run**, see the output
  rendered instantly in an iframe, no page reload
- 19 short lessons (10 HTML, 9 CSS) covering structure, tags, the box model,
  flexbox, grid, responsive design, and animation
- A 12-problem practice set with bookmarking and solved-state tracking
- A random project generator and countdown build timer for self-directed
  practice
- Fully responsive, dark-themed UI with a single consistent color system
- Zero backend — everything runs client-side, state resets on reload by
  design (no accounts, no tracking)
## Tech stack
 
- [Next.js](https://nextjs.org/) 15 (App Router)
- TypeScript
- Tailwind CSS v4 (CSS-based theme via `@theme inline`, no
  `tailwind.config.ts`)
- Fonts via `next/font/google` — Geist (sans) and Inter
- Deployed on [Vercel](https://vercel.com/)
## Getting started
 
Clone the repo and install dependencies:
 
```bash
git clone https://github.com/furishere/cep.git
cd cep
pnpm install
pnpm run dev
```
 
Open [http://localhost:3000](http://localhost:3000) to view it.
 
> First run needs an internet connection — Google Fonts are fetched at
> build time by `next/font/google`.
 
## Scripts
 
| Command        | What it does                        |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the dev server with hot reload |
| `pnpm build`   | Production build                     |
| `pnpm start`   | Serve the production build           |
| `pnpm lint`    | Run ESLint                           |
 
## Pages
 
- **Home** (`/`) — intro, why the program exists, how it works
- **Website Learning** (`/website-learning`) — 10 HTML + 9 CSS lessons, each
  with a live editor: edit the code, hit Run, see the output rendered in an
  iframe right below it
- **Problem Set** (`/problem-set`) — 12 practice problems linked out to
  Codeforces, with bookmark and mark-as-solved toggles (state is local, no
  backend)
- **Hackathon** (`/hackathon`) — event info, schedule, ground rules, plus a
  random project picker and a build timer for practicing solo
## Project structure
 
```
app/
  layout.tsx                root layout — fonts, Nav, Footer
  globals.css                Tailwind v4 theme: colors + fonts as CSS variables
  page.tsx                  Home
  website-learning/page.tsx
  problem-set/page.tsx
  hackathon/page.tsx
components/
  Nav.tsx, Footer.tsx
  CodeEditor.tsx             reusable live editor (textarea + iframe preview)
  ProblemTable.tsx           problem set table, bookmark/solved state
  RandomProject.tsx          random project idea picker
  BuildTimer.tsx             countdown timer with start/pause/reset
lib/
  lessons.ts                 HTML/CSS lesson content + starter code
  problems.ts                 problem set data
  projects.ts                 random project idea list
```
 
## Design tokens
 
Defined in `app/globals.css` via Tailwind v4's `@theme inline`, available
directly as utility classes (`bg-background`, `text-green-1`, `border-line`,
etc.) with no separate config file:
 
| Token        | Value       | Used for                              |
| ------------ | ----------- | -------------------------------------- |
| `background` | `#131420`   | page background                        |
| `foreground` | `#ffffff`   | primary text                           |
| `gray-1`     | `#A0AEC0`   | secondary/body text                    |
| `gray-2`     | `#1a202c`   | card backgrounds                       |
| `green-1`    | `#16A394`   | accent — links, buttons, borders       |
| `green-2`    | `#71E8DF`   | accent highlight (e.g. timer warning)  |
| `white-1`    | `#F7FAFC`   | emphasis text on dark cards            |
| `line`       | `#2A2B36`   | borders and dividers                   |
 
Type: **Geist** for headings and UI text (`font-sans`), **Inter** for
labels, code, and timers (`font-mono`).
 
## Content
 
All lesson, problem, and project-idea content lives as plain data in `lib/`
— no JSX editing required to add or change what's shown:
 
- `lib/lessons.ts` — each lesson's title, intro text, and starter code
- `lib/problems.ts` — problem name, Codeforces link, and concept tag
- `lib/projects.ts` — random project idea name + one-line description

## Contributing
 
Issues and pull requests are welcome. If you're adding a lesson or problem,
it only needs an entry in the relevant file under `lib/` — the pages render
from that data automatically.

## License
 
MIT
 