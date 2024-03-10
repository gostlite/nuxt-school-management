<template>
  <div>....confirming user ........</div>
</template>

<script setup>
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    navigateTo("updatepassword");
  }
});
</script>

<style lang="scss" scoped></style>
