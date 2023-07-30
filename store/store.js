import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/app/counter/counterSlice";
import userSlice from "@/app/user/userSlice";


// create store
const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice
    },
    devTools: true
})

// export store
export default store;