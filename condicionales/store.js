let totalApagar = 0
let productos = []
const cantidad = 1;

for (let index = 1; index <= cantidad; index++) {
    const nombre =prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));

    const subtotal = cantidad * precio;
    totalApagar += subtotal;

    //lo agrega en un array tipo objeto
    productos.push({ nombre: nombre, precio: precio, cantidad: cantidad });
}

alert(totalApagar)
console.log(productos)
