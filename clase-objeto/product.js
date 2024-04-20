class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier; // No necesitas asignar this._supplier = this._supplier;
    }

    // Métodos de acceso para supplier
    getSupplier() {
        return this._supplier;
    }
    
    setSupplier(newSupplier) {
        this._supplier = newSupplier;
    }
    sellUnits(units) {
		this.stock = this.stock - units
	}
}

const prod1 = new Product("id123", "Celular", 100000, 10, ["imagen1.jpg", "imagen2.jpg"], true, "yossec");

console.log(prod1._supplier); // "yossec"
console.log(prod1.stock); // 10

//obtener infomacion
console.log(prod1.getSupplier()); // "yossec"
prod1.sellUnits(2)

//modificar 
prod1.setSupplier('isaias') // debemos invocarlo y pasarle un valor de cambio
console.log(prod1.getSupplier()); //isaias


console.log(prod1.stock); // 10

const fruta = ['platano','cebolla','manzana']
//es para buscar los elementos de posicion en un arrya
console.log(prod1['platano'])   //cebolla


