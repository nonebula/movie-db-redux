import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import moviesReducer from "../features/moviesSlice";

//for global state management

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
});

export default store;
