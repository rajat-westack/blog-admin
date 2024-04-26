"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedin: false,
  user: [],
};
export const Slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isloggedin = true;
      localStorage.setItem("token", action.payload.token);
      state.user = action.payload;
    },
    setLogOut: (state) => {
      state.isloggedin = false;
      localStorage.removeItem("token");
    },
  },
});
export const { setLogin, setLogOut } = Slice.actions;
export default Slice.reducer;
