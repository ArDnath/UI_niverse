import { useState } from "react";

const buttons = [
  "C", "/", "*", "←",
  "7", "8", "9", "-",
  "4", "5", "6", "+",
  "1", "2", "3", "=",
  "0", ".", 
];

const CalculatorPage = () => {
  const [expression, setExpression] = useState("");
  const [error, setError] = useState(false);

  const evaluateExpression = (expr: string) => {
    try {
      // Using Function constructor instead of eval (still only for demo apps!)
      const result = Function(`"use strict"; return (${expr})`)();
      setExpression(result.toString());
      setError(false);
    } catch {
      setExpression("Error");
      setError(true);
    }
  };

  const handleClick = (value: string) => {
    if (value === "C") {
      setExpression("");
      setError(false);
    } else if (value === "←") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      evaluateExpression(expression);
    } else {
      if (error) setError(false);
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-sm">
        <div className={`text-white text-3xl p-4 rounded mb-4 h-20 bg-black break-words ${error ? "text-red-400" : ""}`}>
          {expression || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`p-4 rounded-xl text-xl font-semibold transition-all duration-150 ${
                btn === "="
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : btn === "C"
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : btn === "←"
                  ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
              onClick={() => handleClick(btn)}
              disabled={error && btn !== "C"}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
