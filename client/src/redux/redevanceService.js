import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
};

export const redevanceSlice = createSlice({
  name: "redevance",
  initialState,
  reducers: {
    setRedevance: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = state.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRedevable } = redevanceSlice.actions;

export default redevanceSlice.reducer;

export const redevanceApi = createApi({
  reducerPath: "redevanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3010",
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
    getRedevance: builder.query({
      query: (id) => `/redevances/${id}`,
    }),

    postRedevance: builder.mutation({
      query: (data) => ({
        url: `/redevances`,
        method: "POST",
        body: data,
      }),


    }),



  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRedevanceQuery, usePostRedevanceMutation, } = redevanceApi;
