function validarformulario() {
  var email = document.getElementById("email").value;
  var error = document.getElementById("error");
  var expresion =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if (email.match(expresion)) {
    alert("La dirección de email " + email + " es correcta!.");
  } else {
    error.innerHTML = "Check your email please";
  }
}
