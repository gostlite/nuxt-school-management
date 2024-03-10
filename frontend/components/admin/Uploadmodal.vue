<template>
  <div
    class="modalcon w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-50"
  >
    <div class="h-auto w-[60%] p-[40px] rounded-[20px] bg-white">
      <div class="flex">
        <div class="uploadheader flex-1">Upload File</div>
        <div @click="closeModal" class="cursor-pointer">
          <PhX :size="32" weight="thin" />
        </div>
      </div>
      <div class="w-full">
        <form class="w-full">
          <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-[8px]">
              <label class="text-[#0f0f0f] font-[Sora] text-[14px] font-[500]"
                >Student Name</label
              >
              <input
                placeholder="Student Name"
                class="w-full text-[#999] bg-[#EDEDED] px-[15px] py-[10px] rounded-[8px] font-[Sora] text-[13px] font-[400]"
              />
            </div>
            <div class="flex flex-col gap-[8px]">
              <label class="text-[#0f0f0f] font-[Sora] text-[14px] font-[500]"
                >Document Name</label
              >
              <input
                placeholder="Document Name"
                class="w-full text-[#999] bg-[#EDEDED] px-[15px] py-[10px] rounded-[8px] font-[Sora] text-[13px] font-[400]"
              />
            </div>

            <div
              class="bg-[#8baef124] h-[200px] border-dashed border-[1.5px] border-[#5E94FF] rounded-[8px]"
              @dragover.prevent
              @dragenter.prevent
              @dragleave.prevent
              @drop="handleFileDrop"
            >
              <div
                class="h-full w-full flex flex-col justify-center gap-[18px]"
              >
                <ph-upload-simple
                  :size="39"
                  weight="bold"
                  fill="#6A9CFF"
                  class="mx-auto"
                />
                <div class="drag flex flex-col items-center">
                  <p class="text-[#1F1F1F] font-[600]">
                    Drag and Drop files here
                  </p>
                  <p class="text-[#1F1F1F] font-[600]">or</p>
                  <p class="text-[#6A9CFF] font-[600]">Browse</p>
                </div>
              </div>
            </div>
            <span>Maximum upload file limit: 5mb</span>
            <button class="mybtn bg-success py-[12px]">Upload</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { PhX, PhUploadSimple } from "@phosphor-icons/vue";

const props = defineProps({
  closeModal: Function,
});

const closeModalProp = () => {
  props.closeModal();
};
</script>

<style scoped>
.modalcon {
  background: rgba(74, 74, 74, 0.4);
}
.uploadheader {
  color: #001121;
  font-family: Sora;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}
.drag {
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
}
.mybtn {
  color: #fff;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
