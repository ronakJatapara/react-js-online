import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../feature/todo/todoSlice";

export const stores = configureStore({
    reducer: {
        todo: todoSlice.reducer  
    }
});


