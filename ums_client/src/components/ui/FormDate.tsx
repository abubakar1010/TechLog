import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

export const FormDate = ({
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
				render={({ field }) => (
					<Form.Item>
						<RangePicker style={{width: "100%"}} placeholder={placeholder} {...field} picker="month" />
					</Form.Item>
				)}
			/>
		</div>
	);
};
