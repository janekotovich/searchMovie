import { createSlice } from "@reduxjs/toolkit";

const initialErrorState = {
  isError: [],
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    setError(state, action) {
      state.isError.push(action.payload);
    },
    cleanError(state) {
      state.isError = [];
    },
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
