import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { TTask } from "@/types";

// type FormValue = Pick<TTask, "title" | "description" | "priority"> & {deadline: string}

export function AddTaskModal() {
	const form = useForm();

	const onSubmit = (value: Record<string, unknown>) => {
		console.log(
			value.deadline,
			value.description,
			value.priority,
			value.title
		);
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button >Add Task</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add a new task</DialogTitle>
					<DialogDescription>
						Set a new goal and make sure to save it.
					</DialogDescription>
				</DialogHeader>
				<div className="">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input
												placeholder="Task Title"
												{...field}
												value={field.value ?? ""}
											/>
										</FormControl>
										<FormDescription className=" sr-only">
											This is your Task title.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Task Description"
												{...field}
												value={field.value ?? ""}
											/>
										</FormControl>
										<FormDescription className=" sr-only">
											This is your public display name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="priority"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Priority</FormLabel>
										<FormControl>
											<Select  onValueChange={field.onChange} defaultValue={"MEDIUM"}  >
												<SelectTrigger className="w-[180px]">
													<SelectValue 
                                                    
                                                    placeholder="Select task priority" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="HIGH">
														High
													</SelectItem>
													<SelectItem value="MEDIUM">
														Medium
													</SelectItem>
													<SelectItem value="LOW">
														Low
													</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormDescription className=" sr-only">
											This is your public display name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="deadline"
								render={({ field }) => (
									<FormItem>
										<FormLabel>DeadLine</FormLabel>
										<FormControl>
											<Input
												placeholder="How much day you want to take"
												{...field}
												value={field.value ?? ""}
											/>
										</FormControl>
										<FormDescription className=" sr-only">
											This is your public display name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter>
								<Button type="submit">Save</Button>
							</DialogFooter>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
}
