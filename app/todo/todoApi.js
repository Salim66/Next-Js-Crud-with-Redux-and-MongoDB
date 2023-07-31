import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all todos
export const fetchTodo = createAsyncThunk('todo/fetchTodo', async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/todo');
        if (!response.data) throw new Error("Data not found!");
        return response.data.todos;
    } catch (error) {
        console.log(error);
    }
})

// create todos
export const createTodo = createAsyncThunk('todo/createTodo', async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/api/todo', data);
        if (!response.data) throw new Error("Data not created!");
        return response.data.todo;
    } catch (error) {
        console.log(error);
    }
})

// delete todos
export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
    try {
        await axios.delete(`http://localhost:3000/api/todo?id=${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
})