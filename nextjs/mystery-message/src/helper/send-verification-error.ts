/* eslint-disable @typescript-eslint/no-unused-vars */
import { IApiResponse } from "@/types/api-response";
import VerificationEmail from "../../email/verification-email";
import { resend } from "@/lib/resend";

export const sendVerificationEmail = async ({
	username,
	email,
	verificationCode,
}: {
	username: string;
	email: string;
	verificationCode: string;
}): Promise<IApiResponse> => {
	try {
		const { data, error } = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: email,
			subject: "Hello world",
			react: VerificationEmail({ url: "", username, otp: verificationCode }),
		});

		if (error) {
			return { message: "Failed To send message", success: false };
		}

		return {
			success: true,
			message: "Verification email send successfully",
		};
	} catch (error) {
		console.log("Failed to send verification email", error);
		return {
			success: false,
			message: "Failed to send verification email",
		};
	}
};
