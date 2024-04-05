import { Producto } from "../../componentes/productos/producto.js"
import { SeccionProductos } from "../../componentes/productos/seccionProductos.js"

export const cargarProductos = ({datos, titulo}) => {
    const root = document.getElementById('main')
    const cargaProductos = datos
    
    const seccionProductos = SeccionProductos({
        children: cargaProductos.map((item) => Producto(item)),
        titulo: titulo
    })
    
    root.appendChild(seccionProductos)
}