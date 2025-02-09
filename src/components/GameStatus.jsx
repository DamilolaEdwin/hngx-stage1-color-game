import React from "react";

function GameStatus({ message }) {
  return (
    <p data-testid="gameStatus" style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
      {message}
    </p>
  );
}

export default GameStatus;
