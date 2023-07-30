import getAllUser from "@/libs/getAllUser";
import { createAsyncThunk } from "@reduxjs/toolkit";


// get all user
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const user = await getAllUser();
    return user;
});