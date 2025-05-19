import {useState} from 'react';

const CalculatorPage = () => {

    const [expression , setExpression] = useState<string>("");

    const operators= ["+","-","*","/","%"];

    const clearAll = () =>{
        setExpression("");
    }

    const handleNumberClick =(number: string) =>{
        setExpression((prev)=>( prev + number));
    };
    const handleOperatorClick =(operator: string)=>{
        setExpression((prev)=>{
            if (prev ==="") return "";
            const lastChar = prev.slice(-1);
            if(operators.includes(lastChar)) return prev.slice(0,-1) +operator;
            return prev +operator;
        })
        }

    const handleEquals =()=>{
        try {
            const answer = Function(`return ${expression}`)();
            setExpression(answer.toString())
        } catch (error) {
            setExpression("Error");
            
        }

    }
    const buttons = [
        { label: "AC", onClick: clearAll, className: "bg-red-500 text-white" },
        { label: "(", onClick: () => handleNumberClick("(") },
        { label: ")", onClick: () => handleNumberClick(")") },
        { label: "÷", onClick: () => handleOperatorClick("/") },
    
        { label: "7", onClick: () => handleNumberClick("7") },
        { label: "8", onClick: () => handleNumberClick("8") },
        { label: "9", onClick: () => handleNumberClick("9") },
        { label: "×", onClick: () => handleOperatorClick("*") },
    
        { label: "4", onClick: () => handleNumberClick("4") },
        { label: "5", onClick: () => handleNumberClick("5") },
        { label: "6", onClick: () => handleNumberClick("6") },
        { label: "-", onClick: () => handleOperatorClick("-") },
    
        { label: "1", onClick: () => handleNumberClick("1") },
        { label: "2", onClick: () => handleNumberClick("2") },
        { label: "3", onClick: () => handleNumberClick("3") },
        { label: "+", onClick: () => handleOperatorClick("+") },
    
        { label: "0", onClick: () => handleNumberClick("0"), className: "col-span-2" },
        { label: ".", onClick: () => handleNumberClick(".") },
        { label: "=", onClick: handleEquals, className: "bg-green-600 text-white" },
      ];
    

    return (
        <div className="max-w-sm mx-auto mt-10 bg-neutral rounded-xl shadow-xl border-neutral-700 overflow-hidden">
            <div className='bg-neutral-800 px-4 py-6'>
                <div className='text-right text-lime-300 text-5xl font-mono min-h-[60px] break-words leading-snug'>
                    {expression || "0"}
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 p-4 bg-neutral-900'>
                {buttons.map((button, index)=>(
                    <button
                    key={index}
                    onClick={button.onClick}
                    className={`p-4 rounded-md text-lg font-bold transition-all duration-150 ${
                        button.className ||
                        "bg-neutral-700 text-white hover:bg-neutral-600 active:scale-95"
                      } ${button.className?.includes("col-span-2") ? "col-span-2" : ""}`}
                    >
                    {button.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CalculatorPage;
