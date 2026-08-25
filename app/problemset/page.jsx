"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, Bold, Italic, Underline, Link, Code } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={props.size || 22}
      height={props.size || 22}
      fill="currentColor"
      {...props}
    >
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}
import ProblemCard from "../../components/ProblemCard";

const SOLVED_KEY = "cf-tracker-solved-ids";
const BOOKMARK_KEY = "cf-tracker-bookmarks";
const NOTES_KEY = "cf-tracker-notes";

const PROBLEMS = [
  {
    id: 1,
    title: "Say Hello With C++",
    contest: 219158,
    index: "A",
    concept: "Basics",
    difficulty: "Easy",
    solution: "Learn basic C++ output using cout."
  },
  {
    id: 2,
    title: "Basic Data Types",
    contest: 219158,
    index: "B",
    concept: "Data Types",
    difficulty: "Easy",
    solution: "Read different data types and print them in the required format."
  },
  {
    id: 3,
    title: "Simple Calculator",
    contest: 219158,
    index: "C",
    concept: "Arithmetic",
    difficulty: "Easy",
    solution: "Read two numbers and calculate their required arithmetic operations."
  },
  {
    id: 4,
    title: "Difference",
    contest: 219158,
    index: "D",
    concept: "Arithmetic",
    difficulty: "Easy",
    solution: "Read the given numbers and calculate their difference using multiplication and subtraction."
  },
  {
    id: 5,
    title: "Area of a Circle",
    contest: 219158,
    index: "E",
    concept: "Math",
    difficulty: "Easy",
    solution: "Use the circle area formula π × r × r."
  },
  {
    id: 6,
    title: "Digits Summation",
    contest: 219158,
    index: "F",
    concept: "Math",
    difficulty: "Easy",
    solution: "Read two numbers and multiply their last digits."
  },
  {
    id: 7,
    title: "Summation from 1 to N",
    contest: 219158,
    index: "G",
    concept: "Math",
    difficulty: "Easy",
    solution: "Calculate the sum of all numbers from 1 to N."
  },
  {
    id: 8,
    title: "Two numbers",
    contest: 219158,
    index: "H",
    concept: "Conditions",
    difficulty: "Easy",
    solution: "Compare two numbers and print the required result."
  },
  {
    id: 9,
    title: "Welcome for you with Conditions",
    contest: 219158,
    index: "I",
    concept: "Conditions",
    difficulty: "Easy",
    solution: "Use if-else conditions to determine the correct output."
  },
  {
    id: 10,
    title: "Multiples",
    contest: 219158,
    index: "J",
    concept: "Conditions",
    difficulty: "Easy",
    solution: "Check whether one number is a multiple of another."
  },
  {
    id: 11,
    title: "Max and Min",
    contest: 219158,
    index: "K",
    concept: "Conditions",
    difficulty: "Easy",
    solution: "Compare the given numbers to find the maximum and minimum."
  },
  {
    id: 12,
    title: "The Brothers",
    contest: 219158,
    index: "L",
    concept: "Conditions",
    difficulty: "Easy",
    solution: "Compare the given information and determine whether the two people are brothers."
  }
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
    let list = PROBLEMS;

    if (tab === "Bookmarked") {
      list = list.filter((p) => bookmarked.has(p.id));
    } else if (tab === "Completed") {
      list = list.filter((p) => solved.has(p.id));
    } else if (tab === "Notes") {
      list = list.filter((p) => !!notes[p.id]);
    }

    if (query.trim()) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return list;
  }, [tab, bookmarked, solved, notes, query]);

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white/90 p-4 sm:p-6">
      {/* GitHub icon - top right corner */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="fixed top-2 right-4 sm:top-3 sm:right-6 z-50 text-white/70 hover:text-white transition-colors"
      >
        <GithubIcon size={22} />
      </a>

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
            {["All", "Bookmarked", "Completed", "Notes"].map((t) => (
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
                    {tab === "Bookmarked" && "No bookmarked problems yet."}
                    {tab === "Completed" && "No completed problems yet."}
                    {tab === "Notes" && "No problems with notes yet."}
                    {tab === "All" && "No problems found."}
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
                {/* <div className="flex items-center gap-5 bg-gray-100 text-gray-700 rounded-lg px-5 py-3"> */}

                  {/* <span className="text-sm mr-3">
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
                  <Code size={15} /> */}

                {/* </div> */}
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