<!-- ADDING THE PRICING COMPONENT -->
<template>
  <div
    class="card w-80 bg-white text-primary-content my-40 h-[500px] relative border border-gray"
  >
    <div
      class="card-body bg-white text-[#41126599] hover:bg-[#570A94] hover:text-white"
    >
      <h2 class="card-title text-xl font-medium leading-7 mb-5">
        {{ name }}
        <!-- Basic -->
      </h2>
      <div class="flex">
        <div class="text-5xl font-medium leading-7 mr-2">${{ price }}</div>
        <p class="text-sm font-medium leading-tight">
          Per user<br />Per {{ plan }}
        </p>
      </div>
      <div class="text-xl font-medium leading-7 my-8">FEATURES</div>

      <ul class="list-disc" v-for="feature in features" :key="feature">
        <li>{{ feature }}</li>
      </ul>
      <div class="card-actions justify-start">
        <button
          @click="$emit('payNow', price_id)"
          class="btn absolute bottom-5 bg-white text-purple-950 hover:bg-[#03E987] hover:text-white"
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  price: Number,
  features: Array,
  plan: String,
  price_id: String,
});
</script>

<style>
/* Add your custom styles here if needed */
</style>
