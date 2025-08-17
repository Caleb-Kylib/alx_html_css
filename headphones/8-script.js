// Select elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Animate hamburger into X
  hamburger.classList.toggle("active");
});
