<template>
  <div>
    <ul class="space-y-4">
      <li
        v-for="post in posts"
        :key="post.id"
        class="p-4 bg-white shadow rounded-lg"
      >
        <h3 class="text-lg font-semibold">{{ post.title }}</h3>
        <p class="text-gray-500">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([
  { id: 1, title: "Post 1", body: "This is the content of Post 1." },
  { id: 2, title: "Post 2", body: "This is the content of Post 2." },
  { id: 3, title: "Post 3", body: "This is the content of Post 3." },
]);
</script>

<style scoped>
/* Add Tailwind CSS classes here */
</style>
