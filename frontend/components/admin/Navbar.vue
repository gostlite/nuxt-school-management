<template>
  <nav
    class="h-[70px] px-[38px] border-b border-[#DADADA] flex items-center justify-between w-full"
  >
    <h1 class="font-[700] text-success text-[23px] my-6 md:hidden">
      Schooling
    </h1>
    <!-- search box -->
    <div
      class="hidden md:flex flex-row items-center justify-between h-[35px] w-[335px] px-2 rounded-[5px] bg-[#00000017]"
    >
      <input
        type="text"
        placeholder="Search here"
        class="bg-transparent outline-0 text-[12px] text-[#6F6F6FB0] flex-1"
      />
      <ph-magnifying-glass :size="18" weight="thin" fill="#868686" />
    </div>
    <!-- notifications -->
    <div class="flex items-center justify-self-end gap-[24px]">
      <!-- bell -->
      <div class="relative">
        <ph-bell :size="17" weight="thin" />
        <div
          class="bg-red-500 h-2 w-2 rounded-full absolute right-0 -top-[1px]"
        ></div>
      </div>
      <!-- profile -->
      <div class="flex gap-[7px]">
        <div
          v-if="user"
          class="bg-success h-[23px] w-[23px] rounded-full text-white text-[14px] flex items-center justify-center"
        >
          <h2>{{ user.first_name?.[0] ?? "No name" }}</h2>
        </div>
        <h2>{{ formatUser(user) }}</h2>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { PhMagnifyingGlass, PhBell } from "@phosphor-icons/vue";
import { onMounted } from "vue";
let { getUserProfile } = Client();
let user = await getUserProfile();
user ??= null;
// onMounted(()=> getUserProfile());
let formatUser = (user) => {
  if (!user) return "No name";
  else return `${user?.first_name} ${user?.last_name}` ?? "No name";
};
</script>
