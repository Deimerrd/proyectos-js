const menuButton = document.getElementById("menu__button");
const navbar = document.getElementById("nav");
const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".open");
const toggleArrow = document.getElementById("arrow");
let listelements = document.querySelectorAll(".list__show");
const menu__uno = document.getElementById(menu1);
const menu__dos = document.getElementById(menu2);
const menu__tres = document.getElementById(menu3);

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

    /* if ($("#menu1").css("display") == "block") {
      $("#menu2").css("display") == "none";
      $("#menu3").css("display") == "none";
    }

    if ($("#menu2").css("display") == "block") {
      $("#menu1").css("display") == "none";
      $("#menu3").css("display") == "none";
    }
    if ($("#menu3").css("display") == "block") {
      $("#menu1").css("display") == "none";
      $("#menu2").css("display") == "none";
    }*/
  });
});
