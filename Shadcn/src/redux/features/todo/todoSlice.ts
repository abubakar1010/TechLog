import { RootState } from "@/redux/app/store";
import { TTask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type Todo = {
    tasks: TTask[]
	;
};

const initialState: Todo = {
    tasks: [
        {
            id: "233",
			date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
			title: "Complete University Management Project",
            description: "Define project requirement, analyze requirement, choose technology according to requirement.Focus on functional requirement",
			isComplete: false,
			priority: "HIGH"
		},
        {
            id: "245r33",
			date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
			title: "Start the project",
            description: "first took a pattern for maintain your project. Design database and more",
			isComplete: false,
			priority: "LOW"
		},
        {
            id: "9hdy2",
			date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
			title: "Take look on non functional requirement",
            description: "At the beginning you should non functional attribute like performance, security, usability, reliability, scalability, maintainability, portability",
			isComplete: false,
			priority: "MEDIUM"
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