import { TResponseDefault } from ".";

export const defaultOfferedCourseData = {
	semesterRegistration: "65b6185f13c0a33cdf61589a",
	academicFaculty: "65b00f3510b74fcbd7a25d86",
	academicDepartment: "65b00fb010b74fcbd7a25d8e",
	course: "65b6001fd6ffdd9bfc058329",
	faculty: "65b0844ccb87974826d0b7af",
	section: 1,
	maxCapacity: 30,
	days: ["Mon", "Wed"],
	startTime: "12:30",
	endTime: "14:00",
};

export type TOfferedCourse = {
	semesterRegistration: string;
	academicFaculty: string;
	academicDepartment: string;
	course: string;
	faculty: string;
	section: number;
	maxCapacity: number;
	days: string[];
	startTime: string;
	endTime: string;
} & TResponseDefault;
