import { TResponseDefault } from ".";

export const defaultCourseData = {
	title: "Dom Manipulation",
	prefix: "JS",
	code: 108,
	credits: 3,
	isDeleted: false,
	preRequisiteCourses: [
		{
			course: "65b5ff53d6ffdd9bfc058320",
			isDeleted: false,
		},
		{
			course: "65b5ffc2d6ffdd9bfc058326",
			isDeleted: false,
		},
	],
};


export type TPreRequisiteCourse = {
    course: string;
	isDeleted: boolean;
}

export type TCourse = {
    title: string;
    prefix: string;
    code: number;
    credits: number;
    isDeleted: boolean;
    preRequisiteCourses: TPreRequisiteCourse[];
} & TResponseDefault