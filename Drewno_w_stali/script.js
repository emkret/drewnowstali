const hamburger = document.querySelector(" .hamburger");
const mobile_menu = document.querySelector(" ul");
const header = document.querySelector(".header.container");
const menu_item = document.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1000,
  delay: 300,
});

ScrollReveal().reveal(".section-title", {
  delay: 400,
  origin: "right",
});
ScrollReveal().reveal("p", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(" .col-left ,h2", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".service-item", {
  delay: 400,
  origin: "bottom",
  interval: 500,
});

ScrollReveal().reveal(".contact-item, .social-item", {
  delay: 400,
  origin: "bottom",
  interval: 200,
});
