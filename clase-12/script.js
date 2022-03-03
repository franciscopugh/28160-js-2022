/*let edad = 18

if(edad >= 18) {
    alert("Puede entrar")
} else {
    alert("No puede entrar")
}*/


//edad >= 18 ? alert("Puede entrar") : alert("No puede entrar")
/*
if(null ?? null) {
    console.log("V")
} else {
    console.log("F")
}

const persona1 =undefined

alert(persona1?.name || "Propiedad no encontrada")
*/
class Persona {
    constructor(nombre, apellido, edad, licencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.license = licencia;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 38, {tipo: "B2", fechaVencimiento: "14/02/2024"})
const persona2 = new Persona("Fran", "Pugh", 37, {tipo: "B2", fechaVencimiento: "14/02/2024"})
const persona3 = new Persona("Pepe", "Perez", 39, {tipo: "B2", fechaVencimiento: "14/02/2024"})
const persona4 = new Persona("Luciana", "Luz", 40, {tipo: "B2", fechaVencimiento: "14/02/2024"})
const persona5 = {
    ...persona1,
    domicilio: "Calle Falsa 123"
}
let personas = [persona1, persona2, persona3, persona4, persona5] 

console.log(...personas)


let [,b,c,,[aa,bb]] = personas
console.log(b)
console.log(c)
console.log(bb)

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
//let { license : licenciaDeConducir} = persona1
//console.log(licenciaDeConducir)
/*

function desestructurame ({license : licenciaDeConducir}) {
    //let {license} = objPersona
    console.log(licenciaDeConducir)
}

desestructurame(persona1)


window.addEventListener('click', ({x,y}) => {

})


/*
const persona = {nombre: "Fran", apellido: "Pugh", edad: 39}
let {nombre, apellido, edad} = persona

console.log(nombre)
console.log(apellido)
console.log(edad)

function suma(...numeros) {
    //return numeros;
    return numeros.reduce((num1, num2) => num1 + num2,0)
}

let array = suma(5,10, 30, 20,10)
console.log(array)*/