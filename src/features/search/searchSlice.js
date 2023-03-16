import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (url) => {
    const response = await fetch(url);
    if (response.status < 200 || response.status >= 300) {
      throw new Error("Something went wrong");
    }
    const json = await response.json();
    return json;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    posts: [],
    searchQuery: "",
    isSearching: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.isSearching = true;
      state.hasError = false;
      console.log("Pending");
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.searchQuery = "";
      state.isSearching = false;
      state.hasError = false;
      state.posts = action.payload.data.children;
      console.log("fulfilled");
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.isSearching = false;
      state.hasError = true;
      console.log("error");
    });
  },
});

export const selectSearchResults = (state) => state.search;

export default searchSlice.reducer;
