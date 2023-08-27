// * Nav icon*

const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelectorAll(".nav__link");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon-active");
  document.body.classList.toggle("no-scroll");
};
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    if (nav.classList.contains("nav--mobile")) {
      nav.classList.remove("nav--mobile");
      menuIcon.classList.remove("menu-icon-active");
      document.body.classList.remove("no-scroll");
    }
  });
});
