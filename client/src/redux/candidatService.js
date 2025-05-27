import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
};

export const candidatSlice = createSlice({
  name: "Candidat",
  initialState,
  reducers: {
    setCandidat: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = state.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCandidat } = candidatSlice.actions;

export default candidatSlice.reducer;

export const candidatApi = createApi({
  reducerPath: "candidatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gateway.antares-rh.net",
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
    getCandidats: builder.query({
      query: (id) => `/candidats`,
    }),

    postCandidat: builder.mutation({
      query: (data) => ({
        url: `/candidats`,
        method: "POST",
        body: data,
      }),


    }),

    postResumes: builder.mutation({
      query: (data) => ({
        url: `/candidats`,
        method: "POST",
        body: data,
      }),


    }),

    getResumes: builder.query({
      query: (id) => `/candidats/resume/${id}`,
    }),



  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCandidatsQuery, usePostCandidatMutation, usePostResumesMutation, useGetResumesQuery } = candidatApi;
