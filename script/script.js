const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
const closeIcon = document.querySelector(".close-icon");
const body = document.querySelector(".body");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  menuIcon.classList.add("menu-hide");
  closeIcon.classList.add("close-icon--show");
  body.classList.toggle("body-no-scroll");
});

closeIcon.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  menuIcon.classList.remove("menu-hide");
  closeIcon.classList.remove("close-icon--show");
  body.classList.remove("body-no-scroll");
});
