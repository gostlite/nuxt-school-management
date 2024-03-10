<template>
  <div id="activitymood" class="flex">
    <MoodsAngry @handleMood="moodEvent" />
    <MoodsSad @handleMood="moodEvent" />
    <MoodsSmile @handleMood="moodEvent" />
    <MoodsLove @handleMood="moodEvent" />
  </div>
</template>

<script setup>
const props = defineProps({
  moodEvent: Function,
});

onMounted(() => {
  const children = document.getElementById("activitymood").children;
  for (const child of children) {
    document
      .getElementById(child.classList[0])
      .classList.remove("md:w-40", "md:h-40");
    // console.log(document.getElementById(child.classList[0]));
  }
});
//
</script>

<style lang="scss" scoped></style>
