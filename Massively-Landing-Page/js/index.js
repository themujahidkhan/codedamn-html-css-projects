const displayDate = document.querySelector(".displayDate");

const dateFormat = {
  month: "long",
  day: "numeric",
  year: "numeric",
};
const now = new Date().toLocaleDateString("en-Us", dateFormat);
