<template>
  <div class="flex flex-row bg-white">
    <div
      class="w-[70px] max-h-screen overflow-y-auto flex justify-center sticky top-0 left-0 md:w-[250px]"
    >
      <TeacherDashboard />
      <!-- Sidebar menu content goes here -->
    </div>
    <div class="w-5/6 min-h-screen">
      <AdminNavbar />
      <!-- Page content goes here -->

      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
