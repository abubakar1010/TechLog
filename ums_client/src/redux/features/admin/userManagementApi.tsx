import { TParams, TReduxResponse } from "../../../types";
import { TFaculty } from "../../../types/faculty";
import { TStudent } from "../../../types/student.type";
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
					url: "/students",
					method: "GET",
					params,
				};
			},
			transformResponse: (response: TReduxResponse<TStudent[]>) => {
				console.log(response);
				return {
					data: response.data,
					meta: response.meta,
				};
			},
		}),
		createFaculty: builder.mutation({
			query: (data) => ({
				url: "users/create-faculty",
				method: "POST",
				body: data,
			}),
		}),
		getAllFaculty: builder.query({
			query: (args = []) => {
				const params = new URLSearchParams();
				args.forEach((item: TParams) =>
					params.append(item.name, item.value as string)
				);
				return {
					url: "/faculties",
					method: "GET",
					params,
				};
			},
			transformResponse: (response: TReduxResponse<TFaculty[]>) => {
				console.log(response);
				return {
					data: response.data,
					meta: response.meta,
				};
			},
		}),
		createAdmin: builder.mutation({
			query: (data) => ({
				url: "users/create-admin",
				method: "POST",
				body: data,
			}),
		}),
		getAllAdmin: builder.query({
			query: (args = []) => {
				const params = new URLSearchParams();
				args.forEach((item: TParams) =>
					params.append(item.name, item.value as string)
				);
				return {
					url: "/students",
					method: "GET",
					params,
				};
			},
			transformResponse: (response: TReduxResponse<TStudent[]>) => {
				console.log(response);
				return {
					data: response.data,
					meta: response.meta,
				};
			},
		}),
		
	}),
});

export const { useCreateStudentMutation, useGetAllStudentQuery, useCreateFacultyMutation, useCreateAdminMutation, useGetAllFacultyQuery, useGetAllAdminQuery } =
	userManagementApi;
