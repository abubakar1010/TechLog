// /* eslint-disable react/prop-types */
import { useState } from "react";
import { BaseButton } from "./app/ui/buttons/BaseButton";
import { FormContainer } from "./app/ui/form/FormContainer";
import { TextGroup } from "./app/ui/form/TextGroup";
import { TextInput } from "./app/ui/form/TextInputs";
import { Text } from "./app/ui/Text/Text";

const initialValue = {
	name: "",
	email: "",
};

function App() {
	const [value, setValue] = useState({ ...initialValue });

	const handleChange = (e) => {
		setValue((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			{/* <h1>Styled Component</h1>
			<BaseButton girl={false} err={true}>
				I am From Styled Components
			</BaseButton>
			<PrimaryButton right={false}>Primary Button</PrimaryButton> */}
			<form>
				<FormContainer>
					<TextGroup
						name="name"
						placeholder="Osman"
						handleChange={handleChange}
						value={value.name}
						label="Enter your name"
					/>
					<TextGroup
						name="name"
						placeholder="Osman@gmail.com"
						handleChange={handleChange}
						value={value.email}
						label="Enter your email"
						error={"Please enter a valid email"}
					/>
				</FormContainer>
			</form>
		</>
	);
}

export default App;
