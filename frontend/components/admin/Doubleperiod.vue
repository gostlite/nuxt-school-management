<template>
  <div
    :class="[
      `h-[340px] w-[200px] min-w-[80px] border-t-[3px] ${bordercolor} p-[20px] box ${background}`,
    ]"
  >
    <p class="lecture">{{ lecture }}</p>
    <p class="timerange">{{ timerange }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  background: String,
  bordercolor: String,
  lecture: String,
  timerange: String,
});
</script>

<style scoped>
.box {
  border-radius: 4px;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.timerange {
  color: #808080;
  font-family: Sora;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.lecture {
  color: #263238;
  font-family: Sora;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
