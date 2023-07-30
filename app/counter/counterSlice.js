import { createSlice } from "@reduxjs/toolkit";

// create counter slice
const counterSlice = createSlice({
    name: "CounterSlice",
    initialState: {
        count: 0
    },
    reducers: {}
});

// export selectors

// export actions
export const { } = counterSlice.actions;

// export default 
export default counterSlice.reducer;