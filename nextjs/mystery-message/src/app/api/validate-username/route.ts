import connectToDB from "@/lib/db-config";
import User from "@/models/user-model";
import { UsernameValidationSchema } from "@/schemas/signUp-schema-validation";
import { z } from "zod";

const usernameNameQuerySchema = z.object({
	username: UsernameValidationSchema,
});

export async function GET(request: Request) {
	await connectToDB();

	try {
		const { searchParams } = new URL(request.url);

		const queryParams = {
			username: searchParams.get("username"),
		};

		const validateUsername = usernameNameQuerySchema.safeParse(queryParams);
		if (!validateUsername.success) {
			const usernameError =
				validateUsername.error.format().username?._errors || [];
			return Response.json(
				{
					success: false,
					message:
						usernameError?.length > 0
							? usernameError?.join(", ")
							: "Invalid username ",
				},
				{
					status: 404,
				}
			);
		}

		const { username } = validateUsername.data;

		const result = await User.findOne({ username, verified: true });

		if (result) {
			return Response.json(
				{
					success: false,
					message: "username already exist",
				},
				{
					status: 409,
				}
			);
		}
		return Response.json(
			{
				success: true,
				message: "username is unique",
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log("Error occurred while validating username", error);

		return Response.json(
			{
				success: false,
				message: "Error occurred while validating username",
			},
			{
				status: 500,
			}
		);
	}
}
