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

// Creating and appending user area
const grid = document.querySelector("#grid");
const userName = document.createElement("h3");
const userImage = document.createElement("img");
const reportName = document.createElement("div");
userName.textContent = user.name;
userImage.src = user.image;

const gridUser = document.querySelector("#grid-user");
reportName.append("Report for", userName);
gridUser.append(userImage, reportName);

// Creating and appending activities
const createActivities = activities.map((e) => {
  const gridElementBack = document.createElement("div");
  const gridElement = document.createElement("div");
  const title = document.createElement("h4");
  const ellipsis = document.createElement("img");
  const currentHrs = document.createElement("h2");
  const previousHrs = document.createElement("p");
  const allHrs = document.createElement("div");

  allHrs.classList.add("hours");
  gridElement.classList.add("grid-element");
  gridElementBack.id = `${e.title.replace(" ", "-").toLowerCase()}`;
  gridElementBack.classList.add("grid-element-back");
  gridElementBack.style.backgroundImage = `url(images/icon-${e.title
    .replace(" ", "-")
    .toLowerCase()}.svg)`;
  title.textContent = e.title;
  ellipsis.src = "./images/icon-ellipsis.svg";

  grid.append(gridElementBack);
  gridElementBack.append(gridElement);
  gridElement.append(title, allHrs);
  allHrs.append(currentHrs, previousHrs);
  title.append(ellipsis);

  return e.daily.current;
});

const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

// Gridupdate function to fill grid elements with values based on chosen time intervals
const gridUpdate = (timeSpan) => {
  activities.map((e) => {
    const currentHrs = document.querySelector(
      `#${e.title.replace(" ", "-").toLowerCase()} .grid-element h2`
    );
    const previousHrs = document.querySelector(
      `#${e.title.replace(" ", "-").toLowerCase()} .grid-element p`
    );
    daily.style.color = "";
    weekly.style.color = "";
    monthly.style.color = "";
    if (timeSpan === "daily") {
      currentHrs.textContent = `${e.daily.current}hrs`;
      previousHrs.textContent = `Yesterday - ${e.daily.current}hrs`;
      daily.style.color = "white";
    } else if (timeSpan === "weekly") {
      currentHrs.textContent = `${e.weekly.current}hrs`;
      previousHrs.textContent = `Last Week - ${e.weekly.current}hrs`;
      weekly.style.color = "white";
    } else if (timeSpan === "monthly") {
      currentHrs.textContent = `${e.monthly.current}hrs`;
      previousHrs.textContent = `Last month - ${e.monthly.current}hrs`;
      monthly.style.color = "white";
    }
    return e.title;
  });
};

// Run gridUpdate("daily") to fill grid elements with values
gridUpdate("daily");

// Run gridupdate function based on which time interval is clicked
daily.onclick = () => {
  gridUpdate("daily");
};
weekly.onclick = () => {
  gridUpdate("weekly");
};
monthly.onclick = () => {
  gridUpdate("monthly");
};
