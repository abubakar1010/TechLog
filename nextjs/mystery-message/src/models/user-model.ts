import { model, Model, models, Schema } from "mongoose";

export interface IMessage extends Document {
	message: string;
	user: Schema.Types.ObjectId;
}

const MessageSchema: Schema<IMessage> = new Schema({
	message: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		required: true,
	},
});

export interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	verified: boolean;
	isAcceptingMessage: boolean;
	verificationCode: string;
	verificationCodeExpiry: Date;
	message: IMessage;
}

const UserSchema: Schema<IUser> = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [
				/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
				"Please enter a valid email",
			],
		},
		password: {
			type: String,
			required: true,
		},
		verificationCode: {
			type: String,
			required: true,
		},
		verificationCodeExpiry: {
			type: Date,
			required: true,
		},
		verified: {
			type: Boolean,
			required: true,
		},
		isAcceptingMessage: {
			type: Boolean,
			required: true,
		},
		message: [MessageSchema],
	},
	{
		timestamps: true,
	}
);

const User =
	(models.users as Model<IUser>) || model<IUser>("users", UserSchema);

export default User;
