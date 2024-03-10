<template>
  <div class="pt-5">
    <div class="flex items-center justify-between">
      <h1 class="title">Calendar</h1>
      <div class="flex items-center gap-2">
        <PhCaretLeft :size="23" weight="regular" />
        <PhCalendarBlank :size="23" weight="fill" />
        <p class="date">September 10-17</p>
        <PhCaretRight :size="23" weight="regular" />
      </div>
    </div>

    <!-- time table -->
    <div class="flex mt-6 max-w-full overflow-hidden overflow-x-scroll">
      <div class="flex flex-col">
        <h1 class="day">Time</h1>
        <div
          class="border-r mt-2 flex flex-col gap-[40px] border-[#C5C5C5] pr-4"
        >
          <div class="timesection">
            <h2 class="time">8:00am</h2>
          </div>
          <div class="timesection">
            <h2 class="time">10:00am</h2>
          </div>
          <div class="timesection">
            <h2 class="time">12:00pm</h2>
          </div>
        </div>
      </div>
      <!-- lectures -->
      <div class="flex-[3] flex gap-[35px] pl-6">
        <!-- monday -->
        <div>
          <h1 class="day">Monday</h1>
          <div class="flex flex-col gap-[40px] mt-4">
            <AdminSingleperiod
              background="bg-[#ffdfef]"
              bordercolor="border-[#e40473]"
              lecture="Mathematics"
              timerange="8:00am - 12:00pm"
            />
            <AdminSingleperiod
              background="bg-[#ffdfef]"
              bordercolor="border-[#e40473]"
              lecture="Mathematics"
              timerange="8:00am - 12:00pm"
            />
          </div>
        </div>
        <!-- tuesday -->
        <div>
          <h1 class="day">Tuesday</h1>
          <div class="flex flex-col gap-[40px] mt-4">
            <AdminDoubleperiod
              background="bg-[#E6EEFF]"
              bordercolor="border-[#749FFF]"
              lecture="Physics"
              timerange="8:00am - 12:00pm"
            />
            <AdminSingleperiod
              background="bg-[#ffdfef]"
              bordercolor="border-[#e40473]"
              lecture="Mathematics"
              timerange="8:00am - 12:00pm"
            />
          </div>
        </div>
        <!-- wednesday -->
        <div>
          <h1 class="day">Wednesday</h1>
          <div class="flex flex-col gap-[40px] mt-4">
            <AdminDoubleperiod
              background="bg-[#E6EEFF]"
              bordercolor="border-[#749FFF]"
              lecture="Physics"
              timerange="8:00am - 12:00pm"
            />
            <AdminSingleperiod
              background="bg-[#ffdfef]"
              bordercolor="border-[#e40473]"
              lecture="Mathematics"
              timerange="8:00am - 12:00pm"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhCaretLeft,
  PhCaretRight,
  PhCalendarBlank,
} from "@phosphor-icons/vue";
</script>

<style scoped>
.container {
  background: #fff;
  margin-top: 20px;
  min-height: 500px;
  overflow-x: auto;
}
.title {
  color: #001121;
  font-family: Sora;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.timesection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 150px;
}
.time {
  color: #4d4d4d;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.day {
  color: #4d4d4d;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.date {
  color: #4d4d4d;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

@media screen and (max-width: 500px) {
  .container {
    max-width: 350px;
  }
}
@media screen and (max-width: 400px) {
  .container {
    max-width: 250px;
  }
}
</style>
