import * as React from "react";
import {
	Html,
	Button,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import Head from "next/head";

export function VerificationEmail({
	url,
	username,
	otp,
}: {
	url: string;
	username: string;
	otp: string;
}) {
	return (
		<Html lang="en">
			<Head>
				<title>Verification Code</title>
			</Head>
			<Preview>Here&apos;s your verification code.</Preview>
			<Section>
				<Row>Hello. {username},</Row>
				<Row>
					<Text>
						Thank You for register.Please use following verification code to
						complete the registration
					</Text>
				</Row>
				<Row>
					<Text>OTP: {otp}</Text>
				</Row>
				<Row>
					<Text>
						If you didn&apos;t request this code, please ignore this email
					</Text>
				</Row>
				<Row>
					<Button href={url}>Click me</Button>
				</Row>
			</Section>
		</Html>
	);
}

export default VerificationEmail;
