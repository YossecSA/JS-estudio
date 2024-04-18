// PARTES DE UNA FUNCION
//  function nombre (parametros, parametros){
    //codigo
//  }

//  nombre(argumentos, argumentos);


// function calcularVelocidad() {
//     const distancia = 10
//     const tiempo = 2
//     const velocidad = distancia / tiempo;
//     console.log("La velocidad del móvil es " + velocidad);
// }

// calcularVelocidad();
// console.log('//')
// calcularVelocidad();
// calcularVelocidad();

// funciones con parametros CTRL K + U




// funcion tipo flecha

const calcularVelocidad = (distancia, tiempo) => {
                            const velocidad = distancia / tiempo;
                            return velocidad
                            }

console.log("La velocidad de Juana es " + calcularVelocidad(100,2));