<template>
  <div
    class="flex flex-col items-center h-screen w-full md:pt-20 pt-10"
  >
    <h1 class="text-2xl text-gray-800 font-semibold font-custom text-center">
      Attach Class to Parent / Teacher
    </h1>
    <!-- <p class="mb-10">Sign up to Account</p> -->
    <form
      enctype="multipart/form-data"
      method="post"
      class="flex flex-col items-center space-y-4 w-5/6 md:w-1/3"
    >
      <Notify :notification="notification" class="grid" />
      <!-- Username input -->
      <div class="w-full">
        <p class="text-base text-gray-800 font-custom">Select a field</p>
        <select
          v-model="selectedRole"
          class="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none"
        >
          <option>Teacher</option>
          <option>Parent</option>
        </select>
      </div>

      <div class="w-full" v-if="selectedRole === 'Parent'">
        <p class="text-base text-gray-800 font-custom">Select Parent</p>
        <select
          v-model="selectedParent"
          class="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none"
        >
          <option v-for="parent in parents" :key="parent.id" :value="parent.id">
            {{ parent.email }}
          </option>
        </select>
      </div>
      <div class="w-full" v-if="selectedRole === 'Teacher'">
        <p class="text-base text-gray-800 font-custom">Select Teacher</p>
        <select
          v-model="selectedTeacher"
          class="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none"
        >
          <option
            v-for="teacher in teachers"
            :key="teacher.id"
            :value="teacher.id"
          >
            {{ teacher.email }}
          </option>
        </select>
      </div>

      <div class="w-full">
        <p class="text-base text-gray-800 font-custom">Select class</p>
        <select
          v-model="selectedClass"
          class="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none"
        >
          <option
            v-for="classroom in classes"
            :key="classroom.id"
            :value="classroom.id"
          >
            {{ classroom.name }}
          </option>
        </select>
      </div>

      <!-- Password input -->

      <!-- Login button -->
      <button
        :disabled="inactiveButton"
        type="submit"
        @click.prevent="signup"
        class="w-72 md:w-full text-center px-0 py-2 bg-white rounded-md shadow-md hover:bg-[#A508A5] hover:text-white focus:outline-none mt-5 pt-5"
      >
        Attach to Class
      </button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
// import {storeToRefs} from "pinia";
const supabase = useSupabaseClient();
const client = useSchoolStore();
const adminSchool = client.getSchool();
const parents = client.parents;
const teachers = client.teachers;
const classes = await client.ListClasses();
const selectedRole = ref("");
const inactiveButton = ref(false);
const selectedClass = ref("");
const selectedTeacher = ref(null);
const selectedParent = ref(null);
const notification = ref({});

const signup = async () => {
  console.log(selectedClass.value);
  if (!selectedRole.value) {
    checker(notification, 3000, "Please select a role");
    return;
  }

  if (!(selectedTeacher.value || selectedParent.value)) {
    checker(notification, 2000, "Sorry select the fields");
    return;
  }
  if (!selectedClass.value) {
    checker(notification, 3000, "Please select a class field");
    return;
  }

  inactiveButton.value = true;

  const { _, error } = await supabase
    .from("user_roles")
    .update({ class_id: selectedClass.value })
    .eq("user_id", selected_user.value)
    .select();

  if (error) {
    console.error(error.message);
    checker(notification, 3000, error.message);
  }
  successinfo(notification, 3000, `Successfully added`);

  selectedClass.value = ref("");
  selectedTeacher.value = ref(null);
  selectedParent.value = ref(null);
  inactiveButton.value = false;
};

const selected_user = computed(() => {
  return selectedParent.value ?? selectedTeacher.value;
});
</script>

<style lang="scss" scoped></style>
