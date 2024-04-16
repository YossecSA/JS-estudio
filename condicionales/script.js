const edad = Number(prompt("Ingrese su edad"))

// if(edad >= 18){
//     alert("Es mayor de edad")

// }else if(edad > 0){
//     alert("Es menor de edad")
// }
// else{
//     alert("Edad incorrecta")
// }

/* operador ternario */

let analisis = (edad>=18)?"es mayor de edad":"es menor de edad"
console.log(analisis)