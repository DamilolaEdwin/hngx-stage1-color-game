import React from "react";

function Score({ score }) {  // Destructure the prop correctly
  return (
    <p data-testid="score" style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}>
      Score: {score}
    </p>
  );
}

export default Score;
