"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
	name: z
		.string({ required_error: "Please enter a valid name" })
		.min(4, "name must be at least 4 characters"),
	email: z.string().email(),
	age: z.coerce.number().min(30, "age cannot be less than 30"),
});

export function ShadcnForm() {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: { name: "", email: "", age: 0 },
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		alert(JSON.stringify(values));
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Enter your name" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Enter your email" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display email.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="age"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Age</FormLabel>
							<FormControl>
								<Input placeholder="Enter your age" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				
				<Button type="submit" className="cursor-pointer">
					Submit
				</Button>
			</form>
		</Form>
	);
}
