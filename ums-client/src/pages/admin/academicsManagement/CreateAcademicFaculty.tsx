/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "../../../components/form/FormContainer";
import { FormInput } from "../../../components/ui/FormInput";
import { academicFacultySchema } from "../../../schemas/academicFacultySchema";
import { FieldValues } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TError, TResponse } from "../../../types";
import { TAcademicFaculty } from "../../../types/academicFaculty.type";

export const CreateAcademicFaculty = () => {
	const [createNewAcademicFaculty] = useCreateAcademicFacultyMutation();

	const onSubmit = async (data: FieldValues) => {
		const academicFacultyData = {
			name: data.name,
		};

		try {
			const res = (await createNewAcademicFaculty(academicFacultyData)) as {
				data: TResponse<TAcademicFaculty>;
				error?: TError;
			};
			if (res?.data) toast.success(res?.data.message);
			if (res?.error) toast.success(res?.error?.data?.message);
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div>
			<h1 style={{ textAlign: "center", margin: "10px 0" }}>
				This is the CreateAcademicFaculty page
			</h1>
			<Flex justify="center">
				<Col span={8}>
					<FormContainer
						onSubmit={onSubmit}
						resolver={zodResolver(academicFacultySchema)}
					>
						<FormInput
							type="text"
							identifier="name"
							placeholder="Enter Faculty Name"
						/>
						<Button htmlType="submit">Submit</Button>
					</FormContainer>
				</Col>
			</Flex>
		</div>
	);
};
