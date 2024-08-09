function validaremail() {
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

function validaremailfooter() {
  var email = document.getElementById("email-f").value;
  var error = document.getElementById("error-f");
  var expresion =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if (email.match(expresion)) {
    alert("La dirección de email " + email + " es correcta!.");
  } else {
    error.innerHTML = "Please check your email";
  }
}
