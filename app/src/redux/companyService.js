import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
    data: null,
};

// Slice pour stocker des données en local (si nécessaire)
const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        setCompany: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setCompany } = companySlice.actions;

// API pour gérer les requêtes HTTP
export const companyApi = createApi({
    reducerPath: "companyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.antares-rh.net/api",
        prepareHeaders: (headers, { getState }) => {
            const token = JSON.parse(localStorage.getItem('auth')).jwt; // Sécuriser l'accès au token
            console.log('le token', token)
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            headers.set("Content-type", "application/json");
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCompany: builder.query({
            query: () => "/companies",
        }),
        getCompanyById: builder.query({
            query: (id) => `/companies/${id}`,
        }),
        postCompany: builder.mutation({
            query: (data) => ({
                url: "/companies",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

// Hooks auto-générés par RTK Query
export const { useLazyGetCompanyQuery, useGetCompanyQuery, usePostCompanyMutation, useGetCompanyByIdQuery } = companyApi;

// Exporte le reducer (si tu veux stocker localement des company en plus de l'API)
export const companyReducer = companySlice.reducer;
