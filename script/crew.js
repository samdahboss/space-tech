const crewImage = document.querySelector(".crew-image");
const crewSubtitle = document.querySelector(".crew-subtitle")
const crewTitle = document.querySelector(".crew-main-title");
const crewDescription = document.querySelector(
  ".crew-description"
);
const crewButtons = document.querySelectorAll(
  ".crew-nav-link"
);

// Fetch data from JSON file
async function fetchData() {
  const data = await fetch("../data.json")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
}

// Set data to the crew page
let crewData = [];
const setData = async () => {
  const data = await fetchData();
  crewData = data.crew;
};
setData();

// Set data to the current crew page specific information
let currentCrewInfo = {};
setTimeout(() => {
  for (let i = 0; i < crewButtons.length; i++) {
    if (crewButtons[i].classList.contains("active")) {
      currentCrewInfo = crewData[i];
      updateCrew(currentCrewInfo);
    }
  }
}, 1000);

//update the page to reflect the current crew
const updateCrew = (crew) => {
  crewImage.src = crew.images["png"];
  crewTitle.textContent = crew.name;
  crewSubtitle.textContent= crew.role;
  crewDescription.textContent = crew.bio;
};

// Event listener for crew buttons
crewButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    crewButtons.forEach((button) => {
      button.classList.remove("active");
    });

    button.classList.add("active");
    currentCrewInfo = crewData[index];
    updateCrew(currentCrewInfo);
  });
});
