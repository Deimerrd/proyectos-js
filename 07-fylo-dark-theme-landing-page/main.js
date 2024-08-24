function validaremail() {
  var email = document.getElementById("email").value;
  var error = document.getElementById("error");
  let expresion =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if (email.match(expresion)) {
    alert("La dirección de email " + email + " es correcta!.");

    document.getElementById("email").style.borderColor = "#fff";
  } else {
    error.innerHTML = "Error, please check your email";

    document.getElementById("email").style.borderColor = "#EF4877";
  }
}
