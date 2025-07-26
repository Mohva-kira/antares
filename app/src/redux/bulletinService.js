import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:1337/api/";

export const bulletinApi = createApi({
  reducerPath: "bulletinService ",
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
  tagTypes: ["Bulletin"],
  endpoints: (builder) => ({
    // Récupérer tous les bulletins
    getBulletins: builder.query({
      query: () => "bulletins?populate=*",
      providesTags: ["Bulletin"],
    }),
    
    // Récupérer un bulletin par ID
    getBulletinById: builder.query({
      query: (id) => `bulletins/${id}?populate=*`,
      providesTags: ["Bulletin"],
    }),
    
    // Créer un nouveau bulletin
    createBulletin: builder.mutation({
      query: (formData) => ({
        url: "bulletins",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Bulletin"],
    }),

    uploadFile: builder.mutation({
        query: (formData) => ({
            url: "upload",
            method: "POST",
            body: formData,
            formData: true
           
        }),
        invalidatesTags: ["Bulletin"],
        }),
    
    // Mettre à jour un bulletin
    updateBulletin: builder.mutation({
      query: ({ id, ...formData }) => ({
        url: `bulletins/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Bulletin"],
    }),
    
    // Supprimer un bulletin
    deleteBulletin: builder.mutation({
      query: (id) => ({
        url: `bulletins/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bulletin"],
    }),
    
    // Récupérer les bulletins par utilisateur
    getBulletinsByUser: builder.query({
      query: (userId) => `bulletins?filters[user][id][$eq]=${userId}&populate=*`,
      providesTags: ["Bulletin"],
    }),
    
    // Récupérer les bulletins par entreprise
    getBulletinsByCompany: builder.query({
      query: (companyId) => `bulletins?filters[company][id][$eq]=${companyId}&populate=*`,
      providesTags: ["Bulletin"],
    }),
    
    // Récupérer les bulletins par mois
    getBulletinsByMonth: builder.query({
      query: (monthNb) => `bulletins?filters[month_nb][$eq]=${monthNb}&populate=*`,
      providesTags: ["Bulletin"],
    }),
  }),
});

export const {
  useGetBulletinsQuery,
  useGetBulletinByIdQuery,
  useCreateBulletinMutation,
  useUpdateBulletinMutation,
  useDeleteBulletinMutation,
  useGetBulletinsByUserQuery,
  useGetBulletinsByCompanyQuery,
  useGetBulletinsByMonthQuery,
    useUploadFileMutation,
    useLazyGetBulletinsByUserQuery
} = bulletinApi;

export default bulletinApi;