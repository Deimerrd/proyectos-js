const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider-btn.left");
const btnRight = document.querySelector(".slider-btn.right");

let images = slider.querySelectorAll("img");
let currentIndex = 1; // empezamos en la primera imagen real
let slideDistance;

// Inicializar posición
function updateSlideDistance() {
  const image = slider.querySelector("img");
  const imageStyle = window.getComputedStyle(image);
  const width = image.offsetWidth;
  const gap = parseInt(imageStyle.marginRight || 10);
  slideDistance = width + gap;
  slider.style.transform = `translateX(-${slideDistance * currentIndex}px)`;
}

// Mover slider con o sin animación
function updateSlider(animate = true) {
  slider.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
  slider.style.transform = `translateX(-${slideDistance * currentIndex}px)`;
}

// Botón siguiente
btnRight.addEventListener("click", () => {
  if (currentIndex >= images.length - 1) return;
  currentIndex++;
  updateSlider(true);
});

// Botón anterior
btnLeft.addEventListener("click", () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  updateSlider(true);
});

// Cuando termina la animación (verifica clones)
slider.addEventListener("transitionend", () => {
  const currentImage = images[currentIndex];

  if (currentImage.classList.contains("clone-first")) {
    // 🧠 Solución para evitar salto visible
    slider.style.transition = "none";
    currentIndex = 1;
    requestAnimationFrame(() => {
      void slider.offsetWidth; // 🔁 Forzar reflujo
      updateSlider(false);
    });
  }

  if (currentImage.classList.contains("clone-last")) {
    // 🧠 Misma solución para el otro extremo
    slider.style.transition = "none";
    currentIndex = images.length - 2;
    requestAnimationFrame(() => {
      void slider.offsetWidth;
      updateSlider(false);
    });
  }
});

// Redimensionar ventana
window.addEventListener("resize", updateSlideDistance);

// Inicializar al cargar
window.addEventListener("load", () => {
  updateSlideDistance();
  requestAnimationFrame(() => updateSlider(false));
});
