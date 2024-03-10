<template>
  <UserStats
    :firstStat="stats.firststat"
    :secondStat="stats.secondstat"
    :thirdStat="stats.thirdstat"
  />
</template>

<script setup>
const client = Client();
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const adminSchool = await client.getSchool();
let schoolStore = useSchoolStore();
let role = await schoolStore.getRole();
let school = await schoolStore.getSchool();
let classes = await schoolStore.getClasses();
let students = await schoolStore.getStudents();
let parents = await schoolStore.getParents();
let teachers = await schoolStore.getTeachers();

const stats = {
  firststat: { name: "Current Teachers", value: schoolStore.teachersCount },
  secondstat: { name: "Current Classes", value: schoolStore.classesCount },
  thirdstat: { name: "Current Students", value: schoolStore.studentCount },
};
</script>

<style scoped></style>
