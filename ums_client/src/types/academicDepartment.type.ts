import { TAcademicFaculty } from "./academicFaculty.type";

export type TAcademicDepartment = {
	createdAt: string;
	name: string;
    academicFaculty: TAcademicFaculty;
	updatedAt: string;
	__v: number;
	_id: string;
};
