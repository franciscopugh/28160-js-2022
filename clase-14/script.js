/*console.log("Inicio")

setTimeout(() => {
    console.log("Esperando")
}, 1000)

console.log("Fin")

for(let i of "Hola") {
    setTimeout(() => {
        console.log(i)
    },5000)
}

for(let j of "Mundo") {
    setTimeout(() => {
        console.log(j)
    },5000)
}


const probarPromesa = (val) => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            val ? res("Promesa afirmativa") :  rej("Promesa no cumplida")
        },4000)
    
    })
}

console.log(probarPromesa(true))
console.log(probarPromesa(false))*/


let array = [
    {nombre: "Francisco", apellido: "Pugh"},
    {nombre: "German", apellido: "Cuevas"},
    {nombre: "Lucila", apellido: "Fortunato"},
]

const pedirInfo = () => {
    return new Promise((res,rej) => {
       // setTimeout(() => {
            res(array)
        //},3000)
    })
}

console.log(pedirInfo())