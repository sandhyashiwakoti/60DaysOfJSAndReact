import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // This is the setup part of our effect
    console.log("Clock component mounted. Setting up timer...");
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // This is the cleanup part of our effect
    return () => {
      console.log("Clock component unmounting. Cleaning up timer...");
      clearInterval(timerId);
    };
  }, []); // Empty array ensures this runs only on mount and unmount

  return (
    <div className="clock-container">
      <h2>Current Time:</h2>
      <p className="time-display">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
