import { Divider } from "antd";
import {
	useGetAllAcademicDepartmentQuery,
	useGetAllAcademicSemesterQuery,
} from "../../../../../redux/features/admin/academicManagementApi";
import { FormSelect } from "../../../../../components/ui/FormSelect";

export const AcademicInformation = () => {
	const { data: semesterData } = useGetAllAcademicSemesterQuery(undefined);
	const { data: departmentData } = useGetAllAcademicDepartmentQuery(undefined);

	const semesterOptions = semesterData?.data?.map((item) => ({
		value: item._id,
		label: `${item.name} - ${item.year}`,
	}));

	const departmentOptions = departmentData?.data?.map((item) => ({
		value: item._id,
		label: `${item.name}`,
	}));

	return (
		<>
			<Divider>Academic Information </Divider>
			<FormSelect
				placeholder="Enter Semester Name"
				identifier="admissionSemester"
				options={semesterOptions || []}
			/>
			<FormSelect
				placeholder="Enter Academic Department"
				identifier="academicDepartment"
				options={departmentOptions || []}
			/>
		</>
	);
};
