const input = document.querySelector('.input')
const btnAgregar = document.querySelector('.btn-agregar')
const lista = document.querySelector('.lista')
const form = document.querySelector('.formulario')


export function agregar() {
    form.addEventListener("submit", (e)=> {
        e.preventDefault()
        const valorQueIngresa = input.value
        console.log(valorQueIngresa);
    
            if (valorQueIngresa) {
                const li = document.createElement("li")
                li.classList.add("lista-compras")
                li.innerText = valorQueIngresa
                lista.appendChild(li)
    
                const button = document.createElement("button")
    
                button.innerText = "Eliminar"
                li.appendChild(button)
                button.classList.add("eliminar")
                input.value = " "
    
        }else{
            lista.innerHTML = "No hay valor ingresado"
        }
        
    })
    
}

export function eliminar(){
    lista.addEventListener("click", (e)=> {

        console.log(e.target);
        if (e.target.classList.contains("eliminar")) {
            e.target.parentElement.remove()
        }
    })
    
    
    
}