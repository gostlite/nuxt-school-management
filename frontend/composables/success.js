export const successinfo = (notification, sec, message) => {
  notification.value = { show: true, message: message, type: "info" };
  resetNotify(notification, sec);
};
