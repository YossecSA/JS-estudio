class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
}


class vendedor extends persona {
    constructor(oficio, tienda, nombre,apellido){
        super(nombre, apellido);
        this.oficio = oficio;
        this.tienda = tienda;
    }
    vender(){
        console.log('vendiendo...')
    }
}

const yossec = new vendedor('venta','calle','yossec','suarez')

console.log(yossec.vender())