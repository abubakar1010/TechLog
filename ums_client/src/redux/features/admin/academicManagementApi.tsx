import { TReduxResponse } from "../../../types";
import { TAcademicSemester } from "../../../types/academicSemester.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAcademicSemester: builder.query({
            query: () => ({
                url: "/academic-semesters",
                method: "GET",
            }
        ),
        transformResponse: (response: TReduxResponse<TAcademicSemester[]>) => {
            console.log(response)
            return {
                data: response.data,
                meta: response.meta
            }
        }
        }),
        createAcademicSemester: builder.mutation({
            query: (data) => ({
                url: "/academic-semesters/create-academic-semester",
                method: "POST",
                body: data
            })
        })
    })
})

export const {useGetAllAcademicSemesterQuery, useCreateAcademicSemesterMutation} = academicManagementApi