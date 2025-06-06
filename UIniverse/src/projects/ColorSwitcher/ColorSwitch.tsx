import React, { useState } from "react";

const ColorSwitch = () => {
  const colorList = [
    "yellow",
    "green",
    "blue",
    "red",
    "orange",
    "purple",
    "cyan",
    "teal",
    "fuchsia",
  ];

  const [color, setColor] = useState<string>(colorList[0]);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div
      className="flex items-center justify-center min-h-96 transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-white/30 backdrop-blur-md rounded-full shadow-lg">
        {colorList.map((colorName) => (
          <button
            key={colorName}
            className={`rounded-full bg-${colorName}-500 hover:opacity-80 transition p-2`}
            onClick={() => handleColorChange(colorName)}
            style={{ backgroundColor: colorName }}
          >
        {colorName}
            </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSwitch;
