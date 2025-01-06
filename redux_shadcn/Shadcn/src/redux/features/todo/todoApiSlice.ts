import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApiSlice = createApi(
    {
        reducerPath: "api",
        baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api"}),
        tagTypes: ["task"],
        endpoints(builder) {
            return{
                getTasks: builder.query({
                    query: () => "/tasks",
                    providesTags: ["task"]
                }),
                createTask: builder.mutation({
                    query: (taskData) => ({
                        method: "POST",
                        url: "/tasks",
                        body: taskData
                        
                    }),
                    invalidatesTags: ["task"]
                }),
            }
        },
    }
)

export const {useGetTasksQuery, useCreateTaskMutation} = todoApiSlice