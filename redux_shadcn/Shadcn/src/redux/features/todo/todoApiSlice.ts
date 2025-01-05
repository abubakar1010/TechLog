import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApiSlice = createApi(
    {
        reducerPath: "api",
        baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api"}),
        endpoints(builder) {
            return{
                getTasks: builder.query({
                    query: () => "/tasks"
                })
            }
        },
    }
)

export const {useGetTasksQuery} = todoApiSlice