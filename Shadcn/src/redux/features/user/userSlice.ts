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
            },
            removeUser(state, action: PayloadAction<string>){

                // not working 
                //  state = state.filter( user => user.id !== action.payload)
                //   state.filter( user => user.id !== action.payload)


                // return state = state.filter( user => user.id !== action.payload)
                return  state.filter( user => user.id !== action.payload)
            }
        }
    }
)


export const {addUser, removeUser} = userSlice.actions;

export const selectUser = (userId: string | null = null) =>  (state: RootState) => {
    if(userId) return state.users.find( user => user.id === userId)
        return state.users
}

export const userReducer = userSlice.reducer;