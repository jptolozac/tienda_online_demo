export const SeccionProductos = ({children, titulo}) => {
    const contenedor = document.createElement('div')
    contenedor.classList.add('contenedor')

    const tituloSeccion = document.createElement('span')
    tituloSeccion.classList.add('titulo-seccion')
    tituloSeccion.innerText = titulo

    const seccionProductos = document.createElement('section')
    seccionProductos.classList.add('seccion-productos')
    children.forEach(element => {
        seccionProductos.appendChild(element)
    });

    contenedor.appendChild(tituloSeccion)
    contenedor.appendChild(seccionProductos)

    return contenedor
}
