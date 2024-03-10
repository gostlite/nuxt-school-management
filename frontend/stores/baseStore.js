export const useBaseStore = defineStore({
  id: "store",
  state: () =>
    reactive({
      // no backslash at the end
      url: "http://localhost:80",
      themes: ["light", "dark", "admin"],
      theme: "admin",
    }),
  actions: {
    changeTheme() {
      if (this.theme == "light") {
        this.theme = "dark";
      }
      this.theme = "admin";
    },
  },
});
