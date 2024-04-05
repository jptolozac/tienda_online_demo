import { Header } from "./componentes/header.js"
import { cargarCategorias } from "./servicios/carga/cargarCategorias.js"
import { cargarDatos } from "./servicios/carga/cargarDatos.js"
import { masVendido } from "./servicios/visual/masVendido.js"
import { popular } from "./servicios/visual/popular.js"
const root = document.getElementById('main')
const productos = []
let categorias = []

window.addEventListener('load', async() => {
    const header = document.querySelector('header')
    header.innerHTML = Header()
    const {productos, categorias} = await cargarDatos()
    
    masVendido(productos)
    popular(productos)
    cargarCategorias({ categorias })
})
