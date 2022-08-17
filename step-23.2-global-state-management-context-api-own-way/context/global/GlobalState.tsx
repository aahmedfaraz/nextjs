import { Dispatch, SetStateAction, useReducer } from "react";
import globalContext from "./globalContext";
import globalReducer from "./globalReducer";
import { GlobalStateType, RESET_TIMER, UPDATE_TIMER } from '../types';

const GlobalState = (props : any) => {
    const initialState : GlobalStateType = {
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    const [state, dispatch]= useReducer(globalReducer, initialState) as [GlobalStateType, Dispatch<SetStateAction<{ type : string }>>];

    const updateTimer = () => dispatch({type : UPDATE_TIMER});
    const resetTimer = () => dispatch({type : RESET_TIMER});

    return <globalContext.Provider value={{
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
        updateTimer,
        resetTimer,
    }}>
        { props.children }
    </globalContext.Provider>
}

export default GlobalState;