import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRGenerator() {
  const [text, setText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qr-code.png";
    link.click();
  };

  const isURL = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-10 bg-gradient-to-brto-gray-700 text-white p-6">
      <div className="shadow-2xl rounded-2xl p-8 max-w-md w-full border border-gray-700 text-center">
        <h1 className="text-3xl font-bold text-emerald-400 mb-4">
          QR Code Generator
        </h1>

        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 mb-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-black text-center"
        />

        {text && (
          <div className="flex flex-col items-center mt-4">
            <QRCodeCanvas
              ref={canvasRef}
              value={text}
              size={200}
              includeMargin={true}
              level="H"
            />

            <p className="mt-3 text-sm text-black">
              {isURL(text) ? "Detected URL ✅" : "Plain Text 📄"}
            </p>

            <button
              onClick={handleDownload}
              className="mt-6 py-2 px-6 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition"
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QRGenerator;
