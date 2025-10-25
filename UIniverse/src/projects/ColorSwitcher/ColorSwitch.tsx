import { useState } from "react";

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
  ];

  const [color, setColor] = useState<string>(colorList[0]);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-96 transition-colors duration-300 p-4"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-5xl font-extrabold mb-6">Color Switcher</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-white/30 backdrop-blur-md rounded-full shadow-lg">
        {colorList.map((colorName) => (
          <button
            key={colorName}
            className={`rounded-full bg-${colorName}-500 hover:opacity-80 transition p-2 px-3 text-shadow-gray-400 font-semibold`}
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
