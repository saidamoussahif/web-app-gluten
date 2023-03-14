import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/Authentication/LoginSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

