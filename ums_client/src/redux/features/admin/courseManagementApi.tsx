import { TParams, TReduxResponse } from "../../../types";
import { TCourse } from "../../../types/course.type";
import { Faculty } from "../../../types/faculty";
import { TOfferedCourse } from "../../../types/offerCourse.type";
import { TRegisteredSemester } from "../../../types/registerSemester.type";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCourse: builder.query({
            query: (args = []) => {
                const params = new URLSearchParams();

                args.forEach((item: TParams) =>
                    params.append(item.name, item.value as string)
                );
                return {
                    url: "/courses",
                    method: "GET",
                    params,
                };
            },
            transformResponse: (response: TReduxResponse<TCourse[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        getCourseFaculty: builder.query({
            query: (courseId) => {
                return {
                    url: `/courses/${courseId}/get-faculties`,
                    method: "GET"
                };
            },
            transformResponse: (response: TReduxResponse<Faculty[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        assignFaculty: builder.mutation({
            query: (arg) => {
                console.log("first", arg)
                return {
                    url: `/courses/${arg.courseId}/assign-faculties`,
                    method: "PUT",
                    body: arg.data,
                }
            },
        }),
        createCourse: builder.mutation({
            query: (data) => ({
                url: "/courses/create-course",
                method: "POST",
                body: data,
            }),
        }),
        getAllRegisteredSemester: builder.query({
            query: (args = []) => {
                const params = new URLSearchParams();
                args.forEach((item: TParams) =>
                    params.append(item.name, item.value as string)
                );
                return {
                    url: "/semester-registrations",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["registeredSemester"],
            transformResponse: (response: TReduxResponse<TRegisteredSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        registerSemester: builder.mutation({
            query: (data) => ({
                url: "/semester-registrations/create-semester-registration",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["registeredSemester"]
        }),
        changeSemesterStatus: builder.mutation({
            query: (arg) => {
                console.log(arg)
                return {
                    url: `/semester-registrations/${arg.semesterId}`,
                    method: "PATCH",
                    body: arg.data,
                }
            },
            invalidatesTags: ["registeredSemester"]
        }),
        getAllOfferedCourse: builder.query({
            query: (args = []) => {
                const params = new URLSearchParams();
                args.forEach((item: TParams) =>
                    params.append(item.name, item.value as string)
                );
                return {
                    url: "/offered-courses",
                    method: "GET",
                    params,
                };
            },
            transformResponse: (response: TReduxResponse<TOfferedCourse[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        createOfferCourse: builder.mutation({
            query: (data) => ({
                url: "/offered-courses/create-offered-course",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useCreateCourseMutation,
    useGetAllCourseQuery,
    useGetAllOfferedCourseQuery,
    useCreateOfferCourseMutation,
    useGetAllRegisteredSemesterQuery,
    useRegisterSemesterMutation,
    useAssignFacultyMutation,
    useGetCourseFacultyQuery,
    useChangeSemesterStatusMutation
    
} = courseManagementApi;
