let menuHamburguesa = document.querySelector(".nav__logo");

const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
menuHamburguesa.addEventListener("click", () => {
  let menu = document.querySelector(".list");
  menu.classList.toggle("list--show");
});
