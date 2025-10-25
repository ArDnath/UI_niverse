import React, { useState } from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs",
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
];

function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  const handleNewQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    alert("Quote copied to clipboard!");
  };

  const shareQuote = () => {
    const text = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 text-white">
      <motion.div
        key={quote.text}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 shadow-2xl rounded-2xl p-8 max-w-md w-full border border-gray-700 text-center"
      >
        <h1 className="text-3xl font-bold text-indigo-400 mb-6">💬 Quote Generator</h1>

        <p className="text-lg italic mb-3">"{quote.text}"</p>
        <p className="text-sm text-gray-400 mb-6">— {quote.author}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleNewQuote}
            className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            New Quote
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
          >
            Copy
          </button>
          
        </div>
      </motion.div>
    </div>
  );
}

export default QuoteGenerator;
