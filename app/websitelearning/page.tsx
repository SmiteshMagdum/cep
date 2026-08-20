import Sidebar from "@/components/website_making/SideBar";
import HtmlEditor from "@/components/website_making/HtmlEditor";

export default function DocsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 max-w-4xl px-10 py-12">

        <section
          id="html-introduction"
          className="scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Introduction
          </h1>

          <p className="mt-4 text-gray-1">
            HTML stands for HyperText Markup Language.
            It is the standard language used to create
            and structure web pages.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">
            What is HTML?
          </h2>

          <p className="mt-3 text-gray-1">
            HTML uses elements to describe the structure
            of a web page.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>

  <body>
    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
          />
        </section>

        <section
          id="html-structure"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Structure
          </h1>

          <p className="mt-4 text-gray-1">
            An HTML document has a basic structure that
            tells the browser how to interpret the page.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>

  <head>
    <title>My Website</title>
  </head>

  <body>
    <h1>Welcome!</h1>
    <p>This is my website.</p>
  </body>

</html>`}
          />
        </section>

        <section
          id="html-heading"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Headings
          </h1>

          <p className="mt-4 text-gray-1">
            HTML provides six levels of headings,
            from h1 to h6.
          </p>

          <HtmlEditor
            initialCode={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
          />
        </section>

        <section
          id="html-paragraph"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Paragraphs
          </h1>

          <p className="mt-4 text-gray-1">
            The HTML p element is used to define a paragraph.
          </p>

          <HtmlEditor
            initialCode={`<p>This is my first paragraph.</p>
<p>This is my second paragraph.</p>`}
          />
        </section>

        <section
          id="html-links"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Links
          </h1>

          <p className="mt-4 text-gray-1">
            HTML links allow users to navigate from one
            page to another.
          </p>

          <HtmlEditor
            initialCode={`<a href="https://example.com">
  Visit Example
</a>`}
          />
        </section>

        <section
          id="html-image"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Images
          </h1>

          <p className="mt-4 text-gray-1">
            The HTML img element is used to display images
            on a web page.
          </p>

          <HtmlEditor
            initialCode={`<img
  src="https://via.placeholder.com/300"
  alt="Example image"
/>`}
          />
        </section>

        <section
          id="html-lists"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Lists
          </h1>

          <p className="mt-4 text-gray-1">
            HTML supports ordered and unordered lists.
          </p>

          <HtmlEditor
            initialCode={`<h2>Unordered List</h2>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>Ordered List</h2>

<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>`}
          />
        </section>

        <section
          id="html-tables"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Tables
          </h1>

          <p className="mt-4 text-gray-1">
            HTML tables are used to display data in rows
            and columns.
          </p>

          <HtmlEditor
            initialCode={`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>

  <tr>
    <td>John</td>
    <td>20</td>
  </tr>

  <tr>
    <td>Jane</td>
    <td>22</td>
  </tr>
</table>`}
          />
        </section>

        <section
          id="html-forms"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            HTML Forms
          </h1>

          <p className="mt-4 text-gray-1">
            HTML forms are used to collect information
            from users.
          </p>

          <HtmlEditor
            initialCode={`<form>
  <label for="name">
    Name:
  </label>

  <input
    type="text"
    id="name"
    placeholder="Enter your name"
  />

  <button type="submit">
    Submit
  </button>
</form>`}
          />
        </section>


        <section
          id="html-semantic"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            Semantic HTML
          </h1>

          <p className="mt-4 text-gray-1">
            Semantic HTML elements clearly describe their
            meaning to both the browser and the developer.
          </p>

          <HtmlEditor
            initialCode={`<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<main>
  <article>
    <h2>My Article</h2>
    <p>This is an article.</p>
  </article>
</main>

<footer>
  <p>Copyright 2026</p>
</footer>`}
          />
        </section>

        <section
          id="css-introduction"
          className="mt-40 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            CSS Introduction
          </h1>

          <p className="mt-4 text-gray-1">
            CSS stands for Cascading Style Sheets.
            CSS is used to style and layout web pages.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>

<body>
  <h1>Hello CSS!</h1>
</body>
</html>`}
          />
        </section>


        <section
          id="css-selectors"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            CSS Selectors
          </h1>

          <p className="mt-4 text-gray-1">
            CSS selectors are used to select the HTML
            elements that you want to style.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: red;
    }

    .title {
      font-size: 30px;
    }

    #special {
      color: green;
    }
  </style>
</head>

<body>
  <h1 class="title">Hello</h1>

  <p>This is a paragraph.</p>

  <p id="special">
    Special paragraph
  </p>
</body>
</html>`}
          />
        </section>

        <section
          id="css-colors"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            CSS Colors
          </h1>

          <p className="mt-4 text-gray-1">
            CSS allows you to change the color of text,
            backgrounds, borders, and other elements.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
    }

    p {
      color: #ff0000;
    }

    div {
      background-color: lightgray;
    }
  </style>
</head>

<body>
  <h1>Blue Heading</h1>

  <p>Red paragraph</p>

  <div>
    Gray background
  </div>
</body>
</html>`}
          />
        </section>


        <section
          id="css-fonts"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            CSS Fonts
          </h1>

          <p className="mt-4 text-gray-1">
            CSS provides properties for changing the
            appearance of text.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      font-family: Arial;
      font-size: 40px;
      font-weight: bold;
    }

    p {
      font-size: 20px;
    }
  </style>
</head>

<body>
  <h1>My Heading</h1>
  <p>My paragraph.</p>
</body>
</html>`}
          />
        </section>


  
        <section
          id="css-box-model"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            CSS Box Model
          </h1>

          <p className="mt-4 text-gray-1">
            Every HTML element can be considered as a box.
            The CSS box model consists of content, padding,
            border, and margin.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      width: 200px;
      padding: 20px;
      border: 5px solid black;
      margin: 20px;
    }
  </style>
</head>

<body>
  <div>
    This is a box.
  </div>
</body>
</html>`}
          />
        </section>


        {/* CSS Flexbox */}
        <section
          id="css-flexbox"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            CSS Flexbox
          </h1>

          <p className="mt-4 text-gray-1">
            Flexbox is a CSS layout system that makes it
            easier to arrange elements in a container.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      gap: 10px;
    }

    .box {
      padding: 20px;
      background: lightblue;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box">Three</div>
  </div>
</body>
</html>`}
          />
        </section>


        {/* CSS Grid */}
        <section
          id="css-grid"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            CSS Grid
          </h1>

          <p className="mt-4 text-gray-1">
            CSS Grid is a powerful layout system for
            creating rows and columns.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .box {
      padding: 30px;
      background: lightblue;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box">Three</div>
    <div class="box">Four</div>
    <div class="box">Five</div>
    <div class="box">Six</div>
  </div>
</body>
</html>`}
          />
        </section>


        {/* CSS Responsive Design */}
        <section
          id="css-responsive-design"
          className="mt-32 scroll-mt-10"
        >
          <h1 className="text-4xl font-bold">
            CSS Responsive Design
          </h1>

          <p className="mt-4 text-gray-1">
            Responsive design allows a website to adapt
            to different screen sizes.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 500px;
      padding: 30px;
      background: lightblue;
    }

    @media (max-width: 600px) {
      .box {
        width: 100%;
      }
    }
  </style>
</head>

<body>
  <div class="box">
    Resize the browser window.
  </div>
</body>
</html>`}
          />
        </section>


        {/* CSS Animation */}
        <section
          id="css-animation"
          className="mt-32 scroll-mt-10 pb-32"
        >
          <h1 className="text-4xl font-bold">
            CSS Animation
          </h1>

          <p className="mt-4 text-gray-1">
            CSS animations allow you to create animated
            transitions and effects without JavaScript.
          </p>

          <HtmlEditor
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background: blue;

      animation: move 2s infinite alternate;
    }

    @keyframes move {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(300px);
      }
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>
</html>`}
          />
        </section>

      </main>
    </div>
  );
}