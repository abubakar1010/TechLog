/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import { FormContainer } from "../../../components/form/FormContainer";
import { Button, Col, Flex, Form } from "antd";
import { FormSelect } from "../../../components/ui/FormSelect";
import { FormDateRange } from "../../../components/ui/FormDateRange";
import {
	useGetAllAcademicSemesterQuery,
} from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { FormInput } from "../../../components/ui/FormInput";
import { useRegisterSemesterMutation } from "../../../redux/features/admin/courseManagementApi";
import { TRegisteredSemester } from "../../../types/registerSemester.type";
import { registerSemesterSchema } from "../../../schemas/registeredSemesterSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterSemester = () => {
	const semesterStatus = [
		{
			label: "ONGOING",
			value: "ONGOING",
		},
		{
			label: "UPCOMING",
			value: "UPCOMING",
		},
		{
			label: "ENDED",
			value: "ENDED",
		},
	];

	const [registerSemester] = useRegisterSemesterMutation();

	const { data: academicSemester } = useGetAllAcademicSemesterQuery(undefined);

	const academicSemesterOptions = academicSemester?.data?.map((item) => ({
		label: `${item.name} - ${item.year}`,
		value: item._id,
	}));
	const onSubmit = async (data: FieldValues) => {
		const startDate = new Date(data.date[0].$d).toISOString()
		const endDate = new Date(data.date[1].$d).toISOString()
		console.log(data)
		const newRegisteredSemesterData = {
			academicSemester: data.academicSemester,
			status: data.status,
			startDate,
			endDate,
			minCredit: Number(data.minCredit),
			maxCredit: Number(data.maxCredit)
		}
		try {
			const res = (await registerSemester(newRegisteredSemesterData)) as TResponse<
				TRegisteredSemester[]
			>;
			if (res.error) {
				toast.error(res.error.data.message);
			} else {
				toast.success(res?.data?.message);
			}
			console.log(res);
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div style={{ height: "300vh" }}>
			<h1 style={{ textAlign: "center", margin: "30px 0" }}>
				New Academic Semester
			</h1>
			<Flex justify="center">
				<Col span={12}>
					<FormContainer
						onSubmit={onSubmit}
						resolver={zodResolver(registerSemesterSchema)}
					>
						<FormSelect
							placeholder="Enter Academic Semester"
							identifier="academicSemester"
							options={academicSemesterOptions || []}
						/>
						<FormSelect
							placeholder="Enter Semester Status"
							identifier="status"
							options={semesterStatus}
						/>
						<FormDateRange
							identifier="date"
							placeholder={["Semester Start", "Semester End"]}
						/>
						<FormInput
							identifier="minCredit"
							placeholder="Enter minimus credit"
							type="text"
						/>
						<FormInput
							identifier="maxCredit"
							placeholder="Enter maximum credit"
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
