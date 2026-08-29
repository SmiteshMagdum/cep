import Link from "next/link";

const whyItems = [
  { n: "01", title: "No setup needed", body: "Every lesson runs in the browser. No installs, no accounts." },
  { n: "02", title: "Small steps", body: "One concept at a time a heading, then a paragraph, then a link." },
  { n: "03", title: "See it instantly", body: "Change the code, hit run, watch the page update right there." },
  { n: "04", title: "Real problems", body: "Twelve problems that make you think, not just copy syntax." },
  { n: "05", title: "Built for beginners", body: "No prior knowledge assumed. We start from what a tag is." },
  { n: "06", title: "Free, always", body: "No fees, no locked chapters. The whole program is open." },
];

const steps = [
  { n: "01", title: "Read the lesson", body: "A short explanation of one HTML or CSS idea, nothing longer than a minute." },
  { n: "02", title: "Run the code", body: "Edit the example yourself and see the output change live." },
  { n: "03", title: "Solve a problem", body: "Put it to use in the problem set, twelve exercises, start to finish." },
];

export default function HomePage() {
  return (
    <div>
      <header className="px-6 py-[88px] pb-12 text-center [background:radial-gradient(ellipse_900px_500px_at_75%_20%,rgba(22,163,148,0.14),transparent_70%)]">
        <div className="mx-auto max-w-[720px]">
          <span className="mb-[22px] block font-mono text-[11px] uppercase tracking-widest text-gray-1">
            A coding awareness program for schools
          </span>
          <h1 className="text-[clamp(32px,6vw,50px)] font-semibold leading-[1.14]">
            Code isn&apos;t magic.
            <br />
            It&apos;s just <span className="text-green-1">instructions.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[480px] text-gray-1">
            Learn Basic teaches school students the fundamentals of HTML, CSS,
            and problem solving one small lesson at a time, right in the
            browser.
          </p>

          <div className="mt-[30px] flex flex-wrap justify-center gap-3.5">
            <Link
              href="/website-learning"
              className="rounded-sm bg-green-1 px-[22px] py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Start with Website Learning
            </Link>
            <Link
              href="/problem-set"
              className="rounded-sm border border-line px-[22px] py-3.5 text-sm transition-colors hover:border-green-1"
            >
              View problem set
            </Link>
          </div>

          <div className="mx-auto mt-[52px] max-w-[520px] rounded-md border border-line bg-[linear-gradient(180deg,rgba(22,163,148,0.08),transparent_60%)] p-5 text-left">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="rounded-full border border-green-1 px-2.5 py-1 font-mono text-[11px] text-green-1">
                html · lesson 1
              </span>
              <span className="font-mono text-[11px] text-gray-1">
                2 min read
              </span>
            </div>
            <pre className="overflow-x-auto rounded border border-line bg-background p-3.5 font-mono text-[13px] text-foreground">
              &lt;h1&gt;Hello, World&lt;/h1&gt;
            </pre>
            <div className="mt-3.5 font-mono text-xs text-gray-1">
              This is usually the first line anyone ever writes.
            </div>
          </div>
        </div>
      </header>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="mb-11 text-center">
            <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-widest text-green-1">
              Why Learn Basic
            </span>
            <h2 className="text-[clamp(26px,4vw,34px)] font-semibold">
              Built for people who&apos;ve never written a line
            </h2>
            <p className="mt-3 text-[15px] text-gray-1">
              Every part of it is designed around one idea: the first lesson
              should feel possible, not intimidating.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-[30px] sm:grid-cols-2">
            {whyItems.map((item) => (
              <div key={item.n}>
                <span className="font-mono text-xs text-green-1">
                  {item.n}
                </span>
                <h3 className="mt-1.5 text-[15px] font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="mb-11 text-center">
            <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-widest text-green-1">
              How it works
            </span>
            <h2 className="text-[clamp(26px,4vw,34px)] font-semibold">
              Three steps. No forms to fill.
            </h2>
          </div>
          <div>
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`flex gap-5 py-[22px] ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="w-6 shrink-0 pt-0.5 font-mono text-[13px] text-green-1">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-1">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 text-center">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="text-[clamp(26px,4vw,36px)] font-semibold">
            Ready to write your first line?
          </h2>
          <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-gray-1">
            Free to join · no sign-up · learn at your own pace
          </div>
          <Link
            href="/website-learning"
            className="mt-[26px] inline-block rounded-sm bg-green-1 px-[22px] py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Start learning
          </Link>
        </div>
      </section>
    </div>
  );
}
