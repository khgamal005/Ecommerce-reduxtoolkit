import { createAsyncThunk } from "@reduxjs/toolkit";

export const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://different-cultured-chair.glitch.me/category");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetCategories;
