import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Form from './../../../../app/src/components/Form';
const initialState = {
  data: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      console.warn('my auth state', action.payload)
      state.data = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setAuth, } = authSlice.actions

export default authSlice.reducer

const token = JSON.parse(localStorage.getItem('auth'))?.jwt
console.log('token', token)
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.antares-rh.net/api' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/auth/local?populate=photo`,

        method: 'POST',
        body: data
      }),
    }),

    uploadPhoto: builder.mutation({
      query: (formData) => ({
        url: `/upload`,
        method: 'POST',
        body: formData, // FormData object for file upload
      }),
    }),

    getMe: builder.query({
      query: (formData) => ({
        url: `/users/me?populate[0]=photo`,
        body: formData, // FormData object for file upload
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Assuming JWT is stored in localStorage
        },
      }),
    }),
    register: builder.mutation({
      query: (formData) => ({
        url: `/auth/local/register`,
        method: 'POST',
        body: formData, 
      
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useRegisterMutation, useUploadPhotoMutation, useGetMeQuery } = authApi