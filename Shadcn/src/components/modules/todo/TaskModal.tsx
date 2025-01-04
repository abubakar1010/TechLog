import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DialogFooter } from "@/components/ui/dialog";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TTask, TUser } from "@/types";
import { useAppSelector } from "@/redux/app/hooks";
import { selectUser } from "@/redux/features/user/userSlice";

const TaskModal = ({
	onSubmit,
	task,
}: {
	onSubmit: SubmitHandler<FieldValues>;
	task: TTask | null;
}) => {
	const form = useForm();

	const users = useAppSelector(selectUser()) as TUser[];

	return (
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
										value={field.value ?? task?.title}
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
										value={field.value ?? task?.description}
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
									<Select
										onValueChange={field.onChange}
										value={field.value ?? task?.priority}
									>
										<SelectTrigger className="">
											<SelectValue placeholder="Select task priority" />
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
									This is your task priority
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="deadline"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>DeadLine</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={"outline"}
												className={cn(
													" pl-3 text-left font-normal",
													!field.value &&
														"text-muted-foreground"
												)}
											>
												{field.value ? (
													format(field.value, "PPP")
												) : task?.deadline ? (
													format(
														task?.deadline,
														"PPPP"
													)
												) : (
													<span>Pick a deadline</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent
										className="w-auto p-0"
										align="start"
									>
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date < new Date()
											}
											initialFocus
										/>
									</PopoverContent>
								</Popover>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="user"
						render={({ field }) => (
							<FormItem>
								<FormLabel>User</FormLabel>
								<FormControl>
									<Select
										onValueChange={field.onChange}
										value={field.value ?? task?.priority}
									>
										<SelectTrigger className="">
											<SelectValue placeholder="Assigned task to user" />
										</SelectTrigger>
										<SelectContent>
											{users.map((user) => (
												<>
													<SelectItem value={user.id}>
														{user.name}
													</SelectItem>
												</>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormDescription className=" sr-only">
									Assigned task to user
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
	);
};

export default TaskModal;
