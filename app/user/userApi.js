import getAllUser from "@/libs/getAllUser";
import createUser from "@/libs/createUser";
import { createAsyncThunk } from "@reduxjs/toolkit";


// get all user
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/user');
        if (!response.data) throw new Error("Data not found!");
        return response.data.users;
    } catch (error) {
        console.log(error);
    }
});

// create user
export const createUserApi = createAsyncThunk('user/createUser', async (data) => {
    const user = await createUser(data);
    return user;
});