import { TParams } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createStudent: builder.mutation({
			query: (data) => ({
				url: "users/create-student",
				method: "POST",
				body: data,
			}),
		}),
		getAllStudent: builder.query({
			query: (args = []) => {
				const params = new URLSearchParams();
				args.forEach((item: TParams) =>
					params.append(item.name, item.value as string)
				);
				return {
					url: "/",
					method: "GET",
					params,
				};
			},
		}),
	}),
});

export const { useCreateStudentMutation } = userManagementApi;
