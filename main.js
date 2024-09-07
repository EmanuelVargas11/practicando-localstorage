const formulario = document.querySelector('form')

const nombreInput = document.querySelector('.nombre')
const emailInput = document.querySelector('.email')
const botonAgregar = document.querySelector('.boton')

const tabla = document.querySelector('.tabla-body')


cargarYMostrarUsuarios()

formulario.addEventListener('submit', function(event) {
    event.preventDefault()

    const usuarioObj = {
        nombre: nombreInput.value,
        email: emailInput.value
    }
    mostrarUsuarios(usuarioObj)
    guardarUsuarior(usuarioObj)

    formulario.reset()
})

function mostrarUsuarios(array) {
tabla.innerHTML +=   `
                <tr>
                    <td>${array.nombre}</td>
                    <td>${array.email}</td>
                </tr>
                    `    
}

function guardarUsuarior(array) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    usuarios.push(array)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function cargarYMostrarUsuarios() {

    if (localStorage.getItem("usuarios") === null) {
            localStorage.setItem('usuarios', JSON.stringify([]))
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    // console.log(usuarios);
    
    for (let usuario of usuarios) {
        mostrarUsuarios(usuario)
        // console.log(usuario);
        
        
    }

}