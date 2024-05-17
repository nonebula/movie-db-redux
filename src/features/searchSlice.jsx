import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovie } from "../services/apiCall";

const initialState = {
  searchQuery: "",
  searchResults: [],
  loading: false,
  error: null,
};

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query) => {
    try {
      const response = await searchMovie(query);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.searchResults = payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSearchResults, setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;