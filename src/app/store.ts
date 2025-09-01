import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "../shared/lib/features/favoriteSlice";
import toggleLikes  from "../shared/lib/features/likesSlice";

export const store = configureStore({
  reducer: {
    favoriteSlice,
    toggleLikes
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
