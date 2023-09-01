const boton = document.getElementById('oscuro');
const secciones = document.querySelectorAll('.seccion-clara');

function cambiarModo() {
  secciones.forEach(seccion => {
    seccion.classList.toggle('seccion-clara');
    seccion.classList.toggle('seccion-oscura');
  });
  boton.innerHTML=(boton.innerHTML==='Modo claro') ? 'Modo oscuro':'Modo claro';
}

boton.addEventListener('click', cambiarModo);
