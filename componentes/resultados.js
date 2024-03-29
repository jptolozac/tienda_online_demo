import { Header } from "./header.js"
import { Producto } from "./producto.js"

const header = document.querySelector('header')
header.innerHTML = Header()

const contenedor = document.getElementById('contenedor')
let productos = JSON.parse(window.localStorage.getItem("productos"))
const categorias = JSON.parse(window.localStorage.getItem("categorias"))
console.log(productos)
console.log(categorias)

const url = new URL(location.href)
console.log(url)
const peticionCategoria = url.searchParams.get('categoria')
const peticionBusqueda = url.searchParams.get('busqueda')

if(peticionCategoria){
    productos = productos.filter(producto => producto.categoria === peticionCategoria)
}
if(peticionBusqueda){
    productos = productos.filter(producto => 
        producto.descripcion.toUpperCase().includes(peticionBusqueda.toUpperCase()) 
        || producto.titulo.toUpperCase().includes(peticionBusqueda.toUpperCase()) 
        || producto.categoria.toUpperCase().includes(peticionBusqueda.toUpperCase())
        )
}

for(const producto of productos)
    contenedor.appendChild(Producto(producto))