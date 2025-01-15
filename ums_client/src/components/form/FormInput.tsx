import { Input } from "antd";
import { Controller } from "react-hook-form";

export const FormInput = ({
	type,
	identifier,
	placeholder,
}: {
	type: string;
	identifier: string;
	placeholder: string;
}) => {
	return (
		<div style={{ marginBottom: "10px"}}>
			<label  htmlFor={identifier}>{placeholder}</label>
			<Controller
				name={identifier}
				render={({ field }) => (
					<Input
						{...field}
                        style={{ margin: "7px"}}
						type={type}
						placeholder={placeholder}
						id={identifier}
					/>
				)}
			/>
		</div>
	);
};
