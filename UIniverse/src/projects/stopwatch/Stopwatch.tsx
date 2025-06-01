import { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  //hour calculation
  const hour = Math.floor(time / 360000);
  const min = Math.floor((time % 360000) / 6000);
  const sec = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-96 bg-white text-black">
      <p className="text-5xl font-mono mb-8">
        {hour}:{min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>

      <div className="flex gap-4">
        <button
          onClick={startAndStop}
          className="px-5 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="px-5 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;