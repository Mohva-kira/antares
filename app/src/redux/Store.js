import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auteursApi } from "./auteursService";
import auth, { authApi } from "./auth/authService";
import candidatReducer, { candidatApi } from "./candidatService";
import { companyApi } from "./companyService";
import { jobsApi } from "./jobService";
import profileReducer, { profileApi } from "./profileServices";
import redevableReducer, { redevableApi } from "./redevableService";
import redevanceReducer, { redevanceApi } from "./redevanceService";
import actualitesReducer, {actualitiesApi} from "./actualityService";
import applicationReducer, { applicationApi } from "./application";
import usersReducer, {usersApi} from "./usersService";
import whatsappReducer, {whatsappApi} from "./whatsappService";
export const store = configureStore({
  reducer: {
    redevables: redevableReducer,
    auth: auth,
    profile: profileReducer,
    redevances: redevanceReducer,
    candidat: candidatReducer,
    actualites: actualitesReducer,
    applications: applicationReducer, // Assuming this is the correct reducer for applications
    whatsapp: whatsappReducer,
    users: usersReducer,
    [candidatApi.reducerPath]: candidatApi.reducer,
    [redevableApi.reducerPath]: redevableApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [auteursApi.reducerPath]: auteursApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [redevanceApi.reducerPath]: redevanceApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [actualitiesApi.reducerPath]: actualitiesApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [whatsappApi.reducerPath]: whatsappApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobsApi.middleware,
      redevableApi.middleware,
      authApi.middleware,
      auteursApi.middleware,
      profileApi.middleware,
      redevanceApi.middleware,
      candidatApi.middleware,
      companyApi.middleware,
      actualitiesApi.middleware,
      applicationApi.middleware,
      usersApi.middleware,
      whatsappApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
