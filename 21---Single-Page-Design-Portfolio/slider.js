const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider-btn.left");
const btnRight = document.querySelector(".slider-btn.right");
let images = slider.querySelectorAll("img");

let currentIndex = 1;
let slideDistance = 275;
const gap = 10; // mismo gap que en CSS

// Clonar primera y última imagen
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, images[0]);

// Actualizar lista de imágenes (con clones incluidos)
images = slider.querySelectorAll("img");

function updateSlideDistance() {
  const width = window.innerWidth;
  if (width >= 1024) {
    slideDistance = 600;
  } else if (width >= 768) {
    slideDistance = 558;
  } else {
    slideDistance = 272;
  }
}

function updateSlider(animate = true) {
  const offset = currentIndex * (slideDistance + gap);
  slider.style.transition = animate ? "transform 0.4s ease-in-out" : "none";
  slider.style.transform = `translateX(-${offset}px)`;
}

function handleTransitionEnd() {
  // Si estás en el clon del final → vuelve al primero real
  if (images[currentIndex].classList.contains("bitma1")) {
    currentIndex = 1;
    updateSlider(false);
  }

  // Si estás en el clon del inicio → vuelve al último real
  if (images[currentIndex].classList.contains("bitma5")) {
    currentIndex = images.length - 2;
    updateSlider(false);
  }
}

// Inicialización
updateSlideDistance();
updateSlider(false);

// Event listeners
btnRight.addEventListener("click", () => {
  if (currentIndex >= images.length - 1) return;
  currentIndex++;
  updateSlider(true);
});

btnLeft.addEventListener("click", () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  updateSlider(true);
});

slider.addEventListener("transitionend", handleTransitionEnd);

window.addEventListener("resize", () => {
  updateSlideDistance();
  updateSlider(false);
});
