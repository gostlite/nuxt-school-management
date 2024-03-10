<template>
  <div>
    <UserParent :query-id="classprofile[0].id" :query-name="queryName" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "teacher",
});
const client = useSchoolStore();
await client.init();
const classprofile = await client.getClassProfile();
const queryName = "class_id";
</script>
