import React from "react";

function ColorOptions({ options, handleGuess }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
      {options.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          style={{
            backgroundColor: color,
            width: "80px",
            height: "40px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={() => handleGuess(color)}
        ></button>
      ))}
    </div>
  );
}

export default ColorOptions;
