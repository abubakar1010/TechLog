import { z } from "zod";

export const OfferedCourseSchema = z.object({
	semesterRegistration: z.string(),
	academicFaculty: z.string(),
	academicDepartment: z.string(),
	course: z.string(),
	faculty: z.string(),
	section: z.number(),
	maxCapacity: z.number(),
	days: z.array(z.string()),
	startTime: z.string(),
	endTime: z.string(),
});
