import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	// FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const FormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name at least 2 characters" })
		.max(50, { message: "Name at most 50 characters" }),
	email: z.string().email(),
	secondaryEmail: z.union([
		z.string().email({ message: "Invalid email address" }),
		z.string().optional(),
	]),
	title: z
		.string()
		.min(10, { message: "Title must be at least 10 characters" })
		.max(100, { message: "Title must be at most 100 characters" }),
	gender: z.enum(["male", "female"], {
		message: "Please select at least one gender",
	}),
	// age: z.number().int().min(18).max(150),
	skills: z
		.array(
			z.object({
				skill: z.string(),
			})
		)
		.min(1, { message: "Please select at least one skills" }),

	// bio: z.string().min(50, { message: "Bio must be at least 50 characters" }),
	// location: z
	// 	.string()
	// 	.min(5, { message: "Location must be at least 5 characters" }),
	// interests: z
	// 	.array(z.string())
	// 	.min(1, { message: "Please select at least one interest" }),
	// hobbies: z
	// 	.array(z.string())
	// 	.min(1, { message: "Please select at least one hobby" }),
	// languages: z
	// 	.array(z.string())
	// 	.min(1, { message: "Please select at least one language" }),
});

type TFormData = z.infer<typeof FormSchema>;
type TFormProps = {
	initialValue?: TFormData;
};
export const SemiComplexForm = ({ initialValue }: TFormProps) => {
	const form = useForm({
		resolver: zodResolver(FormSchema),
		defaultValues: initialValue
			? initialValue
			: {
					name: "",
					email: "",
					secondaryEmail: "",
					title: "",
					skills: [],
					gender: "male",
					// age: 0,
					// bio: "",
					// location: "",
					// interests: [],
					// hobbies: [],
					// languages: [],
			  },
	});

	const skillFieldArray = useFieldArray({
		control: form.control,
		name: "skills",
	});

	console.log(skillFieldArray);

	const onSubmit = (data: TFormData) => {
		console.log(data);
	};

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className=" grid grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="Enter your" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder="Enter your title" {...field} />
									</FormControl>
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
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="secondaryEmail"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Secondary Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your Secondary Email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="gender"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Gender</FormLabel>
									<FormControl>
										<RadioGroup
											defaultValue={field.value}
											onValueChange={field.onChange}
										>
											<div className="flex items-center space-x-2">
												<RadioGroupItem value="male" id="r1" />
												<Label htmlFor="r1">Male</Label>
											</div>
											<div className="flex items-center space-x-2">
												<RadioGroupItem value="female" id="r2" />
												<Label htmlFor="r2">Female</Label>
											</div>
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button type="submit" className=" cursor-pointer my-4">
						Submit
					</Button>
				</form>
			</Form>
		</>
	);
};
