$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000, // transition speed in ms
    animateOut: "slideOutDown", // optional
    animateIn: "flipInX", // optional
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 2 },
    },
  });
});

const navbar = document.querySelector("#navBar");
const navLink = document.querySelectorAll(".nav-link");
let lastScroll = 50;

function handleNavbar() {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    navbar.style.top = "0";
    navbar.style.backgroundColor = "transparent";
    navbar.style.color = "white";
    return;
  }

  if (currentScroll > lastScroll && currentScroll < window.innerHeight) {
    navbar.style.top = "-125px";
  } else {
    navbar.style.top = "0";
    navbar.style.backgroundColor = "black";
  }

  lastScroll = currentScroll;
}

window.addEventListener("scroll", handleNavbar);
window.addEventListener("DOMContentLoaded", handleNavbar);
