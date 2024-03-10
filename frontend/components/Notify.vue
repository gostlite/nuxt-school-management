<template>
  <div v-show="notification.show">
  <div class="toasttoast toast-top toast-end">
    <div class="alert" :class="'alert-'+notification.type">
      <span>{{notification.message}}</span>
    </div>
  </div>
  </div>
</template>

<script>
// checks if there is notification and displays for 5 seconds
export default {
  name: 'Notify',
  props: {
    notification: {
      type: Object,
      default: () => ({
        show: false,
        message: '',
        type: '',
      }),
    },
  },
}

</script>