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

function App() {
	const { formState, handleChange } = useForm({
		init,
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
							placeholder={"Enter Your Username"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"text"}
							label={"Name"}
							name={"name"}
							id={"name"}
							placeholder={"Enter Your Name"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"number"}
							label={"Age"}
							name={"age"}
							id={"age"}
							placeholder={"Enter Your Age"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"number"}
							label={"Age"}
							name={"age"}
							id={"age"}
							placeholder={"Enter Your Age"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"text"}
							label={"Email"}
							name={"email"}
							id={"email"}
							placeholder={"Enter Your Email"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"text"}
							label={"StudentId"}
							name={"studentId"}
							id={"studentId"}
							placeholder={"Enter Your StudentId"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"text"}
							label={"Phone"}
							name={"phone"}
							id={"phone"}
							placeholder={"Enter Your Phone"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"text"}
							label={"University"}
							name={"university"}
							id={"university"}
							placeholder={"Enter Your University"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"text"}
							label={"Department"}
							name={"department"}
							id={"department"}
							placeholder={"Enter Your Department"}
							onChange={handleChange}
						/>
						<InputGroup
							type={"file"}
							label={"Avatar"}
							name={"avatar"}
							id={"avatar"}
							placeholder={"Enter Your Avatar"}
							onChange={handleChange}
						/>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
