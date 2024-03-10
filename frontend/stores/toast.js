// store.js
import { defineStore } from "pinia";

export const useToast = defineStore({
  id: "toast",
  state: () => ({
    toshow: false,
  }),
  actions: {
    toggletoast() {
      this.toshow = !this.toshow;
    },
  },
});
