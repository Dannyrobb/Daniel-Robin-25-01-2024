import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    resetInputValue: (state) => {
      state.inputValue = "";
    },
  },
});

export const { setInputValue, resetInputValue } = inputSlice.actions;

export const selectInputValue = (state) => state.input.inputValue;

export default inputSlice.reducer;
