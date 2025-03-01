/* eslint-disable @typescript-eslint/no-explicit-any */
import User from "@/models/user-model";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

const sendMail = async ({
	email,
	emailType,
	userId,
}: {
	email: string;
	emailType: string;
	userId: string;
}) => {
	try {

		let subject: string;
		let verifyToken: string;

		if (emailType === "VERIFY") {
			verifyToken = await bcrypt.hash(userId.toString(), 10);
			await User.findByIdAndUpdate(userId, {
				verifyToken,
				verifyTokenExpiration: Date.now() + 3600 * 1000,
			});

			subject = "Verify Your email";
		} else {
			verifyToken = await bcrypt.hash(userId.toString(), 10);
			await User.findByIdAndUpdate(userId, {
				verifyToken,
				verifyTokenExpiration: Date.now() + 3600 * 1000,
			});
			subject = "RESET Your email";
		}

		const transporter = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "77d6d94fb04d65",
				pass: "52123e8b7a89d2",
			},
		});

		const mailOption = {
			from: '"Your Learning Buddy 👻" <abubakar.ai>',
			to: email,
			subject: subject,
			html: `<p>
            Please Click 
            <a href="${process.env.DOMAIN}/${emailType.toLocaleLowerCase()}?token=${verifyToken}">Here</a> to ${subject} <br />
            or copy past the link below in your browser.
            ${verifyToken}
            </p>

            `,
		};
		const mailResponse = await transporter.sendMail(mailOption);

		return mailResponse;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export default sendMail;
