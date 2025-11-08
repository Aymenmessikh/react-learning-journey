import './CompteurAvecLocalStorage.css';
import { useLocalStorage } from "../../hooks/useLocalStorage.js";

function CompteurAvecLocalStorage() {
    const [counter, setCounter] = useLocalStorage("counterValue", 0);

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
        <div className="Counter">
            <h1 className="value">{counter}</h1>
            <div className="button">
                <button onClick={handlePlusClick}>+1</button>
                <button onClick={handleMinusClick}>-1</button>
                <button onClick={handleResetClick}>Reset</button>
            </div>
        </div>
    );
}

export default CompteurAvecLocalStorage;
