<template>
  <div
    class="container h-auto mb-5 pb-10 min-w-[300px] overflow-y-auto overflow-hidden"
  >
    <!-- header -->
    <div class="flex pl-[24px] justify-between py-[19px]">
      <p class="font-[sora] text-[#0F0F0F] text-[14px] font-[600]">
        Notifications
      </p>
      <ph-x :size="20" weight="thin" />
    </div>
    <!-- message component -->
    <div class="flex justify-evenly">
      <ph-chat :size="32" weight="fill" class="text-success" />
      <div class="flex flex-col gap-1">
        <p class="text-[12px] text-[#263238] font-[sora]">
          Youve been added to class 2023
        </p>
        <p class="text-[10px] text-[#4D4D4D] font-[sora]">5:00PM - 10/4/2023</p>
      </div>
      <div class="w-[8px] h-[8px] rounded-full bg-green-500"></div>
    </div>
  </div>
</template>

<script setup>
import { PhX, PhChat } from "@phosphor-icons/vue";
</script>

<style scoped>
.container {
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.12);
}
</style>
