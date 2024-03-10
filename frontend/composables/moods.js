// Function to change the colors of the moods when clicked on
export const useMoods = (mood) => {
  const children = Array.from(
    document.querySelector(`.${mood}`).parentElement.children
  );
  console.log(children);
  let prev = "";
  children.forEach((element) => {
    let elem = element.querySelector(`#${element.classList[0]}`);
    if (!elem.classList.contains("dark-mood")) prev = elem;
  });

  let target = document.getElementById(mood);

  // condition to add darkmood to the previous clicked smiley and remove the class from the clicked smiley
  if (prev && target.id !== prev.id) {
    prev.classList.add("dark-mood");
    target.classList.remove("dark-mood");
    // toggle the class list if no previously selected smiley or the prev clicked is same with the presently clicked smiley
  } else target.classList.toggle("dark-mood");
  // console.log(prev);
  return target.id;
};
