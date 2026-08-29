import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-11">
      <div className="mx-auto flex max-w-[960px] flex-wrap justify-between gap-5 px-6">
        <div>
          <Link href="/" className="text-lg font-semibold">
            learnbasic
          </Link>
          <p className="mt-2.5 max-w-[280px] text-sm text-gray-1">
            A coding awareness program teaching school students HTML, CSS, and
            how to think through a problem.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-1">
          <Link href="/website-learning" className="hover:text-foreground">
            website learning
          </Link>
          <Link href="/problem-set" className="hover:text-foreground">
            problem set
          </Link>
          <Link href="/hackathon" className="hover:text-foreground">
            hackathon
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[960px] flex-wrap justify-between gap-2 border-t border-line px-6 pt-[18px] text-xs text-gray-1">
        <span>© 2026 LEARN BASIC</span>
        
      </div>
    </footer>
  );
}
