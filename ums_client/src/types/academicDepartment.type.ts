import { TResponseDefault } from ".";
import { TAcademicFaculty } from "./academicFaculty.type";

export type TAcademicDepartment = {
	name: string;
    academicFaculty: TAcademicFaculty;
} & TResponseDefault 
