import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProject } from "../models/IProject";


export const projectAPI = createApi({
    reducerPath: 'projectAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ['Project'],
    endpoints: (build) => ({
        fetchAllProjects: build.query<IProject[], number>({
            query: (limit: number = 10) => ({
                url: `/projects`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Project']
        }),
        fetchProjectById: build.query<IProject, number>({
            query: (id) => ({
                url: `/projects/${id}`,
                method: 'GET',
            }),
            providesTags: result => ['Project']
        }),
        fetchProjectByNameSearch: build.query<IProject[], string>({
            query: (searchText: string) => ({
                url: `/projects?q=${searchText}`,
                method: 'GET',
            }),
            providesTags: result => ['Project']
        }),
        createProject: build.mutation<IProject, IProject>({
            query: (project) => ({
                url: `/projects`,
                method: 'POST',
                body: project

            }),
            invalidatesTags:  ['Project']
        }),
        updateProject: build.mutation<IProject, IProject>({
            query: (project) => ({
                url: `/projects/${project.id}`,
                method: 'PUT',
                body: project

            }),
            invalidatesTags:  ['Project']
        }),
        deleteProject: build.mutation<IProject, IProject>({
            query: (project) => ({
                url: `/projects/${project.id}`,
                method: 'DELETE'
            }),
            invalidatesTags:  ['Project']
        }),

    })
})