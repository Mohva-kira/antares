import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = state.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRedevable } = profileSlice.actions;

export default profileSlice.reducer;

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api",
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem('auth')).jwt;

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
    getProfile: builder.query({
      query: (id) => `/users?populate=*&filters[user][$eq]=${id}`,
    }),

    postProfile: builder.mutation({
      query: (data) => ({
        url: `/candidats`,
        method: "POST",
        body: data,
      }),


    }),



  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProfileQuery, usePostProfileMutation, } = profileApi;
