const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider-btn:first-child");
const btnRight = document.querySelector(".slider-btn:last-child");

let currentPosition = 0;
let slideDistance;

// Función que actualiza slideDistance según el ancho de pantalla
function updateSlideDistance() {
  const width = window.innerWidth;

  if (width >= 1024) {
    slideDistance = 700; // Desktop
  } else if (width >= 768) {
    slideDistance = 510; // Tablet
  } else {
    slideDistance = 263; // Mobile
  }
}

// Ejecutar al cargar
updateSlideDistance();

// Función que mueve el slider
function updateSlider() {
  slider.style.transform = `translateX(-${currentPosition}px)`;
}

// Botón derecha
btnRight.addEventListener("click", () => {
  const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;

  if (currentPosition + slideDistance <= maxScroll) {
    currentPosition += slideDistance;
    updateSlider();
  } else {
    currentPosition = maxScroll;
    updateSlider();
  }
});

// Botón izquierda
btnLeft.addEventListener("click", () => {
  if (currentPosition - slideDistance >= 0) {
    currentPosition -= slideDistance;
  } else {
    currentPosition = 0;
  }
  updateSlider();
});

// Escuchar cambio de tamaño y actualizar slideDistance
window.addEventListener("resize", () => {
  updateSlideDistance();

  const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
  if (currentPosition > maxScroll) {
    currentPosition = maxScroll;
    updateSlider();
  }
});
