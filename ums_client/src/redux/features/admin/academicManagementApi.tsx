import { TParams, TReduxResponse } from "../../../types";
import { TAcademicDepartment } from "../../../types/academicDepartment.type";
import { TAcademicFaculty } from "../../../types/academicFaculty.type";
import { TAcademicSemester } from "../../../types/academicSemester.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllAcademicSemester: builder.query({
			query: (args = []) => {
				const params = new URLSearchParams();

				args.forEach((item: TParams) =>
					params.append(item.name, item.value as string)
				);
				return {
					url: "/academic-semesters",
					method: "GET",
					params,
				};
			},
			transformResponse: (response: TReduxResponse<TAcademicSemester[]>) => {
				console.log(response);
				return {
					data: response.data,
					meta: response.meta,
				};
			},
		}),
		createAcademicSemester: builder.mutation({
			query: (data) => ({
				url: "/academic-semesters/create-academic-semester",
				method: "POST",
				body: data,
			}),
		}),
		getAllAcademicFaculty: builder.query({
			query: (args = []) => {
				const params = new URLSearchParams();
				args.forEach((item: TParams) =>
					params.append(item.name, item.value as string)
				);
				return {
					url: "/academic-faculties",
					method: "GET",
					params,
				};
			},
			transformResponse: (response: TReduxResponse<TAcademicFaculty[]>) => {
				console.log(response);
				return {
					data: response.data,
					meta: response.meta,
				};
			},
		}),
		createAcademicFaculty: builder.mutation({
			query: (data) => ({
				url: "/academic-faculties/create-academic-faculty",
				method: "POST",
				body: data,
			}),
		}),
		getAllAcademicDepartment: builder.query({
			query: (args = []) => {
				const params = new URLSearchParams();
				args.forEach((item: TParams) =>
					params.append(item.name, item.value as string)
				);
				return {
					url: "/academic-departments",
					method: "GET",
					params,
				};
			},
			transformResponse: (response: TReduxResponse<TAcademicDepartment[]>) => {
				console.log(response);
				return {
					data: response.data,
					meta: response.meta,
				};
			},
		}),
		createAcademicDepartment: builder.mutation({
			query: (data) => ({
				url: "/academic-departments/create-academic-department",
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const {
	useGetAllAcademicSemesterQuery,
	useCreateAcademicSemesterMutation,
	useCreateAcademicFacultyMutation,
	useGetAllAcademicFacultyQuery,
	useCreateAcademicDepartmentMutation,
	useGetAllAcademicDepartmentQuery,
} = academicManagementApi;
