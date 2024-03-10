<template>
  <div class="p-[20px]">
    <div class="flex gap-2 items-center">
      <ph-book-open size="20" weight="regular" fill="black" />
      <h1 class="text-[20px] font-[500]">Learning</h1>
    </div>
    <div class="flex gap-3 font-[400] text-[16px] mt-5">
      <div class="flex gap-1 items-center">
        <ph-notebook :size="20" weight="thin" />
        <p>Subject</p>
      </div>
      <div class="flex gap-1 items-center">
        <ph-exam :size="20" weight="regular" fill="black" />
        <p>Exam</p>
      </div>
      <div class="flex gap-1 items-center">
        <ph-books :size="20" weight="regular" fill="black" />
        <p>Library</p>
      </div>
    </div>
    <div class="bg-white p-5 mt-6">
      <h1 class="font-[roboto] font-[500] mb-4">All Subjects</h1>
      <div>
        <form class="">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="inputbox">
              <label>Subject Name</label>
              <input placeholder="Enter Firstname" />
            </div>
            <div class="inputbox">
              <label>Subject Type</label>
              <select>
                <option>Please select</option>
                <option default="">English</option>
                <option default="">Mathematics</option>
                <option default="">Economics</option>
              </select>
            </div>
            <div class="inputbox">
              <label>Class</label>
              <select>
                <option>Please select</option>
                <option default="">Daycare</option>
                <option default="">Nursery</option>
              </select>
            </div>
            <div class="inputbox">
              <label>Select Code</label>
              <select>
                <option>Please select</option>
                <option default="">001</option>
                <option default="">112</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row gap-3 text-white mt-4">
            <button class="bg-success px-5 py-2 rounded-md max-w-[150px]">
              Save
            </button>
            <button class="bg-warning px-5 py-2 rounded-md max-w-[150px]">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});
import { PhBookOpen, PhNotebook, PhExam, PhBooks } from "@phosphor-icons/vue";
</script>

<style>
* {
  font-family: roboto;
}
</style>
