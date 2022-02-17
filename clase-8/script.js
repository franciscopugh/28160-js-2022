/*
let parrafo1 = document.getElementById("parrafo1")
console.log(document.getElementsByClassName("parrafos")[0].children[0])
let etiquetasP = document.getElementsByTagName("p")
let parrafosId = document.getElementById('parrafos')

for(let parrafo of etiquetasP) {
    console.log(parrafo)
}

let user = {
    nombre: "Fran"
}
parrafo1.innerText += `Hola ${user.nombre}`

parrafosId.innerHTML += `
    <h1 id="1" class="titulos"> HOLA CODERS </h1>
`

console.log(parrafo1.remove())

console.log(parrafo1)
*/

class Persona {
    constructor(id, nombre, apellido, edad, dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
    }

}

const persona1 = new Persona(1,"Francisco", "Pugh", 35, 123123)
const persona2 = new Persona(2,"Mariano", "Miguez", 20, 456456)
const persona3 = new Persona(3,"Julian", "Alvarez", 22, 4121421)

const personas = [persona1, persona2,persona3]

let divPersonas = document.getElementById('divPersonas')

personas.forEach(personaEnArray => {
    divPersonas.innerHTML += `
        <div id="${personaEnArray.id}" class="personas">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmetodosparaligar.com%2Fwp-content%2Fuploads%2F2017%2F10%2Fhombre-canchero.jpg&f=1&nofb=1">
            <p> Nombre: ${personaEnArray.nombre}</p>
            <p> Apellido: ${personaEnArray.apellido}</p>
            <p> Edad: ${personaEnArray.edad}</p>
            <p> DNI: ${personaEnArray.dni}</p>
        </div>
    `
})