"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiRequest from "../auth/ApiRequest/ApiRequest";
const localStorageName = localStorage.getItem("user");
import { useRouter } from "next/navigation";

const initialState = {
  user: localStorageName ? localStorageName : null,
  isloggedin: false,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const Slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(loginUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUsers.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(loginUsers.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const loginUsers = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      // console.log(user);
      const response = await ApiRequest.LoginUser(user);

      return await ApiRequest.LoginUser(user);
    } catch (error) {
      console.log("error from asyncthunk");

      return thunkAPI.rejectWithValue("Error");
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    await ApiRequest.LogoutUser();
  } catch (error) {
    console.log(error);
  }
});
export const {  } = Slice.actions;
export default Slice.reducer;
