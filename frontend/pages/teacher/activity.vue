<template>
  <div>
  <ActivitiesActivityText />
  <!-- <UserListactivity /> -->
  <div class="grid md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
    <UserActivityCard
      v-for="post in posts"
      :key="post['activity_id']"
      :post="post?.post"
      :name="post?.name"
      :image="post.media"
      :activity="post"
    />
  </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const default_img =
  "https://media.istockphoto.com/id/1413666082/photo/kindergarten-portrait.jpg?s=612x612&w=0&k=20&c=EUyxrOaQSe7NUK0hVTXdAqceo7TXQRiHaWFg4k_cnLA=";

const supabase = useSupabaseClient();
const  schoolStore = useSchoolStore();
const { getActivities } = schoolStore;
const { activities } = storeToRefs(schoolStore);
onMounted(() => {
  getActivities();
});

// let { data: myposts, error } = await supabase
//   .from("activities")
//   .select("*")
//   .order("created_at", { ascending: false });
// subscribe to all events
const posts = activities;

// adding supbase subscribe
await supabase
  .channel("custom-all-channel")
  .on(
    "postgres_changes",
    { event: "INSERT", schema: "public", table: "activities" },
    (payload) => {
      console.log("Change received!", payload);
      posts.push(payload.new);
    }
  )
  .subscribe();

definePageMeta({
  layout: "teacher",
});
</script>

<style lang="scss" scoped></style>
