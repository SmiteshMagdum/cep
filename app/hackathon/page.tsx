import RandomProject from "@/components/RandomProject";
import BuildTimer from "@/components/BuildTimer";

const timeline = [
  { date: "Day 1, AM", title: "Kickoff and team forming", body: "Prompt is revealed. Teams that don't have one yet get matched up." },
  { date: "Day 1, PM", title: "Build time begins", body: "Mentors are on hand for anyone stuck on layout, styling, or logic." },
  { date: "Day 2, AM", title: "Build time continues", body: "Final stretch — polish the page, write a one-line pitch." },
  { date: "Day 2, PM", title: "Showcase", body: "Every team gets three minutes to show what they built." },
];

const rules = [
  { n: "01", title: "HTML and CSS only", body: "No frameworks required. JavaScript is welcome but not necessary." },
  { n: "02", title: "Start from scratch", body: "No reusing a page you built before the weekend started." },
  { n: "03", title: "Mentors are for asking", body: "Getting help isn't cheating — it's most of the point." },
  { n: "04", title: "Finish or not, you present", body: "An unfinished page with a clear idea beats a rushed, finished one." },
];

export default function HackathonPage() {
  return (
    <div>
      <header className="px-6 py-[88px] pb-12 text-center [background:radial-gradient(ellipse_900px_500px_at_75%_20%,rgba(22,163,148,0.14),transparent_70%)]">
        <div className="mx-auto max-w-[720px]">
          <span className="mb-[22px] block font-mono text-[11px] uppercase tracking-widest text-gray-1">
            For students who&apos;ve finished the basics
          </span>
          <h1 className="text-[clamp(32px,6vw,50px)] font-semibold leading-[1.14]">
            Build something
            <br />
            
          </h1>
          <p className="mx-auto mt-5 max-w-[480px] text-gray-1">
            A short, beginner-friendly hackathon for students who&apos;ve
            worked through Website Learning and want to build a real page
            from scratch.
          </p>
        </div>
      </header>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="mb-11 text-center">
            <h2 className="text-[clamp(26px,4vw,34px)] font-semibold">
             Hackathon
            </h2>
            <p className="mt-3 text-[15px] text-gray-1">
              Get a random project idea, set a timer, and see what you can
              build before it runs out.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <RandomProject />
            <BuildTimer />
          </div>
        </div>
      </section>

    </div>
  );
}
