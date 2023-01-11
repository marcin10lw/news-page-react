import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    showMenu: false,
  },
  reducers: {
    toggleShowMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleShowMenu } = menuSlice.actions;
export const selectMenu = (state) => state.menu;
export default menuSlice.reducer;
