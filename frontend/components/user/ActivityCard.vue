<template>
  <div class="mx-5 px-5">
    
    <div class="flex flex-col items-center">
      <div class="bg-white rounded-md w-full  my-5">
        <!-- header -->
        <div class="flex items-center justify-between px-3 p-2">
          <div class="flex gap-2">
            <img
              class="rounded-full bg-cover bg-center border h-[40px] w-[40px] border-white shadow-md"
              src="/assets/img/pana.png"
              alt=""
            />
            <div class="flex flex-col justify-center">
              <h2 class="font-[sora]">Tiflicare</h2>
              <h3 class="font-[sora] text-[14px] font-[400]">6h</h3>
            </div>
          </div>
          <ph-dots-three-outline
            :size="20"
            weight="thin"
            class="cursor-pointer"
          />
        </div>
        <!-- content -->
        <p class="font-[poppins] p-2">
          {{ name }}
        </p>
        <p class="font-[poppins] p-2">
          {{ post }}
        </p>
        <div class="my-3">
          <nuxt-img
            :src="getImages(image)"
            alt=""
            class="w-full h-[300px] md:h-[400px]"
          />
        </div>
        <!-- footer -->
        <div>
          <div class="flex items-center gap-2 p-3 border-b border-[#e8e8e8]">
            <div
              class="bg-blue-500 h-[25px] w-[25px] rounded-full text-white flex items-center justify-center"
            >
              <ph-thumbs-up :size="20" weight="fill" />
            </div>
            <p>{{activity.likes.length || 0 }}</p>
            <div
              class="bg-blue-500 h-[25px] w-[25px] ml-4 rounded-full text-white flex items-center justify-center"
            >
              <ph-chat-circle :size="20" weight="fill" />
            </div>
            <p>{{activity.comments?.length}}</p>
          </div>
          <Notify :notification="notification" />
          <!-- action like -->
          <div class="p-3">
            <div class="flex gap-4 items-center">
              <div class="flex gap-1 items-center" @click="likeActivity">
                <ph-thumbs-up :size="20" :weight="existingLikeIndex ?'thin':'fill'" class="cursor-pointer" />
                <!-- <UserMoods /> -->
                <p>Like</p>

                <!-- ACTIVITY LIKES -->
              </div>

              <div class="flex gap-1 items-center ">
                <ph-chat-circle
                  @click="openComment"
                  :size="20"
                  weight="thin"
                  class="cursor-pointer"
                />
                <p @click="openComment" >Comment</p>
                <div
                  v-if="isComment"
                  class="flex gap-2 md:flex-row flex-col ml-10"
                >
                  <!-- <UserMoods :moodEvent="parent" /> -->
                  <input
                    type="text"
                    placeholder="write a comment"
                    v-model="comment"
                    class="text-left pl-5 rounded-[32px] h-[41px] md:w-[281px] w-50 border border-purple-500 fill-white"
                  />
                  <ph-paper-plane-right
                    @click="postComment"
                    :size="30"
                    weight="thin"
                    class="cursor-pointer my-auto"
                    style="fill: purple"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {DateTime} from 'luxon'
import {
  PhDotsThreeOutline,
  PhThumbsUp,
  PhChatCircle,
  PhSignpost,
  PhPaperPlaneRight
} from "@phosphor-icons/vue";
let activity_id = getCurrentInstance().vnode.key
const isComment = ref(false);
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const { getActivities } = useSchoolStore();
const comment = ref("");
const notification = ref({});
const props = defineProps({
  post: String,
  name: String,
  image: String,
  activity: Object,
});
const default_img =
  "https://media.istockphoto.com/id/1413666082/photo/kindergarten-portrait.jpg?s=612x612&w=0&k=20&c=EUyxrOaQSe7NUK0hVTXdAqceo7TXQRiHaWFg4k_cnLA=";
// open the comment box
const openComment = () => {
  isComment.value = !isComment.value;
};

// // let existingLikeIndex = ref(props.activity.likes.findIndex(like => like.user_id === user.value.id)> -1)
let existingLikeIndex = ref(props.activity?.likes?.some(like => like.user_id === user.value.id) || false)
watch(()=>props.activity, (old, newValue) => {
  existingLikeIndex = newValue?.likes.some(like => like.user_id === user.value.id) || false
  //  = (isPresent > -1)
});
const likeActivity = async () => {
  let { data: { likes: presentLikes } } = await supabase
    .from('activities')
    .select('likes')
    .eq('activity_id', activity_id)
    .single() || { likes: [] };

  let formattedLike = {
    user_id: user.value.id,
    date_time: DateTime.now().toISO(),
  };

  // Check if user has already liked
  let localLikeIndex = props.activity.likes.findIndex(like => like.user_id === user.value.id);

  // If user has liked, remove it from the list
  if (localLikeIndex > -1) {
    presentLikes.splice(localLikeIndex, 1);
  } else {
    // If user hasn't liked, add it to the list
    presentLikes.push(formattedLike);
  }

  const { data: newLikes, error } = await supabase
    .from("activities")
    .update({ likes: presentLikes })
    .eq('activity_id', activity_id) 
    .select("likes").single();

  if (newLikes) {
    getActivities();
    // likes = newLikes.likes;
  }

  // Handle potential error
  if (error) {
    console.error("Error updating likes:", error);
  }
}

const postComment = async () => {
  if (!comment.value) {
    checker(notification, 2000, "Write a comment first");
    return;
  }
  let user = useSupabaseUser()
  let {data:{comments:presentComments}} = await supabase.from('activities').select('comments').eq('activity_id', activity_id).single()
  let formattedComment = {
    comment: comment.value,
    user_id: user.value.id,
    date_time: DateTime.now().toISO(),
  };

  const { data, error } = await supabase
    .from("activities")
    .update({
      comments:  [...presentComments,formattedComment]
    })
    .eq('activity_id', activity_id) 
    .select();
  if (error) {
    console.error(error);
  }
  console.log(data);
};
const getImages = (url) => {
  if (!url) {
    return default_img;
  }
  console.log(typeof url);
  console.log(url);
  if (typeof url === "string") {
    const { data: image_url } = supabase.storage
      .from("activities")
      .getPublicUrl(`${url}`);
    return image_url.publicUrl;
  } else {
    return default_img;
  }
};
// coming back
// const Mood = useMoods;
// const parent = (target) => {
//   Mood(target);
//   console.log("mood clicked", target);
// };
</script>

<style></style>
