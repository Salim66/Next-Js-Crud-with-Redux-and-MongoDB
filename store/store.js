import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/app/counter/counterSlice";


// create store
const store = configureStore({
    reducer: {
        counter: counterSlice
    },
    devTools: true
})

// export store
export default store;