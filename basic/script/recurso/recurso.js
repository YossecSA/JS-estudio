export const SaludoBienvenida = (nombre) => 
    `¡Bienvenido al curso de JavaScript, ${nombre}! Estamos emocionados de tenerte con nosotros mientras 
    exploramos el fascinante mundo del desarrollo web y la programación con JavaScript.
    ¡Prepárate para sumergirte en un viaje lleno de aprendizaje y descubrimiento!`;

export const suma = (num1, num2) => {
    let valor = num1 + num2
    return `La suma de ${num1} + ${num2} = ${valor}`
}

export const lengthFrase = (frase) => {
    let frase_length = frase.length;
    return `Posee ${frase_length} letras. \nLa FRASE: '${frase}' `;
}
export const mayusFrase = (texto) => {
    let frase = texto.toUpperCase();
    let frase2 = texto.toLowerCase();
    return `=> Mayuscula: \n${frase} => \nMinusula: \n${frase2}`;
}