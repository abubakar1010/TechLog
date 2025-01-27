import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterMutation } from "@/redux/services/auth/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const formSchema = z.object({
	name: z.string(),
	email: z.string().email({
		message: "Username must be at least 2 characters.",
	}),
	password: z.string().min(5),
});

const Register = () => {

  const navigate = useNavigate()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "demo user",
			email: "xyz@gmail.com",
			password: "Test@123",
		},
	});

	const [register] =
		useRegisterMutation();

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
      const res = await register(values);
      if(res?.error){
      toast.error(res?.error.data.message)
      }
      if(res?.data){
        toast.success(res?.data?.message)
        navigate("/login")
      }
    } catch (error) {
      if(error instanceof Error){
        toast.error(error.message)
      }
    }
	}

	return (
		<div className="mx-auto max-w-lg space-y-5">
			<p className="text-3xl font-semibold border-b py-3">
				Please Register to create a account
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="name" {...field} />
								</FormControl>
								<FormDescription>Enter your Name.</FormDescription>
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
									<Input placeholder="email" {...field} />
								</FormControl>
								<FormDescription>Enter your valid email.</FormDescription>
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
									<Input placeholder="password" {...field} />
								</FormControl>
								<FormDescription>Enter your secure password.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Login</Button>
				</form>
			</Form>
		</div>
	);
};

export default Register;
