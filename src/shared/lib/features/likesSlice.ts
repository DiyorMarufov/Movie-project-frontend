import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ILikes {
  value: number[];
}

const initialState: ILikes = {
  value: JSON.parse(localStorage.getItem("likes") || "[]") || [],
};

export const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLikes: (state, actions: PayloadAction<number>) => {
      if (state.value.includes(actions.payload)) {
        state.value = state.value.filter((id) => id !== actions.payload);
        localStorage.setItem("likes", JSON.stringify(state.value));
      } else {
        state.value = [...state.value, actions.payload];
        localStorage.setItem("likes", JSON.stringify(state.value));
      }
    },
  },
});

export const { toggleLikes } = likesSlice.actions;
export default likesSlice.reducer;
