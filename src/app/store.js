import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import moviesReducer from "../features/moviesSlice";
import searchReducer from "../features/searchSlice";

//for global state management

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    search: searchReducer,
  },
});

export default store;
