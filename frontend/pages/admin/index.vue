<template>
  <div class="p-[16px]">
    <h1 class="font-[700] text-[22px] text-[#001121] font-[sora]">Dashboard</h1>
    <!-- body -->
    <div
      class="flex flex-1 lg:flex-row flex-col pt-8 justify-between gap-[28px]"
    >
      <!-- left -->
      <div class="flex flex-col">
        <!-- chart demo -->
        <!-- <Bar :data="data" /> -->
        <school-stats />

        <!-- table -->
        <div class="w-full">
          <AdminLogActivity />
        </div>
      </div>
      <!-- right -->
      <div>
        <div class="courses">
          <h1>Your Courses</h1>
          <!-- items -->
          <div
            v-for="index in 4"
            :key="index"
            class="flex items-center justify-center gap-3 flex-row"
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
        </div>
        <!-- premium -->
        <div class="premiumcon relative">
          <div class="premtext absolute top-[20%] left-5">
            <h1>Go Premium</h1>
            <h2>Explore 500+ courses with lifetime membership</h2>
            <button class="prembtn">Get Access</button>
          </div>
          <img
            src="/assets/img/pana.png"
            alt=""
            class="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// using the watch effect as an extra layer to redirect users to appropriate page
redirectUser(1); // custom function to redirect user
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
// } from "chart.js";
// import { Bar } from "vue-chartjs";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
import { ref } from "vue";

const data = ref({
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12] }],
});

const options = ref({
  responsive: true,
});

import { PhUserCircle, PhBookOpen, PhUsers } from "@phosphor-icons/vue";
definePageMeta({
  layout: "admin",
  // Other metadata properties here
});
</script>

<style>
.courses {
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  background: #fff;
  padding: 20px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.19);
}
.courses h1 {
  color: #011b33;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 21px;
}
.course-title h2 {
  color: #494949;
  font-family: Sora;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.course-title h3 {
  color: #7b7b7b;
  font-family: Sora;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.icon-card {
  min-height: 41px;
  min-width: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #a508a5;
  margin-right: 11px;
}
time {
  color: #494949;
  font-family: Sora;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.premiumcon {
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  background: rgba(255, 100, 177, 0.84);
  /* width: 367px; */
  height: 298px;
  flex-shrink: 0;
  margin-top: 30px;
}
.premtext h1 {
  color: #001121;
  font-family: Sora;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.premtext h2 {
  color: #424242;
  font-family: Sora;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.premtext {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.prembtn {
  border-radius: 35px;
  background: #e40473;
  color: #fff;
  font-family: Sora;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 115px;
  height: 36px;
  flex-shrink: 0;
}
@media screen and (min-width: 1300px) {
  .indicators {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>

<!-- script lang="ts" setup>
  import { PhMagnifyingGlass, PhBell } from "@phosphor-icons/vue";
  </script> -->
