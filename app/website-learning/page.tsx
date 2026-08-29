import { lessons } from "@/lib/lessons";
import CodeEditor from "@/components/CodeEditor";

const htmlLessons = lessons.filter((l) => l.section === "HTML");
const cssLessons = lessons.filter((l) => l.section === "CSS");

export default function WebsiteLearningPage() {
  return (
    <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-12 px-6 py-10 pb-20 md:grid-cols-[200px_1fr]">
      <aside className="static flex flex-wrap gap-x-4 gap-y-1.5 border-b border-line pb-5 md:sticky md:top-[88px] md:block md:border-none md:pb-0">
        <h4 className="mb-2.5 w-full font-mono text-[11px] uppercase tracking-widest text-green-1 md:mt-0">
          HTML
        </h4>
        {htmlLessons.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="block py-1 text-[13.5px] text-gray-1 transition-colors hover:text-foreground"
          >
            {l.title}
          </a>
        ))}
        <h4 className="mb-2.5 mt-5 w-full font-mono text-[11px] uppercase tracking-widest text-green-1">
          CSS
        </h4>
        {cssLessons.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="block py-1 text-[13.5px] text-gray-1 transition-colors hover:text-foreground"
          >
            {l.title}
          </a>
        ))}
      </aside>

      <main>
        {lessons.map((lesson, i) => (
          <div
            key={lesson.id}
            id={lesson.id}
            className={`scroll-mt-[90px] pb-14 ${
              i !== lessons.length - 1 ? "mb-14 border-b border-line" : ""
            }`}
          >
            <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-wider text-green-1">
              {lesson.section}
            </span>
            <h2 className="mb-3 text-[26px] font-semibold">{lesson.title}</h2>
            <p className="mb-5 max-w-[560px] text-[15px] text-gray-1">
              {lesson.intro}
            </p>
            <CodeEditor
              filename={lesson.section === "HTML" ? "index.html" : "style.html"}
              defaultCode={lesson.code}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
