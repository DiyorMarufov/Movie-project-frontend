import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IFavoriteSlice {
  value: any[];
}

const initialState: IFavoriteSlice = {
  value: JSON.parse(localStorage.getItem("favorites") || "[]") || [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, actions: PayloadAction<any>) => {
      const inx = state.value.findIndex(
        (movie) => movie.id === actions.payload.id
      );

      if (inx < 0) {
        state.value.push(actions.payload);
        localStorage.setItem("favorites", JSON.stringify(state.value));
      } else {
        state.value.splice(inx, 1);
        localStorage.setItem("favorites", JSON.stringify(state.value));
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
