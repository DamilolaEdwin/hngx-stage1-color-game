import React from "react";

function ColorBox({ color }) {
  return (
    <div
      data-testid="colorBox"
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: color,
        margin: "20px auto",
        borderRadius: "8px",
      }}
    ></div>
  );
}

export default ColorBox;
