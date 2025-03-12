import { useState } from "react";
import { useForm } from "react-hook-form";

export const App = () => {
	const form = useForm();
	const onsubmit = (formData) => {
		console.log(formData);
	};
  console.log("rendered")
	return (
		<div className=" text-4xl font-extrabold flex justify-center items-center border-amber-500 border-4 rounded px-4 py-12 mx-24 my-40">
			<h1 role="alert">Reach Hook Form</h1>
			<form action="" onSubmit={form.handleSubmit(onsubmit)}>
				<input type="text" {...form.register("name")} />
			</form>
		</div>
	);
};
