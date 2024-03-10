<template>
  <div
    class="flex flex-col justify-center items-center px-4 py-9 my-9 sm:px-6 lg:px-8"
  >
    <p
      class="w-full max-w-md text-sm mb-6 pb-6 md:text-2xl text-[#631D98] text-center resetContent"
    >
      Enter the email address or phone number you use to sign in.
    </p>
    <form class="w-full max-w-sm" @submit.prevent="">
      <Notify :notification="notification" />
      <div class="flex flex-col mb-4">
        <input
          v-model="email"
          id="username"
          class="px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500"
          type="text"
          disabled
        />
        <input
          v-model="password"
          id="password"
          class="px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500"
          type="text"
          placeholder="enter password"
          required
        />
        <input
          v-model="confirmpassword"
          id="password"
          class="px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500"
          type="text"
          placeholder="confirm password"
          required
        />
      </div>

      <!-- <Notify :notification="notify" class="grid" /> -->

      <button
        @click.prevent="update"
        class="request w-full px-4 py-2 mb-4 text-[#14032075] uppercase bg-white hover:bg-[#631D98] hover:text-white focus:outline-none focus:bg-indigo-600"
        type="submit"
      >
        Update User
      </button>
    </form>
  </div>
</template>

<script setup>
const client = Client();

const user = useSupabaseUser();
console.log(user.value);
const { email } = user.value;

const supabase = useSupabaseClient();
const password = ref("");
const confirmpassword = ref("");
const notification = ref({});

const update = async () => {
  if (!password.value || !confirmpassword.value) {
    checker(notification, 2000, "password is empty");
  }
  if (password.value !== confirmpassword.value) {
    checker(notification, 3000, "password doesnt match");
  }
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: password.value,
    });

    console.log(client.currentuser);
    if (error) {
      throw new Error(error);
    }
    if (data) {
      successinfo(notification, 3000, "Successfully updated your password");
      await client.signOut();
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
