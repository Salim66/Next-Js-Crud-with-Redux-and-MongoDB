import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/app/counter/counterSlice";
import userSlice from "@/app/user/userSlice";
import todoSlice from "@/app/todo/todoSlice";


// create store
const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice,
        todo: todoSlice
    },
    devTools: true
})

// export store
export default store;