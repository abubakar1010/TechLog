import { z } from "zod";

export const nameSchema = z.object({
	firstName: z.string().nonempty("First name is required."),
	middleName: z.string().optional(), // Assuming middle name can be optional
	lastName: z.string().nonempty("Last name is required."),
});

export const guardianSchema = z.object({
	fatherName: z.string().nonempty("Father's name is required."),
	fatherOccupation: z.string().nonempty("Father's occupation is required."),
	fatherContactNo: z.string().nonempty("Father's contact number is required."),
	// .regex(/^\d{3}-\d{3}-\d{4}$/, "Father's contact number must follow the format: xxx-xxx-xxxx."),
	motherName: z.string().nonempty("Mother's name is required."),
	motherOccupation: z.string().nonempty("Mother's occupation is required."),
	motherContactNo: z.string().nonempty("Mother's contact number is required."),
	// .regex(/^\d{3}-\d{3}-\d{4}$/, "Mother's contact number must follow the format: xxx-xxx-xxxx."),
});

export const localGuardianSchema = z.object({
	name: z.string().nonempty("Local guardian's name is required."),
	occupation: z.string().nonempty("Local guardian's occupation is required."),
	contactNo: z
		.string()
		.nonempty("Local guardian's contact number is required."),
	// .regex(/^\d{3}-\d{3}-\d{4}$/, "Local guardian's contact number must follow the format: xxx-xxx-xxxx."),
	address: z.string().nonempty("Local guardian's address is required."),
});

export const studentSchema = z.object({
	name: nameSchema,
	gender: z.enum(["male", "female"], {
		required_error: "Gender is required",
		invalid_type_error: "Gender should be male or female",
	}),
	dateOfBirth: z.any(),
	email: z.string().email("A valid email address is required."),
	contactNo: z.string().nonempty("Contact number is required."),
	emergencyContactNo: z
		.string()
		.nonempty("Emergency contact number is required."),
	bloogGroup: z.string().nonempty("Blood group is required."),
	presentAddress: z.string().nonempty("Present address is required."),
	permanentAddress: z.string().nonempty("Permanent address is required."),
	guardian: guardianSchema,
	localGuardian: localGuardianSchema,
	admissionSemester: z.string().nonempty("Admission semester is required."),
	academicDepartment: z.string().nonempty("Academic department is required."),
});

export const rootStudentSchema = z.object({
	// Uncomment if password validation is required
	// password: z.string().nonempty("Password is required."),
	student: studentSchema,
});
