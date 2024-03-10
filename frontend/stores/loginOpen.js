import { defineStore } from "pinia";

// KEEPS TRACK OF THE SIDEBAR STATE TO CHECK IF ITS OPENED OR NOT
export const sideLogin = defineStore({
  id: "sideLogin",
  state: () =>
    reactive({
      isSideOpen: false,
    }),
  actions: {
    openSideBar() {
      this.isSideOpen = true;
    },
    closeSideBar() {
      this.isSideOpen = false;
    },
  },
});
