<template>
  <div class="grid grid-cols-2 md:grid-cols-5 gap-2 relative">
    <!-- Replace these image URLs with your actual image URLs -->
    <!-- <div v-for="image in images" :key="image" class="aspect-w-1 aspect-h-1">
        <img :src="image" alt="Image" class="object-cover w-full h-full" />
      </div> -->
    <!-- <ActivityIconFood :class="myclass" /> -->
    <!-- <ActivityIconHealth :class="myclass" /> -->
    <ActivityIconPhoto :class="myclass" />
    <ActivityIconVideo :class="myclass" />
  </div>
</template>

<script setup>
const myclass = "my-10 w-[50px] h-[50px]";
</script>

<style scoped>
@media screen and (min-width: 820px) and (height: 1180px) {
  .custom-style {
  }
}
</style>
