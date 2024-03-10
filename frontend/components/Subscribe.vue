<!-- SUBSCRIBE INPUT FORM -->
<template>
  <Notify :notification="notification" class="grid" />
  <p class="mt-10 text-3xl md:text-6xl text-center w-3/5 py-7 header">
    Our insights and resources straight to your inbox
  </p>
  <div class="flex justify-center items-center w-full mb-11">
    <div class="w-full md:w-1/2 flex items-center bg-white custom-border">
      <input
        v-model="subscriber"
        id="subscriber"
        required
        type="email"
        class="w-full pl-3 py-2 rounded-l outline-0 text-[#14032075]"
        placeholder="Enter email address"
      />
      <button
        @click="get_subscriber"
        class="bg-[#411265] text-white border border-[#411265] py-2 px-4 custom-border my-1 mx-1"
      >
        Subscribe
      </button>
    </div>
  </div>
</template>

<script setup>
// declare the notification and subscriber data
let subscriber = ref("");
let notification = ref("");

const notify = (notification, message, type) => {
  notification.value = { show: true, message: message, type: type };
  setTimeout(() => {
    notification.value = { show: false, message: "", type: "" };
  }, 4000);
};
const get_subscriber = () => {
  // if the input field doesnt have @  and . return
  if (!subscriber.value.includes("@") && !subscriber.value.includes(".")) {
    notify(notification, "Please check if @ and . are included ", "info");
  } else {
    notify(notification, "Your email address has been sent", "success");
    document.getElementById("subscriber").value = "";
    subscriber.value = "";
  }
};
</script>

<style scoped>
.header {
  font-family: Lato;
  font-weight: 700;
  /* line-height: 64px; */
  letter-spacing: 0em;
  color: #411265;
}
.custom-border {
  border-radius: 5px;
}
</style>
