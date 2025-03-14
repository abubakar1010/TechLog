"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SignInSchemaValidation } from "@/schemas/signIn-schema-validation";
import { signIn } from "next-auth/react";

function Signin() {
	const router = useRouter();

	const form = useForm<z.infer<typeof SignInSchemaValidation>>({
		resolver: zodResolver(SignInSchemaValidation),
		defaultValues: {
			identifier: "",
			password: "",
		},
	});

	async function onSubmit(data: z.infer<typeof SignInSchemaValidation>) {
		console.log(data);
		const result = await signIn("credentials", {
			identifier: data?.identifier,
			password: data?.password,
		});

		console.log(result);
		if (result?.error) {
			if (result.error === "CredentialsSignin") {
				toast("failed", {
					description: "Incorrect username or password",
				});
			} else {
				toast("failed", {
					description: result.error,
				});
			}
		}

		if (result?.url) {
			router.replace("/dashboard");
		}
	}

	return (
		<div className=" flex justify-center items-center min-h-screen px-6 shadow-2xl ">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-[600px] space-y-6 px-12 py-20"
					style={{
						boxShadow:
							"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
					}}
				>
					<div className=" text-2xl font-bold text-center uppercase mb-12">
						Please Signin to continue
					</div>
					<FormField
						control={form.control}
						name="identifier"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Or Username</FormLabel>
								<FormControl>
									<Input placeholder="email/username" {...field} />
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
									<Input placeholder="Password" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}

export default Signin;
