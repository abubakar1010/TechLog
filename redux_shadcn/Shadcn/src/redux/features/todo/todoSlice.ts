import { RootState } from "@/redux/app/store";
import { TDraftTask, TFilter, TTask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

type Todo = {
	tasks: TTask[];
	filter: TFilter;
};

const initialState: Todo = {
	tasks: [
		{
			id: nanoid(),
			dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
			title: "Complete University Management Project",
			description:
				"Define project requirement, analyze requirement, choose technology according to requirement.Focus on functional requirement",
			isComplete: false,
			priority: "HIGH",
		},
		{
			id: nanoid(),
			dueDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
			title: "Start the project",
			description:
				"first took a pattern for maintain your project. Design database and more",
			isComplete: false,
			priority: "LOW",
		},
		{
			id: nanoid(),
			dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
			title: "Take look on non functional requirement",
			description:
				"At the beginning you should non functional attribute like performance, security, usability, reliability, scalability, maintainability, portability",
			isComplete: false,
			priority: "MEDIUM",
		},
	],
	filter: "ALL",
};

const createTask = (actionData: TDraftTask): TTask => ({
	...actionData,
	id: nanoid(),
	isComplete: false,
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
			state.tasks.forEach((task) =>
				task.id === action.payload
					? (task.isComplete = !task.isComplete)
					: task
			);
		},
		deleteTask(state, action: PayloadAction<string>) {
			state.tasks = state.tasks.filter(
				(task) => task.id !== action.payload
			);
		},

		// mutation issue

		// updateTask(state, action: PayloadAction<TDraftTask & Pick<TTask, "id" | "isComplete">>) {
		// 	state.tasks.forEach((task) =>
		// 		task.id === action.payload.id
		// 			? (task = {...action.payload})
		// 			: task
		// 	);
		// },

		updateTask(
			state,
			action: PayloadAction<TDraftTask & Pick<TTask, "id" | "isComplete">>
		) {
			state.tasks = state.tasks.map((task) =>
				task.id === action.payload.id ? { ...action.payload } : task
			);
		},
		filterTask(state, action: PayloadAction<TFilter>) {
			state.filter = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(removeUser, (state, action) => {
			state.tasks.forEach((task) =>
				task.member === action.payload ? (task.member = null) : task
			);
		});
	},
});

export const { addTask, isCompleteToggle, deleteTask, updateTask, filterTask } =
	todoSlice.actions;

export const selectTasks = (state: RootState) => {
	if (state.todos.filter === "ALL") return state.todos.tasks;
	return state.todos.tasks.filter(
		(task) => task.priority === state.todos.filter
	);
};

const todoReducer = todoSlice.reducer;

export default todoReducer;
