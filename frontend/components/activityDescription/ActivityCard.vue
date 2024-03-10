<template>
  <div class="w-35 lg:w-72 h-40 lg:h-96 relative shadow">
    <nuxt-img
      class="w-20 md:w-64 h-55 md:h-80 left-[5px] md:left-[11px] top-[15px] absolute rounded-md"
      quality="80"
      :src="activity.image"
    />

    <div
      class="absolute bottom-0 w-full bg-green-200 opacity-80 flex items-center justify-center h-20"
    >
      <p class="btn my-4">View details</p>
    </div>
  </div>
</template>

<script setup>
const { activity } = defineProps(["activity"]);
</script>

<style scoped>
.thumb {
  max-height: 170px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
