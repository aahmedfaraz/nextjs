import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

const store = () => configureStore({
    reducer: rootReducer,
    devTools: true,
});

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(store);