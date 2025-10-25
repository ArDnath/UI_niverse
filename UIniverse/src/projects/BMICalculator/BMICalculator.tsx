import React, { useState } from "react";
import { motion } from "framer-motion";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const hMeters = Number(height) / 100;
    const bmiValue = Number(weight) / (hMeters * hMeters);
    setBmi(Number(bmiValue.toFixed(1)));

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  const getColor = () => {
    if (!bmi) return "text-white";
    if (bmi < 18.5) return "text-blue-400";
    if (bmi < 24.9) return "text-green-400";
    if (bmi < 29.9) return "text-yellow-400";
    return "text-red-500";
  };

  return (
    <div className="flex flex-col items-center justify-center m-10 text-white p-6">
      <div className=" shadow-2xl rounded-2xl p-8 max-w-md w-full border border-gray-700 text-center">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">⚖️ BMI Calculator</h1>

        <div className="mb-4">
          <label className="block text-black text-sm mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            className="w-full text-black px-3 py-2 rounded-lg  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            className="w-full text-black px-3 py-2 rounded-lg  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition"
        >
          Calculate
        </button>

        {bmi && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-6"
          >
            <p className="text-gray-800 mb-2">Your BMI</p>
            <h2 className={`text-4xl font-bold ${getColor()}`}>{bmi}</h2>
            <p className={`text-lg mt-2 font-semibold ${getColor()}`}>
              {category}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;