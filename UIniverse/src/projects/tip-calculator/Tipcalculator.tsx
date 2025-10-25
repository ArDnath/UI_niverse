import { useState } from "react";

function Tipcalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("10%");
  const [split, setSplit] = useState(1);
  const [splitTotal, setSplitTotal] = useState(0);

  function handleTipChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace("%", "");
    if (!value.endsWith("%")) {
      value = value + "%";
    }
    setTip(value);
  }

  function handleBillChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(e.target.value);
  }

  function splitMinus() {
    setSplit((oldValue) => Math.max(oldValue - 1, 1));
  }

  function splitPlus() {
    setSplit((oldValue) => oldValue + 1);
  }

  function calculate() {
    const percentage = 1 + parseInt(tip.replace("%", "")) / 100;
    const result = ((Number(bill) * percentage) / split).toFixed(2);
    setSplitTotal(Number(result));
  }

  return (
    <div className="flex flex-col items-center justify-center p bg-gradient-to-br m-3 text-white px-4">
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 max-w-sm w-full border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-emerald-400 mb-6">
          💸 Tip Calculator
        </h1>

        {/* Bill Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-1">Bill Amount</label>
          <input
            type="number"
            value={bill}
            onChange={handleBillChange}
            placeholder="Enter bill amount"
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* Tip Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-1">Tip %</label>
          <input
            type="text"
            value={tip}
            onChange={handleTipChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* Split Section */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2">Split Between</label>
          <div className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
            <button
              onClick={splitMinus}
              className="text-emerald-400 font-bold text-xl px-3 hover:scale-110 transition"
            >
              −
            </button>
            <span className="text-lg">{split}</span>
            <button
              onClick={splitPlus}
              className="text-emerald-400 font-bold text-xl px-3 hover:scale-110 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full py-2 mt-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition"
        >
          Calculate
        </button>

        {/* Result */}
        {splitTotal > 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-300">Each person pays</p>
            <h2 className="text-4xl font-bold text-emerald-400 mt-2">
              ${splitTotal}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tipcalculator;
