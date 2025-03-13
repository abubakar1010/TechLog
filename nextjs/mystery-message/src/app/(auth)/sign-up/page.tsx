"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpSchemaValidation } from "@/schemas/signUp-schema-validation";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import axios, { AxiosError } from "axios";
import { IApiResponse } from "@/types/api-response";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Signup() {
	const [username, setUsername] = useState("");
	const [isCheckingUsername, setIsCheckingUsername] = useState(true);
	const [usernameValidationError, setUsernameValidationError] = useState("");
	const [usernameMessage, setUsernameMessage] = useState("");

	const router = useRouter();

	const debounced = useDebounceCallback(setUsername, 1000);

	useEffect(() => {
		const checkUsername = async () => {
			try {
				setUsernameValidationError("");
				setUsernameMessage("")
				setIsCheckingUsername(true);
				const result = await axios.get(
					`/api/validate-username?username=${username}`
				);
				console.log(result);
				const message = result.data.message;
				setUsernameMessage(message);
			} catch (error) {
				console.log("Invalid username", error);
				const axiosError = error as AxiosError<IApiResponse>;
				console.log(axiosError);
				setUsernameValidationError(
					axiosError.response?.data?.message || "Invalid username"
				);
			} finally {
				setIsCheckingUsername(false);
			}
		};

		checkUsername();
	}, [username]);

	const form = useForm<z.infer<typeof SignUpSchemaValidation>>({
		resolver: zodResolver(SignUpSchemaValidation),
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	async function onSubmit(data: z.infer<typeof SignUpSchemaValidation>) {
		// toast({
		// 	title: "You submitted the following values:",
		// 	description: (
		// 		<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
		// 			<code className="text-white">{JSON.stringify(data, null, 2)}</code>
		// 		</pre>
		// 	),
		// });
		console.log(data);
		try {
			const result = await axios.post(`/api/sign-up`, data);
			toast("success", {
				description: result?.data?.message,
			});
			router.replace(`verify/${username}`);
		} catch (error) {
			console.log("failed to register user", error);
			const axiosError = error as AxiosError<IApiResponse>;
			toast("failed", {
				description:
					axiosError.response?.data.message || "Failed to register user",
			});
		} finally {
			setIsCheckingUsername(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									placeholder="username"
									{...field}
									onChange={(e) => {
										field.onChange(e);
										debounced(e.target.value);
									}}
								/>
							</FormControl>

							{isCheckingUsername && <Loader2 className="animate-spin" />}
							<div
								className={usernameMessage ? "text-green-600" : "text-red-600"}
							>
								{usernameMessage || usernameValidationError}
							</div>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="email"
									{...field}
									
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Password"
									{...field}
									
								/>
							</FormControl>

							

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}

export default Signup;
