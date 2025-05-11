function validaremaill() {
  var email = document.getElementById("email").value;
  var error = document.getElementById("emailError");
  let expresion =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if (email.match(expresion)) {
    window.location.href = "suscrito.html";

    document.getElementById("email").style.borderColor = "#fff";
  } else {
    error.innerHTML = "Valid email required";
    error.style.color = " #FF6155";

    document.getElementById("email").style.fontSize = "16px";
  }
}

/*document.getElementById("btn-email").addEventListener("click", function () {
  const Email = document.getElementById("email").value;
  const errorSpan = document.getElementById("emailError");

  color: var(--Vermellion, #FF6155);

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
*/
