import React from "react";

function NewGameButton({ resetGame }) {
  return (
    <button
      data-testid="newGameButton"
      style={{
        display: "block",
        margin: "20px auto",
        padding: "10px 20px",
        fontSize: "18px",
        cursor: "pointer",
      }}
      onClick={resetGame}
    >
      New Game
    </button>
  );
}

export default NewGameButton;
