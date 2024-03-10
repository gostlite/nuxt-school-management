<template>
  <div class="flex flex-col py-20 items-center justify-center bg-white">
    <p class="text-center text-purple-950 text-6xl font-bold leading-10">
      Activities
    </p>
    <p
      class="text-center text-purple-800 text-3xl font-semibold leading-9 my-8"
    >
      Choose an activity and share with parents
    </p>
    <p
      class="text-center text-purple-950 text-opacity-60 text-xl font-medium leading-loose w-2/3 my-10"
    >
      Here at Tiflicare you can find many activities to keep kids engaged. See
      o"> Here at Tiflicare you can find many activities to keep kids engaged.
      See our list of various activity ,easily an activity ,tag students and
      update parents with one click.
    </p>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-2 flex-wrap w-4/5">
      <!-- Replace these image URLs with your actual image URLs -->
      <!-- <div v-for="image in images" :key="image" class="aspect-w-1 aspect-h-1">
      <img :src="image" alt="Image" class="object-cover w-full h-full" />
    </div> -->
      <ActivityIconFood :class="myclass" />
      <ActivityIconHealth :class="myclass" />
      <ActivityIconPhoto :class="myclass" />
      <ActivityIconVideo :class="myclass" />
      <ActivityIconIncident :class="myclass" />
      <ActivityIconNote :class="myclass" />
      <ActivityIconMed :class="myclass" />
      <ActivityIconObservation :class="myclass" />
      <ActivityIconMood :class="myclass" />
      <ActivityIconBottle :class="myclass" />
    </div>
  </div>
</template>

<script setup>
const myclass = "my-10 w-[130px] h-[130px]";
</script>

<style scoped>
@media screen and (min-width: 820px) and (height: 1180px) {
  .custom-style {
  }
}
</style>
