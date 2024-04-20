class Product {
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier; // No necesitas asignar this._supplier = this._supplier;
        this.colors = colors;
        this.description = description;
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

const prod2 = new Product("id123", "Celular", 100000, 10, ["imagen1.jpg", "imagen2.jpg"], true, "yossec",['rojo','azul'],'samgsun g5');