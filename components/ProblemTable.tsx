"use client";

import { useMemo, useState } from "react";
import { problems } from "@/lib/problems";

type ProblemState = { solved: boolean; bookmarked: boolean };

export default function ProblemTable() {
  const [state, setState] = useState<Record<number, ProblemState>>(() => {
    const initial: Record<number, ProblemState> = {};
    problems.forEach((p) => {
      initial[p.n] = { solved: false, bookmarked: false };
    });
    return initial;
  });
  const [filter, setFilter] = useState<"all" | "bookmarked">("all");

  const visible = useMemo(
    () => problems.filter((p) => filter === "all" || state[p.n].bookmarked),
    [filter, state]
  );

  const solvedCount = useMemo(
    () => problems.filter((p) => state[p.n].solved).length,
    [state]
  );

  function toggleSolved(n: number) {
    setState((prev) => ({
      ...prev,
      [n]: { ...prev[n], solved: !prev[n].solved },
    }));
  }

  function toggleBookmark(n: number) {
    setState((prev) => ({
      ...prev,
      [n]: { ...prev[n], bookmarked: !prev[n].bookmarked },
    }));
  }

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-[13px] text-gray-1">
          <span>{solvedCount}</span> of 12 solved
        </span>
      </div>

      <div className="mb-7 flex gap-2.5">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
            filter === "all"
              ? "border-green-1 text-green-1"
              : "border-line text-gray-1"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("bookmarked")}
          className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
            filter === "bookmarked"
              ? "border-green-1 text-green-1"
              : "border-line text-gray-1"
          }`}
        >
          Bookmarked
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b border-line pb-3 text-left font-mono text-[11px] uppercase tracking-wider text-gray-1">
              Problem
            </th>
            <th className="hidden border-b border-line pb-3 text-left font-mono text-[11px] uppercase tracking-wider text-gray-1 sm:table-cell">
              Concept
            </th>
            <th className="border-b border-line pb-3 text-left font-mono text-[11px] uppercase tracking-wider text-gray-1">
              Bookmark
            </th>
            <th className="border-b border-line pb-3 text-left font-mono text-[11px] uppercase tracking-wider text-gray-1">
              Solved
            </th>
          </tr>
        </thead>
        <tbody>
          {visible.map((p) => {
            const s = state[p.n];
            return (
              <tr key={p.n} className={s.solved ? "opacity-50" : ""}>
                <td className="border-b border-line py-4 pr-3 text-[14.5px]">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-green-1 ${
                      s.solved ? "line-through" : ""
                    }`}
                  >
                    {p.n}. {p.name}
                  </a>
                </td>
                <td className="hidden border-b border-line py-4 pr-3 sm:table-cell">
                  <span className="whitespace-nowrap rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-gray-1">
                    {p.concept}
                  </span>
                </td>
                <td className="border-b border-line py-4 pr-3">
                  <button
                    onClick={() => toggleBookmark(p.n)}
                    aria-label="Bookmark"
                    className={`flex h-5 w-5 items-center justify-center rounded border text-[13px] ${
                      s.bookmarked
                        ? "border-green-1 text-green-1"
                        : "border-line text-green-1"
                    }`}
                  >
                    &#9733;
                  </button>
                </td>
                <td className="border-b border-line py-4">
                  <button
                    onClick={() => toggleSolved(p.n)}
                    aria-label="Mark solved"
                    className={`flex h-5 w-5 items-center justify-center rounded border text-[13px] ${
                      s.solved
                        ? "border-green-1 bg-green-1 text-background"
                        : "border-line text-green-1"
                    }`}
                  >
                    {s.solved ? "\u2713" : ""}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
