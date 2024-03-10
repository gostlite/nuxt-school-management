<template>
  <div
    class="flex flex-col items-center h-screen  w-full md:pt-20 pt-10"
  >
    <h1 class="text-2xl text-gray-800 font-semibold font-custom">
      Attach Parent to Student
    </h1>
    <!-- <p class="mb-10">Sign up to Account</p> -->
    <form
      enctype="multipart/form-data"
      method="post"
      class="flex flex-col items-center space-y-4 w-1/3"
    >
      <Notify :notification="notification" class="grid" />
      <!-- Username input -->
      <div class="w-full">
        <p class="text-base text-gray-800 font-custom">Select a student</p>
        <select
          v-model="selectedStudent"
          class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
        >
          <option
            v-for="student in students"
            :key="student.id"
            :value="student.id"
          >
            {{ "Name: " + student.first_name }}
            {{ student.last_name }} {{ ", Class: " + student.class_id }}
          </option>
        </select>
      </div>
      <div class="w-full">
        <p class="text-base text-gray-800 font-custom">Select a parent</p>
        <select
          v-model="selectedParent"
          class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
        >
          <option v-for="parent in parents" :key="parent.id" :value="parent.id">
            {{ parent.email }}
          </option>
        </select>
      </div>

      <!-- Password input -->

      <!-- Login button -->
      <button
        :disabled="inactiveButton"
        type="submit"
        @click.prevent="signup"
        class="w-72 md:w-full text-center px-0 py-2 bg-white rounded-md shadow-md hover:bg-primary hover:text-white focus:outline-none mt-5"
      >
        Attach to Parent
      </button>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const selectedParent = ref("");
const selectedStudent = ref();
const client = useSchoolStore();
const students = client.students;
const parents = client.parents;
const inactiveButton = ref(false);
const notification = ref({});

// console.log(students);

const signup = async () => {
  if (!selectedParent || !selectedStudent) {
    checker(notification, 3000, "Please select the student and parent field");
    return;
  }
  inactiveButton.value = true;
  const { data, error } = await supabase
    .from("students")
    .update({ parent_id: selectedParent.value })
    .eq("id", selectedStudent.value)
    .select();

  if (error) {
    console.error(error.message);
  }
  console.log("data", data);
  successinfo(
    notification,
    3000,
    `Successfully attached a parent to ${data[0].first_name} ${data[0].last_name}`
  );
  selectedParent.value = "";
  selectedStudent.value = "";
  inactiveButton.value = false;
};
</script>

<style scoped>
.font-custom {
  font-family: "Montserrat", sans-serif;
}
</style>
