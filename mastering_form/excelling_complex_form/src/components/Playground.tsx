import { z } from "zod";
import { GenericForm } from "./form/GenericForm";
import { Button } from "./ui/button";
import { TextFields } from "./form/TextFields";

const ZFormSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be at most 50 characters"),
	email: z.string().email(),
	age: z.coerce.number().min(19, { message: "Age must be at least 19" }),
});

type TForm = z.infer<typeof ZFormSchema>;

const initialValues: TForm = {
	name: "",
	email: "",
	age: 0,
};

export const Playground = () => {
	return (
		<div>
			<h1>This is the Playground page</h1>
			<GenericForm
				initialValues={initialValues}
				schema={ZFormSchema}
				onSubmit={(values) => {
					alert("form submitted");
					console.log(values);
				}}
			>
				<div className=" space-y-7 my-8">
					<TextFields<TForm> name="name" label="Name" />
					<TextFields<TForm> name="email" label="Email" type="email" />
					<TextFields<TForm> name="age" label="Age" type="number" />
					<Button type="submit" className="cursor-pointer">
						Submit
					</Button>
				</div>
			</GenericForm>
		</div>
	);
};
