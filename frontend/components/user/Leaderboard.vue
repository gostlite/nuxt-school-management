<template>
  <div class="w-full h-full">
    <div class="md:grid md:grid-cols-3 flex flex-col md:w-full gap-2">
      <div class="container mx-auto p-4 md:col-span-2">
        <!-- Use md:col-span-1 for the first column -->
        <h1 class="text-2xl font-bold mb-4">Student Scoreboard</h1>
        <div class="w-full bg-white shadow-md rounded-lg overflow-scroll">
          <thead class="bg-gray-200 text-gray-600">
            <tr>
              <th class="py-2 px-4">Student Name</th>
              <th class="py-2 px-4">Math Score</th>
              <th class="py-2 px-4">Science Score</th>
              <th class="py-2 px-4">English Score</th>
            </tr>
          </thead>
          <tbody class="text-gray-600">
            <!-- Loop through your student data and populate the table rows -->
            <tr
              v-for="(student, index) in students"
              :key="index"
              :class="{ 'alternate-row': index % 2 === 1 }"
            >
              <td class="py-2 px-4 text-center">
                {{ student.first_name }} {{ student.last_name }}
              </td>
              <td class="py-2 px-4 text-center">50</td>
              <td class="py-2 px-4 text-center">50</td>
              <td class="py-2 px-4 text-center">50</td>
            </tr>
          </tbody>
        </div>
      </div>

      <!-- second column -->
      <div class="w-full md:col-span-1 md:mr-4">
        <!-- Use md:col-span-2/3 for the second column -->
        <div
          class="w-full h-full relative bg-white rounded-2xl justify-center items-center"
        >
          <!-- <img

            class="w-44 h-44 mt-12 rounded-full mx-auto"
            src="https://image.shutterstock.com/image-photo/portrait-smiling-mature-man-standing-260nw-2137527991.jpg"


          /> -->
          <NuxtImg class="w-44 h-44 mt-12 rounded-full mx-auto object-cover" :src="dp" />

          <!-- Under the avatar -->
          <div class="flex flex-col text-center mt-5">
            <div class="text-zinc-900 text-base font-bold font-['Kumbh Sans']">
              {{ teacherprofile.first_name ?? "No first name" }}
              {{ teacherprofile.last_name ?? "no last name" }}
            </div>
            <div
              class="text-neutral-400 text-sm font-medium font-['Kumbh Sans'] mt-3 text-center"
            >
              {{ classProfile[0].name }} Teacher
            </div>
            <div class="grid grid-cols-2 gap-4 mx-auto mt-5">
              <NuxtLink to="tel:+1234567890">
                <ph-phone :size="30" color="#a508a5" />
              </NuxtLink>

              <NuxtLink>
                <ph-chat :size="30" color="#a508a5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// get the specific teacher and class

import { PhPhone, PhChat } from "@phosphor-icons/vue";

const supabase = useSupabaseClient();

const client = useSchoolStore();

await client.init(); //init the school store

const students = await client.getClassStudents();

const teacherprofile = client.getTeacherProfile();

const {
  data: { publicUrl: dp },
} = supabase.storage.from("avatars").getPublicUrl(teacherprofile.avatar_url);

const classProfile = await client.getClassProfile();
</script>

<!-- <style>
.alternate-row {
  background-color: lightgray; /* Set the background color for alternate rows here */
}
</style> -->
