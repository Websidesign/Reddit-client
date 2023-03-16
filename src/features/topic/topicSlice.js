import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTopic = createAsyncThunk("topic/fetchTopic", async (url) => {
  const response = await fetch(url);
  if (response.status < 200 || response.status >= 300) {
    throw new Error("Something went wrong");
  }
  const json = await response.json();
  return json;
});

export const topicSlice = createSlice({
  name: "topic",
  initialState: {
    posts: [],
    isFetching: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopic.pending, (state, action) => {
      state.posts = {};
      state.isFetching = true;
      state.hasError = false;
      console.log("Pending");
    });
    builder.addCase(fetchTopic.fulfilled, (state, action) => {
      state.isFetching = false;
      state.hasError = false;
      state.posts = action.payload.data.children;
      console.log("fulfilled");
    });
    builder.addCase(fetchTopic.rejected, (state, action) => {
      state.isFetching = false;
      state.hasError = true;
      console.log("error");
    });
  },
});

export const selectTopic = (state) => state.topic;

export default topicSlice.reducer;
