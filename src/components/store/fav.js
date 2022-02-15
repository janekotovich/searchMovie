import { createSlice } from "@reduxjs/toolkit";

const initialFavState = {
  favourites: [],
};

const favSlice = createSlice({
  name: "favourites",
  initialState: initialFavState,
  reducers: {
    addToFav(state, action) {
      const movie = {
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
      };
      state.favourites.push(movie);
    },
    removeFromFav(state, action) {
      state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id
      );
      state.favourites.splice(
        state.favourites.findIndex(
          (favourite) => favourite.id === action.payload.id
        ),
        1
      );
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice.reducer;
