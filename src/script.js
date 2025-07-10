document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
