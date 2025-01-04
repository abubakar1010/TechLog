export type TTask = {
    id: string;
    deadline: Date;
    title: string;
    description: string;
    isComplete: boolean;
    priority: "HIGH" | "LOW" | "MEDIUM";
}

export type TDraftTask = Omit<TTask, "id" | "isComplete">


export type TFilter = "ALL" | TTask["priority"]



export type TUser = {
    id: string;
    name: string;
}