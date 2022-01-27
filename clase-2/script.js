/*
let numero = parseInt(prompt("Ingrese un numero")) //parseFloat()

//numero / 2 == 2.5
//numero % 2 == 1
console.log(numero)
if(isNaN(numero)) {
    console.log("Ingrese un numero valido")
} else {
    if(numero % 2 == 0) {
        console.log("Numero par")
    } else {
        console.log("Numero Impar")
    }
}



let texto = prompt("Ingrese hola para saludar!")

if(texto == "hola") {
    alert("Hola que tal!")
} else {
    alert("Por favor salude!")
}

*/
/*
let numero1 = 10;
let numero2 = 20;

let mayorA10 = (numero1 >= 10) // > < >= <=
let menorA20 = (numero2 <= 20) 


if(mayorA10 && menorA20) {
    console.log("V")
}

if(numero1 == 8 && numero2 == 5) {
    console.log("Numeros multiplos de 10")
} else {
    console.log("Puede ser que no sean multiplos")
}


    numero1     &&      numero2
      V         V           V
      V         F           F
      F         F           V
      F         F           F



if(numero1 == 7 || numero2 == 8) {
    console.log("V")
} else {
    console.log("F")
}
/*
    numero1   ||      numero2
    V         V           V
    V         V           F
    F         V          V
    F         F          F



if (0 === "0") {
    console.log("V")
} else {
    console.log("F")
}


if (0 !== "0") { //0 == "0"
    console.log("V")
} else {
    console.log("F")
}


let palabra = "Holaaaaa"

if(!(palabra === "Hola")) { // !==
    console.log("Me saludaste")
} else {
    console.log("No me saludaste")
}

/*
    !   palabra
    F    V
    V     F


let numero1 = parseFloat(prompt("Ingrese un numero"))

if(!(isNaN(numero1))) {
    console.log("Numero valido")
} else {
    console.log("Numero invalido")
    
}

*/

// 1- 5 Desaprobado
// 6 o 7 Aprobado Bien
//8 o 9 Aprobado Muy Bien
//10 Aprobado Excelente

let nota = parseInt(prompt("Ingrese la nota del alumno"))

if(nota >= 1 && nota <=5 ) {
    console.log("El/la alumno/a esta desaprobado/a")
} else if(nota === 6 || nota === 7) { 
    console.log("El/la alumno/a esta aprobado/a con nota de Bien")
} else if(nota === 8 || nota === 9) {
    console.log("El/la alumno/a esta aprobado/a con nota de Muy Bien")
} else if(nota === 10) {
    console.log("El/la alumno/a esta aprobado/a con nota de Excelente")
} else {
    console.log("Nota no valida")
}