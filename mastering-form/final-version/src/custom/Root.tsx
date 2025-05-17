import { useState, type ChangeEvent } from "react";
import { InputGroup } from "./components/InputGroup/InputGroup";
import { Button } from "./components/Button/Button";

type TInit = {
	title: string;
	bio: string;
	skills: string;
};
const init: TInit = {
	title: "",
	bio: "",
	skills: "",
};

export const Root = () => {
	const [formState, setFormState] = useState({ ...init });
	const [errors, setErrors] = useState<Partial<TInit>>({ ...init });
	const [focuses, setFocuses] = useState({
		title: false,
		bio: false,
		skills: false,
	});

	console.log(focuses)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const key: "title" | "bio" | "skills" = e.target.name as
			| "title"
			| "bio"
			| "skills";
		if (errors[key]) {
			setErrors((prev) => ({
				...prev,
				[e.target.name]:"",
			}));
		}
		setFormState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const checkValidity = (values: TInit) => {
		const errors: Partial<TInit> = {};

		const { title, bio, skills } = values;

		if (!title) {
			errors.title = "Invalid Title";
		}
		if (!bio) {
			errors.bio = "Invalid Bio";
		}
		if (!skills) {
			errors.skills = "Invalid Skills";
		}

		return {
			errors,
			valid: Object.keys(errors).length === 0,
		};
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { errors, valid } = checkValidity(formState);
		console.log(errors);
		if (valid) {
			console.log(formState);
			setErrors({ ...errors });
		} else {
			console.log(errors);
			setErrors({ ...errors });
		}
	};

	const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
		setFocuses((prev) => ({
			...prev,
			[e.target.name]: true,
		}));
	};

	const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
		const key: "title" | "bio" | "skills" = e.target.name as
			| "title"
			| "bio"
			| "skills";

		const { errors } = checkValidity(formState);
		// if (errors[key] && focuses[key]) {
		// 	// console.log("first")
		// 	setErrors((prev) => ({
		// 		...prev,
		// 		[e.target.name]: errors[key],
		// 	}));
		// } else {
		// 	setErrors((prev) => ({
		// 		...prev,
		// 		[e.target.name]: "",
		// 	}));
		// }
		setErrors((prev) => ({
			...prev,
			[e.target.name]: errors[key] ?? "",
		}));
	};

	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<div className=" flex-col flex gap-6 items-center justify-center my-12 p-8 bg-gray-900 text-white w-4xl mx-auto">
					<h1 className="text-center text-3xl">This is the parent page</h1>
					<InputGroup
						name="title"
						id="title"
						type="text"
						placeholder="Enter your title"
						label="Title"
						value={formState.title}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={handleFocus}
						error={errors.title}
					/>
					<InputGroup
						name="bio"
						id="bio"
						type="text"
						placeholder="Enter your bio"
						label="Bio"
						value={formState.bio}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={handleFocus}
						error={errors.bio}
					/>
					<InputGroup
						name="skills"
						id="skills"
						type="text"
						placeholder="Enter your skills"
						label="Skills"
						value={formState.skills}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={handleFocus}
						error={errors.skills}
					/>
					<div className=" text-right w-3xl">
						<Button type="submit" text="Submit" />
					</div>
				</div>
			</form>
		</>
	);
};
