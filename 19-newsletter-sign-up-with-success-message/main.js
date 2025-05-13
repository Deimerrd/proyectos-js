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
