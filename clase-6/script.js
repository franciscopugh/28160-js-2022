/*let array = []
              //0     1   2     3
let array2 = ["Hola", 5, true, "Chau", false, 6]

console.log(array2)

for(let i = 0; i < array2.length; i++) {
    console.log(array2[i]) //array[0] array[1] array[2] array[3] array[4] array[5]
}

array2.unshift({nombre: "Lionel", apellido: "Messi"})

console.log(array2)

array2.pop()

console.log(array2)

array2.splice(-1, 3)

console.log(array2)

//console.log(array2.join(","))

let array1 = [1, true]
let array2 = [false, 2]
            //array1 + array2 ESTO NO
let array3 = array1.concat(array2)

console.log(array3)

let array4 = array3.slice(1, 3) //Inicio se incluye, mi fin no
console.log(array4)*/
let array1 = ["Pedro", "Agustina", "Maria", "Walter", "Raul"]

//let nombreABuscar = prompt("Ingrese un nombre")

let indice = array1.indexOf("Walter")

if(indice !== -1 ) {
    array1.splice(indice,1)
} else {
    alert("Usuario no encontrado")
}

console.log(array1)

console.log(array1.includes(5))

console.log(array1.reverse())

console.log(array1)


class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 13)
const persona2 = new Persona("Gonzalo", "Isa", 22)
const persona3 = new Persona("Mario", "Massonnat", 21)

let arrayPersonas = [persona1, persona2, persona3]

for(let i= 0; i < arrayPersonas.length; i++) {
    console.log(i)
    console.log(arrayPersonas[i])
}

for(let personaEnArray of arrayPersonas) {
    console.log(personaEnArray)
}
console.log(personaEnArray)