import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti"; // 1. Import the confetti library
import Hero from "./components/Hero";
import JourneySection from "./components/JourneySection";

function App() {
  const journeyRef = useRef(null);
  // 2. State to control the confetti's visibility
  const [showConfetti, setShowConfetti] = useState(false);

  // 3. This effect runs once when the app loads
  useEffect(() => {
    // Start the confetti after a short delay to sync with hero animation
    const startTimer = setTimeout(() => {
      setShowConfetti(true);
    }, 1200); // 1.2 seconds delay

    // Stop rendering the confetti component after it has finished
    const stopTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 7000); // Stop it after 7 seconds

    // Cleanup timers if the component unmounts early
    return () => {
      clearTimeout(startTimer);
      clearTimeout(stopTimer);
    };
  }, []); // Empty array ensures this runs only once on initial load

  const handleScrollClick = () => {
    journeyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* 4. Conditionally render the confetti */}
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={400}
          gravity={0.1}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}

      <Hero onScrollClick={handleScrollClick} />
      <JourneySection ref={journeyRef} />
    </div>
  );
}

export default App;
