import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { userReducer } from "../features/user/userSlice";

export const store = configureStore({
    reducer:{
        todos: todoReducer,
        users: userReducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({serializableCheck:false})
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch