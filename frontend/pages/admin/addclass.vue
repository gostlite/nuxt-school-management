<template>
  <div >
    <div class="flex justify-end">
      <button class="btn rounded-full bg-purple-600 m-3 hover:bg-purple-900" @click= "addClass=!addClass">
        {{ !addClass? 'Add Teacher To Class':'Create Class' }}
      </button>
    </div>
    <Createclass v-if="!addClass" />

    <TeacherAtttachToClass v-if="addClass" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
const addClass = ref(false);
</script>

<style lang="scss" scoped></style>
