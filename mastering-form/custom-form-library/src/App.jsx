import { Button } from "./components/Button";
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
	terms: false,
};

const validator = (values) => {
	console.log(values);
	let errors = {};

	console.log("username=", !!values.username);

	if (!values.username) {
		console.log("log");
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
	} else if (/^\+?[0-9]{10,15}$/.test(values.phone) === false) {
		errors.phone = "Phone must be a valid number";
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

	if (!values.terms) {
		errors.terms = "You must accept the terms and conditions";
	}

	return { errors };
};

function App() {
	const {
		formState,
		handleChange,
		handleBlur,
		handleTouched,
		handleSubmit,
		handleClear,
	} = useForm({
		init,
		validator,
	});

	return (
		<>
			<h1 className="text-center text-3xl my-4 uppercase ">
				Custom Form Library
			</h1>
			<div>
				<form
					action=""
					onSubmit={(e) =>
						handleSubmit(e, ({ values, errors, hasError }) => {
							console.log(values, errors, hasError);
						})
					}
				>
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
						<div className=" bg-white p-4 rounded-md shadow-xl text-black flex flex-col gap-2 w-3xl mx-auto">
							<select
								onChange={handleChange}
								value={formState.university.value}
								className="px-2 py-3 text-xl outline-none border-gray-500 rounded-md border"
								name="university"
							>
								<option value="BUET">
									Bangladesh University of Engineering and Technology
								</option>
								<option value="DU">Dhaka University</option>
								<option value="JU">Jahangirnagar University</option>
								<option value="AUST">
									Ahasanullah University of Science and Technology
								</option>
								<option value="SUST">
									Shahjalal University of Science and Technology
								</option>
								<option value="CU">Chittagong University</option>
								<option value="AIUB">
									American International University-Bangladesh
								</option>
								<option value="NSU">North South University</option>
								<option value="BRACU">BRAC University</option>
								<option value="UIU">United International University</option>
								<option value="IUB">Independent University, Bangladesh</option>
								<option value="SUST">
									Shahjalal University of Science and Technology
								</option>
								<option value="RUET">
									Rajshahi University of Engineering and Technology
								</option>
								<option value="BU">Bangladesh University</option>
								<option value="BUP">
									Bangladesh University of Professionals
								</option>
								<option value="PUST">
									Pabna University of Science and Technology
								</option>
								<option value="PSTU">
									Patuakhali Science and Technology University
								</option>
								<option value="KUET">
									Khulna University of Engineering and Technology
								</option>
								<option value="CUET">
									Chittagong University of Engineering and Technology
								</option>
								<option value="RU">Rajshahi University</option>
								<option value="DUET">
									Dhaka University of Engineering and Technology
								</option>
								<option value="JNU">Jagannath University</option>
								<option value="BSMRSTU">
									Bangabandhu Sheikh Mujibur Rahman Science and Technology
									University
								</option>
								<option value="NSTU">
									Noakhali Science and Technology University
								</option>
								<option value="HSTU">
									Hajee Mohammad Danesh Science and Technology University
								</option>
								<option value="JKKNIU">
									Jatiya Kabi Kazi Nazrul Islam University
								</option>
								<option value="BSB">Bangladesh Shilpakala Academy</option>
								<option value="BSA">Bangladesh Shilpakala Academy</option>
								<option value="BUP">
									Bangladesh University of Professionals
								</option>
								<option value="BUBT">
									Bangladesh University of Business and Technology
								</option>
								<option value="BUBT">
									Bangladesh University of Business and Technology
								</option>
								<option value="BUB">Bangladesh University of Business</option>
							</select>
						</div>

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
						<div>
							<div className=" flex items-center gap-2 justify-center">
								<input
									className="px-2 py-3 text-3xl outline-none border-gray-500 rounded-md border"
									type="checkbox"
									name="terms"
									id="terms"
									checked={formState.terms.value}
									onChange={handleChange}
									onBlur={handleBlur}
									onFocus={handleTouched}
								/>

								<label htmlFor="terms">Terms and Condition</label>
							</div>
							{formState.terms.error && (
								<p className=" text-2xl font-medium text-red-500 text-center">
									{formState.terms.error}
								</p>
							)}
						</div>
					</div>
					<div className=" flex justify-center items-center gap-6 my-7">
						<Button type={"submit"} text={"submit"} />
						<Button type={"reset"} text={"Clear"} onClick={handleClear} />
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
