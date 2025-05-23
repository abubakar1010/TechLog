import { z } from "zod";

export const VerifySchemaValidation = z.object({
	otp: z
		.string()
		.regex(/^\d{6}$/, "Invalid OTP. Please enter a valid 6-digit numeric code."),
});
