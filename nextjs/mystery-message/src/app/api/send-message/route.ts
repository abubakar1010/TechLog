import connectToDB from "@/lib/db-config";
import User from "@/models/user-model";

export const POST = async (request: Request) => {
	await connectToDB();

	try {
		const { username, content } = await request.json();
		const result = await User.findOne({ username });
		if (!result) {
			return Response.json(
				{
					success: false,
					message: "user not found",
				},
				{
					status: 404,
				}
			);
		}
		if (!result.isAcceptingMessage) {
			return Response.json(
				{
					success: false,
					message: "user is not accepting message yet",
				},
				{
					status: 403,
				}
			);
		}

		result.messages.push(content);

		await result.save();

		return Response.json(
			{
				success: true,
				message: "message send successfully",
				data: result,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log("Failed to send message", error);
		return Response.json(
			{
				success: false,
				message: "Failed to send message",
			},
			{
				status: 500,
			}
		);
	}
};
