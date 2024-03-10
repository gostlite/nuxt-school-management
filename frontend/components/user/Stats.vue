<template>
  <div
    class="indicators justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
  >
    <!-- display card -->
    <div class="displaycard w-full p-2 md:p-4">
      <div class="card-upper">
        <ph-user-circle :size="36" weight="regular" fill="#004FFF" />
        <h2>{{ firstStat.name }}</h2>
      </div>
      <div class="card-lower">
        <h2>{{ firstStat.value }}</h2>
      </div>
    </div>
    <!-- display card -->
    <div class="displaycard w-full p-2 md:p-4">
      <div class="card-upper">
        <ph-book-open :size="36" weight="bold" fill="#A508A5" />
        <h2>{{ secondStat.name }}</h2>
      </div>
      <div class="card-lower2">
        <h2>{{ secondStat.value }}</h2>
      </div>
    </div>
    <!-- display card -->
    <div class="displaycard w-full p-2 md:p-4">
      <div class="card-upper">
        <ph-users :size="32" weight="regular" fill="#039800" />
        <h2>{{ thirdStat.name }}</h2>
      </div>
      <div class="card-lower3">
        <h2>{{ thirdStat.value }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhUserCircle, PhBookOpen, PhUsers } from "@phosphor-icons/vue";

const props = defineProps({
  firstStat: { name: String, value: Number },
  secondStat: { name: String, value: Number },
  thirdStat: { name: String, value: Number },
});
</script>

<style scoped>
.displaycard {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.19);
  padding: 10px;
  min-height: 80px;
  gap: 12px;
}
.card-upper {
  display: flex;
  align-items: center;
}
.card-upper h2 {
  color: #494949;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.card-lower h2 {
  color: #011b33;
  font-family: Sora;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 3px solid #004fff;
  max-width: fit-content;
}
.card-lower2 h2 {
  color: #011b33;
  font-family: Sora;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 3px solid #a508a5;
  max-width: fit-content;
}
.card-lower3 h2 {
  color: #011b33;
  font-family: Sora;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 3px solid #039800;
  max-width: fit-content;
}
</style>
