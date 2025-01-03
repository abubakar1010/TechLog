
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

import { FieldValues, SubmitHandler } from "react-hook-form";

import { toast } from "@/hooks/use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { selectTasks, updateTask } from "@/redux/features/todo/todoSlice";
import { TDraftTask, TTask } from "@/types";
import TaskModal from "./TaskModal";

type TPropsType = {id: string}
export function UpdateTaskModal({id}: TPropsType) {

    const tasks= useAppSelector(selectTasks)

    const task = tasks.find( task => task.id === id) as TTask


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
        const newValue = Object.fromEntries(
            Object.entries(value).filter(([, val]) => typeof val !== "undefined")
          ) as Record<string, Partial<TDraftTask>>;
        const taskData = {...task,...newValue, id}
        // console.log(taskData)
		dispatch(updateTask( taskData as TDraftTask & Pick<TTask, "isComplete" | "id">));
	};
	return (
			
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Update your task</DialogTitle>
					<DialogDescription>
						Set a new goal and make sure to save it.
					</DialogDescription>
				</DialogHeader>
				<div>
					<TaskModal onSubmit={onSubmit} task={task} />
				</div>
			</DialogContent>

	);
}
