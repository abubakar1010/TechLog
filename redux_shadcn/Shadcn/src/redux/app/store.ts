import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { userReducer } from "../features/user/userSlice";
import { todoApiSlice } from "../features/todo/todoApiSlice";

export const store = configureStore({
    reducer:{
        todos: todoReducer,
        users: userReducer,
        [todoApiSlice.reducerPath]: todoApiSlice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({serializableCheck:false}).concat(todoApiSlice.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch