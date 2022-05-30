const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

// Intersection Observer
const sectionOne = document.querySelector(".section1");
const sections = document.querySelectorAll("section");

const options = {
  root: null,
  threshhold: 0.25,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("inverse");
    observer.unobserve(entry.target);
  });
}, options);

observer.observe(home);
observer.observe(about);
observer.observe(videos);

// mobile

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
