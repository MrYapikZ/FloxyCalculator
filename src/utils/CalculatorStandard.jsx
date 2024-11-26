import React, { useState, useEffect } from "react";
import Display from "../components/Display";
import Button from "../components/Button";
import "/src/styles/CalculatorStandard.css";

function CalculatorStandard() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [isResult, setIsResult] = useState(false);

    const handleClick = (value) => {
        if (value === '=') {
            try {
                const result = eval(input);

                setHistory((prevHistory) => [
                    ...prevHistory,
                    { equation: input, result },
                ]);

                setInput(result.toString());
                setIsResult(true);
            } catch {
                setInput('Error');
                setIsResult(false);
            }
        } else if (value === 'C') {
            handleClear();
        } else if (value === 'CE') {
            handleClearEntry();
        } else if (value === '←') {
            handleBackspace();
        } else {
            if (isResult) {
                if (/[0-9]/.test(value) || value === '.') {
                    setInput(value);
                    setIsResult(false);
                } else {
                    setInput(input + value);
                    setIsResult(false);
                }
            } else {
                setInput(input + value);
            }
        }
    };

    const handleClear = () => {
        setInput('');
    };

    const handleClearEntry = () => {
        setInput('');
    };

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    useEffect(() => {
        const handleKeypress = (event) => {
            const key = event.key;
            if (/[0-9]/.test(key)) {
                handleClick(key);
            } else if (key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
                handleClick(key);
            } else if (key === 'Enter') {
                handleClick('=')
            } else if (key === 'Backspace') {
                handleClick('←')
            } else if (key === 'Escape') {
                handleClick("C")
            }
        }

        document.addEventListener('keydown', handleKeypress);

        return () => {
            document.removeEventListener('keydown', handleKeypress);
        }
    }, [input, isResult]);

    return (
        <div className="calculator">
            <Display value={input} />
            <div className="button-grid">
                <Button label="C" onClick={handleClear} className="clear-button" />
                <Button label="CE" onClick={handleClearEntry} className="clear-button" />
                <Button label="⌫" onClick={handleBackspace} className="backspace-button" />
                {["7", "8", "9", "/"].map((label) => (
                    <Button key={label} label={label} value={label} onClick={handleClick} className={isNaN(label) ? "operator" : "digit"} />
                ))}
                {["4", "5", "6", "*"].map((label) => (
                    <Button key={label} label={label} value={label} onClick={handleClick} className={isNaN(label) ? "operator" : "digit"} />
                ))}
                {["1", "2", "3", "-"].map((label) => (
                    <Button key={label} label={label} value={label} onClick={handleClick} className={isNaN(label) ? "operator" : "digit"} />
                ))}
                {["0", ".", "=", "+"].map((label) => (
                    <Button key={label} label={label} value={label} onClick={handleClick} className={label === "=" ? "result" : isNaN(label) ? "operator" : "digit"} />
                ))}
            </div>
        </div>
    )
}

export default CalculatorStandard;