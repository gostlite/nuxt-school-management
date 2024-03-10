<template>
  <div class="flex flex-col items-center min-h-screen w-full md:pt-20 pt-10">
    <h1 class="text-2xl text-gray-800 font-semibold font-custom mt-10 mb-2">
      Create A User
    </h1>
    <!-- <p class="mb-10">Sign up to Account</p> -->
    <form
      enctype="multipart/form-data"
      method="post"
      class="flex flex-col items-center space-y-4 md:w-1/3 w-5/6"
    >
      <Notify :notification="notification" class="grid" />
      <!-- first and lastname input -->
      <div class="mb-4 w-full">
        <label class="block text-sm font-medium">First Name</label>
        <input
          required
          type="text"
          v-model="body.first_name"
          placeholder="First Name"
          class="input input-bordered w-full"
        />
      </div>

      <div class="mb-4 w-full">
        <label class="block text-sm font-medium">Last Name</label>
        <input
          required
          type="text"
          v-model="body.last_name"
          placeholder="Last Name"
          class="input input-bordered w-full"
        />
      </div>

      <div class="mb-4 w-full">
        <label class="block text-sm font-medium">Email</label>
        <input
          required
          type="email"
          v-model="body.email"
          placeholder="Email address"
          class="input input-bordered w-full"
        />
      </div>
      <div class="mb-4 w-full">
        <label class="block text-sm font-medium">Role</label>
        <select
          @change="checkrole"
          :disabled="!newUser"
          v-model="body.chosenRole"
          class="input input-bordered w-full"
        >
          <option selected disabled>Choose a Role</option>
          <option v-for="role in roles" :key="role.id" :value="role.id">
            {{ role.name }}
          </option>
        </select>
      </div>
      <div class="mb-4 w-full" v-if="selectedRole[0]?.name == 'Teacher'">
        <label class="block text-sm font-medium">Class</label>
        <select class="input input-bordered w-full" v-model="body.chosenClass">
          <option selected disabled>Choose a Class</option>
          <option
            v-for="classroom in classes"
            :key="classroom.id"
            :value="classroom.id"
          >
            {{ classroom.name }}
          </option>
        </select>
      </div>
      <div class="mb-4 w-full">
        <label class="block text-sm font-medium">Gender</label>
        <select v-model="body.gender" class="w-full mt-1 input input-bordered">
          <option selected disabled>What is your Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>

      <div class="mb-4 w-full">
        <label class="block text-sm font-medium">Qualification</label>
        <input
          v-model="body.qualification"
          class="w-full mt-1 input input-bordered"
          placeholder="e.g. Bachelor's Degree"
        />
      </div>

      <div class="mb-4 w-full">
        <label class="block text-sm font-medium">Date of Birth </label>
        <input
          type="date"
          v-model="body.meta.dob"
          class="w-full mt-1 input input-bordered"
        />
      </div>

        <!-- Login button -->
        <button
          :disabled="inactivebutton"
          type="submit"
          @click.prevent="signup"
          class="w-1/2 col-span-full text-center font-[Sora] text-[17px] font-[600] text-white px-0 py-2 bg-success rounded-md shadow-md focus:outline-none mt-5 pt-5"
        >
          Create {{ selectedRole[0]?.name || "user" }}
        </button>
      </form>
    </div>
</template>

<script setup>
import {
  FunctionsHttpError,
  FunctionsRelayError,
  FunctionsFetchError,
} from "@supabase/supabase-js";
import { computed } from "vue";
import { PhUsers } from "@phosphor-icons/vue";

const client = useSchoolStore();

const myparent = client.parents;
console.log(myparent);

const adminSchool = await client.getSchoolId(); // get admin school id
let supabase = useSupabaseClient();
if (client.errormessage) {
  // check if there is an error in fetching admin school id
  checker(notification, 2000, client.errormessage);
  client.errormessage = "";
}
//check if teacher by filtering role by chosenRole
let checkIfTeacher = computed(() => {
  return selectedRole[0]?.name == "Teacher";
});
let selectedRole = computed(() => {
  return roles.filter((role) => role.id == body.chosenRole) || [];
});
// const classes = (await client.getClass()) ?? "No classes yet";
// console.log(await client.getClass());
const body = reactive({});
body.email = ref("");
body.password = ref("");
body.confirmpassword = ref("");
body.chosenRole = ref(null);
body.chosenClass = ref(null);
body.gender = ref(null);
body.qualification = ref(null);
body.meta = ref({});
body.meta.dob = ref(null);
const newUser = Client();
const notification = ref({});
const inactivebutton = ref(false);

const { data: roles, error: rolesError } = await supabase
  .from("roles")
  .select("id, name");

const classes = (await client.ListClasses()) ?? "No classes yet";
const checkrole = () => {};
const signup = async () => {
  if (!body.email || !body.email.includes("@") || !body.email.includes(".")) {
    checker(notification, 2000, "input a valid email");
    return;
  }
  if (!body.chosenRole) {
    checker(notification, 2000, "select a role for the user");
    return;
  } else {
    inactivebutton.value = true; // disable the button

    let bodyVal = {
      email: body.email,
      roleId: body.chosenRole,
      schoolId: adminSchool,
      classId: body.chosenClass,
      ...body,
    };
    const { data: payload, error } = await supabase.functions.invoke(
      "create_tiflicare_users",
      { body: bodyVal }
    );

    if (error instanceof FunctionsHttpError) {
      const errorMessage = await error.context.json();
      console.log("Function returned an error", errorMessage);
      checker(notification, 5000, errorMessage.error);
    } else if (error instanceof FunctionsRelayError) {
      console.log("Relay error:", error.message);
      checker(notification, 5000, errorMessage.error);
    } else if (error instanceof FunctionsFetchError) {
      console.log("Fetch error:", error.message);
      checker(notification, 5000, errorMessage.error);
    }
    successinfo(
      notification,
      5000,
      "successfully created your account " + payload.user.id
    );
    // reset the values to default

    body.email = ref("");
    body.password = ref("");
    body.confirmpassword = ref("");
    body.chosenRole = ref(null);
    body.chosenClass = ref(null);

    document.getElementById("useremail").value = "";
    document.getElementById("userpassword").value = "";
    document.getElementById("userconfirmpassword").value = "";

    inactivebutton.value = false;
  }
};
</script>

<style scoped></style>
