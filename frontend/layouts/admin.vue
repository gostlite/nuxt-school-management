<template>
  <div class="flex flex-row bg-white min-h-screen">
    <div
      class="w-[70px] max-h-screen min-h-screen overflow-y-scroll flex justify-center sticky top-0 left-0 md:w-[250px]"
    >
      <Dashboardmenu />
    </div>
    <div class="w-full min-h-screen">
      <Navbar />
      <slot />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/admin/Navbar.vue";
import Dashboardmenu from "../components/admin/Dashboardmenu.vue";
let baseStore = useBaseStore();
</script>

<style scoped>
aside {
  display: flex;
  padding-left: 20px;
}
/* Layout-specific styles can be added here */
</style>
