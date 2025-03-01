import { model, models, Schema } from "mongoose";


export type TUser = {
	username: string;
	email: string;
	password: string;
	role?: "USER" | "ADMIN",
	verified: boolean;
	forgotPasswordToken: string;
	forgotPasswordTokenExpiration: string;
	verifyToken: string;
	verifyTokenExpiration: string;
}

const userSchema = new Schema<TUser>(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		verified: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: String,
		forgotPasswordTokenExpiration: Date,
		verifyToken: String,
		verifyTokenExpiration: Date,
	},
	{
		timestamps: true,
	}
);

const User = models.users || model<TUser>("users", userSchema);

export default User;
