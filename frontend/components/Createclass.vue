<template>
  <div class="flex flex-col items-center h-screen w-full md:pt-20 pt-10">
    <div class="bg-white flex flex-col p-4 md:p-8 rounded-[20px]">
      <h1 class="text-3xl font-semibold mt-10 mb-2">Create A Class</h1>
      <!-- <p class="mb-10">Sign up to Account</p> -->
      <form
        enctype="multipart/form-data"
        method="post"
        class="flex flex-col items-center space-y-4 w-full"
      >
        <Notify :notification="notification" class="grid" />
        <!-- Username input -->

        <input
          id="newclass"
          required
          v-model="newclass"
          type="text"
          placeholder="Class Name"
          class="px-4 py-2 border border-gray-300 rounded-md w-72 md:w-full focus:outline-none"
        />
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

        <!-- Password input -->

        <!-- Login button -->
        <button
          :disabled="inactivebutton"
          type="submit"
          @click.prevent="addclass"
          class="w-full text-center px-0 py-2 bg-success rounded-md shadow-md text-white focus:outline-none mt-5"
        >
          Create Class
          <!-- <span class="px-6 text-[#14032075] text-center">Create Class</span> -->
        </button>
      </form>
      <!-- <NuxtLink to="loginview">
      <p class="my-5 text-[#5C0B9D]">Already Have An Account?</p>
    </NuxtLink> -->
    </div>
  </div>
</template>

<script setup>
const newclass = ref("");
const client = Client();
const school_client = useSchoolStore();
await school_client.init();
const teachers = client.teachers;
const supabase = useSupabaseClient();
const adminSchool = await client.getSchool();
const notification = ref({});
const inactivebutton = ref(false);
const selectedTeacher = ref(null);

const addclass = async () => {
  if (!newclass.value) {
    checker(notification, 2000, "fill up the class field");
    return;
  }

  if (!selectedTeacher.value) {
    checker(notification, 2000, "select a class teacher");
    return;
  }
  try {
    const { data, error } = await supabase
      .from("classes")
      .insert([
        {
          name: newclass.value,
          school_id: adminSchool,
          teacher_id: selectedTeacher.value,
        },
      ])
      .select();

    if (error) {
      throw new Error(error);
    }
    inactivebutton.value = true;
    const { name: classname } = data[0];
    console.log(classname);
    successinfo(
      notification,
      3000,
      `successfully created a class ${classname}`
    );
  } catch (error) {
    console.error(error);
    checker(notification, 2000, error.message);
  } finally {
    inactivebutton.value = false;
    newclass.value = "";
    document.getElementById("newclass").value = "";
  }
};
</script>

<style lang="scss" scoped></style>
