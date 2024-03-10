<!-- NAV BAR COMPONENT FOR LOGIN PAGE -->
<template>
  <nav class="bg-[#5D1D9E] h-[90px] flex items-center px-10">
    <div class="flex items-center justify-between w-full">
      <!-- Left column: Logo -->
      <div class="flex items-center space-x-2">
        <!-- Replace "Your Logo" with your actual logo image or text -->
        <NuxtLink to="/"
          ><span class="text-white text-2xl font-bold logo-header"
            >TIFLICARE</span
          ></NuxtLink
        >
      </div>

      <!-- Right column: Dropdown Menu -->
      <div v-if="!loggedUser" class="relative">
        <!-- Dropdown toggle button -->
        <div
          @click="toggleDropdown"
          class="flex items-center p-2 border-white rounded-sm space-x-1 text-white cursor-pointer"
        >
          <p class="font-[500] font-[Roboto] tracking-wider text-2xl">Login</p>
          <ph-caret-down v-if="!isDropdownOpen" :size="25" weight="bold" />
          <ph-caret-up v-if="isDropdownOpen" :size="25" weight="bold" />
        </div>

        <!-- Dropdown menu items -->
        <div
          v-if="isDropdownOpen"
          class="absolute right-0 mt-2 rounded-md shadow-2xl border-2 border-gray-50"
        >
          <ul
            class="py-1 w-[200px] bg-white font-[montserrat] font-[500] text-[18px]"
          >
            <li class="text-[#14032085] px-4 py-2">
              <!-- SWITICHING THE LOGIN TO PARENT  -->
              <NuxtLink to="loginview" @click="loginState.changeToParent"
                >Parent Login</NuxtLink
              >
            </li>
            <li class="text-[#14032085] px-4 py-2">
              <NuxtLink to="loginview" @click="loginState.changeToTeacher"
                >Teacher Login</NuxtLink
              >
            </li>
            <li class="text-[#14032085] px-4 py-2">
              <NuxtLink to="loginview" @click="loginState.changeToStudent"
                >Student Login</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="flex gap-3">
        <NuxtLink to="afterlogin">
          <button
            class="flex items-center space-x-1 text-white focus:outline-none"
          >
            <span>Dashboard</span>
            <i class="fas fa-chevron-down"></i>
          </button>
        </NuxtLink>

        <button
          @click="signout"
          class="flex items-center space-x-1 text-white focus:outline-none"
        >
          <span>Logout</span>
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";

const user = useSupabaseUser();
const loggedUser = !!user.value?.id;
const signout = async () => {
  await Client().signOut();
  navigateTo("/");
};

// INSTATIATE THE LOGIN STATE FOR THE LOGIN PAGE
const loginState = loginstate();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Syne|Unlock&display=swap");

/* Use Daisy UI classes for the icons */
/* For example, in this case, we use Font Awesome for the chevron-down icon */
@import "daisyui/dist/full.css";
.logo-header {
  font-family: Unlock;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
}
</style>
