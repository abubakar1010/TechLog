import { createSlice } from "@reduxjs/toolkit";

type TAuth = {
    user: null | string;
    token: null | string;
}


const initialState: TAuth = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(){},
        logout(){}
    }
})


export const {login, logout} = authSlice.actions

export const authReducer = authSlice.reducer