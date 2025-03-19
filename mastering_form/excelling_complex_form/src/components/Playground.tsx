import { z } from "zod";
import { GenericForm, TGenericFormRef } from "./form/GenericForm";
import { Button } from "./ui/button";
import { TextFields } from "./form/TextFields";
import { useRef, useState } from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { ArrayFiled } from "./form/ArrayField";

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
});

type TForm = z.infer<typeof ZFormSchema>;

const initialValues: TForm = {
	name: "",
	email: "",
	age: 0,
	content: "",
	skills: ["REACT", "TYPESCRIPT", "NODEJS", "REACT NATIVE", "REDUX", "GRAPHQL"],
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
					console.log(values);
				}}
				ref={formRef}
			>
				<div className=" space-y-7 my-8">
					<TextFields<TForm> name="name" label="Name" />
					<TextFields<TForm> name="email" label="Email" type="email" />
					<TextFields<TForm> name="age" label="Age" type="number" />
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
			<ArrayFiled name="skills">
				{({ fields, append, remove }) => {
					console.log(fields);
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
										<TextFields<TForm>
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
			</ArrayFiled>
		</>
	);
};
