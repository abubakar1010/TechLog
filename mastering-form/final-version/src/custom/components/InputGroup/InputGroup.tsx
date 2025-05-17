import type { ChangeEventHandler, FocusEventHandler } from "react";
import { cn } from "../../../utils/cn";

type TProps = {
	type: string;
	name: string;
	id: string;
	placeholder: string;
	value: string;
	label: string;
	error?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const InputGroup = ({
	type,
	name,
	id,
	placeholder,
	label,
	value,
	error,
	onChange,
	onBlur,
	onFocus,
}: TProps) => {
	return (
		<div className=" bg-white p-4 rounded-md shadow-xl text-black flex flex-col gap-2 w-3xl mx-auto">
			<label className=" text-xl  text-gray-700" htmlFor={id}>
				{label}
			</label>
			<input
				className={cn("py-3 px-2 text-xl outline-none border-gray-500 rounded-md border",{
					"border-red-600": error
				})}
				type={type}
				name={name}
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
			{
				error && <p className=" text-2xl font-medium text-red-500">{error}</p>
			}
		</div>
	);
};
