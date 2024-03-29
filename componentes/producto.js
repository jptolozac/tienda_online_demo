/* const puntuacion = (puntaje) => {

}
 */
export const Producto = ({img, titulo, categoria, descripcion, precio, puntuacion}) => {
    const producto = document.createElement('div')
    producto.classList.add('producto')

    const imagen = document.createElement('img')
    imagen.classList.add('item-imagen')
    imagen.src = img
    imagen.alt = "Imagen generada por la api de fakestore"

    const itemCategoria = document.createElement('p')
    itemCategoria.classList.add('item-categoria')
    itemCategoria.innerText = categoria

    const itemTitulo = document.createElement('h2')
    itemTitulo.classList.add('item-titulo')
    itemTitulo.innerText = titulo

    const itemDescripcion = document.createElement('p')
    itemDescripcion.classList.add('item-descripcion')
    itemDescripcion.innerText = descripcion

    const itemPrecio = document.createElement('p')
    itemPrecio.classList.add('item-precio')
    itemPrecio.innerText = precio

    const contPuntuacion = document.createElement('p')
    contPuntuacion.classList.add('cont-puntuacion')

    const itemPuntuacionVacia = document.createElement('span')
    itemPuntuacionVacia.classList.add("item-puntuacion-vacia")
    itemPuntuacionVacia.innerHTML = "☆☆☆☆☆"

    const itemPuntuacion = document.createElement('span')
    itemPuntuacion.classList.add('item-puntuacion')
    itemPuntuacion.setAttribute("puntuacion", puntuacion.estrellas)
    itemPuntuacion.innerText = "★★★★★"
    itemPuntuacion.style.width = `${parseFloat(puntuacion.estrellas) * 20}%`
    itemPuntuacionVacia.appendChild(itemPuntuacion)
    contPuntuacion.appendChild(itemPuntuacionVacia)

    producto.appendChild(imagen)
    producto.appendChild(itemCategoria)
    producto.appendChild(itemTitulo)
    producto.appendChild(itemDescripcion)
    producto.appendChild(itemPrecio)
    producto.appendChild(contPuntuacion)

    return producto
}