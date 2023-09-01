const boton = document.getElementById('oscuro');
const secciones = document.querySelectorAll('.seccion-clara');

function cambiarModo() {
  secciones.forEach(seccion => {
    seccion.classList.toggle('seccion-clara');
    seccion.classList.toggle('seccion-oscura');
  });
}

boton.addEventListener('click', cambiarModo);
