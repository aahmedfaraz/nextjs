import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";
import timerSlice from "./timer/timerSlice";

const rootReducer = combineReducers({
    todos : todoSlice,
    timer : timerSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;