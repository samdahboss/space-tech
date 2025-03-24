const navToggle = document.querySelector(".mobile-nav-toggle");
const main = document.getElementById('main')

const toggleNav = () => {
  const mobileNav = document.querySelector("#mobile-nav");
  mobileNav.classList.toggle("mobile-nav--hidden");
};

let navClosed = true;
const toggleNavToggleIcon = () => {
  navClosed
    ? (navToggle.style.background = `url("../assets/shared/icon-hamburger.svg")`)
    : (navToggle.style.background = `url("../assets/shared/icon-close.svg")`);

  navToggle.style.backgroundSize = "cover";
};
navToggle.addEventListener("click", () => {
  navClosed = !navClosed;
  toggleNavToggleIcon();
  toggleNav();
});

main.addEventListener("click", () => {
  if (!navClosed) {
    navClosed = !navClosed;
    toggleNavToggleIcon();
    toggleNav();
  }
});
