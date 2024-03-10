<template>
  <div class="min-h-screen" :data-theme="baseStore.theme">
    <LoginNav />
    <slot />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
let baseStore = useBaseStore();
</script>

<style lang="scss" scoped></style>
