function validarYRedireccionar() {
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    window.location.href = "suscrito.html";
  } else {
    alert("El correo electrónico no es válido.");
  }
}

/*document.getElementById("btn-email").addEventListener("click", function () {
  const Email = document.getElementById("email").value;
  const errorSpan = document.getElementById("emailError");

  if (esCorreoValido(Email)) {
    // Redirige a la nueva página
    window.location.replace("suscrito.html"); // o 'ruta/a/la/otra/pagina.html'
    // O también:
    //
  } else {
    errorSpan.innerHTML = "Valid email required"; // plain javascript
  }
});

function esCorreoValido(Email) {
  // Implementa la validación del correo (ejemplo simple)
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(Email);
}*/
