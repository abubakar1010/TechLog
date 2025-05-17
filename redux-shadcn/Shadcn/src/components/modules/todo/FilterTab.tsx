import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch } from "@/redux/app/hooks";
import { filterTask } from "@/redux/features/todo/todoSlice";

export const FilterTab = () => {
	const dispatch = useAppDispatch()
	return (
		<div>
			<Tabs defaultValue="ALL" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger onClick={() => dispatch(filterTask("ALL"))} value="ALL">ALL</TabsTrigger>
					<TabsTrigger onClick={() => dispatch(filterTask("HIGH"))} value="HIGH">HIGH</TabsTrigger>
					<TabsTrigger onClick={() => dispatch(filterTask("MEDIUM"))} value="MEDIUM">MEDIUM</TabsTrigger>
					<TabsTrigger onClick={() => dispatch(filterTask("LOW"))} value="LOW">LOW</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
};
