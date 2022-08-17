import { NextComponentType } from "next";
import { useContext, useEffect } from "react";
import globalContext from "../context/global/globalContext";

const Stopwatch : NextComponentType = () => {
    const { hours, minutes, seconds, updateTimer, resetTimer } = useContext(globalContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateTimer();
            clearTimeout(timer)
        }, 1000);
    }, [updateTimer, resetTimer])

    return (
        <div>
            <h1>{maintainTwoDigits(hours)}:{maintainTwoDigits(minutes)}:{maintainTwoDigits(seconds)}</h1>
        </div>
    );
}

const maintainTwoDigits = (num : number) => num.toString().length === 1 ? `0${num}` : num;

export default Stopwatch;