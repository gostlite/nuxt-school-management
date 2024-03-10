<template>
  <div class="min-h-screen" :data-theme="baseStore.theme">
    <HomeNav @showit="openSideBar" />
    <SideBar :is-Open="isOpen" />
    <!-- <Navbar /> -->
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(true);
let baseStore = useBaseStore();
import SideBar from "../components/SideBar.vue"; // Import the SideBar component

const openSideBar = () => {
  isOpen.value = true;
  console.log(isOpen.value);
};
</script>
