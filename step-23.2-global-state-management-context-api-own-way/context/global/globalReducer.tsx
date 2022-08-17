import { Reducer } from "react";
import { GlobalStateType, UPDATE_TIMER, RESET_TIMER } from "../types";

const globalReducer : Reducer<GlobalStateType,{ type : string }> = (state, action) : GlobalStateType => {
    switch(action.type){
        case UPDATE_TIMER:
            return {
                ...state,
                hours : state.minutes === 59 && state.seconds === 59 ? state.hours + 1 : state.hours,
                minutes : state.minutes === 59 && state.seconds === 59 ? 0 : state.seconds === 59 ? state.minutes + 1 : state.minutes,
                seconds : state.seconds === 59 ? 0 : state.seconds + 1,
            };
        case RESET_TIMER : 
            return {
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        default:
            return state;
    }    
}

export default globalReducer;