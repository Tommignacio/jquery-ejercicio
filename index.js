$(document).ready(function () {
  // Botón para ocultar la imagen
  $("#ocultarBtn").click(function () {
    $("#imagen").hide();
    $("#titulo").text("¡No tenemos ninguna imagen!");
  });

  // Botón para mostrar la imagen
  $("#mostrarBtn").click(function () {
    $("#imagen").show();
    $("#titulo").text("¡Mirá la siguiente imagen!");
  });
});
