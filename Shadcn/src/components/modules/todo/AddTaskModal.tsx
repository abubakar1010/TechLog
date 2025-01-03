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

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

export function AddTaskModal() {
	const form = useForm();

	// const {toast} = useToast()

	const onSubmit = (value: Record<string, unknown>) => {
		toast({
			title: "You submitted the following values:",
			description: (
			  <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
				<code className="text-white">{JSON.stringify(value, null, 2)}</code>
			  </pre>
			),
		  })
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
				<Button>Add Task</Button>
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
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
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
											This is your task prioroty
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
															format(
																field.value,
																"PPP"
															)
														) : (
															<span>
																Pick a deadline
															</span>
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
													disabled={(date) => date < new Date()
													}
													initialFocus
												/>
											</PopoverContent>
										</Popover>

										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter>
								<Button  type="submit">Save</Button>
							</DialogFooter>
						</form>
					</Form>
				</div>
			</DialogContent>
			
		</Dialog>
	);
}
