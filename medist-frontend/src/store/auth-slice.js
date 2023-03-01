import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: null,
    username: "",
  },
  reducers: {
    setUserToken(state, action) {
      state.access_token = action.payload;
    },
    unsetUserToken(state) {
      state.access_token = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
