/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "../../../components/form/FormContainer";
import { FormInput } from "../../../components/ui/FormInput";
import { academicDepartmentSchema } from "../../../schemas/academicDepartmentSchema";
import { FieldValues } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import { TError, TResponse } from "../../../types";
import { TAcademicDepartment } from "../../../types/academicDepartment.type";
import { FormSelect } from "../../../components/ui/FormSelect";
import { TAcademicFaculty } from "../../../types/academicFaculty.type";
import {
	useCreateAcademicDepartmentMutation,
	useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagementApi";

export const CreateAcademicDepartment = () => {
	const [createNewAcademicDepartment] = useCreateAcademicDepartmentMutation();

	const { data: academicFacultyData } =
		useGetAllAcademicFacultyQuery(undefined);

	const academicFacultyOption = academicFacultyData?.data?.map(
		(item: TAcademicFaculty) => ({
			value: item._id,
			label: item.name,
		})
	);

	const onSubmit = async (data: FieldValues) => {
		const academicDepartmentData = {
			name: data.name,
			academicFaculty: data.academicFaculty,
		};

		console.log(academicDepartmentData);

		try {
			const res = (await createNewAcademicDepartment(
				academicDepartmentData
			)) as { data: TResponse<TAcademicDepartment>; error?: TError };
			console.log(res);
			if (res?.data) toast.success(res?.data.message);
			if (res?.error) toast.success(res?.error?.data?.message);
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div>
			<h1 style={{ textAlign: "center", margin: "10px 0" }}>
				This is the CreateAcademicDepartment page
			</h1>
			<Flex justify="center">
				<Col span={8}>
					<FormContainer
						onSubmit={onSubmit}
						resolver={zodResolver(academicDepartmentSchema)}
					>
						<FormInput
							type="text"
							identifier="name"
							placeholder="Enter Faculty Name"
						/>
						<FormSelect
							identifier="academicFaculty"
							placeholder="Select Academic Faculty"
							options={academicFacultyOption!}
						/>
						<Button htmlType="submit">Submit</Button>
					</FormContainer>
				</Col>
			</Flex>
		</div>
	);
};
