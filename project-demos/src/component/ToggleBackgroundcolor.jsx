import React, { useState } from "react";

const ToggleBackgroundcolor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [buttonColor, setButtonColor] = useState("white");

  const handleClick = () => {
    const newBgColor = backgroundColor === "white" ? "black" : "white"; /* newBgColor : white */
    const newTextColor = newBgColor === "white" ? "black" : "white"; // Adjust text color based on background
    const newButtonColor = newBgColor === "white" ? "white" : "black"; // Button matches background

    setBackgroundColor(newBgColor); /* white */
    setTextColor(newTextColor);/* black */
    setButtonColor(newButtonColor); /* white */
  };

  return (
    /* backgroundColor - white , color: (textColor)BLACK, */
    <div style={{ backgroundColor, color: textColor, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonColor, /* white */
          color: textColor,
          border: `2px solid ${textColor}`,
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {backgroundColor === "white" ? "White Theme" : "Black Theme"} {/* when the click button change bg clr -> changed button name */}
      </button>
      <section className="content">
        <h1>
          Welcome TO A <br />
          Real World
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundcolor;
