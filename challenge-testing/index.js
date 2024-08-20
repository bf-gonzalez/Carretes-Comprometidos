class CarritoCompra{
    constructor(){
        this.productos = [];
    }

    calcularTotal(){
        return this.productos.reduce((acc, producto) => acc + producto.precio,0);
    }

    agregarProducto(producto){
        this.productos.push(producto)
    }

    aplicarDescuento(porcentaje){
      return this.calcularTotal() *(1 -porcentaje / 100);
    }
}




module.exports = CarritoCompra