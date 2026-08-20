"use client";

import {
  Bookmark,
  Check,
  ExternalLink,
  FileText,
  GraduationCap,
  StickyNote,
} from "lucide-react";

const colors = {
  Easy: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30",
  Medium: "text-amber-400 bg-amber-400/10 ring-amber-400/30",
  Hard: "text-rose-400 bg-rose-400/10 ring-rose-400/30",
};

export default function ProblemCard({
  problem,
  solved,
  bookmarked,
  expanded,
  hasNote,
  onSolve,
  onBookmark,
  onSolution,
  onNote,
}) {
  return (
    <>
      <tr className="border-b border-white/[0.06] text-sm hover:bg-white/[0.03]">
        <td className="px-5 py-3.5">
          <a
           href={`https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/${problem.index}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium hover:text-sky-300 hover:underline"
          >
            {problem.id}. {problem.title}
            <ExternalLink size={12} className="text-white/30" />
          </a>
        </td>

        <td className="px-4 py-3.5 text-center">
          <button
            onClick={onSolution}
            className={`h-8 w-8 rounded-md inline-flex items-center justify-center ${
              expanded
                ? "text-sky-300 bg-sky-500/10"
                : "text-white/35 hover:bg-white/10"
            }`}
          >
            <FileText size={17} />
          </button>
        </td>

        <td className="px-4 py-3.5 text-center">
          <button
            onClick={onSolve}
            className={`h-5 w-5 rounded border inline-flex items-center justify-center ${
              solved
                ? "bg-emerald-500 border-emerald-500"
                : "bg-white border-white/80"
            }`}
          >
            {solved && (
              <Check size={14} strokeWidth={3} className="text-[#0b0e14]" />
            )}
          </button>
        </td>

        <td className="px-4 py-3.5 text-center">
          <button
            onClick={onBookmark}
            className="h-8 w-8 rounded-md inline-flex items-center justify-center text-white/35 hover:bg-white/10"
          >
            <Bookmark
              size={17}
              fill={bookmarked ? "currentColor" : "none"}
              className={bookmarked ? "text-yellow-300" : ""}
            />
          </button>
        </td>

        <td className="px-4 py-3.5 text-center">
          <button
            onClick={onNote}
            className={`h-8 w-8 rounded-md inline-flex items-center justify-center ${
              hasNote
                ? "text-sky-300 bg-sky-500/10"
                : "text-white/35 hover:bg-white/10"
            }`}
          >
            <StickyNote size={17} />
          </button>
        </td>

        <td className="px-4 py-3.5 text-center">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${colors[problem.difficulty]}`}
          >
            <GraduationCap size={13} />
            {problem.concept}
          </span>
        </td>
      </tr>

      {expanded && (
        <tr className="bg-white/[0.025] border-b border-white/[0.06]">
          <td colSpan={6} className="px-5 py-3 text-sm text-white/70">
            <span className="text-sky-400/80 font-medium">Approach: </span>
            {problem.solution}
          </td>
        </tr>
      )}
    </>
  );
}