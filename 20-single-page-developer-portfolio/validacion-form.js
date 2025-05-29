<script>
  const form = document.querySelector(".contact__form");
  const emailInput = form.querySelector('input[name="email"]');
  const errorIcon = form.querySelector(".contact__error-icon");
  const errorMessage = form.querySelector(".contact__error-message");

  form.addEventListener("submit", function (e) {
    const emailValue = emailInput.value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!emailValid) {
      e.preventDefault(); // Detiene el envío
      errorIcon.style.display = "inline";
      errorMessage.textContent = "Please enter a valid email address";
      emailInput.classList.add("contact__input-error");
    } else {
      errorIcon.style.display = "none";
      errorMessage.textContent = "";
      emailInput.classList.remove("contact__input-error");
    }
  });
</script>
