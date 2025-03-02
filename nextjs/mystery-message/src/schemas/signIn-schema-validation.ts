import { z } from "zod";
import { EmailValidationSchema, PasswordValidationSchema } from "./signUp-schema-validation";

export const SignInSchemaValidation = z.object({
    identifier: EmailValidationSchema,
    password: PasswordValidationSchema,
});
