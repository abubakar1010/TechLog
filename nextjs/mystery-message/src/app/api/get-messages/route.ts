import connectToDB from "@/lib/db-config";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/option";
import User from "@/models/user-model";
import { Types } from "mongoose";

export const GET = async () => {
	await connectToDB();

	const session = await getServerSession(authOption);

	const user = session?.user;

	if (!user) {
		return Response.json(
			{
				success: false,
				message: "Unauthorized attempts",
			},
			{
				status: 401,
			}
		);
	}

	try {
		const userId = new Types.ObjectId(user._id);
		const result = await User.aggregate([
			{
				$match: { _id: userId },
			},
			{
				$unwind: "$messages",
			},
			{
				$sort: { "messages.createdAt": -1 },
			},
			{
				$group: { _id: "$_id", messages: { $push: "$messages" } },
			},
		]);
		if (!result || result.length === 0) {
			return Response.json(
				{
					success: false,
					message: "User not found",
				},
				{
					status: 404,
				}
			);
		}
		return Response.json(
			{
				success: true,
				message: "messages retrieved successfully",
				data: result[0].messages,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log("Failed to retrieved messages", error);
		return Response.json(
			{
				success: false,
				message: "Failed to retrieved messages ",
			},
			{
				status: 500,
			}
		);
	}
};
