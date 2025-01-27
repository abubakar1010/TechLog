import Shurjopay, { PaymentResponse, VerificationResponse } from "shurjopay";
import config from "../../config";

export type TCheckoutData = {
order_id: string;
amount: number;
currency: string;
customer_name: string;
customer_address: string;
customer_email: string;
customer_phone: string;
customer_city: string;
client_ip: string;
}

const shurjopay = new Shurjopay()
shurjopay.config(
	config.payment_gateway.shurjopay.sp_endpoint!,
	config.payment_gateway.shurjopay.sp_username!,
	config.payment_gateway.shurjopay.sp_password!,
	config.payment_gateway.shurjopay.sp_prefix!,
	config.payment_gateway.shurjopay.sp_return_url!
);



const createPayment = (checkout_data: TCheckoutData ): Promise<PaymentResponse> => {
	return new Promise((resolve, reject) => {
		shurjopay.makePayment(checkout_data, (response) => resolve(response), (error) => reject(error) )
	})
}

const verifyPayment = (order_id: string ): Promise<VerificationResponse[]> => {
	return new Promise((resolve, reject) => {
		shurjopay.verifyPayment(order_id, (response) => resolve(response), (error) => reject(error) )
	})
}

export const order_utils =  {createPayment, verifyPayment}