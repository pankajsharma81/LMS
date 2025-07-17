import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/AuthSlice";
const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
  devTools: false,
});

export default store;
