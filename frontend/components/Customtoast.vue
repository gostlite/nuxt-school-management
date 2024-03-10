<template>
  <div class="top-0 absolute left-0 w-screen py-3 flex justify-center z-[999]">
    <div class="w-[300px] h-[80px] shadow-xl rounded-md flex flex-col bg-white">
      <div class="flex items-center justify-center flex-1 gap-3">
        <ph-seal-check
          :size="32"
          weight="thin"
          :class="{
            'text-[yellow]': toastdetails.status === 'warning',
            'text-[red]': toastdetails.status === 'error',
            'text-[green]': toastdetails.status === 'success',
          }"
        />
        <p class="text-gray-500 font-[500] text-[18px]">
          {{ toastdetails.message }}
        </p>
      </div>
      <div
        :class="{
          'bg-[yellow]': toastdetails.status === 'warning',
          'bg-[red]': toastdetails.status === 'error',
          'bg-[green]': toastdetails.status === 'success',
        }"
        class="infinite-width-animation w-0 h-[3px] mt-auto"
        @animationend="hideToast"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhSealCheck } from "@phosphor-icons/vue";

const mytoast = useToast();

const props = defineProps({
  toastdetails: Object,
});

const hideToast = () => {
  mytoast.toggletoast();
};
</script>

<style scoped>
@keyframes expandWidth {
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

.infinite-width-animation {
  animation: expandWidth 5s;
  width: 0%;
}
</style>
