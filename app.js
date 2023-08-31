const boton= document.getElementById('oscuro');
const primeraSeccion= document.getElementById('seccion-1');
const segundaSeccion= document.getElementById('seccion-2');
const cuartaSeccion= document.getElementById('seccion-4');
const quintaSeccion= document.getElementById('seccion-5');
const sextaSeccion= document.getElementById('seccion-6');


function cambiarModo(){
    primeraSeccion.style.backgroundColor='Black'
    segundaSeccion.classList.remove('seccion-clara');
    segundaSeccion.classList.add('seccion-oscura');
    cuartaSeccion.classList.remove('seccion-clara');
    cuartaSeccion.classList.add('seccion-oscura');
    quintaSeccion.classList.remove('seccion-clara');
    quintaSeccion.classList.add('seccion-oscura');
    sextaSeccion.classList.remove('seccion-clara');
    sextaSeccion.classList.add('seccion-oscura');   
}
boton.addEventListener('click',cambiarModo)