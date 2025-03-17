import React, { useState } from 'react';
import "../style/Calculator.css"

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");

    // Function to display numbers/operators
    const display = (value) => {
        setInputValue((prev) => prev + value);
    };

    // Safe evaluation of the expression
    const calculate = () => {
        try {
            // Use eval() carefully (only if input is safe)
            setInputValue(String(eval(inputValue))); 
        } catch (error) {
            setInputValue("Error"); // Display error message on invalid input
        }
    };

    // Clear function
    const clear = () => {
        setInputValue('');
    };

    return (
        <div>
            <div className="calculator">
                <input type="text" className="value" value={inputValue} readOnly />

                <div className="buttons">
                    <button className="clear" onClick={clear}>Clear</button>
                    <button onClick={() => display("/")}>/</button>
                    <button onClick={() => display("*")}>*</button>
                    <button onClick={() => display("-")}>-</button>

                    <button onClick={() => display("7")}>7</button>
                    <button onClick={() => display("8")}>8</button>
                    <button onClick={() => display("9")}>9</button>
                    <button className="plus" onClick={() => display("+")}>+</button>

                    <button onClick={() => display("4")}>4</button>
                    <button onClick={() => display("5")}>5</button>
                    <button onClick={() => display("6")}>6</button>

                    <button onClick={() => display("1")}>1</button>
                    <button onClick={() => display("2")}>2</button>
                    <button onClick={() => display("3")}>3</button>

                    <button onClick={() => display("0")}>0</button>
                    <button onClick={() => display("00")}>00</button>
                    <button onClick={() => display(".")}>.</button>
                    <button className="equal" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
