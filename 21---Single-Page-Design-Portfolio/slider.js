const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider-btn:first-child");
const btnRight = document.querySelector(".slider-btn:last-child");

let currentPosition = 0;
const slideDistance = 260;

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

// Actualizar si cambia el tamaño
window.addEventListener("resize", () => {
  const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
  if (currentPosition > maxScroll) {
    currentPosition = maxScroll;
    updateSlider();
  }
});
