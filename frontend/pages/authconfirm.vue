<script setup lang="ts">
import { watch } from "vue";
const user = useSupabaseUser();
// get user profile
// check if the user profile has a certain role e.t.c.
// user role to redirect to profile page

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/teacher");
    }
  },
  { immediate: true }
);
</script>
<template>
  <div>Waiting for authentication...</div>
</template>
