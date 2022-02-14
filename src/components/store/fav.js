import { createSlice } from "@reduxjs/toolkit";

const initialFavState = {
  favourites: [],
};

const favSlice = createSlice({
  name: "favourites",
  initialState: initialFavState,
  reducers: {
    addToFav(state, action) {
      state.favourites.push(action.payload);
    },
    removeFromFav(state, action) {
      state.favourites.map((ele) => ele != action.payload);
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice.reducer;
