import connectToDB from "@/db-config/db-config";
import User from "@/models/user-model";
import { NextRequest, NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */

connectToDB();

export const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();

		const { token } = reqBody;

		console.log("token", token)

		if (!token) {
			return NextResponse.json(
				{
					message: "You are not authorized",
				},
				{
					status: 403,
				}
			);
		}

		const user = await User.findOne({
			verifyToken: token,
			verifyTokenExpiration: {
				$gt: Date.now(),
			},
		});

		console.log("user before modify", user, token)

		if (!user) {
			return NextResponse.json(
				{
					message: "Your session expired",
				},
				{
					status: 403,
				}
			);
		}
		console.log("user", user)

		user.verified = true;

		user.verifyToken = null;

		await user.save();


		return NextResponse.json(
			{
				success: true,
				message: "You are successfully verified",
			},
			{
				status: 200,
			}
		);
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{ status: 500 }
		);
	}
};
