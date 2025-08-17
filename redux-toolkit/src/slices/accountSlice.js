import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 100,
};

export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8000/accounts/${userId}`
    );
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // account/increment
    increment: (state) => {
      state.amount += 1; // immer library
    },
    // account/decrement
    decrement: (state) => {
      state.amount -= 1;
    },
    // account/incrementByAmount
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
      })
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;

// createAsyncThunk provide pending, fulfilled, rejected
// createAsyncThunk('account/getUser', async (userId, thunkAPI) => {}) for api call
// alternative to createAsyncThunk is reduxSaga or RTKquery