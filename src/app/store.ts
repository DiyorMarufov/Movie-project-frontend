import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../shared/lib/features/authSlice";
import signInSlice from "../shared/lib/features/signinSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    signInSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
