import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    showMenu: false,
  },
  reducers: {},
});

export default menuSlice.reducer;
