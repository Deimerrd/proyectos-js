const menuButton = document.getElementById("menu__button");
const navbar = document.getElementById("nav");
const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".open");
const openlist = document.getElementById("list-show");
const list = document.querySelectorAll("ul__list");
const toggleArrow = document.getElementById("arrow");
let listelements = document.querySelectorAll(".list__show");

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

listelements.forEach((listelement) => {
  listelement.addEventListener("click", () => {
    listelement.classList.toggle("arrow");
    let height = 0;
    let menu = listelement.nextElementSibling;
    console.log(menu.scrollHeight);
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }
    menu.style.height = `${height}px`;
  });
});
