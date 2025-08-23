import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
  fullname: string;
  email: string;
  password: string;
}

const initialState: IState = {
  fullname: "",
  email: "",
  password: "",
};

export const signInSlice = createSlice({
  name: "sign-in",
  initialState,
  reducers: {
    setSignInData: (state, action: PayloadAction<IState>) => {
      state.fullname = action.payload.fullname;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clearSignInData: (state) => {
      state.fullname = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { clearSignInData, setSignInData } = signInSlice.actions;
export default signInSlice.reducer;
