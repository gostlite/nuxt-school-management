<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <nuxt-img :src="activity.image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ activity.title }}</h2>
      <p>This product should be dynamic for each uploaded activity</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Do something</button>
        <div id="activityDescription" class="flex">
          <MoodsAngry @handleMood="parent" />
          <MoodsSad @handleMood="parent" />
          <MoodsSmile @handleMood="parent" />
          <MoodsLove @handleMood="parent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const Mood = useMoods;
const parent = (target) => {
  Mood(target);
  console.log("mood clicked", target);
};
const { props } = defineProps({
  activity: {},
});

onMounted(() => {
  const children = document.getElementById("activityDescription").children;
  for (const child of children) {
    document
      .getElementById(child.classList[0])
      .classList.remove("md:w-40", "md:h-40");
    console.log(document.getElementById(child.classList[0]));
  }
});
</script>

<style scoped></style>
