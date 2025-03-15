import { useForm } from "react-hook-form";
import { cn } from "../lib/utils";

export type TFormData = {
	name: string;
	email: string;
	age: number;
};

export const SimpleForm = () => {
	// const initialState = {
	// 	name: "",
	// 	email: "",
	// 	age: 0,
	// };

	const form = useForm<TFormData>();

	const onSubmit = (data: TFormData) => {
		alert(JSON.stringify(data));
	};
	const { errors, touchedFields } = form.formState;

	//console.log(dirtyFields.name);
	return (
		<div>
			<h1 className="text-3xl font-bold my-4 border-b-4 w-fit pb-4 ">
				Simple Form
			</h1>
			<div className=" w-full mx-auto  shadow-2xl px-12 py-8 my-12">
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className=" flex flex-col gap-3 ">
						<label htmlFor="name">Your Name</label>
						<input
							{...form.register("name", { required: "Please Enter Your Name" })}
							type="text"
							name="name"
							id="name"
							placeholder="please enter your name"
							className={cn(
								"outline-0 border border-gray-900/10 focus:border-blue-600 px-4 py-2 rounded-md",
								(errors.name || touchedFields.name) && "border-red-600 border-2"
							)}
						/>
						{(errors.name || touchedFields.name) && (
							<p className="text-red-600 font-bold">
								{errors?.name?.message || "Name is required"}
							</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
