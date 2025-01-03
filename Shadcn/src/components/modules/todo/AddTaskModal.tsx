import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { FieldValues, SubmitHandler } from "react-hook-form";

import { toast } from "@/hooks/use-toast";
import { useAppDispatch } from "@/redux/app/hooks";
import { addTask } from "@/redux/features/todo/todoSlice";
import { TDraftTask } from "@/types";
import TaskModal from "./TaskModal";

export function AddTaskModal() {
	// const {toast} = useToast()

	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<FieldValues> = (value) => {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(value, null, 2)}
					</code>
				</pre>
			),
		});

		dispatch(addTask(value as TDraftTask));
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Add Task</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add a new task</DialogTitle>
					<DialogDescription>
						Set a new goal and make sure to save it.
					</DialogDescription>
				</DialogHeader>
				<div>
					<TaskModal onSubmit={onSubmit} />
				</div>
			</DialogContent>
		</Dialog>
	);
}
