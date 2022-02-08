const IVA = 1.21
const producto1 = new Producto(1, "Yerba Mate", "La cariñosa", 300, 20)
const producto2 = new Producto(2, "Te", "El cariñoso", 200, 10)

producto1.modificarStock(20, "+")
producto1.modificarPrecio(IVA, "+")

/*
console.log(producto1.precio)
producto1.modificarPrecio(1.10, "+")
console.log(producto1.precio)
producto1.modificarPrecio(0.90, "-")
console.log(producto1.precio)

console.log(producto2.stock)
producto2.modificarStock(10, "+")
console.log(producto2.stock)
producto2.modificarStock(20, "-")
console.log(producto2.stock)*/