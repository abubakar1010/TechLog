import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credential) => ({
                url: "/auth/login",
                method: "POST",
                body: credential
            })
        }),
        changePassword: builder.mutation({
			query: (data) => ({
				url: "/auth/change-password",
				method: "POST",
				body: data,
			}),
		}),
    })
})

export const {useLoginMutation, useChangePasswordMutation} = authApi