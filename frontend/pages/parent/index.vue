<template>
  <div>
    <div class="flex mt-10">
      <UserStats
        :firstStat="stats.firststat"
        :secondStat="stats.secondstat"
        :thirdStat="stats.thirdstat"
      />
    </div>

    <h1 class="text-2xl font-bold mt-20 mb-10">Parent Details</h1>

    <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead class="bg-gray-200 text-gray-600">
        <tr>
          <th class="py-2 px-4">Child Name</th>
          <th class="py-2 px-4">Child's Class</th>
          <th class="py-2 px-4">Teacher's Name</th>
          <th class="py-2 px-4">Teacher's Phone</th>
          <th class="py-2 px-4">Teacher's email</th>
        </tr>
      </thead>
      <tbody class="text-gray-600">
        <!-- Loop through your student data and populate the table rows -->
        <tr
          v-for="(profile, index) in children_teacher_list"
          :key="index"
          :class="{ 'alternate-row': index % 2 === 1 }"
        >
          <td class="py-2 px-4 text-center">
            {{ profile[0].first_name }} {{ profile[0].last_name }}
          </td>
          <td class="py-2 px-4 text-center">
            {{ profile[0].classes.name }}
          </td>
          <td class="py-2 px-4 text-center">
            {{ profile[1].first_name }} {{ profile[1].last_name }}
          </td>

          <td class="py-2 px-4 text-center justify-center items-center">
            {{ profile[1].phone ?? "no number" }}
            <!-- <NuxtLink to="tel:+1234567890">
              <ph-phone :size="30" color="#a508a5" class="mx-auto" />
            </NuxtLink> -->
          </td>
          <td class="py-2 px-4 text-center">
            {{ profile[1].email }}
            <!-- <NuxtLink>
              <ph-chat :size="30" color="#a508a5" class="mx-auto" />
            </NuxtLink> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { PhPhone, PhChat } from "@phosphor-icons/vue";

definePageMeta({
  layout: "parent",
});
const parent = useSupabaseUser();
const school_client = useSchoolStore();
const schoolname = await school_client.getSchoolName();
const supabase = useSupabaseClient();

const children_teacher_list = ref([]);

const students = await school_client.getParentChildren(parent.value.id);

for (const student of students) {
  const { data: teacher_profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", student.classes.teacher_id);

  if (!error) {
    const [teacher] = teacher_profile;
    children_teacher_list.value.push([student, teacher]);
  }
}
console.log("children and teacherlist", children_teacher_list.value);

const stats = {
  firststat: {
    name: "Child's Teacher",
    value: children_teacher_list.value.length ?? "No teacher yet",
  },
  secondstat: { name: "School Name", value: schoolname },
  thirdstat: {
    name: "Current children",
    value: students.length ?? "No child yet",
  },
};
console.log("this are the students", students);
</script>

<style lang="scss" scoped></style>
