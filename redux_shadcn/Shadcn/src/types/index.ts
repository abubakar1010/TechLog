export type TTask = {
	id: string;
	dueDate: Date;
	title: string;
	description: string;
	isComplete: boolean;
	priority: "HIGH" | "LOW" | "MEDIUM";
	member?: string | null;
};

export type TDraftTask = Omit<TTask, "id" | "isComplete">;

export type TFilter = "ALL" | TTask["priority"];

export type TUser = {
	id: string;
	name: string;
};
