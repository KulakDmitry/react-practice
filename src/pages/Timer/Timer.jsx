import React, { useEffect, useState } from "react";
const prettyMilliseconds = require("pretty-ms");

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleReset = () => {
    setTime(0);
  };

  const handleStartChange = () => {
    setIsActive(true);
  };

  const handleStopChange = () => {
    setIsActive(false);
  };

  return (
    <div className="text-center">
      <button
        disabled={isActive}
        className="m-2 p-2 hover:bg-gray-400 rounded-md bg-gray-300 disabled:opacity-50 disabled:bg-gray-300"
        onClick={handleStartChange}
      >
        start
      </button>
      <button
        disabled={!isActive}
        className="m-2 p-2 hover:bg-gray-400 rounded-md bg-gray-300 disabled:opacity-50 disabled:bg-gray-300"
        onClick={handleStopChange}
      >
        stop
      </button>
      <button
        className="m-2 p-2 hover:bg-gray-400 rounded-md bg-gray-300"
        onClick={handleReset}
      >
        reset
      </button>
      <p className="mt-4 text-3xl">
        {prettyMilliseconds(time, { colonNotation: true })}
      </p>
    </div>
  );
}
