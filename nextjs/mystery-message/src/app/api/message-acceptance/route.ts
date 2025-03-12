import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/option";
import User from "@/models/user-model";
import connectToDB from "@/lib/db-config";

export const POST = async (request: Request) => {
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
		const { status } = await request.json();
		const result = await User.findByIdAndUpdate(
			user._id,
			{
				isAcceptingMessage: status,
			},
			{
				new: true,
			}
		);
		if (!result) {
			return Response.json(
				{
					success: false,
					message: "Failed to update message acceptance status",
				},
				{
					status: 404,
				}
			);
		}
		return Response.json(
			{
				success: true,
				message: "message acceptance status updated successfully",
				data: result,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log("Failed change message acceptance status", error);
		return Response.json(
			{
				success: false,
				message: "Failed change message acceptance status",
			},
			{
				status: 500,
			}
		);
	}
};

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
		const result = await User.findById(user._id);
		if (!result) {
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
				message: "message acceptance status retrieved successfully",
				isAcceptingMessage: result.isAcceptingMessage,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log("Failed to retrieved message acceptance status", error);
		return Response.json(
			{
				success: false,
				message: "Failed to retrieved message acceptance status",
			},
			{
				status: 500,
			}
		);
	}
};
