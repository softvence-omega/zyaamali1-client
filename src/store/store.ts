import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import counterReducer from "./Features/counterSlice/counterSlice";
import authReducer from "./Features/Auth/authSlice";
import formReducer from "./Features/FormSlice/FormSlice";
import businessReducer from "./Features/BusinessSlice/ businessSlice"; // fixed space
import { baseApi } from "./api/baseApi";
import sessionReducer from './Features/SessionSlice/SessionSlice';  // Import the session reducer

// persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "session"], // persist both auth and session slices
};

// combine all reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  business: businessReducer,
  form: formReducer,
  session: sessionReducer,  // Add session reducer here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).concat(baseApi.middleware) as any,
});

export const persistor = persistStore(store);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
