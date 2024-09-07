function cargarYMostarUsuarios(){

    // si hago esto de entrada localStorage.setItem('usuarios', JSON.stringify([])
    //cada vez que cargue la pagina me va a mostrar un array vacio
    //por eso esta condicion sirve para que no me de error si el local storage esta vacio

    if(localStorage.getItem("usuarios") === null) {

        //si se cumple la condicion, guardo en el local storage un array vacio
        localStorage.setItem('usuarios', JSON.stringify([]))
    }

    //obtengo los usuarios del local storage convertidos de string(texto) a objeto(codigo js)
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    console.log(usuarios)
    //recorro el array y muestro los usuarios
    for(let usuario of usuarios){
        mostrarUsuarios(usuario)
    }

}
