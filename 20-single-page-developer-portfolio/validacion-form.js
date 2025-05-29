document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact__form");
  const emailWrapper = form.querySelector(".contact__input-wrapper");
  const emailInput = emailWrapper.querySelector("input[type='email']");
  const errorMessage = emailWrapper.querySelector(".contact__error-message");
  const errorIcon = emailWrapper.querySelector(".contact__error-icon");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se envíe si hay error

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      // ❌ Email inválido
      emailInput.classList.add("input-error");
      errorMessage.textContent = "Sorry, invalid format here";
      errorIcon.style.display = "inline";
    } else {
      // ✅ Email válido
      emailInput.classList.remove("input-error");
      errorMessage.textContent = "";
      errorIcon.style.display = "none";

      // Aquí podrías enviar el formulario si todo está bien
      // form.submit(); // si lo necesitas enviar realmente
    }
  });
});
