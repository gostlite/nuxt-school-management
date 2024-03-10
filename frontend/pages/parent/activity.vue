<template>
  <div class="grid md:grid-cols-3 gap-3">
    <UserActivityCard
      v-for="post in posts"
      :key="post['activity_id']"
      :post="post?.post"
      :name="post?.name"
      :image="post.media"
    />
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
definePageMeta({
  layout: "parent",
});
let { data: myposts, error } = await supabase
  .from("activities")
  .select("*")
  .order("created_at", { ascending: false });
// subscribe to all events
const posts = myposts ?? [];
</script>

<style lang="scss" scoped></style>
