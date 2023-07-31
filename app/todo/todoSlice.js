import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, fetchTodo } from "./todoApi";


// create todo slice
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.todos = action.payload;
        }).addCase(createTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        }).addCase(deleteTodo.fulfilled, (state, action) => {
            state.todos = state.todos.filter((data) => data._id != action.payload);
        })
    }
});

// export selectors
export const todoSelect = (state) => state.todo;

// export actions
export const { } = todoSlice.actions;

// export reducer
export default todoSlice.reducer;