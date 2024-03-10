import { defineStore } from "pinia";

export const useChatstore = defineStore({
  id: "chatstore",
  state: () =>
    reactive({
      chatList: [],
    }),
  actions: {
    async changeMessageList(id) {
      const supabase = useSupabaseClient();
      const { data: messages, error: errror_m } = await supabase
        .from("messages")
        .select("*")
        .eq("active_chat_id", id);
      this.chatList = messages;
      return;
    },
  },
});
