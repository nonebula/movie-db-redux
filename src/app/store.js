import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

//for global state management

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    });

export default store;