import { RootState } from "@/redux/app/store";
import { createSlice } from "@reduxjs/toolkit";

type Todo = {
    tasks: [
        {
            id: string;
			date: Date;
			title: string;
            description: string;
			status: "DONE" | "PENDING" | "CANCELED";
		}
	];
};

const initialState: Todo = {
    tasks: [
        {
            id: "233",
			date: new Date(),
			title: "Initial Shadcn project",
            description: "setup project using vite",
			status: "DONE",
		}
	],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		// add a new task

		addTask() {

        },
	},
});


export const {addTask} = todoSlice.actions;


export const selectTasks = (state:RootState) => state.todos.tasks

const todoReducer = todoSlice.reducer;

export default todoReducer;