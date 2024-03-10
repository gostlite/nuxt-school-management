import { defineStore } from "pinia";

export const loginstate = defineStore({
  id: "loginstate",
  state: () =>
    reactive({
      login: "Parent",
    }),
  actions: {
    changeToParent() {
      this.login = "Parent";
    },
    changeToStudent() {
      this.login = "Student";
    },
    changeToTeacher() {
      this.login = "Teacher";
    },
  },
});
