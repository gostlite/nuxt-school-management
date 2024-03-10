<template>
  <div class="p-[16px] md:p-[40px]">
    <div class="flex flex-col gap-[32px]">
      <div class="flex gap-2 items-center">
        <PhCalendar :size="20" weight="regular" fill="black" />
        <h1 class="title">Events</h1>
      </div>
    </div>
    <AdminCalendar />
  </div>
</template>

<script setup>
import { PhCalendar } from "@phosphor-icons/vue";
definePageMeta({
  layout: "admin",
});
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
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
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
