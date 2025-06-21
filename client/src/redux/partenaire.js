import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
    data: null,
};

export const partenaireSlice = createSlice({
    name: "partenaire",
    initialState,
    reducers: {
        setPartenaire: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data = state.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPartenaire } = partenaireSlice.actions;
export default partenaireSlice.reducer;

export const partenaireApi = createApi({
    reducerPath: "partenaireApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.antares-rh.net/api",
        prepareHeaders: (headers, { getState }) => {
            const token = JSON.parse(localStorage.getItem("auth")).jwt;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            headers.set("Content-type", "partenaire/json");
            headers.set("Accept", "partenaire/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getPartenaire: builder.query({
            query: (id) => `/partenaires?sort=createdAt:desc&populate=*`,
        }),
        postPartenaire: builder.mutation({
            query: (data) => ({
                url: `/partenaires`,
                method: "POST",
                body: data,
            }),
        }),
        getPartenaireById: builder.query({
            query: (id) => `/partenaires/${id}`,
        }),
      
    }),
});

// Exports des hooks générés automatiquement par RTK Query
export const {
    useGetPartenaireQuery,
    usePostPartenaireMutation,
    useGetPartenaireByIdQuery,

} = partenaireApi;