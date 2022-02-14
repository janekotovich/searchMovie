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
      state.favourites.filter((favourite) => favourite !== action.payload);
      state.favourites.splice(
        state.favourites.findIndex((favourite) => favourite === action.payload),
        1
      );
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice.reducer;
