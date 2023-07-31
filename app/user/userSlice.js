import { createSlice } from "@reduxjs/toolkit";
import { createUserApi, fetchUsers } from "./userApi";

// create user slice
const userSlice = createSlice({
    name: "UserSlice",
    initialState: {
        users: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
            .addCase(createUserApi.fulfilled, (state, action) => {
                state.users.push(action.payload);
        })
    }
});

// export selectors
export const selectUser = (state) => state.user;

// export actions
export const { increment, decrement } = userSlice.actions;

// export default 
export default userSlice.reducer;