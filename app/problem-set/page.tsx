import ProblemTable from "@/components/ProblemTable";

export default function ProblemSetPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6 py-14 pb-[90px]">
      <div className="mb-2 text-left">
        <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-widest text-green-1">
          Problem set
        </span>
        <h2 className="text-[clamp(26px,4vw,34px)] font-semibold">
          Twelve problems. Start anywhere.
        </h2>
        <p className="mt-3 max-w-[560px] text-[15px] text-gray-1">
          Each one builds on the last basics, then arithmetic, then simple
          conditions. Solve them in order if it&apos;s your first time.
        </p>
      </div>

      <div className="mt-9">
        <ProblemTable />
      </div>
    </div>
  );
}
