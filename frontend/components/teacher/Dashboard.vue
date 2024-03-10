<template>
  <div class="w-full">
    <h1
      class="font-[700] text-center text-success text-[23px] my-6 hidden md:flex"
    >
      <!-- Schooling -->
      {{ schoolname }} Teacher
    </h1>
    <div class="flex items-center md:items-start justify-center">
      <div class="flex mt-[0px] flex-col gap-[10px]">
        <!-- menu -->

        <nuxt-link to="/teacher">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
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
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher/myschool',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
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
        <nuxt-link to="/teacher/messaging">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher/messaging',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-chat-text
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/teacher/messaging' ? '#fff' : '#808080',
              }"
            />
            <h2>Messaging</h2>
          </div>
        </nuxt-link>

        <nuxt-link to="/teacher/eventcalendar">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher/eventcalendar',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-users
              :size="20"
              weight="thin"
              :style="{
                fill:
                  currentPath === '/teacher/eventcalendar' ? '#fff' : '#808080',
              }"
            />
            <h2>Event Calendar</h2>
          </div>
        </nuxt-link>

        <nuxt-link to="/teacher/activity">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher/activity',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
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

        <nuxt-link to="/teacher/attendance">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher/attendance',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <PhCalendarCheck
              :size="20"
              weight="thin"
              :style="{
                fill:
                  currentPath === '/teacher/attendance' ? '#fff' : '#808080',
              }"
            />
            <h2>Attendance</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/teacher/leaderboard">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher/leaderboard',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-crown
              :size="20"
              weight="thin"
              :style="{
                fill:
                  currentPath === '/teacher/leaderboard' ? '#fff' : '#808080',
              }"
            />
            <h2>Leaderboard</h2>
          </div>
        </nuxt-link>

        <nuxt-link to="/teacher/parent">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher/parent',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <PhCalendarCheck
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/teacher/parent' ? '#fff' : '#808080',
              }"
            />
            <h2>Parent</h2>
          </div>
        </nuxt-link>

        <!-- menu -->
        <nuxt-link to="/teacher/settings">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/teacher/settings',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-gear
              :size="20"
              weight="regular"
              :style="{
                fill: currentPath === '/teacher/settings' ? '#fff' : '#808080',
              }"
            />
            <h2>Settings</h2>
          </div>
        </nuxt-link>
        <div
          @click.prevent="logout"
          class="flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse cursor-pointer"
        >
          <ph-sign-out
            :size="20"
            weight="regular"
            :style="{
              fill: currentPath === '/parent/settings' ? '#fff' : '#808080',
            }"
          />
          <h2>Logout</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhSquaresFour,
  PhGraduationCap,
  PhCalendarCheck,
  PhGear,
  PhChatText,
  PhChalkboardSimple,
  PhUsers,
  PhCrown,
  PhSignOut,
} from "@phosphor-icons/vue";
const school_client = useSchoolStore();
const logout = await school_client.logOut;

const schoolname = await school_client.getSchoolName();

const currentPath = computed(() => useRoute().path);

watch(currentPath, () => {
  console.log({ path: currentPath.value });
});
</script>

<style>
.collapse h2 {
  display: none;
}
@media screen and (min-width: 768px) {
  .collapse h2 {
    display: flex;
  }
}
</style>
