// Math.abs(x)
console.log(Math.abs(-5)); // Devuelve 5
console.log(Math.abs(3));  // Devuelve 3

//Math.ceil(x):
// Devuelve el entero más pequeño mayor o igual que un número x, 
//redondeando hacia arriba al entero más cercano. 

console.log(Math.ceil(5.3));  // Devuelve 6
console.log(Math.ceil(-5.8)); // Devuelve -5

//Math.floor(x): 
//Devuelve el entero más grande menor o igual que un número x, redondeando hacia abajo al entero más cercano
console.log(Math.floor(5.7));  // Devuelve 5
console.log(Math.floor(-5.2)); // Devuelve -6

//Math.round(x): Devuelve el valor de un número x redondeado al entero más cercano. 
//Si la fracción es igual a 0.5, se redondea al entero más cercano con paridad

console.log(Math.round(5.5));  // Devuelve 6
console.log(Math.round(5.4));  // Devuelve 5
console.log(Math.round(-5.5)); // Devuelve -5
console.log(Math.round(-5.4)); // Devuelve -5

//Math.max(x1, x2, ..., xn): Devuelve el número más grande entre los argumentos proporcionados.
console.log(Math.max(5, 10, 15));     // Devuelve 15
console.log(Math.max(-5, -10, -15));  // Devuelve -5

//Math.min(x1, x2, ..., xn): Devuelve el número más pequeño entre los argumentos proporcionados.
console.log(Math.min(5, 10, 15));     // Devuelve 5
console.log(Math.min(-5, -10, -15));  // Devuelve -15

//Math.random(): Este método devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo),
console.log(Math.random()); // Devuelve un número aleatorio entre 0 y 1