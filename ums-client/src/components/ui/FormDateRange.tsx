import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

export const FormDateRange = ({
	identifier,
	placeholder,
}: {
	identifier: string;
	placeholder: [string, string];
}) => {
	const { RangePicker } = DatePicker;
	return (
		<div>
			<Controller
				name={identifier}
				render={({ field, fieldState: { error } }) => (
					<Form.Item>
						<RangePicker
							style={{ width: "100%" }}
							placeholder={placeholder}
							{...field}
							picker="month"
						/>
						{error && <small style={{ color: "red" }}>{error.message}</small>}
					</Form.Item>
				)}
			/>
		</div>
	);
};
