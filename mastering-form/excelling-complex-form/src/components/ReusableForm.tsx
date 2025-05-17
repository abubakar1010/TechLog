import { useForm } from "react-hook-form";
import { InputField } from "./form/InputField";

export type TFormData = {
	name: string;
	email: string;
	age: number;
};

export const ReusableForm = () => {
	// const initialState = {
	// 	name: "",
	// 	email: "",
	// 	age: 0,
	// };

	const form = useForm<TFormData>();

	const onSubmit = (data: TFormData) => {
		alert(JSON.stringify(data));
	};
	const { errors, dirtyFields } = form.formState;

	console.log(errors);

	//console.log(dirtyFields.name);
	return (
		<div>
			<h1 className="text-3xl font-bold my-4 border-b-4 w-fit pb-4 ">
				Simple Form
			</h1>
			<div className=" w-full mx-auto  shadow-2xl px-12 py-8 my-12">
				<form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
					<InputField
						name="name"
						label="Enter Your Name"
						placeholder="Enter your name"
						type="text"
						register={form.register}
						hasTouched={false}
						hasError={!!errors.name}
						hasDirty={!!dirtyFields.name}
						errorMessage={errors?.name?.message}
						validators={{
							required: "Please enter a valid name",
							minLength: {
								value: 3,
								message: "name must be at least 3 characters",
							},
						}}
					/>
					<InputField
						name="email"
						label="Enter Your Email"
						placeholder="Enter your email"
						type="email"
						register={form.register}
						hasTouched={false}
						hasError={!!errors.email}
						hasDirty={!!dirtyFields.email}
						errorMessage={errors?.email?.message}
						validators={{
							required: "Please enter a valid email address",
							pattern: {
								value: "[^@/s]+@[^@/s]+/.[^@/s]+",
								message: "Please enter a valid email address",
							},
						}}
					/>
					<InputField
						name="age"
						label="Enter Your age"
						placeholder="Enter your age"
						type="number"
						register={form.register}
						hasTouched={false}
						hasError={!!errors.age}
						hasDirty={!!dirtyFields.age}
						errorMessage={errors?.age?.message}
						validators={{
							required: "Please enter a valid age",
							min: {
								value: 10,
								message: "age must be greater than 10",
							},
						}}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};
