import { createSlice } from "@reduxjs/toolkit";
import { Counter } from "../types";

// Initial State
const initialState : Counter = {
    count : 0
};

// Slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state) => {
            return {
                ...state,
                count : state.count + 1,
            }
        },
        decrement : (state) => {
            return {
                ...state,
                count : state.count - 1,
            }
        },
    }
});

// Actions
export const { increment, decrement } = counterSlice.actions;

// Reducer
export default counterSlice.reducer;