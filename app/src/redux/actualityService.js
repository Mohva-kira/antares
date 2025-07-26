import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
};

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:1337/api/";


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
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth?.data?.jwt ?? JSON.parse(localStorage.getItem('auth'))?.jwt;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    
      // Ne pas fixer Content-Type si on va uploader un fichier
      if (endpoint !== 'postActuality' && endpoint !== 'updateActuality') {
        // Pour les autres requêtes, on peut fixer Content-Type à application/json
        headers.set("Content-Type", "application/json");
      }
    
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getActuality: builder.query({
      query: () => `/actualites?populate=*`,
    }),
    postActuality: builder.mutation({
      query: (formData) => ({
        url: `/actualites`,
        method: "POST",
        body: formData, // doit être un FormData natif
        // NE PAS mettre Content-Type
      }),
    }),

    updateActuality: builder.mutation({
      query: ({ id, data }) => ({
        url: `/actualites/${id}`,
        method: "PUT",
        body: data, // doit être un FormData natif
        // NE PAS mettre Content-Type
      }),
    }), 

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetActualityQuery, usePostActualityMutation, useUpdateActualityMutation } = actualitiesApi;
