<template>
  <div>
    <UserParent :query-id="schoolid" :query-name="queryName" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
const client = useSchoolStore();
await client.init();
const schoolid = await client.getSchoolId();
const queryName = "school_id";
</script>
