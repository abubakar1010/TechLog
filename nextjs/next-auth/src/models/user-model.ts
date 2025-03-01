import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
	{
		name: {
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
		resetToken: String,
		resetTokenExpiration: Date,
		forgotPasswordToken: String,
		forgotPasswordTokenExpiration: Date,
		verifyToken: String,
		verifyTokenExpiration: Date,
	},
	{
		timestamps: true,
	}
);

const User = models.users || model("users", userSchema);

export default User;
