<template data-theme="admin">
  <div
    data-theme="light"
    class="flex flex-col items-center h-screen bg-gray-100 w-full md:pt-30 pt-20"
  >
    <Notify :notification="notification" />
    <div
      class="bg-white rounded-lg shadow-2xl w-[95%] md:w-[80%] h-[500px] flex"
    >
      <div class="w-[50%] h-full">
        <nuxt-img
          src="/assets/schoolbag.jpg"
          alt=""
          class="w-full h-full object-contain"
        />
      </div>
      <div class="w-[50%] bg-gray-50">
        <h1
          class="text-3xl text-center font-[Montserrat] font-semibold mt-10 mb-2"
        >
          {{ loginState.login }} Login
        </h1>
        <p class="mb-10 text-center font-[Montserrat]">
          Login to {{ loginState.login }} Account
        </p>
        <form class="flex flex-col items-center space-y-4 w-full px-2">
          <!-- Username input -->
          <input
            required
            type="email, tel"
            v-model="username"
            placeholder="Enter email address/ Phone number"
            class="px-4 py-2 border border-gray-300 rounded-md w-full md:w-full focus:outline-none"
          />

          <!-- Password input -->
          <input
            required
            type="password"
            v-model="password"
            placeholder="Enter Password"
            class="px-4 py-2 border border-gray-300 rounded-md w-full md:w-full focus:outline-none"
          />
          <p class="mb-10 font-[Roboto] pb-5">
            By logging in, I agree to the
            <span class="text-[#5C0B9D]">Terms of Service</span>
          </p>

          <!-- Login button -->
          <button
            :disabled="active"
            type="submit"
            @click.prevent="login"
            class="w-full md:w-full text-center px-0 py-4 bg-[#5C0B9D] rounded-md shadow-md font-[500] text-white hover:opacity-90 focus:outline-none mt-5"
          >
            SIGN IN
          </button>
        </form>
        <div class="my-3">
          <NuxtLink to="createuser">
            <p class="font-[montserrat]">Don't Have An Account?</p>
          </NuxtLink>

          <NuxtLink to="resetpassword"
            ><p class="font-[montserrat]">Forgot Password?</p></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login-menu",
});

import { ref } from "vue";

const loginState = loginstate();
const username = ref("");
const password = ref("");
const active = ref(false);
const client = Client();
const notification = ref({});
const loading = ref(false);

// redirect user to page
const login = async () => {
  try {
    loading.value = true;
    if (
      !username.value ||
      !username.value.includes("@") ||
      !username.value.includes(".")
    ) {
      checker(notification, 2000, "email not valid, check ");
    }
    if (!password.value) {
      checker(notification, 2000, "password field is empty");
    }
    // Your login logic here

    // active.value = true;
    else {
      active.value = false;

      const res = await client.authLogin(username.value, password.value);
      if (res) {
        successinfo(notification, 3000, "successfully logged in");

        // console.log(await user.getRole());
        navigateTo("/afterlogin");
      }
      // check if there is an error messages
      if (client.errormessage) {
        checker(notification, 2000, client.errormessage);
        newUser.errormessage = "";
      }
    }
  } catch (err) {
    loading.value = false;
  } finally {
    loading.value = false;
  }
};
onMounted(() => {});
</script>

<style>
/* Add your custom styles here */
</style>
