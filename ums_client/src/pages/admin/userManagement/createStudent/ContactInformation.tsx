import { Divider } from "antd";
import { FormInput } from "../../../../components/ui/FormInput";

export const ContactInformation = () => {
	return (
		<>
			<Divider>Contact Information </Divider>
			<FormInput
				identifier="email"
				placeholder="Enter Email Address"
				type="text"
			/>
			<FormInput
				identifier="contactNo"
				placeholder="Enter Your Contact No"
				type="text"
			/>
			<FormInput
				identifier="emergencyContactNo"
				placeholder="Enter Emergency Contact No"
				type="text"
			/>
			<FormInput
				identifier="presentAddress"
				placeholder="Enter your present address"
				type="text"
			/>

			<FormInput
				identifier="permanentAddress"
				placeholder="Enter your permanent address"
				type="text"
			/>
		</>
	);
};
