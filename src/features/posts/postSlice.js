import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (url) => {
  const response = await fetch(url);
  if (response.status < 200 || response.status >= 300) {
    throw new Error("Something went wrong");
  }
  const json = await response.json();
  return json;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isFetching: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.posts = {};
      state.isFetching = true;
      state.hasError = false;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isFetching = false;
      state.hasError = false;
      state.posts = action.payload.data.children;
      console.log("fulfilled");
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isFetching = false;
      state.hasError = true;
      console.log("error");
    });
  },
});

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
