<template>
  <div
    class="flex flex-col items-center h-screen bg-primary w-full md:pt-20 pt-10"
  >
    <h1 class="text-3xl font-semibold mt-10 mb-2">Create an Account</h1>
    <p class="mb-10">Sign up to Account</p>
    <form
      enctype="multipart/form-data"
      method="post"
      class="flex flex-col items-center space-y-4 w-1/3"
    >
      <Notify :notification="notification" class="grid" />
      <!-- Username input -->

      <input
        required
        type="email"
        v-model="email"
        placeholder="Email address"
        class="input input-bordered"
      />

      <!-- Password input -->
      <input
        required
        type="password"
        v-model="password"
        placeholder="password"
        class="input input-bordered"
      />
      <input
        required
        type="password"
        v-model="confirmpassword"
        placeholder="confirm password"
        class="input input-bordered"
      />

      <!-- Login button -->
      <button
        :disabled="inactivebutton"
        type="submit"
        @click.prevent="signup"
        class="w-72 md:w-full text-center px-0 py-2 bg-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none mt-5 pt-5"
      >
        <span class="px-6 text-[#14032075] text-center">Create Account</span>
      </button>
    </form>
    <NuxtLink to="loginview">
      <p class="my-5 text-[#5C0B9D]">Already Have An Account?</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");
const confirmpassword = ref("");
const newUser = Client();
const notification = ref({});
const inactivebutton = ref(false);

const signup = async () => {
  if (password.value !== confirmpassword.value) {
    checker(notification, 2000, "password does not match");
  }
  if (
    !email.value ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    checker(notification, 2000, "input a valid email");
  }
  if (!password || !confirmpassword.value) {
    checker(notification, 2000, "dont leave your password field empty");
  } else {
    console.log("success");
    inactivebutton.value = true; // dissable the button
    successinfo(notification, 3000, "successfully created your account");
    await newUser.userSignup(email.value, password.value);
    if (newUser.errormessage) {
      checker(notification, 2000, newUser.errormessage);
      newUser.errormessage = "";
    }

    navigateTo("/signup");
  }
  // navigateTo("signup");
};
</script>

<style lang="scss" scoped></style>
