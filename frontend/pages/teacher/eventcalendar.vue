<template>
  <div>
    <UserEventCalendar :can_edit="can_edit" />
  </div>
</template>

<script setup>
const can_edit = true;
definePageMeta({
  layout: "teacher",
});
</script>

<style lang="scss" scoped></style>
