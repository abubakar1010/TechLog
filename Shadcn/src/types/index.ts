export type TTask = {
    id: string;
    date: Date;
    title: string;
    description: string;
    isComplete: boolean;
    priority: "HIGH" | "LOW" | "MEDIUM";
}