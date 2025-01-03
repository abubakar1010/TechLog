import { RootState } from "@/redux/app/store";
import { TDraftTask, TTask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
	tasks: TTask[];
};

const initialState: Todo = {
	tasks: [
		{
			id: nanoid(),
			deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
			title: "Complete University Management Project",
			description:
				"Define project requirement, analyze requirement, choose technology according to requirement.Focus on functional requirement",
			isComplete: false,
			priority: "HIGH",
		},
		{
			id: nanoid(),
			deadline: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
			title: "Start the project",
			description:
				"first took a pattern for maintain your project. Design database and more",
			isComplete: false,
			priority: "LOW",
		},
		{
			id: nanoid(),
			deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
			title: "Take look on non functional requirement",
			description:
				"At the beginning you should non functional attribute like performance, security, usability, reliability, scalability, maintainability, portability",
			isComplete: false,
			priority: "MEDIUM",
		},
	],
};

const createTask = (actionData: TDraftTask): TTask => ({
	...actionData,
	id: nanoid(),
	isComplete: true,
});

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		// add a new task

		addTask(state, action: PayloadAction<TDraftTask>) {
			const taskData: TTask = createTask(action.payload);

			state.tasks.push(taskData);
		},
		isCompleteToggle(state, action: PayloadAction<string>) {
			return state.tasks.forEach((item) =>
				item.id === action.payload
					? (item.isComplete = !item.isComplete)
					: item
			);
		},
	},
});

export const { addTask, isCompleteToggle } = todoSlice.actions;

export const selectTasks = (state: RootState) => state.todos.tasks;

const todoReducer = todoSlice.reducer;

export default todoReducer;
