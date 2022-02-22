class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

let formProducto = document.getElementById('formProducto')
let botonProductos = document.getElementById('botonProductos')
let divProductos = document.getElementById('divProductos')

let productos = []

// Eventos

formProducto.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = document.getElementById('nombre').value
    let marca = document.getElementById('marca').value
    let precio = document.getElementById('precio').value
    let stock = document.getElementById('stock').value

    const producto = new Producto(nombre, marca, precio, stock)
    productos.push(producto)

    console.log(productos)
    formProducto.reset()
})

botonProductos.addEventListener('click', () => {
    if(productos.length !== 0) {
        divProductos.innerHTML = ""
        productos.forEach((producto , indice) => {
            divProductos.innerHTML += `
                <div class="card" id="producto${indice}" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Marca: ${producto.marca}</p>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <p class="card-text">Stock: ${producto.stock}</p>
                        <button class="btn btn-secondary">Eliminar</button>
                    </div>
                </div>
            
            `
        })
    } else {
        divProductos.innerHTML = "No se agrego ningun producto"
    }
    
})