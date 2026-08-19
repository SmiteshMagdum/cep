Build a modern, responsive educational coding-learning website for a **Coding Awareness Program for School Children**.

The website should feel inspired by platforms such as W3Schools, but it must have its own original design and should be simpler, friendlier, and more engaging for school students.

## Main Goal

The website should teach beginners programming and web development through a combination of:

1. Easy-to-understand documentation
2. Interactive code examples
3. A live code editor
4. Instant output/preview
5. Small coding challenges
6. Progress tracking
7. Gamification

The learning experience should follow:

**Learn → Read Example → Write Code → Run → See Output → Solve Challenge → Earn Progress**

---

# Website Layout

Create a desktop-first responsive layout with three main areas:

### Left Sidebar — Course Navigation

A fixed/collapsible sidebar containing:

**HTML**

* Introduction
* HTML Structure
* Headings
* Paragraphs
* Links
* Images
* Lists
* Tables
* Forms
* Semantic HTML

**CSS**

* Introduction
* Selectors
* Colors
* Fonts
* Box Model
* Flexbox
* Grid
* Responsive Design
* Animations

**JavaScript**

* Introduction
* Variables
* Data Types
* Conditions
* Loops
* Functions
* Arrays
* DOM
* Events
* Mini Projects

Each topic should show a completion indicator when completed.

Example:

✓ Introduction
✓ Headings
○ Paragraphs
○ Links

---

# Top Navigation

Create a clean navbar containing:

* Logo: "CodeSpark" or another suitable original coding-education name
* Learn
* Practice
* Projects
* Leaderboard
* Progress
* Search
* Student profile/avatar

Include a dark/light mode toggle.

The design should be clean and modern rather than looking like a corporate LMS.

---

# Main Learning Page

When a student selects a topic, display a documentation-style lesson.

Example topic:

## HTML Headings

Start with:

### What are HTML headings?

Explain the concept using very simple language suitable for a school student.

Avoid overly technical explanations.

Then show:

### Example

```html
<h1>Hello World</h1>
<h2>My Website</h2>
<h3>About Me</h3>
```

Show a **Run Example** button.

Under the example, show the rendered result.

---

# Interactive Code Editor

The most important feature is a built-in coding editor similar to W3Schools.

Use **Monaco Editor** or another professional browser-based code editor.

The student should NOT have to leave the website to write code.

Create an editor section:

### Try It Yourself

For HTML lessons:

```text
┌───────────────────────────┬───────────────────────────┐
│                           │                           │
│        CODE EDITOR        │          PREVIEW          │
│                           │                           │
│ <h1>Hello World</h1>      │     Hello World           │
│ <p>My first website</p>   │     My first website      │
│                           │                           │
└───────────────────────────┴───────────────────────────┘

                    [ Run Code ]
```

The editor should support:

* Syntax highlighting
* Line numbers
* Auto indentation
* Code formatting
* Dark/light themes
* Copy code
* Reset code
* Run code

When the student clicks **Run Code**, immediately render the result in the preview panel.

---

# HTML/CSS/JavaScript Editor

As students progress, introduce multiple editor tabs:

```text
HTML | CSS | JavaScript
```

Example:

HTML:

```html
<h1 id="title">Hello World</h1>
<button onclick="changeText()">Click Me</button>
```

CSS:

```css
h1 {
  color: blue;
}
```

JavaScript:

```javascript
function changeText() {
  document.getElementById("title").textContent = "You clicked me!";
}
```

The website should combine the three editors and render the result inside a safe preview iframe.

Do not execute code directly in the main application DOM.

---

# Coding Challenge

After every few lessons, show a small challenge.

Example:

## 🎯 Challenge

Create an `<h1>` element containing:

```text
My First Website
```

Show:

* Challenge description
* Expected result
* Code editor
* Run button
* Check Answer button
* Reset button

When the student completes the challenge:

Show:

> 🎉 Great job! Challenge completed.

Award points such as:

**+10 XP**

---

# Progress System

Every lesson should have a completion state.

Students should earn XP by:

* Completing lessons
* Completing challenges
* Building projects
* Solving coding problems

Example:

```text
Your Progress

HTML       ████████░░ 80%
CSS        █████░░░░░ 50%
JavaScript ███░░░░░░░ 30%

Total XP: 420
Current Level: 5
```

Add a streak:

🔥 **5 Day Coding Streak**

---

# Projects Section

Create a dedicated project section where students apply what they learned.

Projects should increase in difficulty.

### Beginner

* Personal Portfolio
* Simple Profile Card
* Restaurant Website
* Birthday Card

### Intermediate

* Calculator
* To-Do List
* Quiz App
* Digital Clock

### Final Project

## 🚀 Build Your Own Portfolio

Students should create a personal portfolio using:

* HTML
* CSS
* JavaScript

Provide requirements such as:

* Name
* About Me
* Skills
* Hobbies
* Projects
* Contact section

Allow them to preview their project directly inside the website.

---

# Practice Section

Create a separate coding-practice page.

Organize problems into levels:

### Level 1 — Beginner

* Print Hello World
* Print your name
* Add two numbers
* Even or odd
* Largest of two numbers

### Level 2 — Basic Programming

* Loops
* Factorial
* Multiplication table
* Reverse a number
* Count digits

### Level 3 — Problem Solving

* Arrays
* Strings
* Searching
* Sorting

### Level 4 — Competitive Programming

Include beginner-friendly Codeforces-style problems.

Show:

```text
Problem
Difficulty
Points
Solved
Status
```

Do not make the UI overwhelming for school students.

---

# Coding Arena

Create a gamified coding dashboard.

Display:

```text
🏆 Coding Arena

Problems Solved       37
Total XP              840
Coding Time           8h 42m
Current Streak        6 days
Accuracy              78%
```

Add:

### Stopwatch

Buttons:

**Start | Pause | Reset**

Track the amount of time the student spends coding.

---

# Analytics

Create a clean analytics dashboard containing:

* Problems solved per day
* Coding time per week
* Lessons completed
* Challenge accuracy
* Current streak
* XP earned
* Difficulty distribution

Use attractive but simple charts.

Do not overwhelm young students with too much data.

---

# Leaderboard

Create a school/class leaderboard.

Example:

```text
🏆 Weekly Leaderboard

1   Aarav       840 XP
2   Riya        790 XP
3   Rahul       720 XP
4   Ananya      650 XP
5   Karan       610 XP
```

Allow filtering by:

* This Week
* This Month
* All Time
* My Class

The leaderboard should encourage friendly competition rather than feel intimidating.

---

# Badges

Create achievement badges.

Examples:

🏅 First Code
Completed your first coding challenge.

🔥 7 Day Streak
Coded for 7 consecutive days.

💻 Web Creator
Completed your first web project.

🧠 Problem Solver
Solved 25 coding problems.

🏆 Coding Champion
Reached the top 3 on the leaderboard.

---

# Student Dashboard

Create a personalized dashboard.

Display:

```text
Good morning, Student! 👋

Ready to code today?

Continue Learning
HTML — Paragraphs
[ Continue ]

Your Progress
HTML       80%
CSS        50%
JavaScript 30%

🔥 5 Day Streak

Today's Challenge
Create your first button.

[ Start Challenge ]
```

---

# Design Requirements

The design should be:

* Modern
* Friendly
* Minimal
* Educational
* Responsive
* Accessible
* Easy for school children to understand

Avoid making it look childish.

Use a professional educational-product aesthetic with subtle playful elements.

Use:

* Rounded cards
* Clear typography
* Plenty of whitespace
* Soft shadows
* Simple icons
* Clear buttons
* Progress bars
* Small animations
* Smooth transitions

Do not overuse gradients, glassmorphism, or excessive animations.

---

# Responsive Design

The website must work properly on:

* Desktop
* Laptop
* Tablet
* Mobile

On mobile:

* Convert the sidebar into a drawer
* Stack the editor and preview vertically
* Make the code editor horizontally scrollable
* Keep buttons accessible

---

# Important UX Principle

The website should never make students feel like they are reading a boring textbook.

Every lesson should follow:

**Explanation**

↓

**Example**

↓

**Try It Yourself**

↓

**Run Code**

↓

**See Output**

↓

**Challenge**

↓

**Earn XP**

↓

**Continue Learning**

Make this learning loop the central experience of the website.

---

# Technical Requirements

Use:

* Next.js
* TypeScript
* Tailwind CSS
* Monaco Editor
* React components
* Responsive design

For HTML/CSS/JavaScript execution, use a sandboxed iframe for the preview.

Keep the code editor and preview isolated from the main application.

Build the UI with reusable components such as:

* Navbar
* Sidebar
* Lesson
* CodeEditor
* Preview
* CodeExample
* Challenge
* ProgressBar
* XPCard
* Leaderboard
* Analytics
* Badge
* StudentDashboard

Use mock data initially so the complete interface can be demonstrated without requiring a backend.

The final result should feel like a **real coding education platform for school students**, not simply a documentation website.
