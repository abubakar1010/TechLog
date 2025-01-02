import { TodoCard } from "@/components/modules/todo/todo-card";
import { useAppSelector } from "@/redux/app/hooks";
import { selectTasks } from "@/redux/features/todo/todoSlice";

const Todos = () => {
    const tasks = useAppSelector(selectTasks)
    return (
        <div>
            <p>This is task page</p>
            <div className=" space-y-5">
                {
                    tasks.map( task => <TodoCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default Todos;