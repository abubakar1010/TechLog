import { z } from "zod";

export const EmailValidationSchema = z
	.string()
	.regex(
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		"Please enter a valid email address in the format: example@domain.com"
	);
export const PasswordValidationSchema = z
	.string()
	.regex(
		/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
		"Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
	);

export const SignUpSchemaValidation = z.object({
	username: z
		.string()
		.regex(
			/[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
			"Must start with an alphabetic character. Can contain the following characters: a-z A-Z 0-9 - and _ "
		),
	email: EmailValidationSchema,
	password: PasswordValidationSchema,
});
