const palindrome = (texto) => {

    const letra = texto.split(''); // [a,d,a,n]
    const letraInvertida = [...letra].reverse(); // [n,a,d,a]
    const cadenaInvertida = letraInvertida.join(''); // "nada"
    const letraOriginal = letra.join(''); // "adan"

    //compara "nada" === "adan" true
    return cadenaInvertida === texto
}

// resulta diferentes
console.log(palindrome('adan'))
