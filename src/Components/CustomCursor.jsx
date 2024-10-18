// CustomCursor.js
import React, { useState, useEffect } from "react";
import { BsAirplaneEngines } from "react-icons/bs";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <BsAirplaneEngines
        style={{
          cursor: "none",
          position: "absolute",
          zIndex: "999",
          top: `${position.y}px`,
          left: `${position.x}px`,
          pointerEvents: "none", // Ensures it doesn't interfere with other elements
        }}
        size={20} // Adjust size if needed
        // color="#034833" // Adjust color if needed
        color="#00cc99"
      />
    </div>
  );
};

export default CustomCursor;
