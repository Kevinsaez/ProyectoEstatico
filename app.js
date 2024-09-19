const boton = document.getElementById('oscuro');
const secciones = document.querySelectorAll('.seccion-clara');
const iconos = document.querySelectorAll('.iconos-proyectos');

function cambiarModo() {
  secciones.forEach(seccion => {
    seccion.classList.toggle('seccion-clara');
    seccion.classList.toggle('seccion-oscura');
  });
  boton.innerHTML = (boton.innerHTML === 'Modo claro') ? 'Modo oscuro' : 'Modo claro';
  iconos.forEach(icono => {
    if (boton.innerHTML === 'Modo oscuro') {
      icono.style.color = 'black'
    } else {
      icono.style.color = 'white'
    }
  });
}

boton.addEventListener('click', cambiarModo);