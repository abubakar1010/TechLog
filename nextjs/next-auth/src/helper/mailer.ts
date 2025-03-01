/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";
const sendMail = async ({
	email,
	emailType,
}: {
	email: string;
	emailType: string;
	userId: string;
}) => {
	try {
		//TODO: Configure mailer for usages

		let subject: string;

		switch (emailType) {
			case "VERIFY":
				subject = "Verify Your email";
				break;

			case "RESET":
				subject = "RESET Your email";
				break;

			default:
				subject = "Please Make Sure You Read This Email";
				break;
		}

		const transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false, // true for port 465, false for other ports
			auth: {
				user: "maddison53@ethereal.email",
				pass: "jn7jnAPss4f63QBp6D",
			},
		});

		const mailOption = {
			from: '"Your Learning Buddy 👻" <abubakar.ai>',
			to: email,
			subject: subject,
			html: "<b>Dude We are Here</b>",
		};
		const mailResponse = await transporter.sendMail(mailOption);

		return mailResponse;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export default sendMail;
