<template>
  <div>
    <div class="flex flex-col items-center">
      <!-- feed -->
      <div
        v-for="index in 3"
        :key="index"
        class="bg-white rounded-md w-full sm:w-[400px] md:w-[500px] my-5"
      >
        <!-- header -->
        <div class="flex items-center justify-between px-3 p-2">
          <div class="flex gap-2">
            <img
              class="rounded-full bg-cover bg-center border h-[40px] w-[40px] border-white shadow-md"
              src="/assets/img/pana.png"
              alt=""
            />
            <div class="flex flex-col justify-center">
              <h2 class="font-[sora]">Tiflicare</h2>
              <h3 class="font-[sora] text-[14px] font-[400]">6h</h3>
            </div>
          </div>
          <ph-dots-three-outline
            :size="20"
            weight="thin"
            class="cursor-pointer"
          />
        </div>
        <!-- content -->
        <p class="font-[poppins] p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
          iste? Provident eaque quis et iste enim ipsum sed quidem sit?
        </p>
        <div class="my-3">
          <img
            src="/assets/johnawo_cute_gitl_with_a_smile_at_front_desk_of_upscale_office._35a1917b-d5d5-4aa9-873e-8d7025e75764.png"
            alt=""
            class="w-full h-[300px] md:h-[400px]"
          />
        </div>
        <!-- footer -->
        <div>
          <div class="flex items-center gap-2 p-3 border-b border-[#e8e8e8]">
            <div
              class="bg-blue-500 h-[25px] w-[25px] rounded-full text-white flex items-center justify-center"
            >
              <ph-thumbs-up :size="20" weight="fill" />
            </div>
            <p>100</p>
          </div>
          <!-- action like -->
          <div class="p-3">
            <div class="flex gap-4 items-center">
              <div class="flex gap-1 items-center">
                <ph-thumbs-up :size="20" weight="thin" class="cursor-pointer" />
                <p>Like</p>
              </div>
              <div class="flex gap-1 items-center">
                <ph-chat-circle
                  :size="20"
                  weight="thin"
                  class="cursor-pointer"
                />
                <p>Comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let images = ref['/assets/img/pana.png','/assets/johnawo_cute_gitl_with_a_smile_at_front_desk_of_upscale_office._35a1917b-d5d5-4aa9-873e-8d7025e75764.png','/assets/img/pana.png']
import {
  PhDotsThreeOutline,
  PhThumbsUp,
  PhChatCircle,
} from "@phosphor-icons/vue";
definePageMeta({
  layout: "activities-show",
});
</script>

<style></style>
