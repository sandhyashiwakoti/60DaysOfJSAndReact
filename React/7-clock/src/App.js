import { useState } from "react";
import Clock from "./Clock"; // Import our new Clock component

function App() {
  const [showClock, setShowClock] = useState(true);

  const toggleClock = () => {
    setShowClock(!showClock);
  };

  return (
    <div className="container">
      <h1>useEffect Cleanup Function</h1>
      <button onClick={toggleClock}>
        {showClock ? "Hide Clock" : "Show Clock"}
      </button>

      {/* Conditionally render the Clock component */}
      {showClock && <Clock />}
    </div>
  );
}

export default App;
