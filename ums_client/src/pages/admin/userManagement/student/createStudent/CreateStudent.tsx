import { Button, Col, Flex, Form } from "antd";
import { FormContainer } from "../../../../../components/form/FormContainer";
import { FieldValues } from "react-hook-form";
import { ContactInformation } from "./ContactInformation";
import { PersonalInformation } from "./PersonalInformation";
import { LocalGuardianInformation } from "./LocalGuardianInformation";
import { GuardianInformation } from "./GuardianInformation";
import { AcademicInformation } from "./AcademicInformation";
import { defaultStudentData } from "../../../../../constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "../../../../../schemas/studentSchema";
import { useCreateStudentMutation } from "../../../../../redux/features/admin/userManagementApi";
import { TStudent } from "../../../../../types/student.type";
import { TError, TResponse } from "../../../../../types";
import { toast } from "sonner";

export const CreateStudent = () => {
	const [createNewStudent] = useCreateStudentMutation();

	const onSubmit = async (data: FieldValues) => {
		const formattedDateOfBirth = `${data.dateOfBirth.$y}-${
			data.dateOfBirth.$M < 10
				? "0" + (data.dateOfBirth.$M + 1)
				: data.dateOfBirth.$M + 1
		}-${
			data.dateOfBirth.$D < 10 ? "0" + data.dateOfBirth.$D : data.dateOfBirth.$D
		}`;
		const studentData = {
			...data,
			dateOfBirth: formattedDateOfBirth,
		};

		const newStudentData = {
			password: "student123",
			student: studentData,
		};
		try {
			const formData = new FormData();
			formData.append("data", JSON.stringify(newStudentData));
			formData.append("file", data.image);
			console.log(formData);
			const res = (await createNewStudent(formData)) as {
				data: TResponse<TStudent>;
				error?: TError;
			};
			console.log("Data", res);
			if (res?.data) toast.success(res?.data.message);
			if (res?.error) toast.success(res?.error?.data?.message);
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		}
	};
	return (
		<div>
			<h1>This is the CreateStudent page</h1>
			<Flex justify="center">
				<Col span={12}>
					<FormContainer
						onSubmit={onSubmit}
						defaultValues={defaultStudentData}
						resolver={zodResolver(studentSchema)}
					>
						<PersonalInformation />
						<ContactInformation />
						<LocalGuardianInformation />
						<GuardianInformation />
						<AcademicInformation />

						<Form.Item>
							<Button htmlType="submit">Submit</Button>
						</Form.Item>
					</FormContainer>
				</Col>
			</Flex>
		</div>
	);
};
