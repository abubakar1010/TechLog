import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { decodeToken } from "../utils/decodeToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

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

	const onSubmit = async (data: { id: string; password: string }) => {
		console.log(data);
		const credential = {
			id: data.id,
			password: data.password,
		};
		const res = await login(credential).unwrap();
		const user = decodeToken(res.data.accessToken);

		dispatch(setUser({ user, token: res.data.accessToken }));
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
