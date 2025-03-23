const technologyImage = document.querySelector(".technology-image");
const technologyTitle = document.querySelector(".technology-main-title");
const technologyDescription = document.querySelector(".technology-description");
const technologyButtons = document.querySelectorAll(
  "#technology-nav .nav-link"
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

// Set data to the technology page
let technologyData = [];
const setData = async () => {
  const data = await fetchData();
  technologyData = data.technology;
};
setData();

// Set data to the current technology page specific information
let currentTechnologyInfo = {};
setTimeout(() => {
  for (let i = 0; i < technologyButtons.length; i++) {
    if (technologyButtons[i].classList.contains("active")) {
      currentTechnologyInfo = technologyData[i];
      updateTechnology(currentTechnologyInfo);
    }
  }
}, 1000);

//update the page to reflect the current technology
const updateTechnology = (technology) => {
  technologyImage.style.backgroundImage = `url(${technology.images["portrait"]})`;
  technologyTitle.textContent = technology.name;
  technologyDescription.textContent = technology.description;
};

// Event listener for technology buttons
technologyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    technologyButtons.forEach((button) => {
      button.classList.remove("active");
    });

    button.classList.add("active");
    currentTechnologyInfo = technologyData[index];
    updateTechnology(currentTechnologyInfo);
  });
});
