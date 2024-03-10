<template>
  <div class="w-full">
    <h1
      class="font-[700] text-center text-success text-[23px] my-6 hidden md:flex"
    >
      <!-- Schooling -->
      {{ schoolname }} Parent
    </h1>
    <NuxtImg
      class="md:w-24 md:h-24 w-12 h-12 mt-12 rounded-full mx-auto"
      :src="dp"
    />
    <div
      class="text-zinc-700 text-base font-normal font-['Sora'] text-center mt-10 mb-20"
    >
      <p>{{ parent_profile.first_name }}</p>
      <p>{{ parent_profile.last_name }}</p>
    </div>

    <div class="flex items-center md:items-start justify-center">
      <div class="flex mt-[0px] flex-col gap-[10px]">
        <!-- menu -->

        <nuxt-link to="/parent">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/parent',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-squares-four
              :size="20"
              weight="thin"
              :style="{ fill: currentPath === '/parent' ? '#fff' : '#808080' }"
            />
            <h2>Dashboard</h2>
          </div>
        </nuxt-link>
        <!-- menu -->
        <nuxt-link to="parent/messaging">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/parent/messaging',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-chat
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/parent/messaging' ? '#fff' : '#808080',
              }"
            />
            <h2>Messages</h2>
          </div>
        </nuxt-link>
        <!-- menu -->

        <!-- menu -->

        <nuxt-link to="/parent/eventcalendar">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/parent/eventcalendar',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-users
              :size="20"
              weight="thin"
              :style="{
                fill:
                  currentPath === '/parent/eventcalendar' ? '#fff' : '#808080',
              }"
            />
            <h2>Event Calendar</h2>
          </div>
        </nuxt-link>

        <nuxt-link to="/parent/activity">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/parent/activity',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-chalkboard-simple
              :size="20"
              weight="thin"
              :style="{
                fill: currentPath === '/parent/activity' ? '#fff' : '#808080',
              }"
            />
            <h2>Activity</h2>
          </div>
        </nuxt-link>

        <nuxt-link to="/parent/leaderboard">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/parent/leaderboard',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-crown
              :size="20"
              weight="thin"
              :style="{
                fill:
                  currentPath === '/parent/leaderboard' ? '#fff' : '#808080',
              }"
            />
            <h2>Leaderboard</h2>
          </div>
        </nuxt-link>

        <!-- menu -->
        <nuxt-link to="/parent/settings">
          <div
            :class="{
              'bg-success text-white border border-white shadow-lg':
                currentPath === '/parent/settings',
              'flex flex-row items-center gap-1 rounded-[24px] p-[10px] collapse': true,
            }"
          >
            <ph-gear
              :size="20"
              weight="regular"
              :style="{
                fill: currentPath === '/parent/settings' ? '#fff' : '#808080',
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
const supabase = useSupabaseClient();
const user = useSupabaseUser();
import {
  PhSquaresFour,
  PhGraduationCap,
  PhCalendarCheck,
  PhGear,
  PhChalkboardSimple,
  PhUsers,
  PhCrown,
  PhSignOut,
  PhChat,
} from "@phosphor-icons/vue";
const school_client = useSchoolStore();
const schoolname = await school_client.getSchoolName();

const currentPath = computed(() => useRoute().path);

watch(currentPath, () => {
  console.log({ path: currentPath.value });
});

const logout = school_client.logOut;
// navigateTo("/");
const { data: profile, error } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user.value.id);

const parent_profile = profile[0];
const {
  data: { publicUrl: dp },
} = supabase.storage.from("avatars").getPublicUrl(parent_profile.avatar_url);
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
