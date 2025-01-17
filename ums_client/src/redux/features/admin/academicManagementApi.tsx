import { TParams, TReduxResponse } from "../../../types";
import { TAcademicSemester } from "../../../types/academicSemester.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAcademicSemester: builder.query({

            query: (args) => {

                const params = new URLSearchParams()

                args.forEach( (item: TParams) => params.append(item.name, String(item.value)))
                return {
                    url: "/academic-semesters",
                    method: "GET",
                    params
                }
            },
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
        }),
        createAcademicFaculty: builder.mutation({
            query: (data) => ({
                url: "/academic-faculties/create-academic-faculty",
                method: "POST",
                body: data
            })
        })
    })
})

export const {useGetAllAcademicSemesterQuery, useCreateAcademicSemesterMutation, useCreateAcademicFacultyMutation} = academicManagementApi