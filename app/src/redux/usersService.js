import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  data: null,
};

export const actualitySlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUsers: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = state.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = actualitySlice.actions;

export default actualitySlice.reducer;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.antares-rh.net/api",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth?.data?.jwt ?? JSON.parse(localStorage.getItem('auth'))?.jwt;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    
      // Ne pas fixer Content-Type si on va uploader un fichier
      if (endpoint !== 'postUsers' && endpoint !== 'updateUsers') {
        // Pour les autres requêtes, on peut fixer Content-Type à application/json
        headers.set("Content-Type", "application/json");
      }
    
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users?populate=*`,
    }),
    postUsers: builder.mutation({
      query: (formData) => ({
        url: `/users`,
        method: "POST",
        body: formData, // doit être un FormData natif
        // NE PAS mettre Content-Type
      }),
    }),

    updateUsers: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data, // doit être un FormData natif
        // NE PAS mettre Content-Type
      }),
    }), 

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, usePostUsersMutation, useUpdateUsersMutation } = usersApi;
