import { createSlice } from "@reduxjs/toolkit";
import { Timer } from "../types";

// Initial State
const initialState : Timer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

// Slice
const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        updateTimer : (state) => {
            let {hours, minutes, seconds} = state;            
            return {
                hours : minutes === 59 && seconds === 59 ? hours + 1 : hours,
                minutes : minutes === 59 ? 0 : seconds === 59 ? minutes + 1 : minutes,
                seconds : seconds === 59 ? 0 : seconds + 1,
            }
        },
        resetTimer : (state) => {
            return {
                hours : 0,
                minutes : 0,
                seconds : 0,
            }
        }
    }
});

// Actions
export const { updateTimer, resetTimer } = timerSlice.actions;

// Reducer
export default timerSlice.reducer;