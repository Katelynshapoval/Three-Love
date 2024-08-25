import React, { useState, useEffect } from "react";

export default function Flashlight({ hide, setHide }) {
  // State to manage the position of the light
  const [lightStyle, setLightStyle] = useState({ top: 0, left: 0 });
  // State to toggle the light on and off
  const [lightOff, setLightOff] = useState(false);

  // Determine the classes to apply based on the 'hide' prop
  const classes = `flashlightProject ${hide ? "hide" : ""}`;

  // Array of quotes to display
  const quotes = [
    "i love you",
    "you're beautiful",
    "teleport",
    "fm...",
    "cutie",
    "u're so adorable aaaa",
    "best gf in the world",
    "pretty princess",
    "omg im dating u",
    "girlie pop you're gorgeous",
  ];

  // Predefined positions for each quote
  const positions = [
    ["1%", "15%"],
    ["80%", "29%"],
    ["40%", "65%"],
    ["45%", "45%"],
    ["38%", "17%"],
    ["12%", "55%"],
    ["22%", "85%"],
    ["20%", "25%"],
    ["67%", "69%"],
    ["80%", "65%"],
  ];

  useEffect(() => {
    // Function to update light position on mouse move
    const handleMouseMove = (e) => {
      setLightStyle({ top: e.pageY - 250, left: e.pageX - 250 });
    };

    // Function to handle mouse button clicks
    const handleMouseDown = (e) => {
      switch (e.which) {
        case 1: // Left click toggles the light
          setLightOff((prev) => !prev);
          break;
        // Additional cases for other mouse buttons can be added here
      }
    };

    // Add event listeners for mouse movement and clicks
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className={classes}>
      {/* Light element that follows the mouse */}
      <div
        id="light"
        className={lightOff ? "light-off" : ""}
        style={lightStyle}
      ></div>
      <div className="col-xs-12" id="content">
        {/* Map over quotes and display them at predefined positions */}
        {quotes.map((item, index) => (
          <h1
            key={index}
            className="text"
            style={{
              top: positions[index][0],
              left: positions[index][1],
              position: "absolute",
            }}
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
}
