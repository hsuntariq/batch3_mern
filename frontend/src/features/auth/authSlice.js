import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// create your application's initial state

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      return authService.registerUser(userData);
    } catch (error) {
      const message =
        (error.response.data.message &&
          error.response.data &&
          error.response) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      return authService.logoutUser();
    } catch (error) {
      const message =
        (error.response.data.message &&
          error.response.data &&
          error.response) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isSuccess = true;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
