import { Divider, Form, Input } from "antd";
import { FormInput } from "../../../../../components/ui/FormInput";
import { FormSelect } from "../../../../../components/ui/FormSelect";
import { FormDate } from "../../../../../components/ui/FormDate";
import { Controller } from "react-hook-form";

export const PersonalInformation = () => {
	return (
		<>
			<Divider>Personal Information</Divider>
			<div>
				<FormInput
					identifier="name.firstName"
					placeholder="Enter Your First Name"
					type="text"
				/>
				<FormInput
					identifier="name.middleName"
					placeholder="Enter Your Middle Name"
					type="text"
				/>

				<FormInput
					identifier="name.lastName"
					placeholder="Enter Your First Name"
					type="text"
				/>
				<Controller
					name="image"
					render={({ field, fieldState: { error } }) => (
						<Form.Item label={"Upload a image"}>
							<Input
								{...field}
								size="large"
								type="file"
								placeholder={"Upload a image"}
							/>
							{error && <small style={{ color: "red" }}>{error.message}</small>}
						</Form.Item>
					)}
				/>
				<FormSelect
					identifier="gender"
					placeholder="Enter Your First Name"
					options={[
						{ value: "male", label: "Male" },
						{ value: "female", label: "Female" },
					]}
				/>
				<FormDate
					identifier="dateOfBirth"
					placeholder="Enter Your Date of birth"
				/>
				<FormSelect
					identifier="bloogGroup"
					placeholder="Enter Your Blood Group"
					options={[
						{ label: "A+", value: "A+" },
						{ label: "A-", value: "A-" },
						{ label: "O+", value: "O+" },
						{ label: "O-", value: "O-" },
						{ label: "AB+", value: "AB+" },
						{ label: "AB-", value: "AB-" },
					]}
				/>
			</div>
		</>
	);
};
