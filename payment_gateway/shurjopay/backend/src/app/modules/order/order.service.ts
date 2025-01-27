import { IUser } from "../user/user.interface";
import Order from "./order.model";
import Product from "../product/product.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import createPayment from "./order.utils";

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

	const result = await createPayment(shurjopayPayload);

	console.log(result)

	return { order, paymentInfo: result };
};

const getOrders = async () => {};

const verifyPayment = async (sp_trxn_id: string) => {};

export const orderService = {
	createOrder,
	getOrders,
	verifyPayment,
};
