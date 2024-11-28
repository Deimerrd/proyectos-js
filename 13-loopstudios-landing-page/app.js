const mainContainer = document.querySelector('.wrapper');
const mobileMenu = document.querySelector('.mobile-menu');

const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');

openMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hide');
  mainContainer.classList.add('hide');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hide');
  mainContainer.classList.remove('hide');
});
