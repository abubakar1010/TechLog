import { Divider } from "antd";
import { FormInput } from "../../../../../components/ui/FormInput";

export const LocalGuardianInformation = () => {
	return (
		<>
			<Divider>Local Guardian Information </Divider>
			<FormInput
				identifier="localGuardian.name"
				placeholder="Enter Your Guardian Name"
				type="text"
			/>
			<FormInput
				identifier="localGuardian.occupation"
				placeholder="Enter Your Guardian Occupation"
				type="text"
			/>
			<FormInput
				identifier="localGuardian.contactNo"
				placeholder="Enter Your  Guardian Contact No"
				type="text"
			/>
			<FormInput
				identifier="localGuardian.address"
				placeholder="Enter Your Guardian Address"
				type="text"
			/>
		</>
	);
};
