import { IMessage } from "@/models/user-model";

export interface IApiResponse {
	success: boolean;
	message: string;
	isAcceptingMessage?: boolean;
	messages?: IMessage[];
}
