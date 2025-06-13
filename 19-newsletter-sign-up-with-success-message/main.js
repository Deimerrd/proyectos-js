function validaremaill() {
  var email = document.getElementById("email").value.trim();
  var error = document.getElementById("emailError");
  let expresion =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if (email.match(expresion)) {
    // GUARDAR el correo en localStorage antes de redirigir
    localStorage.setItem("emailSuscrito", email);

    // Redirigir a la página de confirmación
    window.location.href = "suscrito.html";

    // (opcional) Estilo para indicar éxito
    document.getElementById("email").style.borderColor = "#fff";
    error.innerHTML = ""; // Borra el mensaje de error si lo había
  } else {
    // Mostrar mensaje de error
    error.innerHTML = "Valid email required";
    error.style.color = "#FF6155";
    document.getElementById("email").style.fontSize = "16px";
    document.getElementById("email").style.borderColor = "#FF6155";
  }
}
