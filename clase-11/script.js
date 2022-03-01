class User {
    constructor(user, email, password) {
        this.user = user;
        this.email = email;
        this.password = password;
    }

    loguearse() {
        console.log(`${this.user} esta logueado correctamente`)
    }
}

let arrayUsuarios = []

if(localStorage.getItem('usuarios')) {
    arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'))
} else {
    localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
}

let formulario = document.getElementById("idForm")
let botonMostrarUsuarios = document.getElementById("botonMostrarUsers")
let divUsers = document.getElementById("divUsuarios")

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let user = document.getElementById('idUser').value
    let email = document.getElementById('idEmail').value
    let password = document.getElementById('idPassword').value

    /*
    let datForm = new FormData(e.target)
    console.log(datForm.get('user'))
    console.log(datForm.get('email'))
    console.log(datForm.get('password'))*/

    if(!arrayUsuarios.some(usuarioEnArray => usuarioEnArray.email == email)) {
        const usuario = new User(user, email, password)
        arrayUsuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
        formulario.reset()
    }
    
})

botonMostrarUsuarios.addEventListener('click', () => {
    arrayUsuarios.forEach((usuarioEnArray, indice)  => {
        divUsers.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Usuario ${usuarioEnArray.user}</h5>
                    <p class="card-text">Email: ${usuarioEnArray.email}</p>
                    <button id="boton${indice}" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        
        `
    })
})