import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
export const FormSelect = ({ identifier, options, placeholder }: { identifier: string, options: {value: string; label: string}[], placeholder: string }) => {
	return (
		<div>
			<Controller
				name={identifier}
				render={({ field, fieldState: {error} }) => (
					<Form.Item label={identifier}>
						<Select
							{...field}
							placeholder={placeholder}
							style={{ width: "100%" }}
							options={options}
							size="large"
						/>
						{error && <small style={{color: "red"}}>{error.message}</small>}
					</Form.Item>
				)}
			/>
		</div>
	);
};
