import connectToDB from "@/lib/db-config";
import User from "@/models/user-model";

export const POST = async (request: Request) => {
	await connectToDB();
	try {
		const { username, otp } = await request.json();

		const decodedUsername = decodeURIComponent(username);

		const user = await User.findOne({ username: decodedUsername });
		if (!user) {
			return Response.json(
				{
					success: false,
					message: "User not exist with this username",
				},
				{
					status: 404,
				}
			);
		}
		if (new Date(user.verificationCodeExpiry) < new Date()) {
			return Response.json(
				{
					success: false,
					message: "Verify code expired",
				},
				{
					status: 400,
				}
			);
		}
		if (user.verificationCode !== otp) {
			return Response.json(
				{
					success: false,
					message: "Invalid verification code",
				},
				{
					status: 403,
				}
			);
		}
		user.verified = true;

		await user.save();
		return Response.json(
			{
				success: true,
				message: "User is verified",
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log("Failed to verify otp", error);
		return Response.json(
			{
				success: false,
				message: "Failed to verify otp",
			},
			{
				status: 500,
			}
		);
	}
};
