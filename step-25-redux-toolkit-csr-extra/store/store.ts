import { configureStore, Action, ThunkAction} from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./reducers";

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<AppDispatch>>;
// where we export RootState, 
// we also export types for AppDispatch and AppThunk.
// Whenever we use `dispatch`, it’s type will be AppDispatch, 
// and whenever we use a `thunk` for API calls / async logic, 
// it’s type will be AppThunk.

export default store;