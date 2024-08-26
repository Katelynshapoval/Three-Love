import React, { useState, useEffect } from "react";

export default function Game({ hide }) {
  const classes = `gameProject ${hide ? "hide" : ""}`;
  const [left, setLeft] = useState(0); // Initialize left state
  const [top, setTop] = useState(0); // Initialize top state

  const handleMove = (direction) => {
    const step = 10; // Movement step in pixels
    const characterSize = 50; // Assuming the character size is 50x50 pixels

    if (direction === "right") {
      // Move right if the character is not at the right edge of the screen
      if (left + step + characterSize <= window.innerWidth) {
        setLeft((prev) => prev + step);
      }
    } else if (direction === "left") {
      // Move left if the character is not at the left edge of the screen
      if (left - step >= 0) {
        setLeft((prev) => prev - step);
      }
    } else if (direction === "up") {
      // Move up if the character is not at the top edge of the screen
      if (top - step >= 0) {
        setTop((prev) => prev - step);
      }
    } else if (direction === "down") {
      // Move down if the character is not at the bottom edge of the screen
      if (top + step + characterSize <= window.innerHeight) {
        setTop((prev) => prev + step);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyToDirection = {
        ArrowRight: "right",
        ArrowLeft: "left",
        ArrowUp: "up",
        ArrowDown: "down",
      };
      const direction = keyToDirection[event.key];
      if (direction) {
        handleMove(direction);
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [left, top]);

  return (
    <div className={classes}>
      <div
        className="character"
        style={{
          position: "absolute",
          left: `${left}px`, // Apply the position state to the left property
          top: `${top}px`, // Apply the position state to the top property
        }}
      ></div>
      <div className="arrows">
        {/* Up Arrow */}
        <svg
          onClick={() => handleMove("up")}
          version="1.1"
          id="ios7_x5F_arrows_1_"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 128 128"
          style={{ enableBackground: "new 0 0 128 128" }}
          xmlSpace="preserve"
        >
          <style>
            {`.st0 { display: none; } 
              .st1 { display: inline; }`}
          </style>
          <g id="_x34__1_">
            <path
              d="M64.1 0C28.8 0 .2 28.7.2 64s28.6 64 63.9 64S128 99.3 128 64c-.1-35.3-28.7-64-63.9-64zm0 122.7C31.7 122.7 5.5 96.4 5.5 64c0-32.4 26.2-58.7 58.6-58.7 32.3 0 58.6 26.3 58.6 58.7-.1 32.4-26.3 58.7-58.6 58.7zm-.3-93.9L33.1 59.5l3.8 3.8 24.5-24.5V104h5.3V39.4l24 24 3.8-3.8-30.7-30.8z"
              id="icon_35_"
            />
          </g>
        </svg>

        <div className="left-right">
          {/* Left Arrow */}
          <svg
            onClick={() => handleMove("left")}
            version="1.1"
            id="ios7_x5F_arrows_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            style={{ enableBackground: "new 0 0 128 128" }}
            xmlSpace="preserve"
          >
            <style>
              {`.st0 { display: none; } 
              .st1 { display: inline; }`}
            </style>
            <g id="_x34__1_" transform="rotate(-90 64 64)">
              <path
                d="M64.1 0C28.8 0 .2 28.7.2 64s28.6 64 63.9 64S128 99.3 128 64c-.1-35.3-28.7-64-63.9-64zm0 122.7C31.7 122.7 5.5 96.4 5.5 64c0-32.4 26.2-58.7 58.6-58.7 32.3 0 58.6 26.3 58.6 58.7-.1 32.4-26.3 58.7-58.6 58.7zm-.3-93.9L33.1 59.5l3.8 3.8 24.5-24.5V104h5.3V39.4l24 24 3.8-3.8-30.7-30.8z"
                id="icon_35_"
              />
            </g>
          </svg>

          {/* Right Arrow */}
          <svg
            onClick={() => handleMove("right")}
            version="1.1"
            id="ios7_x5F_arrows_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            style={{ enableBackground: "new 0 0 128 128" }}
            xmlSpace="preserve"
          >
            <style>
              {`.st0 { display: none; } 
              .st1 { display: inline; }`}
            </style>
            <g id="_x34__1_" transform="rotate(90 64 64)">
              <path
                d="M64.1 0C28.8 0 .2 28.7.2 64s28.6 64 63.9 64S128 99.3 128 64c-.1-35.3-28.7-64-63.9-64zm0 122.7C31.7 122.7 5.5 96.4 5.5 64c0-32.4 26.2-58.7 58.6-58.7 32.3 0 58.6 26.3 58.6 58.7-.1 32.4-26.3 58.7-58.6 58.7zm-.3-93.9L33.1 59.5l3.8 3.8 24.5-24.5V104h5.3V39.4l24 24 3.8-3.8-30.7-30.8z"
                id="icon_35_"
              />
            </g>
          </svg>
        </div>

        {/* Down Arrow */}
        <svg
          onClick={() => handleMove("down")}
          version="1.1"
          id="ios7_x5F_arrows_1_"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 128 128"
          style={{ enableBackground: "new 0 0 128 128" }}
          xmlSpace="preserve"
        >
          <style>
            {`.st0 { display: none; } 
              .st1 { display: inline; }`}
          </style>
          <g id="_x34__1_" transform="rotate(180 64 64)">
            <path
              d="M64.1 0C28.8 0 .2 28.7.2 64s28.6 64 63.9 64S128 99.3 128 64c-.1-35.3-28.7-64-63.9-64zm0 122.7C31.7 122.7 5.5 96.4 5.5 64c0-32.4 26.2-58.7 58.6-58.7 32.3 0 58.6 26.3 58.6 58.7-.1 32.4-26.3 58.7-58.6 58.7zm-.3-93.9L33.1 59.5l3.8 3.8 24.5-24.5V104h5.3V39.4l24 24 3.8-3.8-30.7-30.8z"
              id="icon_35_"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
