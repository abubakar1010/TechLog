import { TResponseDefault } from ".";

export type TAcademicSemester = {
	code: string;
	endMonth: string;
	name: string;
	startMonth: string;
	year: string;
} & TResponseDefault;
