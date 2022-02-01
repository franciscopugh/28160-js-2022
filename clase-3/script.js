/*
for(let i = 0; i<6; i++) { // i = i + 1
    console.log(i)
    
    if(i == 3) {
        console.log("Hola")
    }
}



let acumulador = 0;
let cant = 10;
for(let i = 0; i<cant; i++) { // 0 1 2 3 4 5 6 7 8 9
    let nota = parseInt(prompt("Ingrese una nota"))
    acumulador += nota // acumulador = acumulador + nota
}

console.log(`El promedio de las notas es ${acumulador / cant}`)

for(let i=0; i < 10; i++) {
    console.log(i)
    if(i == 6) {
        console.log("adios")
        continue
    }
}

let acumulador = 0;
let deseaContinuar = false;
let cantidadNotas = 0;

while(deseaContinuar) { //deseaContinuar == true
    let nota = parseInt(prompt("Ingrese la nota"))
    acumulador += nota
    let confirmacion = prompt("¿Desea ingresar otra nota?")
    cantidadNotas++
    if(confirmacion == "no") {
        deseaContinuar = false
    }
}

console.log(`El promedio de las notas es ${acumulador / cantidadNotas}`)


let acumulador = 0;
let cantidadNotas = 0;
let confirmacion;

do {
    let nota = parseInt(prompt("Ingrese la nota"))
    acumulador += nota
    confirmacion = prompt("¿Desea ingresar otra nota?")
    cantidadNotas++
} while(confirmacion != "no")

console.log(`El promedio de las notas es ${acumulador / cantidadNotas}`)*/


let numero1;
let numero2;
let operador;
do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operador = prompt("Ingrese una operacion matematica (+,-,/,*)")
}while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operador == "/"))
        
switch(operador) {
    case "+":
        console.log(numero1 + numero2)
        break
    case "-":
        console.log(numero1 - numero2)
        break
    case "*":
        console.log(numero1 * numero2)
        break
    case "/":
        console.log(numero1 / numero2)
        break
    default:
        console.log("Operador no valido")
        break
}