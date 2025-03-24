import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import auth, { authApi } from "./auth/authService";
import candidatReducer, { candidatApi } from "./candidatService";
import profileReducer, { profileApi } from "./profileServices";
import redevableReducer, { redevableApi } from "./redevableService";
import redevanceReducer, { redevanceApi } from "./redevanceService";

export const store = configureStore({
  reducer: {
    redevables: redevableReducer,
    auth: auth,
    profile: profileReducer,
    candidat: candidatReducer,
    redevances: redevanceReducer,
    [redevableApi.reducerPath]: redevableApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [candidatApi.reducerPath]: candidatApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [redevanceApi.reducerPath]: redevanceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      redevableApi.middleware,
      authApi.middleware,
      profileApi.middleware,
      redevanceApi.middleware,
      candidatApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
