import { z } from "zod";

export const CourseSchema = z.object({
	title: z.string(),
	prefix: z.string(),
	code: z.string(),
	credits: z.string(),
	preRequisiteCourses: z.string().array().optional(),
});
