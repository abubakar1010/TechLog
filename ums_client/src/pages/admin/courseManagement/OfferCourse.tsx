/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import { FormContainer } from "../../../components/form/FormContainer";
import { Button, Col, Flex, Form } from "antd";
import { FormSelect } from "../../../components/ui/FormSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { TError, TResponse } from "../../../types";
import {
	useCreateOfferCourseMutation,
	useGetAllCourseQuery,
	useGetAllRegisteredSemesterQuery,
	useGetCourseFacultyQuery,
} from "../../../redux/features/admin/courseManagementApi";
import {
	useGetAllAcademicDepartmentQuery,
	useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagementApi";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/userManagementApi";
import { FormInput } from "../../../components/ui/FormInput";
import { TOfferedCourse } from "../../../types/offerCourse.type";
import { OfferedCourseSchema } from "../../../schemas/offeredCourseSchema";
import { useState } from "react";
import { FormSelectWithWatch } from "../../../components/ui/FormSelectWithWatch";

export const OfferCourse = () => {
	const [semesterId, setSemesterId] = useState("");
	const [facultyId, setFacultyId] = useState("");
	const [departmentId, setDepartmentId] = useState("");
	const [courseId, setCourseId] = useState("");

	const { data: registeredSemesterData } =
		useGetAllRegisteredSemesterQuery(undefined);

	const registeredSemesterOption = registeredSemesterData?.data?.map(
		(item) => ({ label: item.status, value: item._id })
	);

	const { data: academicFacultyData } =
		useGetAllAcademicFacultyQuery(undefined);

	const academicFacultyOption = academicFacultyData?.data?.map((item) => ({
		label: item.name,
		value: item._id,
	}));

	const { data: academicDepartmentData } =
		useGetAllAcademicDepartmentQuery(undefined, {skip: !facultyId});

	const academicDepartmentOption = academicDepartmentData?.data?.map(
		(item) => ({ label: item.name, value: item._id })
	);

	const { data: courseData } = useGetAllCourseQuery(undefined, {skip: !departmentId});

	const courseOption = courseData?.data?.map((item) => ({
		label: item.title,
		value: item._id,
	}));

	const { data: facultyData } = useGetCourseFacultyQuery(courseId, {skip: !courseId});

	console.log(facultyData)

	const facultyOption = facultyData?.data?.faculties?.map((item) => ({
		label: item.fullName,
		value: item._id,
	}));

	// const facultyOption = []
	const [offerCourse] = useCreateOfferCourseMutation();

	const onSubmit = async (data: FieldValues) => {
		console.log("form data", data);

		const offerCourseData = {
			...data,
			section: Number(data.section),
			maxCapacity: Number(data.maxCapacity),
			days: [data.days],
		};
		try {
			const res = (await offerCourse(offerCourseData)) as {
				data: TResponse<TOfferedCourse[]>;
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
						resolver={zodResolver(OfferedCourseSchema)}
					>
						<FormSelectWithWatch
							placeholder="Select Registered Semester"
							identifier="semesterRegistration"
							options={registeredSemesterOption || []}
							setInput={setSemesterId}
						/>
						<FormSelectWithWatch
							placeholder="Select Academic Faculty"
							identifier="academicFaculty"
							options={academicFacultyOption || []}
							setInput={setFacultyId}
							disabled={!semesterId}
						/>
						<FormSelectWithWatch
							placeholder="Select academic Department"
							identifier="academicDepartment"
							options={academicDepartmentOption || []}
							setInput={setDepartmentId}
							disabled={!facultyId}
						/>
						<FormSelectWithWatch
							placeholder="Select Course"
							identifier="course"
							options={courseOption || []}
							setInput={setCourseId}
							disabled={!departmentId}
						/>
						<FormSelect
							placeholder="Select Faculty"
							identifier="faculty"
							options={facultyOption || []}
							disabled={!courseId}
						/>
						<FormInput
							identifier="section"
							placeholder="Select Section"
							type="text"
						/>
						<FormInput
							identifier="maxCapacity"
							placeholder="Select max capacity"
							type="text"
						/>

						<FormSelect
							placeholder="Select days"
							identifier="days"
							options={[
								{ label: "Saturday", value: "Sat" },
								{ label: "Sunday", value: "Sun" },
								{ label: "Monday", value: "Mon" },
								{ label: "Tuesday", value: "Tue" },
								{ label: "Wednesday", value: "Wed" },
								{ label: "Thursday", value: "Thu" },
								{ label: "Friday", value: "Fri" },
							]}
						/>
						<FormInput
							identifier="startTime"
							placeholder="Select start time"
							type="text"
						/>
						<FormInput
							identifier="endTime"
							placeholder="Select end time"
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
