import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { redevableApi } from "./redevableService";
import redevableReducer from "./redevableService";
import profileReducer, { profileApi } from "./profileServices";
import redevanceReducer, { redevanceApi } from "./redevanceService";
import auth from "./auth/authService";
import { authApi } from "./auth/authService";
import { auteursApi } from "./auteursService";

export const store = configureStore({
  reducer: {
    redevables: redevableReducer,
    auth: auth,
    profile: profileReducer,
    redevances: redevanceReducer,
    [redevableApi.reducerPath]: redevableApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [auteursApi.reducerPath]: auteursApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [redevanceApi.reducerPath]: redevanceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      redevableApi.middleware,
      authApi.middleware,
      auteursApi.middleware,
      profileApi.middleware,
      redevanceApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
