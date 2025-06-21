import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import applicationReducer, { applicationApi } from "./application";
import auth, { authApi } from "./auth/authService";
import candidatReducer, { candidatApi } from "./candidatService";
import offersReducer, { offersApi } from "./offerService";
import profileReducer, { profileApi } from "./profileServices";
import redevableReducer, { redevableApi } from "./redevableService";
import redevanceReducer, { redevanceApi } from "./redevanceService";
import actualtiteReducer, { actualiteApi } from "./actualite";
import partenaireReducer, { partenaireApi} from './partenaire';
import daoReducer, {daoApi} from './dao';
import bulletinReducer, {bulletinApi} from './bulletin';
export const store = configureStore({
  reducer: {
    redevables: redevableReducer,
    auth: auth,
    profile: profileReducer,
    candidat: candidatReducer,
    redevances: redevanceReducer,
    offers: offersReducer,
    applications: applicationReducer,
    actualites: actualtiteReducer,
    partenaire: partenaireReducer,
    dao: daoReducer,
    bulletin: bulletinReducer,
    [actualiteApi.reducerPath]: actualiteApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [offersApi.reducerPath]: offersApi.reducer,
    [redevableApi.reducerPath]: redevableApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [candidatApi.reducerPath]: candidatApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [redevanceApi.reducerPath]: redevanceApi.reducer,
    [partenaireApi.reducerPath]: partenaireApi.reducer,
    [daoApi.reducerPath]: daoApi.reducer,
    [bulletinApi.reducerPath]: bulletinApi.reducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      redevableApi.middleware,
      authApi.middleware,
      profileApi.middleware,
      redevanceApi.middleware,
      candidatApi.middleware,
      offersApi.middleware,
      applicationApi.middleware,
      actualiteApi.middleware,
      partenaireApi.middleware,
      daoApi.middleware,
      bulletinApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
