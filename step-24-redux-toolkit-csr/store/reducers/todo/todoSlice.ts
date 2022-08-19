import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

// Initial State
const initialState : Todo[] = [];

// Slice
const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers: {
        addTodo : (state, action: PayloadAction<string>) => {
            const newTodo : Todo = {
                id: Math.random().toString(36).substring(2, 9),
                text: action.payload,
            };
            state.push(newTodo);
        },
        deleteTodo : (state, action : PayloadAction<string>) => {            
            return state.filter(todo => todo.id !== action.payload);
        },
    },
});

// Export Actions
export const { addTodo, deleteTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;