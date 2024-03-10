<template>
  <NuxtLink to="upload" @click="change">
    <svg viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="156" height="156" rx="24" fill="#560A96" />
      <g clip-path="url(#clip0_904_1757)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M38 78C38 67.3913 42.2143 57.2172 49.7157 49.7157C57.2172 42.2143 67.3913 38 78 38C88.6087 38 98.7828 42.2143 106.284 49.7157C113.786 57.2172 118 67.3913 118 78C118 88.6087 113.786 98.7828 106.284 106.284C98.7828 113.786 88.6087 118 78 118C67.3913 118 57.2172 113.786 49.7157 106.284C42.2143 98.7828 38 88.6087 38 78ZM59.3333 70H64.6667V64.6667H59.3333V70ZM91.3333 70H96.6667V64.6667H91.3333V70ZM64.1333 92.9333C65.7479 90.7806 67.8415 89.0333 70.2483 87.8299C72.6551 86.6265 75.3091 86 78 86C80.6909 86 83.3449 86.6265 85.7517 87.8299C88.1585 89.0333 90.2521 90.7806 91.8667 92.9333L96.1333 89.7333C87.0667 77.6427 68.9333 77.6427 59.8667 89.7333L64.1333 92.9333Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_904_1757">
          <rect
            width="80"
            height="80"
            fill="white"
            transform="translate(38 38)"
          />
        </clipPath>
      </defs>
    </svg>
    <p class="text-center text-purple-950 text-xl font-semibold leading-10">
      Mood
    </p>
  </NuxtLink>
</template>

<script setup>
const change =()=>{
  UploadHeader().Header = "MOOD FILE"
}
</script>

<style lang="scss" scoped></style>
