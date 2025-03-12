// /* eslint-disable react/prop-types */
import { useState } from "react";
// import { BaseButton } from "./app/ui/buttons/BaseButton";
import { FormContainer } from "./app/ui/form/FormContainer";
import { TextGroup } from "./app/components/Form/TextGroup";
import { BaseButton } from "./app/ui/buttons/BaseButton";
// import { TextInput } from "./app/ui/form/TextInputs";
// import { Text } from "./app/ui/Text/Text";

const initialValue = {
	name: "",
	email: "",
};

function App() {
	const [value, setValue] = useState({ ...initialValue });
	const [errors, setErrors] = useState({ ...initialValue });
	const [focuses, setFocuses] = useState({
		name: false,
		email: false,
	});

	const handleChange = (e) => {
		setValue((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));

		const {error} = checkValidation({})
	};

	const checkValidation = (values) => {
		const newError = {};
		const { name, email } = values;

		if (!name) {
			newError.name = "name is not valid";
		}
		if (!email) {
			newError.email = "email is not valid";
		}
		const isValid = Object.keys(newError).length === 0;
		// console.log(Object.keys(newError).length);
		return {
			newError,
			isValid,
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { newError, isValid } = checkValidation(value);

		if (isValid) {
			console.log("no error");
			setErrors({ ...initialValue });
		} else {
			console.log(newError);
			setErrors(newError);
		}
	};

	const handleFocus = (e) => {
		setFocuses((prev) => ({
			...prev,
			[e.target.name]: true,
		}));
	};

	const handleBlur = (e) => {
		const name = e.target.name;
		console.log(name);
		const { newError } = checkValidation(value);

		console.log(newError);

		if (newError[name] && focuses[name]) {
			console.log(errors === newError);
			setErrors((prev) => ({
				...prev,
				[name]: newError[name],
			}));
		} else {
			setErrors(newError);
		}
	};

	return (
		<>
			{/* <h1>Styled Component</h1>
			<BaseButton girl={false} err={true}>
				I am From Styled Components
			</BaseButton>
			<PrimaryButton right={false}>Primary Button</PrimaryButton> */}
			<form onSubmit={handleSubmit}>
				<FormContainer>
					<TextGroup
						name="name"
						placeholder="Osman"
						handleChange={handleChange}
						value={value.name}
						label="Enter your name"
						error={errors.name}
						handleFocus={handleFocus}
						handleBlur={handleBlur}
					/>
					<TextGroup
						name="email"
						placeholder="Osman@gmail.com"
						handleChange={handleChange}
						value={value.email}
						label="Enter your email"
						error={errors.email}
						handleFocus={handleFocus}
						handleBlur={handleBlur}
					/>
					<BaseButton>Submit</BaseButton>
				</FormContainer>
			</form>
		</>
	);
}

export default App;
