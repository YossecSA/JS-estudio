// Define una función stringIncludes que:
// Reciba como parámetro dos cadenas de texto
// Verifique el la primer cadena está incluida en la segunda
// Si la incluye, devolver true
// Si no, devolver false
// Ejecuta la función y muestra en consola los resultados al menos tres veces.

function stringIncludes(substring, string) {

    return string.includes(substring);
}

// Pruebas de la función
console.log(stringIncludes("he", "Hello")); // Debería imprimir false
console.log(stringIncludes("he", "hello world")); // Debería imprimir true


