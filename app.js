const activities = [
  {
    title: "Work",
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
  {
    title: "Play",
    daily: { current: 1, previous: 2 },
    weekly: { current: 10, previous: 8 },
    monthly: { current: 23, previous: 29 },
  },
  {
    title: "Study",
    daily: { current: 0, previous: 1 },
    weekly: { current: 4, previous: 7 },
    monthly: { current: 13, previous: 19 },
  },
  {
    title: "Exercise",
    daily: { current: 1, previous: 1 },
    weekly: { current: 4, previous: 5 },
    monthly: { current: 11, previous: 18 },
  },
  {
    title: "Social",
    daily: { current: 1, previous: 3 },
    weekly: { current: 5, previous: 10 },
    monthly: { current: 21, previous: 23 },
  },
  {
    title: "Self Care",
    daily: { current: 0, previous: 1 },
    weekly: { current: 2, previous: 2 },
    monthly: { current: 7, previous: 11 },
  },
];

const user = {
  name: "Jeremy Robson",
  image: "./images/image-jeremy.png",
};

const grid = document.querySelector("#grid");
const userName = document.createElement("h3");
const userImage = document.createElement("img");
userName.textContent = user.name;
userImage.id = "user-image";
userImage.src = user.image;

console.log(activities[5].title);
console.log(`${activities[5].weekly.current}hrs`);
console.log(`Last week - ${activities[5].weekly.previous}hrs`);

// Creating and appending user info area
// const gridUserBack = document.createElement("div");
const gridUser = document.querySelector("#grid-user");
// gridUserBack.id = "grid-user-back";
// gridUser.id = "grid-user";

gridUser.append(userImage, "Report for", userName);
// gridUserBack.append(gridUser);
// grid.append(gridUserBack);

// Creating and appending activities
const dailyExtract = activities.map((e) => {
  const gridElementBack = document.createElement("div");
  const gridElement = document.createElement("div");
  const title = document.createElement("h4");
  const ellipsis = document.createElement("img");
  const currentHrs = document.createElement("h2");
  const previousHrs = document.createElement("p");

  gridElement.classList.add("grid-element");
  gridElementBack.id = `${e.title.replace(" ", "-").toLowerCase()}`;
  gridElementBack.classList.add("grid-element-back");
  gridElementBack.style.backgroundImage = `url(images/icon-${e.title
    .replace(" ", "-")
    .toLowerCase()}.svg)`;
  title.textContent = e.title;
  ellipsis.src = "./images/icon-ellipsis.svg";
  currentHrs.textContent = `${e.daily.current}hrs`;
  previousHrs.textContent = `Yesterday - ${e.daily.previous}hrs`;

  grid.append(gridElementBack);
  gridElementBack.append(gridElement);
  gridElement.append(title, currentHrs, previousHrs);
  title.append(ellipsis);

  return e.daily;
});
console.log(dailyExtract);
console.log(dailyExtract[0]);
console.log(dailyExtract[0].current);
