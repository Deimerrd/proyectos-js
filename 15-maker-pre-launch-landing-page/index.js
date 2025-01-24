function validaremail() {
  const email = document.getElementById("txt__email").value;
  const error = document.getElementById("error");
  let expresion =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if (email.match(expresion)) {
    document.getElementById("txt__email").value = "";
    error.innerHTML = "";
    return true;
  }

  if (!expresion.test(email) && email > "0") {
    error.innerHTML = " Oops! That doesn’t look like an email address";
    error.style.display = "block";
  } else {
    error.innerHTML = " Oops! Please add your email";
    error.style.display = "block";
  }
}
