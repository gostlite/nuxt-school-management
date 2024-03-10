<template>
  <div
    class="flex flex-col items-center min-h-screen bg-primary w-full md:pt-20 pt-10"
  >
    <h1 class="text-3xl font-semibold mt-10 mb-2">Sign up</h1>
    <p class="mb-10">Profile sign up</p>
    <form
      enctype="multipart/form-data"
      method="post"
      class="flex flex-col items-center space-y-4 w-1/3"
    >
      <Notify :notification="notification" class="grid" />
      <!-- Username input -->
      <template class="grid lg:grid-cols-2 gap-2 w-full">
        <input
          required
          type="text"
          v-model="userData.first_name"
          placeholder="First Name"
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          required
          type="text"
          v-model="userData.last_name"
          placeholder="last name"
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </template>
      <select
        :disabled="!newUser"
        v-model="userData.role"
        @click="checkUser"
        class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
      >
        <option value="student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Parent">Parent</option>
      </select>
      <input
        required
        :disabled="!newUser"
        type="text"
        v-model="userData.username"
        placeholder="Add a user name"
        class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
      />

      <!-- Password input -->
      <input
        required
        type="text"
        v-model="userData.phone"
        placeholder="phone ex +1800000000"
        class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
      />
      <input
        required
        type="text"
        v-model="userData.address.address_line_1"
        placeholder="Address Line 1"
        class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
      />
      <input
        required
        type="text"
        v-model="userData.address.address_line_2"
        placeholder="Address Line 2"
        class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
      />
      <input
        required
        type="text"
        v-model="userData.address.city"
        placeholder="City"
        class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
      />
      <input
        required
        type="text"
        v-model="userData.address.state"
        placeholder="State"
        class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
      />
      <input
        required
        type="text"
        v-model="userData.address.country"
        placeholder="Country"
        class="px-4 py-2 border border-gray-300 rounded-md w-full md:w-full focus:outline-none"
      />
      <Notify :notification="notification" />

      <!-- Login button -->
      <button
        type="submit"
        @click.prevent="createProfile"
        class="w-72 md:w-full text-center px-0 py-2 bg-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none mt-8"
      >
        <span class="px-6 text-[#14032075] text-center">Save profile</span>
      </button>
    </form>
    <NuxtLink to="loginview">
      <p class="my-5 text-[#5C0B9D]">Already Have An Account?</p>
    </NuxtLink>
  </div>
</template>
<script setup>
import { DateTime } from "luxon";
const client = Client();
let supabase = useSupabaseClient();
let userData = reactive({
  role: "Parent",
  first_name: "",
  last_name: "",
  username: "",
  phone: "",
  address: reactive({
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "",
  }),
});

const user = await client.getUser();
const { id: myid } = user;
console.log(user);
// user was created less than 10 mins ago
let newUser =
  DateTime.local().minus({ minutes: 10 }).toISO() <
  DateTime.fromISO(user.created_at).toISO();
onMounted(async () => {
  let { data: User, error } = await supabase
    .from("profiles")
    .select()
    .limit(1)
    .eq("id", user.id);
  if (User[0]) Object.assign(userData, User[0]);
  omISO(User[0].updated_at).toISO();
  console.log(newUser);
});

const notification = ref({});

const createProfile = async () => {
  console.log(myid);
  // checking if any input is empty
  if (
    !userData.last_name.value ||
    !userData.first_name.value ||
    !userData.phone.value ||
    !userData.address.value
  ) {
    checker(notification, 8000, "Seems one or a few of your fields are empty");
  }
  // //set up the profile
  try {
    const { data, error } = await useSupabaseClient()
      .from("profiles")
      .update(userData)
      .eq("id", myid)
      .select();
    if (error) {
      throw new Error(error);
    }
    if (data) {
      successinfo(notification, 3000, "successfully created your profile");
      //   navigateTo("activities");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
