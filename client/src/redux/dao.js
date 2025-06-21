import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
    data: null,
};

export const daoSlice = createSlice({
    name: "dao",
    initialState,
    reducers: {
        setDao: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data = state.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setDao } = daoSlice.actions;
export default daoSlice.reducer;

export const daoApi = createApi({
    reducerPath: "daoApi",
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
        getDao: builder.query({
            query: (id) => `/appel-offres?sort=createdAt:desc&populate=*`,
        }),
        postDao: builder.mutation({
            query: (data) => ({
                url: `/appel-offres`,
                method: "POST",
                body: data,
            }),
        }),
        getDaoByName: builder.query({
            query: (name) => `/appel-offres?populate=*&filters[titre][$eq]=${encodeURIComponent(name)}`,
          }),
        getDaoById: builder.query({
            query: (id) => `/appel-offres/${id}`,
        }),
      
    }),
});

// Exports des hooks générés automatiquement par RTK Query
export const {
    useGetDaoQuery,
    usePostDaoMutation,
    useGetDaoByIdQuery,
    useGetDaoByNameQuery,
    useLazyGetDaoByNameQuery,

} = daoApi;