/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { TFormData } from "./SimpleForm";
import { cn } from "../lib/utils";

type TProps = {
	label: string;
	type: HTMLInputTypeAttribute;
	name: Path<TFormData>;
	placeholder: string;
	validators: Record<string, any>;
	register: UseFormRegister<TFormData>;
	hasError: boolean;
	errorMessage?: string;
	hasTouched: boolean;
	hasDirty: boolean;
	classname?: string;
};
export const InputField = ({
	label,
	type,
	name,
	placeholder,
	validators,
	register,
	hasError,
	errorMessage,
	hasTouched,
	hasDirty,
	classname,
}: TProps) => {
	//console.log("errorMessage", errorMessage)
	return (
		<div className=" flex flex-col gap-3 ">
			<label className="text-lg font-medium text-gray-700" htmlFor={name}>
				{label}
			</label>
			<input
				{...register(name, validators)}
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				className={cn(
					"outline-0 border border-gray-900/10 focus:border-blue-600 px-4 py-2 rounded-md",
					(hasError || hasTouched || hasDirty) && "border-red-600 border-2",
					classname
				)}
			/>
			{(hasError || hasTouched || hasDirty) && (
				<p className="text-red-600 font-bold">{errorMessage}</p>
			)}
		</div>
	);
};
