// changes the notification props to default
export const resetNotify = (notification, time) => {
  setTimeout(() => {
    notification.value = { show: false, message: "", type: "" };
  }, time);
};
