import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice/counterSlice";
import authReducer from "./Slices/AuthSlice/authSlice";
import formReducer from "./Slices/FormSlice/FormSlice";
import businessReducer from "./Slices/BusinessSlice/ businessSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    business: businessReducer,
    form: formReducer,

  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
