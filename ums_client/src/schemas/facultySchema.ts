import { z } from "zod";

export const facultySchema = z.object({
		designation: z.string(),
		name: z.object({
			firstName: z.string(),
			middleName: z.string(),
			lastName: z.string(),
		}),
		gender: z.string(),
		email: z.string(),
		dateOfBirth: z.any(),
		contactNo: z.string(),
		emergencyContactNo: z.string(),
		bloogGroup: z.string(),
		presentAddress: z.string(),
		permanentAddress: z.string(),
		academicDepartment: z.string(),

});

