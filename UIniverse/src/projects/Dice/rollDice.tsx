import React, { useState } from "react";
import { motion } from "framer-motion";

function DiceRoller() {
  const [diceCount, setDiceCount] = useState(1);
  const [results, setResults] = useState<number[]>([]);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const newResults = Array.from({ length: diceCount }, () =>
        Math.floor(Math.random() * 6) + 1
      );
      setResults(newResults);
      setRolling(false);
    }, 900);
  };

  // Function to render dice faces with pips
  const renderPips = (num: number) => {
    const positions = {
      1: [[2, 2]],
      2: [
        [1, 1],
        [3, 3],
      ],
      3: [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      4: [
        [1, 1],
        [1, 3],
        [3, 1],
        [3, 3],
      ],
      5: [
        [1, 1],
        [1, 3],
        [2, 2],
        [3, 1],
        [3, 3],
      ],
      6: [
        [1, 1],
        [2, 1],
        [3, 1],
        [1, 3],
        [2, 3],
        [3, 3],
      ],
    } as Record<number, [number, number][]>;

    return (
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 3 }).map((_, col) => {
            const filled = positions[num].some(
              ([r, c]) => r === row + 1 && c === col + 1
            );
            return (
              <div
                key={`${row}-${col}`}
                className={`flex items-center justify-center ${
                  filled ? "text-black" : ""
                }`}
              >
                {filled && (
                  <div className="w-3 h-3 bg-black rounded-full shadow-inner" />
                )}
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-black p-6">
      <div className=" shadow-2xl rounded-2xl p-8 max-w-md w-full border border-green-800 text-center">
        <h1 className="text-3xl font-bold  mb-6 drop-shadow">
          🎲 Dice Roller
        </h1>

        {/* Dice Count Controller */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setDiceCount((prev) => Math.max(prev - 1, 1))}
            className="font-bold text-2xl px-3 hover:scale-110 transition"
          >
            −
          </button>
          <span className="text-lg">{diceCount}</span>
          <button
            onClick={() => setDiceCount((prev) => Math.min(prev + 1, 6))}
            className="font-bold text-2xl px-3 hover:scale-110 transition"
          >
            +
          </button>
        </div>

        {/* Roll Button */}
        <button
          onClick={rollDice}
          disabled={rolling}
          className={`w-full py-2 font-semibold rounded-lg border transition ${
            rolling
              ? " cursor-not-allowed"
              : " hover:bg-gray-100 text-black shadow-md"
          }`}
        >
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>

        {/* Dice Results */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {results.map((num, index) => (
            <motion.div
              key={index}
              initial={{ rotate: 0, scale: 0 }}
              animate={
                rolling
                  ? { rotate: 360, scale: 1.2 }
                  : { rotate: 0, scale: 1 }
              }
              transition={{ duration: 0.6, type: "spring" }}
              className="w-16 h-16 bg-white rounded-xl border-4 border-gray-300 shadow-xl flex items-center justify-center"
            >
              {renderPips(num)}
            </motion.div>
          ))}
        </div>

        {/* Sum */}
        {results.length > 0 && !rolling && (
          <div className="mt-6">
            <p className="">Total</p>
            <h2 className="text-3xl font-bold ">
              {results.reduce((a, b) => a + b, 0)}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiceRoller;
