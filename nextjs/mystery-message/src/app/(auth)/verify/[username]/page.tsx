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
import axios, { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { VerifySchemaValidation } from "@/schemas/verify-schema-validation";
import { IApiResponse } from "@/types/api-response";

function Verify() {
	const router = useRouter();
	const params = useParams();

	const form = useForm<z.infer<typeof VerifySchemaValidation>>({
		resolver: zodResolver(VerifySchemaValidation),
		defaultValues: {
			otp: "",
		},
	});

	async function onSubmit(data: z.infer<typeof VerifySchemaValidation>) {
		try {
			const result = await axios.post(`/api/verify-code`, {
				username: params.username,
				otp: data.otp,
			});
			toast("Verification complete", {
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						<code className="text-white">
							{JSON.stringify(result?.data?.message, null, 2)}
						</code>
					</pre>
				),
			});
			router.replace("/sign-in");
		} catch (error) {
			console.log("failed to verify user", error);
			const axiosError = error as AxiosError<IApiResponse>;
			toast("failed", {
				description:
					axiosError.response?.data.message || "Failed to verify user",
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
				<FormField
					control={form.control}
					name="otp"
					render={({ field }) => (
						<FormItem>
							<FormLabel>OTP</FormLabel>
							<FormControl>
								<Input placeholder="Your" {...field} />
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

export default Verify;
