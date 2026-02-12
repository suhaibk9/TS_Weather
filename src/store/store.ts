import { configureStore } from "@reduxjs/toolkit";
import { api } from "../Config/api";
import informationSlice from "../slices/informationSlice";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // ← Handles: { data: {}, status: "pending", error: null }
    information: informationSlice, // ← Handles: { typeTemp: "C", dayWeek: "Day", cityName: null }
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
