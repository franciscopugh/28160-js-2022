/*
localStorage.setItem('Saludar', 'Hola')
localStorage.setItem('Despedirse', 'Adios')

let valorLocalStorage = localStorage.getItem('Saludar')

console.log(valorLocalStorage)

for(let i = 0; i < localStorage.length; i ++) {
    let clave = localStorage.key(i)
    console.log(clave)
    console.log(localStorage.getItem(clave))
}

//localStorage.removeItem('Saludar')
localStorage.clear()
//sessionStorage.setItem('Saludar', 'Hola')

*/

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let arrayPersonas = []

localStorage.setItem('Personas', JSON.stringify(arrayPersonas))
let formPersona = document.getElementById('formPersona')
let botonPersonas = document.getElementById('botonPersonas')
let divPersonas = document.getElementById('divPersonas')

formPersona.addEventListener('submit', (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)
    //console.log(datForm.get('nombre')) //document.getElementById('idNombre').value
    const persona = new Persona(datForm.get('nombre'), datForm.get('apellido'), datForm.get('edad'))
    arrayPersonas.push(persona)
    localStorage.setItem('Personas', JSON.stringify(arrayPersonas))
    formPersona.reset()
})

botonPersonas.addEventListener('click', () => {
    let personasDeStorage = JSON.parse(localStorage.getItem('Personas'))
    personasDeStorage.forEach(persona => {
        divPersonas.innerHTML += `
            <p> ${persona.nombre} </p>
            <p> ${persona.apellido} </p>
            <p> ${persona.edad} </p>
        `
    }) 
})


/*

let personasParseadas = JSON.parse(localStorage.getItem('Personas'))
console.log(personasParseadas)*/
