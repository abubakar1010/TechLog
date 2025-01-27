import { VerificationResponse } from "shurjopay";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { IOrder } from "./order.interface";
import { orderService } from "./order.service";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req, res) => {
  const user = req.user;
  const order = await orderService.createOrder(user, req.body, req.ip!);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Order placed successfully",
    data: order,
  });
});

const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(
    req.query.order_id as string
  );

  sendResponse<VerificationResponse[] | IOrder>(res, {
    statusCode: httpStatus.CREATED,
    message: "Order verified successfully",
    data: order,
  });
});


const getOrders = catchAsync(async(req, res) => {
  const orders = await orderService.getOrders()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Order retrieved successfully",
    data: orders,
  });
})
export const orderController = { createOrder, verifyPayment, getOrders };
