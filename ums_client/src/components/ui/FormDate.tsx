import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

export const FormDate = ({
	identifier,
	placeholder,
}: {
	identifier: string;
	placeholder: string;
}) => {
	const dateFormat = "YYYY/MM/DD";
	return (
		<div>
			<Controller
				name={identifier}
				render={({ field, fieldState: { error } }) => (
					<Form.Item>
						<DatePicker
							
							format={dateFormat}
							style={{ width: "100%" }}
							placeholder={placeholder}
							{...field}
						/>
						{error && <small style={{ color: "red" }}>{error.message}</small>}
					</Form.Item>
				)}
			/>
		</div>
	);
};
