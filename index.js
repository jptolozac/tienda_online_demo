import { Header } from "./componentes/header/header.js"
import { cargarCategorias } from "./servicios/carga/cargarCategorias.js"
import { cargarDatos } from "./servicios/carga/cargarDatos.js"
import { eliminarCookie, getCookie, setCookie } from "./servicios/cookies/cookies.js"
import { masVendido } from "./servicios/visual/masVendido.js"
import { popular } from "./servicios/visual/popular.js"

window.addEventListener('load', async() => {
    const header = document.querySelector('header')
    header.innerHTML = Header()
    const {productos, categorias} = await cargarDatos()
    
    masVendido(productos)
    popular(productos)
    cargarCategorias({ categorias })

    setCookie("prueba", 85)
    setCookie("prueba", 21)
    setCookie("prueba2", 12)
    eliminarCookie("prueba2")
    console.log(parseInt(getCookie("prueba")))
})

function cerrarSesion(){
    console.log("holii")
}