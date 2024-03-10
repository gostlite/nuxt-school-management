<template>
  <div class="h-full w-full font-[roboto]">
    <div class="flex items-center justify-center py-3">
      <h1 class="font-[700] text-success text-[23px] hidden md:flex">
        <!-- Schooling -->
        {{ schoolname }}
      </h1>
    </div>
    <div class="flex pl-3 w-full h-full">
      <div class="flex mt-[20px] flex-col gap-[10px]">
        <!-- menu -->
        <nuxt-link to="/admin">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-squares-four
              :size="20"
              weight="thin"
              :style="{ fill: currentPath === '/admin' ? '#fff' : '#808080' }"
            />
            <h2>Dashboard</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <div
          :class="{
            'bg-success text-white border border-white shadow-lg':
              currentPath === '/admin/myschool' ||
              currentPath === '/admin/schoolactivities',
            'flex flex-row items-center gap-1 rounded-[24px] min-h-[40px] p-[10px] collapse ': true,
          }"
        >
          <nuxt-link to="/admin/myschool">
            <div class="flex gap-1">
              <ph-graduation-cap
                :size="20"
                weight="thin"
                :style="{
                  fill:
                    currentPath === '/admin/myschool' ||
                    currentPath === '/admin/schoolactivities'
                      ? '#fff'
                      : '#808080',
                }"
              />
              <h2 class="whitespace-nowrap">My School</h2>
            </div>
          </nuxt-link>
          <div class="pl-3" @click="toggleDropdown">
            <ph-caret-down :size="20" v-show="!showDropdown" class="" />
            <ph-caret-up :size="20" v-show="showDropdown" class="" />
          </div>
        </div>
        <!-- school activities -->
        <nuxt-link to="/admin/schoolactivities">
          <div
            class="dropdown-content mb-3"
            v-show="showDropdown || currentPath === '/admin/schoolactivities'"
          >
            <ul class="list-disc flex justify-end">
              <li class="font-[sora] text-[12px] text-success">
                School Activities
              </li>
            </ul>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/messaging">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/messaging',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-chat-text
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/messaging' ? '#fff' : '#808080',
              }"
            />
            <h2>Messaging</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/admissions">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/admissions',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-file-text
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/admissions' ? '#fff' : '#808080',
              }"
            />
            <h2>Admissions</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/pricing">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/pricing',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-wallet
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/pricing' ? '#fff' : '#808080',
              }"
            />
            <h2>Billing</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/learning">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/learning',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-book-open
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/learning' ? '#fff' : '#808080',
              }"
            />
            <h2>Learning</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/parent">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/parent',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-user
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/parent' ? '#fff' : '#808080',
              }"
            />
            <h2>Parent</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/document">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/document',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-note-pencil
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/document' ? '#fff' : '#808080',
              }"
            />
            <h2>Document</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/reporting">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/reporting',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <ph-chart-bar
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/reporting' ? '#fff' : '#808080',
              }"
            />
            <h2>Reporting</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/events">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/events',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse ': true,
            }"
          >
            <PhCalendar
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/events' ? '#fff' : '#808080',
              }"
            />
            <h2>Events</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/admin/register">
          <div
            :class="{
              'bg-success text-white': currentPath === '/admin/register',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse md:fullview': true,
            }"
          >
            <ph-users
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/register' ? '#fff' : '#808080',
              }"
            />
            <h2>Add Admin</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/admin/addclass">
          <div
            :class="{
              'bg-success text-white': currentPath === '/admin/addclass',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse md:fullview': true,
            }"
          >
            <ph-chalkboard-simple
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/addclass' ? '#fff' : '#808080',
              }"
            />
            <h2>Add Class</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="/admin/settings">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/admin/settings',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-gear
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/admin/settings' ? '#fff' : '#808080',
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
  PhUser,
  PhCalendar,
  PhCaretDown,
  PhCaretUp,
  PhSignOut,
} from "@phosphor-icons/vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const route = useRoute();
const school_client = useSchoolStore();
const schoolname = ref("");
const logout = school_client.logOut;
const currentPath = computed(() => route.path);

(async () => {
  schoolname.value = await school_client.getSchoolName();
})();
</script>

<style>
.active {
  background: "#A508A5";
}
.collapse h2 {
  display: flex;
}
/* Initially, hide the dropdown content */
.dropdown-content {
  max-height: 0;
  transition: max-height 0.3s ease;
  background-color: red;
}

/* Show the dropdown content when 'showDropdown' is true */
.show-dropdown .dropdown-content {
  max-height: 200px; /* Adjust to your desired height */
  background-color: red;
}
@media screen and (max-width: 768px) {
  .collapse h2 {
    display: none;
  }
}
</style>
