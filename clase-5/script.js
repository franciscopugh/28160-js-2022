/*
const persona1 = {  
    dni: "10.000.000",
    nombre: "Francisco",
    apellido: "Pugh",
    edad: 50,
    esProfesor: true
}

const persona2 = {  
    dni: "11.111.111",
    nombre: "Pancha",
    apellido: "Panchita",
    edad: 40,
    esProfesor: false
}


console.log(persona1)


persona1.nombre = "Pancho"
console.log(persona1["nombre"])

function Persona(dni, nombre, apellido, edad, esProfesor) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.esProfesor = esProfesor;
    this.caminar = () => console.log(`${this.nombre} ${this.apellido} esta caminando`)
}

class Persona {
    constructor(dni, nombre, apellido, edad, esProfesor) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.esProfesor = esProfesor;
    }

    caminar() {
        console.log(`${this.nombre} ${this.apellido} esta caminando`)
    }

}

const persona1 = new Persona(
    parseInt(prompt("Ingrese el dni")),
    prompt("Ingrese un nombre"), 
    prompt("Ingrese un apellido"),
    parseInt(prompt("Ingrese una edad")),
    Boolean(parseInt(prompt("Ingrese si es profesor o no")))
)



const persona1 = new Persona(12345678, "Juanfer", "Quintero", 27, false)
const persona2 = new Persona(87654321, "Funalita", "Felice", 26, false)
const persona3 = new Persona(12345678, "Juanfer", "Quintero", 27, false)

persona2.caminar()

console.log("Caminar".toUpperCase())

console.log(persona1)*/

class Auto {
    constructor(patente, modelo, marca, año, color) {
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
        this.color = color;
    }

    arrancar() {
        console.log(`El auto ${this.modelo} esta siendo brum brum`)
    }

    moverse(velocidad) {
        console.log(`El auto ${this.modelo} esta yendo a ${velocidad} km/h`)
    }

    frenar() {
        console.log(`El auto esta frenando`)
    }
}

const auto1 = new Auto(prompt("Ingrese una patente").toUpperCase(), 
                        prompt("Ingrese el modelo"), 
                        prompt("Ingrese la marca"), 
                        parseInt(prompt("Ingrese el año")), 
                        prompt("Ingrese el color"))


auto1.arrancar()
auto1.moverse(50)
auto1.frenar()