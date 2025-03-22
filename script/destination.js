const destinationImage = document.querySelector(".destination-image");
const destinationTitle = document.querySelector(".destination-main-title");
const destinationDescription = document.querySelector(
  ".destination-description"
);
const destinationButtons = document.querySelectorAll(
  "#destination-nav .nav-link"
);
const destinationButtonAnchorTags = document.querySelectorAll(
  "#destination-nav .nav-link a"
);
const statsDetails = document.querySelectorAll(".stats-details");

// Fetch data from JSON file
async function fetchData() {
  const data = await fetch("./data.json")
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
}

// Set data to the destination page
let destinationData = [];
const setData = async () => {
  const data = await fetchData();
  destinationData = data.destinations;
};
setData();

// Set data to the current destination page specific information
let currentDestinationInfo = {};
setTimeout(() => {
  for (let i = 0; i < destinationButtonAnchorTags.length; i++) {
    if (destinationButtons[i].classList.contains("active")) {
      currentDestinationInfo = destinationData[i];
      updateDestination(currentDestinationInfo);
    }
  }
}, 1000);

//update the page to reflect the current destination
const updateDestination = (destination) => {
  destinationImage.src = destination.images["png"];
  destinationTitle.textContent = destination.name;
  destinationDescription.textContent = destination.description;
  statsDetails[0].textContent = destination.distance;
  statsDetails[1].textContent = destination.travel;
};

// Event listener for destination buttons
destinationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    destinationButtons.forEach((button) => {
      button.classList.remove("active");
    });

    button.classList.add("active");
    currentDestinationInfo = destinationData[index];
    updateDestination(currentDestinationInfo);
  });
});
