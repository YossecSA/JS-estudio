class Calculadora {
    sumar(value1, value2){
        return value1 + value2;
    }
    restar(value1, value2){
        return value1 - value2;
    }
    multi(value1, value2){
        return value1 * value2;
    }
    dividir(value1, value2){
        if (value2 === 0) {
            return 'Error: No se puede dividir por cero';
        }
        return (value1 / value2).toFixed(2); // Redondea el resultado a 4 decimales
    }
    potencia(value1, value2){
        return Math.pow(value1, value2);
    }
    raiz(value){
        return Math.sqrt(value).toFixed(2); // Redondea la raíz cuadrada a 4 decimales
    }
}

const calculator = new Calculadora();

let input = document.getElementById('input')
input.value = '';


function ca (){
    const operation = Number(prompt('¿Qué operación deseas realizar? \n1: sumar, \n2: restar, \n3: multiplicar,\n4: dividir, \n5: raiz \n6: potencia'));
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));

    let result;

    switch(operation) {
        case 1:
            result = calculator.sumar(num1, num2);
            input.value = result;
            alert(`El resultado es: ${result}`);
            break;
        case 2:
            result = calculator.restar(num1, num2);
            alert(`El resultado es: ${result}`);
            input.value = result;
            break;
        case 3:
            result = calculator.multi(num1, num2);
            alert(`El resultado es: ${result}`);
            input.value = result;
            break;
        case 4:
            result = calculator.dividir(num1, num2);
            alert(`El resultado es: ${result}`);
            input.value = result;
            break;
        case 5:
            result = calculator.raiz(num1);
            input.value = result;
            alert(`La raíz es: ${result}`);
            break;
        case 6:
            result = calculator.potencia(num1, num2);
            alert(`El resultado de la potencia es: ${result}`);
            input.value = result;
            break;
        default:
            alert('Operación inválida. Por favor, elige una operación válida.');
    }
}
// while(true){
//     ca()
// }
// let contador = 0
// do {
//     ca()
//     contador++

// }while(contador < 2)
ca()
