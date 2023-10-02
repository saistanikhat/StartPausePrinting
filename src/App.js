import React, { useState, useEffect } from "react";

function App() {
  const characters = ["a", "b", "c", "d", "e", "f", "g"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    let intervalId;

    if (printing) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < characters.length - 1 ? prevIndex + 1 : prevIndex
        );
      }, 1000); // Adjust the interval as needed (e.g., 1000ms = 1 second)
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [printing]);

  const handleStart = () => {
    setPrinting(true);
  };

  const handlePause = () => {
    setPrinting(false);
  };

  return (
    <div className="App">
      <div>
        <p>Printing: {characters[currentIndex]}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default App;

// There is an array ["a", "b", "c", "d", "e",  "f", "g"] .Design a Start button and Pause button. On start it will start printing the characters (one by one), on pause it will pause printing.
