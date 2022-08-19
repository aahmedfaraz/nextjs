import { NextComponentType } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTimer, resetTimer } from "../store/reducers/timer/timerSlice";
import { RootState } from "../store/reducers";

const Timer : NextComponentType = () => {
    const dispatch = useDispatch();
    const timer = useSelector((state : RootState) => state.timer);
    const { hours, minutes, seconds } = timer;

    const updateUI = async () => {
        const timer = await setTimeout(() => {
            dispatch(updateTimer());
            clearTimeout(timer);
        }, 1000);
    };

    useEffect(() => {
        updateUI();
    }, [seconds])

    return (
        <div>
            <h1>Timer</h1>
            <h3>{twoDigit(hours)}:{twoDigit(minutes)}:{twoDigit(seconds)}</h3>
            <button onClick={() => dispatch(resetTimer())}>Reset</button>
            <br />
            <br />
        </div>
    )
}

export default Timer;

const twoDigit = (num : number) => num.toString().length === 1 ? `0${num}` : num;