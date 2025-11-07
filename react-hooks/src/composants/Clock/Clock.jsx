import './Clock.css'
import {useEffect, useState} from "react";

function Clock() {
    const [time, setTime] = useState(new Date());
    // function formatTimeUnit(unit) {
    //     const now = new Date();
    //     const hours = String(now.getHours()).padStart(2, '0');
    //     const minutes = String(now.getMinutes()).padStart(2, '0');
    //     const seconds = String(now.getSeconds()).padStart(2, '0');
    //     return `${hours}:${minutes}:${seconds}`;
    // }
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    // setInterval(){
    //     formatTimeUnit();
    // }
    return (
        <div className={'Clock'}>
            <h1>Horloge</h1>
            <div className="time">
            <h3>{time.toLocaleTimeString()}</h3>
            </div>
        </div>
    );
}


export default Clock;