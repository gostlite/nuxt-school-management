<template>
  <details class="dropdown md:mr-2 w-full">
    <summary
      class="flex justify-between bg-[#EAE7E7] shadow-lg p-1 mr-2 my-2 md:mx-2 w-1/2 md:w-full"
    >
      <p class="text-sm md:text-base text-[#411265] event_option">
        {{ showEndTime ? selectedDate : "End Date" }}
      </p>
      <div class="flex items-center ml-4">
        <!-- Calendar icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-calendar2-minus-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM6 10a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
          />
          <!-- SVG path -->
        </svg>
        <!-- Arrow icon -->
      </div>
    </summary>
    <div
      class="px-4 shadow menu dropdown-content z-[1] bg-[#A9F8D6] w-[300px] ml-5"
    >
      <!-- <v-date-picker v-model="selectedDate" mode="single"></v-date-picker> -->
      <!-- <v-date-picker /> -->

      <DatePicker
        v-model.string="selectedDate"
        @click="showDate"
        :masks="masks"
        mode="datetime"
      />
    </div>
  </details>
</template>

<script setup>
import { ref } from "vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { DateTime } from "luxon";

const selectedDate = ref(DateTime.local().toISODate());
const showEndTime = ref(false);
const masks = ref({
  modelValue: "YYYY-MM-DD",
});

const showDate = () => {
  console.log(selectedDate.value); // to get the value, use selectedDate.value
  showEndTime.value = true;
};
// The watch function can be used or just using the ref
watch(selectedDate, (newDate) => {
  console.log("Selected Date Changed:", newDate); // new date can also be used to get the updated value
});
</script>

<style scoped></style>
