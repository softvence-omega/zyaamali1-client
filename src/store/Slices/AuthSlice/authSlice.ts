import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  userId:string,
  role?: string;
  email: string;
  name:string
};

type TAuthState = {
  user: TUser | null;
  token: string | null;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token= null
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
