<!-- Forgot password Ui -->
<template>
  <div
    class="flex flex-col justify-center items-center px-4 py-9 my-9 sm:px-6 lg:px-8"
  >
    <p
      class="text-lg md:text-5xl font-semibold mb-4 text-[#411265] resetHeader"
    >
      Forgot Your Password?
    </p>
    <p
      class="w-full max-w-md text-sm mb-6 pb-6 md:text-2xl text-[#631D98] text-center resetContent"
    >
      Enter the email address or phone number you use to sign in.
    </p>
    <form class="w-full max-w-sm" @submit.prevent="">
      <div class="flex flex-col mb-4">
        <input
          v-model="reset_details"
          id="username"
          class="px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500"
          type="text"
          placeholder="Enter your username, email, or phone"
          required
        />
      </div>
      <Notify :notification="notify" class="grid" />

      <button
        :disabled="inactivebutton"
        @click="reset"
        class="request w-full px-4 py-2 mb-4 text-[#14032075] uppercase bg-white hover:bg-[#631D98] hover:text-white focus:outline-none focus:bg-indigo-600"
        type="submit"
      >
        Request Reset
      </button>
    </form>
    <NuxtLink to="loginview">
      <p class="text-sm text-[#4643BA] mt-5 pt-3">Back To Sign in</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const client = Client();
const reset_details = ref("");
const notify = ref({});
const inactivebutton = ref(false);

// reset the password
const reset = async () => {
  if (
    !reset_details.value ||
    !reset_details.value.includes("@") ||
    !reset_details.value.includes(".")
  ) {
    checker(notify, 2000, "input a valid email");
  } else {
    inactivebutton.value = true;
    successinfo(notify, 3000, "check your email");
    await client.resetpassword(reset_details.value);

    // check if there is an error messages
    if (client.errormessage) {
      checker(notification, 2000, client.errormessage);
      newUser.errormessage = "";
    }
  }

  // await client.resetpassword(reset_details.value);

  // resetNotify(notify, 2000);
};
</script>

<style scoped>
.resetHeader {
  font-family: Syne;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
}
.resetContent {
  font-family: Syne;
  font-weight: 600;
}
.request {
  font-family: Syne;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
}
</style>
