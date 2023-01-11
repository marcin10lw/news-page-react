import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./features/articles/articlesSlice";
import menuReducer from "./features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    menu: menuReducer,
  },
});
