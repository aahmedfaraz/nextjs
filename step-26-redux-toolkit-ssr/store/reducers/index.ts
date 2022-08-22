import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";

const rootReducer = combineReducers({
    counter: counterSlice
});

export default rootReducer;