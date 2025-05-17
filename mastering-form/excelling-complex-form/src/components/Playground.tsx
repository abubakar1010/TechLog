import { z } from "zod";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { GenericForm, TGenericFormRef } from "./form";
import { Textarea } from "./ui/textarea";

const ZFormSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be at most 50 characters"),
	email: z.string().email(),
	age: z.coerce.number().min(19, { message: "Age must be at least 19" }),
	content: z
		.string()
		.min(5, { message: "Content must be at least 5 characters" }),
	skills: z.array(z.string()),
	gender: z.enum(["male", "female", "other"]),
});

const genderOptions = [
	{ label: "Male", value: "male" },
	{ label: "Female", value: "female" },
	{ label: "Other", value: "other" },
];

type TForm = z.infer<typeof ZFormSchema>;

const initialValues: TForm = {
	name: "",
	email: "",
	age: 0,
	content: "",
	skills: ["REACT", "TYPESCRIPT", "NODEJS", "REACT NATIVE", "REDUX", "GRAPHQL"],
	gender: "male",
};

export const Playground = () => {
	const formRef = useRef<TGenericFormRef<TForm>>(null);
	const [values, setValues] = useState<TForm | null | undefined>(null);

	const handleReset = (value: Partial<TForm>) => {
		formRef.current?.reset(value);
	};

	return (
		<div>
			<h1>This is the Playground page</h1>
			<GenericForm
				initialValues={initialValues}
				schema={ZFormSchema}
				onSubmit={(values) => {
					alert(JSON.stringify(values));
					console.log(values);
				}}
				ref={formRef}
			>
				<div className=" space-y-7 my-8">
					<GenericForm.Input<TForm> name="name" label="Name" />
					<GenericForm.Input<TForm> name="email" label="Email" type="email" />
					<GenericForm.Input<TForm> name="age" label="Age" type="number" />
					<GenericForm.Select<TForm>
						name="gender"
						options={genderOptions}
						label="gender"
					/>
					<Skill />
					<div>
						<FormField
							control={formRef.current?.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Content</FormLabel>
									<Textarea {...field} placeholder="Enter your content" />
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className=" flex justify-end gap-6">
						<Button
							type="button"
							onClick={() =>
								handleReset({
									name: "rayhan",
									content: "Hey dude! How are you doing",
									age: 30,
									email: "rayhan@example.com",
								})
							}
							className="cursor-pointer"
						>
							Fill Input field
						</Button>
						<GenericForm.Reset label="Reset" />
						<Button type="submit" className="cursor-pointer">
							Submit
						</Button>
						<Button
							type="button"
							onClick={() => {
								console.log(formRef.current?.getValues());
								setValues(formRef.current?.getValues());
							}}
						>
							Show Values
						</Button>
					</div>
				</div>
			</GenericForm>

			<div>{values && JSON.stringify(values, null, 2)}</div>
		</div>
	);
};

const Skill = () => {
	return (
		<>
			<GenericForm.ArrayInput name="skills">
				{({ fields, append, remove }) => {
					return (
						<div>
							{/* {value.fields.map((field) => (
										<p key={field.id}>{field.skill}</p>
									))} */}
							<div className=" space-y-6 w-full">
								{fields.map((field, index) => (
									<div
										key={field.id}
										className=" flex gap-2 items-center w-full"
									>
										<GenericForm.Input<TForm>
											name={`skills.${index}`}
											label={`Skills - ${index}`}
										/>
										<Button
											type="button"
											onClick={() => remove(index)}
											className="cursor-pointer"
										>
											Remove Skill
										</Button>
									</div>
								))}
							</div>
							<Button
								type="button"
								onClick={() => append("")}
								className="cursor-pointer my-2"
							>
								Add Another Skill
							</Button>
						</div>
					);
				}}
			</GenericForm.ArrayInput>
		</>
	);
};
