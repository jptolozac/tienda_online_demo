import { getCookie } from "../servicios/cookies/cookies.js"
import { Header } from "./header/header.js"
import { Producto } from "./productos/producto.js"

const ENDPOINT_CARRITO_USUARIO = "https://fakestoreapi.com/carts/user"

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
const peticionCarrito = url.searchParams.get('carrito')

if(peticionCategoria){
    productos = productos.filter(producto => producto.categoria === peticionCategoria)
    aparecerProductos()
}
if(peticionBusqueda){
    productos = productos.filter(producto => 
        producto.descripcion.toUpperCase().includes(peticionBusqueda.toUpperCase()) 
        || producto.titulo.toUpperCase().includes(peticionBusqueda.toUpperCase()) 
        || producto.categoria.toUpperCase().includes(peticionBusqueda.toUpperCase())
        )
    aparecerProductos()
}
if(peticionCarrito){

    fetch(`${ENDPOINT_CARRITO_USUARIO}/${getCookie("usuarioLogueado")}`)
        .then(respuesta => respuesta.json())
        .then(datos => {
            const resultado = Array.from(datos)
                .map(carrito => carrito.products)
            const productosComprados = []
            for(const carrito of resultado){
                for(const producto of carrito){
                    productosComprados.push(producto.productId)
                }
            }
            productos = productos.filter(productos => productosComprados.includes(productos.id))
            aparecerProductos()
        })
        .catch(err => console.log(err))
}
function aparecerProductos(){
    for(const producto of productos)
        contenedor.appendChild(Producto(producto))
}