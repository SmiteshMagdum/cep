"use client";
import React, { useEffect, useState } from "react";

const projectIdeas: string[] = [
  "Build a Quiz App in Java/HTML with 5 School Trivia questions.",
  "Create a Personal Portfolio page using HTML & CSS.",
  "Build a Digital Calculator using HTML, CSS, and basic Logic.",
  "Design a Student Grade Calculator tool.",
  "Create an Animated Solar System diagram using pure CSS.",
  "Build a To-Do List app with add/remove functionality.",
];

const App: React.FC = () => {
  const [project, setProject] = useState<string>("");
  const [minutes, setMinutes] = useState<number>(30);
  const [totalSeconds, setTotalSeconds] = useState<number>(30 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Pick a random project
  const getRandomProject = () => {
    const randomIndex = Math.floor(Math.random() * projectIdeas.length);
    setProject(projectIdeas[randomIndex]);
  };

  // Format seconds into MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;

    const timer = window.setInterval(() => {
      setTotalSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          window.clearInterval(timer);
          setIsRunning(false);
          alert("Time is up! Submit your hackathon project.");
          return 0;
        }

        return prevSeconds - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isRunning]);

  // Handle minutes input
  const handleMinutesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Math.max(1, parseInt(event.target.value) || 1);

    setMinutes(value);

    if (!isRunning) {
      setTotalSeconds(value * 60);
    }
  };

  // Start/Pause timer
  const handleStartPause = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      if (totalSeconds <= 0) return;
      setIsRunning(true);
    }
  };

  // Reset timer
  const handleReset = () => {
    setIsRunning(false);

    const resetMinutes = minutes || 30;
    setTotalSeconds(resetMinutes * 60);
  };

  return (
    <div className="app">
      <h1>Hackathon Project Generator</h1>

      {/* Project Generator */}
      <section>
        <h2>Project Idea</h2>

        <div
          id="project-box"
          style={{
            color: "#ffffff",
            minHeight: "30px",
          }}
        >
          {project || "Click the button to get a project idea!"}
        </div>

        <button onClick={getRandomProject}>
          Get Project
        </button>
      </section>

      {/* Timer */}
      <section>
        <h2>Hackathon Timer</h2>

        <label htmlFor="minutes-input">
          Minutes:
        </label>

        <input
          id="minutes-input"
          type="number"
          min="1"
          value={minutes}
          onChange={handleMinutesChange}
          disabled={isRunning}
        />

        <div id="timer-display">
          {formatTime(totalSeconds)}
        </div>

        <button onClick={handleStartPause}>
          {isRunning ? "Pause" : "Start"}
        </button>

        <button onClick={handleReset}>
          Reset
        </button>
      </section>
    </div>
  );
};

export default App;