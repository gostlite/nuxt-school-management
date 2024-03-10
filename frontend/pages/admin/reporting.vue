<template>
  <div class="p-[20px]">
    <div class="flex gap-2 items-center">
      <PhChartBar :size="20" weight="regular" fill="black" />
      <h1 class="text-[20px] font-[500] font-[Roboto]">Reporting</h1>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
import { PhChartBar } from "@phosphor-icons/vue";
</script>
