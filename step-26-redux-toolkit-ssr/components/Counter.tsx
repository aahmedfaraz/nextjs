import { NextComponentType } from "next";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";

const Counter : NextComponentType = () => {
    const { count } = useSelector((state : AppState) => state.counter);
    return (
        <h1>{count}</h1>
    )
}

export default Counter;