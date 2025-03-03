import { IMessage } from "@/models/user-model";

export interface IApiResponse {
	success: boolean;
	message: string;
	acceptingMessage?: boolean;
	messages?: IMessage[];
}
