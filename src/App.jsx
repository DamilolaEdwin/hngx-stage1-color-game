import React, { useState, useEffect } from "react";

import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/ColorOptions";
import GameInstructions from "./components/GameInstructions";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import NewGameButton from "./components/NewGameButton";

const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

function App() {
  const [targetColor, setTargetColor] = useState(COLORS[Math.floor(Math.random() * COLORS.length)]);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  const generateNewGame = () => {
    const shuffledColors = [...COLORS].sort(() => Math.random() - 0.5);
    const randomIndex = Math.floor(Math.random() * shuffledColors.length);
    
    setTargetColor(shuffledColors[randomIndex]);
    setOptions(shuffledColors);
    setGameStatus("");
  };

  useEffect(() => {
    setScore(0);  // Reset score only when game first loads
    generateNewGame();
  }, []);

  const handleGuess = (color) => {
    if (color === targetColor) {
      setGameStatus("✅ Correct!");
      setScore((prevScore) => prevScore + 1);
      generateNewGame();  // Generate a new color and shuffle options
    } else {
      setGameStatus("❌ Wrong! Try again.");
      setScore((prevScore) => prevScore - 1);
      generateNewGame();
    }
  };
  

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <GameInstructions />
      <ColorBox color={gameStatus === "" ? "gray" : targetColor} />

      <ColorOptions options={options} handleGuess={handleGuess} />
      <GameStatus message={gameStatus} />
      <Score score={score} />
      <NewGameButton resetGame={generateNewGame} />
    </div>
  );
}

export default App;
