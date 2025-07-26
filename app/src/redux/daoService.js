import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:1337/api/";


export const daoService = createApi({
  reducerPath: "daoService",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = JSON.parse(localStorage.getItem("auth")).jwt;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
    
        return headers;
    },
  }),
  tagTypes: ["Dao"],
  endpoints: (builder) => ({
    // Récupérer tous les DAOs
    getDaos: builder.query({
      query: () => "daos?populate=*",
      providesTags: ["Dao"],
    }),
    
    // Récupérer un DAO par ID
    getDaoById: builder.query({
      query: (id) => `daos/${id}?populate=*`,
      providesTags: ["Dao"],
    }),
    
    // Créer un nouveau DAO
    createDao: builder.mutation({
      query: (data) => ({
        url: "daos",
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Dao"],
    }),
    
    // Mettre à jour un DAO
    updateDao: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `daos/${id}`,
        method: "PUT",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Dao"],
    }),
    
    // Supprimer un DAO
    deleteDao: builder.mutation({
      query: (id) => ({
        url: `daos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Dao"],
    }),
    
    // Récupérer les DAOs par statut
    getDaosByStatus: builder.query({
      query: (status) => `daos?filters[status][$eq]=${status}&populate=*`,
      providesTags: ["Dao"],
    }),
  }),
});

export const {
  useGetDaosQuery,
  useGetDaoByIdQuery,
  useCreateDaoMutation,
  useUpdateDaoMutation,
  useDeleteDaoMutation,
  useGetDaosByStatusQuery,
} = daoService;

export default daoService;