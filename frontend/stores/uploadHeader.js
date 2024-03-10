import { defineStore } from "pinia";

export const UploadHeader = defineStore({
    id: "uploadHeader",
    state: () =>
      reactive({
        Header: "Upload",
      }),
  });