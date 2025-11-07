import './Counter.css'
import {useEffect, useState} from "react";
function Counter({ onValueChange }) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
            onValueChange(counter);
    }, [counter]);
    function handlePlusClick() {
        setCounter(counter + 1);
    }
    function handleMinusClick() {
        setCounter(counter - 1);
    }
    function handleResetClick() {
        setCounter(0);
    }
    return (
        <div className={'Counter'}>
            <h1 className={'value'}>{counter}</h1>
            <div className={"button"}>
                <button onClick={handlePlusClick}>+1</button>
                <button onClick={handleMinusClick}>-1</button>
                <button onClick={handleResetClick}>reset</button>
            </div>
        </div>
    );
}


export default Counter;