let productos = [];
let total = 0;
const cantidad = 2;
let num_venta = 0;

// Función comprar
const comprar = () => {
    let totalApagar = 0;
    let productosVenta = []
    num_venta ++;
    alert(num_venta)

    for (let index = 1; index <= cantidad; index++) {

        const nombre = prompt("¿Qué producto desea llevar?");
        const cantidad = Number(prompt("¿Cuántas unidades?"));
        const precio = Number(prompt("¿Cuánto sale cada unidad?"));
        const subtotal = cantidad * precio;
        totalApagar += subtotal;

        // Agrega el producto a la venta actual
        productosVenta.push({
            nombre: nombre,
            cantidad: cantidad,
            precio: precio,
            subtotal: subtotal
        });
    }
    productos.push({
        venta: num_venta,
        productos: productosVenta,
        totalVenta: totalApagar
    });
    console.log(totalApagar);
    return totalApagar;
}

// Llamadas a la función comprar()
const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
total = total1 + total2 + total3;

console.log(total);
console.log(productos)