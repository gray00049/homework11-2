import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "../slice/photoSlice";

const store = configureStore({
  reducer: photoSlice
});

export default store;