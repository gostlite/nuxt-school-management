<template>
  <div>
    <Createuser v-if="!addParentToStudent" />
    <!-- <UserTestingUser /> -->
    <label class="inline-flex items-center space-x-2 mb-10 mt-5">
      <input
        v-model="addParentToStudent"
        type="checkbox"
        class="form-checkbox text-indigo-600 border-indigo-600 rounded-md"
      />
      <span class="text-purple-600 text-lg"
        >Do you want to attach a parent to a student?</span
      >
    </label>
    <TeacherAttachToParent v-if="addParentToStudent" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
const addParentToStudent = ref(false);
</script>

<style lang="scss" scoped></style>
