// Hero slide Owl carousal start

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
// Hero slide Owl carousal end

// Navbar hide on scroll
const navbar = document.querySelector("#navBar");
const navLink = document.querySelectorAll(".nav-link2");
const main = document.querySelector("#main");
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

// ============ WhatsApp Api ================
function redirectToWhatsApp(phoneNumber, message) {
  // Remove any non-digit characters from phone number
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;

  // Redirect to WhatsApp
  window.open(whatsappUrl, "_blank");
}

// Example usage:
let whatsapp = document.querySelectorAll(".whatsAppLogo");
whatsapp.forEach((e) => {
  console.log(e);

  e.addEventListener("click", function () {
    const phoneNumber = "917002525098"; // Replace with your variable
    const message = "Hello, this is a test message"; // Replace with your variable
    redirectToWhatsApp(phoneNumber, message);
  });
});

// Vehicle WhatsApp Api
function redirectToWhatsApp(phoneNumber, message) {
  // Remove any non-digit characters from phone number
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;

  // Redirect to WhatsApp
  window.open(whatsappUrl, "_blank");
}

// Example usage:
let whatsappVehicle = document.querySelectorAll(".whatsappLink");
whatsappVehicle.forEach((e) => {
  console.log(e);

  e.addEventListener("click", function () {
    const phoneNumber = "917002525098"; // Replace with your variable
    const message = "Hello, this is a test message"; // Replace with your variable
    redirectToWhatsApp(phoneNumber, message);
  });
});

var swiper = new Swiper(".testimonialSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
