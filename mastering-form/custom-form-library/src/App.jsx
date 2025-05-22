import { InputGroup } from "./components/InputGroup";
import useForm from "./hooks/useForm";

const init = {
	username: "",
	name: "",
	age: 0,
	email: "",
	studentId: "",
	phone: "",
	university: "",
	department: "",
	avatar: "",
};

const validator = (values) => {
	console.log(values)
	let errors = {};

	console.log("username=", !!values.username);

	if (!values.username) {
		console.log('log')
		errors.username = "Username is required";
	} else if (values.username.length < 3) {
		errors.username = "Username must be at least 3 characters";
	}

	if (!values.name) {
		errors.name = "Name is required";
	}

	if (!values.age) {
		errors.age = "Age is required";
	} else if (values.age < 18) {
		errors.age = "Age must be at least 18";
	}

	if (!values.email) {
		errors.email = "Email is required";
	}
	if (!values.studentId) {
		errors.studentId = "StudentId is required";
	}
	if (!values.phone) {
		errors.phone = "Phone is required";
	} else if (values.phone.length < 10) {
		errors.phone = "Phone must be at least 10 characters";
	}
	if (!values.university) {
		errors.university = "University is required";
	}
	if (!values.department) {
		errors.department = "Department is required";
	}
	if (!values.avatar) {
		errors.avatar = "Avatar is required";
	} else if (values.avatar.size > 1024 * 1024) {
		errors.avatar = "Avatar size must be less than 1MB";
	}

	return { errors };
};

function App() {
	const { formState, handleChange, handleBlur, handleTouched } = useForm({
		init,
		validator,
	});

	console.log(formState);
	return (
		<>
			<h1 className="text-center text-3xl my-4 uppercase ">
				Custom Form Library
			</h1>
			<div>
				<form action="">
					<div className=" flex flex-col gap-4">
						<InputGroup
							type={"text"}
							label={"Username"}
							name={"username"}
							id={"username"}
							error={formState.username.error}
							placeholder={"Enter Your Username"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
						<InputGroup
							type={"text"}
							label={"Name"}
							name={"name"}
							id={"name"}
							error={formState.name.error}
							placeholder={"Enter Your Name"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
						<InputGroup
							type={"number"}
							label={"Age"}
							name={"age"}
							id={"age"}
							error={formState.age.error}
							placeholder={"Enter Your Age"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
						<InputGroup
							type={"text"}
							label={"Email"}
							name={"email"}
							id={"email"}
							error={formState.email.error}
							placeholder={"Enter Your Email"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
						<InputGroup
							type={"text"}
							label={"StudentId"}
							name={"studentId"}
							id={"studentId"}
							error={formState.studentId.error}
							placeholder={"Enter Your StudentId"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
						<InputGroup
							type={"text"}
							label={"Phone"}
							name={"phone"}
							id={"phone"}
							error={formState.phone.error}
							placeholder={"Enter Your Phone"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
						<InputGroup
							type={"text"}
							label={"University"}
							name={"university"}
							id={"university"}
							error={formState.university.error}
							placeholder={"Enter Your University"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
						<InputGroup
							type={"text"}
							label={"Department"}
							name={"department"}
							id={"department"}
							error={formState.department.error}
							placeholder={"Enter Your Department"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
						<InputGroup
							type={"file"}
							label={"Avatar"}
							name={"avatar"}
							id={"avatar"}
							error={formState.avatar.error}
							placeholder={"Enter Your Avatar"}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={handleTouched}
						/>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
