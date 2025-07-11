import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
    data: null,
};


export const offersSlice = createSlice({
    name: "offers",
    initialState,
    reducers: {
        setOffer: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data = state.payload;
        },
    },
});


// Action creators are generated for each case reducer function
export const { setOffer } = offersSlice.actions;

export default offersSlice.reducer;

export const offersApi = createApi({
    reducerPath: 'OffersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gateway.antares-rh.net',
        prepareHeaders: (headers, { getState }) => {
            const token = JSON.parse(localStorage.getItem('auth'))?.jwt;

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            headers.set('Content-type', 'application/json')
            headers.set('Accept', 'application/json')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getOffers: builder.query({
            query: (id) => `/jobs?populate=*&filters[user][$eq]=${id}`,
        }),
        getOffersByName: builder.query({
            query: (name) => `/jobs/getbyname/${name}`,
        }),
        postulateOffer: builder.mutation({
            query: (data) => ({
                url: `/jobs`,
                method: "POST",
                body: data,
            }),
        }),
        getOfferByCompany: builder.query({
            query: (companyName) => `/jobs?filters[company][id][$eq]=${encodeURIComponent(companyName)}&populate=*`,
        }),
        getOfferById: builder.query({
            query: (id) => `/jobs/${id}?populate=*`,
        }),
    }),
});
export const { useGetOffersQuery, usePostulateOfferMutation, useGetOffersByNameQuery, useLazyGetOfferByCompanyQuery } = offersApi;