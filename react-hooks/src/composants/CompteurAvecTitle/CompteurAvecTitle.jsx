import './CompteurAvecTitle.css'
import Counter from "../Counter/Counter.jsx";
import {useState} from "react";

function CompteurAvecTitle() {
    const [title, setTitle] = useState("0");
    function handleTitleValue(value) {
        setTitle(value);
    }
    return (
        <>
            <div className={'CompteurAvecTitle'}>
                <h2>Title: {title}</h2>
            </div>
            <Counter onValueChange={handleTitleValue}/>
        </>
    );
}

export default CompteurAvecTitle;