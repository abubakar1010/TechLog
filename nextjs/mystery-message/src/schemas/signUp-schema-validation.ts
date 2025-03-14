import { z } from "zod";

export const EmailValidationSchema = z
	.string()
	.regex(
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		"Please enter a valid email address in the format: example@domain.com"
	);
export const UsernameValidationSchema = z
	.string()
	.min(3, "Username must be at least 3 character")
	.max(10, "Username must be no more than 10 character")
	// .regex(
	// 	/[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
	// 	"Must start with an alphabetic character. Can contain the following characters: a-z A-Z 0-9 - and _ "
	// );
export const PasswordValidationSchema = z
	.string()
	.min(8, "Password must be at least 8 character long")
	// .regex(
	// 	/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
	// 	"Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
	// );

export const SignUpSchemaValidation = z.object({
	username: z
		.string(),
		// .regex(
		// 	/[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
		// 	"Must start with an alphabetic character. Can contain the following characters: a-z A-Z 0-9 - and _ "
		// ),
	email: EmailValidationSchema,
	password: PasswordValidationSchema,
});
