import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import errorReducer from "./error";
import favReducer from "./fav";

const store = configureStore({
  reducer: { auth: authReducer, error: errorReducer, favs: favReducer },
});

export default store;
