import { RootState } from "@/redux/app/store";
import { TUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

const initialState: TUser[] = [
    {
        id: nanoid(),
        name: "Rayhan"
    },
    {
        id: nanoid(),
        name: "Abu Bakar"
    },
]

const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers:{
            addUser(state, action: PayloadAction<{name: string}>){
                const user = {
                    id: nanoid(),
                    ...action.payload
                }
                state.push(user)
            }
        }
    }
)


export const {addUser} = userSlice.actions;

export const selectUser =  (state: RootState) => state.users

export const userReducer = userSlice.reducer;