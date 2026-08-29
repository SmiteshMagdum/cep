export type Lesson = {
  id: string;
  section: "HTML" | "CSS";
  title: string;
  intro: string;
  code: string;
};

export const lessons: Lesson[] = [
  {
    id: "html-introduction",
    section: "HTML",
    title: "Introduction",
    intro:
      "HTML stands for HyperText Markup Language. It's the standard language used to create and structure every web page you've ever visited.",
    code: `<h1>My First Web Page</h1>
<p>HTML uses elements to describe the structure of a page.</p>`,
  },
  {
    id: "html-structure",
    section: "HTML",
    title: "HTML Structure",
    intro:
      "Every HTML document follows the same basic skeleton. it's what tells the browser how to read the page.",
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>It all starts here</h1>
  </body>
</html>`,
  },
  {
    id: "html-heading",
    section: "HTML",
    title: "Headings",
    intro:
      "HTML provides six levels of headings, from <h1> down to <h6>. The number tells you how important the text is.",
    code: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>`,
  },
  {
    id: "html-paragraph",
    section: "HTML",
    title: "Paragraphs",
    intro:
      "The <p> element is used to define a paragraph. Browsers automatically add space before and after it.",
    code: `<p>This is a paragraph. It can hold as much text as you like.</p>
<p>This is a second, separate paragraph.</p>`,
  },
  {
    id: "html-links",
    section: "HTML",
    title: "Links",
    intro:
      "Links let people navigate from one page to another using the <a> element and its href attribute.",
    code: `<a href="https://example.com">Visit example.com</a>`,
  },
  {
    id: "html-image",
    section: "HTML",
    title: "Images",
    intro:
      "The <img> element displays an image. It needs a src (the file) and an alt (a description for screen readers).",
    code: `<img src="https://placekitten.com/240/140" alt="A small kitten">`,
  },
  {
    id: "html-lists",
    section: "HTML",
    title: "Lists",
    intro:
      "HTML supports ordered lists (<ol>, numbered) and unordered lists (<ul>, bulleted), both built from <li> items.",
    code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
  },
  {
    id: "html-tables",
    section: "HTML",
    title: "Tables",
    intro:
      "Tables display data in rows and columns using <table>, <tr> for rows, and <td> for cells.",
    code: `<table border="1" cellpadding="6">
  <tr><th>Name</th><th>Grade</th></tr>
  <tr><td>Asha</td><td>8</td></tr>
</table>`,
  },
  {
    id: "html-forms",
    section: "HTML",
    title: "Forms",
    intro:
      "Forms collect information from users — text fields, buttons, and other inputs, all wrapped in a <form> element.",
    code: `<form>
  <label>Name: <input type="text"></label><br><br>
  <button type="button">Submit</button>
</form>`,
  },
  {
    id: "html-semantic",
    section: "HTML",
    title: "Semantic HTML",
    intro:
      "Semantic elements like <header>, <main>, and <footer> clearly describe their meaning to both the browser and the developer.",
    code: `<header><h1>My Site</h1></header>
<main><p>The main content goes here.</p></main>
<footer><p>© 2026</p></footer>`,
  },
  {
    id: "css-introduction",
    section: "CSS",
    title: "Introduction",
    intro:
      "CSS stands for Cascading Style Sheets. It's used to style and lay out the HTML you just learned to write.",
    code: `<style>
  h1 { color: #16A394; font-family: sans-serif; }
</style>
<h1>Styled with CSS</h1>`,
  },
  {
    id: "css-selectors",
    section: "CSS",
    title: "Selectors",
    intro:
      "Selectors decide which HTML elements a style rule applies to — by tag, class, or id.",
    code: `<style>
  .highlight { background: #ffe680; padding: 2px 6px; }
  #title { font-size: 22px; }
</style>
<p id="title">A <span class="highlight">highlighted</span> word</p>`,
  },
  {
    id: "css-colors",
    section: "CSS",
    title: "Colors",
    intro:
      "CSS can change the color of text, backgrounds, and borders — using names, hex codes, or rgb values.",
    code: `<style>
  div { background: #121010; color: #EFE7DA; padding: 16px; border-radius: 6px; }
</style>
<div>Dark background, light text</div>`,
  },
  {
    id: "css-fonts",
    section: "CSS",
    title: "Fonts",
    intro: "Font properties control the typeface, size, and weight of text on the page.",
    code: `<style>
  p { font-family: Georgia, serif; font-size: 20px; font-weight: 600; }
</style>
<p>Serif, size 20, semi-bold</p>`,
  },
  {
    id: "css-box-model",
    section: "CSS",
    title: "Box Model",
    intro:
      "Every element is a box made of content, padding, border, and margin — in that order, from the inside out.",
    code: `<style>
  div {
    padding: 14px;
    border: 3px solid #16A394;
    margin: 12px;
    background: #fff;
  }
</style>
<div>Content, padding, border, margin</div>`,
  },
  {
    id: "css-flexbox",
    section: "CSS",
    title: "Flexbox",
    intro: "Flexbox arranges items in a row or column and makes spacing between them easy to control.",
    code: `<style>
  .row { display: flex; gap: 10px; }
  .box { background: #16A394; color: #fff; padding: 14px; border-radius: 4px; }
</style>
<div class="row">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`,
  },
  {
    id: "css-grid",
    section: "CSS",
    title: "Grid",
    intro: "CSS Grid lays elements out in rows and columns at the same time — great for page layouts.",
    code: `<style>
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .cell { background: #ffe680; padding: 14px; text-align: center; }
</style>
<div class="grid">
  <div class="cell">A</div>
  <div class="cell">B</div>
  <div class="cell">C</div>
  <div class="cell">D</div>
</div>`,
  },
  {
    id: "css-responsive-design",
    section: "CSS",
    title: "Responsive Design",
    intro:
      "Media queries let a page adapt its styles based on screen size. Try shrinking the output panel below.",
    code: `<style>
  div { background: #16A394; color: #fff; padding: 20px; text-align: center; }
  @media (max-width: 300px) {
    div { background: #121010; }
  }
</style>
<div>Resize the browser to see this change</div>`,
  },
  {
    id: "css-animation",
    section: "CSS",
    title: "Animation",
    intro: "CSS animations create movement and transitions without needing any JavaScript.",
    code: `<style>
  .dot {
    width: 24px; height: 24px; border-radius: 50%;
    background: #16A394;
    animation: bounce 1s ease-in-out infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(30px); }
  }
</style>
<div class="dot"></div>`,
  },
];
