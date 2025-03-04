/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyPage = () => {

	const router = useRouter();

	const [token, setToken] = useState("");
	const [error, setError] = useState(false);
	const [verified, serVerified] = useState(false);

	const verifyEmail = async () => {
		try {
			const response: any = await axios.post(
				"http://localhost:3000/api/users/verify",
				{ token }
			);
            console.log(response)
			if (response?.data?.success) {
				setError(false);
				toast.success(response?.data?.message);
                serVerified(true);
                router.push("/signin")
			}
		} catch (error: any) {
			setError(true);
			console.log(error);
		}
	};

	useEffect(() => {
		// const {query} = router;

		// const token = query.token as string || "";

		const token = window.location.search.split("=")[1];
		console.log(token);

		setToken(token);
	}, []);

	useEffect(() => {
		if (token && !verified) {
			verifyEmail();
			setError(false);
		}
	}, [token]);
	return (
		<div>
			<h1>This is the VerifyPage page</h1>
			{verified && "You are successfully verified"}
			{error && "Oops! Your session is expired"}

		</div>
	);
};

export default VerifyPage;
