import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
};

export const actualitySlice = createSlice({
  name: "Actuality",
  initialState,
  reducers: {
    setActuality: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = state.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActuality } = actualitySlice.actions;

export default actualitySlice.reducer;

export const actualitiesApi = createApi({
  reducerPath: "actualitiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.antares-rh.net/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.data.jwt;

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
    getActuality: builder.query({
      query: () => `/actualites?populate=*`,
    }),

    postActuality: builder.mutation({
      query: (data) => ({
        url: `/actualites`,
        method: "POST",
        body: data,
        formData: true, // Use FormData for file uploads
      }),


    }),



  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetActualityQuery, usePostActualityMutation } = actualitiesApi;
