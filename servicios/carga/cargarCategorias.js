import { Categorias } from "../../componentes/categorias.js"

export const cargarCategorias = ({categorias}) => {
    const root = document.getElementById('main')
    const elementoCategorias = Categorias({ categorias })
    root.appendChild(elementoCategorias)
}