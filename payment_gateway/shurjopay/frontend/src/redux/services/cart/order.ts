// import { useSearchParams } from "react-router";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createOrder: builder.mutation({
			query: (orderInfo) => ({
				url: "/order",
				method: "POST",
				body: orderInfo,
			}),
		}),
		getOrders: builder.query({
			query: () => "/order",
		}),
        verifyOrder: builder.query({
        
            query: (id) => {
                return {
                    url: "order/verify",
                    method: "GET",
                    params: {order_id: id}
                }
            }
        })
	}),
});

export const { useCreateOrderMutation, useGetOrdersQuery,useVerifyOrderQuery } = orderApi;
