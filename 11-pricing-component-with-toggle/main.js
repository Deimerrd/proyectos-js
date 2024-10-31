var miCheckbox = document.getElementById("toggle");
var msg = document.getElementById("v1");
var msg2 = document.getElementById("v2");
var msg3 = document.getElementById("v3");

miCheckbox.addEventListener("click", function () {
  if (miCheckbox.checked) {
    msg.innerText = "19.99";
    msg2.innerText = "24.99";
    msg3.innerText = "39.99";
  } else {
    msg.innerText = "199.99";
    msg2.innerText = "249.99";
    msg3.innerText = "399.99";
  }
});
