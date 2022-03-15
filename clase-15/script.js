let divDolar = document.getElementById('divDolar')

fetch("https://criptoya.com/api/dolar")
.then(objPromesa => objPromesa.json())
.then(data => {
    let {blue, oficial, ccl, mep, ccb, solidario} = data

    divDolar.innerHTML = `
        <p> Oficial: $${oficial} </p>
        <p> Solidario: $${solidario} </p>
        <p> MEP: $${mep} </p>
        <p> CCL: $${ccl} </p>
        <p> CCB: $${ccb} </p>
        <p> Blue: $${blue} </p>
    `
})


fetch('./json/clientes.json')
.then(response => response.json())
.then(clientes => {
    console.log(clientes)
})