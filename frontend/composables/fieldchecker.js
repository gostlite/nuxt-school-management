export const checker = (notification, sec, message) => {
  notification.value = { show: true, message: message, type: "error" };
  resetNotify(notification, sec);
  return;
};
