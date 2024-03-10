<template>
  <Notify :notification="notification" class="grid" />
  <div class="flex flex-col items-center bg-white">
    <div class="container my-4 w-1/2 flex flex-col">
      <p
        class="my-4 font-bold flex-1 text-left text-[#411265] text-2xl md:text-6xl feedback-header"
      >
        Tiflicare Feedback!
      </p>
      <p
        class="flex-1 text-left text-[#631D98] mb-5 pb-5 text-1xl md:text-3xl feedback-content"
      >
        Feel free to share your feedback with us
      </p>
      <div class="flex gap-4 shadow-md p-2 justify-center">
        <!-- <div class="rounded-full bg-[#f56565] p-2"> -->
        <MoodsSmile
          :myWidth="svgwidth"
          :myHeight="svgwidth"
          @handleMood="changeColor"
        />
        <MoodsSad
          :myWidth="svgwidth"
          :myHeight="svgwidth"
          @handleMood="changeColor"
        />
        <MoodsLove
          :myWidth="svgwidth"
          :myHeight="svgwidth"
          @handleMood="changeColor"
        />
        <MoodsAngry
          :myWidth="svgwidth"
          :myHeight="svgwidth"
          @handleMood="changeColor"
        />

        <!-- second svg -->
      </div>
    </div>

    <div class="container my-4 w-1/2">
      <form @submit.prevent="handleSubmit">
        <p
          class="text-lg font-bold my-3 py-2 text-[#41126599] text-xl md:text-2xl textarea-label"
        >
          Tell us about your experience
        </p>
        <textarea
          v-model="feedback_data"
          name="myTextArea"
          id="myTextArea"
          rows="15"
          cols=""
          class="rounded-md border border-[#b8bfbf] p-2 w-full no-resize"
        ></textarea>
        <button class="btn btn-[#310d4d] btn-outline my-3">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
// import "daisyui/dist/full.css";
definePageMeta({ layout: "form-cancel" });
export default {
  data() {
    return {
      selected_mood: "",
      feedback_data: "",
      svgwidth: 150,
      notification: {
        show: false,
        message: "",
        type: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.notification =
        this.feedback_data.length >= 4
          ? { show: true, message: "Thanks for the feedback", type: "success" }
          : {
              show: true,
              message: "Please let your word be more than 5 letters",
              type: "info",
            };
      //  A timer to reset to defalt

      setTimeout(() => {
        this.notification = { show: false, message: "", type: "" };
      }, 4000);
    },
    // change the color of the mood icons when clicked
    changeColor(target) {
      const mood = useMoods;
      this.selected_mood = mood(target);
      console.log(this.selected_mood);
    },
  },
};
</script>

<style scoped>
.feedback-header {
  font-family: Syne;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
}
.textarea-label {
  font-family: Syne;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
}

.feedback-content {
  font-family: Syne;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: 0em;
}
</style>
