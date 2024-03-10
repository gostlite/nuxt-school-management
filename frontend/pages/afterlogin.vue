<script setup>
import { watch } from "vue";
import LoadingOverlay from "vue-loading-overlay";
// import "vue-loading-overlay/dist/css/index.css";

const isLoading = true;
const client = useSchoolStore();
const roleObject = await client.getRole();
const { role_id: role } = roleObject;
watch(
  role,
  async () => {
    if (!role) {
      navigateTo("/loginview");
    }
    if (role === 1) {
      navigateTo("/admin");
    } else if (role === 2) {
      navigateTo("/teacher");
    } else if (role === 4) {
      navigateTo("/parent");
    } // will need to add 404 page to redirect to
  },
  { immediate: true }
);
</script>
<template>
  <div class="min-h-screen flex justify-center items-center">
    <LoadingOverlay
      :active="isLoading"
      :can-cancel="false"
      class="justify-center items-center mx-auto text-center"
    />
    <!-- Your content here -->
  </div>
</template>
