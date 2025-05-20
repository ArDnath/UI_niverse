import React, { useEffect, useState, useRef } from "react";

const formatTime = (time: number): string => {
  const getTwoDigits = (num: number) => String(num).padStart(2, '0');
  const minutes = getTwoDigits(Math.floor(time / 60000));
  const seconds = getTwoDigits(Math.floor((time % 60000) / 1000));
  const milliseconds = getTwoDigits(Math.floor((time % 1000) / 10));
  return `${minutes}:${seconds}.${milliseconds}`;
};

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 10);
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStartStop = () => setIsRunning((prev) => !prev);
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-6xl font-mono mb-10">{formatTime(elapsedTime)}</div>
      <div className="space-x-4">
        <button
          onClick={handleStartStop}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
