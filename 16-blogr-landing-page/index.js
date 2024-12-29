const menuButton = document.getElementById("menu__button");
const navbar = document.getElementById("nav");
const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".open");
const openlist = document.getElementById("list-show");
const list = document.querySelectorAll("ul__list");
const toggleArrow = document.getElementById("arrow");

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

const toggleDropdown = function () {
  list.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

openlist.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});
