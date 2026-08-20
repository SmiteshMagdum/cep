"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, Bold, Italic, Underline, Link, Code } from "lucide-react";
import ProblemCard from "../../components/ProblemCard";

const SOLVED_KEY = "cf-tracker-solved-ids";
const BOOKMARK_KEY = "cf-tracker-bookmarks";
const NOTES_KEY = "cf-tracker-notes";

const PROBLEMS = [
  { id: 1, title: "Watermelon", contest: 4, index: "A", concept: "Math", difficulty: "Easy", solution: "Any even weight ≥ 4 can be split into two positive even parts." },
  { id: 2, title: "Way Too Long Words", contest: 71, index: "A", concept: "Strings", difficulty: "Easy", solution: "If the word length is greater than 10, replace the middle letters with their count." },
  { id: 3, title: "Team", contest: 231, index: "A", concept: "Implementation", difficulty: "Easy", solution: "Count how many of the three members agree. If at least two agree, solve it." },
  { id: 4, title: "Beautiful Matrix", contest: 263, index: "A", concept: "Simulation", difficulty: "Easy", solution: "Find the position of 1 and calculate its distance from the center." },
  { id: 5, title: "Next Round", contest: 158, index: "A", concept: "Binary Search", difficulty: "Easy", solution: "Count participants whose score is at least the k-th score and greater than zero." },
  { id: 6, title: "Bit++", contest: 282, index: "A", concept: "Simulation", difficulty: "Easy", solution: "Increase the value for ++ and decrease it for --." },
  { id: 7, title: "Boy or Girl", contest: 236, index: "A", concept: "Strings", difficulty: "Easy", solution: "Count distinct characters. Even means female and odd means male." },
  { id: 8, title: "Petya and Strings", contest: 112, index: "A", concept: "Strings", difficulty: "Easy", solution: "Convert both strings to lowercase and compare them." },
  { id: 9, title: "Domino Piling", contest: 50, index: "A", concept: "Math", difficulty: "Easy", solution: "The maximum number of dominoes is floor(M × N / 2)." },
  { id: 10, title: "Helpful Maths", contest: 339, index: "A", concept: "Greedy", difficulty: "Easy", solution: "Separate the numbers, sort them, and join them with plus signs." },
  { id: 11, title: "Football", contest: 96, index: "A", concept: "Strings", difficulty: "Easy", solution: "Check whether seven identical characters occur consecutively." },
  { id: 12, title: "Theatre Square", contest: 1, index: "A", concept: "Math", difficulty: "Medium", solution: "Ceil-divide both dimensions by the flagstone size and multiply." },
];

export default function ProblemSetPage() {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(null);

  const [solved, setSolved] = useState(new Set());
  const [bookmarked, setBookmarked] = useState(new Set());
  const [notes, setNotes] = useState({});

  // Prevent saving before localStorage has loaded
  const [loaded, setLoaded] = useState(false);

  const [noteProblem, setNoteProblem] = useState(null);
  const [noteText, setNoteText] = useState("");

  // Load localStorage ONCE after the component mounts
  useEffect(() => {
    try {
      const savedSolved = localStorage.getItem(SOLVED_KEY);
      const savedBookmarks = localStorage.getItem(BOOKMARK_KEY);
      const savedNotes = localStorage.getItem(NOTES_KEY);

      if (savedSolved) {
        setSolved(new Set(JSON.parse(savedSolved)));
      }

      if (savedBookmarks) {
        setBookmarked(new Set(JSON.parse(savedBookmarks)));
      }

      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    } catch (error) {
      console.error("localStorage error:", error);
    }

    setLoaded(true);
  }, []);

  // Save solved problems
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        SOLVED_KEY,
        JSON.stringify([...solved])
      );
    }
  }, [solved, loaded]);

  // Save bookmarks
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        BOOKMARK_KEY,
        JSON.stringify([...bookmarked])
      );
    }
  }, [bookmarked, loaded]);

  // Save notes
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        NOTES_KEY,
        JSON.stringify(notes)
      );
    }
  }, [notes, loaded]);

  const toggle = (set, setter, id) => {
    const next = new Set(set);

    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }

    setter(next);
  };

  const openNote = (problem) => {
    setNoteProblem(problem);
    setNoteText(notes[problem.id] || "");
  };

  const saveNote = () => {
    setNotes((prev) => ({
      ...prev,
      [noteProblem.id]: noteText,
    }));

    setNoteProblem(null);
  };

  const problems = useMemo(() => {
    let list =
      tab === "Bookmarked"
        ? PROBLEMS.filter((p) => bookmarked.has(p.id))
        : PROBLEMS;

    if (query.trim()) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return list;
  }, [tab, bookmarked, query]);

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white/90 p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-2xl font-semibold text-white">
          Problem Set
        </h1>

        <p className="text-sm text-white/45 mb-5">
          {solved.size} of {PROBLEMS.length} solved
        </p>

        {/* Toolbar */}
        <div className="flex justify-between items-center gap-3 flex-wrap mb-4">

          <div className="flex gap-1 bg-white/5 rounded-lg p-1">
            {["All", "Bookmarked"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-md text-sm ${
                  tab === t
                    ? "bg-sky-500/20 text-sky-300 ring-1 ring-sky-500/40"
                    : "text-white/55"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search
              size={15}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/35"
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search problems"
              className="bg-white/5 border border-white/10 rounded-md pl-8 pr-3 py-1.5 text-sm w-52 outline-none focus:border-sky-400/60"
            />
          </div>

        </div>

        {/* Problem Table */}
        <div className="rounded-xl border border-white/10 overflow-x-auto">
          <table className="w-full min-w-[750px] text-left border-collapse">

            <thead>
              <tr className="bg-white/[0.03] text-xs uppercase text-white/50 border-b border-white/10">
                <th className="px-5 py-3">Problem</th>
                <th className="px-4 py-3 text-center">Solution</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Bookmark</th>
                <th className="px-4 py-3 text-center">Notes</th>
                <th className="px-4 py-3 text-center">Concept</th>
              </tr>
            </thead>

            <tbody>
              {problems.map((problem) => (
                <ProblemCard
                  key={problem.id}
                  problem={problem}
                  solved={solved.has(problem.id)}
                  bookmarked={bookmarked.has(problem.id)}
                  expanded={expanded === problem.id}
                  hasNote={!!notes[problem.id]}
                  onSolve={() =>
                    toggle(solved, setSolved, problem.id)
                  }
                  onBookmark={() =>
                    toggle(bookmarked, setBookmarked, problem.id)
                  }
                  onSolution={() =>
                    setExpanded(
                      expanded === problem.id
                        ? null
                        : problem.id
                    )
                  }
                  onNote={() => openNote(problem)}
                />
              ))}

              {!problems.length && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-white/40"
                  >
                    No problems found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* Notes Modal */}
      {noteProblem && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

          <div className="w-full max-w-[960px] bg-[#18181a] rounded-lg shadow-2xl">

            <div className="flex justify-between items-center px-5 py-3">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Notes - {noteProblem.title}
              </h2>

              <button
                onClick={() => setNoteProblem(null)}
                className="text-blue-500 text-3xl"
              >
                ×
              </button>
            </div>

            <div className="mx-5 mb-5 border border-white/10 bg-[#1d1d20] rounded-sm">

              <div className="flex justify-center pt-2 overflow-x-auto">
                <div className="flex items-center gap-5 bg-gray-100 text-gray-700 rounded-lg px-5 py-3">

                  <span className="text-sm mr-3">
                    Normal
                  </span>

                  <Bold size={15} />
                  <Italic size={15} />
                  <Underline size={15} />

                  <span className="line-through">
                    S
                  </span>

                  <span>A</span>
                  <span>☷</span>
                  <span>☰</span>
                  <span>≡</span>

                  <Link size={15} />
                  <Code size={15} />

                </div>
              </div>

              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                maxLength={2000}
                placeholder="Write your note..."
                autoFocus
                className="w-full h-[300px] mt-2 bg-transparent text-white p-3 outline-none resize-none"
              />

              <div className="text-right text-white/40 text-sm px-2 pb-2">
                {noteText.length}/2000
              </div>

            </div>

            <div className="flex justify-end gap-3 px-5 pb-5">

              <button
                onClick={saveNote}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
              >
                Save
              </button>

              <button
                onClick={() => setNoteProblem(null)}
                className="border border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-lg font-semibold"
              >
                Cancel
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}