import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
    data: null,
};

export const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        setApplication: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data = state.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setApplication } = applicationSlice.actions;
export default applicationSlice.reducer;

export const applicationApi = createApi({
    reducerPath: "applicationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.antares-rh.net/api",
        prepareHeaders: (headers, { getState }) => {
            const token = JSON.parse(localStorage.getItem("auth")).jwt;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            headers.set("Content-type", "application/json");
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getApplication: builder.query({
            query: () => `/applications?populate[candidat]=*&populate[job][populate]=*`,
        }),
        postApplication: builder.mutation({
            query: (data) => ({
                url: `/applications`,
                method: "POST",
                body: data,
            }),
        }),
        getApplicationById: builder.query({
            query: (id) => `/applications/${id}`,
        }),
        getApplicationByUserId: builder.query({
            query: (id) => `/applications?filters[candidat][id][$eq]=${id}&populate[candidat]=*&populate[job][populate]=*`,
        }),
    }),
});

// Exports des hooks générés automatiquement par RTK Query
export const {
    useGetApplicationQuery,
    usePostApplicationMutation,
    useGetApplicationByIdQuery,
    useGetApplicationByUserIdQuery
} = applicationApi;