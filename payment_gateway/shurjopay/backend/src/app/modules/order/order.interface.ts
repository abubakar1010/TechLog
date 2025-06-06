import { Document, Types } from "mongoose";

export interface IOrder extends Document {
	user: Types.ObjectId;
	products: {
		product: Types.ObjectId;
		quantity: number;
	}[];
	totalPrice: number;
	status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
	createdAt?: Date;
	updatedAt?: Date;
	transactions: {
		id: String;
		transactionStatus: String;
		bank_status: String;
		sp_code: String;
		sp_message: String;
		transaction_status: String;
		method: String;
		date_time: String;
	};
}
