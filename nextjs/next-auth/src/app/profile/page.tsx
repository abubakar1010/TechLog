/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
	username: "",
	email: "",
	_id: "",
};

const MyProfile = () => {
	const [user, setUser] = useState({ ...initialState });
	const [loading, setLoading] = useState(false);


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
                const {username, email, _id} = response?.data?.data as {username: string, _id: string, email: string}
                setUser({username, email, _id })
			}
		} catch (error: any) {
			console.log(error);
			toast.error(error.message);
		}
	};

    useEffect(() => {
        onSubmit()
    },[])

	if (loading) {
		return <p>Loading...</p>;
	}
	return (
		<div className=" flex h-screen justify-center items-center gap-4 flex-col">
			<div>
                <p>Id: {user._id}</p>
                <p>User: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>
		</div>
	);
};

export default MyProfile;
