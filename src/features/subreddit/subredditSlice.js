import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSubreddit = createAsyncThunk(
  "subreddit/fetchSubreddit",
  async (url) => {
    const response = await fetch(url);
    if (response.status < 200 || response.status >= 300) {
      throw new Error("Something went wrong");
    }
    const json = await response.json();
    return json;
  }
);

export const subredditSlice = createSlice({
  name: "subreddit",
  initialState: {
    posts: [],
    isFetching: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubreddit.pending, (state, action) => {
      state.posts = {};
      state.isFetching = true;
      state.hasError = false;
      console.log("Pending");
    });
    builder.addCase(fetchSubreddit.fulfilled, (state, action) => {
      state.isFetching = false;
      state.hasError = false;
      state.posts = action.payload.data.children;
      console.log("fulfilled");
    });
    builder.addCase(fetchSubreddit.rejected, (state, action) => {
      state.isFetching = false;
      state.hasError = true;
      console.log("error");
    });
  },
});

export const selectSubreddit = (state) => state.subreddit;

export default subredditSlice.reducer;
