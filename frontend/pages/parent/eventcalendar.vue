<template>
  <div>
    <UserEventCalendar :can_edit="can_edit" />
  </div>
</template>

<script setup>
const can_edit = false;
definePageMeta({
  layout: "parent",
});
</script>

<style lang="scss" scoped></style>
