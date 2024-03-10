<template>
  <details class="dropdown md:mr-2 w-full">
    <summary
      class="flex justify-between bg-[#EAE7E7] shadow-lg p-1 mr-2 my-2 md:mx-2 w-1/2 md:w-full"
    >
      <p class="text-sm md:text-base text-[#411265] event_option">
        {{ selectedDate }}
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
          <!-- SVG path -->
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM6 10a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
          />
        </svg>
        <!-- Arrow icon -->
      </div>

      <!-- <div v-if="showTimePicker" class="time-picker">
      <input
        type="time"
        v-model="selectedTime"
        @blur="closeTimePicker"
        @change="closeTimePicker"
      />
    </div> -->
    </summary>
    <div
      class="px-4 shadow menu dropdown-content z-[1] bg-[#A9F8D6] w-[300px] ml-5"
    >
      <DatePicker
        v-model.string="selectedDate"
        @click="showSelectedDate"
        mode="dateTime"
        :masks="masks"
      />
      <!-- <input
        v-model="selectedDate"
        type="date"
        class="border border-gray-300 rounded p-2"
      /> -->
    </div>
  </details>
</template>

<script setup>
import { ref } from "vue";
import { DateTime } from "luxon";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";

const selectedDate = ref(DateTime.local().toISODate());
const showSelectedDate = () => {
  console.log(selectedDate.value);
};
const masks = ref({
  modelValue: "YYYY-MM-DD",
});
</script>

<style scoped>
.time-picker {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100px; /* Adjust the width as needed */
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px;
}
</style>
