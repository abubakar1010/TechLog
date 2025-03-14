"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "../button";
import Link from "next/link";

const Navbar = () => {
	const { data } = useSession();
	const user = data?.user;
	return (
		<div>
			<h1>Mystery Message App</h1>
			{user ? (
				<div>
					<h1>`Welcome ${user.username}`</h1>
					<Button onClick={() => signOut()}>Logout</Button>
				</div>
			) : (
				<Link href={"/sign-in"}>
					<p>Login</p>
				</Link>
			)}
		</div>
	);
};

export default Navbar;
