import { AddTaskModal } from "@/components/modules/todo/AddTaskModal";
import { FilterTab } from "@/components/modules/todo/FilterTab";
import { TodoCard } from "@/components/modules/todo/todo-card";
import { useGetTasksQuery } from "@/redux/features/todo/todoApiSlice";
import {TTask} from '@/types/index'
const Todos = () => {
	// const tasks = useAppSelector(selectTasks);
	const {data, isLoading} = useGetTasksQuery(null)

	// console.log(data.tasks)
	if(isLoading) return <p>Loading...</p>

	const tasks = data?.tasks || []


	return (
		<div>
			<div className="flex gap-4 justify-end items-center">
				<FilterTab />
				<AddTaskModal />
			</div>
			<div className=" space-y-5 my-8">
				{tasks.map((task: TTask) => (
					<TodoCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};

export default Todos;
