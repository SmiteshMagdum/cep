"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";

export default function RandomProject() {
  const [current, setCurrent] = useState<number | null>(null);

  function pick() {
    let idx: number;
    do {
      idx = Math.floor(Math.random() * projects.length);
    } while (idx === current && projects.length > 1);
    setCurrent(idx);
  }

  const project = current !== null ? projects[current] : null;

  return (
    <div className="rounded-md border border-line bg-gray-2 p-7">
      <h3 className="mb-2 text-[22px] font-semibold">Random project</h3>
      <p className="mb-5 text-sm text-gray-1">
        Click for something to build. No picking your favorite that&apos;s
        the exercise.
      </p>

      <div className="mb-[18px] flex min-h-[76px] flex-col justify-center rounded border border-dashed border-line p-4">
        {project ? (
          <>
            <div className="text-xl font-semibold text-white-1">
              {project.name}
            </div>
            <div className="mt-1.5 text-[13.5px] text-gray-1">
              {project.desc}
            </div>
          </>
        ) : (
          <span className="font-mono text-[13px] text-gray-1">
            Click below to get a project
          </span>
        )}
      </div>

      <button
        onClick={pick}
        className="w-full rounded-sm bg-green-1 py-3.5 text-[14px] font-semibold text-background transition-opacity hover:opacity-90"
      >
        Give me a project
      </button>
    </div>
  );
}
