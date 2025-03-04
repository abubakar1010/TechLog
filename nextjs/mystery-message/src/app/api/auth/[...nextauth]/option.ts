/* eslint-disable @typescript-eslint/no-explicit-any */
import connectToDB from "@/lib/db-config";
import User from "@/models/user-model";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOption: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",

			credentials: {
				Email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials: any): Promise<any> {
				await connectToDB();
				try {
					const user = await User.findOne({
						$or: [
							{
								email: credentials.identifier,
								username: credentials.identifier,
							},
						],
					});
					if (!user) {
						throw new Error("User not exist with this credential");
					}
					if (!user.validate) {
						throw new Error("Please verify your account before login");
					}
					const isValidPassword = await bcrypt.compare(
						credentials.password,
						user.password
					);
					if (!isValidPassword) {
						throw new Error("Invalid Credential");
					}
					return user;
				} catch (error: any) {
					throw new Error(error);
				}
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			if (token) {
				session.user._id = token._id;
				session.user.username = token.username;
				session.user.isAcceptingMessage = token.isAcceptingMessage;
				session.user.verified = token.verified;
			}
			return session;
            
		},
		async jwt({ token, user }) {
			if (user) {
				token._id = user._id;
				token.username = user.username;
				token.isAcceptingMessage = user.isAcceptingMessage;
				token.verified = user.verified;
			}
			return token;
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXT_AUTH_SECRET,
};
