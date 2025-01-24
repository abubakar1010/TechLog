import { Button, Col, Flex, Form } from "antd";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { FormContainer } from "../../../../components/form/FormContainer";
import { defaultFacultyData, TFaculty } from "../../../../types/faculty";
import { zodResolver } from "@hookform/resolvers/zod";
import { facultySchema } from "../../../../schemas/facultySchema";
import { PersonalInformation } from "../student/createStudent/PersonalInformation";
import { ContactInformation } from "../student/createStudent/ContactInformation";
import { AcademicInformation } from "../student/createStudent/AcademicInformation";
import { TError, TResponse } from "../../../../types";
import { FormInput } from "../../../../components/ui/FormInput";
import { useCreateFacultyMutation } from "../../../../redux/features/admin/userManagementApi";

export const CreateFaculty = () => {
	const [createNewFaculty] = useCreateFacultyMutation();

	const onSubmit = async (data: FieldValues) => {
		console.log(data);
		const formattedDateOfBirth = `${data.dateOfBirth.$y}-${
			data.dateOfBirth.$M < 10
				? "0" + (data.dateOfBirth.$M + 1)
				: data.dateOfBirth.$M + 1
		}-${
			data.dateOfBirth.$D < 10 ? "0" + data.dateOfBirth.$D : data.dateOfBirth.$D
		}`;
		const facultyData = {
			...data,
			dateOfBirth: formattedDateOfBirth,
		};

		const newFacultyData = {
			password: "student123",
			faculty: facultyData,
		};
		console.log(newFacultyData);
		const facultyFormData = new FormData();
		facultyFormData.append("data", JSON.stringify(newFacultyData));
		facultyFormData.append("file", data.image);
		console.log(facultyFormData);
		try {
			const res = (await createNewFaculty(facultyFormData)) as {
				data: TResponse<TFaculty>;
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
						defaultValues={defaultFacultyData}
						resolver={zodResolver(facultySchema)}
					>
						<AcademicInformation semester={true} />
						<PersonalInformation />
						<ContactInformation />
						<FormInput
							identifier="designation"
							placeholder="Enter designation"
							type="text"
						/>

						<Form.Item>
							<Button htmlType="submit">Submit</Button>
						</Form.Item>
					</FormContainer>
				</Col>
			</Flex>
		</div>
	);
};
