document.addEventListener("DOMContentLoaded", () => {
  const iconContainers = document.querySelectorAll(".icon-container");

  iconContainers.forEach((container) => {
    const src = container.getAttribute("data-src");
    if (!src) return;

    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar " + src);
        return res.text();
      })
      .then((svgText) => {
        container.innerHTML = svgText;

        // Aquí seleccionamos el SVG que acabamos de insertar
        const svg = container.querySelector("svg");
        if (!svg) return;

        // Guardamos el fill original para poder restaurarlo
        const originalFillElements = svg.querySelectorAll("[fill]");
        const originalFills = Array.from(originalFillElements).map((el) =>
          el.getAttribute("fill")
        );

        // El contenedor padre <a>
        const parentLink = container.closest("a");

        if (parentLink) {
          parentLink.addEventListener("mouseenter", () => {
            // Cambiar el fill de todos los elementos que tienen fill
            originalFillElements.forEach((el) => {
              el.setAttribute("fill", "#4EE1A0");
            });
          });

          parentLink.addEventListener("mouseleave", () => {
            // Restaurar el fill original
            originalFillElements.forEach((el, i) => {
              el.setAttribute("fill", originalFills[i]);
            });
          });
        }
      })
      .catch((err) => console.error(err));
  });
});
