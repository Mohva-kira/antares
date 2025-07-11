import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

// Slice pour l'état des candidats
const candidatSlice = createSlice({
  name: "candidat",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCandidat: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCandidat } = candidatSlice.actions;

export default candidatSlice.reducer;

// Configuration des URLs
const api_url = import.meta.env.VITE_API_URL || "https://api.antares-rh.net/api";
const api_gateway = import.meta.env.VITE_API_GATEWAY || "https://gateway.antares-rh.net";

// API service
export const candidatApi = createApi({
  reducerPath: "candidatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api_gateway, // Supprimé car nous utilisons des URLs complètes
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem("auth"))?.jwt;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Content-type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Utilise l'API Gateway pour récupérer les candidats
    getCandidats: builder.query({
      query: () => `/candidats`,
    }),

    // Utilise l'API Gateway pour créer un candidat
    postCandidat: builder.mutation({
      query: (data) => ({
        url: `/candidats`,
        method: "POST",
        body: data,
      }),
    }),

    // Utilise l'API Gateway pour créer un CV
    postResumes: builder.mutation({
      query: (data) => ({
        url: `/candidats`,
        method: "POST",
        body: data,
      }),
    }),

    // Utilise l'API Gateway pour récupérer les CVs par utilisateur
    getResumes: builder.query({
      query: (id) => `/candidats/resume/${id}`,
    }),

    // Utilise l'API directe pour mettre à jour un CV
    updateResume: builder.mutation({
      query: ({ id, data }) => ({
        url: `https://api.antares-rh.net/api/resumes/${id}`,
        method: "PUT",
        body: {data},
      }),
    }),

    // Utilise l'API directe pour supprimer un CV
    deleteResume: builder.mutation({
      query: (id) => ({
        url: `${api_url}/resumes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetCandidatsQuery,
  usePostCandidatMutation,
  usePostResumesMutation,
  useGetResumesQuery,
  useLazyGetResumesQuery,
  useUpdateResumeMutation,
  useDeleteResumeMutation,
} = candidatApi;