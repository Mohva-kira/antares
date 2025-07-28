import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
    data: null,
};

export const bulletinSlice = createSlice({
    name: "bulletin",
    initialState,
    reducers: {
        setBulletin: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data = state.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setBulletin } = bulletinSlice.actions;
export default bulletinSlice.reducer;

export const bulletinApi = createApi({
    reducerPath: "bulletinApi",
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
        getBulletin: builder.query({
            query: (id) => `/bulletins?sort=createdAt:desc&populate=*`,
        }),
        postBulletin: builder.mutation({
            query: (data) => ({
                url: `/bulletins`,
                method: "POST",
                body: data,
            }),
        }),
        getBulletinByName: builder.query({
            query: (name) => `/bulletins?populate=*&filters[titre][$eq]=${encodeURIComponent(name)}`,
          }),
        getBulletinById: builder.query({
            query: (id) => `/bulletins/${id}`,
        }),

        getBulletinByUser: builder.query({
            query: (userId) => `/bulletins?populate=*&filters[user][id][$eq]=${userId}`,
        }),
      
    }),
});

// Exports des hooks générés automatiquement par RTK Query
export const {
    useGetBulletinQuery,
    usePostBulletinMutation,
    useGetBulletinByIdQuery,
    useGetBulletinByNameQuery,
    useLazyGetBulletinByNameQuery,
    useLazyGetBulletinByUserQuery,

} = bulletinApi;