import { z } from "zod";
import { EmailValidationSchema } from "./signUp-schema-validation";

export const MessageSchemaValidation = z.object({
	email: EmailValidationSchema,
	message: z.string().min(10, "Message must be at least 30 characters").max(30, "Message must be not more than 30 characters"),
});
