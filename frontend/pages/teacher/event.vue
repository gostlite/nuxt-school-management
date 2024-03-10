<!-- CALENDAR PAGE -->
<template>
  <div>
    <!-- <AdminNavbar /> -->

    <Calendar />
    <hr />
    <div
      v-for="(item, index) in currentPageData"
      :key="index"
      class="grid grid-cols-4 gap-4 w-4/5 mx-auto mb-10"
    >
      <!-- Your grid items here -->
      <!-- <div class="col-span-1 bg-gray-200 p-4 w-3/5">2023-08-01</div> -->
      <div class="text-purple-950 text-4xl font-medium leading-9">
        Sat,<br />june<br />10
      </div>
      <div class="col-span-2 bg-gray-200 p-4">
        <div class="flex flex-col gap-8">
          <div>
            <p>Hello</p>
            <p>Hello world</p>
          </div>
          <div class="flex gap-4 flex-wrap">
            <button
              class="h-10 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              Long texting made easy
            </button>
            <button
              class="h-8 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              click me
            </button>
            <button
              class="h-8 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              click me
            </button>
            <button
              class="h-8 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              click me
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-1 bg-gray-200 p-4">image {{ item }}</div>
    </div>

    <!-- number of page selection -->
    <div class="flex md:ml-[150px] ml-10">
      <p
        class="text-purple-950 text-opacity-60 text-base font-medium leading-7"
      >
        Show
        <span class="mx-2">
          <select v-model="itemsPerPage" class="bg-green-500">
            <option>6</option>
            <option>10</option>
            <option>20</option>
          </select>
        </span>
        <span
          class="text-purple-950 text-opacity-60 text-base font-medium leading-7"
          >result per page</span
        >
      </p>
    </div>

    <!-- Pagination buttons using Daisy UI -->
    <div class="flex justify-center mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="btn btn-primary"
      >
        Prev
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="btn btn-primary mx-10"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "teacher" });

import { ref, computed, watchEffect } from "vue";

const data = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 24, 34, 55, 67, 77, 33, 56, 78,
]);
const itemsPerPage = ref(6);
const currentPage = ref(1);

// Compute the total number of pages
const totalPages = computed(() =>
  Math.ceil(data.value.length / itemsPerPage.value)
);

// Compute the data for the current page
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return data.value.slice(start, end);
});

// Function to navigate to the previous page
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Function to navigate to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Update currentPageData whenever itemsPerPage changes
watchEffect(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  currentPageData.value = data.value.slice(start, end);
});
</script>

<style scoped>
/* @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  
  /* Optionally, you can import the default Daisy UI styles */
/* @import 'daisyui'; */

/* Your custom styles here */
</style>
