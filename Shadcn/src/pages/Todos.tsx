import { AddTaskModal } from "@/components/modules/todo/AddTaskModal";
import { FilterTab } from "@/components/modules/todo/FilterTab";
import { TodoCard } from "@/components/modules/todo/todo-card";
import { useAppSelector } from "@/redux/app/hooks";
import { selectTasks } from "@/redux/features/todo/todoSlice";

const Todos = () => {
	const tasks = useAppSelector(selectTasks);
	return (
		<div>
			<div className="flex gap-4 justify-end items-center">
				<FilterTab />
				<AddTaskModal />
			</div>
			<div className=" space-y-5 my-8">
				{tasks.map((task) => (
					<TodoCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};

export default Todos;
