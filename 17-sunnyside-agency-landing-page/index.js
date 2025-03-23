const nadvar = document.querySelector("nav");
const menuButton = document.getElementById("menu__button");
const closeMenu = document.querySelector(".btn__close");
const openMenu = document.querySelector(".btn__open");

menuButton.addEventListener("click", () => {
  if (nadvar.classList.contains("open")) {
    nadvar.classList.remove("open");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  } else {
    nadvar.classList.add("open");
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
});
