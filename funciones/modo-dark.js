const btnModo = document.querySelector(".cambiar-modo")
btnModo.innerText = "Cambiar a Light"

export function modoDark(){
    btnModo.addEventListener("click", (e)=>{
    localStorage.getItem("modo")
    document.body.classList.toggle("modo-true")
        btnModo.innerText = "Cambiar a Dark"
        
        if (document.body.classList.contains("modo-true")) {
            localStorage.setItem("modo", "Dark")
            btnModo.innerText = "Cambiar a Light"
        }else{
            localStorage.setItem("modo", "Light")
        }
    })
}

export function guardarModo() {

    if (localStorage.getItem("modo") === "Dark" ){
        localStorage.setItem("modo", "Dark")
        document.body.classList.add("modo-true")
    }else{
        localStorage.setItem("modo", "Light")
        localStorage.getItem("modo", "Light")
        document.body.classList.remove("modo-true")
    }
    
}