import { z } from "zod";

export const adminSchema = z.object({
	password: z.string(),
	admin: z.object({
		designation: z.string(),
		name: z.object({
			firstName: z.string(),
			middleName: z.string(),
			lastName: z.string(),
		}),
		gender: z.string(),
		dateOfBirth: z.string(),
		email: z.string(),
		contactNo: z.string(),
		emergencyContactNo: z.string(),
		bloogGroup: z.string(),
		presentAddress: z.string(),
		permanentAddress: z.string(),
	}),
});
