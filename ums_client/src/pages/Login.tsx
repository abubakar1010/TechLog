import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { decodeToken } from "../utils/decodeToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUSer } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FormContainer } from "../components/form/FormContainer";
import { FormInput } from "../components/ui/FormInput";

const Login = () => {
	const dispatch = useAppDispatch();

	const [login] = useLoginMutation();

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
			});
		}
	};

	const defaultValue = {
		id: "A-0001",
		password: "admin123",
	};

	return (
		<Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
			<FormContainer onSubmit={onSubmit} defaultValues={defaultValue}>
				<FormInput
					type="text"
					identifier="id"
					placeholder="Enter your Id"
				/>

				<FormInput
					type="text"
					identifier="password"
					placeholder="Enter your Password"
				/>

				<Button htmlType="submit">Submit</Button>
			</FormContainer>
		</Row>
	);
};

export default Login;
