import { IUser } from "../user/user.interface";
import Order from "./order.model";
import Product from "../product/product.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { order_utils } from "./order.utils";

const createOrder = async (
	user: IUser,
	payload: { products: { product: string; quantity: number }[] },
	client_ip: string
) => {
	if (!payload.products.length)
		throw new AppError(httpStatus.NOT_ACCEPTABLE, "Order is not specified");

	const products = payload.products;

	let totalPrice = 0;
	const productDetails = await Promise.all(
		products.map(async (item) => {
			const product = await Product.findById(item.product);
			if (product) {
				const subtotal = product ? (product.price || 0) * item.quantity : 0;
				totalPrice += subtotal;
				return item;
			}
		})
	);

	let order = await Order.create({
		user,
		products: productDetails,
		totalPrice,
	});

	const shurjopayPayload = {
		order_id: order.id as string,
		amount: totalPrice,
		currency: "BDT",
		customer_name: user.name!,
		customer_address: user.address!,
		customer_email: user.email!,
		customer_phone: user.phone!,
		customer_city: user.city!,
		client_ip,
	};

	let result;

	result = await order_utils.createPayment(shurjopayPayload);

	console.log(result);

	if (result?.transactionStatus) {
		await Order.findByIdAndUpdate(
			result.customer_order_id,
			{
				transactions: {
					id: result.sp_order_id,
					transactionStatus: result.transactionStatus,
				},
			},
			{ new: true }
		);
	}

	return { order, paymentInfo: result };
};

const verifyPayment = async (order_id: string) => {
	let result;
	result = await order_utils.verifyPayment(order_id);

	console.log("prev", result)

	if (result.length) {
		console.log("first", result[0]);
		result = await Order.findByIdAndUpdate(
			result[0].customer_order_id,
			{transactions: {
				bank_status: result[0].bank_status,
				sp_code: result[0].sp_code,
				sp_message: result[0].sp_message,
				transaction_status: result[0].transaction_status,
				method: result[0].method,
				date_time: result[0].date_time,
			},
		status:result[0].bank_status === "Success"? "Paid" : result[0].bank_status === "Cancel"? "Canceled" : result[0].bank_status === "Failed"? "Pending" : ""
	},
			{ new: true }
		);
	}
	
	console.log(result)

	return result;
};

export const orderService = {
	createOrder,
	getOrders,
	verifyPayment,
};
