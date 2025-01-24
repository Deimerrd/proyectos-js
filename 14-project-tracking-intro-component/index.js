const menuButton = document.getElementById("menu__button");
const navbar = document.querySelector("nav");
const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".open");

menuButton.addEventListener("click", () => {
  if (navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  } else {
    navbar.classList.add("open");
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
});
