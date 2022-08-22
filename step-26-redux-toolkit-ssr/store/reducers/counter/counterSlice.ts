import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Counter } from "../types";
import { HYDRATE } from "next-redux-wrapper";

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
        incrementByAmount : (state, action : PayloadAction<number>) => {
            return {
                ...state,
                count : state.count + action.payload,
            }
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
			console.log("HYDRATE", state.count, action.payload.counter.count);
			state.count = state.count + action.payload.counter.count;
		},
    }
});

// Actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Reducer
export default counterSlice.reducer;