export async function cargarDatos() {
    const productos = []
    let categorias = []
    let peticion = await fetch('https://fakestoreapi.com/products')
    let datos = await peticion.json()
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
        productos.push(cargaProducto)
    }
    
    peticion = await fetch('https://fakestoreapi.com/products/categories')
    datos = await peticion.json()
    categorias = datos
    window.localStorage.setItem("productos", JSON.stringify(productos))
    window.localStorage.setItem("categorias", JSON.stringify(categorias))

    return { productos, categorias }
}