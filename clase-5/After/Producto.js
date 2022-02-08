class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }

    aumentarPrecio(nuevoPrecio) {    
        if(nuevoPrecio < 1) {
            alert("Debe agregar un numero mayor o igual que uno")
        } else {
            this.precio *= nuevoPrecio
        }
    }

    modificarPrecio(nuevoPrecio, operacion) {
        if(operacion == "+") {
            if(nuevoPrecio < 1) {
                alert("Debe agregar un numero mayor o igual que uno")
            } else {
                this.precio *= nuevoPrecio
            }
        } else {
            if(nuevoPrecio >= 1) {
                alert("Debe agregar un numero menor que cero que uno")
            } else {
                this.precio *= nuevoPrecio
            }
        }
    }
    /*
    aumentarStock(nuevoStock) {
        //10 + = 20 = 30
        this.stock += nuevoStock
    }

    disminuirStock(nuevoStock) {
        //20 -= 10 = 10
        this.stock -= nuevoStock
    }*/
    
    modificarStock(nuevoStock, operacion) {
        if(operacion == "-") {
            if(this.stock - nuevoStock < 0) {
                alert("No puede haber un stock negativo")
            } else {
                this.stock -= nuevoStock
            }    
        } else {
            this.stock += nuevoStock
        }
    }

}