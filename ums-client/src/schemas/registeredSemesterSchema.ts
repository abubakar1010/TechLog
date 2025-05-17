import { z } from "zod";

export const registerSemesterSchema = z.object({
	academicSemester: z.string(),
	status: z.string(),
	date: z
		.array(z.object({ $d: z.any()}))
		.nonempty({ message: "Pick a date" }),
	minCredit: z.string(),
	maxCredit: z.string(),
});
