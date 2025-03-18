import { z } from "zod";
import { GenericForm, TGenericFormRef } from "./form/GenericForm";
import { Button } from "./ui/button";
import { TextFields } from "./form/TextFields";
import { useRef, useState } from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
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
});

type TForm = z.infer<typeof ZFormSchema>;

const initialValues: TForm = {
	name: "",
	email: "",
	age: 0,
	content: "",
};

export const Playground = () => {
	const formRef = useRef<TGenericFormRef<TForm>>(null);
	const [values, setValues] = useState<TForm | null | undefined>(null)

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
					<TextFields<TForm> name="name" label="Name" />
					<TextFields<TForm> name="email" label="Email" type="email" />
					<TextFields<TForm> name="age" label="Age" type="number" />
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
							Reset
						</Button>
						<Button type="submit" className="cursor-pointer">
							Submit
						</Button>
						<Button type="button" onClick={() => {
							console.log(formRef.current?.getValues())
							setValues(formRef.current?.getValues())
						}}>
                            Show Values
                        </Button>
					</div>
				</div>
			</GenericForm>

			<div>
				{
					values && JSON.stringify(values, null, 2)
				}
			</div>
		</div>
	);
};
