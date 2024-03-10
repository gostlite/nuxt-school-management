<template>
  <div
    class="fixed inset-y-0 left-0 z-50 w-2/3 bg-white shadow-lg"
    v-if="sideNav.isSideOpen"
  >
    <!-- Sidebar Content -->
    <div class="flex h-full relative">
      <!-- First Column (Two Row Divs) -->
      <div class="bg-[url('/assets/classroom-min.jpg')] min-w-[50%]">
        <div
          class="flex flex-col h-full flex-1 space-y-4 to-[#5C0B9D] bg-gradient-to-b from-[#5b0b9da1] rounded-md p-2"
        >
          <div class="flex flex-col flex-3 md:ml-9 ml-3">
            <p
              class="mt-4 md:mb-11 mb-6 text-white md:text-3xl text-2xl sm:mr-6 static-header"
            >
              TIFLICARE
            </p>
            <div class="flex gap-3 items-center">
              <p class="md:pb-2 text-white md:text-4xl text-2xl static-login">
                Login
              </p>
              <ph-arrow-down
                :size="32"
                weight="bold"
                class="text-white animate-pulse"
              />
            </div>
            <div
              class="md:mb-11 mb-6 text-[#5C0B9D] font-[montserrat] flex flex-col gap-4 cursor-pointer"
            >
              <p
                class="flex items-center gap-2 hover:opacity-[95%] hover:translate-y-1 static-content"
                @click="loginState.changeToParent"
              >
                <ph-user-circle :size="32" weight="thin" />
                <span>Parents Login</span>
              </p>
              <p
                class="flex items-center gap-2 hover:opacity-[95%] hover:translate-y-1 static-content"
                @click="loginState.changeToTeacher"
              >
                <ph-user-circle :size="32" weight="thin" />
                <span>Teacher Login</span>
              </p>
              <p
                class="flex items-center gap-2 hover:opacity-[95%] hover:translate-y-1 static-content"
                @click="loginState.changeToStudent"
              >
                <ph-user-circle :size="32" weight="thin" />
                <span>Student Login</span>
              </p>
            </div>
          </div>
          <hr class="h-[1px] bg-white" />
          <!-- column gap -->
          <div class="flex-1 relative">
            <div class="h-full flex flex-col">
              <h3 class="text-white md:text-4xl text-2xl sm:mr-6 static-login">
                Contact
              </h3>
              <p class="text-white">+234 7035677890</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <!-- Second Column (Single Div) -->
      <div class="flex-1 bg-gray-100 rounded-md p-2 shadow-2xl relative">
        <div
          class="h-4/5 flex flex-col items-center justify-center py-2 mt-10 pt-5"
        >
          <h4
            class="sm:text-base md:text-3xl text-[#140320] mb-3 text-base text-left dynamic-header"
          >
            {{ loginState.login }} login
          </h4>
          <NuxtLink class="text-[#41126599] dynamic-content" to="loginview"
            >Login to your {{ loginState.login }} account</NuxtLink
          >
          <!-- <p class="text-[#41126599] dynamic-content">
            
          </p> -->
        </div>
        <!-- Round Button with "x" icon -->
        <button
          @click="closeBar"
          class="absolute top-1/2 right-0 animate-bounce transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            class="w-6 h-6 mx-auto my-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// INSTANTIATE THE SIDE BAR FROM THE PINIA STORE
// INSTANTIATE THE SIDE BAR FROM THE PINIA STORE
const sideNav = sideLogin();
const loginState = loginstate();
import { PhArrowDown, PhUserCircle } from "@phosphor-icons/vue";

// CLOSE THE SIDE BAR
const closeBar = () => {
  sideNav.closeSideBar();
};
</script>

<style scoped>
.dynamic-header {
  font-family: Syne;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: 0em;
  /* text-align: left; */
}
.dynamic-content {
  font-family: Montserrat;
  font-weight: 600;
  letter-spacing: 0em;
  /* text-align: left; */
}
.static-header {
  font-family: Unlock;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
}
.static-login {
  font-family: Syne;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
}
.static-content {
  /* font-family: Syne; */
  /* font-size: 36px; */
  font-weight: 600;
  line-height: 52px;
  letter-spacing: 0em;
  border-radius: 20px;
  background-color: white;
  /* text-align: left; */
}
</style>
