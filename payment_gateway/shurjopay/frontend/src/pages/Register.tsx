import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { jwtDecode } from "jwt-decode";

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
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/services/auth/authSlice";
import { useLocation, useNavigate } from "react-router";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(5),
});

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.pathname || "/";

  console.log({ location });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "demo user",
      email: "xyz@gmail.com",
      password: "Test@123",
    },
  });

  const [register, { isLoading, isSuccess, data, isError, error }] =
    useRegisterMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await register(values);
  }

  const toastId = "login";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      const token = data?.data;
      const user = jwtDecode(token);
      dispatch(setUser({ user, token }));
      toast.success(data?.message, { id: toastId });

      setTimeout(() => {
        navigate(from, { state: location.state?.state, replace: true });
        // window.location.reload();
      }, 1000);
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [
    data,
    dispatch,
    error,
    from,
    isError,
    isLoading,
    isSuccess,
    location.state?.state,
    navigate,
  ]);

  return (
    <div className="mx-auto max-w-lg space-y-5">
      <p className="text-3xl font-semibold border-b py-3">Please Register to create a account</p>
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
