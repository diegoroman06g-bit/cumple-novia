document.getElementById('btnSorpresa').addEventListener('click', function() {
  const mensaje = document.getElementById('mensajeOculto');
  if (mensaje.style.display === 'block') {
    mensaje.style.display = 'none';
  } else {
    mensaje.style.display = 'block';
  }
});