<!-- HOME NAV BAR, DEFAULT LAYOUT FOR MOST COMPONENTS -->
<template>
  <div class="bg-[#5c0b9d] sticky top-0 z-[50] w-full py-5 px-2">
    <div class="w-full">
      <!-- Navigation items -->
      <ul class="hidden md:flex items-center w-full justify-between">
        <li>
          <span class="text-white font-semibold tiflicare">TifliCare</span>
        </li>
        <ul class="hidden lg:flex font-[Lato] items-center justify-between">
          <li>
            <NuxtLink to="/" class="text-white hover:text-green-500"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="text-white hover:text-green-500 whitespace-nowrap"
              to="about"
            >
              About us
            </NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink class="text-white hover:text-green-500" to="activityform">
              Activity
            </NuxtLink>
          </li> -->

          <li>
            <NuxtLink class="text-white hover:text-green-500" to="calendarevent"
              >Calendar</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="text-white hover:text-green-500" to="pricing">
              Pricing
            </NuxtLink>
          </li>
        </ul>
        <div>
          <button
            v-if="!isAuthenticated"
            @click="showLogin"
            class="bg-white btn-outline font-semibold py-2 px-4 rounded-md uppercase hover:bg-green-500 hover:white"
          >
            Login
          </button>

          <div v-else class="flex gap-3">
            <NuxtLink to="afterlogin">
              <button
                class="bg-white btn-outline font-semibold py-2 px-4 rounded-md uppercase hover:bg-green-500 hover:white"
              >
                Dashboard
              </button>
            </NuxtLink>
            <button
              @click="signOut"
              class="bg-white btn-outline font-semibold py-2 px-4 rounded-md uppercase hover:bg-green-500 hover:text-purple-600"
            >
              Logout
            </button>
          </div>
        </div>
      </ul>

      <!-- Mobile navigation menu -->
      <div class="md:hidden flex flex-col items-start">
        <div class="flex items-center justify-between w-full py-3">
          <span class="text-white font-semibold tiflicare-mobile mb-3"
            >TifliCare</span
          >
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-white focus:outline-none"
            aria-label="Open mobile menu"
          >
            <svg
              v-if="isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Mobile navigation menu items -->
        <div v-show="isMobileMenuOpen" class="mt-2 py-2 px-4 custom-color">
          <ul class="flex flex-col gap-4">
            <li>
              <NuxtLink to="/" class="text-white">Home</NuxtLink>
            </li>

            <li>
              <NuxtLink to="about" class="text-white">About us</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink
                class="text-white hover:text-green-500"
                to="activityform"
              >
                Activity
              </NuxtLink>
            </li> -->
            <li>
              <NuxtLink class="text-white" to="calendarevent"
                >Calendar</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="text-white" to="pricing"> Pricing </NuxtLink>
            </li>
          </ul>
          <div v-if="!isAuthenticated">
            <button
              @click="showLogin"
              class="block bg-white text-primary font-semibold py-2 px-4 rounded-md mt-4"
            >
              Login
            </button>
          </div>

          <div v-else class="flex gap-3">
            <NuxtLink to="afterlogin">
              <button
                class="bg-white btn-outline font-semibold py-2 px-4 rounded-md uppercase hover:bg-green-500 hover:text-purple-600"
              >
                Dashboard
              </button>
            </NuxtLink>
            <button
              @click="signOut"
              class="bg-white btn-outline font-semibold py-2 px-4 rounded-md uppercase hover:bg-green-500 hover:text-purple-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// INSTANTIATING THE SIDE LOGIN NAVBAR FROM PINIA
const sideNav = sideLogin();
let user = useSupabaseUser();
console.log(user.value?.id);
let isAuthenticated = !!user.value?.id;
let signOut = Client().signOut;

const isMobileMenuOpen = ref(false);

// FUNCTION TO OPEN THE SIDE BAR WHEN LOGIN BUTTON IS CLICKED
const showLogin = () => {
  sideNav.openSideBar();
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Poppins:wght@200&display=swap");

.tiflicare {
  font-family: Unlock;
  font-size: 39px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
  /* margin-left: 30px; */
}
.tiflicare-mobile {
  font-family: Unlock;
  font-size: 39px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
}
nav {
  width: 100%;
  box-sizing: border-box;
  background: #5c0b9d;
}
li {
  text-transform: uppercase;
}
l1:hover {
  color: greenyellow;
}

ul {
  column-gap: 41px;
}

custom-color {
  background: #5c0b9d;
}
@media (max-width: 800px) {
  nav {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
