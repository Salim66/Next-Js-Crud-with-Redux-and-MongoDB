import { createSlice } from "@reduxjs/toolkit";

// create counter slice
const counterSlice = createSlice({
    name: "CounterSlice",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        }
    }
});

// export selectors
export const selectCount = (state) => state.counter;

// export actions
export const { increment, decrement } = counterSlice.actions;

// export default 
export default counterSlice.reducer;