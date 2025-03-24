const navToggle = document.querySelector(".mobile-nav-toggle");
const main = document.getElementById("main");
const body = document.body;
const mobileNav = document.querySelector("#mobile-nav");

const toggleNav = () => {
  mobileNav.classList.toggle("mobile-nav--hidden");

  //Prevent Scrolling while mobile nav is open
  if (navClosed) {
    body.style.overflow = "";
  } else {
    body.style.overflowY = "hidden";
  }
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
