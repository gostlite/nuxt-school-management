<template>
  <div class="w-full md:ml-10">
    <div class="flex flex-col relative">
      <div class="flex flex-wrap gap-2 mt-10 mb-5 mx-auto">
        <Notify :notification="notification" />
        <div>my image</div>
        <input
          id="individualpost"
          v-model="activityText"
          type="text"
          class="text-left pl-5 rounded-[32px] h-[41px] md:w-[281px] w-50 border border-purple-500 fill-white"
          placeholder="Write something here"
        />
        <div>
          <button
            @click="post"
            class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full md:text-base text-sm"
          >
            Post activity
          </button>
        </div>
      </div>
      <div class="flex gap-2 md:flex-row flex-col mx-auto">
        <!-- <UserMoods :moodEvent="moodEvent" /> -->
        <!-- <div id="activitymood" class="flex">
          <MoodsAngry @handleMood="parent" />
          <MoodsSad @handleMood="parent" />
          <MoodsSmile @handleMood="parent" />
          <MoodsLove @handleMood="parent" />
        </div> -->
        <div>
          <button
            @click="toggleUpload"
            class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
          >
            upload an image/video
          </button>
        </div>
      </div>
    </div>
    <div v-if="showUpload" class="w-2/4 relative">
      <ActivitiesActivityUploads />
    </div>
    <!-- <UserActivityCard /> -->
  </div>
</template>

<script setup>
const activityText = ref("");
const notification = ref({});
const mood_text = ref("");
const Mood = useMoods;
const { getActivities} = useSchoolStore();
const moodEvent = (target) => {
  Mood(target);
  console.log("mood clicked", target);
  mood_text.value = target;
};

const supabase = useSupabaseClient();

//post function
const post = async () => {
  if (!(activityText.value || mood_text.value)) {
    checker(notification, 3000, "Write a post");
    return;
  }
  console.log(activityText?.value);
  console.log(mood_text.value);
  const { data, error } = await supabase
    .from("activities")
    .insert([
      {
        name: mood_text?.value,
        post: activityText?.value,
      },
    ])
    .select();
  if (error) {
    console.error(error);
    return;
  }
  successinfo(notification, 2000, "Successfully posted an activity");
  getActivities();

  // reset all values

  mood_text.value = "";
  activityText.value = "";
  document.getElementById("individualpost").value = "";
};

const showUpload = ref(false); // show the upload activity

const toggleUpload = () => {
  showUpload.value = !showUpload.value;
};

const { props } = defineProps({
  activity: {},
});
</script>

<style scoped></style>
