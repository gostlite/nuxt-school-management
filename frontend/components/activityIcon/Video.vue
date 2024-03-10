<template>
  <NuxtLink to="upload" @click="change">
    <svg viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="156" height="156" rx="24" fill="#560A96" />
      <path
        d="M89.6667 63.4167C89.6667 60.654 88.5693 58.0045 86.6158 56.051C84.6623 54.0975 82.0128 53 79.2501 53H55.0834C52.3207 53 49.6712 54.0975 47.7177 56.051C45.7642 58.0045 44.6667 60.654 44.6667 63.4167V92.5833C44.6667 95.346 45.7642 97.9955 47.7177 99.949C49.6712 101.903 52.3207 103 55.0834 103H79.2501C82.0128 103 84.6623 101.903 86.6158 99.949C88.5693 97.9955 89.6667 95.346 89.6667 92.5833V63.4167ZM93.0001 87.22L104.602 96.28C107.338 98.4167 111.333 96.4667 111.333 92.9967V63.005C111.333 59.5333 107.338 57.585 104.602 59.7217L93.0001 68.78V87.22Z"
        fill="white"
      />
    </svg>
    <P class="text-center text-purple-950 text-xl font-semibold leading-10"
      >Video</P
    >
  </NuxtLink>
</template>

<script setup>
const change =()=>{
  UploadHeader().Header = "VIDEO FILE"
}
</script>

<style lang="scss" scoped></style>
