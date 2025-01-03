import { Trash2, Calendar, EditIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { TTask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/app/hooks";
import { deleteTask, isCompleteToggle } from "@/redux/features/todo/todoSlice";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { UpdateTaskModal } from "./updateTaskModal";

type TProps = {
	task: TTask;
};

export function TodoCard({ task }: TProps) {
	const dispatch = useAppDispatch();
	return (
		<Card className="w-full">
			<CardContent className="pt-8 pb-4 px-6">
				<div className="relative">
					<div
						className={cn(
							"absolute -top-6 left-0 w-3 h-3 rounded-full",
							{
								"bg-red-500": task.priority === "HIGH",
								"bg-blue-500": task.priority === "MEDIUM",
								"bg-yellow-500": task.priority === "LOW",
							}
						)}
					/>
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="task"
								checked={task.isComplete}
								onCheckedChange={() =>
									dispatch(isCompleteToggle(task.id))
								}
							/>
							<label
								htmlFor="task"
								className={`font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
									task.isComplete
										? "line-through text-gray-500"
										: ""
								}`}
							>
								{task.title}
							</label>
						</div>
						<p className="text-sm text-gray-500">
							{task.description}
						</p>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between items-center px-6 py-4 ">
				<div className="flex items-center text-sm ">
					<Calendar className="mr-2 h-4 w-4" />
					<span>Deadline: {task.deadline.toDateString()}</span>
				</div>
				<div className=" space-x-4">
					<Dialog>
          <DialogTrigger asChild>
						<Button
							variant="outline"
							className=" bg-blue-500 text-white"
							size="icon"
						>
							<EditIcon className="h-4 w-4" />
						</Button>
					</DialogTrigger>
          <UpdateTaskModal id={task.id} />
          </Dialog>

					<Button
						onClick={() => dispatch(deleteTask(task.id))}
						variant="destructive"
						size="icon"
					>
						<Trash2 className="h-4 w-4" />
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
