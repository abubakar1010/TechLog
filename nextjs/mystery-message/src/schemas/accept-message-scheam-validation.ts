import { z } from "zod";

export const AcceptSchemaValidation = z.object({
	acceptMessage: z.boolean(),
});
