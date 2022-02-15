const persona1 = {
    nombre: "Francisco", 
    apellido: "Pugh",
    sueldo: 7000
}

const persona2 = {
    nombre: "German", 
    apellido: "Cuevas",
    sueldo: 5000
}

const persona3 = {
    nombre: "Aylen", 
    apellido: "Fernandez",
    sueldo: 6000
}
const array1 = [persona1, persona2,persona3]
/*
for(let persona of array1) {
    console.log(persona)
    for(let clave in persona) {
        console.log(persona[clave])
    }
}
*/
//array1.forEach((persona) => console.log(persona)) //Recorrer un array
/*
console.log(array1.find((persona) => persona.nombre === "German" 
|| persona.sueldo >= 6000))
console.log(array1.filter((persona) => persona.nombre === "Francisco" 
&& persona.sueldo >= 6000))
console.log(array1.some((persona) => persona.nombre === "Francisco" 
&& persona.sueldo >= 6000))
console.log(array1.map((persona) => persona.sueldo >= 6000))
const array2 = array1
console.log(array2.sort((persona1, persona2) => {
    if(persona1.nombre < persona2.nombre) {
        return -1
    }
    if(persona1.nombre > persona2.nombre) {
        return 1
    }

    return 0
}))

console.log(array2.sort((persona1,persona2) => persona1.sueldo - persona2.sueldo))
*/

console.log(Math.cbrt(8))
console.log(parseInt(Math.random() * 100))