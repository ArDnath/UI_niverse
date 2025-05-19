import { useState } from "react";

const buttons = [
    "C", "/", "*", "←",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".", 
  ];

const CalculatorPage = () => {

    const [expression , setExpression] = useState('');

    const handleClick = (value: string)=>{
        if(value == "C"){
            setExpression('');
        }
        else if(value =="←"){
            setExpression(expression.slice(0,-1))
        }
        else if(value === ""){
            try {
                setExpression(eval(expression).toString());
            } catch (e) {
                setExpression("Error", e);
                
            }
        }
        else{
            setExpression((prev)=> prev + value);
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 w-80">
        <div className="bg-black text-white text-3xl p-4 rounded mb-4 break-words h-20">
          {expression || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`p-4 rounded text-xl font-semibold text-white ${
                btn === "="
                  ? "bg-green-500 hover:bg-green-600"
                  : btn === "C"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
    );
}

export default CalculatorPage;
