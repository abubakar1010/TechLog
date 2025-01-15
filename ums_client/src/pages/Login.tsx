import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { decodeToken } from "../utils/decodeToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUSer } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
	const dispatch = useAppDispatch();

	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: "A-0001",
			password: "admin123",
		},
	});

	const [login, { data, error }] = useLoginMutation();

	console.log("data ==> ", data);
	console.log("error ==> ", error);

	const navigate = useNavigate();

	const onSubmit = async (data: FieldValues) => {
		const loadingId = toast.loading("Login...");
		try {
			const credential = {
				id: data.id,
				password: data.password,
			};
			const res = await login(credential).unwrap();
			const user = decodeToken(res.data.accessToken) as TUSer;

			dispatch(setUser({ user, token: res.data.accessToken }));
			navigate(`/${user.role}/dashboard`);
			toast.success("User login successful", {
				id: loadingId,
				duration: 2000,
			});
		} catch (err: unknown) {
            toast.error(`Oops!Something went wrong.${err}`, {
				id: loadingId,
				duration: 2000,
			})
        }
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="id">Id</label>
				<input type="text" placeholder="Id" {...register("id")} />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="text" placeholder="Id" {...register("password")} />
			</div>
			<Button htmlType="submit">Submit</Button>
		</form>
	);
};

export default Login;
