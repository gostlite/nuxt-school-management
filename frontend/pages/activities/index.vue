<!-- ACTIVITY PAGE -->
<template>
  <div class="text-center py-[70px]">
    <p
      class="text-purple-800 text-3xl font-semibold leading-9 w-3/4 md:w-1/2 mx-auto"
    >
      Explore the nutritional aspect of learning with our daily food updates.
    </p>
  </div>

  <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 px-[50px] py-6">
    <!-- Replace these image URLs with your actual image URLs -->
    <div v-for="product in products" :key="product.id" class="card text-center">
      <NuxtLink :to="`/activities/${product.id}`">
        <ActivityCard :activity="product" />
      </NuxtLink>
    </div>

    <!-- add new file -->
    <NuxtLink to="activityform">
      <div class="aspect-w-1 aspect-h-1">
        <img
          src="/assets/activity-img/Frame_67blank.png"
          alt="Image 3"
          class="object-cover"
        />
      </div>
    </NuxtLink>

    <!-- Add more images as needed -->
  </div>
</template>

<script setup>
// WILL STill BE REFACTORED TO USE NUXT3 IMG BUT STILL EXPERIMENTAL FOR NOW

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
