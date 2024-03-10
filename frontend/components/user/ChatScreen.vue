<template>
  <div v-if="receiver_id" class="chatcontainer md:w-1/2 flex flex-col flex-[3]">
    <div class="flex justify-between p-5">
      <div class="chatlist flex items-center gap-[14px]">
        <!-- <div class="bg-[#003BAC7A] w-[31px] h-[31px] rounded-full p-1"> -->
          <nuxt-img
            :src="receiver_img"
            alt="Image description"
            class="object-cover bg-[#003BAC7A] w-[31px] h-[31px] rounded-full p-1"
          />
        <!-- </div> -->
        <div>
          <p>{{ receiver_name }} {{ chat_id }}</p>
          <!-- <p class="font-[300] text-[10px] text-[#001121] font-[Sora]">
              Last Seen: 12:00pm
            </p> -->
        </div>
      </div>
      <!-- search -->
      <!-- <div
          class="bg-[#0000000F] rounded-[25px] flex items-center px-[22px] py-[11px]"
        >
          <input
            placeholder="Search here..."
            class="font-[Roboto] text-[12px] font-[400] text-[#6F6F6FB0] outline-0 border-0 bg-transparent"
          />
          <PhMagnifyingGlass :size="15" weight="regular" fill="#868686" />
        </div> -->
    </div>
    <!-- chatsection -->
    <div class="bg-[#EBEBEB75] pt-[54px] pb-5 mt-[20px] px-[28px]">
      <!-- chat sender and receiver -->
      <div v-for="(chat, index) in chats" :key="index">
        <!-- chatreceiver -->

        <div class="flex gap-4 my-[17px]" v-if="sender_id !== chat.sender_id">
          <div
            class="bg-[#003BAC7A] w-[31px] h-[31px] rounded-full p-1 mt-auto"
          >
            <nuxt-img
              :src="receiver_img"
              alt="Image description"
              class="custom-class"
            />
          </div>
          <div class="flex flex-col gap-[15px]">
            <span
              :key="index"
              class="chatbox text-success font-[Sora] text-[13px] font-[400]"
              >{{ sender_id !== chat.sender_id && chat.content }}</span
            >
          </div>
        </div>
        <!-- chatsender -->
        <div
          v-if="sender_id === chat.sender_id"
          class="flex gap-4 justify-end my-[17px]"
        >
          <div class="flex flex-col gap-[15px]">
            <span
              class="chatbox2 text-[#4D4D4D] font-[Sora] text-[13px] font-[400]"
              >{{ sender_id === chat.sender_id && chat.content }}</span
            >
          </div>
        </div>
      </div>

      <!-- chattools -->
      <div class="flex flex-wrap items-center gap-[16px]">
        <div
          class="bg-white rounded-[33px] px-[5px] md:px-[20px] py-[16px] flex flex-wrap justify-between flex-1"
        >
          <input
            v-model="message"
            placeholder="Type a message"
            id="chat_text"
            class="font-[Sora] text-[14px] font-[400] text-[#797979] outline-0 border-0 bg-transparent"
          />
          <div class="hidden md:flex items-center gap-1">
            <PhPaperclip :size="20" weight="regular" />
            <PhSmiley :size="20" weight="regular" />
            <PhCamera :size="20" weight="regular" />
          </div>
        </div>
        <!-- send button -->
        <button @click.prevent="send">
          <PhPaperPlaneTilt
            :size="35"
            weight="fill"
            fill="white"
            class="bg-success p-2 rounded-full"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mapState } from "pinia";
import list from "@fullcalendar/list";
import {
  PhChatText,
  PhPlus,
  PhCaretDown,
  PhCaretUp,
  PhMagnifyingGlass,
  PhPaperclip,
  PhSmiley,
  PhCamera,
  PhPaperPlaneTilt,
} from "@phosphor-icons/vue";

const supabase = useSupabaseClient();

//   GET REAL TIME MESSAGES

const messages = supabase
  .channel("custom-insert-channel")
  .on(
    "postgres_changes",
    { event: "INSERT", schema: "public", table: "messages" },
    (payload) => {
      console.log("Change received!", payload);
      props.chats.push(payload.new);
    }
  )
  .subscribe();

const message = ref("");

const props = defineProps({
  receiver_id: String,
  sender_id: String,
  chat_id: Number,
  receiver_name: String,
  receiver_img: String,
  chats: Array,
});

// GET ALLMESSAGES FROM A  CHAT ID

// const { data: all_messages, error: messges_e } = await supabase
//   .from("messages")
//   .select("*")
//   .eq("active_chat_id", props.chat_id);

// console.log(all_messages);

const send = async () => {
  if (!message.value) {
    //  this  is the checker for the message
    return;
  }

  console.log("sent");

  const { data: message_details, error: message_error } = await supabase
    .from("messages")
    .insert([
      {
        sender_id: props.sender_id,
        content: message.value,
        receiver_id: props.receiver_id,
        active_chat_id: props.chat_id,
      },
    ])
    .select();
  console.log(message_details);
  if (message_details) {
    document.getElementById("chat_text").textContent = "";
    message.value = "";
  }
  if (message_error) {
    console.log(message_error.message);
  }
  //   GET ALL MESSAGES OF THE CHAT
};
onMounted(() => {
  console.log("receiver id", props.receiver_id);
});
</script>

<style lang="scss" scoped></style>
