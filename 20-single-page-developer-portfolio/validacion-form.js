const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const nameIcon = document.getElementById("name-icon");
const emailIcon = document.getElementById("email-icon");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidName(name) {
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(name);
}

function validateName() {
  const val = nameInput.value.trim();
  if (!val) {
    nameInput.classList.add("contact__input--error");
    nameInput.classList.remove("contact__input--valid");
    nameError.textContent = "Sorry, invalid format here";
    nameInput.style.borderBottomColor = "#ff6f5b";
    nameIcon.style.display = "inline";
  } else if (!isValidName(val)) {
    nameInput.classList.add("contact__input--error");
    nameInput.classList.remove("contact__input--valid");
    nameError.textContent = "Sorry, invalid format here";
    nameInput.style.borderBottomColor = "#ff6f5b";
    nameIcon.style.display = "inline";
  } else {
    nameInput.classList.remove("contact__input--error");
    nameInput.classList.add("contact__input--valid");
    nameError.textContent = "";
    nameInput.style.borderBottomColor = "#00ff88";
    nameIcon.style.display = "none";
  }
}

function validateEmail() {
  const val = emailInput.value.trim();
  if (!isValidEmail(val)) {
    emailInput.classList.add("contact__input--error");
    emailInput.classList.remove("contact__input--valid");
    emailError.textContent = "Sorry, invalid format here.";
    emailInput.style.borderBottomColor = "#ff6f5b";
    emailIcon.style.display = "inline";
  } else {
    emailInput.classList.remove("contact__input--error");
    emailInput.classList.add("contact__input--valid");
    emailError.textContent = "";
    emailInput.style.borderBottomColor = "#00ff88";
    emailIcon.style.display = "none";
  }
}

function validateMessage() {
  const val = messageInput.value.trim();
  if (!val) {
    messageInput.classList.add("contact__input--error");
    messageInput.classList.remove("contact__input--valid");
    messageError.textContent = "Sorry, invalid format here";
    messageInput.style.borderBottomColor = "#ff6f5b";
  } else {
    messageInput.classList.remove("contact__input--error");
    messageInput.classList.add("contact__input--valid");
    messageError.textContent = "";
    messageInput.style.borderBottomColor = "#00ff88";
  }
}

// Eventos blur
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMessage);

// Resetear al escribir
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("contact__input--error", "contact__input--valid");
    input.style.borderBottomColor = "#ccc";

    if (input === nameInput) {
      nameError.textContent = "";
      nameIcon.style.display = "none";
    }
    if (input === emailInput) {
      emailError.textContent = "";
      emailIcon.style.display = "none";
    }
    if (input === messageInput) {
      messageError.textContent = "";
    }
  });
});
