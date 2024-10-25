





$("").click(function () {
  if ($("#toggle").is(":checked")) {
    // Acá dentro pones tu código para cuando esté seleccionado
    $(".slider.round").html("¡Hola! Me has seleccionado");
  } else {
    // Acá dentro pones tu código para cuando NO esté seleccionado
    $(".slider.round").html("¡Que lástima! Te arrepentiste");
  }
});
