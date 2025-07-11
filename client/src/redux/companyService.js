import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit'

const api_url = import.meta.env.VITE_API_URL || 'https://api.antares-rh.net/api'
// RTK Query API
export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.antares-rh.net/api', // URL de base pour les requêtes	    
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem('auth'))?.jwt
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      headers.set("Content-type", "application/json");
      headers.set("Accept", "application/json");
      return headers
    },
  }),
  tagTypes: ['Company'],
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => '/companies?populate=*',
      providesTags: ['Company'],
    }),
    getCompanyById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Company', id }],
    }),
    getCompaniesByName: builder.query({
        query: (name) => `/companies?filters[name][$contains]=${name}&populate=*`,
        providesTags: (result, error, name) =>
            result ? result.data.map(({ id }) => ({ type: 'Company', id })) : [],
    }),

    createCompany: builder.mutation({
      query: (company) => ({
        url: '/',
        method: 'POST',
        body: company,
      }),
      invalidatesTags: ['Company'],
    }),
    updateCompany: builder.mutation({
      query: ({ id, ...company }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: company,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Company', id }],
    }),
    deleteCompany: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Company'],
    }),
  }),
})

// Slice pour gérer les états locaux
const companySlice = createSlice({
  name: 'company',
  initialState: {
    selectedCompany: null,
    filters: {
      search: '',
      status: 'all',
    },
    ui: {
      isModalOpen: false,
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    setSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload
    },
    clearSelectedCompany: (state) => {
      state.selectedCompany = null
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    resetFilters: (state) => {
      state.filters = {
        search: '',
        status: 'all',
      }
    },
    setModalOpen: (state, action) => {
      state.ui.isModalOpen = action.payload
    },
    setLoading: (state, action) => {
      state.ui.isLoading = action.payload
    },
    setError: (state, action) => {
      state.ui.error = action.payload
    },
    clearError: (state) => {
      state.ui.error = null
    },
  },
})

// Export des hooks RTK Query
export const {
  useGetCompaniesQuery,
  useGetCompanyByIdQuery,
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
  useLazyGetCompaniesByNameQuery,
} = companyApi

// Export des actions du slice
export const {
  setSelectedCompany,
  clearSelectedCompany,
  setFilters,
  resetFilters,
  setModalOpen,
  setLoading,
  setError,
  clearError,
} = companySlice.actions

// Export du reducer
export const companyReducer = companySlice.reducer

// Export de l'API pour le store
export default companyApi