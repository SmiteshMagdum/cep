"use client";

import { useEffect, useRef, useState } from "react";

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function BuildTimer() {
  const [minutes, setMinutes] = useState(30);
  const [secondsLeft, setSecondsLeft] = useState(30 * 60);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function handleMinutesChange(value: number) {
    setMinutes(value);
    if (!running) {
      setSecondsLeft(value * 60);
      setDone(false);
    }
  }

  function start() {
    if (running) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setRunning(false);
      return;
    }

    let remaining = secondsLeft <= 0 ? minutes * 60 : secondsLeft;
    setSecondsLeft(remaining);
    setDone(false);
    setRunning(true);

    intervalRef.current = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setSecondsLeft(0);
        setRunning(false);
        setDone(true);
        return;
      }
      setSecondsLeft(remaining);
    }, 1000);
  }

  function reset() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
    setDone(false);
    setSecondsLeft(minutes * 60);
  }

  const warn = !done && secondsLeft > 0 && secondsLeft <= 60;

  return (
    <div className="rounded-md border border-line bg-gray-2 p-7">
      <h3 className="mb-2 text-[22px] font-semibold">Build timer</h3>
      <p className="mb-5 text-sm text-gray-1">
        Set a limit and hold yourself to it.
      </p>

      <div className="mb-[18px] flex items-center gap-3">
        <label
          htmlFor="timerMinutes"
          className="font-mono text-[11px] uppercase tracking-wider text-gray-1"
        >
          Minutes
        </label>
        <input
          id="timerMinutes"
          type="number"
          min={1}
          max={180}
          value={minutes}
          onChange={(e) => handleMinutesChange(Number(e.target.value) || 0)}
          className="w-[70px] rounded border border-line bg-background px-2 py-2 text-center font-mono text-sm text-foreground focus:border-green-1 focus:outline-none"
        />
      </div>

      <div
        className={`mb-[18px] text-center font-mono text-[42px] ${
          warn ? "text-green-2" : "text-foreground"
        }`}
      >
        {done ? "Time's up" : formatTime(secondsLeft)}
      </div>

      <div className="flex gap-2.5">
        <button
          onClick={start}
          className="flex-1 rounded-sm bg-green-1 py-3.5 text-[14px] font-semibold text-background transition-opacity hover:opacity-90"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="flex-1 rounded-sm border border-line py-3.5 text-[14px] transition-colors hover:border-green-1"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
