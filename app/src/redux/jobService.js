import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
    data: null,
};

// Slice pour stocker des données en local (si nécessaire)
const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setJobs } = jobsSlice.actions;

// API pour gérer les requêtes HTTP
export const jobsApi = createApi({
    reducerPath: "jobsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3010",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth?.data?.jwt; // Sécuriser l'accès au token
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            headers.set("Content-type", "application/json");
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => "/jobs",
        }),
        getJobsById: builder.query({
            query: (id) => `/jobs/${id}`,
        }),
        postJobs: builder.mutation({
            query: (data) => ({
                url: "/jobs",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

// Hooks auto-générés par RTK Query
export const { useGetJobsQuery, usePostJobsMutation, useGetJobsByIdQuery } = jobsApi;

// Exporte le reducer (si tu veux stocker localement des jobs en plus de l'API)
export const jobsReducer = jobsSlice.reducer;
