<template>
  <div class="flex justify-end mr-5 pl-5 my-5 py-">
    <NuxtLink to="/activities">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="50"
        fill="currentColor"
        class="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </NuxtLink>
  </div>
  <slot />
</template>

<script setup>
function sayHello() {
  console.log("hello");
}
</script>

<style scoped></style>
