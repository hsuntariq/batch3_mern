import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
  goals: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addGoals = createAsyncThunk(
  "goals/add",
  async (goal, thunkApi) => {
    try {
      let token = thunkApi.getState().auth.user.token;
      return goalService.addGoals(goal, token);
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

export const getGoals = createAsyncThunk("goals/get", async (_, thunkApi) => {
  try {
    let token = thunkApi.getState().auth.user.token;
    return goalService.getGoals(token);
  } catch (error) {
    const message =
      (error.response.data.message && error.response.data && error.response) ||
      error.message ||
      error.toString();

    return thunkApi.rejectWithValue(message);
  }
});

export const deleteGoals = createAsyncThunk(
  "goals/delete",
  async (id, thunkApi) => {
    try {
      // let token = thunkApi.getState().auth.user.token;
      return goalService.deleteGoals(id);
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

export const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload;
      })
      .addCase(getGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload;
      })
      .addCase(deleteGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.filter((id) => id !== action.payload);
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
