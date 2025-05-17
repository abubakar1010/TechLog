/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import { FormContainer } from "../../../components/form/FormContainer";
import { Button, Col, Flex, Form } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { TError, TResponse } from "../../../types";
import { CourseSchema } from "../../../schemas/courseSchema";
import {
	useCreateCourseMutation,
	useGetAllCourseQuery,
} from "../../../redux/features/admin/courseManagementApi";
import { defaultCourseData, TCourse } from "../../../types/course.type";
import { FormInput } from "../../../components/ui/FormInput";
import { FormMultiSelectSelect } from "../../../components/ui/FormMultiSelect";

export const CreateCourse = () => {
	const [createCourse] = useCreateCourseMutation();

	const { data: courseData } = useGetAllCourseQuery(undefined);

	console.log(courseData);

	const preRequisiteCoursesOption = courseData?.data?.map((item) => ({
		value: item._id,
		label: item.title,
	}));

	const onSubmit = async (data: FieldValues) => {
		console.log(data);
		const newCourseData = {
			...data,
			credits: Number(data.credits),
			code: Number(data.credits),
			preRequisiteCourses: data.preRequisiteCourses.map((item) => ({
				course: item,
				isDeleted: false,
			})),
		};
		console.log(newCourseData);
		try {
			const res = (await createCourse(newCourseData)) as {
				data: TResponse<TCourse[]>;
				error?: TError;
			};
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
						resolver={zodResolver(CourseSchema)}
						defaultValues={defaultCourseData}
					>
						<FormInput
							identifier="title"
							placeholder="Enter Course title"
							type="text"
						/>
						<FormInput
							identifier="prefix"
							placeholder="Enter Course prefix"
							type="text"
						/>
						<FormInput
							identifier="code"
							placeholder="Enter Course code"
							type="text"
						/>
						<FormInput
							identifier="credits"
							placeholder="Enter Course credit"
							type="text"
						/>

						<FormMultiSelectSelect
							identifier="preRequisiteCourses"
							placeholder="Enter Course preRequisiteCourses"
							options={preRequisiteCoursesOption || []}
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
