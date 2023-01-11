import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { articlesData } from "../../articlesData";

const articles = articlesData.map((article) => ({ ...article, id: nanoid() }));

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles,
  },
  reducers: {},
});

export const selectArticles = (state) => state.articles;
export default articlesSlice.reducer;
