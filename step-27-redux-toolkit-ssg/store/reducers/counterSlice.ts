import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Counter } from "./types";

// Initial State
const initialState : Counter = {
    count : 0,
}

// Slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state) => {
            state.count++;
        },
        decrement : (state) => {
            state.count--;
        },
        incrementByAmount : (state, action : PayloadAction<number>) => {
            state.count += action.payload;
        },
    },
    extraReducers: {
        [HYDRATE] : (state, action) => {
			console.log("HYDRATE", state.count, action.payload.counter.count);
            state.count = state.count + action.payload.counter.count;
        }
    }
});

// Actions
export const { increment, incrementByAmount, decrement } = counterSlice.actions;

// Reducer
export default counterSlice.reducer;
