import User from "@/models/user-model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectToDB from "@/db-config/db-config";

/* eslint-disable @typescript-eslint/no-explicit-any */

connectToDB();

export const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();

		const { email, password } = reqBody;

		const user = await User.findOne({ email });

		if (!user) {
			return NextResponse.json(
				{
					message: "Invalid Credential",
				},
				{
					status: 404,
				}
			);
		}

		const validPassword = bcrypt.compare(password, user.password);

		if (!validPassword) {
			return NextResponse.json(
				{
					message: "Invalid Credential",
				},
				{
					status: 403,
				}
			);
		}

		const jwtPayload = {
			id: user._id,
			username: user.username,
			email: user.email,
		};

		const accessToken = jwt.sign(jwtPayload, process.env.ACCESS_TOKEN_SECRET!, {
			expiresIn: "1h",
		});

		const response = NextResponse.json(
			{
				message: "You are successfully logged in",
			},
			{
				status: 200,
			}
		);

		response.cookies.set("nex-auth-access-toke", accessToken, {
			httpOnly: true,
		});

		return response;
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{ status: 500 }
		);
	}
};
