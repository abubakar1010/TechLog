/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
	username: "",
	email: "",
	password: "",
};

const Signup = () => {
	const [user, setUser] = useState({ ...initialState });
	const [isDisabled, setIsDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (
			user.username.length > 0 &&
			user.email.length > 0 &&
			user.password.length > 0
		) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [user]);

    console.log(loading)

	const handleInput = (e: any) => {
		console.log(e);
		setUser((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async () => {
		try {
			setLoading(true);
			const response: any = await axios.post(
				" http://localhost:3000/api/users/signup",
				user
			);

			console.log(response);
			if (response?.data?.success) {
				toast.success(response?.message);

				setLoading(false);
				setIsDisabled(true);
				setTimeout(() => {
					router.push("/signin");
				}, 5000);
			}
		} catch (error: any) {
			console.log(error);
			toast.error(error.message);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	return (
		<div className=" flex h-screen justify-center items-center gap-4 flex-col">
			<div>
				<label htmlFor="username">username</label>
				<br />
				<input
					value={user.username}
					onChange={handleInput}
					className=" px-4 py-2 my-2 border-2 border-cyan-300 outline-0 rounded-md"
					type="text"
					name="username"
					id="username"
					placeholder="Please Enter you username"
				/>
			</div>
			<div>
				<label htmlFor="email">email</label>
				<br />
				<input
					value={user.email}
					onChange={handleInput}
					className=" px-4 py-2 my-2 border-2 border-cyan-300 outline-0 rounded-md"
					type="text"
					name="email"
					id="email"
					placeholder="Please Enter you email"
				/>
			</div>
			<div>
				<label htmlFor="password">password</label>
				<br />
				<input
					value={user.password}
					onChange={handleInput}
					className=" px-4 py-2 my-2 border-2 border-cyan-300 outline-0 rounded-md"
					type="text"
					name="password"
					id="password"
					placeholder="Please Enter you password"
				/>
			</div>
			<button
				className={
					isDisabled
						? " font-bold text-cyan-800"
						: " border-0 shadow-amber-50 bg-amber-600 px-4 py-2 shadow-sm rounded-md "
				}
				onClick={onSubmit}
                disabled={isDisabled}
			>
				{isDisabled ? "Please Fill The Form" : "Submit"}
			</button>
		</div>
	);
};

export default Signup;
