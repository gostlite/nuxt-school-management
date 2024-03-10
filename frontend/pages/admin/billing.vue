<template>
  <div class="p-[16px] md:p-[40px]">
    <div class="flex flex-col gap-[32px]">
      <div class="flex gap-2 items-center">
        <ph-wallet size="20" weight="regular" fill="black" />
        <h1 class="title">Billing</h1>
      </div>
      <div class="md:flex grid grid-cols-2 gap-7">
        <div
          class="flex gap-3 border-b-[3px] items-center border-success text-success option"
        >
          <ph-eye :size="27" weight="thin" />
          <h2>At a Glance</h2>
        </div>
        <div class="flex gap-3">
          <ph-user-circle :size="27" weight="thin" />
          <h2>Student</h2>
        </div>
        <div class="flex gap-3">
          <ph-chart-bar :size="27" weight="thin" />
          <h2>Reports</h2>
        </div>
        <div class="flex gap-3">
          <ph-gear :size="27" weight="thin" fill="black" />
          <h2>Settings</h2>
        </div>
      </div>
    </div>
    <!-- table -->
    <div class="w-full">
      <AdminBillingActivity />
    </div>
  </div>
</template>

<script setup>
import {
  PhEye,
  PhGear,
  PhUserCircle,
  PhChartBar,
  PhWallet,
} from "@phosphor-icons/vue";
definePageMeta({
  layout: "admin",
});
</script>

<script>
definePageMeta({
  layout: "admin",
});
</script>
<style>
.title {
  color: #001121;
  font-family: Sora;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.option h2 {
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.active {
  color: #494949;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
