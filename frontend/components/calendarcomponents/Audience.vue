<template>
  <details class="dropdown md:mr-2 w-full">
    <!-- <summary class="m-1 btn"> -->
    <summary
      class="flex justify-between bg-[#EAE7E7] shadow-lg p-1 mr-2 my-2 md:mx-2 w-1/2 md:w-full"
    >
      <p class="text-sm md:text-base text-[#411265] event_option">Audience</p>
      <div class="flex items-center ml-4">
        <!-- Arrow icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
          />
        </svg>
      </div>
    </summary>
    <!-- </summary> -->
    <ul
      class="px-4 shadow menu dropdown-content z-[1] bg-[#A9F8D6] w-[300px] ml-5"
    >
      <CheckOption @modelValue="handleCheck" option="After Hours" />
      <CheckOption @modelValue="handleCheck" option="Talks" />
      <CheckOption @modelValue="handleCheck" option="Fun for Kids" />
      <CheckOption @modelValue="handleCheck" option="Festivals" />
      <CheckOption @modelValue="handleCheck" option="Guided Tours" />
      <CheckOption @modelValue="handleCheck" option="Films" />
      <CheckOption @modelValue="handleCheck" option="Performances" />
      <CheckOption @modelValue="handleCheck" option="Workshops" />

      <!-- Add more checkboxes and labels as needed -->
    </ul>
  </details>
</template>

<script setup>
import { ref } from "vue";
const Options = ref([]);
const handleCheck = (check) => {
  // destructure the emmited value from the checkoption component
  const [div, value] = [...check];
  // removing from the array
  if (Options.value.includes(div.toLowerCase()) && !value) {
    Options.value = Options.value.filter((item) => item !== div.toLowerCase());
  }
  // adding to the array
  if (!Options.value.includes(div.toLowerCase()) && value) {
    Options.value.push(value.toLowerCase());
  }
};
</script>

<style lang="scss" scoped></style>
