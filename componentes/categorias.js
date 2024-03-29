export const Categorias = ({categorias}) => {
    const contenedor = document.createElement('div')
    contenedor.classList.add('contenedor')
    console.log(categorias)

    const tituloSeccion = document.createElement('span')
    tituloSeccion.classList.add('titulo-seccion')
    tituloSeccion.innerText = "Categorias"

    const seccionCategorias = document.createElement('seccion-categorias')
    seccionCategorias.classList.add("seccion-categorias")

    for(const categoria of categorias){
        const anchor = document.createElement('a')
        anchor.href = `./resultados.html?categoria=${categoria}`
        const elementoCategoria = document.createElement('div')
        elementoCategoria.classList.add("categoria")
        const contCategoria = document.createElement('h3')
        contCategoria.innerHTML = categoria
        elementoCategoria.appendChild(contCategoria)
        anchor.appendChild(elementoCategoria)
        seccionCategorias.appendChild(anchor)
    }

    contenedor.appendChild(tituloSeccion)
    contenedor.appendChild(seccionCategorias)

    return contenedor
}