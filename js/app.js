document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnSaludar");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    mensaje.textContent = "¡Hola! El JavaScript está funcionando correctamente.";
  });
});
