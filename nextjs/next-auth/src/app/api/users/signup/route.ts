/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import sendMail from "@/helper/mailer";
import connectToDB from "@/db-config/db-config";

connectToDB();

export const POST = async (request: NextRequest) => {
	try {
		const requestBody = await request.json();

		const { username, email, password } = requestBody;

		const user = await User.findOne({ email });

		if (user) {
			return NextResponse.json(
				{ error: "User already exist" },
				{ status: 404 }
			);
		}

		const hashPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			username,
			email,
			password: hashPassword,
		});

		const savedUser = await newUser.save();

		console.log(savedUser);

		console.log(savedUser._id);

		const emailResponse = await sendMail({
			email,
			emailType: "VERIFY",
			userId: savedUser._id,
		});

		console.log(emailResponse);

		return NextResponse.json({
			success: true,
			message: "User registered successfully",
			savedUser,
		});
	} catch (error: any) {
		console.log("Something went wrong while registering user", error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};
