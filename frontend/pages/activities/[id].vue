<template>
  <div class="flex items-center justify-center h-screen">
    <ActivityDescription :activity="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "back-to-activities",
});
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const { data: product } = await useFetch(uri, { key: id });
</script>

<style scoped></style>
