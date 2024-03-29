import { NextComponentType, NextPageContext } from "next";
import { useContext, useEffect } from "react";
import stopwatchContext from "./context/stopwatchContext";
import { TimestampState } from "./context/types";

const Stopwatch : NextComponentType = () => {
    const {timestamp, setTimestamp} = useContext<TimestampState>(stopwatchContext)
    const {hours, minutes, seconds} = timestamp;
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimestamp({
                    timestamp : {
                    hours : timestamp.minutes === 59 ? timestamp.hours + 1 : timestamp.hours,
                    minutes : timestamp.minutes === 59 ? 0 : timestamp.seconds === 59 ? timestamp.minutes + 1 : timestamp.minutes,
                    seconds : timestamp.seconds === 59 ? 0 : timestamp.seconds + 1,
                }
            });
            clearTimeout(timer)
        }, 1000);
    }, [timestamp, setTimestamp])
    
    return (
        <div>
            <h1>{maintainTwoDigits(hours)}:{maintainTwoDigits(minutes)}:{maintainTwoDigits(seconds)}</h1>
        </div>
    );
}

const maintainTwoDigits = (num : number) => num.toString().length === 1 ? `0${num}` : num;

export default Stopwatch;