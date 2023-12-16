import './CalculatorBody.css';
import {useState} from "react";


export function CalculatorBody() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ["/", "*", "+", "-", "."];
    const updateCalc = (value: string)  => {
        if(ops.includes(value) && calc === '' ||
        ops.includes(value) && ops.includes(calc.slice(-1))
        ){
            return;
        }
        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc + value));
        }
    }


    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button key={i} onClick={() => updateCalc(i.toString())}>
                    {i}
                </button>
            );
        }
        return digits;
    }

    const calculate = ()=> {
        setCalc(eval(calc));
    }

    const deleteLast = () => {
        if (calc == ''){
            return;
        }
        const value = calc.slice(0,-1);
        setCalc(value);
    }

    const deleteAll = ()=> {
        setCalc('');
        setResult('');
    }


    return (
        <div className="calculator-wrapper">
            <div className="calculator">
                <div className="display">
                    {result ? <span>{result} </span> : ""}
                    {calc || '0'}
                </div>
                <div className="operators">
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={deleteLast}>DEL</button>
                    <button onClick={deleteAll}>C</button>
                </div>
                <div className="digits">
                    { createDigits() }
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}