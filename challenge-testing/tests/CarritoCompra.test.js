const CarritoCompra = require("../index");





/*beforeEach(()=>{
    const carrito = new CarritoCompra();
});*/

describe("Clase de CarritoCompra", () =>{
    // constructo(): Inicializa el carrito como un array vacio.
    it("Inicializa el carrito como un array vacio", () =>{
        const carrito = new CarritoCompra();
        
        expect(carrito).toBeInstanceOf(CarritoCompra);
        //expect(carrito.productos).toEqual([]);
        expect(Array.isArray(carrito.productos)).toBe(true)
        expect(carrito.productos.length).toBe(0)

    })

    //agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
    it("Recibe un objeto representando un producto y lo agrega al carrito", () =>{
        const carrito = new CarritoCompra();
        
        expect(carrito.agregarProducto).toBeDefined()
        carrito.agregarProducto({nombre: "Buzo", precio:10})
        expect(carrito.productos.length).toBe(1)

        carrito.agregarProducto({nombre: "Pantalon", precio:30})
        carrito.agregarProducto({nombre: "Zapatillas", precio:70})
        expect(carrito.productos.length).toBe(3)
    });



    //calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito
    it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () =>{
        const carrito = new CarritoCompra();
        expect(carrito.calcularTotal).toBeDefined()
        carrito.agregarProducto({nombre: "Buzo", precio:10})
        carrito.agregarProducto({nombre: "Pantalon", precio:30})
        carrito.agregarProducto({nombre: "Zapatillas", precio:70})
        expect(carrito.calcularTotal()).toBe(110)
       
    });
    // aplicarDescuento(porcentaje): aplica un descuento al total de la compra segun el procentaje especificado

    it("Aplica un descuento al total de la compra segun el procentaje especificado", () =>{
        const carrito = new CarritoCompra();
        expect(carrito.aplicarDescuento).toBeDefined()
        carrito.agregarProducto({nombre: "Buzo", precio:10})
        carrito.agregarProducto({nombre: "Pantalon", precio:30})
        carrito.agregarProducto({nombre: "Zapatillas", precio:70})
        expect(carrito.aplicarDescuento(10)).toBe(99)

    })
})