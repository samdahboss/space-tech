const navToggle = document.querySelector(".mobile-nav-toggle");

const toggleNav = () => {
  const mobileNav = document.querySelector("#mobile-nav");
  mobileNav.classList.toggle("mobile-nav--hidden");
};

navToggle.addEventListener("click", () => {
  toggleNav();
});
