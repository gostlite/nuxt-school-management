<template>
  <div
    class="grid items-center bg-primary w-full"
  >
    <h1 class="text-3xl font-semibold my-2 m-auto">My Classes</h1>
    <!-- show a table that list classes -->
    <table class="">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th># of students</th>
          <!-- <th>Description</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="classroom of classes" :key="classroom.id">
          <td>{{classroom.id}}</td>
          <td>{{classroom.name}}</td>
          <td>{{classroom?.students[0]?.count}}</td>
          <!-- <td>School Fees</td> -->
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import {storeToRefs} from "pinia";

const newclass = ref("");
const client = Client();
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const adminSchool = await client.getSchool();
const notification = ref({});
const inactivebutton = ref(false);
const schoolStore = useSchoolStore();
const {classes} = storeToRefs(schoolStore)
</script>

<style lang="scss" scoped></style>
