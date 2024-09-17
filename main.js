
import { agregar } from "./funciones/listaCompras.js"
import { eliminar } from "./funciones/listaCompras.js"
import { modoDark } from "./funciones/modo-dark.js"
import { guardarModo } from "./funciones/modo-dark.js"


const formulario = document.querySelector('.form')

const nombreInput = document.querySelector('.nombre')
const emailInput = document.querySelector('.email')
const botonAgregar = document.querySelector('.boton')

const tabla = document.querySelector('.tabla-body')
// const modoDark = document.querySelector('button')

modoDark()
guardarModo()


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

agregar()
eliminar()


// const parrafo = document.querySelector('p')


// const saludarUsuario = document.querySelector('.saludar-usuario') // etiqueta section
// const parrafoNombre = document.querySelector('.parrafo-nombre') // etiqueta P

// const ingresarNombre = document.querySelector('.ingresar-nombre') // etiqueta form
// const Input = document.querySelector('.ingrese-su-nombre') // input
// const botonRegistro = document.querySelector('.saludar')

// ingresarNombre.addEventListener('submit', function (e) {
//     e.preventDefault()
    
//     const valor = Input.value
//     saludarUsuario.innerText = valor 
    
//     console.log('funciona', valor);
//     // ingresarNombre.reset()
    
// })


