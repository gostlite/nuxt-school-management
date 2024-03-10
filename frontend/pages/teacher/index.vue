<template>
  <!-- <UserDocumentUpload /> -->

  <div class="mx-10 mt-5 flex flex-col md:flex-row gap-6">
    <div class="flex flex-col w-full">
      <UserStats
        :firstStat="stats.firststat"
        :secondStat="stats.secondstat"
        :thirdStat="stats.thirdstat"
      />
      <!-- table -->
      <div class="w-full">
        <AdminLogActivity />
      </div>
    </div>
    <div class="md:w-11/12 justify-end items-end md:m-auto">
      <!-- <div class="courses mb-10">
        <h1>Your Courses</h1>
        <div
          v-for="index in 4"
          :key="index"
          class="flex items-end justify-end gap-3 flex-row"
        >
          <div class="icon-card">
            <ph-book-open :size="28" weight="regular" fill="#fff" />
          </div>
          <div class="course-title">
            <h2>Project Management</h2>
            <h3>Head of Dept</h3>
          </div>
          <div class="time">6month</div>
        </div>
      </div> -->
      <UserNotificationtab />
      <!-- premium -->
      <DatePicker
        class="bg-green-500"
        v-model.string="selectedDate"
        @click="showDate"
        :masks="masks"
        mode="datetime"
      />
    </div>
  </div>
</template>

<script setup>
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { DateTime } from "luxon";
import { PhUserCircle, PhBookOpen, PhUsers } from "@phosphor-icons/vue";

const selectedDate = ref(DateTime.local().toISODate());
const showEndTime = ref(false);
const masks = ref({
  modelValue: "YYYY-MM-DD",
});
definePageMeta({
  layout: "teacher",
});

const stats = {
  firststat: { name: "Current Courses", value: 23 },
  secondstat: { name: "Current Student", value: 30 },
  thirdstat: { name: "Current classes", value: 45 },
};
</script>

<style lang="scss" scoped></style>
