<template>
  <div class="md:p-[30px]">
    <div class="flex items-center gap-2">
      <PhChatText :size="20" weight="regular" fill="black" />
      <h1 class="text-[20px] font-[500]">Messaging</h1>
    </div>
    <div class="bg-white p-6 flex flex-wrap gap-5 mt-5">
      <!-- chats -->
      <div class="chatscontainer md:min-w-[300px] p-5">
        <div>
          <div class="flex justify-between">
            <h1 class="chatstext">Chats</h1>
            <div class="flex gap-2">
              <div class="custom-select">
                <select v-model="new_user" @change="startNewChat">
                  <option
                    v-for="(user, index) in inactive_users"
                    :key="index"
                    :value="user"
                  >
                    {{ user.first_name }} {{ user.last_name }}
                  </option>
                </select>
              </div>

              <div class="flex my-auto">
                <!-- <ph-plus :size="18" weight="bold" class="text-success" /> -->
                <PhCaretDown :size="18" weight="bold" class="text-success" />
                <!-- <PhCaretUp :size="18" weight="bold" class="text-success" /> -->
              </div>
            </div>
          </div>
          <!-- chats list -->
          <div
            v-for="(active_id, index) in my_active_chat_profiles"
            :key="index"
            class="chatslist flex items-center gap-[14px] border-b-2 border-[#E7E7E7] py-[20px] cursor-pointer"
            @click="pick_chat(index)"
          >
            <nuxt-img
              :src="get_public_url(active_id[0].avatar_url)"
              alt="Image description"
              class="object-cover bg-[#003BAC7A] w-[31px] h-[31px] rounded-full p-1"
            />

            <p>{{ active_id[0].first_name }} {{ active_id[0].last_name }}</p>
          </div>
        </div>
        <!-- Groups -->
        <!-- <div class="my-5">
          <div class="flex justify-between">
            <h1 class="chatstext">Groups</h1>
            <div class="flex gap-2">
              <ph-plus :size="18" weight="bold" class="text-success" />
              <div>
                <PhCaretDown :size="18" weight="bold" class="text-success" />
                <PhCaretUp :size="18" weight="bold" class="text-success" />
              </div>
            </div>
          </div> -->
        <!-- chats list -->
        <!-- <div
            class="chatslist flex items-center gap-[14px] border-b-2 border-[#E7E7E7] py-[20px]"
          >
            <div class="bg-[#003BAC7A] w-[31px] h-[31px] rounded-full p-1">
              <nuxt-img
                src="/assets/emojiboy.png"
                alt="Image description"
                class="custom-class object-cover"
              />
            </div>
            <p>Class 14</p>
          </div>
        </div> -->
      </div>
      <!-- chat screen -->
      <UserChatScreen
        :sender_id="user_id"
        :receiver_id="receiver_id"
        :chat_id="current_chat_id"
        :receiver_name="receiver_full_name"
        :receiver_img="receiver_img"
        :chats="chat_store.chatList ?? []"
      />
    </div>
    <!-- notice board -->
    <div class="bg-white flex flex-col mt-[40px] p-6">
      <h1 class="text-[20px] font-[500]">Notice Board</h1>
      <div class="flex flex-wrap gap-5 my-5 noticesearch">
        <input placeholder="Search by Date" />
        <input placeholder="Search by Title" />
        <button class="bg-warning text-white">Search</button>
      </div>
      <div class="flex flex-col gap-3 border-b border-[#ebe8e8] mb-5">
        <p
          class="bg-teal-500 text-white p-2 max-w-[150px] text-center rounded-[20px]"
        >
          16 July 2023
        </p>
        <p class="font-[roboto] font-[500]">
          School activities will be resuming soonest
        </p>
        <div class="flex gap-2 mb-2">
          <h2>Derick John</h2>
          <h2 class="italic font-[roboto]">5 minutes ago</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

import { ref, computed } from "vue";
const current_user = useSupabaseUser();

const user_id = current_user.value.id;
if (!user_id) {
  navigateTo("loginView");
}
const supabase = useSupabaseClient();

const school_client = useSchoolStore();
await school_client.init();
let chat_store = useChatstore();
console.log(chat_store);

// GET THE PUBLiC URL OF EACH ACTIVE CHAT USER PROFILE
const get_public_url = (path) => {
  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(path);
  return publicUrl;
};

// GET ALL SCHOOL ACTIVE CHATS AND CHAT ID
let { data: active_chats, error: err } = await supabase
  .from("active_chats")
  .select("active_users, id")
  .eq("school_id", await school_client.getSchoolId());

console.log("this is an active test", active_chats);

// GET ALL CURRENT USER ACTIVE CHATS
const my_chats = active_chats.filter((value) =>
  value.active_users.includes(user_id)
);
console.log("this is test my chat", my_chats);

// GET ACTIVE CHATS USER ID AND CHAT ID
const active_chats_ids = ref([]);
for (const active_chat of my_chats) {
  console.log(active_chat.active_users);
  active_chat.active_users.map((val) => {
    if (val !== user_id) active_chats_ids.value.push([val, active_chat.id]);
  });
}

console.log("this is the test id list", active_chats_ids.value);

// GET THE  PROFILES OF THE ACTIVE CHAT IDS
const my_active_chat_profiles = ref([]);
const get_all_active_chat_profiles = async () => {
  for (const active_chat_id of active_chats_ids.value) {
    const { data: chat_profile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", active_chat_id[0]);
    console.log("active chat id", chat_profile);
    let [profile] = chat_profile; // destructure the profile
    console.log("profiles", profile);
    my_active_chat_profiles.value.push([profile, active_chat_id[1]]);
  }
};
await get_all_active_chat_profiles();
console.log("profiles are", my_active_chat_profiles.value);

//CREATE A FUNCTION THAT CHANGES THE CHAT ID ON CLICK
const current_chat_id = ref(); // the chat id
const receiver_id = ref(""); // the id of the receiver
const receiver_first_name = ref("");
const receiver_last_name = ref("");
const receiver_img = ref();

const pick_chat = async (index) => {
  current_chat_id.value = my_active_chat_profiles.value[index][1];
  receiver_id.value = my_active_chat_profiles.value[index][0].id;
  receiver_first_name.value =
    my_active_chat_profiles.value[index][0].first_name;
  receiver_last_name.value = my_active_chat_profiles.value[index][0].last_name;
  receiver_img.value = get_public_url(
    my_active_chat_profiles.value[index][0].avatar_url
  );

  // WATCH THE CHAT ID CHANGE TO CHANGE MESSAGES

  watchEffect(async () => {
    current_chat_id.value;
    console.log("myval vhanged", current_chat_id.value);
    chat_store.chatList = await get_messages(current_chat_id.value);
  });
};

const get_messages = async (receiver_id) => {
  const { data: all_messages, error: message_error } = await supabase
    .from("messages")
    .select("*")
    .eq("active_chat_id", receiver_id);
  // console.log("messages", all_messages);
  // console.log("the chat store list for newid is", chat_store.chatList);
  return all_messages;
};

const receiver_full_name = computed(() => {
  return `${receiver_first_name.value} ${receiver_last_name.value}`;
});
console.log("this is my test profile and id", my_active_chat_profiles.value);

// ADDING  NEW USER TO THE ACTIVE CHAT LIST
// if its a teacher,get all parent of class students else get all teachers of children

const parent_or_teachers_list = ref([]);
const user_role = await school_client.getRole();

const inactive_users = ref([]);
watchEffect(async () => {
  if (user_role.roles.id === 2) {
    //if user is a teacher
    const classprofile = await school_client.getClassProfile();
    const queryName = "class_id";
    console.log(classprofile);
    parent_or_teachers_list.value = await school_client.getParent_from(
      queryName,
      classprofile[0].id //getting the id of the current class
    );
    console.log("I am a teacher", parent_or_teachers_list.value);

    //checking if there is an active id in the chat
    for (const parent of parent_or_teachers_list.value) {
      if (
        !active_chats_ids.value.some((val) => val[0] === parent.parent_id) &&
        !inactive_users.value.some(
          (inactiveUser) => inactiveUser.id === parent.parent_id
        )
      ) {
        inactive_users.value.push(parent.profiles);
      }
    }

    console.log(inactive_users.value);
  }
  // if the user is a parent
  if (user_role.roles.id === 4) {
    const children = await school_client.getParentChildren(user_id);

    for (const child of children) {
      const { data: teacher_data, error: teacher_error } = await supabase
        .from("classes")
        .select(
          `*,
      profiles(
        *
      )`
        )
        .eq("id", child.classes.id);

      if (!teacher_error) {
        const [teacher] = teacher_data;
        parent_or_teachers_list.value.push(teacher.profiles);
      }

      // check if the user is already in the active chat,pop fromthe list if true else makeit selectable

      //checking if there is an active id in the chat
      for (const teacher of parent_or_teachers_list.value) {
        if (
          !active_chats_ids.value.some((val) => val[0] === teacher.id) &&
          !inactive_users.value.some(
            (inactiveUser) => inactiveUser.id === teacher.id
          )
        ) {
          inactive_users.value.push(parent.profiles);
        }
      }

      console.log(inactive_users.value);
    }

    // check if the user is already in the active chat,pop fromthe list if true else makeit selectable

    // get all the teachers ofthe children or a child
  }
});
// if the user is an admin

if (user_role.roles.id === 1) {
  const all_parent_teachers = [
    ...school_client.teachers,
    ...school_client.parents,
  ];
  for (const p_and_t of all_parent_teachers) {
    if (
      !active_chats_ids.value.some((val) => val[0] === p_and_t.id) &&
      !inactive_users.value.some(
        (inactiveUser) => inactiveUser.id === p_and_t.id
      )
    ) {
      inactive_users.value.push(p_and_t);
    }
  }
}

// then update the active chat list ui

// once selected, create an active chat on the database between the two

const new_user = ref(""); // vmodel for select fieldof inactive user
const startNewChat = async () => {
  console.log("new user id", new_user.value);
  let { data: new_user_data, error: new_user_error } = await supabase
    .from("active_chats")
    .insert([
      {
        initiator: user_id,
        responder: new_user.value.id,
        school_id: await school_client.getSchoolId(),
        active_users: [user_id, new_user.value.id],
      },
    ])
    .select();
  if (new_user_error) {
    console.error(new_user_error.message);
  }

  if (new_user_data) {
    my_active_chat_profiles.value.push([new_user.value, new_user_data[0].id]); // realtime add to the active chat users

    console.log("new user data", new_user_data);

    // remove from the array the selected data reactively
    const indexToRemove = inactive_users.value.indexOf(new_user.value);
    if (indexToRemove !== -1 || inactive_users.value.length > 0) {
      if (indexToRemove !== -1) {
        inactive_users.value.splice(indexToRemove, 1);
      } else {
        // Remove the last element from the array
        inactive_users.value.pop();
      }
    } else {
      console.log("Array is empty, nothing to remove.");
    }
  }
};

const isOpen = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const contentStyle = computed(() => ({
  maxHeight: isOpen.value ? "1000px" : "0",
}));

// the message logic
</script>

<style scoped>
form > div {
  display: flex;
  flex-direction: column;
  color: #1d9663;
  background-color: #24a86d;
}

.noticesearch input,
button {
  padding: 10px 8px;
  font-family: roboto;
  border-radius: 8px;
}
label {
  font-family: roboto;
}
.chatslist p {
  color: #4d4d4d;
  font-family: Sora;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.chatlist p:first-child {
  color: #001121;
  font-family: Sora;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.chatstext {
  color: #001121;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.chatscontainer {
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.19);
}
.chatcontainer {
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.19);
}
.chatbox {
  border-radius: 20px 20px 20px 0px;
  background: rgb(255, 255, 255);
  max-width: 360px;
  padding: 14px 24px;
}
.chatbox2 {
  border-radius: 20px 20px 20px 0px;
  background: rgba(77, 77, 77, 0.08);
  max-width: 360px;
  padding: 14px 24px;
}
.accordion {
  border: 1px solid #ccc;
  /* margin-bottom: 10px; */
}

.accordion-header {
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accordion-content {
  background-color: red;
  transition: max-height 0.5s ease-in-out;
}
.custom-select {
  position: relative;
  display: inline-block;
}

.custom-select select {
  padding: 5px 30px 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 150px;
  background: url("path-to-your-icon.png") no-repeat right center;
}

.custom-select select:focus {
  border-color: #007bff; /* Add focus styling if needed */
}

.custom-select ph-plus {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #555;
  pointer-events: none;
}
</style>
