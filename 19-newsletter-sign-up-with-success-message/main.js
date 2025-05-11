document.getElementById("btn-email").addEventListener("click", function () {
  const Email = document.getElementById("email").value;
  const errorSpan = document.getElementById("emailError");

  if (esCorreoValido(Email)) {
    // Redirige a la nueva página
    window.location.href = "suscrito.html";
  } else {
    errorSpan.innerHTML = "Valid email required"; // plain javascript
  }
});

function esCorreoValido(Email) {
  // Implementa la validación del correo (ejemplo simple)
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(Email);
}
