import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TAuth = {
	user: null | object;
	token: null | string;
};

const initialState: TAuth = {
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, actions: PayloadAction<{ user: object; token: string }>) {
			const { token, user } = actions.payload;
			state.token = token;
			state.user = user;
		},
		logout(state) {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setUser, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
