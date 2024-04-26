import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postActions";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsList: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.postsList = payload;
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default postsSlice.reducer;
