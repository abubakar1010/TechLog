import connectToDB from "@/lib/db-config";
import User from "@/models/user-model";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { sendVerificationEmail } from "@/helper/send-verification-error";

export const POST = async (request: NextRequest) => {
	await connectToDB();
	try {
		const { username, email, password } = await request.json();

		const verifiedExistingUserWithUsername = await User.findOne({
			username,
			verified: true,
		});
		if (verifiedExistingUserWithUsername) {
			return Response.json(
				{
					success: false,
					message: "User already exist with this username",
				},
				{
					status: 500,
				}
			);
		}

		const existingUserByEmail = await User.findOne({ email });

		const verificationCode = Math.floor(
			100000 + Math.random() * 900000
		).toString();

		const hashedPassword = await bcrypt.hash(password, 10);

		const verificationExpiration = new Date(Date.now() + 3600 * 1000);

		if (existingUserByEmail) {
			if (existingUserByEmail.verified) {
				return Response.json(
					{
						success: false,
						message: "User already exist with this email",
					},
					{
						status: 500,
					}
				);
			} else {
				existingUserByEmail.password = hashedPassword;
				existingUserByEmail.verificationCode = verificationCode;
				existingUserByEmail.verificationCodeExpiry = verificationExpiration;

				await existingUserByEmail.save();
			}
		} else {
			const newUser = new User({
				username,
				email,
				password: hashedPassword,
				verified: false,
				isAcceptingMessage: true,
				verificationCode,
				verificationCodeExpiry: verificationExpiration,
				message: [],
			});
            await newUser.save()
		}
		const verificationEmailResponse = await sendVerificationEmail({
			verificationCode,
			username,
			email,
		});
		if (!verificationEmailResponse.success) {
			return Response.json(
				{
					success: false,
					message: verificationEmailResponse.message,
				},
				{
					status: 500,
				}
			);
		}
		Response.json(
			{
				success: true,
				message: "User successfully Registered",
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		console.log("Failed to registered user", error);
		return Response.json(
			{
				success: false,
				message: "Failed to registered user",
			},
			{
				status: 500,
			}
		);
	}
};
