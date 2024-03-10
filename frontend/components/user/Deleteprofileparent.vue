<template>
  <div
    class="bg-[#4A4A4A66] w-screen left-0 flex items-center justify-center top-0 h-screen fixed"
  >
    <div
      class="bg-white flex flex-col gap-3 items-center justify-center rounded-md w-[90%] md:w-1/3 min-h-[200px]"
    >
      <p class="font-[sora] text-[22px] text-center font-[400]">
        Are you sure you want to delete record?
      </p>
      <div class="text-white flex gap-4 font-[600]">
        <button class="font-[sora] text-[20px] py-2 px-3 sm:px-9 bg-yellow-500">
          Yes
        </button>
        <button
          @click="hidemodal"
          class="font-[sora] text-[20px] py-2 px-3 sm:px-9 bg-red-500"
        >
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hidemodal: Function,
});

const deleteparentrecord = () => {};
</script>

<style scoped></style>
