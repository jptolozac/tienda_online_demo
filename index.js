import { Categorias } from "./componentes/categorias.js"
import { Header } from "./componentes/header.js"
import { Producto } from "./componentes/producto.js"
import { SeccionProductos } from "./componentes/seccionProductos.js"
const root = document.getElementById('main')
const productos = []
let categorias = []

const MasVendido = (productos) => {
    const ordenar = productos
    for(let i=0; i<ordenar.length; i++){
        for(let j=i; j<ordenar.length; j++){
            if(ordenar[i].puntuacion.cantidad < ordenar[j].puntuacion.cantidad){
                const aux = ordenar[i]
                ordenar[i] = ordenar[j]
                ordenar[j] = aux
            }
        }
    }
    CargarProductos({ 
        datos: ordenar.slice(0, 12),
        titulo: "Lo más vendido"
    })
}


const Popular = (ordenPorPuntuacion) => {
    for(let i=0; i<ordenPorPuntuacion.length; i++){
        for(let j=i; j<ordenPorPuntuacion.length; j++){
            if(ordenPorPuntuacion[i].puntuacion.estrellas < ordenPorPuntuacion[j].puntuacion.estrellas){
                const aux = ordenPorPuntuacion[i]
                ordenPorPuntuacion[i] = ordenPorPuntuacion[j]
                ordenPorPuntuacion[j] = aux
            }
        }
    }
    CargarProductos({ 
        datos: ordenPorPuntuacion.slice(0, 12),
        titulo: "Lo mejor"
    })
}

const CargarProductos = ({datos, titulo}) => {
    const cargaProductos = datos
    console.log(cargaProductos)
    
    const seccionProductos = SeccionProductos({
        children: cargaProductos.map((item) => Producto(item)),
        titulo: titulo
    })
    
    root.appendChild(seccionProductos)
}

const CargarCategorias = ({categorias}) => {
    console.log(categorias)
    const elementoCategorias = Categorias({ categorias })
    console.log(elementoCategorias)
    root.appendChild(elementoCategorias)
}

window.addEventListener('load', async() => {
    const header = document.querySelector('header')
    header.innerHTML = Header()
    let peticion = await fetch('https://fakestoreapi.com/products')
    let datos = await peticion.json()
    console.log(datos)
    const ordenPorPuntuacion = []
    for(const producto of datos){
        const cargaProducto = {
            id: producto.id,
            img: producto.image,
            titulo: producto.title,
            categoria: producto.category,
            descripcion: producto.description,
            puntuacion: {
                estrellas: producto.rating.rate,
                cantidad: producto.rating.count,
            },
            precio: producto.price
        }
        console.log(cargaProducto)
        productos.push(cargaProducto)
    }
    
    MasVendido(productos)
    Popular(productos)

    peticion = await fetch('https://fakestoreapi.com/products/categories')
    datos = await peticion.json()
    categorias = datos
    console.log(productos)
    console.log(categorias)
    window.localStorage.setItem("productos", JSON.stringify(productos))
    window.localStorage.setItem("categorias", JSON.stringify(categorias))

    CargarCategorias({ categorias })
})
