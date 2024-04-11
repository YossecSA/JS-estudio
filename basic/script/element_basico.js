//importaciones
import { SaludoBienvenida, lengthFrase, mayusFrase, suma } from "./recurso/recurso.js";

//variables del html
const boton_mensaje = document.getElementById('boton_mensaje');
const boton_alerta = document.getElementById('boton_alerta');
const boton_suma = document.getElementById('boton_sumar');
const boton_length = document.getElementById('boton_length');
const boton_mayus = document.getElementById('boton_mayus');

const mensaje = document.getElementById("mensaje");

boton_mensaje.addEventListener('click', () => {
    mensaje.textContent = '¡Has presionado el botón!';
});

boton_alerta.addEventListener('click', () => {
    const nombre = String(prompt("¿Cuál es su nombre?"));
    mensaje.textContent = SaludoBienvenida(nombre);
})

boton_suma.addEventListener('click', () => {
    const num1 = Number(prompt('¿Ingrese primer número?'))
    const num2 = Number(prompt('¿Ingrese segundo número?'))
    
    mensaje.textContent =  suma(num1, num2)
})

boton_length.addEventListener('click', () => {
    const frase = String(prompt('¿Ingrese una palabra o frase?'))
    mensaje.textContent = lengthFrase(frase);
})
boton_mayus.addEventListener('click', ()=> {
    const frase = String(prompt('¿Ingresa una palabra o frase para convertirlo en mayuscula?'))
    mensaje.textContent = mayusFrase(frase);
})