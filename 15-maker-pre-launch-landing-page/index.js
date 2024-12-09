function validaremail() {
  function validarfor() {
    function validaVacio(valor) {
      valor = valor.replace("&nbsp;", "");
      valor = valor == undefined ? "" : valor;
      if (!valor || 0 === valor.trim().length) {
        return true;
      } else {
        return false;
      }
    }
    var email = document.getElementById("txt__email").value;
    var error = document.getElementById("error");
    let expresion =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if (!expr.test(email)) {
      //COMPRUEBA MAIL
      error.innerHTML = " Oops! That doesn’t look like an email address";

      return false;
    }

    if (email.match(expresion)) {
      alert("La dirección de email " + email + " es correcta!.");

      document.getElementById("email").style.borderColor = "#fff";
    }
    if (validaVacio(email.value)) {
      //COMPRUEBA CAMPOS VACIOS
      error.innerHTML = "Oops! Please add your email";

      return false;
    }
    return true;
  }
}
