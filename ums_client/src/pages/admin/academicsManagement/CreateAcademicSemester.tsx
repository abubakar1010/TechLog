import { FieldValues } from "react-hook-form";
import { FormContainer } from "../../../components/form/FormContainer";
import { Button, Col, Flex, Form } from "antd";
import { FormSelect } from "../../../components/ui/FormSelect";
import { FormDate } from "../../../components/ui/FormDate";
import {zodResolver} from '@hookform/resolvers/zod'
import { academicSemesterSchema } from "../../../schemas/academicSemesterSchema";


const options = [
	{ value: "01", label: "Autumn" },
	{ value: "02", label: "Summer" },
	{ value: "03", label: "Fall" },
];

export const CreateAcademicSemester = () => {



	const onSubmit = (data: FieldValues) => {
		const name = options[Number(data.name) - 1].label;
		console.log(data)

		const option = { year: "numeric", month: "short" };

		const year = String(data.date[0].$y);
		const startMonth = data.date[0].$d
			.toLocaleDateString("en-BD", option)
			.split(" ")[0];
		const endMonth = data.date[1].$d
			.toLocaleDateString("en-BD", option)
			.split(" ")[0];
		const semesterData = {
			name,
			code: data.name,
			year,
			startMonth,
			endMonth,
		};
		console.log(semesterData);
	};

	return (
		<div style={{ height: "300vh" }}>
			<h1 style={{ textAlign: "center", margin: "30px 0" }}>
				New Academic Semester
			</h1>
			<Flex justify="center">
				<Col span={12}>
					<FormContainer onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
						<FormSelect
							placeholder="Enter Semester Name"
							identifier="name"
							options={options}
						/>
						<FormDate
							identifier="date"
							placeholder={["Semester Start", "Semester End"]}
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
