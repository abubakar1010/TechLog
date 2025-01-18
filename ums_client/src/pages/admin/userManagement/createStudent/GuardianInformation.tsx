import { Divider } from "antd";
import { FormInput } from "../../../../components/ui/FormInput";

export const GuardianInformation = () => {
	return (
		<>
			<Divider>Guardian Information </Divider>
			<FormInput
				identifier="guardian.fatherName"
				placeholder="Enter Your father Name"
				type="text"
			/>
			<FormInput
				identifier="guardian.fatherOccupation"
				placeholder="Enter Your father Occupation"
				type="text"
			/>
			<FormInput
				identifier="guardian.fatherContactNo"
				placeholder="Enter Your  father Contact No"
				type="text"
			/>
			<FormInput
				identifier="guardian.motherName"
				placeholder="Enter Your mother Name"
				type="text"
			/>
			<FormInput
				identifier="guardian.motherOccupation"
				placeholder="Enter Your mother Occupation"
				type="text"
			/>
			<FormInput
				identifier="guardian.motherContactNo"
				placeholder="Enter Your  mother Contact No"
				type="text"
			/>
		</>
	);
};
