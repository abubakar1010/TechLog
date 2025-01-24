import { Button, Col, Flex } from "antd";
import { FormContainer } from "./form/FormContainer";
import { FormInput } from "./ui/FormInput";
import { useChangePasswordMutation } from "../redux/features/auth/authApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const ChangePassword = () => {
	const [changePassword] = useChangePasswordMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate()

	const onSubmit = async (data: FieldValues) => {
		const res = await changePassword(data);
		console.log(res, data);
		if (res?.data?.success) {
			toast.success(res?.data?.message);
			dispatch(logout());
			navigate("/login")
		}

		if (res.error) {
			toast.error(res?.error?.data?.message);
		}
	};

	return (
		<>
			<Flex justify="center">
				<Col span={12}>
					<FormContainer onSubmit={onSubmit}>
						<FormInput
							identifier="oldPassword"
							placeholder="Enter your Old Password"
							type="text"
						/>
						<FormInput
							identifier="newPassword"
							placeholder="Enter your new Password"
							type="text"
						/>
						<Button htmlType="submit">Submit</Button>
					</FormContainer>
				</Col>
			</Flex>
		</>
	);
};
