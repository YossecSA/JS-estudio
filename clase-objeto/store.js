
// nomenclatura: PascalCase
// CLASE: propiedades : atributos

// const Producto = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2
// };

// // agregar nuevos metodos
// producto.id = "id123";

// producto['foto'] = "a"; 


// console.log(producto)

// //mostrar el nombre
// console.log(producto.nombre)   //celular

class Product {
    constructor(id, title, price, stock, images, onsale) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
    }
}
//instanciar una clase - new
const prod1 = new Product("id123", "Celular", 100000, 2, ["imagen1.jpg", "imagen2.jpg"], true);

console.log(prod1)
console.log(prod1['title'])

//console.log(prod1[title])

console.log(prod1.title)



const prod2 = new Product("id456", "Laptop", 150000);

console.log(prod2)