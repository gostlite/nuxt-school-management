<template>
  <div class="h-full w-full">
    <h1 class="font-[700] text-[#c46ad4] text-[23px] my-6 hidden md:flex">
      <!-- Schooling -->
      {{ schoolname }} Teacher
    </h1>
    <div class="flex items-center md:items-start h-full justify-center">
      <div class="flex mt-[0px] flex-col gap-[10px]">
        <!-- menu -->

        <nuxt-link to="/teacher">
          <div
            class="flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse md:fullview text-center"
          >
            <ph-squares-four
              :size="20"
              weight="thin"
              :style="{ fill: currentPath === '/teacher' ? '#fff' : '#808080' }"
            />
            <h2>Dashboard</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link>
          <div
            class="flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse md:fullview"
          >
            <ph-graduation-cap
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/teacher/myschool' ? '#fff' : '#808080',
              }"
            />
            <h2>My School</h2>
          </div>
        </nuxt-link>
        <!-- menu -->

        <!-- menu -->

        <nuxt-link to="/teacher/event">
          <div
            class="flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse md:fullview"
          >
            <ph-users
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/teacher/event' ? '#fff' : '#808080',
              }"
            />
            <h2>Event</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/teacher/activity">
          <div
            class="flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse md:fullview"
          >
            <ph-chalkboard-simple
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/teacher/activity' ? '#fff' : '#808080',
              }"
            />
            <h2>Activity</h2>
          </div>
        </nuxt-link>
        <nuxt-link>
          <div
            class="flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse md:fullview"
          >
            <ph-crown
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/teacher/addclass' ? '#fff' : '#808080',
              }"
            />
            <h2>Leaderboard</h2>
          </div>
        </nuxt-link>

        <!-- menu -->
        <nuxt-link to="/teacher/settings">
          <div
            class="flex flex-row items-center gap-1 rounded-[24px] p-[13px] collapse md:fullview"
          >
            <ph-gear
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/teacher/settings' ? '#fff' : '#808080',
              }"
            />
            <h2>Settings</h2>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PhSquaresFour,
  PhGraduationCap,
  PhChatText,
  PhFileText,
  PhWallet,
  PhBookOpen,
  PhNotePencil,
  PhChartBar,
  PhGear,
  PhChalkboardSimple,
  PhUsers,
  PhCrown,
} from "@phosphor-icons/vue";

const school_client = useSchoolStore();
const schoolname = await school_client.getSchoolName();
console.log(schoolname);
</script>

<script lang="ts">
import { computed } from "vue";

export default {
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
};
</script>

<style>
.router-link-exact-active {
  background-color: #a508a5;
  color: white;
  border-radius: 40px;
  text-align: center;
}
.active {
  background: "#A508A5";
}
.collapse h2 {
  display: none;
}
@media screen and (min-width: 768px) {
  .collapse h2 {
    display: flex;
  }
}
</style>
